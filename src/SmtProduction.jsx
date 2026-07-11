import React, { useState } from "react";
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
  { line: "SMT LINE 1", capacity: "34,320,000", suffix: "CPH / Month" },
  { line: "SMT LINE 2", capacity: "25,740,000", suffix: "CPH / Month" },
  { line: "SMT LINE 3", capacity: "34,320,000", suffix: "CPH / Month" },
  { line: "SMT LINE 4", capacity: "34,320,000", suffix: "CPH / Month" },
  { line: "SMT LINE 5", capacity: "22,880,000", suffix: "CPH / Month" },
];

const SMT_CONFIGURATIONS = [
  {
    title: "SMT Line 1",
    machines: [
      "PCB LOADER & PCB CLEANER",
      "PANASONIC SPG",
      "KOH YOUNG KY8030-2 -SPI",
      "PANASONIC NPM-D3",
      "PANASONIC NPM-W2",
      "PANASONIC AM100",
      "HELLER 1910 MK V-DL",
      "KOH YOUNG ZENITH 3D AOI"
    ]
  },
  {
    title: "SMT Line 2",
    machines: [
      "PCB LOADER & PCB CLEANER",
      "DEK GALAXY APi",
      "KOH YOUNG KY-8030-NOVA",
      "PANASONIC NPM-W2",
      "CASIO YCM 7800 VX",
      "HANWHA SM482 PLUS",
      "HELLER 1913 MK-III",
      "KOH YOUNG ZENITH 3D AOI"
    ]
  },
  {
    title: "SMT Line 3",
    machines: [
      "PCB LOADER & PCB CLEANER",
      "PANASONIC SPG",
      "KOH YOUNG KY8030-2 -SPI",
      "PANASONIC NPM-W2",
      "PANASONIC NPM-W2",
      "PANASONIC AM100",
      "HELLER 1913 MK V-E",
      "KOH YOUNG ZENITH UHS 3D AOI"
    ]
  },
  {
    title: "SMT Line 4",
    machines: [
      "PCB LOADER & PCB CLEANER",
      "DEK GALAXY APi",
      "KOH YOUNG KY8030 -3-SPI",
      "PANASONIC NPM-D3",
      "PANASONIC NPM-W2",
      "PANASONIC NPM-WX",
      "HELLER 1913 EXL",
      "KOH YOUNG ZENITH 3D AOI"
    ]
  },
  {
    title: "SMT Line 5",
    machines: [
      "PCB LOADER",
      "DEK GALAXY APiv",
      "KOH YOUNG KY8030-2 -SPI",
      "HANWHA SM471 PLUS",
      "CASIO YCM 7800 VX-II",
      "CASIO YCM 8800 VX",
      "HELLER 1809 MK-III",
      "MIRTEC MV-3L 2D AOI"
    ]
  }
];

const MACHINE_DESCRIPTIONS = [
  "PCB LOADER",
  "PASTE PRINTER",
  "SOLDER PASTE INSPECTION",
  "PICK & PLACE CHIP SHOOTER",
  "MULTI MOUNTER",
  "MULTI MOUNTER",
  "REFLOW SOLDERING",
  "AOI"
];

export default function SmtProduction() {
  const [activeLine, setActiveLine] = useState(0);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f9fa", color: "#051226", minHeight: "100vh" }}>
      <Navbar activePage="Business" />
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
<section style={{ padding: "50px 24px", background: "transparent", textAlign: "center" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <div className="badge">High Volume Output</div>
            <h2 className="section-title">Production Capacity</h2>
            <div className="divider-center"></div>
            <p style={{ fontSize: 16, color: "var(--gray)", maxWidth: 700, margin: "0 auto 40px", lineHeight: 1.75 }}>
              Having 5 fully automated SMT lines capable of running 2 shifts seamlessly. Below is the total components-per-month capacity for each line.
            </p>
          </AnimSection>

          <AnimSection delay={100}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}>
              {SMT_CAPACITIES.map((cap, idx) => (
                <div key={idx} style={{
                  padding: "50px 24px",
                  background: "var(--blue-light)",
                  borderRadius: "16px",
                  border: "1px solid rgba(0, 44, 108, 0.05)",
                  boxShadow: "0 4px 20px rgba(0, 44, 108, 0.03)",
                  width: "calc((100% - 48px) / 3)"
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
<section style={{ padding: "50px 24px", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="badge">Line Setup</div>
              <h2 className="section-title">Machine Configurations</h2>
              <div className="divider-center"></div>
            </div>
          </AnimSection>

          <AnimSection>
            <div style={{
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 10px 40px rgba(0, 44, 108, 0.08)",
              border: "1px solid var(--border)",
              overflow: "hidden",
              overflowX: "auto"
            }}>
              <table style={{ width: "100%", minWidth: 1000, borderCollapse: "collapse", textAlign: "left" }}>
                <thead>
                  <tr style={{ background: "var(--blue)", color: "#fff" }}>
                    <th style={{ padding: "20px 24px", fontSize: 13, fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase", borderRight: "1px solid rgba(255,255,255,0.1)" }}>
                      DESCRIPTION
                    </th>
                    {SMT_CONFIGURATIONS.map((line, idx) => (
                      <th key={idx} style={{ padding: "20px 24px", fontSize: 13, fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase", borderRight: idx === SMT_CONFIGURATIONS.length - 1 ? "none" : "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>
                        {line.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {MACHINE_DESCRIPTIONS.map((desc, rowIdx) => (
                    <tr key={rowIdx} style={{ borderBottom: rowIdx === MACHINE_DESCRIPTIONS.length - 1 ? "none" : "1px solid var(--border)", background: rowIdx % 2 === 0 ? "#fff" : "rgba(0, 44, 108, 0.02)" }}>
                      <td style={{ padding: "16px 24px", fontSize: 13, fontWeight: 800, color: "var(--dark)", borderRight: "1px solid var(--border)", background: "rgba(0, 44, 108, 0.04)" }}>
                        {desc}
                      </td>
                      {SMT_CONFIGURATIONS.map((line, colIdx) => (
                        <td key={colIdx} style={{ padding: "16px 24px", fontSize: 13, fontWeight: 600, color: "var(--gray)", textAlign: "center", borderRight: colIdx === SMT_CONFIGURATIONS.length - 1 ? "none" : "1px solid var(--border)" }}>
                          {line.machines[rowIdx] || "-"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimSection>
        </div>
      </section>
<section style={{ padding: "50px 24px", background: "transparent", textAlign: "center" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <AnimSection>
            <div className="badge">Specialized Technology</div>
            <h2 className="section-title">BGA Assembly Capability</h2>
            <div className="divider-center"></div>
            <p style={{ fontSize: 17, color: "var(--gray)", lineHeight: 1.8, marginBottom: 32 }}>
              FOCUSTEK owns many professional engineers and high-end machines to provide BGA (Ball Grid Array) packages with high quality and extreme precision. Turnkey service for BGA assembly and other complex assembly methods is readily available.
            </p>
            
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--dark)", marginBottom: 16 }}>Alpine Systems, Nippon, Hi-Tech Robotics, Samtel Ltd.</h3>
            
            <div style={{ margin: "40px auto 0", borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", border: "1px solid var(--border)" }}>
              <img src={img1} alt="BGA Assembly PCB" style={{ width: "100%", display: "block" }} />
            </div>
          </AnimSection>
        </div>
      </section>
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
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: 13 }}>
                <thead>
                  <tr style={{ background: "var(--blue-light)", borderBottom: "2px solid var(--blue)" }}>
                    <th style={{ padding: "7px 16px", color: "var(--blue)", fontWeight: 700, width: "10%", fontSize: 13 }}>S/N</th>
                    <th style={{ padding: "7px 16px", color: "var(--blue)", fontWeight: 700, width: "45%", fontSize: 13 }}>Item</th>
                    <th style={{ padding: "7px 16px", color: "var(--blue)", fontWeight: 700, width: "45%", fontSize: 13 }}>Size</th>
                  </tr>
                </thead>
                <tbody>
                  {TECHNICAL_CAPABILITIES.map((cap, idx) => (
                    <tr key={idx} style={{ 
                      borderBottom: "1px solid var(--border)",
                      background: idx % 2 === 0 ? "transparent" : "rgba(0, 44, 108, 0.015)"
                    }}>
                      <td style={{ padding: "7px 16px", fontWeight: 600, color: "var(--dark)", fontSize: 13 }}>{idx + 1}</td>
                      <td style={{ padding: "7px 16px", color: "var(--gray)", fontWeight: 500, fontSize: 13 }}>{cap.item}</td>
                      <td style={{ padding: "7px 16px", color: "var(--dark)", fontWeight: 600, fontSize: 13 }}>{cap.size}</td>
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
