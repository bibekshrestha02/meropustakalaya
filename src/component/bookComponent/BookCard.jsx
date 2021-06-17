import React, { useState } from 'react';
import style from './style.module.scss';
import Rating from '../../assets/RatingAsset';
import { Link } from 'react-router-dom';
import Bookmark from '../../assets/BookmarkAsset';
import { useSelector } from 'react-redux';
import ImageLoadingComponent from '../models/ImageLoadingComponent';
export default function BookCard({
  title,
  imageURL,
  auther,
  rating,
  id,
  small,
  toogler,
}) {
  const [isImageLoaded, setImageLoad] = useState(false);
  let isSave = useSelector((state) =>
    state.auth.savedBooks.some((e) => e === id)
  );
  const imageLoadingHandler = () => {
    setImageLoad(true);
  };
  return (
    <div className={small ? style.bookContainer_sm : style.bookContainer}>
      <Link to={`/book/${id}`} style={{ textDecoration: 'none' }}>
        <div className={style.imageContainer}>
          <ImageLoadingComponent isImageLoaded={isImageLoaded} />
          <img
            src={imageURL}
            alt='fail to load img '
            className={style.image}
            loading='lazy'
            onLoad={imageLoadingHandler}
            onError={imageLoadingHandler}
          />
        </div>
      </Link>
      <div className={style.detailsContainer}>
        <Link to={`/book/${id}`} style={{ textDecoration: 'none' }}>
          <span className={style.title}>{title}</span>
          <span className={style.auther}>{auther}</span>
        </Link>
        <div className={style.iconContainer}>
          <Rating value={rating} isEdit={false} size={small ? 16 : 25} />
          <Bookmark isSave={isSave} bookId={id} toogler={toogler} />
        </div>
      </div>
    </div>
  );
}
