import { Link } from "@tanstack/react-router";
import { useState } from "react";

export const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Product" },
  { to: "/industries", label: "Industries" },
  { to: "/pricing", label: "Pricing" },
] as const;

export const INSIGHTS_ITEMS = [
  { to: "/blog", label: "Blog" },
  { to: "/case-study", label: "Case Studies" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <img
            src="/complystep-logo.png"
            alt="ComplyStep"
            width={1061}
            height={229}
            loading="eager"
            decoding="sync"
            style={{ height: 48, width: "auto", display: "block", maxWidth: "100%" }}
          />
        </Link>

        <ul className="nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "active" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li
            className="nav-drop"
            onMouseEnter={() => setInsightsOpen(true)}
            onMouseLeave={() => setInsightsOpen(false)}
          >
            <button
              className="nav-drop-btn"
              aria-expanded={insightsOpen}
              onClick={() => setInsightsOpen((v) => !v)}
            >
              Insights <i className="fas fa-chevron-down" />
            </button>
            <div className={insightsOpen ? "nav-drop-menu open" : "nav-drop-menu"}>
              {INSIGHTS_ITEMS.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeProps={{ className: "active" }}
                  onClick={() => setInsightsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </li>
        </ul>
        <div className="nav-right">
          <Link to="/contact" className="btn-demo-nav">
            Contact Us
          </Link>
        </div>
        <button
          className={open ? "hamburger open" : "hamburger"}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={open ? "mobile-nav open" : "mobile-nav"}>
        {NAV_ITEMS.map((item) => (
          <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        {INSIGHTS_ITEMS.map((item) => (
          <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link to="/contact" className="mob-cta" onClick={() => setOpen(false)}>
          Contact Us
        </Link>
      </div>
    </>
  );
}
