import { Search, FileText, HeadphonesIcon, Truck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Escolha os Produtos",
    description:
      "Navegue pelo nosso catálogo completo ou conte com nossa equipe para indicar as melhores soluções para o seu ambiente corporativo.",
  },
  {
    icon: FileText,
    title: "Solicite um Orçamento",
    description:
      "Preencha nosso formulário ou ligue diretamente. É rápido e sem compromisso.",
  },
  {
    icon: HeadphonesIcon,
    title: "Atendimento Pessoal",
    description:
      "Nossa equipe especializada analisa suas necessidades, ajusta cada detalhe e retorna com uma proposta personalizada em até 24 horas.",
  },
  {
    icon: Truck,
    title: "Entrega e Montagem",
    description:
      "Entregamos e montamos tudo no local. Você recebe os produtos instalados e prontos para uso, com garantia e suporte pós-venda.",
  },
];

export function Processo() {
  return (
    <section style={{ backgroundColor: "var(--surface-anchor)", padding: "96px 0", position: "relative", overflow: "hidden" }}>
      {/* Subtle dot texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(244,241,234,0.04) 1px, transparent 0)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 48px", position: "relative" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 32, height: 1, backgroundColor: "var(--text-on-brand-secondary)" }} />
            <span
              style={{
                color: "var(--text-on-brand-secondary)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "Manrope, sans-serif",
              }}
            >
              Como Funciona
            </span>
            <div style={{ width: 32, height: 1, backgroundColor: "var(--text-on-brand-secondary)" }} />
          </div>

          {/* Two-line headline — single weight throughout */}
          <p
            style={{
              color: "var(--text-on-brand)",
              fontFamily: "Manrope, sans-serif",
              fontSize: 38,
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Um processo simples e transparente
          </p>
          <p
            style={{
              color: "var(--text-on-brand-secondary)",
              fontFamily: "Manrope, sans-serif",
              fontSize: 34,
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: "6px 0 0",
            }}
          >
            do início ao fim
          </p>
        </div>

        {/* Steps grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, position: "relative" }}>

          {/* Connector line */}
          <div
            style={{
              position: "absolute",
              top: 56,
              left: "12.5%",
              right: "12.5%",
              height: 2,
              backgroundColor: "var(--tint-on-brand-medium)",
              zIndex: 0,
            }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
                  <div style={{ position: "relative" }}>
                    {/* Circle node — darker bordeaux fill + cream border */}
                    <div
                      style={{
                        width: 112,
                        height: 112,
                        borderRadius: "50%",
                        border: "1.5px solid var(--text-on-brand-secondary)",
                        backgroundColor: "var(--color-bordeaux-700)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={28} color="var(--text-on-brand)" />
                    </div>

                    {/* Step badge — cream fill, bordeaux number */}
                    <span
                      style={{
                        position: "absolute",
                        top: -5,
                        right: -5,
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        backgroundColor: "var(--text-on-brand)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--brand-primary)",
                        fontSize: 11,
                        fontWeight: 800,
                        fontFamily: "Manrope, sans-serif",
                        lineHeight: 1,
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>
                </div>

                <h3
                  style={{
                    color: "var(--text-on-brand)",
                    fontSize: 16,
                    fontWeight: 700,
                    fontFamily: "Manrope, sans-serif",
                    marginBottom: 12,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-on-brand-secondary)",
                    fontSize: 14,
                    lineHeight: 1.7,
                    fontFamily: "Manrope, sans-serif",
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA — inverted: cream on bordeaux panel */}
        <div style={{ textAlign: "center", marginTop: 64 }}>
          <a
            href="#contato"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              backgroundColor: "var(--text-on-brand)",
              color: "var(--brand-primary)",
              padding: "14px 40px",
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "Manrope, sans-serif",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: 2,
              transition: "background-color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--surface-hover)")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--text-on-brand)")}
          >
            Fale com um Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
