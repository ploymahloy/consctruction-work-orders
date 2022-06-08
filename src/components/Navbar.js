import React from 'react';

import logo from '../assets/hook.png';
import './Navbar.css';

const Navbar = (props) => {
  return (
    <div className="Navbar">
      <img src={logo} className="logo" />
      <h1 className="company-name">Fictional Building Co.</h1>
    </div>
  )
};

export default Navbar;
