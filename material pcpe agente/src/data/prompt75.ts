import type { StudyModule } from "./study";

export const PROMPT75: StudyModule = {
  "short": "Controle legislativo",
  "eyebrow": "Prompt 75 de 86 · Controle legislativo",
  "title": "Controle legislativo",
  "subtitle": "Congresso e Tribunal de Contas, na União",
  "description": "O item 9.3, no texto conferido, é o da União. Congresso, com auxílio do TCU. O tribunal de contas do Estado não é o TCU. O dispositivo estadual não foi transcrito. Não se inventa.",
  "reading": "Constituição, art. 70, caput, e art. 71, caput e inciso I. Os demais incisos do art. 71 não foram transcritos.",
  "terms": [
    "controle externo",
    "TCU",
    "parecer prévio",
    "sessenta dias"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "Controle externo da União é do Congresso, com auxílio do TCU.",
    "Apreciar as contas do Presidente não é julgá-las. O inciso I diz parecer prévio.",
    "Sessenta dias são do parecer, a contar do recebimento. Não invente outro prazo."
  ],
  "importance": "A banca manda o TCU julgar as contas do Presidente, ou usa o TCU para as contas de Pernambuco.",
  "distinctions": [
    "Art. 70: fiscalização contábil, financeira, orçamentária, operacional e patrimonial.",
    "Art. 71, I: parecer prévio em sessenta dias. Não é julgamento.",
    "Parágrafo único do art. 70 tem redação que este prompt não fecha. Conferir o texto oficial."
  ],
  "organs": [
    {
      "sigla": "70",
      "nome": "Fiscalização",
      "funcao": "Cinco adjetivos, dois controles.",
      "base": "70",
      "nao": "O parágrafo único não é citado. A redação vigente não foi isolada nesta rodada.",
      "tone": "cyan"
    },
    {
      "sigla": "71",
      "nome": "Auxílio do TCU",
      "funcao": "Auxílio não é substituição.",
      "base": "71",
      "nao": "Tribunal de contas estadual não está neste caput.",
      "tone": "emerald"
    },
    {
      "sigla": "I",
      "nome": "Parecer prévio",
      "funcao": "Sessenta dias, sem julgamento.",
      "base": "I",
      "nao": "Sessenta dias correm do recebimento. Não do exercício financeiro.",
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
      "wrong": "O TCU julga as contas do Presidente, pelo inciso I.",
      "right": "O inciso I manda apreciar, com parecer prévio."
    },
    {
      "wrong": "O controle externo é só do TCU.",
      "right": "É do Congresso, com auxílio do TCU."
    },
    {
      "wrong": "Sessenta dias correm do fechamento do ano.",
      "right": "A contar do recebimento."
    },
    {
      "wrong": "O TCU fiscaliza a PCPE porque o art. 70 é nacional.",
      "right": "O caput é da União."
    },
    {
      "wrong": "Economicidade está no art. 37.",
      "right": "Está no art. 70, não no caput do art. 37."
    },
    {
      "wrong": "Os incisos do art. 71 foram todos lidos.",
      "right": "Só o caput e o I. O resto, conferir."
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
      "id": "p75",
      "num": "75",
      "kicker": "Controle legislativo",
      "title": "Controle legislativo",
      "lead": "Congresso e Tribunal de Contas, na União",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "70",
          "name": "Fiscalização",
          "hook": "Cinco adjetivos, dois controles.",
          "literal": "Constituição, art. 70, caput: a fiscalização contábil, financeira, orçamentária, operacional e patrimonial da União e das entidades da administração direta e indireta, quanto à legalidade, legitimidade, economicidade, aplicação das subvenções e renúncia de receitas, será exercida pelo Congresso Nacional, mediante controle externo, e pelo sistema de controle interno de cada Poder.",
          "context": "Economicidade está aqui. Não a transporte para o caput do art. 37.",
          "exam": "A banca tira a operacional ou a patrimonial.",
          "trap": "O parágrafo único não é citado. A redação vigente não foi isolada nesta rodada.",
          "example": "A fiscalização da União alcança a indireta federal. Não converta isso em poder do TCU sobre a PCPE.",
          "mnemonic": "Cinco objetos. Congresso por fora. Cada Poder por dentro."
        },
        {
          "tag": "71",
          "name": "Auxílio do TCU",
          "hook": "Auxílio não é substituição.",
          "literal": "Constituição, art. 71, caput: o controle externo, a cargo do Congresso Nacional, será exercido com o auxílio do Tribunal de Contas da União. O TCU auxilia. Não toma o lugar do Congresso. Os incisos seguintes, salvo o I, não foram transcritos. Não os invente.",
          "context": "Auxílio não é subordinação hierárquica do TCU ao gabinete.",
          "exam": "A banca diz que o controle externo é do TCU, sozinho.",
          "trap": "Tribunal de contas estadual não está neste caput.",
          "example": "As contas federais passam por esse auxílio. As contas da PCPE não mudam de tribunal por analogia.",
          "mnemonic": "Congresso controla. TCU auxilia."
        },
        {
          "tag": "I",
          "name": "Parecer prévio",
          "hook": "Sessenta dias, sem julgamento.",
          "literal": "Constituição, art. 71, I: apreciar as contas prestadas anualmente pelo Presidente da República, mediante parecer prévio que deverá ser elaborado em sessenta dias a contar de seu recebimento.",
          "context": "Apreciar com parecer prévio não é julgar. O verbo julgar, se estiver em outro inciso, não foi transcrito.",
          "exam": "A banca troca apreciar por julgar.",
          "trap": "Sessenta dias correm do recebimento. Não do exercício financeiro.",
          "example": "O parecer não é a palavra final do Congresso. É prévio.",
          "mnemonic": "Aprecia. Não julga, neste inciso. Sessenta dias."
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
  "rolePlate": "Doutrina não é artigo.",
  "rolePlateSource": "Edital nº 1 – PCPE, de 2 de outubro de 2026",
  "summary": [
    {
      "item": "Art. 70",
      "rule": "Cinco fiscalizações.",
      "clue": "Congresso e controle interno."
    },
    {
      "item": "Economicidade",
      "rule": "Está no art. 70.",
      "clue": "Não está no caput do art. 37."
    },
    {
      "item": "Art. 71",
      "rule": "Congresso, auxílio do TCU.",
      "clue": "TCU não substitui."
    },
    {
      "item": "Inciso I",
      "rule": "Apreciar, parecer prévio.",
      "clue": "Não é julgar."
    },
    {
      "item": "60 dias",
      "rule": "Do recebimento.",
      "clue": "Não do exercício."
    },
    {
      "item": "Estado",
      "rule": "Não é o TCU.",
      "clue": "Dispositivo local não transcrito."
    }
  ],
  "compare": [
    {
      "item": "Congresso",
      "ce": "Controle externo.",
      "cf": "TCU auxilia.",
      "effect": "separa"
    },
    {
      "item": "Inciso I",
      "ce": "Apreciar.",
      "cf": "Julgar não está nesta frase.",
      "effect": "restringe"
    },
    {
      "item": "60 dias",
      "ce": "Do recebimento.",
      "cf": "Não do ano.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 75011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Pelo art. 71, I, o Tribunal de Contas da União julga as contas do Presidente da República em sessenta dias contados do encerramento do exercício, e o mesmo tribunal é o da Polícia Civil de Pernambuco.",
      "correct": "E",
      "comentario": "ERRADO. O inciso I fala em apreciar, mediante parecer prévio, em sessenta dias a contar do recebimento. O caput do art. 71 é da União."
    },
    {
      "id": 75012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O controle externo da União",
      "correct": "c",
      "comentario": "Congresso, com auxílio do TCU. Não o contrário.",
      "options": [
        {
          "key": "a",
          "label": "é exercido pelo TCU, com o auxílio do Congresso."
        },
        {
          "key": "b",
          "label": "é controle hierárquico da PCPE."
        },
        {
          "key": "c",
          "label": "é do Congresso Nacional, com o auxílio do Tribunal de Contas da União."
        },
        {
          "key": "d",
          "label": "julga, no inciso I, as contas do Presidente."
        },
        {
          "key": "e",
          "label": "não inclui a fiscalização operacional."
        }
      ]
    },
    {
      "id": 75013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O prazo de sessenta dias do art. 71, I,",
      "correct": "b",
      "comentario": "A contar do recebimento. Para o parecer prévio. Não é julgamento.",
      "options": [
        {
          "key": "a",
          "label": "conta-se do dia 1º de janeiro seguinte."
        },
        {
          "key": "b",
          "label": "conta-se do recebimento e refere-se ao parecer prévio."
        },
        {
          "key": "c",
          "label": "é prazo de julgamento das contas estaduais."
        },
        {
          "key": "d",
          "label": "pode ser prorrogado por igual período, pelo próprio inciso."
        },
        {
          "key": "e",
          "label": "é o prazo da ação popular."
        }
      ]
    }
  ],
  "palette": "teal",
  "highlight": {
    "big": "Controle legislativo",
    "small": "sem artigo inventado"
  },
  "heroLead": "O item 9.3, no texto conferido, é o da União. Congresso, com auxílio do TCU. O tribunal de contas do Estado não é o TCU. O dispositivo estadual não foi transcrito. Não se inventa.",
  "footerLine": "Prompt 75 de 86.",
  "nextLine": "Diga continue para o Prompt 76: agente público.",
  "closingMnemonic": "Congresso controla. TCU auxilia. Parecer prévio em sessenta dias, do recebimento.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [
    {
      "value": "60 dias",
      "label": "Parecer prévio, a contar do recebimento",
      "source": "CF, art. 71, I"
    }
  ],
  "toc": [
    {
      "id": "p75",
      "num": "75",
      "label": "Controle legislativo"
    }
  ]
};
