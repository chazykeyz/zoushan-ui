import { combineReducers } from "redux";
import cartReducers from "./cart";
import AuthReducer from "./auth";
import AdressReducer from "./adress";
import OrderReducer from "./order";

export default combineReducers({
  cart: cartReducers,
  auth: AuthReducer,
  adress: AdressReducer,
  order: OrderReducer,
});
