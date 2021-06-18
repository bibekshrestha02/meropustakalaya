import React from 'react';
import Button from '../../assets/ButtonAsset';

import Logo from '../../assets/LogoAsset';
import style from './style/identifyEmailStyle.module.scss';
import Title from '../../assets/TitleAsset';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import Axios from '../../utils/Axios';
import * as Yup from 'yup';
import MyTextInput from '../../component/MyInputsComponent/MyTextInput';
export default function IdentifyEmail() {
  const history = useHistory();
  const submitHandler = async (values, { setFieldError, setSubmitting }) => {
    try {
      const res = await Axios.get(`auths/resetPassword/email/${values.email}`);
      let email = res.data.data.email;
      setSubmitting(false);

      history.push(`/access/recover/initiate/${email}`);
    } catch (error) {
      setSubmitting(false);

      if (!error.response) {
        return alert('Something went wrong. Check your internet connection');
      }
      let status = error.response.status;
      let data = error.response.data;
      if (status === 400 && !data.email) {
        setFieldError('email', data.message);
      } else {
        alert('Something went very wrong please try later');
      }
    }
  };
  return (
    <div className={style.container}>
      <Logo fontSize='40px' />
      <Title title='Find Your Account' fontWeight='bold' fontSize='25px' />
      <Title
        title={`Enter your Email to search your account`}
        fontSize='20px'
      />
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string().email().required('Enter your email'),
        })}
        onSubmit={submitHandler}>
        {({ isSubmitting }) => {
          return (
            <Form>
              <MyTextInput name='email' placeholder='Enter your email' />
              <Button
                title='Search'
                type='submit'
                isSubmitting={isSubmitting}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
