import React from 'react';
import style from './style.module.scss';
import Button from '../../../assets/ButtonAsset';
import { useSelector } from 'react-redux';
import { getDay } from '../../../utils/helperFn';
import AccountPop from '../../assets/AccountDropdownAssets';
import Title from '../../../assets/TitleAsset';
export default function RHContainer({ loginHandler, membershipHandler }) {
  let role = useSelector((state) => state.auth.role);
  let subscriptionDetail = useSelector(
    (state) => state.auth.subscriptionDetail
  );
  let isLogin = localStorage.getItem('token');

  const unAuthNavRHC = (
    <>
      <Button title='Login' isOutline onClickFn={loginHandler} />
      <Button title='subscribe' isOutline onClickFn={membershipHandler} />
    </>
  );
  const authNavRHC = (
    <>
      <AccountPop />
      {role !== 'admin' && subscriptionDetail ? (
        <Title
          title={`${getDay(
            Date.now(),
            subscriptionDetail.expires_at
          )} days left`}
          fontSize='16px'
        />
      ) : role === 'admin' ? null : (
        <Button title='subscribe' isOutline onClickFn={membershipHandler} />
      )}
    </>
  );

  return (
    <div className={style.roleContainer}>
      {isLogin ? authNavRHC : unAuthNavRHC}
    </div>
  );
}
