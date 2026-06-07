const stats = [
  { number: "50+", label: "Anos de Tradição" },
  { number: "10k+", label: "Clientes Atendidos" },
  { number: "500+", label: "Produtos em Catálogo" },
  { number: "3", label: "Marcas Exclusivas" },
];

export function StatsStrip() {
  return (
    <section
      style={{
        backgroundColor: "#F4F1EA",
        padding: "64px 48px",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 96,
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <span
              style={{
                color: "#B85C38",
                fontSize: 36,
                fontWeight: 700,
                lineHeight: 1,
                fontFamily: "Manrope, sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              {stat.number}
            </span>
            <span
              style={{
                color: "#2A3242",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontFamily: "Manrope, sans-serif",
                marginTop: 8,
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
