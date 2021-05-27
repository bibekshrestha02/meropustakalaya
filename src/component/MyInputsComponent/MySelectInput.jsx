import React from 'react';
import { useField } from 'formik';
import style from './styleInput.module.scss';

export default function MySelectInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className={style.selectInputContainer}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        className={meta.touched && meta.error ? style.inputErrorStyle : null}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <span className={style.errorText}>{meta.error}</span>
      ) : null}
    </div>
  );
}
