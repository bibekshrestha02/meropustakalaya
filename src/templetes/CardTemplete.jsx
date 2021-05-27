import React from 'react';
import style from './templete.module.scss';
import BookCard from '../component/bookComponent/BookCard';
import LoadingComponent from '../component/models/LoadingComponent';
export default function CardTemplete({ data, sm, isLoading, toogler }) {
  return (
    <div className={sm ? style.cardContainer_sm : style.cardContainer}>
      {isLoading ? (
        <LoadingComponent />
      ) : data ? (
        data.length < 1 ? (
          <span>No Book Data</span>
        ) : (
          data.map((book) => {
            return (
              <BookCard
                key={book._id}
                title={book.name}
                auther={book.autherName}
                imageURL={book.photo}
                rating={book.rating}
                id={book._id}
                small={sm}
                toogler={toogler}
              />
            );
          })
        )
      ) : null}
    </div>
  );
}
