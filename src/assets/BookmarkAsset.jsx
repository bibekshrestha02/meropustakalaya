import React from 'react';
import style from './style.module.scss';
import { IoBookmarkOutline, IoBookmark } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux';
import { saveBook } from '../store/action/authAction';
import Axios from '../utils/Axios';
export default function BookMark({ bookId, toogler }) {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);
  let isSave = useSelector((state) => state.auth.savedBooks.includes(bookId));
  const bookmarkHanlder = async () => {
    dispatch(saveBook(bookId));
    toogler && toogler(bookId);
    await Axios.post(`/users/saves/${bookId}`);
  };

  return isLogin ? (
    isSave ? (
      <IoBookmark className={style.bookMark} onClick={bookmarkHanlder} />
    ) : (
      <IoBookmarkOutline className={style.bookMark} onClick={bookmarkHanlder} />
    )
  ) : null;
}
