import type { StudyModule } from "./study";

export const PROMPT82: StudyModule = {
  "short": "Mapa da 14.133",
  "eyebrow": "Prompt 82 de 86 · Mapa da Lei 14.133",
  "title": "O que a lei de licitações abriu",
  "subtitle": "do art. 1º à alínea f, e o que ficou de fora",
  "description": "Este prompt não transcreve artigo novo. Fecha o mapa para a prova não cobrar, como se tivesse sido lido, o que ficou de fora. Contrato, sanção e recurso não foram abertos.",
  "reading": "Mapa do que os Prompts 40 a 56 tinham lido. A continuação começou no Prompt 87. Contrato, sanção e recurso continuam fora.",
  "terms": [
    "mapa",
    "contrato",
    "sanção",
    "não aberto"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "Prompt 40: arts. 1º a 27. 41: 28 a 39. 42: 40 a 52.",
    "43 a 51: divulgação até a forma da habilitação.",
    "52 a 56: encerramento, processo direto, inexigibilidade e dispensa até a alínea f."
  ],
  "importance": "A banca pergunta prazo de recurso ou de contrato como se o curso o tivesse transcrito.",
  "distinctions": [
    "Não chute artigo de contrato. Não foi lido.",
    "Não chute sanção do art. 156. Foi visto de longe e não transcrito.",
    "Empresa pública continua na Lei nº 13.303, não aberta."
  ],
  "organs": [
    {
      "sigla": "LIDO",
      "nome": "O que pode ser cobrado daqui",
      "funcao": "Só o transcrito.",
      "base": "LIDO",
      "nao": "Não reabra 75% nem 85%. Já foram fechados.",
      "tone": "cyan"
    },
    {
      "sigla": "FORA",
      "nome": "O que não foi lido",
      "funcao": "Não invente.",
      "base": "FORA",
      "nao": "O art. 71 não é o recurso. Recurso não foi aberto.",
      "tone": "emerald"
    },
    {
      "sigla": "EST",
      "nome": "PCPE",
      "funcao": "Norma geral, não estatuto de empresa.",
      "base": "EST",
      "nao": "O art. 22, XXVII, já foi lido no Prompt 58.",
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
      "wrong": "O curso transcreveu o contrato administrativo.",
      "right": "Não transcreveu."
    },
    {
      "wrong": "Sanção do art. 156 tem prazo neste curso.",
      "right": "O artigo não foi transcrito."
    },
    {
      "wrong": "O art. 71 é o recurso.",
      "right": "É o encerramento."
    },
    {
      "wrong": "Empresa pública segue os prompts 40 a 56.",
      "right": "Não segue, salvo art. 178 não aberto."
    },
    {
      "wrong": "A alínea g do art. 75, IV, continua cortada.",
      "right": "Foi lida no Prompt 87. Não está mais cortada."
    },
    {
      "wrong": "Este mapa altera cifra.",
      "right": "Não altera. Cifra fica no prompt do artigo."
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
      "id": "p82",
      "num": "82",
      "kicker": "Mapa da Lei 14.133",
      "title": "O que a lei de licitações abriu",
      "lead": "do art. 1º à alínea f, e o que ficou de fora",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "LIDO",
          "name": "O que pode ser cobrado daqui",
          "hook": "Só o transcrito.",
          "literal": "Foram transcritos, nos limites de cada prompt: aplicação e princípios, definições usadas, modalidades e julgamento, dispensa e inexigibilidade no trecho lido, divulgação, prazos do art. 55, modo de disputa, garantia de proposta, julgamento, habilitação até o art. 70, encerramento, processo de contratação direta, art. 74 e art. 75, I a IV, a a f. O detalhe de cada um está no prompt próprio. Não se resume cifra aqui para não trocar valor.",
          "context": "Valor vigente de dispensa está no Prompt 55, não aqui.",
          "exam": "A banca mistura o teto de engenharia com o de compras.",
          "trap": "Não reabra 75% nem 85%. Já foram fechados.",
          "example": "Se a questão for de habilitação, volte ao prompt do artigo. Não use este mapa como texto.",
          "mnemonic": "Mapa não substitui o artigo."
        },
        {
          "tag": "FORA",
          "name": "O que não foi lido",
          "hook": "Não invente.",
          "literal": "Depois deste mapa, a alínea g e os arts. 76 a 78 foram lidos nos Prompts 87 e 93 a 95. Continuam sem transcrição o art. 79 em diante, o contrato, a alteração, a extinção, as sanções, os recursos e os crimes. Se a questão citar esses números, a resposta deste curso é conferir o texto oficial. Não se completa de memória.",
          "context": "Não transforme silêncio em regra.",
          "exam": "A banca oferece um prazo de recurso como se estivesse no Prompt 52.",
          "trap": "O art. 71 não é o recurso. Recurso não foi aberto.",
          "example": "Registro de preços, se cair, não tem prompt. Conferir.",
          "mnemonic": "Fora do mapa, oficial."
        },
        {
          "tag": "EST",
          "name": "PCPE",
          "hook": "Norma geral, não estatuto de empresa.",
          "literal": "A Lei nº 14.133 é norma geral para a administração direta, autárquica e fundacional, inclusive a de Pernambuco. A PCPE está na direta. Empresa pública e sociedade de economia mista não migraram para essa lei, salvo o art. 178, não aberto. Não use analogia para levá-las.",
          "context": "Estado não está fora da norma geral.",
          "exam": "A banca aplica a lei inteira a uma sociedade de economia mista.",
          "trap": "O art. 22, XXVII, já foi lido no Prompt 58.",
          "example": "Compra da PCPE: lei lida, no que foi aberto. Compra de estatal: outro estatuto.",
          "mnemonic": "Direta, sim. Estatal, não por analogia."
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
      "item": "40 a 42",
      "rule": "Aplicação até disposições setoriais.",
      "clue": "Não reabrir."
    },
    {
      "item": "43 a 51",
      "rule": "Edital até a forma da habilitação.",
      "clue": "Cifra no prompt próprio."
    },
    {
      "item": "52 a 56",
      "rule": "Encerramento e contratação direta parcial.",
      "clue": "Até a alínea f."
    },
    {
      "item": "Fora",
      "rule": "Contrato, sanção e recurso.",
      "clue": "Conferir."
    },
    {
      "item": "Contrato e sanção",
      "rule": "Não lidos.",
      "clue": "Não chute prazo."
    },
    {
      "item": "Estatal",
      "rule": "Fora.",
      "clue": "Art. 178 não aberto."
    }
  ],
  "compare": [
    {
      "item": "Lido",
      "ce": "Até a alínea f.",
      "cf": "Contrato não.",
      "effect": "separa"
    },
    {
      "item": "PCPE",
      "ce": "Direta.",
      "cf": "Estatal é outro regime.",
      "effect": "separa"
    },
    {
      "item": "Mapa",
      "ce": "Não é texto.",
      "cf": "Artigo fica no prompt.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 82011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Os Prompts 40 a 56 transcreveram o regime completo dos contratos e das sanções da Lei nº 14.133/2021, inclusive prazos de recurso.",
      "correct": "E",
      "comentario": "ERRADO. O curso parou no art. 75, IV, a a f. Contrato, sanção e recurso não foram transcritos."
    },
    {
      "id": 82012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Se a questão cobrar o art. 90 da Lei nº 14.133/2021, o candidato deste curso deve",
      "correct": "c",
      "comentario": "O artigo não foi lido. Conferir o oficial. Não chutar.",
      "options": [
        {
          "key": "a",
          "label": "responder pelo art. 71, porque encerramento é contrato."
        },
        {
          "key": "b",
          "label": "aplicar o prazo de cinco dias, padrão deste curso."
        },
        {
          "key": "c",
          "label": "conferir o texto oficial, porque o art. 90 não foi transcrito."
        },
        {
          "key": "d",
          "label": "usar a Lei nº 8.666 como se ainda fosse a norma geral."
        },
        {
          "key": "e",
          "label": "tratar o artigo como inexigibilidade."
        }
      ]
    },
    {
      "id": 82013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A PCPE, na licitação,",
      "correct": "a",
      "comentario": "Administração direta estadual. Norma geral, no que foi aberto.",
      "options": [
        {
          "key": "a",
          "label": "está na administração direta e se submete à norma geral, no que este curso abriu."
        },
        {
          "key": "b",
          "label": "está fora da Lei nº 14.133 por ser polícia."
        },
        {
          "key": "c",
          "label": "segue a Lei nº 13.303/2016."
        },
        {
          "key": "d",
          "label": "não licita, pelo art. 37, XXI."
        },
        {
          "key": "e",
          "label": "usa apenas o estatuto do servidor para comprar."
        }
      ]
    }
  ],
  "palette": "azure",
  "highlight": {
    "big": "Mapa da 14.133",
    "small": "sem artigo inventado"
  },
  "heroLead": "Este prompt não transcreve artigo novo. Fecha o mapa para a prova não cobrar, como se tivesse sido lido, o que ficou de fora. Contrato, sanção e recurso não foram abertos.",
  "footerLine": "Prompt 82 de 86.",
  "nextLine": "Diga continue para o Prompt 83: improbidade no mapa do controle.",
  "closingMnemonic": "Lido até a alínea f. Contrato e sanção, conferir. Estatal não entra por analogia.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [],
  "toc": [
    {
      "id": "p82",
      "num": "82",
      "label": "O que a lei de licitações abriu"
    }
  ]
};
