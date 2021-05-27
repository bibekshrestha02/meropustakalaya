import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { decode } from 'jsonwebtoken';
export default function AdminProtectionRoute({ Component, ...rest }) {
  let token = localStorage.getItem('token');
  const { role } = decode(token);
  const location = useLocation();
  return (
    <Route
      {...rest}
      render={(props) => {
        return token && role === 'admin' ? (
          <Component {...props} />
        ) : (
          <Redirect
            from={location.pathname}
            to={{
              pathname: '*',
              state: { path: location.pathname },
            }}
          />
        );
      }}
    />
  );
}
