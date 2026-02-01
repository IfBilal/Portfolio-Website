
"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { 
  Cpu, 
  Activity, 
  Zap, 
  Terminal,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { SectionIngress, SectionIntelligence, SectionDeployment, SectionArchive, SectionAcademic, SectionUplink } from '../components/Sections';

const BackgroundParticles = () => {
  const pointsRef = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const pos = new Float32Array(15000 * 3);
    for (let i = 0; i < 15000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.02;
      pointsRef.current.position.y = Math.sin(time * 0.1) * 0.2;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#2E5BFF"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.25}
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

    // Entrance Animations for Industrial Sections
    const sections = gsap.utils.toArray('.animate-section');
    sections.forEach((section: any) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    return () => lenis.destroy();
  }, []);

  if (!mounted) return <div className="bg-[#050505] min-h-screen" />;

  return (
    <main ref={mainRef} className="relative min-h-screen bg-[#050505] selection:bg-[#2E5BFF]/30 overflow-x-hidden">
      {/* 3D ATMOSPHERE */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <BackgroundParticles />
        </Canvas>
      </div>
      
      {/* SCANLINE OVERLAY */}
      <div className="fixed inset-0 scanline z-50 pointer-events-none opacity-[0.03]" />

      {/* TACTICAL HUD NAV */}
      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-start z-[100] mix-blend-difference pointer-events-none">
        <div className="mono text-[10px] space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00E676] rounded-full animate-pulse shadow-[0_0_8px_#00E676]" />
            <span className="font-black tracking-widest text-white/40 uppercase">CORE::STABLE</span>
          </div>
          <div className="text-white/20 uppercase tracking-[0.2em]">M_BILAL_TAHIR // CMD_SRV_3.0</div>
        </div>
        <div className="mono text-[10px] text-right space-y-1 hidden md:block">
          <div className="text-[#2E5BFF] font-black italic tracking-widest uppercase">LATENCY: 0.01ms</div>
          <div className="text-white/10 uppercase tracking-[0.2em]">ISLAMABAD // PK</div>
        </div>
      </nav>

      {/* CHANNEL SIDEBAR */}
      <aside className="fixed left-0 top-0 h-full w-20 flex flex-col justify-center items-center gap-10 border-r border-white/5 z-[90] glass pointer-events-auto">
        {['ID', 'STK', 'LOG', 'ARC', 'EDU'].map((label) => (
          <button 
            key={label}
            className="mono text-[9px] vertical-text font-black text-white/20 hover:text-[#2E5BFF] transition-all tracking-[0.5em] group relative py-6"
          >
            {label}
            <div className="absolute left-0 top-0 h-0 w-[2px] bg-[#2E5BFF] group-hover:h-full transition-all duration-300" />
          </button>
        ))}
        <div className="mt-auto pb-8 flex flex-col gap-6 opacity-10">
          <Activity size={14} />
          <Zap size={14} />
        </div>
      </aside>

      {/* CONTENT SURFACE */}
      <div className="pl-20">
        <div className="animate-section">
          <SectionIngress />
        </div>
        
        <div className="animate-section">
          <SectionAcademic />
        </div>

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

        <footer className="p-20 border-t border-white/5 mono text-[10px] text-white/15 flex flex-col md:flex-row justify-between items-center bg-black/80 gap-10">
          <div className="uppercase tracking-[0.3em] font-medium italic">Built with Next.js 15 + React 19 // Source: Secure_Repo</div>
          <div className="flex gap-12 uppercase tracking-[0.2em]">
            <span>Sec_Layer: AES-256-GCM</span>
            <span className="text-[#2E5BFF] font-black italic shadow-[0_0_10px_#2E5BFF/20]">Uplink: Verified</span>
          </div>
        </footer>
      </div>

      {/* HUD TELEMETRY BAR */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-white/5 z-[200]">
        <div 
          className="h-full bg-[#2E5BFF] shadow-[0_0_20px_#2E5BFF] transition-transform duration-100" 
          style={{ width: `${scrollProgress * 100}%` }} 
        />
      </div>
    </main>
  );
}
