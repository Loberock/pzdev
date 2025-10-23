import Slogan from "../components/Slogan";

function Hero() {
  return (
    <section
      id="hero"
      className="bg-[radial-gradient(circle_at_top,rgba(28,147,153,0.1)_0%,transparent_70%)] bg-[#0A0E22]"
    >
      <div className="min-h-dvh max-w-7xl mx-auto px-5 flex flex-col items-center justify-center">
        <Slogan />

        <div className="max-w-4xl text-center leading-tight">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#E6EDF3]">
            Transformamos tu Idea en una{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#171C70] via-[#157E91] to-[#12E0B2]">
              Experiencia Digital Única
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[#9ba3b0] my-4">
            Creamos páginas web y landing pages 100% con código. Olvídate de las
            plantillas genéricas. Te entregamos un sitio ultra-rápido, seguro y
            diseñado para convertir visitantes en clientes.
          </p>
        </div>

        <div className="flex gap-8 text-[#E6EDF3] font-semibold mt-4">
          <a
            className="flex items-center gap-2 bg-linear-to-r from-[#171C70] via-[#194F80] to-[#1C9399] px-8 py-4 rounded-full shadow-lg hover:shadow-[#194F80]/50 hover:scale-105 transition-all duration-300 transform"
            href="#contact"
          >
            Cotiza tu proyecto ahora
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          </a>

          <a
            className="bg-white/5 backdrop:blur-xl px-8 py-4 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/50 hover:scale-105  transition-all duration-300 transform"
            href="#projects"
          >
            Ver Proyectos
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
