import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimSection, WhatsAppButton } from "./SharedComponents";
import regulationsBg from "./assets/regulations.jpg";
import apronImg from "./assets/regulations/apron.jpg";
import capImg from "./assets/regulations/cap.jpg";
import glovesImg from "./assets/regulations/gloves.jpg";
import slippersImg from "./assets/regulations/slippers.jpg";

export default function Regulations() {
  const regulations = [
    {
      title: "Anti-Static ESD Safe Apron / Coat",
      desc: "Used for Static Protection across all assembly lines.",
      img: apronImg
    },
    {
      title: "Anti-Static ESD Safe Cap",
      desc: "Mandatory in electronic working zones to prevent contamination.",
      img: capImg
    },
    {
      title: "Anti-Static ESD Safe Gloves",
      desc: "Used in electronic working for the protection of sensitive components.",
      img: glovesImg
    },
    {
      title: "Anti-Static ESD Safe Slippers",
      desc: "Required footwear for complete Static Protection on the shop floor.",
      img: slippersImg
    }
  ];

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
        backgroundImage: `linear-gradient(180deg, rgba(5, 12, 26, 0.55) 0%, rgba(0, 44, 108, 0.7) 100%), url(${regulationsBg})`,
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
              Workplace Regulations
            </h1>
            <p style={{
              fontSize: 18, 
              fontWeight: 500,
              color: "rgba(255, 255, 255, 0.95)",
              margin: "0 auto",
              lineHeight: 1.6,
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
            }}>
              FOCUSTEK wears safety gear in the electronic PCB assembly work place to maintain the safety of workers and product quality. Rules to be followed at work place.
            </p>
          </div>
        </div>
      </section>
<section style={{ padding: "50px 24px", background: "transparent", textAlign: "center" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <AnimSection>
            <div className="badge">Safety First</div>
            <h2 className="section-title" style={{ marginBottom: 24 }}>Mandatory Safety Gear</h2>
            <div className="divider-center"></div>
            <p style={{ fontSize: 17, color: "var(--gray)", lineHeight: 1.8, marginBottom: 20 }}>
              Our cutting-edge electronic manufacturing processes require an environment entirely free of static electricity and contamination. To ensure the highest quality standards and personal safety, all personnel are strictly required to use the following gear on the shop floor.
            </p>
          </AnimSection>
        </div>
      </section>
<section style={{ padding: "0 24px 50px", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 24 }}>
            {regulations.map((card, idx) => (
              <AnimSection key={idx} delay={idx * 50}>
                <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%", padding: 20 }}>
                  <div style={{ 
                    width: "100%", 
                    aspectRatio: "1 / 1", 
                    borderRadius: "12px", 
                    overflow: "hidden", 
                    background: "#ffffff", 
                    marginBottom: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "16px",
                    border: "1px solid var(--border)"
                  }}>
                    <img 
                      src={card.img} 
                      alt={card.title} 
                      style={{ 
                        width: "100%", 
                        height: "100%", 
                        objectFit: "contain", 
                        objectPosition: "center" 
                      }} 
                      onError={(e) => {
                        e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='16' font-weight='bold' fill='%23002c6c' dominant-baseline='middle' text-anchor='middle'%3EImage%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--dark)", marginBottom: 10, textAlign: "center" }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "var(--gray)", lineHeight: 1.65, textAlign: "center" }}>
                    {card.desc}
                  </p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppButton message="Hello Focustek, I have an inquiry regarding workplace regulations and safety." />

    </div>
  );
}