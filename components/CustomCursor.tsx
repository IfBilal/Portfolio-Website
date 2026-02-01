'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

/**
 * CustomCursor component
 * Optimized for Next.js 15 + Vercel deployment.
 * Uses robust hydration checks to prevent GSAP/SSR mismatches.
 */
export const CustomCursor: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // Phase 1: Hydration Guard
  useEffect(() => {
    setMounted(true);
  }, []);

  // Phase 2: Client-side logic initialization
  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;

    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      // Smooth tactical ring follow
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x,
          y,
          duration: 0.4,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      }

      // Snappy precision dot follow
      if (innerRef.current) {
        gsap.to(innerRef.current, {
          x,
          y,
          duration: 0.1,
          ease: 'power1.out',
          overwrite: 'auto'
        });
      }
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isActionable = !!target.closest('button, a, input, [role="button"]');

      if (isActionable) {
        gsap.to(cursorRef.current, { scale: 1.5, borderColor: '#2E5BFF', duration: 0.3 });
      } else {
        gsap.to(cursorRef.current, { scale: 1, borderColor: 'rgba(46, 91, 255, 0.4)', duration: 0.3 });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      {/* Outer Tactical Ring */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 border border-[#2E5BFF]/40 rounded-full z-[9999] pointer-events-none transition-opacity duration-300 will-change-transform"
      />
      {/* Inner Precision Point */}
      <div 
        ref={innerRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-[#2E5BFF] rounded-full z-[10000] pointer-events-none shadow-[0_0_10px_#2E5BFF] will-change-transform"
      />
    </>
  );
};
