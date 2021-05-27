import React from 'react';
import { Formik } from 'formik';
import MySelectInput from '../../../../component/MyInputsComponent/MySelectInput';
import AdminWaperContainer from '../../../../component/adminComponent/AdminWaperContainer';
import style from './style.module.scss';
import Axios from '../../../../utils/Axios';
export default function SortComponent({ setData }) {
  const sortOptions = [
    {
      id: 1,
      title: 'None',
      value: '',
    },
    {
      id: 2,
      title: 'Name',
      value: 'name',
    },
    {
      id: 3,
      title: 'Join At',
      value: 'Join At',
    },
  ];
  const filterOptions = [
    {
      id: 7,
      title: 'None',
      value: '',
    },
    {
      id: 1,
      title: 'Admin',
      value: 'admin',
    },
    {
      id: 2,
      title: 'User',
      value: 'user',
    },
    {
      id: 3,
      title: 'Subscribe',
      value: 'subscribe',
    },
    {
      id: 4,
      title: 'Unsubscribe',
      value: 'unsubscribe',
    },
    {
      id: 5,
      title: 'Verified',
      value: 'verified',
    },
    {
      id: 6,
      title: 'Unverified',
      value: 'unverified',
    },
  ];
  const submitHandler = async ({ sort, filter }) => {
    try {
      const res = await Axios.get(`/users?sort=${sort}&filter=${filter}`);
      const { data } = res.data;
      setData([data]);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <AdminWaperContainer>
      <Formik
        initialValues={{
          sort: '',
          filter: '',
        }}
        onSubmit={submitHandler}>
        {({ handleChange, submitForm }) => {
          return (
            <div className={style.sortContainer}>
              <MySelectInput
                name='sort'
                label='Sort by:'
                onChange={(e) => {
                  handleChange(e);
                  setTimeout(() => {
                    submitForm();
                  });
                }}>
                {sortOptions.map((e) => (
                  <option key={e.id} value={e.value}>
                    {e.title}
                  </option>
                ))}
              </MySelectInput>
              <MySelectInput
                name='filter'
                label='Filter by:'
                onChange={(e) => {
                  handleChange(e);
                  setTimeout(() => {
                    submitForm();
                  });
                }}>
                {filterOptions.map((e) => (
                  <option key={e.id} value={e.value}>
                    {e.title}
                  </option>
                ))}
              </MySelectInput>
            </div>
          );
        }}
      </Formik>
    </AdminWaperContainer>
  );
}
