'use client';

import { useEffect, useRef, useState } from 'react';

type Stage = { title: string; text: string; tools: string };

export function MethodStory({ stages }: { stages: Stage[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const focus = window.innerHeight * (window.innerWidth <= 700 ? .62 : .46);
      const steps = refs.current.filter((element): element is HTMLElement => Boolean(element));
      const containing = steps.find(element => {
        const box = element.getBoundingClientRect();
        return box.top <= focus && box.bottom > focus;
      });
      const nearest = containing ?? steps.reduce<HTMLElement | null>((best, element) => {
        const box = element.getBoundingClientRect();
        const distance = Math.abs((box.top + box.bottom) / 2 - focus);
        if (!best) return element;
        const bestBox = best.getBoundingClientRect();
        return distance < Math.abs((bestBox.top + bestBox.bottom) / 2 - focus) ? element : best;
      }, null);
      if (nearest) setActive(Number(nearest.dataset.stage));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const current = stages[active];
  return <div className="method-story">
    <div className="method-stage-visual">
      <div className={`method-canvas method-canvas-${active + 1}`} aria-hidden="true">
        <div className="method-canvas-top"><span>BT / HOW I BUILD</span><span>0{active + 1} — 0{stages.length}</span></div>
        <div className="method-grid" />
        <div className="method-glyph" key={active}>
          {active === 0 && <span className="glyph-question">?</span>}
          {active === 1 && <div className="glyph-data"><i/><i/><i/><i/><i/></div>}
          {active === 2 && <div className="glyph-window"><i/><i/><i/></div>}
          {active === 3 && <div className="glyph-network"><i/><i/><i/><i/></div>}
        </div>
        <div className="method-canvas-bottom"><span>THE METHOD</span><strong>{current.title}</strong></div>
      </div>
      <div className="method-progress" aria-label={`Step ${active + 1} of ${stages.length}`}>
        {stages.map((stage, index) => <button
          key={stage.title}
          type="button"
          className={active === index ? 'is-active' : ''}
          aria-label={`Jump to step ${index + 1}: ${stage.title}`}
          aria-current={active === index ? 'step' : undefined}
          onClick={() => {
            setActive(index);
            const target = refs.current[index];
            if (!target) return;
            const top = window.scrollY + target.getBoundingClientRect().top - (window.innerWidth <= 700 ? 390 : 260);
            window.scrollTo({ top, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
          }}
        ><span/></button>)}
      </div>
    </div>
    <div className="method-steps">
      {stages.map((stage, index) => <article
        className={`method-step ${active === index ? 'is-active' : ''}`}
        key={stage.title}
        data-stage={index}
        ref={element => { refs.current[index] = element; }}
      >
        <span className="method-step-number">0{index + 1} / 0{stages.length}</span>
        <h3>{stage.title}</h3>
        <p>{stage.text}</p>
        <small>{stage.tools}</small>
      </article>)}
    </div>
  </div>;
}
