import React from 'react';
import style from './style.module.scss';
import Button from '../../../../assets/ButtonAsset';
import { useHistory } from 'react-router-dom';
const Corausal = ({ carousel }) => {
  const history = useHistory();
  return (
    <div className={style.corausalContainer}>
      <div className={style.content}>
        <div className={style.childContent1}>
          <span className={style.subHeader}>{carousel.name}</span>
          <span className={style.header}>{carousel.subDetail}</span>
          <span className={style.text}>{carousel.detail}</span>
          <Button
            title='subsribe now!'
            backgroundColor='white'
            textColor=' #ef5354'
            onClickFn={() => history.push('/meropustakalaya/membership')}
          />
        </div>
        <div className={style.childContent2}>
          <div className={style.priceContainer}>
            <div>{carousel.priceLabel}</div>
            <div>{carousel.price}</div>
          </div>
          {/* <div className={style.imageContainer}>
            <img src='./photo/work.png' alt='works' />
          </div> */}
        </div>
      </div>
      <div className={style.svgwraper}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          viewBox='0 0 600 290'>
          <path
            fill='#ef5354'
            // fillopacity='1'
            d='M0,224L80,240C160,256,320,288,480,282.7C640,277,800,235,960,224C1120,213,1280,235,1360,245.3L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'></path>
        </svg>
      </div>
    </div>
  );
};

export default Corausal;
