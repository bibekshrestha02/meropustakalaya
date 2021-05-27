import React, { useState } from 'react';
import style from './style.module.scss';
import TitleAsset from '../../../../assets/TitleAsset';
import RatingAsset from '../../../../assets/RatingAsset';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import UserReviewComponent from './UserReviewComponent';
import BookImageMinComponent from '../../../../component/adminComponent/BookImageMinComponent';
export default function ReviewCardComponent({
  data,
  deleteHandler,
  isDeleteSubmiting,
}) {
  const [isToogle, setToogle] = useState(false);
  const reviewToogleHandler = () => {
    setToogle((e) => !e);
  };
  const { bookDetail, reviews } = data;
  return (
    <>
      <div className={style.reviewCardComponent}>
        <BookImageMinComponent imgUrl={bookDetail.photo} />
        <div className={style.bookDetailContainer}>
          <TitleAsset
            title={bookDetail.name}
            fontSize='16px'
            fontWeight='bold'
          />
          <TitleAsset
            title={`category: ${bookDetail.category}`}
            fontSize='12px'
          />
          <RatingAsset value={bookDetail.rating} isEdit={false} />
          <TitleAsset
            title={`No of rating: ${bookDetail.numberOfRating}`}
            fontSize='12px'
          />
        </div>
        <div className={style.iconContainer} onClick={reviewToogleHandler}>
          {isToogle ? (
            <IoIosArrowUp className={style.icon} size='30px' color='black' />
          ) : (
            <IoIosArrowDown className={style.icon} size='30px' color='black' />
          )}
        </div>
      </div>
      {isToogle && (
        <UserReviewComponent
          reviews={reviews}
          deleteHandler={deleteHandler}
          isDeleteSubmiting={isDeleteSubmiting}
        />
      )}
    </>
  );
}
