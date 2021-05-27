import React from 'react';
import style from './style.module.scss';
export default function TitleValueComponent({ title, value }) {
  return (
    <div className={style.titleValueContainer}>
      <span>{title} : </span>
      <span>{value}</span>
    </div>
  );
}
