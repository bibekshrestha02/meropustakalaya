import React from 'react';
import style from './style.module.scss';
import Title from '../../../../assets/TitleAsset';
import Button from '../../../../assets/ButtonAsset';
export default function SelectedPriceContainer({
  selectedPrice,
  subscribeHandler,
  isSubmiting,
}) {
  return (
    <>
      <div className={style.priceContainer}>
        <Title title='Total Bill' fontSize='14px' />
        <Title title={`Rs.${selectedPrice}`} fontSize='18px' />
      </div>
      <Button
        title='Pay Now'
        onClickFn={subscribeHandler}
        isSubmitting={isSubmiting}
      />
    </>
  );
}
