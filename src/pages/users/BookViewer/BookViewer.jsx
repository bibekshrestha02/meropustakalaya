import React from 'react';
import { useParams } from 'react-router-dom';
import style from '../style/style.module.scss';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Axios from '../../../utils/Axios';
import FetchApiTemplete from '../../../templetes/FetchApiTemplete';
import { useFetchApi } from '../../../customHooks/useFetchApi';
import Nav from '../../../component/nav/BookViewNav';

export default function BookViewerPage() {
  const { id } = useParams();
  const isComponentMount = React.useRef(true);
  const getBookFile = () => {
    return Axios.get(`/books/file/${id}`);
  };
  const { data, loading, error, status } = useFetchApi(
    [getBookFile()],
    isComponentMount
  );

  return (
    <div className={style.pdfPageContainer}>
      <Nav />
      <FetchApiTemplete loading={loading} error={error} status={status} noNav>
        <iframe
          src={!loading && !error && data[0].file + '#toolbar=0'}
          title='pdf view'
          className={style.fileContainer}
          onContextMenu={(e) => false}
        />
      </FetchApiTemplete>
    </div>
  );
}
