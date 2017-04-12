import { RECEIVE_STUDENTS } from '../action-creators/students';

const initialStudentsState = [];

export default function (state = initialStudentsState, action) {

  switch (action.type) {

    case RECEIVE_STUDENTS:
      return action.students;

    default:
      return state;
  }
}
