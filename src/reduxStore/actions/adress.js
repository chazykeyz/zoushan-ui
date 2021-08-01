import { ADRESS_SUCCESS, ADRESS_FAIL } from "./actionTypes";
import axios from "axios";
import { usermeAPI } from "../../constant";

export const adressSuccess =
  (country, city, zip_code, phone_number, street, userList) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("token")}`,
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({
      country,
      city,
      zip_code,
      phone_number,
      street,
    });
    try {
      const user = userList[0];
      console.log(userList);
      await axios.patch(`${usermeAPI}${user.id}/`, body, config);
      dispatch({
        type: ADRESS_SUCCESS,
        payload: true,
      });
    } catch (error) {
      dispatch({
        type: ADRESS_FAIL,
      });
    }
  };
