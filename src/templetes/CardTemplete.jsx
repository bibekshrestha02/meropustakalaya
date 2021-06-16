import React from 'react';
import style from './templete.module.scss';
import BookCard from '../component/bookComponent/BookCard';
export default function CardTemplete({ data, toogler }) {
  return (
    <div className={style.cardContainer}>
      {data.length < 1 ? (
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
              toogler={toogler}
            />
          );
        })
      )}
    </div>
  );
}
