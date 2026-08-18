// ============================================================
// VITALLIA · Copy das telas 1 a 3 — "o ângulo"
// ------------------------------------------------------------
// Separado do restante do funil (src/config/funnel.ts) de propósito:
// estas são as três telas de abertura/gancho, o trecho do funil mais
// provável de ganhar variantes de ângulo para teste A/B — a própria
// tela 1 já existe em duas versões (a v1 "frasco de tintura", direta,
// e esta v2, com a pill de fato verificável e tema claro/escuro).
// Ter a copy de abertura isolada facilita clonar o arquivo inteiro
// para testar um ângulo novo sem tocar nas telas 4 a 12.
//
// Escopo desta extração: copy voltada ao leitor (headline, corpo,
// rótulo de botão, texto legal, roteiro de vídeo). Não inclui
// aria-label, placeholder técnico nem conteúdo de ícone SVG — esses
// ficam no componente, por serem detalhes de interface, não copy de
// funil.
// ============================================================

export const tela01 = {
  title: 'VITALLIA — E agora?',
  description: 'Você indica uma planta. A pessoa toma remédio todo dia. E agora?',
  pill: {
    fact: '71 plantas medicinais',
    rest: 'estão na lista oficial do SUS',
  },
  headline: {
    lines: ['Você indica', 'uma planta.', 'A pessoa toma', 'remédio todo dia.'],
    turn: 'E agora?',
  },
  sub: 'Existem <b>3 perguntas obrigatórias</b> antes de indicar qualquer planta. Se você não sabe quais são, o problema não é o que você sabe — é <b>a ordem</b> em que você aprendeu.',
  note: 'Aqui você não vai ver promessa de faturamento, método secreto nem selo do MEC — <b>porque selo do MEC não existe pra ninguém nesse ramo.</b> Nem no curso de R$ 3.000.',
  slider: {
    ariaLabel: 'Deslize para começar',
    handleLabel: 'Começar agora',
    hint: 'Deslize para começar',
  },
  micro: '3 minutos · sem cadastro · sem e-mail',
} as const;

export const tela02 = {
  title: 'VITALLIA — Tela 2',
  bridge: '"E agora?"',
  hold: 'o botão abre no fim do vídeo',
  cta: {
    label: 'Me mostra essa ordem',
    sub: 'continua em 1 toque · sem cadastro',
  },
  previewTag: 'prévia',
  // Config do player — modo 'preview' roda o roteiro no relógio antes de
  // existir vídeo; 'vturb' é o modo de produção, com o embed real.
  vsl: {
    modo: 'preview' as 'preview' | 'vturb',
    formato: '9:16' as '9:16' | '16:9',
    duracao: 98,
    ctaEm: 88,
  },
  // Roteiro — no modo 'vturb' vira só referência de edição, já que as
  // legendas ficam queimadas no vídeo (ver comentário no componente).
  script: [
    { t: 0, cap: 'Você é a pessoa a quem todo mundo pergunta.', shot: 'mão segurando celular · áudio de WhatsApp na tela', tone: '#16241C' },
    { t: 9, cap: 'E você responde. De cabeça. De graça.', shot: 'chá entregue pelo portão', tone: '#1A2A1E' },
    { t: 14, cap: 'Até o dia em que te perguntaram uma coisa que você não sabia responder.', shot: 'cozinha · pote reaproveitado com erva seca', tone: '#1E2A22' },
    { t: 20, cap: 'E você percebeu que também não sabia se podia.', shot: 'mão parada sobre o pote', tone: '#141F19' },
    { t: 26, cap: 'Aí você foi procurar um curso de verdade.', shot: 'celular na bancada · tela de busca', tone: '#1B2620' },
    { t: 32, cap: 'Viu mil e oitocentos. Viu três mil.', shot: 'preço na tela, close', tone: '#20241E' },
    { t: 38, cap: 'Fechou a aba.', shot: 'dedo fechando a aba', tone: '#0E1712' },
    { t: 43, cap: 'Comprou três cursos baratos. Não terminou nenhum.', shot: 'pasta de downloads · PDFs parados', tone: '#141D17' },
    { t: 50, cap: 'E concluiu que o problema era você.', shot: 'reflexo no vidro escuro do celular', tone: '#0B120E' },
    { t: 57, cap: 'Não era.', shot: 'preto · só a legenda', tone: '#060A08' },
    { t: 64, cap: 'Faltava uma coisa que nenhum vídeo te deu: a ordem.', shot: 'caderno de receita com letra de mão', tone: '#1C2A20' },
    { t: 72, cap: 'O que perguntar antes de indicar.', shot: 'ficha em branco · caneta', tone: '#22301F' },
    { t: 80, cap: 'O que checar antes de recomendar.', shot: 'lista de remédios sobre a mesa', tone: '#1E2C24' },
    { t: 86, cap: 'E o que fazer depois que a pessoa levanta da cadeira.', shot: 'cadeira vazia do outro lado da mesa', tone: '#26341F' },
    { t: 92, cap: 'Deixa eu te mostrar essa ordem.', shot: 'mão fechando a ficha preenchida', tone: '#2C3A22' },
  ],
} as const;

export const tela03 = {
  title: 'VITALLIA — Tela 3',
  slab: {
    eyebrow: 'Você já pesquisou. Você já viu esses números.',
    figure: 'R$ 1.800 a R$ 3.000',
    tag: '12 a 24 meses · e o mesmo certificado',
    src: 'Faixa de preço de formações presenciais em terapias naturais',
  },
  headline: 'Nada disso é exigido<br>pra atender no Brasil.<br><em>Nem uma coisa.</em>',
  lede: 'Terapia natural <b>não é profissão regulamentada</b>. Isso muda tudo o que te disseram que era pré-requisito.',
  negations: [
    { title: 'Sem faculdade', body: 'Não existe graduação obrigatória pra essa área. Nunca existiu.' },
    { title: 'Sem registro em conselho', body: 'Não existe conselho criado por lei pra terapias naturais. Por isso nenhum curso dá registro — nem o de R$ 3.000.' },
    { title: 'Sem dois anos de estudo', body: 'O que sustenta quem atende é certificado de curso livre, previsto na LDB. É outro tipo de documento.' },
    { title: 'Sem tarde livre', body: 'Vinte minutos por dia. Depois que a casa dorme já dá.' },
  ],
  loop: {
    lead: 'Se nada disso é o que está te travando,',
    question: 'então o que é?',
  },
  cta: 'Entender mais',
} as const;
