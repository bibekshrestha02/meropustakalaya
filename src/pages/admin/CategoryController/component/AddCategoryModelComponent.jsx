import React from 'react';
import MyTextInput from '../../../../component/MyInputsComponent/MyTextInput';

import style from './style.module.scss';
import Button from '../../../../assets/ButtonAsset';

import ModalAdmin from '../../../../component/adminComponent/ModalAdmin';
import * as Yup from 'yup';

import { Formik, Form } from 'formik';
import Axios from '../../../../utils/Axios';
export default function CategoryModelComponent({ categoryHandler, setData }) {
  const submitHanlder = async (values, { setSubmitting, setFieldError }) => {
    setSubmitting(true);
    try {
      const res = await Axios.post('/categories/', {
        name: values.name,
        title: values.title,
      });
      setData((e) => {
        let newState = [...e[0], res.data.data];
        e[0] = newState;
        return e;
      });
      setSubmitting(false);
      categoryHandler();
    } catch (error) {
      let { status } = error.response;
      let { data } = error.response;
      if (status === 400 && data.type === 'name') {
        setFieldError('name', data.message);
      } else {
        alert('Something went wrong,Try later');
        categoryHandler();
      }
      setSubmitting(false);
    }
  };
  return (
    <ModalAdmin title='Add  Category' closeHanlder={categoryHandler}>
      <div className={style.addCategoryContainer}>
        <Formik
          initialValues={{
            name: '',
            title: '',
          }}
          validationSchema={Yup.object({
            name: Yup.string().required('Enter Category Name'),
            title: Yup.string().required('Enter Category Title'),
          })}
          onSubmit={submitHanlder}>
          {({ isSubmitting }) => {
            return (
              <Form>
                <MyTextInput
                  type='name'
                  name='name'
                  placeholder='Enter Unique Category Name'
                />
                <MyTextInput
                  type='name'
                  name='title'
                  placeholder='Enter Category title'
                />
                <Button
                  title='Add Category'
                  isOutline
                  type='submit'
                  isSubmitting={isSubmitting}
                />
              </Form>
            );
          }}
        </Formik>
      </div>
    </ModalAdmin>
  );
}
