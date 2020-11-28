import React, { Fragment } from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <Fragment>
    <nav className={style.nav}>
      <ul>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/Contacts'}>Contacts</NavLink>
        </li>
      </ul>
    </nav>
  </Fragment>
);
export default Navbar;
