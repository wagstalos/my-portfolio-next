import Image from "next/image";
import { RiHtml5Fill, RiJavascriptFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";

import avatar from "@/assets/avatar-wps.png";
import { IconsFloating } from "./iconsFloating";
import { IconsSociais } from "./iconsSociais";
import { MarqueeSkills } from "./marqueeSkills";

export function SectionBanner() {
  return (
    <section className="relative mx-auto bg-homepage-hero max-w-[1888px] flex justify-center items-center h-screen">
      <div className="home-hero_gradient"></div>

      <IconsFloating></IconsFloating>

      <div className="container flex flex-col items-center justify-center h-screen mt-32">
        <p className="text-amber-400">🚀 SOFTWARE ENGINEER</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
          Wagner Silva 🗲 Frontend
        </h1>
        <p className="text-slate-400 mt-2 md:mt-4 text-center md:text-[20px] leading-[140%] max-w-[800px]">
          Olá, sou Wagner Paulo, Desenvolvedor Fullstack. Sou formado em Design
          Gráfico pela UNIP, em Desenvolvimento de Jogos Digitais pela ETEC e
          Pós-Graduado em Desenvolvimento Fullstack de Sistemas Modernos para
          Nuvem pela UNESC.
        </p>

        <IconsSociais></IconsSociais>

        <div className="relative p-4 avatar-container">
          <RiHtml5Fill className="w-10 h-10 text-orange-500 absolute top-[18%] left-[8%] animate-pulse  " />
          <IoLogoCss3 className="w-10 h-10 text-blue-500 absolute top-[37%] left-[87%] animate-pulse" />
          <RiJavascriptFill className="w-10 h-10 text-yellow-500 absolute top-[85%] left-[0%] animate-pulse" />
          <Image
            src={avatar}
            className="avatar"
            alt="Wagner Silva"
            title="WAgner Silva"
            width={500}
            height={500}
          />
        </div>

        <MarqueeSkills></MarqueeSkills>
      </div>
    </section>
  );
}
