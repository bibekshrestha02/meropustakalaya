import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.module.scss';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
export default function DropDownSmComponent({ link }) {
  const [isToogle, setToogle] = useState(false);
  const toogleHandler = () => {
    setToogle((e) => !e);
  };
  return (
    <div className={style.dropDownSmComponent}>
      <div onClick={toogleHandler} className={style.titleContainer}>
        <span>{link.name} </span>
        {!isToogle ? <AiFillCaretDown /> : <AiFillCaretUp />}
      </div>
      <div>
        {isToogle &&
          link.child.map((e, i) => {
            return (
              <div key={i} className={style.dropdownLink}>
                <NavLink
                  key={e.id}
                  exact
                  activeClassName={style.activeLink}
                  className={style.link}
                  to={e.link}>
                  {e.name}
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
}
