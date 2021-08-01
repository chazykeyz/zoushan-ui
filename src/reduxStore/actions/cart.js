// ation types imports
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_TO_CART,
  INCREASE_FROM_CART,
  CLEAR_CART,
} from "./actionTypes";
// import API URLS
import axios from "axios";
import { productsAPI } from "../../constant";

// adding to the cart
export const addToCart = (items, item) => async (dispatch) => {
  console.log("here");
  const cartItems = items.slice();
  // the slice() will aid to make a copy of the selected item from array to be cartItems
  let productAlreadyInCart = false;
  const slug = item.id;
  const res = await axios.get(`${productsAPI}${slug}`);
  const originalData = res.data;

  cartItems.forEach((selectedItem) => {
    if (selectedItem.id === item.id) {
      // check if selected items is in the cart to stop adding count and add its quantity only
      selectedItem.quantity += 1;
      selectedItem.price = originalData.price * selectedItem.quantity;
      productAlreadyInCart = true;
    }
  });
  if (!productAlreadyInCart) {
    cartItems.push({ ...item, quantity: 1 });
    localStorage.setItem("cartItems", JSON.stringify(cartItems)); //save to local storage to avoid loss of data after refresh
    dispatch({
      type: ADD_TO_CART,
      payload: { cartItems },
    });
  }
};

// removing from the cart
export const removeFromCart = (items, item) => (dispatch) => {
  const cartItems = items
    .slice()
    .filter((selectedItem) => selectedItem.id !== item.id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
};

// increasing the cart
export const increaseFromCart = (items, item) => async (dispatch) => {
  const cartItems = items.slice();
  const slug = item.id;
  const res = await axios.get(`${productsAPI}${slug}`);
  const originalData = res.data;

  cartItems.forEach((selectedItem) => {
    if (selectedItem.id === item.id) {
      // check if selected items is in the cart to stop adding count and add its quantity only
      selectedItem.quantity += 1;
      selectedItem.price = originalData.price * selectedItem.quantity;
    }
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: INCREASE_FROM_CART, payload: { cartItems } });
};

// decreasing the cart
export const decreaseFromCart = (items, item) => async (dispatch) => {
  const cartItems = items.slice();
  const slug = item.id;
  const res = await axios.get(`${productsAPI}${slug}`);
  const originalData = res.data;

  cartItems.forEach((selectedItem) => {
    if (selectedItem.id === item.id) {
      // check if selected items is in the cart to stop adding count and add its quantity only

      if (selectedItem.quantity >= 2) {
        selectedItem.quantity -= 1;
        selectedItem.price = originalData.price * selectedItem.quantity;
      } else {
        selectedItem.quantity = 1;
        selectedItem.price = originalData.price;
      }
    }
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: DECREASE_TO_CART, payload: { cartItems } });
};

// clearing the cart
export const clearCart = (items) => (dispatch) => {
  const cartItems = { ...items };

  localStorage.removeItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: CLEAR_CART, payload: { cartItems } });
};
