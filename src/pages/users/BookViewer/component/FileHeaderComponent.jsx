import React from 'react';
import Nav from '../../../../component/nav/BookViewNav';
import style from './style.module.scss';
export default function FileHeaderComponent({
  pageNumber,
  setPageNumber,
  numPages,
}) {
  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };
  return (
    <div>
      <Nav pageNo={pageNumber} />
      <div className={style.controls}>
        <button onClick={prevPage} disabled={pageNumber === 1}>
          Prev
        </button>
        <button onClick={nextPage} disabled={pageNumber === numPages}>
          Next
        </button>
      </div>
    </div>
  );
}
