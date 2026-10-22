import type { StudyModule } from "./study";

export const PROMPT63: StudyModule = {
  "short": "Anulação e revogação",
  "eyebrow": "Prompt 63 de 86 · Extinção do ato",
  "title": "Anulação e revogação",
  "subtitle": "ilegalidade não é conveniência",
  "description": "A extinção do ato, neste prompt, fica na fronteira já usada no art. 71 da licitação. Anular é ilegalidade. Revogar é mérito. Súmula não se cita: o enunciado não foi relido agora.",
  "reading": "Doutrina, mais o art. 71 da Lei nº 14.133, já transcrito no Prompt 52. Súmula 473 não é reaberta.",
  "terms": [
    "anulação",
    "revogação",
    "cassação",
    "caducidade"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "Anulação retroage, em doutrina, respeitado o que a questão não pedir de exceção.",
    "Revogação não volta no tempo, em doutrina, e não cabe no ato vinculado.",
    "Cassação e caducidade não são nomes de anulação."
  ],
  "importance": "A banca revoga ato ilegal e anula ato inconveniente.",
  "distinctions": [
    "Anulação: vício de legalidade. Pode ser pela Administração ou pelo Judiciário, em doutrina.",
    "Revogação: conveniência e oportunidade. Só a Administração. Não cabe em ato vinculado.",
    "Cassação: o destinatário descumpre condição. Caducidade: norma posterior torna o ato incompatível. Doutrina, sem artigo transcrito."
  ],
  "organs": [
    {
      "sigla": "ANU",
      "nome": "Anulação",
      "funcao": "Ilegalidade.",
      "base": "ANU",
      "nao": "O Judiciário anula. Não revoga mérito, em doutrina.",
      "tone": "cyan"
    },
    {
      "sigla": "REV",
      "nome": "Revogação",
      "funcao": "Mérito, para a frente.",
      "base": "REV",
      "nao": "Direito adquirido não se resolve neste prompt. Conferir a Constituição antes de citar o inciso.",
      "tone": "emerald"
    },
    {
      "sigla": "OUT",
      "nome": "Cassação e caducidade",
      "funcao": "Não são anulação.",
      "base": "OUT",
      "nao": "Caducidade não corrige o ato que já nasceu ilegal.",
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
      "wrong": "Revogação corrige ilegalidade.",
      "right": "Ilegalidade se anula."
    },
    {
      "wrong": "Anulação é mérito.",
      "right": "Anulação é legalidade."
    },
    {
      "wrong": "O Judiciário revoga por conveniência.",
      "right": "Mérito não é via judicial, em doutrina."
    },
    {
      "wrong": "Revogação retroage.",
      "right": "Em doutrina, opera para a frente."
    },
    {
      "wrong": "Ato vinculado se revoga.",
      "right": "Sem margem, não há revogação."
    },
    {
      "wrong": "Caducidade é vício de origem.",
      "right": "Caducidade é incompatibilidade superveniente, em doutrina."
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
      "id": "p63",
      "num": "63",
      "kicker": "Extinção do ato",
      "title": "Anulação e revogação",
      "lead": "ilegalidade não é conveniência",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "ANU",
          "name": "Anulação",
          "hook": "Ilegalidade.",
          "literal": "Doutrina: anula-se o ato ilegal. O efeito, em regra, retroage. Exceções de doutrina, como a situação consolidada de boa-fé, não ganham número de súmula neste prompt. No art. 71 da Lei nº 14.133, a anulação da licitação exige ilegalidade insanável. Esse artigo não se generaliza para todo ato sem reler a norma do caso.",
          "context": "Não diga que todo vício sanável anula.",
          "exam": "A banca anula por conveniência.",
          "trap": "O Judiciário anula. Não revoga mérito, em doutrina.",
          "example": "Uma nomeação sem concurso, fora da exceção constitucional, é ilegal. O caminho é anular, não revogar.",
          "mnemonic": "Ilegal: anula. Sem súmula inventada."
        },
        {
          "tag": "REV",
          "name": "Revogação",
          "hook": "Mérito, para a frente.",
          "literal": "Doutrina: revogação é extinção por conveniência e oportunidade, com efeito a partir do ato de revogar. Não cabe em ato vinculado, porque não há mérito. Não é via do Judiciário. No art. 71, II e § 2º, a revogação da licitação ainda exige fato superveniente comprovado. Não transporte esse requisito para todo ato sem a norma.",
          "context": "Não revogue ato ilegal. O nome certo é anular.",
          "exam": "A banca dá à revogação efeito retroativo.",
          "trap": "Direito adquirido não se resolve neste prompt. Conferir a Constituição antes de citar o inciso.",
          "example": "Uma permissão precária, se a lei a tratar como revogável, pode cair por inconveniência. Uma aposentadoria já devida, não.",
          "mnemonic": "Mérito, para a frente, só se houver margem."
        },
        {
          "tag": "OUT",
          "name": "Cassação e caducidade",
          "hook": "Não são anulação.",
          "literal": "Doutrina: cassação extingue o ato porque o beneficiário descumpriu condição. Caducidade ocorre quando lei posterior torna o ato incompatível. Nenhuma das duas é sanção disfarçada nem atalho para punir sem processo. O processo administrativo já foi lido nos Prompts 38 e 39 e não se reabre.",
          "context": "Não chame cassação de revogação.",
          "exam": "A banca usa caducidade como nome de anulação por vício de origem.",
          "trap": "Caducidade não corrige o ato que já nasceu ilegal.",
          "example": "A autorização cujos requisitos o particular deixou de cumprir pode ser cassada, se a norma do caso o disser. Não invente a norma.",
          "mnemonic": "Descumpriu condição: cassação. Lei nova incompatível: caducidade."
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
      "item": "Anulação",
      "rule": "Ilegalidade.",
      "clue": "Em regra, retroage. Sem súmula."
    },
    {
      "item": "Revogação",
      "rule": "Mérito.",
      "clue": "Para a frente. Não cabe no vinculado."
    },
    {
      "item": "Juiz",
      "rule": "Anula.",
      "clue": "Não revoga conveniência."
    },
    {
      "item": "Art. 71",
      "rule": "Fato superveniente é da licitação.",
      "clue": "Não generalize."
    },
    {
      "item": "Cassação",
      "rule": "Descumprimento de condição.",
      "clue": "Não é anulação."
    },
    {
      "item": "Caducidade",
      "rule": "Lei posterior incompatível.",
      "clue": "Não é vício de origem."
    }
  ],
  "compare": [
    {
      "item": "Anular",
      "ce": "Ilegal.",
      "cf": "Revogar é mérito.",
      "effect": "separa"
    },
    {
      "item": "Efeito",
      "ce": "Anulação, em regra, para trás.",
      "cf": "Revogação para a frente.",
      "effect": "separa"
    },
    {
      "item": "Cassação",
      "ce": "Culpa do beneficiário na condição.",
      "cf": "Caducidade é lei nova.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 63011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O ato ilegal se revoga por conveniência, com efeito retroativo, e o Judiciário pode revogar o mérito do ato discricionário.",
      "correct": "E",
      "comentario": "ERRADO. Ato ilegal se anula. Revogação é mérito, para a frente, e não é via do Judiciário."
    },
    {
      "id": 63012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Cassação, neste prompt,",
      "correct": "a",
      "comentario": "É o descumprimento de condição pelo beneficiário. Não é anulação nem revogação.",
      "options": [
        {
          "key": "a",
          "label": "é a extinção porque o beneficiário descumpriu condição, em doutrina."
        },
        {
          "key": "b",
          "label": "é o nome da anulação por ilegalidade de origem."
        },
        {
          "key": "c",
          "label": "é a revogação pelo Judiciário."
        },
        {
          "key": "d",
          "label": "está definida no art. 71 da Lei nº 14.133."
        },
        {
          "key": "e",
          "label": "retroage sempre, por artigo transcrito aqui."
        }
      ]
    },
    {
      "id": 63013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A revogação da licitação, já lida no art. 71,",
      "correct": "c",
      "comentario": "Fato superveniente comprovado é daquele artigo. Não se generaliza sem norma.",
      "options": [
        {
          "key": "a",
          "label": "dispensa fato superveniente e vale para todo ato vinculado."
        },
        {
          "key": "b",
          "label": "é anulação por outro nome."
        },
        {
          "key": "c",
          "label": "exige, naquele artigo, fato superveniente comprovado, requisito que não se transporta a todo ato sem norma."
        },
        {
          "key": "d",
          "label": "é competência do Judiciário."
        },
        {
          "key": "e",
          "label": "retroage à publicação do edital, por doutrina deste prompt."
        }
      ]
    }
  ],
  "palette": "leaf",
  "highlight": {
    "big": "Anulação e revogação",
    "small": "sem artigo inventado"
  },
  "heroLead": "A extinção do ato, neste prompt, fica na fronteira já usada no art. 71 da licitação. Anular é ilegalidade. Revogar é mérito. Súmula não se cita: o enunciado não foi relido agora.",
  "footerLine": "Prompt 63 de 86.",
  "nextLine": "Diga continue para o Prompt 64: poder hierárquico.",
  "closingMnemonic": "Ilegal se anula. Inconveniente, se houver margem, se revoga. Cassação não é os dois.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [],
  "toc": [
    {
      "id": "p63",
      "num": "63",
      "label": "Anulação e revogação"
    }
  ]
};
