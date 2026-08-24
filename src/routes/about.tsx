import { createFileRoute } from "@tanstack/react-router";

const VALUES = [
  {
    icon: "fa-lightbulb",
    title: "Innovation",
    body: "Continuously refined to stay ahead of evolving FCA policy and consumer-law reform.",
  },
  {
    icon: "fa-magnifying-glass",
    title: "Accuracy",
    body: "Absolute regulatory data integrity: no unverified claims, no compliance drift.",
  },
  {
    icon: "fa-scale-balanced",
    title: "Consumer Protection",
    body: "Shielding vulnerable audiences from misleading or predatory promotions.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | ComplyStep" },
      {
        name: "description",
        content:
          "ComplyStep turns regulatory complexity into compliance equity for UK financial, healthcare, legal and gambling brands.",
      },
      { property: "og:title", content: "About Us | ComplyStep" },
      {
        property: "og:description",
        content:
          "Our mission, vision, values and the founder behind the AI compliance platform for UK regulated marketing.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="page">
      <section className="sec sec-top">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" /> About Us
          </div>
          <h2 className="h2" style={{ maxWidth: "26ch" }}>
            Turning regulatory complexity into compliance equity.
          </h2>
          <p className="lede" style={{ maxWidth: 640 }}>
            ComplyStep is an AI compliance platform built for UK regulated marketing. We help
            financial, healthcare, legal and gambling brands verify every campaign before it
            publishes, and catch drift the moment it happens after.
          </p>
        </div>
      </section>

      <section className="sec sec-soft">
        <div className="container">
          <div className="value-grid">
            <div className="value-card">
              <div className="eyebrow">
                <span className="dot" /> Mission
              </div>
              <h3>Verify, monitor, optimise.</h3>
              <p>
                We help UK regulated SMEs verify, monitor and optimise every campaign, maximising
                conversion while eliminating regulatory violations.
              </p>
            </div>
            <div className="value-card">
              <div className="eyebrow">
                <span className="dot" /> Vision
              </div>
              <h3>The standard for regulated marketing.</h3>
              <p>
                A future where every regulated brand can publish with complete compliance
                certainty and real-time risk prevention, at digital speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" /> What We Value
          </div>
          <h2 className="h2">The principles behind the platform.</h2>
          <div className="card-grid">
            {VALUES.map((v) => (
              <div className="s-card" key={v.title}>
                <div className="feat-icon">
                  <i className={`fas ${v.icon}`} />
                </div>
                <h4>{v.title}</h4>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-soft" id="founder-section">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" /> Founder
          </div>
          <h2 className="h2">Meet Janki Rathod.</h2>
          <div className="value-card founder-card">
            <div className="founder-head">
              <div className="founder-avatar">JR</div>
              <div>
                <div className="founder-name">Janki Rathod</div>
                <div className="founder-role">Founder &amp; CEO, ComplyStep</div>
              </div>
            </div>
            <p>
              Janki brings over 11 years of senior digital marketing experience across PPC, SEO
              and SMO, alongside an MSc in Data Science and postgraduate research in NLP and
              sentiment analysis. That dual background of hands-on campaign execution and applied
              machine learning is exactly what informs ComplyStep's compliance engine.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
