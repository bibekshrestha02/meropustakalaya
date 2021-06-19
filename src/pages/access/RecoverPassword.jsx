import React from 'react';
import Button from '../../assets/ButtonAsset';

import Logo from '../../assets/LogoAsset';
import style from './style/identifyEmailStyle.module.scss';
import Title from '../../assets/TitleAsset';
import { useHistory, useParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import Axios from '../../utils/Axios';
import * as Yup from 'yup';
import MyTextInput from '../../component/MyInputsComponent/MyTextInput';
export default function RecoverPassword() {
  const history = useHistory();
  const { email, otp } = useParams();

  const submitHandler = async (values, { setFieldError, setSubmitting }) => {
    try {
      const res = await Axios.put('auths/resetPassword/reset', {
        newPassword: values.password,
        email,
        otp,
      });
      if (res.status === 200 && res.data.status === 'success') {
        alert('Your passwrod has changed Successfully.');
        history.push('/meropustakalaya/access/login');
      }
    } catch (error) {
      alert('Something went worng try again');
      history.push('/meropustakalaya/access/login');
    }
  };
  return (
    <div className={style.container}>
      <Logo fontSize='40px' />
      <Title title='Reset your password' fontWeight='bold' fontSize='25px' />
      <Title title={`Enter your New Password`} fontSize='20px' />
      <Formik
        initialValues={{
          password: '',
        }}
        validationSchema={Yup.object({
          password: Yup.string()
            .min(4)
            .max(200)
            .required('Enter your Password'),
        })}
        onSubmit={submitHandler}>
        {({ isSubmitting }) => {
          return (
            <Form>
              <MyTextInput
                name='password'
                type='password'
                placeholder='Enter Your Password'
              />
              <Button
                title='Continue'
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
