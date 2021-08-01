import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="grid grid-cols-12 pt-20">
      <div className=" col-span-10 col-start-2 flex items-center mt-10  md:items-start flex-col mb-4">
        <div className="text-3xl font-black tertiary "> ABOUT US</div>
      </div>
      <div className="col-span-10 col-start-2 flex felx-wrap grid grid-cols-1 md:grid-cols-2 items-center">
        <div align="justify">
          <div>
            <div className="secondary">MEET OUR CEO</div>
            <div className="tertiary text-3xl font-black">ZOUCHAN</div>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </div>
        </div>
        <div className="md:pl-8 " style={{ height: 500 }}>
          <img
            src="https://1.bp.blogspot.com/-EMM1imKQW70/YQaQKLkye7I/AAAAAAAABYg/W0y1y1filA0sYyhBB5AvCDXMptFkJdWHwCLcBGAsYHQ/s16000/ZC-57.jpg"
            alt=""
            className="h-full w-full object-cover rounded-xl "
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 col-span-10 col-start-2 my-10 ">
        <div className="shd h-80 rounded-3xl flex flex-col items-center justify-center">
          <div className="font-bold text-3xl secondary">OUR VISION</div>
          <div>
            We are committed to sourcing all natural ingredients to create high
            quality skin care solutions.
          </div>
        </div>
        <div className="shd h-80 rounded-3xl flex flex-col items-center justify-center overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="https://1.bp.blogspot.com/-wAL7BH-HAPA/YQaVIHWANbI/AAAAAAAABZI/RCrZcIzEHGADEdrwjGmlSV3JQPY9Xp3RQCLcBGAsYHQ/s16000/ZC-27.jpg"
            alt=""
          />
        </div>
        <div className="shd h-80 rounded-3xl flex flex-col items-center p-4 justify-center">
          <div className="font-bold text-3xl secondary">OUR MISSION</div>
          <div>
            To restore and lavish skin using nature’s best ingredients and to
            inspire others to walk by faith!
          </div>
        </div>
        <div className="shd h-80 rounded-3xl flex flex-col items-center justify-center overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="https://1.bp.blogspot.com/-OKwMfFS72G8/YQaVjDjCYhI/AAAAAAAABZQ/ZFkPPzl9eiwSMI4FJYOp9B1Eu0ArYfrGwCLcBGAsYHQ/s16000/ZC-79.jpg"
            alt=""
          />
        </div>
        <div className="shd h-80 rounded-3xl flex flex-col items-center justify-center p-6">
          <div className="font-bold text-3xl secondary">WHAT WE BELIEVE IN</div>
          <div>
            We believe in preserving nature and also harnesing its pure cosmetic
            capabilities that have revolutionised beauty. Use our skin products
            knowing with every purchase no animal was harmed and a community
            that played a hand in producing these 100% organic products have
            benefitted.
          </div>
        </div>
        <div className="shd h-80 rounded-3xl flex flex-col items-center justify-center overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="https://1.bp.blogspot.com/-zH0F8wBVXpI/YQaWFtBTC6I/AAAAAAAABZY/iuIRA-4yr-YHZK_qM1PNdINV-C79M4QagCLcBGAsYHQ/s16000/ZC-67.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
