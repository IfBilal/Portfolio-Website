
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, ArrowUpRight, Cpu, ShieldCheck, Zap, Database, Globe, Layers } from 'lucide-react';

const GlassBox: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`glass p-8 group relative overflow-hidden transition-all duration-500 hover:bg-white/[0.02] ${className}`}>
    <div className="absolute top-0 left-0 w-0 h-[1px] bg-[#2E5BFF] group-hover:w-full transition-all duration-700" />
    {children}
  </div>
);

export const SectionIngress: React.FC = () => (
  <section className="min-h-screen flex flex-col justify-center px-12 md:px-24 relative">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex items-center gap-6 mono text-[#2E5BFF] text-[11px] font-black tracking-[0.8em] mb-12">
        <span className="w-12 h-[2px] bg-[#2E5BFF]" />
        INIT_PHASE_01
      </div>
      <h1 className="text-8xl md:text-[11rem] font-black tracking-tighter leading-[0.85] mb-12 uppercase italic">
        M. BILAL<br />
        <span className="text-outline text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}>TAHIR</span>
      </h1>
      <p className="max-w-2xl text-white/50 text-xl leading-relaxed font-light mb-16 border-l-2 border-[#2E5BFF] pl-10 italic">
        Full-Stack Engineer specialized in <span className="text-white font-bold">MERN & Python</span>. 
        Currently architecting AI-driven automation systems from <span className="text-[#2E5BFF] font-black uppercase">Islamabad, PK</span>.
      </p>
      
      <div className="flex gap-10">
        <a 
          href="https://drive.google.com/file/d/1u6Y4RxnnuHVARkN8xS6DhRHkI-ti6Xo6/view?usp=drivesdk" 
          target="_blank" 
          className="bg-[#2E5BFF] px-12 py-6 mono text-[12px] font-black tracking-[0.4em] flex items-center gap-6 hover:shadow-[0_0_30px_#2E5BFF/40] transition-all"
        >
          PULL_RESUME_v2 <Download size={18} />
        </a>
      </div>
    </motion.div>
  </section>
);

export const SectionIntelligence: React.FC = () => {
  const stack = [
    { cat: "FRONTEND", items: ["React 19", "Next.js 15", "Tailwind", "GSAP"] },
    { cat: "BACKEND", items: ["FastAPI", "Node.js", "Express", "Python"] },
    { cat: "CORE_DATA", items: ["PostgreSQL", "MongoDB", "Pinecone", "Redis"] },
    { cat: "AI_AGENTS", items: ["LangChain", "DSPy", "Azure AI", "LangGraph"] }
  ];

  return (
    <section className="py-32 px-12 md:px-24">
      <div className="mb-24 flex items-center justify-between border-b border-white/5 pb-10">
        <h2 className="text-6xl font-black tracking-tighter italic uppercase">TECH_MATRIX</h2>
        <span className="mono text-[10px] text-white/20 tracking-[0.5em]">DNA_CODE_02</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stack.map((s, i) => (
          <GlassBox key={i} className="bg-black/40">
            <h3 className="mono text-[13px] font-black text-[#2E5BFF] mb-10 tracking-[0.3em] uppercase italic">{s.cat}</h3>
            <ul className="space-y-4">
              {s.items.map(item => (
                <li key={item} className="text-xs font-bold text-white/40 hover:text-white transition-colors flex items-center gap-3 group/item">
                  <div className="w-1 h-1 bg-white/10 group-hover/item:bg-[#2E5BFF]" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassBox>
        ))}
      </div>
    </section>
  );
};

export const SectionDeployment: React.FC = () => (
  <section className="py-32 px-12 md:px-24">
    <div className="mb-24 border-l-8 border-[#2E5BFF] pl-12">
      <h2 className="text-6xl font-black tracking-tighter italic uppercase">MISSION_LOGS</h2>
      <p className="mono text-[11px] text-[#2E5BFF] font-black mt-2 tracking-[0.4em]">PROFESSIONAL_DEPLOYMENT_RECORDS</p>
    </div>
    
    <div className="relative border-l border-white/10 pl-12 space-y-24">
      <div className="relative group">
        <div className="absolute -left-[54px] top-0 w-[12px] h-[12px] bg-[#2E5BFF] shadow-[0_0_10px_#2E5BFF]" />
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
          <div>
            <h3 className="text-4xl font-black italic tracking-tighter text-white group-hover:text-[#2E5BFF] transition-colors">RainMakerz</h3>
            <p className="mono text-[12px] text-white/30 font-bold uppercase mt-1">S_ENGINEER_INTERN // REMOTE</p>
          </div>
          <span className="mono text-[11px] text-[#2E5BFF] font-black italic underline underline-offset-8">NOV 2025 - JAN 2026</span>
        </div>
        <ul className="space-y-6 max-w-4xl">
          {[
            "Orchestrated serverless Python architectures on Azure Functions for elastic document processing.",
            "Engineered Autonomous AI Agent Systems utilizing LangChain & LangGraph for legal verification tasks.",
            "Optimized sub-second inference pipelines using DSPy frameworks for production-grade LLM applications."
          ].map((log, i) => (
            <li key={i} className="text-white/40 text-lg leading-relaxed border-b border-white/5 pb-6 group-hover:text-white/80 transition-all font-light">
              <span className="text-[#2E5BFF] font-black mono text-sm mr-6">[{i+1}]</span> {log}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export const SectionArchive: React.FC = () => {
  const projs = [
    { title: "Playistan", tags: ["MERN", "Socket.IO"], link: "https://github.com/IfBilal/Playistan-ISE", desc: "Real-time sports booking engine with high-concurrency architecture." },
    { title: "YouGram", tags: ["React", "MongoDB"], link: "https://github.com/IfBilal/You-Gram", desc: "Social intelligence platform using complex data aggregation pipelines." }
  ];

  return (
    <section className="py-32 px-12 md:px-24 bg-black/40">
      <div className="mb-24 flex justify-between items-end">
        <h2 className="text-6xl font-black tracking-tighter italic uppercase">SECURE_ARCHIVE</h2>
        <div className="mono text-[9px] text-white/10 hidden md:block">DATA_INTEGRITY: VERIFIED</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projs.map((p, i) => (
          <GlassBox key={i} className="min-h-[400px] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-10">
                <h3 className="text-4xl font-black italic tracking-tighter uppercase group-hover:text-[#2E5BFF] transition-colors">{p.title}</h3>
                <a href={p.link} target="_blank" className="text-white/20 hover:text-white transition-all"><Github size={24} /></a>
              </div>
              <p className="text-white/40 text-lg font-light leading-relaxed mb-10 italic">{p.desc}</p>
              <div className="flex gap-4">
                {p.tags.map(t => <span key={t} className="mono text-[9px] bg-white/5 px-4 py-1 text-white/50 border border-white/10">{t}</span>)}
              </div>
            </div>
            <a href={p.link} target="_blank" className="mono text-[11px] font-black tracking-[0.4em] text-[#2E5BFF] flex items-center gap-4 hover:gap-8 transition-all pt-10 border-t border-white/5">
              ACCESS_SRC_CMD <ArrowUpRight size={16} />
            </a>
          </GlassBox>
        ))}
      </div>
    </section>
  );
};

export const SectionUplink: React.FC = () => (
  <section className="py-64 px-12 md:px-24 text-center">
    <div className="inline-block mono text-[11px] text-[#2E5BFF] font-black tracking-[1em] mb-12 animate-pulse">ESTABLISHING_SYNC</div>
    <h2 className="text-8xl md:text-[12rem] font-black tracking-tighter italic uppercase mb-20 opacity-90">GLOBAL_COMMS</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
      <div className="space-y-4">
        <p className="mono text-[10px] text-white/20 tracking-[0.5em] uppercase">Email_Relay</p>
        <a href="mailto:muhammadbilaltahir06@gmail.com" className="text-xl font-bold hover:text-[#2E5BFF] transition-colors break-all italic">muhammadbilaltahir06@gmail.com</a>
      </div>
      <div className="space-y-4">
        <p className="mono text-[10px] text-white/20 tracking-[0.5em] uppercase">Neural_Uplink</p>
        <div className="flex justify-center gap-10">
          <a href="https://linkedin.com/in/m-bilaltahir" target="_blank" className="text-xl font-bold hover:text-[#2E5BFF] transition-colors italic">LINKEDIN</a>
          <a href="https://github.com/IfBilal" target="_blank" className="text-xl font-bold hover:text-[#2E5BFF] transition-colors italic">GITHUB</a>
        </div>
      </div>
      <div className="space-y-4">
        <p className="mono text-[10px] text-white/20 tracking-[0.5em] uppercase">Voice_Encrypted</p>
        <p className="text-xl font-bold italic">+92-335-5558223</p>
      </div>
    </div>
  </section>
);
