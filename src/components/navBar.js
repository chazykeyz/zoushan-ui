import React, { useEffect, useState } from "react";
import logo from "../logo.svg";

import { NavLink } from "react-router-dom";
// icons
import { SiFacebook } from "react-icons/si";
import { AiOutlineInstagram } from "react-icons/ai";
// redux imports
import { connect } from "react-redux";

const NavBar = ({ cartItems }) => {
  const [open, setOpen] = React.useState(false);
  const [navScroll, setNavScroll] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY <= 100) {
        setNavScroll(false);
      } else {
        setNavScroll(true);
      }
    };
  }, []);

  const token = localStorage.getItem("token");

  return (
    <div
      className="grid grid-cols-12  w-screen"
      style={{
        zIndex: 200,
        background: navScroll
          ? "#d98e74"
          : "linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0,0,0,0))",
        transition: ".5s",
      }}
    >
      <div className="col-start-2 col-span-10   justify-between z-index-100 hidden md:flex fixed">
        <NavLink to="/">
          <img src={logo} className="h-20" alt="logo" />
        </NavLink>
        <div className=" justify-between items-center hidden md:flex">
          <NavLink
            to="/"
            className="mx-10 hover:text-red-400 primary"
            exact
            activeStyle={{ borderBottom: "2px solid #281b11" }}
          >
            HOME
          </NavLink>
          <NavLink
            to="/shop"
            exact
            className="mx-10 hover:text-red-400  primary"
            activeStyle={{ borderBottom: "2px solid #281b11" }}
          >
            SHOP
          </NavLink>
          <NavLink
            to="/about"
            exact
            className="mx-10 hover:text-red-400  primary"
            activeStyle={{ borderBottom: "2px solid #281b11" }}
          >
            ABOUT US
          </NavLink>

          <NavLink
            to="/orders"
            exact
            className="mx-10 hover:text-red-400 tertiaryBg px-4 py-2 rounded-xl  primary"
            onClick={() => {
              localStorage.clear();
            }}
          >
            Orders
          </NavLink>
        </div>
        <div className=" justify-between  items-center hidden md:flex ">
          <SiFacebook size={22} className="mx-2 primary" />
          <AiOutlineInstagram size={25} className="mx-2 primary" />
          <NavLink to="/checkout" className="relative">
            <div
              className={`h-6 w-6 -top-3 left-4 rounded-full absolute ${
                navScroll ? "tertiaryBg" : "secondaryBg"
              }  flex justify-center items-center primary`}
            >
              {cartItems.length}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mx-2 primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </NavLink>
        </div>
      </div>
      <div
        className="text-white secondaryBg  ease-in-out h-20  w-screen flex  md:hidden 
         overflow-hidden   fixed  z-index-200 bottom-0 justify-around items-center"
        style={{
          color: "#d98e74",
        }}
      >
        <NavLink
          to="/"
          exact
          className="my-4 hover:text-red-400 text-white"
          activeStyle={{ borderBottom: "2px solid #281b11" }}
        >
          HOME
        </NavLink>
        <NavLink
          to="/shop"
          exact
          className="my-4 hover:text-red-400 text-white"
          activeStyle={{ borderBottom: "2px solid #281b11" }}
        >
          SHOP
        </NavLink>
        <NavLink
          to="/about"
          exact
          className="my-4 hover:text-red-400 text-white"
          activeStyle={{ borderBottom: "2px solid #281b11" }}
        >
          ABOUT US
        </NavLink>
        <NavLink to="/checkout" className="relative ">
          <div
            className={`h-6 w-6 -top-3 left-4 rounded-full absolute ${
              navScroll ? "tertiaryBg" : "secondaryBg"
            }  flex justify-center items-center primary`}
          >
            {cartItems.length}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-2 primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </NavLink>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps)(NavBar);
