// ============================================================
// VITALLIA V2 · Copy da tela 1 — "o ângulo"
// ------------------------------------------------------------
// Fica separado do resto do funil (src/config/funnel.ts) porque é
// o trecho mais provável de ganhar variantes de ângulo para teste
// A/B. `tela1` é o ângulo ativo (produto nomeado, entra no ar).
// `tela1VariantB` é a cena de medo da v1 — guardada aqui, pronta
// para testar, mas NÃO usada por padrão em produção.
// ============================================================

export const tela1 = {
  title: 'VITALLIA — Formação em Terapias Naturais',
  description:
    'Fitoterapia, Tintura Medicinal, Aromaterapia, Saboaria, Homeopatia e Atendimento — seis formações em um acesso só.',
  pill: {
    fact: '71 plantas medicinais',
    rest: 'estão na lista oficial do SUS',
  },
  headline: {
    lines: ['Você já é a pessoa', 'a quem todo mundo pergunta.'],
    turn: 'Falta a formação.',
  },
  sub: 'Fitoterapia, Tintura Medicinal, Aromaterapia, Saboaria, Homeopatia e Atendimento — seis formações em um acesso só.',
  corpo: 'Responde 5 perguntas e eu te mostro por onde começar, quanto se cobra na sua região, e o que a formação inclui.',
  slider: {
    ariaLabel: 'Começar o diagnóstico',
    handleLabel: 'Começar o diagnóstico',
    hint: 'Deslize para começar',
  },
  micro: '3 minutos · sem cadastro · sem e-mail',
} as const;

// Variante B — a cena de medo original da v1. Mesma sub, mesmo corpo
// e mesmo CTA de `tela1`; só a headline muda. Guardada para teste A/B,
// não para uso imediato.
export const tela1VariantB = {
  headline: {
    lines: ['Você indica', 'uma planta.', 'A pessoa toma', 'remédio todo dia.'],
    turn: 'E agora?',
  },
} as const;
