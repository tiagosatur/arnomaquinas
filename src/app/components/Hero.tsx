import { BookOpen } from "lucide-react";
import heroImg from "../../imports/hero/hero.png";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full mt-[88px] overflow-hidden bg-surface lg:aspect-[21/9] lg:min-h-[560px]"
    >
      {/* Photo: 4:5 mobile, 16:9 tablet, fills section on lg+ */}
      <div className="relative aspect-[4/5] sm:aspect-[16/9] lg:absolute lg:inset-0 lg:aspect-auto">
        <img
          src={heroImg}
          alt="Sala de reunião executiva com cadeiras premium"
          className="block w-full h-full object-cover object-center lg:object-right"
        />
      </div>

      {/* Cream panel: stacks below photo on mobile/tablet, floats on lg+ */}
      <div
        className="relative bg-surface p-6 sm:p-10 flex flex-col justify-center
                   lg:absolute lg:left-11 lg:top-11 lg:bottom-11
                   lg:w-[clamp(380px,40vw,560px)] lg:p-14
                   lg:shadow-[var(--shadow-panel)]"
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-[14px] mb-6 lg:mb-8">
          <div className="w-10 h-0.5 bg-eyebrow shrink-0" />
          <span className="eyebrow-text">Desde 1975</span>
        </div>

        {/* Headline */}
        <div>
          <p className="text-ink text-[26px] sm:text-[32px] lg:text-[40px] font-normal leading-[1.12] tracking-[-0.02em] m-0">
            Móveis e equipamentos para escritório
          </p>
          <p className="text-highlight text-[26px] sm:text-[32px] lg:text-[40px] font-bold leading-[1.12] tracking-[-0.02em] mt-4 lg:mt-5 mb-0">
            Venda. Montagem. Manutenção.
          </p>
        </div>

        {/* Subhead */}
        <p className="text-ink-soft text-[15px] lg:text-base leading-[1.6] font-normal mt-5 lg:mt-6 mb-0 max-w-[520px]">
          Do móvel executivo ao equipamento especializado — soluções integradas
          para sua empresa crescer com excelência.
        </p>

        {/* CTA */}
        <div className="mt-7 lg:mt-8">
          <a
            href="#produtos"
            className="inline-flex items-center gap-2.5 rounded-sm bg-brand text-on-brand
                       px-7 py-[13px] text-[13px] font-bold uppercase tracking-[0.08em] no-underline
                       transition-colors duration-200 hover:bg-brand-hover"
          >
            <BookOpen size={15} />
            Conheça nosso Catálogo
          </a>
        </div>
      </div>
    </section>
  );
}
