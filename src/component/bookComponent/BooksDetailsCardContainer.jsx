import React from 'react';
import style from './style.module.scss';
export default function BooksDetailsCardTemplete({ title, children }) {
  return (
    <div className={style.bookDetailCardTempleteContainer}>
      <div className={style.title}>{title}</div>
      <div className={style.content}>{children}</div>
    </div>
  );
}
