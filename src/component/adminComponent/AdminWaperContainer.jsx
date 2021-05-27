import React from 'react';
import style from './style.module.scss';
import Title from '../../assets/TitleAsset';
export default function BookTemplet({
  title,
  children,
  buttonHandler,
  ButtonIcon,
  tooleTip,
}) {
  return (
    <div className={style.bookTempletContainer}>
      <div className={style.header}>
        <Title title={title} fontSize='20px' fontWeight='bold' />
        {ButtonIcon && (
          <div className={style.buttonContainer} onClick={buttonHandler}>
            <abbr title={tooleTip}>{<ButtonIcon color='red' />}</abbr>
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
