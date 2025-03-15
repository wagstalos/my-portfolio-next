import Image from "next/image";
import imageAbout from "../assets/Image.png";
import imageAvatar from "../assets/avatar-mini.jpg";
import imageRanger from "../assets/ranger.png";
import { RiInstagramLine } from "react-icons/ri";
import { FaSalesforce } from "react-icons/fa";

export function SectionAboutMe() {
  return (
    <section data-aos="fade-up"
      id="quemsou"
      className="bg-homepage-about mt-32 mb-32 rounded-[0] md:rounded-[20px] bg-gradient-to-b from-[#1e202f] to-[#12131c] p-6 border border-gray-500/20 "
    >
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 h-auto">
          <p className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-amber-100/20 dark:text-amber-400 mb-2">
            <svg
              className="w-2.5 h-2.5 me-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
              ></path>
            </svg>
            Quem Sou
          </p>

          <h2 className="text-4xl font-bold mt-5 ">Prazer sou Wagner Silva</h2>

          <p className="mt-8 text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
            Apaixonado por tecnologia, atuo na produção de sites,{" "}
            <b>E-commerce com Salesforce Commerce Cloud (SFCC)</b> ,
            desenvolvendo para clientes como Tramontina, Fini, São Vicente,
            Copercana e Oi Place. Além disso, tenho experiência em WordPress,
            SEO, aplicativos, PWA e jogos digitais, utilizando metodologias
            ágeis como Scrum e Kanban. Trabalho também com Salesforce Apex e
            Lightning Web Components (LWC), desenvolvendo soluções inovadoras na
            plataforma.
          </p>

          <a
            href="curriculo_wagner.pdf"
            type="button"
            className="relative inline-flex items-center px-5 py-2.5 text-sm font-medium text-center border border-blue-100/20 bg-blue-200/10 text-white rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"></path>
            </svg>
            <span className="sr-only">Notifications</span>
            Baixar CV
            {/* <div className="absolute  inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
              1
            </div> */}
            <span className="absolute flex items-center justify-center w-6 h-6 -top-2 -right-2">
              <span className="animate-ping absolute top-0 right-0 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-gray-900"></span>
              <span className="relative flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full border-gray-900">1</span>
            </span>
          </a>

          <div className="mt-24 ">
            <div className="flex">
              <Image
                className="w-12 h-12 rounded-full border border-amber-50/10 p-1"
                src={imageAvatar}
                alt="Rounded avatar"
              />
              <span className="ml-4">
                <p className="font-bold">Wagner Silva</p>
                <p className="text-gray-400">Software Engineer</p>
              </span>
              <a href="https://www.salesforce.com/trailblazer/wdasilva13" target="_blank">
                <Image
                  className="ml-4"
                  src={imageRanger}
                  alt="Rounded avatar"
                  width={60}
                />
              </a>

              <div>

              </div>
            </div>

            <div className="flex">
              <a
                href="https://www.instagram.com/wagner.paulo89/" target="_blank"
                className="flex mt-4 mr-4 text-gray-300 hover:text-amber-300"
              >
                <RiInstagramLine className="w-6 h-6 mr-2" />
                <p>wagner.paulo89</p>
              </a>
              <a
                href="https://www.salesforce.com/trailblazer/wdasilva13"
                className="flex mt-4 text-gray-300 hover:text-amber-300"
              >
                <FaSalesforce className="w-6 h-6 mr-2 " />
                <p>wdasilva13</p>
              </a>
            </div>



          </div>

          <p className="font-bold mt-4">Especialidades:</p>
          <div className="flex flex-wrap border-t border-gray-500/50 py-4">
            <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3">
              <span className="flex w-2.5 h-2.5 bg-blue-600 rounded-full me-1.5 shrink-0"></span>
              E-commerce
            </span>
            <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3">
              <span className="flex w-2.5 h-2.5 bg-purple-500 rounded-full me-1.5 shrink-0"></span>
              Landing Pages
            </span>
            <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3">
              <span className="flex w-2.5 h-2.5 bg-indigo-500 rounded-full me-1.5 shrink-0"></span>
              Websites
            </span>
            <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3">
              <span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full me-1.5 shrink-0"></span>
              Jogos digitais
            </span>
            <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3">
              <span className="flex w-2.5 h-2.5 bg-amber-500 rounded-full me-1.5 shrink-0"></span>
              Salesforce
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-auto flex justify-center items-center">
          <Image
            src={imageAbout}
            alt="Wagner Silva"
            width={500}
            height={400}
            quality={100}
            className="border border-amber-50/20 rounded-4xl p-1"
          />
        </div>
      </div>
    </section>
  );
}
