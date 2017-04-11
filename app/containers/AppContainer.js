import React, {Component} from 'react';

import CampusContainer from '../containers/CampusContainer';
import NavbarContainer from '../containers/NavbarContainer';

export default function App ({ children }) {
  return (
    <div id="main" className="container-fluid">
      <div className="col-xs-2">
        <NavbarContainer />
      </div>
      <div className="col-xs-10">
        { children }
      </div>
    </div>
  );
}
