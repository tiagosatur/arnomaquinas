import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const WHATSAPP_NUMBER = "5555984549195";

function WhatsAppIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const INPUT_BASE =
  "w-full bg-[var(--tint-on-brand-weak)] text-on-brand placeholder:text-on-brand-soft " +
  "px-4 py-3 text-sm outline-none rounded-sm box-border transition-colors";
const INPUT_BORDER = "border";
const INPUT_OK = `${INPUT_BORDER} border-line-on-brand-soft`;
const INPUT_ERR = `${INPUT_BORDER} border-[var(--color-bordeaux-300)]`;
const LABEL_CLS =
  "block text-on-brand-soft text-[11px] font-semibold tracking-[0.15em] uppercase mb-2";
const ERR_CLS = "text-[var(--color-bordeaux-300)] text-[11px] mt-1";

export function Contato() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    interesse: "",
    mensagem: "",
  });
  const [errors, setErrors] = useState<{ nome?: boolean; contact?: boolean; interesse?: boolean }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};
    if (!form.nome.trim()) newErrors.nome = true;
    if (!form.telefone.trim() && !form.email.trim()) newErrors.contact = true;
    if (!form.interesse) newErrors.interesse = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const categorias: Record<string, string> = {
      moveis: "Móveis de Escritório",
      cadeiras: "Cadeiras e Poltronas",
      equipamentos: "Equipamentos",
      expediente: "Material de Expediente",
      assistencia: "Assistência Técnica",
      outro: "Outro",
    };

    const msg =
      `Olá! Gostaria de solicitar um orçamento.%0A%0A` +
      `Nome: ${encodeURIComponent(form.nome)}%0A` +
      (form.empresa ? `Empresa: ${encodeURIComponent(form.empresa)}%0A` : "") +
      (form.email ? `E-mail: ${encodeURIComponent(form.email)}%0A` : "") +
      (form.telefone ? `Telefone: ${encodeURIComponent(form.telefone)}%0A` : "") +
      `Interesse: ${encodeURIComponent(categorias[form.interesse] ?? form.interesse)}` +
      (form.mensagem ? `%0AMensagem: ${encodeURIComponent(form.mensagem)}` : "");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section id="contato" className="bg-anchor section-y">
      <div className="container-page">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-on-brand-soft" />
            <span className="text-on-brand-soft text-[13px] font-semibold tracking-[0.15em] uppercase">
              Fale com a Arnomáquinas
            </span>
            <div className="w-8 h-px bg-on-brand-soft" />
          </div>
          <h2 className="text-on-brand text-[26px] sm:text-[32px] lg:text-[38px] font-light leading-tight tracking-[-0.02em] m-0">
            Solicite seu Orçamento{" "}
            <strong className="font-bold">sem compromisso</strong>
          </h2>
          <p className="text-on-brand-soft text-base mt-3">
            Nossa equipe retorna em até 24 horas com uma proposta personalizada.
          </p>
        </div>

        {/* 1-col mobile, form + sidebar on lg+ */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-12 items-start">
          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={LABEL_CLS}>Nome Completo *</label>
                <input
                  type="text"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className={`${INPUT_BASE} ${errors.nome ? INPUT_ERR : INPUT_OK}`}
                />
                {errors.nome && <p className={ERR_CLS}>Campo obrigatório</p>}
              </div>
              <div>
                <label className={LABEL_CLS}>Empresa</label>
                <input
                  type="text"
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  placeholder="Nome da empresa"
                  className={`${INPUT_BASE} ${INPUT_OK}`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={LABEL_CLS}>E-mail {!form.telefone && "*"}</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className={`${INPUT_BASE} ${errors.contact ? INPUT_ERR : INPUT_OK}`}
                />
              </div>
              <div>
                <label className={LABEL_CLS}>Telefone {!form.email && "*"}</label>
                <input
                  type="tel"
                  name="telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  placeholder="(55) 98454-9195"
                  className={`${INPUT_BASE} ${errors.contact ? INPUT_ERR : INPUT_OK}`}
                />
                {errors.contact && <p className={ERR_CLS}>Informe e-mail ou telefone</p>}
              </div>
            </div>

            <div className="mb-4">
              <label className={LABEL_CLS}>Interesse Principal *</label>
              <select
                name="interesse"
                value={form.interesse}
                onChange={handleChange}
                className={`${INPUT_BASE} ${errors.interesse ? INPUT_ERR : INPUT_OK} ${
                  form.interesse === "" ? "text-on-brand-soft" : "text-on-brand"
                }`}
              >
                <option value="" className="bg-anchor">Selecione uma categoria</option>
                <option value="moveis" className="bg-anchor">Móveis de Escritório</option>
                <option value="cadeiras" className="bg-anchor">Cadeiras e Poltronas</option>
                <option value="equipamentos" className="bg-anchor">Equipamentos</option>
                <option value="expediente" className="bg-anchor">Material de Expediente</option>
                <option value="assistencia" className="bg-anchor">Assistência Técnica</option>
                <option value="outro" className="bg-anchor">Outro</option>
              </select>
              {errors.interesse && <p className={ERR_CLS}>Selecione uma categoria</p>}
            </div>

            <div className="mb-7">
              <label className={LABEL_CLS}>Mensagem</label>
              <textarea
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                rows={4}
                placeholder="Descreva sua necessidade ou faça perguntas..."
                className={`${INPUT_BASE} ${INPUT_OK} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto bg-on-brand text-brand px-9 py-3.5 text-sm font-bold uppercase tracking-[0.08em] border-0 rounded-sm cursor-pointer transition-colors duration-200 hover:bg-[var(--surface-hover)]"
            >
              <WhatsAppIcon size={16} />
              Enviar pelo WhatsApp
            </button>
          </form>

          {/* Sidebar — contact info */}
          <div>
            <div className="bg-[var(--tint-on-brand-weak)] border border-line-on-brand-soft p-8">
              <h4 className="text-on-brand text-[15px] font-bold mb-6 m-0">
                Informações de Contato
              </h4>
              <div className="flex flex-col gap-5">
                {[
                  { icon: MapPin, label: "Endereço", value: "Av. Getúlio Vargas, 318\nSol Nascente, Ijuí — RS\n98700-000", href: "https://maps.app.goo.gl/2yGupUFwSHHFcsJJ6" },
                  { icon: Phone, label: "Telefone", value: "(55) 98454-9195" },
                  { icon: Mail, label: "E-mail", value: "contato@arnomaquinas.com.br" },
                  { icon: Clock, label: "Horário", value: "Seg–Sex: 8h às 18h\nSáb: 8h às 13h" },
                ].map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.label} className="flex gap-4">
                      <div className="w-8 h-8 bg-[var(--tint-on-brand-medium)] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={13} color="var(--text-on-brand)" />
                      </div>
                      <div>
                        <p className="text-on-brand-soft text-[11px] font-semibold tracking-[0.12em] uppercase mb-1 m-0">
                          {info.label}
                        </p>
                        {"href" in info ? (
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-on-brand-soft text-sm leading-[1.6] whitespace-pre-line underline underline-offset-[3px] hover:text-on-brand transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-on-brand-soft text-sm leading-[1.6] whitespace-pre-line m-0">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
