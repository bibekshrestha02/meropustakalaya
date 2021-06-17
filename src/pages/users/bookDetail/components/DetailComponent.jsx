import React from 'react';
import style from './style.module.scss';
import Button from '../../../../assets/ButtonAsset';
import Title from '../../../../assets/TitleAsset';
import Rating from '../../../../assets/RatingAsset';
import Bookmark from '../../../../assets/BookmarkAsset';
import { useSelector } from 'react-redux';
import BooksDetailsCardContainer from '../../../../component/bookComponent/BooksDetailsCardContainer';
import ImageLoadingComponent from '../../../../component/models/ImageLoadingComponent';
export default function BookDetailsHeader({ data, navigateBookFile }) {
  const [isImageLoaded, setImageLoad] = React.useState(false);
  const imageLoadHandler = () => {
    setImageLoad(true);
  };
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <>
      <div className={style.bookDetailsHeaderContainer}>
        <div className={style.imageContainer}>
          <ImageLoadingComponent isImageLoaded={isImageLoaded} />
          <img
            src={data.photo}
            alt='bImage'
            className={style.bookImage}
            onLoad={imageLoadHandler}
            onError={imageLoadHandler}
          />
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
            styleObj={{ fontSize: '16px', width: '200px' }}
            title='Read now'
            fontSize='13px'
            onClickFn={navigateBookFile}
          />
        </div>
      </div>
      <BooksDetailsCardContainer title='Overview'>
        <span>{data.description}</span>
      </BooksDetailsCardContainer>
    </>
  );
}
