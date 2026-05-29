import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import portrait from "@/assets/hussein.jpeg";

const ROLES = ["AI Systems", "Machine Learning", "SaaS Platforms", "Automation", "Computer Vision", "Data Intelligence", "AI Agents"];

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden pt-28 pb-20">
      {/* Spline 3D background */}
      <div className="absolute inset-0 -z-10">
        <iframe
          src="https://my.spline.design/claritystream-YHHUgfa35vZ40kELOjcRUN5s/"
          title="3D background"
          loading="lazy"
          className="h-full w-full opacity-60"
          style={{ border: 0, pointerEvents: "none" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      {/* ambient orbs */}
      <div className="pointer-events-none absolute -left-32 top-40 h-96 w-96 rounded-full bg-[color:var(--neon-cyan)]/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[color:var(--neon-purple)]/20 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 glass px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <Sparkles size={14} className="text-[color:var(--neon-cyan)]" />
            Data scientist · Based in Tanzania · Building for the world
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            HUSSEIN <br />
            SHABANI <span className="neon-text">MSUYA</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-lg text-muted-foreground sm:text-xl">
            <span>Engineering</span>
            <motion.span key={roleIdx} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}
              className="inline-flex min-w-[180px] neon-text font-semibold">
              {ROLES[roleIdx]}
            </motion.span>
            <span>for the next decade.</span>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="mt-6 max-w-xl text-muted-foreground">
            Data Scientist specializing in AI systems, intelligent agents, and data-driven innovation.
Passionate about building smart technologies that transform complex data into real-world impact and future-ready solutions.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[var(--gradient-neon)] px-7 py-3 font-medium text-primary-foreground shadow-[var(--glow-cyan)] transition-transform hover:scale-[1.03]">
              Explore Projects <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-medium text-foreground transition-all hover:border-[color:var(--neon-cyan)]/50 hover:shadow-[var(--glow-cyan)]">
              <Mail size={18} /> Contact Me
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-medium text-muted-foreground transition-colors hover:text-foreground">
              <Download size={18} /> Resume
            </a>
          </motion.div>

          {/* terminal strip */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="mt-10 max-w-md font-mono text-xs glass rounded-xl p-4">
            <div className="flex gap-1.5 mb-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            </div>
            <p className="text-[color:var(--neon-cyan)]">$ msuya --status</p>
            <p className="text-muted-foreground">→ deploying intelligence at scale...</p>
            <p className="text-[color:var(--neon-purple)]">✓ neural networks online</p>
          </motion.div>
        </div>

        {/* Right — holographic portrait */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }}
          className="relative mx-auto w-full max-w-md">
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-[4/5] w-full">
            {/* rotating rings */}
            <div className="absolute -inset-6 rounded-full border border-[color:var(--neon-cyan)]/30 animate-spin-slow" />
            <div className="absolute -inset-3 rounded-full border border-dashed border-[color:var(--neon-purple)]/40" style={{ animation: "spin 30s linear infinite reverse" }} />
            {/* glow */}
            <div className="absolute inset-0 -z-10 rounded-3xl bg-[var(--gradient-neon)] opacity-50 blur-3xl animate-pulse-glow" />
            {/* frame */}
            <div className="relative h-full w-full overflow-hidden rounded-3xl glass p-1.5">
              <div className="relative h-full w-full overflow-hidden rounded-[1.3rem]">
                <img src={portrait} alt="Hussein Shabani Msuya — AI Engineer" className="h-full w-full object-cover" loading="eager" />
                {/* scan line */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-[color:var(--neon-cyan)]/30 to-transparent animate-scan" />
                </div>
                {/* HUD overlay */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_95%,oklch(0.88_0.19_210/0.2)_95%)] bg-[length:100%_8px]" />
                <div className="absolute left-3 top-3 font-mono text-[10px] text-[color:var(--neon-cyan)]">
                  <p>ID :: HSM-001</p>
                  <p>STATUS :: ONLINE</p>
                </div>
                <div className="absolute right-3 top-3 font-mono text-[10px] text-[color:var(--neon-cyan)] text-right">
                  <p>NEURAL :: 99.7%</p>
                  <p>SYNC :: ✓</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-4 font-mono text-[10px] text-[color:var(--neon-purple)]">
                  <p>// AI ENGINEER · FULL STACK · BUILDER</p>
                </div>
                {/* corner brackets */}
                <span className="absolute left-2 top-2 h-4 w-4 border-l-2 border-t-2 border-[color:var(--neon-cyan)]" />
                <span className="absolute right-2 top-2 h-4 w-4 border-r-2 border-t-2 border-[color:var(--neon-cyan)]" />
                <span className="absolute left-2 bottom-2 h-4 w-4 border-l-2 border-b-2 border-[color:var(--neon-cyan)]" />
                <span className="absolute right-2 bottom-2 h-4 w-4 border-r-2 border-b-2 border-[color:var(--neon-cyan)]" />
              </div>
            </div>
            {/* floating data chips */}
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-6 top-1/4 glass rounded-xl px-3 py-2 font-mono text-[10px]">
              <p className="text-[color:var(--neon-cyan)]">tensorflow ✓</p>
              <p className="text-muted-foreground">model.fit()</p>
            </motion.div>
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -right-4 bottom-1/4 glass rounded-xl px-3 py-2 font-mono text-[10px]">
              <p className="text-[color:var(--neon-purple)]">agent.run()</p>
              <p className="text-muted-foreground">latency 42ms</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
