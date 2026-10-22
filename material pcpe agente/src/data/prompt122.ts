import type { StudyModule } from "./study";

export const PROMPT122: StudyModule = {
  "short": "Lei nº 9.099, art. 90-A",
  "eyebrow": "Prompt 122 · pedido 88 · Lei nº 9.099/1995",
  "title": "Lei nº 9.099, art. 90-A",
  "subtitle": "pedido cortado",
  "description": "Pedido 88 do penal, gravado como Prompt 122 porque os Prompts 62 a 95 do app já são a Lei nº 14.133. Fonte: https://www.planalto.gov.br/ccivil_03/leis/l9099.htm. Transcrição do texto extraído antes do comentário. Sem completar lacuna. Paste cortado. Só o art. 90-A. O art. 90-A extraído afasta a Lei nº 9.099 da Justiça Militar. A página não escreve, nesse artigo, a vedação à violência doméstica. Essa vedação está no art. 41 da Lei nº 11.340, no Prompt 111, e não foi transportada para cá.",
  "reading": "Lei nº 9.099/1995. Artigos deste bloco: 90-A. Página consultada em 20/10/2026.",
  "terms": [
    "Lei nº 9.099/1995",
    "pedido 88",
    "texto extraído",
    "sem pena inventada",
    "conferir se faltar"
  ],
  "subject": "Direito Processual Penal",
  "context": [
    "O número do pedido não reaproveita o Prompt administrativo já gravado.",
    "Artigo revogado é declarado revogado e não comentado como vigente.",
    "Súmula, tema e acórdão só entram com enunciado confirmado. Nenhum foi numerado neste bloco sem esse enunciado."
  ],
  "importance": "A banca troca pena de caput com a de parágrafo e ressuscita artigo revogado.",
  "distinctions": [
    "O art. 90-A extraído afasta a Lei nº 9.099 da Justiça Militar. A página não escreve, nesse artigo, a vedação à violência doméstica. Essa vedação está no art. 41 da Lei nº 11.340, no Prompt 111, e não foi transportada para cá.",
    "O pedido 88 chegou cortado neste artigo. Os artigos anteriores desse pedido não foram recuperados e não foram inventados.",
    "Não se completa o restante da Lei nº 9.099.",
    "Paste cortado. Só o art. 90-A."
  ],
  "organs": [
    {
      "sigla": "90-A",
      "nome": "Art. 90-A",
      "funcao": "Texto extraído, sem pena de caput isolada.",
      "base": "Art. 90-A",
      "nao": "Não inventar pena.",
      "tone": "yellow"
    }
  ],
  "swaps": [
    {
      "wrong": "Dá para completar pena ou súmula que o texto não trouxe.",
      "right": "Se não está no texto extraído, conferir texto oficial. Sem número inventado."
    },
    {
      "wrong": "O artigo seguinte entra neste bloco.",
      "right": "O recorte para no último artigo pedido."
    },
    {
      "wrong": "O artigo seguinte entra neste bloco.",
      "right": "O recorte para no último artigo pedido."
    }
  ],
  "timeline": [
    {
      "when": "Fonte",
      "title": "Planalto",
      "text": "https://www.planalto.gov.br/ccivil_03/leis/l9099.htm"
    },
    {
      "when": "Pedido",
      "title": "88",
      "text": "Gravado como Prompt 122."
    },
    {
      "when": "Limite",
      "title": "Recorte",
      "text": "Paste cortado. Só o art. 90-A."
    }
  ],
  "articles": [
    {
      "id": "p122-90A",
      "num": "90-A",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 90-A",
      "lead": "Texto antes do comentário.",
      "plate": "Não se aplica à Justiça Militar",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "caput",
          "name": "As disposições desta Lei não se aplicam no âmbit",
          "hook": "As disposições desta Lei não se aplicam no âmbit",
          "literal": ". As disposições desta Lei não se aplicam no âmbito da Justiça Militar. (Artigo incluído pela Lei nº 9.839, de 27.9.1999)",
          "context": "Lei nº 9.099/1995, art. 90-A. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9099.htm",
          "exam": "O texto afasta a lei da Justiça Militar. Não escreve a vedação da violência doméstica. Não se complete o artigo com essa vedação.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Tipo",
      "source": "Lei nº 9.099/1995",
      "does": [
        "Ser lido pelo texto extraído"
      ],
      "doesNot": [
        "Não ganha pena inventada",
        "Não ganha exemplo de fato"
      ]
    },
    {
      "role": "Artigo revogado",
      "source": "Texto extraído",
      "does": [
        "Ser declarado revogado"
      ],
      "doesNot": [
        "Não ser comentado como vigente"
      ]
    }
  ],
  "roleNote": "Sem súmula numerada neste bloco. O enunciado não foi colado de fonte confirmada.",
  "rolePlate": "Texto antes do comentário.",
  "rolePlateSource": "Lei nº 9.099/1995",
  "summary": [
    {
      "item": "Art. 90-A",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    }
  ],
  "compare": [
    {
      "item": "Recorte",
      "ce": "1 artigo(s) localizado(s).",
      "cf": "Artigo de fora não entra.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 122011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "No texto extraído, o art. 90-A inicia com: As disposições desta Lei não se aplicam no âmbito da Justiça Militar. (Artigo incluído pela Lei nº 9.839, de 27.9.1999)",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. A alternativa repete o início extraído. Não acrescenta pena."
    },
    {
      "id": 122012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Sobre o art. 90-A, no texto extraído,",
      "correct": "c",
      "options": [
        {
          "key": "a",
          "label": "o artigo está revogado e não se comenta."
        },
        {
          "key": "b",
          "label": "a pena pode ser inventada porque o caput não a escreveu nesta extração."
        },
        {
          "key": "c",
          "label": "o comentário fica no texto localizado, sem completar lacuna."
        },
        {
          "key": "d",
          "label": "o número seguinte entra neste bloco."
        },
        {
          "key": "e",
          "label": "uma súmula não confirmada define a pena."
        }
      ],
      "comentario": "Questão original, não é prova real. Não havia frase de pena isolável. Não se inventa pena nem se abre o artigo seguinte."
    },
    {
      "id": 122013,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Pena, qualificadora, aumento, súmula e prazo que o texto extraído não escreve podem ser completados pelo comentário.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. O que não está no texto extraído fica como conferir texto oficial. Não se inventa número."
    }
  ],
  "toc": [
    {
      "id": "p122-90A",
      "num": "90-A",
      "label": "Art. 90-A"
    }
  ],
  "clocks": [],
  "organKicker": "Recorte",
  "organTitle": "Artigos do bloco",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a pena que ele escreve. Sem fato.",
  "closing": "Conferir texto oficial se a página tiver sido atualizada depois da consulta.",
  "palette": "rose",
  "highlight": {
    "big": "1",
    "small": "artigos no recorte"
  },
  "heroLead": "Texto extraído antes do comentário. Sem pena inventada e sem fato.",
  "footerLine": "Prompt 122 · pedido 88.",
  "nextLine": "Prompt 123 · pedido 88 completo, com a numeração da lei. O art. 79 da Lei nº 14.133 continua pausado.",
  "closingMnemonic": "Texto primeiro. Revogado não se comenta. Lacuna não se completa.",
  "rolesTitle": "Limite do bloco",
  "rolesLead": "O que a página não trouxe não entra como se tivesse sido lido.",
  "compareTitle": "Penas que o texto separou",
  "compareLead": "Primeira frase de pena não é a seguinte.",
  "compareLeft": "Primeira",
  "compareRight": "Seguinte"
};
