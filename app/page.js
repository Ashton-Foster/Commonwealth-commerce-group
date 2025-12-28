"use client";

import { useState } from "react";

export default function Page() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#0b1f3a", color: "white" }}>
      {/* NAV */}
      <header
        style={{
          padding: "18px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255,255,255,0.12)"
        }}
      >
        <div style={{ fontWeight: 800, letterSpacing: "0.08em" }}>CCG</div>

        <nav style={{ display: "flex", gap: 18, fontSize: 14 }}>
          <a href="#services" style={{ color: "white", textDecoration: "none", opacity: 0.9 }}>
            Services
          </a>
          <a href="#about" style={{ color: "white", textDecoration: "none", opacity: 0.9 }}>
            About
          </a>
          <a href="#contact" style={{ color: "white", textDecoration: "none", opacity: 0.9 }}>
            Contact
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section style={{ padding: "54px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: 32,
            alignItems: "center"
          }}
        >
          <div>
            <h1 style={{ fontSize: 44, lineHeight: 1.1, margin: 0 }}>
              Commonwealth Commerce Group
            </h1>
            <p style={{ marginTop: 14, fontSize: 16, opacity: 0.9, maxWidth: 640 }}>
              A modern commerce company focused on <b>e-commerce</b> and <b>wholesale real estate</b>.
              We build efficient systems, strong partnerships, and deals that make sense.
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 22, flexWrap: "wrap" }}>
              <a
                href="#contact"
                style={{
                  background: "white",
                  color: "#0b1f3a",
                  padding: "12px 16px",
                  borderRadius: 10,
                  textDecoration: "none",
                  fontWeight: 700
                }}
              >
                Get in touch
              </a>

              <a
                href="#services"
                style={{
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "white",
                  padding: "12px 16px",
                  borderRadius: 10,
                  textDecoration: "none",
                  fontWeight: 700,
                  opacity: 0.95
                }}
              >
                View services
              </a>
            </div>
          </div>

          <div
            style={{
              borderRadius: 16,
              padding: 22,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
              border: "1px solid rgba(255,255,255,0.12)"
            }}
          >
            <div style={{ fontSize: 13, letterSpacing: "0.08em", opacity: 0.85 }}>
              CORE FOCUS
            </div>
            <ul style={{ marginTop: 12, marginBottom: 0, paddingLeft: 18, lineHeight: 1.9 }}>
              <li>E-commerce operations</li>
              <li>Wholesale real estate</li>
              <li>Acquisitions & partnerships</li>
              <li>Process & deal execution</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "28px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ margin: "0 0 14px 0" }}>Services</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {[
            {
              title: "E-commerce",
              text: "Product sourcing, listing optimization, and operational execution."
            },
            {
              title: "Wholesale Real Estate",
              text: "Deal sourcing, negotiation, contract coordination, and buyer matching."
            },
            {
              title: "Partnerships",
              text: "Relationships with suppliers, buyers, investors, and service providers."
            }
          ].map((card) => (
            <div
              key={card.title}
              style={{
                borderRadius: 14,
                padding: 16,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)"
              }}
            >
              <div style={{ fontWeight: 800 }}>{card.title}</div>
              <div style={{ marginTop: 8, opacity: 0.9, fontSize: 14 }}>{card.text}</div>
            </div>
          ))}
        </div>

        <style jsx>{`
          @media (max-width: 900px) {
            section#services > div {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "28px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ margin: "0 0 10px 0" }}>About</h2>
        <p style={{ margin: 0, opacity: 0.9, lineHeight: 1.7, maxWidth: 900 }}>
          Commonwealth Commerce Group is built around disciplined execution and simple systems.
          Our goal is to create reliable outcomes through repeatable processes, clear communication,
          and strong long-term relationships.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "28px 24px 54px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ margin: "0 0 10px 0" }}>Contact</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14,
            alignItems: "start"
          }}
        >
          <div
            style={{
              borderRadius: 14,
              padding: 16,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)"
            }}
          >
            <div style={{ fontWeight: 800, marginBottom: 8 }}>Send a message</div>

            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10 }}>
                <input
                  required
                  placeholder="Your name"
                  style={inputStyle}
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  style={inputStyle}
                />
                <textarea
                  required
                  placeholder="What can we help with?"
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <button
                  type="submit"
                  style={{
                    background: "white",
                    color: "#0b1f3a",
                    border: "none",
                    padding: "12px 14px",
                    borderRadius: 10,
                    fontWeight: 800,
                    cursor: "pointer"
                  }}
                >
                  Submit
                </button>
              </form>
            ) : (
              <div style={{ opacity: 0.9 }}>
                ✅ Thanks — message received. (This is a demo form for now.)
              </div>
            )}
          </div>

          <div
            style={{
              borderRadius: 14,
              padding: 16,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)"
            }}
          >
            <div style={{ fontWeight: 800, marginBottom: 8 }}>Business Info</div>
            <div style={{ opacity: 0.9, lineHeight: 1.8, fontSize: 14 }}>
              <div><b>Company:</b> Commonwealth Commerce Group</div>
              <div><b>Focus:</b> E-commerce & Wholesale Real Estate</div>
              <div style={{ marginTop: 10, opacity: 0.85 }}>
                Add your email/phone here once you’re ready.
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 900px) {
            section#contact > div {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "18px 24px",
          textAlign: "center",
          opacity: 0.75,
          borderTop: "1px solid rgba(255,255,255,0.12)"
        }}
      >
        © {new Date().getFullYear()} Commonwealth Commerce Group
      </footer>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 12px",
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.18)",
  background: "rgba(255,255,255,0.06)",
  color: "white",
  outline: "none"
};
