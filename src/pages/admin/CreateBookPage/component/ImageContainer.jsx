import React from 'react';
import { IoCamera } from 'react-icons/io5';
import style from './style.module.scss';
import { ErrorMessage } from 'formik';

export default function ImageContainer({
  values,
  image,
  imageHanlder,
  setFieldValue,
}) {
  return (
    <div style={{ display: 'grid' }}>
      <div className={style.imageContainer}>
        {values.bookImage ? (
          <img src={image} alt='bookimg' />
        ) : (
          <IoCamera className={style.icon} />
        )}
      </div>
      <input
        label='Upload Book Photo'
        name='bookImage'
        type='file'
        id='photo'
        accept='image/x-png,image/gif,image/jpeg'
        onChange={(e) => {
          imageHanlder(e);
          setFieldValue('bookImage', e.target.files[0]);
        }}
      />
      <ErrorMessage name='bookImage' />
    </div>
  );
}
