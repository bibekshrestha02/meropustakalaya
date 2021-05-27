import React from 'react';
import style from '../style/style.module.scss';
import CardTemplete from '../../../templetes/CardTemplete';
import CategoryComponent from './components/CategoryComponent';
import GetFetchPageTemplete from '../../../templetes/GetFetchPageTemplete';
export default function BooksPage() {
  return (
    <GetFetchPageTemplete urls={['/books/', '/categories']}>
      {({ data, setData, setError, setErrorStatus }) => {
        return (
          <div className={style.bookPage}>
            <CategoryComponent
              category={data[1]}
              setData={setData}
              setError={setError}
              setErrorStatus={setErrorStatus}
            />
            <div>
              <CardTemplete title='Books' data={data[0]} sm />
            </div>
          </div>
        );
      }}
    </GetFetchPageTemplete>
  );
}
