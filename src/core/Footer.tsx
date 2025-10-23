function Footer() {
  return (
    <footer className="bg-[#0A0E22] border-t border-[#1a1f35]">
      <div className="max-w-7xl mx-auto px-5 py-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} PZDEV Studio. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}

export default Footer;
