import type { StudyModule } from "./study";

export const PROMPT85: StudyModule = {
  "short": "Legislação do Agente",
  "eyebrow": "Prompt 85 de 86 · Agente público, legislação pertinente",
  "title": "A legislação do Agente",
  "subtitle": "o item 12 aponta para trás",
  "description": "O item 12.1 do edital, legislação pertinente, no que este curso fez, são as leis da Polícia Civil e o estatuto geral já lidos. O item 12.2, disposições constitucionais, está nos Prompts 76 a 81. Nada se reabre.",
  "reading": "Prompts 2 a 16 e 76 a 81. Sem artigo novo.",
  "terms": [
    "6.425",
    "6.123",
    "LC 137",
    "LC 317"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "Lei nº 6.425/1972: estatuto da Polícia Civil.",
    "Lei nº 6.123/1968: o que a lei policial manda buscar.",
    "LC nº 137/2008 e LC nº 317/2015: carreira, já lidas."
  ],
  "importance": "A banca cobra a Lei nº 8.112 como se fosse o estatuto do Agente de Pernambuco.",
  "distinctions": [
    "8.112 é federal. Não foi o estatuto lido para este cargo.",
    "Constituição do agente: acesso, concurso, acumulação, comissão, temporário.",
    "Dever e pena não se reescrevem."
  ],
  "organs": [
    {
      "sigla": "EST",
      "nome": "Estatuto policial",
      "funcao": "Prompts 2 a 4, e o que a 6.123 completa.",
      "base": "EST",
      "nao": "8.112 não foi o estatuto transcrito para este cargo.",
      "tone": "cyan"
    },
    {
      "sigla": "CAR",
      "nome": "Carreira",
      "funcao": "137 e 317, já lidas.",
      "base": "CAR",
      "nao": "Cada cargo na sua lei complementar.",
      "tone": "emerald"
    },
    {
      "sigla": "CF",
      "nome": "Constituição do agente",
      "funcao": "12.2, sem reprisar.",
      "base": "CF",
      "nao": "A vigente é a da Emenda nº 138/2025, no Prompt 79.",
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
      "wrong": "A Lei nº 8.112 é o estatuto do Agente da PCPE.",
      "right": "Não é o texto lido para este cargo."
    },
    {
      "wrong": "O Agente tem as prerrogativas do Delegado.",
      "right": "A LC nº 317 não fez isso."
    },
    {
      "wrong": "Este prompt reabre deveres.",
      "right": "Não reabre."
    },
    {
      "wrong": "A alínea b da acumulação voltou a técnico ou científico.",
      "right": "Não. Emenda nº 138/2025."
    },
    {
      "wrong": "A 6.123 substitui a 6.425 por inteiro.",
      "right": "Entra no que a lei policial manda buscar."
    },
    {
      "wrong": "O teto do inciso XI foi cifrado.",
      "right": "Não foi."
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
      "id": "p85",
      "num": "85",
      "kicker": "Agente público, legislação pertinente",
      "title": "A legislação do Agente",
      "lead": "o item 12 aponta para trás",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "EST",
          "name": "Estatuto policial",
          "hook": "Prompts 2 a 4, e o que a 6.123 completa.",
          "literal": "A Lei nº 6.425/1972 foi lida nos Prompts 2 a 4. Onde ela cala, a Lei nº 6.123/1968 entra, nos Prompts 5 a 14, no que aqueles prompts abriram: férias, licença, rito, dever, vencimento, petição, preventiva e disposições finais vivas. Este prompt não devolve artigo. Não muda pena.",
          "context": "Não escolha o dispositivo mais duro.",
          "exam": "A banca aplica a 8.112 ao Agente da PCPE.",
          "trap": "8.112 não foi o estatuto transcrito para este cargo.",
          "example": "Dúvida de dever: volte ao prompt da lei policial. Não à lei federal de servidor.",
          "mnemonic": "6.425 primeiro. 6.123 quando ela manda."
        },
        {
          "tag": "CAR",
          "name": "Carreira",
          "hook": "137 e 317, já lidas.",
          "literal": "A Lei Complementar nº 137/2008, plano de cargos da Polícia Civil, está no Prompt 15. A Lei Complementar nº 317/2015, cargo de Delegado como carreira jurídica de Estado, está no Prompt 16. O cargo de Agente não vira o de Delegado. Não se reabre atribuição.",
          "context": "Não promova o Agente por analogia.",
          "exam": "A banca cobra prerrogativa de Delegado para o Agente.",
          "trap": "Cada cargo na sua lei complementar.",
          "example": "Plano de carreira não é o art. 37, V.",
          "mnemonic": "15 e 16. Sem promoção inventada."
        },
        {
          "tag": "CF",
          "name": "Constituição do agente",
          "hook": "12.2, sem reprisar.",
          "literal": "Disposições constitucionais aplicáveis ao agente, neste curso: art. 37, caput e incisos lidos, § 2º e § 6º, art. 84, IV e VI, art. 70 e art. 71, I, art. 175 e art. 5º, LXXIII. O que não foi transcrito, como o teto do inciso XI e o parágrafo único do art. 70, continua para conferência. Não se completa.",
          "context": "Não cite emenda que o prompt do inciso não usou.",
          "exam": "A banca cobra a alínea b antiga da acumulação.",
          "trap": "A vigente é a da Emenda nº 138/2025, no Prompt 79.",
          "example": "Constituição do agente está atrás. Não na 8.112.",
          "mnemonic": "12.2 já lido. XI, conferir."
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
      "item": "6.425",
      "rule": "Estatuto policial.",
      "clue": "Prompts 2 a 4."
    },
    {
      "item": "6.123",
      "rule": "Quando a policial manda.",
      "clue": "Prompts 5 a 14."
    },
    {
      "item": "137 e 317",
      "rule": "Carreira.",
      "clue": "Agente não vira Delegado."
    },
    {
      "item": "8.112",
      "rule": "Não é o estatuto lido.",
      "clue": "Federal."
    },
    {
      "item": "CF",
      "rule": "Prompts 76 a 81.",
      "clue": "XI sem cifra."
    },
    {
      "item": "Acumulação",
      "rule": "Alínea b de 2025.",
      "clue": "Não volte a técnica."
    }
  ],
  "compare": [
    {
      "item": "PCPE",
      "ce": "Lei estadual já lida.",
      "cf": "8.112 não é o estatuto do cargo.",
      "effect": "separa"
    },
    {
      "item": "Delegado",
      "ce": "LC 317.",
      "cf": "Agente não herda.",
      "effect": "restringe"
    },
    {
      "item": "XI",
      "ce": "Não cifrado.",
      "cf": "Conferir.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 85011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O estatuto do Agente de Polícia da PCPE, neste curso, é a Lei nº 8.112/1990, e a LC nº 317/2015 estende ao Agente as prerrogativas do Delegado.",
      "correct": "E",
      "comentario": "ERRADO. O estatuto lido é o policial estadual, com a 6.123 no que couber. A LC nº 317 é do cargo de Delegado e não foi reaberta para promover o Agente."
    },
    {
      "id": 85012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A legislação pertinente do item 12, neste curso,",
      "correct": "a",
      "comentario": "Leis já lidas. Sem artigo novo.",
      "options": [
        {
          "key": "a",
          "label": "remete aos Prompts 2 a 16, sem reabrir dever, pena ou carreira."
        },
        {
          "key": "b",
          "label": "é a Lei nº 8.112/1990, transcrita agora."
        },
        {
          "key": "c",
          "label": "é a Lei nº 14.133, art. 6º, V, como estatuto disciplinar."
        },
        {
          "key": "d",
          "label": "revoga a Lei nº 6.425/1972."
        },
        {
          "key": "e",
          "label": "cifra o teto do art. 37, XI."
        }
      ]
    },
    {
      "id": 85013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Disposições constitucionais do agente já lidas incluem",
      "correct": "c",
      "comentario": "Acesso, concurso, acumulação vigente, comissão e temporário. XI não cifrado.",
      "options": [
        {
          "key": "a",
          "label": "apenas o art. 5º, caput."
        },
        {
          "key": "b",
          "label": "o teto remuneratório em reais, transcrito no inciso XI."
        },
        {
          "key": "c",
          "label": "acesso, concurso, acumulação na redação vigente, comissão e contratação temporária, sem cifra de teto."
        },
        {
          "key": "d",
          "label": "a Lei nº 8.112 como emenda constitucional."
        },
        {
          "key": "e",
          "label": "a prerrogativa de Delegado."
        }
      ]
    }
  ],
  "palette": "teal",
  "highlight": {
    "big": "Legislação do Agente",
    "small": "sem artigo inventado"
  },
  "heroLead": "O item 12.1 do edital, legislação pertinente, no que este curso fez, são as leis da Polícia Civil e o estatuto geral já lidos. O item 12.2, disposições constitucionais, está nos Prompts 76 a 81. Nada se reabre.",
  "footerLine": "Prompt 85 de 86.",
  "nextLine": "Diga continue para o Prompt 86: fechamento do edital de Direito Administrativo.",
  "closingMnemonic": "Estatuto já lido. 8.112 não é o da PCPE. Constituição do agente, sem teto inventado.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [],
  "toc": [
    {
      "id": "p85",
      "num": "85",
      "label": "A legislação do Agente"
    }
  ]
};
