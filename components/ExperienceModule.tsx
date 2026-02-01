
import React from 'react';
import { ModuleWrapper } from './ModuleWrapper';

export const ExperienceModule: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <ModuleWrapper className={className} title="INTEL_EXPERIENCE_LOG" id="experience">
      <div className="space-y-8">
        <div className="relative pl-8 border-l border-white/10 group">
          {/* Active indicator */}
          <div className="absolute top-0 -left-1.5 w-3 h-3 bg-[#00E676] group-hover:scale-125 transition-transform" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#2E5BFF] transition-colors">RainMakerz</h3>
              <p className="mono text-xs text-white/40 tracking-wider">SOFTWARE ENGINEER INTERN</p>
            </div>
            <div className="mono text-[10px] bg-white/5 border border-white/10 px-3 py-1 text-white/60">
              NOV 2025 - JAN 2026
            </div>
          </div>

          <ul className="space-y-4 max-w-4xl">
            {[
              "Engineered serverless Python backend with FastAPI deployed on Azure Functions for optimized performance.",
              "Designed AI Agent Systems utilizing multi-agent document processing logic to automate complex workflows.",
              "Implemented sophisticated Agentic Pipelines using DSPy, LangChain, and LangGraph frameworks."
            ].map((detail, i) => (
              <li key={i} className="flex gap-4 text-white/60 leading-relaxed text-sm md:text-base">
                <span className="mono text-[#2E5BFF] font-bold mt-1">0{i+1}</span>
                <p>{detail}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Placeholder for more experience or education */}
        <div className="mono text-[10px] text-white/20 pt-4 flex items-center gap-4">
          <div className="flex-1 h-px bg-white/5" />
          SYSTEM_END_OF_LOG
          <div className="flex-1 h-px bg-white/5" />
        </div>
      </div>
    </ModuleWrapper>
  );
};
