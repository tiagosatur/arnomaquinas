import { ArrowRight } from "lucide-react";
import moveisImg from "../../imports/especialidades/moveis.png";
import cadeirasImg from "../../imports/especialidades/cadeiras.png";
import expedienteImg from "../../imports/especialidades/expediente.png";

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
    <section id="produtos" className="bg-surface section-y">
      <div className="container-page">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2.5 h-0.5 bg-eyebrow" />
            <span className="eyebrow-text">Nossas Especialidades</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
            <h2 className="text-ink text-[28px] sm:text-[32px] lg:text-[38px] font-light leading-tight tracking-[-0.02em] m-0">
              Soluções Completas para{" "}
              <strong className="font-bold">seu Ambiente Corporativo</strong>
            </h2>
            <p className="text-ink text-[15px] leading-[1.7] opacity-65 max-w-[320px] m-0">
              Do essencial ao especializado — tudo para equipar e transformar seu escritório.
            </p>
          </div>
        </div>

        {/* Asymmetric grid: 1-col mobile, 2-col lg (featured spans 3 rows on left) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[repeat(3,200px)] gap-[3px]">

          {/* ── FEATURED CARD: photo top, solid bordeaux panel bottom ── */}
          <div className="flex flex-col overflow-hidden lg:row-span-3">
            {/* Photo — fills remaining height on lg+, fixed aspect on mobile */}
            <div className="flex-1 overflow-hidden min-h-0 aspect-[16/10] lg:aspect-auto">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover object-center block photo-graded"
              />
            </div>

            {/* Solid bordeaux text panel */}
            <div className="bg-anchor px-8 py-7 lg:px-9 lg:py-8 shrink-0">
              <span className="block text-on-brand-soft text-[11px] font-bold tracking-[0.2em] uppercase mb-3.5">
                {featured.label} — Destaque
              </span>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-on-brand text-[11px] border border-line-on-brand px-2.5 py-[3px] tracking-[0.06em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-on-brand text-2xl font-bold leading-tight mb-2.5">
                {featured.title}
              </h3>

              <p className="text-on-brand-soft text-sm leading-[1.65] mb-5">
                {featured.description}
              </p>

              <a
                href="#contato"
                className="inline-flex items-center gap-1.5 text-on-brand text-[13px] font-bold tracking-[0.08em] uppercase no-underline"
              >
                Solicitar Orçamento <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* ── 3 SECONDARY CARDS: text on top + photo bottom (mobile) / text left + photo right (sm+) ── */}
          {others.map((cat) => (
            <div
              key={cat.id}
              className="bg-elevated border-[0.5px] border-line flex flex-col sm:flex-row sm:items-stretch overflow-hidden"
            >
              {/* Text area */}
              <div className="flex-1 p-7 sm:px-8 sm:py-7 flex flex-col justify-center gap-2">
                <span className="text-eyebrow text-[11px] font-bold tracking-[0.2em] uppercase">
                  {cat.label}
                </span>
                <h3 className="text-ink text-[17px] font-bold leading-tight m-0">
                  {cat.title}
                </h3>
                <p className="text-ink text-[13px] leading-[1.65] opacity-65 m-0">
                  {cat.description}
                </p>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-1.5 text-brand text-xs font-bold tracking-[0.08em] uppercase no-underline mt-1"
                >
                  Ver mais <ArrowRight size={12} />
                </a>
              </div>

              {/* Photo thumbnail */}
              <div className="w-full aspect-[16/9] sm:aspect-auto sm:w-[38%] shrink-0 overflow-hidden order-first sm:order-last">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center block photo-graded"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
