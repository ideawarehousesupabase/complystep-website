import { createFileRoute } from "@tanstack/react-router";
import { ClientOnly } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const PainPointsChart = lazy(() =>
  import("../components/market-charts").then((m) => ({ default: m.PainPointsChart })),
);
const MarketGrowthChart = lazy(() =>
  import("../components/market-charts").then((m) => ({ default: m.MarketGrowthChart })),
);

const SEGMENTS = [
  {
    id: "seg-finance",
    icon: "fa-sack-dollar",
    title: "Financial Advisors & Wealth Managers",
    body: "Automated review against FCA Consumer Duty for every PPC, social and web promotion.",
  },
  {
    id: "seg-healthcare",
    icon: "fa-user-doctor",
    title: "Private Healthcare & Aesthetics",
    body: "Screening for CAP and ASA rules on medical claims and dynamic creative.",
  },
  {
    id: "seg-legal",
    icon: "fa-scale-balanced",
    title: "Legal Services",
    body: "Audit-ready promotional records that satisfy consumer-protection codes.",
  },
  {
    id: "seg-gambling",
    icon: "fa-dice",
    title: "Gambling & Affiliate Networks",
    body: "Real-time tracking to prevent unauthorised affiliate promotional claims.",
  },
  {
    id: undefined,
    icon: "fa-bullhorn",
    title: "Digital Marketing Agencies",
    body: "Consistent compliance management across every regulated client account.",
  },
  {
    id: undefined,
    icon: "fa-building-columns",
    title: "Banking & Financial Groups",
    body: "Centralised compliance tracking across multi-site regional teams.",
  },
];

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | ComplyStep" },
      {
        name: "description",
        content:
          "Purpose-built for the UK's most regulated sectors: financial advice, private healthcare, legal services, gambling affiliates and agencies.",
      },
      { property: "og:title", content: "Industries We Serve | ComplyStep" },
      {
        property: "og:description",
        content:
          "See how ComplyStep supports UK regulated SMEs underserved by enterprise-only RegTech tools.",
      },
    ],
  }),
  component: Industries,
});

function Industries() {
  return (
    <div className="page">
      <section className="sec sec-top">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" /> Industries
          </div>
          <h2 className="h2">Built for the UK's most regulated sectors.</h2>
          <p className="lede" style={{ maxWidth: 600 }}>
            Purpose-built for the SMEs currently underserved by slow, enterprise-only RegTech
            tools.
          </p>
          <div className="card-grid" id="industry-grid">
            {SEGMENTS.map((s) => (
              <div className="s-card" key={s.title} id={s.id}>
                <div className="feat-icon">
                  <i className={`fas ${s.icon}`} />
                </div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-soft">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" /> Market
          </div>
          <h2 className="h2">A $45.3B global RegTech market by 2030.</h2>
          <p className="lede" style={{ maxWidth: 640 }}>
            The global AI-in-RegTech market is forecast to grow from $15.8B in 2025 to $45.3B by
            2030, at a 23.5% CAGR, with the UK the most dominant RegTech ecosystem in Europe.
          </p>
          <div className="charts-grid">
            <div className="chart-card">
              <h4>Top Compliance Pain Points</h4>
              <p>% across UK regulated marketing teams</p>
              <div className="chart-wrap">
                <ClientOnly>
                  <Suspense fallback={null}>
                    <PainPointsChart />
                  </Suspense>
                </ClientOnly>
              </div>
            </div>
            <div className="chart-card">
              <h4>Global AI-RegTech Market Growth</h4>
              <p>$ Billions, 2025 to 2030 (23.5% CAGR)</p>
              <div className="chart-wrap">
                <ClientOnly>
                  <Suspense fallback={null}>
                    <MarketGrowthChart />
                  </Suspense>
                </ClientOnly>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
