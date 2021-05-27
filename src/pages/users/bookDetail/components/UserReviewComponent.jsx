import React from 'react';
import ReviewReadComponent from './ReviewReadComponent';
import ReviewWriteComponent from './ReviewWriteComponent';
import Axios from '../../../../utils/Axios';

export default function UserReviewComponent({ data, setData }) {
  const reviewHandler = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      const res = await Axios.post('/reviews/', {
        book: data._id,
        review: values.review,
        rating: values.rating,
      });
      const result = res.data.data;
      let newState = [
        {
          ...data,
          reviews: data.reviews.concat(result),
          userReview: result,
        },
      ];
      setData(newState);
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
      alert('Something went wrong try again');
    }
  };
  const deleteHandler = async (id, setSubmitting) => {
    try {
      const isOk = window.confirm('Are you sure?');
      if (!isOk) {
        return;
      }
      await Axios.delete(`/reviews/${id}`);
      setSubmitting(true);
      let newState = [
        {
          ...data,
          reviews: data.reviews.filter((e) => e._id !== id),
          userReview: null,
        },
      ];
      setData(newState);
    } catch (error) {
      alert('Something went wrong. Try Again');
    }
  };
  return data.userReview ? (
    <ReviewReadComponent
      review={data.userReview}
      deleteHandler={deleteHandler}
    />
  ) : (
    <ReviewWriteComponent reviewHandler={reviewHandler} />
  );
}
