import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../public/logo.svg';

const NavBar: React.FC = () => {
  return (
    <nav>
      <img src={logo} alt="logo"/>
      <div>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/about">
          About Us
        </NavLink>
        <NavLink to="/contacts">
          Contacts
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
