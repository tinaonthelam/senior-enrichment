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
    axios.get(`/api/campus/${campusId}`)
      .then(response => {
        dispatch(receiveCampus(response.data));
      });
  };
};
