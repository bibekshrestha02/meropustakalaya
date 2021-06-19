import React from 'react';
import style from './style.module.scss';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/action/authAction';
import { accountPopCard } from '../../store/action/modelAction';
import { useHistory } from 'react-router-dom';
import ProfileImage from '../../assets/ProfileImageAssets';
import DropDownComponent from '../../component/nav/DropDownComponent';
export default function AccountPop() {
  const dispatch = useDispatch();
  const history = useHistory();
  const logoutHandler = () => {
    history.push('/meropustakalaya/');
    dispatch(logout());
    dispatch(accountPopCard());
  };
  const userRouteHandler = () => {
    history.push('/meropustakalaya/profile');
    dispatch(accountPopCard());
  };
  return (
    <DropDownComponent title={<ProfileImage />}>
      <div className={style.dropdownLink} onClick={userRouteHandler}>
        Profle
      </div>
      <div className={style.dropdownLink} onClick={logoutHandler}>
        logout
      </div>
    </DropDownComponent>
  );
}
