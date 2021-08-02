import React, { useState, useEffect } from "react";
import NavBar from "../components/navBar";

import axios from "axios";
import { productsAPI } from "./../constant";
import cart from "../cart.svg";
// react redux import for connecting redux
import { connect } from "react-redux";
// redux action import
import {
  removeFromCart,
  increaseFromCart,
  decreaseFromCart,
  clearCart,
} from "./../reduxStore/actions/cart";
import { addToCart } from "./../reduxStore/actions/cart";
import { Ordering } from "./../reduxStore/actions/order";
import ProductSlide from "../components/productSlide";

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
    <div>
      <NavBar home={true} />
      {data.map((item) => (
        <div className="md:pt-28">
          <div className="flex grid grid-cols-1 md:grid-cols-3 ">
            <div className="flex flex-col justify-center items-start  md:ml-10">
              <div className="mb-10">
                <img
                  src={item.thumbnail}
                  alt=""
                  className="rounded-3xl w-full object-cover"
                  style={{
                    height: 400,
                  }}
                />
              </div>
              <div className="text-2xl font-bold mx-4">{item.name}</div>
              <small className="secondary mx-4">{item.category.category}</small>
              <div align="justify" className="mx-4">
                {item.description}
              </div>
            </div>

            <div className="flex items-center justify-center my-10">
              <div className="flex flex-col mx-4">
                <div className="secondary">Price</div>
                <div className="text-3xl font-bold">${item.price}</div>
                {item.volume && (
                  <div className="secondary">{item.volume} ml</div>
                )}
              </div>
              <div className="flex flex-col mx-4 text-red-700">
                <div
                  onClick={(e) => {
                    addToCart(props.cartItems, item);
                  }}
                  className="h-14 w-14 rounded-full cursor-pointer secondaryBg primary shd flex items-center justify-center"
                >
                  <img src={cart} alt="" className="h-6" />
                </div>
              </div>
            </div>
          </div>
          <div className="py-10 ">
            <ProductSlide data={product} name={item.name} />
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
  addToCart,
})(Product);
