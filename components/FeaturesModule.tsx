'use client';

import React from 'react';
import { Code2, Rocket, Shield, Zap } from 'lucide-react';

export const FeaturesModule: React.FC<{ className?: string }> = ({ className }) => {
  const features = [
    {
      icon: Code2,
      title: "Full-Stack Expertise",
      description: "MERN stack mastery with modern frameworks and best practices"
    },
    {
      icon: Rocket,
      title: "Performance Focused",
      description: "Optimized applications with lightning-fast load times"
    },
    {
      icon: Shield,
      title: "Secure Architecture",
      description: "JWT authentication, OAuth, and enterprise-grade security"
    },
    {
      icon: Zap,
      title: "Real-Time Systems",
      description: "Socket.IO powered live features and instant updates"
    }
  ];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {features.map((feature, index) => (
        <div
          key={index}
          className="group relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-[30px] border border-white/10 p-6 hover:border-[#2E5BFF]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(46,91,255,0.2)] transform hover:-translate-y-1"
        >
          <div className="flex flex-col items-start gap-4">
            <div className="p-3 bg-[#2E5BFF]/10 border border-[#2E5BFF]/30 group-hover:bg-[#2E5BFF]/20 transition-all">
              <feature.icon size={24} className="text-[#2E5BFF]" />
            </div>
            <div>
              <h3 className="mono text-sm font-bold text-white mb-2 tracking-wider">
                {feature.title}
              </h3>
              <p className="text-white/60 text-xs leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#2E5BFF] group-hover:w-full transition-all duration-700" />
        </div>
      ))}
    </div>
  );
};
