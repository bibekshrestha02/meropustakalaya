import React, { useEffect, useState } from 'react';
import ErrorPageContainer from '../component/models/ErrorPageContainer';
import LoadingComponent from '../component/models/LoadingComponent';
import Axios from '../utils/Axios';
import MainTemplete from './MainTempletes';
export default function GetFetchPageTemplete({ urls, children, hideNav }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [errorStatus, setErrorStatus] = useState('');
  useEffect(() => {
    if (urls) {
      setErrorStatus('');
      setError(false);
      setLoading(true);

      let request = urls.map((url) => {
        return Axios.get(url);
      });
      Promise.all(request)
        .then((res) => {
          res.map((e) => setData((pre) => [...pre, e.data.data]));
          setLoading(false);
        })
        .catch((error) => {
          let status;
          if (error.message === 'Network Error') {
            status = 500;
          } else if (error.response) {
            status = error.response.status;
          } else {
            status = 500;
          }
          setErrorStatus(status);
          setLoading(false);
          setError(true);
        });
    } else {
      setLoading(false);
    }
  }, [urls]);
  let body;
  if (isLoading) {
    body = <LoadingComponent />;
  } else if (!isLoading && isError) {
    body = <ErrorPageContainer status={errorStatus} />;
  } else {
    body = children({ data, setData, setError, setErrorStatus });
  }
  return hideNav ? <>{body}</> : <MainTemplete>{body}</MainTemplete>;
}
