# VITALLIA — REVISÃO V2

Brief de execução. Substitui a arquitetura de 12 telas por uma de **9 telas + downsell**.

Leia este arquivo inteiro antes de escrever qualquer código. Ele descreve **o quê** e **por quê**; as decisões marcadas com ⛔ não podem ser revertidas por conta própria.

---

## 0. POR QUE ESTAMOS MUDANDO

A v1 foi construída como funil de **mudança de crença**: dez telas convencendo a leitora de que ela aprendeu na ordem errada, com o produto revelado só na tela 11.

O diagnóstico que derrubou isso: **a compradora já quer comprar um curso**. A própria copy antiga registra que ela pesquisou formação, viu R$ 1.800 e R$ 3.000, e fechou a aba. O bloqueio nunca foi crença — foi preço. Construímos trabalho de persuasão que ela não precisava, e pagamos com clareza.

A v2 inverte: **o produto aparece cedo**, o quiz vira qualificação e personalização (não investigação), e o mecanismo vira diferencial (não tese).

O que **não** muda: nada de escassez falsa, nada de alegação de renda, nada de depoimento inventado, nada de promessa de registro profissional.

---

## 1. ARQUITETURA NOVA

| # | Rota | Tela | Trabalho |
|---|---|---|---|
| 1 | `/` | Gancho + produto nomeado | Identificação e entrada no quiz |
| 2 | `/2-diagnostico` | O diagnóstico (chat, 5 perguntas) | Qualificar, personalizar, criar micro-compromisso |
| 3 | `/3-resultado` | Resultado personalizado | "Isso foi montado pro que eu quero" |
| 4 | `/4-formacao` | **O produto** | Responder "o que eu compro?" |
| 5 | `/5-diferencial` | Método + camada de segurança | Por que não é seis cursos soltos |
| 6 | `/6-recebe` | Empilhamento de substância | Valor percebido |
| 7 | `/7-prova` | Validador, aula, material | Confiança auditável |
| 8 | `/8-condicao` | Cupom 62% | Preço como ganho conquistado |
| 9 | `/9-oferta` | Preço, garantia, FAQ | Conversão |
| — | `/downsell` | Plano de entrada R$ 9,90 | Recuperar abandono |
| — | `/2b-video` | VSL (opcional, fora do fluxo) | Variante de teste |

**Reaproveitamento dos arquivos atuais** (em `referencia/`):

| Nova | Vem de | Grau |
|---|---|---|
| 1 | tela-01-a-pergunta-v2 | Mantém estrutura e slider, **troca a copy** |
| 2 | tela-05-a-simulacao-chat | Mantém motor, **troca as 5 perguntas** |
| 3 | tela-05 (bloco de resultado) | Expande |
| 4 | tela-11 | **Sobe de posição**, ganha peso |
| 5 | tela-04 (acordeão) | Comprime para um bloco |
| 6 | tela-09 (contraste) + tela-11 (materiais) | Funde |
| 7 | tela-06 | Mantém quase inteira, tira o bloco do MEC |
| 8 | tela-10 | Mantém a mecânica, troca o conteúdo revelado |
| 9 | tela-12 | Um plano só, FAQ ampliado |
| downsell | — | Nova |

**Some do fluxo:** tela-02 (vira `/2b-video`), tela-03, tela-07, tela-08. Não delete os arquivos — mova para `referencia/v1-descontinuadas/`.

---

## 2. COPY DAS TELAS

### TELA 1 — `/`

```
[pílula topo]  ● 71 plantas medicinais estão na lista oficial do SUS

HEADLINE
Você já é a pessoa
a quem todo mundo pergunta.
Falta a formação.

SUB
Fitoterapia, Tintura Medicinal, Aromaterapia, Saboaria, Homeopatia
e Atendimento — seis formações em um acesso só.

CORPO
Responde 5 perguntas e eu te mostro por onde começar,
quanto se cobra na sua região, e o que a formação inclui.

[slider]  Começar o diagnóstico
[micro]   3 minutos · sem cadastro · sem e-mail
```

Mantém: o slider de arrastar, o `cta_touch`, o empurrãozinho no clique simples, ausência de barra de progresso.

**Variante B para teste** (guardar em `funnel-angle.ts`, não usar de largada): a headline da cena de medo — "Você indica uma planta. A pessoa toma remédio todo dia. E agora?" — com a mesma sub e o mesmo CTA.

---

### TELA 2 — `/2-diagnostico`

Formato de conversa (o mesmo motor do `tela-05-a-simulacao-chat`), barra superior honesta, sem avatar, sem "digitando", sem caixa de mensagem falsa. Horário real por balão.

**Abertura**
```
Antes de te mostrar a formação, cinco perguntas.
Elas mudam o que você vai ver depois — inclusive o valor
de referência de consulta na sua região.
[chip]  Pode começar
```

**Q1 — interesse** · `id: interesse`
> O que mais te puxou pra terapias naturais?
- As plantas e os preparos → `plantas`
- Os óleos essenciais → `oleos`
- Fazer sabonete e produto natural → `produtos`
- Cuidar da minha família → `familia`
- Atender outras pessoas → `atender`

*Devolutiva:* "Anotado. Isso já indica por onde a sua trilha começa."

**Q2 — nível** · `id: nivel`
> Quanto você já sabe hoje?
- Começando do zero → `zero`
- Já vejo conteúdo sobre isso → `conteudo`
- Já uso algumas plantas em casa → `uso`
- Já preparo e dou pros outros → `preparo`
- Já atendo alguém → `atendo`

*Devolutiva:* "A formação começa supondo que você não sabe nada — e vai até a parte de atender e cobrar. Você entra no ponto que já está."

**⚠️ Momento de conteúdo** (não é pergunta, é um balão só — reenquadramento da antiga revelação de segurança):
```
[balão destacado]
Uma coisa que quase nenhum vídeo mostra: antes de indicar
qualquer planta, o primeiro filtro é saber se a pessoa toma
remédio contínuo. Existem interações, e isso muda a indicação.

Está na primeira formação, e é o que separa dar um chá
de conduzir um atendimento.
```
⛔ Reenquadrado de propósito. Na v1 isso acusava a leitora ("você não sabia"). Agora é informação sobre o produto. Mesma força, sem custo emocional.

**Q3 — objetivo** · `id: objetivo`
> O que você quer fazer com isso?
- Cuidar da minha casa com segurança → `casa`
- Aprender de verdade, sem depender de vídeo solto → `aprender`
- Atender pessoas e cobrar → `atender`
- Fazer e vender produtos naturais → `produtos`
- Tudo isso → `tudo`

**Q4 — áreas** · `id: areas` · **múltipla escolha**
> Quais áreas te interessam? Pode marcar mais de uma.
- Fitoterapia e Plantas Medicinais → `fito`
- Tintura Medicinal → `tintura`
- Aromaterapia e Óleos Essenciais → `aroma`
- Saboaria Natural → `saboaria`
- Homeopatia Integrativa → `homeo`
- Atendimento e primeiro cliente → `atendimento`

⛔ Esta é a pergunta mais importante do quiz. Ela faz a leitora **montar os próprios módulos**, e é o que justifica a formação completa em vez de um curso isolado. Múltipla escolha, mínimo 1.

*Devolutiva:* se marcou 3+: "Você marcou [n] áreas. Curso isolado não resolve isso." Se marcou 1–2: "Certo. Mas repara que [área complementar] entra junto sem custo a mais."

**Q5 — renda desejada** · `id: renda`
> Quanto uma renda a mais por mês mudaria a sua vida hoje?
- R$ 300 a R$ 500 → `300`
- R$ 500 a R$ 1.000 → `500`
- R$ 1.000 a R$ 2.000 → `1000`
- Mais que isso → `2000`

⛔ **O número é dela, não nosso.** Esta pergunta existe para que a tela 3 possa fazer aritmética com um valor que a própria leitora escolheu. Em nenhum momento o funil afirma que ela vai atingir esse valor. A devolutiva aqui é neutra: "Anotado. Já já eu te mostro o que isso significa em atendimentos."

**Q6 — estado** · `id: uf` · seletor de UF
> Última: de que estado você é?

*Devolutiva:* usa a faixa regional REAL da tabela do Kit Primeiro Cliente.
```
No [Nordeste/Sudeste/Sul/Norte/Centro-Oeste], a faixa de referência
para uma primeira consulta é de [X] a [Y].

Essa tabela vem completa na formação, com valores de consulta,
retorno e pacote por região.
```

⛔ **NÃO** exibir "vagas limitadas para o seu estado", contador regional, ou qualquer número de estoque por UF. Curso digital não tem estoque; seria número inventado. O estado existe aqui por um motivo real: a tabela de preço regional é conteúdo do produto.

Se os valores por região ainda não estiverem definidos, exiba apenas: "Na formação tem tabela de preço por região, com valores de consulta, retorno e pacote." — e deixe `FAIXA_REGIONAL = null` no config.

**Estado gravado em `vt_sim`:**
```ts
{ answers: {interesse, nivel, objetivo, areas: string[], uf},
  perfil, regiao, completed_at }
```

---

### TELA 3 — `/3-resultado`

Perfil derivado de `objetivo`:

| objetivo | perfil |
|---|---|
| `casa` | Cuidadora da casa |
| `aprender` | Estudante das plantas |
| `atender` | Terapeuta em formação |
| `produtos` | Artesã de produtos naturais |
| `tudo` | Formação completa |

```
Seu perfil: [PERFIL]

VOCÊ MARCOU
[chips com as áreas escolhidas]

SEU PONTO DE PARTIDA
[frase derivada do nível]

NA SUA REGIÃO
Primeira consulta: faixa de [X] a [Y]  ← só se FAIXA_REGIONAL existir

A CONTA QUE VOCÊ MESMA FEZ  ← ramifica pelo que ela marcou na Q4

⛔ **Ramificação obrigatória.** Quem marcou saboaria/tintura quer ser empreendedora com marca
própria, não terapeuta — preço de consulta é irrelevante para ela. Quem marcou
atendimento/fitoterapia quer cobrar consulta. Mostrar a conta errada perde a leitora.

  [saboaria ou tintura]
  Um sabonete artesanal de 90g sai por cerca de R$ [CUSTO] de matéria-prima.
  Sabonetes desse tipo são vendidos entre R$ [MIN] e R$ [MAX].
  Você disse que R$ [renda] fariam diferença no seu mês.
  Isso seria [N] sabonetes. [comparação: "um lote e meio"]

  [atendimento ou fitoterapia]
  No [regiao], a faixa de referência de primeira consulta é de R$ [X] a R$ [Y].
  Você disse que R$ [renda] fariam diferença no seu mês.
  Isso seria [N] atendimentos no mês. [comparação: "menos de um por semana"]

  [marcou os dois] → as duas contas, lado a lado

Fecho comum às duas:
  Quantos você vai conseguir depende da sua cidade e do seu esforço.
  O que a formação te dá é a receita, a embalagem, o roteiro do que postar
  e o que responder quando perguntarem quanto custa.

⛔ A conta é sempre **divisão de um número que ela escolheu** por um valor de mercado
verificável. Em nenhum ponto o funil afirma que ela vai atingir o valor. Sem
`MARGEM_PRODUTO` ou `FAIXA_REGIONAL` preenchidos, o bloco não renderiza.

AS QUE VÊM JUNTO  ← sempre exibir TODAS as áreas não marcadas

⛔ Nunca dizer que a escolha dela é insuficiente ou errada. Ela declarou o que quer há
trinta segundos; contradizer desfaz a identificação que o quiz acabou de construir.
O argumento é **"você não precisa escolher"**, não "você escolheu pouco".

⛔ Não liste como adição ("e ainda tem mais quatro"). Cada área não marcada recebe uma
linha que **depende do que ela marcou** — combinação, não catálogo. É assim que o
produto realmente funciona, então a frase é verdadeira além de persuasiva.

MATRIZ (linha exibida conforme o que foi marcado na Q4):

| Área extra | Marcou atendimento/fito | Marcou saboaria/tintura | Padrão |
|---|---|---|---|
| Saboaria | A pessoa que você atendeu sai com um produto seu na mão. Mesmo cliente, segunda receita | — | Não depende de cliente marcado |
| Atendimento | — | Quem compra seu produto pergunta o que usar — e aí você cobra pela orientação também | Transforma o que você sabe em atividade |
| Fitoterapia | É a base de qualquer indicação segura | Te deixa explicar por que o seu é diferente do da prateleira — e é o que faz vender mais caro | A base de tudo |
| Tintura | Você não só indica: entrega o preparo pronto | Mesma bancada, mesmos frascos. Um lote de trabalho, dois produtos | Um lote dura meses |
| Aromaterapia | É o que a pessoa sente na hora, e o que mais gera indicação | É o que dá cheiro e função ao seu produto | Efeito percebido rápido |
| Homeopatia | Base de conhecimento: conversar sobre o assunto sem falar besteira e saber quando o caso não é seu. **Não é rota de venda** | idem | idem |

⛔ A linha da homeopatia continua negando que seja rota de renda, mesmo aqui. Quando
cinco linhas afirmam e uma nega, as cinco ficam mais críveis.

FECHO (sempre):
  Você marcou [áreas]. Isso já é uma fonte.
  Mas fonte única depende de uma coisa dar certo: [conseguir cliente / vender volume].
  Tem mês que anda, tem mês que não.
  Quem trabalha com duas frentes tem uma segurando a outra.
  E as seis vêm no mesmo acesso — você não precisa escolher.

[se marcou 3+ áreas]
Você marcou [n] áreas diferentes. Comprar quatro cursos separados
custaria mais de R$ 400 e te daria quatro conteúdos que não
conversam entre si.

Foi por isso que a VITALLIA foi montada como formação única.

[botão]  Ver a formação
```

---

### TELA 4 — `/4-formacao` — **O PRODUTO**

```
Formação VITALLIA em Terapias Naturais
Seis formações em um acesso só

100% online · acesso vitalício · certificado em cada uma
```

Seis cards. **As áreas que ela marcou na Q4 vêm com selo "você marcou esta"** e aparecem primeiro na ordem.

Cada card em linguagem de resultado, não de conteúdo:

1. **Fitoterapia e Plantas Medicinais** — as plantas mais usadas no Brasil, o que cada uma faz, por quantos dias, em que quantidade, e quando não pode: gestante, pressão alta, quem toma remédio contínuo.
2. **Tintura Medicinal** — transformar planta em um produto que dura meses: álcool, proporção, maceração, filtragem, envase e validade.
3. **Aromaterapia e Óleos Essenciais** — a diluição certa para criança, gestante e pele sensível, e as misturas para os pedidos mais comuns.
4. **Saboaria Natural** — o produto que você vende sem depender de cliente marcado: receitas, segurança, embalagem e venda.
5. **Homeopatia Integrativa** — entender o assunto para saber conversar sobre ele, e reconhecer quando o caso não é seu.
6. **Atendimento e Primeiro Cliente** — a ficha campo por campo, as perguntas da primeira conversa, quanto cobrar por região, como se formalizar como MEI.

Fecho: "Ao concluir cada uma, você recebe o certificado correspondente."

⛔ O certificado é **consequência**, não argumento principal. Não abra a tela com "6 certificados".

**ROTA DE RENDA POR ÁREA** — cada card leva uma linha curta dizendo *como* aquela área vira dinheiro. Não afirme que todas dão renda; diga de que forma cada uma dá.

| Área | Linha |
|---|---|
| Saboaria | Vende o produto — não depende de cliente marcado. É a rota mais rápida |
| Tintura | Um lote dura meses e você vende ao longo do tempo |
| Fitoterapia | A base do atendimento cobrado |
| Atendimento | Onde está a tabela de preço por região e o roteiro de primeiro cliente |
| Aromaterapia | A pessoa sente na hora — é o que mais gera indicação |
| Homeopatia | Base de conhecimento, amplia o que você conversa. **Não é rota de venda** |

⛔ A linha da homeopatia diz explicitamente que ela **não** é rota de renda. Isso não enfraquece a oferta — fortalece as outras cinco. Promessa uniforme ("todas dão dinheiro") derruba o crédito do conjunto, porque a leitora abre a lista e confere.

⛔ Nenhuma linha cita valor, faixa de faturamento ou tempo para o primeiro resultado.

---

### TELA 5 — `/5-diferencial`

```
E não são seis cursos soltos.

[3 colunas comprimidas — herda o acordeão da tela 4 v1]
  Vídeo e PDF de graça  ·  Formação de R$ 1.800 a R$ 3.000  ·  A ordem
  (mesma última linha nas três: "quando alguém senta na sua frente")

MÉTODO DA PRIMEIRA FICHA
As seis formações seguem a ordem em que a decisão acontece:
o que perguntar → o que checar → o que indicar → como preparar
→ como registrar → quanto cobrar.

O QUE QUASE NENHUM CURSO ENSINA
Quando NÃO usar. Contraindicação, dose, tempo de uso e interação
com medicamento contínuo. É conteúdo que não viraliza, então quase
ninguém produz — e é o primeiro filtro de qualquer atendimento.
```

⛔ Zero adjetivo acusatório contra formação paga. Os atributos são todos verificáveis. "O mesmo tipo de certificado" já é suficiente.

---

### TELA 6 — `/6-recebe` — EMPILHAMENTO

⛔ **Empilhamento de substância, não de preço.** Nada de "Fitoterapia R$ 97, Aromaterapia R$ 97, total R$ 600". Esses preços nunca foram praticados; seria a mesma âncora fabricada que tiramos da página antiga.

```
O que entra no seu acesso

A FORMAÇÃO
6 formações · 120 horas · 6 certificados com código de validação

OS MATERIAIS
100 plantas com nome científico, preparo e contraindicação
50 preparos prontos para imprimir
Fichas de atendimento editáveis (primeira conversa, autorização, acompanhamento)
Tabela de diluição para criança, gestante e pele sensível
Tabela de preço por região do país
Kit Primeiro Cliente: 30 posts prontos, texto de bio, script de WhatsApp

COMO FUNCIONA
Aulas de 6 a 12 minutos · celular, computador ou TV · acesso pra sempre

O QUE ISSO CUSTA POR ÁREA
6 formações · 120 horas · R$ 37

R$ 6,17 por formação
R$ 0,31 por hora de aula

Formações combo com esse número de áreas custam
entre R$ [MIN] e R$ [MAX] no mercado.
```

⛔ **Divisão, não contagem.** O concorrente tem 5 cursos e 20 bônus — numa disputa de
quantidade nós perdemos, e ainda reforçamos o "barato demais, deve ser fraco". A divisão
resolve pelo avesso: não é barato, é custo diluído em seis áreas. E é aritmética que ela
confere sozinha.

⛔ A faixa de mercado precisa de lastro: 10 a 15 prints datados de páginas concorrentes com
preço visível, guardados. Sem os prints, `FAIXA_MERCADO = null` e o parágrafo não renderiza.

⛔ **Nunca nomeie concorrente.** Publicidade comparativa é legal, mas nomear convida resposta
e não traz retorno. Faixa de mercado dá o mesmo efeito com zero exposição.

Números contáveis e verdadeiros impressionam mais que valores inventados nessa compradora — ela já fechou a aba de um curso de R$ 3.000 e tem detector de exagero calibrado.

**BLOCO DE CENA — só aparece para quem marcou saboaria ou tintura na Q4**

Boa parte dessa compradora não quer atender ninguém: quer ter marca própria. A oferta precisa mostrar a cena de negócio, não só a lista de conteúdo.

```
Você faz o lote no domingo. Embala, tira foto na luz da janela,
posta com a legenda que já vem pronta. A vizinha pergunta o preço,
e dessa vez você tem resposta.

No mês seguinte tem nome, tem rótulo, tem gente pedindo de novo.
Deixou de ser presente e virou produto.
```

E logo abaixo, o que a formação entrega para isso — tudo verificável no produto:
receitas que dão produto vendável · embalagem e caixa de presente (curso 4) ·
30 posts prontos, texto de bio e script de WhatsApp para quando perguntarem o preço ·
como se formalizar como MEI · a margem por produto, para saber se vale

⛔ A cena descreve **atividade**, não resultado financeiro. Nenhuma frase afirma
quanto ela vai vender ou ganhar.

---

### TELA 7 — `/7-prova`

Herda `tela-06-isso-e-serio` quase inteira, com duas mudanças:

1. **O bloco longo sobre MEC/conselho sai daqui** e vai para o FAQ da tela 9. Fica só uma linha: "Certificado de conclusão de curso livre, previsto na LDB, com carga horária e código."
2. Ordem: validador ao vivo → trecho de aula → página do caderno → base legal curta.

⛔ O validador vem primeiro: é a única prova que **ela executa**. Prova que o leitor executa vale mais que prova que ele lê.

**CERTIFICADO — a peça fica aqui, colada ao validador.**

Imagem de certificado sozinha não prova nada: qualquer um monta uma, e essa compradora já viu dezenas. Imagem **mais** validador funcionando é prova. Um confirma o outro. Por isso a peça não vai na tela 4 (lá é só a frase de consequência) nem na 6 (lá é uma linha no empilhamento).

O que deve estar na peça: nome completo · nome da formação · carga horária discriminada · data · código com QR · assinatura · a linha "certificado de conclusão de curso livre, nos termos da Lei 9.394/96 e do Decreto 5.154/2004".

⛔ O que **não** entra no desenho: brasão, laurel, escudo, fita, selo de associação, ou qualquer elemento que imite documento oficial. Certificado que parece diploma faz a afirmação de oficialidade visualmente, e aí o texto honesto não salva.

**PROVA SOCIAL — regra de seleção**

⛔ Priorize **prova de atividade** sobre prova de valor. O desejo dominante desta compradora é legitimidade, não riqueza. "Faturei R$ 4.000" lê como exceção e afasta; "atendi minha primeira pessoa e cobrei" lê como imitável e aproxima.

Ordem de força:
1. A primeira ficha preenchida, com a aluna contando como foi
2. O primeiro atendimento cobrado
3. O primeiro lote de produto vendido
4. A tintura pronta no vidro (mais fácil de obter, quase tão forte)
5. O certificado impresso

Se a aluna citar valor espontaneamente: mantenha na fala dela, **nunca no título**, nunca em número grande, e com "resultado individual, depende de cidade, esforço e alcance" ao lado. ⛔ Nunca agregar ("nossas alunas faturam X") — aí vira claim nosso, não dela.

Distribuição: **tela 3** um depoimento casado com o perfil dela (quem respondeu `atender` vê quem atendeu; quem respondeu `casa` vê quem faz para a família) · **tela 7** o bloco principal · **tela 9** um só, curto, ao lado do preço. Nunca antes da tela 3.

`[PROVA NECESSÁRIA]` até existir. A tela roda sem — prova de mecanismo é imune à objeção de "depoimento comprado", e depoimento fraco custa mais que depoimento nenhum.

---

### TELA 8 — `/8-condicao` — O CUPOM

Mantém a mecânica inteira do `tela-10-a-condicao`: paleta lime, cartão girando 1080°, som de prêmio sintetizado, confete canvas, botão de mudo, `prefers-reduced-motion`.

**Muda o que é revelado:**

```
[antes do clique]
Você respondeu as cinco.
Isso libera uma condição.

Quem entra direto na página de preço não passa por aqui.

[botão]  Liberar minha condição

[depois — cartão vira]
      62% OFF
  de R$ 97 por R$ 37

  [código de barras]
   VTL04827193

[micro]  vale por 23:47:12 · esse código já vai aplicado no checkout
```

⛔ **Sem link para a página avulsa nesta tela.** Link no pico emocional é vazamento. A verificação vai para o FAQ da tela 9, onde o clique é ato deliberado de quem desconfia.

⛔ **Sem contador de vagas, sem número por estado, sem "restam N".**

**Pré-requisito operacional:** R$ 97 precisa ser o preço real da formação completa na `ofertaai.shop`, praticado e mantido. Sem isso, o desconto é fictício e a tela inteira vira encenação.

Grava em `vt_cond`: `{ code, tipo:'desconto', pct:62, de:97, por:37, resgatado_em, expira_em }`.

---

### TELA 9 — `/9-oferta`

**Um card só.** Sem comparação, sem "qual das duas é você".

```
[faixa]  Condição aplicada · VTL04827193 · 23:47:12

Formação VITALLIA em Terapias Naturais

R$ 37    ~~R$ 97~~
pagamento único · acesso pra sempre

✓ As 6 formações completas
✓ 6 certificados · 120 horas · com código de validação
✓ Todos os materiais e as fichas de atendimento
✓ Tabela de preço por região
✓ Acesso pra sempre, pelo celular

[botão]  Quero a formação completa
[micro]  Cartão, Pix ou boleto · acesso na hora
```

**Selos** (3): acesso na hora · pagamento pela Hotmart · acesso pra sempre.

**COMPARAÇÃO — colada ao preço, nunca antes**

Tabela de duas colunas: "Formações desse tipo" × "VITALLIA". Só linhas que você consegue
sustentar com print datado ou com o próprio produto.

| | Por aí | Aqui |
|---|---|---|
| Áreas incluídas | 3 a 5 | **6** |
| Ensina quando **não** usar | raro | em todas as formações |
| Ficha de atendimento pronta | não | incluída |
| Certificado com código que valida online | varia | sim |
| Preço | R$ [MIN] a R$ [MAX] | **R$ 37** |

⛔ Sem nome de concorrente em nenhuma linha. Sem a linha "diz a verdade sobre MEC" — afirmar
que os outros mentem é claim sobre terceiro; a nossa honestidade se sustenta sozinha no FAQ.

⛔ Onde a informação varia entre concorrentes, escreva "varia". Linha de comparação que não
resiste a um print é a que derruba a tabela inteira.

⛔ Preço não pode virar o argumento principal. Comprador que entra por ser barato não assiste,
não usa e pede reembolso — e no Hotmart taxa alta de reembolso vira problema de plataforma
antes de virar problema de caixa. Por isso a divisão fica na tela 6 (depois do desejo) e a
comparação aqui (colada ao preço). Nunca no gancho.

**Garantia** em card discreto: 7 dias, sem precisar explicar.

**FAQ** — 5 perguntas em acordeão, com `faq_open` rastreado:

1. **"Esse preço de R$ 97 é real mesmo?"** → É o preço da formação no nosso site, hoje: [link para ofertaai.shop]. O de R$ 37 é a condição de quem completou o diagnóstico.
2. **"O certificado é reconhecido pelo MEC?"** → Não, e nenhum curso livre é — o MEC reconhece graduação, técnico e pós. Terapia natural também não é profissão regulamentada, então nenhum curso dá registro em conselho, nem o de R$ 3.000. O que existe é certificado de conclusão de curso livre, previsto na LDB, e é esse que você recebe, com carga horária e código de validação. Quem te prometer mais que isso está mentindo.
3. **"Por quanto tempo tenho acesso?"** → Pra sempre. Não é assinatura e não renova.
4. **"Serve pra quem nunca estudou isso?"** → Começa supondo que você não sabe nada. Aulas de 6 a 12 minutos, cada uma termina com algo pra fazer no mesmo dia.
5. **"Como eu entro depois que pago?"** → A Hotmart manda no seu e-mail. Cartão e Pix, na hora.

⛔ Toda a defesa regulatória mora aqui, no acordeão. Não espalhe pelas telas anteriores — na v1 ela ocupava três telas e matava a energia da oferta.

---

### `/downsell` — RECUPERAÇÃO

**Gatilho:** botão voltar do Android, interceptado com `history.pushState`. Não use exit-intent de mouse — não existe em celular, que é onde está quase todo o tráfego.

```
Espera.

Se a formação completa não é o momento,
tem uma porta de entrada.

Plano de Entrada — R$ 9,90
✓ Fitoterapia e Plantas Medicinais
✓ Tintura Medicinal
✓ 2 certificados · 40 horas
✓ Acesso pra sempre

✗ Não inclui aromaterapia, saboaria nem homeopatia
✗ Não inclui a ficha de atendimento nem a tabela de preço
✗ Não inclui o Kit Primeiro Cliente

[botão]  Entrar por R$ 9,90
[link]   Voltar para a formação completa por R$ 37
```

⛔ **Nunca ofereça a formação completa por menos de R$ 37.** Se o downsell der desconto no mesmo produto, o cupom vira piada, o R$ 37 vira preço falso, e você treina o público a abandonar. O downsell é **um produto menor**, não um desconto maior.

Dispara uma vez por sessão. Grava `downsell_shown` e `downsell_taken`.

---

## 3. TRACKING

Mantém o `VT` de `src/lib/track.ts` sem mudança de assinatura. Renumera os `STEP` de 1 a 9.

**Eventos novos:**

| Evento | Onde | Por quê |
|---|---|---|
| `quiz_answer` | tela 2, por pergunta | Segmentação de tudo o que vem depois |
| `areas_selected` | tela 2, Q4 | `{count, areas[]}` — quantas áreas ela marca prevê conversão |
| `uf_selected` | tela 2, Q6 | Concentração geográfica para segmentar criativo |
| `renda_declarada` | tela 2, Q5 | Faixa que ela mesma escolheu. Cruzar com `checkout_click`: se as faixas altas converterem muito melhor, o criativo deve trazer mais gente com essa intenção |
| `condicao_resgatada` | tela 8 | Meta: `AddToCart` |
| `checkout_click` | tela 9 | Meta: `InitiateCheckout` |
| `faq_open` | tela 9 | Qual objeção está viva no segundo do clique |
| `downsell_shown` / `downsell_taken` | downsell | Taxa de recuperação |

**Meta Pixel — só 4 eventos:** `ViewContent` (tela 1), `AddToCart` (tela 8), `InitiateCheckout` (tela 9), `Purchase`. Não mande os 9; sinal demais degrada o aprendizado do algoritmo.

**`ENDPOINT` está `null`.** Criar rota serverless na Vercel que grava os eventos — sem ela, a fatia com bloqueador some da medição e a leitura do funil fica torta.

**Métrica que decide a v3:** `areas_selected.count` cruzado com `checkout_click`. Se quem marca 4+ áreas converte muito mais, a Q4 é o motor do funil e vale aumentar o peso dela. Se converter igual, ela é enfeite e pode virar pergunta simples.

---

## 4. CORREÇÃO PENDENTE DA V1

⛔ **Os comentários HTML não podem ir para o build.** Foi implementado um workaround (`div` com `display:none`) para preservá-los — **reverta**. Aqueles comentários contêm raciocínio comercial, análise do funil concorrente e notas internas sobre o que ainda precisa de lastro. Em HTML servido, isso é código-fonte público.

Converta cada comentário de produção em comentário de template Astro (`{/* ... */}`), que não é emitido. Reative o `compressHTML`. Confirme que `dist/` não contém nenhum comentário HTML.

---

## 5. CONFIG QUE PRECISA SER PREENCHIDO

```ts
// src/config/oferta.ts
export const PRECO = {
  tabela: 97,          // precisa ser o preço real na ofertaai.shop
  funil: 37,
  downsell: 9.90,
  pct: 62
};

export const FAIXA_REGIONAL = null;  // { norte:[x,y], nordeste:[x,y], ... }
                                     // faixa de primeira consulta por região
                                     // null = esconde a conta de atendimento

export const MARGEM_PRODUTO = null;  // { custo: n, venda: [min,max], unidade: 'sabonete de 90g' }
                                     // custo de insumo e preço de mercado praticado
                                     // null = esconde a conta de saboaria/tintura
                                     // ⛔ os dois valores precisam ter fonte: nota de
                                     // compra de insumo e preços praticados em anúncios
                                     // reais. Sem lastro, deixe null.

export const FAIXA_MERCADO = null;   // [min, max] — preço de formações combo equivalentes
                                     // ⛔ exige 10 a 15 prints datados de páginas
                                     // concorrentes com preço visível, guardados.
                                     // null = esconde a divisão e a linha de preço da tabela

export const CHECKOUT = {
  completo: '',        // link Hotmart
  entrada:  ''         // link Hotmart do downsell
};

export const LINK_AVULSO = '';  // ofertaai.shop, usado só no FAQ

export const CONTATO = null;    // WhatsApp — só se houver alguém respondendo
export const PARCELA = null;    // só o que a Hotmart realmente oferece, com juros
```

---

## 6. O QUE NUNCA ENTRA

Lista fechada. Se alguma dessas aparecer numa sugestão futura, recuse e aponte para aqui.

- Contador de vagas, de pessoas online, ou de estoque — inclusive por estado
- Prazo gerado por código que não expira de verdade no back-end
- Preço riscado que nunca foi praticado
- Depoimento, número de alunos ou resultado que não exista com autorização por escrito
- Valor de faturamento como headline, número grande na tela, ou média agregada de alunas
- Brasão, laurel, escudo, fita ou selo de associação no certificado
- Promessa de renda, faturamento ou "mercado bilionário"
- Afirmar que todas as áreas dão renda — a homeopatia não é rota de venda, e dizer isso fortalece as outras
- Qualquer valor de ganho que não tenha sido escolhido pela própria leitora no quiz
- Promessa de registro profissional, carteira, conselho ou selo do MEC
- Simulação de presença humana ao vivo: avatar com selo, "digitando", "online", ícone de chamada, caixa de mensagem que não envia
- Clone da interface do WhatsApp (risco de reprovação e banimento no Meta Ads)
- Nome de concorrente em qualquer lugar da página — use faixa de mercado, com prints datados como lastro
- Linha de comparação que não resista a um print, ou que afirme algo sobre a conduta de terceiro
- Preço como argumento principal ou como gancho — a divisão entra depois do desejo, a comparação colada ao preço
- Adjetivo acusatório contra formação concorrente — só atributo verificável
- Qualquer texto que faça a leitora se sentir burra
- Qualquer texto que invalide a escolha que ela acabou de fazer no quiz. As áreas não marcadas se apresentam como "você não precisa escolher", nunca como "o que você quis não basta"
- Qualquer texto que diga que a escolha dela no quiz foi errada ou insuficiente — o argumento é "você não precisa escolher", nunca "você escolheu pouco"

---

## 7. ORDEM DE EXECUÇÃO

1. Reverter a preservação de comentários no build
2. Criar `src/config/oferta.ts` com os placeholders
3. Telas 1 a 4 (a cabeça nova é o que muda tudo)
4. Telas 5 a 7 (reaproveitamento pesado dos arquivos v1)
5. Telas 8 e 9 + downsell
6. Renumerar tracking e adicionar os eventos novos
7. Mover as telas descontinuadas para `referencia/v1-descontinuadas/`
8. `npm run build` e smoke test das 9 rotas + downsell no voltar

**Não altere** copy aprovada, nomes de evento, tempos de animação ou paletas sem apontar aqui primeiro.
