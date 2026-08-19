# VITALLIA — arquitetura do funil (V2)

> Substitui a v1 (12 telas, funil de mudança de crença). A v2 é um funil de
> 9 telas + downsell: o produto aparece cedo, o diagnóstico qualifica e
> personaliza em vez de investigar, e o mecanismo é diferencial, não tese.
> Ver o brief "VITALLIA — REVISÃO V2" para o raciocínio comercial completo.

## Por que mudou

A v1 gastava dez telas convencendo a leitora antes de revelar o produto.
O diagnóstico que motivou a v2: ela já quer comprar um curso — a própria
copy antiga registrava que ela pesquisou formação, viu R$ 1.800–3.000 e
fechou a aba. O bloqueio nunca foi crença, foi preço. A v2 nomeia o
produto na tela 1 e usa o diagnóstico para segmentar e personalizar, não
para investigar.

## Stack

- **Astro 5**, `output: 'static'` — cada tela é uma rota, sem servidor.
- Deploy na **Vercel** via `vercel.json` (build estático, sem adaptador).
- `prefetch: { prefetchAll: true, defaultStrategy: 'viewport' }` no
  `astro.config.mjs`, mais uma chamada explícita a `prefetch()` (de
  `astro:prefetch`) no `<script>` de cada tela para a próxima rota —
  necessário porque a navegação é via `window.location.href` disparado
  por JS, não `<a href>`.
- `/` é a própria tela 1 (não um redirect — ao contrário da v1).
- Comentários de raciocínio comercial e notas internas existem nos
  arquivos `.astro` como `{/* ... */}` (sintaxe de comentário de
  template do Astro) — não são emitidos no HTML servido. `dist/` não
  contém nenhum `<!--` HTML nem `/*` CSS de anotação.

## Estrutura

```
referencia/                     12 HTMLs originais da v1, como chegaram
  v1-descontinuadas/             telas que saíram do fluxo (02, 03, 07, 08)
src/
  lib/track.ts                   objeto VT — sessionId, eventos padrão, Meta Pixel
  config/
    oferta.ts                     PRECO, FAIXA_REGIONAL, CHECKOUT, LINK_AVULSO — placeholders comerciais
    funnel-angle.ts                copy da tela 1 (ângulo ativo + variante B guardada)
    funnel.ts                      copy das telas 2–9, downsell, geografia (UF→região), áreas
  layouts/FunnelLayout.astro     shell mínimo (charset, viewport, título, fonte)
  pages/
    index.astro                    tela 1 — /
    2-diagnostico.astro            tela 2
    3-resultado.astro              tela 3
    4-formacao.astro               tela 4
    5-diferencial.astro            tela 5
    6-recebe.astro                 tela 6
    7-prova.astro                  tela 7
    8-condicao.astro               tela 8
    9-oferta.astro                 tela 9
    downsell.astro                 /downsell
    2b-video.astro                 /2b-video (VSL, fora do fluxo principal)
```

## As 9 telas + downsell

| # | Rota | Tela | Trabalho | Vem de (v1) |
|---|------|------|----------|-------------|
| 1 | `/` | Gancho + produto nomeado | Identificação e entrada no diagnóstico | tela-01-a-pergunta-v2 (estrutura + slider; copy nova) |
| 2 | `/2-diagnostico` | O diagnóstico (chat, 6 perguntas) | Qualificar, personalizar, criar micro-compromisso | tela-05-a-simulacao-chat (motor; perguntas novas) |
| 3 | `/3-resultado` | Resultado personalizado + a conta que ela mesma fez | "Isso foi montado pro que eu quero" | bloco de resultado da tela-05, expandido |
| 4 | `/4-formacao` | **O produto** + rota de renda por área | Responder "o que eu compro?" | tela-11 (sobe de posição, ganha peso) |
| 5 | `/5-diferencial` | Método + camada de segurança | Por que não é seis cursos soltos | tela-04 (acordeão comprimido em bloco só) |
| 6 | `/6-recebe` | Empilhamento de substância + custo por área + cena (saboaria/tintura) | Valor percebido | tela-09 (contraste) + tela-11 (materiais), fundidas |
| 7 | `/7-prova` | Validador, aula, material, peça de certificado, prova social | Confiança auditável | tela-06 (quase inteira; MEC trimmed) |
| 8 | `/8-condicao` | Cupom 62% (R$ 97 → R$ 37) | Preço como ganho conquistado | tela-10 (mecânica idêntica; revelação nova) |
| 9 | `/9-oferta` | Preço, tabela de comparação, garantia, FAQ | Conversão | tela-12 (um plano só; FAQ ampliado) |
| — | `/downsell` | Plano de entrada R$ 9,90 | Recuperar abandono (back button Android) | novo |
| — | `/2b-video` | VSL, fora do fluxo principal | Variante de teste de identificação | tela-02 (saiu do fluxo principal) |

**Saíram do fluxo** (arquivos preservados em `referencia/v1-descontinuadas/`,
não deletados): tela-02 (virou `/2b-video`), tela-03, tela-07, tela-08.

## Regras que não podem ser revertidas sem repassar pelo brief

- ⛔ Tela 2, Q4 (áreas): múltipla escolha é o motor de personalização do
  funil — não vira pergunta simples sem repassar pela métrica de
  `areas_selected.count` × `checkout_click`.
- ⛔ Tela 2, Q5 (estado): existe só porque a tabela de preço regional é
  conteúdo real do produto. Nunca virar "vagas limitadas para o seu
  estado" — número de estoque é inventado num curso digital.
- ⛔ Tela 2, Q5 (renda desejada): o número é dela, não nosso. Existe só
  para a tela 3 fazer aritmética; o funil nunca afirma que ela vai
  atingir esse valor.
- ⛔ Tela 3 ("as que vêm junto"): sempre mostra TODAS as áreas não
  marcadas, nunca como "e ainda tem mais quatro". O argumento é "você
  não precisa escolher", nunca "você escolheu pouco" — não invalidar a
  escolha que ela acabou de fazer no quiz.
- ⛔ Tela 4 e Tela 6: empilhamento e rota de renda são de **substância**,
  nunca de preço por item (nada de "Fitoterapia R$ 97 + Aromaterapia
  R$ 97 = R$ 600" — preços nunca praticados). A homeopatia nunca é
  descrita como rota de venda, em nenhuma tela.
- ⛔ Tela 6/9 (faixa de mercado): nunca nomear concorrente — usa "por
  aí" com prints datados como lastro. Preço não pode ser o argumento
  principal nem o gancho.
- ⛔ Tela 7 (certificado): sem brasão, laurel, escudo, fita ou selo de
  associação no desenho — imitar documento oficial faz o texto
  honesto perder o efeito.
- ⛔ Tela 8: sem link para a página avulsa, sem contador de vagas. A
  verificação do preço de tabela mora só no FAQ da tela 9.
- ⛔ Downsell: nunca oferece a formação completa por menos de R$ 37 — é
  um produto menor (2 formações), não um desconto maior.
- ⛔ Toda a defesa regulatória (MEC/conselho) mora no FAQ da tela 9,
  item 2. Não espalhar pelas telas anteriores.
- ⛔ Prova social: prioriza prova de atividade sobre prova de valor.
  Se citado, valor fica na fala da aluna, nunca no título nem em
  número grande, sempre com a ressalva de resultado individual. Nunca
  agregar ("nossas alunas faturam X").
- Ver a seção "O QUE NUNCA ENTRA" do brief para a lista fechada completa
  (contadores fabricados, depoimento inventado, promessa de renda,
  simulação de presença humana ao vivo, clone de WhatsApp, etc.).

## Estado compartilhado entre telas (localStorage)

- `vt_session` — sessionId único do lead, criado na tela 1. Vai como
  `?s=` na navegação entre rotas.
- `vt_sim` — `{ answers: {interesse, nivel, objetivo, areas[], renda, uf},
  perfil, regiao, completed_at }`, escrito ao fim do diagnóstico
  (tela 2). Lido pelas telas 3, 4 e 6 para personalizar copy, reordenar
  os cards da formação, montar "a conta que você mesma fez" e decidir
  se mostra o bloco de cena (saboaria/tintura).
- `vt_cond` — `{ code, tipo:'desconto', pct:62, de:97, por:37,
  resgatado_em, expira_em }`, escrito no resgate da condição (tela 8).
  Lido pela tela 9 (faixa fixa + parâmetro `off` no checkout).
- `sessionStorage.vt_downsell_shown` — garante que o downsell dispara
  uma vez por sessão.

## Tracking (src/lib/track.ts)

Eventos padrão por tela: `step_view`, `cta_touch`, `step_advance`,
`step_exit`. Novos na V2: `quiz_answer` (tela 2, por pergunta),
`areas_selected` (tela 2, Q4), `renda_declarada` (tela 2, Q5),
`uf_selected` (tela 2, Q6), `condicao_resgatada` (tela 8),
`checkout_click` (tela 9 e downsell), `faq_open` (tela 9),
`downsell_shown` / `downsell_taken`.

Meta Pixel — só 4 sinais: `ViewContent` (tela 1), `AddToCart` (tela 8),
`InitiateCheckout` (tela 9/downsell), `Purchase` (**sem trigger** —
acontece depois do checkout na Hotmart, fora das rotas deste projeto;
precisa de webhook ou página de obrigado, nenhuma das quais existe aqui).

`ENDPOINT` em `track.ts` está `null` — pendente criar rota serverless na
Vercel para gravar os eventos (sem ela, tráfego com bloqueador de
anúncio some da medição).

## O que ainda precisa de trabalho fora do código

- **`src/config/oferta.ts`**: `PRECO.tabela` precisa ser o preço real e
  praticado na ofertaai.shop (sem isso, o desconto de 62% da tela 8 é
  fictício). `CHECKOUT.completo` e `CHECKOUT.entrada` precisam dos links
  reais da Hotmart. `LINK_AVULSO` precisa apontar pra página real
  (usado no FAQ da tela 9, item 1). `FAIXA_REGIONAL` está `null` —
  preencher com a faixa real do Kit Primeiro Cliente para ativar a
  devolutiva de valor regional (telas 2 e 3) e a "conta de atendimento"
  (tela 3). `MARGEM_PRODUTO` está `null` — precisa de nota de compra do
  insumo e preços praticados reais para ativar a "conta de
  saboaria/tintura" (tela 3); sem lastro real, mantenha `null`.
  `FAIXA_MERCADO` está `null` — exige 10 a 15 prints datados de páginas
  concorrentes com preço visível para ativar a divisão da tela 6 e a
  linha de preço da tabela de comparação da tela 9.
- **Prova social (`src/config/provas.ts`)**: array vazio até existir
  depoimento real com autorização por escrito. O componente
  `<Depoimento>` (usado nas telas 3, 7 e 9) não renderiza nada — nem
  título, nem placeholder — enquanto estiver vazio.
- **Certificado (tela 7)**: a peça hoje é um slot descritivo (sem
  imagem real). Precisa da arte final — sem brasão, laurel, escudo,
  fita ou selo de associação — com os campos listados em
  `tela7.blocks.certificado.campos`.
- **Tela 2b (VSL)**: colar o embed real do VTurb (`VSL.modo` está em
  `'preview'`).
- **Tela 7**: o código de demonstração do validador precisa existir de
  verdade no banco e na página pública de validação.
- **Tela 8**: o relógio de 24h precisa expirar de verdade no back-end.
- **Endpoint de tracking**: criar a rota serverless na Vercel e
  preencher `ENDPOINT` em `src/lib/track.ts`.
