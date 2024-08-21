import {all} from 'redux-saga/effects';
import CategorySaga from './CategorySaga';
import ProductSaga from './ProductSaga';

const combinedSaga = [...CategorySaga, ...ProductSaga];

export default function* RootSaga() {
  yield all(combinedSaga);
}
