import type { StudyModule } from "./study";

export const PROMPT135: StudyModule = {
  "short": "Contabilidade geral",
  "eyebrow": "Prompt 135 · pedido 100",
  "title": "Contabilidade geral",
  "subtitle": "patrimônio, lançamento e competência",
  "description": "Pedido 100. Artigo de lei não aberto não foi numerado. Taxa de depreciação fiscal não foi inventada. A lista da Resolução CFC nº 750/1993 não foi ensinada como vigente.",
  "reading": "Equação patrimonial, partidas dobradas e estrutura conceitual. Sem artigo de lei não conferido.",
  "terms": [
    "patrimônio",
    "partidas dobradas",
    "competência",
    "depreciação",
    "DRE"
  ],
  "subject": "Contabilidade",
  "context": [
    "Os Prompts 62 a 122 do app já estão ocupados. Este pedido foi gravado com número novo.",
    "Número que não bate com a lei segue o texto oficial, e a divergência é dita.",
    "Súmula só entra com enunciado confirmado."
  ],
  "importance": "A banca troca prazo, requisito e nome de instituto.",
  "distinctions": [
    "Ativo = passivo exigível + patrimônio líquido.",
    "Receita é crédito. Despesa é débito.",
    "Competência não espera o caixa.",
    "Depreciação linear do exemplo: 200 por ano, não é taxa legal.",
    "Resolução CFC nº 750/1993 não é a estrutura vigente."
  ],
  "organs": [
    {
      "sigla": "1",
      "nome": "Patrimônio e equação",
      "funcao": "A natureza da conta decide o lado do lançamento.",
      "base": "Pedido 100",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "yellow"
    },
    {
      "sigla": "2",
      "nome": "Contas e partidas dobradas",
      "funcao": "A natureza da conta decide o lado do lançamento.",
      "base": "Pedido 100",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "cyan"
    },
    {
      "sigla": "3",
      "nome": "Regime e demonstrações",
      "funcao": "A natureza da conta decide o lado do lançamento.",
      "base": "Pedido 100",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "orange"
    },
    {
      "sigla": "4",
      "nome": "Depreciação, provisão e reserva",
      "funcao": "A natureza da conta decide o lado do lançamento.",
      "base": "Pedido 100",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "violet"
    },
    {
      "sigla": "5",
      "nome": "Estrutura conceitual",
      "funcao": "A natureza da conta decide o lado do lançamento.",
      "base": "Pedido 100",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "emerald"
    }
  ],
  "swaps": [
    {
      "wrong": "Ativo = passivo − PL.",
      "right": "Ativo = passivo exigível + PL."
    },
    {
      "wrong": "Receita não recebida não existe no resultado.",
      "right": "Competência reconhece a receita gerada."
    },
    {
      "wrong": "A lista da Resolução 750 é a norma vigente.",
      "right": "É lista antiga. A estrutura atual é a NBC TG."
    }
  ],
  "timeline": [
    {
      "when": "Pedido",
      "title": "100",
      "text": "Gravado como Prompt 135."
    },
    {
      "when": "Limite",
      "title": "Recorte",
      "text": "Equação patrimonial, partidas dobradas e estrutura conceitual. Sem artigo de lei não conferido."
    }
  ],
  "articles": [
    {
      "id": "p135-1",
      "num": "1",
      "kicker": "Pedido 100",
      "title": "Patrimônio e equação",
      "lead": "Patrimônio e equação",
      "plate": "Patrimônio e equação",
      "plateSource": "Pedido 100",
      "devices": [
        {
          "tag": "regra",
          "name": "Patrimônio e equação",
          "hook": "Patrimônio e equação",
          "literal": "Patrimônio é o conjunto de bens, direitos e obrigações. Bem é coisa com valor. Direito é crédito perante terceiro. Obrigação é dívida.\nAtivo é bens e direitos. Passivo exigível é obrigações. Patrimônio líquido é o residual: ativo menos passivo exigível.\nA equação do balanço: ativo = passivo exigível + patrimônio líquido. Se o residual é negativo, há passivo a descoberto. Não se force o líquido a zero.\nSituação líquida positiva: ativo maior que o exigível. Negativa: exigível maior. Nula: iguais.\nFato permutativo troca elementos sem alterar o líquido. Fato modificativo altera o líquido. Misto faz as duas coisas. A classificação olha o líquido, não o tamanho do lançamento.\nNão se chame de receita o que é entrada de empréstimo. Empréstimo aumenta ativo e aumenta passivo. O líquido não muda.",
          "context": "Patrimônio e equação",
          "exam": "A natureza da conta decide o lado do lançamento.",
          "trap": "Não inverta débito e crédito.",
          "example": "Lançamento de exemplo, sem valor inventado de taxa.",
          "mnemonic": "Patrimônio e equação",
          "revoked": false
        }
      ]
    },
    {
      "id": "p135-2",
      "num": "2",
      "kicker": "Pedido 100",
      "title": "Contas e partidas dobradas",
      "lead": "Contas e partidas dobradas",
      "plate": "Contas e partidas dobradas",
      "plateSource": "Pedido 100",
      "devices": [
        {
          "tag": "regra",
          "name": "Contas e partidas dobradas",
          "hook": "Contas e partidas dobradas",
          "literal": "Conta é o nome que reúne lançamentos de mesma natureza.\nAtivo aumenta por débito e diminui por crédito. Natureza devedora.\nPassivo exigível e patrimônio líquido aumentam por crédito e diminuem por débito. Natureza credora.\nReceita aumenta o líquido: crédito. Despesa diminui o líquido: débito.\nPartidas dobradas: não há débito sem crédito de igual valor. O lançamento pode ter mais de uma conta em cada lado, e a soma dos débitos é a soma dos créditos.\nExemplo. Compra de material de consumo à vista, por 200: débito de material de consumo, 200; crédito de caixa, 200. O ativo troca de forma. O líquido não muda.\nExemplo. Reconhecimento de receita de serviço já prestado, a prazo, por 500: débito de clientes, 500; crédito de receita de serviço, 500. O líquido aumenta. O recebimento posterior é outro fato: débito de caixa, crédito de clientes. Não se reconhece a receita duas vezes.\nNão se lance despesa a crédito para 'fechar' saldo. Despesa, na origem, é débito.",
          "context": "Contas e partidas dobradas",
          "exam": "A natureza da conta decide o lado do lançamento.",
          "trap": "Não inverta débito e crédito.",
          "example": "Lançamento de exemplo, sem valor inventado de taxa.",
          "mnemonic": "Contas e partidas dobradas",
          "revoked": false
        }
      ]
    },
    {
      "id": "p135-3",
      "num": "3",
      "kicker": "Pedido 100",
      "title": "Regime e demonstrações",
      "lead": "Regime e demonstrações",
      "plate": "Regime e demonstrações",
      "plateSource": "Pedido 100",
      "devices": [
        {
          "tag": "regra",
          "name": "Regime e demonstrações",
          "hook": "Regime e demonstrações",
          "literal": "Regime de competência: a receita se reconhece quando é gerada, e a despesa quando é incorrida, tenham ou não passado pelo caixa. Regime de caixa olha o dinheiro. A contabilidade societária usa competência. Caixa não é o regime do resultado.\nBalancete lista saldos. Não é o balanço. Balanço patrimonial é a posição em uma data: ativo circulante e não circulante; passivo circulante e não circulante; patrimônio líquido. Circulante é o que se realiza ou se exige no ciclo operacional ou em até doze meses, o que for mais longo, na leitura usual das normas. Não se invente prazo de item que a norma trata de outro modo.\nDRE é o desempenho do período: receitas, deduções, custos, despesas e resultado. Não é estoque de caixa. Lucro não é saldo de caixa.\nReceita bruta menos deduções dá a receita líquida, na estrutura usual. Custo do que foi vendido não é despesa administrativa. A banca troca custo e despesa, e troca despesa e pagamento.\nNão se abriu, nesta sessão, o artigo da Lei nº 6.404/1976. O nome da lei é a sede societária. O número do artigo não se inventa. Se a questão pedir o artigo, conferir o texto.",
          "context": "Regime e demonstrações",
          "exam": "A natureza da conta decide o lado do lançamento.",
          "trap": "Não inverta débito e crédito.",
          "example": "Lançamento de exemplo, sem valor inventado de taxa.",
          "mnemonic": "Regime e demonstrações",
          "revoked": false
        }
      ]
    },
    {
      "id": "p135-4",
      "num": "4",
      "kicker": "Pedido 100",
      "title": "Depreciação, provisão e reserva",
      "lead": "Depreciação, provisão e reserva",
      "plate": "Depreciação, provisão e reserva",
      "plateSource": "Pedido 100",
      "devices": [
        {
          "tag": "regra",
          "name": "Depreciação, provisão e reserva",
          "hook": "Depreciação, provisão e reserva",
          "literal": "Depreciação é a alocação sistemática do valor depreciável ao longo da vida útil. Não é queda de preço de mercado, embora o mercado possa importar em teste de recuperabilidade, tema que não se abre aqui.\nMétodo linear: (custo − valor residual) / vida útil. Exemplo só de conta: custo 1.000, residual 200, vida 4 anos. Depreciável 800. Cota anual 200. Não é taxa legal. Nenhuma tabela da Receita foi consultada. Não se use 10% ou 20% como se fossem obrigatórios.\nLançamento usual: débito de despesa de depreciação, crédito de depreciação acumulada. A acumulada é conta retificadora do ativo. Não é caixa saindo.\nProvisão, na linguagem atual das normas, é passivo de prazo ou valor incerto. Não se confunde com reserva. Reserva é parcela do patrimônio líquido, apropriação de resultado ou capital, conforme o caso. Não se debita reserva para reconhecer despesa.\nRedução ao valor recuperável não é depreciação. Não se misture o nome.\nNão se calcule depreciação de bem que a questão disse não depreciável, como terreno, na regra geral. Edificação sobre o terreno deprecia. O terreno, não.",
          "context": "Depreciação, provisão e reserva",
          "exam": "A natureza da conta decide o lado do lançamento.",
          "trap": "Não inverta débito e crédito.",
          "example": "Lançamento de exemplo, sem valor inventado de taxa.",
          "mnemonic": "Depreciação, provisão e reserva",
          "revoked": false
        }
      ]
    },
    {
      "id": "p135-5",
      "num": "5",
      "kicker": "Pedido 100",
      "title": "Estrutura conceitual",
      "lead": "Estrutura conceitual",
      "plate": "Estrutura conceitual",
      "plateSource": "Pedido 100",
      "devices": [
        {
          "tag": "regra",
          "name": "Estrutura conceitual",
          "hook": "Estrutura conceitual",
          "literal": "A lista antiga da Resolução CFC nº 750/1993, com os nomes entidade, continuidade, oportunidade, registro pelo valor original, competência e prudência, ainda aparece em prova. Não se ensina essa lista como norma vigente.\nA estrutura conceitual atual é a NBC TG Estrutura Conceitual, correspondente ao CPC 00. Características qualitativas fundamentais, na revisão vigente de estudo: relevância e representação fidedigna. Características de melhoria: comparabilidade, verificabilidade, tempestividade e compreensibilidade.\nO número da resolução do CFC que aprova o texto vigente não foi aberto nesta sessão. Não se inventa. Se a questão pedir o número, conferir o sítio do CFC.\nEntidade: o patrimônio da entidade não se mistura com o do sócio. Isso continua conceito, ainda que o nome tenha saído da lista antiga.\nContinuidade: a demonstração presume que a entidade segue, salvo informação em contrário.\nPrudência, na estrutura atual, não é viés para reduzir ativo ou aumentar passivo. É cuidado na incerteza, dentro da representação fidedigna. A prova antiga que pede 'sempre o menor ativo' descreve a lista velha, não a estrutura atual.\nNão se numere CPC que não foi lido. CPC 00 é a estrutura. CPC 16, estoques, entra no Prompt 136 porque o nome e a vedação do UEPS são o ponto de prova, e a ressalva de conferir o texto fica escrita lá.",
          "context": "Estrutura conceitual",
          "exam": "A natureza da conta decide o lado do lançamento.",
          "trap": "Não inverta débito e crédito.",
          "example": "Lançamento de exemplo, sem valor inventado de taxa.",
          "mnemonic": "Estrutura conceitual",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 135",
      "does": [
        "Ler o texto antes do comentário"
      ],
      "doesNot": [
        "Não completar lacuna",
        "Não usar número não confirmado"
      ]
    }
  ],
  "roleNote": "Questões são originais, no estilo da banca, não são prova real.",
  "rolePlate": "Texto primeiro.",
  "rolePlateSource": "Prompt 135",
  "summary": [
    {
      "item": "Equação",
      "rule": "Ativo = passivo exigível + PL.",
      "clue": "PL é residual."
    },
    {
      "item": "Ativo",
      "rule": "Aumenta a débito.",
      "clue": "Passivo e PL aumentam a crédito."
    },
    {
      "item": "Receita",
      "rule": "Crédito.",
      "clue": "Despesa é débito."
    },
    {
      "item": "Competência",
      "rule": "Reconhece quando gera, não quando recebe.",
      "clue": "Caixa é outro regime."
    },
    {
      "item": "Linear",
      "rule": "(custo − residual) / vida útil.",
      "clue": "Exemplo: 200 por ano."
    },
    {
      "item": "CFC 750",
      "rule": "Lista antiga. Não é a estrutura vigente.",
      "clue": "Estrutura atual: NBC TG."
    }
  ],
  "compare": [
    {
      "item": "Débito",
      "ce": "Aumenta ativo e despesa.",
      "cf": "Crédito aumenta passivo, PL e receita.",
      "effect": "separa"
    },
    {
      "item": "Competência",
      "ce": "Fato gerador.",
      "cf": "Caixa: movimento do dinheiro.",
      "effect": "separa"
    },
    {
      "item": "Provisão",
      "ce": "Passivo incerto.",
      "cf": "Reserva: patrimônio líquido.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 135011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Na equação patrimonial, o ativo é igual ao passivo exigível menos o patrimônio líquido.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Ativo = passivo exigível + patrimônio líquido. O líquido é residual: ativo menos exigível."
    },
    {
      "id": 135012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O lançamento de compra de material de consumo à vista, por 200, é",
      "correct": "a",
      "options": [
        {
          "key": "a",
          "label": "débito de material de consumo e crédito de caixa, ambos por 200."
        },
        {
          "key": "b",
          "label": "crédito de material e débito de caixa."
        },
        {
          "key": "c",
          "label": "débito de despesa e crédito de receita."
        },
        {
          "key": "d",
          "label": "débito de caixa e crédito de clientes."
        },
        {
          "key": "e",
          "label": "somente débito de caixa, porque o pagamento encerra o fato."
        }
      ],
      "comentario": "Questão original, não é prova real. Ativo que entra, material, é débito. Ativo que sai, caixa, é crédito. Valores iguais. Não há lançamento de um lado só."
    },
    {
      "id": 135013,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Pelo regime de competência, a receita de serviço já prestado e ainda não recebida não se reconhece, porque o caixa não se moveu.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Competência reconhece a receita gerada, ainda sem caixa. O recebimento posterior baixa o cliente e aumenta o caixa, sem nova receita."
    },
    {
      "id": 135014,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Bem de custo 1.000, valor residual 200 e vida útil de 4 anos, no método linear. A cota anual de depreciação é",
      "correct": "c",
      "options": [
        {
          "key": "a",
          "label": "1.000."
        },
        {
          "key": "b",
          "label": "250."
        },
        {
          "key": "c",
          "label": "200."
        },
        {
          "key": "d",
          "label": "800."
        },
        {
          "key": "e",
          "label": "50, porque a taxa legal é 5%."
        }
      ],
      "comentario": "Questão original, não é prova real. (1000 − 200) / 4 = 200. Não há taxa legal nesta conta. 250 seria 1.000/4, esquecendo o residual."
    },
    {
      "id": 135015,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Reserva e provisão são a mesma conta: as duas reduzem o ativo.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Provisão, na linguagem atual, é passivo de prazo ou valor incerto. Reserva é parcela do patrimônio líquido. Depreciação acumulada é que retifica o ativo, e não é reserva."
    }
  ],
  "toc": [
    {
      "id": "p135-1",
      "num": "1",
      "label": "Patrimônio e equação"
    },
    {
      "id": "p135-2",
      "num": "2",
      "label": "Contas e partidas dobradas"
    },
    {
      "id": "p135-3",
      "num": "3",
      "label": "Regime e demonstrações"
    },
    {
      "id": "p135-4",
      "num": "4",
      "label": "Depreciação, provisão e rese"
    },
    {
      "id": "p135-5",
      "num": "5",
      "label": "Estrutura conceitual"
    }
  ],
  "clocks": [],
  "organKicker": "Recorte",
  "organTitle": "Contabilidade geral",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a regra que ele escreve.",
  "closing": "Conferir a fonte se houver atualização posterior à consulta de 20/10/2026.",
  "palette": "azure",
  "highlight": {
    "big": "5",
    "small": "blocos neste prompt"
  },
  "heroLead": "Pedido 100. Artigo de lei não aberto não foi numerado. Taxa de depreciação fiscal não foi inventada. A lista da Resolução CFC nº 750/1993 não foi ensinada como vigente.",
  "footerLine": "Prompt 135 · pedido 100.",
  "nextLine": "Prompt 136 · pedido 101 · estoques, índices e orçamento público.",
  "closingMnemonic": "Texto primeiro. Número divergente segue a lei. Lacuna não se completa.",
  "rolesTitle": "Limite",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "Não misture",
  "compareLead": "Instituto vizinho não empresta requisito.",
  "compareLeft": "Um",
  "compareRight": "Outro"
};
