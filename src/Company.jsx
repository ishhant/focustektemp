import visionImg from "./assets/vision.jpg";    
import qmsImg from "./assets/qms.jpg";          
import historyImg from "./assets/history.jpg";
import manpowerImg from "./assets/manpower.jpg";
import certificateImg from "./assets/quality_certificate.jpg";
import regulationsImg from "./assets/regulations.jpg";
import customersImg from "./assets/customers.jpg";
import contactImg from "./assets/contact.jpg";
import careersImg from "./assets/careers.jpg";
import gstinImg from "./assets/gstin.jpg";
import fmsImg from "./assets/fms.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimSection, WhatsAppButton } from "./SharedComponents";


const COMPANY_CARDS = [
  { 
    title: "Vision & Mission", 
    href: "/company/vision-mission", 
    desc: "Our core purpose, future goals, and commitment to delivering superior electronic manufacturing value.",
    img: visionImg
  },
  { 
    title: "2007-2025 History", 
    href: "/company/history", 
    desc: "A timeline of our milestones, growth, and continuous evolution in the EMS industry.",
    img: historyImg
  },
  { 
    title: "Manpower & Organization", 
    href: "/company/manpower-organization-charts", 
    desc: "Meet the dedicated and highly skilled team driving our operational excellence every day.",
    img: manpowerImg
  },
  { 
    title: "Focustek QMS", 
    href: "/company/focustek-qms", 
    desc: "Our Quality Management System followed in spirit, focusing on zero defects and continual improvement.",
    img: qmsImg
  },
  { 
    title: "Quality Certificate", 
    href: "/company/quality-certificate", 
    desc: "Officially audited and certified under IATF 16949:2016 and ISO 9001:2015 standards by URS.",
    img: certificateImg
  },
  { 
    title: "Our Regulations", 
    href: "/company/our-regulations", 
    desc: "Strict adherence to environmental, health, conflict mineral, and industry-compliant guidelines.",
    img: regulationsImg
  },
  { 
    title: "Our Customers", 
    href: "/company/our-customers", 
    desc: "Valued partnerships with domestic and global clients, delivering consistent quality on time.",
    img: customersImg
  },

  { 
    title: "Careers", 
    href: "/company/careers", 
    desc: "Join our innovative workforce and grow your potential in a dynamic environment.",
    img: careersImg
  },
  { 
    title: "Focustek GSTIN", 
    href: "/company/gstin", 
    desc: "Official tax, registration details, and legal business identification information.",
    img: gstinImg
  }
];



export default function Company() {

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f9fa", color: "#051226", minHeight: "100vh" }}>
      <style>{`
        .footer-link { font-size: 13px; color: #a3afc2; transition: color 0.2s; }
        .footer-link:hover { color: #fff; }

        @media (max-width: 768px) {
          .cards-grid { grid-template-columns: 1fr !important; }
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
        backgroundImage: `linear-gradient(180deg, rgba(5, 12, 26, 0.55) 0%, rgba(0, 44, 108, 0.7) 100%), url(${fmsImg})`,
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
              About Focustek
            </h1>
            <p style={{
              fontSize: 18, 
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.95)",
              margin: "0 auto",
              lineHeight: 1.6,
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
            }}>
              Driving excellence in Electronic Manufacturing Services with uncompromised quality and cutting-edge technology since 2007.
            </p>
          </div>
        </div>
      </section>
<section style={{ padding: "50px 24px", background: "transparent", textAlign: "center" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <AnimSection>
            <div className="badge">Innovation & Quality</div>
            <h2 className="section-title">Committed to Excellence</h2>
            <div className="divider-center"></div>
            <p style={{ fontSize: 17, color: "var(--gray)", lineHeight: 1.8, marginBottom: 20 }}>
              We are concentrating on R&D to provide the best products and services. All FOCUSTEK Facilities are qualified under the IATF 16949: 2016 and ISO 9001: 2015 Quality Management System (QMS), audited and certified by URS (United Registrar of Systems).
            </p>
            <p style={{ fontSize: 17, color: "var(--gray)", lineHeight: 1.8 }}>
              The QMS is followed not only in letter but more importantly in spirit, with continual improvement being the hallmark of the system.
            </p>
          </AnimSection>
        </div>
      </section>
<section style={{ padding: "0 24px 50px", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div 
            className="cards-grid" 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", 
              gap: 24 
            }}
          >
            {COMPANY_CARDS.map((card, idx) => (
              <AnimSection key={idx} delay={idx * 50}>
                <a href={card.href} className="card" style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", padding: 20 }}>
                  <div>
                    <div style={{ 
                      width: "100%", 
                      aspectRatio: "16 / 9", 
                      borderRadius: "12px", 
                      overflow: "hidden", 
                      background: "var(--blue-light)", 
                      marginBottom: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <img 
                        src={card.img} 
                        alt={card.title} 
                        style={{ 
                          width: "100%", 
                          height: "100%", 
                          objectFit: "cover", 
                          objectPosition: "center" 
                        }} 
                      />
                    </div>
                    <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "var(--dark)", marginBottom: 10 }}>
                      {card.title}
                    </h3>
                    <p style={{ fontSize: 14, color: "var(--gray)", lineHeight: 1.65 }}>
                      {card.desc}
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 24, color: "var(--blue)", fontSize: 13, fontWeight: 700 }}>
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </a>
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