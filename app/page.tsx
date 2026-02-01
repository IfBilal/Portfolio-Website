"use client";

import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Cpu, 
  Briefcase, 
  GraduationCap,
  Download,
  Github,
  ArrowUpRight,
  Activity,
  Zap
} from 'lucide-react';

const Card = ({ children, title, className = "" }: { children?: React.ReactNode, title?: string, className?: string }) => (
  <div className={`relative border border-white/5 bg-white/[0.02] p-8 group transition-all hover:bg-white/[0.04] ${className}`}>
    <div className="absolute top-0 left-0 w-8 h-px bg-[#2E5BFF] opacity-50" />
    <div className="absolute top-0 left-0 w-px h-8 bg-[#2E5BFF] opacity-50" />
    {title && (
      <div className="absolute -top-3 left-6 px-2 bg-[#050505] font-mono text-[9px] text-[#2E5BFF] tracking-[0.2em] uppercase font-bold">
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
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#2E5BFF]/30 font-sans pb-20">
      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-[50] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-24">
        <div className="mb-8 flex items-center gap-4 font-mono text-[#2E5BFF] text-[11px] font-black tracking-[0.6em] uppercase italic">
          <span className="w-12 h-[2px] bg-[#2E5BFF]" />
          ESTABLISHED_NODE_06
        </div>
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase italic mb-8">
          M. BILAL<br />
          <span className="text-white opacity-20" style={{ WebkitTextStroke: '1px white' }}>TAHIR</span>
        </h1>
        <div className="max-w-2xl space-y-8">
          <p className="text-white/50 text-xl leading-relaxed font-light border-l-2 border-[#2E5BFF] pl-8 italic">
            Software Engineer based in <span className="text-white font-bold">Islamabad</span>. 
            Focused on high-performance <span className="text-white">MERN stacks</span> and 
            <span className="text-white"> AI Agent architectures</span>.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://drive.google.com/file/d/1u6Y4RxnnuHVARkN8xS6DhRHkI-ti6Xo6/view?usp=drivesdk" 
              target="_blank"
              className="bg-[#2E5BFF] px-8 py-4 font-mono text-[11px] font-black tracking-[0.2em] flex items-center gap-3 hover:shadow-[0_0_20px_rgba(46,91,255,0.4)] transition-all uppercase"
            >
              RESUME_IDENT <Download size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="px-6 md:px-24 py-20">
        <div className="mb-16 border-l-4 border-[#2E5BFF] pl-6">
          <h2 className="text-4xl font-black tracking-tighter uppercase italic">Professional_Deployment</h2>
          <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mt-1">Experience_Logs</p>
        </div>

        <Card title="WORK_HISTORY" className="mb-12">
          <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
            <div>
              <h3 className="text-3xl font-black italic text-white uppercase">RainMakerz</h3>
              <p className="font-mono text-[11px] text-[#2E5BFF] font-bold uppercase mt-1">Software Engineer Intern</p>
            </div>
            <span className="font-mono text-[10px] text-white/40 h-fit border border-white/10 px-3 py-1">NOV 2025 - JAN 2026</span>
          </div>
          <ul className="space-y-4 max-w-4xl font-light text-white/60 italic leading-relaxed">
            <li className="flex gap-4"><span className="text-[#2E5BFF] font-mono font-black">[01]</span> Architected serverless Python backends using FastAPI on Azure Functions.</li>
            <li className="flex gap-4"><span className="text-[#2E5BFF] font-mono font-black">[02]</span> Engineered multi-agent AI document processing logic for automated reasoning.</li>
            <li className="flex gap-4"><span className="text-[#2E5BFF] font-mono font-black">[03]</span> Implemented agentic pipelines utilizing DSPy, LangChain, and LangGraph.</li>
          </ul>
        </Card>
      </section>

      {/* Projects */}
      <section className="px-6 md:px-24 py-20 bg-white/[0.01]">
        <div className="mb-16 flex justify-between items-end">
          <div className="border-l-4 border-[#2E5BFF] pl-6">
            <h2 className="text-4xl font-black tracking-tighter uppercase italic">Secure_Archive</h2>
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mt-1">Project_Repository</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card title="PROJECT_01">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-black italic uppercase">Playistan</h3>
              <a href="https://github.com/IfBilal/Playistan-ISE" target="_blank" className="text-white/20 hover:text-white transition-colors"><Github size={20} /></a>
            </div>
            <p className="text-white/50 mb-8 italic font-light">Real-time sports booking platform with bidirectional community chat. Engineered with MERN, Socket.IO, and JWT/OTP security.</p>
            <div className="flex gap-3 flex-wrap">
              {["MERN", "Socket.IO", "OTP-Auth"].map(tag => (
                <span key={tag} className="font-mono text-[9px] bg-white/5 border border-white/10 px-3 py-1 text-white/40 uppercase font-black">{tag}</span>
              ))}
            </div>
          </Card>

          <Card title="PROJECT_02">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-black italic uppercase">YouGram</h3>
              <a href="https://github.com/IfBilal/You-Gram" target="_blank" className="text-white/20 hover:text-white transition-colors"><Github size={20} /></a>
            </div>
            <p className="text-white/50 mb-8 italic font-light">Enterprise social platform using advanced MongoDB Aggregation Pipelines for personalized feeds and complex data architectures.</p>
            <div className="flex gap-3 flex-wrap">
              {["React", "MongoDB", "Aggregations"].map(tag => (
                <span key={tag} className="font-mono text-[9px] bg-white/5 border border-white/10 px-3 py-1 text-white/40 uppercase font-black">{tag}</span>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Education */}
      <section className="px-6 md:px-24 py-20">
        <Card title="ACADEMIC_INTEL">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-[#2E5BFF]/10 rounded-sm">
                <GraduationCap size={32} className="text-[#2E5BFF]" />
              </div>
              <div>
                <h3 className="text-3xl font-black italic uppercase">FAST NUCES, ISLAMABAD</h3>
                <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mt-1">BS Software Engineering // Expected 2028</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="font-mono text-[12px] bg-[#2E5BFF]/10 border border-[#2E5BFF]/30 px-6 py-2 text-[#2E5BFF] font-black uppercase tracking-widest mb-2">
                3x DEAN'S LIST HONORS
              </div>
              <span className="font-mono text-[9px] text-white/10 uppercase tracking-[0.5em]">FAST_PK_ARCHIVE_0x0</span>
            </div>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-24 py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-mono text-[9px] text-white/20 uppercase tracking-[0.3em] italic">
          Next.js 15 // React 19 // Deploy_Stable
        </div>
        <div className="flex gap-12 font-mono text-[10px] font-black text-[#2E5BFF] uppercase tracking-widest italic">
          <a href="https://linkedin.com/in/m-bilaltahir" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/IfBilal" target="_blank" className="hover:text-white transition-colors">GitHub</a>
          <span>+92 335 5558223</span>
        </div>
      </footer>
    </main>
  );
}