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
      className="grid grid-cols-12 pt-4 fixed w-screen"
      style={{
        zIndex: 100,
        height: !navScroll && 100,
        background: navScroll
          ? "#d98e74"
          : "linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0,0,0,0))",
        transition: ".5s",
      }}
    >
      <div className="col-start-2 col-span-10  flex justify-between">
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
          {!token ? (
            <NavLink
              to="/auth/login"
              exact
              className="mx-10 hover:text-red-400  primary"
              activeStyle={{ borderBottom: "2px solid #281b11" }}
            >
              Log in
            </NavLink>
          ) : (
            <NavLink
              to="/logout"
              exact
              className="mx-10 hover:text-red-400 tertiaryBg px-4 py-2 rounded-xl  primary"
              onClick={() => {
                localStorage.clear();
              }}
            >
              Log Out
            </NavLink>
          )}
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
        <div className="md:hidden flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 -mr-6"
            style={{ color: "#281b11" }}
            fill="none"
            onClick={() => {
              setOpen(true);
            }}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>
      <div
        className={`transition duration-500 primaryBg pb-4 ease-in-out bg-red-500  w-screen flex flex-col md:hidden ${
          open ? "h-auto" : "h-0"
        } overflow-hidden  -mt-4 absolute `}
        style={{
          color: "#d98e74",
        }}
      >
        <div
          className="w-full flex justify-end"
          onClick={() => {
            setOpen(false);
          }}
        >
          <div className=" h-10 w-10 m-4 cursor rounded-full flex justify-center items-center bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6  cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <NavLink
          to="/"
          className="my-4 hover:text-red-400"
          onClick={() => {
            setOpen(false);
          }}
        >
          HOME
        </NavLink>
        <NavLink
          to="/shop"
          className="my-4 hover:text-red-400"
          onClick={() => {
            setOpen(false);
          }}
        >
          SHOP
        </NavLink>
        <NavLink
          to="/about"
          className="my-4 hover:text-red-400"
          onClick={() => {
            setOpen(false);
          }}
        >
          ABOUT US
        </NavLink>

        {!token ? (
          <NavLink
            to="/auth/login"
            exact
            className="mx-10 hover:text-red-400  primary"
            activeStyle={{ borderBottom: "2px solid #281b11" }}
          >
            Log in
          </NavLink>
        ) : (
          <NavLink
            to="/logout"
            exact
            className="mx-10 hover:text-red-400 tertiaryBg px-4 py-2 rounded-xl  primary"
            onClick={() => {
              localStorage.clear();
            }}
          >
            Log Out
          </NavLink>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps)(NavBar);
