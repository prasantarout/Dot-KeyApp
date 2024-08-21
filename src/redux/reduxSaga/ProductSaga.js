import {call, put, takeLatest} from 'redux-saga/effects';

import {getApi} from '../../utils/helpers/ApiRequest';
import showErrorAlert from '../../utils/helpers/Toast';
import { getProductListFailure, getProductListSuccess } from '../reducer/ProductReducer';

export function* getProductSaga(action) {
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
  };
  try {
    let response = yield call(getApi, `ctc-info`, header);
    if (response?.status == 200) {
      yield put(getProductListSuccess(response?.data));
    } else {
      yield put(getProductListFailure(response?.data));
      showErrorAlert(response?.data?.message);
    }
  } catch (error) {
    yield put(getProductListFailure(error));
    showErrorAlert(error?.response?.data?.message);
  }
}

const watchFunction = [
  (function* () {
    yield takeLatest('Product/getProductListRequest', getProductSaga);
  })(),
];

export default watchFunction;
