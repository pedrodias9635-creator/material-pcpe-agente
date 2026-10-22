import type { StudyModule } from "./study";

export const PROMPT84: StudyModule = {
  "short": "Processo no mapa",
  "eyebrow": "Prompt 84 de 86 · Processo administrativo",
  "title": "Processo administrativo",
  "subtitle": "a 9.784 já foi lida",
  "description": "O item 10 do edital é processo administrativo. Os Prompts 38 e 39 leram a Lei nº 9.784/1999. Ela é federal. Não se inventa a lei pernambucana. Não se reabre prazo.",
  "reading": "Prompts 38 e 39. Sem artigo novo. Lei estadual de processo, se o edital a cobrar à parte, conferir. Não foi transcrita.",
  "terms": [
    "9.784",
    "federal",
    "prazo",
    "Pernambuco"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "A Lei nº 9.784 regula o processo no âmbito da administração federal.",
    "Estado pode ter lei própria. Este curso não a transcreveu.",
    "Prazo da 9.784 fica no prompt em que foi lido. Não se repete de memória."
  ],
  "importance": "A banca aplica prazo federal ao processo disciplinar da PCPE, que tem rito próprio já lido.",
  "distinctions": [
    "Prompt 38: arts. 1º a 21. Prompt 39: art. 22 até o último.",
    "Rito policial: Leis nº 6.425 e nº 6.123, Prompts 2 a 13.",
    "Não use a 9.784 para encurtar a defesa do policial."
  ],
  "organs": [
    {
      "sigla": "38",
      "nome": "Onde está",
      "funcao": "Dois prompts.",
      "base": "38",
      "nao": "Se não lembrar o dia, volte ao prompt. Não chute.",
      "tone": "cyan"
    },
    {
      "sigla": "FED",
      "nome": "Âmbito federal",
      "funcao": "Não é o estatuto da PCPE.",
      "base": "FED",
      "nao": "Não revogou, neste curso.",
      "tone": "emerald"
    },
    {
      "sigla": "PAD",
      "nome": "Não encurte",
      "funcao": "Defesa não se importa.",
      "base": "PAD",
      "nao": "Some só o que o texto manda somar. Aqui, nada se soma.",
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
      "wrong": "A 9.784 é a lei disciplinar da PCPE.",
      "right": "É processo federal. O disciplinar policial já foi lido."
    },
    {
      "wrong": "Este prompt altera prazo da 9.784.",
      "right": "Não altera."
    },
    {
      "wrong": "Pernambuco não pode ter lei própria de processo.",
      "right": "Pode. Ela não foi transcrita."
    },
    {
      "wrong": "A 9.784 revogou a 6.123.",
      "right": "Não, neste curso."
    },
    {
      "wrong": "Recurso de licitação está na 9.784, neste prompt.",
      "right": "Recurso da 14.133 não foi aberto."
    },
    {
      "wrong": "Dá para escolher o prazo mais curto.",
      "right": "Não. Cada rito é o seu."
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
      "id": "p84",
      "num": "84",
      "kicker": "Processo administrativo",
      "title": "Processo administrativo",
      "lead": "a 9.784 já foi lida",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "38",
          "name": "Onde está",
          "hook": "Dois prompts.",
          "literal": "A Lei nº 9.784/1999 foi lida no Prompt 38, do art. 1º ao 21, e no Prompt 39, do art. 22 ao último. Princípio, dever de decidir, recurso e revisão ficam lá. Este prompt não corrige prazo nem interessado.",
          "context": "Não reabra contraditório com número novo.",
          "exam": "A banca pede um prazo que você não confere no prompt certo.",
          "trap": "Se não lembrar o dia, volte ao prompt. Não chute.",
          "example": "Intimação e recurso têm sede própria. Não os invente aqui.",
          "mnemonic": "38 e 39. Sem correção."
        },
        {
          "tag": "FED",
          "name": "Âmbito federal",
          "hook": "Não é o estatuto da PCPE.",
          "literal": "A Lei nº 9.784/1999 declara, no que aqueles prompts transcreveram, o âmbito da administração pública federal. Não a transforme em código disciplinar de Pernambuco. O Estado pode editar norma própria. Essa norma não foi buscada nesta rodada. Conferir se a questão a exigir.",
          "context": "Não cite número de lei estadual de processo. Não foi conferido.",
          "exam": "A banca diz que a 9.784 revogou a Lei nº 6.123.",
          "trap": "Não revogou, neste curso.",
          "example": "Processo federal de um ministério não é o PAD do agente.",
          "mnemonic": "Federal lá. Policial, na lei já lida."
        },
        {
          "tag": "PAD",
          "name": "Não encurte",
          "hook": "Defesa não se importa.",
          "literal": "O processo disciplinar do Agente continua o das leis estaduais já estudadas. A Lei nº 9.784 não é atalho para reduzir defesa, pular intimação ou escolher o rito mais curto. Também não é roteiro para excluir licitante. Licitação tem o processo da Lei nº 14.133, no que foi aberto.",
          "context": "Não ensine a trocar de rito para prejudicar.",
          "exam": "A banca soma prazos das duas leis.",
          "trap": "Some só o que o texto manda somar. Aqui, nada se soma.",
          "example": "Cada rito no seu prompt.",
          "mnemonic": "Não encurte. Não some."
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
      "item": "38 e 39",
      "rule": "Lei nº 9.784.",
      "clue": "Não corrigir prazo."
    },
    {
      "item": "Âmbito",
      "rule": "Federal.",
      "clue": "Não é o PAD da PCPE."
    },
    {
      "item": "PAD",
      "rule": "Leis 6.425 e 6.123.",
      "clue": "Não encurtar."
    },
    {
      "item": "Lei estadual",
      "rule": "Não transcrita.",
      "clue": "Conferir."
    },
    {
      "item": "Licitação",
      "rule": "Processo próprio.",
      "clue": "No que foi aberto."
    },
    {
      "item": "Soma de prazos",
      "rule": "Não.",
      "clue": "Cada rito no seu lugar."
    }
  ],
  "compare": [
    {
      "item": "9.784",
      "ce": "Federal.",
      "cf": "PAD policial é estadual.",
      "effect": "separa"
    },
    {
      "item": "Prazo",
      "ce": "No prompt da lei.",
      "cf": "Não se chuta aqui.",
      "effect": "restringe"
    },
    {
      "item": "Defesa",
      "ce": "Não se encurta.",
      "cf": "Sem atalho.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 84011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "A Lei nº 9.784/1999 é o rito disciplinar do Agente da PCPE e revogou a Lei nº 6.123/1968.",
      "correct": "E",
      "comentario": "ERRADO. A 9.784 é o processo administrativo federal, já lido. O rito do policial permanece nas leis estaduais já estudadas."
    },
    {
      "id": 84012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O processo administrativo do item 10, neste curso,",
      "correct": "a",
      "comentario": "Prompts 38 e 39. Sem prazo novo.",
      "options": [
        {
          "key": "a",
          "label": "está nos Prompts 38 e 39, sem correção de prazo neste prompt."
        },
        {
          "key": "b",
          "label": "foi substituído pelo art. 71 da Lei nº 14.133."
        },
        {
          "key": "c",
          "label": "é a ação de improbidade."
        },
        {
          "key": "d",
          "label": "fixa cinco dias para qualquer defesa estadual."
        },
        {
          "key": "e",
          "label": "é o controle do TCU."
        }
      ]
    },
    {
      "id": 84013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Lei estadual de processo administrativo, se a banca a cobrar,",
      "correct": "c",
      "comentario": "Não foi transcrita. Conferir. Não inventar número.",
      "options": [
        {
          "key": "a",
          "label": "é a Lei nº 9.784, por identidade."
        },
        {
          "key": "b",
          "label": "é a Lei nº 14.133, art. 184, não lido."
        },
        {
          "key": "c",
          "label": "deve ser conferida no texto oficial, porque este curso não a transcreveu."
        },
        {
          "key": "d",
          "label": "não pode existir, porque o processo é só federal."
        },
        {
          "key": "e",
          "label": "é o estatuto do servidor, inteiro."
        }
      ]
    }
  ],
  "palette": "ember",
  "highlight": {
    "big": "Processo no mapa",
    "small": "sem artigo inventado"
  },
  "heroLead": "O item 10 do edital é processo administrativo. Os Prompts 38 e 39 leram a Lei nº 9.784/1999. Ela é federal. Não se inventa a lei pernambucana. Não se reabre prazo.",
  "footerLine": "Prompt 84 de 86.",
  "nextLine": "Diga continue para o Prompt 85: a legislação do Agente no item 12 do edital.",
  "closingMnemonic": "Processo federal já lido. PAD do policial, na lei estadual. Não encurte defesa.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [],
  "toc": [
    {
      "id": "p84",
      "num": "84",
      "label": "Processo administrativo"
    }
  ]
};
