import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${scrolled ? "glass shadow-[var(--shadow-elegant)]" : ""}`}>
          <a href="#home" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--gradient-neon)] text-primary-foreground font-mono">H</span>
            <span className="hidden sm:inline neon-text text-lg">MSUYA.AI</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="group relative px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-[var(--gradient-neon)] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full border border-[color:var(--neon-cyan)]/40 bg-[color:var(--neon-cyan)]/10 px-4 py-2 text-sm font-medium text-[color:var(--neon-cyan)] transition-all hover:bg-[color:var(--neon-cyan)]/20 hover:shadow-[var(--glow-cyan)]">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--neon-cyan)] opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--neon-cyan)]" /></span>
            Available
          </a>
          <button className="md:hidden p-2 text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-2 glass rounded-2xl p-4 md:hidden">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-muted-foreground hover:text-foreground">{l.label}</a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
