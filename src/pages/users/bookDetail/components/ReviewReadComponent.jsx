import React, { useState } from 'react';
import style from './style.module.scss';
import BooksDetailsCardContainer from '../../../../component/bookComponent/BooksDetailsCardContainer';
import ProfileImage from '../../../../assets/ProfileImageAssets';
import Rating from '../../../../assets/RatingAsset';
export default function UserReivewCard({ review, deleteHandler }) {
  const [isSubmitting, setSubmitting] = useState(false);
  return (
    <BooksDetailsCardContainer title='Your Review'>
      <div className={style.userCommentContainer}>
        <div>
          <ProfileImage userName={review.user.name} />
        </div>
        <div className={style.content}>
          <span>{review.user.name}</span>
          <Rating value={review.rating} isEdit={false} />
          <span>{review.review}</span>

          <span style={{ display: 'block', color: 'gray' }}>
            {new Date(review.createAt).toDateString()}
            <button
              disabled={isSubmitting}
              className={style.delete}
              onClick={() => {
                deleteHandler(review._id, setSubmitting);
              }}>
              {isSubmitting ? <span>Deleting...</span> : <span>Delete</span>}
            </button>
          </span>
        </div>
      </div>
    </BooksDetailsCardContainer>
  );
}
