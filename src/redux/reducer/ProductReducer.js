import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  //   Product: [],
  loading: false,
  error: null,
  productListRes: [],
  getProductByCategoryRes: {},
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

  
  
    getProductByCategoryRequest(state, action) {
      state.status = action.type;
    },
    getProductByCategorySuccess(state, action) {
      state.getProductByCategoryRes = action.payload;
      state.status = action.type;
    },
    getProductByCategoryFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },
  },
});
export const {
  getProductListRequest,
  getProductListSuccess,
  getProductListFailure,

  getProductByCategoryRequest,
  getProductByCategorySuccess,  
  getProductByCategoryFailure,
} = ProductSlice.actions;

export default ProductSlice.reducer;
