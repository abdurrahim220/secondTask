import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";
import HomeCard from "../../../components/HomeCard/HomeCard";
import shops from "/public/shopsCategory.js";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Shops = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-[40px] font-black">Shop</h1>
        <Link
          to="/"
          className="px-[18px] text-[16px] font-normal flex items-center gap-1 py-[13px] bg-primary-background rounded-[16px] "
        >
          All <IoIosArrowDropright size={20} />
        </Link>
      </div>

      <div className="mt-5">
        <div>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween:2
              },
              768: {
                slidesPerView: 2,
                spaceBetween:4
              },
              1024: {
                slidesPerView: 4,
                spaceBetween:6
              },
              1500: {
                slidesPerView: 5,
                spaceBetween:8
              },
            }}
          >
            {shops.map((shop) => {
              return (
                <SwiperSlide key={shop.id}>
                  <HomeCard shop={shop} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Shops;
