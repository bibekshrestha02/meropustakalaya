import React from 'react';
import ReactLoading from 'react-loader-spinner';
import style from './style.module.scss';
export default function LoadingComponent() {
  return (
    <div className={style.loadingComponent}>
      <ReactLoading type='ThreeDots' color='red' />
    </div>
  );
}
