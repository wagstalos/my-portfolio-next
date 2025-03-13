"use client";
import { useState, useEffect } from "react";

export default function SectionProjects() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/projetos.json"); // Caminho para o JSON na pasta 'public'
        const data = await response.json(); // Parse dos dados JSON
        setPosts(data); // Armazenar os dados no estado
        setLoading(false); // Atualizar o estado para "carregado"
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
        setLoading(false); // Mesmo em caso de erro, parar a animação de carregamento
      }
    };

    fetchProjects();
  }, []); // O array vazio [] garante que o useEffect rode apenas uma vez após o componente ser montado

  if (loading) return <div className="text-center">Carregando...</div>; // Mensagem de carregamento enquanto os dados não são obtidos

  return (
    <section className="py-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Projetos</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {posts.map((project) => (
          <div
            key={project.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
