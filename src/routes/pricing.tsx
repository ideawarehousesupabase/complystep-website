import { createFileRoute, Link } from "@tanstack/react-router";

const PLANS = [
  {
    tier: "Foundation",
    title: "Compliance Core",
    amount: "£100",
    per: "/mo",
    desc: "Pre-publication screening for solo founders and boutique agencies.",
    feats: [
      "Pre-publication creative screening",
      "Compliance metrics & audit logs",
      "Browser extension access",
      "Email support",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    tier: "Growth",
    title: "Performance Architect",
    amount: "£380",
    per: "/mo",
    desc: "Semantic checking and live drift detection for high-volume firms.",
    feats: [
      "Everything in Compliance Core",
      "Consumer Understanding Engine",
      "Google & Meta Ads API integration",
      "Priority support",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    tier: "Corporate",
    title: "Enterprise Sovereign",
    amount: "£250",
    per: "+/mo",
    desc: "Multi-channel monitoring for multi-site brands and networks.",
    feats: [
      "Everything in Performance Architect",
      "Regulatory Logic Drift Detector",
      "Secure Compliance Ledger Nodes",
      "Dedicated compliance support",
    ],
    cta: "Talk to Sales",
    featured: false,
  },
];


export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | ComplyStep" },
      {
        name: "description",
        content:
          "ComplyStep plans from £100/mo that scale with your compliance needs, from pre-publication screening to full cross-channel drift monitoring.",
      },
      { property: "og:title", content: "Pricing | ComplyStep" },
      {
        property: "og:description",
        content:
          "Compare ComplyStep plans and see how purpose-built UK compliance beats generic AI tools and legacy RegTech.",
      },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <div className="page">
      <section className="sec sec-top">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" /> Pricing
          </div>
          <h1 className="h2">Plans that scale with your compliance needs.</h1>
          <p className="lede" style={{ maxWidth: 600 }}>
            Start with core creative screening. Scale into full cross-channel drift monitoring as
            your campaign volume grows.
          </p>
          <div className="pricing-grid">
            {PLANS.map((p) => (
              <div className={p.featured ? "price-card featured" : "price-card"} key={p.title}>
                {p.featured && <div className="feat-lbl">Most Popular</div>}
                <div className="price-tier">{p.tier}</div>
                <div className="price-title">{p.title}</div>
                <div className="price-amount">
                  {p.amount}
                  <span>{p.per}</span>
                </div>
                <p className="price-desc">{p.desc}</p>
                <ul className="price-feat">
                  {p.feats.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={p.featured ? "btn-p btn-full" : "btn-s btn-full"}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="price-note">
            Onboarding from £500 one-time · Regulatory Health Diagnostics from £550 one-time
          </p>
        </div>
      </section>

    </div>
  );
}
