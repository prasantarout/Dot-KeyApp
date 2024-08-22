import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import CategoryReducer from '../reducer/CategoryReducer';
import ProductReducer from '../reducer/ProductReducer';
import { logger } from 'redux-logger';
import RootSaga from '../reduxSaga/RootSaga';
import favoriteReducer from '../reducer/favoriteReducer';

// Create the saga middleware
let sagaMiddleware = createSagaMiddleware();

// Configure the store
const store = configureStore({
  reducer: {
    CategoryReducer: CategoryReducer, // You can use shorter keys
    ProductReducer: ProductReducer,
    favoriteReducer:favoriteReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }) // Disable thunk if using sagas
      .concat(sagaMiddleware)
      .concat(logger), // Add logger if needed
});

// Run the root saga
sagaMiddleware.run(RootSaga);

export default store;
