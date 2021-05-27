import React from 'react';
import ModalAdmin from '../../../../component/adminComponent/ModalAdmin';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../../component/MyInputsComponent/MyTextInput';
import Button from '../../../../assets/ButtonAsset';
export default function CreatePackageModelComponent({
  modalHandler,
  createPackageHandler,
}) {
  return (
    <ModalAdmin closeHanlder={modalHandler} title='Add Package'>
      <Formik
        initialValues={{
          name: '',
          price: '',
          validityDay: '',
          description: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().min(4).max(50).required('Enter Name'),
          price: Yup.number().min(2).max(100000).required('Enter Price'),
          validityDay: Yup.number().min(1).required('Enter Day Limit'),
          description: Yup.string().min(5).required('Enter Description'),
        })}
        onSubmit={createPackageHandler}>
        {({ isSubmitting }) => {
          return (
            <Form>
              <MyTextInput name='name' type='name' placeholder='Enter Name' />
              <MyTextInput
                name='price'
                type='number'
                placeholder='Enter Price'
              />
              <MyTextInput
                name='validityDay'
                type='number'
                placeholder='Enter Days Limit'
              />
              <MyTextInput
                name='description'
                type='name'
                placeholder='Enter Descriptions'
              />

              <Button
                type='submit'
                title='Create Package'
                isSubmitting={isSubmitting}
              />
            </Form>
          );
        }}
      </Formik>
    </ModalAdmin>
  );
}
