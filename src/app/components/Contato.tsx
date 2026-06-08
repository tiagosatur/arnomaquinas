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

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "var(--tint-on-brand-weak)",
    border: "1px solid var(--border-on-brand-subtle)",
    color: "var(--text-on-brand)",
    padding: "12px 16px",
    fontSize: 14,
    fontFamily: "Manrope, sans-serif",
    outline: "none",
    borderRadius: 2,
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  const inputErrorStyle: React.CSSProperties = {
    ...inputStyle,
    border: "1px solid var(--color-bordeaux-300)",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: "var(--text-on-brand-secondary)",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    fontFamily: "Manrope, sans-serif",
    marginBottom: 8,
  };

  return (
    <section id="contato" style={{ backgroundColor: "var(--surface-anchor)", padding: "96px 0" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 48px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 1, backgroundColor: "var(--text-on-brand-secondary)" }} />
            <span
              style={{
                color: "var(--text-on-brand-secondary)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "Manrope, sans-serif",
              }}
            >
              Fale com a Arnomáquinas
            </span>
            <div style={{ width: 32, height: 1, backgroundColor: "var(--text-on-brand-secondary)" }} />
          </div>
          <h2
            style={{
              color: "var(--text-on-brand)",
              fontFamily: "Manrope, sans-serif",
              fontSize: 38,
              fontWeight: 300,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Solicite seu Orçamento{" "}
            <strong style={{ fontWeight: 700 }}>sem compromisso</strong>
          </h2>
          <p
            style={{
              color: "var(--text-on-brand-secondary)",
              fontSize: 16,
              fontFamily: "Manrope, sans-serif",
              marginTop: 12,
            }}
          >
            Nossa equipe retorna em até 24 horas com uma proposta personalizada.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 48, alignItems: "start" }}>
          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div>
                <label style={labelStyle}>Nome Completo *</label>
                <input
                  type="text"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  style={errors.nome ? inputErrorStyle : inputStyle}
                />
                {errors.nome && (
                  <p style={{ color: "var(--color-bordeaux-300)", fontSize: 11, fontFamily: "Manrope, sans-serif", marginTop: 4 }}>
                    Campo obrigatório
                  </p>
                )}
              </div>
              <div>
                <label style={labelStyle}>Empresa</label>
                <input
                  type="text"
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  placeholder="Nome da empresa"
                  style={inputStyle}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div>
                <label style={labelStyle}>E-mail {!form.telefone && "*"}</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  style={errors.contact ? inputErrorStyle : inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Telefone {!form.email && "*"}</label>
                <input
                  type="tel"
                  name="telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  placeholder="(55) 98454-9195"
                  style={errors.contact ? inputErrorStyle : inputStyle}
                />
                {errors.contact && (
                  <p style={{ color: "var(--color-bordeaux-300)", fontSize: 11, fontFamily: "Manrope, sans-serif", marginTop: 4 }}>
                    Informe e-mail ou telefone
                  </p>
                )}
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Interesse Principal *</label>
              <select
                name="interesse"
                value={form.interesse}
                onChange={handleChange}
                style={{
                  ...(errors.interesse ? inputErrorStyle : inputStyle),
                  color: form.interesse === "" ? "var(--text-on-brand-secondary)" : "var(--text-on-brand)",
                }}
              >
                <option value="" style={{ background: "var(--surface-anchor)" }}>Selecione uma categoria</option>
                <option value="moveis" style={{ background: "var(--surface-anchor)" }}>Móveis de Escritório</option>
                <option value="cadeiras" style={{ background: "var(--surface-anchor)" }}>Cadeiras e Poltronas</option>
                <option value="equipamentos" style={{ background: "var(--surface-anchor)" }}>Equipamentos</option>
                <option value="expediente" style={{ background: "var(--surface-anchor)" }}>Material de Expediente</option>
                <option value="assistencia" style={{ background: "var(--surface-anchor)" }}>Assistência Técnica</option>
                <option value="outro" style={{ background: "var(--surface-anchor)" }}>Outro</option>
              </select>
              {errors.interesse && (
                <p style={{ color: "var(--color-bordeaux-300)", fontSize: 11, fontFamily: "Manrope, sans-serif", marginTop: 4 }}>
                  Selecione uma categoria
                </p>
              )}
            </div>

            <div style={{ marginBottom: 28 }}>
              <label style={labelStyle}>Mensagem</label>
              <textarea
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                rows={4}
                placeholder="Descreva sua necessidade ou faça perguntas..."
                style={{ ...inputStyle, resize: "none" }}
              />
            </div>

            <button
              type="submit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                backgroundColor: "var(--text-on-brand)",
                color: "var(--brand-primary)",
                padding: "14px 36px",
                fontSize: 14,
                fontWeight: 700,
                fontFamily: "Manrope, sans-serif",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                border: "none",
                borderRadius: 2,
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--surface-hover)")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--text-on-brand)")}
            >
              <WhatsAppIcon size={16} />
              Enviar pelo WhatsApp
            </button>
          </form>

          {/* Sidebar — contact info only */}
          <div>
            <div
              style={{
                backgroundColor: "var(--tint-on-brand-weak)",
                border: "1px solid var(--border-on-brand-subtle)",
                padding: 32,
              }}
            >
              <h4
                style={{
                  color: "var(--text-on-brand)",
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: "Manrope, sans-serif",
                  marginBottom: 24,
                }}
              >
                Informações de Contato
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { icon: MapPin, label: "Endereço", value: "Av. Getúlio Vargas, 318\nSol Nascente, Ijuí — RS\n98700-000", href: "https://maps.app.goo.gl/2yGupUFwSHHFcsJJ6" },
                  { icon: Phone, label: "Telefone", value: "(55) 98454-9195" },
                  { icon: Mail, label: "E-mail", value: "contato@arnomaquinas.com.br" },
                  { icon: Clock, label: "Horário", value: "Seg–Sex: 8h às 18h\nSáb: 8h às 13h" },
                ].map((info) => {
                  const Icon = info.icon;
                  const textStyle: React.CSSProperties = {
                    color: "var(--text-on-brand-secondary)",
                    fontSize: 14,
                    fontFamily: "Manrope, sans-serif",
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                  };
                  return (
                    <div key={info.label} style={{ display: "flex", gap: 16 }}>
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          backgroundColor: "var(--tint-on-brand-medium)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        <Icon size={13} color="var(--text-on-brand)" />
                      </div>
                      <div>
                        <p
                          style={{
                            color: "var(--text-on-brand-secondary)",
                            fontSize: 11,
                            fontWeight: 600,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            fontFamily: "Manrope, sans-serif",
                            marginBottom: 4,
                          }}
                        >
                          {info.label}
                        </p>
                        {"href" in info ? (
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ ...textStyle, textDecoration: "underline", textUnderlineOffset: 3 }}
                            onMouseEnter={e => (e.currentTarget.style.color = "var(--text-on-brand)")}
                            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-on-brand-secondary)")}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p style={textStyle}>{info.value}</p>
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
