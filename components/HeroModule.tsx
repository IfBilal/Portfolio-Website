'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ModuleWrapper } from './ModuleWrapper';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+';

const useScramble = (text: string, duration = 1500) => {
  const [display, setDisplay] = useState('');
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    if (!mounted) return;

    let start: number | null = null;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const completion = Math.min(progress / duration, 1);
      
      const scrambled = text.split('').map((char, i) => {
        if (char === ' ') return ' ';
        if (i / text.length < completion) return char;
        return characters[Math.floor(Math.random() * characters.length)];
      }).join('');
      
      setDisplay(scrambled);
      if (progress < duration) requestAnimationFrame(animate);
    };
    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [text, duration, mounted]);
  
  return display || text;
};

export const HeroModule: React.FC<{ className?: string }> = ({ className }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const name = useScramble("M. BILAL TAHIR", 2000);
  const role = useScramble("SOFTWARE ENGINEER | FULL-STACK | AI ENGINEERING", 2500);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setCoords({
        x: Math.round(e.clientX - rect.left),
        y: Math.round(e.clientY - rect.top)
      });
    }
  };

  if (!mounted) return <div className={`h-[400px] ${className}`} />;

  return (
    <ModuleWrapper className={className} title="HERO_IDENTITY_ENGINE" id="identity">
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="h-full flex flex-col justify-center space-y-8 relative overflow-hidden group"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#2E5BFF]" />
            <h1 className="mono text-4xl md:text-6xl font-bold tracking-tighter text-white">
              {name}
            </h1>
          </div>
          <p className="mono text-[#2E5BFF] text-sm md:text-base font-semibold tracking-wide">
            {role}
          </p>
        </div>

        <div className="max-w-2xl space-y-4">
          <div className="flex items-center gap-4 text-white/40 mono text-xs">
            <span className="flex items-center gap-1">
              LOC: <span className="text-white/70">ISLAMABAD, PK</span>
            </span>
            <span className="w-px h-3 bg-white/10" />
            <span className="flex items-center gap-1">
              STATUS: <span className="text-[#00E676]">ACTIVE_NODE</span>
            </span>
          </div>
          <p className="text-white/60 text-lg leading-relaxed font-light">
            Architecting production-level MERN and Python applications with focus on 
            <span className="text-white font-medium"> secure cloud integrations </span> and 
            <span className="text-white font-medium"> AI-driven document processing systems</span>.
          </p>
        </div>

        <div className="absolute bottom-0 right-0 mono text-[10px] text-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
          REL_X: {coords.x} / REL_Y: {coords.y}
        </div>
      </div>
    </ModuleWrapper>
  );
};