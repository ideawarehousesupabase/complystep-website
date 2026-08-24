import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

const FAQS = [
  {
    q: "What does ComplyStep actually do?",
    a: "We review promotions before they go live and monitor them continuously once published, combining AI compliance checks with UK-specific regulatory rules.",
  },
  {
    q: "Do I need to replace my marketing stack?",
    a: "No. ComplyStep sits above Google Ads, Meta Ads Manager, TikTok and your CMS; you keep your current tools.",
  },
  {
    q: "How is this different from ChatGPT or Claude?",
    a: "Generic AI platforms lack UK-specific regulatory training. ComplyStep is trained on FCA, CAP and DMCC Act data, with a closed-loop verification architecture.",
  },
  {
    q: "How long does onboarding take?",
    a: "Once your first ad account is connected, onboarding for further campaigns and teams drops from weeks to hours.",
  },
];

const BUSINESS_TYPES = [
  "Financial Advisor / Wealth Manager",
  "Private Healthcare / Aesthetics",
  "Legal Services Firm",
  "Gambling Operator / Affiliate Network",
  "Digital Marketing Agency",
  "Other",
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Demo | ComplyStep" },
      {
        name: "description",
        content:
          "Book a demo of ComplyStep and see how UK regulated brands protect their compliance equity across every campaign.",
      },
      { property: "og:title", content: "Book a Demo | ComplyStep" },
      {
        property: "og:description",
        content:
          "Talk to our team about pre-publication review and live compliance monitoring for your campaigns.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [openFaq, setOpenFaq] = useState(0);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      form.reset();
    }, 3500);
  }

  return (
    <div className="page">
      <section className="sec sec-soft sec-top">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" /> Get In Touch
          </div>
          <h2 className="h2">Book a demo of ComplyStep.</h2>
          <div className="contact-wrap">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input id="name" type="text" required placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Business Email</label>
                <input id="email" type="email" required placeholder="you@company.co.uk" />
              </div>
              <div className="form-group">
                <label htmlFor="btype">Business Type</label>
                <select id="btype" defaultValue={BUSINESS_TYPES[0]}>
                  {BUSINESS_TYPES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Tell us about your campaigns" />
              </div>
              <button
                className={sent ? "btn-p btn-full btn-sent" : "btn-p btn-full"}
                type="submit"
                disabled={sent}
              >
                {sent ? (
                  <>
                    <i className="fas fa-check" /> Demo Request Sent!
                  </>
                ) : (
                  "Send Demo Request"
                )}
              </button>
            </form>
            <div className="contact-info">
              <h3>Let's protect your compliance equity.</h3>
              <p className="sub">
                Our team will walk you through how ComplyStep fits your campaigns.
              </p>
              <div className="c-detail">
                <div className="ic">
                  <i className="fas fa-envelope" />
                </div>
                <div>
                  <strong>Email</strong>
                  <span>hello@regpromolens.co.uk</span>
                </div>
              </div>
              <div className="c-detail">
                <div className="ic">
                  <i className="fas fa-location-dot" />
                </div>
                <div>
                  <strong>Location</strong>
                  <span>London, United Kingdom</span>
                </div>
              </div>
              <div className="c-detail">
                <div className="ic">
                  <i className="fas fa-shield-halved" />
                </div>
                <div>
                  <strong>Compliance</strong>
                  <span>UK GDPR · FCA-Aligned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="eyebrow">
            <span className="dot" /> FAQ
          </div>
          <h2 className="h2">Frequently asked questions.</h2>
          <div className="faq-wrap">
            {FAQS.map((f, i) => (
              <div className={openFaq === i ? "faq-item open" : "faq-item"} key={f.q}>
                <button
                  className="faq-q"
                  aria-expanded={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <h4>{f.q}</h4>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-body">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
