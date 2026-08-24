import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function ChatSupport() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={open ? "chat-panel open" : "chat-panel"} role="dialog" aria-label="Chat support">
        <div className="chat-head">
          <div>
            <strong>ComplyStep Support</strong>
            <span>Typically replies within a few hours</span>
          </div>
          <button aria-label="Close chat" onClick={() => setOpen(false)}>
            ×
          </button>
        </div>
        <div className="chat-body">
          <p className="chat-msg">
            Hi 👋 Live chat is coming soon. In the meantime, send us your question and our
            compliance team will get back to you.
          </p>
          <Link to="/contact" className="btn-p btn-full" onClick={() => setOpen(false)}>
            Message the team
          </Link>
          <a className="btn-s btn-full" href="mailto:hello@complystep.com">
            hello@complystep.com
          </a>
        </div>
      </div>

      <button
        className="chat-fab"
        aria-label={open ? "Close chat support" : "Open chat support"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <i className={open ? "fas fa-xmark" : "fas fa-comment-dots"} />
      </button>
    </>
  );
}
