import React from 'react';
import style from './style.module.scss';
import { IoClose } from 'react-icons/io5';
export default function Model({ children, onClick }) {
  return (
    <div className={style.modelContainer}>
      <div className={style.closeIcon}>
        <IoClose
          color='black'
          fontSize='40px'
          style={{ cursor: 'pointer' }}
          onClick={onClick}
        />
      </div>
      {children}
    </div>
  );
}
