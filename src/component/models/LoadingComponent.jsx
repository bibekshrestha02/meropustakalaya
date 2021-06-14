import React from 'react';
import style from './style.module.scss';
import { GoBook } from 'react-icons/go';
export default function LoadingComponent() {
  return (
    <div className={style.loadingComponent}>
      <GoBook size={50} color='#ef5354' style={{ opacity: 0.5 }} />
      <h1>Loading</h1>
    </div>
  );
}
