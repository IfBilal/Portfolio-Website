import { ArrowDownRight, ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const projects = [
  { number:'01', title:'Rahbar', category:'Grounded AI / Platform engineering', mark:'ر', theme:'rahbar',
    description:'A university rules assistant that answers from FAST-NUCES documents, cites section and page, and abstains when the source does not support an answer. Built with Taimoor Shaukat; its indexer, read-only API replicas, cache, and evaluation gate run on Kubernetes.',
    stack:'RAG · FastAPI · Chroma · Redis · Docker · Kubernetes', link:'https://github.com/IfBilal/Rahbar', path:['INGEST','RETRIEVE','CITE'] },
  { number:'02', title:'CivicPulse', category:'Full stack AI / DevOps', mark:'C', theme:'civic',
    description:'A municipal complaint platform with AI triage, an operator dashboard, and a fallback that keeps submissions working when the model fails. Built with Docker, Kubernetes, CI/CD, observability, and real failure testing.',
    stack:'React · FastAPI · PostgreSQL · Redis · Kubernetes', link:'https://github.com/IfBilal/CivicPulse-SCD', path:['REPORT','TRIAGE','RESOLVE'] },
  { number:'03', title:'SkyEye', category:'Computer vision / Research', mark:'S', theme:'sky',
    description:'Aerial object detection across RGB and thermal images. Fast YOLO detectors lead; a vision language model steps in when confidence drops. The RGB model reached 94.11% mAP50 in the research evaluation.',
    stack:'YOLO · VLMs · FastAPI · Streamlit · Docker', link:'https://github.com/IfBilal/UAV-Dependability-lab-Air-Object-Detection', path:['DETECT','CONFIDENCE','FALLBACK'] },
  { number:'04', title:'Rahnuma', category:'Agentic AI / Education', mark:'R', theme:'rahnuma',
    description:'An admissions advisor that joins cited prospectus retrieval with deterministic merit calculations, live web fallback, and student memory that only updates after confirmation.',
    stack:'LangGraph · Next.js · FastAPI · pgvector', link:'https://github.com/IfBilal/rahnuma', path:['SOURCE','CALCULATE','ADVISE'] },
  { number:'05', title:'Complete Home', category:'Client product / Full stack', mark:'H', theme:'home',
    description:'A seller intake platform with guided forms, room uploads, address assistance, AI property summaries, and a protected admin dashboard. A shipped product for a real client workflow.',
    stack:'Next.js · Supabase · Groq · Geoapify', link:'https://github.com/IfBilal/Complete-Home-Real-Estate-Seller-Intake-Platform', live:'https://www.completehomesolutionsoftn.com/', path:['INTAKE','REVIEW','MANAGE'] },
  { number:'06', title:'CodeGrapher', category:'Developer tools / Agentic AI', mark:'G', theme:'graph',
    description:'Turns a codebase into a queryable knowledge graph. Deterministic parsing supplies the structural facts; AI agents map architecture and trace the impact of proposed changes.',
    stack:'Tree-sitter · Neo4j · Qdrant · CrewAI', link:'https://github.com/IfBilal/CodeGrapher', path:['PARSE','MAP','REASON'] },
];

const experience = [
  { date:'Apr 2026 — Present', role:'Full Stack Developer', company:'Markhor Systems', detail:'Building client products end to end, including a medical LMS with Zoom automation, attendance, recording uploads, and live community chat.' },
  { date:'Jun — Aug 2026', role:'Computer Vision Research Intern', company:'NCRA UAV Dependability Lab', detail:'Built RGB and thermal aerial image datasets, benchmarked five detectors, and designed the confidence-gated detector to VLM fallback used in SkyEye.' },
  { date:'Aug 2026', role:'AI Engineer Intern', company:'Prompt To Flow · NIC', detail:'Built a FastAPI workflow engine that converts natural language into executable graphs, with provider fallback, tenant credit gating, and key rotation.' },
  { date:'Nov 2025 — Jan 2026', role:'Software Engineer Intern', company:'RainMakerz', detail:'Contributed to a serverless Python and FastAPI backend on Azure Functions in a 19-agent document processing system.' },
];

const capabilities = [
  { title:'Applied AI', text:'Grounded RAG, agent workflows, evaluation, guardrails, and model outputs that become dependable product behavior.', tools:'LangGraph · LangChain · CrewAI · pgvector' },
  { title:'Vision & deep learning', text:'Dataset preparation, benchmarking, detection, and vision language fallback on real imagery.', tools:'PyTorch · YOLO · RF-DETR · Hugging Face' },
  { title:'Full stack products', text:'Interfaces, APIs, data, auth, and delivery that make complex systems useful to real people.', tools:'Next.js · React · TypeScript · FastAPI · PostgreSQL' },
  { title:'Platform & DevOps', text:'Containers, orchestration, CI/CD, observability, and failure paths built into the system from the start.', tools:'Docker · Kubernetes · Redis · Linux · Azure' },
];

const Arrow = () => <ArrowUpRight size={17} strokeWidth={1.7} aria-hidden="true" />;

export default function Home() {
  return <main id="top">
    <header className="header shell"><a href="#top" className="logo" aria-label="Bilal Tahir, home">BT<span>.</span></a><nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a></nav><a className="header-cta" href="mailto:muhammadbilaltahir06@gmail.com">Let&apos;s talk <Arrow /></a></header>

    <section className="hero shell" aria-labelledby="hero-title"><div className="eyebrow hero-top"><span className="pulse" /> Independent engineer · Islamabad, Pakistan <span className="eyebrow-line" /> Open to collaborations</div><div className="hero-grid"><div className="hero-copy"><span className="section-label">Portfolio / 2026</span><h1 id="hero-title">Building<br/><em>intelligence</em><br/>into products<span className="period">.</span></h1><p>I&apos;m Muhammad Bilal Tahir, a full stack AI engineer. I turn ambitious ideas into useful software, from agentic workflows and computer vision to complete web products.</p><div className="hero-actions"><a className="button" href="#work">Explore selected work <ArrowDownRight size={18}/></a><a className="under-link" href="/BilalTahir_CV.pdf" download>Download CV <Download size={16}/></a></div></div><div className="hero-art" aria-hidden="true"><div className="art-ring ring-one"/><div className="art-ring ring-two"/><div className="art-ring ring-three"/><div className="art-letters">B<span>/</span>T</div><span className="art-star star-one">✳</span><span className="art-star star-two">✳</span><div className="art-caption">Research mindset.<br/>Builder&apos;s hands.</div></div></div><div className="hero-foot"><span>Scroll to discover</span><span className="hero-line"/><span>01 / 06</span></div></section>

    <section className="statement shell"><span className="section-label">A / Perspective</span><p>Good AI work needs more than a clever model. It needs <em>trustworthy inputs, clear decisions,</em> and a product people actually want to use.</p><span className="statement-mark" aria-hidden="true">✳</span></section>

    <section id="work" className="work shell"><div className="section-head"><div><span className="section-label">B / Selected work</span><h2>Proof in the <em>building.</em></h2></div><p>Six projects, different problems. Each one shows how I think across research, architecture, operations, and delivery.</p></div><div className="project-grid">{projects.map(p=><article className={`project project-${p.theme}`} key={p.number}><div className="project-art" aria-hidden="true"><div className="art-top"><span>BT / FIELDWORK</span><span>{p.number} — 06</span></div><span className="project-letter">{p.mark}</span><div className="art-path">{p.path.map((step,i)=><span key={step}>{step}{i<2&&<b>→</b>}</span>)}</div></div><div className="project-body"><div className="project-kicker"><span>{p.number} / {p.category}</span><Arrow/></div><h3>{p.title}</h3><p>{p.description}</p><div className="project-bottom"><small>{p.stack}</small><div className="project-links"><a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${p.title} source code`}>Code <Arrow/></a>{p.live&&<a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`View ${p.title} live`}>Live <Arrow/></a>}</div></div></div></article>)}</div><a className="archive-link" href="https://github.com/IfBilal?tab=repositories" target="_blank" rel="noopener noreferrer">Explore the full GitHub archive <Arrow/></a></section>

    <section id="about" className="about shell"><div className="about-intro"><span className="section-label">C / What I bring</span><h2>One engineer.<br/><em>Across the stack.</em></h2><p>I like the moment when difficult technical ideas become practical systems. My work moves between research, backend architecture, interface design, and keeping the whole thing running.</p></div><div className="capabilities">{capabilities.map((c,i)=><article className="capability" key={c.title}><span>0{i+1}</span><div><h3>{c.title}</h3><p>{c.text}</p><small>{c.tools}</small></div><b aria-hidden="true">↗</b></article>)}</div></section>

    <section id="experience" className="experience shell"><div className="section-head"><div><span className="section-label">D / Where I&apos;ve worked</span><h2>Experience that<br/><em>ships.</em></h2></div><p>Research depth, production constraints, and client delivery shape the way I build.</p></div><div className="experience-list">{experience.map((e,i)=><article className="experience-row" key={e.company}><span className="row-index">0{i+1}</span><div className="role"><h3>{e.role}</h3><span>{e.company}</span></div><p>{e.detail}</p><time>{e.date}</time></article>)}</div></section>

    <section className="credentials shell"><div><span className="section-label">E / Foundations</span><h2>Still learning.<br/><em>Always building.</em></h2><p>BS Software Engineering at FAST-NUCES, Islamabad, expected 2028. CGPA 3.67/4.00 with four Dean&apos;s List honors. Four-time lab demonstrator across Object-Oriented Programming and Data Structures.</p><a className="under-link" href="https://www.linkedin.com/in/m-bilaltahir/" target="_blank" rel="noopener noreferrer">See my LinkedIn <Arrow/></a></div><div className="certificate-list"><h3>Selected learning</h3><ul><li><span>Neural Networks and Deep Learning</span><small>DeepLearning.AI</small></li><li><span>RAG</span><small>DeepLearning.AI</small></li><li><span>Build AI Agents using MCP</span><small>IBM</small></li><li><span>CS50&apos;s Introduction to AI with Python</span><small>Harvard</small></li><li><span>RAG with Vertex AI</span><small>GDG on Campus PIEAS</small></li></ul></div></section>

    <section id="contact" className="contact shell"><span className="section-label">F / Start a conversation</span><div className="contact-top"><div><h2>Have a problem<br/>worth <em>solving?</em></h2><p>Tell me what you&apos;re building. I can help turn an AI idea or full stack product into something concrete.</p></div><a className="contact-arrow" href="mailto:muhammadbilaltahir06@gmail.com" aria-label="Email Bilal"><ArrowUpRight size={64} strokeWidth={1}/></a></div><a className="email" href="mailto:muhammadbilaltahir06@gmail.com">muhammadbilaltahir06@gmail.com</a></section>
    <footer className="footer shell"><span>© 2026 Muhammad Bilal Tahir</span><span>Designed with intent. Built to work.</span><div><a href="https://github.com/IfBilal" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><Github size={18}/></a><a href="https://www.linkedin.com/in/m-bilaltahir/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={18}/></a><a href="mailto:muhammadbilaltahir06@gmail.com" aria-label="Email"><Mail size={18}/></a></div></footer>
  </main>;
}
