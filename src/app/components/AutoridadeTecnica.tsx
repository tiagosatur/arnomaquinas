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
    <section id="servicos" className="bg-surface section-y">
      <div className="container-page">

        {/* Centered header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-eyebrow" />
            <span className="eyebrow-text">Autoridade Técnica</span>
            <div className="w-8 h-px bg-eyebrow" />
          </div>

          <h2 className="text-ink text-[26px] sm:text-[32px] lg:text-[38px] font-light leading-tight tracking-[-0.02em] mb-4 m-0">
            Assistência Técnica Autorizada
          </h2>

          <p className="text-ink-soft text-base leading-[1.7] max-w-[580px] mx-auto m-0">
            Mais do que vender — garantimos que seus equipamentos funcionem ao longo do tempo,
            com equipe técnica certificada diretamente pelos fabricantes.
          </p>
        </div>

        {/* 1-col mobile, 2-col equal-height on lg+ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3px] items-stretch lg:h-[500px]">
          {/* LEFT: photo */}
          <div className="overflow-hidden rounded-sm aspect-[16/10] lg:aspect-auto">
            <img
              src="https://images.unsplash.com/photo-1721332154191-ba5f1534266e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0ZWNobmljYWwlMjBzZXJ2aWNlJTIwcmVwYWlyJTIwZXF1aXBtZW50JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc4MDc2NTE0MXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Técnico realizando manutenção de equipamento"
              className="w-full h-full object-cover object-center block photo-graded"
            />
          </div>

          {/* RIGHT: bordeaux panel */}
          <div className="bg-anchor rounded-sm px-8 py-10 sm:px-11 sm:py-12 flex flex-col justify-center">
            <h3 className="text-on-brand text-xl font-bold tracking-[0.01em] mb-6 m-0">
              O que oferecemos
            </h3>

            <div className="flex flex-col gap-4">
              {capacidades.map((item) => (
                <div key={item} className="flex items-start gap-3.5">
                  <CheckCircle
                    size={16}
                    color="var(--text-on-brand-secondary)"
                    className="shrink-0 mt-0.5"
                  />
                  <p className="text-on-brand text-[17px] leading-[1.55] m-0">
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
