import React from 'react';
import style from './style.module.scss';
import { useSelector } from 'react-redux';

export default function ProfileImage({ userForm, userName }) {
  const { name } = useSelector((state) => state.auth);

  return (
    <div className={userForm ? style.profileImage_form : style.profileImage}>
      <span>{userName ? userName.charAt(0) : name.charAt(0)}</span>
    </div>
  );
}
