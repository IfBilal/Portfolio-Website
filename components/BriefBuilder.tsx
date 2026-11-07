'use client';

import { useState } from 'react';

const briefs = [
  { name: 'An AI assistant', mark: '01', source: 'RAHBAR / RAG', user: 'Someone needs a trustworthy answer from information they can verify.', build: 'Ground answers in approved sources, cite the evidence, and make uncertainty visible.', breakage: 'The source is missing, outdated, or ambiguous.', first: 'A narrow question flow with citations and a deliberate “I can’t verify that” response.' },
  { name: 'A workflow product', mark: '02', source: 'CIVICPULSE / FULL STACK', user: 'A person needs to submit a request and another person needs to act on it.', build: 'Connect intake, triage, status, and operator tools into one observable workflow.', breakage: 'The classifier or a downstream service stops responding.', first: 'A complete request-to-resolution path with a dependable manual fallback.' },
  { name: 'A vision system', mark: '03', source: 'SKYEYE / COMPUTER VISION', user: 'An operator needs to identify an object from an image and know when to trust the result.', build: 'Run a fast detector first; escalate low-confidence cases to a vision model.', breakage: 'The image is ambiguous or model confidence is too low.', first: 'An image review flow that shows detections, confidence, and when a second opinion was used.' },
];

const priorities = [
  { name: 'Trust the answer', emphasis: 'Make evidence and uncertainty visible before optimizing for speed.' },
  { name: 'Keep it moving', emphasis: 'Make the useful path survive a model, provider, or dependency failure.' },
  { name: 'Ship a focused first slice', emphasis: 'Prove one complete user journey before expanding the feature set.' },
];

export function BriefBuilder() {
  const [brief, setBrief] = useState(0);
  const [priority, setPriority] = useState(0);
  const current = briefs[brief];
  return <section className="brief-builder shell" data-reveal aria-labelledby="brief-title">
    <div className="brief-heading"><span className="section-label">03 / A product, made concrete</span><h2 id="brief-title">Bring the rough idea.<br/><em>Leave with a first move.</em></h2><p>A small sample of how I turn an open-ended product idea into an engineering direction.</p></div>
    <div className="brief-workbench">
      <div className="brief-controls">
        <div className="brief-control-group"><span className="brief-label">WHAT ARE WE BUILDING?</span>{briefs.map((item,index)=><button key={item.name} type="button" className={brief===index?'selected':''} aria-pressed={brief===index} onClick={()=>setBrief(index)}><small>{item.mark}</small>{item.name}<span>↗</span></button>)}</div>
        <div className="brief-control-group priorities"><span className="brief-label">WHAT MATTERS FIRST?</span>{priorities.map((item,index)=><button key={item.name} type="button" className={priority===index?'selected':''} aria-pressed={priority===index} onClick={()=>setPriority(index)}>{item.name}</button>)}</div>
      </div>
      <div className="brief-output" aria-live="polite" key={`${brief}-${priority}`}>
        <div className="brief-output-top"><span>FIELD NOTE / {current.mark}</span><span>REFERENCE: {current.source}</span></div>
        <p className="brief-prompt">The useful question isn&apos;t “Can we add AI?”<br/><em>It&apos;s “What does the person need to trust or finish?”</em></p>
        <div className="brief-answer"><div><span>THE USER NEEDS TO</span><p>{current.user}</p></div><div><span>SO I WOULD BUILD</span><p>{current.build}</p></div><div><span>DESIGN FOR THIS FAILURE</span><p>{current.breakage}</p></div><div><span>FIRST SHIPPABLE SLICE</span><p>{current.first}</p></div></div>
        <div className="brief-priority-note"><b>PRIORITY LENS</b><span>{priorities[priority].emphasis}</span></div>
      </div>
    </div>
    <a className="brief-invite" href="mailto:muhammadbilaltahir06@gmail.com?subject=Let%E2%80%99s%20shape%20a%20product%20idea">Have an idea with different constraints? Let&apos;s shape the first useful version <span>↗</span></a>
  </section>;
}
