import React, { useState } from 'react';
import AdminWaperContainer from '../../../component/adminComponent/AdminWaperContainer';
import style from '../style/adminStyle.module.scss';
import Axios from '../../../utils/Axios';
import ReviewCardComponent from './component/ReviewCardComponent';
import GetFetchPageTemplete from '../../../templetes/GetFetchPageTemplete';
export default function BookReviewPage() {
  const [isSubmitDeleting, setSubmitDeleting] = useState(false);

  return (
    <GetFetchPageTemplete urls={['/reviews/']}>
      {({ data, setData }) => {
        let bookReviews = data[0];
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
        );
      }}
    </GetFetchPageTemplete>
  );
}
