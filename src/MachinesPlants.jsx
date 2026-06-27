import machinesImg from "./assets/machine_plants.jpg"; // Re-using asset from Home
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimSection, WhatsAppButton } from "./SharedComponents";

// Data Extracted from Screenshots
const SMT_PROCESS = [
  { img: "/src/assets/machines/printer_machine.png", title: "PRINTER MACHINE", desc: "Api-03 NOS" },
  { img: "/src/assets/machines/spi.jpg", title: "spi", desc: "Api-03 NOS" },
  { img: "/src/assets/machines/npmw2.jpg", title: "PANASONIC NPM W2", desc: "Component Mounter-02" },

  { img: "/src/assets/machines/am100.jpg", title: "panasonic am100", desc: "Component Mounter-05" },
  { img: "/src/assets/machines/heller.jpg", title: "HELLER 1913 EXL/MK-III", desc: "-03 NOS" },
  { img: "/src/assets/machines/aoi.jpg", title: "aoi", desc: "" },
  { img: "/src/assets/machines/hanwa.jpg", title: "hanwa", desc: "" },

  
  //{ img: "/src/assets/machines/casio_ycm_8800.jpg", title: "CASIO YCM-8800V", desc: "" },
  //{ img: "/src/assets/machines/casio_ycm_7800.jpg", title: "CASIO YCM-7800", desc: "Component Mounter-05" },
  { img: "/src/assets/machines/xray.jpg", title: "X-Ray Machine", desc: "-01 NOS" },
  //{ img: "/src/assets/machines/aoi.jpg", title: "AOI (Miretec AOI 03 Nos)", desc: "" },
  { img: "/src/assets/machines/tester.jpg", title: "In Circuit Tester", desc: "03 Nos (TSC)" },
];

const AUTO_INSERTION = [
  { img: "/src/assets/machines/sequencer.jpg", title: "SEQUENCER", desc: "Dynapert UCSM-G" },
  { img: "/src/assets/machines/axial.jpg", title: "AXIAL", desc: "Dynapert VCD-G" },
  { img: "/src/assets/machines/radial.jpg", title: "RADIAL", desc: "Pansert RH8" },
    { img: "/src/assets/machines/universal.jpg", title: "VCD AND SEQUENCER", desc: "" },

];

const ICT_ROOMS = [
  { img: "/src/assets/machines/ict4.jpg" },
  { img: "/src/assets/machines/ict2.jpg"},
  { img: "/src/assets/machines/ict3.jpg"},
];

const INSPECTION_TOOLS = [
  { 
    img: "/src/assets/machines/ao_insp.jpg", 
    title: "Automatic Optical Inspection", 
    desc: "MIRETECH - 2m/c" 
  },
  { 
    img: "/src/assets/machines/viscometer.jpg", 
    title: "VISCOMETER & SPI 2000", 
    desc: "BROOKFIELD Digital Viscometer, Model DV-I+. It measures fluid Viscosity in centipoises. SPI 2000 PARMI 3D Inspection Machine." 
  },
  { 
    img: "/src/assets/machines/digitizer.jpg", 
    title: "Digitizer", 
    desc: "Magnification varies from standard to precise limits, providing accurate and thorough inspection capabilities." 
  },
];

const SPECIAL_TOOLS = [
  { 
    img: "/src/assets/machines/hydraulic.jpg", 
    title: "Hydraulic Press", 
    desc: "A hydraulic press is a machine press using a hydraulic cylinder to generate a compressive force." 
  },
  { 
    img: "/src/assets/machines/vgrove.jpg", 
    title: "V-Grove Cuting Machine", 
    desc: "De-panelized to get the individual PCB (Used only without perforated or V-Grooved panels)." 
  },
  { 
    img: "/src/assets/machines/router.jpg", 
    title: "Router Machine", 
    desc: "Precision routing and mechanical separation for complex PCB assemblies." 
  },
];



export default function MachinesPlants() {

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f9fa", color: "#051226", minHeight: "100vh" }}>


      <Navbar activePage="Machines & Plants" />

{/* ── FULL-SCREEN HERO SECTION ── */}
      <section style={{ 
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", 
        paddingTop: 80, 
        paddingBottom: 40, 
        backgroundImage: `linear-gradient(180deg, rgba(5, 12, 26, 0.55) 0%, rgba(0, 44, 108, 0.65) 100%), url(${machinesImg})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
        <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>          <div style={{ textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
            <div className="hero-animate" style={{ animationDelay: "0ms" }}>
            </div>
            
            <h1 className="hero-title hero-animate" style={{ animationDelay: "80ms", textShadow: "0 4px 16px rgba(0, 0, 0, 0.4)" }}>
              FOCUSTEK's Manufacturing <span style={{ color: "#60a5fa" }}>Facilities</span>
            </h1>
            
            <p className="hero-animate" style={{ animationDelay: "160ms", fontSize: 18, fontWeight: 500, color: "rgba(255, 255, 255, 0.95)", lineHeight: 1.6, marginTop: 20, margin: "20px auto 0", textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)" }}>
              FOCUSTEK owns automated Machines and Plants of SMT Machines, an Auto Insertion Unit, ICT Rooms, Inspection Tools, and Special Tools for Electronic PCB Assembly, MI Production Line, Mechanical Production, and SMT Production.
            </p>
          </div>
        </div>
      </section>

      {/* ── SMT PROCESS ── */}
      <section style={{ padding: "50px 24px 50px", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <div className="badge">Core Capabilities</div>
            <h2 className="section-title">SMT PROCESS</h2>
            <div className="divider"></div>
          </AnimSection>
          
          <div className="grid-3" style={{ marginTop: 40 }}>
            {SMT_PROCESS.map((item, i) => (
              <AnimSection key={i} delay={i * 80}>
                <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                  <div style={{ 
                    width: "100%", aspectRatio: "4 / 3", borderRadius: "12px", overflow: "hidden", 
                    background: "var(--blue-light)", marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                  </div>
                  <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--dark)", marginBottom: 6 }}>
                    {item.title}
                  </h3>
                  {item.desc && (
                    <p style={{ fontSize: 14, color: "var(--gray)", lineHeight: 1.65 }}>{item.desc}</p>
                  )}
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUTOMATIC INSERTION PROCESS ── */}
      <section style={{ padding: "50px 24px", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <div className="badge">MI Production Line</div>
            <h2 className="section-title">Automatic Insertion Process</h2>
            <div className="divider"></div>
            <p style={{ fontSize: 15, color: "var(--gray)", lineHeight: 1.75, maxWidth: 900, marginBottom: 40 }}>
              Earlier there was the manual insertion of all components in the MI Production Line. An auto insertion line has been installed to increase productivity and to improve product quality.
            </p>
          </AnimSection>
          
          <div className="grid-3">
            {AUTO_INSERTION.map((item, i) => (
              <AnimSection key={i} delay={i * 80}>
                <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                  <div style={{ 
                    width: "100%", aspectRatio: "4 / 3", borderRadius: "12px", overflow: "hidden", 
                    background: "var(--blue-light)", marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                  </div>
                  <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--dark)", marginBottom: 6 }}>
                    {item.title}
                  </h3>
                  {item.desc && (
                    <p style={{ fontSize: 14, color: "var(--gray)", lineHeight: 1.65 }}>{item.desc}</p>
                  )}
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ICT ROOMS ── */}
      <section style={{ padding: "50px 24px", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <div className="badge">Quality Assurance</div>
            <h2 className="section-title">ICT Rooms</h2>
            <div className="divider"></div>
            <p style={{ fontSize: 15, color: "var(--gray)", lineHeight: 1.75, maxWidth: 900, marginBottom: 40 }}>
              <strong>In-Circuit Tester (TSC):</strong> Electrical inspection through ICT (In-Circuit Tester) to ensure absolute product quality and reliability.
            </p>
          </AnimSection>
          
           <div className="grid-3">
            {ICT_ROOMS.map((item, i) => (
              <AnimSection key={i} delay={i * 80}>
                <div style={{ 
                  width: "100%", 
                  aspectRatio: "4 / 3", 
                  borderRadius: "16px", 
                  overflow: "hidden", 
                  border: "1px solid var(--border)",
                  boxShadow: "0 12px 40px rgba(0,44,108,0.08)",
                  background: "var(--blue-light)"
                }}>
                  <img 
                    src={item.img} 
                    alt={`ICT Room ${i + 1}`} 
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover", 
                      objectPosition: "center",
                      transition: "transform 0.3s ease" 
                    }} 
                    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.04)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                  />
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSPECTION TOOLS ── */}
      <section style={{ padding: "50px 24px", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <div className="badge">Testing & Verification</div>
            <h2 className="section-title">FOCUSTEK's Inspection Tools</h2>
            <div className="divider"></div>
            <p style={{ fontSize: 15, color: "var(--gray)", lineHeight: 1.75, maxWidth: 1000, marginBottom: 40 }}>
              While the power is off, visual inspection and automated optical inspection occur. JEDEC guidelines for PCB component placement, soldering, and inspection are commonly used to maintain quality control in this stage of PCB manufacturing. Analog signature analysis and power-off testing are also utilized. While the power is on, in-circuit tests where physical measurements (for example, voltage) can be done. Functional tests ensure the PCB does exactly what it has been designed to do.
            </p>
          </AnimSection>
          
          <div className="grid-3">
            {INSPECTION_TOOLS.map((item, i) => (
              <AnimSection key={i} delay={i * 80}>
                <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                  <div style={{ 
                    width: "100%", aspectRatio: "4 / 3", borderRadius: "12px", overflow: "hidden", 
                    background: "var(--blue-light)", marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                  </div>
                  <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--dark)", marginBottom: 6 }}>
                    {item.title}
                  </h3>
                  {item.desc && (
                    <p style={{ fontSize: 14, color: "var(--gray)", lineHeight: 1.65 }}>{item.desc}</p>
                  )}
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIAL TOOLS ── */}
      <section style={{ padding: "50px 24px 50px", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <div className="badge">Advanced Machinery</div>
            <h2 className="section-title">FOCUSTEK's Special Tools</h2>
            <div className="divider"></div>
          </AnimSection>
          
          <div className="grid-3" style={{ marginTop: 40 }}>
            {SPECIAL_TOOLS.map((item, i) => (
              <AnimSection key={i} delay={i * 80}>
                <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                  <div style={{ 
                    width: "100%", aspectRatio: "4 / 3", borderRadius: "12px", overflow: "hidden", 
                    background: "var(--blue-light)", marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                  </div>
                  <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--dark)", marginBottom: 6 }}>
                    {item.title}
                  </h3>
                  {item.desc && (
                    <p style={{ fontSize: 14, color: "var(--gray)", lineHeight: 1.65 }}>{item.desc}</p>
                  )}
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppButton message="Hello Focustek, I have an inquiry regarding Machines and Plants." />
    </div>
  );
}