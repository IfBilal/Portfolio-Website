"use client";

import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Zap, 
  Cpu, 
  GraduationCap,
  Download,
  Github,
  ArrowUpRight
} from 'lucide-react';

const NavLink = ({ label, id }: { label: string, id: string }) => (
  <button 
    onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
    className="mono text-[10px] vertical-text font-black text-white/20 hover:text-[#2E5BFF] transition-all tracking-[0.6em] group relative py-6"
  >
    {label}
    <div className="absolute left-0 top-0 h-0 w-[2px] bg-[#2E5BFF] group-hover:h-full transition-all duration-500" />
  </button>
);

// Added key to the type definition to resolve TypeScript errors when used in .map()
const Card = ({ children, title, className = "" }: { children?: React.ReactNode, title?: string, className?: string, key?: React.Key }) => (
  <div className={`relative border border-white/5 bg-white/[0.02] p-8 group transition-all hover:bg-white/[0.04] ${className}`}>
    <div className="absolute top-0 left-0 w-8 h-px bg-[#2E5BFF] opacity-50" />
    <div className="absolute top-0 left-0 w-px h-8 bg-[#2E5BFF] opacity-50" />
    {title && (
      <div className="absolute -top-3 left-6 px-2 bg-[#050505] mono text-[9px] text-white/30 tracking-[0.2em] uppercase font-bold">
        {title}
      </div>
    )}
    {children}
  </div>
);

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="bg-[#050505] min-h-screen" />;

  return (
    <main className="relative min-h-screen bg-[#050505] text-white selection:bg-[#2E5BFF]/30 font-inter">
      {/* SCANLINE OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-[200] opacity-[0.03] scanline" />
      
      {/* STATIC DECORATION */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2E5BFF]/20 to-transparent z-[201]" />

      {/* NAVIGATION OVERLAY */}
      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-start z-[150] pointer-events-none">
        <div className="mono text-[10px] space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00E676] rounded-full animate-pulse shadow-[0_0_8px_#00E676]" />
            <span className="font-black tracking-widest text-white/60">SYSTEM::STABLE</span>
          </div>
          <div className="text-white/20 uppercase tracking-[0.1em]">M. BILAL TAHIR // ARCH_VER_3.0</div>
        </div>
        <div className="mono text-[10px] text-right hidden md:block">
          <div className="text-[#2E5BFF] font-black italic tracking-widest">DEPLOY_TARGET::VERCEL_LTS</div>
          <div className="text-white/10 uppercase tracking-[0.1em]">ISLAMABAD // PK</div>
        </div>
      </nav>

      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 h-full w-20 flex flex-col justify-center items-center gap-8 border-r border-white/5 z-[100] bg-[#050505]/80 backdrop-blur-xl">
        <NavLink label="ID" id="identity" />
        <NavLink label="EDU" id="academic" />
        <NavLink label="STK" id="intelligence" />
        <NavLink label="LOG" id="deployment" />
        <NavLink label="ARC" id="archive" />
        <div className="mt-auto pb-10 flex flex-col gap-6 opacity-10">
          <Activity size={14} />
          <Zap size={14} />
        </div>
      </aside>

      {/* CONTENT SURFACE */}
      <div className="pl-20 md:pl-32 pr-8 md:pr-12">
        
        {/* HERO SECTION */}
        <section id="identity" className="min-h-screen flex flex-col justify-center py-20">
          <div className="space-y-4 mb-12">
            <div className="flex items-center gap-4 mono text-[#2E5BFF] text-[11px] font-black tracking-[0.6em] uppercase italic">
              <span className="w-12 h-[2px] bg-[#2E5BFF] shadow-[0_0_8px_#2E5BFF]" />
              PROFILE_IDENT_0x1
            </div>
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] uppercase italic text-white">
              M. BILAL<br />
              <span className="text-outline text-transparent opacity-30">TAHIR</span>
            </h1>
          </div>
          <div className="max-w-3xl space-y-10">
            <p className="text-white/40 text-xl md:text-2xl leading-relaxed font-light border-l-2 border-[#2E5BFF] pl-10 italic">
              Software Engineer based in <span className="text-white font-bold">Islamabad</span>. 
              Architecting high-performance <span className="text-white font-bold">MERN architectures</span>, 
              AI systems, and secure cloud infrastructures.
            </p>
            <div className="flex flex-wrap gap-8 pl-10">
              <a 
                href="https://drive.google.com/file/d/1u6Y4RxnnuHVARkN8xS6DhRHkI-ti6Xo6/view?usp=drivesdk" 
                target="_blank"
                className="bg-[#2E5BFF] px-12 py-5 mono text-[11px] font-black tracking-[0.4em] flex items-center gap-4 hover:shadow-[0_0_30px_rgba(46,91,255,0.4)] transition-all uppercase italic"
              >
                FETCH_CV <Download size={16} />
              </a>
              <div className="flex items-center gap-6 mono text-[10px] text-white/30 uppercase tracking-widest font-black italic">
                <span>VER: 2025.02</span>
                <span>STATUS: READY</span>
              </div>
            </div>
          </div>
        </section>

        {/* ACADEMIC SECTION */}
        <section id="academic" className="py-20 border-t border-white/5">
          <Card title="ACADEMIC_INTEL">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex items-center gap-8">
                <div className="p-5 bg-white/5 border border-white/10 rounded-sm">
                  <GraduationCap size={40} className="text-[#2E5BFF]" />
                </div>
                <div>
                  <h3 className="text-4xl font-black tracking-tighter italic uppercase text-white">FAST NUCES, ISLAMABAD</h3>
                  <p className="text-white/30 mono text-[10px] mt-1 uppercase tracking-[0.2em] font-bold">BS Software Engineering // Class of 2028</p>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="mono text-[12px] bg-[#2E5BFF]/10 border border-[#2E5BFF]/40 px-8 py-3 text-[#2E5BFF] font-black tracking-[0.4em] uppercase shadow-[0_0_20px_rgba(46,91,255,0.1)] mb-2">
                  3x DEAN'S LIST HONORS
                </div>
                <span className="mono text-[9px] text-white/10 uppercase tracking-widest">Archive_ID: FAST_PK_LTS</span>
              </div>
            </div>
          </Card>
        </section>

        {/* TECH STACK GRID */}
        <section id="intelligence" className="py-32">
          <div className="mb-20 flex items-center justify-between border-b border-white/5 pb-8">
            <h2 className="text-5xl font-black tracking-tighter italic uppercase text-white">TECH_MATRIX</h2>
            <div className="mono text-[10px] text-white/20 tracking-[0.4em] uppercase italic font-bold">V_3.0_STABLE</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { cat: "FRONTEND", items: ["React 19", "Next.js 15", "Tailwind CSS", "TypeScript"] },
              { cat: "BACKEND", items: ["Node.js", "Express.js", "Python (FastAPI)", "SQL / NoSQL"] },
              { cat: "REALTIME", items: ["Socket.IO", "Webhooks", "Bidirectional Sync"] },
              { cat: "AI_INFRA", items: ["LangChain", "DSPy", "Agentic Pipelines", "Azure Functions"] }
            ].map((stack, i) => (
              <Card key={i} title={stack.cat}>
                <ul className="space-y-4 pt-4">
                  {stack.items.map(item => (
                    <li key={item} className="text-xs font-bold text-white/40 hover:text-[#2E5BFF] transition-all flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-white/5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* MISSION LOGS (EXPERIENCE) */}
        <section id="deployment" className="py-32">
          <div className="mb-20 border-l-8 border-[#2E5BFF] pl-12">
            <h2 className="text-5xl font-black tracking-tighter italic uppercase text-white">MISSION_LOGS</h2>
            <p className="mono text-[11px] text-[#2E5BFF] font-black mt-2 tracking-[0.4em] uppercase italic">EXPERIENCE_HISTORY</p>
          </div>
          
          <div className="relative border-l border-white/5 pl-12 ml-4">
            <div className="relative group">
              <div className="absolute -left-[54px] top-0 w-3 h-3 bg-[#2E5BFF] shadow-[0_0_15px_#2E5BFF]" />
              <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-5xl font-black italic tracking-tighter text-white uppercase group-hover:text-[#2E5BFF] transition-colors">RainMakerz</h3>
                  <p className="mono text-[12px] text-white/30 font-bold uppercase mt-1 italic tracking-[0.1em]">SOFTWARE ENGINEER INTERN // AI_AGENT_SYSTEMS</p>
                </div>
                <span className="mono text-[11px] text-[#2E5BFF] font-black italic border-b border-[#2E5BFF]/30 pb-1 h-fit">NOV 2025 - JAN 2026</span>
              </div>
              <ul className="space-y-6 max-w-4xl">
                {[
                  "Architected serverless Python backends using FastAPI on Azure Functions for high-concurrency document processing.",
                  "Engineered multi-agent AI systems for automated reasoning and extraction from complex documentation.",
                  "Implemented agentic pipelines utilizing DSPy, LangChain, and LangGraph for autonomous task execution."
                ].map((log, i) => (
                  <li key={i} className="text-white/40 text-lg leading-relaxed group-hover:text-white/80 transition-all font-light italic flex gap-6">
                    <span className="text-[#2E5BFF] font-black mono text-sm">[{i+1}]</span> {log}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECT REPO */}
        <section id="archive" className="py-32">
          <div className="mb-20 flex justify-between items-end border-b border-white/5 pb-8">
            <h2 className="text-5xl font-black tracking-tighter italic uppercase text-white">PROJECT_ARCHIVE</h2>
            <div className="mono text-[9px] text-white/20 hidden md:block uppercase tracking-[0.4em] font-black animate-pulse">INTEGRITY_SYNC_OK</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "Playistan",
                tags: ["MERN", "Socket.IO", "MongoDB"],
                desc: "Real-time sports booking platform with bidirectional chat. Engineered with OTP-based MFA and JWT security.",
                link: "https://github.com/IfBilal/Playistan-ISE"
              },
              { 
                title: "YouGram",
                tags: ["React", "Express", "MongoDB Aggregations"],
                desc: "Social platform utilizing advanced MongoDB Aggregation Pipelines for high-performance discovery feeds.",
                link: "https://github.com/IfBilal/You-Gram"
              }
            ].map((p, i) => (
              <Card key={i} className="min-h-[380px] flex flex-col justify-between hover:border-[#2E5BFF]/30">
                <div>
                  <div className="flex justify-between items-start mb-10">
                    <h3 className="text-4xl font-black italic tracking-tighter uppercase group-hover:text-[#2E5BFF] transition-colors">{p.title}</h3>
                    <a href={p.link} target="_blank" className="text-white/20 hover:text-white transition-all transform hover:rotate-12"><Github size={24} /></a>
                  </div>
                  <p className="text-white/40 text-lg font-light leading-relaxed mb-10 italic">{p.desc}</p>
                  <div className="flex gap-4 flex-wrap">
                    {p.tags.map(t => <span key={t} className="mono text-[9px] bg-white/5 px-4 py-1 text-white/50 border border-white/10 uppercase font-black tracking-widest">{t}</span>)}
                  </div>
                </div>
                <a 
                  href={p.link}
                  target="_blank"
                  className="mono text-[10px] font-black tracking-[0.4em] text-[#2E5BFF] flex items-center gap-3 mt-12 pt-8 border-t border-white/5 uppercase italic group"
                >
                  ACCESS_INTEL <ArrowUpRight size={14} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </a>
              </Card>
            ))}
          </div>
        </section>

        {/* CONTACT / FOOTER */}
        <section id="contact" className="py-64 text-center">
          <div className="inline-block mono text-[10px] text-[#2E5BFF] font-black tracking-[1.2em] mb-12 animate-pulse uppercase italic">UPLINK_PROTOCOL_AWAITING</div>
          <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter italic uppercase mb-24 opacity-90 text-white">CONTACT_LINK</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="space-y-4">
              <p className="mono text-[9px] text-white/20 tracking-[0.6em] uppercase italic font-black">Email_Gateway</p>
              <a href="mailto:muhammadbilaltahir06@gmail.com" className="text-lg font-bold hover:text-[#2E5BFF] transition-colors italic underline underline-offset-4 decoration-white/10 hover:decoration-[#2E5BFF]/40 lowercase">
                muhammadbilaltahir06@gmail.com
              </a>
            </div>
            <div className="space-y-4">
              <p className="mono text-[9px] text-white/20 tracking-[0.6em] uppercase italic font-black">Social_Nodes</p>
              <div className="flex justify-center gap-12">
                <a href="https://linkedin.com/in/m-bilaltahir" target="_blank" className="text-lg font-black italic hover:text-[#2E5BFF] transition-colors tracking-tighter">LinkedIn</a>
                <a href="https://github.com/IfBilal" target="_blank" className="text-lg font-black italic hover:text-[#2E5BFF] transition-colors tracking-tighter">Github</a>
              </div>
            </div>
            <div className="space-y-4">
              <p className="mono text-[9px] text-white/20 tracking-[0.6em] uppercase italic font-black">Voice_Relay</p>
              <p className="text-2xl font-black italic text-white/60 tracking-widest">+92-335-5558223</p>
            </div>
          </div>
        </section>

        <footer className="py-20 border-t border-white/5 mono text-[9px] text-white/15 flex flex-col md:flex-row justify-between items-center bg-black gap-8">
          <div className="uppercase tracking-[0.3em] font-medium italic">
            Next.js 15 // React 19 // Tailwind_Engine // Build_Bypass_Active
          </div>
          <div className="flex gap-12 uppercase tracking-[0.1em]">
            <div className="flex flex-col items-end">
              <span className="text-[#2E5BFF] font-black">M. BILAL TAHIR</span>
              <span className="opacity-30 italic">3x Dean's List // FAST PK</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
