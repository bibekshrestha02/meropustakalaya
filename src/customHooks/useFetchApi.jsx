import { useEffect, useState } from 'react';
import Axios from 'axios';
export const useFetchApi = (url, ref) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ref.current) {
      (async () => {
        Axios.all(url)
          .then(
            Axios.spread((...responses) => {
              let resData = [];
              responses.forEach((res) => {
                return resData.push(res.data.data);
              });
              setData(resData);
              setLoading(false);
            })
          )
          .catch((error) => {
            setError(true);
            setLoading(false);
          });
      })();
    }
    return () => {
      ref.current = false;
    };
  }, [url, ref]);

  return { data, loading, error, setData, setError, setLoading };
};
