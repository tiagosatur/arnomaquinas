import { Shield, Layers, Wrench, MapPin } from "lucide-react";
import familiaImg from "../../imports/diferenciais/familia.png";

const diferenciais = [
  {
    icon: Shield,
    title: "Tradição e Solidez",
    description:
      "50 anos de presença no mercado significam confiança acumulada, processos consolidados e um legado que poucas empresas do setor podem oferecer.",
    detail: "Fundada em 1974",
  },
  {
    icon: Layers,
    title: "Variedade Premium",
    description:
      "Mais de 500 produtos em catálogo, selecionados com critério entre as melhores marcas nacionais e internacionais para atender cada necessidade.",
    detail: "+500 produtos",
  },
  {
    icon: Wrench,
    title: "Manutenção Própria",
    description:
      "Equipe técnica especializada para manutenção preventiva e corretiva dos equipamentos adquiridos. Pós-venda que faz a diferença na continuidade do negócio.",
    detail: "Assistência Autorizada",
  },
  {
    icon: MapPin,
    title: "Atendimento Regionalizado",
    description:
      "Presença consolidada na região com atendimento personalizado e conhecimento das necessidades do mercado local — não somos uma empresa distante.",
    detail: "Suporte próximo a você",
  },
];

export function Diferenciais() {
  return (
    <section id="sobre" style={{ backgroundColor: "var(--surface-elevated)", padding: "96px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          {/* Left: image */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: -24,
                left: -24,
                width: "60%",
                height: "60%",
                backgroundColor: "var(--surface-default)",
                zIndex: 0,
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <img
                src={familiaImg}
                alt="Fotografia histórica de escritório, início do século XX"
                style={{
                  width: "100%",
                  height: 480,
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                  filter: "grayscale(1) contrast(1.05)",
                }}
              />
              {/* Floating badge */}
              <div
                style={{
                  position: "absolute",
                  right: -24,
                  bottom: -24,
                  backgroundColor: "var(--surface-anchor)",
                  padding: "28px 36px",
                  zIndex: 2,
                }}
              >
                <p
                  style={{
                    color: "var(--text-on-brand)",
                    fontSize: 52,
                    fontWeight: 800,
                    lineHeight: 1,
                    fontFamily: "Manrope, sans-serif",
                  }}
                >
                  50
                </p>
                <p
                  style={{
                    color: "var(--text-on-brand-secondary)",
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    fontFamily: "Manrope, sans-serif",
                    marginTop: 4,
                    lineHeight: 1.5,
                  }}
                >
                  Anos de<br />Excelência
                </p>
              </div>
            </div>
          </div>

          {/* Right: diferenciais list */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 10, height: 2, backgroundColor: "var(--accent-eyebrow)" }} />
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
                Por que a Arnomáquinas?
              </span>
            </div>
            <h2
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: 38,
                fontWeight: 300,
                lineHeight: 1.15,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
                marginBottom: 16,
              }}
            >
              Diferenciais que{" "}
              <strong style={{ fontWeight: 700 }}>constroem relacionamentos</strong>
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: 15,
                lineHeight: 1.7,
                fontFamily: "Manrope, sans-serif",
                marginBottom: 40,
              }}
            >
              Nossa solidez não é apenas histórica — ela se manifesta em cada produto entregue,
              cada serviço prestado e cada cliente atendido.
            </p>

            <div>
              {diferenciais.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    style={{
                      display: "flex",
                      gap: 20,
                      padding: "24px 0",
                      borderBottom: "1px solid var(--border-subtle)",
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        width: 44,
                        height: 44,
                        backgroundColor: "var(--surface-default)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={18} color="var(--brand-primary)" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                        <h4
                          style={{
                            color: "var(--text-primary)",
                            fontSize: 15,
                            fontWeight: 700,
                            fontFamily: "Manrope, sans-serif",
                          }}
                        >
                          {item.title}
                        </h4>
                        <span
                          style={{
                            color: "var(--brand-primary)",
                            fontSize: 11,
                            fontWeight: 600,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            fontFamily: "Manrope, sans-serif",
                          }}
                        >
                          {item.detail}
                        </span>
                      </div>
                      <p
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: 14,
                          lineHeight: 1.7,
                          fontFamily: "Manrope, sans-serif",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
