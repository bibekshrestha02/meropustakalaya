import React, { useState, lazy, Suspense } from 'react';
import style from './style.module.scss';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/action/authAction';
const NavSmComponent = lazy(() => import('./NavComponent/NavSmComponent'));
const LinkContainer = lazy(() => import('./NavComponent/LinkContainer'));
const LHContainer = lazy(() => import('./NavComponent/LHContainer'));
const RHContainer = lazy(() => import('./NavComponent/RHContainer'));
export default function MainNav() {
  const history = useHistory();
  const [isNavToogle, setNavToogle] = useState(false);
  let role = useSelector((state) => state.auth.role);
  let navLink;
  const defaultLink = [
    {
      id: 1,
      name: 'home',
      link: '/',
    },
    {
      id: 2,
      name: 'books',
      link: '/books',
    },
    {
      id: 3,
      name: 'save',
      link: '/save',
    },
  ];
  const adminLink = [
    {
      name: 'dashboard',
      link: '/admin/dashboard',
    },
    {
      name: 'books',
      child: [
        {
          name: 'books',
          link: '/admin/book',
        },
        {
          name: 'Category',
          link: '/admin/category',
        },
        {
          name: 'Review',
          link: '/admin/bookReview',
        },
      ],
    },
    {
      name: 'clients',
      child: [
        {
          name: 'users',
          link: '/admin/users',
        },

        {
          name: 'Create clients',
          link: '/admin/createUser',
        },
      ],
    },
    {
      name: 'others',
      child: [
        {
          name: 'Carousel',
          link: '/admin/carousel',
        },
        {
          name: 'packages',
          link: '/admin/package',
        },
      ],
    },
  ];
  if (role === 'admin') {
    navLink = adminLink;
  } else {
    navLink = defaultLink;
  }

  const dispatch = useDispatch();

  const loginHandler = () => {
    history.push('/access/login');
  };
  const membershipHandler = () => {
    history.push('/membership');
  };
  const logoutHandler = () => {
    history.push('/');
    dispatch(logout());
    navToogleHanlder();
  };
  const navToogleHanlder = () => {
    setNavToogle((e) => !e);
  };

  return (
    <div className={style.navContainer}>
      <Suspense>
        <LHContainer navHanlder={navToogleHanlder} />
        <div className={style.secondChild}>
          <LinkContainer navLink={navLink} />
          <RHContainer
            loginHandler={loginHandler}
            membershipHandler={membershipHandler}
          />
        </div>

        <NavSmComponent
          navLink={navLink}
          isNav={isNavToogle}
          loginHandler={loginHandler}
          logoutHandler={logoutHandler}
          navHanlder={navToogleHanlder}
          role={role}
          membershipHandler={membershipHandler}
        />
      </Suspense>
    </div>
  );
}
