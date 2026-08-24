import { createFileRoute } from "@tanstack/react-router";

const STATS = [
  { num: "28%", lbl: "Faster campaign launch" },
  { num: "18%", lbl: "Fewer compliance violations" },
  { num: "14 days", lbl: "To publishing proficiency" },
  { num: "4.3/5", lbl: "Compliance equity rating" },
];

const ROADMAP = [
  {
    num: "01",
    title: "Year 1 · London soft launch",
    body: "Models trained on UK-specific regulated marketing data. Closed-loop pilots run across 5 to 10 London firms and boutique agencies.",
  },
  {
    num: "02",
    title: "Year 2 · Full UK launch",
    body: "API connectivity ships across Google Ads, Meta and TikTok. Acquisition extends into Manchester, Birmingham and Leeds.",
  },
  {
    num: "03",
    title: "Year 3 · National scale & EU pilots",
    body: "Expansion into Scotland, Wales and Northern Ireland, with early pilots in Frankfurt, Paris and Amsterdam.",
  },
];

export const Route = createFileRoute("/case-study")({
  head: () => ({
    meta: [
      { title: "Case Study: 8-Week London Pilot | ComplyStep" },
      {
        name: "description",
        content:
          "Results from an 8-week pilot across 5 regulated London business locations: 28% faster launches and 18% fewer compliance violations.",
      },
      { property: "og:title", content: "Case Study: 8-Week London Pilot | ComplyStep" },
      {
        property: "og:description",
        content:
          "Pilot results and the ComplyStep roadmap from London soft launch to national scale and EU pilots.",
      },
    ],
  }),
  component: CaseStudy,
});

function CaseStudy() {
  return (
    <div className="page">
      <section className="sec sec-top">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" /> Case Study
          </div>
          <h2 className="h2">An 8-week London pilot, proven results.</h2>
          <p className="lede" style={{ maxWidth: 640 }}>
            ComplyStep ran an 8-week pilot across 5 regulated business locations in London,
            testing live campaigns from financial advisors, private clinics and boutique agencies.
          </p>
          <div className="stat-bar" style={{ marginTop: 40 }}>
            {STATS.map((s) => (
              <div className="stat-item" key={s.lbl}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-soft">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" /> Roadmap
          </div>
          <h2 className="h2">From pilot to national standard.</h2>
          <div className="tl-wrap">
            {ROADMAP.map((r) => (
              <div className="tl-item" key={r.num}>
                <div className="tl-num">{r.num}</div>
                <div className="tl-body">
                  <h4>{r.title}</h4>
                  <p>{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
