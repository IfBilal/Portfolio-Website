'use client';

import { useEffect } from 'react';

export function HeroMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const art = document.querySelector<HTMLElement>('.hero-art');
    if (!art) return;
    const move = (event: PointerEvent) => {
      const rect = art.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      art.style.setProperty('--tilt-x', `${(-y * 12).toFixed(2)}deg`);
      art.style.setProperty('--tilt-y', `${(x * 12).toFixed(2)}deg`);
    };
    const reset = () => { art.style.setProperty('--tilt-x', '0deg'); art.style.setProperty('--tilt-y', '0deg'); };
    art.addEventListener('pointermove', move);
    art.addEventListener('pointerleave', reset);
    return () => { art.removeEventListener('pointermove', move); art.removeEventListener('pointerleave', reset); };
  }, []);
  return null;
}
