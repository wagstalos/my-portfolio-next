import Image from "next/image";
import {
  RiBehanceLine,
  RiGithubLine,
  RiLinkedinFill,
  RiDribbbleLine,
  RiHtml5Fill,
  RiJavascriptFill,
} from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";

import avatar from "@/assets/avatar-wps.png";
import { IconsFloating } from "./iconsFloating";

export function SectionBanner() {
  return (
    <section className="relative mx-auto bg-homepage-hero max-w-[1888px] flex justify-center items-center h-screen">
      <div className="home-hero_gradient"></div>

      <IconsFloating></IconsFloating>

      <div className="container flex flex-col items-center justify-center h-screen mt-32">
        <p className="text-amber-400">🚀 SOFTWARE ENGINEER</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
          Wagner Silva - Frontend
        </h1>
        <p className="text-slate-400 mt-2 md:mt-4 text-center md:text-[20px] leading-[140%] max-w-[800px]">
          Olá, sou Wagner Paulo, Desenvolvedor Fullstack. Sou formado em Design
          Gráfico pela UNIP, em Desenvolvimento de Jogos Digitais pela ETEC e
          Pós-Graduado em Desenvolvimento Fullstack de Sistemas Modernos para
          Nuvem pela UNESC.
        </p>

        <ul className="flex mt-4 space-x-4">
          <li>
            <a href="#" className="flex items-center justify-center">
              <span className="border border-blue-100/20 bg-blue-200/10 p-2 w-10 h-10 rounded-lg hover:border-amber-300 flex items-center justify-center">
                <RiGithubLine className="w-6 h-6 text-white" />
              </span>
            </a>
          </li>

          <li>
            <a href="#" className="flex items-center justify-center">
              <span className="border border-blue-100/20 bg-blue-200/10 p-2 w-10 h-10 rounded-lg hover:border-amber-300 flex items-center justify-center">
                <RiLinkedinFill className="w-6 h-6 text-white" />
              </span>
            </a>
          </li>

          <li>
            <a href="#" className="flex items-center justify-center">
              <span className="border border-blue-100/20 bg-blue-200/10 p-2 w-10 h-10 rounded-lg hover:border-amber-300 flex items-center justify-center">
                <RiBehanceLine className="w-6 h-6 text-white" />
              </span>
            </a>
          </li>

          <li>
            <a href="#" className="flex items-center justify-center">
              <span className="border border-blue-100/20 bg-blue-200/10 p-2 w-10 h-10 rounded-lg hover:border-amber-300 flex items-center justify-center">
                <RiDribbbleLine className="w-6 h-6 text-white" />
              </span>
            </a>
          </li>
        </ul>

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
        <small className="font-bold text-white text-base">Skills:</small>
        <div className="relative  max-w-[500px] overflow-hidden whitespace-nowrap container-marquee">
          <div className="marquee flex space-x-8 animate-marquee">
            <p className="font-bold text-4xl text-gray-400">ReactJS</p>
            <p className="font-bold text-4xl text-gray-400">Vue</p>
            <p className="font-bold text-4xl text-gray-400">SASS</p>
            <p className="font-bold text-4xl text-gray-400">CSS</p>
            <p className="font-bold text-4xl text-gray-400">HTML</p>
            <p className="font-bold text-4xl text-gray-400">SFCC</p>
            <p className="font-bold text-4xl text-gray-400">Gulp</p>
            <p className="font-bold text-4xl text-gray-400">Git</p>
          </div>
        </div>
      </div>
    </section>
  );
}
