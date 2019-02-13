import { ADD_CLASS_REQUESTED } from '../const';

export const addClass = level => ({
  type: ADD_CLASS_REQUESTED,
  level
});
