import type { StudyModule } from "./study";

export const PROMPT134: StudyModule = {
  "short": "Raciocínio lógico",
  "eyebrow": "Prompt 134 · pedido 99",
  "title": "Raciocínio lógico",
  "subtitle": "conectivos, forma e quantificadores",
  "description": "Pedido 99. A negação da condicional não foi trocada por outra condicional. Quantificador não foi negado pelo extremo.",
  "reading": "Lógica proposicional de prova. Ordem dos conectivos é a usual, salvo parêntese.",
  "terms": [
    "condicional",
    "De Morgan",
    "modus ponens",
    "quantificador",
    "validade"
  ],
  "subject": "Raciocínio Lógico",
  "context": [
    "Os Prompts 62 a 122 do app já estão ocupados. Este pedido foi gravado com número novo.",
    "Número que não bate com a lei segue o texto oficial, e a divergência é dita.",
    "Súmula só entra com enunciado confirmado."
  ],
  "importance": "A banca troca prazo, requisito e nome de instituto.",
  "distinctions": [
    "A negação de p → q é p e ¬q.",
    "Afirmar o consequente é inválido. Modus ponens é válido.",
    "A negação de todo é algum não, não nenhum.",
    "Validade é da forma, não da verdade casual da conclusão.",
    "Recíproca não equivale à condicional. Contrapositiva equivale."
  ],
  "organs": [
    {
      "sigla": "1",
      "nome": "Proposição",
      "funcao": "A forma decide. Não se marque o que parece plausível.",
      "base": "Pedido 99",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "yellow"
    },
    {
      "sigla": "2",
      "nome": "Conectivos",
      "funcao": "A forma decide. Não se marque o que parece plausível.",
      "base": "Pedido 99",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "cyan"
    },
    {
      "sigla": "3",
      "nome": "Equivalência e negação",
      "funcao": "A forma decide. Não se marque o que parece plausível.",
      "base": "Pedido 99",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "orange"
    },
    {
      "sigla": "4",
      "nome": "Argumento",
      "funcao": "A forma decide. Não se marque o que parece plausível.",
      "base": "Pedido 99",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "violet"
    },
    {
      "sigla": "5",
      "nome": "Quantificadores e diagramas",
      "funcao": "A forma decide. Não se marque o que parece plausível.",
      "base": "Pedido 99",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "emerald"
    }
  ],
  "swaps": [
    {
      "wrong": "Negar condicional é negar o consequente dentro de outra condicional.",
      "right": "Negar p→q é afirmar p e negar q."
    },
    {
      "wrong": "Negar todo é afirmar nenhum.",
      "right": "Negar todo é afirmar algum não."
    },
    {
      "wrong": "Conclusão verdadeira torna o argumento válido.",
      "right": "Validade é da forma."
    }
  ],
  "timeline": [
    {
      "when": "Pedido",
      "title": "99",
      "text": "Gravado como Prompt 134."
    },
    {
      "when": "Limite",
      "title": "Recorte",
      "text": "Lógica proposicional de prova. Ordem dos conectivos é a usual, salvo parêntese."
    }
  ],
  "articles": [
    {
      "id": "p134-1",
      "num": "1",
      "kicker": "Pedido 99",
      "title": "Proposição",
      "lead": "Proposição",
      "plate": "Proposição",
      "plateSource": "Pedido 99",
      "devices": [
        {
          "tag": "regra",
          "name": "Proposição",
          "hook": "Proposição",
          "literal": "Proposição, na lógica cobrada, é frase declarativa que pode ser verdadeira ou falsa, não as duas ao mesmo tempo. Pergunta, ordem e exclamação ficam de fora, salvo se a questão as tratar de outro modo.\nProposição simples não tem conectivo. Composta tem.\nNegação troca o valor. Não é o antônimo solto. A negação de 'todos chegaram' não é 'nenhum chegou'. É 'algum não chegou', no bloco dos quantificadores.\n'Não é verdade que' nega a frase inteira, não só o primeiro verbo.\nValor lógico não é valor moral. 'Certo' na prova é verdadeiro na estrutura, não é elogio.",
          "context": "Proposição",
          "exam": "A forma decide. Não se marque o que parece plausível.",
          "trap": "Não troque a negação da estrutura pela negação da primeira palavra.",
          "example": "Exemplo só de forma lógica, sem fato penal.",
          "mnemonic": "Proposição",
          "revoked": false
        }
      ]
    },
    {
      "id": "p134-2",
      "num": "2",
      "kicker": "Pedido 99",
      "title": "Conectivos",
      "lead": "Conectivos",
      "plate": "Conectivos",
      "plateSource": "Pedido 99",
      "devices": [
        {
          "tag": "regra",
          "name": "Conectivos",
          "hook": "Conectivos",
          "literal": "Conjunção, e: verdadeira só quando as duas são verdadeiras.\nDisjunção inclusiva, ou: falsa só quando as duas são falsas. Admite as duas verdadeiras.\nDisjunção exclusiva, ou exclusivo: verdadeira quando os valores diferem. Falsa quando iguais.\nCondicional, se p então q: falsa só quando p é verdadeira e q é falsa. Verdadeira nos outros três casos. p é antecedente. q é consequente.\nBicondicional, se e somente se: verdadeira quando os valores coincidem.\nNegação: troca o valor.\nA condicional não afirma o antecedente. 'Se chove, a rua molha' não diz que choveu.\nOrdem de leitura, se a questão não puser parêntese: negação primeiro, depois e, depois ou, depois condicional, depois bicondicional. Parêntese vence. Não se invente outra ordem se a banca der a dela. Aqui se usa a ordem usual de prova e se diz que é a usual.",
          "context": "Conectivos",
          "exam": "A forma decide. Não se marque o que parece plausível.",
          "trap": "Não troque a negação da estrutura pela negação da primeira palavra.",
          "example": "Exemplo só de forma lógica, sem fato penal.",
          "mnemonic": "Conectivos",
          "revoked": false
        }
      ]
    },
    {
      "id": "p134-3",
      "num": "3",
      "kicker": "Pedido 99",
      "title": "Equivalência e negação",
      "lead": "Equivalência e negação",
      "plate": "Equivalência e negação",
      "plateSource": "Pedido 99",
      "devices": [
        {
          "tag": "regra",
          "name": "Equivalência e negação",
          "hook": "Equivalência e negação",
          "literal": "p → q equivale a ¬p ou q. Equivale também à contrapositiva ¬q → ¬p.\nNão equivale a q → p. Essa é a recíproca. Não equivale a ¬p → ¬q. Essa é a inversa. Recíproca e inversa não conservam o valor da condicional.\nNegação de p e q: ¬p ou ¬q. Negação de p ou q: ¬p e ¬q. São as leis de De Morgan. A negação troca o conectivo e nega cada parte.\nNegação de p → q: p e ¬q. Não é p → ¬q. Não é ¬p → ¬q.\nNegação da bicondicional: os valores diferem. Uma forma é (p e ¬q) ou (¬p e q).\nTautologia é sempre verdadeira. Contradição é sempre falsa. Contingência depende do caso.\nNão se negue frase longa palavra por palavra. Negue a estrutura.",
          "context": "Equivalência e negação",
          "exam": "A forma decide. Não se marque o que parece plausível.",
          "trap": "Não troque a negação da estrutura pela negação da primeira palavra.",
          "example": "Exemplo só de forma lógica, sem fato penal.",
          "mnemonic": "Equivalência e negação",
          "revoked": false
        }
      ]
    },
    {
      "id": "p134-4",
      "num": "4",
      "kicker": "Pedido 99",
      "title": "Argumento",
      "lead": "Argumento",
      "plate": "Argumento",
      "plateSource": "Pedido 99",
      "devices": [
        {
          "tag": "regra",
          "name": "Argumento",
          "hook": "Argumento",
          "literal": "Argumento é um conjunto de premissas e uma conclusão. Válido: se as premissas são verdadeiras, a conclusão não pode ser falsa. Verdade das premissas é outra pergunta. Argumento válido pode ter premissa falsa. Argumento inválido pode ter conclusão verdadeira por acaso.\nModus ponens: p → q, e p, logo q. Válido.\nModus tollens: p → q, e ¬q, logo ¬p. Válido.\nAfirmar o consequente: p → q, e q, logo p. Inválido.\nNegar o antecedente: p → q, e ¬p, logo ¬q. Inválido.\nSilogismo disjuntivo: p ou q, e ¬p, logo q. Válido na disjunção inclusiva, porque, se uma é falsa, a outra tem de ser verdadeira para a disjunção se sustentar.\nNão se chame de válido o que só parece plausível. A forma decide.",
          "context": "Argumento",
          "exam": "A forma decide. Não se marque o que parece plausível.",
          "trap": "Não troque a negação da estrutura pela negação da primeira palavra.",
          "example": "Exemplo só de forma lógica, sem fato penal.",
          "mnemonic": "Argumento",
          "revoked": false
        }
      ]
    },
    {
      "id": "p134-5",
      "num": "5",
      "kicker": "Pedido 99",
      "title": "Quantificadores e diagramas",
      "lead": "Quantificadores e diagramas",
      "plate": "Quantificadores e diagramas",
      "plateSource": "Pedido 99",
      "devices": [
        {
          "tag": "regra",
          "name": "Quantificadores e diagramas",
          "hook": "Quantificadores e diagramas",
          "literal": "Universal afirmativa: todo A é B. Universal negativa: nenhum A é B. Particular afirmativa: algum A é B. Particular negativa: algum A não é B.\nNegação de todo: algum não. Negação de algum: nenhum. Negação de nenhum: algum. Negação de algum não: todo.\n'Algum' inclui a possibilidade de 'todo', na leitura usual de prova, salvo se a questão disser 'apenas algum'. Não se troque 'algum' por 'só alguns' sem o texto.\nDiagrama: todo A é B põe A dentro de B. Nenhum A é B separa os círculos. Algum A é B põe interseção. Se há 'algum A não é B', parte de A fica fora de B.\nConclusão só sai se todas as premissas a obrigam. Possibilidade não é necessidade. A banca marca o possível como se fosse certo.\nRelação de ordem e sequência: 'A está à esquerda de B' não diz a distância. Não se invente elemento entre eles se a questão não o pôs.\nNão se use diagrama para concluir causa. Inclusão não é causalidade.",
          "context": "Quantificadores e diagramas",
          "exam": "A forma decide. Não se marque o que parece plausível.",
          "trap": "Não troque a negação da estrutura pela negação da primeira palavra.",
          "example": "Exemplo só de forma lógica, sem fato penal.",
          "mnemonic": "Quantificadores e diagramas",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 134",
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
  "rolePlateSource": "Prompt 134",
  "summary": [
    {
      "item": "E",
      "rule": "Só é verdadeiro se os dois são.",
      "clue": "Ou inclusivo só é falso se os dois são."
    },
    {
      "item": "Condicional",
      "rule": "Falsa só em V e depois F.",
      "clue": "Equivale a ¬p ou q."
    },
    {
      "item": "Negação de p→q",
      "rule": "p e ¬q.",
      "clue": "Não é p→¬q."
    },
    {
      "item": "Modus ponens",
      "rule": "Válido.",
      "clue": "Afirmar o consequente é inválido."
    },
    {
      "item": "Todo",
      "rule": "Negação: algum não.",
      "clue": "Não é nenhum."
    }
  ],
  "compare": [
    {
      "item": "Contrapositiva",
      "ce": "¬q → ¬p equivale.",
      "cf": "Recíproca q → p não equivale.",
      "effect": "separa"
    },
    {
      "item": "Validade",
      "ce": "Forma não admite conclusão falsa com premissas verdadeiras.",
      "cf": "Verdade é o valor da frase.",
      "effect": "separa"
    },
    {
      "item": "Algum",
      "ce": "Basta um, e não exclui todo.",
      "cf": "Nenhum exclui todos.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 134011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "A negação de 'se o termo foi lavrado, então o prazo foi cumprido' é 'se o termo foi lavrado, então o prazo não foi cumprido'.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. A negação da condicional é antecedente verdadeiro e consequente falso: o termo foi lavrado e o prazo não foi cumprido. Não é outra condicional."
    },
    {
      "id": 134012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O argumento 'se p, então q; q; logo p' é",
      "correct": "b",
      "options": [
        {
          "key": "a",
          "label": "modus ponens, válido."
        },
        {
          "key": "b",
          "label": "afirmação do consequente, inválido."
        },
        {
          "key": "c",
          "label": "modus tollens, válido."
        },
        {
          "key": "d",
          "label": "negação do antecedente, válido."
        },
        {
          "key": "e",
          "label": "sempre uma tautologia."
        }
      ],
      "comentario": "Questão original, não é prova real. Afirmar q não devolve p. A forma é inválida. Modus ponens exigiria p, não q."
    },
    {
      "id": 134013,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "A condicional p → q equivale a ¬q → ¬p e também a ¬p ou q.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. São a contrapositiva e a forma disjuntiva. A recíproca q → p não equivale."
    },
    {
      "id": 134014,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A negação de 'todo depoimento foi gravado' é",
      "correct": "d",
      "options": [
        {
          "key": "a",
          "label": "nenhum depoimento foi gravado."
        },
        {
          "key": "b",
          "label": "todo depoimento não foi gravado."
        },
        {
          "key": "c",
          "label": "algum depoimento foi gravado."
        },
        {
          "key": "d",
          "label": "algum depoimento não foi gravado."
        },
        {
          "key": "e",
          "label": "nenhum depoimento deixou de ser gravado."
        }
      ],
      "comentario": "Questão original, não é prova real. A negação do universal afirmativo é a particular negativa. 'Nenhum' é mais forte do que a negação exige."
    },
    {
      "id": 134015,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Argumento válido é aquele em que a conclusão é verdadeira, ainda que a forma permita conclusão falsa com premissas verdadeiras.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Validade é da forma. Conclusão verdadeira por acaso não torna válida uma forma que admite contraexemplo."
    }
  ],
  "toc": [
    {
      "id": "p134-1",
      "num": "1",
      "label": "Proposição"
    },
    {
      "id": "p134-2",
      "num": "2",
      "label": "Conectivos"
    },
    {
      "id": "p134-3",
      "num": "3",
      "label": "Equivalência e negação"
    },
    {
      "id": "p134-4",
      "num": "4",
      "label": "Argumento"
    },
    {
      "id": "p134-5",
      "num": "5",
      "label": "Quantificadores e diagramas"
    }
  ],
  "clocks": [],
  "organKicker": "Recorte",
  "organTitle": "Raciocínio lógico",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a regra que ele escreve.",
  "closing": "Conferir a fonte se houver atualização posterior à consulta de 20/10/2026.",
  "palette": "fresh",
  "highlight": {
    "big": "5",
    "small": "blocos neste prompt"
  },
  "heroLead": "Pedido 99. A negação da condicional não foi trocada por outra condicional. Quantificador não foi negado pelo extremo.",
  "footerLine": "Prompt 134 · pedido 99.",
  "nextLine": "Prompt 135 · pedido 100 · contabilidade geral.",
  "closingMnemonic": "Texto primeiro. Número divergente segue a lei. Lacuna não se completa.",
  "rolesTitle": "Limite",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "Não misture",
  "compareLead": "Instituto vizinho não empresta requisito.",
  "compareLeft": "Um",
  "compareRight": "Outro"
};
