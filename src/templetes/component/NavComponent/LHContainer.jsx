import React from 'react';
import style from './style.module.scss';
import Logo from '../../../assets/LogoAsset';
import { IoMenu } from 'react-icons/io5';
export default function LogoContainer({ navHanlder }) {
  return (
    <div className={style.logoContainer}>
      <div className={style.iconMenu}>
        <IoMenu onClick={navHanlder} />
      </div>
      <Logo fontSize='25px' />
    </div>
  );
}
