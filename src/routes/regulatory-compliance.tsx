import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/regulatory-compliance")({
  head: () => ({
    meta: [
      { title: "Regulatory Compliance | ComplyStep" },
      {
        name: "description",
        content:
          "How ComplyStep keeps UK regulated marketers aligned with FCA, CAP, ASA and DMCC Act requirements with a timestamped audit trail.",
      },
      { property: "og:title", content: "Regulatory Compliance | ComplyStep" },
      {
        property: "og:description",
        content:
          "Exportable, timestamped approval logs ready for regulator enquiries across FCA, CAP, ASA and DMCC requirements.",
      },
    ],
  }),
  component: RegulatoryCompliance,
});

function RegulatoryCompliance() {
  return (
    <div className="page">
      <section className="sec sec-top">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" /> Legal
          </div>
          <h2 className="h2">Regulatory Compliance</h2>
          <p className="lede" style={{ maxWidth: 640 }}>
            ComplyStep helps UK regulated marketers stay aligned with FCA, CAP, ASA and DMCC Act
            requirements. Every approval decision is logged with a timestamped, exportable audit
            trail, ready for regulator enquiries, though the operator remains legally responsible
            for final publishing decisions.
          </p>
          <Link to="/contact" className="btn-s" style={{ marginTop: 28 }}>
            Ask About Compliance Features
          </Link>
        </div>
      </section>
    </div>
  );
}
