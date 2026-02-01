'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const lineHRef = useRef<HTMLDivElement>(null);
  const lineVRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const moveCursor = (e: MouseEvent) => {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.6,
          ease: 'power4.out',
          overwrite: 'auto'
        });
        gsap.to(innerRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: 'power2.out',
          overwrite: 'auto'
        });
        gsap.to(lineHRef.current, {
          y: e.clientY,
          duration: 0.2,
          ease: 'power2.out',
          overwrite: 'auto'
        });
        gsap.to(lineVRef.current, {
          x: e.clientX,
          duration: 0.2,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      };

      window.addEventListener('mousemove', moveCursor);
    });

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', () => {});
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-12 h-12 -ml-6 -mt-6 border border-[#2E5BFF]/40 pointer-events-none z-[9999] rounded-full flex items-center justify-center transition-all duration-300 backdrop-invert-[0.05]"
      >
        <div className="w-1.5 h-1.5 bg-[#2E5BFF] rounded-full shadow-[0_0_10px_#2E5BFF]" />
      </div>
      <div 
        ref={innerRef}
        className="fixed top-0 left-0 w-3 h-3 -ml-1.5 -mt-1.5 bg-[#2E5BFF] pointer-events-none z-[10000] rounded-full opacity-50"
      />
      <div ref={lineHRef} className="fixed top-0 left-0 w-screen h-px bg-white/5 pointer-events-none z-[9998] hidden lg:block" />
      <div ref={lineVRef} className="fixed top-0 left-0 h-screen w-px bg-white/5 pointer-events-none z-[9998] hidden lg:block" />
    </>
  );
};