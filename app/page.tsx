"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeroModule } from '@/components/HeroModule';
import { TechStackModule } from '@/components/TechStackModule';
import { ExperienceModule } from '@/components/ExperienceModule';
import { ProjectModule } from '@/components/ProjectModule';
import { CtaModule } from '@/components/CtaModule';
import { TerminalModule } from '@/components/TerminalModule';
import { SectionAcademic } from '@/components/Sections';

export default function Home() {
  const [wireframeMode, setWireframeMode] = useState(false);

  const toggleWireframe = () => {
    setWireframeMode(!wireframeMode);
    document.body.classList.toggle('wireframe-mode');
  };

  return (
    <main className={`min-h-screen pb-20 relative ${wireframeMode ? 'wireframe-active' : ''}`}>
      {/* Tactical HUD Overlays */}
      <div className="fixed inset-0 pointer-events-none z-[50] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-6 md:px-12 space-y-24 pt-20">
        {/* Section 01: Hero & Identity */}
        <HeroModule className="min-h-[70vh]" />

        {/* Section 02: Quick Actions */}
        <CtaModule />

        {/* Section 03: Technical Matrix */}
        <TechStackModule />

        {/* Section 04: Academic Intel */}
        <div id="academic">
          <SectionAcademic />
        </div>

        {/* Section 05: Experience Logs */}
        <ExperienceModule />

        {/* Section 06: Project Archive */}
        <ProjectModule />
      </div>

      {/* Persistent HUD Elements */}
      <TerminalModule 
        onToggleWireframe={toggleWireframe} 
        wireframeMode={wireframeMode} 
      />

      {/* Footer Branding */}
      <footer className="mt-32 px-12 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30 font-mono text-[9px] uppercase tracking-widest">
        <div>Next.js 15 // React 19 // Vercel_LTS_Deployment</div>
        <div>M. BILAL TAHIR © 2025 // SYSTEM_STATUS_ONLINE</div>
      </footer>
    </main>
  );
}