function Navbar() {
  return (
    <nav className="bg-[#0A0E22]/50 backdrop-blur-xl w-full fixed top-0 left-0 z-1000 flex items-center">
      <div className="flex justify-between items-center mx-auto w-full p-5 max-w-7xl">
        <a
          className="flex items-center text-2xl font-bold text-[#E6EDF3] gap-3"
          href="/"
        >
          <img className="w-10 h-auto" src="/pzdev.ico" alt="Logo de PZDev" />
          PZDEV
        </a>

        <div className="px-4 py-2 rounded-full backdrop-blur-xl bg-white/5 border border-white/10">
          <ul className="flex align-center gap-1 text-[#9BA3B0] text-sm">
            <a
              className="px-5 py-3 bg-linear-to-r from-[#171C70] via-[#194F80] to-[#1C9399] rounded-full text-[#E6EDF3] font-bold"
              href="#hero"
            >
              Inicio
            </a>

            <a
              className="px-5 py-3 transition-all duration-300 hover:text-[#E6EDF3]"
              href="#services"
            >
              Servicios
            </a>

            <a
              className="px-5 py-3 transition-all duration-300 hover:text-[#E6EDF3]"
              href="#about"
            >
              Nosotros
            </a>

            <a
              className="px-5 py-3 transition-all duration-300 hover:text-[#E6EDF3]"
              href="#projects"
            >
              Proyectos
            </a>

            <a
              className="px-5 py-3 transition-all duration-300 hover:text-[#E6EDF3]"
              href="#testimonials"
            >
              Testimonios
            </a>
          </ul>
        </div>

        <a
          className="px-6 py-3 bg-transparent border-2 border-[#262C3A] rounded-full text-[#E6EDF3] text-sm font-semibold transition-all duration-300 hover:border-[#E6EDF3]"
          href="#contact"
        >
          Contáctanos
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
