import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimSection, WhatsAppButton } from "./SharedComponents";
import careersBg from "./assets/careers.jpg";

export default function Careers() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f9fa", color: "#051226", minHeight: "100vh" }}>
      <Navbar activePage="Company" />

      {/* ── HERO BANNER ── */}
      <section style={{ 
        minHeight: "100vh", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 80, 
        paddingBottom: 40,
        backgroundImage: `linear-gradient(180deg, rgba(5, 12, 26, 0.55) 0%, rgba(0, 44, 108, 0.7) 100%), url(${careersBg})`,
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
              Careers
            </h1>
            <p style={{
              fontSize: 18, 
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.95)",
              margin: "0 auto",
              lineHeight: 1.6,
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
            }}>
              Join the Focustek family and be a part of our journey to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* ── CAREERS INFO SECTION ── */}
      <section style={{ padding: "50px 24px", background: "transparent" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <AnimSection>
            <div className="badge">Join Our Team</div>
            <h2 className="section-title">Work With Us</h2>
            <div className="divider-center"></div>
            
            <div style={{ 
              background: "#fff", 
              borderRadius: "20px", 
              padding: "50px 40px", 
              boxShadow: "0 10px 40px rgba(0, 44, 108, 0.05)",
              border: "1px solid var(--border)",
              marginTop: 40
            }}>
              <p style={{ fontSize: 17, color: "var(--gray)", lineHeight: 1.8, marginBottom: 24 }}>
                Human resources are beyond doubt one of the most important assets of any organization. We at Focustek sincerely believe in developing and continually improving upon our invaluable workforce. If you have the passion to strive for excellence, we offer you this opportunity to realize your dream with us.
              </p>
              
              <div style={{ background: "rgba(0, 44, 108, 0.03)", padding: "24px", borderRadius: "12px", border: "1px solid rgba(0, 44, 108, 0.06)", marginTop: 32 }}>
                <p style={{ fontSize: 16, color: "var(--dark)", fontWeight: 600, marginBottom: 12 }}>
                  Currently, we do not have any vacancies.
                </p>
                <p style={{ fontSize: 15, color: "var(--gray)", marginBottom: 20 }}>
                  We will update vacancy details in the future if we have any requirements. Please feel free to send your resumes for future consideration.
                </p>
                
                <a href="mailto:hr@focustek.co.in" style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "var(--blue)",
                  color: "#fff",
                  padding: "14px 28px",
                  borderRadius: "30px",
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(0, 44, 108, 0.2)"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "var(--blue-dark)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "var(--blue)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  hr@focustek.co.in
                </a>
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      <Footer />
      <WhatsAppButton message="Hello Focustek, I have a query regarding career opportunities." />
    </div>
  );
}
