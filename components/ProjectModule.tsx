'use client';

import React from 'react';
import { ModuleWrapper } from './ModuleWrapper';
import { Github, ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    title: "Playistan",
    tags: ["MERN Stack", "Socket.IO", "JWT Auth", "Real-Time", "MongoDB"],
    intel: "A comprehensive real-time sports booking platform featuring bidirectional community chat system. Implements secure authentication using JWT tokens combined with OTP-based multi-factor authentication. Built with scalable MERN architecture handling concurrent users and live updates through Socket.IO integration. Features include real-time availability tracking, booking confirmations, and instant notifications.",
    link: "https://github.com/IfBilal/Playistan-ISE",
    highlights: ["Real-time chat", "Secure Auth", "Live Bookings"]
  },
  {
    title: "YouGram",
    tags: ["Node.js", "React", "MongoDB Aggregation", "REST API", "Express"],
    intel: "Enterprise-grade social media platform leveraging advanced MongoDB Aggregation Pipelines for intelligent content discovery and personalized user feeds. Features stateless JWT-based authentication, complex data querying, and optimized database indexing for high-performance operations at scale. Implements engagement analytics, content recommendations, and user interaction tracking.",
    link: "https://github.com/IfBilal/You-Gram",
    highlights: ["Smart Feed", "Analytics", "Performance"]
  }
];

export const ProjectModule: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <ModuleWrapper className={className} title="PROJECT_ARCHIVE_GRID" id="archive">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mono text-white">
          PROJECTS
        </h2>
        <div className="h-[2px] w-20 bg-[#2E5BFF] mt-3 mb-6" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <div 
            key={idx}
            className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/10 p-8 hover:bg-white/[0.06] hover:border-[#2E5BFF]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(46,91,255,0.15)] transform hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="space-y-2 flex-1">
                <h3 className="text-2xl font-bold group-hover:text-[#2E5BFF] transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="mono text-[10px] bg-[#2E5BFF]/10 border border-[#2E5BFF]/30 px-3 py-1 text-[#2E5BFF] font-semibold tracking-wider hover:bg-[#2E5BFF]/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12"
              >
                <Github size={24} />
              </a>
            </div>
            
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {project.intel}
            </p>
            
            {/* Project Highlights */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.highlights.map(highlight => (
                <span key={highlight} className="px-2 py-1 bg-[#00E676]/10 border border-[#00E676]/30 text-[#00E676] text-[10px] mono font-semibold">
                  ✓ {highlight}
                </span>
              ))}
            </div>

            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mono text-[11px] text-[#2E5BFF] hover:text-white group-hover:gap-4 transition-all duration-300 uppercase font-bold tracking-widest border-t border-white/5 pt-6"
            >
              VIEW_PROJECT <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            
            <div className="absolute top-0 right-0 w-0 h-[2px] bg-[#2E5BFF] group-hover:w-full transition-all duration-700" />
          </div>
        ))}
      </div>
    </ModuleWrapper>
  );
};