// ============================================================
// VT — camada de tracking do funil
// ------------------------------------------------------------
// Extraído das 12 telas da v1, onde este objeto vinha duplicado
// (copiado e colado) em cada arquivo. Um sessionId por lead,
// persistido, enviado em todo evento e anexado à URL do checkout.
// É o que liga a compra ao caminho.
//
// Eventos padrão por tela:
//   step_view     — denominador
//   cta_touch     — começou a interagir e não terminou (diagnóstico)
//   step_advance  — numerador
//   step_exit     — saiu, com dwell_ms
//
// Passagem da tela N = step_advance(N) / step_view(N)
//
// Eventos novos da V2 (9 telas + downsell):
//   quiz_answer           — tela 2, por pergunta do diagnóstico
//   areas_selected         — tela 2, Q4 — {count, areas[]}
//   uf_selected             — tela 2, Q5 — geografia
//   condicao_resgatada     — tela 8
//   checkout_click          — tela 9 e /downsell
//   faq_open                — tela 9
//   downsell_shown/taken   — /downsell
//
// Meta Pixel — só 4 sinais de otimização, nunca todo o resto:
// ViewContent, AddToCart, InitiateCheckout e Purchase. Os três
// primeiros disparam abaixo, amarrados só ao nome do evento (não a
// nenhuma tela específica). Purchase NÃO tem trigger aqui — ele
// acontece depois do checkout na Hotmart, fora das rotas deste
// projeto; precisa de webhook da Hotmart ou de uma página de
// obrigado, nenhuma das quais existe nesta lista de rotas.
// ============================================================

export type TrackProps = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    posthog?: { capture: (event: string, props: unknown) => void };
    fbq?: (...args: unknown[]) => void;
  }
}

const KEY = 'vt_session';
const ENDPOINT: string | null = null; // ex.: '/api/track' — deixe null para só logar

function sessionId(): string {
  let s = localStorage.getItem(KEY);
  if (!s) {
    s = crypto.randomUUID?.() || String(Date.now()) + Math.random().toString(36).slice(2);
    localStorage.setItem(KEY, s);
  }
  return s;
}

const sid = sessionId();
const t0 = performance.now();

function track(event: string, props: TrackProps = {}): void {
  const payload = {
    event,
    session_id: sid,
    ts: new Date().toISOString(),
    dwell_ms: Math.round(performance.now() - t0),
    ...props,
  };

  // 1. Console — para você conferir agora
  console.log('%c VT ', 'background:#E5A03C;color:#0C1A14;font-weight:700', event, payload);

  // 2. GTM / GA4
  (window.dataLayer = window.dataLayer || []).push(payload);

  // 3. PostHog
  window.posthog?.capture(event, payload);

  // 4. Meta Pixel — só os 4 sinais de otimização (ver comentário do
  // topo do arquivo). Purchase fica de fora: não há rota de obrigado
  // neste projeto para dispará-lo.
  if (event === 'step_view' && props.step === 1) window.fbq?.('track', 'ViewContent');
  if (event === 'condicao_resgatada') window.fbq?.('track', 'AddToCart');
  if (event === 'checkout_click') window.fbq?.('track', 'InitiateCheckout');

  // 5. Endpoint próprio (imune a bloqueador de anúncio)
  if (ENDPOINT) navigator.sendBeacon?.(ENDPOINT, JSON.stringify(payload));
}

export const VT = { track, sid };

// Telas 1, 3 e 4 têm alternador de tema e registravam a variante em
// todo evento (`variant: document.documentElement.dataset.theme`).
// As outras telas nunca tiveram esse campo. Em vez de injetar
// `variant` em todo evento das 12 telas — o que mudaria o formato do
// payload de telas que nunca o tiveram — quem precisa dele chama
// `withVariant(STEP)` no lugar de `STEP`.
export function withVariant(props: TrackProps = {}): TrackProps {
  return { variant: document.documentElement.dataset.theme, ...props };
}
