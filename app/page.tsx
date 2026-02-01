
"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { 
  Activity, 
  Zap, 
  Terminal,
  Cpu
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
      pointsRef.current.rotation.y = time * 0.015;
      pointsRef.current.rotation.x = Math.sin(time * 0.05) * 0.1;
      pointsRef.current.position.y = Math.sin(time * 0.1) * 0.2;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
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
    
    const lenis = new Lenis({ 
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', (e: any) => {
      setScrollProgress(e.progress);
      ScrollTrigger.update();
    });

    // GSAP Scroll Trigger Entrance Animations
    const sections = gsap.utils.toArray('.animate-section');
    sections.forEach((section: any) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 60, scale: 0.98 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 1.2, 
          ease: "expo.out",
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
    <main ref={mainRef} className="relative min-h-screen bg-[#050505] selection:bg-[#2E5BFF]/30 overflow-x-hidden font-inter">
      {/* 3D FIELD */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
          <BackgroundParticles />
        </Canvas>
      </div>
      
      {/* HUD ELEMENTS */}
      <div className="fixed inset-0 scanline z-50 pointer-events-none opacity-[0.04]" />

      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-start z-[100] mix-blend-difference pointer-events-none">
        <div className="mono text-[10px] space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00E676] rounded-full animate-pulse shadow-[0_0_8px_#00E676]" />
            <span className="font-black tracking-widest text-white/50 uppercase">SYS_ACTIVE::LTS_1.5</span>
          </div>
          <div className="text-white/20 uppercase tracking-[0.2em]">M_BILAL_TAHIR // CMD_SRV_3.0</div>
        </div>
        <div className="mono text-[10px] text-right space-y-1 hidden md:block">
          <div className="text-[#2E5BFF] font-black italic tracking-widest uppercase">LATENCY: 0.01ms</div>
          <div className="text-white/10 uppercase tracking-[0.2em]">ISLAMABAD // PK</div>
        </div>
      </nav>

      {/* VERTICAL COMMAND CHANNEL */}
      <aside className="fixed left-0 top-0 h-full w-20 flex flex-col justify-center items-center gap-10 border-r border-white/5 z-[90] glass pointer-events-auto">
        {['ID', 'EDU', 'STK', 'LOG', 'ARC'].map((label) => (
          <button 
            key={label}
            className="mono text-[9px] vertical-text font-black text-white/20 hover:text-[#2E5BFF] transition-all tracking-[0.6em] group relative py-6"
          >
            {label}
            <div className="absolute left-0 top-0 h-0 w-[2px] bg-[#2E5BFF] group-hover:h-full transition-all duration-500 shadow-[0_0_10px_#2E5BFF]" />
          </button>
        ))}
        <div className="mt-auto pb-8 flex flex-col gap-6 opacity-10">
          <Activity size={14} />
          <Zap size={14} />
        </div>
      </aside>

      {/* CORE SURFACE AREA */}
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

        <footer className="p-20 border-t border-white/5 mono text-[10px] text-white/15 flex flex-col md:flex-row justify-between items-center bg-black/90 backdrop-blur-md gap-10">
          <div className="uppercase tracking-[0.4em] font-medium italic">
            Next.js 15 // React 19 // Vercel_Build: LTS
          </div>
          <div className="flex gap-16 uppercase tracking-[0.2em]">
            <div className="flex flex-col items-end">
              <span className="text-[#2E5BFF] font-black shadow-[0_0_8px_#2E5BFF/30]">M. BILAL TAHIR</span>
              <span className="opacity-40">3x Dean's List // FAST NUCES</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[#00E676] font-black italic">Sync_Status: Verified</span>
              <span className="opacity-20 italic">Node_ID: 0x42A19F</span>
            </div>
          </div>
        </footer>
      </div>

      {/* HUD PROGRESS BAR */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-white/5 z-[200]">
        <div 
          className="h-full bg-[#2E5BFF] shadow-[0_0_25px_#2E5BFF] transition-transform duration-150 ease-out" 
          style={{ width: `${scrollProgress * 100}%` }} 
        />
      </div>
    </main>
  );
}
