import machinesImg from "./assets/machine_plants.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimSection, WhatsAppButton } from "./SharedComponents";

import printerMachineImg from "./assets/machines/printer_machine.jpg";
import spiImg from "./assets/machines/spi.jpg";
import npmw2Img from "./assets/machines/npmw2.jpg";
import am100Img from "./assets/machines/am100.jpg";
import hellerImg from "./assets/machines/heller.jpg";
import aoiImg from "./assets/machines/aoi.jpg";
import hanwaImg from "./assets/machines/hanwa.jpg";
import casioYcm8800Img from "./assets/machines/casio_ycm_8800.jpg";
import casioYcm7800Img from "./assets/machines/casio_ycm_7800.jpg";
import xrayImg from "./assets/machines/xray.jpg";
import testerImg from "./assets/machines/tester.jpg";
import sequencerImg from "./assets/machines/sequencer.jpg";
import axialImg from "./assets/machines/axial.jpg";
import radialImg from "./assets/machines/radial.jpg";
import universalImg from "./assets/machines/universal.jpg";
import ict4Img from "./assets/machines/ict4.jpg";
import ict2Img from "./assets/machines/ict2.jpg";
import ict3Img from "./assets/machines/ict3.jpg";
import aoInspImg from "./assets/machines/ao_insp.jpg";
import viscometerImg from "./assets/machines/viscometer.jpg";
import digitizerImg from "./assets/machines/digitizer.jpg";
import hydraulicImg from "./assets/machines/hydraulic.jpg";
import vgroveImg from "./assets/machines/vgrove.jpg";
import routerImg from "./assets/machines/router.jpg";

const SMT_PROCESS = [
  { img: printerMachineImg, title: "PRINTER MACHINE", desc: "Api-03 NOS" },
  { img: spiImg, title: "spi", desc: "Api-03 NOS" },
  { img: npmw2Img, title: "PANASONIC NPM W2", desc: "Component Mounter-02" },

  { img: am100Img, title: "panasonic am100", desc: "Component Mounter-05" },
  { img: hellerImg, title: "HELLER 1913 EXL/MK-III", desc: "-03 NOS" },
  { img: aoiImg, title: "aoi", desc: "" },
  { img: hanwaImg, title: "hanwa", desc: "" },


  { img: xrayImg, title: "X-Ray Machine", desc: "-01 NOS" },

  { img: testerImg, title: "In Circuit Tester", desc: "03 Nos (TSC)" },
];

const AUTO_INSERTION = [
  { img: sequencerImg, title: "SEQUENCER", desc: "Dynapert UCSM-G" },
  { img: axialImg, title: "AXIAL", desc: "Dynapert VCD-G" },
  { img: radialImg, title: "RADIAL", desc: "Pansert RH8" },
    { img: universalImg, title: "VCD AND SEQUENCER", desc: "" },

];

const ICT_ROOMS = [
  { img: ict4Img },
  { img: ict2Img},
  { img: ict3Img},
];

const INSPECTION_TOOLS = [
  { 
    img: aoInspImg, 
    title: "Automatic Optical Inspection", 
    desc: "MIRETECH - 2m/c" 
  },
  { 
    img: viscometerImg, 
    title: "VISCOMETER & SPI 2000", 
    desc: "BROOKFIELD Digital Viscometer, Model DV-I+. It measures fluid Viscosity in centipoises. SPI 2000 PARMI 3D Inspection Machine." 
  },
  { 
    img: digitizerImg, 
    title: "Digitizer", 
    desc: "Magnification varies from standard to precise limits, providing accurate and thorough inspection capabilities." 
  },
];

const SPECIAL_TOOLS = [
  { 
    img: hydraulicImg, 
    title: "Hydraulic Press", 
    desc: "A hydraulic press is a machine press using a hydraulic cylinder to generate a compressive force." 
  },
  { 
    img: vgroveImg, 
    title: "V-Grove Cuting Machine", 
    desc: "De-panelized to get the individual PCB (Used only without perforated or V-Grooved panels)." 
  },
  { 
    img: routerImg, 
    title: "Router Machine", 
    desc: "Precision routing and mechanical separation for complex PCB assemblies." 
  },
];



export default function MachinesPlants() {

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f9fa", color: "#051226", minHeight: "100vh" }}>


      <Navbar activePage="Machines & Plants" />
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