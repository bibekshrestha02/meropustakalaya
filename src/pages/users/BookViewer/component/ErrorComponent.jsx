import React from 'react';
import ButtonAsset from '../../../../assets/ButtonAsset';
import { useHistory, useLocation } from 'react-router-dom';
export default function ErrorComponent({ status }) {
  const location = useLocation();
  let body;
  const { push, goBack } = useHistory();
  if (status === 401) {
    body = (
      <div>
        <h1>Login to get access</h1>
        <ButtonAsset
          title='Login'
          onClickFn={() =>
            push({
              pathname: '/access/login',
              state: {
                path: location.pathname,
                message: 'Login to get access',
              },
            })
          }
        />
      </div>
    );
  } else if (status === 403) {
    body = (
      <div>
        <h1>Get Membership to get acess</h1>
        <ButtonAsset
          title='Membership'
          onClickFn={() =>
            push({
              pathname: '/membership',
              state: { path: location.pathname },
            })
          }
        />
      </div>
    );
  } else {
    body = (
      <div>
        <h1>Something went wrong try again</h1>
        <ButtonAsset title='Go back' onClickFn={() => goBack()} />
      </div>
    );
  }
  return body;
}
