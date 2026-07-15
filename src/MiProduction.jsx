import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimSection, WhatsAppButton } from "./SharedComponents";
import miBg from "./assets/mi.jpg";

const MI_PROCESS = [
  "SMT PCB Input",
  "Manual Insertion of Components",
  "Pre-wave Soldering Visual Inspection",
  "Wave Soldering",
  "Final Touch Up Stage",
  "Post Wave Soldering Inspection"
];

const MI_CAPACITY = [
  {
    title: "Total Capacity Minimum",
    subtitle: "(Per Month)",
    lines: [
      { name: "ROHS Line 1", value: "2138400", unit: "CPH / Month" },
      { name: "ROHS Line 2", value: "2138400", unit: "CPH / Month" }
    ]
  }
];

export default function MiProduction() {
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
        backgroundImage: `linear-gradient(180deg, rgba(5, 12, 26, 0.55) 0%, rgba(0, 44, 108, 0.7) 100%), url(${miBg})`,
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
              MI Production <span style={{ color: "#60a5fa" }}>Lines</span>
            </h1>
            <p style={{
              fontSize: 18, 
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.95)",
              margin: "0 auto",
              lineHeight: 1.6,
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
            }}>
              MI Production Line is an automated system for producing electronic circuits in which the components are installed through leads. It refers to the mounting process that inserts the leads to the drilled holes and solders the components on the board by wave soldering or manual soldering.
            </p>
          </div>
        </div>
      </section>
<section style={{ padding: "50px 24px", background: "transparent", textAlign: "center" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <AnimSection>
            <div className="badge">High Volume Output</div>
            <h2 className="section-title">Production Capacity</h2>
            <div className="divider-center"></div>
            <p style={{ fontSize: 16, color: "var(--gray)", maxWidth: 700, margin: "20px auto 40px", lineHeight: 1.75 }}>
              We operate highly efficient MI Production lines capable of delivering high-volume outputs under seamless shift rotations.
            </p>
          </AnimSection>
          
          <AnimSection delay={100}>
            <div style={{ 
              background: "#fff", 
              borderRadius: "20px", 
              padding: "40px 24px", 
              boxShadow: "0 20px 40px rgba(0, 44, 108, 0.08)",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: 24,
              border: "1px solid var(--border)",
              position: "relative",
              zIndex: 10
            }}>
              <div style={{ flex: "1 1 200px" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>2</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "var(--dark)", marginTop: 12 }}>Production Lines</div>
                <div style={{ fontSize: 14, color: "var(--gray)", marginTop: 4 }}>High-efficiency setups</div>
              </div>
              
              <div className="hide-on-mobile" style={{ width: 1, height: 60, background: "var(--border)" }}></div>

              <div style={{ flex: "1 1 200px" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>2</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "var(--dark)", marginTop: 12 }}>Operating Shifts</div>
                <div style={{ fontSize: 14, color: "var(--gray)", marginTop: 4 }}>Capable of running 2 shifts</div>
              </div>

              <div className="hide-on-mobile" style={{ width: 1, height: 60, background: "var(--border)" }}></div>

              <div style={{ flex: "1 1 200px" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>1M+</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "var(--dark)", marginTop: 12 }}>PCA / Month</div>
                <div style={{ fontSize: 14, color: "var(--gray)", marginTop: 4 }}>Based on 280mm width board</div>
              </div>
            </div>
          </AnimSection>
        </div>
      </section>
<section style={{ padding: "50px 24px", background: "transparent" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <AnimSection>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="badge">Workflow</div>
              <h2 className="section-title">Process of MI Production Line</h2>
              <div className="divider-center"></div>
            </div>
          </AnimSection>

          <AnimSection delay={100}>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
              gap: 24 
            }}>
              {MI_PROCESS.map((step, idx) => (
                <div key={idx} style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "32px 24px",
                  border: "1px solid var(--border)",
                  boxShadow: "0 4px 16px rgba(0, 44, 108, 0.03)",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 44, 108, 0.08)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 44, 108, 0.03)";
                }}>
                  <div style={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: "12px", 
                    background: "var(--blue-light)", 
                    color: "var(--blue)", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    fontSize: 20, 
                    fontWeight: 800,
                    flexShrink: 0
                  }}>
                    {idx + 1}
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "var(--dark)", lineHeight: 1.4 }}>
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </AnimSection>
        </div>
      </section>
<section style={{ padding: "50px 24px 100px", background: "transparent" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <AnimSection>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="badge">Output Specs</div>
              <h2 className="section-title">Capacity &amp; Work Condition</h2>
              <div className="divider-center"></div>
            </div>
          </AnimSection>

          <AnimSection delay={150}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
              {MI_CAPACITY.map((card, idx) => (
                <div key={idx} style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "40px",
                  border: "1px solid var(--border)",
                  boxShadow: "0 10px 30px rgba(0, 44, 108, 0.05)",
                  textAlign: "center"
                }}>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--dark)", marginBottom: 4 }}>
                    {card.title}
                  </h3>
                  <div style={{ fontSize: 14, color: "var(--accent)", fontWeight: 700, marginBottom: 32, letterSpacing: "1px", textTransform: "uppercase" }}>
                    {card.subtitle}
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {card.lines.map((line, lIdx) => (
                      <div key={lIdx} style={{ 
                        background: "rgba(0, 44, 108, 0.02)", 
                        padding: "20px", 
                        borderRadius: "12px",
                        border: "1px solid rgba(0, 44, 108, 0.05)"
                      }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--blue)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                          {line.name}
                        </div>
                        <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--dark)", fontFamily: "'Inter', sans-serif", lineHeight: 1 }}>
                          {line.value}
                        </div>
                        <div style={{ fontSize: 13, color: "var(--gray)", fontWeight: 500, marginTop: 8 }}>
                          {line.unit}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimSection>
        </div>
      </section>

      <Footer />
      <WhatsAppButton message="Hello Focustek, I am interested in your MI Production Line services." />
    </div>
  );
}
