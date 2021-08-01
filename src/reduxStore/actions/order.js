import { CartAPI, usermeAPI } from "../../constant";
import axios from "axios";

export const Ordering = (cartItems) => async (dispatch) => {
  try {
    //the product loop to post data
    cartItems.map(async (items) => {
      // ordering the products
      const configAuth = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("token")}`,
          Accept: "application/json",
        },
      };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // items
      const userList = await axios.get(usermeAPI, configAuth);
      const user = userList.data[0];

      const { name, price, product_count } = items;
      const body = JSON.stringify({
        name,
        price,
        product_count,
        user: user.id,
      });
      await axios.post(CartAPI, body, config);
    });
  } catch (error) {
    console.log(error);
  }
};
