'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ModuleWrapperProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  id?: string;
}

export const ModuleWrapper: React.FC<ModuleWrapperProps> = ({ children, className = '', title, id }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.9, 
            ease: [0.16, 1, 0.3, 1],
            delayChildren: 0.2,
            staggerChildren: 0.1
          }
        }
      }}
      whileHover={{ 
        scale: 1.005,
        borderColor: 'rgba(46, 91, 255, 0.5)',
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className={`relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-[30px] border border-white/10 p-8 md:p-10 transition-all duration-500 hover:shadow-[0_0_60px_rgba(46,91,255,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
        backdropFilter: 'blur(30px) saturate(150%)',
        WebkitBackdropFilter: 'blur(30px) saturate(150%)',
      }}
    >
      {!mounted ? null : (
        <>
          {title && (
            <motion.div 
              className="absolute top-0 left-6 -translate-y-1/2 bg-[#050505] px-3 mono text-[10px] text-white/50 tracking-[0.25em] font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              [{title}]
            </motion.div>
          )}
          
          {/* Animated corner decorations */}
          <motion.div 
            className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/30"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          />
          <motion.div 
            className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white/30"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white/30"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/30"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          />

          {/* Glassy shimmer effect on hover */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2E5BFF]/10 via-transparent to-[#00E676]/5" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent animate-shimmer" />
          </div>

          {children}
        </>
      )}
    </motion.section>
  );
};