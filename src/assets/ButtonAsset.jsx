import React from 'react';
import style from './style.module.scss';
import Loader from 'react-loader-spinner';
export default function Button({
  title,
  fontSize,
  isOutline,
  onClickFn,
  type,
  backgroundColor,
  textColor,
  styleObj,
  children,
  isSubmitting,
  ...props
}) {
  return (
    <button
      {...props}
      type={type}
      className={isOutline ? style.outLineButton : style.button}
      style={{
        fontSize: fontSize,
        background: backgroundColor,
        color: textColor,

        ...styleObj,
      }}
      disabled={isSubmitting}
      onClick={onClickFn}>
      {isSubmitting ? (
        <Loader type='ThreeDots' color='white' height={15} width={50} />
      ) : title ? (
        title.toUpperCase()
      ) : (
        children
      )}
    </button>
  );
}
