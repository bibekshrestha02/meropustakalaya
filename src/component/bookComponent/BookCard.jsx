import React from 'react';
import style from './style.module.scss';
import Rating from '../../assets/RatingAsset';
import { Link } from 'react-router-dom';
import Bookmark from '../../assets/BookmarkAsset';
import { useSelector } from 'react-redux';
export default function BookCard({
  title,
  imageURL,
  auther,
  rating,
  id,
  small,
  toogler,
}) {
  let isSave = useSelector((state) =>
    state.auth.savedBooks.some((e) => e === id)
  );
  return (
    <div className={small ? style.bookContainer_sm : style.bookContainer}>
      <div className={style.imageContainer}>
        <img src={imageURL} alt='img' className={style.image} />
      </div>
      <div className={style.detailsContainer}>
        <div className={style.iconContainer}>
          <Rating value={rating} isEdit={false} size={small ? 16 : 25} />
          <Bookmark isSave={isSave} bookId={id} toogler={toogler} />
        </div>
        <Link to={`/book/${id}`} style={{ textDecoration: 'none' }}>
          <span className={style.title}>{title}</span>
        </Link>

        <span className={style.auther}>{auther}</span>
      </div>
    </div>
  );
}
