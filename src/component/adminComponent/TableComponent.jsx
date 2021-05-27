import React from 'react';
import style from './style.module.scss';
import Loader from 'react-loader-spinner';

export default function TableComponent({
  tableHeaders,
  children,
  isNull,
  isLoading,
  errorMessage,
}) {
  return (
    <div className={style.tableContainer}>
      <table>
        <thead>
          <tr>
            {tableHeaders &&
              tableHeaders.map((e, i) => {
                return <th key={i}>{e}</th>;
              })}
          </tr>
        </thead>
        {!isLoading && <tbody>{children}</tbody>}
      </table>
      {isLoading || isNull || errorMessage ? (
        <div className={style.utilsContainer}>
          {isLoading && (
            <Loader type='ThreeDots' color='red' height={25} width={80} />
          )}

          {isNull && !errorMessage && <span>No data</span>}
          {errorMessage && <span>{errorMessage}</span>}
        </div>
      ) : null}
    </div>
  );
}
