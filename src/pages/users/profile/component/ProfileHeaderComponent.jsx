import React from 'react';
import Title from '../../../../assets/TitleAsset';
import Button from '../../../../assets/ButtonAsset';
import ProfileImage from '../../../../assets/ProfileImageAssets';
import style from './style.module.scss';
export default function ProfileHeaderComponent({ user, logoutHandler }) {
  return (
    <>
      <Title title='Account' fontSize='35px' />
      <div className={style.imageContainer}>
        <div className={style.profile}>
          <ProfileImage userForm />
          <Title title={user.name} fontSize='25px' />
        </div>
        <Button title='signout' isOutline onClickFn={logoutHandler} />
      </div>
    </>
  );
}
