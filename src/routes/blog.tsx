import { createFileRoute } from "@tanstack/react-router";

const POSTS = [
  {
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?fm=jpg&q=60&w=900&auto=format&fit=crop",
    alt: "legal documents",
    date: "Compliance · 2026",
    title: "What the DMCC Act 2024 means for digital marketers",
    body: "A practical breakdown of the CMA's direct-fine powers and what it means for your next launch.",
  },
  {
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?fm=jpg&q=60&w=900&auto=format&fit=crop",
    alt: "team discussing strategy",
    date: "FCA · 2026",
    title: "Consumer Understanding: beyond the disclaimer checklist",
    body: "Why keyword-matching tools miss the point of Outcome 3.",
  },
  {
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?fm=jpg&q=60&w=900&auto=format&fit=crop",
    alt: "financial charts",
    date: "Financial Promotions · 2026",
    title: "Inside the 97.5% surge in FCA interventions",
    body: "What 19,766 amended promotions tell us about where marketing gets caught out.",
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog: UK Marketing Compliance Insights | ComplyStep" },
      {
        name: "description",
        content:
          "Practical insights on the DMCC Act 2024, FCA Consumer Duty outcomes and the rise in financial promotion interventions.",
      },
      { property: "og:title", content: "Blog: UK Marketing Compliance Insights" },
      {
        property: "og:description",
        content:
          "Articles on UK regulated marketing compliance from the ComplyStep team.",
      },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <div className="page">
      <section className="sec sec-top">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" /> Blog
          </div>
          <h2 className="h2">Insights on UK marketing compliance.</h2>
          <div className="blog-grid">
            {POSTS.map((p) => (
              <article className="blog-card" key={p.title}>
                <div className="blog-img">
                  <img src={p.img} alt={p.alt} loading="lazy" />
                </div>
                <div className="blog-inner">
                  <span className="blog-date">{p.date}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  <div className="blog-tag">Read Article →</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
