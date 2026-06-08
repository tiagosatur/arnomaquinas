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
    <section className="bg-elevated section-y">
      <div className="container-page">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-eyebrow" />
            <span className="eyebrow-text">O que dizem nossos clientes</span>
            <div className="w-8 h-px bg-eyebrow" />
          </div>
          <h2 className="text-ink text-[26px] sm:text-[32px] lg:text-[38px] font-light leading-tight tracking-[-0.02em] m-0">
            Credibilidade construída{" "}
            <strong className="font-bold">cliente por cliente</strong>
          </h2>
        </div>

        {/* Testimonials: 1-col mobile, 3-col lg (center scaled up) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 mb-16 lg:mb-20 items-center">
          {depoimentos.map((dep, i) => {
            const isCenter = i === 1;
            return (
              <div
                key={dep.id}
                className={`relative p-8 ${
                  isCenter
                    ? "lg:p-10 bg-anchor lg:scale-[1.08] shadow-[0_20px_40px_rgba(80,9,21,0.25)] lg:z-[2]"
                    : "bg-surface shadow-[0_8px_20px_rgba(0,0,0,0.06)]"
                }`}
              >
                <Quote
                  size={28}
                  color={isCenter ? "var(--text-on-brand-tertiary)" : "rgba(80, 9, 21, 0.12)"}
                  className="mb-5"
                />
                <div className="flex mb-4">
                  {Array.from({ length: dep.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={13}
                      color={isCenter ? "var(--text-on-brand)" : "var(--brand-primary)"}
                      fill={isCenter ? "var(--text-on-brand)" : "var(--brand-primary)"}
                    />
                  ))}
                </div>
                <p className={`text-sm leading-[1.8] mb-7 m-0 ${isCenter ? "text-on-brand" : "text-ink-soft"}`}>
                  "{dep.texto}"
                </p>
                <div className={`pt-5 border-t ${isCenter ? "border-line-on-brand-soft" : "border-line"}`}>
                  <p className={`text-sm font-bold m-0 ${isCenter ? "text-on-brand" : "text-ink"}`}>
                    {dep.nome}
                  </p>
                  <p className={`text-xs mt-0.5 m-0 ${isCenter ? "text-on-brand-soft" : "text-brand"}`}>
                    {dep.cargo}
                  </p>
                  <p className={`text-xs mt-0.5 m-0 ${isCenter ? "text-on-brand-faint" : "text-ink-tertiary"}`}>
                    {dep.empresa}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Partners strip */}
        <div className="pt-12 lg:pt-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-8 h-px bg-eyebrow" />
            <span className="eyebrow-text text-center">Marcas e Parceiros de Confiança</span>
            <div className="w-8 h-px bg-eyebrow" />
          </div>

          {/* Logo grid */}
          <div className="flex flex-wrap justify-center items-center gap-y-8 gap-x-8 sm:gap-x-12">
            {marcasComIcone.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-2 opacity-30 hover:opacity-75 transition-opacity cursor-default select-none"
              >
                <Icon size={28} color="var(--text-primary)" strokeWidth={1.5} />
                <span className="text-ink text-[10px] font-bold tracking-[0.14em] uppercase">
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
