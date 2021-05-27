import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactLoader from 'react-loader-spinner';
import { Document, Page, pdfjs } from 'react-pdf';
import style from '../style/style.module.scss';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import FileHeaderComponent from './component/FileHeaderComponent';
import ErrorComponent from './component/ErrorComponent';
export default function BookViewerPage() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const { path } = useParams();
  let token = localStorage.getItem('token');

  const url = {
    url: `http://localhost:4000/api/v1/${path}`,
    httpHeaders: {
      'x-auth-token': token,
    },
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
    setErrorStatus(status);
    // if (!token) {
    //   setErrorMessage('Login to read Book');
    // } else if (status === 403) {
    //   setErrorMessage('You are not authorized to access this page');
    // } else {
    //   alert('Something went very wrong.Please try again');
    //   goBack();
    // }
  };
  return (
    <div className={style.pdfPageContainer}>
      <FileHeaderComponent
        numPages={numPages}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
      <Document
        loading={<ReactLoader type='ThreeDots' color='red' />}
        onLoadError={errorHanlder}
        file={url}
        error={<ErrorComponent status={errorStatus} />}
        onLoadSuccess={onDocumentLoadSuccess}
        onContextMenu={(e) => e.preventDefault()}
        className={style.pdf_container}>
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
}
