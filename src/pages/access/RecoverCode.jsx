import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../assets/ButtonAsset';

import Logo from '../../assets/LogoAsset';
import style from './style/verifyEmailStyle.module.scss';
import Title from '../../assets/TitleAsset';
import { Formik, Form, ErrorMessage } from 'formik';
import OtpInput from 'react-otp-input';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import Axios from '../../utils/Axios';
export default function VerifyEmail() {
  const { email } = useParams();
  const history = useHistory();
  const resendHanlder = async (setSubmitting, handleReset) => {
    try {
      setSubmitting(true);
      const res = await Axios.post('/auths/resetPassword/sendOtp', { email });
      if (res.status === 200 && res.data.status === 'sucess') {
        alert('OTP send SuccessFully.');
      }
      setSubmitting(false);
      handleReset();
    } catch (error) {
      const { data } = error.response;
      const { status } = error.response;
      if (status === 400 && !data.email) {
        alert(data.message);
        setSubmitting(false);

        history.push('/access/login');
      } else {
        alert('Something went very wrong please try again');
        setSubmitting(false);

        history.push('/access/login');
      }
    }
  };
  const submitHandler = async (values, { setSubmitting, setFieldError }) => {
    setSubmitting(true);
    try {
      const res = await Axios.get(
        `/auths/resetPassword/forgetVerifyCode/${email}/${values.otp}`
      );
      setSubmitting(false);
      if (res.status === 200 && res.data.status === 'success') {
        setSubmitting(false);
        history.push(`/access/recover/password/${email}/${values.otp}`);
      }
    } catch (error) {
      let { status } = error.response;
      let { data } = error.response;
      if (status === 400 && data.email === 'invalid') {
        alert('Invalid Email, Try again');
        history.push('/access/login');
      } else if (status === 400 && data.otp === 'invalid') {
        setFieldError('otp', data.message);
      } else if (status === 400 && data.time === 'expired') {
        setFieldError('otp', data.message);
      } else {
        alert('Something went very wrong please try again');
        setSubmitting(false);

        history.push('/access/login');
      }
    }
  };
  return (
    <div className={style.container}>
      <Logo fontSize='40px' />
      <Title title='Enter 4 digit OTP code' fontWeight='bold' fontSize='25px' />
      <Formik
        initialValues={{ otp: '' }}
        validationSchema={Yup.object({
          otp: Yup.string()
            .matches(/^[0-9]+$/, 'Must be only digits')
            .min(4, 'Enter Your OTP code')
            .max(4, 'Enter Your OTP code')
            .required('Enter your OTP'),
        })}
        onSubmit={submitHandler}>
        {({
          values,
          errors,
          setFieldValue,
          isSubmitting,
          handleReset,
          setSubmitting,
        }) => (
          <Form className={style.formContainer}>
            <Title
              title={`An 4-digit code has been send to ${email}.Enter code to reset your password.OTP will expires in 10 min`}
              fontSize='16px'
            />
            <Title title='Enter your code' fontWeight='bold' />
            <OtpInput
              id='otp'
              value={values.otp}
              onChange={(e) => {
                setFieldValue('otp', e);
              }}
              hasErrored={errors.otp ? true : false}
              errorStyle={style.error}
              containerStyle={style.inputContainer}
              inputStyle={style.input}
              isInputNum
              numInputs={4}
              focusStyle={style.focusStyle}
              separator={<span>-</span>}
            />
            <ErrorMessage
              className={style.errorMessage}
              name='otp'
              component='span'
            />
            <span className={style.resendContainer}>
              Didn't recive the code?
              <span onClick={() => resendHanlder(setSubmitting, handleReset)}>
                Resend
              </span>
            </span>
            <Button title='Verify' type='submit' isSubmitting={isSubmitting} />
          </Form>
        )}
      </Formik>
    </div>
  );
}
