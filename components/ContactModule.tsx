'use client';

import React from 'react';
import { ModuleWrapper } from './ModuleWrapper';
import { Mail, Github, Linkedin } from 'lucide-react';

export const ContactModule: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <ModuleWrapper className={className} title="CONTACT_UPLINK_PROTOCOL" id="contact">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mono text-white">
          CONTACT
        </h2>
        <div className="h-[2px] w-20 bg-[#2E5BFF] mt-3 mb-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Email */}
        <a
          href="mailto:muhammadbilaltahir06@gmail.com"
          className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/10 p-8 hover:bg-white/[0.06] hover:border-[#2E5BFF]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(46,91,255,0.15)] transform hover:-translate-y-1"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 bg-[#2E5BFF]/10 border border-[#2E5BFF]/30 group-hover:bg-[#2E5BFF]/20 transition-all duration-300">
              <Mail size={32} className="text-[#2E5BFF]" />
            </div>
            <div>
              <p className="mono text-[10px] text-white/40 tracking-widest uppercase mb-2">
                EMAIL_GATEWAY
              </p>
              <p className="text-white/80 text-sm font-medium break-all group-hover:text-white transition-colors">
                muhammadbilaltahir06@gmail.com
              </p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#2E5BFF] group-hover:w-full transition-all duration-700" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/m-bilaltahir"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/10 p-8 hover:bg-white/[0.06] hover:border-[#2E5BFF]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(46,91,255,0.15)] transform hover:-translate-y-1"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 bg-[#2E5BFF]/10 border border-[#2E5BFF]/30 group-hover:bg-[#2E5BFF]/20 transition-all duration-300">
              <Linkedin size={32} className="text-[#2E5BFF]" />
            </div>
            <div>
              <p className="mono text-[10px] text-white/40 tracking-widest uppercase mb-2">
                LINKEDIN_PROFILE
              </p>
              <p className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                Muhammad Bilal Tahir
              </p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#2E5BFF] group-hover:w-full transition-all duration-700" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/IfBilal"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/10 p-8 hover:bg-white/[0.06] hover:border-[#2E5BFF]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(46,91,255,0.15)] transform hover:-translate-y-1"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 bg-[#2E5BFF]/10 border border-[#2E5BFF]/30 group-hover:bg-[#2E5BFF]/20 transition-all duration-300">
              <Github size={32} className="text-[#2E5BFF]" />
            </div>
            <div>
              <p className="mono text-[10px] text-white/40 tracking-widest uppercase mb-2">
                GITHUB_ARCHIVE
              </p>
              <p className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                IfBilal
              </p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#2E5BFF] group-hover:w-full transition-all duration-700" />
        </a>
      </div>
    </ModuleWrapper>
  );
};
