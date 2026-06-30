import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimSection, WhatsAppButton } from "./SharedComponents";
import customersBg from "./assets/customers.jpg";

import img4w1 from "./assets/customers/4w1.jpg";
import img4w2 from "./assets/customers/4w2.jpg";
import img4w3 from "./assets/customers/4w3.jpg";
import img4w4 from "./assets/customers/4w4.png";
import img4w5 from "./assets/customers/4w5.jpg";
import img4w6 from "./assets/customers/4w6.jpg";

import img2w1 from "./assets/customers/2w1.jpg";
import img2w2 from "./assets/customers/2w2.jpg";
import img2w3 from "./assets/customers/2w3.jpg";
import img2w4 from "./assets/customers/2w4.jpg";
import img2w5 from "./assets/customers/2w5.jpg";
import img2w6 from "./assets/customers/2w6.jpg";
import img2w8 from "./assets/customers/2w8.jpg";

import imgCe1 from "./assets/customers/ce1.jpg";
import imgCe2 from "./assets/customers/ce2.jpg";
import imgCe3 from "./assets/customers/ce3.jpg";

const CUSTOMER_DATA = [
  {
    category: "4 Wheelers & Industrial Vehicle",
    images: [
      img4w1,
      img4w2,
      img4w3,
      img4w4,
      img4w5,
      img4w6,
    ]
  },
  {
    category: "2 Wheelers",
    images: [
      img2w1,
      img2w2,
      img2w3,
      img2w4,
      img2w5,
      img2w6,
      img2w8,
    ]
  },
  {
    category: "Consumer Electronics",
    images: [
      imgCe1,
      imgCe2,
      imgCe3,
    ]
  }
];

export default function Customers() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f9fa", color: "#051226", minHeight: "100vh" }}>
      <Navbar activePage="Company" />
<section style={{ 
        minHeight: "100vh", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 80, 
        paddingBottom: 40,
        backgroundImage: `linear-gradient(180deg, rgba(5, 12, 26, 0.55) 0%, rgba(0, 44, 108, 0.7) 100%), url(${customersBg})`,
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
              Our Customers
            </h1>
            <p style={{
              fontSize: 18, 
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.95)",
              margin: "0 auto",
              lineHeight: 1.6,
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
            }}>
              Over the last 14 years, we have been the preferred supplier for all major electronic PCB assembly and manufacturing in India, and aspire to maintain this leadership position.
            </p>
          </div>
        </div>
      </section>
<section style={{ padding: "50px 24px 50px", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div className="badge">Trusted By Leaders</div>
              <h2 className="section-title">Our End Customers</h2>
              <div className="divider-center"></div>
              <p style={{ fontSize: 16, color: "var(--gray)", maxWidth: 700, margin: "20px auto 0", lineHeight: 1.75 }}>
                We are extremely proud to partner with these highly respected global and domestic brands across multiple sectors.
              </p>
            </div>
          </AnimSection>

          <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
            {CUSTOMER_DATA.map((group, idx) => (
              <AnimSection key={idx} delay={idx * 100}>
                <div>
                  <h3 style={{ 
                    fontSize: "1.5rem", 
                    fontWeight: 700, 
                    color: "var(--dark)", 
                    marginBottom: 8,
                    textAlign: "center"
                  }}>
                    {group.category}
                  </h3>
                  <div className="divider-center" style={{ marginBottom: 32 }}></div>
<div style={{ 
                    display: "grid", 
                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", 
                    gap: 24 
                  }}>
                    {group.images.map((imgSrc, imgIdx) => (
                      <div key={imgIdx} style={{
                        background: "#fff",
                        borderRadius: "12px",
                        padding: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        aspectRatio: "3 / 2",
                        border: "1px solid var(--border)",
                        boxShadow: "0 4px 12px rgba(0,44,108,0.03)",
                        transition: "all 0.3s ease",
                        cursor: "default"
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,44,108,0.08)";
                        e.currentTarget.style.borderColor = "var(--blue-light)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,44,108,0.03)";
                        e.currentTarget.style.borderColor = "var(--border)";
                      }}>
                        <img 
                          src={imgSrc} 
                          alt={`Customer Logo ${imgIdx + 1}`} 
                          style={{ 
                            width: "100%", 
                            height: "100%", 
                            objectFit: "contain",
                            filter: "grayscale(10%)",
                            transition: "filter 0.3s ease"
                          }} 
                          onMouseEnter={e => e.currentTarget.style.filter = "grayscale(0%)"}
                          onMouseLeave={e => e.currentTarget.style.filter = "grayscale(10%)"}
                          onError={(e) => {

                            e.target.style.display = "none";
                            e.target.parentNode.innerHTML += `<span style="color:var(--gray);font-size:0.85rem;font-weight:600;">Logo Pending</span>`;
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>

        </div>
      </section>

      <Footer />
      <WhatsAppButton message="Hello Focustek, I saw your esteemed customer list and would like to discuss a partnership." />
    </div>
  );
}
