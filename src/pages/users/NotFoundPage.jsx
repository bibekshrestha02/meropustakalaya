import React from 'react';
import MainTempletes from '../../templetes/MainTempletes';
import style from './style/style.module.scss';
import { IoThunderstormOutline } from 'react-icons/io5';
export default function NotFoundPage() {
  return (
    <MainTempletes noCarusal>
      <div className={style.notFoundPageContainer}>
        <IoThunderstormOutline className={style.icon} />
        <span>404 Error</span>
        <span>Sorry, The Page Not Found</span>
      </div>
    </MainTempletes>
  );
}
