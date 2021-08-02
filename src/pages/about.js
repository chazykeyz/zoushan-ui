import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/footer";
import NavBar from "../components/navBar";

const About = () => {
  return (
    <div className="grid grid-cols-12 ">
    <NavBar home={false}/>
      <div className=" col-span-10 col-start-2 flex items-center mt-10  md:items-start flex-col mb-4">
        <div className="text-3xl font-black tertiary "> ABOUT US</div>
      </div>
      <div className="col-span-10 col-start-2 flex felx-wrap grid grid-cols-1 md:grid-cols-2 items-center">
        <div align="justify">
          <div>
            <div className="secondary">MEET OUR CEO</div>
            <div className="tertiary text-3xl font-black">ZOUSHAN</div>
          </div>
          <div>
            I grew up in Tanzania, where beauty was influenced by nature and
            still is till date. My mother is my biggest inspiration. Growing up,
            I watched her care for her skin using all natural products after her
            bath, and I couldn’t help but notice the healthy glow in her skin
            all day long. She’d always say "organic beauty is the best". <br />
            <br /> In 2016, after I lost my mother, I realized that i had fallen
            in love with organic skincare as each time I applied her products on
            my skin, I felt directly connected to her. That feeling inspired my
            decision to not only create an all natural beauty line but also give
            back to the community and since then, my biggest dream has been to
            create a product line that everyone will love regardless of their
            gender. Being inspired by nature, the healthy beauty of girls and
            women in Tanzania who only uses locally made skincare products, it
            became even more obvious to me that true beauty lies in the
            simplicity. Thus the healthier, the better. <br />
            <br /> ZOUSHAN cosmetics is a 100% handmade skincare solution made
            with love and powered by nature. I have always wanted to create
            something that I will love and my community too. After using my
            skincare line , i decided to share it’s results with the world.
            Because of its cruelty free, toxin free ingredients , my skin
            texture and regimen has improved drastically. The products helped me
            prevent skin allergies and non desired reactions which led to me
            having a healthier, softer, smoother, clearer and acne free skin.
            <br />
            <br />
            <b>
              ZOUSHAN’S COSMETICS DEDICATION TO GIVING BACK TO THE COMMUNITY
            </b>
            <br /> My mother died when I was young, so it was a precious thing
            to have a friend in that generation or younger. My experience gave
            me a great perspective on things. I felt the struggles of the
            children in need of a home and parental love. The daily struggles of
            a young child growing without a parent influenced my lifestyle and
            my way of thinking. ZOUSHAN cosmetics is the opportunity for me to
            share the love and support I received from people who cared with
            those in need today. In that, I decided to donate 10% of the
            proceeds to the orphanages all over the world to fulfill their basic
            needs and help support their dreams.
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
      <div className="col-span-12">
        <Footer />
      </div>
    </div>
  );
};

export default About;
