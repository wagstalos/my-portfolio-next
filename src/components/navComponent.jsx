"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo-wagner.svg";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Fecha o menu mobile após o clique
  };

  return (
    <nav className="text-white p-4 border-b border-slate-500/30 fixed top-0 left-0 w-full z-50 bg-[#0C0D15]">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <Image src={logo} alt="Wagner Silva" title="Wagner Silva" width={200} />
        </Link>

        {/* Links Centralizados */}
        <ul className="hidden md:flex gap-6 text-lg mx-auto">
          <li className="hover:text-amber-300 px-4">
            <a href="#quemsou" onClick={(e) => scrollToSection(e, "#quemsou")}>
              Quem sou
            </a>
          </li>
          <li className="hover:text-amber-300 px-4">
            <a href="#meusprojetos" onClick={(e) => scrollToSection(e, "#meusprojetos")}>
              Projetos
            </a>
          </li>
          <li className="hover:text-amber-300 px-4">
            <a href="#experiencia" onClick={(e) => scrollToSection(e, "#experiencia")}>
              Experiência
            </a>
          </li>
        </ul>

        {/* Botão Baixar CV */}
        <a
          href="curriculo_wagner.pdf"
          download
          className="hidden md:flex items-center border border-blue-100/20 bg-blue-200/10 text-white px-4 py-2 rounded-full font-semibold hover:border-amber-400 hover:text-amber-400 transition-all duration-300 ease-in-out"
        >
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          Baixar CV
        </a>

        {/* Botão Mobile */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 p-4 bg-[#0C0D15]">
          <li className="hover:text-amber-300 p-2">
            <a href="#quemsou" onClick={(e) => scrollToSection(e, "#quemsou")}>
              Quem sou
            </a>
          </li>
          <li className="hover:text-amber-300 p-2">
            <a href="#meusprojetos" onClick={(e) => scrollToSection(e, "#meusprojetos")}>
              Projetos
            </a>
          </li>
          <li className="hover:text-amber-300 p-2">
            <a href="#experiencia" onClick={(e) => scrollToSection(e, "#experiencia")}>
              Experiência
            </a>
          </li>
          <li className="hover:text-amber-300 p-2 mt-4">
            <a href="curriculo_wagner.pdf" download className="flex items-center border border-blue-100/20 bg-blue-200/10 text-white px-8 py-2 rounded-full font-semibold hover:border-amber-400 hover:text-amber-400 transition-all duration-300 ease-in-out">
              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              Baixar CV
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
