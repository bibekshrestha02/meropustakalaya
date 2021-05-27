import React from 'react';
import style from './style.module.scss';
import Logo from '../../assets/LogoAsset';
import { IoHeart } from 'react-icons/io5';
export default function Footer() {
  return (
    <div className={style.footer}>
      <Logo color='white' />
      <span className={style.text}>Verson 1.0.0</span>
      <span className={style.text}>
        designed and programmed with <IoHeart color='yellow' /> by Bibek
        Shrestha
      </span>
    </div>
  );
}
