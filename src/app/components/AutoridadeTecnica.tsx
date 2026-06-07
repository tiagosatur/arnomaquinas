import { CheckCircle } from "lucide-react";

const capacidades = [
  "Diagnóstico técnico gratuito",
  "Peças originais sempre disponíveis",
  "Técnicos certificados pelos fabricantes",
  "Garantia de 90 dias no serviço",
  "Atendimento na empresa do cliente",
];

export function AutoridadeTecnica() {
  return (
    <section id="servicos" style={{ backgroundColor: "#F4F1EA", padding: "96px 0" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 48px" }}>

        {/* Centered header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 32, height: 1, backgroundColor: "#B85C38" }} />
            <span
              style={{
                color: "#B85C38",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "Manrope, sans-serif",
              }}
            >
              Autoridade Técnica
            </span>
            <div style={{ width: 32, height: 1, backgroundColor: "#B85C38" }} />
          </div>

          <h2
            style={{
              color: "#14233B",
              fontFamily: "Manrope, sans-serif",
              fontSize: 38,
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              margin: "0 0 16px",
            }}
          >
            Assistência Técnica Autorizada
          </h2>

          <p
            style={{
              color: "#2A3242",
              fontSize: 16,
              lineHeight: 1.7,
              fontFamily: "Manrope, sans-serif",
              maxWidth: 580,
              margin: "0 auto",
              opacity: 0.65,
            }}
          >
            Mais do que vender — garantimos que seus equipamentos funcionem ao longo do tempo,
            com equipe técnica certificada diretamente pelos fabricantes.
          </p>
        </div>

        {/* Two equal-height columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 3,
            alignItems: "stretch",
            height: 500,
          }}
        >
          {/* LEFT: photo, full column height */}
          <div style={{ overflow: "hidden", borderRadius: 4 }}>
            <img
              src="https://images.unsplash.com/photo-1721332154191-ba5f1534266e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0ZWNobmljYWwlMjBzZXJ2aWNlJTIwcmVwYWlyJTIwZXF1aXBtZW50JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc4MDc2NTE0MXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Técnico realizando manutenção de equipamento"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
                filter: "saturate(0.82) sepia(0.07) contrast(1.03)",
              }}
            />
          </div>

          {/* RIGHT: navy panel, same height, vertically centered content */}
          <div
            style={{
              backgroundColor: "#14233B",
              borderRadius: 4,
              padding: "40px 44px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* Panel heading */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
              <CheckCircle size={16} color="#B85C38" />
              <h3
                style={{
                  color: "#F4F1EA",
                  fontSize: 20,
                  fontWeight: 700,
                  fontFamily: "Manrope, sans-serif",
                  margin: 0,
                  letterSpacing: "0.01em",
                }}
              >
                O que oferecemos
              </h3>
            </div>

            {/* Checklist */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {capacidades.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <CheckCircle
                    size={16}
                    color="#B85C38"
                    style={{ flexShrink: 0, marginTop: 2 }}
                  />
                  <p
                    style={{
                      color: "#F4F1EA",
                      fontSize: 17,
                      lineHeight: 1.55,
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 400,
                      margin: 0,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
