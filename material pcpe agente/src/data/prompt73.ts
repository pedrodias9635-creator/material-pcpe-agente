import type { StudyModule } from "./study";

export const PROMPT73: StudyModule = {
  "short": "Controle interno",
  "eyebrow": "Prompt 73 de 86 · Controle da administração",
  "title": "Controle administrativo",
  "subtitle": "hierárquico por dentro, tutela por fora",
  "description": "O item 9.1 é o controle que a própria Administração faz. Hierárquico, na mesma pessoa. Finalístico, sobre a indireta. Não é o controle do juiz nem o do Tribunal de Contas. Súmula de autotutela não se cita.",
  "reading": "Doutrina. Constituição, art. 70, caput, só para não confundir controle interno com controle externo. Improbidade não se reabre.",
  "terms": [
    "controle hierárquico",
    "tutela",
    "autotutela",
    "controle interno"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "Autotutela é doutrina: a Administração revê os próprios atos. Sem número de súmula.",
    "Tutela não é hierarquia. O Prompt 64 já separou.",
    "Controle interno do art. 70 não é o poder disciplinar."
  ],
  "importance": "A banca chama tutela de hierarquia e cita súmula cujo enunciado não foi relido.",
  "distinctions": [
    "Controle de legalidade e, onde houver margem, de mérito. Doutrina.",
    "Sobre órgão da mesma pessoa: hierárquico.",
    "Sobre autarquia e fundação: finalístico, nos limites da lei. Não se invade a gestão."
  ],
  "organs": [
    {
      "sigla": "AUT",
      "nome": "Autotutela",
      "funcao": "Rever o próprio ato, sem súmula.",
      "base": "AUT",
      "nao": "Autotutela não dispensa processo quando a lei o exige.",
      "tone": "cyan"
    },
    {
      "sigla": "HIE",
      "nome": "Hierárquico",
      "funcao": "Mesma pessoa.",
      "base": "HIE",
      "nao": "Empresa pública tem personalidade. O controle, se houver, não se chama hierárquico.",
      "tone": "emerald"
    },
    {
      "sigla": "TUT",
      "nome": "Tutela",
      "funcao": "Outra pessoa, limite legal.",
      "base": "TUT",
      "nao": "Controle externo fica no Prompt 75.",
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
      "wrong": "Tutela é hierarquia.",
      "right": "Tutela atravessa a personalidade. Hierarquia, não."
    },
    {
      "wrong": "Autotutela está na Súmula tal, citada aqui.",
      "right": "Enunciado não relido. Não cite."
    },
    {
      "wrong": "Controle administrativo é o do Tribunal de Contas.",
      "right": "Esse é externo. Outro prompt."
    },
    {
      "wrong": "O art. 70 define tutela.",
      "right": "Fala em controle interno e externo da fiscalização da União."
    },
    {
      "wrong": "Autotutela revoga ato ilegal.",
      "right": "Ilegal se anula."
    },
    {
      "wrong": "Corregedoria é controle judicial.",
      "right": "É interno, se a lei a prever."
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
      "id": "p73",
      "num": "73",
      "kicker": "Controle da administração",
      "title": "Controle administrativo",
      "lead": "hierárquico por dentro, tutela por fora",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "AUT",
          "name": "Autotutela",
          "hook": "Rever o próprio ato, sem súmula.",
          "literal": "Doutrina: a Administração pode anular os próprios atos ilegais e, se houver margem, revogar os inconvenientes. Isso é autotutela. Este curso não transcreve enunciado de súmula. Se a questão pedir número, confira. Não invente.",
          "context": "Anular e revogar continuam distintos. O Prompt 63 fechou a fronteira.",
          "exam": "A banca cola um número de súmula não relido.",
          "trap": "Autotutela não dispensa processo quando a lei o exige.",
          "example": "A PCPE pode rever ato interno ilegal. Não revê sentença.",
          "mnemonic": "Rever o próprio. Sem número forjado."
        },
        {
          "tag": "HIE",
          "name": "Hierárquico",
          "hook": "Mesma pessoa.",
          "literal": "Doutrina: o controle hierárquico sobe na mesma pessoa jurídica. O superior revê o inferior, nos limites da competência. Não alcança autarquia. Não é recurso para o Judiciário.",
          "context": "Subordinado não controla o chefe.",
          "exam": "A banca estende o controle hierárquico à empresa pública.",
          "trap": "Empresa pública tem personalidade. O controle, se houver, não se chama hierárquico.",
          "example": "A corregedoria, se a lei estadual a prever, é controle interno. O artigo dessa lei não se reabre.",
          "mnemonic": "Sobe na mesma pessoa."
        },
        {
          "tag": "TUT",
          "name": "Tutela",
          "hook": "Outra pessoa, limite legal.",
          "literal": "Doutrina: tutela, ou controle finalístico, é o que a administração direta exerce sobre entidade da indireta. Não é subordinação. Não substitui os dirigentes. O art. 70, caput, fala em controle interno de cada Poder ao lado do controle externo do Congresso, na fiscalização da União. Não é a definição de tutela.",
          "context": "Não use o art. 70 para dizer que o governador julga as contas da autarquia.",
          "exam": "A banca chama tutela de poder disciplinar sobre o particular.",
          "trap": "Controle externo fica no Prompt 75.",
          "example": "A secretaria acompanha a finalidade da autarquia, se a lei de criação o disser. Não nomeia o dia a dia por gosto.",
          "mnemonic": "Finalidade, não o cotidiano."
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
      "item": "Autotutela",
      "rule": "Anula o ilegal e revoga o mérito.",
      "clue": "Sem súmula."
    },
    {
      "item": "Hierárquico",
      "rule": "Mesma pessoa.",
      "clue": "Sobe."
    },
    {
      "item": "Tutela",
      "rule": "Indireta.",
      "clue": "Não é subordinação."
    },
    {
      "item": "Art. 70",
      "rule": "Não é a definição de tutela.",
      "clue": "É fiscalização da União."
    },
    {
      "item": "Juiz",
      "rule": "Não é este item.",
      "clue": "Prompt 74."
    },
    {
      "item": "Improbidade",
      "rule": "Já lida.",
      "clue": "Prompts 34 a 37."
    }
  ],
  "compare": [
    {
      "item": "Hierárquico",
      "ce": "Mesma pessoa.",
      "cf": "Tutela é outra pessoa.",
      "effect": "separa"
    },
    {
      "item": "Anular",
      "ce": "Ilegal.",
      "cf": "Revogar é mérito.",
      "effect": "separa"
    },
    {
      "item": "Art. 70",
      "ce": "Fiscalização da União.",
      "cf": "Não é tutela estadual.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 73011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "A tutela sobre a autarquia é subordinação hierárquica, e a autotutela depende de súmula cujo número este prompt transcreve.",
      "correct": "E",
      "comentario": "ERRADO. Tutela não é hierarquia. Súmula não foi transcrita."
    },
    {
      "id": 73012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Controle hierárquico",
      "correct": "b",
      "comentario": "Mesma pessoa. Não alcança a indireta como se fosse departamento.",
      "options": [
        {
          "key": "a",
          "label": "alcança a sociedade de economia mista como departamento."
        },
        {
          "key": "b",
          "label": "ocorre na mesma pessoa jurídica, do superior sobre o inferior."
        },
        {
          "key": "c",
          "label": "é o controle do Tribunal de Contas."
        },
        {
          "key": "d",
          "label": "é sempre judicial."
        },
        {
          "key": "e",
          "label": "dispensa competência."
        }
      ]
    },
    {
      "id": 73013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O art. 70, caput, da Constituição",
      "correct": "d",
      "comentario": "Fiscalização da União, controle externo do Congresso e controle interno de cada Poder. Não define tutela.",
      "options": [
        {
          "key": "a",
          "label": "define a tutela administrativa sobre autarquia estadual."
        },
        {
          "key": "b",
          "label": "entrega ao delegado o julgamento de contas."
        },
        {
          "key": "c",
          "label": "é o § 6º da responsabilidade."
        },
        {
          "key": "d",
          "label": "trata da fiscalização da União, com controle externo do Congresso e controle interno de cada Poder."
        },
        {
          "key": "e",
          "label": "dispensa o controle de legalidade."
        }
      ]
    }
  ],
  "palette": "leaf",
  "highlight": {
    "big": "Controle interno",
    "small": "sem artigo inventado"
  },
  "heroLead": "O item 9.1 é o controle que a própria Administração faz. Hierárquico, na mesma pessoa. Finalístico, sobre a indireta. Não é o controle do juiz nem o do Tribunal de Contas. Súmula de autotutela não se cita.",
  "footerLine": "Prompt 73 de 86.",
  "nextLine": "Diga continue para o Prompt 74: controle judicial.",
  "closingMnemonic": "Rever o próprio ato. Hierarquia por dentro. Tutela por fora, sem súmula inventada.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [],
  "toc": [
    {
      "id": "p73",
      "num": "73",
      "label": "Controle administrativo"
    }
  ]
};
