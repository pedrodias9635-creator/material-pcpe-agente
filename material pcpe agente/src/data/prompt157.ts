import type { StudyModule } from "./study";

export const PROMPT157: StudyModule = {
  "short": "Assimetria e curtose",
  "eyebrow": "Prompt 157 · pedido 1",
  "title": "Assimetria e curtose",
  "subtitle": "formato, não só o centro",
  "description": "O edital pede assimetria e curtose além das medidas do Prompt 137. Duas convenções de curtose foram nomeadas. Nenhuma foi tratada como a única.",
  "reading": "Estatística descritiva. Curtose bruta e curtose excedente. Sem coeficiente inventado.",
  "terms": [
    "assimetria",
    "curtose",
    "leptocúrtica",
    "mediana"
  ],
  "subject": "Estatística",
  "context": [
    "Assimetria descreve a cauda. Curtose descreve o peso das caudas, não o centro.",
    "Curtose 3 e curtose 0 só se equivalem se a questão disser qual convenção usa.",
    "Sem fórmula, não se inventa coeficiente."
  ],
  "importance": "A banca troca o sinal da assimetria e a convenção da curtose.",
  "distinctions": [
    "Cauda à direita: assimetria positiva. Média, no caso usual, acima da mediana.",
    "Normal tem curtose 3 na bruta e 0 na excedente.",
    "Curtose não substitui o desvio padrão.",
    "Sem fórmula, não se inventa coeficiente."
  ],
  "organs": [
    {
      "sigla": "1",
      "nome": "Assimetria",
      "funcao": "Cauda à direita: assimetria positiva, média em geral acima da mediana.",
      "base": "Edital · estatística",
      "nao": "Não inventar coeficiente sem fórmula.",
      "tone": "yellow"
    },
    {
      "sigla": "2",
      "nome": "Curtose",
      "funcao": "Normal é 3 na bruta e 0 na excedente. A questão precisa dizer qual.",
      "base": "Edital · estatística",
      "nao": "Não inventar coeficiente sem fórmula.",
      "tone": "cyan"
    }
  ],
  "swaps": [
    {
      "wrong": "Cauda à direita é assimetria negativa.",
      "right": "Cauda à direita é assimetria positiva."
    },
    {
      "wrong": "Curtose 3 e curtose 0 são o mesmo número.",
      "right": "3 é a normal na bruta. 0 é a normal na excedente."
    },
    {
      "wrong": "Curtose substitui o desvio padrão.",
      "right": "Uma mede o peso das caudas. A outra, a dispersão."
    }
  ],
  "timeline": [
    {
      "when": "Pedido",
      "title": "1",
      "text": "Gravado como Prompt 157."
    },
    {
      "when": "Limite",
      "title": "Recorte",
      "text": "Estatística descritiva. Curtose bruta e curtose excedente. Sem coeficiente inventado."
    }
  ],
  "articles": [
    {
      "id": "p157-1",
      "num": "1",
      "kicker": "Edital · estatística",
      "title": "Assimetria",
      "lead": "Assimetria",
      "plate": "Assimetria",
      "plateSource": "Edital · estatística",
      "devices": [
        {
          "tag": "regra",
          "name": "Assimetria",
          "hook": "Direita, positiva. Esquerda, negativa.",
          "literal": "Assimetria descreve a cauda da distribuição, não o centro sozinho.\nCauda à direita, assimetria positiva: valores extremos altos puxam a média para cima da mediana, no caso usual. Cauda à esquerda, assimetria negativa: extremos baixos puxam a média para baixo da mediana, no caso usual.\nSimetria: média e mediana se aproximam. Não são obrigadas a coincidir numa amostra pequena por erro de arredondamento. Não se declare simetria só porque a moda existe.\nA média sente o extremo. A mediana, na série ordenada, resiste. Isso já está no Prompt 137. Aqui o nome é assimetria.\nNão se calcule coeficiente de assimetria se a questão não der a fórmula. Há mais de uma fórmula. Inventar o número é que a banca pune.\nExemplo qualitativo. Série 2, 3, 4, 5, 20. Mediana 4. Média 34/5 = 6,8. A média ficou acima da mediana. A cauda está à direita. Não se diga a causa do valor 20.",
          "context": "Assimetria",
          "exam": "Cauda à direita: assimetria positiva, média em geral acima da mediana.",
          "trap": "Não invente coeficiente se a fórmula não veio.",
          "example": "2, 3, 4, 5 e 20: mediana 4, média 6,8. Cauda à direita.",
          "mnemonic": "Direita, positiva. Esquerda, negativa.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p157-2",
      "num": "2",
      "kicker": "Edital · estatística",
      "title": "Curtose",
      "lead": "Curtose",
      "plate": "Curtose",
      "plateSource": "Edital · estatística",
      "devices": [
        {
          "tag": "regra",
          "name": "Curtose",
          "hook": "3 ou 0, conforme a definição.",
          "literal": "Curtose descreve o peso das caudas e o pico, não a média.\nHá duas convenções de prova. Não se misturam.\nCurtose bruta: a normal tem curtose 3.\nCurtose excedente: subtrai-se 3, e a normal tem curtose 0.\nLeptocúrtica: caudas mais pesadas que a normal, pico mais alto na leitura usual. Na convenção bruta, curtose acima de 3. Na excedente, acima de 0.\nPlaticúrtica: caudas mais leves, pico mais achatado. Abaixo de 3, ou abaixo de 0, conforme a convenção.\nMesocúrtica: equivalente à normal, 3 ou 0.\nA questão que não disser qual convenção usa não autoriza marcar 3 e 0 como se fossem o mesmo número. Diga qual definição a questão adotou.\nCurtose não é variância. Variância mede dispersão em torno da média. Curtose compara o formato das caudas. As duas podem ser altas juntas, e uma não substitui a outra.\nNão se invente o valor da curtose de uma amostra sem a fórmula e sem os dados.",
          "context": "Curtose",
          "exam": "Normal é 3 na bruta e 0 na excedente. A questão precisa dizer qual.",
          "trap": "Não marque 3 e 0 como equivalentes sem nomear a convenção.",
          "example": "Se a questão disser curtose excedente 0, está na convenção da normal. Se disser curtose 3, está na bruta. Não são números trocáveis.",
          "mnemonic": "3 ou 0, conforme a definição.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 157",
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
  "rolePlateSource": "Prompt 157",
  "summary": [
    {
      "item": "Série 2, 3, 4, 5, 20",
      "rule": "Mediana 4. Média 6,8.",
      "clue": "Cauda à direita."
    },
    {
      "item": "Positiva",
      "rule": "Cauda à direita.",
      "clue": "Negativa: cauda à esquerda."
    },
    {
      "item": "Curtose bruta",
      "rule": "Normal = 3.",
      "clue": "Excedente: normal = 0."
    },
    {
      "item": "Leptocúrtica",
      "rule": "Acima da normal, na convenção dita.",
      "clue": "Platicúrtica: abaixo."
    }
  ],
  "compare": [
    {
      "item": "Assimetria",
      "ce": "Cauda e posição de média e mediana.",
      "cf": "Curtose: peso das caudas.",
      "effect": "separa"
    },
    {
      "item": "Bruta",
      "ce": "Normal = 3.",
      "cf": "Excedente: normal = 0.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 157011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Numa distribuição com cauda à direita, a assimetria é negativa e a média fica, no caso usual, abaixo da mediana.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Cauda à direita é assimetria positiva. A média, no caso usual, fica acima da mediana."
    },
    {
      "id": 157012,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Na convenção da curtose bruta, a distribuição normal tem curtose 3. Na convenção excedente, tem curtose 0. Os dois números não se trocam sem dizer a definição.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. 3 e 0 descrevem a normal em definições diferentes. A questão que não nomear a definição não autoriza a troca."
    },
    {
      "id": 157013,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A série 2, 3, 4, 5 e 20 tem",
      "correct": "d",
      "options": [
        {
          "key": "a",
          "label": "mediana 6,8 e média 4, com cauda à esquerda."
        },
        {
          "key": "b",
          "label": "média e mediana iguais a 4, logo é simétrica."
        },
        {
          "key": "c",
          "label": "curtose obrigatoriamente igual a 3."
        },
        {
          "key": "d",
          "label": "mediana 4 e média 6,8, com cauda à direita."
        },
        {
          "key": "e",
          "label": "variância igual à curtose."
        }
      ],
      "comentario": "Questão original, não é prova real. Mediana é o termo central, 4. Média é 34/5 = 6,8. O extremo 20 puxa a média para a direita. Curtose não se calcula sem fórmula."
    },
    {
      "id": 157014,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Curtose alta substitui o desvio padrão, porque as duas medidas descrevem a mesma dispersão.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Desvio padrão vem da variância e mede dispersão em torno da média. Curtose compara o peso das caudas. Uma não substitui a outra."
    },
    {
      "id": 157015,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Assimetria se declara pelo coeficiente, mesmo quando a questão não fornece a fórmula nem os dados.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Há mais de uma fórmula. Sem fórmula e sem dados, não se inventa o número. O sinal da cauda, no exemplo, se lê pela posição da média e da mediana."
    }
  ],
  "toc": [
    {
      "id": "p157-1",
      "num": "1",
      "label": "Assimetria"
    },
    {
      "id": "p157-2",
      "num": "2",
      "label": "Curtose"
    }
  ],
  "clocks": [],
  "organKicker": "Recorte",
  "organTitle": "Assimetria e curtose",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a regra que ele escreve.",
  "closing": "Questões originais, no estilo da banca. Não são prova real.",
  "palette": "lime",
  "highlight": {
    "big": "2",
    "small": "blocos neste prompt"
  },
  "heroLead": "O edital pede assimetria e curtose além das medidas do Prompt 137. Duas convenções de curtose foram nomeadas. Nenhuma foi tratada como a única.",
  "footerLine": "Prompt 157 · pedido 1.",
  "nextLine": "Fim deste complemento. O art. 79 da Lei nº 14.133 continua pausado.",
  "closingMnemonic": "Texto primeiro. Número divergente segue a lei. Lacuna não se completa.",
  "rolesTitle": "Limite",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "Não misture",
  "compareLead": "Instituto vizinho não empresta requisito.",
  "compareLeft": "Um",
  "compareRight": "Outro"
};
