import React from 'react';
import MainNav from './component/Nav';
import style from './templete.module.scss';
import Footer from './component/Footer';
export default function MainTempletes({ children, noCarusal, noFooter }) {
  return (
    <div className={style.mainTempleteContainer}>
      <MainNav />

      <div className={style.children}>{children}</div>
      <Footer />
    </div>
  );
}
