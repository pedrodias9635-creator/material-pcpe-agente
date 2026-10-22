import type { StudyModule } from "./study";

export const PROMPT62: StudyModule = {
  "short": "Classificação",
  "eyebrow": "Prompt 62 de 86 · Ato administrativo",
  "title": "Classificação",
  "subtitle": "vinculado não é discricionário",
  "description": "A classificação é doutrina. A banca cobra o nome e troca o critério. Nenhum prazo de classificação foi escrito em lei neste prompt.",
  "reading": "Doutrina. Não reabra elementos nem atributos.",
  "terms": [
    "vinculado",
    "discricionário",
    "geral",
    "individual",
    "constitutivo"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "Mérito não existe no ato vinculado.",
    "Discricionariedade não é liberdade contra a lei.",
    "Ato geral não é ato individual com muitos destinatários nomeados."
  ],
  "importance": "A banca chama discricionário o ato em que a lei não deixou escolha, e chama vinculado o ato de conveniência.",
  "distinctions": [
    "Vinculado: a lei fecha o conteúdo. Discricionário: a lei deixa margem de conveniência, dentro da lei.",
    "Geral: destinatários indeterminados. Individual: destinatário certo.",
    "Constitutivo cria situação. Declaratório afirma situação que já existe. Extintivo encerra."
  ],
  "organs": [
    {
      "sigla": "VIN",
      "nome": "Vinculado",
      "funcao": "A lei não deixou margem.",
      "base": "VIN",
      "nao": "Discricionariedade não se presume. O silêncio da lei não é margem.",
      "tone": "cyan"
    },
    {
      "sigla": "DIS",
      "nome": "Discricionário",
      "funcao": "Margem não é arbítrio.",
      "base": "DIS",
      "nao": "Revogação por conveniência, já vista no art. 71 da licitação, é exemplo de mérito. Não reabra o artigo.",
      "tone": "emerald"
    },
    {
      "sigla": "GER",
      "nome": "Geral e individual",
      "funcao": "O critério é o destinatário.",
      "base": "GER",
      "nao": "Não invente uma classe de ato complexo com artigo.",
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
      "wrong": "Ato vinculado tem mérito.",
      "right": "Mérito é a margem. Vinculado não a tem."
    },
    {
      "wrong": "Discricionário não se controla.",
      "right": "Competência, forma e finalidade continuam vinculadas."
    },
    {
      "wrong": "Edital é ato individual.",
      "right": "Destinatários indeterminados: geral, em doutrina."
    },
    {
      "wrong": "Declaratório cria o direito.",
      "right": "Declaratório afirma. Constitutivo cria."
    },
    {
      "wrong": "A classificação está no art. 37, § 1º.",
      "right": "Não está. Doutrina."
    },
    {
      "wrong": "Silêncio da lei é discricionariedade.",
      "right": "Discricionariedade se demonstra na margem legal."
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
      "id": "p62",
      "num": "62",
      "kicker": "Ato administrativo",
      "title": "Classificação",
      "lead": "vinculado não é discricionário",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "VIN",
          "name": "Vinculado",
          "hook": "A lei não deixou margem.",
          "literal": "Doutrina: no ato vinculado, a lei fixa o momento, o conteúdo e o destinatário. Não há mérito para o agente escolher. Se os pressupostos estão presentes, a prática é dever.",
          "context": "Não chame de discricionário o que a lei fechou.",
          "exam": "A banca oferece conveniência onde a lei só tem um caminho.",
          "trap": "Discricionariedade não se presume. O silêncio da lei não é margem.",
          "example": "A aposentadoria, quando os requisitos legais estão preenchidos, não fica ao gosto do dia. O regime próprio do policial já foi lido e não se reabre.",
          "mnemonic": "Lei fechou: pratica."
        },
        {
          "tag": "DIS",
          "name": "Discricionário",
          "hook": "Margem não é arbítrio.",
          "literal": "Doutrina: no ato discricionário, a lei deixa ao agente uma margem de conveniência e oportunidade. A margem não alcança a competência, a forma nem a finalidade. O mérito pode ser controlado nos limites da razoabilidade, que é doutrina, sem número de súmula aqui.",
          "context": "Não cite súmula de mérito. Não foi conferida neste prompt.",
          "exam": "A banca trata discricionariedade como zona sem juiz.",
          "trap": "Revogação por conveniência, já vista no art. 71 da licitação, é exemplo de mérito. Não reabra o artigo.",
          "example": "Escolher o horário de uma operação, dentro da lei, pode ser margem. Escolher o inimigo político, não.",
          "mnemonic": "Margem dentro da lei."
        },
        {
          "tag": "GER",
          "name": "Geral e individual",
          "hook": "O critério é o destinatário.",
          "literal": "Doutrina: ato geral atinge destinatários indeterminados. Ato individual atinge pessoa certa ou grupo determinado. Ato constitutivo cria direito ou dever. Ato declaratório reconhece situação preexistente. Essa classificação não está no art. 37.",
          "context": "Regulamento é geral, em doutrina. Não é individual só porque um servidor o lê.",
          "exam": "A banca chama o edital de ato individual.",
          "trap": "Não invente uma classe de ato complexo com artigo.",
          "example": "O edital de um concurso alcança candidatos indeterminados até a inscrição. A nomeação de um aprovado é individual.",
          "mnemonic": "Indeterminado é geral. Nomeado é individual."
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
      "item": "Vinculado",
      "rule": "Sem margem.",
      "clue": "Pressuposto presente, dever de agir."
    },
    {
      "item": "Discricionário",
      "rule": "Margem de mérito.",
      "clue": "Não é arbítrio."
    },
    {
      "item": "Controle",
      "rule": "Finalidade continua vinculada.",
      "clue": "Sem súmula inventada."
    },
    {
      "item": "Geral",
      "rule": "Destinatário indeterminado.",
      "clue": "Edital, em regra."
    },
    {
      "item": "Individual",
      "rule": "Pessoa certa.",
      "clue": "Nomeação."
    },
    {
      "item": "Constitutivo",
      "rule": "Cria.",
      "clue": "Declaratório afirma."
    }
  ],
  "compare": [
    {
      "item": "Vinculado",
      "ce": "Sem mérito.",
      "cf": "Discricionário tem margem.",
      "effect": "separa"
    },
    {
      "item": "Geral",
      "ce": "Indeterminado.",
      "cf": "Individual é certo.",
      "effect": "separa"
    },
    {
      "item": "Constitutivo",
      "ce": "Cria.",
      "cf": "Declaratório afirma.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 62011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "No ato vinculado há mérito administrativo, e o ato discricionário fica imune a qualquer controle de finalidade.",
      "correct": "E",
      "comentario": "ERRADO. Mérito supõe margem. No vinculado ela não existe. No discricionário, a finalidade continua vinculada."
    },
    {
      "id": 62012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Quanto à classificação pelo destinatário,",
      "correct": "d",
      "comentario": "Geral é indeterminado. Individual é certo. Edital não vira individual só porque alguém se inscreve depois.",
      "options": [
        {
          "key": "a",
          "label": "ato geral é o que tem um único nome no preâmbulo."
        },
        {
          "key": "b",
          "label": "ato individual alcança destinatários indeterminados."
        },
        {
          "key": "c",
          "label": "a classificação está no caput do art. 37."
        },
        {
          "key": "d",
          "label": "ato geral atinge destinatários indeterminados; ato individual, pessoa ou grupo determinado."
        },
        {
          "key": "e",
          "label": "regulamento é sempre ato individual."
        }
      ]
    },
    {
      "id": 62013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Ato constitutivo e ato declaratório se distinguem porque",
      "correct": "a",
      "comentario": "Constitutivo cria. Declaratório afirma o que já existe. Doutrina.",
      "options": [
        {
          "key": "a",
          "label": "o constitutivo cria situação jurídica e o declaratório reconhece situação preexistente."
        },
        {
          "key": "b",
          "label": "os dois criam direito novo."
        },
        {
          "key": "c",
          "label": "o declaratório é sempre discricionário."
        },
        {
          "key": "d",
          "label": "a diferença está escrita no art. 84, IV."
        },
        {
          "key": "e",
          "label": "o constitutivo não produz efeito."
        }
      ]
    }
  ],
  "palette": "azure",
  "highlight": {
    "big": "Classificação",
    "small": "sem artigo inventado"
  },
  "heroLead": "A classificação é doutrina. A banca cobra o nome e troca o critério. Nenhum prazo de classificação foi escrito em lei neste prompt.",
  "footerLine": "Prompt 62 de 86.",
  "nextLine": "Diga continue para o Prompt 63: extinção do ato, anulação e revogação.",
  "closingMnemonic": "Vinculado não escolhe. Discricionário escolhe dentro da lei. Geral não tem nome.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [],
  "toc": [
    {
      "id": "p62",
      "num": "62",
      "label": "Classificação"
    }
  ]
};
