
import React from 'react';
import { Download, Github, GraduationCap, ArrowUpRight } from 'lucide-react';

const GlassBox: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`glass p-8 group relative overflow-hidden transition-all duration-500 hover:bg-white/[0.02] border border-white/5 ${className}`}>
    <div className="absolute top-0 left-0 w-0 h-[1px] bg-[#2E5BFF] group-hover:w-full transition-all duration-700 shadow-[0_0_8px_#2E5BFF]" />
    {children}
  </div>
);

export const SectionIngress: React.FC = () => (
  <section id="identity" className="min-h-screen flex flex-col justify-center px-12 md:px-24 relative overflow-hidden">
    <div className="flex items-center gap-6 mono text-[#2E5BFF] text-[11px] font-black tracking-[0.8em] mb-12 uppercase">
      <span className="w-12 h-[2px] bg-[#2E5BFF] shadow-[0_0_8px_#2E5BFF]" />
      CORE_PROTOCOL_01
    </div>
    <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter leading-[0.85] mb-12 uppercase italic">
      M. BILAL<br />
      <span className="text-outline text-transparent opacity-20" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}>TAHIR</span>
    </h1>
    <div className="max-w-3xl space-y-8">
      <p className="text-white/40 text-xl leading-relaxed font-light border-l-2 border-[#2E5BFF] pl-10 italic">
        Software Engineer based in <span className="text-white font-bold uppercase tracking-wider">Islamabad</span>, specializing in the <span className="text-white font-bold uppercase tracking-wider">MERN Stack</span> and AI-driven architectures. 
        Focused on building scalable full-stack applications with real-time bidirectional infrastructure.
      </p>
      
      <div className="flex gap-10">
        <a 
          href="https://drive.google.com/file/d/1u6Y4RxnnuHVARkN8xS6DhRHkI-ti6Xo6/view?usp=drivesdk" 
          target="_blank" 
          className="bg-[#2E5BFF] px-14 py-6 mono text-[12px] font-black tracking-[0.5em] flex items-center gap-6 hover:shadow-[0_0_40px_rgba(46,91,255,0.6)] transition-all uppercase italic active:scale-95"
        >
          DOWNLOAD_V_IDENT_CV <Download size={18} />
        </a>
      </div>
    </div>
  </section>
);

export const SectionAcademic: React.FC = () => (
  <section id="academic" className="px-12 md:px-24 py-16">
    <div className="glass p-12 flex flex-col md:flex-row justify-between items-center gap-12 border-l-4 border-[#2E5BFF] bg-white/[0.01]">
      <div className="flex items-center gap-10">
        <div className="p-6 bg-[#2E5BFF]/5 rounded-sm border border-[#2E5BFF]/20">
          <GraduationCap size={52} className="text-[#2E5BFF] opacity-80" />
        </div>
        <div>
          <h3 className="mono text-[10px] text-[#2E5BFF] font-black tracking-[0.6em] mb-3 uppercase italic">ACADEMIC_INTEL</h3>
          <h4 className="text-4xl font-black tracking-tighter italic uppercase text-white">FAST NUCES, ISLAMABAD</h4>
          <p className="text-white/30 mono text-[10px] mt-2 uppercase tracking-[0.2em] font-bold italic">BS Software Engineering // Expected 2028</p>
        </div>
      </div>
      <div className="flex flex-col items-end text-right">
        <div className="mono text-[12px] bg-[#2E5BFF]/10 border border-[#2E5BFF]/40 px-10 py-3 text-[#2E5BFF] font-black tracking-[0.4em] mb-4 uppercase shadow-[0_0_20px_rgba(46,91,255,0.15)]">
          3x DEAN'S LIST HONORS
        </div>
        <span className="mono text-[9px] text-white/10 italic tracking-widest uppercase font-black">Archive_Node::FAST_PK_0x99</span>
      </div>
    </div>
  </section>
);

export const SectionIntelligence: React.FC = () => {
  const stack = [
    { cat: "FRONTEND", items: ["TypeScript", "React 19", "Next.js 15", "Tailwind CSS", "JavaScript (ES6+)"] },
    { cat: "BACKEND", items: ["Node.js", "Express.js", "Python (FastAPI/Flask)", "SQL (PostgreSQL/SQLite)", "MongoDB"] },
    { cat: "REALTIME_INFRA", items: ["Socket.IO", "Bidirectional Sync", "Webhooks", "OTP-based MFA"] },
    { cat: "OPS_DEPLOY", items: ["Vercel", "Linux (Ubuntu)", "Cloudinary (Asset Mgmt)", "Git"] }
  ];

  return (
    <section id="intelligence" className="py-32 px-12 md:px-24">
      <div className="mb-24 flex items-center justify-between border-b border-white/5 pb-10">
        <h2 className="text-6xl font-black tracking-tighter italic uppercase">TECHNICAL_MATRIX</h2>
        <span className="mono text-[10px] text-white/20 tracking-[0.6em] uppercase italic font-bold">SYSTEM_STACK_v2.5</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stack.map((s, i) => (
          <GlassBox key={i} className="bg-black/40">
            <h3 className="mono text-[12px] font-black text-[#2E5BFF] mb-12 tracking-[0.3em] uppercase italic">{s.cat}</h3>
            <ul className="space-y-4">
              {s.items.map(item => (
                <li key={item} className="text-xs font-bold text-white/30 hover:text-white transition-all flex items-center gap-4 group/item">
                  <div className="w-1.5 h-1.5 bg-white/5 group-hover/item:bg-[#2E5BFF] group-hover/item:shadow-[0_0_10px_#2E5BFF] transition-all" />
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
  <section id="deployment" className="py-32 px-12 md:px-24">
    <div className="mb-24 border-l-8 border-[#2E5BFF] pl-12">
      <h2 className="text-6xl font-black tracking-tighter italic uppercase">MISSION_LOGS</h2>
      <p className="mono text-[11px] text-[#2E5BFF] font-black mt-3 tracking-[0.6em] uppercase italic">EXPERIENCE_HISTORY</p>
    </div>
    
    <div className="relative border-l border-white/10 pl-12 space-y-32">
      <div className="relative group">
        <div className="absolute -left-[54px] top-0 w-[12px] h-[12px] bg-[#2E5BFF] shadow-[0_0_20px_#2E5BFF]" />
        <div className="flex flex-col md:flex-row justify-between mb-10 gap-8">
          <div>
            <h3 className="text-5xl font-black italic tracking-tighter text-white group-hover:text-[#2E5BFF] transition-colors uppercase">RainMakerz</h3>
            <p className="mono text-[13px] text-white/30 font-bold uppercase mt-2 italic tracking-[0.1em]">SOFTWARE ENGINEER INTERN // AI_INFRASTRUCTURE</p>
          </div>
          <span className="mono text-[11px] text-[#2E5BFF] font-black italic border-b border-[#2E5BFF]/30 pb-1 h-fit">NOV 2025 - JAN 2026</span>
        </div>
        <ul className="space-y-8 max-w-5xl">
          {[
            "Architected high-performance serverless Python backends using FastAPI on Azure Functions for scalable processing.",
            "Engineered multi-agent AI document processing logic for automated information extraction and complex reasoning.",
            "Implemented advanced agentic pipelines utilizing DSPy, LangChain, and LangGraph frameworks for autonomous workflows."
          ].map((log, i) => (
            <li key={i} className="text-white/40 text-xl leading-relaxed border-b border-white/5 pb-8 group-hover:text-white/80 transition-all font-light italic">
              <span className="text-[#2E5BFF] font-black mono text-sm mr-8">[{i+1}]</span> {log}
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
      id: "playistan",
      title: "Playistan",
      tags: ["Vite", "MongoDB", "Express", "React", "Node.js", "Socket.IO"],
      link: "https://github.com/IfBilal/Playistan-ISE", 
      desc: "Real-time sports booking platform with bidirectional community chat. Engineered with OTP-based MFA combined with JWT for secure user access. Developed using Vite for optimized frontend delivery." 
    },
    { 
      id: "yougram",
      title: "YouGram",
      tags: ["MongoDB", "Express", "React", "Node.js", "Aggregation"],
      link: "https://github.com/IfBilal/You-Gram", 
      desc: "Enterprise social platform using advanced MongoDB Aggregation Pipelines for personalized discovery feeds. Features stateless JWT-based authentication with protected route logic." 
    }
  ];

  return (
    <section id="archive" className="py-32 px-12 md:px-24 bg-black/40">
      <div className="mb-24 flex justify-between items-end border-b border-white/5 pb-10">
        <h2 className="text-6xl font-black tracking-tighter italic uppercase">PROJECT_REPOSITORY</h2>
        <div className="mono text-[9px] text-white/10 hidden md:block uppercase tracking-[0.5em] italic font-black animate-pulse">INTEGRITY_SYNC_OK</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projs.map((p, i) => (
          <GlassBox key={i} className="min-h-[440px] flex flex-col justify-between border border-white/10 hover:border-[#2E5BFF]/40">
            <div>
              <div className="flex justify-between items-start mb-12">
                <h3 className="text-5xl font-black italic tracking-tighter uppercase group-hover:text-[#2E5BFF] transition-colors">{p.title}</h3>
                <a href={p.link} target="_blank" className="text-white/20 hover:text-white transition-all transform hover:rotate-12 hover:scale-125"><Github size={28} /></a>
              </div>
              <p className="text-white/40 text-xl font-light leading-relaxed mb-14 italic">{p.desc}</p>
              <div className="flex gap-5 flex-wrap">
                {p.tags.map(t => <span key={t} className="mono text-[9px] bg-white/5 px-6 py-2 text-white/50 border border-white/10 uppercase font-black tracking-widest">{t}</span>)}
              </div>
            </div>
            <a 
              href={p.link}
              target="_blank"
              className="mono text-[11px] font-black tracking-[0.6em] text-[#2E5BFF] flex items-center gap-4 hover:gap-8 transition-all pt-12 border-t border-white/5 uppercase italic group"
            >
              ACCESS_PROJECT_INTEL <ArrowUpRight size={14} />
            </a>
          </GlassBox>
        ))}
      </div>
    </section>
  );
};

export const SectionUplink: React.FC = () => (
  <section id="contact" className="py-64 px-12 md:px-24 text-center bg-gradient-to-b from-transparent to-black/80">
    <div className="inline-block mono text-[11px] text-[#2E5BFF] font-black tracking-[1.8em] mb-16 animate-pulse uppercase italic">UPLINK_PROTOCOL_READY</div>
    <h2 className="text-8xl md:text-[14rem] font-black tracking-tighter italic uppercase mb-32 opacity-95 text-white">CONTACT_LINK</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
      <div className="space-y-8">
        <p className="mono text-[10px] text-white/20 tracking-[1em] uppercase italic font-black">Email_Gateway</p>
        <a 
          href="mailto:muhammadbilaltahir06@gmail.com" 
          className="text-base font-bold hover:text-[#2E5BFF] transition-colors break-all italic underline underline-offset-8 decoration-white/10 hover:decoration-[#2E5BFF]/40 tracking-normal lowercase"
        >
          muhammadbilaltahir06@gmail.com
        </a>
      </div>
      <div className="space-y-8">
        <p className="mono text-[10px] text-white/20 tracking-[1em] uppercase italic font-black">Social_Nodes</p>
        <div className="flex flex-col items-center gap-10">
          <a href="https://linkedin.com/in/m-bilaltahir" target="_blank" className="group flex flex-col items-center">
            <span className="text-xl font-bold group-hover:text-[#2E5BFF] transition-colors italic border-b border-white/5 group-hover:border-[#2E5BFF] pb-1 tracking-tighter">Muhammad Bilal Tahir</span>
            <span className="mono text-[9px] text-[#2E5BFF] font-black mt-2 uppercase tracking-[0.2em]">LinkedIn_Profile</span>
          </a>
          <a href="https://github.com/IfBilal" target="_blank" className="group flex flex-col items-center">
            <span className="text-xl font-bold group-hover:text-[#2E5BFF] transition-colors italic border-b border-white/5 group-hover:border-[#2E5BFF] pb-1 tracking-tighter">IfBilal</span>
            <span className="mono text-[9px] text-[#2E5BFF] font-black mt-2 uppercase tracking-[0.2em]">Github_Archive</span>
          </a>
        </div>
      </div>
      <div className="space-y-8">
        <p className="mono text-[10px] text-white/20 tracking-[1em] uppercase italic font-black">Voice_Relay</p>
        <p className="text-2xl font-black italic text-white/60 tracking-[0.2em]">+92-335-5558223</p>
      </div>
    </div>
  </section>
);
