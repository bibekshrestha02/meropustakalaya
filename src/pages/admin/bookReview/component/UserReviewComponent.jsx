import React from 'react';
import style from './style.module.scss';
import UserReviewComponent from '../../../../component/bookComponent/UserReviewComponent';
export default function UserReviewComponents({
  reviews,
  deleteHandler,
  isDeleteSubmiting,
}) {
  return (
    <div className={style.reviewsContainer}>
      {reviews.length < 1 ? (
        <span>No Reviews</span>
      ) : (
        reviews.map((review) => {
          return (
            <UserReviewComponent
              review={review}
              isSubmitting={isDeleteSubmiting}
              deleteHandler={deleteHandler}
            />
          );
        })
      )}
    </div>
  );
}
