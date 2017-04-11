import React from 'react';

const Navbar = (props) => {

  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#"> Tina Academy of Code </a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#"> Students </a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
