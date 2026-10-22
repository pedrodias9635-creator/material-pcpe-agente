import type { StudyModule } from "./study";

export const PROMPT70: StudyModule = {
  "short": "Serviços públicos",
  "eyebrow": "Prompt 70 de 86 · Serviços públicos",
  "title": "Serviços públicos",
  "subtitle": "direto, concessão ou permissão, com licitação",
  "description": "O art. 175 entrega o serviço ao Poder Público, direto ou por concessão e permissão, sempre por licitação. A lei do regime não foi aberta. Adequado está no texto. A lista doutrinária de princípios não vira inciso.",
  "reading": "Constituição, art. 175, caput e parágrafo único. Art. 30, V, para o serviço local.",
  "terms": [
    "serviço público",
    "concessão",
    "permissão",
    "serviço adequado"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "Sempre através de licitação, na frase do art. 175. Não invente exceção neste prompt.",
    "Concessão e permissão não são privatização.",
    "Transporte coletivo local é essencial, no art. 30, V."
  ],
  "importance": "A banca dispensa licitação na concessão ou chama permissão de venda do bem.",
  "distinctions": [
    "Art. 175: incumbe ao Poder Público, na forma da lei, diretamente ou sob concessão ou permissão, sempre através de licitação.",
    "A lei disporá sobre regime, direitos dos usuários, tarifa e serviço adequado.",
    "Princípios de continuidade, mutabilidade e igualdade são doutrina, não o parágrafo único."
  ],
  "organs": [
    {
      "sigla": "175",
      "nome": "Quem presta",
      "funcao": "Direto ou delegado, com licitação.",
      "base": "175",
      "nao": "Diretamente não é o mesmo que concessão. São modos do mesmo caput.",
      "tone": "cyan"
    },
    {
      "sigla": "PU",
      "nome": "O que a lei dirá",
      "funcao": "Quatro incisos, sem cifra.",
      "base": "PU",
      "nao": "A Lei nº 8.987/1995 não foi aberta. Não invente artigo dela.",
      "tone": "emerald"
    },
    {
      "sigla": "30",
      "nome": "Interesse local",
      "funcao": "Transporte coletivo é essencial.",
      "base": "30",
      "nao": "Interesse local não é o serviço da União. Não invente a partilha.",
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
      "wrong": "Concessão dispensa licitação.",
      "right": "O art. 175 diz sempre através de licitação."
    },
    {
      "wrong": "Permissão é alienação do bem.",
      "right": "É modo de prestar serviço, na forma da lei."
    },
    {
      "wrong": "Continuidade está no inciso IV.",
      "right": "O inciso IV diz serviço adequado. Continuidade é doutrina."
    },
    {
      "wrong": "Todo serviço local é essencial.",
      "right": "A frase chama essencial o transporte coletivo."
    },
    {
      "wrong": "A Lei nº 8.987 foi transcrita aqui.",
      "right": "Não foi. Conferir."
    },
    {
      "wrong": "Serviço público é só o prestado por órgão.",
      "right": "Também cabe concessão ou permissão."
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
      "id": "p70",
      "num": "70",
      "kicker": "Serviços públicos",
      "title": "Serviços públicos",
      "lead": "direto, concessão ou permissão, com licitação",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "175",
          "name": "Quem presta",
          "hook": "Direto ou delegado, com licitação.",
          "literal": "Constituição, art. 175: incumbe ao Poder Público, na forma da lei, diretamente ou sob regime de concessão ou permissão, sempre através de licitação, a prestação de serviços públicos.",
          "context": "Sempre através de licitação. A frase não abre dispensa. Outra norma, se houver, não foi lida aqui.",
          "exam": "A banca tira a licitação da concessão.",
          "trap": "Diretamente não é o mesmo que concessão. São modos do mesmo caput.",
          "example": "A PCPE não é concessionária de serviço público. É administração direta. O serviço de transporte local é outro exemplo, o do art. 30, V.",
          "mnemonic": "Direto ou delegado. Licitação na frase."
        },
        {
          "tag": "PU",
          "name": "O que a lei dirá",
          "hook": "Quatro incisos, sem cifra.",
          "literal": "Parágrafo único do art. 175: a lei disporá sobre I - o regime das empresas concessionárias e permissionárias, o caráter especial do contrato e da prorrogação, bem como caducidade, fiscalização e rescisão; II - os direitos dos usuários; III - política tarifária; IV - a obrigação de manter serviço adequado.",
          "context": "Serviço adequado está no inciso IV. Continuidade não está escrita ali. É doutrina.",
          "exam": "A banca cobra um percentual de tarifa que o inciso não escreve.",
          "trap": "A Lei nº 8.987/1995 não foi aberta. Não invente artigo dela.",
          "example": "Usuário tem direitos porque a lei os disporá. O inciso não lista quais.",
          "mnemonic": "Adequado está. Percentual, não."
        },
        {
          "tag": "30",
          "name": "Interesse local",
          "hook": "Transporte coletivo é essencial.",
          "literal": "Constituição, art. 30, V: compete aos Municípios organizar e prestar, diretamente ou sob regime de concessão ou permissão, os serviços públicos de interesse local, incluído o de transporte coletivo, que tem caráter essencial.",
          "context": "Essencial, na frase, é o transporte coletivo. Não estenda o adjetivo a todo serviço local.",
          "exam": "A banca tira o caráter essencial do transporte.",
          "trap": "Interesse local não é o serviço da União. Não invente a partilha.",
          "example": "O ônibus municipal está no inciso. A segurança pública não vira serviço local por analogia.",
          "mnemonic": "Local, com transporte essencial."
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
      "item": "Art. 175",
      "rule": "Direto, concessão ou permissão.",
      "clue": "Sempre com licitação, na frase."
    },
    {
      "item": "Adequado",
      "rule": "Inciso IV.",
      "clue": "Continuidade é doutrina."
    },
    {
      "item": "Tarifa",
      "rule": "A lei dispõe.",
      "clue": "Sem percentual aqui."
    },
    {
      "item": "Lei 8.987",
      "rule": "Não aberta.",
      "clue": "Conferir."
    },
    {
      "item": "Art. 30, V",
      "rule": "Serviço local.",
      "clue": "Transporte coletivo é essencial."
    },
    {
      "item": "PCPE",
      "rule": "Não é concessionária.",
      "clue": "Administração direta."
    }
  ],
  "compare": [
    {
      "item": "Direto",
      "ce": "O Poder presta.",
      "cf": "Concessão e permissão delegam o modo.",
      "effect": "separa"
    },
    {
      "item": "Adequado",
      "ce": "Texto.",
      "cf": "Continuidade é doutrina.",
      "effect": "separa"
    },
    {
      "item": "Essencial",
      "ce": "Transporte coletivo.",
      "cf": "Não é todo serviço local.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 70011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O art. 175 dispensa licitação na permissão e chama de essencial todo serviço público de interesse local.",
      "correct": "E",
      "comentario": "ERRADO. O caput diz sempre através de licitação. Essencial, no art. 30, V, é o transporte coletivo."
    },
    {
      "id": 70012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O parágrafo único do art. 175 atribui à lei dispor sobre",
      "correct": "d",
      "comentario": "Regime, usuários, tarifa e serviço adequado. Sem percentual.",
      "options": [
        {
          "key": "a",
          "label": "um percentual único de tarifa, escrito no próprio inciso."
        },
        {
          "key": "b",
          "label": "a definição de crime de responsabilidade."
        },
        {
          "key": "c",
          "label": "a extinção de cargo vago."
        },
        {
          "key": "d",
          "label": "o regime do contrato, os direitos dos usuários, a política tarifária e a obrigação de manter serviço adequado."
        },
        {
          "key": "e",
          "label": "a responsabilidade objetiva, repetindo o § 6º do art. 37."
        }
      ]
    },
    {
      "id": 70013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Continuidade do serviço público, neste prompt,",
      "correct": "b",
      "comentario": "É doutrina. O texto fala em serviço adequado, não nomeia continuidade.",
      "options": [
        {
          "key": "a",
          "label": "está escrita no inciso IV do art. 175."
        },
        {
          "key": "b",
          "label": "é doutrina, enquanto o inciso IV escreve serviço adequado."
        },
        {
          "key": "c",
          "label": "dispensa a licitação."
        },
        {
          "key": "d",
          "label": "é o mesmo que tarifa."
        },
        {
          "key": "e",
          "label": "só vale para a União."
        }
      ]
    }
  ],
  "palette": "cool",
  "highlight": {
    "big": "Serviços públicos",
    "small": "sem artigo inventado"
  },
  "heroLead": "O art. 175 entrega o serviço ao Poder Público, direto ou por concessão e permissão, sempre por licitação. A lei do regime não foi aberta. Adequado está no texto. A lista doutrinária de princípios não vira inciso.",
  "footerLine": "Prompt 70 de 86.",
  "nextLine": "Diga continue para o Prompt 71: centralização, descentralização, concentração e desconcentração.",
  "closingMnemonic": "Serviço: direto ou delegado, com licitação. Adequado está no texto. Essencial é o transporte local.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [],
  "toc": [
    {
      "id": "p70",
      "num": "70",
      "label": "Serviços públicos"
    }
  ]
};
