import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Calendar,
  Check,
  Clock,
  FileText,
  Gift,
  LayoutGrid,
  MapPin,
  MessageCircle,
  Phone,
  Smartphone,
  Sparkles,
  Star,
} from "lucide-react";
import showroomImg from "../../imports/proposta/showroom.png";

/* ────────────────────────────────────────────────────────────
   CONFIG — preencher antes de apresentar
   ──────────────────────────────────────────────────────────── */
const CONFIG = {
  recipientName: "Arno", // ⚠️ trocar
  recipientCompany: "Arnomáquinas",
  proposalDate: "11 de junho de 2026",
  proposalValidUntil: "26 de junho de 2026", // 15 dias
  myName: "Tiago Satur",
  myCompany: "Nasus Digital",
  myWhatsApp: "5541991696767", // ⚠️ trocar pelo seu número (com DDI 55)
  myEmail: "tiagosatur@gmail.com",
  liveSiteUrl: "/", // landing page atual
};

/* ────────────────────────────────────────────────────────────
   Helpers
   ──────────────────────────────────────────────────────────── */
const waUrl = (msg: string) =>
  `https://wa.me/${CONFIG.myWhatsApp}?text=${encodeURIComponent(msg)}`;

/* ────────────────────────────────────────────────────────────
   Section primitives
   ──────────────────────────────────────────────────────────── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-px bg-eyebrow" />
      <span className="text-eyebrow text-[11px] font-bold tracking-[0.2em] uppercase">
        {children}
      </span>
    </div>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="mb-12 max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-ink text-[28px] sm:text-[32px] lg:text-[38px] font-light leading-tight tracking-[-0.02em] m-0">
        {title}
      </h2>
      {subtitle && (
        <p className="text-ink-soft text-[15px] leading-[1.7] mt-4 m-0">{subtitle}</p>
      )}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Site delivered — 10 sections
   ──────────────────────────────────────────────────────────── */
const siteFeatures = [
  { icon: LayoutGrid, label: "10 seções pensadas estrategicamente", desc: "Hero, especialidades, diferenciais, autoridade técnica, depoimentos, processo, contato e mais." },
  { icon: Smartphone, label: "100% responsivo", desc: "Funciona perfeitamente em celular, tablet e computador." },
  { icon: MessageCircle, label: "Formulário direto pro WhatsApp", desc: "Cliente preenche e a mensagem cai formatada no seu WhatsApp." },
  { icon: FileText, label: "Catálogo PDF integrado", desc: "Móveis de Madeira já embutido. Outros catálogos podem ser adicionados." },
  { icon: MapPin, label: "Integração com Google Maps", desc: "Endereço clicável que abre rota direta no app de navegação do cliente." },
  { icon: Sparkles, label: "Design exclusivo", desc: "Identidade visual feita sob medida pra Arnomáquinas." },
];

/* ────────────────────────────────────────────────────────────
   Plans
   ──────────────────────────────────────────────────────────── */
type Plan = {
  id: "avulso" | "essencial" | "crescimento";
  badge?: string;
  title: string;
  subtitle: string;
  priceUpfront?: string;
  priceMonthly?: string;
  priceMonthlyNote?: string;
  features: string[];
  ctaLabel: string;
  ctaMessage: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    id: "avulso",
    title: "Site Avulso",
    subtitle: "Para quem quer só o site pronto.",
    priceUpfront: "R$ 1.200",
    features: [
      "Site completo, publicado e funcionando",
      "Sem acompanhamento mensal",
      "Ajustes futuros: R$ 150/hora (mín. 1h por chamado)",
    ],
    ctaLabel: "Quero a Opção 1",
    ctaMessage:
      "Olá Tiago! Recebi a proposta do site. Quero fechar a Opção 1 — Site Avulso (R$ 1.200).",
  },
  {
    id: "essencial",
    title: "Pacote Essencial",
    subtitle: "Site + manutenção básica para manter no ar.",
    priceUpfront: "R$ 600",
    priceMonthly: "R$ 97",
    priceMonthlyNote: "/mês",
    features: [
      "Site com 50% de desconto",
      "1h/mês de alterações inclusas — sem chamados a R$ 150/h",
      "Valor mensal fixo, sem cobrança surpresa",
      "Backups e monitoramento automáticos",
      "Correções técnicas sem custo extra",
      "Canal direto via WhatsApp (resposta em 48h)",
    ],
    ctaLabel: "Quero o Essencial",
    ctaMessage:
      "Olá Tiago! Recebi a proposta. Quero fechar a Opção 2 — Pacote Essencial (R$ 600 + R$ 97/mês).",
  },
  {
    id: "crescimento",
    badge: "Recomendado",
    title: "Pacote Crescimento",
    subtitle: "Site + acompanhamento completo + IA do WhatsApp.",
    priceUpfront: "R$ 600",
    priceMonthly: "R$ 149",
    priceMonthlyNote: "/mês",
    features: [
      "Tudo do Pacote Essencial",
      "3h/mês de alterações no site (3x mais que o Essencial)",
      "Configuração da IA do WhatsApp (Meta Business Agent)",
      "Otimização mensal da IA com base em conversas reais",
      "Setup do Google Meu Negócio incluso (vale R$ 247)",
      "Canal direto prioritário (resposta em 24h)",
      "🎁 Bônus: Carrossel de imagens grátis (vale R$ 200)",
    ],
    ctaLabel: "Quero o Crescimento",
    ctaMessage:
      "Olá Tiago! Recebi a proposta. Quero fechar a Opção 2 — Pacote Crescimento (R$ 600 + R$ 149/mês), com a IA do WhatsApp.",
    featured: true,
  },
];

/* ────────────────────────────────────────────────────────────
   Comparison rows
   ──────────────────────────────────────────────────────────── */
type CompareCell = React.ReactNode;
type CompareRow = { label: string; avulso: CompareCell; essencial: CompareCell; crescimento: CompareCell };

const FreeGift = (
  <span className="inline-flex items-center gap-1.5">
    <Gift size={14} className="text-brand" />
    Grátis
  </span>
);

const compareRows: CompareRow[] = [
  { label: "Site no ar e funcionando", avulso: "✅", essencial: "✅", crescimento: "✅" },
  { label: "Manutenção e backups", avulso: "—", essencial: "✅", crescimento: "✅" },
  { label: "Correções técnicas", avulso: "R$ 150/h", essencial: "✅", crescimento: "✅" },
  { label: "Alterações de conteúdo*", avulso: "R$ 150/h", essencial: "1h/mês", crescimento: "3h/mês" },
  { label: "IA do WhatsApp (Meta Business Agent)", avulso: "—", essencial: "—", crescimento: "✅" },
  { label: "Setup Google Meu Negócio", avulso: "R$ 247", essencial: "R$ 247", crescimento: FreeGift },
  { label: "Carrossel de imagens", avulso: "R$ 200", essencial: "R$ 200", crescimento: FreeGift },
  { label: "Tempo de resposta no suporte", avulso: "—", essencial: "48h", crescimento: "24h" },
];

/* ────────────────────────────────────────────────────────────
   Additional services
   ──────────────────────────────────────────────────────────── */
const additionalServices = [
  { name: "Carrossel de imagens (até 8 fotos)", price: "R$ 200 (único)", desc: "Montagem, otimização e responsivo" },
  { name: "Páginas extras (Sobre, FAQ, etc.)", price: "R$ 197/página", desc: "Expansão do site além da landing" },
  { name: "Otimização Google Meu Negócio (mensal)", price: "R$ 79/mês", desc: "Aparece bem no Google Maps de Ijuí. Setup (R$ 247) já incluso no plano Crescimento." },
  { name: "Google Analytics + Relatório mensal", price: "R$ 79/mês", desc: "Saber quantas pessoas visitam e contatam" },
  { name: "Blog institucional (2 artigos/mês)", price: "R$ 297/mês", desc: "Atrai busca orgânica no Google" },
  { name: "Google Ads (gestão de campanhas)", price: "R$ 247 setup + R$ 297/mês", desc: "Aparece no topo do Google. Verba à parte." },
  { name: "Produção fotográfica / vídeo", price: "Sob orçamento", desc: "Coordenação com parceiro local em Ijuí" },
];

/* ────────────────────────────────────────────────────────────
   PAGE
   ──────────────────────────────────────────────────────────── */
export default function Proposta() {
  return (
    <div className="bg-surface min-h-screen" style={{ fontFamily: "Manrope, 'Segoe UI', system-ui, sans-serif" }}>
      {/* ━━━━━━━━━━━━━━ 1. HERO ━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden section-y border-b border-line">
        {/* BG image — fade-in suave ao carregar */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `url(${showroomImg})`,
            opacity: 0,
            animation: "proposta-hero-bg-fade-in 1.6s ease-out 0.2s forwards",
          }}
        />
        {/* Overlay creme — texto fica legível à esquerda, imagem mais visível à direita */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-surface via-surface/75 to-surface/10 pointer-events-none"
        />

        <div className="container-page relative">
          <div className="hero-rise" style={{ animationDelay: "0.15s" }}>
            <Eyebrow>Proposta Comercial</Eyebrow>
          </div>

          <h1
            className="hero-rise text-ink text-[36px] sm:text-[48px] lg:text-[64px] font-light leading-[1.05] tracking-[-0.02em] m-0 max-w-4xl"
            style={{ animationDelay: "0.30s" }}
          >
            Para <span className="font-bold text-highlight">{CONFIG.recipientCompany}</span>
            <br />
            <span className="text-ink-soft text-[24px] sm:text-[28px] lg:text-[36px] font-light">
              Site institucional + acompanhamento digital.
            </span>
          </h1>

          <div
            className="hero-rise mt-10 max-w-2xl text-ink-soft text-[16px] leading-[1.7]"
            style={{ animationDelay: "0.50s" }}
          >
            <p className="m-0">
              Sr. {CONFIG.recipientName}, esta proposta apresenta o site já desenvolvido
              para a Arnomáquinas e os caminhos para mantê-lo gerando resultado mês a
              mês. Foi pensada considerando a história de <strong className="text-ink font-bold">51 anos</strong> que
              a empresa construiu em Ijuí, e a oportunidade de levar essa autoridade
              para o ambiente digital.
            </p>
          </div>

          <div
            className="hero-rise mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-ink-soft text-[13px]"
            style={{ animationDelay: "0.70s" }}
          >
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <span>Apresentada em <strong className="text-ink font-bold">{CONFIG.proposalDate}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} />
              <span>Válida até <strong className="text-ink font-bold">{CONFIG.proposalValidUntil}</strong></span>
            </div>
          </div>

          <div
            className="hero-rise mt-12"
            style={{ animationDelay: "0.90s" }}
          >
            <a
              href="#pronto"
              className="inline-flex items-center gap-2.5 bg-brand text-on-brand px-7 py-[13px] text-[13px] font-bold uppercase tracking-[0.08em] rounded-sm no-underline transition-colors hover:bg-brand-hover"
            >
              Ver o que está pronto
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ 2. O QUE FOI ENTREGUE ━━━━━━━━━━━━━━ */}
      <section id="pronto" className="section-y bg-elevated border-b border-line">
        <div className="container-page">
          <SectionHeader
            eyebrow="O que já está pronto"
            title={<>O site da Arnomáquinas já está <strong className="font-bold">no ar</strong>.</>}
            subtitle="Tudo isto foi desenvolvido, testado e está funcionando. A proposta abaixo decide como o senhor quer levar isso adiante."
          />

          <SiteShowcase />
          <p className="text-ink-muted text-[12px] mt-6 text-center">
            Toque ou clique nos cards das laterais para navegar.
          </p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ 3. DIFERENCIAL: META BUSINESS AGENT ━━━━━━━━━━━━━━ */}
      <section className="section-y bg-anchor">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-on-brand-soft" />
                <span className="text-on-brand-soft text-[11px] font-bold tracking-[0.2em] uppercase">
                  Recurso exclusivo · Lançado 03/Jun/2026
                </span>
              </div>
              <h2 className="text-on-brand text-[28px] sm:text-[32px] lg:text-[40px] font-light leading-tight tracking-[-0.02em] m-0">
                A nova <strong className="font-bold">IA do WhatsApp</strong> atendendo seus clientes <strong className="font-bold">24 horas por dia</strong>.
              </h2>
              <p className="text-on-brand-soft text-[15px] leading-[1.7] mt-6 m-0">
                O Meta Business Agent foi lançado pela Meta há poucos dias e ainda
                quase ninguém em Ijuí está usando. No <strong className="text-on-brand">Pacote Crescimento</strong>, eu
                configuro, treino com o catálogo da Arnomáquinas, e otimizo
                mensalmente.
              </p>
            </div>

            <div className="bg-anchor-deep border border-line-on-brand-soft p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Bot size={24} color="var(--text-on-brand)" />
                <span className="text-on-brand text-[14px] font-bold">O que a IA faz</span>
              </div>
              <ul className="flex flex-col gap-4">
                {[
                  "Responde clientes 24h/dia (fim de semana, madrugada, feriado)",
                  "Recomenda produtos do catálogo automaticamente",
                  "Tira dúvidas sobre horário, endereço, formas de pagamento",
                  "Qualifica orçamentos antes de chegar até você",
                  "Funciona em WhatsApp, Instagram e Messenger ao mesmo tempo",
                  "No teste do México, gerou +10% em vendas para PMEs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-on-brand-soft text-[14px] leading-[1.55]">
                    <Check size={16} className="shrink-0 mt-[3px]" color="var(--text-on-brand)" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ 4. PLANOS ━━━━━━━━━━━━━━ */}
      <section id="planos" className="section-y bg-surface border-b border-line">
        <div className="container-page">
          <SectionHeader
            eyebrow="Investimento"
            title={<>Escolha o caminho que <strong className="font-bold">faz sentido</strong> pra Arnomáquinas.</>}
            subtitle="Três opções para começar. Pode trocar de plano a qualquer momento conforme o negócio crescer."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>

          <p className="text-ink-muted text-[12px] mt-8 text-center max-w-2xl mx-auto">
            * Hospedagem e domínio são pagos diretamente pela Arnomáquinas (estimativa
            R$ 240–440/ano). Configuro tudo na entrega.
          </p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ 5. COMPARATIVO ━━━━━━━━━━━━━━ */}
      <section className="section-y bg-elevated border-b border-line">
        <div className="container-page">
          <SectionHeader
            eyebrow="Comparativo"
            title={<>O que cada opção <strong className="font-bold">entrega</strong>.</>}
          />

          <div className="overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b-2 border-ink/15">
                  <th className="text-left text-ink-soft text-[13px] font-bold tracking-[0.15em] uppercase py-5 pl-6 pr-4">
                    Recurso
                  </th>
                  <th className="text-center text-ink text-[16px] font-bold py-5 px-3">Avulso</th>
                  <th className="text-center text-ink text-[16px] font-bold py-5 px-3">Essencial</th>
                  <th className="text-center text-ink text-[16px] font-bold py-5 px-3 bg-anchor/5">
                    <span className="inline-flex items-center gap-1.5">
                      <Star size={14} className="fill-current text-brand" />
                      Crescimento
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-surface" : "bg-elevated"}>
                    <td className="text-ink text-[15px] py-4 pl-6 pr-4 leading-[1.5]">{row.label}</td>
                    <td className="text-center text-ink-soft text-[15px] py-4 px-3">{row.avulso}</td>
                    <td className="text-center text-ink-soft text-[15px] py-4 px-3">{row.essencial}</td>
                    <td className="text-center text-ink text-[15px] font-bold py-4 px-3 bg-anchor/5">{row.crescimento}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-ink-muted text-[12px] mt-6">
            * Alterações incluem textos, fotos, telefones, horários, catálogos PDF, banners e outras edições no site.
          </p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ 6. FORMAS DE PAGAMENTO ━━━━━━━━━━━━━━ */}
      <section className="section-y bg-muted border-b border-line">
        <div className="container-page">
          <SectionHeader
            eyebrow="Formas de Pagamento"
            title={<>Pagar é <strong className="font-bold">simples e flexível</strong>.</>}
            subtitle="Aceito PIX, boleto e cartão. Escolha a forma que cabe melhor no fluxo de caixa da empresa."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Opção 1 — Avulso */}
            <div className="bg-elevated border border-line p-8 lg:p-10">
              <div className="text-eyebrow text-[11px] font-bold tracking-[0.2em] uppercase mb-3">
                Opção 1 — Site Avulso
              </div>
              <h3 className="text-ink text-[24px] font-bold leading-tight m-0 mb-7">
                R$ 1.200 <span className="text-ink-soft text-[14px] font-normal">(pagamento único)</span>
              </h3>

              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-brand shrink-0 mt-[3px]" />
                  <div>
                    <strong className="text-ink text-[15px] font-bold block">À vista no PIX</strong>
                    <p className="text-ink-soft text-[13px] leading-[1.55] m-0 mt-1">
                      Recebimento na hora, sem taxa.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-brand shrink-0 mt-[3px]" />
                  <div>
                    <strong className="text-ink text-[15px] font-bold block">2x sem juros</strong>
                    <p className="text-ink-soft text-[13px] leading-[1.55] m-0 mt-1">
                      50% no fechamento + 50% na entrega.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-brand shrink-0 mt-[3px]" />
                  <div>
                    <strong className="text-ink text-[15px] font-bold block">3x sem juros</strong>
                    <p className="text-ink-soft text-[13px] leading-[1.55] m-0 mt-1">
                      Parcelamento máximo. 1ª no fechamento, 2ª na entrega, 3ª em 30 dias.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Opção 2 — Pacote Anual */}
            <div className="bg-elevated border border-line p-8 lg:p-10">
              <div className="text-eyebrow text-[11px] font-bold tracking-[0.2em] uppercase mb-3">
                Opção 2 — Pacote Anual
              </div>
              <h3 className="text-ink text-[24px] font-bold leading-tight m-0 mb-7">
                R$ 600 <span className="text-ink-soft text-[14px] font-normal">+ mensalidade</span>
              </h3>

              <p className="text-eyebrow text-[11px] font-bold tracking-[0.15em] uppercase mb-3">
                Entrada (R$ 600)
              </p>
              <ul className="flex flex-col gap-4 mb-7">
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-brand shrink-0 mt-[3px]" />
                  <div>
                    <strong className="text-ink text-[15px] font-bold block">
                      50% no fechamento + 50% na entrega
                    </strong>
                    <p className="text-ink-soft text-[13px] leading-[1.55] m-0 mt-1">
                      Padrão. Sem juros, sem taxa.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-brand shrink-0 mt-[3px]" />
                  <div>
                    <strong className="text-ink text-[15px] font-bold block">
                      2x sem juros (caso prefira)
                    </strong>
                    <p className="text-ink-soft text-[13px] leading-[1.55] m-0 mt-1">
                      Combinamos as datas conforme o que for melhor pra você.
                    </p>
                  </div>
                </li>
              </ul>

              <p className="text-eyebrow text-[11px] font-bold tracking-[0.15em] uppercase mb-3">
                Mensalidade (R$ 97 ou R$ 149)
              </p>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-brand shrink-0 mt-[3px]" />
                  <div>
                    <strong className="text-ink text-[15px] font-bold block">
                      Cobrança automática mensal
                    </strong>
                    <p className="text-ink-soft text-[13px] leading-[1.55] m-0 mt-1">
                      Todo mês você recebe um link por e-mail ou WhatsApp e paga em 1 clique no app do banco — PIX ou boleto, como preferir. Vencimento dia 10.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-ink-muted text-[12px] mt-8 max-w-2xl">
            * Para pagamentos no cartão de crédito acima de 3x, a taxa do cartão (~3,5% por parcela) é repassada ao cliente.
          </p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ 7. SERVIÇOS ADICIONAIS ━━━━━━━━━━━━━━ */}
      <section className="section-y bg-surface border-b border-line">
        <div className="container-page">
          <SectionHeader
            eyebrow="Serviços adicionais (sob demanda)"
            title={<>Para <strong className="font-bold">crescer ainda mais</strong> na hora certa.</>}
            subtitle="Estes serviços NÃO estão inclusos nos planos. São contratados separadamente conforme a Arnomáquinas quiser ativar."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px]">
            {additionalServices.map((s) => (
              <div key={s.name} className="bg-elevated border border-line p-6 flex flex-col gap-2">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-ink text-[15px] font-bold leading-tight m-0">{s.name}</h3>
                  <span className="text-brand text-[12px] font-bold tracking-[0.04em] whitespace-nowrap">
                    {s.price}
                  </span>
                </div>
                <p className="text-ink-soft text-[13px] leading-[1.55] m-0">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ 7. PRÓXIMOS PASSOS ━━━━━━━━━━━━━━ */}
      <section className="section-y bg-anchor-deep">
        <div className="container-page">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-on-brand-soft" />
              <span className="text-on-brand-soft text-[11px] font-bold tracking-[0.2em] uppercase">
                Próximos passos
              </span>
            </div>
            <h2 className="text-on-brand text-[28px] sm:text-[32px] lg:text-[40px] font-light leading-tight tracking-[-0.02em] m-0">
              É só dizer <strong className="font-bold">"sim"</strong>. Eu cuido do resto.
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[
              { n: "1", label: "Aprovação", desc: "Você define a opção escolhida durante esta reunião." },
              { n: "2", label: "Hospedagem", desc: "Te oriento na contratação — paga direto, em nome da Arnomáquinas." },
              { n: "3", label: "Publicação", desc: "Subo o site no domínio definitivo em até 2 dias úteis." },
              { n: "4", label: "Acompanhamento", desc: "Se Opção 2, começamos a parceria mensal a partir da publicação." },
            ].map((step) => (
              <div key={step.n} className="border-l-2 border-line-on-brand pl-6">
                <div className="text-on-brand text-[32px] font-light leading-none">{step.n}</div>
                <h3 className="text-on-brand text-[14px] font-bold uppercase tracking-[0.08em] mt-4 m-0">
                  {step.label}
                </h3>
                <p className="text-on-brand-soft text-[14px] leading-[1.6] mt-3 m-0">{step.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-16 text-on-brand-soft text-[13px]">
            Proposta válida até <strong className="text-on-brand">{CONFIG.proposalValidUntil}</strong>.
          </p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━ FOOTER ━━━━━━━━━━━━━━ */}
      <footer className="bg-surface border-t border-line py-10">
        <div className="container-page flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="text-ink-muted text-[11px] tracking-[0.15em] uppercase font-bold m-0">
              Proposta apresentada por
            </p>
            <p className="text-ink text-[18px] font-bold mt-2 m-0">{CONFIG.myName}</p>
            <p className="text-ink-soft text-[14px] m-0">{CONFIG.myCompany}</p>
          </div>
          <div className="flex flex-col gap-1.5 text-ink-soft text-[13px]">
            <a
              href={waUrl(`Olá ${CONFIG.myName}!`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink-soft hover:text-brand transition-colors no-underline"
            >
              <Phone size={13} /> WhatsApp
            </a>
            <a
              href={`mailto:${CONFIG.myEmail}`}
              className="inline-flex items-center gap-2 text-ink-soft hover:text-brand transition-colors no-underline"
            >
              <MessageCircle size={13} /> {CONFIG.myEmail}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   PlanCard
   ──────────────────────────────────────────────────────────── */
function PlanCard({ plan }: { plan: Plan }) {
  const isFeatured = plan.featured;

  return (
    <div
      className={
        "flex flex-col p-7 lg:p-8 transition-all " +
        (isFeatured
          ? "bg-anchor text-on-brand border-2 border-brand lg:scale-[1.02] lg:shadow-[var(--shadow-panel)]"
          : "bg-elevated border border-line")
      }
    >
      {plan.badge && (
        <div className="inline-flex self-start items-center gap-1.5 bg-elevated text-brand text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 mb-5">
          <Star size={10} className="fill-current" />
          {plan.badge}
        </div>
      )}

      <h3 className={"text-[22px] font-bold leading-tight m-0 " + (isFeatured ? "text-on-brand" : "text-ink")}>
        {plan.title}
      </h3>
      <p className={"text-[13px] leading-[1.55] mt-2 m-0 " + (isFeatured ? "text-on-brand-soft" : "text-ink-soft")}>
        {plan.subtitle}
      </p>

      {/* Price block */}
      <div className="mt-7 mb-6">
        {plan.priceUpfront && (
          <div className="flex items-baseline gap-2">
            <span className={"text-[36px] font-bold leading-none tracking-tight " + (isFeatured ? "text-on-brand" : "text-ink")}>
              {plan.priceUpfront}
            </span>
            <span className={"text-[12px] " + (isFeatured ? "text-on-brand-soft" : "text-ink-soft")}>
              entrada única
            </span>
          </div>
        )}
        {plan.priceMonthly && (
          <div className="flex items-baseline gap-2 mt-2.5">
            <span className={"text-[13px] " + (isFeatured ? "text-on-brand-soft" : "text-ink-soft")}>+</span>
            <span className={"text-[26px] font-bold leading-none " + (isFeatured ? "text-on-brand" : "text-ink")}>
              {plan.priceMonthly}
            </span>
            <span className={"text-[12px] " + (isFeatured ? "text-on-brand-soft" : "text-ink-soft")}>
              {plan.priceMonthlyNote}
            </span>
          </div>
        )}
      </div>

      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {plan.features.map((f) => (
          <li
            key={f}
            className={
              "flex items-start gap-2.5 text-[13px] leading-[1.55] " +
              (isFeatured ? "text-on-brand-soft" : "text-ink-soft")
            }
          >
            <Check size={14} className="shrink-0 mt-[3px]" color={isFeatured ? "var(--text-on-brand)" : "var(--brand-primary)"} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={waUrl(plan.ctaMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={
          "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.08em] rounded-sm no-underline transition-colors " +
          (isFeatured
            ? "bg-elevated text-ink hover:bg-surface"
            : "bg-brand text-on-brand hover:bg-brand-hover")
        }
      >
        <MessageCircle size={14} />
        {plan.ctaLabel}
      </a>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   SiteShowcase — Carousel 3-cards com card central elevado
   ──────────────────────────────────────────────────────────── */
function SiteShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = siteFeatures.length;

  const goTo = (relativePosition: number) => {
    setActiveIndex((i) => (i + relativePosition + total) % total);
  };

  return (
    <div>
      {/* Stage */}
      <div
        className="relative h-[500px] sm:h-[480px] lg:h-[520px] flex items-center justify-center overflow-hidden"
        style={{ perspective: "1500px", perspectiveOrigin: "center center" }}
      >
        {siteFeatures.map((feature, idx) => {
          // Calcula posição relativa (-2,-1,0,1,2…) com normalização circular
          let position = idx - activeIndex;
          if (position > total / 2) position -= total;
          if (position < -total / 2) position += total;

          const isCenter = position === 0;
          const isVisible = Math.abs(position) <= 1;
          const Icon = feature.icon;

          // Posição visual fixada em ±1 pros escondidos — assim quando ficam visíveis
          // é só a opacidade que entra, sem teletransporte de posição.
          const visualPos = Math.max(-1, Math.min(1, position));

          const transform = isCenter
            ? "translateX(0) rotateY(0deg) scale(1)"
            : `translateX(calc(${visualPos} * clamp(190px, 26vw, 290px))) rotateY(${visualPos * -28}deg) scale(0.78)`;

          return (
            <div
              key={feature.label}
              onClick={() => isVisible && !isCenter && goTo(position)}
              role={!isCenter && isVisible ? "button" : undefined}
              tabIndex={!isCenter && isVisible ? 0 : -1}
              onKeyDown={(e) => {
                if (!isCenter && isVisible && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  goTo(position);
                }
              }}
              style={{
                transform,
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                willChange: "transform, opacity",
                opacity: isVisible ? (isCenter ? 1 : 0.65) : 0,
                pointerEvents: isVisible ? "auto" : "none",
                zIndex: isCenter ? 10 : 1,
                transition:
                  "transform 650ms cubic-bezier(0.25,0.46,0.45,0.94), opacity 650ms ease-out",
              }}
              className={
                "absolute w-[320px] sm:w-[400px] lg:w-[440px] p-8 sm:p-10 flex flex-col gap-4 " +
                (isCenter
                  ? "bg-anchor shadow-[var(--shadow-panel)]"
                  : "bg-elevated border border-line cursor-pointer")
              }
            >
              <div
                className={
                  "w-12 h-12 flex items-center justify-center " +
                  (isCenter ? "bg-anchor-deep" : "bg-anchor")
                }
              >
                <Icon size={22} color="var(--text-on-brand)" />
              </div>
              <h3
                className={
                  "text-[18px] sm:text-[20px] font-bold leading-tight m-0 " +
                  (isCenter ? "text-on-brand" : "text-ink")
                }
              >
                {feature.label}
              </h3>
              <p
                className={
                  "text-[14px] leading-[1.65] m-0 " +
                  (isCenter ? "text-on-brand-soft" : "text-ink-soft")
                }
              >
                {feature.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {siteFeatures.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Ir para o card ${idx + 1}`}
            className={
              "h-1.5 rounded-full transition-all duration-300 cursor-pointer border-0 p-0 " +
              (idx === activeIndex ? "w-8 bg-brand" : "w-1.5 bg-ink/20 hover:bg-ink/40")
            }
          />
        ))}
      </div>
    </div>
  );
}
