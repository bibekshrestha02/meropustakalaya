import React from 'react';
import style from './style.module.scss';
import { useHistory } from 'react-router-dom';
export default function Logo({ fontSize, color }) {
  const history = useHistory();
  return (
    <div
      className={style.logo}
      style={{ fontSize: fontSize, color: color }}
      onClick={() => history.push('/')}>
      <span>Mero Pustakalaya</span>
    </div>
  );
}
