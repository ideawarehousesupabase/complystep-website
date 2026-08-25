import { createFileRoute, Link } from "@tanstack/react-router";

const GROUPS: Array<{
  title: string;
  links: Array<{ to: string; label: string; hash?: string }>;
}> = [
  {
    title: "Platform",
    links: [
      { to: "/", label: "Home" },
      { to: "/products", label: "Product" },
      { to: "/pricing", label: "Pricing" },
      { to: "/industries", label: "Industries" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/about", label: "Founder", hash: "founder-section" },
      { to: "/blog", label: "Blog" },
      { to: "/case-study", label: "Case Studies" },
      { to: "/sitemap", label: "Sitemap" },
      { to: "/contact", label: "Contact Us" },
    ],
  },
  {
    title: "Industries",
    links: [
      { to: "/industries", label: "Financial Advisors", hash: "seg-finance" },
      { to: "/industries", label: "Private Healthcare", hash: "seg-healthcare" },
      { to: "/industries", label: "Legal Services", hash: "seg-legal" },
      { to: "/industries", label: "Gambling & Affiliates", hash: "seg-gambling" },
      { to: "/industries", label: "All Industries" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms of Service" },
      { to: "/regulatory-compliance", label: "Regulatory Compliance" },
    ],
  },
];

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: "Sitemap | ComplyStep" },
      {
        name: "description",
        content:
          "Browse every page on the ComplyStep website: product, pricing, industries, insights, company and legal pages.",
      },
      { property: "og:title", content: "Sitemap | ComplyStep" },
      {
        property: "og:description",
        content: "A full index of every ComplyStep page in one place.",
      },
      { property: "og:url", content: "/sitemap" },
    ],
    links: [{ rel: "canonical", href: "/sitemap" }],
  }),
  component: Sitemap,
});

function Sitemap() {
  return (
    <div className="page">
      <section className="sec sec-top">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" /> Sitemap
          </div>
          <h1 className="h2">Every page on ComplyStep.</h1>
          <div className="card-grid" style={{ marginTop: 36 }}>
            {GROUPS.map((g) => (
              <div className="s-card" key={g.title}>
                <h4>{g.title}</h4>
                <div className="f-col">
                  {g.links.map((l) => (
                    <Link key={l.to} to={l.to}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
