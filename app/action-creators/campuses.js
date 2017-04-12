import axios from 'axios';

export const RECEIVE_CAMPUSES = 'RECEIVE_CAMPUSES';
export const RECEIVE_CAMPUS = 'RECEIVE_CAMPUS';

export const receiveCampuses = campuses => ({
    type: RECEIVE_CAMPUSES,
    campuses
});

export const receiveCampus = campus => ({
    type: RECEIVE_CAMPUS,
    campus
});

export const getCampusById = campusId => {
  return dispatch => {
  Promise
    .all([
      axios.get(`/api/campus/${campusId}`),
      axios.get(`/api/campus/${campusId}/students`)
    ])
    .then(results => results.map(r => r.data))
    .then(results => {
      dispatch(receiveCampus(...results));
    });
  };
};
