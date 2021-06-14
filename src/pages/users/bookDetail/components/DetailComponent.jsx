import React from 'react';
import style from './style.module.scss';
import Button from '../../../../assets/ButtonAsset';
import Title from '../../../../assets/TitleAsset';
import Rating from '../../../../assets/RatingAsset';
import Bookmark from '../../../../assets/BookmarkAsset';
import { useSelector } from 'react-redux';
import BooksDetailsCardContainer from '../../../../component/bookComponent/BooksDetailsCardContainer';
import { useHistory } from 'react-router-dom';
export default function BookDetailsHeader({ data }) {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const { push } = useHistory();
  const readBookFn = (path) => {
    push(`/book/view/${path}`);
  };
  return (
    <>
      <div className={style.bookDetailsHeaderContainer}>
        <div className={style.imageContainer}>
          <img src={data.photo} alt='bImage' className={style.bookImage} />
        </div>
        <div>
          <Title title={data.name} fontSize='25px' />
          <span className={style.auther}>Author : {data.autherName}</span>
          <span>Pages : {data.pages}</span>
          {isLogin && (
            <span>
              save for later <Bookmark bookId={data._id} />
            </span>
          )}

          <Rating value={data.rating} size={20} isEdit={false} />
          <Button
            title='Read now'
            fontSize='13px'
            onClickFn={() => readBookFn(data.file)}
          />
        </div>
      </div>
      <BooksDetailsCardContainer title='Overview'>
        <span>{data.description}</span>
      </BooksDetailsCardContainer>
    </>
  );
}
