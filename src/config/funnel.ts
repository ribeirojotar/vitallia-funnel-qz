// ============================================================
// VITALLIA · Copy das telas 4 a 12
// ------------------------------------------------------------
// Telas 1 a 3 ficam em src/config/funnel-angle.ts (ver o comentário
// lá para o motivo da separação).
//
// Escopo desta extração: copy voltada ao leitor (headline, corpo,
// rótulo de botão, texto legal, dados de tela). Não inclui
// aria-label, placeholder técnico nem conteúdo de ícone SVG — esses
// ficam no componente, por serem detalhes de interface, não copy de
// funil.
// ============================================================

export const tela04 = {
  title: 'VITALLIA — Tela 4',
  bridge: {
    echo: '"Então o que é?"',
    answer: 'É a <em>ordem</em>.<br>E ninguém te contou qual é.',
  },
  panelCaption: 'Três formas de aprender · três resultados',
  rows: [
    {
      key: 'gratis',
      isCore: false,
      title: 'Vídeo e PDF de graça',
      subtitle: 'Ensina a planta · Não ensina a checagem · Sem ordem',
      bullets: [
        'Te dá o que a planta faz. É a camada mais fácil de produzir e a que mais aparece.',
        'Contraindicação e interação com remédio contínuo quase nunca entram — não é conteúdo que viraliza.',
        'Cada vídeo começa do zero. Você acumula assunto, não caminho.',
        '<b>Quando alguém senta na sua frente:</b> você trava.',
      ],
    },
    {
      key: 'ordem',
      isCore: true,
      title: 'Método da Primeira Ficha',
      subtitle: 'Da queixa à ficha · Ensina o que não usar · Termina no atendimento',
      bullets: [
        'Você aprende na ordem em que a decisão acontece, não por assunto.',
        'Primeiro o que perguntar. Depois o que checar. Só então o que indicar.',
        'Termina onde os outros nem chegam: ficha preenchida e valor definido.',
        '<b>Quando alguém senta na sua frente: você abre a ficha.</b>',
      ],
    },
    {
      key: 'formacao',
      isCore: false,
      title: 'Formação de R$ 1.800 a R$ 3.000',
      subtitle: '12 a 24 meses · Muita teoria · O mesmo certificado',
      bullets: [
        'Conteúdo geralmente bom. O problema não é qualidade.',
        'Emite certificado de conclusão de curso livre, previsto na LDB — o mesmo tipo que este aqui emite.',
        'Não dá registro em conselho, porque não existe conselho pra essa área. Nenhum curso dá.',
        '<b>Quando alguém senta na sua frente:</b> você sabe muito e ainda trava, se ninguém te ensinou a conduzir.',
      ],
    },
  ],
  note: {
    tag: 'Antes que você pergunte',
    paragraphs: [
      '"Então nenhum certificado vale nada — nem o de vocês?"',
      'Vale, e vale exatamente o que é: <b>certificado de conclusão de curso livre</b>, previsto na LDB. É esse documento que sustenta a atuação de terapeutas naturais no Brasil inteiro, com carga horária discriminada e validação.',
      'O que não existe pra ninguém é registro profissional e selo do MEC. <b>Quem te prometer isso está mentindo</b> — e agora você sabe reconhecer.',
    ],
  },
  cta: 'Ver na prática',
  legal: 'VITALLIA é curso livre de capacitação (Lei 9.394/96 · Decreto 5.154/2004). Não é graduação, técnico ou pós, e não dá registro em conselho. Sem vínculo com MEC, Anvisa, SUS ou Ministério da Saúde.',
} as const;

export const tela05 = {
  title: 'VITALLIA — Tela 5',
  bar: {
    h1: 'Simulação de atendimento',
    sub: '5 perguntas · suas respostas ficam neste aparelho',
  },
  legal: 'Conteúdo educativo. Não substitui consulta, diagnóstico ou tratamento médico.<br>VITALLIA é curso livre (Lei 9.394/96 · Decreto 5.154/2004). Sem vínculo com MEC, Anvisa ou SUS.',
  opening: [
    'Chega de eu ficar te falando as coisas.',
    'Vamos fazer diferente: uma pessoa vai sentar na sua frente agora, e <b>você</b> responde.',
    'Cinco perguntas. No fim eu te mostro exatamente o que faltou — e onde isso está.',
  ],
  openingCta: 'Pode começar',
  turns: [
    {
      id: 'procurada',
      sys: 'A consulta começou',
      scene: 'Antes de tudo, uma pergunta sobre você.',
      ask: 'Quem já te pediu um chá ou um conselho?',
      opts: [
        { v: 'casa', l: 'Gente de casa' },
        { v: 'vizinha', l: 'Vizinha, amiga' },
        { v: 'trabalho', l: 'Gente do trabalho' },
        { v: 'estranho', l: 'Gente que eu nem conheço direito' },
      ],
      reply: [
        'Guarda isso: <b>ser procurada é a parte difícil</b>, e você já tem.',
        'Tem gente que estuda dois anos e não tem. O resto é técnica.',
      ],
    },
    {
      id: 'queixa',
      scene: 'Ela senta e diz: “faz duas semanas que eu não durmo direito”.',
      ask: 'Qual é a sua primeira reação?',
      opts: [
        { v: 'sei', l: 'Já sei uma planta pra isso' },
        { v: 'perguntar', l: 'Eu perguntaria mais coisas antes' },
        { v: 'travei', l: 'Eu não saberia por onde começar' },
      ],
      reply: [
        'Antes de escolher qualquer planta, existem perguntas obrigatórias.',
        'E a mais importante quase ninguém faz.',
      ],
    },
    {
      id: 'checagem',
      scene: 'Ela menciona que toma um remédio contínuo, todo dia.',
      ask: 'Isso muda a sua indicação?',
      opts: [
        { v: 'muda', l: 'Muda tudo' },
        { v: 'acho', l: 'Acho que muda' },
        { v: 'naosei', l: 'Não sei' },
      ],
      reply: [
        'Muda. Existem interações entre plantas e medicamentos de uso contínuo — e essa checagem é o <b>primeiro filtro</b> de qualquer atendimento, antes de escolher qualquer coisa.',
        { k: 'soft', t: 'E aqui vai o ponto: isso não estava nos vídeos que você assistiu. Conteúdo de contraindicação não viraliza, então quase ninguém produz. <b>Não é falha sua.</b>' },
      ],
    },
    {
      id: 'preco',
      scene: 'No fim, ela pergunta quanto custa.',
      ask: 'O que você responde?',
      opts: [
        { v: 'nao_cobro', l: 'Eu não cobro' },
        { v: 'nao_sei', l: 'Eu não sei quanto cobrar' },
        { v: 'tenho', l: 'Eu tenho um valor definido' },
      ],
      reply: [
        'Se você travou aqui, não é falta de coragem. É <b>falta de referência</b>.',
        'Existe faixa de preço por região do país, e isso se aprende numa tarde.',
      ],
    },
    {
      id: 'objetivo',
      sys: 'A consulta terminou',
      scene: 'Última, e essa é sobre você de novo.',
      ask: 'Sinceramente: o que você quer com isso?',
      opts: [
        { v: 'casa', l: 'Cuidar da minha casa com segurança' },
        { v: 'atender', l: 'Atender e cobrar' },
        { v: 'nao_sei', l: 'Ainda não sei' },
      ],
      reply: ['Certo. Deixa eu fechar a conta.'],
    },
  ],
  result: {
    gaps: {
      queixaNaoPerguntou: 'As perguntas que vêm antes de escolher a planta',
      checagemNaoMuda: 'A checagem de segurança com quem toma remédio contínuo',
      precoNaoTem: 'A referência de quanto cobrar na sua região',
      fallback: 'O registro do atendimento: a ficha, campo por campo',
    },
    titleByPlan: {
      completo: 'Você quer atender.<br>E falta <em>menos do que parece</em>.',
      basico: 'Você quer cuidar dos seus.<br>E falta <em>menos do que parece</em>.',
      indefinido: 'Ainda em dúvida — e tudo bem.<br>Falta <em>menos do que parece</em>.',
    },
    voceJaTem: {
      heading: 'O que você já tem',
      items: ['As pessoas te procuram — e isso não se ensina', 'Você conhece as plantas mais usadas'],
    },
    oQueFalta: {
      heading: 'O que falta',
    },
    unlock: 'Você respondeu as cinco. Isso <b>libera uma condição</b> no fim da jornada que quem entra direto na página de preço não recebe.',
    nextCta: 'Ver por que isso é sério',
  },
} as const;

export const tela06 = {
  title: 'VITALLIA — Tela 6',
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
    midia: {
      tagNumber: '02',
      tagLabel: 'Prova que você vê',
      items: [
        { slot: 'slot · trecho de aula<br>45 a 60s, sem corte', caption: 'Uma aula inteira, do jeito que ela é. Sem edição de vitrine.' },
        { slot: 'slot · página real<br>caderno de 50 receitas', caption: 'Uma página do caderno: a queixa, o preparo, o modo de uso e quando não pode.' },
      ],
    },
    legal: {
      tagNumber: '03',
      tagLabel: 'De onde vem o conteúdo',
      paragraphs: [
        'O curso de fitoterapia é montado em cima do <b>Memento Fitoterápico da Farmacopeia Brasileira</b> (Anvisa) e da lista <b>RENISUS</b> do Ministério da Saúde — os mesmos documentos que a rede pública usa. <a href="#" id="src">ver as fontes</a>',
        'O certificado é amparado na <b>Lei de Diretrizes e Bases (Lei 9.394/96)</b> e no <b>Decreto 5.154/2004</b>, com carga horária discriminada e código de validação.',
        'A VITALLIA é curso livre particular e <b>não tem vínculo</b> com o Ministério da Saúde, com a Anvisa ou com o SUS.',
      ],
    },
  },
  truth: {
    heading: 'E a parte que ninguém te conta',
    paragraphs: [
      'Terapia natural não é profissão regulamentada no Brasil. Não existe conselho criado por lei, como CRM ou CREA.',
      'Por isso <b>nenhum curso dá registro profissional</b> — nem este, nem o de R$ 3.000. E nenhum curso livre é reconhecido pelo MEC, porque o MEC reconhece graduação, técnico e pós.',
      'O que existe é o certificado de conclusão de curso livre. É esse que você recebe, e é ele que os terapeutas do país inteiro usam. <b>Quem te prometer mais que isso está mentindo</b> — e agora você sabe reconhecer.',
    ],
  },
  pending: '<b>[PROVA NECESSÁRIA]</b> — depoimento em áudio de aluna, com autorização por escrito. Entra aqui, depois do bloco acima. Enquanto não existir, esta tela roda sem ele: prova de mecanismo é imune à objeção de "depoimento comprado", e prova fraca custa mais do que prova nenhuma.',
  cta: 'E o que muda pra mim?',
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

export const tela07 = {
  title: 'VITALLIA — Tela 7',
  bridge: {
    echo: '"Falta menos do que parece."',
    selected: 'Você passou por <b>seis telas</b> e respondeu as cinco perguntas. A maioria para na segunda. Isso já diz alguma coisa sobre você — e vale dizer uma coisa sobre o momento também.',
  },
  eyebrow: 'Dados públicos · Ministério da Saúde',
  headline: 'A procura existe.<br>E a rede pública <em>não dá conta</em>.',
  lede: 'Práticas integrativas não são modinha de internet. Estão na política nacional desde 2006 e cresceram todo ano desde então.',
  stats: [
    { label: 'Cidades do Brasil que já oferecem', count: 84, suffix: '%', delta: 'na rede pública' },
    { label: 'Atendimentos só pelo SUS em 2024', count: 9, suffix: ' mi', delta: 'e a fila não anda' },
  ],
  panel: {
    label: 'Atendimentos com práticas integrativas',
    sub: 'Rede pública · 2022 a 2024',
    numPrefix: '+70',
    numSuffix: '% em dois anos',
    badge: '+70%',
    axisFrom: '2022',
    axisTo: '2024',
    src: 'Fontes: Política Nacional de Práticas Integrativas e Complementares (PNPIC) e dados de atendimento do Ministério da Saúde, 2024 · <a href="#" id="src">ver a fonte</a><br>A VITALLIA é curso livre particular e não tem vínculo com o Ministério da Saúde, com a Anvisa ou com o SUS.',
  },
  honest: 'Agora o que esses números <b>não</b> dizem: eles não prometem que você vai ganhar dinheiro com isso. Não existe número aqui sobre faturamento de aluno, e não vai existir. <b>Isso mede a procura, não o seu resultado.</b> Conseguir cliente depende da sua cidade e do seu esforço — o que dá pra dizer é que tem gente procurando.',
  cta: 'Quero a segunda cena',
  legal: 'VITALLIA é curso livre de capacitação (Lei 9.394/96 · Decreto 5.154/2004). Não dá registro em conselho. Conteúdo educativo, não substitui consulta médica.',
} as const;

export const tela08 = {
  title: 'VITALLIA — Tela 8',
  echo: '"Tem gente procurando."',
  headline: 'Daqui a um ano você vai estar numa <em>dessas duas cenas</em>.',
  tabs: { t1: 'A cena de hoje', t2: 'A outra cena' },
  scenes: {
    1: {
      when: 'Agosto do ano que vem',
      cold: true,
      lines: [
        'Alguém te manda áudio perguntando de erva.',
        'Você responde no chute, de graça, torcendo pra não errar.',
        'E continua sem saber se podia ter respondido.',
      ],
    },
    2: {
      when: 'Agosto do ano que vem',
      cold: false,
      lines: [
        'Tem uma ficha preenchida em cima da sua mesa.',
        'Uma pessoa sentada na sua frente porque outra indicou.',
        'Você sabe o que perguntar, sabe o que checar — e sabe o que responder quando ela pergunta o preço.',
      ],
    },
  },
  closeInitial: 'A diferença entre as duas não é talento. Toca na outra cena.',
  closeAfterFlip: 'A diferença entre as duas não é talento. <b>É uma ordem e um caderno.</b>',
  cta: 'Como eu chego lá?',
  nudge: 'Veja a segunda cena para continuar',
  fine: 'VITALLIA é curso livre de capacitação (Lei 9.394/96 · Decreto 5.154/2004). Não dá registro em conselho. Nada aqui é promessa de renda.',
} as const;

export const tela09 = {
  title: 'VITALLIA — Tela 9',
  echo: '"É uma ordem e um caderno."',
  headline: 'O que muda não é o quanto você sabe.<br><em>É o que você consegue fazer com isso.</em>',
  lede: 'Mesma mulher, mesma cozinha, mesmas plantas. Seis diferenças.',
  pair: {
    cold: {
      title: 'Como é hoje',
      items: [
        'Responde no chute e torce pra não errar',
        'Não sabe se pode indicar pra quem toma remédio',
        'Receita guardada em print, caderno e memória',
        'Trava quando alguém senta na frente',
        'Faz de graça porque não sabe o que cobrar',
        'Sem nenhum papel no seu nome',
      ],
    },
    warm: {
      title: 'Como fica',
      items: [
        'Sabe o que perguntar antes de indicar',
        'Faz a checagem de segurança antes de qualquer coisa',
        'Tem 50 situações prontas, na ordem, pra imprimir',
        'Abre a ficha e conduz a conversa',
        'Tem a faixa de preço da sua região na mão',
        'Seis certificados com carga horária e código',
      ],
    },
  },
  editorial: {
    kicker: 'O que mudou',
    heading: 'As plantas são as mesmas de sempre. O que mudou foi o acesso.',
    shot: 'slot · foto real<br>caderno aberto, ficha e ervas sobre a mesa',
    paragraphs: [
      'Durante muito tempo, aprender isso direito exigia uma formação longa e cara — ou catar informação solta na internet e torcer.',
      'Hoje dá pra montar a trilha inteira organizada, com material impresso, ficha de atendimento e certificado, <b>sem passar por uma faculdade que nunca existiu pra essa área</b>. É por isso que dá pra começar agora, do celular, em vinte minutos por dia.',
    ],
  },
  priceCard: {
    tag: 'Por que o acesso é cobrado?',
    heading: 'Aula, material e certificado custam dinheiro todo mês.',
    paragraphs: [
      'Gravar e hospedar as aulas, produzir os cinco materiais e manter o sistema que emite e valida cada certificado tem custo fixo. Não é caro. Mas não é de graça.',
      '<b>Prefiro te avisar agora do que te deixar descobrir no susto.</b>',
    ],
  },
  condicaoCard: {
    feita: {
      tag: 'Condição de conclusão',
      heading: 'Você respondeu as cinco. Isso libera uma condição.',
      paragraphs: ['Quem entra direto na página de preço não passa por aqui — e não recebe.', '<b>No próximo passo você libera.</b>'],
      ctaAdvance: 'Ver minha condição',
    },
    naoFeita: {
      tag: 'Condição de conclusão',
      heading: 'Essa condição é de quem respondeu as cinco perguntas.',
      paragraphs: ['Você pulou a simulação, então ela não está liberada — e não vou fingir que está.', '<b>Leva dois minutos, e depois você volta exatamente aqui.</b>'],
      ctaBack: 'Fazer as cinco perguntas',
      ctaAdvance: 'Seguir sem a condição',
    },
  },
  fine: 'VITALLIA é curso livre de capacitação (Lei 9.394/96 · Decreto 5.154/2004). Não dá registro em conselho. Nada aqui é promessa de renda.',
  // 'desconto' exige R$ 67 e R$ 19,90 praticados de verdade na página avulsa.
  // 'material' não mexe em preço — libera um material real. Vale para 9, 10, 11 e 12.
  condicao: 'material' as 'material' | 'desconto',
} as const;

export const tela10 = {
  title: 'VITALLIA — Tela 10',
  paleta: 'lima' as 'lima' | 'ouro',
  condicao: 'material' as 'material' | 'desconto',
  janelaHoras: 24,
  head: {
    titleDefault: 'Libere<br>sua condição',
    titleNaoFeita: 'Essa condição<br>não é sua ainda',
    subFeita: 'Você respondeu as cinco perguntas e chegou até aqui.<br><b>Quem entra direto no preço não passa por isso.</b>',
    subNaoFeita: 'Ela é de quem respondeu as cinco perguntas. Você pulou — e eu não vou fingir que não.',
  },
  card: {
    frontLabel: 'Condição<br>de conclusão',
    frontTiny: 'Só de quem respondeu<br>as cinco perguntas',
  },
  go: {
    default: 'Liberar minha condição',
    naoFeita: 'Fazer as cinco perguntas',
    resgatado: 'Ver o que eu recebo',
  },
  revealByCondicao: {
    desconto: '<p class="big">45%<small>de desconto no plano completo</small></p><p class="body">De <b>R$ 67</b> por <b>R$ 37</b>.<br>No plano básico, de R$ 19,90 por R$ 9,90.</p>',
    material: '<p class="big">Fichas<small>de atendimento liberadas</small></p><p class="body">Ficha da primeira conversa, autorização, acompanhamento e plano de cuidado — todas editáveis.<br><b>Não estão na oferta avulsa.</b></p>',
  },
  afterRedeem: {
    title: 'Condição<br>liberada',
    sub: 'Esse código é só seu e já vai aplicado no checkout.',
  },
  fine: 'VITALLIA é curso livre (Lei 9.394/96 · Decreto 5.154/2004). Não dá registro em conselho. Nada aqui é promessa de renda.',
} as const;

export const tela11 = {
  title: 'VITALLIA — Tela 11',
  shotCaption: 'É isto que estava por trás da ordem.',
  headline: 'Seis passos.<br><em>Cada um com certificado próprio.</em>',
  lede: 'Isso é a VITALLIA. Não é um combo de cursos soltos — é a sequência inteira, na ordem em que a decisão acontece.',
  ledeBasico: 'Isso é a VITALLIA inteira. Você disse que quer cuidar da sua casa — os dois primeiros passos já resolvem isso, e os outros quatro ficam aí se um dia você quiser atender.',
  rewardComMarcados: 'Você chegou até aqui e respondeu as cinco. <b>Dois desses seis passos são exatamente o que faltou pra você</b> — estão marcados.',
  rewardSemMarcados: 'Você chegou até aqui e respondeu as cinco. <b>Isso é o que estava por trás da ordem.</b>',
  passos: [
    {
      n: 1,
      t: 'Fitoterapia e Plantas Medicinais',
      d: 'O que cada planta faz, como preparar, por quantos dias — e quando não pode: gestante, pressão alta, quem toma remédio contínuo.',
      resolve: 'checagem',
      why: 'Aqui está a checagem que faltou pra você',
    },
    {
      n: 2,
      t: 'Tintura Medicinal',
      d: 'Transformar planta em produto que dura meses: álcool, proporção, maceração, filtragem, envase e validade.',
    },
    {
      n: 3,
      t: 'Aromaterapia e Óleos Essenciais',
      d: 'Quais óleos, como usar, e a diluição segura pra criança, gestante e pele sensível.',
    },
    {
      n: 4,
      t: 'Saboaria Terapêutica',
      d: 'Sabonete natural do zero, com receitas, embalagem e como vender — o produto que não depende de cliente marcado.',
    },
    {
      n: 5,
      t: 'Introdução à Homeopatia',
      d: 'De onde veio, o que é dinamização, o que a homeopatia é e o que ela não é — e quando o caso não é seu.',
    },
    {
      n: 6,
      t: 'Atendimento e Primeiro Cliente',
      d: 'A ficha campo por campo, as perguntas da primeira conversa, quanto cobrar, como se formalizar como MEI e onde achar os primeiros.',
      resolve: 'conducao',
      why: 'Aqui estão as perguntas e o preço que faltaram',
    },
  ],
  more: {
    heading: 'E vem junto',
    items: [
      { b: '6 certificados no seu nome', span: '120 horas no total, com carga horária discriminada, código e QR de validação' },
      { b: '5 materiais pra usar na frente do cliente', span: 'Caderno de 50 receitas, fichas de atendimento, guia de 100 plantas, tabela de diluição e kit primeiro cliente' },
      { b: 'Aulas de 6 a 12 minutos, no celular', span: 'Vinte minutos por dia dão conta. Some duas semanas e não perde nada' },
      { b: 'Acesso pra sempre', span: 'Paga uma vez. Não tem mensalidade e não tem prazo pra terminar' },
    ],
  },
  cta: 'Ver as duas formas de entrar',
  fine: 'VITALLIA é curso livre de capacitação (Lei 9.394/96 · Decreto 5.154/2004). Não é graduação, técnico ou pós, e não dá registro em conselho. Conteúdo educativo, não substitui consulta médica.',
} as const;

export const tela12 = {
  title: 'VITALLIA — Tela 12',
  titleDefault: 'Qual das duas <em>é você?</em>',
  ledeDefault: 'A escolha não é quanto gastar. É o que você vai poder fazer depois.',
  titleByPlan: {
    basico: 'Você disse que quer <em>cuidar dos seus</em>.',
    completo: 'Você disse que quer <em>atender e cobrar</em>.',
  },
  ledeByPlan: {
    basico: 'Deixei o plano que corresponde a isso em destaque. O outro fica aqui do lado, caso você mude de ideia.',
    completo: 'Só um dos dois planos faz isso. Deixei ele em destaque.',
  },
  strip: { label: 'Condição aplicada' },
  plans: {
    basico: {
      badge: 'pelo que você respondeu',
      who: 'Pra cuidar da minha casa',
      heading: 'Você aprende a cuidar dos seus com segurança.',
      priceNow: 'R$ 9,90',
      priceWas: 'R$ 19,90',
      priceOnce: 'paga uma vez',
      includes: ['Fitoterapia e Tintura Medicinal', '2 certificados · 40 horas', 'Acesso pra sempre'],
      excludes: ['Não inclui nada sobre atender, cobrar ou conseguir cliente', 'Não inclui a ficha nem os 5 materiais'],
      button: 'Entrar por R$ 9,90',
      pay: 'Cartão, Pix ou boleto · acesso na hora',
    },
    completo: {
      badge: 'pelo que você respondeu',
      who: 'Pra atender outra pessoa',
      heading: 'Você aprende a conduzir um atendimento inteiro — e a cobrar por ele.',
      priceNow: 'R$ 37',
      priceWas: 'R$ 67',
      priceOnce: 'paga uma vez',
      includes: [
        'Os seis passos completos',
        '6 certificados · 120 horas · com código de validação',
        'A ficha de atendimento e a tabela de preço por região',
        'Os 5 materiais para usar na frente do cliente',
        'Acesso pra sempre',
      ],
      excludes: [] as string[],
      button: 'Quero atender',
      pay: 'Cartão, Pix ou boleto · acesso na hora',
    },
  },
  objections: [
    {
      h4: '"R$ 9,90 deve ser fraquinho."',
      p: 'Gravar uma aula pra cem ou pra dez mil pessoas custa a mesma coisa. Prefiro vender barato pra muita gente do que caro pra pouca — e você tem 7 dias pra entrar, olhar tudo e pedir o dinheiro de volta se achar que menti.',
    },
    {
      h4: '"Já comprei curso barato e não assisti."',
      p: 'Acontece com todo mundo. Por isso cada aula termina com uma coisa pra você fazer no mesmo dia — não é teoria pra acumular, é receita pra usar.',
    },
  ],
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
      q: 'Como eu entro depois que pago?',
      a: 'A Hotmart manda o acesso no seu e-mail assim que o pagamento é confirmado. No cartão e no Pix é na hora; no boleto, quando compensar.',
    },
    {
      q: 'Por quanto tempo eu tenho acesso?',
      a: 'Pra sempre. Não é assinatura e não renova. Você paga uma vez e o acesso fica — some duas semanas, um mês, e não perde nada.',
    },
    {
      q: 'Serve pra quem nunca estudou isso?',
      a: 'O curso começa supondo que você não sabe nada, em português, sem palavra difícil. As aulas têm de 6 a 12 minutos e cada uma termina com uma coisa pra fazer no mesmo dia.',
    },
  ],
  help: 'Falar com alguém antes de decidir',
  fine: 'VITALLIA é curso livre de capacitação, nos termos da Lei 9.394/96 e do Decreto 5.154/2004, e emite certificado de conclusão de curso livre. Não é graduação, curso técnico nem pós-graduação, e não dá registro em conselho profissional. Sem vínculo com o MEC, o Ministério da Saúde, a Anvisa ou o SUS.<br><br>O conteúdo é educativo e não substitui consulta, diagnóstico ou tratamento médico. Nada do que é ensinado aqui trata ou cura doença. Nunca pare um remédio ou tratamento sem falar com seu médico. Nada nesta página é promessa de renda.',
  // Config de negócio — precisa dos links reais da Hotmart antes de publicar (ver comentário no componente).
  condicao: 'material' as 'material' | 'desconto',
  checkout: {
    basico: 'https://pay.hotmart.com/SEU_LINK_BASICO',
    completo: 'https://pay.hotmart.com/SEU_LINK_COMPLETO',
  },
  parcela: null as string | null,
  contato: null as string | null,
} as const;
