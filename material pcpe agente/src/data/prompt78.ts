import type { StudyModule } from "./study";

export const PROMPT78: StudyModule = {
  "short": "Concurso",
  "eyebrow": "Prompt 78 de 86 · Concurso público",
  "title": "Concurso público",
  "subtitle": "até dois anos, uma prorrogação",
  "description": "Cargo e emprego dependem de concurso, salvo comissão. A validade é de até dois anos, prorrogável uma vez, por igual período. No prazo do edital, o aprovado tem prioridade. Sem o II e o III, o ato é nulo.",
  "reading": "Constituição, art. 37, II, III, IV e § 2º, com a redação da Emenda Constitucional nº 19 no inciso II.",
  "terms": [
    "concurso",
    "validade",
    "prioridade",
    "nulidade"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "Até dois anos. Não é dois anos fixos.",
    "Uma prorrogação, por igual período. Não é duas.",
    "Prioridade vale no prazo improrrogável do edital de convocação, na carreira."
  ],
  "importance": "A banca prorroga duas vezes ou tira a prioridade de quem já foi aprovado.",
  "distinctions": [
    "II: provas ou provas e títulos, conforme natureza e complexidade. Comissão é a ressalva.",
    "III: até dois anos, prorrogável uma vez, por igual período.",
    "§ 2º: desobecer II ou III anula o ato e pune a autoridade, nos termos da lei."
  ],
  "organs": [
    {
      "sigla": "II",
      "nome": "Investidura",
      "funcao": "Concurso, salvo comissão.",
      "base": "II",
      "nao": "Provas e títulos não são obrigatórios em todo cargo. A lei prevê, conforme a natureza.",
      "tone": "cyan"
    },
    {
      "sigla": "III",
      "nome": "Validade",
      "funcao": "Até dois, uma vez, igual período.",
      "base": "III",
      "nao": "Não some quatro anos como dever. A prorrogação é uma vez, se houver.",
      "tone": "emerald"
    },
    {
      "sigla": "IV",
      "nome": "Prioridade",
      "funcao": "No prazo do edital de convocação.",
      "base": "IV",
      "nao": "Improrrogável, aqui, é o prazo de convocação do edital, não a validade do III.",
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
      "wrong": "A validade é de dois anos, sempre.",
      "right": "É de até dois anos."
    },
    {
      "wrong": "Cabe segunda prorrogação.",
      "right": "Uma vez."
    },
    {
      "wrong": "A prorrogação pode ser por período maior.",
      "right": "Por igual período."
    },
    {
      "wrong": "Comissão é a regra de investidura.",
      "right": "É a ressalva."
    },
    {
      "wrong": "O § 2º anula também a ofensa ao inciso IV.",
      "right": "A frase nomeia II e III."
    },
    {
      "wrong": "Prioridade é contra aprovados do mesmo concurso.",
      "right": "É sobre novos concursados, na carreira, no prazo do edital."
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
      "id": "p78",
      "num": "78",
      "kicker": "Concurso público",
      "title": "Concurso público",
      "lead": "até dois anos, uma prorrogação",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "II",
          "name": "Investidura",
          "hook": "Concurso, salvo comissão.",
          "literal": "Constituição, art. 37, II, redação da Emenda Constitucional nº 19/1998: a investidura em cargo ou emprego público depende de aprovação prévia em concurso público de provas ou de provas e títulos, de acordo com a natureza e a complexidade do cargo ou emprego, na forma prevista em lei, ressalvadas as nomeações para cargo em comissão declarado em lei de livre nomeação e exoneração.",
          "context": "Prévia. Cargo em comissão é a ressalva, não a regra. Função de confiança não está nesta ressalva.",
          "exam": "A banca dispensa concurso para emprego.",
          "trap": "Provas e títulos não são obrigatórios em todo cargo. A lei prevê, conforme a natureza.",
          "example": "O cargo de Agente exige o concurso da lei do edital. Comissão não é o caminho desse cargo.",
          "mnemonic": "Prévia aprovação. Comissão é a exceção."
        },
        {
          "tag": "III",
          "name": "Validade",
          "hook": "Até dois, uma vez, igual período.",
          "literal": "Constituição, art. 37, III: o prazo de validade do concurso público será de até dois anos, prorrogável uma vez, por igual período.",
          "context": "Até. O edital pode fixar menos. Igual período é o da validade original, não um novo capricho.",
          "exam": "A banca escreve dois anos improrrogáveis, ou duas prorrogações.",
          "trap": "Não some quatro anos como dever. A prorrogação é uma vez, se houver.",
          "example": "Concurso de um ano pode ser prorrogado por mais um. Não por mais dois.",
          "mnemonic": "Até dois. Uma vez. Igual período."
        },
        {
          "tag": "IV",
          "name": "Prioridade",
          "hook": "No prazo do edital de convocação.",
          "literal": "Constituição, art. 37, IV: durante o prazo improrrogável previsto no edital de convocação, aquele aprovado em concurso público de provas ou de provas e títulos será convocado com prioridade sobre novos concursados para assumir cargo ou emprego, na carreira. O § 2º diz que a não observância dos incisos II e III implicará a nulidade do ato e a punição da autoridade responsável, nos termos da lei.",
          "context": "Prioridade é na carreira, no prazo improrrogável do edital de convocação. O § 2º não inclui o inciso IV na frase da nulidade.",
          "exam": "A banca estende a nulidade do § 2º ao inciso IV, contra a frase.",
          "trap": "Improrrogável, aqui, é o prazo de convocação do edital, não a validade do III.",
          "example": "Abrir concurso novo não fura a vez de quem está no prazo de convocação.",
          "mnemonic": "Prioridade na carreira. Nulidade expressa no II e no III."
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
      "item": "II",
      "rule": "Aprovação prévia.",
      "clue": "Comissão é a ressalva."
    },
    {
      "item": "III",
      "rule": "Até dois anos.",
      "clue": "Uma prorrogação, igual período."
    },
    {
      "item": "IV",
      "rule": "Prioridade na carreira.",
      "clue": "Prazo do edital de convocação."
    },
    {
      "item": "§ 2º",
      "rule": "Nulidade se ofender II ou III.",
      "clue": "IV não está na frase."
    },
    {
      "item": "Títulos",
      "rule": "Conforme a natureza.",
      "clue": "Não é dever de todo concurso."
    },
    {
      "item": "Agente",
      "rule": "Não entra pela comissão.",
      "clue": "Concurso da lei do cargo."
    }
  ],
  "compare": [
    {
      "item": "Validade",
      "ce": "Até dois.",
      "cf": "Não é dois fixos.",
      "effect": "restringe"
    },
    {
      "item": "Prorrogação",
      "ce": "Uma vez, igual período.",
      "cf": "Não é duas.",
      "effect": "restringe"
    },
    {
      "item": "§ 2º",
      "ce": "II e III.",
      "cf": "IV fica de fora da frase.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 78011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "A validade do concurso é de dois anos, prorrogável duas vezes por qualquer período, e o § 2º do art. 37 anula expressamente a ofensa ao inciso IV.",
      "correct": "E",
      "comentario": "ERRADO. É de até dois anos, prorrogável uma vez, por igual período. O § 2º nomeia os incisos II e III."
    },
    {
      "id": 78012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Durante o prazo improrrogável do edital de convocação,",
      "correct": "d",
      "comentario": "Prioridade do aprovado sobre novos concursados, na carreira.",
      "options": [
        {
          "key": "a",
          "label": "a Administração pode convocar primeiro o aprovado em concurso aberto depois."
        },
        {
          "key": "b",
          "label": "a prioridade alcança qualquer cargo fora da carreira, pelo inciso."
        },
        {
          "key": "c",
          "label": "o prazo se confunde com a validade de até dois anos."
        },
        {
          "key": "d",
          "label": "o aprovado é convocado com prioridade sobre novos concursados para cargo ou emprego, na carreira."
        },
        {
          "key": "e",
          "label": "a prioridade dispensa a aprovação prévia."
        }
      ]
    },
    {
      "id": 78013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A ressalva do art. 37, II, alcança",
      "correct": "b",
      "comentario": "Cargo em comissão de livre nomeação e exoneração, declarado em lei. Não é função de confiança nem emprego comum.",
      "options": [
        {
          "key": "a",
          "label": "qualquer emprego público."
        },
        {
          "key": "b",
          "label": "a nomeação para cargo em comissão declarado em lei de livre nomeação e exoneração."
        },
        {
          "key": "c",
          "label": "a função de confiança de quem não é efetivo."
        },
        {
          "key": "d",
          "label": "o cargo de Agente da PCPE."
        },
        {
          "key": "e",
          "label": "a prorrogação do concurso."
        }
      ]
    }
  ],
  "palette": "rose",
  "highlight": {
    "big": "Concurso",
    "small": "sem artigo inventado"
  },
  "heroLead": "Cargo e emprego dependem de concurso, salvo comissão. A validade é de até dois anos, prorrogável uma vez, por igual período. No prazo do edital, o aprovado tem prioridade. Sem o II e o III, o ato é nulo.",
  "footerLine": "Prompt 78 de 86.",
  "nextLine": "Diga continue para o Prompt 79: acumulação de cargos.",
  "closingMnemonic": "Até dois, uma vez, igual período. Prioridade no prazo do edital. Nulidade no II e no III.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [
    {
      "value": "até 2 anos",
      "label": "Validade, prorrogável uma vez por igual período",
      "source": "CF, art. 37, III"
    }
  ],
  "toc": [
    {
      "id": "p78",
      "num": "78",
      "label": "Concurso público"
    }
  ]
};
