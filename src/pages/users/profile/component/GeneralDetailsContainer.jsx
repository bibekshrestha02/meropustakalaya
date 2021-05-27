import React from 'react';
import CardContainer from '../../../../component/bookComponent/BooksDetailsCardContainer';
import MyTextInput from '../../../../component/MyInputsComponent/MyTextInput';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import style from './style.module.scss';
import Button from '../../../../assets/ButtonAsset';
export default function GeneralDetailsContainer({
  submitHandler,
  user,
  forgetPasswordHandler,
}) {
  return (
    <CardContainer title='General'>
      <Formik
        initialValues={{
          name: user.name,
          email: user.email,
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Name must be entered'),
          email: Yup.string().email().required('Email must be entered'),
        })}
        onSubmit={submitHandler}>
        {({ isSubmitting }) => {
          return (
            <Form className={style.formContainer}>
              <MyTextInput
                name='name'
                placeholder='Enter your name'
                type='text'
              />
              <MyTextInput
                disabled
                name='email'
                placeholder='Enter your Email'
                type='email'
              />
              <div>
                <Button
                  isSubmitting={isSubmitting}
                  title='Save change'
                  fontSize='10px'
                  type='submit'
                />
                <span
                  className={style.changePassword}
                  onClick={() => forgetPasswordHandler(false)}>
                  Change password
                </span>
              </div>
            </Form>
          );
        }}
      </Formik>
    </CardContainer>
  );
}
