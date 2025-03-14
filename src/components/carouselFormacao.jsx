"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import CardCarousel from "./cardCarousel";

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={10}
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
        <CardCarousel ano="2023" title="Pós-Graduação Unesc" descricao="Des. Fullstack de Sistemas Modernos para Nuvem (Cloud Native)" status="Concluido"></CardCarousel>

      </SwiperSlide>

      <SwiperSlide>
        <CardCarousel ano="2022 - 2023" title="Front-end Avançado" descricao="Curso completo de frontend do básico ao avançado, API, NextJS e WP." status="Concluido"></CardCarousel>
      </SwiperSlide>

      <SwiperSlide>
        <CardCarousel ano="2019 - 2020" title="English Course" descricao="Módulo intermediário de inglês presencial Smile English" status="Concluido"></CardCarousel>
      </SwiperSlide>

      <SwiperSlide>
        <CardCarousel ano="2014 - 2016" title="ETEC Guaracy Silveira" descricao="Primeira turma do Curso Técnico de jogos digitais" status="Concluido"></CardCarousel>
      </SwiperSlide>

      <SwiperSlide>
        <CardCarousel ano="2009-2012" title="Design Gráfico UNIP" descricao="Curso superior Presencial Design Gráfico na universidade Paulista" status="Concluido"></CardCarousel>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
