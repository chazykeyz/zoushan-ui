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
    cartApi.data.filter(
      (items) =>
        items.name === item.name && items.user === user && items.sold === false
    )
  );

  //  we map through the filter ddat to get the id of the first index
  const product = comparedCart.map((dat) => dat.map((item) => item.id)[0]);
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

  const body2 = {
    sold: true,
  };
  await axios.post(OrderAPI, body, config).then(() => {
    cartApi.data
      .filter((item) => item.user === user)
      .map((item) =>
        axios.patch(
          `https://zoushancosmetics.herokuapp.com/api/cart/${item.id}/`,
          body2,
          config
        )
      );
  });
  localStorage.clear("cartItems");
};
