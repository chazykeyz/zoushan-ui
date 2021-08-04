import React, { useState, useEffect } from "react";
import ProductSlide from "../components/productSlide";
import Footer from "../components/footer";

import axios from "axios";
import { productsAPI } from "./../constant";
export default function About() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      await axios.get(productsAPI).then((res) => {
        setProduct(res.data);
      });
    };
    dataFetch();
  }, []);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-10 col-start-2 flex flex-wrap mt-10">
        <div className="col-md-6">
          <div className="flex tertiary text-3xl my-4">
            AB<div className="secondary">O</div>UT US
          </div>
          <div className="flex flex-col items-start ">
            <small className="secondary">MEET OUR CEO</small>
            <div className="flex tertiary text-3xl ">ZOUSHAN</div>

            <div className="my-4" align="justify">
              Who is my biggest inspiration? My mother. I was born and raised in
              Tanzania. A place where nature inspires beauty. At a young age, I
              would sit and watch my mother apply all-natural products to her
              skin after coming out of the bath. I could not help noticing how
              these products helped to keep her skin healthy and rejuvenated.
              Her skin would glow all day long. She would always say, "organic
              beauty is the best". In 2016, I lost my mother. I quickly realized
              that I had fallen in love with organic skincare. Each time I
              applied her products to my skin, I felt directly connected to her.
              Those times became light-bulb moments. What if I could use those
              same ingredients to create an accessible skin line that would also
              give back to my local community? ZOUSHAN was born. Since then, my
              biggest dream has been to create a product line that is
              all-natural and loved by all. <br />
              <br /> ZOUSHAN cosmetics is a 100% handmade skincare solution made
              with love and powered by nature. Organic, ethically sourced, and
              locally made, I am proud to say that I have created a brand that I
              love that serves my community. After testing my products on
              myself, I decided to share the results with the world. I noticed a
              drastic improvement in the texture and tone of my skin and its
              overall health.
              <br />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="md:pl-8 ">
            <img
              src="https://1.bp.blogspot.com/-EMM1imKQW70/YQaQKLkye7I/AAAAAAAABYg/W0y1y1filA0sYyhBB5AvCDXMptFkJdWHwCLcBGAsYHQ/s16000/ZC-57.jpg"
              alt=""
              className="h-full w-full object-cover rounded-xl "
            />
          </div>
        </div>
      </div>

      <div className="col-span-10 col-start-2 flex flex-wrap mt-10">
        <div className="col-md-6">
          <div className="md:pl-8 ">
            <img
              src="https://1.bp.blogspot.com/-4RUNuR_bZTs/YQaJ4M2LftI/AAAAAAAABYI/ADU3NRb2MQ875oznf8JAuiy6vzkFeB5VwCLcBGAsYHQ/s16000/ZC-61.jpg"
              alt=""
              className="h-full w-full object-cover rounded-xl "
            />
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="flex flex-col items-start md:ml-4">
            <div className="flex tertiary text-3xl ">GIVING BACK.</div>

            <div className="my-2 " align="justify">
              Losing my mother gave me a different perspective on everything.
              More so, it shed light for me on the struggles of the children in
              need of a home and parental love. The daily struggles of a young
              child growing without a parent influenced my lifestyle and my way
              of thinking. ZOUSHAN cosmetics is the opportunity for me to share
              the same love and support I received during my time of need. With
              that in mind, I decided that 10% of ZOUSHAN proceeds would be
              distributed to orphanages around the world to fulfill their basic
              need
              <br />
              <div className="  flex secondary mt-2 items-center">
                THE FOUNDER AND CEO
                <img
                  src="https://1.bp.blogspot.com/-EQkw3QcBxbM/YQpZkBzRgMI/AAAAAAAABb0/GfKXABVPxcI4EGyxk_OeBY0gEgxQluYyQCLcBGAsYHQ/s16000/Screenshot%2B2021-08-04%2Bat%2B12.08.39.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-10 col-start-2 flex flex-wrap mt-10">
        <div className="col-md-6 ">
          <div className="flex flex-col items-center md:ml-4 justify-center h-full">
            <div className="flex secondary text-3xl ">OUR MISSION</div>
            <div className="md:hidden my-4 flex justify-start">
              To restore and lavish skin using nature’s best ingredients and to
              inspire others to walk by faith!
            </div>
            <div
              className="shd rounded-3xl primaryBg p-4 absolute w-60 hidden md:block "
              style={{ left: "44%" }}
            >
              To restore and lavish skin using nature’s best ingredients and to
              inspire others to walk by faith!
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="md:pl-8 ">
            <img
              src="https://1.bp.blogspot.com/-X4Ne0YmT92w/YQmNMY7MSfI/AAAAAAAABaI/UMdCS5xu5XY6cDHfQe5ELOnlvjapBpRCgCLcBGAsYHQ/s16000/118286432_3641080845915509_8045923437941469160_n.jpg"
              alt=""
              className="h-full w-full object-cover rounded-xl "
            />
          </div>
        </div>
      </div>

      <div className="col-span-10 col-start-2 flex flex-wrap mt-10">
        <div className="col-md-6">
          <div className="md:pl-8 ">
            <img
              src="https://1.bp.blogspot.com/-sI8U38r7L08/YQmfLtQTM_I/AAAAAAAABa0/RfpRntfsXL0O5zzrBk1_uI0WyjKBiPkaQCLcBGAsYHQ/s16000/ZC-91.jpg"
              alt=""
              className="h-full w-full object-cover rounded-xl "
            />
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="flex flex-col items-center md:ml-4 justify-center h-full">
            <div className="flex secondary text-3xl ">OUR VISION</div>
            <div className="md:hidden my-4 flex justify-start">
              We are committed to sourcing all natural ingredients to create
              high quality skin care solutions.
            </div>
            <div
              className="shd rounded-3xl primaryBg p-4 absolute w-60 hidden md:block "
              style={{ left: "44%" }}
            >
              We are committed to sourcing all natural ingredients to create
              high quality skin care solutions.
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-10 col-start-2 flex flex-wrap mt-10">
        <div className="col-md-6 ">
          <div className="flex flex-col items-center md:ml-4 justify-center h-full">
            <div className="flex secondary text-3xl ">OUR PROMISE</div>
            <div className="md:hidden my-4 flex justify-start">
              Our promise is to deliver hapiness and extraordinary service by
              providing the heathiest and most effective sin care products.We
              are committed to protecting the future of out planet through out
              organic choices
            </div>
            <div
              className="shd rounded-3xl primaryBg p-4 text-left absolute w-60 hidden md:block "
              style={{ left: "44%" }}
            >
              Our promise is to deliver hapiness and extraordinary service by
              providing the heathiest and most effective sin care products.We
              are committed to protecting the future of out planet through out
              organic choices
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="md:pl-8 ">
            <img
              src="https://1.bp.blogspot.com/-LSqr9C7yYU8/YQmM1dtxNQI/AAAAAAAABaA/-xfOB1FaS08Bf60ClwmhBWBf0AQz3kKGQCLcBGAsYHQ/s16000/194323887_804577640431432_4341792035358261076_n.jpg"
              alt=""
              className="h-full w-full object-cover rounded-xl "
            />
          </div>
        </div>
      </div>

      <div className="col-span-10 col-start-2 flex flex-wrap mt-10">
        <div className="col-12 secondary text-3xl my-4">OUR CORE VALUES</div>
        <div className="col-md-6 p-2">
          <div className="shd primaryBg flex h-full p-4 rounded-2xl">
            <div className=" h-full secondary flex items-center mx-4">
              LOYAL
            </div>
            <div
              style={{
                height: "100%",
                width: 1,
              }}
              className="h-full w-2 secondaryBg mx-4"
            />
            <div className="text-left">
              We strive to remain loyal to our customers and our mission of
              providing products that will restore and lavish our customers’
              skin and bodies.
            </div>
          </div>
        </div>
        <div className="col-md-6 p-2">
          <div className="shd primaryBg flex h-full col-12 p-4 rounded-2xl">
            <div className=" h-full uppercase secondary flex items-center mx-3">
              Accessible
            </div>
            <div
              style={{
                height: "100%",
                width: 1,
              }}
              className="secondaryBg mx-4"
            />
            <div className="text-left">
              We aim to be accessible by offering high-quality products at
              affordable prices, in a variety of retail and online settings.
            </div>
          </div>
        </div>
        <div className="col-md-6 p-2">
          <div className="shd primaryBg flex h-full col-12 p-4 rounded-2xl">
            <div className=" h-full secondary flex items-center uppercase mx-4">
              Value
            </div>
            <div
              style={{
                height: "100%",
                width: 1,
              }}
              className="secondaryBg mx-4"
            />
            <div className="text-left">
              We are committed to providing value to our customers by using
              ingredients that are known to provide physical results and be good
              for your skin.
            </div>
          </div>
        </div>
        <div className="col-md-6 p-2">
          <div className="shd primaryBg flex h-full col-12 p-4 rounded-2xl">
            <div className=" h-full secondary flex items-center uppercase">
              Inspirational
            </div>
            <div
              style={{
                height: "100%",
                width: 1,
              }}
              className="secondaryBg mx-4"
            />
            <div className="text-left">
              We aim to inspire others to walk by faith.
            </div>
          </div>
        </div>
        <div className="col-md-6 p-2">
          <div className="shd primaryBg flex h-full col-12 p-4 rounded-2xl">
            <div className=" h-full secondary flex items-center uppercase mx-3">
              Service
            </div>
            <div
              style={{
                height: "100%",
                width: 1,
              }}
              className="secondaryBg mx-4"
            />
            <div className="text-left">
              We are committed to serving our customers, community, and
              partners.
            </div>
          </div>
        </div>
        <div className="col-md-6 p-2">
          <div className="shd primaryBg flex h-full col-12 p-4 rounded-2xl">
            <div className=" h-full secondary flex items-center uppercase mx-4">
              Health
            </div>
            <div
              style={{
                height: "100%",
                width: 1,
              }}
              className="secondaryBg mx-4"
            />
            <div className="text-left">
              We promote a wholesome approach to all aspects of health using as
              many natural resources as possible.
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 col-span-10 col-start-2">
        <ProductSlide data={product} />
      </div>
      <div className=" col-span-12">
        <Footer />
      </div>
    </div>
  );
}
