import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.module.css";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="/image_001.webp"
            alt="slider-1"
            className="w-full h-[500px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image_002.jpg"
            alt="slider-2"
            className="w-full h-[500px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image_003.png"
            alt="slider-3"
            className="w-full h-[500px]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
