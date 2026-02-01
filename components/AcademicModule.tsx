'use client';

import React from 'react';
import { ModuleWrapper } from './ModuleWrapper';
import { GraduationCap } from 'lucide-react';

export const AcademicModule: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <ModuleWrapper className={className} title="ACADEMIC_INTELLIGENCE" id="academic">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mono text-white">
          EDUCATION
        </h2>
        <div className="h-[2px] w-20 bg-[#2E5BFF] mt-3 mb-6" />
      </div>

      <div className="bg-white/[0.02] backdrop-blur-sm border-l-4 border-[#2E5BFF] p-8 hover:bg-white/[0.04] transition-all duration-500 hover:shadow-[0_0_30px_rgba(46,91,255,0.1)]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex items-center gap-8">
            <div className="p-5 bg-[#2E5BFF]/10 border border-[#2E5BFF]/30 hover:bg-[#2E5BFF]/20 transition-all duration-300 group">
              <GraduationCap size={48} className="text-[#2E5BFF] group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 className="mono text-[10px] text-[#2E5BFF] font-bold tracking-[0.4em] mb-2 uppercase">
                ACADEMIC_INTEL
              </h3>
              <h4 className="text-2xl md:text-3xl font-bold tracking-tight uppercase text-white mb-2">
                FAST NUCES, ISLAMABAD
              </h4>
              <p className="text-white/50 mono text-xs uppercase tracking-wider font-semibold">
                BS Software Engineering // Expected 2028
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="mono text-xs bg-[#2E5BFF]/10 border border-[#2E5BFF]/40 px-6 py-3 text-[#2E5BFF] font-bold tracking-[0.3em] uppercase shadow-[0_0_20px_rgba(46,91,255,0.1)] hover:shadow-[0_0_30px_rgba(46,91,255,0.2)] transition-all duration-300">
              3x DEAN'S LIST HONORS
            </div>
            <span className="mono text-[9px] text-white/20 tracking-widest uppercase font-bold">
              Archive_Node::FAST_PK
            </span>
          </div>
        </div>
      </div>
    </ModuleWrapper>
  );
};
