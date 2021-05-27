import React from 'react';
import { useField } from 'formik';
import style from './styleInput.module.scss';
export default function MyTextAreaInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className={style.textAreaInputContainer}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
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
