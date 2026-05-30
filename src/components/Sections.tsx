import { motion } from "framer-motion";
import { Brain, Code2, Cloud, Database, Cpu, Smartphone, Bot, LineChart, Github, ExternalLink, Mail, MapPin, Linkedin, Phone, GraduationCap, Award, BookOpen, Briefcase } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Monitor } from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

function SectionHeader({ tag, title, sub }: { tag: string; title: string; sub?: string }) {
  return (
    <motion.div {...fadeIn} className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--neon-cyan)]">// {tag}</p>
      <h2 className="text-4xl font-bold sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </motion.div>
  );
}

/* ABOUT */
export function About() {
  const stats = [
    { v: "2+", l: "Projects Shipped" },
    { v: "4+", l: "AI Systems Built" },
    { v: "20+", l: "Technologies Mastered" },
    { v: "5+", l: "Research Tracks" },
  ];
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader tag="About" title="Architect of intelligent systems." sub="Engineer first, dreamer always — building the AI products of tomorrow." />
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div {...fadeIn} className="glass rounded-3xl p-8">
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm <span className="neon-text font-semibold">Hussein Shabani Msuya</span> —An AI-focused Data Scientist passionate about designing intelligent 
              systems that solve real African and global problems. Specializing in AI agents, computer vision, and machine learning solutions that create meaningful impact.
            </p>
            <p className="mt-4 text-muted-foreground">
              I believe the next generation of software won't be written — it will be <em>orchestrated</em>. My mission is to
              architect that future, one model, one product, one user at a time.
            </p>
            <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs">
              {["AI Agents", "Computer Vision", "SaaS", "Distributed Systems"].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-muted-foreground">{t}</span>
              ))}
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div key={s.l} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass relative overflow-hidden rounded-2xl p-6">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[var(--gradient-neon)] opacity-20 blur-2xl" />
                <p className="font-mono text-4xl font-bold neon-text">{s.v}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* SKILLS */
export function Skills() {
  const groups = [
    { icon: Brain, name: "AI & Machine Learning", items: ["Python", "TensorFlow", "PyTorch", "LangChain", "OpenAI APIs"] },
    { icon: Code2, name: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"] },
    { icon: Cpu, name: "Backend", items: ["FastAPI", "Node.js"] },
   { icon: Monitor, name: "Microsoft Office", items: ["Microsoft Excel", "Microsoft Word", "Microsoft Access", "Microsoft PowerPoint"] },
    { icon: Database, name: "Databases", items: ["PostgreSQL", "MongoDB","Sqlite"] },
    { icon: LineChart, name: "Data Science", items: ["Pandas", "NumPy", "Matplotlib","Seaborn"] },
    
    { icon: MessageCircle, name: "Communication Skills", items: ["Team Collaboration", "Public Speaking", "Problem Solving", "Client Communication"] },
    
    { icon: Bot, name: "AI Agents & Automation", items: ["LangGraph", "AutoGen", "CrewAI", "RAG"] },
  ];
  return (
    <section id="skills" className="relative py-32">
      <div className="absolute inset-0 -z-10 grid-bg opacity-20" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader tag="Stack" title="A toolkit forged for intelligence." sub="The instruments behind every system I architect." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div key={g.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
               className="group relative overflow-hidden rounded-2xl glass p-6 
  transition-all duration-300 
  hover:-translate-y-2
  hover:shadow-[0_0_25px_4px_rgba(34,211,238,0.4),0_0_80px_12px_rgba(34,211,238,0.15)]
  hover:border-[color:var(--neon-cyan)]/50">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color:var(--neon-cyan)]/10 blur-3xl transition-all group-hover:bg-[color:var(--neon-purple)]/20" />
                <div className="relative">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gradient-neon)] text-primary-foreground">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold">{g.name}</h3>
                  <ul className="mt-3 space-y-1 font-mono text-xs text-muted-foreground">
                    {g.items.map((it) => <li key={it}>→ {it}</li>)}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* PROJECTS */
export function Projects() {
  const projects = [
    { title: "Clinica Cardio Risk Prediction", desc: "AI-powered cardiovascular risk prediction system for clinics across East Africa.", tags: ["Python", "ML", "FastAPI"], gradient: "from-cyan-500/30 to-blue-600/30", link: "https://clinical-cardio-risk-prediction-model.onrender.com" },
    { title: "Smart Agriculture AI", desc: "Computer-vision crop monitoring + yield prediction for smallholder farmers.", tags: ["YOLOv8", "PyTorch", "AWS"], gradient: "from-emerald-500/30 to-cyan-500/30",link:"https://killimo-boat.onrender.com/" },
    
  ];
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader tag="Projects" title="Selected work, shipping intelligence." sub="A glimpse into the systems I've built and the problems they solve." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article key={p.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl glass p-6 
  transition-all duration-300
  hover:-translate-y-2
  hover:shadow-[0_0_25px_4px_rgba(168,85,247,0.4),0_0_80px_12px_rgba(168,85,247,0.15)]
  hover:border-[color:var(--neon-purple)]/50">
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative">
                {/* mock UI */}
                <div className="mb-5 aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-black/40 p-3 font-mono text-[10px]">
                  <div className="mb-2 flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-red-400/60" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                    <span className="h-2 w-2 rounded-full bg-green-400/60" />
                  </div>
                  <p className="text-[color:var(--neon-cyan)]">$ deploy --env prod</p>
                  <p className="text-muted-foreground">↳ container building...</p>
                  <p className="text-[color:var(--neon-purple)]">✓ inference @ 42ms</p>
                  <div className="mt-2 h-1 w-full overflow-hidden rounded bg-white/10">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "82%" }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="h-full bg-[var(--gradient-neon)]" />
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-1 text-center text-[8px] text-muted-foreground">
                    <div className="rounded bg-white/5 p-1">CPU 24%</div>
                    <div className="rounded bg-white/5 p-1">GPU 67%</div>
                    <div className="rounded bg-white/5 p-1">RPS 1.2k</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">{t}</span>)}
                </div>
                <div className="mt-5 flex gap-2">
                  <a href="#" className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-xs hover:bg-white/10"><Github size={14} /> Code</a>
                  <a href={p.link||"#"} className="inline-flex items-center gap-1.5 rounded-lg bg-[color:var(--neon-cyan)]/15 px-3 py-1.5 text-xs text-[color:var(--neon-cyan)] hover:bg-[color:var(--neon-cyan)]/25"><ExternalLink size={14} /> Live</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* EXPERIENCE / QUALIFICATIONS */
export function Experience() {
  const items = [
    { icon: Briefcase, title: "AI Engineer · Independent", desc: "Building AI agents, RAG pipelines, and SaaS products for global clients." },
    { icon: Briefcase,title: "Full Stack Developer", desc: "Shipped multi-tenant SaaS platforms and real-time data systems." },
    { icon: Briefcase, title: "Field Data Assistant", desc: "2 months of field placement experience managing data collection, cleaning, verification, and resolving data-related issues." },
    { icon: GraduationCap, title: " Computer Science knowledge", desc: "Specialization in AI, machine learning, and intelligent systems." },
    { icon: Award, title: "Deep Learning Specialization", desc: "Advanced  in neural networks and ML engineering." },
    { icon: BookOpen, title: "Research · AI for Africa", desc: "Applied AI for healthcare, agriculture, and financial inclusion." },
  ];
return (
  <section id="experience" className="relative py-32">
    <div className="mx-auto max-w-5xl px-6">
      <SectionHeader tag="Journey" title="Experience & qualifications." sub="A timeline of growth, study, and shipping." />
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[color:var(--neon-cyan)] via-[color:var(--neon-purple)] to-transparent md:left-1/2" />
        {items.map((it, i) => {
          const Icon = it.icon;
          const left = i % 2 === 0;
          return (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.15,
                type: "spring",
                bounce: 0.3
              }}
              className={`relative mb-10 flex flex-col gap-4 md:flex-row md:items-center ${left ? "md:flex-row" : "md:flex-row-reverse"} group`}
            >
              <div className="md:w-1/2 md:px-8">
                <motion.div
                  initial={{ opacity: 0, x: left ? -60 : 60, rotateY: left ? -15 : 15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.1 }}
                  className="glass rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[color:var(--neon-cyan)]/50 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-[color:var(--neon-cyan)]/0 before:via-[color:var(--neon-cyan)]/0 before:to-[color:var(--neon-purple)]/0 before:transition-all before:duration-500 before:pointer-events-none group-hover:before:from-[color:var(--neon-cyan)]/30 group-hover:before:via-[color:var(--neon-cyan)]/20 group-hover:before:to-[color:var(--neon-purple)]/30"
                >
                  <p className="font-mono text-xs text-[color:var(--neon-cyan)]"></p>
                  <h4 className="mt-1 text-lg font-semibold">{it.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                </motion.div>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: i * 0.15 + 0.2,
                  type: "spring",
                  bounce: 0.5
                }}
                className="absolute left-0 md:left-1/2 -translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--gradient-neon)] shadow-[var(--glow-cyan)] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_20px_var(--neon-cyan)]"
              >
                <Icon size={16} className="text-primary-foreground" />
              </motion.div>
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);}

//* CONTACT */
export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://portifolio-backend-1-hw7w.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Kosa:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const channels = [
    { icon: Mail, label: "Email", value: "husseinmsuya898@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", value: "https://www.linkedin.com/in/hussein-msuya-4a61653ab/" },
    { icon: Github, label: "GitHub", value: "https://github.com/husseinmsuya" },
    { icon: Phone, label: "Phone", value: "+255682751790 on request" },
    { icon: MapPin, label: "Location", value: "Dar es Salaam, Tanzania" },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--neon-purple)]/20 blur-[120px] animate-pulse" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[color:var(--neon-cyan)]/10 blur-[100px] animate-pulse delay-1000" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader tag="Contact" title="Let's build the future together." sub="Open to collaborations, research, and product work." />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            className="glass rounded-3xl p-8 hover:shadow-2xl hover:shadow-[color:var(--neon-cyan)]/30 transition-all duration-500 hover:scale-[1.02] group"
          >
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-[color:var(--neon-cyan)] animate-pulse">// channels</p>
            <ul className="space-y-4">
              {channels.map((c, idx) => {
                const Icon = c.icon;
                return (
                  <motion.li
                    key={c.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 group/channel cursor-pointer"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl glass transition-all duration-300 group-hover/channel:scale-110 group-hover/channel:shadow-[0_0_15px_var(--neon-cyan)]">
                      <Icon size={16} className="text-[color:var(--neon-cyan)] transition-all duration-300 group-hover/channel:scale-110" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground group-hover/channel:text-[color:var(--neon-cyan)] transition-colors">{c.label}</p>
                      <p className="font-mono text-sm group-hover/channel:text-white transition-colors">{c.value}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex items-center gap-2 rounded-xl border border-[color:var(--neon-cyan)]/30 bg-[color:var(--neon-cyan)]/5 px-4 py-3 text-sm hover:border-[color:var(--neon-cyan)]/60 hover:bg-[color:var(--neon-cyan)]/10 transition-all duration-300 hover:shadow-[0_0_20px_var(--neon-cyan)]/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--neon-cyan)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--neon-cyan)] animate-pulse" />
              </span>
              <span className="bg-gradient-to-r from-white to-[color:var(--neon-cyan)] bg-clip-text text-transparent font-medium">
                Currently available for new opportunities
              </span>
            </motion.div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-8 space-y-5 hover:shadow-2xl hover:shadow-[color:var(--neon-purple)]/30 transition-all duration-500 hover:scale-[1.01]"
          >
            {[
              { id: "name", label: "Your name ✨", type: "text", value: name, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value) },
              { id: "email", label: "Email address 📧", type: "email", value: email, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value) },
            ].map((f, idx) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 + 0.2 }}
                className="group relative"
              >
                <input
                  id={f.id}
                  type={f.type}
                  required
                  placeholder=" "
                  value={f.value}
                  onChange={f.onChange}
                  className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 pt-5 pb-2 text-sm outline-none transition-all duration-300 focus:border-[color:var(--neon-cyan)] focus:shadow-[0_0_25px_var(--neon-cyan)] hover:border-white/20"
                />
                <label
                  htmlFor={f.id}
                  className="pointer-events-none absolute left-4 top-3.5 text-xs text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[color:var(--neon-cyan)] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[color:var(--neon-cyan)]"
                >
                  {f.label}
                </label>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="group relative"
            >
              <textarea
                id="msg"
                rows={5}
                required
                placeholder=" "
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 pt-5 pb-2 text-sm outline-none transition-all duration-300 focus:border-[color:var(--neon-cyan)] focus:shadow-[0_0_25px_var(--neon-cyan)] hover:border-white/20 resize-none"
              />
              <label
                htmlFor="msg"
                className="pointer-events-none absolute left-4 top-3.5 text-xs text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[color:var(--neon-cyan)] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[color:var(--neon-cyan)]"
              >
                Tell me about your idea 💡
              </label>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", bounce: 0.4 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[var(--gradient-neon)] px-6 py-3.5 font-medium text-primary-foreground shadow-[var(--glow-cyan)] transition-all duration-300 hover:shadow-[0_0_30px_var(--neon-cyan)] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center gap-2">
                {loading ? "Transmitting..." : "✨ Transmit message ✨"}
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 transition-transform duration-700 group-hover:translate-x-full" />
            </motion.button>

            {status === "success" && (
              <p className="text-center font-mono text-sm text-[color:var(--neon-cyan)]">✅ Message transmitted successfully!</p>
            )}
            {status === "error" && (
              <p className="text-center font-mono text-sm text-red-400">❌ Transmission failed. Try again.</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
/* FOOTER */
export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-14">
      <div className="absolute inset-0 -z-10 grid-bg opacity-20" />
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center">
        <p className="font-display text-2xl font-bold neon-text">Building Intelligent Systems For The Future.</p>
        <div className="flex items-center gap-3 text-muted-foreground">
          <a href="https://github.com/husseinmsuya" className="rounded-full glass p-2.5 hover:text-[color:var(--neon-cyan)] hover:shadow-[var(--glow-cyan)]"><Github size={16} /></a>
          <a href="https://www.linkedin.com/in/hussein-msuya-4a61653ab/" className="rounded-full glass p-2.5 hover:text-[color:var(--neon-cyan)] hover:shadow-[var(--glow-cyan)]"><Linkedin size={16} /></a>
          <a href="husseinmsuya898@gmail.com" className="rounded-full glass p-2.5 hover:text-[color:var(--neon-cyan)] hover:shadow-[var(--glow-cyan)]"><Mail size={16} /></a>
        </div>
        <p className="font-mono text-xs text-muted-foreground">© 2026 Hussein Shabani Msuya · Crafted with intelligence.</p>
      </div>
    </footer>
  );
}
