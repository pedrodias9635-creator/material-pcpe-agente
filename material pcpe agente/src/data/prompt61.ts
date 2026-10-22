import type { StudyModule } from "./study";

export const PROMPT61: StudyModule = {
  "short": "Atributos",
  "eyebrow": "Prompt 61 de 86 · Ato administrativo",
  "title": "Atributos do ato",
  "subtitle": "presunção, imperatividade, autoexecutoriedade",
  "description": "Atributo não é elemento. Elemento falta e o ato nasce viciado. Atributo é qualidade que a doutrina reconhece em certos atos. Nenhum deles é absoluto.",
  "reading": "Doutrina. Sem artigo transcrito neste prompt. Não invente presunção absoluta.",
  "terms": [
    "presunção de legitimidade",
    "imperatividade",
    "autoexecutoriedade",
    "tipicidade"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "Presunção é relativa. Admite prova em contrário.",
    "Autoexecutoriedade não está em todo ato.",
    "Imperatividade não alcança o ato que só declara uma situação do particular sem lhe impor dever."
  ],
  "importance": "A banca cobra autoexecutoriedade como atributo de todo ato, inclusive do que depende de juiz.",
  "distinctions": [
    "Presunção de legitimidade e veracidade: o ato se presume conforme até prova em contrário. Doutrina.",
    "Imperatividade: impõe obrigação. Não é de todo ato.",
    "Autoexecutoriedade: executa sem ir primeiro ao Judiciário. Só onde a lei ou a urgência da doutrina a reconhecem."
  ],
  "organs": [
    {
      "sigla": "PRE",
      "nome": "Presunção",
      "funcao": "Relativa, não absoluta.",
      "base": "PRE",
      "nao": "Presunção não dispensa motivação onde outra norma a exija. Essa norma não se inventa aqui.",
      "tone": "cyan"
    },
    {
      "sigla": "IMP",
      "nome": "Imperatividade",
      "funcao": "Impõe, não pede.",
      "base": "IMP",
      "nao": "Concordância do particular não é requisito do ato imperativo. Também não cura competência.",
      "tone": "emerald"
    },
    {
      "sigla": "AUT",
      "nome": "Autoexecutoriedade",
      "funcao": "Não é atributo universal.",
      "base": "AUT",
      "nao": "Executoriedade não é coercibilidade. A doutrina às vezes separa as duas. Não unifique se a questão separar.",
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
      "wrong": "Atributo e elemento são sinônimos.",
      "right": "Elemento compõe o ato. Atributo é qualidade de alguns."
    },
    {
      "wrong": "A presunção é absoluta.",
      "right": "É relativa, em doutrina."
    },
    {
      "wrong": "Todo ato é autoexecutório.",
      "right": "Não. Só onde couber."
    },
    {
      "wrong": "Imperatividade depende da concordância.",
      "right": "Se depende de concordância, não é esse atributo."
    },
    {
      "wrong": "Tipicidade está no art. 37, I.",
      "right": "Não está. Se a questão usar tipicidade, trate como doutrina."
    },
    {
      "wrong": "Autoexecutoriedade dispensa competência.",
      "right": "Atributo não cura elemento."
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
      "id": "p61",
      "num": "61",
      "kicker": "Ato administrativo",
      "title": "Atributos do ato",
      "lead": "presunção, imperatividade, autoexecutoriedade",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "PRE",
          "name": "Presunção",
          "hook": "Relativa, não absoluta.",
          "literal": "Doutrina: o ato administrativo presume-se legítimo e verdadeiro. A presunção é relativa. O particular pode provar o contrário. Ela não torna o ato ilegal em legal.",
          "context": "Não diga presunção absoluta. Este prompt não tem artigo que a escreva.",
          "exam": "A banca trata a presunção como prova que o cidadão não pode derrubar.",
          "trap": "Presunção não dispensa motivação onde outra norma a exija. Essa norma não se inventa aqui.",
          "example": "Uma multa administrativa se presume válida até o recurso ou a prova em contrário. Não se presume eterna.",
          "mnemonic": "Presume. Não blinda."
        },
        {
          "tag": "IMP",
          "name": "Imperatividade",
          "hook": "Impõe, não pede.",
          "literal": "Doutrina: imperatividade é o poder de impor obrigações a terceiros, independentemente de concordância. Atos negociais e enunciativos não carregam esse atributo só porque são administrativos.",
          "context": "Não confunda com autoexecutoriedade. Uma coisa é impor. Outra é executar com as próprias mãos.",
          "exam": "A banca põe imperatividade em todo certificado.",
          "trap": "Concordância do particular não é requisito do ato imperativo. Também não cura competência.",
          "example": "A ordem de interdição, quando legal, não depende do sim do responsável. O certificado de uma informação, não.",
          "mnemonic": "Impõe dever. Não é todo papel."
        },
        {
          "tag": "AUT",
          "name": "Autoexecutoriedade",
          "hook": "Não é atributo universal.",
          "literal": "Doutrina: autoexecutoriedade é executar o ato sem prévia autorização judicial. Não está em todo ato. Onde a Administração precisa do Judiciário, o atributo não se inventa. Este prompt não lista as hipóteses legais. Conferir a norma do caso.",
          "context": "Não ensine execução material fora da lei.",
          "exam": "A banca diz que todo ato se executa na hora, sem juiz e sem lei.",
          "trap": "Executoriedade não é coercibilidade. A doutrina às vezes separa as duas. Não unifique se a questão separar.",
          "example": "Cobrar multa pode depender de inscrição e de execução, não de um atributo automático. Não invente o rito.",
          "mnemonic": "Executa só onde a ordem jurídica deixa."
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
      "item": "Elemento",
      "rule": "Compõe.",
      "clue": "Já foi o Prompt 60."
    },
    {
      "item": "Atributo",
      "rule": "Qualidade.",
      "clue": "Não é de todo ato."
    },
    {
      "item": "Presunção",
      "rule": "Relativa.",
      "clue": "Não blinda o ilegal."
    },
    {
      "item": "Imperatividade",
      "rule": "Impõe dever.",
      "clue": "Não é executar."
    },
    {
      "item": "Autoexecutoriedade",
      "rule": "Executa sem juiz prévio.",
      "clue": "Não é universal."
    },
    {
      "item": "Tipicidade",
      "rule": "Doutrina, se cobrada.",
      "clue": "Não está no caput."
    }
  ],
  "compare": [
    {
      "item": "Presunção",
      "ce": "Relativa.",
      "cf": "Não é absoluta.",
      "effect": "restringe"
    },
    {
      "item": "Imperatividade",
      "ce": "Impõe.",
      "cf": "Autoexecutoriedade executa.",
      "effect": "separa"
    },
    {
      "item": "Atributo",
      "ce": "Alguns atos.",
      "cf": "Elemento é de constituição.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 61011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "A autoexecutoriedade é atributo de todo ato administrativo e torna absoluta a presunção de legitimidade.",
      "correct": "E",
      "comentario": "ERRADO. Autoexecutoriedade não é universal. A presunção, em doutrina, é relativa."
    },
    {
      "id": 61012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Imperatividade, neste prompt,",
      "correct": "c",
      "comentario": "É o poder de impor dever, sem concordância, e não se confunde com executar materialmente.",
      "options": [
        {
          "key": "a",
          "label": "é o mesmo que autoexecutoriedade."
        },
        {
          "key": "b",
          "label": "está em todo certificado e atestado."
        },
        {
          "key": "c",
          "label": "é a imposição de obrigação independentemente de concordância, e não alcança todo ato."
        },
        {
          "key": "d",
          "label": "está nomeada no art. 37, caput."
        },
        {
          "key": "e",
          "label": "cura a falta de competência."
        }
      ]
    },
    {
      "id": 61013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A presunção de legitimidade",
      "correct": "b",
      "comentario": "Relativa. Não converte ilegalidade em legalidade.",
      "options": [
        {
          "key": "a",
          "label": "é absoluta e impede prova em contrário."
        },
        {
          "key": "b",
          "label": "é relativa, em doutrina, e admite prova em contrário."
        },
        {
          "key": "c",
          "label": "substitui a motivação em qualquer caso, por artigo deste prompt."
        },
        {
          "key": "d",
          "label": "é elemento, não atributo."
        },
        {
          "key": "e",
          "label": "só vale para ato vinculado."
        }
      ]
    }
  ],
  "palette": "fresh",
  "highlight": {
    "big": "Atributos",
    "small": "sem artigo inventado"
  },
  "heroLead": "Atributo não é elemento. Elemento falta e o ato nasce viciado. Atributo é qualidade que a doutrina reconhece em certos atos. Nenhum deles é absoluto.",
  "footerLine": "Prompt 61 de 86.",
  "nextLine": "Diga continue para o Prompt 62: classificação do ato administrativo.",
  "closingMnemonic": "Presume, relativo. Impõe, sem ser todo ato. Executa, só onde couber.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [],
  "toc": [
    {
      "id": "p61",
      "num": "61",
      "label": "Atributos do ato"
    }
  ]
};
