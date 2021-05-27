import React from 'react';
import style from './style.module.scss';
import { IoClose } from 'react-icons/io5';
export default function ModalAdmin({ children, title, closeHanlder }) {
  return (
    <div className={style.modelAdminContainer}>
      <div className={style.modelContent}>
        <div className={style.modelHeader}>
          <span>{title}</span>
          <span className={style.close} onClick={closeHanlder}>
            <IoClose fontSize='18px' />
          </span>
        </div>
        <div className={style.chilrenContainer}>{children}</div>
      </div>
    </div>
  );
}
