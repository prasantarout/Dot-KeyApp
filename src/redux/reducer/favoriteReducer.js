import {TOGGLE_FAVORITE,UPDATE_QUANTITY} from '../actions/favoriteActions';

const initialState = {
  favorites: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favorites.findIndex(
        item => item.id === action.payload.id,
      );
      if (existingIndex >= 0) {
        // Remove from favorites if already added
        const updatedFavorites = [...state.favorites];
        updatedFavorites.splice(existingIndex, 1);
        return {...state, favorites: updatedFavorites};
      } else {
        // Add to favorites
        return {...state, favorites: state.favorites.concat(action.payload)};
      }
    case UPDATE_QUANTITY:
      return {
        ...state,
        favorites: state.favorites.map(item =>
          item.id === action.payload.id
            ? {...item, quantity: action.payload.quantity}
            : item,
        ),
      };
    default:
      return state;
  }
};

export default favoriteReducer;
