'use client';

import { useEffect } from 'react';

export function StoryMotion() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const progress = document.querySelector<HTMLElement>('.reading-progress');
    const updateProgress = () => {
      if (!progress) return;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${height > 0 ? window.scrollY / height : 0})`;
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!reduced && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
      elements.forEach(element => observer.observe(element));
      document.documentElement.classList.add('motion-ready');
      return () => { observer.disconnect(); window.removeEventListener('scroll', updateProgress); window.removeEventListener('resize', updateProgress); document.documentElement.classList.remove('motion-ready'); };
    }
    return () => { window.removeEventListener('scroll', updateProgress); window.removeEventListener('resize', updateProgress); };
  }, []);

  return <div className="reading-progress" aria-hidden="true" />;
}
