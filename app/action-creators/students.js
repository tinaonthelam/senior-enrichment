export const RECEIVE_STUDENTS = 'RECEIVE_STUDENTS';

import axios from 'axios';

export const receiveAllStudents = students => ({
  type: RECEIVE_STUDENTS,
  students
});

export const loadAllStudents = () => {
  return dispatch => {
    axios.get('/api/users')
      .then(response => {
        dispatch(receiveAllStudents(response.data));
      });
  };
};
