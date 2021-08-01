import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="grid grid-cols-12">
      <div className=" col-span-10 col-start-2 flex items-center mt-10  md:items-start flex-col mb-4">
        <div className="text-3xl font-bold tertiary "> ABOUT US</div>
        <div
          className="secondaryBg  w-20 mt-2   "
          style={{
            height: 2,
          }}
        />
      </div>
      <div className="col-span-10 col-start-2 flex felx-wrap grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <div align="justify">
            Zoushan Cosmetics is a 100% organic plant based skin care brand
            founded on the foundational ethics of bringing you premium quality
            skincare products, sustainably sourced from the beautiful and rich
            fbjksasbfjebwj f san vof the Tanzanian landscape. We empower the
            communities we work with through job creation and giving back a
            portion of the profits for community development and to top it off,
            all our packaging is made from recycled materials playing our part
            in reducing harm done to the enviroment
          </div>
          <div className="mt-10 flex justify-start">
            <NavLink
              to="/about"
              className=" secondaryBg tertiary font-bold px-4 py-3 rounded-2xl shd"
            >
              READ OUR STORY
            </NavLink>
          </div>
        </div>
        <div className="md:pl-8 " style={{ height: 500 }}>
          <img
            src="https://1.bp.blogspot.com/-lQiQ63r4FuI/YQaMu_VoyQI/AAAAAAAABYY/KyY_wLPAMjohLvZas3C8ZQ9R0jgCefjXwCLcBGAsYHQ/s16000/ZC-97.jpg"
            alt=""
            className="h-full w-full object-cover rounded-xl "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
