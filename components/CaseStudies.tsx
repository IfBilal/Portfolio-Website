import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const Out = () => <ArrowUpRight size={17} strokeWidth={1.7} aria-hidden="true" />;

export function CaseStudies() {
  return <section className="case-studies shell" aria-labelledby="case-studies-title">
    <div className="study-section-head">
      <span className="section-label">02B / A closer look</span>
      <h2 id="case-studies-title">The decisions<br/><em>behind the demo.</em></h2>
      <p>Real interfaces and documented checks from two team projects. The numbers below describe project evaluations and controlled tests, not customer impact.</p>
    </div>

    <article id="case-rahbar" className="study study-rahbar">
      <div className="study-overline"><span>01 / RAHBAR</span><span>GROUNDED AI · TEAM PROJECT</span></div>
      <div className="study-heading"><h3>Ask a rule.<br/><em>See the source.</em></h3><p>A student asks about a withdrawal deadline. Rahbar answers from FAST-NUCES documents, names the handbook section and page, and declines questions its corpus cannot support.</p></div>
      <div className="study-body">
        <figure className="study-capture study-capture-rahbar">
          <div className="capture-top"><span>ACTUAL INTERFACE / 01</span><span>RAHBAR</span></div>
          <a href="/cases/rahbar/interface.png" target="_blank" rel="noopener noreferrer" aria-label="Open full Rahbar interface screenshot"><Image src="/cases/rahbar/interface.png" alt="Rahbar chat showing a cited answer about course withdrawal and a declined hostel-fee question" width={1100} height={947} sizes="(max-width: 800px) 88vw, 55vw" /></a>
          <figcaption>Captured interface from the <a href="https://github.com/IfBilal/Rahbar/blob/main/docs/evidence/ui-screenshot.png" target="_blank" rel="noopener noreferrer">project evidence <Out/></a></figcaption>
        </figure>
        <div className="study-notes">
          <div><span className="study-note-label">THE HARD PART</span><p>Old and current rulebooks coexist online. The system has to retrieve the right edition, cite the exact passage, and abstain when the documents have no answer.</p></div>
          <div><span className="study-note-label">ENGINEERING CHOICE</span><p>A separate Kubernetes indexing job writes versioned Chroma collections. Read-only API replicas serve from the active index; a CI evaluation gate catches retrieval regressions.</p></div>
          <div><span className="study-note-label">BILAL&apos;S CONTRIBUTION</span><p>Co-planned the system with Taimoor Shaukat, then drove release review and fixes for deployment smoke testing, retrieval ranking, and numeric-table answers. The implementation and evaluation are team work.</p></div>
        </div>
      </div>
      <div className="study-proof" aria-label="Rahbar evaluation results"><div><strong>96.9%</strong><span>recall@5 on the 19-question golden set</span></div><div><strong>17/17</strong><span>citations valid in that evaluation</span></div><div><strong>3/3</strong><span>required abstentions correct</span></div></div>
      <div className="study-sources"><a href="https://github.com/IfBilal/Rahbar" target="_blank" rel="noopener noreferrer">Explore the repository <Out/></a><a href="https://github.com/IfBilal/Rahbar/blob/main/eval/results.json" target="_blank" rel="noopener noreferrer">Read the evaluation <Out/></a></div>
    </article>

    <article id="case-civicpulse" className="study study-civic">
      <div className="study-overline"><span>02 / CIVICPULSE</span><span>FULL STACK · DEVOPS · TEAM PROJECT</span></div>
      <div className="study-heading"><h3>Keep the service<br/><em>moving.</em></h3><p>Citizens submit complaints in their own words. Operators see triaged reports and move them through a defined workflow, even when the AI classifier is unavailable.</p></div>
      <div className="study-civic-captures">
        <figure className="study-capture"><div className="capture-top"><span>ACTUAL INTERFACE / 02</span><span>OPERATOR VIEW</span></div><a href="/cases/civicpulse/dashboard.png" target="_blank" rel="noopener noreferrer" aria-label="Open full CivicPulse dashboard screenshot"><Image src="/cases/civicpulse/dashboard.png" alt="CivicPulse operator dashboard with filters and an expanded complaint" width={901} height={858} sizes="(max-width: 800px) 88vw, 43vw" /></a><figcaption><a href="https://github.com/IfBilal/CivicPulse-SCD/blob/main/docs/evidence/screenshots/dashboard-expanded.png" target="_blank" rel="noopener noreferrer">Project capture <Out/></a> · Operator dashboard</figcaption></figure>
        <figure className="study-capture"><div className="capture-top"><span>ACTUAL INTERFACE / 03</span><span>CITIZEN VIEW</span></div><a href="/cases/civicpulse/report.png" target="_blank" rel="noopener noreferrer" aria-label="Open full CivicPulse report form screenshot"><Image src="/cases/civicpulse/report.png" alt="CivicPulse report form showing validation and the submission stages" width={901} height={858} sizes="(max-width: 800px) 88vw, 43vw" /></a><figcaption><a href="https://github.com/IfBilal/CivicPulse-SCD/blob/main/docs/evidence/screenshots/submit-form-validation.png" target="_blank" rel="noopener noreferrer">Project capture <Out/></a> · Citizen report flow</figcaption></figure>
      </div>
      <div className="study-civic-notes"><div><span className="study-note-label">THE HARD PART</span><p>A provider can time out, reject a request, or return malformed output. A valid complaint still needs to be filed.</p></div><div><span className="study-note-label">ENGINEERING CHOICE</span><p>A replaceable triage provider falls back to deterministic rules. Docker Compose, Kubernetes, CI/CD, metrics, tracing, and rollout checks make that behavior testable.</p></div><div><span className="study-note-label">BILAL&apos;S CONTRIBUTION</span><p>Led the frontend and delivery infrastructure, including Compose, Kubernetes, CI/CD, and load/autoscaling work. The backend and AI triage were built with teammate Taimoor Shaukat.</p></div></div>
      <div className="study-proof" aria-label="CivicPulse controlled test results"><div><strong>201</strong><span>response when a triage provider is forced to fail</span></div><div><strong>144/144</strong><span>in-flight requests survived a SIGTERM test</span></div><div><strong>2→8→2</strong><span>replicas scaled up and back in a local load test</span></div></div>
      <div className="study-sources"><a href="https://github.com/IfBilal/CivicPulse-SCD" target="_blank" rel="noopener noreferrer">Explore the repository <Out/></a><a href="https://github.com/IfBilal/CivicPulse-SCD/blob/main/docs/evidence/fallback-test-live.txt" target="_blank" rel="noopener noreferrer">Fallback test <Out/></a><a href="https://github.com/IfBilal/CivicPulse-SCD/blob/main/docs/evidence/sigterm-drain.txt" target="_blank" rel="noopener noreferrer">Request survival test <Out/></a><a href="https://github.com/IfBilal/CivicPulse-SCD/blob/main/docs/evidence/hpa-watch.txt" target="_blank" rel="noopener noreferrer">Scaling test <Out/></a></div>
    </article>
  </section>;
}
