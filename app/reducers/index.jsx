import { combineReducers } from 'redux';
import campusesReducer from './campuses-reducer';

export default combineReducers({
  campuses: campusesReducer
});
