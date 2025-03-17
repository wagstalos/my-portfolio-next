"use client";
import { HiExternalLink } from "react-icons/hi";
import { FaWebAwesome } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SectionProjects() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/projetos.json");
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div className="text-center">Carregando...</div>;

  return (
    <section
      id="meusprojetos"
      className="p-4 md:p-4 mt-0 md:mt-32 mb-5 md:mb-32 pt-4 pl-4 pb-4 pr-0"
    >
      <h2 className="text-white text-4xl font-bold mb-12 text-center flex items-center justify-center gap-2">
        <FaWebAwesome className="text-neutral-400" />
        Projetos
      </h2>
      <p className="mt-8 mb-2 md:mb-24 text-lg font-normal text-gray-400 text-center max-w-[700px] mx-auto">
        Confira alguns dos meus projetos mais recentes e veja como aplico
        criatividade e soluções inovadoras em cada um deles.
      </p>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4.5}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
            spaceBetween: 10,
            pagination: { type: 'fraction' }

          },
          640: { slidesPerView: 1.5, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 3.5, spaceBetween: 20 },
          1280: { slidesPerView: 4.5, spaceBetween: 20 },
        }}
        navigation
        pagination={{ clickable: true, type: 'bullets' }}
        // autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="mt-8"
      >
        {[...posts].reverse().map((project) => (

          <SwiperSlide key={project.id}>

            <div className="relative rounded-[5px] bg-gradient-to-b from-[#1e202f] to-[#12131c] border border-gray-500/20">

              <div className="relative">
                <img
                  src={project.img}
                  alt={project.title}
                  title={project.title}
                  className="w-full h-[525px] object-cover object-top rounded-[5px]" />
                <div className="custom-deg"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent "></div>
              </div>

              <div className="absolute bottom-[20px] left-[20px]">

                <div className="flex">
                  <span className="mt-2 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm bg-indigo-900 text-indigo-300">
                    {project.tag}
                  </span>
                  <span className="mt-2 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm bg-blue-900 text-blue-300">
                    {project.categoria}
                  </span>
                </div>
                <h3 className="text-white text-xl font-semibold mt-4">{project.title}</h3>
                <p className="text-gray-500 mb-8">{project.body}</p>
                <a
                  href={project.url}
                  className="flex items-center justify-center w-50 border border-blue-100/20 bg-blue-200/10 text-white px-4 py-2 rounded-full font-semibold hover:border-amber-400 hover:text-amber-400 transition-all duration-300 ease-in-out"
                  target="_blank"
                >
                  Ver projeto
                  <HiExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
