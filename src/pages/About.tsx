function About() {
  return (
    <section
      id="about"
      className="bg-[radial-gradient(circle_at_bottom,rgba(25,79,128,0.15)_0%,transparent_80%)] bg-[#0A0E22]"
    >
      <div className="min-h-dvh flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-[#e6edf3]">Sobre Nosotros</h1>
        <p className="text-[#9ba3b0] max-w-2xl text-center mt-2">
          En PZDEV Studio, nos especializamos en crear sitios web modernos y
          atractivos que impulsan tu presencia en línea. Nuestro equipo de
          expertos combina diseño innovador y desarrollo técnico para ofrecerte
          soluciones personalizadas que se adaptan a tus necesidades.
        </p>
      </div>
    </section>
  );
}

export default About;
