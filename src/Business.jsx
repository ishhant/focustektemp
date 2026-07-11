import { useState, useEffect } from "react";
import { AnimSection, WhatsAppButton } from "./SharedComponents";

function CardImageSlider({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!images || images.length <= 1 || !isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images, isAutoPlay]);

  const nextSlide = (e) => {
    if(e) { e.preventDefault(); e.stopPropagation(); }
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e) => {
    if(e) { e.preventDefault(); e.stopPropagation(); }
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (e, idx) => {
    if(e) { e.preventDefault(); e.stopPropagation(); }
    setIsAutoPlay(false);
    setCurrentIndex(idx);
  };

  if (!images || images.length === 0) return null;
  if (images.length === 1) {
    return <img src={images[0]} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />;
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }} className="card-slider-wrap">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={alt}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: currentIndex === i ? 1 : 0,
            transition: "opacity 0.6s ease-in-out"
          }}
        />
      ))}
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        style={{
          position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", zIndex: 10,
          background: "rgba(255,255,255,0.85)", border: "none", width: 34, height: 34, borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button 
        onClick={nextSlide}
        style={{
          position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", zIndex: 10,
          background: "rgba(255,255,255,0.85)", border: "none", width: 34, height: 34, borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
      </button>

      {/* Dots */}
      <div style={{ position: "absolute", bottom: 12, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 8, zIndex: 10 }}>
        {images.map((_, i) => (
          <div 
            key={i} 
            onClick={(e) => goToSlide(e, i)}
            style={{ 
              width: 8, height: 8, borderRadius: "50%", cursor: "pointer",
              background: currentIndex === i ? "#fff" : "rgba(255,255,255,0.4)", 
              transition: "background 0.3s",
              boxShadow: "0 1px 4px rgba(0,0,0,0.2)"
            }} 
          />
        ))}
      </div>
    </div>
  );
}
import businessBanner from "./assets/Business/banner.jpg"; // Hero Image
import smtImg from "./assets/Business/smt.jpg";                 // SMT Image
import miImg from "./assets/slideshow/10.jpg";                   // MI Image
import mechImg from "./assets/Business/mechanical.jpg";         // Mechanical Image
import mechImg2 from "./assets/Business/mech2.jpg";         // Mechanical Image
import mechImg3 from "./assets/Business/mech3.jpg";         // Mechanical Image

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
    desc: "Comprehensive mechanical assembly, turn-key, and box-build services to deliver fully integrated, ready-to-ship electronic products.",
    images: [mechImg, mechImg2, mechImg3,]
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
              fontFamily: "'DM Sans', sans-serif", 
              fontSize: "clamp(2.5rem, 5vw, 3.8rem)", 
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
<section id="production-lines" style={{ padding: "50px 24px", background: "transparent" }}>
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
              gridTemplateColumns: "1fr", 
              gap: 40 
            }}
          >
            {BUSINESS_LINES.map((card, idx) => {
              const Wrapper = card.href ? "a" : "div";
              return (
              <AnimSection key={idx} delay={idx * 80}>
                <Wrapper href={card.href} className="card" style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", padding: 20 }}>
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
                      <CardImageSlider images={card.images || [card.img]} alt={card.title} />
                    </div>
                    <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "var(--dark)", marginBottom: 10 }}>
                      {card.title}
                    </h3>
                    <p style={{ fontSize: 14, color: "var(--gray)", lineHeight: 1.65 }}>
                      {card.desc}
                    </p>
                  </div>
                  {card.href && (
                    <div style={{ 
                      display: "flex", alignItems: "center", gap: 6, marginTop: 24, 
                      color: "var(--blue)", fontSize: 13, fontWeight: 700 
                    }}>
                      Learn More
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </Wrapper>
              </AnimSection>
            )})}
          </div>
        </div>
      </section>
            <Footer />
<WhatsAppButton />

    </div>
  );
}