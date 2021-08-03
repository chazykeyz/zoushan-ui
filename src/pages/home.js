import React, { useState, useEffect } from "react";
import Slider from "react-slick";
// slick imports
import "./../../node_modules/slick-carousel/slick/slick.css";
import "./../../node_modules/slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import "../App.css";
import ProductSlide from "../components/productSlide";
// import TestimonySlide from "../components/testimony";

import rabbit from "../rabbit.svg";
import recycle from "../recycle.svg";
import community from "../community.svg";
import organic from "../organic.svg";
import About from "../components/about";

import axios from "axios";
import { slideAPI, productsAPI } from "./../constant";
import Footer from "../components/footer";

const Home = () => {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      await axios.get(slideAPI).then((res) => {
        setData(res.data);
      });
      await axios.get(productsAPI).then((res) => {
        setProduct(res.data);
      });
    };
    dataFetch();
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 10000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const Featured = ({ title, icon }) => {
    return (
      <div className="h-40 rounded-xl   w-full shd flex flex-col justify-center items-center overflow-hidden">
        <img src={icon} alt="rabbit" className="h-24  p-4" />
        <small className="mt-2 secondaryBg w-full h-full flex items-center justify-center text-white">
          {title}
        </small>
      </div>
    );
  };
  return (
    <div>
      <div>
        <Slider {...settings}>
          {data.map((item) => (
            <div className="relative " key={item.id}>
              <div className="w-screen " style={{ height: "90vh" }}>
                <img
                  src={item.thumbnail}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-full w-full grid grid-cols-12 absolute left-0  top-0">
                <div className="col-span-12 flex flex-col items-center justify-end mb-20">
                  <div
                    className="
                  primary"
                  >
                    CRUELTY FREE <br />
                    100% ORGANIC
                  </div>
                  <div className="h-10" />
                  <NavLink
                    to="/shop"
                    className="px-4 py-3 tertiary my-2 rounded-full primaryBg App "
                  >
                    SHOP NOW
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="py-10 " style={{ zIndex: 0 }}>
        <ProductSlide data={product} />
      </div>
      <div className="primaryBgb py-8">
        <About />
      </div>

      <div className="grid grid-cols-12 my-10">
        <div className=" col-span-12 flex  items-center flex-col mb-4">
          <div className="text-xl"> OUR CORE VALUES</div>
          <div
            className="secondaryBg  w-20 mt-2   "
            style={{
              height: 1,
            }}
          />
        </div>
        <div className="col-span-10 col-start-2 flex items-center flex-wrap grid py-6 grid-cols-2 md:grid-cols-4 gap-2 lg:gap-8 md:gap-4">
          <div className="flex items-center">
            <Featured title="CRUELTY FREE" icon={rabbit} />
          </div>
          <div className="flex items-center">
            <Featured title="RECYCLED PACKAGING" icon={recycle} />
          </div>
          <div className="flex items-center">
            <Featured title="COMMUNITY SUPPORT" icon={community} />
          </div>
          <div className="flex items-center">
            <Featured title="100% ORGANIC" icon={organic} />
          </div>
        </div>
      </div>

      {/* <div>
        <TestimonySlide />
      </div> */}

      <Footer />
    </div>
  );
};

export default Home;
