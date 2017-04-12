import React from 'react';
import { Link } from 'react-router';

const Navbar = (props) => {

  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#"> Tina Academy of Code </a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><Link to="/campuses">HOME</Link></li>
          <li><Link to="/students">STUDENTS</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
