import React from 'react';
import CardTemplete from '../../templetes/CardTemplete';
import style from './style/style.module.scss';
import GetFetchPageTemplete from '../../templetes/GetFetchPageTemplete';

export default function HomePage() {
  return (
    <GetFetchPageTemplete urls={['/users/saves/']}>
      {({ data, setData }) => {
        const bookMarkToogler = (id) => {
          let res = data[0];
          let newState = res.filter((e) => e._id !== id);
          setData([newState]);
        };
        return (
          <div className={style.saveContainer}>
            <CardTemplete data={data[0]} sm toogler={bookMarkToogler} />
          </div>
        );
      }}
    </GetFetchPageTemplete>
  );
}
