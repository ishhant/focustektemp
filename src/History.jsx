import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimSection, WhatsAppButton } from "./SharedComponents";
import historyBannerImg from "./assets/img1.jpg"; 

const HISTORY_DATA = [
  { year: "2007", text: "Focustek was founded in the year 2007 and works on MEAI PCBA (Maruti Omni ECU PCBA) and JNS PCBA (Maruti Alto Cluster) projects." },
  { year: "2008", text: "Added new business from HELLA INDIA AUTOMOTIVE PVT. LTD., a German company, for Actuator PCB Assembly." },
  { year: "2009", text: "Added a new business from ACME Tele power." },
  { year: "2010", text: "Focustek received the ISO/TS 16949 certificate for its electronics business." },
  { year: "2011", text: "Added new business from JNS and Hella India Automotive Pvt. Ltd." },
  { year: "2012", text: "Added new business from Phoenix Contact, and the company has also expanded its operations in the Mechanical field." },
  { year: "2013", text: "Focustek received ISO/TS Certificate for Mechanical business also." },
  { year: "2014", text: "Added new business from Hella and Padmini." },
  { year: "2015", text: "Added new business from JNS." },
  { year: "2016", text: "Added new business from JNS and VVDN." },
  { year: "2017", text: "Added new business from Nippon Audiotronics for Security controller & Siren PCBA (Maruti)." },
  { year: "2018", text: "Added new business from Hella for BLDC motors and achieved IATF 16949:2016 certification from NQA." },
  { year: "2019", text: "Added new business from Hella (Kinetic Green, Piaggio India, Piaggio Italy) and Phonix Contact." },
  { year: "2020", text: "Maruti Vendor Sustenance Audit (Tier-2) successfully completed with Green Certificate. Added new business from Minda for Hero FOB, SCU, and Mahindra." },
  { year: "2021", text: "Maruti Vendor Sustenance Audit (Tier-2) successfully completed with Green Certificate. Added new project from Minda (Bajaj FOB, SCU) and IIL." },
  { year: "2022", text: "Added a new project from Hella (2W hub Controller, Hero MFECU), Hitech robotic (ADAS PCBA) IOTFY (Home appliance) & Drone Power (EV Charger)." },
  { year: "2023", text: "Added new project from Motherson, IOTFY (Hidden Display PCBA), and IIL." },
  { year: "2024", text: "Added a new product from MARS and Motrex for the Hyundai project." },
  { year: "2025", text: "Maruti Vendor Sustenance Audit (Tier-2) successfully completed with Green Certificate. Added new business from MEAI and also new business from Nippon Audio Tronics." }
];

export default function OurHistory() {

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f9fa", color: "#051226", minHeight: "100vh" }}>
      <style>{`
        
        .timeline-wrapper {
          max-width: 900px;
          margin: 40px auto;
          display: flex;
          flex-direction: column;
        }

        .timeline-row {
          display: flex;
          align-items: stretch;
          position: relative;
        }

        .timeline-row::after {
          content: '';
          position: absolute;
          left: 130px;
          top: 0;
          bottom: 0;
          width: 4px;
          background: rgba(0, 44, 108, 0.08);
          z-index: 0;
        }
        .timeline-row.first::after { top: 50%; }
        .timeline-row.last::after { bottom: 50%; }

        .timeline-left {
          width: 130px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding-right: 32px;
          position: relative;
          z-index: 1;
        }

        .timeline-dot {
          position: absolute;
          left: 100%;
          margin-left: -6px;
          top: 50%;
          transform: translateY(-50%);
          width: 16px;
          height: 16px;
          background: #fff;
          border: 3px solid var(--accent);
          border-radius: 50%;
          transition: all 0.3s ease;
          box-shadow: 0 0 0 4px rgba(255,37,0,0.1);
        }

        .timeline-year {
          font-family: 'Syne', sans-serif;
          font-size: 26px;
          font-weight: 800;
          color: var(--blue);
        }

        .timeline-right {
          flex: 1;
          padding: 16px 0 16px 40px; 
          position: relative;
          z-index: 1;
        }

        .timeline-content {
          background: #fff;
          padding: 24px;
          border-radius: 12px;
          border: 1px solid var(--border);
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
          transition: all 0.3s ease;
          position: relative;
        }

        .timeline-content::before {
          content: '';
          position: absolute;
          left: -7px;
          top: 50%;
          margin-top: -7px;
          width: 14px;
          height: 14px;
          background: #fff;
          border-left: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          transform: rotate(45deg);
          transition: all 0.3s ease;
        }

        .timeline-row:hover .timeline-dot {
          background: var(--accent);
          transform: translateY(-50%) scale(1.3);
          box-shadow: 0 0 15px rgba(255,37,0,0.4);
        }
        
        .timeline-row:hover .timeline-content {
          transform: scale(1.02);
          border-color: var(--accent);
          box-shadow: 0 10px 30px rgba(0,44,108,0.08);
        }
        
        .timeline-row:hover .timeline-content::before {
          border-color: var(--accent);
        }

        .timeline-desc {
          color: var(--gray);
          font-size: 15px;
          line-height: 1.6;
          font-weight: 500;
        }

        @media screen and (max-width: 768px) {
          .timeline-row { flex-direction: column; }
          .timeline-row::after { left: 32px; }
          .timeline-left { width: 100%; justify-content: flex-start; padding: 20px 0 0 64px; }
          .timeline-dot { left: 34px; margin-left: -8px; top: 34px; transform: none; }
          .timeline-row:hover .timeline-dot { transform: scale(1.3); }
          .timeline-right { padding: 12px 24px 24px 64px; }
          .timeline-content::before { 
            left: 32px; 
            top: -7px; 
            margin-top: 0;
            border-left: 1px solid var(--border); 
            border-top: 1px solid var(--border); 
            border-bottom: none; 
          }
          .timeline-row:hover .timeline-content::before { border-color: var(--accent); }
        }
      `}</style>

      <Navbar activePage="Company" />

      <section style={{ 
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", 
        paddingTop: 80, 
        paddingBottom: 40, 
        backgroundImage: `linear-gradient(180deg, rgba(5, 12, 26, 0.55) 0%, rgba(0, 44, 108, 0.65) 100%), url(${historyBannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
        <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
            <div className="hero-animate" style={{ animationDelay: "0ms" }}>
            </div>
            
            <h1 className="hero-title hero-animate" style={{ animationDelay: "80ms", textShadow: "0 4px 16px rgba(0, 0, 0, 0.4)", marginTop: 16 }}>
              Our <span style={{ color: "#60a5fa" }}>History</span>
            </h1>
            
            <p className="hero-animate" style={{ animationDelay: "160ms", fontSize: 18, fontWeight: 500, color: "rgba(255, 255, 255, 0.95)", lineHeight: 1.6, marginTop: 20, maxWidth: 720, margin: "20px auto 0", textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)" }}>
              From our humble beginnings in 2007 to becoming a leading Electronic Manufacturing Service provider, explore the milestones that defined FOCUSTEK's journey.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "50px 24px 50px", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <div style={{ textAlign: "center" }}>
              <div className="badge">Milestones</div>
              <h2 className="section-title">The Journey Since 2007</h2>
              <div className="divider-center"></div>
            </div>
          </AnimSection>

          <div className="timeline-wrapper">
            {HISTORY_DATA.map((item, index) => (
              <AnimSection key={index} delay={index * 50}>
                <div className={`timeline-row ${index === 0 ? 'first' : ''} ${index === HISTORY_DATA.length - 1 ? 'last' : ''}`}>
                  <div className="timeline-left">
                    <div className="timeline-year">{item.year}</div>
                    <div className="timeline-dot"></div>
                  </div>
                  <div className="timeline-right">
                    <div className="timeline-content">
                      <p className="timeline-desc">{item.text}</p>
                    </div>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>

        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </div>
  );
}