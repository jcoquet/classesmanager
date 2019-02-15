import { call, put, takeEvery, all } from 'redux-saga/effects';
import {
  ADD_CLASS_REQUESTED,
  ADD_CLASS_SUCCEEDED,
  LIST_CLASS_REQUESTED,
  ADD_STUDENT_REQUESTED,
  ADD_ENTITIES,
  UPDATE_STUDENT_REQUESTED,
  UPDATE_CLASS_REQUESTED
} from './const';
import {
  api_postClass,
  api_listClass,
  api_addStudent,
  api_getClass,
  api_updateStudent,
  api_updateClass
} from './api';
import { normalize } from 'normalizr';
import { classListSchema, classSchema } from './schema';

//////////////////////////////////////////////////////////////////////////////////////////
// Add a new class
function* postClass(action) {
  try {
    const data = yield call(api_postClass, action.data);
    yield put({
      type: ADD_CLASS_SUCCEEDED,
      data: normalize(data, classSchema).entities.class
    });
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* watchAddClass() {
  yield takeEvery(ADD_CLASS_REQUESTED, postClass);
}

//////////////////////////////////////////////////////////////////////////////////////////
// Update a class
function* updateClass(action) {
  try {
    const data = yield call(api_updateClass, action.data);
    yield put({
      type: ADD_ENTITIES,
      entities: normalize(data, classSchema).entities
    });
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* watchUpdateClass() {
  yield takeEvery(UPDATE_CLASS_REQUESTED, updateClass);
}

//////////////////////////////////////////////////////////////////////////////////////////
// List all existing classes
function* listClass() {
  try {
    const data = yield call(api_listClass);
    yield put({
      type: ADD_ENTITIES,
      entities: normalize(data, classListSchema).entities
    });
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* watchListClass() {
  yield takeEvery(LIST_CLASS_REQUESTED, listClass);
}

//////////////////////////////////////////////////////////////////////////////////////////
// Add a new student
function* addStudent(action) {
  try {
    yield call(api_addStudent, action.data);
    const data = yield call(api_getClass, action.data.classId);
    yield put({
      type: ADD_ENTITIES,
      entities: normalize(data, classSchema).entities
    });
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* watchAddStudent() {
  yield takeEvery(ADD_STUDENT_REQUESTED, addStudent);
}

//////////////////////////////////////////////////////////////////////////////////////////
// Update a student
function* updateStudent(action) {
  try {
    yield call(api_updateStudent, action.data);
    const data = yield call(api_listClass);
    yield put({
      type: ADD_ENTITIES,
      entities: normalize(data, classListSchema).entities
    });
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* watchUpdateStudent() {
  yield takeEvery(UPDATE_STUDENT_REQUESTED, updateStudent);
}

///////////////////////////////////////////////////////////////////////////////////////////
// Export root saga
export default function* rootSaga() {
  yield all([
    watchAddClass(),
    watchListClass(),
    watchAddStudent(),
    watchUpdateStudent(),
    watchUpdateClass()
  ]);
}
