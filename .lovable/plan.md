## Objetivo

Trazer o código do repositório **Diegoliveirs/mozi** para dentro deste projeto Lovable e **corrigir a responsividade** das telas, sem mudar a identidade visual e sem adicionar funcionalidades novas.

Importante: este projeto usa **TanStack Start** e o mozi usa **Vite + React Router**. Por isso a importação exige uma adaptação mecânica de roteamento (não muda nada visual). A aparência das telas (cores, textos, ícones, layout) fica idêntica.

## O que está quebrando hoje (diagnóstico)

Ao ler o código, encontrei estes problemas de responsividade/consistência:

1. **Classe inexistente `min-h`** usada em várias telas (`min-h`, `min-h-0 min-h`) — não faz nada no Tailwind, então a altura não se comporta como esperado.
2. **Tela de boas-vindas (`home`)**: o cartão rosa **não tem largura máxima**, então em telas grandes ele estica de ponta a ponta — diferente do login/cadastro, que usam `max-w-2xl` (cartão centralizado). Inconsistência entre dispositivos.
3. **Tela do app (`homeApp`)**: full-bleed sem cartão centralizado nem `max-w`, e com as classes `min-h` quebradas — não fica enquadrada como as outras telas em telas grandes.
4. **Navbar inferior**: em telas grandes fica esticada na largura toda, fora do alinhamento do cartão.
5. **HTML inválido** na home: `<p>` aninhado dentro de `<p>`.
6. A regra de rolagem para telas baixas (`html, body { overflow:auto }`) está só na página de login; precisa ser global.

## Plano de execução

### Fase 1 — Importar o mozi (preservando identidade)
- Instalar dependências usadas pelo app: `firebase` (e roteamento via TanStack já existente).
- Copiar **verbatim**: `src/components/*` (Button, Input, SquareWhite, Navbar, AppLayout, WatchListBlock, Card, etc.), `src/config/firebase.js` e os assets (`hero.png`, `heart.svg`, `Film-icon.svg`, `favicon.svg`, `icons.svg`).
- Copiar as telas (`home`, `login`, `signin`, `homeApp`) mantendo o JSX visual idêntico.
- Carregar a fonte **Poppins** via `<link>` no `__root.tsx` e aplicar como fonte global em `styles.css` (mantém a tipografia original).

### Fase 2 — Roteamento nativo TanStack (adaptação mecânica, sem mudança visual)
Criar os arquivos de rota equivalentes ao `routes.tsx` do mozi:
- `src/routes/index.tsx` → tela de boas-vindas (`Home`)
- `src/routes/login.tsx` → `Login`
- `src/routes/signin.tsx` → `SignIn`
- `src/routes/home.tsx` → `HomeApp` dentro do `AppLayout` (com a navbar)
- `src/routes/$.tsx` → página "não encontrada" (mantendo o texto original do app)

Trocas mínimas de navegação (mesma API, só a sintaxe muda):
- `useNavigate()` do react-router → `useNavigate()` do TanStack (`navigate({ to: '/login' })`)
- `navigate(-1)` (voltar) → `router.history.back()`
- `useLocation().pathname` na Navbar → equivalente do TanStack

### Fase 3 — Correções de responsividade (o pedido principal)
Preservando 100% as cores/identidade:
- Substituir todas as ocorrências da classe inválida `min-h` por classes válidas (`min-h-screen` / `flex-1`).
- **Home**: envolver o cartão rosa com `max-w-2xl mx-auto` (igual ao login/cadastro) para virar cartão centralizado em telas grandes; corrigir o `<p>` aninhado.
- **HomeApp**: aplicar o mesmo enquadramento de cartão centralizado (`max-w-2xl`, cantos arredondados no `sm:`) e garantir que preencha a altura e role quando necessário.
- **Navbar**: alinhar à largura do cartão e centralizar em telas grandes.
- Mover a regra global de rolagem (`html, body, #root { height:100%; overflow:auto }`) para `styles.css` para que telas baixas/altas rolem corretamente em todas as páginas.

### Fase 4 — Validação
- Conferir o build e abrir o preview nos tamanhos **mobile, tablet e desktop** para garantir que as 4 telas se adaptam sem quebrar e mantêm a identidade.

## Observações técnicas
- O `firebaseConfig` do mozi contém chaves públicas de cliente (apiKey do Firebase web), que são seguras de ficar no código-fonte do front-end. Mantenho como está, sem expor segredos novos.
- Nenhuma funcionalidade nova será adicionada — apenas importação fiel + ajustes de layout responsivo.
