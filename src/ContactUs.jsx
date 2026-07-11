import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimSection, WhatsAppButton } from "./SharedComponents";
import bannerImg from "./assets/contact.jpg";  
import jhajjarImg from "./assets/jhajjhar.jpg";
import { useForm, ValidationError } from '@formspree/react';

export default function ContactUs() {
  const [state, handleSubmit] = useForm('xwvdozlw');
  const [mapLocation, setMapLocation] = useState('Gurgaon');

  useEffect(() => {
    if (window.location.hash === '#inquiry-form') {
      const element = document.getElementById('inquiry-form');
      if (element) {
        // Small delay ensures DOM is fully rendered
        setTimeout(() => {
          const y = element.getBoundingClientRect().top + window.scrollY - 120;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f9fa", color: "#051226", minHeight: "100vh" }}>
      <style>{`
        
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; margin-top: 60px; align-items: start; }
        
        .contact-card {
          background: #fff; border: 1px solid var(--border); border-radius: 16px;
          padding: 32px; display: flex; gap: 20px; margin-bottom: 24px;
          box-shadow: 0 10px 30px rgba(0, 44, 108, 0.04); transition: transform 0.3s;
        }
        .contact-card:hover { transform: translateY(-5px); box-shadow: 0 15px 40px rgba(0, 44, 108, 0.08); }
        
        .icon-box {
          width: 56px; height: 56px; border-radius: 14px; background: var(--blue-light);
          color: var(--blue); display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }

        .map-container {
          width: 100%; aspect-ratio: 4/3; border-radius: 20px; overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 44, 108, 0.08); border: 1px solid var(--border);
        }

        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px; }
          .contact-card { padding: 24px; flex-direction: column; gap: 16px; }
          .map-container { aspect-ratio: 1/1; }
        }

        
        .inquiry-form {
          background: #fff; border: 1px solid var(--border); border-radius: 16px;
          padding: 32px; box-shadow: 0 10px 30px rgba(0, 44, 108, 0.04);
        }
        .form-group { margin-bottom: 20px; }
        .form-label { display: block; font-size: 13px; font-weight: 700; color: var(--dark); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em; }
        .form-input {
          width: 100%; padding: 14px 16px; border-radius: 10px; border: 1px solid var(--border);
          background: #f8f9fa; font-family: 'DM Sans', sans-serif; font-size: 15px; color: var(--dark);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-input:focus { outline: none; border-color: var(--blue); box-shadow: 0 0 0 3px var(--blue-light); background: #fff; }
        textarea.form-input { resize: vertical; min-height: 120px; }
      `}</style>

      <Navbar activePage="Contact Us" />
<section style={{ 
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        paddingTop: 80, 
        paddingBottom: 40,
        backgroundImage: `linear-gradient(180deg, rgba(5, 12, 26, 0.7) 0%, rgba(0, 44, 108, 0.85) 100%), url(${bannerImg})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundAttachment: "fixed",
        textAlign: "center" 
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%" }}>
          <div className="hero-animate" style={{ maxWidth: 800, margin: "0 auto", animationDelay: "0ms" }}>
            <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "#fff", lineHeight: 1.15, marginTop: 16 }}>
              Contact <span style={{ color: "#60a5fa" }}>Us</span>
            </h1>
            <p style={{ fontSize: 18, fontWeight: 500, color: "rgba(255, 255, 255, 0.9)", margin: "20px auto 0" }}>
              Reach out to our team for Contract Manufacturing, Turn-Key Assembly, and EMS inquiries.
            </p>
          </div>
        </div>
      </section>
<section style={{ padding: "50px 24px 50px", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection delay={50}>
            <div className="contact-grid">
<div>
              <h2 className="section-title">Let's Connect</h2>
              <div className="divider" style={{ marginBottom: 20 }}></div>
              <p style={{ fontSize: 16, color: "var(--gray)", lineHeight: 1.6, marginBottom: 40 }}>
                Have a question or need assistance? Reach out to us!<br/>
                <strong style={{ color: "var(--blue)" }}>Working Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM
              </p>
              <div className="contact-card">
                <div className="icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--dark)", marginBottom: 8 }}>Our Headquarters</h3>
                  <p style={{ fontSize: 15, color: "var(--gray)", lineHeight: 1.6 }}>
                    Focustek Manufacturing Services Pvt. Ltd.<br />
                    Plot No. 188, Sector-4, IMT Manesar,<br />
                    Gurgaon, Haryana – 122050
                  </p>
                </div>
              </div>

              <div className="contact-card">
                <div className="icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--dark)", marginBottom: 8 }}>Phone & Mobile</h3>
                  <p style={{ fontSize: 15, color: "var(--gray)", lineHeight: 1.6 }}>
                    <a href="tel:01244282696" style={{ display: "block", color: "inherit", textDecoration: "none" }}>Tel: 0124-4282696</a>
                    <a href="tel:+919311143461" style={{ display: "block", color: "var(--blue)", fontWeight: 600, marginTop: 4 }}>Mob: +91 9311143461</a>
                  </p>
                </div>
              </div>

              <div className="contact-card" style={{ marginBottom: 0 }}>
                <div className="icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--dark)", marginBottom: 8 }}>Email Address</h3>
                  <p style={{ fontSize: 15, color: "var(--gray)", lineHeight: 1.6 }}>
                    <a href="mailto:marketing@focustek.co.in" style={{ color: "var(--blue)", fontWeight: 600, textDecoration: "none" }}>marketing@focustek.co.in</a>
                  </p>
                </div>
              </div>
            </div>
<div className="inquiry-form" id="inquiry-form">
              <h3 style={{ fontSize: 24, fontWeight: 800, color: "var(--dark)", marginBottom: 24, fontFamily: "'DM Sans', sans-serif" }}>Send an Inquiry</h3>
              {state.succeeded ? (
                <div style={{ padding: "40px 20px", textAlign: "center", background: "#f0fdf4", borderRadius: "12px", border: "1px solid #bbf7d0" }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 16px" }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  <h4 style={{ fontSize: 20, fontWeight: 700, color: "#166534", marginBottom: 8 }}>Thank You!</h4>
                  <p style={{ fontSize: 16, color: "#15803d" }}>Your inquiry has been successfully sent. We will get back to you shortly.</p>
                </div>
              ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" name="fullName" className="form-input" placeholder="" required />
                  <ValidationError prefix="Name" field="fullName" errors={state.errors} style={{ color: "red", fontSize: 12, marginTop: 4, display: "block" }} />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" name="email" className="form-input" placeholder="" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} style={{ color: "red", fontSize: 12, marginTop: 4, display: "block" }} />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone / Mobile</label>
                  <input type="tel" name="phone" className="form-input" placeholder="" required />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} style={{ color: "red", fontSize: 12, marginTop: 4, display: "block" }} />
                </div>
                <div className="form-group">
                  <label className="form-label">Your Message</label>
                  <textarea name="message" className="form-input" placeholder="" required></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} style={{ color: "red", fontSize: 12, marginTop: 4, display: "block" }} />
                </div>
                <button type="submit" disabled={state.submitting} style={{
                  width: "100%", background: state.submitting ? "#ccc" : "var(--accent)", color: "#fff", fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700, fontSize: 16, padding: "16px", borderRadius: 10, border: "none",
                  cursor: state.submitting ? "not-allowed" : "pointer", transition: "background 0.2s", boxShadow: state.submitting ? "none" : "0 8px 16px rgba(255,37,0,0.2)"
                }} onMouseEnter={e => !state.submitting && (e.currentTarget.style.background = "#e62200")} onMouseLeave={e => !state.submitting && (e.currentTarget.style.background = "var(--accent)")}>
                  {state.submitting ? "Submitting..." : "Submit Inquiry"}
                </button>
              </form>
              )}
            </div>
            </div>
          </AnimSection>
        </div>
<AnimSection delay={100}>
          <div style={{ marginTop: 80 }}>
            <h2 className="section-title" style={{ textAlign: "center" }}>Find Us on Map</h2>
            <div className="divider-center" style={{ marginBottom: 30 }}></div>
            
            <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 40, flexWrap: "wrap" }}>
              <button 
                onClick={() => setMapLocation('Gurgaon')}
                style={{
                  padding: "12px 32px", fontSize: 15, fontWeight: 700, borderRadius: 30, cursor: "pointer",
                  background: mapLocation === 'Gurgaon' ? "var(--blue)" : "transparent",
                  color: mapLocation === 'Gurgaon' ? "#fff" : "var(--blue)",
                  border: "2px solid var(--blue)", transition: "all 0.3s",
                  boxShadow: mapLocation === 'Gurgaon' ? "0 4px 12px rgba(0,44,108,0.2)" : "none"
                }}
              >
                Gurgaon (HQ)
              </button>
              <button 
                onClick={() => setMapLocation('Jhajjar')}
                style={{
                  padding: "12px 32px", fontSize: 15, fontWeight: 700, borderRadius: 30, cursor: "pointer",
                  background: mapLocation === 'Jhajjar' ? "var(--blue)" : "transparent",
                  color: mapLocation === 'Jhajjar' ? "#fff" : "var(--blue)",
                  border: "2px solid var(--blue)", transition: "all 0.3s",
                  boxShadow: mapLocation === 'Jhajjar' ? "0 4px 12px rgba(0,44,108,0.2)" : "none"
                }}
              >
                Jhajjar (New Plant)
              </button>
            </div>

            <div style={{ width: "100%", height: "450px", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0, 44, 108, 0.08)", border: "1px solid var(--border)", position: "relative" }}>
              {mapLocation === 'Gurgaon' ? (
                <iframe 
                  src="https://maps.google.com/maps?q=Focustek+Manufacturing+Services+Pvt.+Ltd.,+Sector-4,+IMT+Manesar,+Gurgaon&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Focustek Location">
                </iframe>
              ) : (
                <div style={{ 
                  width: "100%", height: "100%", 
                  background: `linear-gradient(rgba(5, 18, 38, 0.7), rgba(0, 44, 108, 0.8)), url(${jhajjarImg})`, 
                  backgroundSize: "cover", backgroundPosition: "center",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  color: "#fff", textAlign: "center", padding: 24
                }}>
                  <div className="badge" style={{ background: "var(--accent)", color: "#fff", border: "none", marginBottom: 16 }}>Under Construction</div>
                  <h3 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>New Jhajjar Facility</h3>
                  <p style={{ fontSize: "1.1rem", maxWidth: 700, color: "rgba(255,255,255,0.9)", lineHeight: 1.6 }}>
                    Our brand new, state-of-the-art manufacturing plant is currently under construction at:<br/><br/>
                    <strong>Plot No. 9, Sector 10A, Street No. B, Model Economic Township, Sondhi, Tehsil-Badli, Jhajjar, Haryana</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </AnimSection>
      </section>

      <Footer />
<WhatsAppButton />
    </div>
  );
}