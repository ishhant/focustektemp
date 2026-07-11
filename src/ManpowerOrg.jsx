import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimSection, WhatsAppButton } from "./SharedComponents";
import manpowerBg from "./assets/manpower.jpg";

export default function ManpowerOrg() {
  const [menuOpen, setMenuOpen] = useState(false);

  const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Company", href: "/company" },
    { label: "Business", href: "/business" },
    { label: "Products & Services", href: "/products-services" },
    { label: "Machines & Plants", href: "/machines-plants" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8f9fa", color: "#051226", minHeight: "100vh" }}>
      <style>{`
        
        .stat-card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid var(--border);
          padding: 32px;
          text-align: center;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0,44,108,0.08);
        }

        .stat-value {
          font-family: 'DM Sans', sans-serif;
          font-size: 3rem;
          font-weight: 800;
          color: var(--blue);
          margin-bottom: 8px;
        }
        
        .stat-label {
          font-size: 15px;
          font-weight: 600;
          color: var(--gray);
        }

        
        .org-chart-wrapper {
          width: 100%;
          overflow-x: auto;
          padding: 20px 20px 60px 20px;
          text-align: center;
          -webkit-overflow-scrolling: touch;
        }
        
        .org-chart-wrapper::-webkit-scrollbar {
          height: 6px;
        }
        .org-chart-wrapper::-webkit-scrollbar-thumb {
          background-color: var(--blue-light);
          border-radius: 10px;
        }

        .tree {
          display: inline-block;
          white-space: nowrap;
          min-width: min-content;
        }
        
        @media (max-width: 1250px) { .tree { zoom: 0.85; } }
        @media (max-width: 1050px) { .tree { zoom: 0.75; } }
        @media (max-width: 850px) { .tree { zoom: 0.65; } }
        @media (max-width: 650px) { .tree { zoom: 0.55; } }

        .tree ul {
          padding-top: 12px;
          position: relative;
          display: flex;
          justify-content: center;
          list-style: none;
          padding-left: 0;
          margin: 0;
        }
        .tree li {
          float: left;
          text-align: center;
          list-style-type: none;
          position: relative;
          padding: 12px 3px 0 3px;
        }
        
        
        .tree li::before, .tree li::after {
          content: '';
          position: absolute; top: 0; right: 50%;
          border-top: 1px solid #94a3b8;
          width: 50%; height: 12px;
        }
        .tree li::after {
          right: auto; left: 50%;
          border-left: 1px solid #94a3b8;
          margin-left: -1px;
        }
        .tree li:only-child::after, .tree li:only-child::before {
          display: none;
        }
        .tree li:only-child { padding-top: 0; }
        .tree li:first-child::before, .tree li:last-child::after {
          border: 0 none;
        }
        .tree li:last-child::before {
          border-right: 1px solid #94a3b8;
          border-radius: 0 4px 0 0;
        }
        .tree li:first-child::after {
          border-radius: 4px 0 0 0;
        }
        .tree ul ul::before {
          content: '';
          position: absolute; top: 0; left: 50%;
          border-left: 1px solid #94a3b8;
          width: 0; height: 12px;
          margin-left: -1px;
        }
        
        
        .tree li .node {
          border: 1px solid var(--dark);
          padding: 5px 8px;
          text-decoration: none;
          color: var(--dark);
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 700;
          display: inline-block;
          border-radius: 4px;
          background: #fff;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }
        .tree li .node.primary {
          border: 2px solid #2563eb;
          color: #2563eb;
          font-size: 13px;
          padding: 8px 22px;
        }
        .tree li .node.filled {
          background: #2563eb;
          color: #fff;
          border-color: #2563eb;
          padding: 6px 14px;
          font-size: 10px;
        }
      `}</style>
<Navbar activePage="Company" />

      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} className="nav-link" onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href="/contact-us" className="btn-primary" style={{ marginTop: 8, justifyContent: "center" }} onClick={() => setMenuOpen(false)}>Get in Touch</a>
        </div>
      )}
<section style={{ 
        minHeight: "100vh", 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 80, 
        paddingBottom: 40,
        backgroundImage: `linear-gradient(180deg, rgba(5, 12, 26, 0.45) 0%, rgba(0, 44, 108, 0.5) 100%), url(${manpowerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%" }}>
          <div style={{ textAlign: "center", maxWidth: 850, margin: "0 auto" }}>
            <div className="hero-animate" style={{ animationDelay: "0ms" }}>
            </div>
            
            <h1 className="hero-title hero-animate" style={{ animationDelay: "80ms", textShadow: "0 4px 16px rgba(0, 0, 0, 0.4)", marginTop: 16 }}>
              Manpower & <span style={{ color: "#60a5fa" }}>Organization</span>
            </h1>
            
            <p className="hero-animate" style={{ animationDelay: "160ms", fontSize: 18, fontWeight: 500, color: "rgba(255, 255, 255, 0.95)", lineHeight: 1.6, marginTop: 20, maxWidth: 720, margin: "20px auto 0", textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)" }}>
              Our Employees are our Company. Operating an efficient organization that creates the best synergy with technology and experience.
            </p>
          </div>
        </div>
      </section>
<section style={{ padding: "50px 24px", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="badge">FOCUSTEK's Manpower</div>
              <h2 className="section-title">Our Growing Team</h2>
              <div className="divider-center"></div>
              <p style={{ fontSize: 16, color: "var(--gray)", maxWidth: 700, margin: "20px auto 0", lineHeight: 1.75 }}>
              Since its establishment in January 2007, Focustek has grown to a strong workforce of 299 dedicated professionals. We believe in nurturing talent and building long-lasting relationships with our team members.
            </p>
          </div>
        </AnimSection>

        <AnimSection delay={100}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 30 }}>
<div className="stat-card" style={{ padding: "32px", display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontSize: 22, color: "var(--dark)", marginBottom: 24, fontWeight: 700 }}>Employee Experience</h3>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", flex: 1 }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--border)" }}>
                    <th style={{ padding: "12px 8px", color: "var(--gray)", fontWeight: 600 }}>Years</th>
                    <th style={{ padding: "12px 8px", color: "var(--gray)", fontWeight: 600, textAlign: "right" }}>No. of Employees</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "14px 8px", color: "var(--dark)", fontWeight: 500 }}>15 to 20 Years</td>
                    <td style={{ padding: "14px 8px", color: "var(--blue)", fontWeight: 700, textAlign: "right", fontSize: 16 }}>16</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "14px 8px", color: "var(--dark)", fontWeight: 500 }}>10 to 15 Years</td>
                    <td style={{ padding: "14px 8px", color: "var(--blue)", fontWeight: 700, textAlign: "right", fontSize: 16 }}>14</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "14px 8px", color: "var(--dark)", fontWeight: 500 }}>5 to 10 Years</td>
                    <td style={{ padding: "14px 8px", color: "var(--blue)", fontWeight: 700, textAlign: "right", fontSize: 16 }}>20</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "14px 8px", color: "var(--dark)", fontWeight: 500 }}>3 to 5 Years</td>
                    <td style={{ padding: "14px 8px", color: "var(--blue)", fontWeight: 700, textAlign: "right", fontSize: 16 }}>23</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "14px 8px", color: "var(--dark)", fontWeight: 500 }}>1 to 3 Years</td>
                    <td style={{ padding: "14px 8px", color: "var(--blue)", fontWeight: 700, textAlign: "right", fontSize: 16 }}>69</td>
                  </tr>
                  <tr style={{ borderBottom: "2px solid var(--border)" }}>
                    <td style={{ padding: "14px 8px", color: "var(--dark)", fontWeight: 500 }}>Less than 1 Year</td>
                    <td style={{ padding: "14px 8px", color: "var(--blue)", fontWeight: 700, textAlign: "right", fontSize: 16 }}>157</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "16px 8px 4px 8px", color: "var(--dark)", fontWeight: 800, fontSize: 18 }}>Total</td>
                    <td style={{ padding: "16px 8px 4px 8px", color: "var(--blue)", fontWeight: 800, textAlign: "right", fontSize: 24 }}>299</td>
                  </tr>
                </tbody>
              </table>
            </div>
<div className="stat-card" style={{ padding: "32px", display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontSize: 22, color: "var(--dark)", marginBottom: 24, fontWeight: 700 }}>Employment Type</h3>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", flex: 1 }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--border)" }}>
                    <th style={{ padding: "12px 8px", color: "var(--gray)", fontWeight: 600 }}>Category</th>
                    <th style={{ padding: "12px 8px", color: "var(--gray)", fontWeight: 600, textAlign: "right" }}>No. of Employees</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "14px 8px", color: "var(--dark)", fontWeight: 500 }}>Staff (On Roll)</td>
                    <td style={{ padding: "14px 8px", color: "var(--blue)", fontWeight: 700, textAlign: "right", fontSize: 16 }}>31</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "14px 8px", color: "var(--dark)", fontWeight: 500 }}>Workers (On Roll)</td>
                    <td style={{ padding: "14px 8px", color: "var(--blue)", fontWeight: 700, textAlign: "right", fontSize: 16 }}>58</td>
                  </tr>
                  <tr style={{ borderBottom: "2px solid var(--border)" }}>
                    <td style={{ padding: "14px 8px", color: "var(--dark)", fontWeight: 700 }}>Total On Roll</td>
                    <td style={{ padding: "14px 8px", color: "var(--blue)", fontWeight: 700, textAlign: "right", fontSize: 18 }}>89</td>
                  </tr>
                  <tr style={{ borderBottom: "2px solid var(--border)" }}>
                    <td style={{ padding: "14px 8px", color: "var(--dark)", fontWeight: 500 }}>Casual Workers</td>
                    <td style={{ padding: "14px 8px", color: "var(--blue)", fontWeight: 700, textAlign: "right", fontSize: 16 }}>210</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "16px 8px 4px 8px", color: "var(--dark)", fontWeight: 800, fontSize: 18 }}>Total Manpower</td>
                    <td style={{ padding: "16px 8px 4px 8px", color: "var(--blue)", fontWeight: 800, textAlign: "right", fontSize: 24 }}>299</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </AnimSection>
        </div>
      </section>
<section style={{ padding: "50px 24px", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="badge">Structure</div>
              <h2 className="section-title">Organizational Chart</h2>
              <div className="divider-center"></div>
            </div>
          </AnimSection>

          <AnimSection delay={150}>
<div className="org-chart-wrapper">
              <div className="tree">
                <ul>
                  <li>
                    <div className="node primary">M.D.</div>
                    <ul>
                      {/* QUALITY Director branch (far left) */}
                      <li style={{ width: "420px" }}>
                        <div className="node filled">QUALITY DIRECTOR</div>
                        <ul>
                          <li>
                            <div className="node">QUALITY HEAD</div>
                            <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                              
                              {/* Gap to Row 1 */}
                              <div style={{ width: "100%", height: "12px", position: "relative" }}>
                                <div style={{ position: "absolute", top: 0, left: "50%", marginLeft: "-1px", width: 0, height: "100%", borderLeft: "1px solid #94a3b8", zIndex: 0 }}></div>
                              </div>
                              
                              {/* Row 1 */}
                              <div style={{ display: "flex", width: "100%", position: "relative", justifyContent: "center" }}>
                                {/* Central Trunk for Row 1 */}
                                <div style={{ position: "absolute", top: 0, left: "50%", marginLeft: "-1px", width: 0, height: "100%", borderLeft: "1px solid #94a3b8", zIndex: 0 }}></div>
                                
                                <div style={{ flex: 1, position: "relative", display: "flex", justifyContent: "center" }}>
                                   {/* Horizontal line */}
                                   <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: 0, borderTop: "1px solid #94a3b8" }}></div>
                                   {/* Drop */}
                                   <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>
                                      <div style={{ width: 0, height: "12px", borderLeft: "1px solid #94a3b8" }}></div>
                                      <div className="node" style={{ margin: "0 5px" }}>QA-NPD ENGINEER</div>
                                   </div>
                                </div>
                                <div style={{ flex: 1, position: "relative", display: "flex", justifyContent: "center" }}>
                                   {/* Horizontal line */}
                                   <div style={{ position: "absolute", top: 0, left: 0, width: "50%", height: 0, borderTop: "1px solid #94a3b8" }}></div>
                                   {/* Drop */}
                                   <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>
                                      <div style={{ width: 0, height: "12px", borderLeft: "1px solid #94a3b8" }}></div>
                                      <div className="node" style={{ margin: "0 5px" }}>QA-QMS ENGINEER</div>
                                   </div>
                                </div>
                              </div>

                              {/* Gap to Row 2 */}
                              <div style={{ width: "100%", height: "12px", position: "relative" }}>
                                <div style={{ position: "absolute", top: 0, left: "50%", marginLeft: "-1px", width: 0, height: "100%", borderLeft: "1px solid #94a3b8", zIndex: 0 }}></div>
                              </div>

                              {/* Row 2 */}
                              <div style={{ display: "flex", width: "100%", position: "relative", justifyContent: "center" }}>
                                <div style={{ flex: 1, position: "relative", display: "flex", justifyContent: "center" }}>
                                   {/* Horizontal line */}
                                   <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: 0, borderTop: "1px solid #94a3b8" }}></div>
                                   {/* Drop */}
                                   <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>
                                      <div style={{ width: 0, height: "12px", borderLeft: "1px solid #94a3b8" }}></div>
                                      <div className="node" style={{ margin: "0 5px" }}>QA-CUSTOMER ENGINEER</div>
                                   </div>
                                </div>
                                <div style={{ flex: 1, position: "relative", display: "flex", justifyContent: "center" }}>
                                   {/* Horizontal line */}
                                   <div style={{ position: "absolute", top: 0, left: 0, width: "50%", height: 0, borderTop: "1px solid #94a3b8" }}></div>
                                   {/* Drop */}
                                   <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>
                                      <div style={{ width: 0, height: "12px", borderLeft: "1px solid #94a3b8" }}></div>
                                      <div className="node" style={{ margin: "0 5px" }}>IGI INSPECTOR</div>
                                   </div>
                                </div>
                              </div>

                            </div>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <div className="node filled">MARKETING AND OPERATIONS</div>
                        <ul>
                          <li>
                            <div className="node">HR HEAD</div>
                            <ul>
                              <li><div className="node">HR EXECUTIVE</div></li>
                            </ul>
                          </li>
                          <li>
                            <div className="node">STORE HEAD</div>
                            <ul>
                              <li><div className="node">DISPATCH ASSISTANT</div></li>
                            </ul>
                          </li>
                          <li><div className="node">PURCHASE HEAD</div></li>
                          <li>
                            <div className="node">DEVELOPMENT HEAD</div>
                            <ul>
                              <li><div className="node">MECHANICAL QA ENGINEER</div></li>
                              <li><div className="node">MECHANICAL ENGINEER</div></li>
                            </ul>
                          </li>
                          <li>
                            <div className="node">SMT HEAD</div>
                            <div style={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                              
                              {/* Gap to Row 1 */}
                              <div style={{ width: "100%", height: "12px", position: "relative" }}>
                                <div style={{ position: "absolute", top: 0, left: "50%", marginLeft: "-1px", width: 0, height: "100%", borderLeft: "1px solid #94a3b8", zIndex: 0 }}></div>
                              </div>
                              
                              <div style={{ display: "flex", width: "100%", position: "relative", justifyContent: "center" }}>
                                <div style={{ position: "absolute", top: 0, left: "50%", marginLeft: "-1px", width: 0, height: "100%", borderLeft: "1px solid #94a3b8", zIndex: 0 }}></div>
                                
                                <div style={{ flex: 1, position: "relative", display: "flex", justifyContent: "center" }}>
                                   {/* Horizontal line */}
                                   <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: 0, borderTop: "1px solid #94a3b8" }}></div>
                                   {/* Drop */}
                                   <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>
                                      <div style={{ width: 0, height: "12px", borderLeft: "1px solid #94a3b8" }}></div>
                                      <div className="node" style={{ margin: "0 5px" }}>SMT TEAM LEADER 1</div>
                                   </div>
                                </div>
                                <div style={{ flex: 1, position: "relative", display: "flex", justifyContent: "center" }}>
                                   {/* Horizontal line */}
                                   <div style={{ position: "absolute", top: 0, left: 0, width: "50%", height: 0, borderTop: "1px solid #94a3b8" }}></div>
                                   {/* Drop */}
                                   <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>
                                      <div style={{ width: 0, height: "12px", borderLeft: "1px solid #94a3b8" }}></div>
                                      <div className="node" style={{ margin: "0 5px" }}>SMT TEAM LEADER 2</div>
                                   </div>
                                </div>
                              </div>

                              {/* Gap to Row 2 */}
                              <div style={{ width: "100%", height: "12px", position: "relative" }}>
                                <div style={{ position: "absolute", top: 0, left: "50%", marginLeft: "-1px", width: 0, height: "100%", borderLeft: "1px solid #94a3b8", zIndex: 0 }}></div>
                              </div>

                              {/* Row 2 */}
                              <div style={{ display: "flex", width: "100%", position: "relative", justifyContent: "center" }}>
                                <div style={{ flex: 1, position: "relative", display: "flex", justifyContent: "center" }}>
                                   {/* Horizontal line */}
                                   <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: 0, borderTop: "1px solid #94a3b8" }}></div>
                                   {/* Drop */}
                                   <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>
                                      <div style={{ width: 0, height: "12px", borderLeft: "1px solid #94a3b8" }}></div>
                                      <div className="node" style={{ margin: "0 5px" }}>SMT TEAM LEADER 3</div>
                                   </div>
                                </div>
                                <div style={{ flex: 1, position: "relative", display: "flex", justifyContent: "center" }}>
                                   {/* Horizontal line */}
                                   <div style={{ position: "absolute", top: 0, left: 0, width: "50%", height: 0, borderTop: "1px solid #94a3b8" }}></div>
                                   {/* Drop */}
                                   <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>
                                      <div style={{ width: 0, height: "12px", borderLeft: "1px solid #94a3b8" }}></div>
                                      <div className="node" style={{ margin: "0 5px" }}>PPC ENGINEER</div>
                                   </div>
                                </div>
                              </div>

                            </div>
                          </li>
                          <li>
                            <div className="node">MAINTENANCE HEAD</div>
                            <ul>
                              <li><div className="node">MAINTENANCE EXECUTIVE</div></li>
                              <li><div className="node">IT EXECUTIVE</div></li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      {/* R&D and ACCOUNTS grouped to perfectly balance the Quality branch width */}
                      <li style={{ width: "420px", paddingTop: 0 }}>
                        <ul style={{ padding: 0, display: "flex", justifyContent: "center" }}>
                          <li>
                            <div className="node filled">R & D DIRECTOR</div>
                          </li>
                          <li>
                            <div className="node filled">ACCOUNTS MANAGER</div>
                            <ul>
                              <li><div className="node">ACCOUNTS EXECUTIVE</div></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </AnimSection>
        </div>
      </section>
<Footer />
<WhatsAppButton message="Hello Focustek, I want to know more." />
    </div>
  );
}