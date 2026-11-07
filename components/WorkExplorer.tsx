'use client';

import { type KeyboardEvent, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

type Project = {
  number: string;
  title: string;
  category: string;
  mark: string;
  theme: string;
  description: string;
  stack: string;
  link: string;
  live?: string;
  path: string[];
  question: string;
  principle: string;
};

export function WorkExplorer({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const project = projects[active];

  function select(index: number) {
    const next = (index + projects.length) % projects.length;
    setActive(next);
    tabs.current[next]?.focus();
  }

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') { event.preventDefault(); select(index + 1); }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') { event.preventDefault(); select(index - 1); }
    if (event.key === 'Home') { event.preventDefault(); select(0); }
    if (event.key === 'End') { event.preventDefault(); select(projects.length - 1); }
  }

  return <div className="work-explorer">
    <div className="work-tabs" role="tablist" aria-label="Select a project">
      {projects.map((item, index) => <button
        key={item.number}
        id={`project-tab-${index}`}
        ref={element => { tabs.current[index] = element; }}
        className={`work-tab ${active === index ? 'is-active' : ''}`}
        type="button"
        role="tab"
        aria-selected={active === index}
        aria-controls="project-panel"
        tabIndex={active === index ? 0 : -1}
        onClick={() => setActive(index)}
        onKeyDown={event => onTabKeyDown(event, index)}
      ><span className="tab-number">{item.number}</span><span className="tab-name">{item.title}</span><span className="tab-arrow" aria-hidden="true">↗</span></button>)}
    </div>
    <div id="project-panel" role="tabpanel" aria-labelledby={`project-tab-${active}`} className={`case-panel case-${project.theme}`} key={project.number} tabIndex={0}>
      <div className="case-visual" aria-hidden="true">
        <div className="case-visual-top"><span>CASE FILE / {project.number}</span><span>BT. 2026</span></div>
        <div className="case-orbit case-orbit-outer"/><div className="case-orbit case-orbit-inner"/>
        <div className="case-cross cross-a">+</div><div className="case-cross cross-b">+</div>
        <div className="case-glyph">{project.mark}</div>
        <div className="case-flow">{project.path.map((step, index) => <span key={step}><b>{String(index + 1).padStart(2, '0')}</b>{step}</span>)}</div>
      </div>
      <div className="case-content">
        <div className="case-topline"><span>{project.category}</span><span>{project.number} / 0{projects.length}</span></div>
        <p className="case-question">{project.question}</p>
        <h3>{project.title}<span className="case-dot">.</span></h3>
        <p className="case-description">{project.description}</p>
        <div className="case-principle"><span>THE ENGINEERING DECISION</span><p>{project.principle}</p></div>
        <p className="case-stack">{project.stack}</p>
        <div className="case-actions"><a href={project.link} target="_blank" rel="noopener noreferrer">Explore source <ArrowUpRight size={18}/></a>{project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Visit live product <ArrowUpRight size={18}/></a>}</div>
      </div>
    </div>
    <div className="work-controls"><span>Choose a case, or use the arrow keys</span><div><button type="button" onClick={() => select(active - 1)} aria-label="Previous project"><ArrowLeft size={19}/></button><span>{String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span><button type="button" onClick={() => select(active + 1)} aria-label="Next project"><ArrowRight size={19}/></button></div></div>
  </div>;
}
