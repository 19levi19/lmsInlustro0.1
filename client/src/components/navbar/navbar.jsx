import React from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ShortTextIcon from '@mui/icons-material/ShortText';

import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand navbar-dark-pickled-bluewood navbar-shadow mdk-header--fixed" id="default-navbar" data-primary="data-primary">
      <button className="navbar-toggler w-auto mr-16pt d-block rounded-0" type="button" data-toggle="sidebar">
        <span className="material-icons"><ShortTextIcon/></span>
      </button>

      <ul className=" navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">HOME</a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">COURSES</a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">PATH</a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">PRICING</a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">TEACHERS</a>
        </li>
      </ul>
      <li className="navbar-nav" data-toggle="tooltip" data-title="Community" data-placement="bottom" data-boundary="window" data-original-title="" title="">
          <a href="#" className="nav-link" data-toggle="tooltip" data-caret="false">
            <PersonOutlineIcon/>
          </a>
        </li>
      <ul className="nav navbar-nav ml-auto mr-0">
        <li className="nav-item active">
          <a href="login.html" className="nav-link" data-toggle="tooltip" data-title="Login" data-placement="bottom" data-boundary="window" data-original-title="" title="">
            <LockOpenIcon/>
          </a>
        </li>
        <li className="navbar-nav">
          <a href="signup.html" className="nav-link">Get Started</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
