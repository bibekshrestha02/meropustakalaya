import React from 'react';
import style from './style.module.scss';
export default function BookImageMinComponent({ imgUrl }) {
  return (
    <div className={style.photoContainer}>
      <img
        src={`http://localhost:4000/${imgUrl}`}
        alt='bookImg'
        className={style.image}
      />
    </div>
  );
}
