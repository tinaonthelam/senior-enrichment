'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import store from './store';
import CampusesContainer from './containers/CampusesContainer';
import CampusContainer from './containers/CampusContainer';
import App from './containers/AppContainer';

import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import { receiveCampuses, getCampusById } from './action-creators/campuses';

const onAppEnter = () => {

  const pCampuses = axios.get('/api/campus')
  .then(res => res.data)
  .then(campuses => {
    store.dispatch(receiveCampuses(campuses))});
};

const onCampusEnter = function (nextRouterState) {
  const campusId = nextRouterState.params.campusId;
  store.dispatch(getCampusById(campusId));
};

ReactDOM.render (
  <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={onAppEnter}>
          <Route path="/campuses" component={CampusesContainer} />
          <Route path="/campus/:campusId" component={CampusContainer} onEnter={onCampusEnter} />
          <IndexRedirect to="/campuses" />
        </Route>
      </Router>
  </Provider>,
  document.getElementById('main')
)
