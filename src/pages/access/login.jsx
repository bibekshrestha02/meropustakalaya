import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import style from './style/loginPageStyle.module.scss';
import Title from '../../assets/TitleAsset';
import MyTextInput from '../../component/MyInputsComponent/MyTextInput';
import Button from '../../assets/ButtonAsset';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/LogoAsset';
import { login } from '../../store/action/authAction';
import { useDispatch } from 'react-redux';
export default function Auth() {
  const history = useHistory();
  const dispatch = useDispatch();
  const submitHanlder = async (values, { setSubmitting, setFieldError }) => {
    try {
      await dispatch(login(values.email, values.password));
      setSubmitting(false);
      history.push(history.location.state ? history.location.state.path : '/');
    } catch (error) {
      setSubmitting(false);

      if (!error.response) {
        return alert('Something went wrong. Check your internet connection');
      }
      let status = error.response.status;
      let data = error.response.data;

      if (status === 400 && data.validation === 'field') {
        setFieldError(data.field, data.message);
      }

      if (status === 400 && data.isVerfied === false) {
        history.push(`/access/user/verification/${values.email}`);
      }
      if (status === 500) {
        alert('Something went wrong,Please try again');
      }
    }
  };
  return (
    <div className={style.container}>
      <Logo fontSize='40px' />

      <div className={style.loginContainer}>
        <Title title='Login' fontSize='25px' fontWeight='bold' />
        <span style={{ color: 'red' }}>
          {history.location.state && '*' + history.location.state.message}
        </span>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string().email().required('Enter your email'),
            password: Yup.string()
              .min(4)
              .max(100)
              .required('Enter your password'),
          })}
          onSubmit={submitHanlder}>
          {({ isSubmitting }) => {
            return (
              <Form>
                <MyTextInput
                  placeholder='Enter your email'
                  name='email'
                  type='email'
                />
                <MyTextInput
                  placeholder='Enter your password'
                  name='password'
                  type='password'
                />
                <span
                  className={style.link}
                  onClick={() =>
                    !isSubmitting && history.push('/access/recover/identify')
                  }>
                  Forget password?
                </span>
                <Button
                  title='Signin'
                  type='submit'
                  isSubmitting={isSubmitting}
                />
                <span
                  className={style.link}
                  onClick={() => {
                    !isSubmitting && history.push('/access/signup');
                  }}>
                  Create an account
                </span>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
