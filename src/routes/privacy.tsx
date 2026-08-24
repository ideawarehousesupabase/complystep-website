import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | ComplyStep" },
      {
        name: "description",
        content:
          "How ComplyStep protects personal data in line with UK GDPR and the Data Protection Act 2018.",
      },
      { property: "og:title", content: "Privacy Policy | ComplyStep" },
      {
        property: "og:description",
        content: "Our data protection commitments, sub-processors and how to exercise data rights.",
      },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="page">
      <section className="sec sec-top">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" /> Legal
          </div>
          <h2 className="h2">Privacy Policy</h2>
          <p className="lede" style={{ maxWidth: 640 }}>
            Last updated July 2026. ComplyStep is committed to protecting personal data in line
            with UK GDPR and the Data Protection Act 2018. We do not sell personal data, and it is
            shared only with sub-processors required to run the platform. Contact
            hello@regpromolens.co.uk to exercise your data rights.
          </p>
          <Link to="/contact" className="btn-s" style={{ marginTop: 28 }}>
            Questions? Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
