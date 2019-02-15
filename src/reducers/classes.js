import { ADD_CLASS_SUCCEEDED, ADD_ENTITIES } from '../const';

const classes = (state = {}, action) => {
  switch (action.type) {
    case ADD_CLASS_SUCCEEDED:
      return { ...state, ...action.data };
    case ADD_ENTITIES:
      return { ...state, ...action.entities.class };
    default:
      return state;
  }
};

export default classes;

export const getAllClasses = state => state.classes;
