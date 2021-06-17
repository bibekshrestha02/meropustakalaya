import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import style from '../style/style.module.scss';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import FileHeaderComponent from './component/FileHeaderComponent';
import ErrorComponent from './component/ErrorComponent';
import Axios from '../../../utils/Axios';
import LoadingComponent from '../../../component/models/LoadingComponent';
import FetchApiTemplete from '../../../templetes/FetchApiTemplete';
import { useFetchApi } from '../../../customHooks/useFetchApi';
export default function BookViewerPage() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const { id } = useParams();
  const isComponentMount = React.useRef(true);
  const getBookFile = () => {
    return Axios.get(`/books/file/${id}`);
  };
  const { data, loading, error } = useFetchApi(
    [getBookFile()],
    isComponentMount
  );
  const url = {
    url: !loading && !error && data[0].file,
  };
  // book page
  const [numPages, setNumPages] = useState(null);
  // user reading pages
  const [pageNumber, setPageNumber] = useState(1);
  const [errorStatus, setErrorStatus] = useState('');
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const errorHanlder = (error) => {
    const { status } = error;
    console.log(error);
    setErrorStatus(status);
  };
  return (
    <div className={style.pdfPageContainer}>
      <FileHeaderComponent
        numPages={numPages}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
      <FetchApiTemplete loading={loading} error={error} noNav>
        <Document
          loading={<LoadingComponent />}
          onLoadError={errorHanlder}
          file={url}
          error={<ErrorComponent status={errorStatus} />}
          onLoadSuccess={onDocumentLoadSuccess}
          onContextMenu={(e) => e.preventDefault()}
          className={style.pdf_container}>
          <Page pageNumber={pageNumber} />
        </Document>
      </FetchApiTemplete>
    </div>
  );
}
