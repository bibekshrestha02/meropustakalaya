import React from 'react';
import CardTemplete from '../../../templetes/CardTemplete';
import style from '../style/style.module.scss';
import Title from '../../../assets/TitleAsset';
import Carousel from './component/HomeCorausal';
import GetFetchPageTemplete from '../../../templetes/GetFetchPageTemplete';
export default function HomePage() {
  return (
    <GetFetchPageTemplete urls={['/carousels', '/books/shows/']}>
      {({ data }) => {
        return (
          <>
            <Carousel carousel={data[0]} />
            <div className={style.homePage}>
              <Title
                title='Checkout Our New Releases, Top Rated Books'
                fontSize='35px'
              />
              <CardTemplete title='New Arrivals Books' data={data[1]} />
            </div>
          </>
        );
      }}
    </GetFetchPageTemplete>
  );
}
