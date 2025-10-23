import Footer from "./core/Footer";
import Navbar from "./core/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/HERO";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />
      <main className="flex-1 ">
        <Hero />
        <Services />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
