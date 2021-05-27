import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MainTempletes from '../../templetes/MainTempletes';
import AdminWaperContainer from '../../component/adminComponent/AdminWaperContainer';
import style from './style/adminStyle.module.scss';
import Button from '../../assets/ButtonAsset';
import MyTextInput from '../../component/MyInputsComponent/MyTextInput';
import MySelectInput from '../../component/MyInputsComponent/MySelectInput';
import Axios from '../../utils/Axios';
export default function CreateUserPage() {
  const role = [
    {
      id: 1,
      title: 'User',
      value: 'user',
    },
    {
      id: 2,
      title: 'Admin',
      value: 'admin',
    },
  ];
  const submitHanlder = async (
    values,
    { setFieldError, setSubmitting, resetForm }
  ) => {
    try {
      setSubmitting(true);
      await Axios.post('/users/create', values);
      alert('User successfully created!');
      resetForm();
      setSubmitting(false);
    } catch (error) {
      if (error.message === 'Network Error') {
        alert('Network Error, Try again');
      } else if (error.response.status === 400) {
        let { data } = error.response;
        setFieldError(data.name, data.message);
      }
      setSubmitting(false);
    }
  };
  return (
    <MainTempletes noCarusal>
      <div className={style.createUserContainer}>
        <AdminWaperContainer title='Create Account'>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              role: '',
            }}
            validationSchema={Yup.object({
              name: Yup.string().min(4).max(50).required('Enter Name'),
              email: Yup.string().email().required('Enter Email'),
              password: Yup.string()
                .min(4, 'Password must be at least 6 characters')
                .max(400)
                .required('Enter password'),
              role: Yup.string()
                .oneOf(role.map((e) => e.value))
                .required('Select Account Type'),
            })}
            onSubmit={submitHanlder}>
            {({ isSubmitting }) => {
              return (
                <Form>
                  <MyTextInput
                    name='name'
                    type='text'
                    placeholder='Enter Name'
                  />
                  <MyTextInput
                    name='email'
                    type='email'
                    placeholder='Enter Email'
                  />
                  <MyTextInput
                    name='password'
                    type='password'
                    placeholder='Enter Password'
                  />
                  <MySelectInput name='role'>
                    <option value=''>Account Role</option>
                    {role.map((e) => {
                      return (
                        <option value={e.value} key={e.id}>
                          {e.title}
                        </option>
                      );
                    })}
                  </MySelectInput>
                  <Button
                    type='submit'
                    title='create account'
                    isSubmitting={isSubmitting}
                  />
                </Form>
              );
            }}
          </Formik>
        </AdminWaperContainer>
      </div>
    </MainTempletes>
  );
}
