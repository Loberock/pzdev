import Slogan from "../components/Slogan";

function Services() {
  return (
    <section
      id="services"
      className="bg-[linear-gradient(to_bottom,#0A0E22_0%,#111A3A_60%,#0A0E22_100%)] px-5 py-20"
    >
      <div className="min-h-screen max-w-7xl mx-auto flex flex-col items-center">
        <Slogan />

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#E6EDF3] text-center mb-6">
          Desarrollamos Webs que{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#171C70] via-[#157E91] to-[#12E0B2]">
            Convierten
          </span>
          ,{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#171C70] via-[#157E91] to-[#12E0B2]">
            Posicionan
          </span>{" "}
          y{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#171C70] via-[#157E91] to-[#12E0B2]">
            Deslumbran
          </span>
        </h2>
        <p className="text-[#9BA3B0] text-center max-w-xl md:max-w-3xl text-base md:text-lg mb-6">
          Creamos sitios web 100% a medida, desarrollados con código puro y
          optimizados al máximo para rendimiento, SEO y experiencia de usuario.
          Sin plantillas, sin límites. Solo resultados reales para tu negocio
          digital.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <article className="group relative flex flex-col justify-between bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            {/* Fondo animado de gradiente sutil */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-[#171C70]/10 via-[#157E91]/5 to-[#12E0B2]/10 blur-2xl"></div>

            {/* Contenido principal */}
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-[#E6EDF3] mb-4">
                ✨ Landing Page Profesional
              </h3>

              <p className="text-sm text-[#9BA3B0] leading-relaxed mb-6">
                Cautiva a tus clientes con una página moderna, optimizada y
                enfocada en resultados. Ideal para promociones, productos o
                campañas publicitarias.
              </p>
            </div>

            {/* Footer con precio y botón */}
            <div className="relative z-10 flex items-center justify-between mt-auto">
              <span className="text-base font-semibold text-[#E6EDF3]">
                Desde <span className="text-[#12E0B2]">$150</span>
              </span>

              <a
                className="text-sm font-semibold text-white px-4 py-2 rounded-full bg-linear-to-r from-[#171C70] via-[#194F80] to-[#1C9399] hover:shadow-lg hover:shadow-[#12E0B2]/30 transition-all duration-300"
                href="https://wa.me/+51933738449?text=Hola%estoy%interesado%en&%el%servicio%de%Landing%Page%Profesional"
                target="_blank"
                rel="noopener noreferrer"
              >
                🚀 Crear mi Landing
              </a>
            </div>

            {/* Brillo decorativo al pasar el mouse */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-700">
              <div className="absolute -inset-1 bg-linear-to-r from-[#171C70]/40 via-[#12E0B2]/40 to-[#12E0B2]/20 rounded-2xl blur-3xl animate-pulse"></div>
            </div>
          </article>

          <article className="flex flex-col justify-between bg-white/5 backdrop:blur-xl p-6 rounded-xl border border-white/10 hover:border-white/30 hover:-translate-y-1.5 transition-all duration-300">
            <div>
              <h3 className="text-xl font-bold text-[#E6EDF3] mb-4">
                Landing Page Profesional
              </h3>
              <p className="text-sm text-[#9BA3B0] mb-4">
                Cautiva a tus clientes con una página moderna, optimizada y
                enfocada en resultados. Ideal para promociones, productos o
                campañas publicitarias.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-[#E6EDF3]">
                Desde $150
              </span>
              <a
                className="text-sm font-semibold text-[#E6EDF3] px-4 py-2 rounded-full bg-linear-to-r from-[#171C70] via-[#194F80] to-[#1C9399]"
                href="https://wa.me/+51933738449?text=Hola%estoy%interesado%en&%el%servicio%de%Landing%Page%Profesional"
                target="_blank"
                rel="noopener noreferrer"
              >
                🚀 Crear mi Landing
              </a>
            </div>
          </article>

          <article className="flex flex-col justify-between bg-white/5 backdrop:blur-xl p-6 rounded-xl border border-white/10 hover:border-white/30 hover:-translate-y-1.5 transition-all duration-300">
            <div>
              <h3 className="text-xl font-bold text-[#E6EDF3] mb-4">
                🏢 Sitio Web Corporativo
              </h3>
              <p className="text-sm text-[#9BA3B0] mb-4">
                Proyecta una imagen sólida y profesional con un sitio web que
                refleje tu identidad empresarial. Diseño elegante, adaptable y
                fácil de administrar.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-[#E6EDF3]">
                Desde $300
              </span>
              <a
                className="text-sm font-semibold text-[#E6EDF3] px-4 py-2 rounded-full bg-linear-to-r from-[#171C70] via-[#194F80] to-[#1C9399]"
                href="https://wa.me/+51933738449?text=Hola%estoy%interesado%en&%el%servicio%de%Sitio%Web%Corporativo"
                target="_blank"
                rel="noopener noreferrer"
              >
                🌐 Diseñar mi Web
              </a>
            </div>
          </article>

          <article className="flex flex-col justify-between bg-white/5 backdrop:blur-xl p-6 rounded-xl border border-white/10 hover:border-white/30 hover:-translate-y-1.5 transition-all duration-300">
            <div>
              <h3 className="text-xl font-bold text-[#E6EDF3] mb-4">
                🛒 Tienda Online (E-commerce)
              </h3>
              <p className="text-sm text-[#9BA3B0] mb-4">
                Lanza tu tienda virtual y empieza a vender 24/7. Carrito, pagos
                integrados, panel de control y diseño personalizado para
                impulsar tus ventas online.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-[#E6EDF3]">
                Desde $800
              </span>
              <a
                className="text-sm font-semibold text-[#E6EDF3] px-4 py-2 rounded-full bg-linear-to-r from-[#171C70] via-[#194F80] to-[#1C9399]"
                href="https://wa.me/+51933738449?text=Hola%estoy%interesado%en&%el%servicio%de%Tienda%Online"
                target="_blank"
                rel="noopener noreferrer"
              >
                🛒 Lanzar mi Tienda
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Services;
