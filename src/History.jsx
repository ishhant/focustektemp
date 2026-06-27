import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimSection, WhatsAppButton } from "./SharedComponents";
import historyBannerImg from "./assets/img1.jpg"; 

const HISTORY_DATA = [
  { 
    year: "2007", 
    text: "Mr. S.H. Park founded the company, naming it Focustek Manufacturing Services Pvt. Ltd." 
  },
  { 
    year: "2008", 
    text: "Secured a contract with Hella India Automotive Pvt. Ltd., a German company, for Actuator PCB Assembly." 
  },
  { 
    year: "2010", 
    text: "Achieved ISO/TS-16949 certification." 
  },
  { 
    year: "2011", 
    text: "Relocated the factory from Sector-18, Udyog Vihar, Gurgaon to Plot No. 188, Sector-4, IMT Manesar, Gurgaon." 
  },
  { 
    year: "2012", 
    text: "Expanded business operations to include mechanical manufacturing." 
  },
  { 
    year: "2013", 
    text: "Obtained ISO/TS certification for the mechanical business division." 
  },
  { 
    year: "2017", 
    text: "Initiated Security Controller and Siren Assembly projects for Nippon (serving Maruti and Mahindra)." 
  },
  { 
    year: "2018", 
    text: "Started a new BLDC motor project for Hella and achieved IATF 16949:2016 certification from NQA." 
  },
  { 
    year: "2019", 
    text: "Successfully completed the Maruti Vendor Sustenance Audit (Tier-2) with a Green certificate. Launched new projects with Minda (FOB, SCU, B101, Hero ACPA)." 
  },
  { 
    year: "2020", 
    text: "Commenced new projects for Hella, including the Yamaha MEFCU." 
  },
  { 
    year: "2021", 
    text: "Successfully completed the Maruti Vendor Sustenance Audit (Tier-2) with a Green certificate. Launched new projects with Minda (FOB, SCU, B101, Hero ACPA)." 
  }
];

export default function OurHistory() {

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f9fa", color: "#051226", minHeight: "100vh" }}>
      <style>{`
        /* ── TIMELINE SPECIFIC CSS ── */
        .timeline {
          position: relative;
          max-width: 1000px;
          margin: 60px auto 0;
        }

        /* The vertical line */
        .timeline::after {
          content: '';
          position: absolute;
          width: 4px;
          background-color: var(--border);
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -2px;
          border-radius: 4px;
        }

        .timeline-item {
          padding: 10px 40px;
          position: relative;
          background-color: inherit;
          width: 50%;
        }

        .timeline-item.left { left: 0; }
        .timeline-item.right { left: 50%; }

        /* The dots on the line */
        .timeline-item::after {
          content: '';
          position: absolute;
          width: 22px;
          height: 22px;
          right: -11px;
          background-color: #fff;
          border: 4px solid var(--accent);
          top: 32px;
          border-radius: 50%;
          z-index: 1;
          box-shadow: 0 0 0 4px rgba(255, 37, 0, 0.1);
        }
        .timeline-item.right::after { left: -11px; }

        /* The Card */
        .timeline-card {
          padding: 28px 32px;
          background: #fff;
          position: relative;
          border-radius: 16px;
          border: 1px solid var(--border);
          box-shadow: 0 4px 20px rgba(0,44,108,0.03);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .timeline-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,44,108,0.08);
          border-color: var(--blue-light);
        }

        .timeline-year {
          font-family: 'Syne', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: var(--blue);
          margin-bottom: 12px;
          display: inline-block;
          background: var(--blue-light);
          padding: 4px 16px;
          border-radius: 8px;
        }

        .timeline-text {
          color: var(--gray);
          line-height: 1.7;
          font-size: 15px;
        }

        /* Responsive Timeline */
        @media screen and (max-width: 768px) {
          .timeline::after { left: 31px; }
          .timeline-item { width: 100%; padding-left: 70px; padding-right: 0px; }
          .timeline-item.left, .timeline-item.right { left: 0; }
          .timeline-item::after, .timeline-item.right::after { left: 20px; }
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

          <div className="timeline">
            {HISTORY_DATA.map((item, index) => {
              const alignClass = index % 2 === 0 ? 'left' : 'right';
              return (
                <AnimSection key={index} delay={100}>
                  <div className={`timeline-item ${alignClass}`}>
                    <div className="timeline-card">
                      <div className="timeline-year">{item.year}</div>
                      <p className="timeline-text">{item.text}</p>
                    </div>
                  </div>
                </AnimSection>
              );
            })}
          </div>

        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </div>
  );
}