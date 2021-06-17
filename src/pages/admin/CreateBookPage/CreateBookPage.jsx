import React from 'react';
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
import FetchApiTemplete from '../../../templetes/FetchApiTemplete';
import { useFetchApi } from '../../../customHooks/useFetchApi';
export default function CreateBookPage() {
  const history = useHistory();
  let book;
  if (history.location.state) {
    book = history.location.state.book;
  }

  const validationSchema = Yup.object({
    name: Yup.string().min(5).max(80).required('Enter Book Title'),
    autherName: Yup.string().min(2).max(80).required('Enter Auther name'),
    pages: Yup.number().min(2).max(5000).required('Enter Book Pages'),
    description: Yup.string()
      .min(10)
      .max(2000)
      .required('Enter Book Description'),
    categoryId: Yup.string().required('Select Book Category'),
    photo: Yup.string().required('Select Book Photo'),
    file: Yup.string().required('Select Book PDF'),
  });
  const isComponentMount = React.useRef(true);
  const getCategory = () => {
    return Axios.get('/categories/');
  };
  const { data, loading, error } = useFetchApi(
    [getCategory()],
    isComponentMount
  );

  const submitHandler = async (values, action) => {
    try {
      if (book) {
        await Axios.put(`/books/${book._id}`, values);
        alert('Successfully!');
        history.goBack();
      } else {
        await Axios.post('/books/', values);
        alert('Successfully!');
        action.resetForm();
      }
    } catch (error) {
      let { status } = error.response;
      let { data } = error.response;
      if (status === 500) {
        alert('Something went wrong.Try later');
      }
      if (status === 400) {
        alert(data.message);
      }
    }
  };
  let category = !loading && !error ? data[0] : [];
  const initialValues = {
    name: book ? book.name : '',
    autherName: book ? book.autherName : '',
    pages: book ? book.pages : '',
    description: book ? book.description : '',
    categoryId: book
      ? !loading && !error
        ? category.find((e) => e.name === book.category)._id
        : ''
      : '',
    photo: book ? book.photo : '',
    file: book ? book.file : '',
  };
  return (
    <FetchApiTemplete loading={loading} error={error}>
      <div className={style.createBookPageContainer}>
        <AdminWaperContainer title='Add Book'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submitHandler}>
            {({ values, isSubmitting }) => (
              <Form>
                <div className={style.fileContainer}>
                  <ImageContainer image={values.photo} />
                  <MyTextInput
                    placeholder='Enter Book Image URl'
                    name='photo'
                    type='text'
                  />
                  <MyTextInput
                    placeholder='Enter Book File URL'
                    name='file'
                    type='text'
                  />
                  {values.file && (
                    <a href={values.file} target='_blank' rel='noreferrer'>
                      View Book File
                    </a>
                  )}
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
                  <MySelectInput label='Select Book Category' name='categoryId'>
                    <option value=''>Select Book Category</option>
                    {category.map((e) => {
                      return (
                        <option key={e._id} value={e._id}>
                          {e.title}
                        </option>
                      );
                    })}
                  </MySelectInput>
                  <Button
                    title={book ? 'Update Book' : 'Add Book'}
                    type='submit'
                    isSubmitting={isSubmitting}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </AdminWaperContainer>
      </div>
    </FetchApiTemplete>
  );
}
