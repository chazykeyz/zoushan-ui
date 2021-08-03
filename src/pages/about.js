import React from "react";
import Footer from "../components/footer";

const About = () => {
  return (
    <div className="grid grid-cols-12 ">
      <div className=" col-span-10 col-start-2 flex items-center mt-10  md:items-start flex-col mb-4  ">
        <div className="text-3xl font-black tertiary "> ABOUT US</div>
      </div>
      <div className="col-span-10 col-start-2 flex felx-wrap grid grid-cols-1 md:grid-cols-2 items-center mt-10 ">
        <div align="justify">
          <div>
            <div className="secondary">MEET OUR CEO</div>
            <div className="tertiary text-3xl font-black">ZOUSHAN</div>
          </div>
          <div className="my-4">
            Who is my biggest inspiration? My mother. I was born and raised in
            Tanzania. A place where nature inspires beauty. At a young age, I
            would sit and watch my mother apply all-natural products to her skin
            after coming out of the bath. I could not help noticing how these
            products helped to keep her skin healthy and rejuvenated. Her skin
            would glow all day long. She would always say, "organic beauty is
            the best". <br />
            <br /> In 2016, I lost my mother. I quickly realized that I had
            fallen in love with organic skincare. Each time I applied her
            products to my skin, I felt directly connected to her. Those times
            became light-bulb moments. What if I could use those same
            ingredients to create an accessible skin line that would also give
            back to my local community? ZOUSHAN was born. Since then, my biggest
            dream has been to create a product line that is all-natural and
            loved by all. <br />
            <br /> ZOUSHAN cosmetics is a 100% handmade skincare solution made
            with love and powered by nature. Organic, ethically sourced, and
            locally made, I am proud to say that I have created a brand that I
            love that serves my community. After testing my products on myself,
            I decided to share the results with the world. I noticed a drastic
            improvement in the texture and tone of my skin and its overall
            health. GIVING BACK.
            <br />
            <br /> Losing my mother gave me a different perspective on
            everything. More so, it shed light for me on the struggles of the
            children in need of a home and parental love. The daily struggles of
            a young child growing without a parent influenced my lifestyle and
            my way of thinking. ZOUSHAN cosmetics is the opportunity for me to
            share the same love and support I received during my time of need.
            With that in mind, I decided that 10% of ZOUSHAN proceeds would be
            distributed to orphanages around the world to fulfill their basic
            need
          </div>
        </div>
        <div className="md:pl-8 " style={{ height: 500 }}>
          <img
            src="https://1.bp.blogspot.com/-7jLRkgcURcc/YQmXYwVZPZI/AAAAAAAABaQ/bfWgEN1k8zsKaf48kgcL48A4Ku2LvBnYQCLcBGAsYHQ/s16000/2.jpg"
            alt=""
            className="h-full w-full object-cover rounded-xl "
          />
        </div>
      </div>

      {/* <div className="col-span-10 col-start-2 flex felx-wrap grid grid-cols-1 mt-10 md:grid-cols-2 items-center">
        <div className="md:pr-8 " style={{ height: 300 }}>
          <img
            src="https://1.bp.blogspot.com/-CixetRczF_g/YQmmRZLEhyI/AAAAAAAABbQ/TfSAErl8qUUKoJ-gGYQMhMLQQ4FzZ_9dgCLcBGAsYHQ/s16000/WhatsApp%2BImage%2B2021-08-03%2Bat%2B23.17.26.jpeg"
            alt=""
            className="h-full 
             object-cover rounded-xl "
          />
        </div>
        <div align="justify" className="my-4">
          <div>
            Losing my mother gave me a different perspective on everything. More
            so, it shed light for me on the struggles of the children in need of
            a home and parental love. The daily struggles of a young child
            growing without a parent influenced my lifestyle and my way of
            thinking. ZOUSHAN cosmetics is the opportunity for me to share the
            same love and support I received during my time of need. With that
            in mind, I decided that 10% of ZOUSHAN proceeds would be distributed
            to orphanages around the world to fulfill their basic need
          </div>
        </div>
      </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 col-span-10 col-start-2 my-10  ">
        <div className="shd h-80 rounded-3xl flex flex-col items-center bg-white  p-4  justify-center">
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
        <div className="shd h-80 rounded-3xl flex flex-col items-center  bg-white  p-4 justify-center">
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
        <div className="shd h-80 rounded-3xl flex flex-col items-center justify-center p-6 bg-white ">
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
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 col-span-10 col-start-2 my-10 ">
        <div className="shd  rounded-3xl flex flex-col items-center justify-center overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="https://1.bp.blogspot.com/-X4Ne0YmT92w/YQmNMY7MSfI/AAAAAAAABaI/UMdCS5xu5XY6cDHfQe5ELOnlvjapBpRCgCLcBGAsYHQ/s16000/118286432_3641080845915509_8045923437941469160_n.jpg"
            alt=""
          />
        </div>
        <div className="shd h-80 rounded-3xl flex flex-col items-center justify-center p-6 bg-white ">
          <div className="font-bold text-3xl secondary">OUR COMMUNITY</div>
          <div>
            Our Community partners during different process of product
            production
          </div>
        </div>
        <div className="shd  rounded-3xl flex flex-col items-center justify-center overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="https://1.bp.blogspot.com/-LSqr9C7yYU8/YQmM1dtxNQI/AAAAAAAABaA/-xfOB1FaS08Bf60ClwmhBWBf0AQz3kKGQCLcBGAsYHQ/s16000/194323887_804577640431432_4341792035358261076_n.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="col-span-12">
        <Footer />
      </div>
    </div>
  );
};

export default About;
