import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["wpsgames.com.br"], // Adiciona o domínio da imagem externa
  },
  async rewrites() {
    return [
      {
        source: "/api/projects", // Rota que seu frontend vai chamar
        destination:
          "https://wpsgames.com.br/sites/reactjs/portfolio/projetos.json", // URL da sua API
      },
    ];
  },
};

export default nextConfig;
