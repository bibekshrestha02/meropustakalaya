import React from 'react';
import style from './style.module.scss';

export default function Title({
  title,
  fontSize,
  color,
  responsive,
  fontWeight,
  ...props
}) {
  return (
    <div
      {...props}
      className={responsive ? style.titleResponsive : style.title}
      style={{ fontSize: fontSize, color: color, fontWeight: fontWeight }}>
      {title}
    </div>
  );
}
