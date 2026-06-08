import { BookOpen } from "lucide-react";
import heroImg from "../../imports/hero/hero.png";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full mt-[88px] overflow-hidden bg-surface xl:aspect-[21/9] xl:min-h-[560px]"
    >
      {/* Wrapper: stacks on mobile, side-by-side flow on md+, contents on xl
          (so photo/panel can position absolutely against the section) */}
      <div className="md:flex md:flex-row-reverse md:items-stretch xl:contents">
        {/* Photo: 3:2 mobile, 16:9 sm, fills column at md/lg, fills section at xl */}
        <div className="relative aspect-[3/2] sm:aspect-[16/9]
                        md:flex-1 md:aspect-auto
                        xl:absolute xl:inset-0">
          <img
            src={heroImg}
            alt="Sala de reunião executiva com cadeiras premium"
            className="block w-full h-full object-cover object-right"
          />
        </div>

        {/* Cream panel: stacks below photo on mobile, side-by-side flow on md+,
            floating absolute on xl+ */}
        <div
          className="relative bg-surface p-6 sm:p-10 flex flex-col justify-center
                     md:w-[45%] md:p-10 lg:p-12
                     xl:absolute xl:top-16 xl:bottom-16
                     xl:left-[calc(48px+max(0px,(100vw-1440px)/2))]
                     xl:w-[clamp(420px,38vw,560px)] xl:p-14
                     xl:shadow-[var(--shadow-panel)]"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-[14px] mb-6 xl:mb-8">
            <div className="w-10 h-0.5 bg-eyebrow shrink-0" />
            <span className="eyebrow-text">Desde 1975</span>
          </div>

          {/* Headline */}
          <div>
            <p className="text-ink text-[26px] sm:text-[32px] xl:text-[40px] font-normal leading-[1.12] tracking-[-0.02em] m-0">
              Móveis e equipamentos para escritório
            </p>
            <p className="text-highlight text-[26px] sm:text-[32px] xl:text-[40px] font-bold leading-[1.12] tracking-[-0.02em] mt-4 xl:mt-5 mb-0">
              Venda. Montagem. Manutenção.
            </p>
          </div>

          {/* Subhead */}
          <p className="text-ink-soft text-[15px] xl:text-base leading-[1.6] font-normal mt-5 xl:mt-6 mb-0 max-w-[520px]">
            Do móvel executivo ao equipamento especializado — soluções integradas
            para sua empresa crescer com excelência.
          </p>

          {/* CTA */}
          <div className="mt-7 xl:mt-8">
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
      </div>
    </section>
  );
}
