
"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { 
  GraduationCap, 
  Cpu, 
  Terminal, 
  ShieldCheck, 
  Activity,
  Zap
} from 'lucide-react';
import { SectionIngress, SectionIntelligence, SectionDeployment, SectionArchive, SectionUplink } from '../components/Sections';

const BackgroundParticles = () => {
  const pointsRef = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const pos = new Float32Array(10000 * 3);
    for (let i = 0; i < 10000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.015;
      pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#2E5BFF"
        size={0.012}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
};

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ duration: 1.5 });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', (e: any) => {
      setScrollProgress(e.progress);
      ScrollTrigger.update();
    });

    // GSAP Entrance Animations
    const sections = gsap.utils.toArray('.animate-section');
    sections.forEach((section: any) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  if (!mounted) return <div className="bg-[#050505] min-h-screen" />;

  return (
    <main ref={mainRef} className="relative min-h-screen selection:bg-[#2E5BFF]/30 bg-[#050505] overflow-x-hidden">
      {/* 3D ATMOSPHERE */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <BackgroundParticles />
        </Canvas>
      </div>
      <div className="fixed inset-0 scanline z-50 pointer-events-none opacity-[0.04]" />

      {/* TACTICAL HUD */}
      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-start z-[100] mix-blend-difference pointer-events-none">
        <div className="mono text-[10px] space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00E676] rounded-full animate-pulse" />
            <span className="font-bold tracking-widest text-white/50">NODE::ACTIVE</span>
          </div>
          <div className="text-white/30 uppercase tracking-[0.2em]">M_BILAL_TAHIR // SYS_V3.0</div>
        </div>
        <div className="mono text-[10px] text-right space-y-1 hidden md:block">
          <div className="text-[#2E5BFF] font-black italic tracking-widest uppercase">LATENCY: 0.02ms</div>
          <div className="text-white/20 uppercase tracking-[0.2em]">LOC: ISLAMABAD_PK</div>
        </div>
      </nav>

      {/* NAVIGATION CHANNEL */}
      <aside className="fixed left-0 top-0 h-full w-20 flex flex-col justify-center items-center gap-12 border-r border-white/5 z-[90] glass pointer-events-auto">
        {['ID', 'STK', 'LOG', 'ARC', 'COM'].map((label) => (
          <button 
            key={label}
            className="mono text-[9px] vertical-text font-black text-white/20 hover:text-[#2E5BFF] transition-all tracking-[0.5em] group relative py-4"
          >
            {label}
            <div className="absolute left-0 top-0 h-0 w-[2px] bg-[#2E5BFF] group-hover:h-full transition-all" />
          </button>
        ))}
        <div className="mt-auto pb-10 flex flex-col gap-6 opacity-20">
          <Activity size={14} />
          <Zap size={14} />
        </div>
      </aside>

      {/* CORE SURFACE */}
      <div className="pl-20">
        <div className="animate-section">
          <SectionIngress />
        </div>
        
        {/* ACADEMIC DATA STREAM */}
        <section className="px-12 md:px-24 py-16 animate-section">
          <div className="glass p-10 flex flex-col md:flex-row justify-between items-center gap-10 border-l-4 border-[#2E5BFF]">
            <div className="flex items-center gap-8">
              <GraduationCap size={40} className="text-[#2E5BFF] opacity-40" />
              <div>
                <h3 className="mono text-[10px] text-[#2E5BFF] font-black tracking-[0.5em] mb-2 uppercase italic">ACADEMIC_SYNC</h3>
                <h4 className="text-2xl font-black tracking-tighter italic uppercase">FAST NUCES, ISLAMABAD</h4>
                <p className="text-white/40 mono text-[10px] mt-1 uppercase tracking-widest">BS SOFTWARE ENGINEERING // 2021-2025</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="mono text-[11px] bg-[#2E5BFF]/10 border border-[#2E5BFF]/30 px-6 py-2 text-[#2E5BFF] font-black tracking-[0.2em] mb-2 uppercase">
                3x DEAN'S LIST HONORS
              </div>
              <span className="mono text-[8px] text-white/10 italic">VERIFIED::FAST_PK_INTEL_ARCHIVE</span>
            </div>
          </div>
        </section>

        <div className="animate-section">
          <SectionIntelligence />
        </div>
        <div className="animate-section">
          <SectionDeployment />
        </div>
        <div className="animate-section">
          <SectionArchive />
        </div>
        <div className="animate-section">
          <SectionUplink />
        </div>

        <footer className="p-20 border-t border-white/5 mono text-[10px] text-white/15 flex flex-col md:flex-row justify-between items-center bg-black/80 gap-8">
          <div className="uppercase tracking-[0.3em]">Built with Next.js 15 + React 19 // Deploy: Vercel_LTS</div>
          <div className="flex gap-12 uppercase tracking-[0.2em]">
            <span>Sec_Layer: AES-256</span>
            <span className="text-[#2E5BFF] font-black italic">Sync_Status: Verified</span>
          </div>
        </footer>
      </div>

      {/* TELEMETRY PROGRESS */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-white/5 z-[200]">
        <div 
          className="h-full bg-[#2E5BFF] shadow-[0_0_15px_#2E5BFF] transition-transform duration-100" 
          style={{ width: `${scrollProgress * 100}%` }} 
        />
      </div>
    </main>
  );
}
