import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

function WhatsAppIcon({ size = 14 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const WHATSAPP_URL = `https://wa.me/5555984549195?text=${encodeURIComponent(
  "Olá, meu nome é [SEU NOME], vim pelo site, e gostaria de "
)}`;

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
        backgroundColor: "var(--surface-default)",
        boxShadow: scrolled ? "var(--shadow-header)" : "none",
        borderBottom: scrolled ? "none" : "1px solid var(--border-brand-faint)",
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
              backgroundColor: "var(--brand-primary)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "var(--text-on-brand)", fontSize: 22, fontWeight: 800, fontFamily: "Manrope, sans-serif" }}>A</span>
          </div>
          <p style={{ color: "var(--text-primary)", fontSize: 20, fontWeight: 700, lineHeight: 1, fontFamily: "Manrope, sans-serif", letterSpacing: "0.04em" }}>
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
                color: "var(--text-primary)",
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
                fontFamily: "Manrope, sans-serif",
                opacity: 0.82,
                transition: "opacity 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.color = "var(--brand-primary)"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "0.82"; e.currentTarget.style.color = "var(--text-primary)"; }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: phone + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, flexShrink: 0 }} className="hidden lg:flex">
          <a
            href="tel:+5555984549195"
            style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-primary)", textDecoration: "none", fontFamily: "Manrope, sans-serif", fontSize: 14, opacity: 0.7 }}
          >
            <Phone size={14} />
            <span>(55) 98454-9195</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              backgroundColor: "var(--brand-primary)",
              color: "var(--text-on-brand)",
              padding: "10px 24px",
              fontSize: 14,
              fontWeight: 300,
              fontFamily: "Manrope, sans-serif",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: 2,
              transition: "background-color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--brand-primary-hover)")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--brand-primary)")}
          >
            <WhatsAppIcon size={16} />
            Solicitar Orçamento
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", color: "var(--text-primary)", cursor: "pointer", padding: 8 }}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ backgroundColor: "var(--surface-default)", borderTop: "1px solid var(--border-brand-subtle)", padding: "16px 24px 24px" }}>
          <nav style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "var(--text-primary)",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  textDecoration: "none",
                  padding: "14px 0",
                  borderBottom: "1px solid var(--border-brand-subtle)",
                  letterSpacing: "0.04em",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                backgroundColor: "var(--brand-primary)",
                color: "var(--text-on-brand)",
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
              <WhatsAppIcon size={16} />
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
