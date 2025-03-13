"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RiCodeAiFill } from "react-icons/ri";

// Definição da interface para o tipo do item
interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

const Timeline = () => {
  // Definindo o tipo de items como um array de objetos do tipo TimelineItemProps
  const items: TimelineItemProps[] = [
    {
      year: "2024",
      title: "Backlgrs - Frontend Sr",
      description:
        "Desenvolvimento de lojas digitais e sustentação utilizando Salesforce Commerce Cloud (SFCC), com expertise em ISML. Desenvolvimento de componentes no Page Designer, incluindo páginas de detalhes de produtos (Product Detail Page), listagem de produtos (Page List Product), ativos de conteúdo (content assets), aplicação de SASS, implementação de scripts em JavaScript e jQuery. Contribuí ativamente no tagueamento para e-commerce (GA4) atuei como Tech Lead, seguindo sempre as metodologias ágeis Kanban e Scrum.",
    },
    {
      year: "2023",
      title: "IBM - Analista de sistemas Salesforce Sr",
      description:
        "Desenvolvimento de lojas digitais com Salesforce commerce cloud SFCC, usando ISML, criando componentes Page designer (Page Design), Product Detail Page, Page List Product, content assets, SASS, javascript, jquery e ajudei no tagueamento para e-commerce (GA4) e sempre utilizando metodologias Agéis Kanban e Scrum. Go Live: Oi Place.",
    },
    {
      year: "2021 - 2023",
      title: "Salesforce - Software Engineer - Pleno",
      description:
        "Desenvolvimento E-Commerce Commerce Cloud com o Salesforce (SFCC), VueJS, SASS, Emails Marketing ISML e Javascript utilizando metodologias Agéis Kanban e Scrum. Desenvolvemos lojas para clientes como : Tramontina, Copercana, Fini e Bold.",
    },
    {
      year: "2011 - 2021",
      title: "DP Content Tech Lead Games e Dev. Web",
      description:
        "Liderava uma equipe com projetos web. Desenvolvimento de Landing Pages, Site corporativos, Emails Marketing, PWA e Wordpress",
    },
  ];

  return (
    <section
      id="experiencia"
      className="relative max-w-6xl mx-auto p-8 mt-32 mb-32"
    >
      <h2 className="text-4xl font-bold mb-12 text-center flex  items-center justify-center gap-2">
        <RiCodeAiFill className="text-neutral-400" />
        Experiência
      </h2>
      {/* Linha Vertical - Apenas no Desktop */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gray-700"></div>

      {items.map((item, index) => (
        <TimelineItem key={index} item={item} index={index} />
      ))}
    </section>
  );
};

// Componente de cada item da Timeline
const TimelineItem = ({
  item,
  index,
}: {
  item: TimelineItemProps;
  index: number;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.3 }}
      viewport={{ once: true }}
      className={`relative flex flex-col sm:flex-row items-center w-full my-10 ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Ponto da Timeline */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.3 }}
        viewport={{ once: true }}
        className="absolute left-6 sm:left-1/2 lg:-translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-gray-800"
      ></motion.div>

      {/* Caixa de Conteúdo */}
      <div className="w-full sm:w-3/4 lg:w-2/5 p-6 bg-gray-800 rounded-lg shadow-lg mt-8 sm:mt-0 sm:ml-16 bg-gradient-to-b from-[#1e202f] to-[#12131c] p-6 border border-gray-500/20 ">
        <h3 className="text-2xl font-bold text-yellow-400">{item.year}</h3>
        <p className="text-white text-lg">{item.title}</p>
        <p
          className={`text-gray-400 transition-all ${
            expanded ? "line-clamp-none" : "line-clamp-2"
          }`}
        >
          {item.description}
        </p>

        {/* Botão "Ver Mais" */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-yellow-400 hover:text-yellow-300 transition"
        >
          {expanded ? "Ver menos" : "Ver mais"}
        </button>
      </div>
    </motion.div>
  );
};

export default Timeline;
