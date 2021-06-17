import React from 'react';
import style from '../style/style.module.scss';
import CardTemplete from '../../../templetes/CardTemplete';
import CategoryComponent from './components/CategoryComponent';
import { useFetchApi } from '../../../customHooks/useFetchApi';
import Axios from '../../../utils/Axios';
import FetchApiTemplete from '../../../templetes/FetchApiTemplete';
export default function BooksPage() {
  const isComponentMount = React.useRef(true);
  const getBooks = () => {
    return Axios.get('/books');
  };
  const getCategory = () => {
    return Axios.get('/categories');
  };
  const { data, setData, error, loading, setError } = useFetchApi(
    [getBooks(), getCategory()],
    isComponentMount
  );
  const filterSubmitHandler = async (filters) => {
    try {
      let filter = filters.category;
      let sort = filters.sort;
      sort = sort && sort.join();
      filter = filter && filter.join();
      const res = await Axios.get(`/books?category=${filter}&sort=${sort}`);
      const { data } = res.data;
      setData((e) => [data, e[1]]);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <FetchApiTemplete loading={loading} error={error}>
      <div className={style.bookPage}>
        <CategoryComponent
          category={data[1]}
          filterSubmitHandler={filterSubmitHandler}
        />
        <div>
          <CardTemplete title='Books' data={data[0]} />
        </div>
      </div>
    </FetchApiTemplete>
  );
}
