import Image from "next/image";
import { ContainerGrid } from "./container";

import avatar from "@/assets/avatar-wps.png";

export function SectionBanner() {
  return (
    <ContainerGrid>
      <div className="relative mx-auto bg-homepage-hero max-w-[1888px] flex justify-center items-center h-screen">
        <div className="container flex flex-col items-center justify-center h-screen mt-32">
          <p className="text-amber-400">SOFTWARE ENGINEER</p>
          <h1 className="text-7xl font-bold text-white">Wagner Silva</h1>
          <p className="text-slate-400 mt-2 md:mt-4 text-center md:text-[20px] leading-[140%] max-w-[800px]">
            Olá, sou Wagner Paulo, Desenvolvedor Fullstack. Sou formado em
            Design Gráfico pela UNIP, em Desenvolvimento de Jogos Digitais pela
            ETEC e Pós-Graduado em Desenvolvimento Fullstack de Sistemas
            Modernos para Nuvem pela UNESC.
          </p>

          <ul className="flex mt-4 space-x-4">
            <li className="">
              <a href="" className="">
                <svg
                  className="border border-blue-100/20 bg-blue-200/10 p-2 w-10 h-10 rounded-lg hover:border-amber-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="24"
                  height="24"
                  strokeWidth="2"
                >
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                </svg>
              </a>
            </li>
            <li className="">
              <a href="" className="">
                <svg
                  className="border border-blue-100/20 bg-blue-200/10 p-2 w-10 h-10 rounded-lg hover:border-amber-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="24"
                  height="24"
                  strokeWidth="2"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M8 11l0 5"></path>
                  <path d="M8 8l0 .01"></path>
                  <path d="M12 16l0 -5"></path>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
              </a>
            </li>
          </ul>

          <Image
            src={avatar}
            alt="Wagner Silva"
            title="WAgner Silva"
            width={500}
            height={500}
          />
        </div>
      </div>
    </ContainerGrid>
  );
}
