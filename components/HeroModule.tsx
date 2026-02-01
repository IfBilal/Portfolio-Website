'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ModuleWrapper } from './ModuleWrapper';
import { Download } from 'lucide-react';

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
  const role = useScramble("FULL STACK DEVELOPER", 2500);

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
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden group"
      >
        {/* Left: Name, Role, Description */}
        <div className="flex-1 space-y-5">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#2E5BFF] animate-pulse shadow-[0_0_10px_#2E5BFF]" />
              <h1 className="mono text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white">
                {name}
              </h1>
            </div>
            <p className="mono text-[#2E5BFF] text-base md:text-lg font-semibold tracking-wide">
              {role}
            </p>
          </div>

          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-4 text-white/40 mono text-xs">
              <span className="flex items-center gap-1">
                LOC: <span className="text-white/70">ISLAMABAD, PK</span>
              </span>
              <span className="w-px h-3 bg-white/10" />
              <span className="flex items-center gap-1">
                STATUS: <span className="text-[#00E676]">ACTIVE_NODE</span>
              </span>
            </div>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              Specializing in building high-performance web applications and scalable system architectures. Expertise in full-stack development with modern frameworks, cloud deployment, and real-time systems. Engineering next-generation digital experiences with focus on performance, security, and user engagement.
            </p>
            
            {/* Additional stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="border-l-2 border-[#2E5BFF] pl-3">
                <div className="text-2xl font-bold text-white mono">2+</div>
                <div className="text-xs text-white/50 mono">YEARS EXP</div>
              </div>
              <div className="border-l-2 border-[#00E676] pl-3">
                <div className="text-2xl font-bold text-white mono">15+</div>
                <div className="text-xs text-white/50 mono">PROJECTS</div>
              </div>
              <div className="border-l-2 border-[#2E5BFF] pl-3">
                <div className="text-2xl font-bold text-white mono">3x</div>
                <div className="text-xs text-white/50 mono">DEAN'S LIST</div>
              </div>
            </div>
            
            {/* Tech Highlights */}
            <div className="flex flex-wrap gap-2 pt-4">
              {['React', 'Node.js', 'MongoDB', 'Python', 'TypeScript', 'Socket.IO'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-[#2E5BFF]/10 border border-[#2E5BFF]/30 text-[#2E5BFF] text-xs mono font-semibold rounded-sm hover:bg-[#2E5BFF]/20 transition-all">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: CV Download Button */}
        <div className="flex flex-col items-center justify-center">
          <a 
            href="https://drive.google.com/file/d/1u6Y4RxnnuHVARkN8xS6DhRHkI-ti6Xo6/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative flex flex-col items-center justify-center gap-3 bg-[#2E5BFF] hover:bg-[#2E5BFF]/90 hover:shadow-[0_0_40px_rgba(46,91,255,0.6)] transition-all duration-300 px-10 py-6 mono text-sm font-bold tracking-[0.2em] transform hover:scale-105 border border-[#2E5BFF]"
          >
            <Download size={28} className="group-hover/btn:translate-y-1 transition-transform duration-300" />
            <span className="text-center text-xs">DOWNLOAD<br/>RESUME</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 animate-shimmer" />
            <div className="absolute bottom-0 left-0 h-1 bg-white/40 group-hover/btn:w-full w-0 transition-all duration-700" />
          </a>
        </div>

        <div className="absolute bottom-0 right-0 mono text-[10px] text-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
          REL_X: {coords.x} / REL_Y: {coords.y}
        </div>
      </div>
    </ModuleWrapper>
  );
};