"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";

import "swiper/css";
import { IconBadge4k } from "@tabler/icons-react";

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      pagination={{ clickable: true }}
      loop
    >
      <button className="custom-prev mr-4 border border-blue-100/20 bg-blue-200/10 p-2 w-10 h-10 rounded-full hover:border-amber-300">
        <IconChevronLeft size={22} stroke={2} />
      </button>
      <button className="custom-next border border-blue-100/20 bg-blue-200/10 p-2 w-10 h-10 rounded-full hover:border-amber-300">
        <IconChevronRight size={22} stroke={2} />
      </button>
      <SwiperSlide>
        <div></div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
