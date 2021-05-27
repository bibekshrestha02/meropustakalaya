import React from 'react';
import { useParams } from 'react-router-dom';
import style from '../style/style.module.scss';
import GetFetchPageTemplete from '../../../templetes/GetFetchPageTemplete';
import DetailComponent from './components/DetailComponent';
import ReviewsComponent from './components/ReviewsComponent';
import UserReviewComponent from './components/UserReviewComponent';
export default function BookDetailPage() {
  const { id } = useParams();
  return (
    <GetFetchPageTemplete urls={[`/books/${id}`]}>
      {({ data, setData }) => {
        return (
          <div className={style.bookDetailContainer}>
            <DetailComponent data={data[0]} />
            <UserReviewComponent data={data[0]} setData={setData} />
            <ReviewsComponent data={data[0]} />
          </div>
        );
      }}
    </GetFetchPageTemplete>
  );
}
