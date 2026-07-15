import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimSection, WhatsAppButton } from "./SharedComponents";
import heroBg from "./assets/quality_certificate.jpg";
import cert1_1 from "./assets/certificates/1.1.jpg";
import cert1_2 from "./assets/certificates/1.2.jpg";
import cert2 from "./assets/certificates/2.jpg";
import cert3 from "./assets/certificates/3.jpg";
import cert4 from "./assets/certificates/4.jpg";
import cert5_1 from "./assets/certificates/5.1.jpg";
import cert5_2 from "./assets/certificates/5.2.jpg";

import cert6 from "./assets/certificates/6.jpg";
import cert7 from "./assets/certificates/7.jpg";
import cert8 from "./assets/certificates/8.jpg";
import cert9 from "./assets/certificates/9.jpg";


function CertificateCard({ cert, onImageClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % cert.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + cert.images.length) % cert.images.length);
  };

  return (
    <div style={{ 
      background: "#fff", 
      borderRadius: "16px", 
      overflow: "hidden", 
      border: "1px solid var(--border)",
      boxShadow: "0 10px 30px rgba(0, 44, 108, 0.04)",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }}>
      <div style={{ padding: "20px", borderBottom: "1px solid var(--border)", background: "var(--blue-light)", textAlign: "center" }}>
        <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--dark)" }}>{cert.title}</h3>
      </div>
      
      <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "20px", flex: 1, alignItems: "center", justifyContent: "center" }}>
        <div style={{ 
          width: "100%", 
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)", 
          border: "1px solid #eaeaea",
          borderRadius: "8px",
          overflow: "hidden",
          position: "relative",
          background: "#f8f9fa"
        }}>
          <img 
            src={cert.images[currentIndex]} 
            alt={`${cert.title} - Page ${currentIndex + 1}`} 
            style={{ width: "100%", height: "400px", objectFit: "cover", display: "block", cursor: "zoom-in" }} 
            onClick={() => onImageClick(cert.images[currentIndex])}
          />
          
          {cert.images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                style={{
                  position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)",
                  background: "rgba(0,44,108,0.75)", color: "#fff", border: "none", borderRadius: "50%",
                  width: "36px", height: "36px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "16px", transition: "background 0.2s"
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(0,44,108,0.95)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(0,44,108,0.75)"}
              >
                &#10094;
              </button>
              <button 
                onClick={nextImage}
                style={{
                  position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)",
                  background: "rgba(0,44,108,0.75)", color: "#fff", border: "none", borderRadius: "50%",
                  width: "36px", height: "36px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "16px", transition: "background 0.2s"
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(0,44,108,0.95)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(0,44,108,0.75)"}
              >
                &#10095;
              </button>
              <div style={{
                position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)",
                background: "rgba(0,0,0,0.6)", color: "#fff", padding: "4px 12px", borderRadius: "12px",
                fontSize: "12px", fontWeight: "bold"
              }}>
                {currentIndex + 1} / {cert.images.length}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function QualityCertificate() {
  const [lightboxImg, setLightboxImg] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const certificates = [
    { id: 1, title: "IATF 16949:2016 CERTIFICATE", images: [cert2] },
    { id: 2, title: "ISO 14001:2015 CERTIFICATE", images: [cert3] },
    { id: 3, title: "ISO 45001:2018 CERTIFICATE", images: [cert4] },
    { id: 8, title: "ISO 9001:2015", images: [cert8] },
    { id: 4, title: "HYUNDAI SQ 2014 CERTIFICATE", images: [cert6] },
    { id: 5, title: "ANSI/ESD S20.20-2021 CERTIFICATE", images: [cert7] },
    { id: 6, title: "IPC-A-610 CERTIFICATE", images: [cert1_1] },
    { id: 7, title: "MSME CERTIFICATE", images: [cert5_1,cert5_2] },
    { id: 9, title: "MARUTI SUZUKI TIER-2 VENDOR ASSESSMENT", images: [cert9] },

  ];

  const handlePrint = (e, src) => {
    e.stopPropagation();
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head><title> </title>
            <style>
              @page { margin: 0; }
              * { margin: 0; padding: 0; }
              html, body { width: 100%; height: 100%; overflow: hidden; }
              img { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; object-fit: contain; }
            </style>
          </head>
          <body>
            <img src="${src}" onload="setTimeout(function(){ window.print(); window.close(); }, 200);" />
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f9fa", color: "#051226", minHeight: "100vh" }}>
      <Navbar activePage="Company" />
      {lightboxImg && (
        <div 
          style={{
            position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
            background: "rgba(0,0,0,0.85)", zIndex: 99999,
            display: "flex", alignItems: isZoomed ? "flex-start" : "center", justifyContent: isZoomed ? "flex-start" : "center",
            padding: "24px", overflow: "auto"
          }}
          onClick={() => { setLightboxImg(null); setIsZoomed(false); }}
        >
          <img 
            src={lightboxImg} 
            alt="Expanded Certificate" 
            style={{ 
              maxWidth: isZoomed ? "none" : "100%", 
              maxHeight: isZoomed ? "none" : "100%", 
              objectFit: "contain", borderRadius: "8px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
              cursor: isZoomed ? "zoom-out" : "zoom-in",
              margin: isZoomed ? "auto" : "0",
              transition: "all 0.3s ease"
            }}
            onClick={(e) => { e.stopPropagation(); setIsZoomed(!isZoomed); }}
          />
          <button 
            style={{
              position: "absolute", top: "24px", right: "80px",
              background: "rgba(255,255,255,0.2)", border: "none", color: "#fff",
              width: "44px", height: "44px", borderRadius: "50%",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.2s"
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.3)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
            onClick={(e) => handlePrint(e, lightboxImg)}
            title="Print Certificate"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
          </button>
          <button 
            style={{
              position: "absolute", top: "24px", right: "24px",
              background: "rgba(255,255,255,0.2)", border: "none", color: "#fff",
              width: "44px", height: "44px", borderRadius: "50%",
              fontSize: "24px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.2s"
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.3)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
            onClick={(e) => { e.stopPropagation(); setLightboxImg(null); setIsZoomed(false); }}
            title="Close"
          >
            &times;
          </button>
        </div>
      )}
<section style={{ 
        minHeight: "100vh", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 80, 
        paddingBottom: 40,
        backgroundImage: `linear-gradient(180deg, rgba(5, 12, 26, 0.55) 0%, rgba(0, 44, 108, 0.7) 100%), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%" }}>
          <div className="hero-animate" style={{ maxWidth: 800, margin: "0 auto", animationDelay: "0ms" }}>
            <h1 style={{ 
              fontFamily: "'DM Sans', sans-serif", 
              fontSize: "clamp(2.5rem, 5vw, 3.8rem)", 
              fontWeight: 800, 
              color: "#fff",
              marginBottom: 20,
              textShadow: "0 4px 16px rgba(0, 0, 0, 0.4)"
            }}>
              Quality Certificates
            </h1>
            <p style={{
              fontSize: 18, 
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.95)",
              margin: "0 auto",
              lineHeight: 1.6,
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
            }}>
              Our commitment to excellence is backed by industry-recognized certifications and quality standards.
            </p>
          </div>
        </div>
      </section>
<section style={{ padding: "50px 24px 20px", background: "transparent", textAlign: "center" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <AnimSection delay={50}>
            <div className="badge">Certifications</div>
            <h2 className="section-title" style={{ marginBottom: 24 }}>Industry Standards</h2>
            <div className="divider-center"></div>
            <p style={{ fontSize: 17, color: "var(--gray)", lineHeight: 1.8, marginBottom: 20 }}>
              At Focustek, quality is paramount. We continuously strive to meet and exceed global quality requirements, ensuring reliable and superior manufacturing services for our partners.
            </p>
          </AnimSection>
        </div>
      </section>
<section style={{ padding: "30px 24px 80px", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
            gap: "40px" 
          }}>
            {certificates.map((cert, idx) => (
              <AnimSection key={cert.id} delay={100 + (idx * 50)}>
                <CertificateCard cert={cert} onImageClick={setLightboxImg} />
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppButton message="Hello Focustek, I'd like to know more about your Quality Certificates." />
    </div>
  );
}
