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
            <Route
              component={SignupPage}
              path='/meropustakalaya/access/signup'
            />
            <Route path='/meropustakalaya/access/login' component={LoginPage} />
            <Route
              component={VerifyEmail}
              path='/meropustakalaya/access/user/verify/:email'
            />
            <Route
              component={VerificationEmail}
              path='/meropustakalaya/access/user/verification/:email'
            />
            <Route
              component={IdentifyEmail}
              path='/meropustakalaya/access/recover/identify'
            />
            <Route
              component={RecoverPassword}
              path='/meropustakalaya/access/recover/password/:email/:otp'
            />
            <Route
              component={RecoverInitiate}
              path='/meropustakalaya/access/recover/initiate/:email'
            />
            <Route
              component={RecoverCode}
              path='/meropustakalaya/access/recover/:email/'
            />
            <Route component={HomePage} path='/meropustakalaya/' exact />
            <Route component={BookPage} path='/meropustakalaya/books' />
            <Route
              component={BookDetailsPage}
              exact
              path='/meropustakalaya/book/:id'
            />
            <Route
              component={BookViewerPage}
              path='/meropustakalaya/book/view/:id'
            />

            <UserProtectionRoute
              Component={SavePage}
              path='/meropustakalaya/save'
            />
            <UserProtectionRoute
              Component={MembershipPage}
              path='/meropustakalaya/membership'
            />
            <UserProtectionRoute
              path='/meropustakalaya/profile'
              Component={ProfilePage}
            />

            <AdminProtectionRoute
              path='/meropustakalaya/admin/carousel'
              Component={Carousel}
            />
            <AdminProtectionRoute
              path='/meropustakalaya/admin/dashboard'
              Component={DashboardPage}
            />
            <AdminProtectionRoute
              path='/meropustakalaya/admin/book'
              Component={BookControlPage}
            />
            <AdminProtectionRoute
              path='/meropustakalaya/admin/category'
              Component={CategoryControllerPage}
            />
            <AdminProtectionRoute
              path='/meropustakalaya/admin/users'
              Component={UserControlPage}
            />
            <AdminProtectionRoute
              path='/meropustakalaya/admin/createUser'
              Component={CreateUserPage}
            />
            <AdminProtectionRoute
              path='/meropustakalaya/admin/createBook'
              Component={CreateBookPage}
            />
            <AdminProtectionRoute
              path='/meropustakalaya/admin/bookReview'
              Component={BookReviewPage}
            />
            <AdminProtectionRoute
              path='/meropustakalaya/admin/package'
              Component={PackagePage}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </ErrorBoundry>
      </Suspense>
    </Router>
  );
}
