import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  //   categories: [],
  loading: false,
  error: null,
  categoriesListRes: [],
  categoriesByListRes: [],
};

const CategorySlice = createSlice({
  name: 'Category',
  initialState,
  reducers: {
    //theme
    getCategoriesListRequest(state, action) {
      state.status = action.type;
    },
    getCategoriesListSuccess(state, action) {
      state.categoriesListRes = action.payload;
      state.status = action.type;
    },
    getCategoriesListFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    getCategoriesByListRequest(state, action) {
      state.status = action.type;
    },
    getCategoriesByListSuccess(state, action) {
      state.categoriesByListRes = action.payload;
      state.status = action.type;
    },
    getCategoriesByListFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    
  },
});
export const {
  getCategoriesListRequest,
  getCategoriesListSuccess,
  getCategoriesListFailure,

  getCategoriesByListRequest,
  getCategoriesByListSuccess,
  getCategoriesByListFailure,

} = CategorySlice.actions;

export default CategorySlice.reducer;
