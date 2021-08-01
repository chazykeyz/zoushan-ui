import axios from "axios";
import { CartAPI, OrderAPI } from "../../constant";

export const Ordered = (TotalProduct, TotalPrice, user) => async (dispatch) => {
  // we fetch data of the cart from database
  const cartApi = await axios.get(CartAPI);
  //   we call the data we had from the async storage
  const cart = await localStorage.getItem("cartItems");
  const parsedCart = JSON.parse(cart);
  //   we compare the slug of our data with the db data to get the same data
  const comparedCart = parsedCart.map((item) =>
    cartApi.data.filter((items) => items.id === item.id)
  );
  //  we map through the filter ddat to get the id of the first index
  const product = comparedCart.map((dat) => dat.map((item) => item.id))[0];
  // other data
  const total_Price = TotalPrice;
  const total_product_count = TotalProduct;

  // sending data to database

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    total_Price,
    total_product_count,
    user,
    product,
  });
  console.log(body);
  await axios.post(OrderAPI, body, config);
  localStorage.clear("cartItems");
  console.log("SEND NOW GIFT!!!!!!.....");
};
