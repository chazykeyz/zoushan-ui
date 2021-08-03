import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { adressSuccess } from "./../../reduxStore/actions/adress";
import { Redirect } from "react-router-dom";
import { Ordering } from "../../reduxStore/actions/order";
import { Ordered } from "../../reduxStore/actions/finalOrder";
import { usermeAPI } from "../../constant";
import axios from "axios";

const Adress = ({ Ordered, adressSuccess, final, cartItems }) => {
  // defining the state

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [zip_code, setZip_code] = useState("");
  const [number, setNumber] = useState("");
  const [user, setUser] = useState([]);

  const [sendOrder, setSendOrder] = useState(false);

  useEffect(() => {
    const configAuth = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("token")}`,
        Accept: "application/json",
      },
    };
    const dataFetch = async () => {
      await axios.get(usermeAPI, configAuth).then((res) => {
        setUser(res.data);
      });
    };
    dataFetch();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    adressSuccess(country, city, zip_code, number, street, user);
  };
  const TotalPrice = cartItems.reduce((a, c) => a + c.price, 0);
  const TotalProduct = cartItems.length;

  if (sendOrder) {
    return <Redirect to="/ordering-report" />;
  }

  return (
    <div className="w-full p-4 col-12">
      {final ? (
        <div className="flex flex-col col-md-12  items-center mt-10">
          <div className="text-3xl tertiary">Adress</div>
          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <input
              required
              value={number}
              placeholder="Phone Number"
              className="w-full my-2 primaryBg py-3 px-4 rounded-2xl"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
            <input
              required
              value={country}
              placeholder="Country"
              className="w-full my-2 primaryBg py-3 px-4 rounded-2xl"
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
            <input
              required
              value={city}
              placeholder="City"
              className="w-full my-2 primaryBg py-3 px-4 rounded-2xl"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <input
              required
              value={street}
              placeholder="Street"
              className="w-full my-2 primaryBg py-3 px-4 rounded-2xl"
              onChange={(e) => {
                setStreet(e.target.value);
              }}
            />
            <input
              required
              value={zip_code}
              placeholder="Zip Code"
              className="w-full my-2 primaryBg py-3 px-4 rounded-2xl"
              onChange={(e) => {
                setZip_code(e.target.value);
              }}
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="tertiaryBg px-4 py-3 rounded-2xl m-3 primary"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full">
          {user.map((item) => (
            <div>
              <div className="text-3xl font-black mb-4">
                {item.username}, You can order Now!
              </div>
              <div>
                <button
                  type="submit"
                  onClick={() => {
                    Ordered(TotalProduct, TotalPrice, item.id);
                    setTimeout(() => {
                      setSendOrder(true);
                    }, 500);
                  }}
                  className="tertiaryBg px-4 py-3 rounded-2xl m-3 primary"
                >
                  Place Order Now!
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  const next = localStorage.getItem("orderLoad");
  return {
    final: next === null,
    thanks: state.order,
    cartItems: state.cart.items,
  };
};
export default connect(mapStateToProps, { adressSuccess, Ordering, Ordered })(
  Adress
);
