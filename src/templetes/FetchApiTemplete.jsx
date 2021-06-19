import React from 'react';
import LoadingComponent from '../component/models/LoadingComponent';
import ErrorPageContainer from '../component/models/ErrorPageContainer';
import MainTempletes from './MainTempletes';
const FetchApiTemplete = ({ loading, children, error, noNav, status }) => {
  if (loading) {
    return noNav ? (
      <LoadingComponent />
    ) : (
      <MainTempletes>
        <LoadingComponent />
      </MainTempletes>
    );
  }
  if (error) {
    return noNav ? (
      <ErrorPageContainer status={status} />
    ) : (
      <MainTempletes>
        <ErrorPageContainer status={status} />
      </MainTempletes>
    );
  }
  return noNav ? children : <MainTempletes>{children}</MainTempletes>;
};

export default FetchApiTemplete;
