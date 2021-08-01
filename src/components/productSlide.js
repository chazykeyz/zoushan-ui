import React from "react";
// slick imports
import "./../../node_modules/slick-carousel/slick/slick.css";
import "./../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib";
import { connect } from "react-redux";
// an action import from redux
import { addToCart } from "./../reduxStore/actions/cart";

import cart from "../cart.svg";
import { NavLink } from "react-router-dom";

const ProductSlide = ({ data, cartItems, addToCart }) => {
  const settings = {
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="grid grid-cols-12 flex flex-col">
      <div className=" col-span-12 flex  items-center flex-col">
        <div className="text-xl"> PRE-ORDER OUR RANGE</div>
        <div
          className="secondaryBg  w-20 mt-2   "
          style={{
            height: 1,
          }}
        />
      </div>
      <Slider {...settings} className="col-span-10 col-start-2 my-4 py-4">
        {data.map((item) => (
          <div key={item.id}>
            <div className="rounded-xl primaryBg shadow-lg  m-2 overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.name}
                className="h-60 w-full object-cover"
              />

              <div className="px-4 pb-2  flex justify-between items-center mt-2">
                <div className="flex flex-col items-start">
                  <NavLink to={`/product/${item.name}`} className="text-xl">
                    {item.name}
                  </NavLink>
                  <small className=" secondary">{item.category.category}</small>
                  <div className="">${item.price}</div>
                </div>
                <div
                  onClick={(e) => {
                    addToCart(cartItems, item);
                  }}
                  className="h-14 w-14 rounded-full cursor-pointer secondaryBg primary shd flex items-center justify-center"
                >
                  <img src={cart} alt="" className="h-6" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart })(ProductSlide);
