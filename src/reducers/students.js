import { ADD_ENTITIES, ADD_STUDENT_SUCCEEDED } from '../const';

const students = (state = {}, action) => {
  switch (action.type) {
    case ADD_STUDENT_SUCCEEDED:
      return { ...state, ...action.data };
    case ADD_ENTITIES:
      return { ...state, ...action.entities.student };
    default:
      return state;
  }
};

export default students;
