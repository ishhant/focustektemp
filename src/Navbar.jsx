  import { useState, useEffect } from "react";
  import logoImg from "./assets/logo.png"; 

  const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Company", href: "/company" },
    { label: "Business", href: "/business" },
    { label: "Products & Services", href: "/products-services" },
    { label: "Machines & Plants", href: "/machines-plants" },
  ];

  export default function Navbar({ activePage }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 40);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
          <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@700;800&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --blue: #002c6c;
  --blue-light: #eef3fb;
  --blue-mid: #0b3c82;
  --accent: #ff2500;
  --accent-light: #fff0ed;
  --dark: #051226;
  --gray: #525f7a;
  --border: #e1e6f0;
}
          a { text-decoration: none; color: inherit; }

          .nav-link {
            font-size: 14px;
            font-weight: 600;
            color: var(--gray);
            padding: 8px 14px;
            border-radius: 8px;
            transition: background 0.2s, color 0.2s;
          }
          .nav-link:hover { background: var(--blue-light); color: var(--blue); }

          .btn-primary {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: var(--blue);
            color: #fff;
            font-family: 'DM Sans', sans-serif;
            font-size: 14px;
            font-weight: 600;
            padding: 12px 24px;
            border-radius: 10px;
            border: none;
            cursor: pointer;
            transition: background 0.2s, transform 0.15s;
          }
          .btn-primary:hover { background: var(--blue-mid); transform: translateY(-1px); }

          .show-mobile { display: none !important; }

          .mobile-menu {
            position: fixed; top: 64px; left: 0; right: 0;
            background: #fff; border-bottom: 1px solid var(--border);
            padding: 16px 20px; display: flex; flex-direction: column;
            gap: 6px; z-index: 999; animation: slideDown 0.2s ease;
          }

          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-8px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @media (max-width: 768px) {
            .hide-mobile { display: none !important; }
            .show-mobile { display: inline-block !important; }
          }
            .whatsapp-float {
          position: fixed; bottom: 30px; right: 30px;
          background-color: #25d366; color: #fff;
          width: 60px; height: 60px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.35);
          z-index: 1000; transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .whatsapp-float:hover { transform: translateY(-5px) scale(1.08); box-shadow: 0 12px 30px rgba(37, 211, 102, 0.5); color: #fff; }
        .whatsapp-icon { width: 32px; height: 32px; fill: currentColor; }
        @media (max-width: 768px) {
          .whatsapp-float { bottom: 20px; right: 20px; width: 50px; height: 50px; }
          .whatsapp-icon { width: 26px; height: 26px; }
        }
        `}</style>
        
        
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          background: scrolled ? "rgba(255,255,255,0.96)" : "rgba(248,249,255,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "all 0.3s ease",
        }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
<div style={{ flex: 1, display: "flex" }}>
              <a href="/" style={{ display: "flex", alignItems: "center" }}>
                <img src={logoImg} alt="FOCUSTEK" style={{ height: "40px", width: "auto" }} />
              </a>
            </div>
<div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 4, justifyContent: "center" }}>
              {NAV_LINKS.map(l => (
                <a 
                  key={l.label} 
                  href={l.href} 
                  className="nav-link" 
                  
                  style={l.label === activePage ? { color: "var(--blue)", background: "var(--blue-light)" } : {}}
                >
                  {l.label}
                </a>
              ))}
            </div>
<div style={{ flex: 1, display: "flex", alignItems: "center", gap: 12, justifyContent: "flex-end" }}>
              <a href="/contact-us" className="btn-primary hide-mobile" style={{ padding: "10px 20px", fontSize: 13 }}>
                Contact Us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <button
                onClick={() => setMenuOpen(o => !o)}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 6 }}
                className="show-mobile"
                aria-label="Menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  {menuOpen
                    ? <path d="M6 18L18 6M6 6l12 12" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" />
                    : <path d="M4 6h16M4 12h16M4 18h16" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" />}
                </svg>
              </button>
            </div>

          </div>
        </nav>
{menuOpen && (
          <div className="mobile-menu">
            {NAV_LINKS.map(l => (
              <a 
                key={l.label} 
                href={l.href} 
                className="nav-link" 
                onClick={() => setMenuOpen(false)}
                style={l.label === activePage ? { color: "var(--blue)", background: "var(--blue-light)" } : {}}
              >
                {l.label}
              </a>
            ))}
            <a href="/contact-us" className="btn-primary" style={{ marginTop: 8, justifyContent: "center" }} onClick={() => setMenuOpen(false)}>Contact Us</a>
          </div>
        )}
      </>
    );
  }