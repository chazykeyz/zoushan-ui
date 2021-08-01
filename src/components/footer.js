import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg";

const Footer = () => {
  return (
    <div className="grid grid-cols-12 primaryBgb py-8 ">
      <div className="flex justify-between col-span-10 col-start-2  ">
        <div className="flex flex-col items-start">
          <div className="text-2xl font-bold primary">CONTACT US</div>
          <a
            href="https://www.google.co.za/maps/place/The+Lofts+Central+-+Sheikh+Mohammed+bin+Rashid+Blvd+-+Downtown+Dubai+-+Dubai+-+Falme+za+Kiarabu/@25.1967333,55.2677482,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f427fdb06e34b:0xd117fd2fef78be95!8m2!3d25.1967333!4d55.2699369"
            target="_blank"
            className="tertiary"
          >
            The Loft Central Down Town Dubai
          </a>
          <a href="tel:+255789950505" className="tertiary">
            (+255) 789 950 505
          </a>
          <NavLink to="/" className="mt-2 ">
            <img src={logo} className="h-14 " alt="logo" />
          </NavLink>
        </div>

        <div className="flex flex-col items-start">
          <div className="text-2xl font-bold primary">QUICK LINKS</div>
          <NavLink to="/" className="mt-2 tertiary">
            home
          </NavLink>
          <NavLink to="/about" className="mt-2 tertiary">
            About
          </NavLink>
          <NavLink to="/shop" className="mt-2 tertiary">
            Shop
          </NavLink>
          <NavLink to="/cart" className="mt-2 tertiary">
            Cart
          </NavLink>
        </div>

        <div className="flex flex-col items-start">
          <div className="text-2xl font-bold primary">SOCIAL MEDIA</div>
          <a
            href="https://www.instagram.com/zoushancosmetics/"
            target="_blank"
            className="mt-2 tertiary"
          >
            Instagram
          </a>
          <a href="/" target="_blank" className="mt-2 tertiary">
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
