import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import UserProtectionRoute from './route/UserProtectionRoute';
import AdminProtectionRoute from './route/AdminProtectionRoute';

import HomePage from './pages/users/home/HomePage';
import BookPage from './pages/users/book/Books';
import SavePage from './pages/users/SavePage';
import BookDetailsPage from './pages/users/bookDetail/Detail';
import BookViewerPage from './pages/users/BookViewer/BookViewer';
import MembershipPage from './pages/users/membership/MembershipPage';
import ProfilePage from './pages/users/profile/Profile';

import DashboardPage from './pages/admin/DashBoard/DashboardPages';
import BookControlPage from './pages/admin/BookController/AdminBookPage';
import CategoryControllerPage from './pages/admin/CategoryController/CategoryControllerPage';
import UserControlPage from './pages/admin/UserController/UserControlPage';
import CreateUserPage from './pages/admin/CreateUserPage';
import CreateBookPage from './pages/admin/CreateBookPage/CreateBookPage';
import NotFoundPage from './pages/users/NotFoundPage';
import BookReviewPage from './pages/admin/bookReview/BookReviewPage';
import PackagePage from './pages/admin/package/PackagePage';
import Carousel from './pages/admin/Carousel/Carousel';
import LoginPage from './pages/access/login';
import SignupPage from './pages/access/Signup';
import VerifyEmail from './pages/access/VerifyEmail';
import VerificationEmail from './pages/access/VerificationEmail';
import RecoverInitiate from './pages/access/RecoverInitiate';
import IdentifyEmail from './pages/access/IdentifyEmail';
import RecoverCode from './pages/access/RecoverCode';
import RecoverPassword from './pages/access/RecoverPassword';
import { autoLogin } from './store/action/authAction';
import { useDispatch } from 'react-redux';
export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  });
  return (
    <Router>
      <Switch>
        <Route component={SignupPage} path='/access/signup' />
        <Route path='/access/login' component={LoginPage} />
        <Route component={VerifyEmail} path='/access/user/verify/:email' />
        <Route
          component={VerificationEmail}
          path='/access/user/verification/:email'
        />
        <Route component={IdentifyEmail} path='/access/recover/identify' />
        <Route
          component={RecoverPassword}
          path='/access/recover/password/:email/:otp'
        />
        <Route
          component={RecoverInitiate}
          path='/access/recover/initiate/:email'
        />
        <Route component={RecoverCode} path='/access/recover/:email/' />
        <Route component={HomePage} path='/' exact />
        <Route component={BookPage} path='/books' />
        <Route component={BookDetailsPage} exact path='/book/:id' />
        <Route component={BookViewerPage} path='/book/view/:path' />

        <UserProtectionRoute Component={SavePage} path='/save' />
        <UserProtectionRoute Component={MembershipPage} path='/membership' />
        <UserProtectionRoute path='/profile' Component={ProfilePage} />

        <AdminProtectionRoute path='/admin/carousel' Component={Carousel} />
        <AdminProtectionRoute
          path='/admin/dashboard'
          Component={DashboardPage}
        />
        <AdminProtectionRoute path='/admin/book' Component={BookControlPage} />
        <AdminProtectionRoute
          path='/admin/category'
          Component={CategoryControllerPage}
        />
        <AdminProtectionRoute path='/admin/users' Component={UserControlPage} />
        <AdminProtectionRoute
          path='/admin/createUser'
          Component={CreateUserPage}
        />
        <AdminProtectionRoute
          path='/admin/createBook'
          Component={CreateBookPage}
        />
        <AdminProtectionRoute
          path='/admin/bookReview'
          Component={BookReviewPage}
        />
        <AdminProtectionRoute path='/admin/package' Component={PackagePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
