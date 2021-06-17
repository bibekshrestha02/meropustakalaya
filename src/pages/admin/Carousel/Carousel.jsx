import React from 'react';
import MyTextInput from '../../../component/MyInputsComponent/MyTextInput';
import { Formik, Form } from 'formik';
import AdminWaperContainer from '../../../component/adminComponent/AdminWaperContainer';
import style from './style.module.scss';
import MyTextAreaInput from '../../../component/MyInputsComponent/MyTextAreaInput';
import ButtonAsset from '../../../assets/ButtonAsset';
import * as Yup from 'yup';
import Axios from '../../../utils/Axios';
import FetchApiTemplete from '../../../templetes/FetchApiTemplete';
import { useFetchApi } from '../../../customHooks/useFetchApi';
export default function Carousel() {
  const isComponentMount = React.useRef(true);
  const getCarousels = () => {
    return Axios.get('/carousels/');
  };
  const { data, loading, error, setData } = useFetchApi(
    [getCarousels()],
    isComponentMount
  );
  const res = !loading && !error ? data[0] : [];
  const submitHanlder = async (values, { setSubmitting }) => {
    try {
      const isOk = window.confirm('Are you Sure?');
      if (!isOk) {
        return;
      }
      setSubmitting(true);
      const res = await Axios.put('/carousels/', values);
      setData([res.data.data]);
      setSubmitting(false);
      alert('Successfully Changed');
    } catch (error) {
      setSubmitting(false);
      alert('Something went wrong try again');
    }
  };
  let initialValues = {
    name: res.name,
    subDetail: res.subDetail,
    detail: res.detail,
    price: res.price,
    priceLabel: res.priceLabel,
  };
  const validationSchema = Yup.object({
    name: Yup.string().min(4).max(100).required(),
    subDetail: Yup.string().min(4).max(100).required(),
    detail: Yup.string().min(4).max(500).required(),
    price: Yup.string().required(),
    priceLabel: Yup.string().required(),
  });
  return (
    <FetchApiTemplete loading={loading} error={error}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHanlder}>
        {({ isSubmitting }) => {
          return (
            <Form className={style.carouselContainer}>
              <AdminWaperContainer title='Carousel Details'>
                <MyTextInput
                  label='Name'
                  name='name'
                  placeholder='Carousel Name'
                />
                <MyTextAreaInput
                  label='Sub Detail'
                  name='subDetail'
                  placeholder='Carousel Sub Details'
                />
                <MyTextAreaInput
                  label='Detail'
                  name='detail'
                  placeholder='Carousel Details'
                />
                <MyTextInput
                  label='Price'
                  name='price'
                  placeholder='Carousel price'
                />
                <MyTextInput
                  label='Price Label'
                  name='priceLabel'
                  placeholder='Carousel Price Label'
                />
                <div>
                  <ButtonAsset
                    title='Save Changes'
                    isSubmitting={isSubmitting}
                    type='submit'
                  />
                </div>
              </AdminWaperContainer>
            </Form>
          );
        }}
      </Formik>
    </FetchApiTemplete>
  );
}
