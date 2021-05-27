import React from 'react';
import style from './style.module.scss';

export default function DropDownComponent({ title, children }) {
  return (
    <div className={style.dropDownContainer}>
      <div className={style.title}>{title}</div>
      <div className={style.dropdownContent}>{children}</div>
    </div>
  );
}
