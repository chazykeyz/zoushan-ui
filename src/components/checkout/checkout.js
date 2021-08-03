import React from "react";
// own components imports
import Adress from "./adress";
import Summary from "./summary";
// router import
import { Redirect } from "react-router-dom";
// import Review from "../checkout/Review";
function CheckOutComponet() {
  const token = localStorage.getItem("token");
  if (token === null) {
    return <Redirect to="/login/" />;
  }

  return (
    <div className=" pt-40 py-20 flex items-center justify-center">
      <div className="grid grid-cols-12 flex flex-wrap justify-center">
        <div className="grid grid-cols-12 col-span-12 gap-2">
          <div className=" col-span-10  md:col-span-6 lg:col-span-6 l4 m shd rounded-3xl secondaryBg">
            <Adress />
          </div>

          <div className="col-span-10  md:col-span-5 lg:col-span-6  shd rounded-3xl bg-white p-3">
            <Summary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutComponet;
