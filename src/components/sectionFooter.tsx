import Image from "next/image";
import logoFooter from "@/assets/logo-wagner.svg";
import { RiWhatsappLine } from "react-icons/ri";
import { IconsSociais } from "./iconsSociais";

export function SectionFooter() {
  return (
    <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4 pb-8">
      <div className="flex items-center justify-center"></div>

      <a
        href="https://wa.me/5511999488027"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiWhatsappLine className="w-6 h-6" />
      </a>

      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image src={logoFooter} alt="logoFooter" width={200} />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#quemsou" className="hover:underline me-4 md:me-6">
                Quem sou
              </a>
            </li>
            <li>
              <a href="#meusprojetos" className="hover:underline me-4 md:me-6">
                Meus trabalhos
              </a>
            </li>
            <li>
              <a href="#experiencia" className="hover:underline me-4 md:me-6">
                Experiência
              </a>
            </li>
            <li>
              <a href="mailto:wagstalos@gmail.com" className="hover:underline">
                Contato
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Wagner Silva™
          </a>
          . All Rights Reserved.
        </span>
      </div>
      <IconsSociais></IconsSociais>
    </footer>
  );
}
