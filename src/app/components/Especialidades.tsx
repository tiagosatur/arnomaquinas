import { ArrowRight } from "lucide-react";
import moveisImg from "../../imports/especialidades/moveis.png";
import cadeirasImg from "../../imports/especialidades/cadeiras.png";
import expedienteImg from "../../imports/especialidades/expediente.png";

// Warm-neutral CSS grade applied identically to all photos:
// saturate(0.82) → -18% saturation; sepia(0.07) → slight warm cast; contrast(1.03) → compensates for lost punch
const photoFilter = "saturate(0.82) sepia(0.07) contrast(1.03)";

const categories = [
  {
    id: "moveis",
    label: "01",
    title: "Móveis de Escritório",
    description:
      "Mesas executivas, estações de trabalho, armários, arquivos e divisórias. Soluções para todos os ambientes corporativos, desde recepções até salas de reunião de alto padrão.",
    image: moveisImg,
    tags: ["Executivo", "Reuniões", "Recepção", "Open Space"],
  },
  {
    id: "cadeiras",
    label: "02",
    title: "Cadeiras e Poltronas",
    description:
      "Linha completa de cadeiras ergonômicas, poltronas executivas e de espera. Conforto e design aliados à produtividade e bem-estar dos colaboradores.",
    image: cadeirasImg,
    tags: ["Ergonômico", "Executivo", "Espera", "Cavaletti"],
  },
  {
    id: "equipamentos",
    label: "03",
    title: "Equipamentos",
    description:
      "Calculadoras, relógios de ponto, destruidoras de papel e equipamentos especializados. Tecnologia e precisão para a gestão eficiente do seu negócio.",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxvZmZpY2UlMjBkZXNrJTIwd29ya3NwYWNlJTIwcHJvZmVzc2lvbmFsJTIwc2V0dXB8ZW58MXx8fHwxNzgwNzY1MTQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Procalc", "Chronos", "Aurora", "Automação"],
  },
  {
    id: "expediente",
    label: "04",
    title: "Material de Expediente",
    description:
      "Tudo para o dia a dia do escritório: papelaria, organização, arquivo e suprimentos. Um catálogo completo para você não precisar ir a lugar nenhum.",
    image: expedienteImg,
    tags: ["Papelaria", "Arquivo", "Suprimentos", "Organização"],
  },
];

export function Especialidades() {
  const [featured, ...others] = categories;

  return (
    <section id="produtos" style={{ backgroundColor: "var(--surface-default)", padding: "96px 0" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 48px" }}>

        {/* Section header */}
        <div style={{ marginBottom: 56 }}>
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
              Nossas Especialidades
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
            <h2
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: 38,
                fontWeight: 300,
                lineHeight: 1.2,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Soluções Completas para{" "}
              <strong style={{ fontWeight: 700 }}>seu Ambiente Corporativo</strong>
            </h2>
            <p
              style={{
                color: "var(--text-primary)",
                fontSize: 15,
                lineHeight: 1.7,
                fontFamily: "Manrope, sans-serif",
                maxWidth: 320,
                opacity: 0.65,
                margin: 0,
              }}
            >
              Do essencial ao especializado — tudo para equipar e transformar seu escritório.
            </p>
          </div>
        </div>

        {/* Asymmetric grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "repeat(3, 200px)", gap: 3 }}>

          {/* ── FEATURED CARD: photo top, solid navy panel bottom ── */}
          <div
            style={{
              gridRow: "span 3",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Photo — full color, graded, fills remaining height */}
            <div style={{ flex: 1, overflow: "hidden", minHeight: 0 }}>
              <img
                src={featured.image}
                alt={featured.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                  filter: photoFilter,
                }}
              />
            </div>

            {/* Solid bordeaux text panel */}
            <div
              style={{
                backgroundColor: "var(--surface-anchor)",
                padding: "32px 36px",
                flexShrink: 0,
              }}
            >
              {/* Eyebrow */}
              <span
                style={{
                  display: "block",
                  color: "var(--text-on-brand-secondary)",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontFamily: "Manrope, sans-serif",
                  marginBottom: 14,
                }}
              >
                {featured.label} — Destaque
              </span>

              {/* Tag chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      color: "var(--text-on-brand)",
                      fontSize: 11,
                      border: "1px solid var(--border-on-brand)",
                      padding: "3px 10px",
                      fontFamily: "Manrope, sans-serif",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3
                style={{
                  color: "var(--text-on-brand)",
                  fontSize: 24,
                  fontWeight: 700,
                  fontFamily: "Manrope, sans-serif",
                  lineHeight: 1.2,
                  marginBottom: 10,
                }}
              >
                {featured.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "var(--text-on-brand-secondary)",
                  fontSize: 14,
                  lineHeight: 1.65,
                  fontFamily: "Manrope, sans-serif",
                  marginBottom: 20,
                }}
              >
                {featured.description}
              </p>

              {/* Link */}
              <a
                href="#contato"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  color: "var(--text-on-brand)",
                  fontSize: 13,
                  fontWeight: 700,
                  fontFamily: "Manrope, sans-serif",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Solicitar Orçamento <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* ── 3 SECONDARY CARDS: bone/white, text left, photo right ── */}
          {others.map((cat, i) => (
            <div
              key={cat.id}
              style={{
                backgroundColor: "var(--surface-elevated)",
                border: "0.5px solid var(--border-subtle)",
                display: "flex",
                alignItems: "stretch",
                overflow: "hidden",
              }}
            >
              {/* Text area */}
              <div
                style={{
                  flex: 1,
                  padding: "28px 32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    color: "var(--accent-eyebrow)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontFamily: "Manrope, sans-serif",
                  }}
                >
                  {cat.label}
                </span>
                <h3
                  style={{
                    color: "var(--text-primary)",
                    fontSize: 17,
                    fontWeight: 700,
                    fontFamily: "Manrope, sans-serif",
                    lineHeight: 1.2,
                    margin: 0,
                  }}
                >
                  {cat.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-primary)",
                    fontSize: 13,
                    lineHeight: 1.65,
                    fontFamily: "Manrope, sans-serif",
                    opacity: 0.65,
                    margin: 0,
                  }}
                >
                  {cat.description}
                </p>
                <a
                  href="#contato"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    color: "var(--brand-primary)",
                    fontSize: 12,
                    fontWeight: 700,
                    fontFamily: "Manrope, sans-serif",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    marginTop: 4,
                  }}
                >
                  Ver mais <ArrowRight size={12} />
                </a>
              </div>

              {/* Photo thumbnail — graded, full color */}
              <div style={{ width: "38%", flexShrink: 0, overflow: "hidden" }}>
                <img
                  src={cat.image}
                  alt={cat.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                    filter: photoFilter,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
