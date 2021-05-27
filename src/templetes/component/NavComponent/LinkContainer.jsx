import React from 'react';
import style from './style.module.scss';
import { NavLink } from 'react-router-dom';
import DropDownComponent from '../../../component/nav/DropDownComponent';
export default function LinkContainer({ navLink }) {
  return (
    <div className={style.linkItemContainer}>
      {navLink.map((e, key) => {
        if (e.child) {
          return (
            <DropDownComponent title={e.name} child={e.child} key={key}>
              {e.child &&
                e.child.map((e, i) => {
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
            </DropDownComponent>
          );
        } else {
          return (
            <NavLink
              key={key}
              exact
              activeClassName={style.activeLink}
              className={style.link}
              to={e.link}>
              {e.name.toUpperCase()}
            </NavLink>
          );
        }
      })}
    </div>
  );
}
