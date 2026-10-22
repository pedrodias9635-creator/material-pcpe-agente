import type { StudyModule } from "./study";

export const PROMPT71: StudyModule = {
  "short": "Descentralizar",
  "eyebrow": "Prompt 71 de 86 · Organização administrativa",
  "title": "Centralização e descentralização",
  "subtitle": "pessoa jurídica é o corte",
  "description": "O item 8.1 é doutrina de organização. O corte é a personalidade. Centralizar e concentrar não são sinônimos. Descentralizar não é desconcentrar.",
  "reading": "Doutrina. O Decreto-Lei nº 200/1967 não foi transcrito. Não cite artigo dele.",
  "terms": [
    "centralização",
    "descentralização",
    "concentração",
    "desconcentração"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "Centralização: a pessoa política presta por seus órgãos.",
    "Descentralização: outra pessoa, com personalidade própria.",
    "Desconcentração: só reparte competência dentro da mesma pessoa."
  ],
  "importance": "A banca chama a criação de delegacia de descentralização.",
  "distinctions": [
    "Concentração junta competência num órgão. Desconcentração reparte.",
    "Descentralização política é a do federalismo, doutrina, não o tema da autarquia.",
    "Descentralização administrativa cria ou autoriza pessoa da indireta."
  ],
  "organs": [
    {
      "sigla": "CEN",
      "nome": "Centralizar e concentrar",
      "funcao": "Uma pessoa, competência junta ou repartida.",
      "base": "CEN",
      "nao": "Órgão não ganha personalidade porque recebeu competência.",
      "tone": "cyan"
    },
    {
      "sigla": "DES",
      "nome": "Descentralizar",
      "funcao": "Outra pessoa.",
      "base": "DES",
      "nao": "Descentralização política, a dos entes, não se confunde com a administrativa.",
      "tone": "emerald"
    },
    {
      "sigla": "DC",
      "nome": "Desconcentrar",
      "funcao": "Hierarquia interna.",
      "base": "DC",
      "nao": "Desconcentrar não é privatizar.",
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
      "wrong": "Nova delegacia é descentralização.",
      "right": "É desconcentração, se não houver pessoa nova."
    },
    {
      "wrong": "Centralização e concentração são sinônimos.",
      "right": "Uma é o modo da pessoa política. Outra é juntar competência."
    },
    {
      "wrong": "Descentralizar é só mudar o endereço do órgão.",
      "right": "É passar a titularidade a outra pessoa."
    },
    {
      "wrong": "Departamento tem personalidade.",
      "right": "Não tem."
    },
    {
      "wrong": "O Decreto-Lei nº 200 foi transcrito.",
      "right": "Não foi. Não cite artigo."
    },
    {
      "wrong": "Tutela incide sobre a delegacia.",
      "right": "Tutela supõe outra pessoa."
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
      "id": "p71",
      "num": "71",
      "kicker": "Organização administrativa",
      "title": "Centralização e descentralização",
      "lead": "pessoa jurídica é o corte",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "CEN",
          "name": "Centralizar e concentrar",
          "hook": "Uma pessoa, competência junta ou repartida.",
          "literal": "Doutrina: centralização é a pessoa política exercer a atividade por órgãos próprios, sem personalidade distinta. Concentração é reunir competências num mesmo órgão. As duas palavras não se trocam. Extinguir uma delegacia e trazer a competência para a sede pode ser concentrar, não descentralizar.",
          "context": "Não chame concentração de indireta.",
          "exam": "A banca usa centralização como sinônimo de desconcentração.",
          "trap": "Órgão não ganha personalidade porque recebeu competência.",
          "example": "A PCPE concentrar um serviço na capital não cria pessoa nova.",
          "mnemonic": "Mesma pessoa. Concentrar é juntar."
        },
        {
          "tag": "DES",
          "name": "Descentralizar",
          "hook": "Outra pessoa.",
          "literal": "Doutrina: descentralização administrativa transfere a titularidade da atividade a pessoa jurídica distinta, como autarquia ou fundação pública. Não é a criação de um departamento. A lei específica do art. 37, XIX, entra no próximo prompt. Aqui o corte é só a personalidade.",
          "context": "Delegacia nova não é autarquia.",
          "exam": "A banca chama desconcentração de descentralização.",
          "trap": "Descentralização política, a dos entes, não se confunde com a administrativa.",
          "example": "Criar uma autarquia estadual é descentralizar. Criar uma divisão na PCPE, não.",
          "mnemonic": "Personalidade nova: descentralizou."
        },
        {
          "tag": "DC",
          "name": "Desconcentrar",
          "hook": "Hierarquia interna.",
          "literal": "Doutrina: desconcentração reparte competência dentro da mesma pessoa, com hierarquia. É técnica interna. O poder hierárquico do Prompt 64 convive com ela. Não cria controle finalístico, porque não há outra pessoa.",
          "context": "Não há tutela sobre departamento.",
          "exam": "A banca cobra personalidade jurídica da delegacia.",
          "trap": "Desconcentrar não é privatizar.",
          "example": "Uma delegacia regional da PCPE é desconcentração. O delegado não vira pessoa jurídica.",
          "mnemonic": "Reparte dentro. Não cria ente."
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
      "item": "Centralização",
      "rule": "A pessoa política presta.",
      "clue": "Por órgãos sem personalidade própria."
    },
    {
      "item": "Concentração",
      "rule": "Junta competência.",
      "clue": "Não é indireta."
    },
    {
      "item": "Desconcentração",
      "rule": "Reparte na mesma pessoa.",
      "clue": "Delegacia é o exemplo."
    },
    {
      "item": "Descentralização",
      "rule": "Outra pessoa.",
      "clue": "Autarquia, não departamento."
    },
    {
      "item": "Política",
      "rule": "Entes federados.",
      "clue": "Não é o tema da autarquia."
    },
    {
      "item": "DL 200",
      "rule": "Não transcrito.",
      "clue": "Não cite artigo."
    }
  ],
  "compare": [
    {
      "item": "Desconcentrar",
      "ce": "Mesma pessoa.",
      "cf": "Descentralizar é outra pessoa.",
      "effect": "separa"
    },
    {
      "item": "Concentrar",
      "ce": "Juntar.",
      "cf": "Desconcentrar é repartir.",
      "effect": "separa"
    },
    {
      "item": "Delegacia",
      "ce": "Órgão.",
      "cf": "Não é autarquia.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 71011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "A criação de uma delegacia regional da Polícia Civil é descentralização administrativa, porque o novo órgão adquire personalidade jurídica.",
      "correct": "E",
      "comentario": "ERRADO. Delegacia é órgão da mesma pessoa. Isso é desconcentração. Personalidade nova é que marca a descentralização."
    },
    {
      "id": 71012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Desconcentração e descentralização se distinguem porque",
      "correct": "a",
      "comentario": "Desconcentração fica na mesma pessoa. Descentralização cria ou usa pessoa distinta.",
      "options": [
        {
          "key": "a",
          "label": "a desconcentração reparte competência na mesma pessoa, e a descentralização envolve pessoa jurídica distinta."
        },
        {
          "key": "b",
          "label": "as duas criam autarquia."
        },
        {
          "key": "c",
          "label": "as duas são sinônimos de concentração."
        },
        {
          "key": "d",
          "label": "a desconcentração exige lei específica do art. 37, XIX, transcrita como se fosse deste ato."
        },
        {
          "key": "e",
          "label": "a descentralização é sempre política."
        }
      ]
    },
    {
      "id": 71013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Concentração, em doutrina,",
      "correct": "c",
      "comentario": "Reúne competência. Não cria indireta.",
      "options": [
        {
          "key": "a",
          "label": "cria autarquia."
        },
        {
          "key": "b",
          "label": "é privatização."
        },
        {
          "key": "c",
          "label": "reúne competências num órgão, dentro da mesma pessoa."
        },
        {
          "key": "d",
          "label": "é o art. 175."
        },
        {
          "key": "e",
          "label": "dá personalidade à delegacia."
        }
      ]
    }
  ],
  "palette": "fresh",
  "highlight": {
    "big": "Descentralizar",
    "small": "sem artigo inventado"
  },
  "heroLead": "O item 8.1 é doutrina de organização. O corte é a personalidade. Centralizar e concentrar não são sinônimos. Descentralizar não é desconcentrar.",
  "footerLine": "Prompt 71 de 86.",
  "nextLine": "Diga continue para o Prompt 72: administração direta e indireta.",
  "closingMnemonic": "Personalidade é o corte. Delegacia desconcentra. Autarquia descentraliza.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [],
  "toc": [
    {
      "id": "p71",
      "num": "71",
      "label": "Centralização e descentralização"
    }
  ]
};
