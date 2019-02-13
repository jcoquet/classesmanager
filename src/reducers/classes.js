import { ADD_CLASS_SUCCEEDED, LIST_CLASS_SUCCEEDED } from '../const';

const classes = (state = [], action) => {
  debugger;
  switch (action.type) {
    case ADD_CLASS_SUCCEEDED:
      return [...state, action.data];
    case LIST_CLASS_SUCCEEDED:
      return [...state, ...action.data];
    default:
      return state;
  }
};

export default classes;

export const getAllClasses = state => state.classes;
