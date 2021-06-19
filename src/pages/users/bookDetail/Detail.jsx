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
import { useSelector } from 'react-redux';
export default function BookDetailPage({ navigation }) {
  const { id } = useParams();
  const { push, location } = useHistory();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const subscriptionDetail = useSelector(
    (state) => state.auth.subscriptionDetail
  );
  const isSubscribed = !subscriptionDetail
    ? false
    : Date.now() <= new Date(subscriptionDetail.expires_at);
  const getBookDetails = () => {
    return Axios.get(`/books/${id}`);
  };
  const isComponentMounted = React.useRef(true);
  const { data, loading, error, setData } = useFetchApi(
    [getBookDetails()],
    isComponentMounted
  );

  const navigateBookFile = () => {
    if (!isLogin) {
      push({
        pathname: '/access/login',
        state: {
          path: location.pathname,
          message: 'Login To Get Access',
        },
      });
      return;
    }

    if (!isSubscribed) {
      push({
        pathname: '/membership',
        state: {
          path: location.pathname,
          message: 'get membership to get access',
        },
      });
      return;
    }
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
