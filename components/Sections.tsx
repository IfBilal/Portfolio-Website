
import React from 'react';
import { Download, Github, ArrowUpRight, Cpu, ShieldCheck, Zap, Database, Globe, Layers, GraduationCap } from 'lucide-react';

const GlassBox: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`glass p-8 group relative overflow-hidden transition-all duration-500 hover:bg-white/[0.02] border border-white/5 ${className}`}>
    <div className="absolute top-0 left-0 w-0 h-[1px] bg-[#2E5BFF] group-hover:w-full transition-all duration-700" />
    {children}
  </div>
);

export const SectionIngress: React.FC = () => (
  <section className="min-h-screen flex flex-col justify-center px-12 md:px-24 relative">
    <div className="flex items-center gap-6 mono text-[#2E5BFF] text-[11px] font-black tracking-[0.8em] mb-12 uppercase">
      <span className="w-12 h-[2px] bg-[#2E5BFF]" />
      AUTH_IDENTITY_01
    </div>
    <h1 className="text-8xl md:text-[11rem] font-black tracking-tighter leading-[0.85] mb-12 uppercase italic">
      M. BILAL<br />
      <span className="text-outline text-transparent opacity-30" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}>TAHIR</span>
    </h1>
    <p className="max-w-3xl text-white/40 text-xl leading-relaxed font-light mb-16 border-l-2 border-[#2E5BFF] pl-10 italic">
      Software Engineer based in <span className="text-white font-bold">Islamabad, PK</span>. 
      Specialized in <span className="text-white font-bold">Serverless Python</span>, <span className="text-white font-bold">MERN Architecture</span>, and <span className="text-[#2E5BFF] font-black">AI Agent Systems</span>. 
      Translating complex logic into robust production infrastructure.
    </p>
    
    <div className="flex gap-10">
      <a 
        href="https://drive.google.com/file/d/1u6Y4RxnnuHVARkN8xS6DhRHkI-ti6Xo6/view?usp=drivesdk" 
        target="_blank" 
        className="bg-[#2E5BFF] px-12 py-6 mono text-[12px] font-black tracking-[0.4em] flex items-center gap-6 hover:shadow-[0_0_35px_#2E5BFF/50] transition-all uppercase italic"
      >
        ACCESS_RESUME_v3 <Download size={18} />
      </a>
    </div>
  </section>
);

export const SectionAcademic: React.FC = () => (
  <section className="px-12 md:px-24 py-16">
    <div className="glass p-12 flex flex-col md:flex-row justify-between items-center gap-12 border-l-4 border-[#2E5BFF] bg-white/[0.01]">
      <div className="flex items-center gap-10">
        <div className="p-5 bg-[#2E5BFF]/5 rounded-lg border border-[#2E5BFF]/20">
          <GraduationCap size={48} className="text-[#2E5BFF] opacity-80" />
        </div>
        <div>
          <h3 className="mono text-[10px] text-[#2E5BFF] font-black tracking-[0.6em] mb-3 uppercase italic">ACADEMIC_INTEL</h3>
          <h4 className="text-3xl font-black tracking-tighter italic uppercase text-white">FAST NUCES, ISLAMABAD</h4>
          <p className="text-white/30 mono text-[10px] mt-2 uppercase tracking-[0.2em] font-bold">BS Software Engineering // Class of 2025</p>
        </div>
      </div>
      <div className="flex flex-col items-end text-right">
        <div className="mono text-[12px] bg-[#2E5BFF]/10 border border-[#2E5BFF]/40 px-8 py-3 text-[#2E5BFF] font-black tracking-[0.3em] mb-3 uppercase shadow-[0_0_15px_#2E5BFF/10]">
          3x DEAN'S LIST HONORS
        </div>
        <span className="mono text-[9px] text-white/10 italic tracking-widest uppercase">Verified Transcripts::FAST_ARCHIVE</span>
      </div>
    </div>
  </section>
);

export const SectionIntelligence: React.FC = () => {
  const stack = [
    { cat: "BACKEND_OPS", items: ["Python", "FastAPI", "Node.js", "Azure Functions"] },
    { cat: "AI_MATRIX", items: ["DSPy", "LangChain", "LangGraph", "VectorDBs"] },
    { cat: "FRONTEND_UI", items: ["React 19", "Next.js 15", "Tailwind", "GSAP"] },
    { cat: "DATA_CORE", items: ["PostgreSQL", "MongoDB", "Redis", "Cloudinary"] }
  ];

  return (
    <section className="py-32 px-12 md:px-24">
      <div className="mb-24 flex items-center justify-between border-b border-white/5 pb-10">
        <h2 className="text-6xl font-black tracking-tighter italic uppercase">TECH_MATRIX</h2>
        <span className="mono text-[10px] text-white/20 tracking-[0.5em] uppercase italic">SYSTEM_DNA_v3</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stack.map((s, i) => (
          <GlassBox key={i} className="bg-black/40">
            <h3 className="mono text-[12px] font-black text-[#2E5BFF] mb-10 tracking-[0.3em] uppercase italic">{s.cat}</h3>
            <ul className="space-y-4">
              {s.items.map(item => (
                <li key={item} className="text-xs font-bold text-white/30 hover:text-white transition-all flex items-center gap-3 group/item">
                  <div className="w-1.5 h-1.5 bg-white/5 group-hover/item:bg-[#2E5BFF] group-hover/item:shadow-[0_0_8px_#2E5BFF] transition-all" />
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
      <p className="mono text-[11px] text-[#2E5BFF] font-black mt-2 tracking-[0.5em] uppercase italic">PROFESSIONAL_DEPLOYMENT_RECORDS</p>
    </div>
    
    <div className="relative border-l border-white/10 pl-12 space-y-24">
      <div className="relative group">
        <div className="absolute -left-[54px] top-0 w-[12px] h-[12px] bg-[#2E5BFF] shadow-[0_0_15px_#2E5BFF]" />
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-6">
          <div>
            <h3 className="text-4xl font-black italic tracking-tighter text-white group-hover:text-[#2E5BFF] transition-colors uppercase">RainMakerz</h3>
            <p className="mono text-[12px] text-white/30 font-bold uppercase mt-1 italic">S_ENGINEER_INTERN // AI SYSTEMS</p>
          </div>
          <span className="mono text-[11px] text-[#2E5BFF] font-black italic border-b border-[#2E5BFF]/30 pb-1">NOV 2025 - JAN 2026</span>
        </div>
        <ul className="space-y-6 max-w-4xl">
          {[
            "Architected serverless Python backends using FastAPI on Azure Functions for on-demand document parsing.",
            "Designed multi-agent AI systems utilizing LangChain and DSPy for automated legal and financial document verification.",
            "Implemented stateful Agentic Workflows with LangGraph to handle complex, asynchronous reasoning pipelines."
          ].map((log, i) => (
            <li key={i} className="text-white/40 text-lg leading-relaxed border-b border-white/5 pb-6 group-hover:text-white/80 transition-all font-light italic">
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
    { 
      title: "Playistan", 
      tags: ["MERN", "Socket.IO", "Auth_MFA"], 
      link: "https://github.com/IfBilal/Playistan-ISE", 
      desc: "Lead Full Stack Developer. Engineered a real-time sports booking ecosystem with bidirectional chat and secure OTP-based identity management." 
    },
    { 
      title: "YouGram", 
      tags: ["React", "MongoDB", "Aggregates"], 
      link: "https://github.com/IfBilal/You-Gram", 
      desc: "Enterprise Social Engine. Developed complex MongoDB Aggregation Pipelines to power personalized discovery feeds and data insights." 
    }
  ];

  return (
    <section className="py-32 px-12 md:px-24 bg-black/40">
      <div className="mb-24 flex justify-between items-end border-b border-white/5 pb-10">
        <h2 className="text-6xl font-black tracking-tighter italic uppercase">SECURE_ARCHIVE</h2>
        <div className="mono text-[9px] text-white/10 hidden md:block uppercase tracking-[0.4em] italic font-bold">INTEGRITY_CHECK: PASSED</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projs.map((p, i) => (
          <GlassBox key={i} className="min-h-[440px] flex flex-col justify-between border border-white/10">
            <div>
              <div className="flex justify-between items-start mb-10">
                <h3 className="text-4xl font-black italic tracking-tighter uppercase group-hover:text-[#2E5BFF] transition-colors">{p.title}</h3>
                <a href={p.link} target="_blank" className="text-white/20 hover:text-white transition-all transform hover:rotate-12"><Github size={26} /></a>
              </div>
              <p className="text-white/40 text-lg font-light leading-relaxed mb-12 italic">{p.desc}</p>
              <div className="flex gap-4 flex-wrap">
                {p.tags.map(t => <span key={t} className="mono text-[9px] bg-white/5 px-5 py-2 text-white/50 border border-white/10 uppercase font-black tracking-widest">{t}</span>)}
              </div>
            </div>
            <a href={p.link} target="_blank" className="mono text-[11px] font-black tracking-[0.5em] text-[#2E5BFF] flex items-center gap-4 hover:gap-8 transition-all pt-10 border-t border-white/5 uppercase italic group">
              ESTABLISH_UPLINK <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </GlassBox>
        ))}
      </div>
    </section>
  );
};

export const SectionUplink: React.FC = () => (
  <section className="py-64 px-12 md:px-24 text-center bg-gradient-to-b from-transparent to-black/60">
    <div className="inline-block mono text-[11px] text-[#2E5BFF] font-black tracking-[1.5em] mb-12 animate-pulse uppercase italic">SYNC_SEQUENCE_INITIATED</div>
    <h2 className="text-8xl md:text-[13rem] font-black tracking-tighter italic uppercase mb-24 opacity-95">GLOBAL_COMMS</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
      <div className="space-y-6">
        <p className="mono text-[10px] text-white/20 tracking-[0.8em] uppercase italic font-bold">Encrypted_Mail</p>
        <a href="mailto:muhammadbilaltahir06@gmail.com" className="text-xl font-bold hover:text-[#2E5BFF] transition-colors break-all italic underline underline-offset-8">muhammadbilaltahir06@gmail.com</a>
      </div>
      <div className="space-y-6">
        <p className="mono text-[10px] text-white/20 tracking-[0.8em] uppercase italic font-bold">Network_Nodes</p>
        <div className="flex justify-center gap-12">
          <a href="https://linkedin.com/in/m-bilaltahir" target="_blank" className="text-xl font-bold hover:text-[#2E5BFF] transition-colors italic border-b border-transparent hover:border-[#2E5BFF]">LINKEDIN</a>
          <a href="https://github.com/IfBilal" target="_blank" className="text-xl font-bold hover:text-[#2E5BFF] transition-colors italic border-b border-transparent hover:border-[#2E5BFF]">GITHUB</a>
        </div>
      </div>
      <div className="space-y-6">
        <p className="mono text-[10px] text-white/20 tracking-[0.8em] uppercase italic font-bold">Voice_Protocol</p>
        <p className="text-xl font-bold italic text-white/60 tracking-widest">+92-335-5558223</p>
      </div>
    </div>
  </section>
);
