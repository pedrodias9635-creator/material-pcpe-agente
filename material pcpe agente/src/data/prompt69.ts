import type { StudyModule } from "./study";

export const PROMPT69: StudyModule = {
  "short": "Responsabilidade",
  "eyebrow": "Prompt 69 de 86 · Responsabilidade civil do Estado",
  "title": "Responsabilidade civil do Estado",
  "subtitle": "objetiva do Estado, regresso com culpa",
  "description": "O § 6º do art. 37 é a frase. O Estado responde sem culpa pelo dano do agente. O regresso contra o agente exige dolo ou culpa. Pessoa privada que presta serviço público também está na frase. Quem não presta, não.",
  "reading": "Constituição, art. 37, § 6º. Sem cifra. Sem prazo de prescrição neste prompt.",
  "terms": [
    "responsabilidade objetiva",
    "regresso",
    "nexo",
    "prestação de serviço público"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "Objetiva não dispensa conduta, dano e nexo. Dispensa a prova da culpa para a vítima cobrar o Estado.",
    "Omissão não está nomeada no parágrafo. Não invente a tese.",
    "Regresso não é automático. Exige dolo ou culpa do responsável."
  ],
  "importance": "A banca cobra culpa da vítima como requisito do § 6º, ou estende a frase a toda empresa privada.",
  "distinctions": [
    "Pessoas jurídicas de direito público respondem pelos danos que seus agentes, nessa qualidade, causarem a terceiros.",
    "As de direito privado prestadoras de serviço público também.",
    "Regresso: dolo ou culpa. Não é responsabilidade objetiva do agente."
  ],
  "organs": [
    {
      "sigla": "§6",
      "nome": "A frase",
      "funcao": "Objetiva na porta da vítima.",
      "base": "§6",
      "nao": "Culpa da vítima e força maior não estão escritas aqui. Não as invente como inciso.",
      "tone": "cyan"
    },
    {
      "sigla": "PRI",
      "nome": "Privado prestador",
      "funcao": "Não é toda empresa.",
      "base": "PRI",
      "nao": "Sociedade de economia mista pode ou não prestar serviço público. A frase olha a prestação, não o nome.",
      "tone": "emerald"
    },
    {
      "sigla": "REG",
      "nome": "Regresso",
      "funcao": "Dolo ou culpa do responsável.",
      "base": "REG",
      "nao": "Responsável, na frase, não é qualquer colega. É quem deu causa, com dolo ou culpa.",
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
      "wrong": "A vítima precisa provar o dolo do agente para cobrar o Estado.",
      "right": "A objetiva dispensa essa prova. O dolo volta no regresso."
    },
    {
      "wrong": "Toda empresa privada responde pelo § 6º.",
      "right": "Só a que presta serviço público."
    },
    {
      "wrong": "O regresso é objetivo.",
      "right": "Exige dolo ou culpa."
    },
    {
      "wrong": "Sem regresso, a vítima não recebe.",
      "right": "O regresso não é condição da indenização."
    },
    {
      "wrong": "Dano fora da função está na frase.",
      "right": "A frase diz nessa qualidade."
    },
    {
      "wrong": "Omissão tem a mesma frase expressa.",
      "right": "O parágrafo não nomeia omissão. Não invente a tese."
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
      "id": "p69",
      "num": "69",
      "kicker": "Responsabilidade civil do Estado",
      "title": "Responsabilidade civil do Estado",
      "lead": "objetiva do Estado, regresso com culpa",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "§6",
          "name": "A frase",
          "hook": "Objetiva na porta da vítima.",
          "literal": "Constituição, art. 37, § 6º: as pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.",
          "context": "Nessa qualidade. Dano de agente fora da função não está na frase.",
          "exam": "A banca exige que a vítima prove o dolo para receber do Estado.",
          "trap": "Culpa da vítima e força maior não estão escritas aqui. Não as invente como inciso.",
          "example": "O dano causado pelo agente da PCPE, nessa qualidade, pode ser cobrado do Estado sem prova de culpa. A culpa volta no regresso.",
          "mnemonic": "Vítima não prova culpa. Regresso prova."
        },
        {
          "tag": "PRI",
          "name": "Privado prestador",
          "hook": "Não é toda empresa.",
          "literal": "O § 6º alcança a pessoa de direito privado que presta serviço público. Empresa privada que não presta serviço público não entra na frase. Concessionária e permissionária, quando prestam o serviço, cabem. A Lei nº 8.987/1995 não foi aberta.",
          "context": "Não estenda o parágrafo ao comércio comum.",
          "exam": "A banca põe toda sociedade de economia mista no § 6º, mesmo fora do serviço público.",
          "trap": "Sociedade de economia mista pode ou não prestar serviço público. A frase olha a prestação, não o nome.",
          "example": "O ônibus de concessão, se prestar serviço público, está na frase. A loja da esquina, não.",
          "mnemonic": "Presta serviço público: entra. Não presta: fora."
        },
        {
          "tag": "REG",
          "name": "Regresso",
          "hook": "Dolo ou culpa do responsável.",
          "literal": "O direito de regresso é assegurado contra o responsável nos casos de dolo ou culpa. Não é objetivo. Não é condição para a vítima receber. O Estado pode pagar e depois regressar, se provar dolo ou culpa. Este prompt não escreve o prazo.",
          "context": "Não condicione a ação da vítima ao regresso.",
          "exam": "A banca diz que o agente responde objetivamente perante a vítima, no lugar do Estado.",
          "trap": "Responsável, na frase, não é qualquer colega. É quem deu causa, com dolo ou culpa.",
          "example": "O Estado indeniza o terceiro. Se o agente agiu com culpa, o regresso é a via. Sem culpa, o regresso não abre.",
          "mnemonic": "Primeiro o terceiro. Depois, se houver culpa, o agente."
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
      "item": "Porta da vítima",
      "rule": "Objetiva.",
      "clue": "Conduta do agente, dano e nexo. Sem prova de culpa."
    },
    {
      "item": "Nessa qualidade",
      "rule": "Função.",
      "clue": "Fora da função, a frase não abre."
    },
    {
      "item": "Privado",
      "rule": "Só prestador de serviço público.",
      "clue": "Não é toda empresa."
    },
    {
      "item": "Regresso",
      "rule": "Dolo ou culpa.",
      "clue": "Não é condição da indenização."
    },
    {
      "item": "Omissão",
      "rule": "Não nomeada.",
      "clue": "Não invente tese."
    },
    {
      "item": "Prazo",
      "rule": "Não escrito aqui.",
      "clue": "Não invente prescrição."
    }
  ],
  "compare": [
    {
      "item": "Vítima",
      "ce": "Não prova culpa.",
      "cf": "Regresso prova dolo ou culpa.",
      "effect": "separa"
    },
    {
      "item": "Público",
      "ce": "Entra.",
      "cf": "Privado só se prestar serviço.",
      "effect": "restringe"
    },
    {
      "item": "Agente",
      "ce": "Não é o réu objetivo da frase.",
      "cf": "O responsável volta no regresso.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 69011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Pelo art. 37, § 6º, a vítima só é indenizada se provar o dolo ou a culpa do agente, e qualquer empresa privada responde nos mesmos termos.",
      "correct": "E",
      "comentario": "ERRADO. A responsabilidade do Estado é objetiva. Dolo ou culpa são do regresso. A pessoa privada só entra se prestar serviço público."
    },
    {
      "id": 69012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O direito de regresso do § 6º",
      "correct": "c",
      "comentario": "Assegurado contra o responsável, nos casos de dolo ou culpa. Não é porta da vítima.",
      "options": [
        {
          "key": "a",
          "label": "é objetivo e substitui a indenização ao terceiro."
        },
        {
          "key": "b",
          "label": "dispensa dolo e culpa."
        },
        {
          "key": "c",
          "label": "exige dolo ou culpa do responsável e não é condição para a vítima receber."
        },
        {
          "key": "d",
          "label": "alcança dano do agente fora da função, pela própria frase."
        },
        {
          "key": "e",
          "label": "está limitado a R$ 50.000,00, escritos no parágrafo."
        }
      ]
    },
    {
      "id": 69013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Cabe no § 6º do art. 37",
      "correct": "a",
      "comentario": "Direito público e privado prestador de serviço público. Comércio comum, não.",
      "options": [
        {
          "key": "a",
          "label": "a pessoa jurídica de direito público e a de direito privado que presta serviço público."
        },
        {
          "key": "b",
          "label": "apenas a União."
        },
        {
          "key": "c",
          "label": "qualquer sociedade empresária."
        },
        {
          "key": "d",
          "label": "somente o agente, de forma objetiva, perante a vítima."
        },
        {
          "key": "e",
          "label": "a vítima, que deve provar a culpa para receber."
        }
      ]
    }
  ],
  "palette": "warm",
  "highlight": {
    "big": "Responsabilidade",
    "small": "sem artigo inventado"
  },
  "heroLead": "O § 6º do art. 37 é a frase. O Estado responde sem culpa pelo dano do agente. O regresso contra o agente exige dolo ou culpa. Pessoa privada que presta serviço público também está na frase. Quem não presta, não.",
  "footerLine": "Prompt 69 de 86.",
  "nextLine": "Diga continue para o Prompt 70: serviços públicos.",
  "closingMnemonic": "Estado paga sem culpa. Regresso só com dolo ou culpa. Privado, só se prestar o serviço.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [
    {
      "value": "dolo ou culpa",
      "label": "Porta do regresso, não da vítima",
      "source": "CF, art. 37, § 6º"
    }
  ],
  "toc": [
    {
      "id": "p69",
      "num": "69",
      "label": "Responsabilidade civil do Estado"
    }
  ]
};
