import React, { useState } from 'react';
import { IoCamera } from 'react-icons/io5';
import style from './style.module.scss';
import ImageLoadingComponent from '../../../../component/models/ImageLoadingComponent';
export default function ImageContainer({ image }) {
  const [isImageLoad, setImageLoad] = useState(false);
  const imageLoadingHandler = () => {
    setImageLoad(true);
  };
  return (
    <div style={{ display: 'grid' }}>
      <div className={style.imageContainer}>
        {image ? (
          <>
            <ImageLoadingComponent isImageLoaded={isImageLoad} />
            <img
              src={image}
              alt='bookimg'
              onLoad={imageLoadingHandler}
              onError={imageLoadingHandler}
            />
          </>
        ) : (
          <IoCamera className={style.icon} />
        )}
      </div>
    </div>
  );
}
