import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import Model from '../../../../component/adminComponent/ModalAdmin';
import MyTextInput from '../../../../component/MyInputsComponent/MyTextInput';
import ButtonAsset from '../../../../assets/ButtonAsset';
import style from './style.module.scss';
import * as Yup from 'yup';
import Axios from '../../../../utils/Axios';
export default function ForgetPasswordComponent({ forgetPasswordHanlder }) {
  const [isLoading, setLoading] = useState(false);
  const submitHandler = async (values, { setSubmitting, setFieldError }) => {
    try {
      setLoading(true);
      setSubmitting(true);
      await Axios.put('/auths/password/', values);
      setLoading(false);
      setSubmitting(false);
      forgetPasswordHanlder(false);

      alert('Password Change Sucessfully');
    } catch (error) {
      let status, name, message;
      if (error.response) {
        status = error.response.status;
        name = error.response.data.name;
        message = error.response.data.message;
      }
      if (status === 400 && name === 'password') {
        setFieldError('password', message);
      } else if (status === 400 && name === 'newPassword') {
        setFieldError('newPassword', message);
      } else {
        alert('Something went wrong, try later');
      }
      setLoading(false);
      setSubmitting(false);
    }
  };
  return (
    <Model
      closeHanlder={() => forgetPasswordHanlder(isLoading)}
      title='Change Password'>
      <div className={style.forgetPasswordContainer}>
        <Formik
          initialValues={{
            password: '',
            newPassword: '',
          }}
          validationSchema={Yup.object({
            password: Yup.string()
              .min(4)
              .max(100)
              .required('Enter Current Password'),
            newPassword: Yup.string()
              .min(4)
              .max(100)
              .required('Enter New Password'),
          })}
          onSubmit={submitHandler}>
          {({ isSubmitting }) => {
            return (
              <Form>
                <MyTextInput
                  type='password'
                  name='password'
                  placeholder='Current Password'
                />
                <MyTextInput
                  type='password'
                  name='newPassword'
                  placeholder='New Password'
                />
                <ButtonAsset
                  type='submit'
                  title='continue'
                  isSubmitting={isSubmitting}
                />
              </Form>
            );
          }}
        </Formik>
      </div>
    </Model>
  );
}
