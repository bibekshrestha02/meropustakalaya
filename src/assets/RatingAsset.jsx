import React from 'react';
import ReactStars from 'react-rating-stars-component';
import style from './style.module.scss';
export default function Star({ value, isEdit, size, ...props }) {
  return (
    <div style={{ display: 'flex' }}>
      <ReactStars
        count={5}
        size={size || 15}
        activeColor='#ef5354'
        edit={isEdit}
        value={value}
        className={style.rating}
        {...props}
      />
      <sub style={{ fontSize: 10 }}>{value}</sub>
    </div>
  );
}
