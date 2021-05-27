import React from 'react';
import ModelCard from '../../assets/NavSideModel';
import Title from '../../../assets/TitleAsset';
import { NavLink } from 'react-router-dom';
import style from './style.module.scss';
import Button from '../../../assets/ButtonAsset';
import ProfileImage from '../../../assets/ProfileImageAssets';
import { useHistory } from 'react-router-dom';
import DropDownSmComponent from '../../../component/nav/DropDownSmComponent';
import { useSelector } from 'react-redux';
import { getDay } from '../../../utils/helperFn';
export default function NavSmComponent({
  navHanlder,
  loginHandler,
  logoutHandler,
  navLink,
  isNav,
  membershipHandler,
  role,
}) {
  const history = useHistory();
  const subscribtionDetail = useSelector(
    (state) => state.auth.subscriptionDetail
  );

  const viewProfileHandler = () => {
    navHanlder();
    history.push('/profile');
  };
  const unAuthHeader = (
    <>
      <Button title='subscribe' isOutline onClickFn={membershipHandler} />
    </>
  );
  const authHeader = (
    <>
      <ProfileImage userForm />
      <Title
        title='View Profile'
        fontSize='14px'
        onClick={viewProfileHandler}
      />
      {role === 'admin' ? (
        <Title title='Admin' fontSize='14px' color='gray' />
      ) : subscribtionDetail && role !== 'admin' ? (
        <Title
          title={`${getDay(
            Date.now(),
            subscribtionDetail.expires_at
          )} days left`}
          fontSize='14px'
        />
      ) : (
        <Button title='subscribe' isOutline onClickFn={membershipHandler} />
      )}
    </>
  );

  return isNav ? (
    <ModelCard onClick={navHanlder}>
      <div className={style.headerContainer}>
        {role ? authHeader : unAuthHeader}
      </div>
      <div className={style.linkItemContainerMble}>
        {navLink.map((e, i) => {
          if (!e.child) {
            return (
              <NavLink
                key={i}
                exact
                activeClassName={style.activeLink}
                className={style.link}
                to={e.link}>
                {e.name}
              </NavLink>
            );
          } else {
            return <DropDownSmComponent key={i} link={e} />;
          }
        })}
        <Title
          title={role ? 'LOGOUT' : 'LOGIN'}
          fontSize='16px'
          onClick={role ? logoutHandler : loginHandler}
        />
      </div>
    </ModelCard>
  ) : null;
}
