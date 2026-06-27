import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimSection, WhatsAppButton } from "./SharedComponents";

// ── QMS SECTION IMAGES ──
// ── QMS SECTION IMAGES from assets/qms ──
import qmsHeroImg   from "./assets/qms/logo.jpg";       // hero banner (use any wide qms shot)
import rawMat1      from "./assets/qms/raw.jpg";
import igi1         from "./assets/qms/igi1.jpg";
import igi2         from "./assets/qms/igi2.jpg";
import igi3         from "./assets/qms/igi3.jpg";
import fqa1         from "./assets/qms/fqa1.jpg";
import fqa2         from "./assets/qms/fqa2.jpg";
import fqa3         from "./assets/qms/fqa3.jpg";
import fb1          from "./assets/qms/fb1.jpg";
import fb2          from "./assets/qms/fb2.jpg";
import fb3          from "./assets/qms/hero.png";
import fb4          from "./assets/qms/hero.png";
import fb5          from "./assets/qms/hero.png";
import fb6          from "./assets/qms/hero.png";

// ── DATA ──
const QUALITY_TRAITS = [
  "Self-disciplined",
  "Sharing of ideas",
  "Fast feedback",
  "Proper communication",
  "Dedicated to their job",
  "Believes in prevention rather than correction",
];

const CUSTOMER_VIEWS = [
  { label: "Customer delight is prime", icon: "⭐" },
  { label: "Keeping the words", icon: "🤝" },
  { label: "Mutual understanding", icon: "💬" },
  { label: "Together grow", icon: "📈" },
];

const QUALITY_POLICY_POINTS = [
  "To provide the best quality of product",
  "By establishing and maintaining the quality management system",
  "Through Continual Improvement of our process and thereby provide value to our activities through world class quality, cost competitiveness",
];

const QMS_SECTIONS = [
  {
    badge: "Raw Material Control",
    title: "Raw Material Storage",
    desc: "ESD-safe storage area with clearly identified material zones — separate areas maintained for accepted and rejected materials, ensuring full traceability from the first point of entry.",
    points: [
      "ESD Safe storage area for storing raw material",
      "Material properly identified and easily retrievable",
      "Defined area for storage of accepted & rejected materials",
    ],
    images: [rawMat1],
    imageLayout: "single",
    accent: false,
  },
  {
    badge: "Incoming Goods Inspection",
    title: "Procedure for IGI",
    desc: "A rigorous incoming goods inspection process ensures every component entering the line meets Focustek's documented quality standards before touching the production floor.",
    points: [
      "Verification of incoming goods as per Bill of Material",
      "Inspection of material as per QMS sampling plan",
      "Putting an inspection tag on each item for traceability",
      "Baking of Moisture sensitive components i.e. PCBs & ICs (as per customer need)",
    ],
    images: [igi1, igi2, igi3],
    imageLayout: "triple",
    imageLabels: ["Goods Verification & Inspection", "Inspection Tag for Identification", "Baking Oven"],
    accent: false,
  },
  {
    badge: "Zero-Defect Output",
    title: "Final Quality Assurance",
    desc: "At FQA, 100% visual inspection of every PCB assembly is performed by qualified and experienced manpower — ensuring zero-defect product delivery against IPC-A-610D standards.",
    points: [
      "100% visual inspection of PCB assembly by qualified manpower",
      "Zero-defect product delivery to all customers",
      "Assured product quality as per inspection standard IPC 610D",
    ],
    images: [fqa1, fqa2, fqa3],
    imageLayout: "triple",
    accent: true,
  },
  {
    badge: "Continuous Improvement",
    title: "Feedback & Review System",
    desc: "Daily, weekly, and monthly feedback loops drive continuous improvement — from line-level rejection monitoring to strategic QMS effectiveness reviews.",
    points: [
      "Daily line rejection monitoring",
      "Daily feedback and analysis of rejection",
      "Weekly meeting for evaluation of corrective & preventive actions",
      "Monthly meeting for QMS effectiveness",
    ],
    images: [fb1, fb2],
    imageLayout: "grid",
    accent: false,
  },
];

// ── STAT STRIP DATA ──
const STATS = [
  { value: "2001", label: "Established" },
  { value: "ISO 9001", label: "Certified" },
  { value: "IATF 16949", label: "Automotive" },
  { value: "IPC-A-610", label: "Quality Std." },
];

// ── CHECK ICON ──
function CheckIcon({ color = "var(--blue)" }) {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <path d="M2 6.5l3 3 6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FocustekQMS() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f9fa", color: "#051226", minHeight: "100vh" }}>
      <style>{`
        /* ── QMS IMAGE LAYOUTS ── */
        .img-single {
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 16/9;
          box-shadow: 0 16px 48px rgba(0,44,108,0.10);
        }
        .img-triple {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .img-triple-item {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,44,108,0.08);
        }
        .img-triple-item img {
          width: 100%;
          aspect-ratio: 4/3;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.4s ease;
        }
        .img-triple-item:hover img { transform: scale(1.04); }

        .img-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 16px;
        }
        .img-grid-item {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0,44,108,0.07);
          aspect-ratio: 4/3;
        }
        .img-grid-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.4s ease;
        }
        .img-grid-item:hover img { transform: scale(1.04); }

        /* ── POINT LIST ── */
        .point-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: var(--gray);
          line-height: 1.6;
        }

        /* ── QUALITY TRAIT / POLICY CARDS ── */
        .trait-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 10px;
          font-size: 14px;
          font-weight: 500;
          color: var(--dark);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .trait-chip:hover { border-color: var(--blue); box-shadow: 0 4px 16px rgba(0,44,108,0.07); }

        /* ── IMAGE LABEL ── */
        .img-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--gray);
          text-align: center;
          margin-top: 8px;
          letter-spacing: 0.01em;
        }

        /* ── BREADCRUMB ── */
        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: rgba(255,255,255,0.75);
          font-weight: 500;
          margin-bottom: 24px;
          justify-content: center;
        }
        .breadcrumb a { color: rgba(255,255,255,0.75); transition: color 0.2s; }
        .breadcrumb a:hover { color: #fff; }

        /* ── ACCENT SECTION ── */
        .accent-section {
          background: linear-gradient(135deg, #051226 0%, var(--blue) 100%);
          border-radius: 20px;
          padding: 48px 40px;
          color: #fff;
        }

        @media (max-width: 768px) {
          .img-triple { grid-template-columns: 1fr !important; }
          .img-grid   { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      <Navbar activePage="Company" />

      {/* ══════════════════════════════════════
          HERO — full-screen, parallax, same as Home
      ══════════════════════════════════════ */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 80,
        paddingBottom: 40,
        backgroundImage: `linear-gradient(180deg, rgba(5, 12, 26, 0.55) 0%, rgba(0, 44, 108, 0.7) 100%), url(${qmsHeroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%" }}>
          <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto" }}>

            {/* Badge */}

            {/* Title */}
            <h1 className="hero-title hero-animate" style={{ animationDelay: "140ms", textShadow: "0 4px 16px rgba(0,0,0,0.4)", marginBottom: 20 }}>
              Focustek <span style={{ color: "#60a5fa" }}>QMS</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-animate" style={{
              animationDelay: "200ms",
              fontSize: 18, fontWeight: 500,
              color: "rgba(255,255,255,0.92)",
              lineHeight: 1.7, maxWidth: 680, margin: "0 auto",
              textShadow: "0 2px 8px rgba(0,0,0,0.3)",
            }}>
              A well-documented Quality Manual ensures a full understanding of quality aspects at all levels. Product quality is built-in from raw material stage through rigorous control of every operation.
            </p>

            {/* Cert pills */}

            {/* CTA Buttons */}

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOCUSTEK QUALITY — intro + traits + policy
      ══════════════════════════════════════ */}
      <section style={{ padding: "50px 24px", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }} className="grid-2">

              {/* LEFT — intro + understanding quality */}
              <div>
                <div className="badge">Focustek Quality</div>
                <h2 className="section-title">Quality Built-In,<br />Not Inspected In</h2>
                <div className="divider"></div>
                <p style={{ fontSize: 15, color: "var(--gray)", lineHeight: 1.8, marginBottom: 32 }}>
                  A well-documented Quality Manual supports the company in ensuring a full understanding of quality aspects and its implementation at all levels. Product quality and reliability are built-in from the raw material stage and ensured by rigorous control of all operations — encompassing manpower training, material procurement, IQC, production, online inspection, circuit &amp; functional testing at each stage, and final QA.
                </p>

                <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "var(--dark)", marginBottom: 16 }}>
                  We understand "Quality" as:
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {QUALITY_TRAITS.map((t, i) => (
                    <div key={i} className="trait-chip">
                      <div style={{ width: 26, height: 26, borderRadius: 7, background: "var(--blue-light)", color: "var(--blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <CheckIcon />
                      </div>
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — customer views + quality policy */}
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

                {/* Customer Views */}
                <div className="card">
                  <div className="badge">Views to Our Customers</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    {CUSTOMER_VIEWS.map((v, i) => (
                      <div key={i} style={{
                        background: "var(--blue-light)", borderRadius: 12,
                        padding: "18px 16px", display: "flex", flexDirection: "column", gap: 8,
                      }}>
                        <span style={{ fontSize: 22 }}>{v.icon}</span>
                        <span style={{ fontSize: 13, fontWeight: 600, color: "var(--blue)", lineHeight: 1.4 }}>{v.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quality Policy */}
                <div style={{
                  background: "linear-gradient(135deg, #051226 0%, var(--blue) 100%)",
                  borderRadius: 16, padding: "32px 28px",
                }}>
                  <div className="badge" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}>
                    Quality Policy
                  </div>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: 20 }}>
                    We M/S FOCUSTEK MANUFACTURING SERVICES PVT. LTD. are committed to enhancing the satisfaction of our customers:
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {QUALITY_POLICY_POINTS.map((p, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <div style={{ width: 24, height: 24, borderRadius: 6, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <CheckIcon color="#f0c040" />
                        </div>
                        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ══════════════════════════════════════
          QMS SECTIONS — Raw Material / IGI / FQA / Feedback
      ══════════════════════════════════════ */}
      {QMS_SECTIONS.map((sec, idx) => (
        <section
          key={idx}
          style={{
            padding: "50px 24px",
            background: "transparent",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <AnimSection delay={0}>

              {/* Section header */}
              <div style={{ marginBottom: 40 }}>
                <div className="badge">{sec.badge}</div>
                <h2 className="section-title" style={{ marginBottom: 8 }}>{sec.title}</h2>
                <div className="divider"></div>
                <p style={{ fontSize: 15, color: "var(--gray)", lineHeight: 1.75, maxWidth: 720 }}>{sec.desc}</p>
              </div>

              {/* Points + Images layout */}
              {sec.imageLayout === "single" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
                  {/* Single image */}
                  <div className="img-single" style={{ aspectRatio: "21/9" }}>
                    <img src={sec.images[0]} alt={sec.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", transition: "transform 0.4s ease" }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                  </div>
                  {/* Points */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
                    {sec.points.map((pt, i) => (
                      <div key={i} className="trait-chip" style={{ alignItems: "flex-start" }}>
                        <div style={{ width: 26, height: 26, borderRadius: 7, background: "var(--blue-light)", color: "var(--blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <CheckIcon />
                        </div>
                        {pt}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {sec.imageLayout === "triple" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
                  {/* Points row */}
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${sec.points.length <= 3 ? sec.points.length : 2}, 1fr)`,
                    gap: 14,
                  }}>
                    {sec.points.map((pt, i) => (
                      <div key={i} className={sec.accent ? "" : "trait-chip"} style={sec.accent ? {
                        display: "flex", alignItems: "flex-start", gap: 10,
                        padding: "16px 20px",
                        background: "linear-gradient(135deg, #051226 0%, var(--blue) 100%)",
                        borderRadius: 12, color: "rgba(255,255,255,0.9)", fontSize: 14, fontWeight: 500, lineHeight: 1.55,
                      } : { alignItems: "flex-start" }}>
                        <div style={{
                          width: 26, height: 26, borderRadius: 7, flexShrink: 0,
                          background: sec.accent ? "rgba(255,255,255,0.1)" : "var(--blue-light)",
                          border: sec.accent ? "1px solid rgba(255,255,255,0.2)" : "none",
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <CheckIcon color={sec.accent ? "#f0c040" : "var(--blue)"} />
                        </div>
                        {pt}
                      </div>
                    ))}
                  </div>
                  {/* Triple images */}
                  <div className="img-triple">
                    {sec.images.map((img, i) => (
                      <div key={i}>
                        <div className="img-triple-item">
                          <img src={img} alt={sec.imageLabels ? sec.imageLabels[i] : `${sec.title} ${i + 1}`} />
                        </div>
                        {sec.imageLabels && (
                          <p className="img-label">{sec.imageLabels[i]}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {sec.imageLayout === "grid" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
                  {/* Points */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
                    {sec.points.map((pt, i) => (
                      <div key={i} className="trait-chip" style={{ alignItems: "flex-start" }}>
                        <div style={{ width: 26, height: 26, borderRadius: 7, background: "var(--blue-light)", color: "var(--blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <CheckIcon />
                        </div>
                        {pt}
                      </div>
                    ))}
                  </div>
                  {/* 3×2 image grid */}
                  <div className="img-grid">
                    {sec.images.map((img, i) => (
                      <div key={i} className="img-grid-item">
                        <img src={img} alt={`${sec.title} ${i + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </AnimSection>
          </div>
        </section>
      ))}

      <Footer />

      {/* ── FLOATING WHATSAPP BUTTON ── */}
      <WhatsAppButton />
    </div>
  );
}