import isoLogo from "./assets/iso.png";
import ursLogo from "./assets/urs.png";
import iatfLogo from "./assets/iatf.png";
import msmeLogo from "./assets/msme.png";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/company" },
  { label: "Business", href: "/business" },
  { label: "Products & Services", href: "/products-services" },
  { label: "Machines & Plants", href: "/machines-plants" },
  { label: "Contact Us", href: "/contact-us" },
];

const QUICK_LINKS = [
  { label: "Focustek QMS", href: "/company/focustek-qms" },
  { label: "Vision & Mission", href: "/company/vision-mission" },
  { label: "Our Customers", href: "/company/our-customers" },
  { label: "Manpower & Org Charts", href: "/company/manpower-organization-charts" },
];

export default function Footer() {
  return (
    <>
      <style>{`
        /* 👇 FOOTER KI APNI STYLING YAHAN HAI 👇 */
        .logos-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 60px;
          flex-wrap: wrap;
        }
        .footer-logo {
          height: 100px;
          width: auto;
          object-fit: contain;
        }
        .footer-link { 
          font-size: 13px; 
          color: #a3afc2; 
          transition: color 0.2s; 
          text-decoration: none; 
          display: block; 
        }
        .footer-link:hover { color: #fff; }

        @media (max-width: 768px) {
          .logos-wrapper {
            gap: 12px;
            flex-wrap: nowrap;
            justify-content: space-between;
          }
          .footer-logo {
            height: auto;
            width: 23%;
            max-height: 80px;
          }
          .footer-grid {
            grid-template-columns: 1fr 1fr !important; 
            gap: 24px !important;
          }
          .footer-brand {
            grid-column: span 2; 
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 16px !important;
          }
        }
      `}</style>

      {/* ── CERTIFICATION LOGOS ── */}
      <section style={{ padding: "50px 24px 50px", background: "transparent" }}>
        <div className="logos-wrapper">
          <img src={isoLogo} alt="ISO 9001" className="footer-logo" />
          <img src={ursLogo} alt="URS" className="footer-logo" />
          <img src={iatfLogo} alt="IATF" className="footer-logo" />
          <img src={msmeLogo} alt="MSME" className="footer-logo" />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#051226", padding: "50px 24px 50px", borderTop: "1px solid #e1e6f0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 40, marginBottom: 40 }}>
            
            <div className="footer-brand" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
              <div style={{ marginBottom: 16 }}>
                <span style={{ fontWeight: 800, fontSize: 24, color: "#fff", letterSpacing: "0.05em", fontFamily: "'Syne', sans-serif" }}>FOCUSTEK</span>
              </div>
              <p style={{ fontSize: 13, color: "#a3afc2", lineHeight: 1.7, maxWidth: 320, marginBottom: 20, fontFamily: "'DM Sans', sans-serif" }}>
                Focustek Manufacturing Services Pvt. Ltd.<br />
                Plot No. 188, Sector-4, IMT Manesar,<br />
                Gurgaon, Haryana – 122050
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start", fontFamily: "'DM Sans', sans-serif" }}>
                <a href="tel:01244282696" className="footer-link">Tel: 0124-4282696</a>
                <a href="tel:+919311143461" className="footer-link">Mob: +91 9311143461</a>
                <a href="mailto:contact@focustek.co.in" className="footer-link">contact@focustek.co.in</a>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", fontFamily: "'DM Sans', sans-serif" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>Navigation</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
                {NAV_LINKS.map(l => (
                  <a key={l.label} href={l.href} className="footer-link">{l.label}</a>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", fontFamily: "'DM Sans', sans-serif" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>Company</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
                {QUICK_LINKS.map(l => (
                  <a key={l.label} href={l.href} className="footer-link">{l.label}</a>
                ))}
                <a href="https://forms.gle/LvgymhVn6VhR4vE68" target="_blank" rel="noreferrer" className="footer-link">Write an Inquiry</a>
              </div>
            </div>
            
          </div>

          <div className="footer-bottom" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, fontFamily: "'DM Sans', sans-serif" }}>
            <span style={{ fontSize: 12, color: "#6b7280" }}>© {new Date().getFullYear()} FOCUSTEK. All Rights Reserved.</span>
            <div style={{ display: "flex", gap: 16 }}>
              {["ISO 9001", "IATF 16949", "IPC-A-610"].map(c => (
                <span key={c} style={{ fontSize: 11, fontWeight: 600, color: "#6b7280" }}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}