import React from 'react';
import { motion } from 'framer-motion';
import { User, Cpu, Briefcase, Terminal, Activity, ShieldCheck, Zap, BookOpen } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const anchors = [
    { id: 'identity', icon: User, label: 'ID_IDENT' },
    { id: 'tech', icon: Cpu, label: 'TECH_MATRIX' },
    { id: 'academic', icon: BookOpen, label: 'ACADEMIC_INTEL' },
    { id: 'experience', icon: Briefcase, label: 'DEPLOY_LOG' },
    { id: 'archive', icon: ShieldCheck, label: 'SECURE_REPO' },
  ];

  return (
    <nav className="fixed left-0 top-0 bottom-0 w-[64px] bg-black/95 backdrop-blur-3xl border-r border-white/10 flex flex-col items-center py-10 z-[100]">
      <div className="mb-20 flex flex-col items-center gap-4">
        <div className="relative">
          <motion.div 
            className="w-3 h-3 rounded-full bg-[#00E676] shadow-[0_0_12px_#00E676]"
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 border-2 border-[#00E676]/20 rounded-full animate-ping" />
        </div>
        <div className="mono text-[9px] text-[#00E676] font-black vertical-text tracking-[0.3em] uppercase whitespace-nowrap">SYSTEM::LIVE</div>
      </div>

      <div className="flex-1 flex flex-col gap-10">
        {anchors.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              const el = document.getElementById(item.id);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative flex flex-col items-center justify-center p-4 text-white/20 hover:text-[#2E5BFF] transition-all"
            title={item.label}
          >
            <item.icon size={20} strokeWidth={1.2} />
            <div className="absolute left-0 w-[2px] h-0 bg-[#2E5BFF] group-hover:h-full transition-all duration-300" />
            <span className="absolute left-[64px] glass border border-white/10 px-4 py-2 text-[9px] mono font-bold tracking-[0.2em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none -translate-x-2 group-hover:translate-x-0 uppercase">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-auto flex flex-col gap-6 text-white/5 pb-4">
        <Activity size={16} strokeWidth={1} />
        <Zap size={16} strokeWidth={1} />
        <div className="h-12 w-[1px] bg-gradient-to-t from-white/20 to-transparent" />
      </div>
    </nav>
  );
};