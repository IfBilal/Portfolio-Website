# Portfolio redesign plan

## Audience and decision path

The primary visitor is a prospective client who needs evidence that Bilal can scope, build, and ship a useful product. Recruiters are a secondary audience. The page should answer, in order:

1. Who is he and what does he build? — one concise hero statement and role.
2. Has he solved relevant problems? — selected work immediately after a short point of view.
3. Can he deliver beyond a model demo? — case studies mention data, interfaces, APIs, fallback behavior, deployment, and operations.
4. Has he worked in real settings? — dated experience and specific responsibilities.
5. How can I contact or verify him? — email, source repositories, LinkedIn, and current CV.

The work section leads with Rahbar and CivicPulse because together they show AI, full stack delivery, Docker, Kubernetes, CI/CD, and reliability. Other projects broaden the evidence without diluting the first impression. Claims come from the CV, project READMEs, and the supplied LinkedIn profile. Team work is credited.

## Visual system

**Creative direction:** An engineer's field journal. Editorial typography and restrained technical diagrams make the work feel authored. The page avoids dashboard chrome, particle effects, faux terminals, invented metrics, and generic gradient cards.

**Palette:** Warm paper `#f4f0e8` and dark green ink `#1c2629` make long case studies comfortable to read. Deep forest `#203d36` gives the perspective and contact sections a deliberate pause. Sage `#b6d56d` signals curiosity and progress; muted clay `#df7758` adds a small human accent. Green is used for headings and action cues because it supports a sense of reliability without the coldness of default tech blue. Color never carries the only meaning of an interaction.

**Type:** Instrument Serif provides a human, slightly imperfect contrast within large headlines. DM Sans carries the main copy; DM Mono is reserved for labels, dates, and technical metadata. This gives a clear hierarchy without making every line look like a console.

**Composition:** A large opening statement, asymmetrical monogram artwork, a full-width perspective pause, two featured case studies, smaller supporting cases, capabilities, experience, education, and a direct contact close. Project artwork uses type and system paths drawn with CSS, so it is fast, responsive, and specific to the work.

**Interaction:** Only useful motion: small link and card transitions, anchor navigation, and project hover response. The page respects reduced-motion preferences. Every important action is available by keyboard. Mobile uses a single reading column and keeps the contact action visible in the content flow.

## Content discipline

- Use “full stack AI engineer” as the positioning, backed by projects and experience.
- Say exactly what was built; avoid unverified client outcomes, scale, or performance claims.
- Keep SkyEye's 94.11% RGB mAP50 tied to its research evaluation.
- Put repository links on every case study and a live link only where one is confirmed.
- Copy the current CV to `/public/BilalTahir_CV.pdf` for a durable download link.
- Update certificate details when direct credential URLs are available; link to LinkedIn for the public record in the meantime.

## Verification and release

1. Confirm source and CV facts against the cited projects.
2. Run dependency install, type/build checks, and review desktop/mobile rendering.
3. Fix observed errors, then commit and push the source.
4. Deploy the linked Vercel project, verify the live URL and primary links, and report any environmental blockers precisely.
