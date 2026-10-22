import type { StudyModule } from "./study";

export const PROMPT60: StudyModule = {
  "short": "Ato: elementos",
  "eyebrow": "Prompt 60 de 86 · Ato administrativo",
  "title": "Conceito e elementos",
  "subtitle": "cinco elementos de doutrina, sem artigo forjado",
  "description": "O item 3 começa pelo ato. Conceito e elementos, neste curso, são doutrina de concurso. A lei da ação popular é citada em prova, mas o artigo dela não foi relido agora. Não se inventa o número.",
  "reading": "Doutrina. Conferir a lei da ação popular antes de citar o dispositivo dos elementos. Nenhum prazo entra aqui.",
  "terms": [
    "competência",
    "finalidade",
    "forma",
    "motivo",
    "objeto"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "Ato administrativo não é lei nem sentença.",
    "Elemento faltante não se cura com eficiência.",
    "Motivo não é motivação. Um é o fato. Outra é a exposição."
  ],
  "importance": "A banca troca motivo por objeto e chama competência de formalidade.",
  "distinctions": [
    "Competência: quem pode.",
    "Finalidade: o interesse público específico do ato, não o fim privado.",
    "Forma: o modo exigido. Motivo: os pressupostos. Objeto: o efeito jurídico."
  ],
  "organs": [
    {
      "sigla": "ATO",
      "nome": "Conceito",
      "funcao": "Manifestação com efeito jurídico.",
      "base": "ATO",
      "nao": "Lei nº 4.717/1965 é a referência clássica dos elementos. O artigo não foi transcrito aqui. Conferir.",
      "tone": "cyan"
    },
    {
      "sigla": "CFF",
      "nome": "Competência, finalidade, forma",
      "funcao": "Os três primeiros.",
      "base": "CFF",
      "nao": "Finalidade pública genérica não salva desvio. O fim há de ser o da norma.",
      "tone": "emerald"
    },
    {
      "sigla": "MO",
      "nome": "Motivo e objeto",
      "funcao": "Fato e efeito.",
      "base": "MO",
      "nao": "Se a Administração declara um motivo, a doutrina cobra que ele exista. Não invente a súmula.",
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
      "wrong": "Contrato administrativo é ato unilateral.",
      "right": "Contrato é acordo. Ato, neste conceito, é unilateral."
    },
    {
      "wrong": "Os cinco elementos estão no caput do art. 37.",
      "right": "Não estão. São doutrina."
    },
    {
      "wrong": "Motivo e motivação são a mesma palavra.",
      "right": "Motivo é o pressuposto. Motivação é a exposição."
    },
    {
      "wrong": "Competência se presume pelo cargo mais alto.",
      "right": "Competência é legal. Hierarquia não a inventa."
    },
    {
      "wrong": "Forma é sempre livre.",
      "right": "A regra de doutrina é a forma escrita exigida."
    },
    {
      "wrong": "Objeto é o fato que gerou o ato.",
      "right": "Isso é motivo. Objeto é o efeito."
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
      "id": "p60",
      "num": "60",
      "kicker": "Ato administrativo",
      "title": "Conceito e elementos",
      "lead": "cinco elementos de doutrina, sem artigo forjado",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "ATO",
          "name": "Conceito",
          "hook": "Manifestação com efeito jurídico.",
          "literal": "Doutrina: ato administrativo é a manifestação unilateral da Administração, no exercício da função administrativa, que produz efeitos jurídicos sob regime de direito público. Contrato não é ato unilateral. Sentença não é ato administrativo.",
          "context": "Não acrescente um sexto elemento como se a lista fosse legal deste prompt.",
          "exam": "A banca inclui o contrato no conceito unilateral.",
          "trap": "Lei nº 4.717/1965 é a referência clássica dos elementos. O artigo não foi transcrito aqui. Conferir.",
          "example": "A portaria do delegado que designa uma equipe é ato. O acordo entre duas pessoas privadas, não.",
          "mnemonic": "Unilateral, função administrativa, efeito jurídico."
        },
        {
          "tag": "CFF",
          "name": "Competência, finalidade, forma",
          "hook": "Os três primeiros.",
          "literal": "Doutrina de concurso: competência é o poder legal de agir; finalidade é o resultado de interesse público próprio daquele ato; forma é o revestimento exigido, em regra escrito. Nenhum dos três tem prazo neste prompt.",
          "context": "Competência não se presume por hierarquia. O Prompt 64 não a substitui.",
          "exam": "A banca aceita ato de agente de férias, sem competência, se o fim for público.",
          "trap": "Finalidade pública genérica não salva desvio. O fim há de ser o da norma.",
          "example": "Um agente sem atribuição não valida a prisão de um procedimento administrativo só porque o papel foi assinado.",
          "mnemonic": "Quem, para quê, de que modo."
        },
        {
          "tag": "MO",
          "name": "Motivo e objeto",
          "hook": "Fato e efeito.",
          "literal": "Doutrina: motivo é a situação de fato e de direito que autoriza o ato. Objeto é o efeito jurídico imediato. Motivação é a exposição dos motivos. A Constituição, no art. 37, não escreve esses três nomes. Não os transforme em incisos.",
          "context": "Teoria dos motivos determinantes é doutrina. Sem número de súmula neste prompt.",
          "exam": "A banca chama o objeto de motivo.",
          "trap": "Se a Administração declara um motivo, a doutrina cobra que ele exista. Não invente a súmula.",
          "example": "A dispensa de um contrato, neste ponto, não se reabre. O motivo do ato disciplinar não se confunde com a pena.",
          "mnemonic": "Motivo é a causa. Objeto é o efeito."
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
      "item": "Conceito",
      "rule": "Unilateral, função administrativa, efeito jurídico.",
      "clue": "Contrato fica de fora."
    },
    {
      "item": "Competência",
      "rule": "Quem a lei autoriza.",
      "clue": "Cargo alto não a cria."
    },
    {
      "item": "Finalidade",
      "rule": "Interesse público do ato.",
      "clue": "Não é fim privado."
    },
    {
      "item": "Forma",
      "rule": "Revestimento exigido.",
      "clue": "Em regra, escrito."
    },
    {
      "item": "Motivo",
      "rule": "Fato e direito que autorizam.",
      "clue": "Não é a motivação."
    },
    {
      "item": "Objeto",
      "rule": "Efeito jurídico imediato.",
      "clue": "Não é o fato."
    }
  ],
  "compare": [
    {
      "item": "Motivo",
      "ce": "Pressuposto.",
      "cf": "Motivação é a exposição.",
      "effect": "separa"
    },
    {
      "item": "Objeto",
      "ce": "Efeito.",
      "cf": "Não é o fato.",
      "effect": "separa"
    },
    {
      "item": "Lista",
      "ce": "Doutrina.",
      "cf": "Não é o art. 37.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 60011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Os elementos competência, finalidade, forma, motivo e objeto estão nomeados no caput do art. 37 da Constituição, e o contrato administrativo é espécie de ato unilateral.",
      "correct": "E",
      "comentario": "ERRADO. A lista é doutrina, não o caput. Contrato não é manifestação unilateral."
    },
    {
      "id": 60012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Na linguagem deste prompt, motivo do ato administrativo é",
      "correct": "b",
      "comentario": "Motivo é o pressuposto. Motivação é a exposição. Objeto é o efeito.",
      "options": [
        {
          "key": "a",
          "label": "o efeito jurídico imediato."
        },
        {
          "key": "b",
          "label": "a situação de fato e de direito que autoriza o ato."
        },
        {
          "key": "c",
          "label": "a exposição escrita, apenas."
        },
        {
          "key": "d",
          "label": "a competência do agente."
        },
        {
          "key": "e",
          "label": "a eficiência do resultado."
        }
      ]
    },
    {
      "id": 60013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Finalidade, como elemento,",
      "correct": "a",
      "comentario": "É o interesse público específico do ato, não o fim privado nem a eficiência genérica.",
      "options": [
        {
          "key": "a",
          "label": "é o resultado de interesse público próprio daquele ato, não o interesse privado do agente."
        },
        {
          "key": "b",
          "label": "se confunde com o motivo."
        },
        {
          "key": "c",
          "label": "dispensa competência."
        },
        {
          "key": "d",
          "label": "está escrita como inciso do art. 37."
        },
        {
          "key": "e",
          "label": "autoriza o desvio se o governante concordar."
        }
      ]
    }
  ],
  "palette": "cool",
  "highlight": {
    "big": "Ato: elementos",
    "small": "sem artigo inventado"
  },
  "heroLead": "O item 3 começa pelo ato. Conceito e elementos, neste curso, são doutrina de concurso. A lei da ação popular é citada em prova, mas o artigo dela não foi relido agora. Não se inventa o número.",
  "footerLine": "Prompt 60 de 86.",
  "nextLine": "Diga continue para o Prompt 61: atributos do ato administrativo.",
  "closingMnemonic": "Cinco elementos de doutrina: quem, para quê, como, por quê, com que efeito.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [],
  "toc": [
    {
      "id": "p60",
      "num": "60",
      "label": "Conceito e elementos"
    }
  ]
};
