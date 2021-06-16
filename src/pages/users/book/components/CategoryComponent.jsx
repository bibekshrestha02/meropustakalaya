import React, { useState } from 'react';
import { IoFilter } from 'react-icons/io5';
import style from './style.module.scss';
import CategoryCard from './CategoryCard';
export default function CategoryComponent({ category, filterSubmitHandler }) {
  const [isCategory, setCategory] = useState(true);
  const categoryHandler = () => {
    setCategory((e) => !e);
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
