import React from 'react';
import style from './style.module.scss';
import BooksDetailsCardContainer from '../../../../component/bookComponent/BooksDetailsCardContainer';
import Rating from '../../../../assets/RatingAsset';
import ProfileImage from '../../../../assets/ProfileImageAssets';
export default function UserComment({ data }) {
  return (
    <BooksDetailsCardContainer title='Reader Reviews'>
      {data.reviews ? (
        data.reviews.length < 1 ? (
          <span>No reviews yet</span>
        ) : (
          data.reviews.map((e, i) => {
            return (
              <div key={i} className={style.userCommentContainer}>
                <div>
                  <ProfileImage userName={e.user.name} />
                </div>
                <div className={style.content}>
                  <span>{e.user.name}</span>
                  <Rating value={e.rating} isEdit={false} />
                  <span>{e.review}</span>
                  <span style={{ display: 'block', color: 'gray' }}>
                    {new Date(e.createAt).toDateString()}
                  </span>
                </div>
              </div>
            );
          })
        )
      ) : null}
    </BooksDetailsCardContainer>
  );
}
