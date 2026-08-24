import { Link } from "@tanstack/react-router";
import { useState } from "react";


export const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/industries", label: "Industries" },
  { to: "/case-study", label: "Case Study" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

const MOBILE_LABELS: Record<string, string> = {
  "/products": "Products / Services",
  "/contact": "Contact Us",
};

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <img
            src="/complystep-logo.png"
            alt="ComplyStep"
            width={782}
            height={146}
            loading="eager"
            decoding="sync"
            style={{ height: 34, width: "auto", display: "block", maxWidth: "100%" }}
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
        </ul>
        <div className="nav-right">
          <Link to="/contact" className="btn-demo-nav">
            Book a Demo
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
            {MOBILE_LABELS[item.to] ?? item.label}
          </Link>
        ))}
        <Link to="/contact" className="mob-cta" onClick={() => setOpen(false)}>
          Book a Demo
        </Link>
      </div>
    </>
  );
}
