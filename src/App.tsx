import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About, Skills, Projects, Experience, Contact, Footer } from "./components/Sections";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--foreground)]">
      {/* Ambient background gradients */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
