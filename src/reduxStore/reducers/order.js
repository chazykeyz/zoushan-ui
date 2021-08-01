import { ORDER_SUCCESS, ORDER_FAIL } from "../actions/actionTypes";
import { updatedObject } from "./utility";

const initialState = {
  thanks: "thanks",
};

const ordered = (state, action) => {
  localStorage.removeItem("orderLoad");
  return updatedObject(state, {
    thanks: "thanks",
  });
};

const orderFail = (state, action) => {
  return updatedObject(state, {
    thanks: null,
  });
};

const OrderReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ORDER_SUCCESS:
      return ordered(state, action);
    case ORDER_FAIL:
      return ORDER_FAIL(state, action);
    default:
      return state;
  }
};

export default OrderReducer;
