'use client';

import React from 'react';
import { ModuleWrapper } from './ModuleWrapper';
import { Github, Globe, ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    title: "Playistan",
    tags: ["MERN", "Socket.IO", "Real-Time"],
    intel: "Real-time sports booking platform with bidirectional community chat and secure JWT/OTP identity management.",
    link: "https://github.com/IfBilal/Playistan-ISE"
  },
  {
    title: "YouGram",
    tags: ["React", "Node.js", "MongoDB Aggregation"],
    intel: "Enterprise social platform featuring complex MongoDB aggregation pipelines for personalized discovery feeds.",
    link: "https://github.com/IfBilal/You-Gram"
  }
];

export const ProjectModule: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <ModuleWrapper className={className} title="PROJECT_ARCHIVE_GRID" id="archive">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, idx) => (
          <div 
            key={idx}
            className="group relative bg-white/5 border border-white/5 p-6 hover:bg-white/[0.08] hover:border-[#2E5BFF]/30 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="space-y-1">
                <h3 className="text-lg font-bold group-hover:text-[#2E5BFF] transition-colors">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="mono text-[9px] bg-white/5 border border-white/10 px-2 py-0.5 text-white/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
            
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {project.intel}
            </p>

            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mono text-[10px] text-[#2E5BFF] group-hover:gap-4 transition-all uppercase font-bold tracking-widest"
            >
              ACCESS_PROJECT_INTEL <ArrowUpRight size={14} />
            </a>
          </div>
        ))}
      </div>
    </ModuleWrapper>
  );
};