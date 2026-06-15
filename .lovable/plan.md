# Guia de Estilo do Mozi (STYLEGUIDE.md)

## Objetivo
Criar **um único documento Markdown** (`STYLEGUIDE.md`, na raiz do projeto) que sirva de referência sempre que você (ou a IA) for criar uma tela nova. Ele descreve a identidade visual atual do Mozi — cores, tipografia, componentes, estrutura de tela e regras de responsividade — extraída diretamente do código já existente. **Nenhum componente ou tela é alterado**; apenas documentamos o que já existe.

## O que será documentado (baseado no código atual)

### 1. Fundamentos
- **Tipografia:** Poppins (definida em `styles.css`, aplicada no `body`).
- **Paleta** (valores reais usados hoje):
  - Rosa principal `#E91E63` / hover `#C2185B`
  - Fundo de tela `bg-zinc-900` (telas auth/home) e superfícies escuras `#2B2B2B`, `#3A3A3A`, `#4A4A4A`
  - Branco e variações de transparência (`text-white`, `text-white/70`, `text-white/10`)
  - Texto secundário `text-zinc-400` / `text-zinc-500`
  - Avatares de exemplo: `#FAECE7`/`#712B13` e `#E6F1FB`/`#0C447C`
- **Raio padrão:** cartão de tela `sm:rounded-[48px]`, blocos `rounded-2xl`, ícones `rounded-xl`/`rounded-[24px]`, botões `rounded-full`.

### 2. A regra de ouro da responsividade (o "container de tela")
Documentar o padrão que toda tela segue:
```text
Wrapper externo:  min-h-screen + bg-zinc-900 + flex items-center justify-center
Cartão da tela:   w-full max-w-2xl mx-auto
                  min-h-screen sm:min-h-0      (full-screen no mobile, "cartão" no desktop)
                  sm:rounded-[48px] overflow-hidden
                  flex flex-col
```
Explicação do porquê: no mobile a tela ocupa 100% da largura/altura; a partir de `sm:` ela vira um cartão central de no máximo `max-w-2xl`, evitando o "esticamento" em telas grandes.

### 3. Componentes reutilizáveis (como usar cada um)
Para cada componente, o doc terá: função, props e exemplo de uso copiável.
- `Button` — botão rosa full-width (`texto`, `onClick`)
- `Input` — campo com label, ícone, borda rosa quando preenchido (`label`, `icon`, `type`, `value`, `onChange`, `right`)
- `Card` — cartão branco genérico
- `SquareWhite` — quadrado branco para ícone/logo
- `Navbar` — barra inferior fixa no mobile / relativa no desktop, alinhada ao `max-w-2xl`
- `AppLayout` — layout de telas internas (conteúdo + Navbar, já com `max-w-2xl mx-auto` e `pb-16 sm:pb-0`)
- `WatchListBlock` — bloco de lista com preview horizontal scrollável

### 4. Padrões de seção dentro da tela
- **Header (área rosa):** `flex-1 flex flex-col items-center justify-center px-8 py-8 gap-4`
- **Formulário/conteúdo (área escura):** `bg-[#2B2B2B] px-6 py-8 flex flex-col gap-4`
- **Linhas com texto + ícone:** usar `flex items-center gap-3`, com `min-w-0`/`truncate` no texto e `shrink-0` no ícone (padrão já usado no HomeApp).

### 5. Checklist de responsividade para telas novas
Lista objetiva para validar antes de finalizar uma tela:
- Usar o container `max-w-2xl mx-auto` + `min-h-screen sm:min-h-0`.
- Nunca usar `min-h` inválido — só `min-h-screen` / `flex-1` / `min-h-0`.
- Espaçamentos com escala Tailwind (`px-6`, `py-8`, `gap-4`), nada de pixels fixos arbitrários sem necessidade.
- Texto em linhas mistas: `min-w-0` + `truncate` no texto, `shrink-0` no ícone.
- Telas internas dentro de `AppLayout` para herdar a Navbar e o `pb-16 sm:pb-0`.
- Testar em 390px (mobile) e 1440px (desktop).

### 6. Template pronto de tela nova
Um bloco de código copiável (uma tela vazia já no padrão Mozi) para acelerar a criação:
```text
- Wrapper zinc-900 centralizado
- Cartão max-w-2xl com header rosa + área escura
- Pontos marcados onde inserir conteúdo
```

## Entregável
- **1 arquivo novo:** `STYLEGUIDE.md` na raiz do projeto.
- Sem mudanças em código de telas/componentes.

## Detalhes técnicos
Todas as classes citadas são extraídas verbatim de `src/styles.css`, `src/components/*` e `src/pages/*`, garantindo que o guia reflita 100% a identidade atual. O documento é puramente textual/Markdown e não afeta o build.
