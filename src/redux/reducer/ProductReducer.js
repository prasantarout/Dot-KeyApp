import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  //   Product: [],
  loading: false,
  error: null,
  productListRes: [],
};

const ProductSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    //theme
    getProductListRequest(state, action) {
      state.status = action.type;
    },
    getProductListSuccess(state, action) {
      state.productListRes = action.payload;
      state.status = action.type;
    },
    getProductListFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },
  },
});
export const {
  getProductListRequest,
  getProductListSuccess,
  getProductListFailure,
} = ProductSlice.actions;

export default ProductSlice.reducer;
