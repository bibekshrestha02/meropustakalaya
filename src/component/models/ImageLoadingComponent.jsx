import React from 'react';
import { GoBook } from 'react-icons/go';
import style from './style.module.scss';
export default function ImageLoadigCo({ isImageLoaded, size }) {
  return isImageLoaded ? null : (
    <div className={style.imageLoadingContainer}>
      <GoBook color='gray' size={size ? size : 100} />
    </div>
  );
}
