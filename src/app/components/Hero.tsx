import { BookOpen } from "lucide-react";
import heroImg from "../../imports/hero/hero.png";

export function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "21 / 9",
        minHeight: 560,
        marginTop: 88,
        overflow: "hidden",
        backgroundColor: "#0D1A2E",
      }}
    >
      <img
        src={heroImg}
        alt="Sala de reunião executiva com cadeiras premium"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "right center",
          display: "block",
        }}
      />

      {/* Floating navy panel — inset from all edges */}
      <div
        style={{
          position: "absolute",
          left: 44,
          top: 44,
          bottom: 44,
          width: "clamp(380px, 40vw, 560px)",
          backgroundColor: "#14233B",
          padding: 56,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          boxShadow: "0 8px 48px rgba(0,0,0,0.28), 0 2px 12px rgba(0,0,0,0.18)",
        }}
      >
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
          <div style={{ width: 40, height: 2, backgroundColor: "#B85C38", flexShrink: 0 }} />
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
            Desde 1975
          </span>
        </div>

        {/* Headline */}
        <div>
          <p
            style={{
              color: "#F4F1EA",
              fontSize: 40,
              fontWeight: 400,
              lineHeight: 1.12,
              fontFamily: "Manrope, sans-serif",
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Móveis e Equipamentos para Escritório
          </p>
          <p
            style={{
              color: "#B85C38",
              fontSize: 40,
              fontWeight: 700,
              lineHeight: 1.12,
              fontFamily: "Manrope, sans-serif",
              letterSpacing: "-0.02em",
              marginTop: 20,
              marginBottom: 0,
            }}
          >
            Solidez e Soluções Completas
          </p>
        </div>

        {/* Subhead */}
        <p
          style={{
            color: "#9FA9B7",
            fontSize: 16,
            lineHeight: 1.6,
            fontFamily: "Manrope, sans-serif",
            fontWeight: 400,
            marginTop: 24,
            marginBottom: 0,
          }}
        >
          Transformamos ambientes corporativos com expertise de meio século.
          Do móvel executivo ao equipamento especializado — soluções integradas
          para sua empresa crescer com excelência.
        </p>

        {/* CTA */}
        <div style={{ marginTop: 32 }}>
          <a
            href="#produtos"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              backgroundColor: "#B85C38",
              color: "#F4F1EA",
              padding: "13px 28px",
              fontSize: 13,
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
            <BookOpen size={15} />
            Conheça nosso Catálogo
          </a>
        </div>
      </div>
    </section>
  );
}
