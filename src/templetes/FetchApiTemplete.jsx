import React from 'react';
import LoadingComponent from '../component/models/LoadingComponent';
import ErrorPageContainer from '../component/models/ErrorPageContainer';
import MainTempletes from './MainTempletes';
const FetchApiTemplete = ({ loading, children, error }) => {
  if (loading) {
    return (
      <MainTempletes>
        <LoadingComponent />
      </MainTempletes>
    );
  }
  if (error) {
    return (
      <MainTempletes>
        <ErrorPageContainer />
      </MainTempletes>
    );
  }
  return <MainTempletes>{children}</MainTempletes>;
};

export default FetchApiTemplete;
