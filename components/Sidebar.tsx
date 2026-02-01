'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Cpu, Briefcase, Terminal, Activity, ShieldCheck, Zap, BookOpen } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const anchors = [
    { id: 'identity', icon: User, label: 'ID_IDENT' },
    { id: 'tech', icon: Cpu, label: 'SKILLS' },
    { id: 'experience', icon: Briefcase, label: 'EXPERIENCE' },
    { id: 'archive', icon: ShieldCheck, label: 'PROJECTS' },
    { id: 'academic', icon: BookOpen, label: 'EDUCATION' },
    { id: 'contact', icon: Terminal, label: 'CONTACT' },
  ];

  if (!mounted) return <nav className="fixed left-0 top-0 bottom-0 w-[64px] bg-black/95 border-r border-white/10 z-[100]" />;

  return (
    <nav className="fixed left-0 top-0 bottom-0 w-[64px] bg-black/95 backdrop-blur-3xl border-r border-white/10 flex flex-col items-center py-10 z-[100] shadow-[4px_0_20px_rgba(0,0,0,0.5)]">
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
        {anchors.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => {
              const el = document.getElementById(item.id);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative flex flex-col items-center justify-center p-4 text-white/20 hover:text-[#2E5BFF] transition-all duration-300"
            title={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <item.icon size={20} strokeWidth={1.2} className="group-hover:drop-shadow-[0_0_8px_rgba(46,91,255,0.5)]" />
            <div className="absolute left-0 w-[2px] h-0 bg-[#2E5BFF] group-hover:h-full transition-all duration-300 shadow-[0_0_10px_#2E5BFF]" />
            <span className="absolute left-[64px] glass border border-white/10 px-4 py-2 text-[9px] mono font-bold tracking-[0.2em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none -translate-x-2 group-hover:translate-x-0 uppercase shadow-[0_0_20px_rgba(46,91,255,0.2)]">
              {item.label}
            </span>
          </motion.button>
        ))}
      </div>

      <div className="mt-auto flex flex-col gap-6 text-white/5 pb-4">
        <motion.div
          animate={{ opacity: [0.05, 0.2, 0.05] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Activity size={16} strokeWidth={1} />
        </motion.div>
        <motion.div
          animate={{ opacity: [0.05, 0.2, 0.05] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        >
          <Zap size={16} strokeWidth={1} />
        </motion.div>
        <div className="h-12 w-[1px] bg-gradient-to-t from-white/20 to-transparent" />
      </div>
    </nav>
  );
};