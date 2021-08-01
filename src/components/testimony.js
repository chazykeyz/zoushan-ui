import React, { useState, useEffect } from "react";
// slick imports
import "./../../node_modules/slick-carousel/slick/slick.css";
import "./../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib";

import ReactStars from "react-rating-stars-component";

import axios from "axios";
import { testimoniesAPI } from "./../constant";

const TestimonySlide = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      await axios.get(testimoniesAPI).then((res) => {
        setData(res.data);
      });
    };
    dataFetch();
  }, []);
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
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="grid grid-cols-12 flex flex-col my-10">
      <div className=" col-span-12 flex  items-center flex-col">
        <div className="text-xl"> TESTIMONIES</div>
        <div
          className="secondaryBg  w-20 mt-2   "
          style={{
            height: 1,
          }}
        />
      </div>
      <Slider {...settings} className="col-span-10 col-start-2 my-4 py-4">
        {data.map((item) => (
          <div>
            <div className="rounded-xl primaryBg shd  m-2  overflow-hidden">
              <ReactStars count={5} size={24} activeColor="#d98e74" value={5} />
              <div className="p-4">
                <div align="justify">{item.content}</div>
              </div>

              <div className="px-4 pb-2  flex justify-between items-center secondaryBg pt-2">
                <div className="flex flex-col items-start">
                  <div className="text-xl">{item.name} </div>
                  <small className=" primary">{item.status}</small>
                </div>
                <div className="h-14 w-14 overflow-hidden rounded-full secondaryBg primary shadow-lg flex items-center justify-center">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="h-full w-full object-cover "
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonySlide;
