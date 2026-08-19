// ============================================================
// VITALLIA V2 · Copy das telas 2 a 9 + downsell
// ------------------------------------------------------------
// Tela 1 fica em src/config/funnel-angle.ts (ver o comentário lá).
//
// Escopo desta extração: copy voltada ao leitor. Onde o brief da V2
// deu a estrutura de um bloco mas não o texto literal (a frase por
// nível na tela 3, os rótulos de CTA entre telas que o brief não
// nomeou), o texto foi escrito seguindo o tom do resto do funil e
// fica marcado com um comentário "// escolha desta implementação".
// ============================================================

// ---- Geografia: UF → região, para a Q5 do diagnóstico e a tabela
// regional de preço (FAIXA_REGIONAL em src/config/oferta.ts). ----
export type Regiao = 'norte' | 'nordeste' | 'centrooeste' | 'sudeste' | 'sul';

export const ESTADOS: { uf: string; nome: string; regiao: Regiao }[] = [
  { uf: 'AC', nome: 'Acre', regiao: 'norte' },
  { uf: 'AP', nome: 'Amapá', regiao: 'norte' },
  { uf: 'AM', nome: 'Amazonas', regiao: 'norte' },
  { uf: 'PA', nome: 'Pará', regiao: 'norte' },
  { uf: 'RO', nome: 'Rondônia', regiao: 'norte' },
  { uf: 'RR', nome: 'Roraima', regiao: 'norte' },
  { uf: 'TO', nome: 'Tocantins', regiao: 'norte' },
  { uf: 'AL', nome: 'Alagoas', regiao: 'nordeste' },
  { uf: 'BA', nome: 'Bahia', regiao: 'nordeste' },
  { uf: 'CE', nome: 'Ceará', regiao: 'nordeste' },
  { uf: 'MA', nome: 'Maranhão', regiao: 'nordeste' },
  { uf: 'PB', nome: 'Paraíba', regiao: 'nordeste' },
  { uf: 'PE', nome: 'Pernambuco', regiao: 'nordeste' },
  { uf: 'PI', nome: 'Piauí', regiao: 'nordeste' },
  { uf: 'RN', nome: 'Rio Grande do Norte', regiao: 'nordeste' },
  { uf: 'SE', nome: 'Sergipe', regiao: 'nordeste' },
  { uf: 'DF', nome: 'Distrito Federal', regiao: 'centrooeste' },
  { uf: 'GO', nome: 'Goiás', regiao: 'centrooeste' },
  { uf: 'MS', nome: 'Mato Grosso do Sul', regiao: 'centrooeste' },
  { uf: 'MT', nome: 'Mato Grosso', regiao: 'centrooeste' },
  { uf: 'ES', nome: 'Espírito Santo', regiao: 'sudeste' },
  { uf: 'MG', nome: 'Minas Gerais', regiao: 'sudeste' },
  { uf: 'RJ', nome: 'Rio de Janeiro', regiao: 'sudeste' },
  { uf: 'SP', nome: 'São Paulo', regiao: 'sudeste' },
  { uf: 'PR', nome: 'Paraná', regiao: 'sul' },
  { uf: 'RS', nome: 'Rio Grande do Sul', regiao: 'sul' },
  { uf: 'SC', nome: 'Santa Catarina', regiao: 'sul' },
];

export const REGIAO_LABEL: Record<Regiao, string> = {
  norte: 'Norte',
  nordeste: 'Nordeste',
  centrooeste: 'Centro-Oeste',
  sudeste: 'Sudeste',
  sul: 'Sul',
};

// ---- Faixas de renda desejada — Q5 do diagnóstico. `valor` é o ponto
// representativo de cada faixa (o meio, arredondado; a última usa o
// piso, já que "mais que isso" é aberta), usado só para a aritmética
// da "conta que você mesma fez" na tela 3. O número é sempre dela —
// o funil nunca afirma que ela vai atingi-lo. ----
export const RENDA_OPCOES = [
  { v: '300', l: 'R$ 300 a R$ 500', valor: 400 },
  { v: '500', l: 'R$ 500 a R$ 1.000', valor: 750 },
  { v: '1000', l: 'R$ 1.000 a R$ 2.000', valor: 1500 },
  { v: '2000', l: 'Mais que isso', valor: 2000 },
] as const;

// ---- As seis áreas — chave única usada na Q4 do diagnóstico, nos
// cards da tela 4 e na reordenação por "você marcou esta". ----
export const AREAS = [
  { key: 'fito', nome: 'Fitoterapia', nomeCompleto: 'Fitoterapia e Plantas Medicinais' },
  { key: 'tintura', nome: 'Tintura Medicinal', nomeCompleto: 'Tintura Medicinal' },
  { key: 'aroma', nome: 'Aromaterapia', nomeCompleto: 'Aromaterapia e Óleos Essenciais' },
  { key: 'saboaria', nome: 'Saboaria', nomeCompleto: 'Saboaria Natural' },
  { key: 'homeo', nome: 'Homeopatia', nomeCompleto: 'Homeopatia Integrativa' },
  { key: 'atendimento', nome: 'Atendimento', nomeCompleto: 'Atendimento e Primeiro Cliente' },
] as const;

// ============================================================
// TELA 2 — /2-diagnostico
// ============================================================
export const tela2 = {
  title: 'VITALLIA — Diagnóstico',
  bar: {
    h1: 'Diagnóstico rápido',
    // a Q5 (renda) entrou depois da primeira versão do brief, que só
    // tinha 5 perguntas — o texto original ("5 perguntas") não bate
    // mais com o roteiro de 6 perguntas abaixo, então segue corrigido.
    sub: '6 perguntas · suas respostas ficam neste aparelho',
  },
  legal: 'Conteúdo educativo. Não substitui consulta, diagnóstico ou tratamento médico.<br>VITALLIA é curso livre (Lei 9.394/96 · Decreto 5.154/2004). Sem vínculo com MEC, Anvisa ou SUS.',
  opening: [
    'Antes de te mostrar a formação, seis perguntas.',
    'Elas mudam o que você vai ver depois — inclusive o valor de referência de consulta na sua região.',
  ],
  openingCta: 'Pode começar',
  turns: {
    interesse: {
      id: 'interesse',
      ask: 'O que mais te puxou pra terapias naturais?',
      opts: [
        { v: 'plantas', l: 'As plantas e os preparos' },
        { v: 'oleos', l: 'Os óleos essenciais' },
        { v: 'produtos', l: 'Fazer sabonete e produto natural' },
        { v: 'familia', l: 'Cuidar da minha família' },
        { v: 'atender', l: 'Atender outras pessoas' },
      ],
      reply: ['Anotado. Isso já indica por onde a sua trilha começa.'],
    },
    nivel: {
      id: 'nivel',
      ask: 'Quanto você já sabe hoje?',
      opts: [
        { v: 'zero', l: 'Começando do zero' },
        { v: 'conteudo', l: 'Já vejo conteúdo sobre isso' },
        { v: 'uso', l: 'Já uso algumas plantas em casa' },
        { v: 'preparo', l: 'Já preparo e dou pros outros' },
        { v: 'atendo', l: 'Já atendo alguém' },
      ],
      reply: ['A formação começa supondo que você não sabe nada — e vai até a parte de atender e cobrar. Você entra no ponto que já está.'],
    },
    objetivo: {
      id: 'objetivo',
      ask: 'O que você quer fazer com isso?',
      opts: [
        { v: 'casa', l: 'Cuidar da minha casa com segurança' },
        { v: 'aprender', l: 'Aprender de verdade, sem depender de vídeo solto' },
        { v: 'atender', l: 'Atender pessoas e cobrar' },
        { v: 'produtos', l: 'Fazer e vender produtos naturais' },
        { v: 'tudo', l: 'Tudo isso' },
      ],
      reply: [] as string[],
    },
    areas: {
      id: 'areas',
      ask: 'Quais áreas te interessam? Pode marcar mais de uma.',
      opts: AREAS.map(a => ({ v: a.key, l: a.nomeCompleto })),
      multi: true,
      minSelect: 1,
      // devolutiva é dinâmica (depende de quantas áreas foram marcadas) —
      // montada no componente a partir destes dois textos-base.
      replyManyTemplate: (n: number) => `Você marcou ${n} áreas. Curso isolado não resolve isso.`,
      replyFewTemplate: (areaComplementar: string) => `Certo. Mas repara que ${areaComplementar} entra junto sem custo a mais.`,
    },
    // ⛔ O número é dela, não nosso: existe para a tela 3 fazer aritmética
    // com um valor que a própria leitora escolheu. Em nenhum momento o
    // funil afirma que ela vai atingir esse valor.
    renda: {
      id: 'renda',
      ask: 'Quanto uma renda a mais por mês mudaria a sua vida hoje?',
      opts: RENDA_OPCOES.map(r => ({ v: r.v, l: r.l })),
      reply: ['Anotado. Já já eu te mostro o que isso significa em atendimentos.'],
    },
    uf: {
      id: 'uf',
      ask: 'Última: de que estado você é?',
      select: true,
      // devolutiva com faixa real (quando FAIXA_REGIONAL existir) ou o
      // texto genérico de fallback (ver componente).
      replyComFaixa: (regiaoLabel: string, x: number, y: number) =>
        `No ${regiaoLabel}, a faixa de referência para uma primeira consulta é de R$ ${x} a R$ ${y}. Essa tabela vem completa na formação, com valores de consulta, retorno e pacote por região.`,
      replySemFaixa: 'Na formação tem tabela de preço por região, com valores de consulta, retorno e pacote.',
    },
  },
  // Balão de conteúdo entre a Q2 (nível) e a Q3 (objetivo) — não é
  // pergunta, é reenquadramento da antiga "revelação de segurança"
  // da v1: lá acusava a leitora; aqui é informação sobre o produto.
  contentMoment:
    'Uma coisa que quase nenhum vídeo mostra: antes de indicar qualquer planta, o primeiro filtro é saber se a pessoa toma remédio contínuo. Existem interações, e isso muda a indicação. Está na primeira formação, e é o que separa dar um chá de conduzir um atendimento.',
} as const;

// ============================================================
// TELA 3 — /3-resultado
// ============================================================
export const PERFIL_POR_OBJETIVO: Record<string, string> = {
  casa: 'Cuidadora da casa',
  aprender: 'Estudante das plantas',
  atender: 'Terapeuta em formação',
  produtos: 'Artesã de produtos naturais',
  tudo: 'Formação completa',
};

// escolha desta implementação: o brief só definiu a estrutura
// ("[frase derivada do nível]"), não o texto — segue o tom do resto
// do diagnóstico, sem nunca soar como se ela soubesse pouco.
export const PONTO_DE_PARTIDA_POR_NIVEL: Record<string, string> = {
  zero: 'Você está começando do zero — a formação foi pensada para isso, do primeiro passo até atender e cobrar.',
  conteudo: 'Você já vê conteúdo sobre o assunto. Agora entra a parte que vídeo solto não ensina: a ordem e a segurança.',
  uso: 'Você já usa plantas em casa. A formação organiza o que você já faz e mostra o que falta pra ir além.',
  preparo: 'Você já prepara e dá pros outros. Falta a parte que protege você: o que checar antes de indicar.',
  atendo: 'Você já atende alguém. A formação fecha o que falta: ficha, preço e segurança documentada.',
};

// ---- Conexão de cada área NÃO marcada com o que ela marcou — "as que
// vêm junto" da tela 3. Resolução (ver 3-resultado.astro): se o
// conjunto marcado cruza com {atendimento, fito}, usa `atendimentoFito`;
// senão, se cruza com {saboaria, tintura}, usa `saboariaTintura`; senão
// usa `padrao`. Homeopatia só tem `padrao` porque a linha é idêntica
// nas três colunas da tabela original — ela nunca é rota de venda,
// não importa o que mais foi marcado. ----
export type ConexaoArea = { atendimentoFito?: string; saboariaTintura?: string; padrao: string };

export const CONEXAO_AREA_NAO_MARCADA: Record<string, ConexaoArea> = {
  saboaria: {
    atendimentoFito: 'A pessoa que você atendeu sai com um produto seu na mão. Mesmo cliente, segunda receita',
    padrao: 'Não depende de cliente marcado',
  },
  atendimento: {
    saboariaTintura: 'Quem compra seu produto pergunta o que usar — e aí você cobra pela orientação também',
    padrao: 'Transforma o que você sabe em atividade',
  },
  fito: {
    atendimentoFito: 'É a base de qualquer indicação segura',
    saboariaTintura: 'Te deixa explicar por que o seu é diferente do da prateleira — e é o que faz vender mais caro',
    padrao: 'A base de tudo',
  },
  tintura: {
    atendimentoFito: 'Você não só indica: entrega o preparo pronto',
    saboariaTintura: 'Mesma bancada, mesmos frascos. Um lote de trabalho, dois produtos',
    padrao: 'Um lote dura meses',
  },
  aroma: {
    atendimentoFito: 'É o que a pessoa sente na hora, e o que mais gera indicação',
    saboariaTintura: 'É o que dá cheiro e função ao seu produto',
    padrao: 'Efeito percebido rápido',
  },
  homeo: {
    // ⛔ idem nas três colunas da tabela original — nunca é rota de
    // venda, não importa o que mais foi marcado.
    padrao: 'Base de conhecimento: conversar sobre o assunto sem falar besteira e saber quando o caso não é seu. Não é rota de venda',
  },
};

export const tela3 = {
  title: 'VITALLIA — Seu resultado',
  labelPerfil: 'Seu perfil',
  labelVoceMarcou: 'Você marcou',
  labelPontoDePartida: 'Seu ponto de partida',
  labelRegiao: 'Na sua região',
  labelRegiaoLinhaTemplate: (x: number, y: number) => `Primeira consulta: faixa de R$ ${x} a R$ ${y}`,

  // ⛔ Ramificação obrigatória: quem marcou saboaria/tintura quer marca
  // própria, não terapeuta — preço de consulta é irrelevante pra ela.
  // Quem marcou atendimento/fitoterapia quer cobrar consulta. A conta é
  // sempre divisão de um número que ELA escolheu (Q5) por um valor de
  // mercado verificável; em nenhum ponto afirma que ela vai atingi-lo.
  conta: {
    labelSecao: 'A conta que você mesma fez',
    saboaria: {
      linha1Template: (custo: number) => `Um sabonete artesanal de 90g sai por cerca de R$ ${custo} de matéria-prima.`,
      linha2Template: (min: number, max: number) => `Sabonetes desse tipo são vendidos entre R$ ${min} e R$ ${max}.`,
      linha3Template: (renda: number) => `Você disse que R$ ${renda} fariam diferença no seu mês.`,
      linha4Template: (n: number) => `Isso seria ${n} sabonetes.`,
    },
    atendimento: {
      linha1Template: (regiaoLabel: string, x: number, y: number) => `No ${regiaoLabel}, a faixa de referência de primeira consulta é de R$ ${x} a R$ ${y}.`,
      linha2Template: (renda: number) => `Você disse que R$ ${renda} fariam diferença no seu mês.`,
      linha3Template: (n: number) => `Isso seria ${n} atendimentos no mês.`,
    },
    fechoComum: 'Quantos você vai conseguir depende da sua cidade e do seu esforço. O que a formação te dá é a receita, a embalagem, o roteiro do que postar e o que responder quando perguntarem quanto custa.',
  },

  // ⛔ Sempre exibir TODAS as áreas não marcadas. Nunca dizer que a
  // escolha dela é insuficiente — o argumento é "você não precisa
  // escolher", nunca "você escolheu pouco". Cada linha depende do que
  // ela marcou (ver CONEXAO_AREA_NAO_MARCADA), não é lista de adição.
  vemJunto: {
    labelSecao: 'As que vêm junto',
    fechoLinha1Template: (areas: string) => `Você marcou ${areas}. Isso já é uma fonte.`,
    fechoLinha2Template: (foco: string) => `Mas fonte única depende de uma coisa dar certo: ${foco}.`,
    fechoResto: 'Tem mês que anda, tem mês que não. Quem trabalha com duas frentes tem uma segurando a outra. E as seis vêm no mesmo acesso — você não precisa escolher.',
  },

  multiAreasBloco:
    'Comprar quatro cursos separados custaria mais de R$ 400 e te daria quatro conteúdos que não conversam entre si. Foi por isso que a VITALLIA foi montada como formação única.',
  multiAreasBlocoTemplate: (n: number) => `Você marcou ${n} áreas diferentes.`,
  cta: 'Ver a formação',
} as const;

// ============================================================
// TELA 4 — /4-formacao — O PRODUTO
// ============================================================
export const tela4 = {
  title: 'VITALLIA — A formação',
  kicker: 'Formação VITALLIA em Terapias Naturais',
  headline: 'Seis formações em um acesso só',
  sub: '100% online · acesso vitalício · certificado em cada uma',
  cards: [
    {
      key: 'fito',
      titulo: 'Fitoterapia e Plantas Medicinais',
      texto: 'As plantas mais usadas no Brasil, o que cada uma faz, por quantos dias, em que quantidade, e quando não pode: gestante, pressão alta, quem toma remédio contínuo.',
      linhaRenda: 'A base do atendimento cobrado',
    },
    {
      key: 'tintura',
      titulo: 'Tintura Medicinal',
      texto: 'Transformar planta em um produto que dura meses: álcool, proporção, maceração, filtragem, envase e validade.',
      linhaRenda: 'Um lote dura meses e você vende ao longo do tempo',
    },
    {
      key: 'aroma',
      titulo: 'Aromaterapia e Óleos Essenciais',
      texto: 'A diluição certa para criança, gestante e pele sensível, e as misturas para os pedidos mais comuns.',
      linhaRenda: 'A pessoa sente na hora — é o que mais gera indicação',
    },
    {
      key: 'saboaria',
      titulo: 'Saboaria Natural',
      texto: 'O produto que você vende sem depender de cliente marcado: receitas, segurança, embalagem e venda.',
      linhaRenda: 'Vende o produto — não depende de cliente marcado. É a rota mais rápida',
    },
    {
      key: 'homeo',
      titulo: 'Homeopatia Integrativa',
      texto: 'Entender o assunto para saber conversar sobre ele, e reconhecer quando o caso não é seu.',
      // ⛔ diz explicitamente que NÃO é rota de venda — isso fortalece o
      // crédito das outras cinco (promessa uniforme derruba o conjunto,
      // porque a leitora abre a lista inteira e confere).
      linhaRenda: 'Base de conhecimento, amplia o que você conversa. Não é rota de venda',
    },
    {
      key: 'atendimento',
      titulo: 'Atendimento e Primeiro Cliente',
      texto: 'A ficha campo por campo, as perguntas da primeira conversa, quanto cobrar por região, como se formalizar como MEI.',
      linhaRenda: 'Onde está a tabela de preço por região e o roteiro de primeiro cliente',
    },
  ],
  linhaRendaKicker: 'Como vira dinheiro',
  marcadaBadge: 'você marcou esta',
  fecho: 'Ao concluir cada uma, você recebe o certificado correspondente.',
  // escolha desta implementação: o brief não nomeou o rótulo do CTA
  // desta tela; segue para a tela 5 (o método/diferencial).
  cta: 'Ver o método',
} as const;

// ============================================================
// TELA 5 — /5-diferencial
// ============================================================
export const tela5 = {
  title: 'VITALLIA — O método',
  headline: 'E não são seis cursos soltos.',
  // comprimido de tela-04 (v1): três colunas, sem acordeão, com a
  // mesma última linha nas três — "quando alguém senta na sua frente".
  colunas: [
    { titulo: 'Vídeo e PDF de graça', punchline: 'você trava' },
    { titulo: 'Formação de R$ 1.800 a R$ 3.000', punchline: 'você sabe muito e ainda trava' },
    { titulo: 'A ordem', punchline: 'você abre a ficha' },
  ],
  punchlinePrefix: 'Quando alguém senta na sua frente:',
  metodo: {
    kicker: 'Método da Primeira Ficha',
    texto: 'As seis formações seguem a ordem em que a decisão acontece: o que perguntar → o que checar → o que indicar → como preparar → como registrar → quanto cobrar.',
  },
  filtro: {
    kicker: 'O que quase nenhum curso ensina',
    texto: 'Quando NÃO usar. Contraindicação, dose, tempo de uso e interação com medicamento contínuo. É conteúdo que não viraliza, então quase ninguém produz — e é o primeiro filtro de qualquer atendimento.',
  },
  // escolha desta implementação: leva para a tela 6 (o que entra no acesso).
  cta: 'Ver o que você recebe',
} as const;

// ============================================================
// TELA 6 — /6-recebe — EMPILHAMENTO DE SUBSTÂNCIA
// ============================================================
export const tela6 = {
  title: 'VITALLIA — O que você recebe',
  headline: 'O que entra no seu acesso',
  formacao: {
    kicker: 'A formação',
    texto: '6 formações · 120 horas · 6 certificados com código de validação',
  },
  materiais: {
    kicker: 'Os materiais',
    itens: [
      '100 plantas com nome científico, preparo e contraindicação',
      '50 preparos prontos para imprimir',
      'Fichas de atendimento editáveis (primeira conversa, autorização, acompanhamento)',
      'Tabela de diluição para criança, gestante e pele sensível',
      'Tabela de preço por região do país',
      'Kit Primeiro Cliente: 30 posts prontos, texto de bio, script de WhatsApp',
    ],
  },
  comoFunciona: {
    kicker: 'Como funciona',
    texto: 'Aulas de 6 a 12 minutos · celular, computador ou TV · acesso pra sempre',
  },
  // ⛔ Divisão, não contagem — não é "barato", é custo diluído em seis
  // áreas, e é aritmética que ela confere sozinha. Os dois valores
  // (R$ 6,17 e R$ 0,31) são fixos: 37 ÷ 6 formações e 37 ÷ 120 horas.
  custoPorArea: {
    kicker: 'O que isso custa por área',
    linha1: '6 formações · 120 horas · R$ 37',
    porFormacao: 'R$ 6,17 por formação',
    porHora: 'R$ 0,31 por hora de aula',
    // ⛔ exige 10 a 15 prints datados de páginas concorrentes com preço
    // visível. Sem FAIXA_MERCADO preenchido, este parágrafo não renderiza.
    faixaMercadoTemplate: (min: number, max: number) => `Formações combo com esse número de áreas custam entre R$ ${min} e R$ ${max} no mercado.`,
  },
  // Só aparece para quem marcou saboaria ou tintura na Q4 — essa parte
  // da compradora não quer atender ninguém, quer marca própria, e a
  // oferta precisa mostrar a cena de negócio, não só a lista de conteúdo.
  // ⛔ Descreve atividade, não resultado financeiro — nenhuma frase
  // afirma quanto ela vai vender ou ganhar.
  blocoCena: {
    paragrafos: [
      'Você faz o lote no domingo. Embala, tira foto na luz da janela, posta com a legenda que já vem pronta. A vizinha pergunta o preço, e dessa vez você tem resposta.',
      'No mês seguinte tem nome, tem rótulo, tem gente pedindo de novo. Deixou de ser presente e virou produto.',
    ],
    entregaKicker: 'O que a formação entrega para isso',
    entregaItens: [
      'Receitas que dão produto vendável',
      'Embalagem e caixa de presente (curso 4)',
      '30 posts prontos, texto de bio e script de WhatsApp para quando perguntarem o preço',
      'Como se formalizar como MEI',
      'A margem por produto, para saber se vale',
    ],
  },
  // escolha desta implementação: leva para a tela 7 (a prova).
  cta: 'Quero ver a prova',
} as const;

// ============================================================
// TELA 7 — /7-prova
// ============================================================
export const tela7 = {
  title: 'VITALLIA — Isso é sério?',
  echo: '"Falta menos do que parece."',
  headline: 'Tá. Mas <em>isso aqui é sério?</em>',
  lede: 'Pergunta justa. Então não acredita em mim — confere você mesma, agora.',
  blocks: {
    validador: {
      tagNumber: '01',
      tagLabel: 'Prova que você confere',
      question: 'Todo certificado VITALLIA tem código e QR.',
      hint: 'Digita o código de demonstração abaixo e vê o que acontece. É o mesmo sistema que valida o certificado de qualquer aluna.',
      buttonLabel: 'Validar',
    },
    // Colada ao validador (não é um bloco numerado à parte): imagem
    // sozinha não prova nada — qualquer um monta uma. Imagem + validador
    // funcionando é que é prova, um confirma o outro. Por isso não vai
    // na tela 4 (só a frase de consequência) nem na 6 (uma linha no
    // empilhamento). ⛔ Sem brasão, laurel, escudo, fita ou selo de
    // associação no desenho — isso faria a peça imitar documento oficial,
    // e aí o texto honesto não salva.
    certificado: {
      slotLabel: 'slot · imagem do certificado',
      campos: [
        'Nome completo',
        'Nome da formação',
        'Carga horária discriminada',
        'Data',
        'Código com QR',
        'Assinatura',
        '"Certificado de conclusão de curso livre, nos termos da Lei 9.394/96 e do Decreto 5.154/2004"',
      ],
      caption: 'Sem brasão, laurel, escudo ou selo de associação — só o documento, exatamente como ele existe.',
    },
    midia: {
      tagNumber: '02',
      tagLabel: 'Prova que você vê',
      items: [
        { slot: 'slot · trecho de aula<br>45 a 60s, sem corte', caption: 'Uma aula inteira, do jeito que ela é. Sem edição de vitrine.' },
        { slot: 'slot · página real<br>caderno de 50 receitas', caption: 'Uma página do caderno: a queixa, o preparo, o modo de uso e quando não pode.' },
      ],
    },
  },
  // o bloco longo sobre MEC/conselho saiu daqui (vai para o FAQ da tela 9).
  legalCurta: 'Certificado de conclusão de curso livre, previsto na LDB, com carga horária e código.',
  pending: '<b>[PROVA NECESSÁRIA]</b> — depoimento em áudio de aluna, com autorização por escrito. Entra abaixo do validador quando existir.',
  cta: 'Ver minha condição',
  fine: 'VITALLIA é curso livre de capacitação (Lei 9.394/96 · Decreto 5.154/2004). Não dá registro em conselho. Conteúdo educativo, não substitui consulta médica.',
  demo: {
    code: 'VTL-DEMO-0001',
    nome: 'CERTIFICADO DE DEMONSTRAÇÃO',
    curso: 'Fitoterapia e Plantas Medicinais',
    horas: '20 horas',
    emissao: '—',
  },
  validator: {
    validTitle: 'Certificado válido',
    validNote: 'Este é um registro de <b>demonstração</b>, criado para você testar o sistema. O certificado de uma aluna traz o nome completo dela e a data real de conclusão.',
    invalidTitle: 'Código não encontrado',
    invalidNoteTemplate: (code: string) => `Nenhum certificado com esse código. Para testar o sistema, use <b>${code}</b>.`,
  },
} as const;

// ============================================================
// TELA 8 — /8-condicao — O CUPOM
// ============================================================
export const tela8 = {
  title: 'VITALLIA — Sua condição',
  paleta: 'lima' as 'lima' | 'ouro',
  janelaHoras: 24,
  head: {
    title: 'Libere<br>sua condição',
    sub: 'Você respondeu as cinco.<br><b>Isso libera uma condição.</b> Quem entra direto na página de preço não passa por aqui.',
  },
  card: {
    frontLabel: 'Condição<br>de conclusão',
    frontTiny: 'Só de quem respondeu<br>as cinco perguntas',
  },
  go: {
    default: 'Liberar minha condição',
    resgatado: 'Ver a formação',
  },
  // ⛔ sem link para a página avulsa nesta tela — a verificação do preço
  // de tabela mora só no FAQ da tela 9, onde o clique é deliberado.
  reveal: '<p class="big">62% OFF<small>na formação completa</small></p><p class="body">De <b>R$ 97</b> por <b>R$ 37</b>.</p>',
  afterRedeem: {
    title: 'Condição<br>liberada',
    sub: 'Esse código é só seu e já vai aplicado no checkout.',
  },
  microTemplate: (clock: string) => `vale por ${clock} · esse código já vai aplicado no checkout`,
  fine: 'VITALLIA é curso livre (Lei 9.394/96 · Decreto 5.154/2004). Não dá registro em conselho. Nada aqui é promessa de renda.',
} as const;

// ============================================================
// TELA 9 — /9-oferta
// ============================================================
export const tela9 = {
  title: 'VITALLIA — A oferta',
  stripLabel: 'Condição aplicada',
  headline: 'Formação VITALLIA em Terapias Naturais',
  priceOnce: 'pagamento único · acesso pra sempre',
  includes: [
    'As 6 formações completas',
    '6 certificados · 120 horas · com código de validação',
    'Todos os materiais e as fichas de atendimento',
    'Tabela de preço por região',
    'Acesso pra sempre, pelo celular',
  ],
  cta: 'Quero a formação completa',
  pay: 'Cartão, Pix ou boleto · acesso na hora',
  // Colada ao preço, nunca antes. ⛔ Sem nome de concorrente em nenhuma
  // linha — usa "por aí" e faixa de mercado, com prints datados como
  // lastro. Linha de preço só renderiza com FAIXA_MERCADO preenchido;
  // as outras quatro são verificáveis no próprio produto e ficam
  // sempre visíveis.
  comparacao: {
    colunaPorAi: 'Por aí',
    colunaAqui: 'Aqui',
    linhas: [
      { label: 'Áreas incluídas', porAi: '3 a 5', aqui: '6' },
      { label: 'Ensina quando não usar', porAi: 'raro', aqui: 'em todas as formações' },
      { label: 'Ficha de atendimento pronta', porAi: 'não', aqui: 'incluída' },
      { label: 'Certificado com código que valida online', porAi: 'varia', aqui: 'sim' },
    ],
    linhaPrecoLabel: 'Preço',
    linhaPrecoAqui: 'R$ 37',
    linhaPrecoPorAiTemplate: (min: number, max: number) => `R$ ${min} a R$ ${max}`,
  },
  badges: [
    { p: 'Acesso<br>na hora' },
    { p: 'Pagamento<br>pela Hotmart' },
    { p: 'Acesso<br>pra sempre' },
  ],
  warranty: {
    h4: '7 dias pra pedir o dinheiro de volta',
    p: 'Entra, assiste tudo, baixa os materiais, testa uma receita. Se achar que não era o que esperava, pede na Hotmart e recebe de volta — <b>sem precisar explicar o motivo</b>.',
  },
  faq: [
    {
      q: 'Esse preço de R$ 97 é real mesmo?',
      // o link real vem de LINK_AVULSO (src/config/oferta.ts)
      aTemplate: (linkAvulso: string) =>
        `É o preço da formação no nosso site, hoje: ${linkAvulso || '[link para ofertaai.shop]'}. O de R$ 37 é a condição de quem completou o diagnóstico.`,
    },
    {
      q: 'O certificado é reconhecido pelo MEC?',
      a: 'Não, e nenhum curso livre é — o MEC reconhece graduação, técnico e pós. Terapia natural também não é profissão regulamentada, então nenhum curso dá registro em conselho, nem o de R$ 3.000. O que existe é certificado de conclusão de curso livre, previsto na LDB, e é esse que você recebe, com carga horária e código de validação. Quem te prometer mais que isso está mentindo.',
    },
    {
      q: 'Por quanto tempo tenho acesso?',
      a: 'Pra sempre. Não é assinatura e não renova.',
    },
    {
      q: 'Serve pra quem nunca estudou isso?',
      a: 'Começa supondo que você não sabe nada. Aulas de 6 a 12 minutos, cada uma termina com algo pra fazer no mesmo dia.',
    },
    {
      q: 'Como eu entro depois que pago?',
      a: 'A Hotmart manda no seu e-mail. Cartão e Pix, na hora.',
    },
  ],
  fine: 'VITALLIA é curso livre de capacitação, nos termos da Lei 9.394/96 e do Decreto 5.154/2004, e emite certificado de conclusão de curso livre. Não é graduação, curso técnico nem pós-graduação, e não dá registro em conselho profissional. Sem vínculo com o MEC, o Ministério da Saúde, a Anvisa ou o SUS.<br><br>O conteúdo é educativo e não substitui consulta, diagnóstico ou tratamento médico. Nada do que é ensinado aqui trata ou cura doença. Nunca pare um remédio ou tratamento sem falar com seu médico. Nada nesta página é promessa de renda.',
} as const;

// ============================================================
// DOWNSELL — /downsell
// ============================================================
export const downsell = {
  title: 'VITALLIA — Plano de Entrada',
  headline: 'Espera.',
  lede: 'Se a formação completa não é o momento, tem uma porta de entrada.',
  planTitle: 'Plano de Entrada — R$ 9,90',
  includes: ['Fitoterapia e Plantas Medicinais', 'Tintura Medicinal', '2 certificados · 40 horas', 'Acesso pra sempre'],
  excludes: [
    'Não inclui aromaterapia, saboaria nem homeopatia',
    'Não inclui a ficha de atendimento nem a tabela de preço',
    'Não inclui o Kit Primeiro Cliente',
  ],
  cta: 'Entrar por R$ 9,90',
  // ⛔ nunca a formação completa por menos de R$ 37 — este link volta
  // para a tela 9 pelo preço de condição, nunca por um valor menor.
  linkVoltar: 'Voltar para a formação completa por R$ 37',
} as const;

// ============================================================
// /2b-video — VSL, variante de teste fora do fluxo principal
// ------------------------------------------------------------
// Era a tela-02 da v1 (obrigatória, entre a tela 1 e a tela 3). Na
// V2 o produto já é nomeado na tela 1 e o diagnóstico começa direto
// depois — o vídeo vira uma variante de identificação/loop aberto
// pra testar, não uma etapa do funil. O botão avança para o
// diagnóstico (/2-diagnostico), o mesmo destino da tela 1.
// ============================================================
export const video2b = {
  title: 'VITALLIA — A história',
  bridge: '"Você já é a pessoa a quem todo mundo pergunta."',
  hold: 'o botão abre no fim do vídeo',
  cta: {
    label: 'Começar o diagnóstico',
    sub: 'continua em 1 toque · sem cadastro',
  },
  previewTag: 'prévia',
  vsl: {
    modo: 'preview' as 'preview' | 'vturb',
    formato: '9:16' as '9:16' | '16:9',
    duracao: 98,
    ctaEm: 88,
  },
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
    { t: 92, cap: 'Deixa eu te mostrar essa formação.', shot: 'mão fechando a ficha preenchida', tone: '#2C3A22' },
  ],
} as const;
