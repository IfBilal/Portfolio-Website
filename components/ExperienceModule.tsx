'use client';

import React from 'react';
import { ModuleWrapper } from './ModuleWrapper';

export const ExperienceModule: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <ModuleWrapper className={className} title="INTEL_EXPERIENCE_LOG" id="experience">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mono text-white">
          EXPERIENCE
        </h2>
        <div className="h-[2px] w-20 bg-[#2E5BFF] mt-3 mb-6" />
      </div>

      <div className="space-y-8">
        <div className="relative pl-8 border-l-2 border-white/20 group hover:border-[#2E5BFF]/50 transition-all duration-500">
          <div className="absolute top-0 -left-[9px] w-4 h-4 bg-[#00E676] group-hover:scale-125 group-hover:shadow-[0_0_20px_#00E676] transition-all duration-300" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
            <div>
              <h3 className="text-2xl font-bold text-white group-hover:text-[#2E5BFF] transition-colors duration-300">
                RainMakerz
              </h3>
              <p className="mono text-xs text-white/40 tracking-wider mt-1">
                SOFTWARE ENGINEER INTERN
              </p>
            </div>
            <div className="mono text-[10px] bg-[#2E5BFF]/10 border border-[#2E5BFF]/30 px-4 py-2 text-[#2E5BFF] font-semibold tracking-wider">
              NOV 2025 - JAN 2026
            </div>
          </div>

          <ul className="space-y-5 max-w-4xl">
            {[
              "Mastered scalable serverless architecture patterns using FastAPI and Azure Functions, learning deployment strategies for high-availability cloud systems and microservices architecture design principles.",
              "Gained deep understanding of multi-agent AI system design and orchestration, exploring complex workflow automation architectures, autonomous decision-making patterns, and distributed processing systems.",
              "Studied advanced agentic pipeline frameworks including DSPy, LangChain, and LangGraph, understanding their engineering principles, architectural patterns, prompt engineering techniques, and chain-of-thought reasoning implementations."
            ].map((detail, i) => (
              <li key={i} className="flex gap-4 text-white/70 leading-relaxed text-sm md:text-base group-hover:text-white/90 transition-colors duration-300">
                <span className="mono text-[#2E5BFF] font-bold mt-1 text-sm">0{i+1}</span>
                <p>{detail}</p>
              </li>
            ))}
          </ul>
          
          {/* Technologies used */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="mono text-[10px] text-white/40 mb-3 tracking-wider">TECHNOLOGIES:</p>
            <div className="flex flex-wrap gap-2">
              {['Python', 'FastAPI', 'Azure Functions', 'DSPy', 'LangChain', 'LangGraph', 'OpenAI API', 'Vector Databases'].map(tech => (
                <span key={tech} className="mono text-[10px] bg-[#2E5BFF]/10 border border-[#2E5BFF]/30 px-3 py-1 text-[#2E5BFF] font-semibold tracking-wider">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mono text-[10px] text-white/20 pt-6 flex items-center gap-4">
          <div className="flex-1 h-px bg-white/5" />
          SYSTEM_END_OF_LOG
          <div className="flex-1 h-px bg-white/5" />
        </div>
      </div>
    </ModuleWrapper>
  );
};