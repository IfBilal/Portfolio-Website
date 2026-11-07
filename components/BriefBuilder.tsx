import { ArrowUpRight } from 'lucide-react';

export function BriefBuilder() {
  return <section className="brief-builder shell" data-reveal aria-labelledby="brief-title">
    <div className="brief-compact">
      <span className="section-label">03 / From idea to product</span>
      <div className="brief-compact-main">
        <h2 id="brief-title">You bring the<br/><em>business idea.</em></h2>
        <div className="brief-compact-copy">
          <p>I shape it, build the full product, and get it ready to launch—from the first user flow to the working system behind it.</p>
          <a href="mailto:muhammadbilaltahir06@gmail.com?subject=Let%E2%80%99s%20build%20a%20product">Let&apos;s build it <ArrowUpRight size={18}/></a>
        </div>
      </div>
      <div className="brief-compact-path" aria-label="Product journey"><span>Idea</span><i/><span>Product</span><i/><span>Launch</span></div>
    </div>
  </section>;
}
