import React from 'react';
import CardTemplete from '../../templetes/CardTemplete';
import style from './style/style.module.scss';
import Axios from '../../utils/Axios';
import { useFetchApi } from '../../customHooks/useFetchApi';
import FetchApiTemplete from '../../templetes/FetchApiTemplete';
export default function HomePage() {
  const getSaveBooks = () => {
    return Axios.get('/users/saves');
  };
  const isComponentMounted = React.useRef(true);
  const { data, loading, error, setData } = useFetchApi(
    [getSaveBooks()],
    isComponentMounted
  );
  const bookMarkToogler = (id) => {
    let res = data[0];
    let newState = res.filter((e) => e._id !== id);
    setData([newState]);
  };

  return (
    <FetchApiTemplete loading={loading} error={error}>
      <div className={style.saveContainer}>
        <CardTemplete data={data[0]} toogler={bookMarkToogler} />
      </div>
    </FetchApiTemplete>
  );
}
