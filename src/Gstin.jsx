import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimSection, WhatsAppButton } from "./SharedComponents";
import gstinBg from "./assets/gstin.jpg";

export default function Gstin() {

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f9fa", color: "#051226", minHeight: "100vh" }}>
      <Navbar activePage="Company" />
<section style={{ 
        minHeight: "100vh", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 80, 
        paddingBottom: 40,
        backgroundImage: `linear-gradient(180deg, rgba(5, 12, 26, 0.55) 0%, rgba(0, 44, 108, 0.7) 100%), url(${gstinBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%" }}>
          <div className="hero-animate" style={{ maxWidth: 800, margin: "0 auto" }}>
            <h1 style={{ 
              fontFamily: "'DM Sans', sans-serif", 
              fontSize: "clamp(2.5rem, 5vw, 3.8rem)", 
              fontWeight: 800, 
              color: "#fff",
              marginBottom: 20,
              textShadow: "0 4px 16px rgba(0, 0, 0, 0.4)"
            }}>
              Official Registrations
            </h1>
            <p style={{
              fontSize: 18, 
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.95)",
              margin: "0 auto",
              lineHeight: 1.6,
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
            }}>
              Government of India & Government of Haryana compliance details, tax registrations, and global trading codes for FOCUSTEK.
            </p>
          </div>
        </div>
      </section>
<section style={{ padding: "50px 24px", background: "transparent", textAlign: "center" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <AnimSection>
            <div className="badge">Legal & Compliance</div>
            <h2 className="section-title" style={{ marginBottom: 24 }}>Tax & Business Registration</h2>
            <div className="divider-center"></div>
            <p style={{ fontSize: 17, color: "var(--gray)", lineHeight: 1.8, marginBottom: 20 }}>
              Focustek operates with complete transparency and compliance under the legal frameworks of the Government of India and the Government of Haryana. Below are our official registration details.
            </p>
          </AnimSection>
        </div>
      </section>
<section style={{ padding: "0 24px 50px", background: "transparent" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <AnimSection delay={50}>
            <div className="card" style={{ padding: 40, borderTop: "4px solid var(--blue)" }}>
              <div style={{ textAlign: "center", marginBottom: 40 }}>
                <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "var(--dark)", marginBottom: 8 }}>
                  Government of India And Government of Haryana Form GST REG-25
                </h3>
                <div style={{ fontSize: "1.2rem", color: "var(--gray)", fontWeight: 500 }}>
                  Certificate of Provisional Registration
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
                <div>
                  <div style={{ marginBottom: 24 }}>
                    <span style={{ display: "block", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--blue)", marginBottom: 4, fontWeight: 700 }}>GSTIN</span>
                    <strong style={{ fontSize: "1.1rem", color: "var(--dark)" }}>06AAACR0667B1ZU</strong>
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <span style={{ display: "block", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--blue)", marginBottom: 4, fontWeight: 700 }}>PAN</span>
                    <strong style={{ fontSize: "1.1rem", color: "var(--dark)" }}>AAACR0667B</strong>
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <span style={{ display: "block", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--blue)", marginBottom: 4, fontWeight: 700 }}>LEGAL NAME</span>
                    <strong style={{ fontSize: "1.1rem", color: "var(--dark)", lineHeight: 1.4 }}>FOCUSTEK MANUFACTURING SERVICES PRIVATE LIMITED</strong>
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <span style={{ display: "block", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--blue)", marginBottom: 4, fontWeight: 700 }}>ADDRESS</span>
                    <strong style={{ fontSize: "1rem", color: "var(--dark)", lineHeight: 1.5 }}>Plot No. 188, Sector-4, IMT Manesar, Gurgaram, Haryana-122050</strong>
                  </div>
                </div>

                <div>
                  <div style={{ marginBottom: 24 }}>
                    <span style={{ display: "block", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--blue)", marginBottom: 4, fontWeight: 700 }}>TRADE NAME</span>
                    <strong style={{ fontSize: "1.1rem", color: "var(--dark)", lineHeight: 1.4 }}>FocusTek Manufacturing Services Private Limited</strong>
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <span style={{ display: "block", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--blue)", marginBottom: 4, fontWeight: 700 }}>TIN</span>
                    <strong style={{ fontSize: "1.1rem", color: "var(--dark)" }}>06611826663</strong>
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <span style={{ display: "block", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--blue)", marginBottom: 4, fontWeight: 700 }}>Importer / Exporter Code Number</span>
                    <strong style={{ fontSize: "1.1rem", color: "var(--dark)" }}>0506085651</strong>
                  </div>
                </div>
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      <Footer />

      <WhatsAppButton message="Hello Focustek, I have an inquiry regarding business registrations and compliance." />

    </div>
  );
}
