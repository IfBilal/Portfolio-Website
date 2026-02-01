'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAPAnimations = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || typeof window === 'undefined') return;
    initialized.current = true;

    // Smooth reveal animation for all sections
    const sections = document.querySelectorAll('[id^="identity"], [id^="tech"], [id^="experience"], [id^="archive"], [id^="academic"], [id^="contact"]');
    
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Parallax effect for background elements
    gsap.to('.tactical-overlay', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    // Stagger animation for skill items
    const skillItems = document.querySelectorAll('[class*="group/item"]');
    if (skillItems.length > 0) {
      gsap.fromTo(
        skillItems,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#tech',
            start: 'top 60%',
          },
        }
      );
    }

    // Project cards hover animations are handled via CSS
    // Adding entrance animations
    const projectCards = document.querySelectorAll('[class*="transform hover:-translate-y"]');
    projectCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.9, rotateY: -15 },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};
