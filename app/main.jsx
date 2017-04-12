'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import store from './store';
import CampusesContainer from './containers/CampusesContainer';
import CampusContainer from './containers/CampusContainer';
import StudentsContainer from './containers/StudentsContainer';
import App from './containers/AppContainer';

import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import { receiveCampuses, getCampusById } from './action-creators/campuses';
import { receiveAllStudents, loadAllStudents } from './action-creators/students';

const onAppEnter = () => {
  const pCampuses = axios.get('/api/campus');
  const pStudents = axios.get('/api/users');

  return Promise
    .all([pCampuses, pStudents])
    .then(responses => responses.map(r => r.data))
    .then(([campuses, students]) => {
      store.dispatch(receiveCampuses(campuses));
      store.dispatch(receiveAllStudents(students));
    });
};

const onCampusEnter = function (nextRouterState) {
  const campusId = nextRouterState.params.campusId;
  store.dispatch(getCampusById(campusId));
};

const onStudentsEnter = function () {
  store.dispatch(loadAllStudents());
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={onAppEnter}>
          <Route path="/campuses" component={CampusesContainer} />
          <Route path="/campus/:campusId" component={CampusContainer} onEnter={onCampusEnter} />
          <Route path="/students" component={StudentsContainer} onEnter={onStudentsEnter} />
          <IndexRedirect to="/campuses" />
        </Route>
      </Router>
  </Provider>,
  document.getElementById('main')
);
