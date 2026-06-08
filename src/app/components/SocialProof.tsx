import { Star, Quote, Armchair, Calculator, Clock, FileX, Layers, Monitor, Watch, Package, PenLine, Paperclip, Pen } from "lucide-react";

const marcasComIcone = [
  { name: "Cavaletti",  icon: Armchair  },
  { name: "Frisokar",   icon: Layers    },
  { name: "Procalc",    icon: Calculator},
  { name: "Chronos",    icon: Clock     },
  { name: "Aurora",     icon: FileX     },
  { name: "Plaxmetal",  icon: Package   },
  { name: "Digitron",   icon: Monitor   },
  { name: "Casio",      icon: Watch     },
  { name: "3M",         icon: Layers    },
  { name: "Pilot",      icon: PenLine   },
  { name: "Staples",    icon: Paperclip },
  { name: "BIC",        icon: Pen       },
];

const depoimentos = [
  {
    id: 1,
    nome: "Roberto Almeida",
    cargo: "Diretor Administrativo",
    empresa: "Grupo Industrial Almeida",
    texto:
      "Fornecemos todos os equipamentos do nosso novo escritório com a Arnomáquinas. O atendimento foi impecável — do projeto à montagem, não faltou nada. Já somos clientes há mais de 15 anos.",
    rating: 5,
  },
  {
    id: 2,
    nome: "Cláudia Mendes",
    cargo: "Gerente de Compras",
    empresa: "Advocacia Santos & Mendes",
    texto:
      "Precisávamos renovar completamente a mobília e, em menos de duas semanas, o escritório estava completamente transformado. A equipe de montagem foi excelente. Recomendo sem hesitar.",
    rating: 5,
  },
  {
    id: 3,
    nome: "Marcos Tavares",
    cargo: "Sócio-fundador",
    empresa: "Construtora Tavares",
    texto:
      "O diferencial da Arnomáquinas é a assistência técnica pós-venda. Quando precisamos de manutenção, atenderam no mesmo dia. Isso é parceria de verdade.",
    rating: 5,
  },
];


export function SocialProof() {
  return (
    <section style={{ backgroundColor: "var(--surface-elevated)", padding: "96px 0" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 48px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 1, backgroundColor: "var(--accent-eyebrow)" }} />
            <span
              style={{
                color: "var(--accent-eyebrow)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "Manrope, sans-serif",
              }}
            >
              O que dizem nossos clientes
            </span>
            <div style={{ width: 32, height: 1, backgroundColor: "var(--accent-eyebrow)" }} />
          </div>
          <h2
            style={{
              color: "var(--text-primary)",
              fontFamily: "Manrope, sans-serif",
              fontSize: 38,
              fontWeight: 300,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Credibilidade construída{" "}
            <strong style={{ fontWeight: 700 }}>cliente por cliente</strong>
          </h2>
        </div>

        {/* Depoimentos */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 72, alignItems: "center" }}>
          {depoimentos.map((dep, i) => {
            const isCenter = i === 1;
            return (
              <div
                key={dep.id}
                style={{
                  position: "relative",
                  padding: isCenter ? 40 : 32,
                  backgroundColor: isCenter ? "var(--surface-anchor)" : "var(--surface-default)",
                  transform: isCenter ? "scale(1.08)" : "scale(1)",
                  boxShadow: isCenter
                    ? "0 20px 40px rgba(80, 9, 21, 0.25)"
                    : "0 8px 20px rgba(0, 0, 0, 0.06)",
                  zIndex: isCenter ? 2 : 1,
                }}
              >
                <Quote
                  size={28}
                  color={isCenter ? "var(--text-on-brand-tertiary)" : "var(--tint-brand-weak)"}
                  style={{ marginBottom: 20 }}
                />
                <div style={{ display: "flex", marginBottom: 16 }}>
                  {Array.from({ length: dep.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={13}
                      color={isCenter ? "var(--text-on-brand)" : "var(--brand-primary)"}
                      fill={isCenter ? "var(--text-on-brand)" : "var(--brand-primary)"}
                    />
                  ))}
                </div>
                <p
                  style={{
                    color: isCenter ? "var(--text-on-brand)" : "var(--text-secondary)",
                    fontSize: 14,
                    lineHeight: 1.8,
                    fontFamily: "Manrope, sans-serif",
                    marginBottom: 28,
                  }}
                >
                  "{dep.texto}"
                </p>
                <div
                  style={{
                    borderTop: `1px solid ${isCenter ? "var(--border-on-brand-subtle)" : "var(--border-subtle)"}`,
                    paddingTop: 20,
                  }}
                >
                  <p
                    style={{
                      color: isCenter ? "var(--text-on-brand)" : "var(--text-primary)",
                      fontSize: 14,
                      fontWeight: 700,
                      fontFamily: "Manrope, sans-serif",
                    }}
                  >
                    {dep.nome}
                  </p>
                  <p
                    style={{
                      color: isCenter ? "var(--text-on-brand-secondary)" : "var(--brand-primary)",
                      fontSize: 12,
                      fontFamily: "Manrope, sans-serif",
                      marginTop: 2,
                    }}
                  >
                    {dep.cargo}
                  </p>
                  <p
                    style={{
                      color: isCenter ? "var(--text-on-brand-tertiary)" : "var(--text-tertiary)",
                      fontSize: 12,
                      fontFamily: "Manrope, sans-serif",
                      marginTop: 2,
                    }}
                  >
                    {dep.empresa}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Partners strip */}
        <div style={{ paddingTop: 80 }}>
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 48 }}>
            <div style={{ width: 32, height: 1, backgroundColor: "var(--accent-eyebrow)" }} />
            <span
              style={{
                color: "var(--accent-eyebrow)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "Manrope, sans-serif",
              }}
            >
              Marcas e Parceiros de Confiança
            </span>
            <div style={{ width: 32, height: 1, backgroundColor: "var(--accent-eyebrow)" }} />
          </div>

          {/* Logo row — no boxes, no borders */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "32px 48px",
            }}
          >
            {marcasComIcone.map(({ name, icon: Icon }) => (
              <div
                key={name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                  opacity: 0.3,
                  transition: "opacity 0.2s",
                  cursor: "default",
                  userSelect: "none",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0.3")}
              >
                <Icon size={28} color="var(--text-primary)" strokeWidth={1.5} />
                <span
                  style={{
                    color: "var(--text-primary)",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    fontFamily: "Manrope, sans-serif",
                  }}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
