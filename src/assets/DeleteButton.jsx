import React from 'react';
import style from './style.module.scss';
export default function DeleteButton({ handler, name }) {
  return (
    <div className={style.deleteButtonContainer}>
      <button onClick={handler}>{name ? name : 'Delete'}</button>
    </div>
  );
}
