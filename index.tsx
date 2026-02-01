import React, { useState, useEffect, useRef, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Download, Github, Linkedin, GraduationCap, Terminal as TerminalIcon, 
  Cpu, Briefcase, Activity, ShieldCheck, Zap, BookOpen, User,
  ChevronRight, X, ArrowUpRight, ExternalLink
} from 'lucide-react';
import gsap from 'gsap';

// --- Neural Fabric (Reactive Constellation Engine) ---
const NeuralFabric = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const nodeCount = 95; 
    const connectionDist = 170;
    const mouseRadius = 280;
    const separationDist = 45; // Prevents nodes from overlapping

    class Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.25; 
        this.vy = (Math.random() - 0.5) * 0.25;
        this.size = Math.random() * 1.5 + 0.5;
      }

      update() {
        // Natural movement
        this.x += this.vx;
        this.y += this.vy;

        // Friction / Drag to keep it stable
        this.vx *= 0.99;
        this.vy *= 0.99;

        // Wrap around logic
        if (this.x < -30) this.x = width + 30;
        if (this.x > width + 30) this.x = -30;
        if (this.y < -30) this.y = height + 30;
        if (this.y > height + 30) this.y = -30;

        // Mouse Gravitational Pull with a "Dead Zone" to prevent clumping
        const dx = mouse.current.x - this.x;
        const dy = mouse.current.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // If mouse is near, pull them towards it, but STOP if they get too close (the dead zone)
        if (dist < mouseRadius && dist > 40) {
          const force = (mouseRadius - dist) / mouseRadius;
          const angle = Math.atan2(dy, dx);
          this.vx += Math.cos(angle) * force * 0.05;
          this.vy += Math.sin(angle) * force * 0.05;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const nodes = Array.from({ length: nodeCount }, () => new Node());

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      // Node Physics & Interaction Phase
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];

        // Inter-node Repulsion (Separation) - This is the key to preventing jumbling
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < separationDist) {
            const force = (separationDist - d) / separationDist;
            const angle = Math.atan2(dy, dx);
            const pushX = Math.cos(angle) * force * 0.4;
            const pushY = Math.sin(angle) * force * 0.4;
            
            n1.vx += pushX; n1.vy += pushY;
            n2.vx -= pushX; n2.vy -= pushY;
          }
        }

        n1.update();
        n1.draw();

        // Connection Rendering Phase
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const opacity = (1 - dist / connectionDist) * 0.1;
            const mdx = mouse.current.x - (n1.x + n2.x) / 2;
            const mdy = mouse.current.y - (n1.y + n2.y) / 2;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
            
            const isNearMouse = mdist < 180;
            ctx.strokeStyle = isNearMouse 
              ? `rgba(46, 91, 255, ${opacity * 4})` 
              : `rgba(255, 255, 255, ${opacity})`;
            
            ctx.lineWidth = isNearMouse ? 0.7 : 0.3;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0" 
      style={{ opacity: 0.9 }}
    />
  );
};

// --- Custom Components ---
const CustomCursor = () => {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const moveCursor = (e: MouseEvent) => {
      if (!cursorRef.current || !ringRef.current) return;
      gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(ringRef.current, { x: e.clientX, y: e.clientY, duration: 0.4, ease: 'power2.out' });
    };
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('button, a, input'));
    };
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleOver);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleOver);
    };
  }, []);

  if (!mounted) return null;
  return (
    <>
      <div ref={cursorRef} className="fixed top-0 left-0 w-1.5 h-1.5 -ml-0.5 -mt-0.5 bg-accent rounded-full z-[10000] pointer-events-none shadow-[0_0_10px_#2E5BFF]" />
      <div ref={ringRef} className={`fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 border border-accent/20 rounded-full z-[9999] pointer-events-none transition-transform duration-300 ${isHovering ? 'scale-150 border-accent/60' : 'scale-100'}`} />
    </>
  );
};

const ModuleWrapper: React.FC<{ children?: React.ReactNode, title?: string, id?: string, className?: string }> = ({ children, title, id, className = "" }) => {
  return (
    <motion.section
      id={id}
      initial={{ clipPath: 'inset(50% 0 50% 0)', opacity: 0 }}
      whileInView={{ clipPath: 'inset(0% 0 0% 0)', opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`relative bg-black/40 backdrop-blur-md border border-white/5 p-8 group transition-all hover:border-accent/20 ${className}`}
    >
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent/40 group-hover:border-accent transition-colors" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent/40 group-hover:border-accent transition-colors" />
      {title && (
        <div className="absolute -top-3 left-6 px-2 bg-bg font-mono text-[9px] text-accent font-black tracking-[0.2em] uppercase">
          {title}
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </motion.section>
  );
};

const charactersStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
const useScramble = (text: string, duration = 1500) => {
  const [display, setDisplay] = useState(text);
  useEffect(() => {
    let start: number;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const completion = Math.min(progress / duration, 1);
      setDisplay(text.split('').map((char, i) => {
        if (char === ' ') return ' ';
        return (i / text.length < completion) ? char : charactersStr[Math.floor(Math.random() * charactersStr.length)];
      }).join(''));
      if (progress < duration) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [text]);
  return display;
};

const Sidebar = () => {
  const anchors = [
    { id: 'hero', icon: User, label: 'ID' },
    { id: 'tech', icon: Cpu, label: 'TECH' },
    { id: 'projects', icon: ShieldCheck, label: 'PROJECTS' },
    { id: 'experience', icon: Briefcase, label: 'EXPERIENCE' },
  ];
  return (
    <nav className="fixed left-0 top-0 bottom-0 w-16 glass border-r border-white/10 flex flex-col items-center py-10 z-[100]">
      <div className="mb-20">
        <div className="w-2.5 h-2.5 bg-success rounded-full animate-pulse" />
      </div>
      <div className="flex-1 flex flex-col gap-10">
        {anchors.map(a => (
          <button key={a.id} onClick={() => document.getElementById(a.id)?.scrollIntoView({ behavior: 'smooth' })} className="text-white/20 hover:text-accent transition-all p-3 group relative">
            <a.icon size={22} strokeWidth={1.5} />
            <span className="absolute left-16 glass border border-accent/10 px-4 py-2 text-[10px] opacity-0 group-hover:opacity-100 transition-all pointer-events-none font-black tracking-widest uppercase italic">
              {a.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

const App = () => {
  const [wireframe, setWireframe] = useState(false);
  const [mounted, setMounted] = useState(false);
  const name = useScramble("M. BILAL TAHIR", 1800);
  const role = useScramble("SOFTWARE ENGINEER // MERN STACK ARCHITECT", 2200);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className={`min-h-screen bg-bg selection:bg-accent/30 ${wireframe ? 'wireframe-mode' : ''}`}>
      <CustomCursor />
      <NeuralFabric />
      <Sidebar />
      
      <main className="pl-16 container mx-auto px-6 md:px-12 py-20 space-y-40 relative z-10">
        
        <section id="hero" className="min-h-[75vh] flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 text-accent text-[11px] font-black tracking-[0.5em] mb-12 uppercase italic">
            <span className="w-10 h-[1px] bg-accent" /> SYSTEM_BOOT_SEQUENCE
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-7xl md:text-[11rem] font-black tracking-tighter italic uppercase leading-none mb-10">
            {name}<br />
            <span className="text-outline text-transparent opacity-10">TAHIR</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="max-w-2xl border-l-2 border-accent pl-12 space-y-8">
            <p className="text-accent font-mono text-xs font-black tracking-[0.3em] uppercase">{role}</p>
            <p className="text-white/40 text-2xl font-light italic leading-relaxed">
              <span className="text-white font-bold uppercase tracking-wide">MERN STACK DEVELOPER</span> specializing in building high-performance web applications and scalable system architectures. Engineering next-generation digital experiences.
            </p>
            <div className="flex gap-6 pt-6">
              <a href="https://drive.google.com/file/d/1u6Y4RxnnuHVARkN8xS6DhRHkI-ti6Xo6/view?usp=drivesdk" target="_blank" className="bg-accent px-10 py-5 font-mono text-[11px] font-black tracking-[0.3em] flex items-center gap-4 hover:shadow-[0_0_25px_#2E5BFF] transition-all uppercase italic active:scale-95">
                ACCESS_CV <Download size={16} />
              </a>
              <div className="flex gap-4">
                <a href="https://github.com/IfBilal" target="_blank" className="p-5 border border-white/5 hover:border-accent/40 transition-all bg-white/[0.02]"><Github size={24} /></a>
                <a href="https://linkedin.com/in/m-bilaltahir" target="_blank" className="p-5 border border-white/5 hover:border-accent/40 transition-all bg-white/[0.02]"><Linkedin size={24} /></a>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="tech" className="space-y-12">
          <div className="flex items-end justify-between border-b border-white/5 pb-8">
            <h2 className="text-6xl font-black tracking-tighter italic uppercase">SKILLS</h2>
            <span className="font-mono text-[9px] text-white/10 uppercase tracking-[0.5em] italic">SYSTEM_TELEMETRY</span>
          </div>
          <ModuleWrapper title="TECHNICAL_MATRIX">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
              {[
                { cat: "FRONTEND", skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "React Router", "TypeScript"] },
                { cat: "BACKEND", skills: ["Node.js", "Express.js", "Python", "Flask", "Fast API"] },
                { cat: "DATABASE & CLOUD", skills: ["MongoDB", "MySQL", "Cloudinary", "REST APIs"] },
                { cat: "SECURITY & REAL-TIME", skills: ["JWT (Access/Refresh Tokens)", "OTP-based Auth", "Bcrypt", "Socket.IO", "Protected Routes"] },
                { cat: "TOOLS & DEVOPS", skills: ["Git/GitHub", "Vercel", "Railway", "Selenium", "Postman", "Linux (Ubuntu)"] }
              ].map(stack => (
                <div key={stack.cat} className="space-y-4">
                  <h3 className="font-mono text-[10px] text-accent font-black tracking-[0.3em] uppercase italic border-b border-white/5 pb-2">{stack.cat}</h3>
                  <ul className="space-y-2">
                    {stack.skills.map(s => <li key={s} className="text-xs text-white/30 flex items-center gap-3 hover:text-white transition-colors cursor-default">
                      <span className="w-1 h-1 bg-accent/40 rounded-full shrink-0" /> <span className="leading-tight">{s}</span>
                    </li>)}
                  </ul>
                </div>
              ))}
            </div>
          </ModuleWrapper>
        </section>

        <section id="projects">
          <div className="mb-12 border-b border-white/5 pb-8 flex justify-between items-end">
            <h2 className="text-6xl font-black tracking-tighter italic uppercase">PROJECTS</h2>
            <span className="font-mono text-[9px] text-white/10 uppercase tracking-[0.5em] animate-pulse">INTEGRITY_SYNC_OK</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {[
              { 
                title: "Playistan", 
                desc: "A comprehensive sports facility management and booking ecosystem. Features real-time pitch availability synchronization, automated slot management, and bidirectional community chat using Socket.IO. Security is enforced via OTP-based multi-factor authentication combined with stateless JWT sessions for ultra-secure user access.", 
                tags: ["MERN Stack", "Socket.IO", "Atomic Transactions", "MFA/OTP Authentication", "Bcrypt Security", "Cloudinary", "Real-Time Sync", "REST API", "JWT", "Express", "Node.js", "Middleware"], 
                link: "https://github.com/IfBilal/Playistan-ISE" 
              },
              { 
                title: "YouGram", 
                desc: "High-performance enterprise social networking architecture designed for scalability. Implements complex MongoDB Aggregation Pipelines to generate optimized personalized discovery feeds and content rankings. Built with a robust RESTful API layer in Node.js, featuring secure image handling and stateless identity protection.", 
                tags: ["React Engine", "MongoDB Aggregation", "Node.js Server", "JWT Auth", "Middleware Protection", "Query Optimization", "Discovery Feed", "Scalable UI", "Asset Optimization", "State Management", "Tailwind CSS", "Hooks"], 
                link: "https://github.com/IfBilal/You-Gram" 
              }
            ].map(p => (
              <ModuleWrapper key={p.title} className="hover:border-accent/30 group/card flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-4xl font-black italic uppercase group-hover:text-accent transition-colors tracking-tighter">{p.title}</h3>
                  <a href={p.link} target="_blank" className="text-white/20 hover:text-white transition-all"><Github size={24} /></a>
                </div>
                <div className="flex-grow">
                  <p className="text-white/40 text-lg font-light mb-10 italic leading-relaxed min-h-[140px]">{p.desc}</p>
                  <div className="flex gap-2 flex-wrap mb-10">
                    {p.tags.map(t => <span key={t} className="font-mono text-[8px] bg-accent/5 border border-accent/20 px-2.5 py-1 text-accent/70 font-black uppercase tracking-[0.15em] hover:bg-accent/10 transition-colors">{t}</span>)}
                  </div>
                </div>
                <a href={p.link} target="_blank" className="inline-flex items-center gap-4 font-mono text-[10px] text-accent font-black uppercase tracking-[0.3em] italic hover:gap-8 transition-all border-t border-white/5 pt-6 w-full mt-auto">
                  INITIALIZE_PULL <ArrowUpRight size={14} />
                </a>
              </ModuleWrapper>
            ))}
          </div>
        </section>

        <section id="experience" className="space-y-12">
          <div className="flex items-end justify-between border-b border-white/5 pb-8">
            <h2 className="text-6xl font-black tracking-tighter italic uppercase">EXPERIENCE</h2>
            <span className="font-mono text-[9px] text-white/10 uppercase tracking-[0.5em] italic">MISSION_LOGS</span>
          </div>
          <ModuleWrapper title="DEPLOYMENT_HISTORY">
            <div className="relative pl-12 border-l border-accent/20">
              <div className="absolute top-0 -left-[5px] w-2.5 h-2.5 bg-success rounded-full" />
              <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
                <div>
                  <h3 className="text-5xl font-black italic uppercase text-white tracking-tighter">RainMakerz</h3>
                  <p className="font-mono text-[11px] text-accent font-black uppercase tracking-[0.2em] mt-2 italic">SWE INTERN // SYSTEM_ARCHITECTURE</p>
                </div>
                <span className="font-mono text-[10px] border border-white/10 px-4 py-2 text-white/30 uppercase tracking-[0.1em] italic">NOV 25 - JAN 26</span>
              </div>
              <ul className="space-y-8 max-w-4xl">
                {[
                  "Architected FastAPI serverless backends on Azure for complex data flows.",
                  "Engineered multi-agent logic for automated document processing and insight generation.",
                  "Implemented advanced agentic pipelines utilizing DSPy and LangGraph framework for autonomous workflows."
                ].map((log, i) => (
                  <li key={i} className="text-white/40 text-xl font-light leading-relaxed flex gap-8 hover:text-white transition-colors">
                    <span className="font-mono text-accent font-black text-sm mt-1">[{i+1}]</span> {log}
                  </li>
                ))}
              </ul>
            </div>
          </ModuleWrapper>
        </section>

        <footer className="pt-40 pb-20 text-center space-y-12 border-t border-white/5">
          <div className="font-mono text-[9px] text-accent font-black tracking-[1.5em] uppercase italic animate-pulse">UPLINK_ESTABLISHED</div>
          <h2 className="text-7xl md:text-[13rem] font-black tracking-tighter italic uppercase opacity-80 leading-none">CONTACT</h2>
          <div className="flex flex-col md:flex-row justify-center gap-16 font-mono text-[11px] uppercase font-black tracking-[0.2em] text-white/30">
            <a href="mailto:muhammadbilaltahir06@gmail.com" className="hover:text-accent transition-colors underline underline-offset-8 lowercase font-bold tracking-widest italic">muhammadbilaltahir06@gmail.com</a>
            <span>+92 335 5558223</span>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <a href="https://linkedin.com/in/m-bilaltahir" target="_blank" className="hover:text-accent transition-colors">LinkedIn: Muhammad Bilal Tahir</a>
              <a href="https://github.com/IfBilal" target="_blank" className="hover:text-accent transition-colors">Github: IfBilal</a>
            </div>
          </div>
          <p className="text-[9px] font-mono text-white/10 uppercase tracking-[0.6em] pt-24">SYSTEM_BUILD_2025 // STABLE_ENV</p>
        </footer>
      </main>
    </main>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
