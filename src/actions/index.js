import { ADD_CLASS_REQUESTED, LIST_CLASS_REQUESTED } from '../const';

export const addClass = level => ({
  type: ADD_CLASS_REQUESTED,
  level
});

export const loadAllClasses = () => ({
  type: LIST_CLASS_REQUESTED
});
