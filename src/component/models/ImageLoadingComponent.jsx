import React from 'react';
import { GoBook } from 'react-icons/go';
import style from './style.module.scss';
export default function ImageLoadigCo({ isImageLoaded }) {
  return isImageLoaded ? null : (
    <div className={style.imageLoadingContainer}>
      <GoBook color='gray' size={100} />
    </div>
  );
}
