import { call, put, takeEvery, all } from 'redux-saga/effects';
import {
  ADD_CLASS_REQUESTED,
  ADD_CLASS_SUCCEEDED,
  LIST_CLASS_REQUESTED,
  LIST_CLASS_SUCCEEDED
} from './const';
import { api_postClass, api_listClass } from './api';

//////////////////////////////////////////////////////////////////////////////////////////
// Add a new class
function* postClass(action) {
  try {
    const data = yield call(api_postClass, action.level);
    yield put({ type: ADD_CLASS_SUCCEEDED, data });
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* watchAddClass() {
  yield takeEvery(ADD_CLASS_REQUESTED, postClass);
}

//////////////////////////////////////////////////////////////////////////////////////////
// List all existing classes
function* listClass(action) {
  try {
    const data = yield call(api_listClass);
    yield put({ type: LIST_CLASS_SUCCEEDED, data });
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* watchListClass() {
  yield takeEvery(LIST_CLASS_REQUESTED, listClass);
}

///////////////////////////////////////////////////////////////////////////////////////////
// Export root saga
export default function* rootSaga() {
  yield all([watchAddClass(), watchListClass()]);
}
