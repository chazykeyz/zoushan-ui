import React, { useEffect, useState } from "react";
import logo from "../logo.svg";

import { NavLink } from "react-router-dom";
// icons
import { SiFacebook } from "react-icons/si";
import { AiOutlineInstagram } from "react-icons/ai";
// redux imports
import { connect } from "react-redux";

const NavBar = ({ cartItems }) => {
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
    <div className="grid grid-cols-12  w-screen relative ">
      <div className=" px-4 pb-2 secondaryBg w-screen z-index-200 justify-between  hidden md:flex  ">
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
        </div>
        <div className=" justify-between  items-center hidden md:flex ">
          <a
            href="https://www.facebook.com/profile.php?id=100070945222979"
            target="_blank"
            className="mt-2 tertiary"
          >
            <SiFacebook size={22} className="mx-2 primary" />
          </a>
          <a
            href="https://www.instagram.com/zoushancosmetics/"
            target="_blank"
            className="mt-2 tertiary"
          >
            <AiOutlineInstagram size={25} className="mx-2 primary" />
          </a>

          <NavLink to="/checkout" className="relative">
            <div
              className="h-6 w-6 -top-3 left-4 rounded-full absolute 
            tertiaryBg  flex justify-center items-center primary"
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
        className="text-white secondaryBg  ease-in-out h-14 hidden md:flex rounded-full  w-14  right-10
         overflow-hidden   fixed  z-index-200 bottom-10 justify-around items-center"
      >
        <NavLink to="/checkout" className="relative">
          <div
            className="h-6 w-6 -top-3 left-4 rounded-full absolute 
            tertiaryBg  flex justify-center items-center primary"
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
