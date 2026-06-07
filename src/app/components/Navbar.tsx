import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Produtos", href: "#produtos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "#14233B",
        boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.18)" : "none",
        transition: "box-shadow 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 48px",
          height: 88,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
        }}
      >
        {/* Logo lockup */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", flexShrink: 0 }}>
          <div
            style={{
              width: 44,
              height: 44,
              backgroundColor: "#B85C38",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "#F4F1EA", fontSize: 22, fontWeight: 800, fontFamily: "Manrope, sans-serif" }}>A</span>
          </div>
          <p style={{ color: "#F4F1EA", fontSize: 20, fontWeight: 700, lineHeight: 1, fontFamily: "Manrope, sans-serif", letterSpacing: "0.04em" }}>
            ARNOMÁQUINAS
          </p>
        </a>

        {/* Center nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 40 }} className="hidden lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: "#F4F1EA",
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
                fontFamily: "Manrope, sans-serif",
                opacity: 0.9,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "0.9")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: phone + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, flexShrink: 0 }} className="hidden lg:flex">
          <a
            href="tel:+5555984549195"
            style={{ display: "flex", alignItems: "center", gap: 8, color: "#F4F1EA", textDecoration: "none", fontFamily: "Manrope, sans-serif", fontSize: 14, opacity: 0.75 }}
          >
            <Phone size={14} />
            <span>(55) 98454-9195</span>
          </a>
          <a
            href="#contato"
            style={{
              backgroundColor: "#B85C38",
              color: "#F4F1EA",
              padding: "10px 24px",
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "Manrope, sans-serif",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: 2,
              transition: "background-color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#984828")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#B85C38")}
          >
            Solicitar Orçamento
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", color: "#F4F1EA", cursor: "pointer", padding: 8 }}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ backgroundColor: "#14233B", borderTop: "1px solid #1D3252", padding: "16px 24px 24px" }}>
          <nav style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#F4F1EA",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  textDecoration: "none",
                  padding: "14px 0",
                  borderBottom: "1px solid #1D3252",
                  letterSpacing: "0.04em",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              style={{
                backgroundColor: "#B85C38",
                color: "#F4F1EA",
                padding: "12px 24px",
                fontSize: 14,
                fontWeight: 700,
                fontFamily: "Manrope, sans-serif",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                textAlign: "center",
                marginTop: 16,
                borderRadius: 2,
              }}
            >
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
