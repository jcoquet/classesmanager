import {
  ADD_CLASS_REQUESTED,
  LIST_CLASS_REQUESTED,
  ADD_STUDENT_REQUESTED,
  UPDATE_STUDENT_REQUESTED,
  UPDATE_CLASS_REQUESTED
} from '../const';

export const addClass = data => ({
  type: ADD_CLASS_REQUESTED,
  data
});

export const updateClass = data => ({
  type: UPDATE_CLASS_REQUESTED,
  data
});

export const loadAllClasses = () => ({
  type: LIST_CLASS_REQUESTED
});

export const addStudent = data => ({
  type: ADD_STUDENT_REQUESTED,
  data
});

export const updateStudent = data => ({
  type: UPDATE_STUDENT_REQUESTED,
  data
});
