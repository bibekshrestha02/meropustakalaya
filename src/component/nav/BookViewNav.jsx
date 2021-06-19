import React from 'react';
import style from './style.module.scss';
import Logo from '../../assets/LogoAsset';
export default function BookViewNav({ pageNo }) {
  return (
    <div className={style.bookViewNavContainer}>
      <Logo fontSize='30px' color='#ef5354' />
    </div>
  );
}
