# VITALLIA — arquitetura do funil

> Este arquivo não existia no repositório quando o projeto Astro foi montado
> a partir de `referencia/` (12 HTMLs estáticos). Foi recriado aqui para
> documentar a tabela das 12 telas — pedida originalmente — a partir do que
> cada arquivo de referência já registrava em seus próprios comentários.

## Stack

- **Astro 5**, `output: 'static'` — cada tela é uma rota, sem servidor.
- Deploy na **Vercel** via `vercel.json` (build estático, sem adaptador).
- `prefetch: { prefetchAll: true, defaultStrategy: 'viewport' }` no
  `astro.config.mjs`, mais uma chamada explícita a `prefetch()` (de
  `astro:prefetch`) no `<script>` de cada tela para a(s) próxima(s) rota(s) —
  necessário porque a navegação do funil é via `window.location.href`
  disparado por JS, não por `<a href>`, então o prefetch automático por
  viewport não teria como descobrir o destino sozinho.
- `/` redireciona para `/1` (`redirects` no `astro.config.mjs`).

## Estrutura

```
referencia/              12 HTMLs originais, como chegaram (não tocar)
src/
  lib/track.ts            objeto VT — extraído da duplicação nas 12 telas
  config/
    funnel-angle.ts        copy das telas 1–3 ("o ângulo" — gancho/abertura)
    funnel.ts               copy das telas 4–12
  layouts/FunnelLayout.astro   shell mínimo (charset, viewport, título, fonte)
  pages/
    1.astro … 12.astro        as 12 rotas
```

Cada `N.astro` mantém o CSS e o HTML da tela de referência praticamente
verbatim (como `<style is:global>`, para não quebrar os trechos que cada
tela injeta via `innerHTML`/`createElement` em tempo de execução — a
simulação da tela 5, o validador da tela 6, o resgate da tela 10, os
passos da tela 11). Os comentários originais — que registram decisões de
copy, legais e de produto que não podem ser revertidas sem risco — foram
preservados na mesma posição relativa dentro de cada componente.

## As 12 telas

| # | Rota | Tela (arquivo de referência) | Trabalho da tela | Eventos principais |
|---|------|-------------------------------|-------------------|---------------------|
| 1 | `/1` | A pergunta (`tela-01-a-pergunta-v2.html`) | Fricção deliberada: fazer arrastar | `step_view`, `cta_touch`, `step_advance`, `step_exit` |
| 2 | `/2` | A história — VSL (`tela-02-a-historia.html`) | Identificação + loop aberto | `step_view`, `video_progress`, `cta_reveal`, `video_complete`, `step_advance`, `step_exit` |
| 3 | `/3` | O que você não precisa (`tela-03-o-que-voce-nao-precisa.html`) | Alívio — negar credenciais que ela acha que precisa | `step_view`, `item_view`, `step_advance`, `step_exit` |
| 4 | `/4` | Por que você travou (`tela-04-por-que-voce-travou.html`) | Absolvição + mecanismo por contraste (a tela mais importante do funil) | `step_view`, `rival_expand`, `step_advance`, `step_exit` |
| 5 | `/5` | A simulação (`tela-05-a-simulacao-chat.html`) | Diagnóstico real em formato de chat — gera `vt_sim` no localStorage | `step_view`, `sim_start`, `sim_turn_view`, `sim_answer`, `sim_complete`, `step_advance`, `step_exit` |
| 6 | `/6` | Isso é sério? (`tela-06-isso-e-serio.html`) | Prova auditável — validador de certificado ao vivo | `step_view`, `validator_used`, `source_click`, `step_advance`, `step_exit` |
| 7 | `/7` | A oportunidade (`tela-07-a-oportunidade.html`) | Objeção de timing — demanda pública, não promessa de renda | `step_view`, `chart_seen`, `source_click`, `step_advance`, `step_exit` |
| 8 | `/8` | As duas cenas (`tela-08-as-duas-cenas.html`) | Desejo por identidade — CTA só libera após ver a segunda cena | `step_view`, `scene_flip`, `step_advance`, `step_exit` |
| 9 | `/9` | O que muda (`tela-09-o-que-muda.html`) | Fecha o desejo, prepara o preço, anuncia a condição (ramifica por `vt_sim`) | `step_view`, `sim_return`, `step_advance`, `step_exit` |
| 10 | `/10` | A condição (`tela-10-a-condicao.html`) | Pico emocional — resgate do cupom real, gera `vt_cond` no localStorage | `step_view`, `condicao_resgatada` (dispara Meta Pixel `AddToCart`), `step_advance`, `step_exit` |
| 11 | `/11` | O que estava por trás (`tela-11-o-que-estava-por-tras.html`) | Substância avaliável — os 6 passos, reordenados pelas lacunas da simulação | `step_view`, `step_advance`, `step_exit` |
| 12 | `/12` | A decisão (`tela-12-a-decisao.html`) | Conversão — escolha binária por identidade, roteada pelo turno 5 da simulação | `step_view`, `faq_open`, `checkout_click` (dispara Meta Pixel `InitiateCheckout`), `step_exit` |

## Estado compartilhado entre telas (localStorage)

- `vt_session` — sessionId único do lead, criado na tela 1, lido por `VT` em
  toda tela. Vai como `?s=` na navegação entre rotas.
- `vt_sim` — `{ answers, plan, gaps, completed_at }`, escrito ao fim da
  simulação (tela 5). Lido pelas telas 7, 9, 11 e 12 para personalizar copy
  e roteamento.
- `vt_cond` — `{ code, tipo, resgatado_em, expira_em }`, escrito no resgate
  da condição (tela 10). Lido pelas telas 11 e 12 (faixa fixa + parâmetro
  `off` no checkout).

## O que ainda precisa de trabalho fora do código (não resolvido aqui)

Estes pontos já estavam marcados como pendência nos comentários originais e
continuam pendentes — nenhum deles é uma decisão de código:

- **Tela 2**: colar o embed real do VTurb (`VSL.modo` está em `'preview'`).
- **Tela 6**: o código de demonstração do validador precisa existir de
  verdade no banco e na página pública de validação.
- **Tela 7**: confirmar os três números (84%, 9 milhões, +70%) na fonte
  antes de publicar, e trocar o `href` do link de fonte.
- **Tela 10/12**: `CONDICAO` está em `'material'` — só trocar para
  `'desconto'` quando R$ 67 e R$ 19,90 forem praticados de verdade por
  30+ dias na página avulsa.
- **Tela 12**: preencher os dois links reais da Hotmart em `CHECKOUT`
  (`src/config/funnel.ts`) e implementar o order bump mencionado no
  comentário final do componente.
