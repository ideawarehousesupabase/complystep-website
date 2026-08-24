import { createFileRoute, Link } from "@tanstack/react-router";

const FEATURES = [
  {
    icon: "fa-magnifying-glass-chart",
    title: "Pre-publication review",
    body: "Every creative is scored against FCA Consumer Duty, CAP and DMCC standards before it goes live, not after a regulator flags it.",
    bullets: [
      "Automated semantic compliance scoring",
      "Clear, actionable fix suggestions",
      "Approvals in hours, not weeks",
    ],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fm=jpg&q=60&w=900&auto=format&fit=crop",
    alt: "team reviewing compliance dashboard",
    reverse: false,
  },
  {
    icon: "fa-tower-broadcast",
    title: "Live compliance monitoring",
    body: "Once published, we continuously scan your site, social and affiliate channels for unauthorised edits, so drift never becomes a fine.",
    bullets: [
      "Real-time drift alerts across every channel",
      "Affiliate & third-party monitoring",
      "Full audit trail for regulators",
    ],
    img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?fm=jpg&q=60&w=900&auto=format&fit=crop",
    alt: "live monitoring dashboard on screen",
    reverse: true,
  },
  {
    icon: "fa-arrow-trend-up",
    title: "Compliance that grows revenue",
    body: "We link every approved, compliant layout back to its conversion performance, so your safest campaigns are also your best-performing ones.",
    bullets: [
      "Compliance-to-ROI benchmarking",
      "Anonymised industry benchmarking",
      "Works with your existing ad stack",
    ],
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?fm=jpg&q=60&w=900&auto=format&fit=crop",
    alt: "analytics charts on laptop screen",
    reverse: false,
  },
];

const TEAMS = [
  {
    icon: "fa-user-shield",
    title: "Compliance Teams",
    body: "Set the rules once. Let automation handle repetitive review, and focus your time on genuine edge cases.",
  },
  {
    icon: "fa-bullhorn",
    title: "Marketing Teams",
    body: "Get clear, fast feedback inside the tools you already use, no more waiting days for a legal sign-off.",
  },
  {
    icon: "fa-people-group",
    title: "Agencies",
    body: "Manage compliance consistently across every regulated client account, from one dashboard.",
  },
];

const STATS = [
  { num: "90%+", lbl: "Compliance accuracy" },
  { num: "70%+", lbl: "Fewer live compliance risks" },
  { num: "60%+", lbl: "Faster approval turnaround" },
  { num: "30%+", lbl: "Lower penalty exposure" },
];

const TRUST = ["FCA Consumer Duty", "CAP & ASA Codes", "DMCC Act 2024", "UK GDPR Aligned"];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ComplyStep | Compliance Platform for Regulated Marketing" },
      {
        name: "description",
        content:
          "Ship compliant campaigns without the bottleneck. AI compliance review and live monitoring for UK financial, health, legal and gambling promotions.",
      },
      {
        property: "og:title",
        content: "ComplyStep | Compliance Platform for Regulated Marketing",
      },
      {
        property: "og:description",
        content:
          "Ship compliant campaigns without the bottleneck. AI compliance review and live monitoring for UK regulated marketing.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="container hero-inner">
          <div className="eyebrow">
            <span className="dot" /> AI Compliance Platform for UK Regulated Marketing
          </div>
          <h1>
            Ship compliant campaigns <span className="accent">without the bottleneck.</span>
          </h1>
          <p className="lede">
            ComplyStep reviews financial, health, legal and gambling promotions before they
            go live, and monitors them continuously once published, so marketing moves fast and
            compliance stays in control.
          </p>
          <div className="hero-btns">
            <Link to="/contact" className="btn-p">
              Book a Demo
            </Link>
            <Link to="/products" className="btn-s">
              See the Platform
            </Link>
          </div>
          <div className="trust-row">
            {TRUST.map((t) => (
              <div className="trust-pill" key={t}>
                <i className="fas fa-check" /> {t}
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="stat-bar">
            {STATS.map((s) => (
              <div className="stat-item" key={s.lbl}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" /> The Platform
          </div>
          <h2 className="h2">Everything you need to launch with confidence.</h2>

          {FEATURES.map((f) => (
            <div className={f.reverse ? "feat-row rev" : "feat-row"} key={f.title}>
              <div className="feat-copy">
                <div className="feat-icon">
                  <i className={`fas ${f.icon}`} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
                <ul className="feat-bullets">
                  {f.bullets.map((b) => (
                    <li key={b}>
                      <i className="fas fa-check" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="feat-visual">
                <img src={f.img} alt={f.alt} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sec sec-soft">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" /> Built For Your Team
          </div>
          <h2 className="h2">One platform, three teams.</h2>
          <div className="card-grid">
            {TEAMS.map((t) => (
              <div className="s-card" key={t.title}>
                <div className="feat-icon">
                  <i className={`fas ${t.icon}`} />
                </div>
                <h4>{t.title}</h4>
                <p>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="cta-banner">
            <h2 className="h2">See ComplyStep in action.</h2>
            <p>
              Join UK financial, healthcare, legal and gambling brands using ComplyStep to
              launch faster, with less risk.
            </p>
            <Link to="/contact" className="btn-p">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
