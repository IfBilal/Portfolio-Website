'use client';

import React from 'react';
import { ModuleWrapper } from './ModuleWrapper';
import { Download } from 'lucide-react';

export const CtaModule: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <ModuleWrapper className={className} title="CTA_COMMAND_CENTER">
      <div className="h-full flex items-center justify-center py-4">
        <a 
          href="https://drive.google.com/file/d/1u6Y4RxnnuHVARkN8xS6DhRHkI-ti6Xo6/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center gap-4 bg-[#2E5BFF] hover:bg-[#2E5BFF]/90 hover:shadow-[0_0_30px_rgba(46,91,255,0.5)] transition-all duration-300 px-8 py-5 mono text-sm font-bold tracking-[0.2em] transform hover:scale-105"
        >
          <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
          <span>DOWNLOAD_CV</span>
          <div className="absolute bottom-0 left-0 h-1 bg-white/30 group-hover:w-full w-0 transition-all duration-500" />
        </a>
      </div>
    </ModuleWrapper>
  );
};