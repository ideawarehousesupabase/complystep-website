import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const SCREENSHOTS = [
  { label: "Dashboard", src: "/screenshots/dashboard.png", alt: "ComplyStep dashboard overview screen" },
  { label: "Campaigns", src: "/screenshots/campaigns.png", alt: "ComplyStep campaigns list screen" },
  {
    label: "Campaign Detail",
    src: "/screenshots/campaign-detail.png",
    alt: "ComplyStep campaign detail screen",
  },
  {
    label: "New Campaign",
    src: "/screenshots/new-campaign.png",
    alt: "ComplyStep new campaign creation screen",
  },
  { label: "Integrations", src: "/screenshots/integrations.png", alt: "ComplyStep integrations screen" },
  {
    label: "Compliance Reports",
    src: "/screenshots/compliance-reports.png",
    alt: "ComplyStep compliance reports screen",
  },
  { label: "Notifications", src: "/screenshots/notifications.png", alt: "ComplyStep notifications screen" },
];

const PILLARS = [
  {
    emoji: "🧠",
    icon: "fa-brain",
    title: "Depth of Intelligence",
    body: "Not a generic AI checker. A sector-specific regulatory knowledge graph with explainable, multi-agent AI reasoning tailored to FCA, ASA, MHRA and CAP Code rules.",
    bullets: [
      "Sector-specific regulatory knowledge graph",
      "Explainable, multi-agent AI reasoning",
      "Trained on FCA, ASA, MHRA and CAP Code sources",
    ],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fm=jpg&q=60&w=900&auto=format&fit=crop",
    alt: "team reviewing compliance intelligence dashboard",
    reverse: false,
  },
  {
    emoji: "🔁",
    icon: "fa-arrows-rotate",
    title: "Full Lifecycle Coverage",
    body: "The only platform covering pre-publication, approval workflow, post-publication live monitoring, affiliate surveillance, audit evidence and performance analytics together.",
    bullets: [
      "Pre-publication review plus approval workflow",
      "Live monitoring and affiliate surveillance",
      "Regulator-ready audit evidence in one trail",
    ],
    img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?fm=jpg&q=60&w=900&auto=format&fit=crop",
    alt: "live monitoring dashboard on screen",
    reverse: true,
  },
  {
    emoji: "📈",
    icon: "fa-arrow-trend-up",
    title: "Compliance as a Growth Tool",
    body: "Uniquely connects risk controls to commercial performance, turning compliance from a blocker into a competitive advantage for marketing teams.",
    bullets: [
      "Compliance-to-ROI benchmarking",
      "Risk controls linked to campaign performance",
      "Faster approvals mean faster launches",
    ],
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?fm=jpg&q=60&w=900&auto=format&fit=crop",
    alt: "analytics charts on laptop screen",
    reverse: false,
  },
];

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Product | ComplyStep Compliance Platform" },
      {
        name: "description",
        content:
          "Explore the ComplyStep product: a sector-specific regulatory knowledge graph, full campaign lifecycle coverage and compliance linked to commercial growth.",
      },
      { property: "og:title", content: "Product | ComplyStep Compliance Platform" },
      {
        property: "og:description",
        content:
          "Depth of intelligence, full lifecycle coverage and compliance as a growth tool for UK regulated marketing teams.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Product,
});

function Product() {
  return (
    <div className="page">
      <section className="sec sec-top">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" /> The Product
          </div>
          <h1 className="h2">Three pillars that make ComplyStep different.</h1>
          <p className="lede" style={{ maxWidth: 640 }}>
            ComplyStep is purpose-built for UK regulated marketing: deep sector intelligence,
            coverage of the entire campaign lifecycle, and compliance data that drives growth.
          </p>

          <div className="card-grid" style={{ marginTop: 40 }}>
            {PILLARS.map((p) => (
              <div className="s-card" key={p.title}>
                <div className="feat-icon">
                  <i className={`fas ${p.icon}`} />
                </div>
                <h4>
                  {p.emoji} {p.title}
                </h4>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-soft">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" /> Inside The Platform
          </div>
          <h2 className="h2">How each pillar works in practice.</h2>

          {PILLARS.map((p) => (
            <div className={p.reverse ? "feat-row rev" : "feat-row"} key={p.title}>
              <div className="feat-copy">
                <div className="feat-icon">
                  <i className={`fas ${p.icon}`} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <ul className="feat-bullets">
                  {p.bullets.map((b) => (
                    <li key={b}>
                      <i className="fas fa-check" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="feat-visual">
                <img src={p.img} alt={p.alt} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" /> See It In Action
          </div>
          <h2 className="h2">A first look at the platform.</h2>
          <p className="lede" style={{ maxWidth: 640 }}>
            Real screens from the ComplyStep application — click any screenshot to view it full
            size.
          </p>

          <Carousel opts={{ align: "start" }} className="shot-carousel">
            <CarouselContent className="shot-content">
              {SCREENSHOTS.map((s) => (
                <CarouselItem key={s.label} className="shot-item pl-0">
                  <Dialog
                    onOpenChange={(open) => {
                      if (typeof document !== "undefined") {
                        document.body.classList.toggle("lightbox-open", open);
                      }
                    }}
                  >
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="shot-card"
                        aria-label={`View ${s.label} screenshot full size`}
                      >
                        <img src={s.src} alt={s.alt} loading="lazy" />
                        <span className="shot-card-label">{s.label}</span>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="shot-dialog max-w-4xl w-[92vw] p-3 sm:p-4">
                      <DialogTitle className="sr-only">{s.label} screenshot</DialogTitle>
                      <img src={s.src} alt={s.alt} className="shot-dialog-img" />
                      <p className="shot-dialog-caption">{s.label}</p>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 sm:-left-12" />
            <CarouselNext className="right-0 sm:-right-12" />
          </Carousel>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="cta-banner">
            <h2 className="h2">See the platform on your own campaigns.</h2>
            <p>
              We will run your live promotions through ComplyStep and show you exactly what a
              regulator would flag.
            </p>
            <div className="hero-btns" style={{ justifyContent: "center" }}>
              <Link to="/contact" className="btn-p">
                Contact Us
              </Link>
              <Link to="/pricing" className="btn-s">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
