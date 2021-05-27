import React from 'react';
import { Form, Formik } from 'formik';
import MyTextAreaInput from '../../../../component/MyInputsComponent/MyTextAreaInput';
import * as Yup from 'yup';
import MyRating from '../../../../assets/RatingAsset';
import style from './style.module.scss';
import Button from '../../../../assets/ButtonAsset';
import BooksDetailsCardContainer from '../../../../component/bookComponent/BooksDetailsCardContainer';
import { useSelector } from 'react-redux';
export default function ReviewCard({ reviewHandler }) {
  const isLoged = useSelector((state) => state.auth.isLogin);
  let form = <span>Login to add your reviews</span>;
  if (isLoged) {
    form = (
      <Formik
        initialValues={{
          rating: 0,
          review: '',
        }}
        validationSchema={Yup.object({
          review: Yup.string().required('Write Your review'),
          rating: Yup.number().required(),
        })}
        onSubmit={reviewHandler}>
        {({ setFieldValue, errors, values, isSubmitting }) => {
          return (
            <Form className={style.reviewCardContainer}>
              <div className={style.ratingContainer}>
                <span>your rating*</span>
                <MyRating
                  isEdit={true}
                  size={20}
                  name='rating'
                  value={values.rating}
                  onChange={(e) => {
                    setFieldValue('rating', e);
                  }}
                />
                {errors.rating && (
                  <span className={style.errorText}>*{errors.rating}</span>
                )}
              </div>
              <MyTextAreaInput
                name='review'
                placeholder='Write your comment  '
              />
              <div>
                <Button
                  title='Submit'
                  type='submit'
                  fontSize='18px'
                  isSubmitting={isSubmitting}
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    );
  }
  return (
    <BooksDetailsCardContainer title='Write your review'>
      {form}
    </BooksDetailsCardContainer>
  );
}
