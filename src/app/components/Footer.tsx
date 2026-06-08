import { Instagram, Linkedin, Facebook, ArrowUp } from "lucide-react";

const navLinks = [
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Assistência Técnica", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

const produtos = [
  "Móveis de Escritório",
  "Cadeiras e Poltronas",
  "Calculadoras",
  "Relógios de Ponto",
  "Destruidoras de Papel",
  "Material de Expediente",
];

const socials = [
  { Icon: Instagram, href: "https://www.instagram.com/arnomaquinas/", label: "Instagram" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Facebook, href: "#", label: "Facebook" },
];

const linkClass =
  "text-on-brand-soft text-sm no-underline transition-colors hover:text-on-brand";

const headingClass =
  "text-on-brand text-[11px] font-bold tracking-[0.18em] uppercase mb-5";

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-anchor border-t border-line-on-brand-soft">
      <div className="container-page pt-16 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-y-10 gap-x-8 lg:gap-12 mb-14">
          {/* Brand — spans full width on mobile */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-on-brand rounded-md flex items-center justify-center">
                <span className="text-brand text-lg font-extrabold">A</span>
              </div>
              <div>
                <p className="text-on-brand text-base font-bold tracking-[0.04em] m-0">
                  ARNOMÁQUINAS
                </p>
                <p className="text-on-brand-soft text-[10px] font-semibold tracking-[0.2em] uppercase m-0">
                  Desde 1975
                </p>
              </div>
            </div>
            <p className="text-on-brand-soft text-sm leading-[1.8] max-w-[280px] m-0">
              50 anos transformando ambientes corporativos com móveis, equipamentos e soluções completas para escritório.
            </p>
            <div className="flex gap-2 mt-6">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href === "#" ? undefined : "_blank"}
                  rel={href === "#" ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="w-9 h-9 border border-line-on-brand-soft flex items-center justify-center text-on-brand-soft no-underline transition-colors hover:border-on-brand-soft hover:text-on-brand"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h5 className={headingClass}>Navegação</h5>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={linkClass}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h5 className={headingClass}>Produtos</h5>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {produtos.map((item) => (
                <li key={item}>
                  <a href="#produtos" className={linkClass}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato rápido */}
          <div>
            <h5 className={headingClass}>Contato</h5>
            <div className="flex flex-col gap-4">
              <p className="text-on-brand-soft text-sm leading-[1.6] m-0">(55) 98454-9195</p>
              <p className="text-on-brand-soft text-sm leading-[1.6] m-0">contato@arnomaquinas.com.br</p>
              <p className="text-on-brand-soft text-sm leading-[1.6] m-0">
                Seg–Sex: 8h às 18h<br />Sáb: 8h às 13h
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-line-on-brand-soft pt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-on-brand-faint text-[13px] m-0">
            © {new Date().getFullYear()} Arnomáquinas. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollTop}
            aria-label="Voltar ao topo"
            className="w-9 h-9 border border-line-on-brand-soft bg-transparent flex items-center justify-center text-on-brand-soft cursor-pointer transition-colors hover:border-on-brand-soft hover:text-on-brand self-end sm:self-auto"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
