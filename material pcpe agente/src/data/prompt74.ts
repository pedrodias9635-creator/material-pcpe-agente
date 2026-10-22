import type { StudyModule } from "./study";

export const PROMPT74: StudyModule = {
  "short": "Controle judicial",
  "eyebrow": "Prompt 74 de 86 · Controle judicial",
  "title": "Controle judicial",
  "subtitle": "legalidade sim, mérito não",
  "description": "O juiz controla a legalidade. Mérito, em doutrina, não se substitui por conveniência do magistrado. Ação popular está transcrita. Os outros remédios já foram lidos nos Prompts 27 e 28 e não se reabrem.",
  "reading": "Constituição, art. 5º, LXXIII. Remédios dos Prompts 27 e 28. Sem prazo novo.",
  "terms": [
    "legalidade",
    "mérito",
    "ação popular",
    "inafastabilidade"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "O juiz anula. Não revoga por conveniência.",
    "Ação popular é do cidadão, não de qualquer residente.",
    "Má-fé tira a isenção de custas. A frase escreve isso."
  ],
  "importance": "A banca abre a ação popular a estrangeiro residente ou manda o juiz escolher a conveniência.",
  "distinctions": [
    "Controle judicial é externo e de legalidade.",
    "Discricionariedade não é zona sem juiz: competência, forma e finalidade continuam controláveis.",
    "Ação popular: cidadão, ato lesivo ao patrimônio, à moralidade, ao meio ambiente ou ao patrimônio histórico e cultural."
  ],
  "organs": [
    {
      "sigla": "LEG",
      "nome": "Legalidade",
      "funcao": "Mérito fica com a Administração.",
      "base": "LEG",
      "nao": "Inafastabilidade já foi lida no art. 5º e não se reabre em inciso.",
      "tone": "cyan"
    },
    {
      "sigla": "POP",
      "nome": "Ação popular",
      "funcao": "Cidadão, lesão, sem custas se não houver má-fé.",
      "base": "POP",
      "nao": "A isenção cai se houver má-fé comprovada. Não é absoluta.",
      "tone": "emerald"
    },
    {
      "sigla": "REM",
      "nome": "Remédios já lidos",
      "funcao": "Não reabra o art. 5º.",
      "base": "REM",
      "nao": "Controle judicial não é só ação popular.",
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
      "wrong": "O juiz revoga por conveniência.",
      "right": "Revogação de mérito não é via judicial."
    },
    {
      "wrong": "Ação popular cabe a qualquer residente.",
      "right": "A frase diz cidadão."
    },
    {
      "wrong": "A isenção de custas é absoluta.",
      "right": "Cai se comprovada a má-fé."
    },
    {
      "wrong": "Todo ato discricionário é imune.",
      "right": "Finalidade e competência continuam controláveis."
    },
    {
      "wrong": "O prazo do mandado de segurança está neste prompt.",
      "right": "Não está. Não invente."
    },
    {
      "wrong": "Ação popular serve para revogar política pública lícita.",
      "right": "A frase é anular ato lesivo."
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
      "id": "p74",
      "num": "74",
      "kicker": "Controle judicial",
      "title": "Controle judicial",
      "lead": "legalidade sim, mérito não",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "LEG",
          "name": "Legalidade",
          "hook": "Mérito fica com a Administração.",
          "literal": "Doutrina: o Judiciário controla a legalidade do ato. Não escolhe a conveniência no lugar do administrador. Pode examinar se a margem foi usada fora da finalidade, porque isso é legalidade, não mérito. Sem súmula neste prompt.",
          "context": "Não diga que o juiz está proibido de olhar o ato discricionário.",
          "exam": "A banca ou blinda todo discricionário, ou entrega o mérito ao juiz.",
          "trap": "Inafastabilidade já foi lida no art. 5º e não se reabre em inciso.",
          "example": "O juiz pode anular uma remoção com desvio de finalidade. Não escolhe o melhor delegado no lugar da Administração.",
          "mnemonic": "Ilegal, sim. Conveniência, não."
        },
        {
          "tag": "POP",
          "name": "Ação popular",
          "hook": "Cidadão, lesão, sem custas se não houver má-fé.",
          "literal": "Constituição, art. 5º, LXXIII: qualquer cidadão é parte legítima para propor ação popular que vise a anular ato lesivo ao patrimônio público ou de entidade de que o Estado participe, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural, ficando o autor, salvo comprovada má-fé, isento de custas judiciais e do ônus da sucumbência.",
          "context": "Cidadão. Não é qualquer pessoa. Lesivo. Não é todo ato.",
          "exam": "A banca troca cidadão por residente.",
          "trap": "A isenção cai se houver má-fé comprovada. Não é absoluta.",
          "example": "O eleitor pode pedir a anulação de ato lesivo ao patrimônio. O objetivo é anular, não revogar por gosto.",
          "mnemonic": "Cidadão. Ato lesivo. Anular."
        },
        {
          "tag": "REM",
          "name": "Remédios já lidos",
          "hook": "Não reabra o art. 5º.",
          "literal": "Mandado de segurança, habeas data, mandado de injunção, habeas corpus e ação popular foram localizados nos Prompts 27 e 28, conforme o inciso. Este prompt não repete prazo. Não invente 120 dias. Se a questão pedir prazo, confira a lei do mandado de segurança, não aberta aqui.",
          "context": "Não misture o legitimado de cada remédio.",
          "exam": "A banca cobra prazo que este prompt não escreve.",
          "trap": "Controle judicial não é só ação popular.",
          "example": "O preso usa a via já estudada no inciso próprio. Não se cria via nova.",
          "mnemonic": "Remédio certo, prompt certo. Sem prazo novo."
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
      "item": "Juiz",
      "rule": "Legalidade.",
      "clue": "Não escolhe conveniência."
    },
    {
      "item": "Discricionário",
      "rule": "Não é imune.",
      "clue": "Finalidade se controla."
    },
    {
      "item": "Popular",
      "rule": "Cidadão.",
      "clue": "Não é residente."
    },
    {
      "item": "Objeto",
      "rule": "Ato lesivo.",
      "clue": "Anular, não revogar."
    },
    {
      "item": "Custas",
      "rule": "Isento, salvo má-fé.",
      "clue": "Não é absoluta."
    },
    {
      "item": "Prazo de MS",
      "rule": "Não escrito.",
      "clue": "Não invente 120 dias."
    }
  ],
  "compare": [
    {
      "item": "Juiz",
      "ce": "Anula ilegalidade.",
      "cf": "Não revoga mérito.",
      "effect": "separa"
    },
    {
      "item": "Popular",
      "ce": "Cidadão.",
      "cf": "Não é qualquer pessoa.",
      "effect": "restringe"
    },
    {
      "item": "Custas",
      "ce": "Isenção.",
      "cf": "Má-fé comprovada a retira.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 74011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Qualquer residente pode propor ação popular, e o juiz pode revogar o ato por conveniência e oportunidade.",
      "correct": "E",
      "comentario": "ERRADO. O inciso diz cidadão. O juiz controla legalidade. Não revoga mérito."
    },
    {
      "id": 74012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Na ação popular do art. 5º, LXXIII,",
      "correct": "a",
      "comentario": "Cidadão, ato lesivo, anulação, isenção salvo má-fé.",
      "options": [
        {
          "key": "a",
          "label": "o cidadão pede a anulação de ato lesivo, e a isenção de custas cai se houver má-fé comprovada."
        },
        {
          "key": "b",
          "label": "o residente estrangeiro é parte legítima, pela própria frase."
        },
        {
          "key": "c",
          "label": "cabe para revogar ato lícito inconveniente."
        },
        {
          "key": "d",
          "label": "as custas são sempre devidas."
        },
        {
          "key": "e",
          "label": "o prazo de 120 dias está no inciso."
        }
      ]
    },
    {
      "id": 74013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O controle judicial do ato discricionário",
      "correct": "c",
      "comentario": "Não escolhe o mérito. Controla a legalidade, inclusive a finalidade.",
      "options": [
        {
          "key": "a",
          "label": "é vedado em qualquer hipótese."
        },
        {
          "key": "b",
          "label": "permite ao juiz substituir a conveniência do administrador."
        },
        {
          "key": "c",
          "label": "alcança a legalidade, inclusive competência e finalidade, sem escolher o mérito."
        },
        {
          "key": "d",
          "label": "só existe na ação popular."
        },
        {
          "key": "e",
          "label": "depende de súmula transcrita neste prompt."
        }
      ]
    }
  ],
  "palette": "ember",
  "highlight": {
    "big": "Controle judicial",
    "small": "sem artigo inventado"
  },
  "heroLead": "O juiz controla a legalidade. Mérito, em doutrina, não se substitui por conveniência do magistrado. Ação popular está transcrita. Os outros remédios já foram lidos nos Prompts 27 e 28 e não se reabrem.",
  "footerLine": "Prompt 74 de 86.",
  "nextLine": "Diga continue para o Prompt 75: controle legislativo.",
  "closingMnemonic": "Juiz anula o ilegal. Não escolhe o conveniente. Popular é do cidadão.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [],
  "toc": [
    {
      "id": "p74",
      "num": "74",
      "label": "Controle judicial"
    }
  ]
};
