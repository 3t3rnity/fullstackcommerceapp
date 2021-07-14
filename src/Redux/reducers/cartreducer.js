import {
  FETCH_CART,
  ADD_CART,
  DELETE_GOOD,
  DELETE_ALL,
  CREATE_ORDER,
  UPDATE_GOOD,
} from "../actionTypes/cartTypes";

const initialState = {
  cart: null,
  totalPrice: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CART:
      return { ...state, cart: action.payload, totalPrice: action.pricef };
    case DELETE_GOOD:
      return {
        ...state,
        cart: state.cart.filter((el) => el.id !== action.goodId),
        totalPrice: state.totalPrice - action.price,
      };
    case DELETE_ALL:
      return { ...state, cart: null, totalPrice: 0 };
    case ADD_CART:
      return { ...state, cart: action.payload };
    case CREATE_ORDER:
      return { ...state, cart: null };
    case UPDATE_GOOD:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};
