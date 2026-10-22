import type { StudyModule } from "./study";

export const PROMPT132: StudyModule = {
  "short": "Matemática",
  "eyebrow": "Prompt 132 · pedido 97",
  "title": "Matemática",
  "subtitle": "proporção, porcentagem, juros e unidades",
  "description": "Pedido 97. As contas deste prompt foram fechadas. Taxa que a questão não deu não foi inventada.",
  "reading": "Aritmética e geometria elementar. Sem tabela oficial de financiamento.",
  "terms": [
    "proporção",
    "porcentagem",
    "juros",
    "MMC",
    "MDC"
  ],
  "subject": "Matemática",
  "context": [
    "Os Prompts 62 a 122 do app já estão ocupados. Este pedido foi gravado com número novo.",
    "Número que não bate com a lei segue o texto oficial, e a divergência é dita.",
    "Súmula só entra com enunciado confirmado."
  ],
  "importance": "A banca troca prazo, requisito e nome de instituto.",
  "distinctions": [
    "Regra de três inversa só quando a questão estabelece a relação inversa.",
    "Aumento e desconto da mesma taxa não se anulam.",
    "Juro simples e composto coincidem no período 1, não depois.",
    "90 km/h = 25 m/s.",
    "MDC e MMC de 12 e 18 são 6 e 36."
  ],
  "organs": [
    {
      "sigla": "1",
      "nome": "Razão e proporção",
      "funcao": "Extremos e meios só depois de a proporção estar escrita na ordem certa.",
      "base": "Pedido 97",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "yellow"
    },
    {
      "sigla": "2",
      "nome": "Porcentagem",
      "funcao": "A base do segundo percentual já é o valor alterado.",
      "base": "Pedido 97",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "cyan"
    },
    {
      "sigla": "3",
      "nome": "Juros",
      "funcao": "Unidade da taxa e do tempo têm de coincidir.",
      "base": "Pedido 97",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "orange"
    },
    {
      "sigla": "4",
      "nome": "Equações e unidades",
      "funcao": "90 km/h equivalem a 25 m/s. A divisão é por 3,6.",
      "base": "Pedido 97",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "violet"
    },
    {
      "sigla": "5",
      "nome": "Geometria e divisibilidade",
      "funcao": "Altura do triângulo é perpendicular. MMC não é MDC.",
      "base": "Pedido 97",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "emerald"
    }
  ],
  "swaps": [
    {
      "wrong": "Aumento e desconto da mesma taxa se anulam.",
      "right": "A segunda taxa incide sobre a base nova."
    },
    {
      "wrong": "Juro composto e simples coincidem em três períodos.",
      "right": "Coincidem no período 1. No 3, o composto é maior."
    },
    {
      "wrong": "MMC serve para dividir em grupos iguais.",
      "right": "Grupo igual pede MDC. Ciclo pede MMC."
    }
  ],
  "timeline": [
    {
      "when": "Pedido",
      "title": "97",
      "text": "Gravado como Prompt 132."
    },
    {
      "when": "Limite",
      "title": "Recorte",
      "text": "Aritmética e geometria elementar. Sem tabela oficial de financiamento."
    }
  ],
  "articles": [
    {
      "id": "p132-1",
      "num": "1",
      "kicker": "Pedido 97",
      "title": "Razão e proporção",
      "lead": "Razão e proporção",
      "plate": "Razão e proporção",
      "plateSource": "Pedido 97",
      "devices": [
        {
          "tag": "regra",
          "name": "Razão e proporção",
          "hook": "Direta conserva a razão. Inversa conserva o produto.",
          "literal": "Razão é a comparação de duas quantidades da mesma espécie, a/b, com b diferente de zero. Não é diferença.\nProporção é a igualdade de duas razões: a/b = c/d. O produto dos extremos é igual ao produto dos meios: a·d = b·c. Vale se nenhum termo é zero e a igualdade está formada.\nGrandezas diretamente proporcionais: uma multiplica, a outra multiplica pelo mesmo fator. Inversamente proporcionais: uma multiplica, a outra divide por esse fator.\nRegra de três simples direta: monte a proporção na mesma ordem. Inversa: inverta uma das razões antes de multiplicar.\nExemplo direto. Quatro agentes produzem 12 relatórios em condições iguais. Seis agentes, no mesmo tempo e no mesmo ritmo, produzem x. 4/12 = 6/x não é a montagem correta, porque os 12 não estão na mesma posição dos 4. A razão agentes/relatórios se conserva: 4/12 = 6/x, e aqui os 12 são relatórios e os 4 são agentes, então 4/12 = 6/x está, sim, na ordem agente por relatório. 4x = 72, x = 18.\nExemplo inverso. Quatro viaturas levam 6 horas para um percurso conjunto em que mais viatura reduz o tempo, no modelo da questão. Se a questão disser que o tempo é inversamente proporcional ao número de viaturas, 4 viaturas em 6 horas dão, para 8 viaturas, 3 horas. 4·6 = 8·t, porque na inversa o produto se conserva. t = 3.\nSe a questão não disser que a relação é inversa, não se inverta. Mais gente nem sempre reduz o tempo.",
          "context": "Razão e proporção",
          "exam": "Extremos e meios só depois de a proporção estar escrita na ordem certa.",
          "trap": "Não inverta a regra de três sem a questão dizer que a grandeza é inversa.",
          "example": "4 está para 12 como 6 está para 18, na direta do exemplo.",
          "mnemonic": "Direta conserva a razão. Inversa conserva o produto.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p132-2",
      "num": "2",
      "kicker": "Pedido 97",
      "title": "Porcentagem",
      "lead": "Porcentagem",
      "plate": "Porcentagem",
      "plateSource": "Pedido 97",
      "devices": [
        {
          "tag": "regra",
          "name": "Porcentagem",
          "hook": "A base mudou. Ponto percentual não é porcentagem.",
          "literal": "Por cento é razão com denominador 100. 15% = 15/100 = 0,15.\nDe um valor: 15% de 800 = 0,15 · 800 = 120.\nAumento: valor vezes 1 mais a taxa. 800 mais 15% = 800 · 1,15 = 920.\nDesconto: valor vezes 1 menos a taxa. 800 menos 15% = 800 · 0,85 = 680.\nAumento seguido de desconto da mesma taxa não volta ao início. 100 mais 10% = 110. 110 menos 10% = 99. A base mudou.\nVariação percentual entre dois valores: (final − inicial) / inicial. De 80 para 100, a variação é 20/80 = 0,25 = 25%. De 100 para 80, é −20/100 = −20%. Não é a mesma conta ao contrário.\nTaxa sobre taxa: 20% de 50% é 10% do total, não 70% nem 30%. Some só o que a questão mandar somar.\nNão se troque ponto percentual por porcentagem. Subir de 10% para 15% é aumento de 5 pontos percentuais, e de 50% em relação à taxa antiga, porque 5/10 = 0,5.",
          "context": "Porcentagem",
          "exam": "A base do segundo percentual já é o valor alterado.",
          "trap": "Não desfaça um aumento de 10% com um desconto de 10% e espere o valor inicial.",
          "example": "800 com 15% de acréscimo dá 920, não 815.",
          "mnemonic": "A base mudou. Ponto percentual não é porcentagem.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p132-3",
      "num": "3",
      "kicker": "Pedido 97",
      "title": "Juros",
      "lead": "Juros",
      "plate": "Juros",
      "plateSource": "Pedido 97",
      "devices": [
        {
          "tag": "regra",
          "name": "Juros",
          "hook": "Simples soma. Composto incorpora.",
          "literal": "Juro simples: J = C · i · t. Montante: M = C + J = C · (1 + i·t). A taxa e o tempo ficam na mesma unidade. 2% ao mês, durante 3 meses, sobre 1.000: J = 1000 · 0,02 · 3 = 60. M = 1.060.\nJuro composto: o juro entra na base. M = C · (1 + i)^t. J = M − C. Os mesmos números: 1000 · (1,02)^3. 1,02 ao quadrado é 1,0404. Vezes 1,02 é 1,061208. M = 1.061,208, que em reais com centavos se escreve 1.061,21 se a questão pedir arredondamento a duas casas. J = 61,21 nesse arredondamento. Sem a pergunta pedir arredondamento, mantenha 1.061,208.\nNo período maior que 1, com taxa positiva, o composto supera o simples. No período 1, coincidem. Não se use a fórmula composta com taxa e tempo em unidades diferentes.\nTaxa nominal e taxa efetiva não são a mesma coisa. A prova pode pedir a conversão. Se não der a capitalização, não se invente. 12% ao ano, capitalizados mensalmente, não se aplicam de uma vez como 12% no mês nem, sem conta, como 1% sem dizer que a questão pediu a taxa proporcional.\nNão se apresente taxa de financiamento como se fosse tabela oficial.",
          "context": "Juros",
          "exam": "Unidade da taxa e do tempo têm de coincidir.",
          "trap": "Não use juro simples quando a questão diz composto, nem o contrário.",
          "example": "1.000 a 2% ao mês, por 3 meses: simples, 60. Composto, 61,208 antes do arredondamento.",
          "mnemonic": "Simples soma. Composto incorpora.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p132-4",
      "num": "4",
      "kicker": "Pedido 97",
      "title": "Equações e unidades",
      "lead": "Equações e unidades",
      "plate": "Equações e unidades",
      "plateSource": "Pedido 97",
      "devices": [
        {
          "tag": "regra",
          "name": "Equações e unidades",
          "hook": "Converta antes de operar.",
          "literal": "Equação do primeiro grau: isole a incógnita. 2x + 6 = 20. 2x = 14. x = 7. O que se faz de um lado se faz do outro.\nSistema: substituição ou adição. Não se perca variável no caminho.\nEquação do segundo grau: ax² + bx + c = 0, a diferente de zero. Discriminante Δ = b² − 4ac. Se Δ > 0, duas raízes reais. Se Δ = 0, uma raiz real dupla. Se Δ < 0, não há raiz real. x = (−b ± raiz de Δ) / (2a).\nUnidades: 1 km = 1.000 m. 1 m = 100 cm. 1 h = 60 min = 3.600 s. 1 L = 1.000 mL. 1 kg = 1.000 g. 1 t = 1.000 kg.\nVelocidade média = distância / tempo, na mesma unidade. 90 km/h = 90.000 m / 3.600 s = 25 m/s. A conta: dividir por 3,6. 25 · 3,6 = 90. Não se divida por 60 e se chame o resultado de m/s.\nÁrea não se soma com comprimento. A questão que mistura unidade pede conversão antes da conta.\nPrefixos: quilo é 10³, mega é 10⁶, giga é 10⁹. Em armazenamento de arquivo, o fabricante pode usar 10³ e o sistema 2¹⁰. A prova precisa dizer qual. 1 KB, no sentido de 1.024 bytes, não é 1.000 se a questão adotou a potência de 2. Não se escolha uma sem o comando.",
          "context": "Equações e unidades",
          "exam": "90 km/h equivalem a 25 m/s. A divisão é por 3,6.",
          "trap": "Não some grandezas de dimensões diferentes.",
          "example": "2x + 6 = 20 dá x = 7, não 13.",
          "mnemonic": "Converta antes de operar.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p132-5",
      "num": "5",
      "kicker": "Pedido 97",
      "title": "Geometria e divisibilidade",
      "lead": "Geometria e divisibilidade",
      "plate": "Geometria e divisibilidade",
      "plateSource": "Pedido 97",
      "devices": [
        {
          "tag": "regra",
          "name": "Geometria e divisibilidade",
          "hook": "Ciclo comum: MMC. Grupo igual: MDC.",
          "literal": "Retângulo: área é base vezes altura. Perímetro é a soma dos lados. 4 por 6: área 24, perímetro 20.\nTriângulo: área é base vezes altura, dividido por 2. A altura é perpendicular à base escolhida, não é qualquer lado.\nCircunferência: comprimento 2·π·r. Área do círculo: π·r². π não se troca por 3,14 se a questão pede valor exato. 3,14 é aproximação.\nQuadrado: lado ao quadrado. Cubo: seis faces quadradas; volume é lado ao cubo. Não se confunda área da superfície com volume.\nMMC é o menor múltiplo comum. MDC é o maior divisor comum. 12 e 18: MDC é 6, MMC é 36. O produto dos dois números é igual ao produto do MDC pelo MMC, para dois números: 12·18 = 216, e 6·36 = 216.\nNúmero primo só é divisível por 1 e por ele mesmo. 1 não é primo. 2 é o único primo par.\nCritérios úteis: par é divisível por 2. Soma dos algarismos divisível por 3, o número é divisível por 3. Termina em 0 ou 5, divisível por 5.\nNão se use MMC onde a questão pede MDC. Problema de coincidência de ciclos pede MMC. Problema de dividir em grupos iguais, sem sobra, pede MDC.",
          "context": "Geometria e divisibilidade",
          "exam": "Altura do triângulo é perpendicular. MMC não é MDC.",
          "trap": "Não aproxime π se a resposta pede o valor em função de π.",
          "example": "Retângulo 4 por 6: área 24, perímetro 20. Triângulo de base 4 e altura 6: área 12.",
          "mnemonic": "Ciclo comum: MMC. Grupo igual: MDC.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 132",
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
  "rolePlateSource": "Prompt 132",
  "summary": [
    {
      "item": "Direta",
      "rule": "Conserva a razão.",
      "clue": "Inversa conserva o produto."
    },
    {
      "item": "15% de 800",
      "rule": "120. Aumento: 920. Desconto: 680.",
      "clue": "A base do segundo percentual muda."
    },
    {
      "item": "Simples",
      "rule": "J = C·i·t.",
      "clue": "Composto: M = C·(1+i)^t."
    },
    {
      "item": "90 km/h",
      "rule": "25 m/s.",
      "clue": "Dividir por 3,6."
    },
    {
      "item": "12 e 18",
      "rule": "MDC 6. MMC 36.",
      "clue": "Produto dos dois = MDC · MMC."
    }
  ],
  "compare": [
    {
      "item": "Simples",
      "ce": "Juro não entra na base.",
      "cf": "Composto incorpora o juro.",
      "effect": "separa"
    },
    {
      "item": "MDC",
      "ce": "Maior divisor comum. Grupos iguais.",
      "cf": "MMC: menor múltiplo. Ciclos.",
      "effect": "separa"
    },
    {
      "item": "Ponto percentual",
      "ce": "Diferença entre taxas.",
      "cf": "Porcentagem é razão com a base.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 132011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Um valor de 800, aumentado em 15% e depois reduzido em 15%, volta a 800, porque as taxas se anulam.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. 800 · 1,15 = 920. 920 · 0,85 = 782. A segunda taxa incide sobre a base já alterada."
    },
    {
      "id": 132012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Capital de 1.000, taxa de 2% ao mês, durante 3 meses. O juro simples e o montante composto, antes de arredondar, são",
      "correct": "c",
      "options": [
        {
          "key": "a",
          "label": "juro simples 6 e montante composto 1.060."
        },
        {
          "key": "b",
          "label": "juro simples 60 e montante composto 1.060."
        },
        {
          "key": "c",
          "label": "juro simples 60 e montante composto 1.061,208."
        },
        {
          "key": "d",
          "label": "juro simples 61,208 e montante composto 1.060."
        },
        {
          "key": "e",
          "label": "os dois juros coincidem em qualquer prazo."
        }
      ],
      "comentario": "Questão original, não é prova real. Simples: 1000 · 0,02 · 3 = 60. Composto: 1000 · 1,02³ = 1.061,208. Coincidem no período 1, não no período 3."
    },
    {
      "id": 132013,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "90 km/h equivalem a 25 m/s, porque a conversão de km/h para m/s divide o valor por 3,6.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. 90 / 3,6 = 25. 1 km = 1.000 m e 1 h = 3.600 s. 1.000/3.600 = 1/3,6."
    },
    {
      "id": 132014,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O MDC e o MMC de 12 e 18 são, respectivamente,",
      "correct": "a",
      "options": [
        {
          "key": "a",
          "label": "6 e 36."
        },
        {
          "key": "b",
          "label": "36 e 6."
        },
        {
          "key": "c",
          "label": "12 e 18."
        },
        {
          "key": "d",
          "label": "2 e 216."
        },
        {
          "key": "e",
          "label": "4 e 24."
        }
      ],
      "comentario": "Questão original, não é prova real. Divisores comuns: 1, 2, 3, 6. MDC 6. Múltiplos comuns começam em 36. 12 · 18 = 6 · 36."
    },
    {
      "id": 132015,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Na regra de três, se a questão não diz que as grandezas são inversamente proporcionais, deve-se inverter uma razão por segurança.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Inverte-se só quando a relação é inversa. Inverter sem esse dado troca o resultado."
    }
  ],
  "toc": [
    {
      "id": "p132-1",
      "num": "1",
      "label": "Razão e proporção"
    },
    {
      "id": "p132-2",
      "num": "2",
      "label": "Porcentagem"
    },
    {
      "id": "p132-3",
      "num": "3",
      "label": "Juros"
    },
    {
      "id": "p132-4",
      "num": "4",
      "label": "Equações e unidades"
    },
    {
      "id": "p132-5",
      "num": "5",
      "label": "Geometria e divisibilidade"
    }
  ],
  "clocks": [],
  "organKicker": "Recorte",
  "organTitle": "Matemática",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a regra que ele escreve.",
  "closing": "Conferir a fonte se houver atualização posterior à consulta de 20/10/2026.",
  "palette": "warm",
  "highlight": {
    "big": "5",
    "small": "blocos neste prompt"
  },
  "heroLead": "Pedido 97. As contas deste prompt foram fechadas. Taxa que a questão não deu não foi inventada.",
  "footerLine": "Prompt 132 · pedido 97.",
  "nextLine": "Prompt 133 · pedido 98 · contagem, progressões, conjuntos e probabilidade.",
  "closingMnemonic": "Texto primeiro. Número divergente segue a lei. Lacuna não se completa.",
  "rolesTitle": "Limite",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "Não misture",
  "compareLead": "Instituto vizinho não empresta requisito.",
  "compareLeft": "Um",
  "compareRight": "Outro"
};
