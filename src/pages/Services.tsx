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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <article className="bg-white/5 backdrop:blur-xl p-6 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/50 transition-all duration-300">
            <h3>✨ Landing Page Profesional</h3>
            <p>
              Cautiva a tus clientes con una página moderna, optimizada y
              enfocada en resultados. Ideal para promociones, productos o
              campañas publicitarias.
            </p>
            <span>Desde $150</span>
            <a href="https://wa.me/+51933738449?text=Hola%estoy%interesado%en&%el%servicio%de%Landing%Page%Profesional">
              🚀 Crear mi Landing
            </a>
          </article>
          <article className="bg-white/5 backdrop:blur-xl p-6 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/50 transition-all duration-300">
            <h3>🏢 Sitio Web Corporativo</h3>
            <p>
              Proyecta una imagen sólida y profesional con un sitio web que
              refleje tu identidad empresarial. Diseño elegante, adaptable y
              fácil de administrar.
            </p>
            <span>Desde $300</span>
            <a href="https://wa.me/+51933738449?text=Hola%estoy%interesado%en&%el%servicio%de%Sitio%Web%Corporativo">
              🌐 Diseñar mi Web
            </a>
          </article>
          <article className="bg-white/5 backdrop:blur-xl p-6 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/50 transition-all duration-300">
            <h3>🛒 Tienda Online (E-commerce)</h3>
            <p>
              Lanza tu tienda virtual y empieza a vender 24/7. Carrito, pagos
              integrados, panel de control y diseño personalizado para impulsar
              tus ventas online.
            </p>
            <span>Desde $800</span>
            <a href="https://wa.me/+51933738449?text=Hola%estoy%interesado%en&%el%servicio%de%Tienda%Online">
              🛒 Lanzar mi Tienda
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Services;
