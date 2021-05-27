import React from 'react';
import ProfileImage from '../../assets/ProfileImageAssets';
import style from './style.module.scss';
import Rating from '../../assets/RatingAsset';
export default function UserReviewComponent({
  review,
  isSubmitting,
  deleteHandler,
}) {
  return (
    <div key={review._id} className={style.userCommentContainer}>
      <ProfileImage userName={review.user.name} />
      <div className={style.content}>
        <span>{review.user.name}</span>
        <Rating value={review.rating} isEdit={false} />
        <span>{review.review}</span>
        <span className={style.dateStyle}>
          {new Date(review.createAt).toDateString()}
          <button
            disabled={isSubmitting}
            onClick={() => {
              deleteHandler(review._id, review.book);
            }}>
            <span>{isSubmitting ? 'deleting' : 'delete'}</span>
          </button>
        </span>
      </div>
    </div>
  );
}
