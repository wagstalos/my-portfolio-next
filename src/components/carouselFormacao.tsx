"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IconSchool } from "@tabler/icons-react";
import "swiper/css";

import blurBox from "@/assets/blur-box-one-hero.png";

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={3.2}
      loop
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      pagination={{ clickable: true }}
      breakpoints={{
        0: { slidesPerView: 1.2 }, // Mobile: 1 slide
        768: { slidesPerView: 2 }, // Tablets: 2 slides
        1024: { slidesPerView: 3.2 }, // Desktop: 3.2 slides
      }}
    >
      <SwiperSlide>
        <div className="relative max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-900/20 dark:border-gray-700">
          <div className="flex items-center justify-between w-full text-white border-b border-slate-500/30 pb-4">
            {/* Ícone */}
            <IconSchool
              size={44}
              stroke={2}
              className="text-gray-500 dark:text-gray-400 border border-blue-100/20 bg-blue-200/10 p-2 rounded-lg hover:border-slate-500"
            />

            {/* Texto */}
            <h2 className="text-lg font-semibold">2023</h2>
          </div>
          <h5 className="mb-2 mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Pós-Graduação Unesc
          </h5>
          <p className="mb-9 font-normal text-gray-500 dark:text-gray-400">
            Des. Fullstack de Sistemas Modernos para Nuvem (Cloud Native)
          </p>
          <span className=" bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            Concluído
          </span>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-900/20 dark:border-gray-700">
          <div className="flex items-center justify-between w-full text-white border-b border-slate-500/30 pb-4">
            {/* Ícone */}
            <IconSchool
              size={44}
              stroke={2}
              className="text-gray-500 dark:text-gray-400 border border-blue-100/20 bg-blue-200/10 p-2 rounded-lg hover:border-slate-500"
            />

            {/* Texto */}
            <h2 className="text-lg font-semibold">2023</h2>
          </div>

          <a href="#">
            <h5 className="mb-2 mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Pós-Graduação Unesc
            </h5>
          </a>
          <p className="mb-9 font-normal text-gray-500 dark:text-gray-400">
            Des. Fullstack de Sistemas Modernos para Nuvem (Cloud Native)
          </p>
          <span className=" bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            Concluído
          </span>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-900/20 dark:border-gray-700">
          <div className="flex items-center justify-between w-full text-white border-b border-slate-500/30 pb-4">
            {/* Ícone */}
            <IconSchool
              size={44}
              stroke={2}
              className="text-gray-500 dark:text-gray-400 border border-blue-100/20 bg-blue-200/10 p-2 rounded-lg hover:border-slate-500"
            />

            {/* Texto */}
            <h2 className="text-lg font-semibold">2023</h2>
          </div>

          <a href="#">
            <h5 className="mb-2 mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Pós-Graduação Unesc
            </h5>
          </a>
          <p className="mb-9 font-normal text-gray-500 dark:text-gray-400">
            Des. Fullstack de Sistemas Modernos para Nuvem (Cloud Native)
          </p>
          <span className=" bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            Concluído
          </span>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-900/20 dark:border-gray-700">
          <div className="flex items-center justify-between w-full text-white border-b border-slate-500/30 pb-4">
            {/* Ícone */}
            <IconSchool
              size={44}
              stroke={2}
              className="text-gray-500 dark:text-gray-400 border border-blue-100/20 bg-blue-200/10 p-2 rounded-lg hover:border-slate-500"
            />

            {/* Texto */}
            <h2 className="text-lg font-semibold">2023</h2>
          </div>

          <a href="#">
            <h5 className="mb-2 mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Pós-Graduação Unesc
            </h5>
          </a>
          <p className="mb-9 font-normal text-gray-500 dark:text-gray-400">
            Des. Fullstack de Sistemas Modernos para Nuvem (Cloud Native)
          </p>
          <span className=" bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            Concluído
          </span>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-900/20 dark:border-gray-700">
          <div className="flex items-center justify-between w-full text-white border-b border-slate-500/30 pb-4">
            {/* Ícone */}
            <IconSchool
              size={44}
              stroke={2}
              className="text-gray-500 dark:text-gray-400 border border-blue-100/20 bg-blue-200/10 p-2 rounded-lg hover:border-slate-500"
            />

            {/* Texto */}
            <h2 className="text-lg font-semibold">2023</h2>
          </div>

          <a href="#">
            <h5 className="mb-2 mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Pós-Graduação Unesc
            </h5>
          </a>
          <p className="mb-9 font-normal text-gray-500 dark:text-gray-400">
            Des. Fullstack de Sistemas Modernos para Nuvem (Cloud Native)
          </p>
          <span className=" bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
            Concluído
          </span>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
