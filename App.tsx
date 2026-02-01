
import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { Sidebar } from './components/Sidebar';
import { CustomCursor } from './components/CustomCursor';
import { TerminalModule } from './components/TerminalModule';
import { 
  SectionIngress, 
  SectionIntelligence, 
  SectionDeployment, 
  SectionArchive, 
  SectionUplink 
} from './components/Sections';

gsap.registerPlugin(ScrollTrigger);

const BackgroundParticles: React.FC<{ wireframe: boolean }> = ({ wireframe }) => {
  const pointsRef = useRef<THREE.Points>(null!);
  const [positions] = useState(() => {
    const pos = new Float32Array(12000 * 3);
    for (let i = 0; i < 12000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  });

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.025;
      pointsRef.current.rotation.x = Math.sin(time * 0.04) * 0.1;
      const mouseX = state.pointer.x * 0.3;
      const mouseY = state.pointer.y * 0.3;
      pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, mouseX, 0.05);
      pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, mouseY, 0.05);
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={wireframe ? "#00E676" : "#2E5BFF"}
        size={0.01}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={wireframe ? 0.9 : 0.5}
      />
    </Points>
  );
};

const App: React.FC = () => {
  const [wireframeMode, setWireframeMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', (e: any) => {
      ScrollTrigger.update();
      setScrollProgress(e.progress);
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value, { immediate: true }) : lenis.scroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      }
    });

    ScrollTrigger.addEventListener("refresh", () => lenis.resize());
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#050505] min-h-screen text-white selection:bg-[#2E5BFF]/30 antialiased">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
          <BackgroundParticles wireframe={wireframeMode} />
        </Canvas>
      </div>

      <div className="fixed inset-0 scanline z-50 pointer-events-none opacity-[0.05]" />
      
      <CustomCursor />
      <Sidebar />

      <main className="relative z-10 ml-[64px]">
        {/* HUD TELEMETRY */}
        <div className="fixed top-8 right-12 mono text-[9px] text-white/30 tracking-tighter text-right z-40 hidden lg:block">
          <div className="text-[#2E5BFF] font-black italic">PROTOCOL::COMMAND_SURFACE_V1.0</div>
          <div className="flex gap-4 justify-end mt-2">
            <span>Y_PROGRESS: {Math.round(scrollProgress * 100)}%</span>
            <span className="w-16 h-1.5 bg-white/5 relative overflow-hidden mt-0.5">
              <div className="absolute left-0 top-0 h-full bg-[#2E5BFF] shadow-[0_0_8px_#2E5BFF]" style={{ width: `${scrollProgress * 100}%` }} />
            </span>
          </div>
          <div className="mt-1 opacity-50">NODE_ISLAMABAD_PK // STABLE</div>
        </div>

        <SectionIngress />
        <SectionIntelligence />
        <SectionDeployment />
        <SectionArchive />
        <SectionUplink />
        
        <footer className="p-20 border-t border-white/5 mono text-[10px] text-white/30 tracking-widest flex flex-col md:flex-row justify-between items-center gap-12 uppercase bg-black/80 backdrop-blur-xl">
          <div className="space-y-2">
            <div className="text-white/60">3x Dean's List - FAST NUCES [cite: 32]</div>
            <div className="italic opacity-50 font-medium tracking-[0.3em]">Engineering Intelligence // Decrypting Complexity</div>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col items-end">
              <span className="text-[#2E5BFF] font-black">CORE_SYSTEM_v1.0.42</span>
              <span className="text-[#00E676] text-[8px] animate-pulse">SYSTEM_UPLINK_SECURE</span>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div className="flex flex-col items-end">
              <span>LATENCY: 0.02ms</span>
              <span>EST. 2024 // TAHIR_ENGINE</span>
            </div>
          </div>
        </footer>
      </main>

      <TerminalModule 
        onToggleWireframe={() => setWireframeMode(!wireframeMode)} 
        wireframeMode={wireframeMode}
      />
    </div>
  );
};

export default App;
