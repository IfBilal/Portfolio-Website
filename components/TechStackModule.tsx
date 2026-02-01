'use client';

import React from 'react';
import { ModuleWrapper } from './ModuleWrapper';

const TECH_DATA = {
  frontend: ["React", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "React Router"],
  backend: ["Node.js", "Express.js", "Python", "Flask", "Fast API", "RESTful APIs"],
  "database & cloud": ["MongoDB", "MySQL", "PostgreSQL", "Cloudinary", "Vercel", "Railway"],
  "security & real-time": ["JWT (Access/Refresh Tokens)", "OTP-based Authentication", "Bcrypt", "Socket.IO", "Protected Routes"],
  "tools & devops": ["Git/GitHub", "Postman", "Selenium", "Linux (Ubuntu)"]
};

export const TechStackModule: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <ModuleWrapper className={className} title="TECH_STACK_TELEMETRY" id="tech">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mono text-white">
          SKILLS
        </h2>
        <div className="h-[2px] w-20 bg-[#2E5BFF] mt-3 mb-6" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {Object.entries(TECH_DATA).map(([category, skills]) => (
          <div key={category} className="space-y-4 group">
            <h3 className="mono text-[10px] text-[#2E5BFF] font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#2E5BFF] group-hover:w-8 transition-all duration-300" />
              {category}
            </h3>
            <ul className="space-y-3">
              {skills.map(skill => (
                <li key={skill} className="flex items-center gap-3 group/item">
                  <span className="w-1.5 h-1.5 bg-white/20 group-hover/item:bg-[#2E5BFF] group-hover/item:shadow-[0_0_8px_#2E5BFF] transition-all duration-300" />
                  <span className="text-white/70 text-sm group-hover/item:text-white group-hover/item:translate-x-1 transition-all duration-300">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ModuleWrapper>
  );
};