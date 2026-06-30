import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimSection, WhatsAppButton } from "./SharedComponents";
import smtBg from "./assets/smt.jpg";
import img1 from "./assets/st.jpg";

const TECHNICAL_CAPABILITIES = [
  { item: "Smallest SMT Component", size: "L- 0.6mm, W- 0.3mm" },
  { item: "Largest SMT IC Component", size: "L-120mm, W-90mm, L-28mm" },
  { item: "Thinnest SMT Chip Component", size: "0.1mm" },
  { item: "Thinnest PCB Board", size: "0.3mm" },
  { item: "Thickest PCB Board", size: "5mm" },
  { item: "Finest QFB Pitch", size: "0.3mm" },
  { item: "Materials", size: "FR2, FR4, FR5, FR10" },
  { item: "PCA Size", size: "50x50mm to 750x550mm" },
  { item: "Connector", size: "L-120mm, W-90mm, L-28mm" },
  { item: "Component Height", size: "H. max - 28mm" },
  { item: "Component Accuracy", size: "0.03mm QFP" },
  { item: "Taping", size: "Tape 8 to 72mm" },
  { item: "Tray", size: "Max 20" },
  { item: "Stick", size: "Front Rear max-5" },
  { item: "Max. Speed", size: "60K CPH" },
];

const SMT_CAPACITIES = [
  { line: "SMT LINE 1", capacity: "23,760,000", suffix: "CPH / Month" },
  { line: "SMT LINE 2", capacity: "23,760,000", suffix: "CPH / Month" },
  { line: "SMT LINE 3", capacity: "25,000,000", suffix: "CPH / Month" },
  { line: "SMT LINE 4", capacity: "594,000", suffix: "CPH / Month" },
];

const SMT_CONFIGURATIONS = [
  {
    title: "SMT Line 1",
    machines: [
      "PCB LOADER",
      "DEK GALAXY APi",
      "PANASONIC NPM-W2",
      "CASIO 7800 VX-II",
      "CASIO 7800 YCM VX",
      "HELLER 1809 MKV",
      "UNLOADER",
      "MIRTEC AOI (MV-3L)"
    ]
  },
  {
    title: "SMT Line 2",
    machines: [
      "PCB LOADER",
      "PCB CLEANER",
      "DEK GALAXY APi",
      "KOH YOUNG KY8030L-SPI",
      "PANASONIC NPM-W2",
      "CASIO 7800 VX",
      "CASIO 8800 V",
      "HELLER 1913 MK-III",
      "UNLOADER",
      "MIRTEC AOI (MV-3L)"
    ]
  },
  {
    title: "SMT Line 3",
    machines: [
      "PCB LOADER",
      "DEK HORIZON APix",
      "FUJI CP732E",
      "FUJI CP732E",
      "CASIO YCM8800VX",
      "HELLER 1913 EXL",
      "UNLOADER",
      "SAKI AOI (BF-18D-P40) – 2 Nos."
    ]
  },
  {
    title: "SMT Line 4",
    machines: [
      "PCB LOADER",
      "DEK HORIZON 02i",
      "CASIO YCM 7800VX",
      "CASIO YCM 8800VX",
      "CASIO YCM 8800VX",
      "HELLER 1809 EXL",
      "UNLOADER",
      "SAKI AOI (BF-18D-P40)"
    ]
  }
];

export default function SmtProduction() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f9fa", color: "#051226", minHeight: "100vh" }}>
      <Navbar activePage="Business" />

      {/* ── HERO BANNER ── */}
      <section style={{ 
        minHeight: "100vh", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 80, 
        paddingBottom: 40,
        backgroundImage: `linear-gradient(180deg, rgba(5, 12, 26, 0.55) 0%, rgba(0, 44, 108, 0.7) 100%), url(${smtBg})`,
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
              SMT Production Lines
            </h1>
            <p style={{
              fontSize: 18, 
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.95)",
              margin: "0 auto",
              lineHeight: 1.6,
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
            }}>
              The Surface Mount Technology (SMT) product line is an automated system that produces products by directly mounting electrical components on the surface of a printed circuit board (PCB).
            </p>
          </div>
        </div>
      </section>

      {/* ── CAPACITY SECTION ── */}
      <section style={{ padding: "50px 24px", background: "transparent", textAlign: "center" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <div className="badge">High Volume Output</div>
            <h2 className="section-title">Production Capacity</h2>
            <div className="divider-center"></div>
            <p style={{ fontSize: 16, color: "var(--gray)", maxWidth: 700, margin: "0 auto 40px", lineHeight: 1.75 }}>
              Having 4 fully automated SMT lines capable of running 2 shifts seamlessly. Below is the total components-per-month capacity for each line.
            </p>
          </AnimSection>

          <AnimSection delay={100}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
              {SMT_CAPACITIES.map((cap, idx) => (
                <div key={idx} style={{
                  padding: "50px 24px",
                  background: "var(--blue-light)",
                  borderRadius: "16px",
                  border: "1px solid rgba(0, 44, 108, 0.05)",
                  boxShadow: "0 4px 20px rgba(0, 44, 108, 0.03)"
                }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--blue)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 12 }}>
                    {cap.line}
                  </div>
                  <div style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--dark)", marginBottom: 4, fontFamily: "'Inter', sans-serif" }}>
                    {cap.capacity}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--gray)", fontWeight: 500 }}>
                    {cap.suffix}
                  </div>
                </div>
              ))}
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ── MACHINE CONFIGURATIONS ── */}
      <section style={{ padding: "50px 24px", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="badge">Line Setup</div>
              <h2 className="section-title">Machine Configurations</h2>
              <div className="divider-center"></div>
            </div>
          </AnimSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
            {SMT_CONFIGURATIONS.map((line, idx) => (
              <AnimSection key={idx} delay={idx * 100}>
                <div style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "32px",
                  boxShadow: "0 10px 30px rgba(0, 44, 108, 0.05)",
                  height: "100%",
                  border: "1px solid var(--border)",
                  position: "relative",
                  overflow: "hidden"
                }}>
                  {/* Decorative top border */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "var(--accent)" }}></div>
                  
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--dark)", marginBottom: 24, textAlign: "center" }}>
                    {line.title}
                  </h3>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {line.machines.map((machine, mIdx) => (
                      <div key={mIdx} style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "12px 16px",
                        background: mIdx % 2 === 0 ? "rgba(0, 44, 108, 0.02)" : "transparent",
                        borderRadius: "8px",
                        fontSize: 14,
                        fontWeight: 600,
                        color: "var(--dark)"
                      }}>
                        <div style={{ 
                          width: 24, height: 24, borderRadius: "50%", 
                          background: "var(--blue-light)", color: "var(--blue)", 
                          display: "flex", alignItems: "center", justifyContent: "center", 
                          flexShrink: 0, fontSize: 11, fontWeight: 800 
                        }}>
                          {mIdx + 1}
                        </div>
                        {machine}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── BGA CAPABILITY ── */}
      <section style={{ padding: "50px 24px", background: "transparent", textAlign: "center" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <AnimSection>
            <div className="badge">Specialized Technology</div>
            <h2 className="section-title">BGA Assembly Capability</h2>
            <div className="divider-center"></div>
            <p style={{ fontSize: 17, color: "var(--gray)", lineHeight: 1.8, marginBottom: 32 }}>
              FOCUSTEK owns many professional engineers and high-end machines to provide BGA (Ball Grid Array) packages with high quality and extreme precision. Turnkey service for BGA assembly and other complex assembly methods is readily available.
            </p>
            
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--dark)", marginBottom: 16 }}>ST Micro Electronics, Transwitch, Samtel Ltd., UT Starcom, Bharat Electronics Ltd., VNL</h3>
            
            <div style={{ margin: "40px auto 0", borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", border: "1px solid var(--border)" }}>
              <img src={img1} alt="BGA Assembly PCB" style={{ width: "100%", display: "block" }} />
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ── TECHNICAL CAPABILITIES TABLE ── */}
      <section style={{ padding: "50px 24px", background: "transparent" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <AnimSection>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="badge">Precision Processing</div>
              <h2 className="section-title">Technical Capabilities</h2>
              <div className="divider-center"></div>
              <p style={{ fontSize: 16, color: "var(--gray)", maxWidth: 700, margin: "20px auto 0", lineHeight: 1.75 }}>
                Our capabilities to process different components of different sizes in our Production line.
              </p>
            </div>
          </AnimSection>

          <AnimSection delay={150}>
            <div style={{ background: "#fff", borderRadius: "16px", border: "1px solid var(--border)", overflow: "hidden", boxShadow: "0 10px 30px rgba(0, 44, 108, 0.04)" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead>
                  <tr style={{ background: "var(--blue-light)", borderBottom: "2px solid var(--blue)" }}>
                    <th style={{ padding: "16px 24px", color: "var(--blue)", fontWeight: 700, width: "10%" }}>S/N</th>
                    <th style={{ padding: "16px 24px", color: "var(--blue)", fontWeight: 700, width: "45%" }}>Item</th>
                    <th style={{ padding: "16px 24px", color: "var(--blue)", fontWeight: 700, width: "45%" }}>Size</th>
                  </tr>
                </thead>
                <tbody>
                  {TECHNICAL_CAPABILITIES.map((cap, idx) => (
                    <tr key={idx} style={{ 
                      borderBottom: "1px solid var(--border)",
                      background: idx % 2 === 0 ? "transparent" : "rgba(0, 44, 108, 0.015)"
                    }}>
                      <td style={{ padding: "16px 24px", fontWeight: 600, color: "var(--dark)" }}>{idx + 1}</td>
                      <td style={{ padding: "16px 24px", color: "var(--gray)", fontWeight: 500 }}>{cap.item}</td>
                      <td style={{ padding: "16px 24px", color: "var(--dark)", fontWeight: 600 }}>{cap.size}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimSection>
        </div>
      </section>

      <Footer />
      <WhatsAppButton message="Hello Focustek, I have an inquiry regarding your SMT Production capabilities." />
    </div>
  );
}
