import type { StudyModule } from "./study";

export const PROMPT154: StudyModule = {
  "short": "Números, funções e sistemas",
  "eyebrow": "Prompt 154 · pedido 1-6 e 15",
  "title": "Números, funções e sistemas",
  "subtitle": "o que o edital pedia e ainda não estava fechado",
  "description": "Conjuntos numéricos, divisão proporcional, inequação, sistema linear, função e a noção de matriz. Conta fechada. Sem fórmula inventada.",
  "reading": "Edital do agente: conjuntos, medidas, divisão proporcional, inequações, sistemas, funções e problemas geométricos.",
  "terms": [
    "conjuntos",
    "divisão proporcional",
    "inequação",
    "função afim"
  ],
  "subject": "Raciocínio Lógico",
  "context": [
    "Conjunto numérico se marca pela definição, não pelo nome solto.",
    "Divisão direta não se inverte. Inequação multiplicada por negativo inverte o sinal.",
    "Conta sem os dados da questão não se completa."
  ],
  "importance": "A banca troca o conjunto, o sentido da proporção e o sinal da inequação.",
  "distinctions": [
    "Raiz de 2 não é racional.",
    "Divisão direta de 100 na razão 2:3 dá 40 e 60.",
    "Multiplicar inequação por negativo inverte o sinal.",
    "Função afim com coeficiente negativo é decrescente."
  ],
  "organs": [
    {
      "sigla": "1",
      "nome": "Conjuntos numéricos",
      "funcao": "Inteiro não é sinônimo de natural. Racional não é só o decimal finito.",
      "base": "Edital · raciocínio",
      "nao": "Não inventar dado que a questão não deu.",
      "tone": "yellow"
    },
    {
      "sigla": "2",
      "nome": "Divisão proporcional e medidas",
      "funcao": "Direta conserva a razão. Inversa inverte antes de repartir.",
      "base": "Edital · raciocínio",
      "nao": "Não inventar dado que a questão não deu.",
      "tone": "cyan"
    },
    {
      "sigla": "3",
      "nome": "Inequações, sistemas e funções",
      "funcao": "Negativo inverte a desigualdade. Sistema se confere nas duas equações.",
      "base": "Edital · raciocínio",
      "nao": "Não inventar dado que a questão não deu.",
      "tone": "orange"
    }
  ],
  "swaps": [
    {
      "wrong": "Todo inteiro é natural.",
      "right": "Inteiro negativo não é natural, na convenção usual."
    },
    {
      "wrong": "Dividir 100 na razão direta 2:3 e inverter as partes.",
      "right": "Direta dá 40 e 60. A inversa é que dá 60 e 40."
    },
    {
      "wrong": "Resolver −x > 3 como x > −3.",
      "right": "Negativo inverte a desigualdade: x < −3."
    }
  ],
  "timeline": [
    {
      "when": "Pedido",
      "title": "1-6 e 15",
      "text": "Gravado como Prompt 154."
    },
    {
      "when": "Limite",
      "title": "Recorte",
      "text": "Edital do agente: conjuntos, medidas, divisão proporcional, inequações, sistemas, funções e problemas geométricos."
    }
  ],
  "articles": [
    {
      "id": "p154-1",
      "num": "1",
      "kicker": "Edital · raciocínio",
      "title": "Conjuntos numéricos",
      "lead": "Conjuntos numéricos",
      "plate": "Conjuntos numéricos",
      "plateSource": "Edital · raciocínio",
      "devices": [
        {
          "tag": "regra",
          "name": "Conjuntos numéricos",
          "hook": "N dentro de Z, Z dentro de Q, Q dentro de R.",
          "literal": "Naturais, na leitura usual de prova: 0, 1, 2, 3... Há banca que exclui o zero. Se a questão não disser, não se brigue com o zero: diga a convenção que ela adotou.\nInteiros: naturais e os negativos. Todo natural é inteiro. Nem todo inteiro é natural.\nRacionais: números que podem ser escritos como fração de inteiros, com denominador diferente de zero. 0,5 = 1/2. Dízima periódica é racional. Inteiro é racional, porque 3 = 3/1.\nReais: racionais e irracionais. Raiz de 2 é real e não é racional. Não se invente casa decimal para ela.\nEntre dois racionais há outro racional. Isso não torna o conjunto dos inteiros denso do mesmo modo: entre 2 e 3 não há outro inteiro.\nMódulo: distância até zero. |−4| = 4. Não é o oposto em toda conta: o oposto de −4 é 4, e o módulo também é 4. O oposto de 4 é −4, e o módulo de 4 continua 4.",
          "context": "Conjuntos numéricos",
          "exam": "Inteiro não é sinônimo de natural. Racional não é só o decimal finito.",
          "trap": "Não diga que raiz de 2 é racional.",
          "example": "3 é natural, inteiro, racional e real. −3 é inteiro, racional e real, e não é natural na convenção usual.",
          "mnemonic": "N dentro de Z, Z dentro de Q, Q dentro de R.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p154-2",
      "num": "2",
      "kicker": "Edital · raciocínio",
      "title": "Divisão proporcional e medidas",
      "lead": "Divisão proporcional e medidas",
      "plate": "Divisão proporcional e medidas",
      "plateSource": "Edital · raciocínio",
      "devices": [
        {
          "tag": "regra",
          "name": "Divisão proporcional e medidas",
          "hook": "Direta: maior com maior. Inversa: maior com menor.",
          "literal": "Divisão diretamente proporcional: reparte-se o total na razão dada. 100 em partes proporcionais a 2 e 3. Soma das partes 5. Cada parte vale 20. Ficam 40 e 60. 40+60=100. 40/60=2/3.\nDivisão inversamente proporcional: a parte maior vai a quem tem o número menor. 100 em partes inversamente proporcionais a 2 e 3. Inverte-se: 1/2 e 1/3. Denominador comum 6: 3/6 e 2/6, razão 3:2. Partes 60 e 40. Quem tinha 2 recebe mais.\nNão se inverta se a questão disse diretamente.\nSistema legal de medidas, o que a prova cobra sem inventar conversão: 1 km = 1.000 m. 1 m = 100 cm. 1 h = 60 min = 3.600 s. 1 L = 1.000 mL. 1 kg = 1.000 g. 90 km/h = 25 m/s, porque se divide por 3,6. Área não se soma com comprimento.\nRegra de três composta só quando há mais de duas grandezas. Cada grandeza se classifica, direta ou inversa, antes de montar. Não se inverta uma grandeza que a questão não disse ser inversa.",
          "context": "Divisão proporcional e medidas",
          "exam": "Direta conserva a razão. Inversa inverte antes de repartir.",
          "trap": "Não inverta divisão direta.",
          "example": "100 na razão 2:3 dá 40 e 60. Na inversa de 2 e 3, dá 60 e 40.",
          "mnemonic": "Direta: maior com maior. Inversa: maior com menor.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p154-3",
      "num": "3",
      "kicker": "Edital · raciocínio",
      "title": "Inequações, sistemas e funções",
      "lead": "Inequações, sistemas e funções",
      "plate": "Inequações, sistemas e funções",
      "plateSource": "Edital · raciocínio",
      "devices": [
        {
          "tag": "regra",
          "name": "Inequações, sistemas e funções",
          "hook": "Sinal negativo vira a seta.",
          "literal": "Inequação do primeiro grau: isole a incógnita. Ao multiplicar ou dividir por número negativo, o sinal da desigualdade inverte. 2x − 4 > 0. 2x > 4. x > 2. −x > 3 vira x < −3.\nEquação do segundo grau já está no Prompt 132. Inequação do segundo grau pede o estudo do sinal, depois de achar as raízes. Não se marque o intervalo sem ver o sinal de a, o coeficiente de x².\nSistema linear de duas equações. x + y = 5 e x − y = 1. Soma: 2x = 6, x = 3. y = 2. Confira nas duas equações. Sistema sem solução é incompatível. Infinitas soluções, indeterminado. Não se invente a terceira variável.\nFunção afim: f(x) = ax + b. Se a > 0, cresce. Se a < 0, decresce. A raiz é o x em que f(x) = 0. Gráfico é reta. Não se chame de função afim uma parábola.\nFunção quadrática: f(x) = ax² + bx + c, a diferente de zero. Gráfico é parábola. Se a > 0, concavidade para cima. Vértice em x = −b/(2a). Não se use essa fórmula na função afim.\nProblema geométrico: área do retângulo é base vezes altura. Triângulo, base vezes altura sobre 2. Não se some área com perímetro.\nMatriz, no que a prova pede sem álgebra inventada: tabela de números. Ordem é linhas por colunas. Soma de matrizes só existe se a ordem for a mesma. Não se multiplique matriz de ordens incompatíveis e se invente o resultado.",
          "context": "Inequações, sistemas e funções",
          "exam": "Negativo inverte a desigualdade. Sistema se confere nas duas equações.",
          "trap": "Não resolva −x > 3 como x > −3.",
          "example": "x + y = 5 e x − y = 1 dão x = 3 e y = 2. −x > 3 dá x < −3.",
          "mnemonic": "Sinal negativo vira a seta.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 154",
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
  "rolePlateSource": "Prompt 154",
  "summary": [
    {
      "item": "Conjuntos",
      "rule": "N dentro de Z, Z dentro de Q, Q dentro de R.",
      "clue": "Raiz de 2 não é racional."
    },
    {
      "item": "Direta 2:3",
      "rule": "De 100, 40 e 60.",
      "clue": "Inversa: 60 e 40."
    },
    {
      "item": "−x > 3",
      "rule": "x < −3.",
      "clue": "Negativo inverte."
    },
    {
      "item": "Sistema",
      "rule": "x=3, y=2 no exemplo.",
      "clue": "Confira as duas equações."
    },
    {
      "item": "Afim",
      "rule": "a > 0 cresce. a < 0 decresce.",
      "clue": "Parábola é outra função."
    }
  ],
  "compare": [
    {
      "item": "Direta",
      "ce": "Maior parte para o maior número.",
      "cf": "Inversa: maior parte para o menor número.",
      "effect": "separa"
    },
    {
      "item": "Afim",
      "ce": "Reta.",
      "cf": "Quadrática: parábola.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 154011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Todo inteiro é natural, e a raiz quadrada de 2 é racional.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Há inteiro negativo, que não é natural na convenção usual. Raiz de 2 não é razão de inteiros."
    },
    {
      "id": 154012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Cem unidades divididas em partes diretamente proporcionais a 2 e 3 resultam em",
      "correct": "a",
      "options": [
        {
          "key": "a",
          "label": "40 e 60."
        },
        {
          "key": "b",
          "label": "60 e 40, porque a divisão direta inverte a razão."
        },
        {
          "key": "c",
          "label": "50 e 50."
        },
        {
          "key": "d",
          "label": "20 e 30."
        },
        {
          "key": "e",
          "label": "2 e 3."
        }
      ],
      "comentario": "Questão original, não é prova real. 2+3=5. 100/5=20. 2·20=40 e 3·20=60. A inversa é que daria 60 e 40."
    },
    {
      "id": 154013,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Na inequação −x > 3, a solução é x > −3, porque o sinal da incógnita não altera a desigualdade.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Multiplicar por −1 inverte a desigualdade. A solução é x < −3."
    },
    {
      "id": 154014,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "No sistema x + y = 5 e x − y = 1, a solução é x = 3 e y = 2.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. A soma das equações dá 2x = 6. y = 5 − 3 = 2. As duas equações conferem."
    },
    {
      "id": 154015,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "A função f(x) = −2x + 1 é crescente, porque o gráfico é uma reta.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Reta não decide o crescimento. O coeficiente de x é negativo, então a função afim é decrescente."
    }
  ],
  "toc": [
    {
      "id": "p154-1",
      "num": "1",
      "label": "Conjuntos numéricos"
    },
    {
      "id": "p154-2",
      "num": "2",
      "label": "Divisão proporcional e medid"
    },
    {
      "id": "p154-3",
      "num": "3",
      "label": "Inequações, sistemas e funçõ"
    }
  ],
  "clocks": [],
  "organKicker": "Recorte",
  "organTitle": "Números, funções e sistemas",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a regra que ele escreve.",
  "closing": "Questões originais, no estilo da banca. Não são prova real.",
  "palette": "leaf",
  "highlight": {
    "big": "3",
    "small": "blocos neste prompt"
  },
  "heroLead": "Conjuntos numéricos, divisão proporcional, inequação, sistema linear, função e a noção de matriz. Conta fechada. Sem fórmula inventada.",
  "footerLine": "Prompt 154 · pedido 1-6 e 15.",
  "nextLine": "Informática que o edital ainda pedia, no Prompt 155.",
  "closingMnemonic": "Texto primeiro. Número divergente segue a lei. Lacuna não se completa.",
  "rolesTitle": "Limite",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "Não misture",
  "compareLead": "Instituto vizinho não empresta requisito.",
  "compareLeft": "Um",
  "compareRight": "Outro"
};
