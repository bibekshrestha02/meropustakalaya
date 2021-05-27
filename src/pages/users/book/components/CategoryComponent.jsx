import React, { useState } from 'react';
import { IoFilter } from 'react-icons/io5';
import style from './style.module.scss';
import CategoryCard from './CategoryCard';
import Axios from '../../../../utils/Axios';
export default function CategoryComponent({
  category,
  setData,
  setError,
  setErrorStatus,
}) {
  const [isCategory, setCategory] = useState(true);
  const categoryHandler = () => {
    setCategory((e) => !e);
  };
  const filterSubmitHandler = async (filters) => {
    try {
      let filter = filters.category;
      let sort = filters.sort;

      sort = sort && sort.join();
      filter = filter && filter.join();
      const res = await Axios.get(`/books?category=${filter}&sort=${sort}`);
      const { data } = res.data;
      let newSate = [data, category];
      setData(newSate);
    } catch (error) {
      let status;

      if (error.message) {
        status = 500;
      } else if (error.response) {
        status = error.response.status;
      } else {
        status = 500;
      }
      setErrorStatus(status);
      setError(true);
    }
  };
  return (
    <div className={style.filterContainer}>
      <div className={style.filterBtn} onClick={categoryHandler}>
        <IoFilter /> Filters
      </div>
      {isCategory && (
        <CategoryCard
          category={category}
          filterSubmitHandler={filterSubmitHandler}
        />
      )}
    </div>
  );
}
