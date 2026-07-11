import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimSection, WhatsAppButton } from "./SharedComponents";

import bannerImg from "./assets/products_services/banner.jpg"; 
import contractImg from "./assets/products_services/contract.jpg";   
import turnkeyImg from "./assets/products_services/turnkey.jpg";         
import tradingImg from "./assets/products_services/machine_trading.jpg"; 
import CompanyA from "./assets/products_services/slideshow/9.png"; 
import CompanyB from "./assets/products_services/slideshow/2.jpg";
import CompanyC from "./assets/products_services/slideshow/3.jpeg";
import CompanyD from "./assets/products_services/slideshow/4.jpg";
import CompanyE from "./assets/products_services/slideshow/5.jpg";
import CompanyF from "./assets/products_services/slideshow/6.jpg";
import turnkey1 from "./assets/products_services/turnkey1.jpg"; 
import turnkey2 from "./assets/products_services/turnkey2.jpg"; 
import turnkey3 from "./assets/products_services/turnkey3.jpg"; 
import turnkey4 from "./assets/products_services/turnkey4.jpg"; 
import mt1 from "./assets/products_services/mt1.jpg"; 
import mt2 from "./assets/products_services/mt2.jpg"; 
import mt3 from "./assets/products_services/mt3.jpg"; 






const SERVICES_DATA = [
  {
    title: "Contract Manufacturing",
    desc: "FOCUSTEK is a leading innovator in contract manufacturing and has become a value-added partner to leading OEMs. Our unique blend of high-caliber manufacturing services, flexibility, and responsiveness to customer needs uniquely position us in the highly competitive marketplace.",
    sectors: ["Automotive Sector", "Communication Sector", "Aeronautic Sector"],
    capabilities: ["Single-sided SMT", "Double-sided SMT", "MI Production", "Mixed SMT & T/Hole", "Assembled PCBA"],
    images: [contractImg],
    scale: 1.2,
    reverse: false 
  },
  {
    title: "Assembled PCBA for Customers",
    desc: "We deliver high-quality assembled printed circuit boards (PCBA) tailored to our customers' precise specifications. This represents a core part of the Electronic PCB assembly portfolio by FOCUSTEK.",
    sectors: ["Automotive Sector", "Communication Sector", "Industrial Sector"],
    capabilities: ["Custom PCB Assembly", "High Volume Production", "Strict QC Practices"],
    images: [CompanyA, CompanyB, CompanyC, CompanyD, CompanyE, CompanyF], 
    reverse: true 
  },
  {
    title: "Turn-Key Assembly",
    desc: "We offer quality turn-key assembly solutions for customer electronic products. We take customer designs and provide low-cost alternatives for on-time delivery. Employing SPC and stringent QC practices, we monitor all aspects of production to ensure maximum customer satisfaction.",
    sectors: ["Automotive Sector", "Communication Sector", "Aeronautic Sector"],
    capabilities: ["Complete Product Assembly", "MI Production", "Mixed SMT & T/Hole"],
    images: [turnkey1, turnkey2, turnkey3, turnkey4, ], 
    reverse: false 
  },
  {
    title: "Machine Trading",
    desc: "Spot welding is a type of electric resistance welding used to securely join contacting metal surfaces. We specialize in the trading of high-capacity electric spot welding machines to support diverse industrial and manufacturing needs.",
    sectors: ["Industrial Manufacturing", "Automobile Parts", "Heavy Electronics"],
    capabilities: ["Capacitor Spot Welding M/C", "Inductor Spot Welding M/C", "Cable Spot Welding M/C"],
    images: [mt1, mt2, mt3], 
    reverse: true 
  }
];

function ImageSlider({ images, labels, customScale }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAuto, setIsAuto] = useState(true);

  useEffect(() => {
    if (!images || images.length <= 1 || !isAuto) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images, isAuto]);

  const nextSlide = (e) => {
    e.preventDefault();
    setIsAuto(false); 
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e) => {
    e.preventDefault();
    setIsAuto(false); 
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
<div style={{ display: "flex", transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)", transform: `translateX(-${currentIndex * 100}%)`, height: "100%" }}>
        {images.map((img, i) => (
          <div key={i} style={{ minWidth: "100%", height: "100%", position: "relative" }}>
            <img src={img} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transform: customScale ? `scale(${customScale})` : "none" }} alt={`Slide ${i}`} />
{labels && labels[i] && (
              <div style={{
                position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)",
                background: "rgba(5, 18, 38, 0.9)", color: "#fff", padding: "6px 16px",
                borderRadius: "8px", fontWeight: "700", fontSize: "14px",
                backdropFilter: "blur(4px)", boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
              }}>
                {labels[i]}
              </div>
            )}
          </div>
        ))}
      </div>
{images.length > 1 && (
        <>
          <button onClick={prevSlide} style={{
            position: "absolute", top: "50%", left: 10, transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.8)", border: "none", width: 35, height: 35, borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)", color: "var(--blue)", zIndex: 10
          }}>❮</button>
          <button onClick={nextSlide} style={{
            position: "absolute", top: "50%", right: 10, transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.8)", border: "none", width: 35, height: 35, borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)", color: "var(--blue)", zIndex: 10
          }}>❯</button>
        </>
      )}
    </div>
  );
}

export default function ProductsServices() {

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f9fa", color: "#051226", minHeight: "100vh" }}>
      <style>{`
        .service-row { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; margin-bottom: 160px; }
        .service-row:last-child { margin-bottom: 0; } 
        
        .text-col { order: 1; }
        .img-col { order: 2; }
        .reverse-row .text-col { order: 2; }
        .reverse-row .img-col { order: 1; }

        .service-img-wrapper { width: 100%; aspect-ratio: 4 / 3; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0, 44, 108, 0.08); position: relative; }
        .service-img-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }

        @media (max-width: 768px) {
          .service-row { grid-template-columns: 1fr !important; gap: 40px; margin-bottom: 80px; }
          .service-row:last-child { margin-bottom: 0; }
          .text-col { order: 1 !important; }
          .img-col { order: 2 !important; }
        }
      `}</style>
      
      <Navbar activePage="Products & Services" />
<section style={{ 
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", 
        paddingTop: 80, 
        paddingBottom: 40, 
        backgroundImage: `linear-gradient(180deg, rgba(5, 12, 26, 0.45) 0%, rgba(0, 44, 108, 0.5) 100%), url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
        <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", maxWidth: 850, margin: "0 auto" }}> 
            <div className="hero-animate" style={{ animationDelay: "0ms" }}>
            </div>
            
            <h1 className="hero-title hero-animate" style={{ animationDelay: "80ms", textShadow: "0 4px 16px rgba(0, 0, 0, 0.4)", marginTop: 16 }}>
              Products & <span style={{ color: "#60a5fa" }}>Services</span>
            </h1>
            
            <p className="hero-animate" style={{ animationDelay: "160ms", fontSize: 18, fontWeight: 500, color: "rgba(255, 255, 255, 0.95)", lineHeight: 1.6, marginTop: 20, maxWidth: 720, margin: "20px auto 0", textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)" }}>
              FOCUSTEK offers a wide variety of Electronic Manufacturing Products and Services tailored to provide the best experience from our state-of-the-art facilities.
            </p>
          </div>
        </div>
      </section>
<section style={{ padding: "100px 24px 100px 24px", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          
          {SERVICES_DATA.map((service, idx) => (
            <AnimSection key={idx} delay={idx * 50}>
              <div 
                className={`service-row ${service.reverse ? 'reverse-row' : ''}`}
                style={{ marginBottom: idx === SERVICES_DATA.length - 1 ? "0px" : "50px" }} 
              >
<div className="text-col">
                  <div className="badge">Service 0{idx + 1}</div>
                  <h2 className="section-title" style={{ marginBottom: 16 }}>{service.title}</h2>
                  <div className="divider"></div>
                  <p style={{ fontSize: 16, color: "var(--gray)", lineHeight: 1.75, marginBottom: 24 }}>
                    {service.desc}
                  </p>

                  <div style={{ marginBottom: 24 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--dark)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>
                      Services Provided To:
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                      {service.sectors.map(sector => (
                        <span key={sector} className="info-pill">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--dark)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>
                      Key Capabilities:
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                      {service.capabilities.map(cap => (
                        <span key={cap} className="info-pill" style={{ background: "var(--blue-light)", borderColor: "transparent" }}>
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
<div className="img-col">
                  <div className="service-img-wrapper">
<ImageSlider images={service.images} labels={service.imageLabels} customScale={service.scale} />
                  </div>
                </div>

              </div>
            </AnimSection>
          ))}

        </div>
      </section>

      <Footer />

      <WhatsAppButton message="Hello Focustek, I have an inquiry regarding Products and Services." />
    </div>
  );
}