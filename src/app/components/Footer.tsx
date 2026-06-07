import { Instagram, Linkedin, Facebook, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{ backgroundColor: "#14233B", borderTop: "1px solid #1D3252" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "64px 48px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#B85C38",
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "#F4F1EA", fontSize: 18, fontWeight: 800, fontFamily: "Manrope, sans-serif" }}>A</span>
              </div>
              <div>
                <p style={{ color: "#F4F1EA", fontSize: 16, fontWeight: 700, fontFamily: "Manrope, sans-serif", letterSpacing: "0.04em" }}>
                  ARNOMÁQUINAS
                </p>
                <p style={{ color: "#B85C38", fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "Manrope, sans-serif" }}>
                  Desde 1975
                </p>
              </div>
            </div>
            <p
              style={{
                color: "#9FA9B7",
                fontSize: 14,
                lineHeight: 1.8,
                fontFamily: "Manrope, sans-serif",
                maxWidth: 280,
              }}
            >
              50 anos transformando ambientes corporativos com móveis, equipamentos e soluções completas para escritório.
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: 36,
                    height: 36,
                    border: "1px solid #1D3252",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#9FA9B7",
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "rgba(184,92,56,0.5)";
                    e.currentTarget.style.color = "#B85C38";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "#1D3252";
                    e.currentTarget.style.color = "#9FA9B7";
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
                color: "#F4F1EA",
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
                      color: "#9FA9B7",
                      fontSize: 14,
                      fontFamily: "Manrope, sans-serif",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#B85C38")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#9FA9B7")}
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
                color: "#F4F1EA",
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
                      color: "#9FA9B7",
                      fontSize: 14,
                      fontFamily: "Manrope, sans-serif",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#B85C38")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#9FA9B7")}
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
                color: "#F4F1EA",
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
              <p style={{ color: "#9FA9B7", fontSize: 14, fontFamily: "Manrope, sans-serif", lineHeight: 1.6 }}>
                (55) 98454-9195
              </p>
              <p style={{ color: "#9FA9B7", fontSize: 14, fontFamily: "Manrope, sans-serif", lineHeight: 1.6 }}>
                contato@arnomaquinas.com.br
              </p>
              <p style={{ color: "#9FA9B7", fontSize: 14, fontFamily: "Manrope, sans-serif", lineHeight: 1.6 }}>
                Seg–Sex: 8h às 18h<br />Sáb: 8h às 13h
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #1D3252",
            paddingTop: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={{ color: "#9FA9B7", fontSize: 13, fontFamily: "Manrope, sans-serif", opacity: 0.55 }}>
            © {new Date().getFullYear()} Arnomáquinas. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollTop}
            style={{
              width: 36,
              height: 36,
              border: "1px solid #1D3252",
              backgroundColor: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#9FA9B7",
              cursor: "pointer",
              transition: "border-color 0.2s, color 0.2s",
            }}
            aria-label="Voltar ao topo"
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(184,92,56,0.4)";
              e.currentTarget.style.color = "#B85C38";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "#1D3252";
              e.currentTarget.style.color = "#9FA9B7";
            }}
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
