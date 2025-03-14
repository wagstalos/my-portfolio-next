"use client";
import { HiExternalLink } from "react-icons/hi";
import { FaWebAwesome } from "react-icons/fa6";
import { useState, useEffect } from "react";

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
      className="bg-gradient-to-t from-[#0C0D15] via-slate-800 from-[#0C0D15] mt-0 md:mt-32 mb-32 p-4"
    >
      <h2 className="text-4xl font-bold mb-12 text-center flex  items-center justify-center gap-2 mt-0 md:mt-32">
        <FaWebAwesome className="text-neutral-400" />
        Projetos
      </h2>
      <p className="mt-8 text-lg font-normal text-gray-500 dark:text-gray-400 mb-4 text-center max-w-[700] mx-auto">
        Confira alguns dos meus projetos mais recentes e veja como aplico
        criatividade e soluções inovadoras em cada um deles.
      </p>
      <div className="flex flex-wrap gap-6 justify-center">
        {posts.map((project) => (
          <div
            key={project.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
          >
            <div className="relative rounded-[20px] bg-gradient-to-b from-[#1e202f] to-[#12131c] p-6 border border-gray-500/20 ">
              <img
                src={project.img}
                alt={project.title}
                title={project.title}
                className="w-full h-[143px] object-cover rounded-[10px]"
              />

              <div className="flex">
                <span className="mt-2 bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-indigo-900 dark:text-indigo-300">
                  {project.tag}
                </span>
                <span className="mt-2 bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                  {project.categoria}
                </span>
              </div>

              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-500 mb-8">{project.body}</p>

              <a
                href={project.url}
                className="font-bold text-amber-300 flex items-center gap-2 hover:text-amber-400"
              >
                Ver projeto
                <HiExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
