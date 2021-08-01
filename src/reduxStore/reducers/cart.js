import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_FROM_CART,
  DECREASE_TO_CART,
  CLEAR_CART,
} from "../actions/actionTypes";

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("added to cart");
      return { ...state, items: action.payload.cartItems };

    case REMOVE_FROM_CART:
      return { ...state, items: action.payload.cartItems };
    case INCREASE_FROM_CART:
      return { ...state, items: action.payload.cartItems };
    case DECREASE_TO_CART:
      return { ...state, items: action.payload.cartItems };
    case CLEAR_CART:
      return { ...state, items: [] };

    default:
      return state;
  }
}
