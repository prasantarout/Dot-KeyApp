import {call, put, takeLatest} from 'redux-saga/effects';

import {getApi} from '../../utils/helpers/ApiRequest';
import showErrorAlert from '../../utils/helpers/Toast';
import {
  getProductByCategoryFailure,
  getProductByCategorySuccess,
  getProductByIdFailure,
  getProductByIdSuccess,
  getProductListFailure,
  getProductListSuccess,
} from '../reducer/ProductReducer';

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

export function* getProductByCategorySaga(action) {
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
  };
  try {
    let response = yield call(getApi, `category/${action.payload}`, header);
    // console.log(response,">>>>>>>?>>>>products")
    if (response?.status == 200) {
      yield put(getProductByCategorySuccess(response?.data));
    } else {
      yield put(getProductByCategoryFailure(response?.data));
      showErrorAlert(response?.data?.message);
    }
  } catch (error) {
    yield put(getProductByCategoryFailure(error));
    showErrorAlert(error?.response?.data?.message);
  }
}

export function* getProductByIdSaga(action) {
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
  };
  try {
    let response = yield call(getApi, `/${action.payload}`, header);
    // console.log(response,">>>>>>>?>>>>products")
    if (response?.status == 200) {
      yield put(getProductByIdSuccess(response?.data));
    } else {
      yield put(getProductByIdFailure(response?.data));
      showErrorAlert(response?.data?.message);
    }
  } catch (error) {
    yield put(getProductByIdFailure(error));
    showErrorAlert(error?.response?.data?.message);
  }
}


const watchFunction = [
  (function* () {
    yield takeLatest('Product/getProductListRequest', getProductSaga);
  })(),
  (function* () {
    yield takeLatest(
      'Product/getProductByCategoryRequest',
      getProductByCategorySaga,
    );
  })(),
  (function* () {
    yield takeLatest(
      'Product/getProductByIdRequest',
      getProductByIdSaga,
    );
  })(),
];

export default watchFunction;
