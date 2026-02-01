
import React from 'react';
import { motion } from 'framer-motion';

interface ModuleWrapperProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  id?: string;
}

export const ModuleWrapper: React.FC<ModuleWrapperProps> = ({ children, className = '', title, id }) => {
  return (
    <motion.section
      id={id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ 
        scale: 1.005,
        borderColor: 'rgba(46, 91, 255, 0.4)',
        transition: { duration: 0.2 }
      }}
      className={`relative bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] p-6 transition-colors duration-300 ${className}`}
    >
      {title && (
        <div className="absolute top-0 left-4 -translate-y-1/2 bg-[#050505] px-2 mono text-[10px] text-white/40 tracking-[0.2em] font-bold">
          [{title}]
        </div>
      )}
      
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-white/20" />
      <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-white/20" />
      <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-white/20" />
      <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-white/20" />

      {children}
    </motion.section>
  );
};
