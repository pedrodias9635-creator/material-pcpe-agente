import type { StudyModule } from "./study";

export const PROMPT86: StudyModule = {
  "short": "Fechamento",
  "eyebrow": "Prompt 86 de 86 · Fechamento",
  "title": "Fechamento do edital",
  "subtitle": "treze itens, o que ficou de fora",
  "description": "O edital do Agente, em Direito Administrativo, tem treze itens. Este prompt os devolve ao número do curso. O que não foi transcrito continua fora. Não há artigo novo.",
  "reading": "Edital nº 1 – PCPE, de 2 de outubro de 2026, cargo 1, Agente de Polícia. Conteúdo: Noções de Direito Administrativo, itens 1 a 13.",
  "terms": [
    "edital",
    "treze itens",
    "fora",
    "conferir"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "Itens 1 a 8 e 12 a 13 estão nos Prompts 57 a 81 e 85.",
    "Item 9: controle nos 73 a 75; improbidade nos 34 a 37.",
    "Item 10: Prompts 38 e 39. Item 11: Prompts 40 a 56 e 81 e 82."
  ],
  "importance": "A banca cobra o que o número 86 não coube: o resto da Lei nº 14.133.",
  "distinctions": [
    "No fechamento, os arts. 76 a 194 ainda não tinham prompt. A leitura seguiu a partir do 87.",
    "A alínea g foi lida no Prompt 87. Contrato e sanção continuam fora.",
    "Lei nº 8.987, Lei nº 13.303, Lei nº 8.112 e lei estadual de processo não foram transcritas."
  ],
  "organs": [
    {
      "sigla": "1-8",
      "nome": "Teoria",
      "funcao": "Onde estudar.",
      "base": "1-8",
      "nao": "Prompt 59 é regime, não responsabilidade. Responsabilidade é 69.",
      "tone": "cyan"
    },
    {
      "sigla": "9-11",
      "nome": "Controle, processo, licitação",
      "funcao": "Já tinham casa.",
      "base": "9-11",
      "nao": "Contrato, sanção, recurso e registro de preços: conferir o Planalto.",
      "tone": "emerald"
    },
    {
      "sigla": "12-13",
      "nome": "Agente e cargo",
      "funcao": "E o que não cabe.",
      "base": "12-13",
      "nao": "Vigente: Emenda nº 138/2025.",
      "tone": "orange"
    },
    {
      "sigla": "MAP",
      "nome": "Mapa",
      "funcao": "Item do edital, sem artigo novo.",
      "base": "Edital PCPE",
      "nao": "Não invente dispositivo.",
      "tone": "sky"
    }
  ],
  "swaps": [
    {
      "wrong": "O item 11 foi lido até o art. 194.",
      "right": "Foi lido até o art. 75, IV, a a f."
    },
    {
      "wrong": "Responsabilidade é o Prompt 59.",
      "right": "59 é regime. 69 é responsabilidade."
    },
    {
      "wrong": "A 8.112 é o item 12.",
      "right": "O item 12, neste curso, é a lei estadual já lida e a Constituição."
    },
    {
      "wrong": "A alínea g foi transcrita.",
      "right": "Não foi."
    },
    {
      "wrong": "Empresa pública está no item 11 completo.",
      "right": "Não. Outro estatuto, não aberto."
    },
    {
      "wrong": "Há Prompt 87 com o contrato.",
      "right": "O curso anunciado fecha em 86."
    }
  ],
  "timeline": [
    {
      "when": "1",
      "title": "Texto",
      "text": "O que está transcrito pode ser cobrado como lei."
    },
    {
      "when": "2",
      "title": "Doutrina",
      "text": "O que está marcado como doutrina não vira número de artigo."
    },
    {
      "when": "3",
      "title": "Fechado",
      "text": "O que o prompt não abriu permanece para conferência oficial."
    }
  ],
  "articles": [
    {
      "id": "p86",
      "num": "86",
      "kicker": "Fechamento",
      "title": "Fechamento do edital",
      "lead": "treze itens, o que ficou de fora",
      "plate": "O curso fecha. O não lido não se chuta.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "1-8",
          "name": "Teoria",
          "hook": "Onde estudar.",
          "literal": "Item 1, Estado, governo e administração: Prompt 57. Item 2, Direito administrativo: 58. Item 3, ato: 60 a 63. Item 4, poderes: 64 a 68. Item 5, regime e princípios: 59. Item 6, responsabilidade: 69. Item 7, serviços: 70. Item 8, organização: 71 e 72.",
          "context": "A ordem do edital não é a ordem dos prompts. O conteúdo é.",
          "exam": "A banca troca o número do item pelo número do prompt.",
          "trap": "Prompt 59 é regime, não responsabilidade. Responsabilidade é 69.",
          "example": "Poder de polícia é 67. Uso e abuso, 68. Não funda.",
          "mnemonic": "Item no edital. Prompt no curso."
        },
        {
          "tag": "9-11",
          "name": "Controle, processo, licitação",
          "hook": "Já tinham casa.",
          "literal": "Item 9.1: Prompt 73. Item 9.2: 74. Item 9.3: 75. Item 9.4, improbidade: 34 a 37, mapa no 83. Item 10, processo: 38 e 39, mapa no 84. Item 11, licitações e contratos: 40 a 56, matriz constitucional no 81, mapa no 82. Contrato não foi transcrito.",
          "context": "Não diga que o item 11 está completo.",
          "exam": "A banca cobra sanção como se o item 11 tivesse sido fechado.",
          "trap": "Contrato, sanção, recurso e registro de preços: conferir o Planalto.",
          "example": "Dispensa por valor: Prompt 55, com o decreto de 2025. Não use o número de 2021.",
          "mnemonic": "Item 11, parcial. O resto, oficial."
        },
        {
          "tag": "12-13",
          "name": "Agente e cargo",
          "hook": "E o que não cabe.",
          "literal": "Item 12, agente: Prompt 76. Legislação pertinente: 85, de volta aos Prompts 2 a 16. Disposições constitucionais: 77 a 81. Item 13, cargo, emprego e função: 77. Fora deste curso, para conferência: art. 37, XI, parágrafo único do art. 70, o art. 79 em diante da Lei nº 14.133, inclusive contrato, sanção e recurso, a Lei nº 8.987, a Lei nº 13.303 e lei estadual de processo não buscada. A alínea g e os arts. 76 a 78 foram lidos nos Prompts 87 e 93 a 95.",
          "context": "Não complete a véspera da prova com número não lido.",
          "exam": "A banca oferece a alínea b antiga.",
          "trap": "Vigente: Emenda nº 138/2025.",
          "example": "O curso acaba no 86. O que ficou de fora não vira chute.",
          "mnemonic": "Treze itens. O não lido, conferir."
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Edital do Agente",
      "does": [
        "Separar texto de lei e doutrina",
        "Conferir o que este prompt deixa fechado"
      ],
      "doesNot": [
        "Não citar número que o módulo não transcreveu"
      ]
    },
    {
      "role": "Banca",
      "source": "Estilo Cebraspe",
      "does": [
        "Trocar conceito vizinho",
        "Cobrar cifra ou prazo que o texto não escreve"
      ],
      "doesNot": [
        "Não transforma doutrina em inciso"
      ]
    },
    {
      "role": "Agente da PCPE",
      "source": "Administração direta estadual",
      "does": [
        "Aplicar a norma geral de licitação já lida",
        "Lembrar que empresa pública não migra para a Lei 14.133"
      ],
      "doesNot": [
        "Não usa o módulo como roteiro de exclusão ou de fraude"
      ]
    }
  ],
  "roleNote": "Questão original. Não é prova anterior.",
  "rolePlate": "O curso fecha. O não lido não se chuta.",
  "rolePlateSource": "Edital nº 1 – PCPE, de 2 de outubro de 2026",
  "summary": [
    {
      "item": "1 a 8",
      "rule": "Prompts 57 a 72, na ordem do mapa.",
      "clue": "Não pelo número do item."
    },
    {
      "item": "9",
      "rule": "73 a 75 e 34 a 37.",
      "clue": "Improbidade não é TCU."
    },
    {
      "item": "10",
      "rule": "38 e 39.",
      "clue": "Federal."
    },
    {
      "item": "11",
      "rule": "40 a 56.",
      "clue": "Contrato fora."
    },
    {
      "item": "12 e 13",
      "rule": "76 a 81 e 85.",
      "clue": "8.112 não é o estatuto."
    },
    {
      "item": "Fora",
      "rule": "76 a 194 e a alínea g.",
      "clue": "Conferir. Não chutar."
    }
  ],
  "compare": [
    {
      "item": "Item 6",
      "ce": "Prompt 69.",
      "cf": "59 é regime.",
      "effect": "separa"
    },
    {
      "item": "Item 11",
      "ce": "Até a alínea f.",
      "cf": "Contrato não lido.",
      "effect": "restringe"
    },
    {
      "item": "Item 12",
      "ce": "Lei estadual e CF.",
      "cf": "8.112 não é o cargo.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 86011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O curso de 86 prompts transcreveu a Lei nº 14.133/2021 até o último artigo e adotou a Lei nº 8.112/1990 como estatuto do Agente da PCPE.",
      "correct": "E",
      "comentario": "ERRADO. A lei de licitações foi transcrita até o art. 75, IV, a a f. O estatuto lido do cargo é o estadual, não a 8.112."
    },
    {
      "id": 86012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A responsabilidade civil do Estado, no mapa do edital, está no",
      "correct": "c",
      "comentario": "Item 6, Prompt 69, art. 37, § 6º. Não é o Prompt 59.",
      "options": [
        {
          "key": "a",
          "label": "Prompt 59, porque regime e responsabilidade são o mesmo item."
        },
        {
          "key": "b",
          "label": "Prompt 75, porque é controle legislativo."
        },
        {
          "key": "c",
          "label": "Prompt 69, correspondente ao item 6 do edital."
        },
        {
          "key": "d",
          "label": "Prompt 37, porque é improbidade."
        },
        {
          "key": "e",
          "label": "Prompt 52, porque é o art. 71 da Lei nº 14.133."
        }
      ]
    },
    {
      "id": 86013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Ficou de fora da transcrição e deve ser conferido no texto oficial:",
      "correct": "e",
      "comentario": "A alternativa E é o que este fechamento não transcreveu: contrato, sanção e recurso. Alínea g e arts. 76 a 78 foram lidos depois, nos Prompts 87 e 93 a 95. As outras alternativas já tinham prompt.",
      "options": [
        {
          "key": "a",
          "label": "o art. 71 da Lei nº 14.133/2021."
        },
        {
          "key": "b",
          "label": "o § 6º do art. 37 da Constituição."
        },
        {
          "key": "c",
          "label": "a alínea b vigente da acumulação."
        },
        {
          "key": "d",
          "label": "os arts. 9º, 10 e 11 da Lei nº 8.429/1992."
        },
        {
          "key": "e",
          "label": "o contrato, a sanção e o recurso da Lei nº 14.133/2021, que este fechamento não transcreveu."
        }
      ]
    }
  ],
  "palette": "lime",
  "highlight": {
    "big": "Fechamento",
    "small": "sem artigo inventado"
  },
  "heroLead": "O edital do Agente, em Direito Administrativo, tem treze itens. Este prompt os devolve ao número do curso. O que não foi transcrito continua fora. Não há artigo novo.",
  "footerLine": "Prompt 86 de 86.",
  "nextLine": "A continuação da Lei nº 14.133/2021 começou no Prompt 87, na alínea g do art. 75. Contrato, sanção e recurso continuam sem transcrição.",
  "closingMnemonic": "Treze itens no mapa. Lei de licitações até a alínea f. O resto, texto oficial.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [],
  "toc": [
    {
      "id": "p86",
      "num": "86",
      "label": "Fechamento do edital"
    }
  ]
};
