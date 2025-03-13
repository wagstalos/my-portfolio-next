import Image from "next/image";
import imageAbout from "@/assets/image-about.png";
export function SectionAboutMe() {
  return (
    <section className="mt-32 mb-32 p-4">
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

          <h2 className="text-4xl font-bold mt-5 gradient_text">
            Prazer sou Wagner Silva
          </h2>

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
          <div className="flex mt-10">
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
          </div>
        </div>
        <div className="w-full md:w-1/2 h-auto flex justify-center items-center">
          <Image src={imageAbout} alt="Wagner Silva" width={500} height={400} />
        </div>
      </div>
    </section>
  );
}
