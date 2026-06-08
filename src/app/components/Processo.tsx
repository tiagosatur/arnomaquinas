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
    <section className="bg-anchor section-y relative overflow-hidden">
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(244,241,234,0.04) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-page relative">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-18">
          <div className="flex items-center justify-center gap-3 mb-4 lg:mb-5">
            <div className="w-8 h-px bg-on-brand-soft" />
            <span className="text-on-brand-soft text-[13px] font-semibold tracking-[0.15em] uppercase">
              Como Funciona
            </span>
            <div className="w-8 h-px bg-on-brand-soft" />
          </div>

          <p className="text-on-brand text-[22px] sm:text-[32px] lg:text-[38px] font-normal leading-[1.15] tracking-[-0.02em] m-0">
            Um processo simples e transparente
          </p>
          <p className="text-on-brand-soft text-[18px] sm:text-[28px] lg:text-[34px] font-normal leading-[1.15] tracking-[-0.02em] mt-1.5 m-0">
            do início ao fim
          </p>
        </div>

        {/* Steps: 1-col mobile, 2-col tablet, 4-col desktop with connector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-8 relative">
          {/* Horizontal connector (lg only) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-[rgba(244,241,234,0.10)] z-0" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="text-center relative z-10">
                <div className="flex justify-center mb-3 sm:mb-5 lg:mb-7">
                  <div className="relative">
                    {/* Circle */}
                    <div
                      className="w-[64px] h-[64px] sm:w-[88px] sm:h-[88px] lg:w-28 lg:h-28 rounded-full border-[1.5px] border-on-brand-soft flex items-center justify-center"
                      style={{ backgroundColor: "var(--color-bordeaux-700)" }}
                    >
                      <Icon size={22} color="var(--text-on-brand)" className="sm:hidden" />
                      <Icon size={28} color="var(--text-on-brand)" className="hidden sm:block" />
                    </div>

                    {/* Step number badge */}
                    <span className="absolute -top-1 -right-1 w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] rounded-full bg-on-brand flex items-center justify-center text-brand text-[10px] sm:text-[11px] font-extrabold leading-none">
                      {i + 1}
                    </span>
                  </div>
                </div>

                <h3 className="text-on-brand text-[15px] sm:text-base font-bold mb-1.5 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-on-brand-soft text-[13px] sm:text-sm leading-[1.6] sm:leading-[1.7] m-0">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <a
            href="#contato"
            className="inline-flex items-center gap-2.5 rounded-sm bg-on-brand text-brand px-10 py-3.5 text-sm font-bold uppercase tracking-[0.08em] no-underline transition-colors duration-200 hover:bg-[var(--surface-hover)]"
          >
            Fale com um Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
