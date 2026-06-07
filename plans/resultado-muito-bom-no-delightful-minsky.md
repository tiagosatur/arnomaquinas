# Hero + Stats — Redesign v2 (layout, tipografia, repetição)

---

## Problemas identificados (v2)

| Elemento | Problema |
|---|---|
| Split 45/55 hero | Layout "batido" — solid color block + image right é o template mais genérico da internet |
| Headline 4 linhas | Dois blocos de cor diferentes (bone + terracota) em 4 linhas a 52px competem visualmente |
| Stats strip | 44px em terracota forte sobre fundo bone — pesado. Divisórias verticais em terracota violam a regra de usar o acento com parcimônia |
| Repetição "50 anos" | Aparece em 3 lugares simultâneos: logo tagline, eyebrow do hero, stat "50+ Anos de Tradição" |

---

## Plano de execução

### 1. Resolver a repetição de "50 anos" primeiro

**Regra:** a informação deve aparecer **em um lugar só**, com o peso certo.

- **Logo (Navbar)** → trocar "50 ANOS DE TRADIÇÃO" por **"Desde 1974"**. Mais conciso, mais premium, ancora a herança sem gritar.
- **Eyebrow do Hero** → remover completamente. A imagem e o headline falam por si. O eyebrow estava funcionando como muleta.
- **Stats strip** → mudar o primeiro stat de `50+ / Anos de Tradição` para `1974 / Ano de Fundação`. Ângulo diferente, não repete "50 anos", e é mais factual/confiável.

Resultado: "50 anos" desaparece como frase. A herança fica codificada no ano — quem conhece, entende; quem não conhece, percebe a antiguidade.

---

### 2. Hero — substituir o split por composição full-bleed com vinheta

**O que muda:** a imagem ocupa **100% da largura**, sem painel sólido cortado. O texto flutua sobre ela com um gradiente suave só na borda esquerda — não um overlay escuro generalizado, apenas o suficiente para legibilidade.

```
[  texto flutuando   ] [          imagem clara à direita          ]
[  sobre vinheta     ] [          sem qualquer overlay            ]
[  esquerda leve     ]
```

Especificações:
- `position: relative`, altura `640px`, `overflow: hidden`
- `<img>` full-bleed absoluta (`object-fit: cover`, `object-position: center`)
- Sobre a imagem: `<div>` absoluto `background: linear-gradient(to right, #14233B 0%, #14233B 30%, rgba(20,35,59,0.5) 55%, transparent 75%)` — cria a "parede" navy apenas à esquerda, sem corte duro
- Conteúdo posicionado absoluto, `left: 64px`, `top: 50%`, `transform: translateY(-50%)`, `maxWidth: 500px`

Isso é fundamentalmente diferente do split: não há borda, a foto "invade" o espaço do texto de forma orgânica, e a imagem aparece bem à direita sem nenhum escurecimento.

---

### 3. Headline — simplificar para 2 linhas, 1 cor

O atual tem 4 linhas com 2 cores diferentes. Proposta:

```
[bone, 300]  Soluções Completas
[bone, 700]  para o Escritório Corporativo
```

Ou variante com terracota em UMA palavra só:
```
[bone, 300]  Móveis e Equipamentos
[bone, 700]  de Alto Padrão para [terracota]Escritório
```

Tamanho: **56px**, lineHeight **1.0**, letterSpacing **-0.03em** — tight e confiante.
O subtexto permanece, mas reduzido a **1–2 linhas** máximo, a ~16px.

---

### 4. Stats strip — redesign silencioso

**Problemas atuais:** números 44px em terracota sobre bone é pesado; divisórias verticais em terracota violam o princípio de acento único.

**Proposta:**
- Background: navy `#14233B` (em vez de bone) — cria transição natural hero → stats → seção bone
- Números: **36px**, bone `#F4F1EA`, sem terracota nos números — os números são a força, não precisam de cor
- Labels: `#9FA9B7` (muted slate), 11px uppercase
- Separadores: linha vertical fina `1px solid #1D3252` (elevated navy) — quase invisível, apenas estrutural
- Altura: **120px** (mais compacto)
- Primeiro stat: `1974 / Ano de Fundação` (resolve a repetição do item 1)

---

## Arquivos a modificar

- `src/app/components/Navbar.tsx` — linha 67: trocar "50 ANOS DE TRADIÇÃO" → "Desde 1974"
- `src/app/components/Hero.tsx` — reescrever: remover eyebrow, layout full-bleed com vinheta, headline 2 linhas
- `src/app/components/StatsStrip.tsx` — reescrever: fundo navy, números bone, divisórias sutis, stat 1 atualizado

## Verificação

- Confirmar no preview que o hero não tem borda/corte entre texto e imagem
- Confirmar que "50 anos de tradição" como frase **não aparece** em nenhum lugar
- Confirmar que a terracota nos stats desapareceu dos números
- Confirmar que o headline tem no máximo 2 linhas

---

## Especialidades — Redesign (v3)

### Diagnóstico

O problema é estrutural: todos os 4 cards usam `backgroundColor: "#14233B"` e as imagens estão em `opacity: 0.2–0.35`. O resultado é uma parede uniforme de azul escuro onde as fotos praticamente desaparecem e o conteúdo fica enterrado. A seção não mostra o que a empresa faz — apenas repete a cor do header.

### Opções de abordagem

**Opção A — Cards claros com imagem no topo (recomendada)**
Inversão total: fundo das cards passa a ser branco `#fff` ou bone `#F4F1EA`. Cada card tem a foto em cima (sem overlay, sem escurecimento) e o texto embaixo sobre fundo claro. 4 colunas iguais, espaçadas, muito respiro.

```
┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│  [foto]  │  │  [foto]  │  │  [foto]  │  │  [foto]  │
│  clara   │  │  clara   │  │  clara   │  │  clara   │
├──────────┤  ├──────────┤  ├──────────┤  ├──────────┤
│ 01       │  │ 02       │  │ 03       │  │ 04       │
│ Título   │  │ Título   │  │ Título   │  │ Título   │
│ Descrição│  │ Descrição│  │ Descrição│  │ Descrição│
│ Link →   │  │ Link →   │  │ Link →   │  │ Link →   │
└──────────┘  └──────────┘  └──────────┘  └──────────┘
```

- Section bg: bone `#F4F1EA`
- Cards: `background: #fff`, sem sombra — apenas margem e o próprio fundo branco cria a separação sobre o bone
- Imagem: 100% da largura do card, ~200px de altura, `objectFit: cover`, sem dimming
- Número: 11px terracota uppercase
- Título: 18px navy bold
- Descrição: 13px ink/70%, 2–3 linhas
- Link: terracota, underline sutil, `→`

**Opção B — Linhas editoriais (alternativa sem grid de cards)**
4 linhas horizontais full-width, alternando direção da imagem (esquerda / direita). Mais editorial, imagens maiores (~320px de altura), muito respiro vertical. Melhor para destacar cada categoria individualmente.

**Opção C — Grid assimétrico claro (1 grande + 3 menores, mas invertido)**
Manter o layout 1+3 mas com fundo branco/bone: o card grande exibe a foto em full-bleed **sem overlay** (texto flutua num painel bone translúcido na parte inferior, não navy). Os 3 menores à direita são linhas limpas com thumbnail + texto sobre bone.

### Recomendação

**Opção A** — é a mais limpa, a mais fácil de ler, e resolve os dois problemas de uma vez: traz as imagens de volta à plena luz e deixa o conteúdo de cada categoria legível e hierarquizado. É também a que mais contrasta com as seções escuras da página (Processo, Autoridade Técnica) criando ritmo visual.

### Arquivos a modificar

- `src/app/components/Especialidades.tsx` — reescrever o grid e os cards com a abordagem escolhida

### Verificação

- Confirmar que nenhum card tem fundo navy
- Confirmar que as imagens aparecem sem escurecimento
- Confirmar que cada categoria é claramente identificável: número + título + descrição visível em fundo claro

---

## Contexto original (v1)

O Hero atual tem ruído visual causado por múltiplas camadas competindo pela atenção ao mesmo tempo:
- Badge de texto ("Desde 1974 · 50 Anos de Tradição")
- Headline com 4 linhas e 3 pesos/cores diferentes
- Subtexto em parágrafo longo
- 2 botões CTA
- Strip de 4 estatísticas com borda separadora
- Linha dourada decorativa na lateral esquerda
- Indicador de scroll

A pedido: remover o botão "Solicitar Orçamento" (já existe no header), deixar só "Conheça nosso Catálogo". O restante é sobre reduzir o ruído geral.

---

## Diagnóstico dos problemas

| Elemento | Problema |
|---|---|
| Headline em 4 linhas com 3 estilos | Fragmenta a leitura, cria pesos visuais conflitantes |
| Subtexto longo (~40 palavras) | Adiciona densidade sem urgência |
| Stats strip + borda separadora | Ancorra o olho embaixo, divide a seção em dois blocos |
| Dois CTAs | Divide a atenção (resolvido com remoção do secundário) |
| Linha dourada lateral + badge + scroll indicator | 3 elementos decorativos simultâneos |

---

## As 3 Opções

### Opção A — Editorial Minimalista (recomendada)
**Conceito:** Deixar a imagem respirar, texto hierárquico e limpo.

O que muda:
- Headline compacta: 2 linhas, peso mixado **mas sem cor dourada no texto** (só no badge)
- Subtexto reduzido para 1 frase curta (máx. 15 palavras)
- Remover stats strip completamente — os números migram para a seção Diferenciais ou ficam em uma faixa sutil separada após o Hero
- Remover linha dourada lateral (ruído)
- Manter badge "Desde 1974", mas mais discreto
- Overlay levemente mais claro para a imagem aparecer mais
- Um único CTA: "Conheça nosso Catálogo"
- Resultado: muito mais ar branco/escuro, imagem protagonista

Exemplo de copy resultante:
```
[badge] Desde 1974

Soluções Completas
para o Escritório Corporativo

[1 frase] Móveis, equipamentos e expertise de meio século.

[botão] Conheça nosso Catálogo
```

---

### Opção B — Headline Centralizada / Hero Cinematográfico
**Conceito:** Texto no centro da tela, imagem como pano de fundo total.

O que muda:
- Conteúdo centralizado (não mais alinhado à esquerda)
- Headline grande e limpa no centro — 2 linhas, sem parágrafo de subtexto
- Overlay mais suave (imagem aparece muito mais)
- Nenhuma stat, nenhum badge lateral
- Badge reduzido a uma linha fina de texto acima do headline
- CTA único centralizado
- Sensação mais premium / galeria de arte / marca de luxo

Mais impactante visualmente, mas menos informativo logo de início.

---

### Opção C — Faixa de Stats Separada (abaixo do Hero)
**Conceito:** Manter o Hero limpo E preservar os números — mas em um componente separado.

O que muda:
- Hero fica com Opção A (minimalista)
- Logo após o Hero (antes da seção Especialidades), adicionar uma faixa de 4 colunas com as stats em fundo [#0f1d3a] ou branco
- Stats deixam de competir com o headline e passam a reforçar a transição para o conteúdo
- Melhor semântica: o hero vende o conceito, a faixa valida com números

---

## Recomendação

**Opção A** como base + **Opção C** para preservar os números.

Ou seja:
1. Hero limpo (Opção A): headline 2 linhas, 1 frase, 1 botão, sem stats, overlay levemente mais aberto
2. Faixa de credibilidade (Opção C): strip fino com os 4 números logo abaixo do Hero, antes das Especialidades

---

## Arquivo a modificar

- `src/app/components/Hero.tsx` — reduzir elementos, simplificar headline, remover CTA secundário e stats strip
- `src/app/App.tsx` — inserir componente `<StatsStrip />` entre `<Hero />` e `<Especialidades />` (caso Opção C seja escolhida)
- Novo componente opcional: `src/app/components/StatsStrip.tsx`

## Verificação

Confirmar visualmente no preview que:
- A imagem de fundo é claramente visível e protagonista
- Apenas 1 CTA presente no Hero
- Nenhuma stat no Hero (se Opção C adotada)
- Hierarquia de leitura: badge → headline → 1 frase → botão
