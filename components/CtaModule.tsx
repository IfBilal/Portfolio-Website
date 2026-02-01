
import React from 'react';
import { ModuleWrapper } from './ModuleWrapper';
import { Download, ExternalLink } from 'lucide-react';

export const CtaModule: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <ModuleWrapper className={className} title="CTA_COMMAND_CENTER">
      <div className="h-full flex flex-col justify-center space-y-6">
        <a 
          href="https://drive.google.com/file/d/1u6Y4RxnnuHVARkN8xS6DhRHkI-ti6Xo6/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between bg-[#2E5BFF] hover:bg-[#2E5BFF]/90 transition-all p-4 mono text-xs font-bold tracking-[0.2em]"
        >
          <span>INITIATE_CV_DOWNLOAD</span>
          <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
          {/* Decorative bar */}
          <div className="absolute bottom-0 left-0 h-1 bg-white/30 group-hover:w-full w-0 transition-all duration-500" />
        </a>

        <div className="grid grid-cols-2 gap-3">
          <button className="border border-white/10 hover:border-[#2E5BFF]/40 p-3 mono text-[10px] text-white/50 hover:text-white flex items-center justify-center gap-2 transition-all">
            VIEW_SOURCE <ExternalLink size={12} />
          </button>
          <button className="border border-white/10 hover:border-[#2E5BFF]/40 p-3 mono text-[10px] text-white/50 hover:text-white flex items-center justify-center gap-2 transition-all">
            SYS_HEALTH <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-pulse" />
          </button>
        </div>
      </div>
    </ModuleWrapper>
  );
};
