import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { useField } from 'formik';
import style from './styleInput.module.scss';
export default function Star({ value, isEdit, size, ...props }) {
  const [field, meta] = useField(props);
  return (
    <ReactStars
      {...field}
      {...props}
      count={5}
      size={size || 15}
      activeColor='#ef5354'
      edit={isEdit}
      className={style.rating}
    />
  );
}
