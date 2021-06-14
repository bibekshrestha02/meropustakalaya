import React from 'react';
import { Form, Formik, Field } from 'formik';
import style from './style.module.scss';
import Title from '../../../../assets/TitleAsset';

export default function CategoryCard({ category, filterSubmitHandler }) {
  const sortBy = [
    {
      id: 1,
      name: '-releasedAt',
      title: 'New Arrivals',
    },
    {
      id: 2,
      name: '-rating',
      title: 'Most Rated',
    },
  ];

  return (
    <div className={style.categoryCard}>
      <Formik
        initialValues={{
          category: [],
          sortBy: [],
        }}
        onSubmit={filterSubmitHandler}>
        {({ submitForm, handleChange }) => {
          return (
            <Form className={style.inputContainer}>
              <Title title='Sort By' fontSize='18px' />
              {sortBy.map((e) => {
                return (
                  <label key={e.id}>
                    <Field
                      type='checkbox'
                      onChange={(e) => {
                        handleChange(e);
                        submitForm();
                      }}
                      name='sort'
                      value={e.name}
                    />
                    <span> {e.title}</span>
                  </label>
                );
              })}
              <Title title='Categories' fontSize='18px' />
              {category &&
                category.map((e) => {
                  return (
                    <label key={e._id}>
                      <Field
                        type='checkbox'
                        onChange={(e) => {
                          handleChange(e);
                          submitForm();
                        }}
                        name='category'
                        value={e.name}
                      />
                      <span> {e.title}</span>
                    </label>
                  );
                })}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
