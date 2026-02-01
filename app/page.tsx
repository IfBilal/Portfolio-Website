"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeroModule } from '@/components/HeroModule';
import { TechStackModule } from '@/components/TechStackModule';
import { ExperienceModule } from '@/components/ExperienceModule';
import { ProjectModule } from '@/components/ProjectModule';
import { TerminalModule } from '@/components/TerminalModule';
import { AcademicModule } from '@/components/AcademicModule';
import { ContactModule } from '@/components/ContactModule';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';

export default function Home() {
  const [wireframeMode, setWireframeMode] = useState(false);

  // Initialize GSAP animations
  useGSAPAnimations();

  const toggleWireframe = () => {
    setWireframeMode(!wireframeMode);
    document.body.classList.toggle('wireframe-mode');
  };

  return (
    <main className={`min-h-screen pb-20 relative ${wireframeMode ? 'wireframe-active' : ''}`}>
      {/* Tactical HUD Overlays with parallax */}
      <div className="tactical-overlay fixed inset-0 pointer-events-none z-[50] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-6 md:px-12 space-y-16 pt-12">
        {/* Section 01: Hero & Identity */}
        <HeroModule />

        {/* Section 02: Technical Matrix */}
        <TechStackModule />

        {/* Section 03: Experience Logs */}
        <ExperienceModule />

        {/* Section 04: Project Archive */}
        <ProjectModule />

        {/* Section 05: Academic Intel */}
        <AcademicModule />

        {/* Section 06: Contact */}
        <ContactModule />
      </div>

      {/* Persistent HUD Elements */}
      <TerminalModule 
        onToggleWireframe={toggleWireframe} 
        wireframeMode={wireframeMode} 
      />

      {/* Footer Branding */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-32 px-12 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[9px] uppercase tracking-widest hover:opacity-50 transition-opacity duration-300"
      >
        <div>M. BILAL TAHIR © 2025 // SYSTEM_STATUS_ONLINE</div>
      </motion.footer>
    </main>
  );
}