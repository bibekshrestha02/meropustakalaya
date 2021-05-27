import React from 'react';
import style from './style/signupStyle.module.scss';
import Title from '../../assets/TitleAsset';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import MyTextInput from '../../component/MyInputsComponent/MyTextInput';
import Button from '../../assets/ButtonAsset';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/LogoAsset';
import Axios from '../../utils/Axios';

export default function Signup() {
  const history = useHistory();
  const submitHanlder = async (values, { setSubmitting, setFieldError }) => {
    try {
      await Axios.post('/auths/signUp', {
        email: values.email,
        password: values.password,
        name: values.name,
      });
      setSubmitting(false);

      history.push(`/access/user/verify/${values.email}`);
    } catch (error) {
      let status = error.response.status;
      if (!status) {
        alert('Something went very wrong, please try again');
      }
      if (status === 400) {
        setFieldError('email', 'Email already exits');
      }
      if (status === 500) {
        alert('Something went very wrong, please try again');
      }

      setSubmitting(false);
    }
  };

  return (
    <div className={style.container}>
      <Logo fontSize='40px' />
      <div className={style.signupContainer}>
        <Title title='Signup' fontSize='25px' fontWeight='bold' />
        <Formik
          initialValues={{
            email: '',
            password: '',
            name: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string().email().required('Enter email'),
            password: Yup.string().min(5).max(100).required('Enter password'),
            name: Yup.string().min(4).max(100).required('Enter name'),
          })}
          onSubmit={submitHanlder}>
          {({ isSubmitting }) => {
            return (
              <Form>
                <MyTextInput
                  placeholder='Enter your name'
                  name='name'
                  type='text'
                  disabled={isSubmitting}
                />

                <MyTextInput
                  placeholder='Enter your Email'
                  name='email'
                  type='email'
                  disabled={isSubmitting}
                />
                <MyTextInput
                  placeholder='Enter  password'
                  name='password'
                  type='password'
                  disabled={isSubmitting}
                />
                <Button
                  type='submit'
                  title='Submit'
                  isSubmitting={isSubmitting}
                />
                <span
                  className={style.link}
                  onClick={() =>
                    isSubmitting ? null : history.push('/access/login')
                  }>
                  login to your account
                </span>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
