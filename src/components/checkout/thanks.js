import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { usermeAPI } from "../../constant";
import axios from "axios";

const ThanksComponent = (props) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const configAuth = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("token")}`,
        Accept: "application/json",
      },
    };
    const dataFetch = async () => {
      await axios.get(usermeAPI, configAuth).then((res) => {
        setUser(res.data);
      });
    };
    dataFetch();
  }, []);
  return (
    <div className="flex flex-col items-center w-100 h-screen justify-center">
      <div className="shd secondaryBg col-md-7 col-10 rounded-xl p-4">
        <div className="flex justify-center text-3xl font-black">
          Thanks, for Ordering the Product
        </div>

        <hr />
        <div className="my-4 text-base">
          Kindly Wait for the Product Via the Adress Your Have filled!
          <br />
          Incase of Any Issue be free to contant Us via:
          <br />
          <div className="font-black text-3xl mt-2">(+255) 789 950 505</div>
        </div>
        <div className="flex justify-center w-full">
          <a
            href="/shop"
            className="hover:text-red-400 tertiaryBg primary py-2 px-4 rounded-xl my-4"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThanksComponent;
