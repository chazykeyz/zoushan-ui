import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import cart from "../cart.svg";

import axios from "axios";
import { productsAPI, categoriesAPI } from "./../constant";

const ShopCategory = (props) => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [number, setNumber] = React.useState(1);

  useEffect(() => {
    const dataFetch = async () => {
      await axios.get(productsAPI).then((res) => {
        setData(res.data);
      });
      await axios.get(categoriesAPI).then((res) => {
        setCategory(res.data);
      });
    };
    dataFetch();
  }, []);

  return (
    <div className="grid grid-cols-12 py-20">
      <div className=" col-span-10 col-start-2 flex items-center mt-10  md:items-start flex-col mb-4">
        <div className="text-3xl font-bold tertiary "> SHOP OUR RANGE </div>
        <div
          className="secondaryBg  w-20 mt-2   "
          style={{
            height: 2,
          }}
        />
      </div>
      <div className="col-span-10 col-start-2">
        <div className="flex flex-wrap">
          {category.map((item) => (
            <NavLink
              key={item.id}
              to={`/shop/${item.category}`}
              className="px-4 py-2 m-4 shd primary secondaryBg rounded-2xl"
              activeClassName="tertiaryBg primary"
            >
              {item.category}
            </NavLink>
          ))}
        </div>
        <div className="flex flex-wrap w-full grid md:grid-cols-3 grid-cols-1 lg:grid-cols-5 gap-4">
          {data
            .slice(`${(number - 1) * 10}`, `${number * 10}`)
            .filter(
              (item) => item.category.category === props.match.params.category
            )
            .map((item) => (
              <div key={item.id}>
                <div className="rounded-xl primaryBg shadow-lg m-2 overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="h-40 md:h-60 w-full object-cover"
                  />

                  <div className="px-4 pb-2  flex justify-between items-center mt-2">
                    <div className="flex flex-col items-start">
                      <NavLink to={`/product/${item.name}`} className="text-xl">
                        {item.name}
                      </NavLink>
                      <small className=" secondary">
                        {item.category.category}
                      </small>
                      <div className="">${item.price}</div>
                    </div>
                    <div className="md:h-14 md:w-14 h-10 w-10 rounded-full cursor-pointer secondaryBg primary shd flex items-center justify-center">
                      <img src={cart} alt="" className="h-4 md:h-6" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="flex flex-wrap col-span-10 col-start-2">
        {data
          .filter((item, i) => i % 10 === 0)
          .map((item, i) => (
            <div
              to="/s"
              className={`px-4 py-2 m-2 shd cursor-pointer rounded-full primary ${
                number === i + 1 ? "tertiaryBg" : "secondaryBg"
              }`}
              activeClassName="tertiaryBg primary"
              onClick={() => {
                setNumber(i + 1);
              }}
            >
              {i + 1}
            </div>
          ))}
      </div>
      <div className="my-3 d-flex flex-row"></div>
    </div>
  );
};

export default ShopCategory;
