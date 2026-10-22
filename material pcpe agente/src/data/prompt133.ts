import type { StudyModule } from "./study";

export const PROMPT133: StudyModule = {
  "short": "Contagem e probabilidade clássic",
  "eyebrow": "Prompt 133 · pedido 98",
  "title": "Contagem e probabilidade clássica",
  "subtitle": "PA, PG e conjuntos",
  "description": "Pedido 98. Arranjo não foi usado no lugar de combinação. A probabilidade condicional completa fica no Prompt 138, no que o paste trouxe.",
  "reading": "Contagem, progressões e probabilidade clássica. Sem fórmula de amostra.",
  "terms": [
    "combinação",
    "arranjo",
    "PA",
    "PG",
    "probabilidade"
  ],
  "subject": "Matemática",
  "context": [
    "Os Prompts 62 a 122 do app já estão ocupados. Este pedido foi gravado com número novo.",
    "Número que não bate com a lei segue o texto oficial, e a divergência é dita.",
    "Súmula só entra com enunciado confirmado."
  ],
  "importance": "A banca troca prazo, requisito e nome de instituto.",
  "distinctions": [
    "C(5,2) = 10. A(5,2) = 20.",
    "PA do exemplo: quinto termo 11, soma 35.",
    "PG do exemplo: soma dos quatro primeiros 80.",
    "União tira a interseção.",
    "Par ou maior que 4, no dado, é 2/3."
  ],
  "organs": [
    {
      "sigla": "1",
      "nome": "Princípio e fatorial",
      "funcao": "Sucessão multiplica. Alternativa exclusiva soma.",
      "base": "Pedido 98",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "yellow"
    },
    {
      "sigla": "2",
      "nome": "Arranjo, permutação e combinação",
      "funcao": "C(5,2) é 10, não 20. 20 é o arranjo.",
      "base": "Pedido 98",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "cyan"
    },
    {
      "sigla": "3",
      "nome": "Progressões",
      "funcao": "aₙ da PA usa n−1, não n.",
      "base": "Pedido 98",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "orange"
    },
    {
      "sigla": "4",
      "nome": "Conjuntos",
      "funcao": "União de dois tira a interseção uma vez.",
      "base": "Pedido 98",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "violet"
    },
    {
      "sigla": "5",
      "nome": "Probabilidade clássica",
      "funcao": "União tira a interseção. Par ou maior que 4, no dado, não é 1/2 + 1/3.",
      "base": "Pedido 98",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "emerald"
    }
  ],
  "swaps": [
    {
      "wrong": "Escolher dois sem cargo é arranjo.",
      "right": "Sem distinção de papel, é combinação."
    },
    {
      "wrong": "União soma os grupos e para.",
      "right": "União tira quem foi contado duas vezes."
    },
    {
      "wrong": "0! = 0.",
      "right": "0! = 1, na definição usada aqui."
    }
  ],
  "timeline": [
    {
      "when": "Pedido",
      "title": "98",
      "text": "Gravado como Prompt 133."
    },
    {
      "when": "Limite",
      "title": "Recorte",
      "text": "Contagem, progressões e probabilidade clássica. Sem fórmula de amostra."
    }
  ],
  "articles": [
    {
      "id": "p133-1",
      "num": "1",
      "kicker": "Pedido 98",
      "title": "Princípio e fatorial",
      "lead": "Princípio e fatorial",
      "plate": "Princípio e fatorial",
      "plateSource": "Pedido 98",
      "devices": [
        {
          "tag": "regra",
          "name": "Princípio e fatorial",
          "hook": "E multiplica. Ou exclusivo soma.",
          "literal": "Princípio multiplicativo: se uma escolha tem m modos e a seguinte tem n, e as escolhas se sucedem, o total é m·n. Aditivo: se os conjuntos de modos são disjuntos, soma-se.\nFatorial: n! = n·(n−1)·…·1. 0! = 1, por definição usada na combinação. 5! = 120. 4! = 24.\nNão se multiplique quando a questão pede 'ou' exclusivo entre grupos que não se sobrepõem. Não se some quando a ordem das etapas é sucessiva.",
          "context": "Princípio e fatorial",
          "exam": "Sucessão multiplica. Alternativa exclusiva soma.",
          "trap": "Não trate 0! como 0.",
          "example": "Três turnos e quatro agentes disponíveis para cada turno, com repetição de agente admitida pela questão: 4·4·4 = 64. Se a questão veda repetir, 4·3·2 = 24.",
          "mnemonic": "E multiplica. Ou exclusivo soma.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p133-2",
      "num": "2",
      "kicker": "Pedido 98",
      "title": "Arranjo, permutação e combinação",
      "lead": "Arranjo, permutação e combinação",
      "plate": "Arranjo, permutação e combinação",
      "plateSource": "Pedido 98",
      "devices": [
        {
          "tag": "regra",
          "name": "Arranjo, permutação e combinação",
          "hook": "Ordem importa: arranjo. Não importa: combinação.",
          "literal": "Arranjo: a ordem importa e não há repetição. A(n,p) = n! / (n−p)!. A(5,2) = 5·4 = 20.\nPermutação simples: todos os elementos, ordem importa. P(n) = n!. P(5) = 120.\nPermutação com repetição: n! / (k!·m!·…), se houver elementos idênticos.\nCombinação: a ordem não importa. C(n,p) = n! / (p!·(n−p)!). C(5,2) = 10. C(n,p) = C(n, n−p). C(5,0) = 1.\nA pergunta decide. 'Escolher dois para uma viatura, sem cargo distinto' é combinação. 'Escolher quem dirige e quem navega' é arranjo, se os papéis diferem.\nAnagrama é permutação das letras. Letra repetida divide o fatorial.\nNão se use combinação onde a ordem cria fato novo.",
          "context": "Arranjo, permutação e combinação",
          "exam": "C(5,2) é 10, não 20. 20 é o arranjo.",
          "trap": "Não divida por p! se a ordem importa.",
          "example": "Cinco agentes, dois lugares indistintos: 10 pares. Dois lugares com função diferente: 20.",
          "mnemonic": "Ordem importa: arranjo. Não importa: combinação.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p133-3",
      "num": "3",
      "kicker": "Pedido 98",
      "title": "Progressões",
      "lead": "Progressões",
      "plate": "Progressões",
      "plateSource": "Pedido 98",
      "devices": [
        {
          "tag": "regra",
          "name": "Progressões",
          "hook": "PA soma a razão. PG multiplica.",
          "literal": "PA: cada termo soma a razão. aₙ = a₁ + (n−1)·r. Soma: Sₙ = n·(a₁ + aₙ) / 2.\nExemplo: a₁ = 3, r = 2, n = 5. a₅ = 3 + 4·2 = 11. S₅ = 5·(3+11)/2 = 35. Os termos: 3, 5, 7, 9, 11. Soma 35.\nPG: cada termo multiplica pela razão. aₙ = a₁ · q^(n−1). Soma, q diferente de 1: Sₙ = a₁·(qⁿ − 1) / (q − 1).\nExemplo: a₁ = 2, q = 3, n = 4. a₄ = 2·27 = 54. S₄ = 2·(81 − 1) / 2 = 80. Termos: 2, 6, 18, 54. Soma 80.\nRazão negativa alterna o sinal. Razão entre 0 e 1, em módulo, aproxima de zero. Não se use a soma da PA na PG.\nTermo geral pede a posição. Soma pede o acumulado. A banca troca.",
          "context": "Progressões",
          "exam": "aₙ da PA usa n−1, não n.",
          "trap": "Não some PG com a fórmula da PA.",
          "example": "PA 3, 5, 7, 9, 11: quinto termo 11, soma 35. PG 2, 6, 18, 54: soma 80.",
          "mnemonic": "PA soma a razão. PG multiplica.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p133-4",
      "num": "4",
      "kicker": "Pedido 98",
      "title": "Conjuntos",
      "lead": "Conjuntos",
      "plate": "Conjuntos",
      "plateSource": "Pedido 98",
      "devices": [
        {
          "tag": "regra",
          "name": "Conjuntos",
          "hook": "Soma e tira o que foi contado duas vezes.",
          "literal": "União: elementos de um ou de outro. Interseção: dos dois. Diferença: do primeiro que não estão no segundo. Complementar: o que está no universo e não está no conjunto.\nn(A ∪ B) = n(A) + n(B) − n(A ∩ B). O encontro foi contado duas vezes. Por isso se tira.\nTrês conjuntos: somam-se os três, tiram-se as interseções duas a duas, soma-se de novo a interseção dos três, porque ela foi tirada vezes demais. Não se aplique a fórmula de dois a um problema de três sem o ajuste.\nDiagrama só fecha se o universo está dito. 'Nenhum' é interseção vazia. 'Todo A é B' é A contido em B. 'Algum A é B' é interseção não vazia. 'Algum A não é B' não nega que algum A seja B.\nNão se conclua 'nenhum' a partir de 'algum não'.",
          "context": "Conjuntos",
          "exam": "União de dois tira a interseção uma vez.",
          "trap": "Não use a fórmula de dois conjuntos em três sem o termo da interseção tripla.",
          "example": "20 no plantão diurno, 15 no noturno, 5 nos dois: união 20+15−5 = 30, não 35.",
          "mnemonic": "Soma e tira o que foi contado duas vezes.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p133-5",
      "num": "5",
      "kicker": "Pedido 98",
      "title": "Probabilidade clássica",
      "lead": "Probabilidade clássica",
      "plate": "Probabilidade clássica",
      "plateSource": "Pedido 98",
      "devices": [
        {
          "tag": "regra",
          "name": "Probabilidade clássica",
          "hook": "Some e tire o repetido.",
          "literal": "Se os resultados são igualmente possíveis, P(A) = casos favoráveis / casos possíveis. 0 ≤ P(A) ≤ 1. P(vazio) = 0. P(universo) = 1.\nComplementar: P(A') = 1 − P(A).\nUnião: P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Se são mutuamente exclusivos, a interseção é 0 e as probabilidades se somam.\nDado honesto: P(par) = 3/6 = 1/2. P(número maior que 4) = 2/6 = 1/3. Não se some 1/2 e 1/3 para 'par ou maior que 4' sem tirar o 6, que é par e maior que 4. Favoráveis: 2, 4, 6, 5. São 4. P = 4/6 = 2/3.\nEventos independentes, no sentido clássico deste bloco: a ocorrência de um não altera a probabilidade do outro, e P(A ∩ B) = P(A)·P(B). A definição condicional está no Prompt 138. Não se antecipe fórmula que aquele prompt cortou.\nCom reposição, a probabilidade se repete. Sem reposição, o espaço muda. A questão precisa dizer.",
          "context": "Probabilidade clássica",
          "exam": "União tira a interseção. Par ou maior que 4, no dado, não é 1/2 + 1/3.",
          "trap": "Não multiplique probabilidade de eventos que não são independentes.",
          "example": "Dado: par ou maior que 4 dá 4 faces em 6, não 5.",
          "mnemonic": "Some e tire o repetido.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 133",
      "does": [
        "Ler o texto antes do comentário"
      ],
      "doesNot": [
        "Não completar lacuna",
        "Não usar número não confirmado"
      ]
    }
  ],
  "roleNote": "Questões são originais, no estilo da banca, não são prova real.",
  "rolePlate": "Texto primeiro.",
  "rolePlateSource": "Prompt 133",
  "summary": [
    {
      "item": "C(5,2)",
      "rule": "10.",
      "clue": "A(5,2) é 20."
    },
    {
      "item": "PA",
      "rule": "aₙ = a₁ + (n−1)·r.",
      "clue": "Exemplo: 11 e soma 35."
    },
    {
      "item": "PG",
      "rule": "aₙ = a₁·q^(n−1).",
      "clue": "Exemplo: soma 80."
    },
    {
      "item": "União",
      "rule": "n(A)+n(B)−n(A∩B).",
      "clue": "20, 15 e 5 dão 30."
    },
    {
      "item": "Dado",
      "rule": "Par ou maior que 4: 2/3.",
      "clue": "Tire a interseção."
    }
  ],
  "compare": [
    {
      "item": "Arranjo",
      "ce": "Ordem importa. A(5,2)=20.",
      "cf": "Combinação: ordem não importa. C(5,2)=10.",
      "effect": "separa"
    },
    {
      "item": "PA",
      "ce": "Soma a razão.",
      "cf": "PG multiplica pela razão.",
      "effect": "separa"
    },
    {
      "item": "Com reposição",
      "ce": "O espaço se repete.",
      "cf": "Sem reposição, o espaço muda.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 133011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O número de modos de escolher 2 agentes entre 5, sem função distinta, é 20, porque 5·4 = 20.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. 5·4 = 20 é arranjo, ordem importa. Sem função distinta, a ordem não importa: C(5,2) = 10."
    },
    {
      "id": 133012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Na PA de primeiro termo 3 e razão 2, o quinto termo e a soma dos cinco primeiros são",
      "correct": "a",
      "options": [
        {
          "key": "a",
          "label": "11 e 35."
        },
        {
          "key": "b",
          "label": "13 e 35."
        },
        {
          "key": "c",
          "label": "11 e 30."
        },
        {
          "key": "d",
          "label": "10 e 25."
        },
        {
          "key": "e",
          "label": "15 e 45."
        }
      ],
      "comentario": "Questão original, não é prova real. a₅ = 3 + 4·2 = 11. S = 5·(3+11)/2 = 35."
    },
    {
      "id": 133013,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Se 20 agentes trabalham de dia, 15 de noite e 5 nos dois turnos, a união tem 35 agentes.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. 20 + 15 − 5 = 30. Os 5 foram contados nos dois grupos."
    },
    {
      "id": 133014,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Num dado honesto, a probabilidade de sair par ou número maior que 4 é",
      "correct": "b",
      "options": [
        {
          "key": "a",
          "label": "5/6."
        },
        {
          "key": "b",
          "label": "2/3."
        },
        {
          "key": "c",
          "label": "1/2."
        },
        {
          "key": "d",
          "label": "1/3."
        },
        {
          "key": "e",
          "label": "5/12."
        }
      ],
      "comentario": "Questão original, não é prova real. Faces 2, 4, 5 e 6. Quatro de seis. 2/3. A soma 1/2 + 1/3 conta o 6 duas vezes."
    },
    {
      "id": 133015,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Na PG de primeiro termo 2 e razão 3, a soma dos quatro primeiros termos é 80.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. Termos 2, 6, 18 e 54. Soma 80. A fórmula 2·(3⁴ − 1)/(3 − 1) = 80."
    }
  ],
  "toc": [
    {
      "id": "p133-1",
      "num": "1",
      "label": "Princípio e fatorial"
    },
    {
      "id": "p133-2",
      "num": "2",
      "label": "Arranjo, permutação e combin"
    },
    {
      "id": "p133-3",
      "num": "3",
      "label": "Progressões"
    },
    {
      "id": "p133-4",
      "num": "4",
      "label": "Conjuntos"
    },
    {
      "id": "p133-5",
      "num": "5",
      "label": "Probabilidade clássica"
    }
  ],
  "clocks": [],
  "organKicker": "Recorte",
  "organTitle": "Contagem e probabilidade clássica",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a regra que ele escreve.",
  "closing": "Conferir a fonte se houver atualização posterior à consulta de 20/10/2026.",
  "palette": "cool",
  "highlight": {
    "big": "5",
    "small": "blocos neste prompt"
  },
  "heroLead": "Pedido 98. Arranjo não foi usado no lugar de combinação. A probabilidade condicional completa fica no Prompt 138, no que o paste trouxe.",
  "footerLine": "Prompt 133 · pedido 98.",
  "nextLine": "Prompt 134 · pedido 99 · raciocínio lógico.",
  "closingMnemonic": "Texto primeiro. Número divergente segue a lei. Lacuna não se completa.",
  "rolesTitle": "Limite",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "Não misture",
  "compareLead": "Instituto vizinho não empresta requisito.",
  "compareLeft": "Um",
  "compareRight": "Outro"
};
