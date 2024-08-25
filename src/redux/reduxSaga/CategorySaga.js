import {call, put, takeLatest} from 'redux-saga/effects';

import {getApi} from '../../utils/helpers/ApiRequest';
import showErrorAlert from '../../utils/helpers/Toast';
import {
  getCategoriesByListFailure,
  getCategoriesByListSuccess,
  getCategoriesListFailure,
  getCategoriesListSuccess,
} from '../reducer/CategoryReducer';

export function* getCategoryListSaga(action) {
  // console.log(response,">>>>>>>res")
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
  };
  try {
    let response = yield call(getApi, `categories`, header);
    // console.log(response, '>>>>>>>res');
    if (response?.status == 200) {
      yield put(getCategoriesListSuccess(response?.data));
    } else {
      yield put(getCategoriesListFailure(response?.data));
      showErrorAlert(response?.data?.message);
    }
  } catch (error) {
    yield put(getCategoriesListFailure(error));
    console.log(error, '>>>>>>>error');
    showErrorAlert(error?.response?.data?.message);
  }
}

export function* getCategoriesBasedOnListSaga(action) {
  // console.log(response,">>>>>>>res")
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
  };
  try {
    let response = yield call(getApi, `categories`, header);
    // console.log(response, '>>>>>>>res');
    if (response?.status == 200) {
      yield put(getCategoriesByListSuccess(response?.data));
    } else {
      yield put(getCategoriesByListFailure(response?.data));
      showErrorAlert(response?.data?.message);
    }
  } catch (error) {
    yield put(getCategoriesByListFailure(error));
    // console.log(error,">>>>>>>error")
    showErrorAlert(error?.response?.data?.message);
  }
}

const watchFunction = [
  (function* () {
    yield takeLatest('Category/getCategoriesListRequest', getCategoryListSaga);
  })(),
  (function* () {
    yield takeLatest(
      'Category/getCategoriesByListRequest',
      getCategoriesBasedOnListSaga,
    );
  })(),
];

export default watchFunction;
