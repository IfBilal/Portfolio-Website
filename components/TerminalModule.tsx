
import React, { useState, useRef, useEffect } from 'react';
import { Terminal, ChevronRight, X } from 'lucide-react';

interface TerminalProps {
  onToggleWireframe: () => void;
  wireframeMode: boolean;
}

export const TerminalModule: React.FC<TerminalProps> = ({ onToggleWireframe, wireframeMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [lines, setLines] = useState<string[]>(['SESSION_INITIALIZED: TAHIR_COMMAND_V1', 'AUTH_LEVEL: ADMIN', 'TYPE "HELP" FOR COMMANDS']);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [lines]);
  
  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toUpperCase().trim();
    let response = `ERR: CMD_NOT_RECOGNIZED: ${cmd}`;
    
    if (cmd === 'HELP') response = 'SUPPORTED: WIREFRAME, STATUS, CLEAR, EXIT, RELOAD';
    if (cmd === 'WIREFRAME') {
      onToggleWireframe();
      response = `WIREFRAME_PROTO: ${!wireframeMode ? 'ENABLED' : 'DISABLED'}`;
    }
    if (cmd === 'STATUS') response = 'LOAD: 4% // DB: SQL_STABLE // BUF: 0x42A1';
    if (cmd === 'CLEAR') {
      setLines([]);
      setInput('');
      return;
    }
    if (cmd === 'RELOAD') {
      window.location.reload();
      return;
    }
    if (cmd === 'EXIT') {
      setIsOpen(false);
      setInput('');
      return;
    }

    setLines([...lines, `> ${input}`, response]);
    setInput('');
  };

  return (
    <div className="fixed bottom-8 left-8 z-[100]">
      {isOpen ? (
        <div className="w-[420px] h-[280px] glass p-6 flex flex-col shadow-[0_20px_60px_rgba(46,91,255,0.3)] border-2 border-[#2E5BFF]/20 backdrop-blur-[40px]">
          <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#2E5BFF] animate-pulse shadow-[0_0_10px_#2E5BFF]" />
              <span className="mono text-[10px] text-[#2E5BFF] font-black tracking-widest uppercase italic">SYSTEM_CMD_NODE_v1</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/30 hover:text-white transition-colors">
              <X size={16} />
            </button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto mono text-[11px] space-y-2 mb-6 scrollbar-hide">
            {lines.map((l, i) => (
              <div key={i} className={l.startsWith('>') ? 'text-white font-bold' : 'text-[#2E5BFF] opacity-80'}>{l}</div>
            ))}
          </div>
          <form onSubmit={handleCommand} className="flex items-center gap-3 border-t border-white/10 pt-4">
            <ChevronRight size={18} className="text-[#00E676] animate-pulse" />
            <input 
              autoFocus
              className="bg-transparent border-none outline-none flex-1 mono text-[11px] text-white uppercase font-bold tracking-widest placeholder:text-white/10"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="AWAITING_INPUT..."
            />
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="glass p-5 text-[#2E5BFF] hover:bg-[#2E5BFF] hover:text-white transition-all flex items-center gap-4 group shadow-[0_10px_40px_rgba(46,91,255,0.2)] hover:shadow-[0_10px_60px_rgba(46,91,255,0.4)] border border-[#2E5BFF]/30"
        >
          <Terminal size={22} className="group-hover:rotate-12 transition-transform" />
          <span className="mono text-[11px] font-black tracking-[0.4em] hidden md:block uppercase italic">INIT_TERMINAL</span>
        </button>
      )}
    </div>
  );
};
