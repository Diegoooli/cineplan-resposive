# Guia de Estilo do Mozi

> Documento de referência para criar **telas novas** mantendo a identidade visual,
> a estilização e a responsividade do Mozi. Use-o como base toda vez que for
> construir uma funcionalidade nova. Todas as classes aqui são extraídas do código
> real (`src/styles.css`, `src/components/*`, `src/pages/*`).

---

## 1. Fundamentos

### Tipografia
- Fonte global: **Poppins** (definida no `body` em `src/styles.css`).
- Não é preciso re-declarar a fonte; basta usar `font-semibold`, `font-bold`, etc.
- Tamanhos usados hoje:
  - Título principal de tela: `text-3xl font-semibold tracking-tight`
  - Subtítulo de seção: `text-2xl font-semibold tracking-tight`
  - Texto de apoio: `text-sm` / `text-base text-white/75`
  - Labels de formulário: `text-xs font-medium uppercase tracking-wide`

### Paleta de cores (valores reais)
| Uso | Valor |
| --- | --- |
| Rosa principal (ação/destaque) | `#E91E63` |
| Rosa hover | `#C2185B` |
| Fundo de tela (atrás do cartão) | `bg-zinc-900` |
| Superfície escura — área de conteúdo/formulário | `#2B2B2B` |
| Superfície escura — blocos/cards internos e navbar | `#3A3A3A` |
| Borda escura | `#4A4A4A` |
| Texto principal sobre escuro | `text-white` |
| Texto secundário | `text-white/70` · `text-zinc-400` · `text-zinc-500` |
| Divisores / linhas finas | `bg-white/10` |
| Avatar exemplo A | fundo `#FAECE7`, texto `#712B13` |
| Avatar exemplo B | fundo `#E6F1FB`, texto `#0C447C` |

> Sempre use o rosa `#E91E63` para o estado ativo/destaque (botões, ícone ativo da
> navbar, links, borda de input preenchido).

### Raios de borda (border-radius)
| Elemento | Classe |
| --- | --- |
| Cartão da tela (desktop) | `sm:rounded-[48px]` |
| Blocos / cards internos | `rounded-2xl` |
| Ícones quadrados pequenos | `rounded-xl` |
| Quadrado branco de logo | `rounded-[24px]` |
| Botões | `rounded-full` |

### Espaçamento
- Use sempre a escala do Tailwind (`gap-4`, `px-6`, `py-8`...). Evite pixels fixos arbitrários.
- Header rosa: `px-8 py-8 gap-4`
- Área de conteúdo escura: `px-6 py-8 flex flex-col gap-4`

---

## 2. Regra de ouro da responsividade — o "container de tela"

Toda tela segue o mesmo esqueleto: ocupa a tela inteira no **mobile** e vira um
**cartão centralizado** (máx. `max-w-2xl`) no **desktop**. Isso evita que o layout
"estique" e quebre em telas grandes.

```tsx
// Wrapper externo: centraliza e dá o fundo
<div className="min-h-screen bg-zinc-900 flex items-center justify-center">

  {/* Cartão da tela */}
  <div className="w-full max-w-2xl mx-auto min-h-screen sm:min-h-0 sm:rounded-[48px] overflow-hidden flex flex-col">
    {/* conteúdo */}
  </div>

</div>
```

Por que funciona:
- `w-full max-w-2xl mx-auto` → largura total no celular, limitada e centralizada no desktop.
- `min-h-screen sm:min-h-0` → tela cheia no mobile, altura natural (cartão) a partir de `sm:`.
- `sm:rounded-[48px] overflow-hidden` → cantos arredondados só no desktop.
- `flex flex-col` → permite empilhar header (`flex-1`) + rodapé/formulário.

---

## 3. Componentes reutilizáveis

> Importe de `src/components/`. Não recrie variações — reutilize estes.

### `Button` — botão de ação rosa (full-width)
```tsx
import Button from '@/components/Button'

<Button texto="Entrar" onClick={() => {}} />
```
- Props: `texto: string`, `onClick?: () => void`
- Estilo: rosa `#E91E63`, `rounded-full`, `py-4`, full-width.

### `Input` — campo com label e ícone
```tsx
import Input from '@/components/Input'

<Input
  label="Seu E-mail"
  type="email"
  placeholder="te@mo.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  icon={/* svg */}
  right={/* opcional: botão mostrar senha */}
/>
```
- Props: `label`, `icon`, `type`, `placeholder?`, `value`, `onChange`, `right?`
- A borda fica rosa (`#E91E63`) automaticamente quando há valor; cinza (`zinc-600`) quando vazio.

### `Card` — cartão branco genérico
```tsx
import Card from '@/components/Card'

<Card>{/* conteúdo */}</Card>
```
- Cartão branco `rounded-2xl shadow-lg` com padding interno.

### `SquareWhite` — quadrado branco para logo/ícone
```tsx
import SquareWhite from '@/components/SquareWhite'

<SquareWhite>
  <img src={Heart} alt="Coração" />
</SquareWhite>
```
- Padrão: `w-20 h-20 sm:w-24 sm:h-24` branco arredondado, centralizado.
- Aceita `className` para sobrescrever o tamanho quando necessário.

### `Navbar` — barra de navegação inferior
- Fixa no rodapé no mobile (`fixed bottom-0 h-16`), relativa e alinhada ao cartão no desktop (`sm:relative sm:max-w-2xl sm:mx-auto`).
- Ícone ativo em rosa `#E91E63`; inativo em `zinc-400`.
- Normalmente você **não** usa a Navbar diretamente — use `AppLayout` (abaixo).

### `AppLayout` — layout das telas internas (com Navbar)
```tsx
import AppLayout from '@/components/AppLayout'

<AppLayout>
  {/* conteúdo da tela interna */}
</AppLayout>
```
- Já aplica `max-w-2xl mx-auto`, fundo `zinc-900`, e `pb-16 sm:pb-0` para reservar o espaço da navbar fixa no mobile.
- Use em **todas** as telas internas (Home do app, Listas, Perfil...).

### `WatchListBlock` — bloco de lista com preview horizontal
- Cartão `rounded-2xl bg-[#3A3A3A]` com cabeçalho (ícone + título/subtítulo + seta) e uma faixa de itens com scroll horizontal (`overflow-x-auto no-scrollbar`).

---

## 4. Padrões de seção dentro da tela

### Header (área rosa, centralizada)
```tsx
<div className="flex-1 flex flex-col items-center justify-center px-8 py-8 gap-4">
  <SquareWhite>{/* ícone */}</SquareWhite>
  <h2 className="text-white text-2xl font-semibold tracking-tight">Título</h2>
  <p className="text-white/70 text-sm text-center">Subtítulo</p>
</div>
```

### Área de conteúdo / formulário (escura)
```tsx
<div className="bg-[#2B2B2B] px-6 py-8 flex flex-col gap-4">
  {/* inputs, botões, etc. */}
</div>
```

### Linha com texto + ícone (evita quebra no mobile)
```tsx
<div className="flex items-center gap-3">
  <div className="flex-1 flex flex-col gap-0.5 min-w-0">
    <p className="text-white font-bold text-2xl leading-8">Título</p>
    <p className="text-white/80 text-sm truncate">Subtítulo longo…</p>
  </div>
  <button className="text-white/80 hover:text-white shrink-0">{/* ícone */}</button>
</div>
```
Regra: texto recebe `min-w-0` + `truncate`; ícone/botão fixo recebe `shrink-0`.

### Divisor "ou"
```tsx
<div className="flex items-center gap-3">
  <div className="flex-1 h-px bg-white/10" />
  <span className="text-zinc-500 text-xs">ou continue com</span>
  <div className="flex-1 h-px bg-white/10" />
</div>
```

---

## 5. Checklist de responsividade (antes de finalizar a tela)

- [ ] Container usa `w-full max-w-2xl mx-auto` + `min-h-screen sm:min-h-0`.
- [ ] Nada de `min-h` inválido — use só `min-h-screen`, `flex-1` ou `min-h-0`.
- [ ] Cantos arredondados só no desktop (`sm:rounded-[48px]`).
- [ ] Espaçamentos na escala Tailwind (`px-6`, `py-8`, `gap-4`).
- [ ] Linhas com texto + ícone: `min-w-0` + `truncate` no texto, `shrink-0` no ícone.
- [ ] Telas internas envolvidas em `AppLayout` (herdam Navbar + `pb-16 sm:pb-0`).
- [ ] Cores via tokens da paleta acima (rosa `#E91E63` para destaque).
- [ ] Testado em **390px** (mobile) e **1440px** (desktop) sem esticar nem quebrar.

---

## 6. Template pronto — tela nova

### Tela "de fluxo" (auth / onboarding — header rosa + área escura)
```tsx
import Button from '@/components/Button'
import SquareWhite from '@/components/SquareWhite'

export default function MinhaTela() {
  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
      <div className="w-full max-w-2xl mx-auto min-h-screen sm:min-h-0 bg-[#E91E63] sm:rounded-[48px] overflow-hidden flex flex-col">

        {/* Header rosa */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 py-8 gap-4">
          <SquareWhite>{/* ícone */}</SquareWhite>
          <h1 className="text-white text-3xl font-semibold tracking-tight">Título</h1>
          <p className="text-white/75 text-base text-center">Subtítulo</p>
        </div>

        {/* Área de conteúdo escura */}
        <div className="bg-[#2B2B2B] px-6 py-8 flex flex-col gap-4">
          {/* inputs / botões */}
          <Button texto="Continuar" onClick={() => {}} />
        </div>

      </div>
    </div>
  )
}
```

### Tela interna (com navbar)
```tsx
import AppLayout from '@/components/AppLayout'

export default function MinhaTelaInterna() {
  return (
    <AppLayout>
      <div className="flex-1 flex flex-col bg-[#E91E63] sm:rounded-[48px] overflow-hidden">

        {/* Header rosa */}
        <div className="flex flex-col gap-1 w-full px-6 pt-12 pb-2">
          <div className="flex items-center gap-3 px-4 w-full">
            <div className="flex-1 flex flex-col gap-0.5 min-w-0">
              <p className="text-white font-bold text-2xl leading-8">Título</p>
              <p className="text-white/80 text-sm truncate">Subtítulo</p>
            </div>
            <button className="text-white/80 hover:text-white shrink-0">{/* ação */}</button>
          </div>
        </div>

        {/* Corpo escuro */}
        <div className="flex-1 bg-[#2B2B2B] flex flex-col gap-4 w-full px-4 pt-6 pb-6">
          {/* conteúdo / listas */}
        </div>

      </div>
    </AppLayout>
  )
}
```

---

Mantenha este guia atualizado sempre que um novo padrão visual for adotado.
