import React from 'react';
import style from './style.module.scss';
export default function AdminDetailCard({ title, number, Icon }) {
  return (
    <div className={style.adminDetailCardContainer}>
      <div className={style.dataContainer}>
        <span className={style.icon}>
          <Icon />
        </span>
        <span className={style.title}>{title}</span>
        <span>{number}</span>
      </div>
    </div>
  );
}
