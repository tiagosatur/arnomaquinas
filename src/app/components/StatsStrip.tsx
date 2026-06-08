const stats = [
  { number: "50+", label: "Anos de Tradição" },
  { number: "10k+", label: "Clientes Atendidos" },
  { number: "500+", label: "Produtos em Catálogo" },
  { number: "3", label: "Marcas Exclusivas" },
];

export function StatsStrip() {
  return (
    <section className="bg-surface py-16 px-[var(--container-gutter)]">
      <div className="container-page grid grid-cols-2 gap-y-10 gap-x-6 sm:gap-x-12 lg:flex lg:items-center lg:justify-center lg:gap-24">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center text-center"
          >
            <span className="text-brand text-[28px] sm:text-[36px] font-bold leading-none tracking-[-0.02em]">
              {stat.number}
            </span>
            <span className="text-ink-muted text-[11px] sm:text-xs font-medium tracking-[0.12em] uppercase mt-2">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
