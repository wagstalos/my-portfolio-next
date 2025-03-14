module.exports = {
  reactStrictMode: true,
  assetPrefix: "",
  basePath: "",
  output: "export",
  images: {
    unoptimized: true,
    domains: ["wpsgames.com.br"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/projects",
        destination:
          "https://wpsgames.com.br/sites/reactjs/portfolio/projetos.json",
      },
    ];
  },
};
