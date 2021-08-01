// the action imports
import { ADRESS_SUCCESS, ADRESS_FAIL } from "../actions/actionTypes";
import { updatedObject } from "./utility";

const initialState = {
  orderLoad: false,
};

const adress = (state, action) => {
  localStorage.setItem("orderLoad", action.payload);
  return updatedObject(state, {
    orderLoad: action.payload,
  });
};

const adressFail = (state, action) => {
  return updatedObject(state, {
    orderLoad: null,
  });
};

const AdressReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ADRESS_SUCCESS:
      return adress(state, action);
    case ADRESS_FAIL:
      return adressFail(state, action);
    default:
      return state;
  }
};

export default AdressReducer;
