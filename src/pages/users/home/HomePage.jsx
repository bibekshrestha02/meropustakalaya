import React, { useRef } from 'react';
import CardTemplete from '../../../templetes/CardTemplete';
import style from '../style/style.module.scss';
import Title from '../../../assets/TitleAsset';
import Carousel from './component/HomeCorausal';
import Axios from '../../../utils/Axios';
import { useFetchApi } from '../../../customHooks/useFetchApi';
import FetchApiTemplete from '../../../templetes/FetchApiTemplete';
export default function HomePage() {
  const getCarousel = () => {
    return Axios.get('/carousels');
  };
  const isComponentMounted = useRef(true);
  const getBooks = () => {
    return Axios.get('/books/shows/');
  };
  const { data, loading, error } = useFetchApi(
    [getCarousel(), getBooks()],
    isComponentMounted
  );
  return (
    <FetchApiTemplete loading={loading} error={error}>
      <Carousel carousel={data[0]} />
      <div className={style.homePage}>
        <Title
          title='Checkout Our New Releases, Top Rated Books'
          fontSize='35px'
        />
        <CardTemplete title='New Arrivals Books' data={data[1]} />
      </div>
    </FetchApiTemplete>
  );
}
