
"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { 
  Terminal, 
  ChevronRight, 
  Download, 
  Github, 
  ArrowUpRight, 
  Cpu, 
  Database, 
  Code2, 
  ShieldCheck, 
  GraduationCap 
} from 'lucide-react';
import { SectionIngress, SectionIntelligence, SectionDeployment, SectionArchive, SectionUplink } from '../components/Sections';

const BackgroundParticles = () => {
  const pointsRef = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const pos = new Float32Array(8000 * 3);
    for (let i = 0; i < 8000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.02;
      pointsRef.current.position.y = Math.sin(time * 0.1) * 0.5;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#2E5BFF"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
};

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ duration: 1.2 });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', (e: any) => {
      setScrollProgress(e.progress);
      ScrollTrigger.update();
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen selection:bg-[#2E5BFF]/30">
      {/* BACKGROUND & FX */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <BackgroundParticles />
        </Canvas>
      </div>
      <div className="fixed inset-0 scanline z-50 pointer-events-none opacity-[0.03]" />

      {/* TOP NAV HUD */}
      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-start z-[100] mix-blend-difference pointer-events-none">
        <div className="mono text-[10px] space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00E676] rounded-full animate-pulse" />
            <span className="font-bold tracking-widest text-white/50">SYSTEM::STABLE</span>
          </div>
          <div className="text-white/30 uppercase tracking-[0.2em]">M_BILAL_TAHIR // CMD_V2.5</div>
        </div>
        <div className="mono text-[10px] text-right space-y-1 hidden md:block">
          <div className="text-[#2E5BFF] font-black italic tracking-widest uppercase">LATENCY: 0.04ms</div>
          <div className="text-white/20 uppercase tracking-[0.2em]">LOC: ISLAMABAD_PK</div>
        </div>
      </nav>

      {/* SIDEBAR ANCHORS */}
      <aside className="fixed left-0 top-0 h-full w-20 flex flex-col justify-center items-center gap-10 border-r border-white/5 z-[90] glass pointer-events-auto">
        {['ID', 'TECH', 'LOG', 'REPO', 'SYNC'].map((label, i) => (
          <button 
            key={label}
            className="mono text-[9px] vertical-text font-black text-white/20 hover:text-[#2E5BFF] transition-all tracking-[0.5em] group relative py-4"
          >
            {label}
            <div className="absolute left-0 top-0 h-0 w-[2px] bg-[#2E5BFF] group-hover:h-full transition-all" />
          </button>
        ))}
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="pl-20">
        <SectionIngress />
        
        {/* EDUCATION HUD MODULE */}
        <section className="px-12 md:px-24 py-12">
          <div className="glass p-12 flex flex-col md:flex-row justify-between items-center gap-12 border-l-4 border-[#00E676]">
            <div className="flex items-center gap-8">
              <GraduationCap size={48} className="text-[#00E676] opacity-40" />
              <div>
                <h3 className="mono text-[11px] text-[#00E676] font-black tracking-[0.5em] mb-2">ACADEMIC_CREDENTIALS</h3>
                <h4 className="text-3xl font-black tracking-tighter italic">FAST NUCES, ISLAMABAD</h4>
                <p className="text-white/40 mono text-[11px] mt-2 uppercase tracking-widest">Bachelor of Science in Computer Science</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="mono text-[12px] bg-[#00E676]/10 border border-[#00E676]/30 px-6 py-2 text-[#00E676] font-black tracking-[0.2em] mb-3">
                3x DEAN'S LIST HONORS
              </div>
              <span className="mono text-[9px] text-white/10 italic">VERIFIED_TRANSCRIPT_ID: 32_FAST_PK</span>
            </div>
          </div>
        </section>

        <SectionIntelligence />
        <SectionDeployment />
        <SectionArchive />
        <SectionUplink />

        <footer className="p-20 border-t border-white/5 mono text-[10px] text-white/20 flex justify-between items-center bg-black/80">
          <div className="uppercase tracking-[0.3em]">Built with React 19 + Next 15 // © 2024 Tahir Engine</div>
          <div className="hidden lg:flex gap-10 uppercase tracking-[0.2em]">
            <span>Security: AES-256-GCM</span>
            <span className="text-[#2E5BFF]">Status: Deploy_Success</span>
          </div>
        </footer>
      </div>

      {/* GLOBAL HUD PROGRESS BAR */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-white/5 z-[200]">
        <div 
          className="h-full bg-[#2E5BFF] shadow-[0_0_15px_#2E5BFF] transition-transform duration-75" 
          style={{ width: `${scrollProgress * 100}%` }} 
        />
      </div>
    </main>
  );
}
