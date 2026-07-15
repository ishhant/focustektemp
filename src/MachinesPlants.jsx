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
import aoInspImg from "./assets/machines/aoi.jpeg";
import viscometerImg from "./assets/machines/visco.jpeg";
import digitizerImg from "./assets/machines/digitizer.jpg";
import hydraulicImg from "./assets/machines/hydraulic.jpg";
import vgroveImg from "./assets/machines/vgrove.jpg";
import routerImg from "./assets/machines/router.jpg";
import stencilImg from "./assets/machines/stencil.jpeg";
import laserImg from "./assets/machines/laser.jpg";
import xrayCountingImg from "./assets/machines/xraycounting.jpeg";
import reflowImg from "./assets/machines/reflow.jpg";
import waveImg from "./assets/machines/wave.jpeg";
import o2Img from "./assets/machines/o2.jpeg";
import noncontactImg from "./assets/machines/3dm.jpg";
import dustmeterImg from "./assets/machines/dustmeter.jpg";
import solderImg from "./assets/machines/solder.jpg";
import heightImg from "./assets/machines/height.jpg";



const SMT_PROCESS = [
  { img: printerMachineImg, title: "PANASONIC SPG/NM-EJ6A PRINTER" },
  { img: npmw2Img, title: "PANASONIC NPM W2" },
  { img: am100Img, title: "PANASONIC  NM-EJM4D /AM100 MOUNTER" },
  { img: hellerImg, title: "HELLER 1910MKV-DL REFLOW" },
  { img: aoiImg, title: "KOHYOUNG ZENITH  INLINE 3D AOI" },
  { img: hanwaImg, title: "HANAWHA SM-482" },
  { img: xrayImg, title: "XAVIS X-RAY XSCAN-A100R" },
  { img: testerImg, title: "IN CIRCUIT TESTER  ST623F" },
  { img: reflowImg, title: "KIC START REFLOW PROFILER" },
  { img: o2Img, title: "O2 PROFILER" },
];

const AUTO_INSERTION = [
  { img: sequencerImg, title: "SEQUENCER", desc: "DYNAPERT UCSM-G" },
  { img: axialImg, title: "AXIAL", desc: "DYNAPERT VCD-G" },
  { img: radialImg, title: "RADIAL", desc: "PANSERT RH8" },
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
    title: "KOYHOUNG ZENITH 3D AOI", 
    desc: "" 
  },
  { 
    img: viscometerImg, 
    title: "MALCOM PM-2A VISCOMETER ", 
    desc: "" 
  },
  { 
    img: digitizerImg, 
    title: "FUJI DT III DIGITIZER", 
    desc: "" 
  },
  { 
    img: waveImg, 
    title: "WAVE CHECKER", 
    desc: "" 
  },
];

const SPECIAL_TOOLS = [
  { 
    img: hydraulicImg, 
    title: "HYDRAULIC PRESS", 
    desc: "" 
  },
  { 
    img: routerImg, 
    title: "ROUTER MACHINE", 
    desc: "" 
  },
  { 
    img: stencilImg, 
    title: "STENCIL CLEANER",
  },
  { 
    img: laserImg, 
    title: "LASER MARKING/QR MACHINE",
  },
  { 
    img: xrayCountingImg, 
    title: "X-RAY COMPONENT COUNTING MACHINE",
  },
  { 
    img: noncontactImg, 
    title: "NON CONTACT 3D MEASURING SYSTEM",
  },
  { 
    img: dustmeterImg, 
    title: "DUST METER XTECH VPC300",
  },
  { 
    img: spiImg, 
    title: "KOHYOUNG KY8030-2 3D SPI",
  },
  { 
    img: solderImg, 
    title: "SOLDER PASTE THAWING MACHINE",
  },
  { 
    img: heightImg, 
    title: "MITUTOYO HEIGHT GAGE",
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

      {/* New Plant Announcement */}
      <section style={{ padding: "60px 24px 0", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <div style={{ 
              background: "linear-gradient(135deg, var(--blue) 0%, #0a2558 100%)", 
              borderRadius: 20, 
              padding: "48px 32px", 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center", 
              textAlign: "center", 
              color: "#fff",
              boxShadow: "0 20px 50px rgba(0, 44, 108, 0.15)",
              border: "1px solid rgba(255,255,255,0.1)",
              position: "relative",
              overflow: "hidden"
            }}>
              <div style={{ position: "absolute", top: -80, right: -50, width: 250, height: 250, background: "rgba(255,255,255,0.03)", borderRadius: "50%" }}></div>
              <div style={{ position: "absolute", bottom: -50, left: -80, width: 200, height: 200, background: "var(--accent)", opacity: 0.15, borderRadius: "50%", filter: "blur(20px)" }}></div>
              
              <div className="badge" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(8px)", marginBottom: 16 }}>Expansion Update</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>
                New Plant <span style={{ color: "#60a5fa" }}>Under Construction</span>
              </h2>
              <p style={{ fontSize: "1.15rem", maxWidth: 650, color: "rgba(255,255,255,0.9)", lineHeight: 1.6 }}>
                We are rapidly expanding our manufacturing footprint! A brand new, highly automated Focustek facility is currently under construction in <strong>Jhajjar, Haryana</strong>, bringing even more capacity and advanced technology to our operations.
              </p>
            </div>
          </AnimSection>
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