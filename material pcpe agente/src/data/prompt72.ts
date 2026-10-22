import type { StudyModule } from "./study";

export const PROMPT72: StudyModule = {
  "short": "Direta e indireta",
  "eyebrow": "Prompt 72 de 86 · Administração direta e indireta",
  "title": "Direta e indireta",
  "subtitle": "lei cria autarquia e autoriza o resto",
  "description": "Direta é o ente e seus órgãos. Indireta tem personalidade. O art. 37, XIX e XX, diz como cada uma nasce. Empresa pública não muda para a Lei nº 14.133.",
  "reading": "Constituição, art. 37, XIX, redação da Emenda Constitucional nº 19/1998, e art. 37, XX.",
  "terms": [
    "autarquia",
    "fundação",
    "empresa pública",
    "subsidiária"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "Autarquia é criada por lei específica. Não apenas autorizada.",
    "Empresa pública, sociedade de economia mista e fundação são autorizadas por lei. A lei complementar define a área da fundação.",
    "Subsidiária depende de autorização legislativa em cada caso."
  ],
  "importance": "A banca cria empresa pública por lei, no mesmo verbo da autarquia, ou dispensa autorização da subsidiária.",
  "distinctions": [
    "Direta: órgãos sem personalidade. A PCPE está aqui.",
    "XIX: criada a autarquia; autorizadas empresa pública, sociedade de economia mista e fundação.",
    "XX: subsidiária e participação em empresa privada, autorização em cada caso."
  ],
  "organs": [
    {
      "sigla": "DIR",
      "nome": "Direta",
      "funcao": "Órgão não é pessoa.",
      "base": "DIR",
      "nao": "Personalidade é do Estado de Pernambuco, não do departamento.",
      "tone": "cyan"
    },
    {
      "sigla": "XIX",
      "nome": "Como nasce",
      "funcao": "Criar não é autorizar.",
      "base": "XIX",
      "nao": "Lei específica não é decreto do art. 84, VI.",
      "tone": "emerald"
    },
    {
      "sigla": "XX",
      "nome": "Subsidiária",
      "funcao": "Cada caso.",
      "base": "XX",
      "nao": "Empresa pública e sociedade de economia mista seguem a Lei nº 13.303/2016, não aberta. Não as traga para a Lei nº 14.133.",
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
      "wrong": "Empresa pública é criada, no mesmo verbo da autarquia.",
      "right": "Autarquia é criada. Empresa pública é autorizada."
    },
    {
      "wrong": "Fundação dispensa lei complementar.",
      "right": "A área de atuação cabe à lei complementar."
    },
    {
      "wrong": "Subsidiária nasce por portaria.",
      "right": "Autorização legislativa, em cada caso."
    },
    {
      "wrong": "Delegacia é da indireta.",
      "right": "É órgão da direta."
    },
    {
      "wrong": "Indireta segue sempre a Lei nº 14.133.",
      "right": "Empresa pública e sociedade de economia mista não. Art. 178 não aberto."
    },
    {
      "wrong": "Órgão tem personalidade.",
      "right": "Não tem."
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
      "id": "p72",
      "num": "72",
      "kicker": "Administração direta e indireta",
      "title": "Direta e indireta",
      "lead": "lei cria autarquia e autoriza o resto",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "DIR",
          "name": "Direta",
          "hook": "Órgão não é pessoa.",
          "literal": "Doutrina, com o caput do art. 37 já lido: administração direta é o próprio ente, por seus órgãos. Órgão não tem personalidade jurídica. A Polícia Civil de Pernambuco é administração direta estadual. Não é autarquia porque o edital a chama de polícia.",
          "context": "Não dê CNPJ de pessoa política à delegacia.",
          "exam": "A banca chama secretaria de entidade da indireta.",
          "trap": "Personalidade é do Estado de Pernambuco, não do departamento.",
          "example": "O agente é servidor do Estado, não de uma autarquia policial, salvo se a lei tivesse criado outra pessoa. Essa lei não se inventa.",
          "mnemonic": "Órgão da direta. Pessoa é o Estado."
        },
        {
          "tag": "XIX",
          "name": "Como nasce",
          "hook": "Criar não é autorizar.",
          "literal": "Constituição, art. 37, XIX, redação da Emenda Constitucional nº 19/1998: somente por lei específica poderá ser criada autarquia e autorizada a instituição de empresa pública, de sociedade de economia mista e de fundação, cabendo à lei complementar, neste último caso, definir as áreas de sua atuação.",
          "context": "Criada: autarquia. Autorizada: as outras três. Fundação ainda tem lei complementar para a área.",
          "exam": "A banca usa o verbo criar para a empresa pública.",
          "trap": "Lei específica não é decreto do art. 84, VI.",
          "example": "Uma autarquia pernambucana nasce por lei. Uma empresa pública do Estado nasce por autorização legal, não pelo mesmo verbo.",
          "mnemonic": "Cria autarquia. Autoriza o resto."
        },
        {
          "tag": "XX",
          "name": "Subsidiária",
          "hook": "Cada caso.",
          "literal": "Constituição, art. 37, XX: depende de autorização legislativa, em cada caso, a criação de subsidiárias das entidades mencionadas no inciso anterior, assim como a participação de qualquer delas em empresa privada.",
          "context": "Em cada caso. Autorização genérica não está na frase.",
          "exam": "A banca dispensa autorização da subsidiária.",
          "trap": "Empresa pública e sociedade de economia mista seguem a Lei nº 13.303/2016, não aberta. Não as traga para a Lei nº 14.133.",
          "example": "A subsidiária de uma sociedade de economia mista não nasce de portaria.",
          "mnemonic": "Cada caso. Sem portaria."
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
      "item": "Direta",
      "rule": "Ente e órgãos.",
      "clue": "PCPE está aqui."
    },
    {
      "item": "Autarquia",
      "rule": "Criada por lei específica.",
      "clue": "Não apenas autorizada."
    },
    {
      "item": "EP, SEM, fundação",
      "rule": "Autorizadas.",
      "clue": "Fundação: área por lei complementar."
    },
    {
      "item": "Subsidiária",
      "rule": "Autorização em cada caso.",
      "clue": "Inciso XX."
    },
    {
      "item": "Personalidade",
      "rule": "Indireta tem. Órgão não.",
      "clue": "Delegacia não é pessoa."
    },
    {
      "item": "13.303",
      "rule": "Não aberta.",
      "clue": "Não use a 14.133 no lugar."
    }
  ],
  "compare": [
    {
      "item": "Autarquia",
      "ce": "Criada.",
      "cf": "Empresa pública é autorizada.",
      "effect": "separa"
    },
    {
      "item": "Órgão",
      "ce": "Sem personalidade.",
      "cf": "Indireta tem.",
      "effect": "separa"
    },
    {
      "item": "Subsidiária",
      "ce": "Cada caso.",
      "cf": "Não é portaria.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 72011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Pelo art. 37, XIX, empresa pública e autarquia são criadas pelo mesmo verbo, e a subsidiária independe de autorização legislativa.",
      "correct": "E",
      "comentario": "ERRADO. Autarquia é criada. Empresa pública é autorizada. Subsidiária depende de autorização em cada caso, no inciso XX."
    },
    {
      "id": 72012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A Polícia Civil de Pernambuco, neste curso,",
      "correct": "a",
      "comentario": "Administração direta. Órgão. Não é autarquia inventada.",
      "options": [
        {
          "key": "a",
          "label": "é órgão da administração direta estadual, sem personalidade jurídica própria."
        },
        {
          "key": "b",
          "label": "é autarquia, porque exerce poder de polícia."
        },
        {
          "key": "c",
          "label": "é empresa pública."
        },
        {
          "key": "d",
          "label": "segue a Lei nº 13.303/2016."
        },
        {
          "key": "e",
          "label": "nasce por decreto do art. 84, VI."
        }
      ]
    },
    {
      "id": 72013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O art. 37, XX, exige autorização legislativa em cada caso para",
      "correct": "c",
      "comentario": "Subsidiária e participação em empresa privada.",
      "options": [
        {
          "key": "a",
          "label": "a criação de delegacia."
        },
        {
          "key": "b",
          "label": "a nomeação de cargo em comissão."
        },
        {
          "key": "c",
          "label": "a criação de subsidiária das entidades do inciso XIX e a participação delas em empresa privada."
        },
        {
          "key": "d",
          "label": "a concessão de férias."
        },
        {
          "key": "e",
          "label": "a edição de regulamento de fiel execução."
        }
      ]
    }
  ],
  "palette": "azure",
  "highlight": {
    "big": "Direta e indireta",
    "small": "sem artigo inventado"
  },
  "heroLead": "Direta é o ente e seus órgãos. Indireta tem personalidade. O art. 37, XIX e XX, diz como cada uma nasce. Empresa pública não muda para a Lei nº 14.133.",
  "footerLine": "Prompt 72 de 86.",
  "nextLine": "Diga continue para o Prompt 73: controle administrativo.",
  "closingMnemonic": "Cria autarquia. Autoriza empresa, sociedade e fundação. Subsidiária, em cada caso.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [],
  "toc": [
    {
      "id": "p72",
      "num": "72",
      "label": "Direta e indireta"
    }
  ]
};
