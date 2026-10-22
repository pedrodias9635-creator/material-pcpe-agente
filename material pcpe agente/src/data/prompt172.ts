import type { StudyModule } from "./study";

export const PROMPT172: StudyModule = {
  "short": "Sistema legal de medidas",
  "eyebrow": "Prompt 172 · lacuna do edital",
  "title": "Sistema legal de medidas",
  "subtitle": "metro, litro, hectare",
  "description": "O item 2 do edital não tinha assunto. Entram as conversões do Sistema Internacional usadas na prova. Alqueire não foi fixado. Decreto não foi numerado.",
  "reading": "Sistema Internacional de Unidades. Sem artigo de decreto neste prompt.",
  "terms": [
    "hectare",
    "litro",
    "quilo",
    "tonelada"
  ],
  "subject": "Raciocínio Lógico",
  "context": [
    "O texto abaixo é o da compilação oficial já conferida. Redação anterior riscada não foi copiada.",
    "Artigo de mesmo número no ADCT não é este texto.",
    "O que o artigo não escreve não se completa de memória."
  ],
  "importance": "A banca troca o artigo vizinho, o prazo e o nome do instituto.",
  "distinctions": [
    "1 hectare = 10.000 m².",
    "1 litro = 1 dm³, não 1 m³.",
    "Quilo é mil, não um milhão.",
    "1 tonelada = 1.000 kg."
  ],
  "organs": [
    {
      "sigla": "med",
      "nome": "Conversões",
      "funcao": "A banca troca hectare com metro quadrado e litro com metro cúbico.",
      "base": "Edital · medidas",
      "nao": "Quilo não é mega.",
      "tone": "yellow"
    }
  ],
  "swaps": [
    {
      "wrong": "Igual a 1 m³.",
      "right": "Igual a 1 dm³."
    }
  ],
  "timeline": [
    {
      "when": "Fonte",
      "title": "Compilação conferida",
      "text": "Sistema Internacional de Unidades. Sem artigo de decreto neste prompt."
    },
    {
      "when": "Limite",
      "title": "Sem invenção",
      "text": "Inciso não transcrito não foi inventado."
    }
  ],
  "articles": [
    {
      "id": "p172-med",
      "num": "med",
      "kicker": "Edital · medidas",
      "title": "Conversões",
      "lead": "Conversões",
      "plate": "Conversões",
      "plateSource": "Edital · medidas",
      "devices": [
        {
          "tag": "med",
          "name": "Art. med",
          "hook": "Hectare: 10.000. Litro: dm³.",
          "literal": "O item 2 de Raciocínio Lógico pede o sistema legal de medidas. É o Sistema Internacional, sem artigo de decreto inventado neste prompt. Unidades de base usadas na prova: metro, quilograma, segundo. Prefixos: quilo é 10³, mega é 10⁶, centi é 10⁻², mili é 10⁻³. 1 quilômetro = 1.000 metros. 1 metro = 100 centímetros. 1 hectare = 10.000 metros quadrados. 1 litro = 1 decímetro cúbico = 1.000 centímetros cúbicos = 0,001 metro cúbico. 1 tonelada = 1.000 quilogramas. Alqueire não tem valor único neste prompt e não foi fixado.",
          "context": "A banca troca hectare com metro quadrado e litro com metro cúbico.",
          "exam": "A banca troca hectare com metro quadrado e litro com metro cúbico.",
          "trap": "Quilo não é mega.",
          "example": "Sem alqueire. O valor não é único.",
          "mnemonic": "Hectare: 10.000. Litro: dm³.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 172",
      "does": [
        "Ler o texto antes do comentário",
        "Separar o artigo do vizinho"
      ],
      "doesNot": [
        "Não completar lacuna",
        "Não usar número não escrito neste prompt"
      ]
    }
  ],
  "roleNote": "Questões originais, no estilo da banca. Não são prova real.",
  "rolePlate": "Texto primeiro.",
  "rolePlateSource": "Prompt 172",
  "summary": [
    {
      "item": "Hectare",
      "rule": "10.000 m².",
      "clue": "Não é 1.000."
    },
    {
      "item": "Litro",
      "rule": "1 dm³.",
      "clue": "Não é 1 m³."
    }
  ],
  "compare": [
    {
      "item": "Litro",
      "ce": "Igual a 1 m³.",
      "cf": "Igual a 1 dm³.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 172011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Um hectare equivale a 10.000 metros quadrados.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. 100 m × 100 m."
    },
    {
      "id": 172012,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Um litro equivale a um metro cúbico.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Um litro é um decímetro cúbico, ou seja, 0,001 metro cúbico."
    },
    {
      "id": 172013,
      "banca": "Estilo Cebraspe · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O prefixo quilo indica:",
      "correct": "a",
      "options": [
        {
          "key": "a",
          "label": "10³."
        },
        {
          "key": "b",
          "label": "10⁶."
        },
        {
          "key": "c",
          "label": "10⁻³."
        },
        {
          "key": "d",
          "label": "10²."
        },
        {
          "key": "e",
          "label": "10⁻²."
        }
      ],
      "comentario": "Questão original, não é prova real. Quilo é mil. Mega é 10⁶. Mili é 10⁻³. Centi é 10⁻²."
    }
  ],
  "toc": [
    {
      "id": "p172-med",
      "num": "med",
      "label": "Conversões"
    }
  ],
  "clocks": [],
  "organKicker": "Recorte",
  "organTitle": "Sistema legal de medidas",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a troca que a banca faz.",
  "closing": "Conferir a fonte se houver emenda posterior à compilação consultada em 21/10/2026.",
  "palette": "ember",
  "highlight": {
    "big": "1",
    "small": "artigos neste assunto"
  },
  "heroLead": "O item 2 do edital não tinha assunto. Entram as conversões do Sistema Internacional usadas na prova. Alqueire não foi fixado. Decreto não foi numerado.",
  "nextLine": "O assunto seguinte continua na mesma disciplina.",
  "closingMnemonic": "1 hectare = 10.000 m².",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "O que a banca troca",
  "compareLead": "A coluna da esquerda é a armadilha. A da direita é o texto.",
  "compareLeft": "Armadilha",
  "compareRight": "Texto"
};
