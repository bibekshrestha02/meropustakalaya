import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
export default function ProtectedRoute({ Component, ...rest }) {
  let token = localStorage.getItem('token');
  const location = useLocation();
  return (
    <Route
      {...rest}
      render={(props) => {
        return token ? (
          <Component {...props} />
        ) : (
          <Redirect
            from={location.pathname}
            to={{
              pathname: '/access/login',
              state: {
                path: location.pathname,
                message: 'Login To Get Access',
              },
            }}
          />
        );
      }}
    />
  );
}
