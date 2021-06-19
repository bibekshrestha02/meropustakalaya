import React from 'react';
import style from './style.module.scss';
import { IoThunderstormOutline } from 'react-icons/io5';

export default function ErrorPageContainer({ status, message }) {
  let statusMessage;
  switch (status) {
    case 400:
      statusMessage = 'Bad Server Request';
      break;
    case 401:
      statusMessage = 'Permission Denied, Login to get access';
      break;
    case 404:
      statusMessage = 'Page not Found';
      break;
    case 500:
      statusMessage = 'Something went wrong. Check your internet connection';
      break;
    default:
      statusMessage = 'Something went wrong. Check your internet connection';
  }

  return (
    <div className={style.notFoundPageContainer}>
      <IoThunderstormOutline className={style.icon} />
      <span>{status ? status : 500} Status Error</span>
      <span className={style.message}>{message ? message : statusMessage}</span>
    </div>
  );
}
