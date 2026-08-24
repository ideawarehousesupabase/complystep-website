import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | ComplyStep" },
      {
        name: "description",
        content:
          "Terms governing use of ComplyStep by UK regulated firms and their authorised staff, including billing and termination.",
      },
      { property: "og:title", content: "Terms of Service | ComplyStep" },
      {
        property: "og:description",
        content: "Plan billing, decision-support scope and termination terms for ComplyStep.",
      },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <div className="page">
      <section className="sec sec-top">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" /> Legal
          </div>
          <h2 className="h2">Terms of Service</h2>
          <p className="lede" style={{ maxWidth: 640 }}>
            Last updated July 2026. These Terms govern use of ComplyStep by UK regulated firms
            and authorised staff. Plans are billed monthly or annually per the tier selected.
            ComplyStep provides compliance recommendations as decision support; final publishing
            decisions remain the operator's responsibility. Either party may terminate with 30
            days' written notice.
          </p>
          <Link to="/contact" className="btn-s" style={{ marginTop: 28 }}>
            Questions? Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
