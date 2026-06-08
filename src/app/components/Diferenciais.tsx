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
    <section id="sobre" className="bg-elevated section-y overflow-hidden">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: image with cream rect behind + bordeaux badge front */}
          <div className="relative">
            {/* Cream rectangle behind (top-left offset) */}
            <div className="absolute -top-6 -left-6 w-[60%] h-[60%] bg-surface z-0" />

            <div className="relative z-10">
              <img
                src={familiaImg}
                alt="Fotografia histórica de escritório, início do século XX"
                className="block w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover object-center [filter:grayscale(1)_contrast(1.05)]"
              />

              {/* Floating bordeaux "50 Anos" badge */}
              <div className="absolute -right-4 -bottom-4 lg:-right-6 lg:-bottom-6 bg-anchor px-8 py-6 lg:px-9 lg:py-7 z-20">
                <p className="text-on-brand text-[40px] lg:text-[52px] font-extrabold leading-none m-0">
                  50
                </p>
                <p className="text-on-brand-soft text-[11px] tracking-[0.18em] uppercase mt-1 leading-[1.5] m-0">
                  Anos de<br />Excelência
                </p>
              </div>
            </div>
          </div>

          {/* Right: differential list */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2.5 h-0.5 bg-eyebrow" />
              <span className="eyebrow-text">Por que a Arnomáquinas?</span>
            </div>
            <h2 className="text-ink text-[26px] sm:text-[32px] lg:text-[38px] font-light leading-tight tracking-[-0.02em] mb-4">
              Diferenciais que{" "}
              <strong className="font-bold">constroem relacionamentos</strong>
            </h2>
            <p className="text-ink-soft text-[15px] leading-[1.7] mb-10">
              Nossa solidez não é apenas histórica — ela se manifesta em cada produto entregue,
              cada serviço prestado e cada cliente atendido.
            </p>

            <div>
              {diferenciais.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex gap-5 py-6 border-b border-line"
                  >
                    <div className="shrink-0 w-11 h-11 bg-surface flex items-center justify-center">
                      <Icon size={18} color="var(--brand-primary)" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                        <h4 className="text-ink text-[15px] font-bold m-0">
                          {item.title}
                        </h4>
                        <span className="text-brand text-[11px] font-semibold tracking-[0.12em] uppercase">
                          {item.detail}
                        </span>
                      </div>
                      <p className="text-ink-soft text-sm leading-[1.7] m-0">
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
