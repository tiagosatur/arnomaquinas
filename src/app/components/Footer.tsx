import { Instagram, Linkedin, Facebook, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{ backgroundColor: "var(--surface-anchor)", borderTop: "1px solid var(--border-on-brand-subtle)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "64px 48px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "var(--text-on-brand)",
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "var(--brand-primary)", fontSize: 18, fontWeight: 800, fontFamily: "Manrope, sans-serif" }}>A</span>
              </div>
              <div>
                <p style={{ color: "var(--text-on-brand)", fontSize: 16, fontWeight: 700, fontFamily: "Manrope, sans-serif", letterSpacing: "0.04em" }}>
                  ARNOMÁQUINAS
                </p>
                <p style={{ color: "var(--text-on-brand-secondary)", fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "Manrope, sans-serif" }}>
                  Desde 1975
                </p>
              </div>
            </div>
            <p
              style={{
                color: "var(--text-on-brand-secondary)",
                fontSize: 14,
                lineHeight: 1.8,
                fontFamily: "Manrope, sans-serif",
                maxWidth: 280,
              }}
            >
              50 anos transformando ambientes corporativos com móveis, equipamentos e soluções completas para escritório.
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
              {[
                { Icon: Instagram, href: "https://www.instagram.com/arnomaquinas/", label: "Instagram" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Facebook, href: "#", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href === "#" ? undefined : "_blank"}
                  rel={href === "#" ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  style={{
                    width: 36,
                    height: 36,
                    border: "1px solid var(--border-on-brand-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-on-brand-secondary)",
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "var(--text-on-brand-secondary)";
                    e.currentTarget.style.color = "var(--text-on-brand)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "var(--border-on-brand-subtle)";
                    e.currentTarget.style.color = "var(--text-on-brand-secondary)";
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h5
              style={{
                color: "var(--text-on-brand)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontFamily: "Manrope, sans-serif",
                marginBottom: 20,
              }}
            >
              Navegação
            </h5>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Sobre Nós", href: "#sobre" },
                { label: "Produtos", href: "#produtos" },
                { label: "Serviços", href: "#servicos" },
                { label: "Assistência Técnica", href: "#servicos" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      color: "var(--text-on-brand-secondary)",
                      fontSize: 14,
                      fontFamily: "Manrope, sans-serif",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--text-on-brand)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-on-brand-secondary)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h5
              style={{
                color: "var(--text-on-brand)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontFamily: "Manrope, sans-serif",
                marginBottom: 20,
              }}
            >
              Produtos
            </h5>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Móveis de Escritório",
                "Cadeiras e Poltronas",
                "Calculadoras",
                "Relógios de Ponto",
                "Destruidoras de Papel",
                "Material de Expediente",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#produtos"
                    style={{
                      color: "var(--text-on-brand-secondary)",
                      fontSize: 14,
                      fontFamily: "Manrope, sans-serif",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--text-on-brand)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-on-brand-secondary)")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato rápido */}
          <div>
            <h5
              style={{
                color: "var(--text-on-brand)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontFamily: "Manrope, sans-serif",
                marginBottom: 20,
              }}
            >
              Contato
            </h5>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <p style={{ color: "var(--text-on-brand-secondary)", fontSize: 14, fontFamily: "Manrope, sans-serif", lineHeight: 1.6 }}>
                (55) 98454-9195
              </p>
              <p style={{ color: "var(--text-on-brand-secondary)", fontSize: 14, fontFamily: "Manrope, sans-serif", lineHeight: 1.6 }}>
                contato@arnomaquinas.com.br
              </p>
              <p style={{ color: "var(--text-on-brand-secondary)", fontSize: 14, fontFamily: "Manrope, sans-serif", lineHeight: 1.6 }}>
                Seg–Sex: 8h às 18h<br />Sáb: 8h às 13h
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--border-on-brand-subtle)",
            paddingTop: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={{ color: "var(--text-on-brand-tertiary)", fontSize: 13, fontFamily: "Manrope, sans-serif" }}>
            © {new Date().getFullYear()} Arnomáquinas. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollTop}
            style={{
              width: 36,
              height: 36,
              border: "1px solid var(--border-on-brand-subtle)",
              backgroundColor: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-on-brand-secondary)",
              cursor: "pointer",
              transition: "border-color 0.2s, color 0.2s",
            }}
            aria-label="Voltar ao topo"
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "var(--text-on-brand-secondary)";
              e.currentTarget.style.color = "var(--text-on-brand)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border-on-brand-subtle)";
              e.currentTarget.style.color = "var(--text-on-brand-secondary)";
            }}
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
