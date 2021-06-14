import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import AdminWaperContainer from '../../../component/adminComponent/AdminWaperContainer';
import style from '../style/adminStyle.module.scss';
import MySelectInput from '../../../component/MyInputsComponent/MySelectInput';
import MyTextAreaInput from '../../../component/MyInputsComponent/MyTextAreaInput';
import Button from '../../../assets/ButtonAsset';
import MyTextInput from '../../../component/MyInputsComponent/MyTextInput';
import Axios from '../../../utils/Axios';
import { useHistory } from 'react-router-dom';
import ImageContainer from './component/ImageContainer';
import FileContainer from './component/FileContainer';
import GetFetchPageTemplete from '../../../templetes/GetFetchPageTemplete';
const validationSchema = Yup.object({
  name: Yup.string().min(5).max(80).required('Enter Book Title'),
  autherName: Yup.string().min(2).max(80).required('Enter Auther name'),
  pages: Yup.number().min(2).max(5000).required('Enter Book Pages'),
  description: Yup.string()
    .min(10)
    .max(2000)
    .required('Enter Book Description'),
  categoryId: Yup.string().required('Select Book Category'),
  bookImage: Yup.mixed().required('Select Book Photo'),
  bookFile: Yup.mixed().required('Select Book PDF'),
});
export default function CreateBookPage() {
  const { push } = useHistory();
  const initialValues = {
    name: '',
    autherName: '',
    pages: '',
    description: '',
    categoryId: '',
    bookImage: null,
    bookFile: null,
  };

  const [image, setImage] = useState();

  const imageHanlder = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  const submitHandler = async (values) => {
    try {
      const {
        bookImage,
        bookFile,
        name,
        pages,
        autherName,
        description,
        categoryId,
      } = values;
      const formData = new FormData();
      formData.append('bookImage', bookImage);
      formData.append('bookFile', bookFile);
      formData.append('name', name);
      formData.append('pages', pages);
      formData.append('autherName', autherName);
      formData.append('description', description);
      formData.append('categoryId', categoryId.toString());
      await Axios.post('/books/', formData);
      alert('Successfully Created');
      push('/admin/book');
    } catch (error) {
      let { status } = error.response;
      let { data } = error.response;
      if (status === 500) {
        alert('Something went wrong.Try later');
        push('/admin/book');
      }
      if (status === 400) {
        alert(data.message);
      }
    }
  };
  return (
    <GetFetchPageTemplete urls={['/categories/']}>
      {({ data }) => {
        const category = data[0];
        return (
          <div className={style.createBookPageContainer}>
            <AdminWaperContainer title='Add Book'>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={submitHandler}>
                {({ values, handleChange, setFieldValue, isSubmitting }) => (
                  <Form>
                    <div className={style.fileContainer}>
                      <ImageContainer
                        values={values}
                        image={image}
                        imageHanlder={imageHanlder}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                      />

                      <FileContainer
                        values={values}
                        setFieldValue={setFieldValue}
                      />
                    </div>
                    <div className={style.formContainer}>
                      <MyTextInput
                        label='Book Title'
                        placeholder='Enter Book Title'
                        name='name'
                        type='text'
                      />
                      <MyTextInput
                        label='Author Name'
                        name='autherName'
                        placeholder='Enter Book Author Name'
                        type='name'
                      />
                      <MyTextInput
                        label='Book Pages'
                        name='pages'
                        placeholder='Enter Book Pages'
                        type='number'
                      />
                      <MyTextAreaInput
                        label='Write Book Description '
                        name='description'
                        placeholder='Enter Book Descriptions'
                      />
                      <MySelectInput
                        label='Select Book Category'
                        name='categoryId'>
                        <option value=''>select book category</option>
                        {category.map((e) => {
                          return (
                            <option key={e._id} value={e._id}>
                              {e.title}
                            </option>
                          );
                        })}
                      </MySelectInput>
                      <Button
                        title='Add Book'
                        type='submit'
                        isSubmitting={isSubmitting}
                      />
                    </div>
                  </Form>
                )}
              </Formik>
            </AdminWaperContainer>
          </div>
        );
      }}
    </GetFetchPageTemplete>
  );
}
