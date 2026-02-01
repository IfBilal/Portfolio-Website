
import React from 'react';
import { ModuleWrapper } from './ModuleWrapper';

const TECH_DATA = {
  frontend: ["React", "JavaScript (ES6+)", "Tailwind CSS", "React Router", "HTML5/CSS3"],
  backend: ["Node.js", "Express.js", "Python", "FastAPI", "Flask"],
  "cloud & db": ["MongoDB", "SQLite", "Cloudinary", "Vercel", "Railway"],
  "auth & logic": ["JWT", "Socket.IO", "Bcrypt", "OTP-Auth"]
};

export const TechStackModule: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <ModuleWrapper className={className} title="TECH_STACK_TELEMETRY" id="tech">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(TECH_DATA).map(([category, skills]) => (
          <div key={category} className="space-y-4">
            <h3 className="mono text-[10px] text-[#2E5BFF] font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#2E5BFF]" />
              {category}
            </h3>
            <ul className="space-y-2">
              {skills.map(skill => (
                <li key={skill} className="flex items-center gap-3 group">
                  <span className="w-1 h-1 bg-white/20 group-hover:bg-[#2E5BFF] transition-colors" />
                  <span className="text-white/70 text-sm group-hover:text-white transition-colors">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ModuleWrapper>
  );
};
