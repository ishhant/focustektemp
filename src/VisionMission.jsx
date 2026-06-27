import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimSection, WhatsAppButton } from "./SharedComponents";

// ── BUSINESS MODEL PILLARS ──
const PILLARS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
      </svg>
    ),
    label: "Quality",
    desc: "Excellent in quality consistently, Technological leadership.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: "Customer",
    desc: "Customer satisfaction, Sensitive to customer's needs.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    label: "Relationship",
    desc: "Long term perspective & commitment. Dependable partner.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    label: "Growth",
    desc: "Hub of global sourcing, growing together in partnership, serve top class customers.",
  },
];

// ── MISSION POINTS ──
const MISSION_POINTS = [
  "Work with customers on Common Goals",
  "Provide Flexibility & Responsiveness",
  "Deliver On-time Quality Products",
  "Hire Best People",
  "Maintain High Standards",
  "Inculcate Right Attitudes & Values",
];

export default function VisionMission() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f9fa", color: "#051226", minHeight: "100vh" }}>
      <style>{`
        /* Pillar cards */
        .pillar-card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid var(--border);
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .pillar-card:hover { box-shadow: 0 12px 40px rgba(0,44,108,0.08); transform: translateY(-3px); }

        /* Mission list items */
        .mission-point {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 20px;
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 12px;
          font-size: 15px;
          font-weight: 500;
          color: var(--dark);
          transition: box-shadow 0.2s, border-color 0.2s;
        }
        .mission-point:hover { border-color: var(--blue); box-shadow: 0 4px 16px rgba(0,44,108,0.07); }
      `}</style>

      <Navbar activePage="Company" />

      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 80,
        paddingBottom: 40,
        backgroundImage: `linear-gradient(180deg, rgba(5, 12, 26, 0.45) 0%, rgba(0, 44, 108, 0.5) 100%), url('/src/assets/vision.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>

            <div className="hero-animate" style={{ animationDelay: "80ms" }}>
            </div>

            <h1 className="hero-title hero-animate" style={{ animationDelay: "140ms", textShadow: "0 4px 16px rgba(0,0,0,0.4)" }}>
              Vision &amp; <span style={{ color: "#60a5fa" }}>Mission</span>
            </h1>

            <p className="hero-animate" style={{
              animationDelay: "200ms", fontSize: 18, fontWeight: 500,
              color: "rgba(255,255,255,0.92)", lineHeight: 1.65, marginTop: 20,
              textShadow: "0 2px 8px rgba(0,0,0,0.3)",
            }}>
              Dedicated to quality, technology, and people — building a globally recognized PCBA supplier with sustained excellence.
            </p>

            {/* Pills */}
            <div className="hero-animate" style={{ animationDelay: "280ms", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, marginTop: 32 }}>
              {["ISO 9001:2015", "IATF 16949:2016", "IPC-A-610", "URS Certified"].map(c => (
                <span key={c} className="cert-pill" style={{ background: "rgba(5,18,38,0.65)", color: "#fff", borderColor: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)" }}>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 6.5l3 3 6-6" stroke="#f0c040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {c}
                </span>
              ))}
            </div>

          </div>
        </div>
      </section>



      {/* ── FOCUSTEK PHILOSOPHY ── */}
      <section style={{ padding: "50px 24px", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <div style={{ textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
              <div className="badge">Focustek Philosophy</div>
              <h2 className="section-title">Our Guiding Principles</h2>
              <div className="divider-center"></div>
              <p style={{ fontSize: 16, color: "var(--gray)", lineHeight: 1.75, marginBottom: 16 }}>
                FOCUSTEK is dedicated to the pursuit of high-quality products and services through technology innovation and excellence in our people. We will become a valued member of society, growing alongside various stakeholders — employees, customers, suppliers, vendors, and local communities — and pursue the values of coexistence.
              </p>
              <p style={{ fontSize: 16, color: "var(--gray)", lineHeight: 1.75 }}>
                Every business needs to work on the basics to survive beyond a lifetime — Good Thoughts, Good Words, and Good Deeds. Our thought must support what we say to our customers, and our action must match our intentions and words. The longevity of our business is thus ensured.
              </p>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ── BUSINESS MODEL ── */}
      <section style={{ padding: "50px 24px", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="badge">Business Model</div>
              <h2 className="section-title">What Drives Us</h2>
              <div className="divider-center"></div>
              <p style={{ fontSize: 15, color: "var(--gray)", maxWidth: 620, margin: "16px auto 0", lineHeight: 1.75 }}>
                FOCUSTEK Manufacturing Services Pvt. Ltd. (FMS) — a leading service provider in PCA card assembly — is engaged in SMT &amp; MI Production technology products with the spirit of total customer satisfaction, through its educated &amp; experienced technical staff. We concentrate on R&amp;D to provide the best products and services.
              </p>
            </div>
          </AnimSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="grid-4">
            {PILLARS.map((p, i) => (
              <AnimSection key={i} delay={i * 80}>
                <div className="pillar-card" style={{ height: "100%" }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: "var(--blue-light)", color: "var(--blue)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {p.icon}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "var(--dark)", marginBottom: 8 }}>
                      {p.label}
                    </h3>
                    <p style={{ fontSize: 14, color: "var(--gray)", lineHeight: 1.65 }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION SPLIT ── */}
      <section style={{ padding: "50px 24px", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }} className="grid-2">

            {/* OUR VISION */}
            <AnimSection delay={0}>
              <div style={{
                background: "linear-gradient(135deg, #051226 0%, var(--blue) 100%)",
                borderRadius: 20, padding: "48px 40px", height: "100%",
              }}>
                <div className="badge" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", marginBottom: 20 }}>
                  Our Vision
                </div>
                <h2 style={{
                  fontFamily: "'DM Sans',sans-serif", fontWeight: 800,
                  fontSize: "clamp(1.6rem, 2.5vw, 2rem)", color: "#fff", lineHeight: 1.2,
                  letterSpacing: "-0.02em", marginBottom: 16,
                }}>
                  Globally Recognized<br />PCBA Supplier
                </h2>
                <div style={{ width: 48, height: 3, background: "var(--accent)", borderRadius: 2, marginBottom: 20 }}></div>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.8 }}>
                  To become a globally recognized supplier of PCBA. We focus on achieving the customer requirement on time and believe in building a strong work environment with key strategies. Focustek believes that sustained success can only come through people.
                </p>

                {/* Vision highlight pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 28 }}>
                  {["Global Recognition", "Customer-First", "People-Led Growth"].map(t => (
                    <span key={t} style={{
                      background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                      color: "rgba(255,255,255,0.9)", fontSize: 12, fontWeight: 600,
                      padding: "6px 14px", borderRadius: 20,
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AnimSection>

            {/* OUR MISSION */}
            <AnimSection delay={100}>
              <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 20, padding: "48px 40px" }}>
                <div className="badge">Our Mission</div>
                <h2 className="section-title" style={{ marginBottom: 8 }}>
                  Value-Added<br />Excellence
                </h2>
                <div className="divider"></div>
                <p style={{ fontSize: 15, color: "var(--gray)", lineHeight: 1.75, marginBottom: 28 }}>
                  To render value-added services to delight our customers through technological excellence and adherence to systems &amp; procedures with the active involvement of human resources.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {MISSION_POINTS.map((pt, i) => (
                    <div key={i} className="mission-point">
                      <div style={{
                        width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                        background: "var(--blue-light)", color: "var(--blue)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <path d="M2 6.5l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimSection>

          </div>
        </div>
      </section>



      <Footer />

      <WhatsAppButton />
    </div>
  );
}