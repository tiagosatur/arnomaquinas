import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

function WhatsAppIcon({ size = 14 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const WHATSAPP_URL = `https://wa.me/5555984549195?text=${encodeURIComponent(
  "Olá, meu nome é [SEU NOME], vim pelo site, e gostaria de "
)}`;

const links = [
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-surface transition-shadow duration-300 ${
        scrolled
          ? "shadow-[var(--shadow-header)]"
          : "border-b border-line-brand-faint"
      }`}
    >
      <div className="container-page flex h-[88px] items-center justify-between gap-8">
        {/* Logo lockup */}
        <a href="#" className="flex items-center gap-3 shrink-0 no-underline">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand">
            <span className="text-on-brand text-[22px] font-extrabold">A</span>
          </div>
          <p className="text-ink text-xl font-bold leading-none tracking-[0.04em]">
            ARNOMÁQUINAS
          </p>
        </a>

        {/* Center nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-ink text-[15px] font-medium no-underline opacity-[0.82] transition-[opacity,color] duration-200 hover:opacity-100 hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: phone + CTA */}
        <div className="hidden lg:flex items-center gap-6 shrink-0">
          <a
            href="tel:+5555984549195"
            className="flex items-center gap-2 text-ink text-sm no-underline opacity-70"
          >
            <Phone size={14} />
            <span>(55) 98454-9195</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-brand px-7 py-[13px] text-[13px] font-light uppercase tracking-[0.08em] text-on-brand no-underline transition-colors duration-200 hover:bg-brand-hover"
          >
            <WhatsAppIcon size={16} />
            Solicitar Orçamento
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden bg-transparent border-0 text-ink cursor-pointer p-3"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile full-screen overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-surface flex flex-col lg:hidden">
          {/* Top bar: logo + close (mirrors header height) */}
          <div className="container-page flex items-center justify-between h-[88px] shrink-0 border-b border-line-brand-faint">
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 no-underline"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand">
                <span className="text-on-brand text-[22px] font-extrabold">A</span>
              </div>
              <p className="text-ink text-xl font-bold leading-none tracking-[0.04em]">
                ARNOMÁQUINAS
              </p>
            </a>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-ink p-3 bg-transparent border-0 cursor-pointer"
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Nav links — fills available space */}
          <nav className="flex flex-col flex-1 container-page pt-4 overflow-y-auto">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-ink text-[17px] font-medium no-underline py-5 border-b border-line-brand-soft tracking-[0.04em]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA pinned to bottom of screen */}
          <div className="container-page pb-8 pt-4 shrink-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2.5 w-full bg-brand px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-on-brand no-underline"
            >
              <WhatsAppIcon size={16} />
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
