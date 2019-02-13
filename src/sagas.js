import { call, put, takeEvery, all } from 'redux-saga/effects';
import { ADD_CLASS_REQUESTED } from './const';
import { api_postClass } from './api';

function* postClass(action) {
  try {
    const user = yield call(api_postClass, action.level);
    // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user });
  } catch (e) {
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* watchAddClass() {
  yield takeEvery(ADD_CLASS_REQUESTED, postClass);
}

export default function* rootSaga() {
  yield all([watchAddClass()]);
}
