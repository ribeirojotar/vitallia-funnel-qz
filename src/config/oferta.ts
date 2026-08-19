// ============================================================
// VITALLIA V2 — configuração comercial da oferta
// ------------------------------------------------------------
// Preenchida por quem opera o negócio, não pelo código. Cada
// placeholder abaixo é bloqueante: a tela 8 (condição) e a tela 9
// (oferta) dependem de PRECO.tabela ser o preço real e praticado
// na ofertaai.shop. Se esse preço não existir de verdade, o desconto
// de 62% é fictício e as duas telas viram encenação.
// ============================================================

export const PRECO = {
  tabela: 97, // precisa ser o preço real na ofertaai.shop
  funil: 37,
  downsell: 9.9,
  pct: 62,
};

// null = esconde a devolutiva de valor regional na tela 2/3 e a
// "conta de atendimento" da tela 3 (quem marcou atendimento/fitoterapia).
// Preencher como { norte:[x,y], nordeste:[x,y], centrooeste:[x,y], sudeste:[x,y], sul:[x,y] }
// com a faixa real do Kit Primeiro Cliente antes de ativar.
export const FAIXA_REGIONAL: Record<string, [number, number]> | null = null;

// Custo de insumo e preço de mercado praticado para um produto (ex.:
// sabonete de 90g) — alimenta a "conta de saboaria/tintura" da tela 3.
// ⛔ os dois valores precisam ter fonte real: nota de compra do insumo
// e preços praticados em anúncios reais. Sem lastro, deixe null —
// null = esconde essa conta inteira.
export const MARGEM_PRODUTO: { custo: number; venda: [number, number]; unidade: string } | null = null;

// [min, max] — preço de formações combo equivalentes no mercado.
// Alimenta a divisão "o que isso custa por área" (tela 6) e a linha de
// preço da tabela de comparação (tela 9).
// ⛔ exige 10 a 15 prints datados de páginas concorrentes com preço
// visível, guardados. Sem eles, deixe null — esconde a divisão e a
// linha de preço da tabela.
export const FAIXA_MERCADO: [number, number] | null = null;

export const CHECKOUT = {
  completo: '', // link Hotmart
  entrada: '', // link Hotmart do downsell
};

export const LINK_AVULSO = ''; // ofertaai.shop, usado só no FAQ

export const CONTATO: string | null = null; // WhatsApp — só se houver alguém respondendo

export const PARCELA: string | null = null; // só o que a Hotmart realmente oferece, com juros
