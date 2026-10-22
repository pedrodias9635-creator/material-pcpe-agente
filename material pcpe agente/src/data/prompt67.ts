import type { StudyModule } from "./study";

export const PROMPT67: StudyModule = {
  "short": "Poder de polícia",
  "eyebrow": "Prompt 67 de 86 · Poder de polícia",
  "title": "Poder de polícia administrativa",
  "subtitle": "limitar liberdade e propriedade, com lei",
  "description": "Polícia administrativa não é polícia judiciária e não é poder disciplinar. Ela condiciona, limita ou restringe direito do particular em nome do interesse público. Atributos são doutrina. O ciclo não autoriza abuso.",
  "reading": "Doutrina. O Código Tributário é a referência clássica do conceito, mas o artigo não foi transcrito nesta rodada. Conferir antes de citar o número. Não ensinar técnica de restrição ilegal.",
  "terms": [
    "polícia administrativa",
    "polícia judiciária",
    "ciclo",
    "proporcionalidade"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "Administrativa: incide sobre bens, direitos e atividades. Judiciária: apura infração penal.",
    "O Agente da PCPE faz polícia judiciária. Isso não apaga a polícia administrativa de outros órgãos.",
    "Autoexecutoriedade da polícia não dispensa lei nem proporcionalidade."
  ],
  "importance": "A banca chama de polícia judiciária a licença de um alvará, ou dispensa lei na restrição.",
  "distinctions": [
    "Conceito de doutrina: limitação da liberdade e da propriedade em favor do interesse público.",
    "Ciclo de doutrina: ordem, consentimento, fiscalização, sanção. Nem todo ciclo está em todo órgão.",
    "Atributos de doutrina: discricionariedade na margem legal, autoexecutoriedade onde couber, coercibilidade. Nenhum é absoluto."
  ],
  "organs": [
    {
      "sigla": "ADM",
      "nome": "Administrativa",
      "funcao": "Limita atividade, não acusa crime.",
      "base": "ADM",
      "nao": "Poder de polícia não é poder disciplinar. O sujeito da rua não vira servidor.",
      "tone": "cyan"
    },
    {
      "sigla": "CIC",
      "nome": "Ciclo",
      "funcao": "Quatro momentos, nem sempre no mesmo órgão.",
      "base": "CIC",
      "nao": "Autoexecutoriedade, se couber, não dispensa o fundamento legal.",
      "tone": "emerald"
    },
    {
      "sigla": "ATR",
      "nome": "Atributos",
      "funcao": "Margem não é excesso.",
      "base": "ATR",
      "nao": "Consentimento vinculado, quando a lei fecha os requisitos, não vira favor do agente.",
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
      "wrong": "Polícia administrativa apura crime.",
      "right": "Quem apura crime, neste item, é a judiciária."
    },
    {
      "wrong": "O Agente só conhece polícia administrativa.",
      "right": "A função da PCPE é judiciária. O edital ainda cobra a administrativa como instituto."
    },
    {
      "wrong": "O ciclo está no art. 37.",
      "right": "Não está. Doutrina."
    },
    {
      "wrong": "Sanção de polícia é pena de servidor.",
      "right": "São poderes diferentes."
    },
    {
      "wrong": "Autoexecutoriedade dispensa lei.",
      "right": "Não dispensa."
    },
    {
      "wrong": "Licença é sempre favor discricionário.",
      "right": "Se a lei vincula, não há favor."
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
      "id": "p67",
      "num": "67",
      "kicker": "Poder de polícia",
      "title": "Poder de polícia administrativa",
      "lead": "limitar liberdade e propriedade, com lei",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "ADM",
          "name": "Administrativa",
          "hook": "Limita atividade, não acusa crime.",
          "literal": "Doutrina: polícia administrativa condiciona o exercício de direito ou de atividade do particular. Licença, autorização e fiscalização de postura são exemplos de doutrina, não uma lista legal deste prompt. Polícia judiciária apura infração penal. O Agente da PCPE atua na judiciária. Não converta o inquérito em alvará, nem o alvará em inquérito.",
          "context": "Não cite o art. 78 do Código Tributário sem conferir. Ele não foi transcrito aqui.",
          "exam": "A banca unifica as duas polícias.",
          "trap": "Poder de polícia não é poder disciplinar. O sujeito da rua não vira servidor.",
          "example": "A vigilância sanitária fecha um estabelecimento com base legal. Isso não é o inquérito da PCPE.",
          "mnemonic": "Atividade lícita limitada: administrativa. Crime: judiciária."
        },
        {
          "tag": "CIC",
          "name": "Ciclo",
          "hook": "Quatro momentos, nem sempre no mesmo órgão.",
          "literal": "Doutrina: o ciclo costuma ser descrito como ordem de polícia, consentimento, fiscalização e sanção. Consentimento não é favor. Sanção de polícia não é pena disciplinar. Este prompt não fixa prazo de licença nem valor de multa.",
          "context": "Não ensine a negar consentimento para excluir concorrente.",
          "exam": "A banca cobra os quatro momentos como artigo único.",
          "trap": "Autoexecutoriedade, se couber, não dispensa o fundamento legal.",
          "example": "A fiscalização de um mercado pode ser polícia. A punição do fiscal que se omitiu é disciplinar.",
          "mnemonic": "Ordem, consentimento, fiscalização, sanção. Sem cifra."
        },
        {
          "tag": "ATR",
          "name": "Atributos",
          "hook": "Margem não é excesso.",
          "literal": "Doutrina: discricionariedade existe só onde a lei deixou margem. Autoexecutoriedade e coercibilidade não autorizam meio mais grave que o necessário. Proporcionalidade, aqui, é doutrina, sem número de súmula. Uso e abuso ficam no Prompt 68.",
          "context": "Não transforme atributo em licença para o ilegal.",
          "exam": "A banca diz que a polícia administrativa é sempre vinculada, ou sempre livre.",
          "trap": "Consentimento vinculado, quando a lei fecha os requisitos, não vira favor do agente.",
          "example": "Se a lei manda conceder a licença quando os requisitos estão presentes, não há margem para negar por gosto.",
          "mnemonic": "Margem só a da lei. Meio, o necessário."
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
      "item": "Administrativa",
      "rule": "Limita atividade lícita.",
      "clue": "Não apura crime."
    },
    {
      "item": "Judiciária",
      "rule": "Infrações penais.",
      "clue": "Função da PCPE."
    },
    {
      "item": "Ciclo",
      "rule": "Ordem, consentimento, fiscalização, sanção.",
      "clue": "Doutrina."
    },
    {
      "item": "Sanção",
      "rule": "Não é pena disciplinar.",
      "clue": "Sujeito diferente."
    },
    {
      "item": "Margem",
      "rule": "Só a da lei.",
      "clue": "Licença pode ser vinculada."
    },
    {
      "item": "CTN",
      "rule": "Não transcrito.",
      "clue": "Conferir antes de citar."
    }
  ],
  "compare": [
    {
      "item": "Administrativa",
      "ce": "Atividade.",
      "cf": "Judiciária é infração penal.",
      "effect": "separa"
    },
    {
      "item": "Sanção de polícia",
      "ce": "Particular em geral.",
      "cf": "Disciplina é o vínculo.",
      "effect": "separa"
    },
    {
      "item": "Consentimento",
      "ce": "Pode ser vinculado.",
      "cf": "Não é sempre favor.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 67011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Polícia administrativa e polícia judiciária são o mesmo poder, e a sanção da primeira é pena disciplinar do servidor.",
      "correct": "E",
      "comentario": "ERRADO. Administrativa limita atividade. Judiciária apura infração penal. Sanção de polícia não é pena disciplinar."
    },
    {
      "id": 67012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "No ciclo de doutrina da polícia administrativa,",
      "correct": "c",
      "comentario": "Quatro momentos de doutrina. Sem artigo e sem prazo neste prompt.",
      "options": [
        {
          "key": "a",
          "label": "há um artigo constitucional que fixa os quatro momentos e o prazo da licença."
        },
        {
          "key": "b",
          "label": "a sanção se confunde com a pena do estatuto do policial."
        },
        {
          "key": "c",
          "label": "ordem, consentimento, fiscalização e sanção são descrição de doutrina, sem prazo escrito neste prompt."
        },
        {
          "key": "d",
          "label": "o consentimento é sempre favor, ainda quando a lei vincula."
        },
        {
          "key": "e",
          "label": "o ciclo só existe na polícia judiciária."
        }
      ]
    },
    {
      "id": 67013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A autoexecutoriedade do poder de polícia",
      "correct": "b",
      "comentario": "Não dispensa lei nem proporcionalidade. Não é atributo para o abuso.",
      "options": [
        {
          "key": "a",
          "label": "dispensa lei e proporcionalidade."
        },
        {
          "key": "b",
          "label": "não autoriza meio além do necessário nem ato sem fundamento legal."
        },
        {
          "key": "c",
          "label": "transforma a polícia administrativa em judiciária."
        },
        {
          "key": "d",
          "label": "está no art. 84, IV."
        },
        {
          "key": "e",
          "label": "é absoluta em todo consentimento."
        }
      ]
    }
  ],
  "palette": "lime",
  "highlight": {
    "big": "Poder de polícia",
    "small": "sem artigo inventado"
  },
  "heroLead": "Polícia administrativa não é polícia judiciária e não é poder disciplinar. Ela condiciona, limita ou restringe direito do particular em nome do interesse público. Atributos são doutrina. O ciclo não autoriza abuso.",
  "footerLine": "Prompt 67 de 86.",
  "nextLine": "Diga continue para o Prompt 68: uso e abuso do poder.",
  "closingMnemonic": "Limita com lei. Não apura crime. Não pune servidor.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [],
  "toc": [
    {
      "id": "p67",
      "num": "67",
      "label": "Poder de polícia administrativa"
    }
  ]
};
