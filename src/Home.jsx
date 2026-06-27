import { useEffect, useState } from "react";
import qmsImg from "./assets/qms.jpg";
import visionImg from "./assets/vision.jpg"; 
import customersImg from "./assets/customers.jpg";
import orgImg from "./assets/manpower.jpg";
import businessImg from "./assets/our_business.jpg"; 
import productsImg from "./assets/products_services.jpg"; 
import machinesImg from "./assets/machine_plants.jpg";
import qualityImg from "./assets/quality_certificate.jpg";
import slide1 from "./assets/slideshow/1.jpg";
import slide2 from "./assets/slideshow/2.jpg";
import slide3 from "./assets/slideshow/3.jpg";
import slide4 from "./assets/slideshow/4.jpg";
import slide5 from "./assets/slideshow/5.jpg";
import slide6 from "./assets/slideshow/6.jpg";
import mainImg from "./assets/main.jpg";
import focustekVideo from "./assets/focustek_video.mp4";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimSection, WhatsAppButton } from "./SharedComponents";

const STATS = [
  { value: "2007", label: "Established" },
  { value: "ISO 9001", label: "Certified" },
  { value: "IATF 16949", label: "Automotive" },
  { value: "IPC-A-610", label: "Quality Std." },
];

const CARDS = [
  {
    title: "Our Business",
    href: "/business",
    src: businessImg, 
    desc: "Electronic PCB Assembly including SMT Production Line, MI Production Line, and Mechanical Production Line.",
  },
  {
    title: "Products & Services",
    href: "/products-services",
    src: productsImg,
    desc: "Contract Manufacturing, Turn-Key Assembly, and Machine Trading — end-to-end electronic manufacturing solutions.",
  },
  {
    title: "Machines & Plants",
    href: "/machines-plants",
    src: machinesImg,
    desc: "State-of-the-art SMT Machines, Auto Insertion Units, ICT Rooms, Inspection Tools, and Special Tools.",
  },
  {
    title: "Quality Certificate",
    href: "/company/quality-certificate",
    src: qualityImg,
    desc: "Certified under IATF 16949:2016 and ISO 9001:2015, audited by URS — quality management in letter and spirit.",
  },
];

const QUICK_LINKS = [
  { label: "Focustek QMS", href: "/company/focustek-qms", img: qmsImg },
  { label: "Vision & Mission", href: "/company/vision-mission", img: visionImg },
  { label: "Our Customers", href: "/company/our-customers", img: customersImg },
  { label: "Manpower & Org Charts", href: "/company/manpower-organization-charts", img: orgImg },
];



export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const slideImages = [slide1, slide2, slide3, slide4, slide5, slide6];
  const TOTAL_SLIDES = slideImages.length;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TOTAL_SLIDES);
    }, 4500); // Har 4.5 second mein photo automatic badlegi
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % TOTAL_SLIDES);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f9fa", color: "#051226", minHeight: "100vh" }}>
      <style>{`
        .main-slideshow-block {
          width: 100%;
          max-width: 1200px;
          margin: 40px auto 60px auto;
          padding: 0 24px;
        }
        .slider-wrapper {
          position: relative;
          width: 100%;
          height: 540px; 
          overflow: hidden;
          border-radius: 24px;
          box-shadow: 0 30px 70px rgba(0, 44, 108, 0.12);
          background: #051226;
          z-index: 1; 
        }
        .slide-track {
          display: flex;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .slide-item {
          min-width: 100%;
          height: 100%;
        }
        .slide-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.9);
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
          transition: all 0.25s ease;
          z-index: 10;
        }
        .slider-btn:hover { background: #fff; transform: translateY(-50%) scale(1.08); color: var(--accent); }
        .indicator-dot {
          height: 6px;
          border-radius: 3px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .main-slideshow-block { margin: 20px auto 40px auto; }
          .slider-wrapper { height: 280px; border-radius: 16px; }
          .slider-btn { width: 38px; height: 38px; }
        }
      `}</style>
      <Navbar activePage="Home" />
      <section style={{ 
        minHeight: "100vh", /* 👈 Exact full screen ki height */
        display: "flex",    /* 👈 Content ko center karne ke liye flexbox */
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 80,     /* 👈 Top padding kam kar di taaki navbar ke theek neeche se shuru ho */
        paddingBottom: 40,  /* 👈 Bottom padding kam kar di taaki stretch na ho */
        backgroundImage: `linear-gradient(180deg, rgba(5, 12, 26, 0.45) 0%, rgba(0, 44, 108, 0.5) 100%), url(${mainImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", maxWidth: 850, margin: "0 auto" }}>
            <div className="hero-animate" style={{ animationDelay: "0ms" }}>
              <div className="badge" style={{ background: "var(--accent)", color: "#fff", border: "none", boxShadow: "0 4px 12px rgba(255,37,0,0.25)" }}>
                Electronic Manufacturing Since 2007
              </div>
            </div>
            
            <h1 className="hero-title hero-animate" style={{ animationDelay: "80ms", textShadow: "0 4px 16px rgba(0, 0, 0, 0.4)" }}>
              Electronic PCB <span style={{ color: "#60a5fa" }}>Assembly</span><br />
              & EMS Manufacturing
            </h1>
            
            <p className="hero-animate" style={{ animationDelay: "160ms", fontSize: 18, fontWeight: 500, color: "rgba(255, 255, 255, 0.95)", lineHeight: 1.6, marginTop: 20, maxWidth: 720, margin: "20px auto 0", textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)" }}>
              High-precision SMT Production, Reliable MI Lines, and Certified Industrial Quality Systems. FOCUSTEK delivers world-class electronic assembly environments tailored to global business execution.
            </p>

            <div className="hero-animate" style={{ animationDelay: "240ms", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, marginTop: 32 }}>
              {["ISO 9001:2015", "IATF 16949:2016", "IPC-A-610", "URS Certified"].map(c => (
                <span key={c} className="cert-pill" style={{ background: "rgba(5, 18, 38, 0.65)", color: "#fff", borderColor: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)" }}>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5l3 3 6-6" stroke="#f0c040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {c}
                </span>
              ))}
            </div>

            {/* 👇 YAHAN HAIN AAPKE TEENO BUTTONS JO GAYAB HO GAYE THE 👇 */}
            <div className="hero-animate hero-btns" style={{ animationDelay: "320ms", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, marginTop: 40 }}>
              
              <button onClick={() => setIsVideoOpen(true)} className="btn-primary" style={{ background: "#fff", color: "var(--blue)", boxShadow: "0 4px 16px rgba(255,255,255,0.25)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                Watch Factory Tour
              </button>

              <a href="/company" className="btn-primary" style={{ background: "var(--accent)", boxShadow: "0 4px 14px rgba(255,37,0,0.3)" }}>
                Know More
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>

              <a href="https://forms.gle/LvgymhVn6VhR4vE68" target="_blank" rel="noreferrer" className="btn-outline" style={{ color: "#fff", borderColor: "#fff", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(4px)" }}>
                Write an Inquiry
              </a>
              
            </div>
            
          </div>
        </div>
      </section>    
      {/* ── FIXED SLIDESHOW BLOCK WITH ZERO OVERLAP ISSUES ── */}
      <section className="main-slideshow-block" style={{ position: "relative", zIndex: 5 }}>
        <div className="slider-wrapper">
          
          {/* Images Track */}
          <div className="slide-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slideImages.map((src, index) => (
              <div className="slide-item" key={index}>
                <img 
                  src={src} 
                  alt={`Focustek Gallery Image ${index + 1}`} 
                  className="slide-img"
                  loading={index === 0 ? "eager" : "lazy"} 
                />
              </div>
            ))}
          </div>

          {/* Left Arrow Button */}
          <button className="slider-btn" style={{ left: 24, zIndex: 10 }} onClick={prevSlide} aria-label="Previous slide">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          {/* Right Arrow Button */}
          <button className="slider-btn" style={{ right: 24, zIndex: 10 }} onClick={nextSlide} aria-label="Next slide">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          {/* Bottom Dot Nav Indicators */}
          <div style={{
            position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)",
            display: "flex", gap: 6, zIndex: 10, background: "rgba(5, 18, 38, 0.4)", padding: "6px 14px", borderRadius: 20, backdropFilter: "blur(6px)"
          }}>
            {slideImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="indicator-dot"
                style={{
                  width: currentSlide === index ? 20 : 6,
                  background: currentSlide === index ? "#fff" : "rgba(255,255,255,0.4)"
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ background: "var(--blue)", padding: "50px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="grid-4">
          {STATS.map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 800, fontSize: "2rem", color: "#fff" }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 500, marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
        <section style={{ padding: "50px 24px", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="grid-2">
              <div>
                <div className="badge">About Focustek</div>
                <h2 className="section-title">Committed to Quality<br />Since 2007</h2>
                <div className="divider"></div>
                <p style={{ fontSize: 15, color: "var(--gray)", lineHeight: 1.75, marginBottom: 14 }}>
                  FOCUSTEK offers a wide variety of Electronic Manufacturing Products and Services with Quality Certificates of ISO 9001, URS, IATF, and IPC-A-610. Since 2007, we are committed to supplying only the best experience from our state-of-the-art Electronic Manufacturing Service factories located in India.
                </p>
                <p style={{ fontSize: 15, color: "var(--gray)", lineHeight: 1.75 }}>
                  All FOCUSTEK facilities are qualified under the IATF 16949:2016 and ISO 9001:2015 Quality Management System (QMS), audited and certified by URS. The QMS is followed not only in letter but more importantly in spirit, with continual improvement being the hallmark of the system.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
                  <a href="/company" className="btn-primary">Explore Company</a>
                  <a href="/company/focustek-qms" className="btn-outline">View QMS</a>
                </div>
              </div>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {QUICK_LINKS.map((q, i) => (
                  <a 
                    key={i} 
                    href={q.href} 
                    className="card" 
                    style={{ 
                      display: "flex", 
                      flexDirection: "column", 
                      gap: 16, 
                      padding: "16px 16px 20px 16px", 
                      justifyContent: "space-between" 
                    }}
                  >
                    <div style={{ 
                      width: "100%", 
                      aspectRatio: "16 / 10", 
                      borderRadius: "12px", 
                      overflow: "hidden", 
                      background: "#f0f4fa",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <img 
                        src={q.img} 
                        alt={q.label} 
                        style={{ 
                          width: "100%", 
                          height: "100%", 
                          objectFit: "cover", 
                          objectPosition: "center" 
                        }} 
                      />
                    </div>
                    
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", padding: "0 4px" }}>
                      <span style={{ fontSize: 15, fontWeight: 700, color: "var(--dark)" }}>{q.label}</span>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ color: "var(--accent)", flexShrink: 0 }}>
                        <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ── SERVICES CARDS ── */}
      <section style={{ padding: "50px 24px", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="badge">What We Offer</div>
              <h2 className="section-title">Our Capabilities</h2>
              <div className="divider-center"></div>
            </div>
          </AnimSection>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="grid-2">
            {CARDS.map((c, i) => (
              <AnimSection key={i} delay={i * 80}>
                <a href={c.href} className="card" style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", padding: 20 }}>
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
                        src={c.src} 
                        alt={c.title} 
                        style={{ 
                          width: "100%", 
                          height: "100%", 
                          objectFit: "cover", 
                          objectPosition: "center" 
                        }} 
                      />
                    </div>

                    <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "var(--dark)", marginBottom: 10 }}>
                      {c.title}
                    </h3>
                    <p style={{ fontSize: 14, color: "var(--gray)", lineHeight: 1.65 }}>
                      {c.desc}
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

      {/* ── CONTACT CTA ── */}
        <section style={{ padding: "50px 24px", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <div style={{
              background: "linear-gradient(135deg, #051226 0%, var(--blue) 100%)",
              borderRadius: 24, padding: "56px 48px", display: "grid",
              gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center",
            }} className="grid-2">
              <div>
                <h2 style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#fff", marginBottom: 12 }}>
                  Ready to start your project?
                </h2>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, maxWidth: 480 }}>
                  Reach out to our team for Contract Manufacturing, Turn-Key Assembly, and Machine Trading inquiries. We're based in IMT Manesar, Gurgaon.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginTop: 28 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 9, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 4.5h12c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5H3c-.83 0-1.5-.67-1.5-1.5V6c0-.83.67-1.5 1.5-1.5z" stroke="#fff" strokeWidth="1.5" /><path d="M1.5 6l7.5 5.25L16.5 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" /></svg>
                    </div>
                    <a href="mailto:contact@focustek.co.in" style={{ fontSize: 13, color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>contact@focustek.co.in</a>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 9, background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.5 3h3l1.5 3.5-1.75 1.1a8 8 0 0 0 4.15 4.15L11.5 9.5 15 11v3c0 .83-.67 1.5-1.5 1.5C6.4 15.5 2.5 11.6 2.5 7A1.5 1.5 0 0 1 3.5 3z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>+91 9311143461</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>0124-4282696</div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 200 }}>
                <a href="https://forms.gle/LvgymhVn6VhR4vE68" target="_blank" rel="noreferrer" style={{
                  background: "var(--accent)", color: "#fff", fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700, fontSize: 14, padding: "16px 24px", borderRadius: 10,
                  textAlign: "center", display: "block", transition: "opacity 0.2s",
                }}>
                  Write an Inquiry
                </a>
                <a href="https://maps.app.goo.gl/FwtKUyJcSzx4ZDnG8" target="_blank" rel="noreferrer" style={{
                  background: "rgba(255,255,255,0.08)", color: "#fff", fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600, fontSize: 14, padding: "16px 24px", borderRadius: 10,
                  textAlign: "center", display: "block", border: "1px solid rgba(255,255,255,0.15)",
                  transition: "background 0.2s",
                }}>
                  View on Map
                </a>
              </div>
            </div>
          </AnimSection>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    {/* ── VIDEO POPUP MODAL ── */}
      {isVideoOpen && (
        <div 
          onClick={() => setIsVideoOpen(false)} // Background click karne par band ho jayega
          style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0, 10, 25, 0.85)", // Dark premium overlay
            backdropFilter: "blur(8px)",
            zIndex: 9999, 
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 24,
            animation: "fadeIn 0.3s ease" // Smooth entry
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()} // Video area click karne par band nahi hoga
            style={{ 
              position: "relative", width: "100%", maxWidth: 1000, 
              background: "#000", borderRadius: 16, overflow: "hidden", 
              boxShadow: "0 20px 50px rgba(0,0,0,0.5)" 
            }}
          >
            {/* Cross (Close) Button */}
            <button 
              onClick={() => setIsVideoOpen(false)}
              style={{
                position: "absolute", top: 16, right: 16, zIndex: 10,
                background: "rgba(255,255,255,0.15)", border: "none", color: "#fff",
                width: 40, height: 40, borderRadius: "50%", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                backdropFilter: "blur(4px)", transition: "background 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.3)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            <video 
              src={focustekVideo} /* Yahan apni video ka naam replace kar lena */
              controls 
              autoPlay 
              style={{ width: "100%", height: "auto", display: "block", maxHeight: "85vh" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}