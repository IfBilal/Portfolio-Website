'use client';

import React from 'react';
import { ModuleWrapper } from './ModuleWrapper';
import { Award, BookOpen, Code, Coffee } from 'lucide-react';

export const AboutModule: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <ModuleWrapper className={className} title="ABOUT_PROFILE_DATA" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Bio */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mono text-white mb-4">
              ABOUT ME
            </h2>
            <div className="h-[2px] w-20 bg-[#2E5BFF] mb-6" />
          </div>
          
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              I'm a passionate <span className="text-white font-semibold">Full-Stack Developer</span> specializing in building modern web applications with cutting-edge technologies. Based in Islamabad, Pakistan, I combine technical expertise with creative problem-solving to deliver exceptional digital experiences.
            </p>
            <p>
              Currently pursuing my <span className="text-white font-semibold">BS in Software Engineering</span> at FAST NUCES, where I've consistently earned Dean's List honors. My journey in tech is driven by curiosity and a commitment to continuous learning.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or mentoring fellow developers. I believe in writing clean, maintainable code and building products that make a real impact.
            </p>
          </div>
        </div>

        {/* Right: Quick Facts */}
        <div className="space-y-4">
          <div className="bg-white/[0.02] border border-white/10 p-6 hover:border-[#2E5BFF]/30 transition-all">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-2 bg-[#2E5BFF]/10 border border-[#2E5BFF]/30">
                <Code size={20} className="text-[#2E5BFF]" />
              </div>
              <h3 className="mono text-sm font-bold text-white">CORE EXPERTISE</h3>
            </div>
            <p className="text-white/60 text-sm">Full-stack development with MERN stack, real-time applications, cloud deployment, and system architecture design.</p>
          </div>

          <div className="bg-white/[0.02] border border-white/10 p-6 hover:border-[#2E5BFF]/30 transition-all">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-2 bg-[#00E676]/10 border border-[#00E676]/30">
                <Award size={20} className="text-[#00E676]" />
              </div>
              <h3 className="mono text-sm font-bold text-white">ACHIEVEMENTS</h3>
            </div>
            <p className="text-white/60 text-sm">3x Dean's List honors, 15+ completed projects, and internship experience at RainMakerz working on AI systems.</p>
          </div>

          <div className="bg-white/[0.02] border border-white/10 p-6 hover:border-[#2E5BFF]/30 transition-all">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-2 bg-[#2E5BFF]/10 border border-[#2E5BFF]/30">
                <BookOpen size={20} className="text-[#2E5BFF]" />
              </div>
              <h3 className="mono text-sm font-bold text-white">CURRENTLY LEARNING</h3>
            </div>
            <p className="text-white/60 text-sm">Advanced system design patterns, microservices architecture, DevOps practices, and AI/ML integration.</p>
          </div>

          <div className="bg-white/[0.02] border border-white/10 p-6 hover:border-[#2E5BFF]/30 transition-all">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-2 bg-[#00E676]/10 border border-[#00E676]/30">
                <Coffee size={20} className="text-[#00E676]" />
              </div>
              <h3 className="mono text-sm font-bold text-white">INTERESTS</h3>
            </div>
            <p className="text-white/60 text-sm">Open-source contribution, tech communities, competitive programming, and exploring emerging technologies.</p>
          </div>
        </div>
      </div>
    </ModuleWrapper>
  );
};
