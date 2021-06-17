import React from 'react';
import { useParams } from 'react-router-dom';
import style from '../style/style.module.scss';
import DetailComponent from './components/DetailComponent';
import ReviewsComponent from './components/ReviewsComponent';
import UserReviewComponent from './components/UserReviewComponent';
import Axios from '../../../utils/Axios';
import { useHistory } from 'react-router-dom';
import { useFetchApi } from '../../../customHooks/useFetchApi';
import FetchApiTemplete from '../../../templetes/FetchApiTemplete';
export default function BookDetailPage() {
  const { id } = useParams();
  const { push } = useHistory();

  const getBookDetails = () => {
    return Axios.get(`/books/${id}`);
  };
  const isComponentMounted = React.useRef(true);
  const { data, loading, error, setData } = useFetchApi(
    [getBookDetails()],
    isComponentMounted
  );
  const navigateBookFile = () => {
    push(`/book/view/${id}`);
  };

  return (
    <FetchApiTemplete loading={loading} error={error}>
      <div className={style.bookDetailContainer}>
        <DetailComponent data={data[0]} navigateBookFile={navigateBookFile} />
        <UserReviewComponent data={data[0]} setData={setData} />
        <ReviewsComponent data={data[0]} />
      </div>
    </FetchApiTemplete>
  );
}
