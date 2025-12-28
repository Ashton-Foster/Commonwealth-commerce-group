"use client";

import React, { useState } from "react";

export default function Page() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>
      {/* NAV */}
      <header
        style={{
          backgroundColor: "#0A1F44",
          color: "white",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <strong>CCG</strong>
        <nav style={{ display: "flex", gap: "16px" }}>
          <a href="#services" style={{ color: "white", textDecoration: "none" }}>
            Services
          </a>
          <a href="#about" style={{ color: "white", textDecoration: "none" }}>
            About
          </a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
            Contact
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        style={{
          padding: "80px 24px",
          backgroundColor: "#0A1F44",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "40px", marginBottom: "16px" }}>
          Commonwealth Commerce Group
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto" }}>
          Operating at the intersection of e-commerce and wholesale real estate.
          We focus on clean execution, strong relationships, and scalable systems.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "64px 24px" }}>
        <h2 style={{ textAlign: "center" }}>Our Services</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginTop: "32px",
            maxWidth: "1000px",
            marginInline: "auto",
          }}
        >
          <div style={{ border: "1px solid #ddd", padding: "24px" }}>
            <h3>E-commerce & Wholesale</h3>
            <p>
              Product sourcing, wholesale partnerships, online distribution,
              and fulfillment operations.
            </p>
          </div>
          <div style={{ border: "1px solid #ddd", padding: "24px" }}>
            <h3>Wholesale Real Estate</h3>
            <p>
              Property acquisitions, buyer matching, and deal coordination with
              transparent timelines.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{ padding: "64px 24px", backgroundColor: "#f5f5f5" }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2>About Us</h2>
          <p>
            Commonwealth Commerce Group is a modern operations-focused business.
            We prioritize clarity, speed, and long-term value creation across
            multiple markets.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2>Contact</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              required
              style={{ width: "100%", padding: "12px", marginBottom: "12px" }}
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              style={{ width: "100%", padding: "12px", marginBottom: "12px" }}
            />
            <textarea
              placeholder="Message"
              required
              style={{
                width: "100%",
                padding: "12px",
                minHeight: "120px",
                marginBottom: "12px",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#0A1F44",
                color: "white",
                padding: "12px 24px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
            {submitted && (
              <p style={{ marginTop: "12px", color: "green" }}>
                Message sent (demo).
              </p>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#0A1F44",
          color: "white",
          padding: "24px",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} Commonwealth Commerce Group
      </footer>
    </main>
  );
}
