export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

export const toggleFavorite = (product) => ({
  type: TOGGLE_FAVORITE,
  payload: product,
});

export const updateQuantity = (id, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { id, quantity },
});