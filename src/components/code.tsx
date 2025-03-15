export function Code() {
  return (
    /* From Uiverse.io by emmanuelh-dev */
    <div className="relative rounded-lg bg-slate-900 p-2 mt-4">
      <div className="relative flex text-center">
        <div className="flex pl-3.5 pt-3">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="-ml-0.5 mr-1.5 h-3 w-3 text-red-500/20"
          >
            <circle r="12" cy="12" cx="12"></circle>
          </svg>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="-ml-0.75 mr-1.5 h-3 w-3 text-yellow-500/20"
          >
            <circle r="12" cy="12" cx="12"></circle>
          </svg>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="-ml-0.75 mr-1.5 h-3 w-3 text-green-500/20"
          >
            <circle r="12" cy="12" cx="12"></circle>
          </svg>
        </div>
        <span className="absolute inset-x-0 top-2 text-xs text-slate-500">
          WagnerSilva.jsx
        </span>
      </div>
      <div className="mt-5 space-y-1.5 px-5 pb-10">
        <p className="mt-4 font-mono text-xs font-normal tracking-wide text-violet-400">
          <span className="text-slate-500">&lt;</span>
          <span className="text-pink-400">Card</span>
          <span className="text-slate-500">&gt;</span>
        </p>
        <p className="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
          <span className="text-slate-500">&lt;</span>
          <span className="text-pink-400">Especialidade</span>
          <span className="text-slate-500">&gt;</span>
          <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
            <span className="relative text-blue-400">Frontend</span>
          </span>
          <span className="text-slate-500">&lt;/</span>
          <span className="text-pink-400">Especialidade</span>
          <span className="text-slate-500">&gt;</span>
        </p>

        <p className="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
          <span className="text-slate-500">&lt;</span>
          <span className="text-pink-400">Sobre</span>
          <span className="ml-2 text-violet-400">
            className<span className="text-slate-500">=</span>
            <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
              <span className="relative text-blue-400">"WPS"</span>
            </span>
          </span>
          <span className="text-slate-500">&gt;</span>
        </p>

        <p className="ml-6 font-mono text-xs font-normal tracking-wide text-violet-400">
          <span className="text-slate-500">&lt;</span>
          <span className="text-pink-400">Text</span>
          <span className="text-slate-500">&gt;</span>
          <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
            <span className="relative text-blue-400">
              {" "}
              Apaixonado por tecnologia, atuo na produção de sites,{" "}
              <b>E-commerce com Salesforce Commerce Cloud (SFCC)</b> ,
              desenvolvendo para clientes como Tramontina, Fini, São Vicente,
              Copercana e Oi Place. Além disso, tenho experiência em WordPress,
              SEO, aplicativos, PWA e jogos digitais, utilizando metodologias
              ágeis como Scrum e Kanban. Trabalho também com Salesforce Apex e
              Lightning Web Components (LWC), desenvolvendo soluções inovadoras
              na plataforma.
            </span>
          </span>
          <span className="text-slate-500">&lt;/</span>
          <span className="text-pink-400">Text</span>
          <span className="text-slate-500">&gt;</span>
        </p>
        <p className="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
          <span className="text-slate-500">&lt;/</span>
          <span className="text-pink-400">Sobre</span>
          <span className="text-slate-500">&gt;</span>
        </p>
        <p className="ml-3 font-mono text-xs font-normal leading-4 tracking-wide text-violet-400">
          <span className="text-slate-500">&lt;</span>
          <span className="text-pink-400">Experiência</span>
          <span className="ml-2 text-violet-400">
            Anos<span className="text-slate-500">=</span>
            <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
              <span className="relative text-blue-400">{14}</span>
            </span>
          </span>
    
          <span className="text-slate-500">/&gt;</span>
        </p>
        <p className="font-mono text-xs font-normal tracking-wide text-violet-400">
          <span className="text-slate-500">&lt;/</span>
          <span className="text-pink-400">Card</span>
          <span className="text-slate-500">&gt;</span>
        </p>
      </div>
    </div>
  );
}
