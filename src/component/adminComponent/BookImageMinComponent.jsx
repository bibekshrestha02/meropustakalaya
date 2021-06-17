import React from 'react';
import style from './style.module.scss';
import ImageLoadingComponent from '../models/ImageLoadingComponent';
export default function BookImageMinComponent({ imgUrl }) {
  const [isLoaded, setLoad] = React.useState(false);
  const imageLoadingHandler = () => {
    setLoad(true);
  };
  return (
    <div className={style.photoContainer}>
      <ImageLoadingComponent isImageLoaded={isLoaded} size={30} />
      <img
        src={imgUrl}
        alt='bookImg'
        className={style.image}
        loading='lazy'
        onError={imageLoadingHandler}
        onLoad={imageLoadingHandler}
      />
    </div>
  );
}
