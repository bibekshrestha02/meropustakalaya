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
  const resendHandler = async (setFieldValue, setSubmitting) => {
    setSubmitting(true);
    try {
      setFieldValue('otp', '');
      await Axios.post('auths/email/sendToken', { email: email });
      alert('OTP code send ');
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
      if (!error.response) {
        return alert('Something went wrong. Check your internet connection');
      }
      let { data } = error.response;
      let { status } = error.response;
      if (status === 400 && data.type === 'email') {
        alert(data.message);
      } else if (status === 400 && data.type === 'user') {
        alert(data.message);
      } else {
        alert('Something went wrong');
      }
      history.push('/meropustakalaya/access/login');
    }
  };
  const submitHandler = async (values, { setFieldError }) => {
    try {
      await Axios.get(`/auths/email/verifyEmail/${email}/${values.otp}`);
      alert('You are successfully signup. Login to your account');
      history.push('/meropustakalaya/access/login');
    } catch (error) {
      let { status } = error.response;
      let { data } = error.response;
      if (status === 400 && data.type === 'email') {
        alert(data.message);
        history.push('/meropustakalaya/access/login');
      } else if (status === 400 && data.type === 'otp') {
        setFieldError('otp', data.message);
      }
    }
  };
  return (
    <div className={style.container}>
      <Logo fontSize='40px' />
      <Title title='Verify Your Email' fontWeight='bold' fontSize='25px' />
      <Formik
        initialValues={{ otp: '' }}
        validationSchema={Yup.object({
          otp: Yup.string()
            .required('Enter your OTP')
            .matches(/^[0-9]+$/, 'Must be only digits')
            .min(4, 'Enter Your OTP code')
            .max(4, 'Enter Your OTP code'),
        })}
        onSubmit={submitHandler}>
        {({ values, errors, setFieldValue, isSubmitting, setSubmitting }) => (
          <Form className={style.formContainer}>
            <Title
              title={`An 4-digit code has been send to ${email}`}
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
              Didn't recive the code?{' '}
              <span onClick={() => resendHandler(setFieldValue, setSubmitting)}>
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
