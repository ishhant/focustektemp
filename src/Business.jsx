import { AnimSection, WhatsAppButton } from "./SharedComponents";
import businessBanner from "./assets/business/banner.jpg"; // Hero Image
import smtImg from "./assets/business/smt.jpg";                 // SMT Image
import miImg from "./assets/business/mi.jpg";                   // MI Image
import mechImg from "./assets/business/mechanical.jpg";         // Mechanical Image
import Footer from "./Footer";
import Navbar from "./Navbar";

const BUSINESS_LINES = [
  {
    title: "SMT Production Line",
    href: "/business/smt-production-line",
    desc: "State-of-the-art Surface Mount Technology lines ensuring high precision, speed, and reliability for complex PCB assemblies.",
    img: smtImg
  },
  {
    title: "MI Production Line",
    href: "/business/mi-production-line",
    desc: "Dedicated Manual Insertion (MI) lines for through-hole components, managed by highly skilled technicians for perfect soldering.",
    img: miImg
  },
  {
    title: "Mechanical Production Line",
    href: "/business/mechanical-production-line",
    desc: "Comprehensive mechanical assembly, turn-key, and box-build services to deliver fully integrated, ready-to-ship electronic products.",
    img: mechImg
  }
];



export default function Business() {

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f9fa", color: "#051226", minHeight: "100vh" }}>
      <style>{`
        .footer-link { font-size: 13px; color: #a3afc2; transition: color 0.2s; }
        .footer-link:hover { color: #fff; }
      `}</style>
      <Navbar activePage="Business" />

      {/* ── FULL SCREEN HERO SECTION ── */}
      <section style={{ 
        minHeight: "100vh", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 80, 
        paddingBottom: 40,
        backgroundImage: `linear-gradient(180deg, rgba(5, 12, 26, 0.55) 0%, rgba(0, 44, 108, 0.7) 100%), url(${businessBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%" }}>
          <div style={{ textAlign: "center", maxWidth: 850, margin: "0 auto" }}>
            
            <div className="hero-animate" style={{ animationDelay: "0ms" }}>
            </div>
            
            <h1 className="hero-animate" style={{ 
              animationDelay: "80ms", 
              fontFamily: "'DM Sans', sans-serif", /* Wapas Homepage wala original font */
              fontSize: "clamp(2.5rem, 5vw, 3.8rem)", /* Size bhi ekdum Homepage jaisa sync kar diya */
              fontWeight: 800, 
              lineHeight: 1.15,
              letterSpacing: "-0.01em", 
              color: "#ffffff",
              textShadow: "0 4px 16px rgba(0, 0, 0, 0.4)",
              marginTop: 16
            }}>
              Our <span style={{ color: "#60a5fa" }}>Business</span><br />
              & Production Lines
            </h1>
            
            <p className="hero-animate" style={{ 
              animationDelay: "160ms", 
              fontSize: 18, 
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.95)", 
              lineHeight: 1.6, 
              marginTop: 24, 
              maxWidth: 720, 
              margin: "24px auto 0",
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)" 
            }}>
              Explore our state-of-the-art facilities equipped with highly reliable SMT, MI, and Mechanical Production units tailored for uncompromised PCB Assembly.
            </p>

            <div className="hero-animate" style={{ animationDelay: "320ms", display: "flex", justifyContent: "center", marginTop: 40 }}>
              <a href="#production-lines" className="btn-primary" style={{ background: "var(--accent)", boxShadow: "0 4px 14px rgba(255,37,0,0.3)" }}>
                View All Lines
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>

          </div>
        </div>
      </section>
{/* ── PRODUCTION LINES SECTION (CARDS) ── */}
      <section id="production-lines" style={{ padding: "50px 24px", background: "transparent" }}>
        {/* Max width thodi kam ki hai (900px) taaki single card bohot zyada lamba na faile */}
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <AnimSection>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="badge">Manufacturing Units</div>
              <h2 className="section-title">Production Lines</h2>
              <div className="divider-center"></div>
            </div>
          </AnimSection>
          
          <div 
            className="cards-grid" 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr", /* Yahan 1fr karne se har row mein sirf 1 card aayega */
              gap: 40 /* Vertical gap thoda badha diya hai clean look ke liye */
            }}
          >
            {BUSINESS_LINES.map((card, idx) => (
              <AnimSection key={idx} delay={idx * 80}>
                <a href={card.href} className="card" style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", padding: 20 }}>
                  <div>
                    <div style={{ 
                      width: "100%", 
                      aspectRatio: "16 / 9", 
                      borderRadius: "12px", 
                      overflow: "hidden", 
                      background: "var(--blue-light)", 
                      marginBottom: 20, /* Exactly home jaisa margin */
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
                    {/* FONT SIZES & WEIGHTS EXACTLY SYNCED WITH HOME/COMPANY CARDS */}
                    <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "var(--dark)", marginBottom: 10 }}>
                      {card.title}
                    </h3>
                    <p style={{ fontSize: 14, color: "var(--gray)", lineHeight: 1.65 }}>
                      {card.desc}
                    </p>
                  </div>
                  
                  {/* LEARN MORE BUTTON AREA */}
                  <div style={{ 
                    display: "flex", alignItems: "center", gap: 6, marginTop: 24, 
                    color: "var(--blue)", fontSize: 13, fontWeight: 700 
                  }}>
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


      {/* ── FLOATING WHATSAPP BUTTON ── */}
      <WhatsAppButton />

    </div>
  );
}