import React, { useState, useEffect } from "react";

import axios from "axios";
import { productsAPI } from "./../constant";
// react redux import for connecting redux
import { connect } from "react-redux";
// redux action import
import {
  removeFromCart,
  increaseFromCart,
  decreaseFromCart,
  clearCart,
} from "./../reduxStore/actions/cart";
import { Ordering } from "./../reduxStore/actions/order";

const Product = (props) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      await axios.get(productsAPI).then((res) => {
        setProduct(res.data);
      });
    };
    dataFetch();
  }, []);

  const data = product.filter((item) => item.name === props.match.params.name);

  return (
    <div className="pt-20">
      {data.map((item) => (
        <div className="flex grid grid-cols-1 md:grid-cols-3 py-10">
          <div className="flex flex-col justify-center items-start md:ml-10">
            <div className="text-2xl font-bold">{item.name}</div>
            <small className="secondary">{item.category.category}</small>
            <div>{item.description}</div>
          </div>
          <div>
            <img
              src={item.thumbnail}
              alt=""
              className="rounded-xl w-full object-cover"
              style={{
                height: 400,
              }}
            />
          </div>
          <div className="flex items-center justify-center my-10">
            <div className="flex flex-col mx-4">
              <div className="secondary">Price</div>
              <div className="text-3xl font-bold">${item.price}</div>
              {item.volume && <div className="secondary">{item.volume} ml</div>}
            </div>
            <div className="flex flex-col mx-4 text-red-700">
              <div className="secondary text-xl">Quantity</div>
              {props.cartItems.map((item) => (
                <div className="flex items-center my-2">
                  <div
                    onClick={(e) =>
                      props.decreaseFromCart(props.cartItems, item)
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </div>
                  <div className="h-10 w-10 flex mx-3 justify-center items-center rounded-full  tertiaryBg text-white">
                    {item.quantity}
                  </div>
                  <div
                    onClick={(e) => props.removeFromCart(props.cartItems, item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, {
  removeFromCart,
  increaseFromCart,
  decreaseFromCart,
  clearCart,
  Ordering,
})(Product);
