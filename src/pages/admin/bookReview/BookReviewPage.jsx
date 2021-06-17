import React, { useState } from 'react';
import AdminWaperContainer from '../../../component/adminComponent/AdminWaperContainer';
import style from '../style/adminStyle.module.scss';
import Axios from '../../../utils/Axios';
import ReviewCardComponent from './component/ReviewCardComponent';
import FetchApiTemplete from '../../../templetes/FetchApiTemplete';
import { useFetchApi } from '../../../customHooks/useFetchApi';
export default function BookReviewPage() {
  const [isSubmitDeleting, setSubmitDeleting] = useState(false);
  const isComponentMount = React.useRef(true);
  const getReview = () => {
    return Axios.get('/reviews/');
  };
  const { data, loading, error, setData } = useFetchApi(
    [getReview()],
    isComponentMount
  );
  let bookReviews = !loading && !error ? data[0] : [];
  const deleteHandler = async (rId, bId) => {
    try {
      setSubmitDeleting(true);

      await Axios.delete(`/reviews/${rId}`);
      let bReviews = [...bookReviews];
      let bIndex = bReviews.findIndex((e) => e._id === bId);
      bReviews[bIndex].reviews = bReviews[bIndex].reviews.filter(
        (e) => e._id !== rId
      );
      setData([bReviews]);
      setSubmitDeleting(false);
    } catch (error) {
      alert('Something went wrong. Try Again');
      setSubmitDeleting(false);
    }
  };
  return (
    <FetchApiTemplete loading={loading} error={error}>
      <div className={style.bookReviewPageContainer}>
        <AdminWaperContainer title='Book Review'>
          {bookReviews.length < 1 ? (
            <span>No Book Review</span>
          ) : (
            bookReviews.map((e) => {
              return (
                <ReviewCardComponent
                  key={e._id}
                  data={e}
                  deleteHandler={deleteHandler}
                  isDeleteSubmiting={isSubmitDeleting}
                />
              );
            })
          )}
        </AdminWaperContainer>
      </div>
    </FetchApiTemplete>
  );
}
