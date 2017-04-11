import {
  RECEIVE_CAMPUSES,
  RECEIVE_CAMPUS
} from '../action-creators/campuses';

const initialCampusState = {
  selected: {},
  list: []
};

export default function (state = initialCampusState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_CAMPUSES:
      newState.list = action.campuses;
      break;

    case RECEIVE_CAMPUS:
      newState.selected = action.campus;
      break;

    default:
      return state;

  }

  return newState;

}
