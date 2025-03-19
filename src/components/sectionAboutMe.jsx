import Image from "next/image";
import imageAbout from "../assets/wagner.webp";
import imageAvatar from "../assets/avatar-mini.jpg";
import imageRanger from "../assets/ranger.png";
import { RiInstagramLine } from "react-icons/ri";
import { FaSalesforce } from "react-icons/fa";
import { Code } from "./code";

export function SectionAboutMe() {
  return (
    <section data-aos="fade-up"
      id="quemsou"
      className="bg-homepage-about mt-32 mb-32 rounded-[0] md:rounded-[20px] bg-gradient-to-b from-[#1e202f] to-[#12131c] p-6 border border-gray-500/20 "
    >
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 h-auto">
          <p className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-amber-100/20 text-amber-400 mb-2">
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

          <h2 className="text-4xl font-bold mt-5 text-white">Prazer sou Wagner Silva</h2>

          {/* <p className="mt-8 text-lg font-normal text-gray-400 mb-4">
            Apaixonado por tecnologia, atuo na produção de sites,{" "}
            <b>E-commerce com Salesforce Commerce Cloud (SFCC)</b> ,
            desenvolvendo para clientes como Tramontina, Fini, São Vicente,
            Copercana e Oi Place. Além disso, tenho experiência em WordPress,
            SEO, aplicativos, PWA e jogos digitais, utilizando metodologias
            ágeis como Scrum e Kanban. Trabalho também com Salesforce Apex e
            Lightning Web Components (LWC), desenvolvendo soluções inovadoras na
            plataforma.
          </p> */}


          <div className="mt-8">
            <div className="flex">
              <Image
                className="w-12 h-12 rounded-full border border-amber-50/10 p-1"
                src={imageAvatar}
                alt="Rounded avatar"
              />
              <span className="ml-4">
                <p className="font-bold text-white">Wagner Silva</p>
                <p className="text-gray-400">Software Engineer</p>
              </span>
              <a href="https://www.salesforce.com/trailblazer/wdasilva13" target="_blank" aria-label="Salesforce" rel="noopener noreferrer">
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
          <Code></Code>

          <div className="flex items-center justify-center">
            <a
              href="curriculo_wagner.pdf"
              type="button"
              className="mt-4 relative inline-flex items-center px-5 py-2.5 text-sm font-medium text-center border border-blue-100/20 bg-blue-200/10 text-white rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 "
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

              <span className="absolute flex items-center justify-center w-6 h-6 -top-2 -right-2">
                <span className="animate-ping absolute top-0 right-0 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-gray-900"></span>
                <span className="relative flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full border-gray-900">1</span>
              </span>
            </a>

          </div>


          <p className="text-white font-bold mt-4">Especialidades:</p>
          <div className="flex flex-wrap border-t border-gray-500/50 py-4">
            <span className="flex items-center text-sm font-medium text-white me-3">
              <span className="flex w-2.5 h-2.5 bg-blue-600 rounded-full me-1.5 shrink-0"></span>
              E-commerce
            </span>
            <span className="flex items-center text-sm font-medium text-white me-3">
              <span className="flex w-2.5 h-2.5 bg-purple-500 rounded-full me-1.5 shrink-0"></span>
              Landing Pages
            </span>
            <span className="flex items-center text-sm font-medium  text-white me-3">
              <span className="flex w-2.5 h-2.5 bg-indigo-500 rounded-full me-1.5 shrink-0"></span>
              Websites
            </span>
            <span className="flex items-center text-sm font-medium text-white me-3">
              <span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full me-1.5 shrink-0"></span>
              Jogos digitais
            </span>
            <span className="flex items-center text-sm font-medium text-white me-3">
              <span className="flex w-2.5 h-2.5 bg-amber-500 rounded-full me-1.5 shrink-0"></span>
              Salesforce
            </span>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 h-auto flex justify-center items-center">
          <Image
            src={imageAbout}
            alt="Wagner Silva"
            width={500}
            height={400}
            quality={100}
            className="border border-amber-50/20 rounded-4xl p-1"
          />


          <a href="https://github.com/wagstalos" target="_blank"
            className="absolute bottom-5 md:bottom-15 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium duration-200 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group animate-rainbow cursor-pointer border-0 bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] bg-[length:200%] text-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] before:[filter:blur(calc(0.8*1rem))] hover:scale-105 active:scale-95 h-10 px-4 py-2 inline-flex
"
          >
            <div className="flex items-center">
              <svg className="size-4" viewBox="0 0 438.549 438.549">
                <path
                  d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                  fill="#fff"
                ></path></svg
              ><span className="ml-1 text-white lg:inline p-1">wagstalos</span>
            </div>
            <div className="ml-2 flex items-center gap-1 text-sm md:flex">
              <svg
                className="size-4 text-gray-500 transition-all duration-200 group-hover:text-yellow-300"
                data-slot="icon"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  fillRule="evenodd"
                ></path>
              </svg>
              <span
                className="inline-block tabular-nums tracking-wider font-display font-medium text-white"
              >99</span
              >
            </div>
          </a>


        </div>
      </div>
    </section>
  );
}
