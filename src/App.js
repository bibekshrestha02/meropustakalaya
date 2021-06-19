import React, { useEffect, lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LoadingComponent from './component/models/LoadingComponent';
import UserProtectionRoute from './route/UserProtectionRoute';
import AdminProtectionRoute from './route/AdminProtectionRoute';
import { autoLogin } from './store/action/authAction';
import { useDispatch } from 'react-redux';
import ErrorBoundry from './customHooks/ErrorBoundry';
const HomePage = lazy(() => import('./pages/users/home/HomePage'));
const BookPage = lazy(() => import('./pages/users/book/Books'));
const SavePage = lazy(() => import('./pages/users/SavePage'));
const BookDetailsPage = lazy(() => import('./pages/users/bookDetail/Detail'));
const BookViewerPage = lazy(() =>
  import('./pages/users/BookViewer/BookViewer')
);
const MembershipPage = lazy(() =>
  import('./pages/users/membership/MembershipPage')
);
const ProfilePage = lazy(() => import('./pages/users/profile/Profile'));

const DashboardPage = lazy(() =>
  import('./pages/admin/DashBoard/DashboardPages')
);
const BookControlPage = lazy(() =>
  import('./pages/admin/BookController/AdminBookPage')
);
const CategoryControllerPage = lazy(() =>
  import('./pages/admin/CategoryController/CategoryControllerPage')
);
const UserControlPage = lazy(() =>
  import('./pages/admin/UserController/UserControlPage')
);
const CreateUserPage = lazy(() => import('./pages/admin/CreateUserPage'));
const CreateBookPage = lazy(() =>
  import('./pages/admin/CreateBookPage/CreateBookPage')
);
const NotFoundPage = lazy(() => import('./pages/users/NotFoundPage'));
const BookReviewPage = lazy(() =>
  import('./pages/admin/bookReview/BookReviewPage')
);
const PackagePage = lazy(() => import('./pages/admin/package/PackagePage'));
const Carousel = lazy(() => import('./pages/admin/Carousel/Carousel'));
const LoginPage = lazy(() => import('./pages/access/login'));
const SignupPage = lazy(() => import('./pages/access/Signup'));
const VerifyEmail = lazy(() => import('./pages/access/VerifyEmail'));
const VerificationEmail = lazy(() =>
  import('./pages/access/VerificationEmail')
);
const RecoverInitiate = lazy(() => import('./pages/access/RecoverInitiate'));
const IdentifyEmail = lazy(() => import('./pages/access/IdentifyEmail'));
const RecoverCode = lazy(() => import('./pages/access/RecoverCode'));
const RecoverPassword = lazy(() => import('./pages/access/RecoverPassword'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  });
  return (
    <Router>
      <Suspense fallback={<LoadingComponent />}>
        <ErrorBoundry>
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
            <Route component={BookViewerPage} path='/book/view/:id' />

            <UserProtectionRoute Component={SavePage} path='/save' />
            <UserProtectionRoute
              Component={MembershipPage}
              path='/membership'
            />
            <UserProtectionRoute path='/profile' Component={ProfilePage} />

            <AdminProtectionRoute path='/admin/carousel' Component={Carousel} />
            <AdminProtectionRoute
              path='/admin/dashboard'
              Component={DashboardPage}
            />
            <AdminProtectionRoute
              path='/admin/book'
              Component={BookControlPage}
            />
            <AdminProtectionRoute
              path='/admin/category'
              Component={CategoryControllerPage}
            />
            <AdminProtectionRoute
              path='/admin/users'
              Component={UserControlPage}
            />
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
            <AdminProtectionRoute
              path='/admin/package'
              Component={PackagePage}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </ErrorBoundry>
      </Suspense>
    </Router>
  );
}
