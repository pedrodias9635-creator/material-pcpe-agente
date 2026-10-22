import type { StudyModule } from "./study";

export const PROMPT68: StudyModule = {
  "short": "Uso e abuso",
  "eyebrow": "Prompt 68 de 86 · Uso e abuso do poder",
  "title": "Uso e abuso do poder",
  "subtitle": "excesso e desvio",
  "description": "Abuso não é nome único. A doutrina separa excesso de poder e desvio de finalidade. Os dois viciam o ato. Nenhum dos dois é técnica. O item 4.2 do edital para aqui.",
  "reading": "Doutrina. A lei da ação popular é a referência clássica, mas o artigo não foi transcrito nesta rodada. Conferir. Sem súmula.",
  "terms": [
    "excesso de poder",
    "desvio de finalidade",
    "abuso",
    "uso regular"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "Excesso: o agente sai da competência.",
    "Desvio: a competência existe, mas o fim é outro.",
    "Uso regular não se prova pelo resultado político."
  ],
  "importance": "A banca chama de desvio o que é excesso, e trata o abuso como mera imoralidade sem vício do ato.",
  "distinctions": [
    "Uso regular: competência, forma e finalidade da norma.",
    "Excesso de poder: atua fora da competência. O ato é ilegal.",
    "Desvio de finalidade: usa competência real para fim diverso do legal. Também é ilegal."
  ],
  "organs": [
    {
      "sigla": "USO",
      "nome": "Uso regular",
      "funcao": "Poder com a norma.",
      "base": "USO",
      "nao": "Abuso não se ensina. Só se reconhece para anular.",
      "tone": "cyan"
    },
    {
      "sigla": "EXC",
      "nome": "Excesso",
      "funcao": "Fora da competência.",
      "base": "EXC",
      "nao": "Hierarquia não cria competência. O Prompt 64 já separou.",
      "tone": "emerald"
    },
    {
      "sigla": "DES",
      "nome": "Desvio",
      "funcao": "Competência certa, fim errado.",
      "base": "DES",
      "nao": "Teoria dos motivos determinantes, se a questão usar, fica como doutrina sem número.",
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
      "wrong": "Excesso e desvio são o mesmo vício.",
      "right": "Excesso é competência. Desvio é finalidade."
    },
    {
      "wrong": "Desvio só existe se o fim for privado.",
      "right": "Fim público diverso do legal também desvia, em doutrina."
    },
    {
      "wrong": "Abuso se revoga por conveniência.",
      "right": "É ilegalidade. O caminho é anular."
    },
    {
      "wrong": "Boa intenção cura o excesso.",
      "right": "Não cura."
    },
    {
      "wrong": "O art. 37 nomeia excesso e desvio.",
      "right": "Não nomeia. Doutrina."
    },
    {
      "wrong": "Uso regular é o ato eficiente.",
      "right": "Uso regular é o ato na competência e na finalidade."
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
      "id": "p68",
      "num": "68",
      "kicker": "Uso e abuso do poder",
      "title": "Uso e abuso do poder",
      "lead": "excesso e desvio",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "USO",
          "name": "Uso regular",
          "hook": "Poder com a norma.",
          "literal": "Doutrina: uso regular do poder é exercer a competência para a finalidade da norma, na forma exigida. Interesse público genérico não substitui a finalidade específica. Eficiência não cobre o excesso.",
          "context": "Não chame de uso regular o ato que apenas parece útil.",
          "exam": "A banca aceita o fim político do governante como finalidade legal.",
          "trap": "Abuso não se ensina. Só se reconhece para anular.",
          "example": "A interdição feita pelo órgão competente, no fim da norma sanitária, é uso. A mesma ordem, para prejudicar um adversário, não.",
          "mnemonic": "Competência certa, fim certo."
        },
        {
          "tag": "EXC",
          "name": "Excesso",
          "hook": "Fora da competência.",
          "literal": "Doutrina: excesso de poder é atuar além da competência legal. O agente faz o que a norma entregou a outro, ou faz mais do que a norma permitiu. O vício é de competência. Não se cura com boa intenção.",
          "context": "Não confunda com desvio. No excesso, a competência não alcança o ato.",
          "exam": "A banca chama excesso de desvio de finalidade.",
          "trap": "Hierarquia não cria competência. O Prompt 64 já separou.",
          "example": "O agente que aplica pena reservada ao delegado, se a lei assim dividir, está em excesso. Não invente a divisão: ela está na lei já lida, e não se reabre.",
          "mnemonic": "Sem competência, excesso."
        },
        {
          "tag": "DES",
          "name": "Desvio",
          "hook": "Competência certa, fim errado.",
          "literal": "Doutrina: desvio de finalidade, ou desvio de poder, ocorre quando o agente tem competência, mas busca fim diverso do que a norma fixou. O fim privado, o fim político ou mesmo um fim público diferente do previsto vicia o ato. A anulação é o caminho, não a revogação por conveniência.",
          "context": "Não cite artigo da lei da ação popular. Não foi transcrito.",
          "exam": "A banca trata desvio como mera ética, sem nulidade.",
          "trap": "Teoria dos motivos determinantes, se a questão usar, fica como doutrina sem número.",
          "example": "Remover um servidor com competência para remover, mas para punir sem processo, é desvio, não uso regular.",
          "mnemonic": "Competência não salva o fim errado."
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
      "item": "Uso",
      "rule": "Competência e fim da norma.",
      "clue": "Eficiência não basta."
    },
    {
      "item": "Excesso",
      "rule": "Fora da competência.",
      "clue": "Boa intenção não cura."
    },
    {
      "item": "Desvio",
      "rule": "Fim diverso.",
      "clue": "Mesmo fim público errado."
    },
    {
      "item": "Correção",
      "rule": "Anulação.",
      "clue": "Não é revogação."
    },
    {
      "item": "Lei da ação popular",
      "rule": "Não transcrita.",
      "clue": "Conferir o artigo."
    },
    {
      "item": "Súmula",
      "rule": "Não citada.",
      "clue": "Enunciado não relido."
    }
  ],
  "compare": [
    {
      "item": "Excesso",
      "ce": "Competência.",
      "cf": "Desvio é finalidade.",
      "effect": "separa"
    },
    {
      "item": "Fim",
      "ce": "O da norma.",
      "cf": "Fim público diverso não salva.",
      "effect": "restringe"
    },
    {
      "item": "Vício",
      "ce": "Ilegalidade.",
      "cf": "Não é mérito.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 68011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "No excesso de poder o agente tem competência e erra apenas a finalidade, e o desvio se corrige por revogação de mérito.",
      "correct": "E",
      "comentario": "ERRADO. Excesso é falta de competência. Desvio é finalidade errada, com competência. Os dois são ilegalidade, não mérito."
    },
    {
      "id": 68012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Desvio de finalidade",
      "correct": "e",
      "comentario": "Competência existe. O fim não é o da norma. Fim público diverso também vicia.",
      "options": [
        {
          "key": "a",
          "label": "só ocorre quando o agente invade competência de outro."
        },
        {
          "key": "b",
          "label": "é sempre mero desconforto ético, sem nulidade."
        },
        {
          "key": "c",
          "label": "se corrige por revogação."
        },
        {
          "key": "d",
          "label": "exige fim exclusivamente privado."
        },
        {
          "key": "e",
          "label": "é o uso da competência para fim diverso do que a norma fixou, ainda que o fim seja público."
        }
      ]
    },
    {
      "id": 68013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Uso regular do poder exige",
      "correct": "a",
      "comentario": "Competência e finalidade da norma. Eficiência não substitui.",
      "options": [
        {
          "key": "a",
          "label": "competência e finalidade previstas na norma."
        },
        {
          "key": "b",
          "label": "apenas eficiência."
        },
        {
          "key": "c",
          "label": "concordância do particular."
        },
        {
          "key": "d",
          "label": "decreto autônomo."
        },
        {
          "key": "e",
          "label": "ausência de processo."
        }
      ]
    }
  ],
  "palette": "rose",
  "highlight": {
    "big": "Uso e abuso",
    "small": "sem artigo inventado"
  },
  "heroLead": "Abuso não é nome único. A doutrina separa excesso de poder e desvio de finalidade. Os dois viciam o ato. Nenhum dos dois é técnica. O item 4.2 do edital para aqui.",
  "footerLine": "Prompt 68 de 86.",
  "nextLine": "Diga continue para o Prompt 69: responsabilidade civil do Estado.",
  "closingMnemonic": "Excesso: sem competência. Desvio: competência com fim errado. Os dois se anulam.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [],
  "toc": [
    {
      "id": "p68",
      "num": "68",
      "label": "Uso e abuso do poder"
    }
  ]
};
