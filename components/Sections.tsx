
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, ArrowUpRight, Cpu, ShieldCheck, Zap, Database, Globe } from 'lucide-react';

const GlowingCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`glass p-10 group relative overflow-hidden transition-all duration-700 hover:bg-white/[0.03] ${className}`}>
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2E5BFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2E5BFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    {children}
  </div>
);

export const SectionIngress: React.FC = () => {
  return (
    <section id="identity" className="min-h-screen flex flex-col justify-center px-12 md:px-24 relative overflow-hidden">
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 mono text-[12vw] text-white/[0.02] font-black vertical-text pointer-events-none uppercase">
        COMMAND_SURFACE
      </div>
      
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "circOut" }}
      >
        <div className="flex items-center gap-6 mono text-[#2E5BFF] text-[11px] font-black tracking-[0.8em] mb-10">
          <span className="w-12 h-[2px] bg-[#2E5BFF]" />
          ESTABLISHING_INGRESS_v1
        </div>
        <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter leading-[0.8] mb-12 uppercase italic relative">
          M. BILAL<br />
          <span className="text-outline text-transparent glitch-hover" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}>TAHIR</span>
        </h1>
        
        <div className="flex flex-col md:flex-row gap-20 items-start">
          <div className="mono text-[11px] text-white/30 space-y-4 border-l-4 border-[#2E5BFF] pl-10 py-3">
            <p className="flex justify-between w-56 italic"><span>BASE_LOC:</span> <span className="text-white/80">ISLAMABAD, PK</span></p>
            <p className="flex justify-between w-56 italic"><span>ALT_LOC:</span> <span className="text-white/80">REMOTE_CLOUD</span></p>
            <p className="flex justify-between w-56 italic"><span>ENCRYPTION:</span> <span className="text-[#00E676] font-black">ACTIVE_TLS</span></p>
          </div>
          <div className="max-w-xl">
            <p className="text-white/50 text-xl leading-relaxed font-light border-t border-white/10 pt-8 italic">
              Architecting high-concurrency <span className="text-white font-bold">MERN & Python</span> systems. Specializing in <span className="text-[#2E5BFF] font-black">AI Agent Orchestration</span> and secure enterprise data extraction pipelines.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 mt-20">
          <motion.a 
            href="https://drive.google.com/file/d/1u6Y4RxnnuHVARkN8xS6DhRHkI-ti6Xo6/view?usp=drivesdk"
            target="_blank"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(46,91,255,0.5)" }}
            className="inline-flex items-center gap-10 bg-[#2E5BFF] px-14 py-8 mono text-[12px] font-black tracking-[0.6em] group transition-all"
          >
            PULL_IDENT_ENCRYPTION_v1
            <Download size={18} className="group-hover:translate-y-1 transition-transform" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export const SectionIntelligence: React.FC = () => {
  const matrix = {
    frontend: ["React.js 19", "ES6+ Logic", "Tailwind CSS", "Redux/Context"],
    backend: ["Node.js", "Express", "Python", "FastAPI", "Flask"],
    infra: ["PostgreSQL (SQL)", "MongoDB", "Cloudinary", "Vercel", "AWS/Azure"],
    agentic: ["LangChain", "DSPy", "Multi-Agents", "JWT/Auth", "Socket.IO"]
  };

  return (
    <section id="tech" className="py-48 px-12 md:px-24 bg-[#070707]">
      <div className="section-header mb-40 border-l-8 border-[#2E5BFF] pl-12">
        <div className="flex items-center gap-6 mb-8">
          <Database size={20} className="text-[#2E5BFF]" />
          <span className="mono text-[12px] text-[#2E5BFF] tracking-[0.7em] font-black uppercase">02_TECHNICAL_DNA_MATRIX</span>
        </div>
        <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase leading-none italic opacity-90">INTEL_STACK</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(matrix).map(([key, skills], idx) => (
          <GlowingCard key={key} className="border border-white/5 bg-black/40">
            <div className="flex items-center justify-between mb-20">
              <span className="mono text-[11px] text-white/10 font-black italic">SEGMENT_00{idx+1}</span>
              <Cpu size={16} className="text-white/10 group-hover:text-[#2E5BFF] transition-all transform group-hover:rotate-90" />
            </div>
            <h3 className="mono text-[14px] font-black text-[#2E5BFF] mb-12 tracking-[0.5em] uppercase italic underline underline-offset-8 decoration-white/5">{key}</h3>
            <ul className="space-y-6">
              {skills.map(skill => (
                <li key={skill} className="flex items-center gap-6 group/skill">
                  <div className="w-2 h-2 bg-white/5 group-hover/skill:bg-[#00E676] group-hover/skill:scale-150 transition-all shadow-[0_0_12px_rgba(0,230,118,0)] group-hover/skill:shadow-[0_0_12px_rgba(0,230,118,0.6)]" />
                  <span className="text-white/30 text-xs font-black tracking-[0.2em] group-hover/skill:text-white transition-colors uppercase italic">{skill}</span>
                </li>
              ))}
            </ul>
          </GlowingCard>
        ))}
      </div>
    </section>
  );
};

export const SectionDeployment: React.FC = () => {
  const logs = [
    "Orchestrated Elastic Python architectures on Azure Cloud for massive document processing. [cite: 14]",
    "Developed Autonomous Agentic frameworks for automated legal & financial verification. [cite: 15]",
    "Integrated DSPy-optimized LangGraph pipelines for sub-second LLM reasoning responses. [cite: 16]"
  ];

  return (
    <section id="experience" className="py-48 px-12 md:px-24">
      <div className="section-header mb-40 flex justify-between items-end border-b border-white/5 pb-16">
        <div>
          <span className="mono text-[11px] text-[#2E5BFF] tracking-[0.6em] font-black uppercase">03_DEPLOYMENT_RECORDS</span>
          <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase leading-none mt-6 italic">MISSION_LOGS</h2>
        </div>
        <div className="mono text-[11px] text-white/10 text-right hidden xl:block uppercase font-bold tracking-widest">
          SECURITY_CLEARANCE_AUTH<br />
          LOGS_UNREDACTED_ACTIVE
        </div>
      </div>

      <div className="relative max-w-7xl">
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#2E5BFF] via-[#00E676] to-transparent" />
        <div className="pl-16 py-20 group relative overflow-hidden glass border border-white/5 bg-black/20">
          <div className="absolute left-0 top-0 w-[4px] h-0 bg-[#00E676] group-hover:h-full transition-all duration-1000 ease-in-out shadow-[0_0_30px_#00E676]" />
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-20 gap-10">
            <div className="space-y-3">
              <h3 className="text-5xl font-black text-white italic tracking-tighter uppercase group-hover:text-[#2E5BFF] transition-colors">RainMakerz</h3>
              <div className="flex items-center gap-6">
                <p className="mono text-[12px] text-[#2E5BFF] font-black tracking-[0.4em]">S_ENGINEER_INTERN_v2</p>
                <div className="w-3 h-3 rounded-full bg-[#00E676] animate-ping" />
              </div>
            </div>
            <div className="mono text-[12px] bg-[#2E5BFF]/10 border border-[#2E5BFF]/30 px-10 py-4 text-[#2E5BFF] font-black tracking-[0.4em] uppercase italic shadow-2xl">
              NOV 2025 - JAN 2026
            </div>
          </div>
          
          <div className="space-y-12">
            {logs.map((log, i) => (
              <div key={i} className="flex gap-10 group/log relative">
                <span className="mono text-[#00E676] text-[11px] mt-1.5 font-black opacity-40">ENTRY_0{i+1}</span>
                <p className="text-white/40 text-xl leading-relaxed group-hover/log:text-white/90 transition-all border-l border-white/10 pl-12 font-light">
                  {log}
                </p>
                <div className="absolute -left-16 top-0 bottom-0 w-1.5 bg-[#2E5BFF] opacity-0 group-hover/log:opacity-100 transition-opacity shadow-[0_0_15px_#2E5BFF]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const SectionArchive: React.FC = () => {
  const projects = [
    {
      name: "Playistan",
      stack: "React, Node.js, Socket.IO, PostgreSQL",
      summary: "High-concurrency sports booking engine with real-time socket-based uplink and secure SQL transactions.",
      security: "JWT_SECURE_AUTH_v2",
      link: "https://github.com/IfBilal/Playistan-ISE"
    },
    {
      name: "YouGram",
      stack: "React, Express, MongoDB Aggregation",
      summary: "Social intelligence node featuring advanced aggregation pipelines for non-relational feed delivery.",
      security: "ENCRYPTED_SESSIONS_v1",
      link: "https://github.com/IfBilal/You-Gram"
    }
  ];

  return (
    <section id="archive" className="py-48 px-12 md:px-24 bg-[#060606]">
      <div className="section-header mb-40">
        <span className="mono text-[11px] text-[#2E5BFF] tracking-[0.7em] font-black uppercase">04_PROJECT_DATA_REPOSITORY</span>
        <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase leading-none mt-6 italic opacity-90">SECURE_ARCHIVE</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects.map((p, i) => (
          <div key={i} className="glass group relative flex flex-col justify-between min-h-[600px] p-20 hover:border-[#2E5BFF]/80 transition-all bg-black/60 shadow-inner">
            <div className="absolute top-8 left-8 mono text-[9px] text-white/10 uppercase font-black tracking-widest">ARCHIVE_NODE_x0{i+1}</div>
            <div className="absolute top-8 right-8 w-4 h-4 border border-white/10 group-hover:border-[#2E5BFF] group-hover:rotate-45 transition-all" />

            <div>
              <div className="flex justify-between items-start mb-24">
                <div className="flex items-center gap-6">
                  <div className="w-4 h-4 bg-[#2E5BFF] animate-pulse shadow-[0_0_10px_#2E5BFF]" />
                  <span className="mono text-[11px] text-white/30 tracking-[0.5em] uppercase font-black italic">DEPLOYMENT::LIVE</span>
                </div>
                <a href={p.link} target="_blank" className="text-white/20 hover:text-white transition-all transform hover:-translate-y-2">
                  <Github size={32} />
                </a>
              </div>
              
              <h3 className="text-6xl font-black mb-8 group-hover:text-[#2E5BFF] transition-colors tracking-tighter italic uppercase">{p.name}</h3>
              <p className="mono text-[12px] text-[#2E5BFF] mb-16 font-black uppercase tracking-[0.4em] underline decoration-white/5 underline-offset-8 italic">{p.stack}</p>
              
              <div className="space-y-10">
                <p className="text-white/40 text-lg leading-relaxed max-w-md italic font-light">{p.summary}</p>
                <div className="flex items-center gap-5 text-[#00E676] mono text-[11px] bg-[#00E676]/5 px-8 py-3 border border-[#00E676]/20 w-fit uppercase font-black shadow-[0_0_20px_rgba(0,230,118,0.1)]">
                  <ShieldCheck size={16} /> {p.security}
                </div>
              </div>
            </div>

            <a 
              href={p.link}
              target="_blank"
              className="mt-24 flex items-center gap-10 mono text-[12px] font-black tracking-[0.6em] text-[#2E5BFF] group-hover:gap-16 transition-all uppercase italic border-t border-white/5 pt-10"
            >
              UPLINK_REMOTE_SOURCE <ArrowUpRight size={24} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export const SectionUplink: React.FC = () => {
  return (
    <section id="contact" className="py-72 px-12 md:px-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(46,91,255,0.05)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="section-header mb-48 border-b-2 border-white/5 pb-20">
        <span className="mono text-[11px] text-[#2E5BFF] tracking-[0.8em] font-black uppercase">05_COMMUNICATIONS_CHANNELS</span>
        <h2 className="text-8xl md:text-[14rem] font-black tracking-tighter uppercase leading-none mt-8 italic opacity-80">GLOBAL_COMMS</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-32 relative z-10">
        <div className="space-y-10 group border-l-2 border-white/5 pl-12 py-6 hover:border-[#2E5BFF] transition-all">
          <p className="mono text-[12px] text-white/20 uppercase tracking-[0.5em] font-black group-hover:text-[#2E5BFF] transition-colors">Direct_Mail_Node</p>
          <a href="mailto:muhammadbilaltahir06@gmail.com" className="text-3xl font-black hover:text-[#2E5BFF] transition-colors tracking-tighter italic break-all">
            muhammadbilaltahir06<br />@gmail.com
          </a>
        </div>
        <div className="space-y-10 group border-l-2 border-white/5 pl-12 py-6 hover:border-[#2E5BFF] transition-all">
          <p className="mono text-[12px] text-white/20 uppercase tracking-[0.5em] font-black group-hover:text-[#2E5BFF] transition-colors">Neural_Uplink</p>
          <div className="flex flex-col gap-8">
            <a href="https://linkedin.com/in/m-bilaltahir" target="_blank" className="text-4xl font-black hover:text-[#2E5BFF] transition-all tracking-tighter italic uppercase">LI: m-bilaltahir</a>
            <a href="https://github.com/IfBilal" target="_blank" className="text-4xl font-black hover:text-[#2E5BFF] transition-all tracking-tighter italic uppercase">GH: IfBilal</a>
          </div>
        </div>
        <div className="space-y-10 group border-l-2 border-white/5 pl-12 py-6 hover:border-[#2E5BFF] transition-all">
          <p className="mono text-[12px] text-white/20 uppercase tracking-[0.5em] font-black group-hover:text-[#2E5BFF] transition-colors">Satellite_Signal</p>
          <p className="text-6xl font-black tracking-tighter italic text-white/80 group-hover:text-white transition-colors">+92-335-5558223</p>
          <div className="w-32 h-3 bg-[#2E5BFF] shadow-[0_0_30px_rgba(46,91,255,0.6)]" />
        </div>
      </div>
    </section>
  );
};
