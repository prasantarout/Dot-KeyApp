import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../actions/cartActions';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const exists = state.cartItems.find(item => item.id === product.id);

      if (exists) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 } 
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...product, quantity: 1 }],
        };
      }
    }

    case REMOVE_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };
    }

    case UPDATE_CART_QUANTITY: {
      const { productId, quantity } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === productId ? { ...item, quantity } : item
        ),
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
