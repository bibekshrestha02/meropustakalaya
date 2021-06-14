import React, { useState } from 'react';
import style from './style.module.scss';
import Rating from '../../assets/RatingAsset';
import { Link } from 'react-router-dom';
import Bookmark from '../../assets/BookmarkAsset';
import { useSelector } from 'react-redux';
import { GoBook } from 'react-icons/go';
export default function BookCard({
  title,
  imageURL,
  auther,
  rating,
  id,
  small,
  toogler,
}) {
  const [isBookLoad, setBookLoad] = useState(false);
  let isSave = useSelector((state) =>
    state.auth.savedBooks.some((e) => e === id)
  );
  const imageLoadingHandler = () => {
    setBookLoad(true);
  };
  return (
    <div className={small ? style.bookContainer_sm : style.bookContainer}>
      <Link to={`/book/${id}`} style={{ textDecoration: 'none' }}>
        <div className={style.imageContainer}>
          <div
            style={{ display: isBookLoad && 'none' }}
            className={style.imageLoadingContainer}>
            {!isBookLoad && <GoBook color='gray' size={100} />}
          </div>
          <img
            src={imageURL}
            alt='img'
            className={style.image}
            loading='lazy'
            onLoad={imageLoadingHandler}
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
