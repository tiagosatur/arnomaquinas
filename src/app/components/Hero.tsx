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
        backgroundColor: "var(--surface-default)",
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

      {/* Floating cream panel */}
      <div
        style={{
          position: "absolute",
          left: 44,
          top: 44,
          bottom: 44,
          width: "clamp(380px, 40vw, 560px)",
          backgroundColor: "var(--surface-default)",
          padding: 56,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          boxShadow: "var(--shadow-panel)",
        }}
      >
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
          <div style={{ width: 40, height: 2, backgroundColor: "var(--accent-eyebrow)", flexShrink: 0 }} />
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
            Desde 1975
          </span>
        </div>

        {/* Headline */}
        <div>
          <p
            style={{
              color: "var(--text-primary)",
              fontSize: 40,
              fontWeight: 400,
              lineHeight: 1.12,
              fontFamily: "Manrope, sans-serif",
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Móveis e equipamentos para escritório
          </p>
          <p
            style={{
              color: "var(--accent-highlight)",
              fontSize: 40,
              fontWeight: 700,
              lineHeight: 1.12,
              fontFamily: "Manrope, sans-serif",
              letterSpacing: "-0.02em",
              marginTop: 20,
              marginBottom: 0,
            }}
          >
            Venda. Montagem. Manutenção.
          </p>
        </div>

        {/* Subhead */}
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: 16,
            lineHeight: 1.6,
            fontFamily: "Manrope, sans-serif",
            fontWeight: 400,
            marginTop: 24,
            marginBottom: 0,
            maxWidth: 520,
          }}
        >
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
              backgroundColor: "var(--brand-primary)",
              color: "var(--text-on-brand)",
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
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--brand-primary-hover)")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--brand-primary)")}
          >
            <BookOpen size={15} />
            Conheça nosso Catálogo
          </a>
        </div>
      </div>
    </section>
  );
}
