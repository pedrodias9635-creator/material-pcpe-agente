import type { StudyModule } from "./study";

export const PROMPT137: StudyModule = {
  "short": "Estatística descritiva",
  "eyebrow": "Prompt 137 · pedido 102",
  "title": "Estatística descritiva",
  "subtitle": "medidas sem fórmula de amostra",
  "description": "Pedido 102. A série 2, 4, 4, 6, 9 foi calculada. Quartil de amostra pequena não recebeu método inventado. A fórmula de tamanho de amostra não entra aqui.",
  "reading": "Estatística descritiva. Correlação de Pearson só como associação, não como causa.",
  "terms": [
    "média",
    "mediana",
    "variância",
    "correlação",
    "frequência"
  ],
  "subject": "Estatística",
  "context": [
    "Os Prompts 62 a 122 do app já estão ocupados. Este pedido foi gravado com número novo.",
    "Número que não bate com a lei segue o texto oficial, e a divergência é dita.",
    "Súmula só entra com enunciado confirmado."
  ],
  "importance": "A banca troca prazo, requisito e nome de instituto.",
  "distinctions": [
    "Na série do exemplo, média 5, mediana 4, moda 4.",
    "Variância populacional 5,6. Amostral corrigida 7.",
    "Correlação não é causalidade.",
    "Histograma não é gráfico de barras separadas.",
    "Parâmetro é da população. Estimativa é da amostra."
  ],
  "organs": [
    {
      "sigla": "1",
      "nome": "População, amostra e variável",
      "funcao": "Parâmetro é da população. Média da amostra é estimativa.",
      "base": "Pedido 102",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "yellow"
    },
    {
      "sigla": "2",
      "nome": "Frequência e gráfico",
      "funcao": "Relativa é parte do total. Acumulada soma até a classe.",
      "base": "Pedido 102",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "cyan"
    },
    {
      "sigla": "3",
      "nome": "Média, mediana e moda",
      "funcao": "No exemplo, média 5, mediana 4, moda 4. Não são o mesmo número por acaso em toda série.",
      "base": "Pedido 102",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "orange"
    },
    {
      "sigla": "4",
      "nome": "Dispersão",
      "funcao": "Amostra, na fórmula corrigida, divide por n − 1. População divide por N.",
      "base": "Pedido 102",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "violet"
    },
    {
      "sigla": "5",
      "nome": "Duas variáveis",
      "funcao": "r alto não prova causa.",
      "base": "Pedido 102",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "emerald"
    }
  ],
  "swaps": [
    {
      "wrong": "Variância da amostra sempre divide por n.",
      "right": "A corrigida divide por n−1. A da população, por N."
    },
    {
      "wrong": "r alto prova causa.",
      "right": "r alto mostra associação linear, não causa."
    },
    {
      "wrong": "Mediana é a média dos valores.",
      "right": "Mediana é o centro da série ordenada."
    }
  ],
  "timeline": [
    {
      "when": "Pedido",
      "title": "102",
      "text": "Gravado como Prompt 137."
    },
    {
      "when": "Limite",
      "title": "Recorte",
      "text": "Estatística descritiva. Correlação de Pearson só como associação, não como causa."
    }
  ],
  "articles": [
    {
      "id": "p137-1",
      "num": "1",
      "kicker": "Pedido 102",
      "title": "População, amostra e variável",
      "lead": "População, amostra e variável",
      "plate": "População, amostra e variável",
      "plateSource": "Pedido 102",
      "devices": [
        {
          "tag": "regra",
          "name": "População, amostra e variável",
          "hook": "População inteira. Amostra é parte.",
          "literal": "População é o conjunto inteiro que se quer conhecer. Amostra é parte observada. Censo observa toda a população. Pesquisa amostral observa a parte. Conclusão da amostra para a população exige método de seleção, tratado no Prompt 138 no que o paste trouxe. Não se complete o que aquele prompt cortou.\nParâmetro é medida da população. Estimador é a regra calculada na amostra. Estimativa é o número obtido. Não se chame de parâmetro a média da amostra.\nQualitativa nominal: nome, sem ordem. Cor de viatura, tipo de ocorrência, se a lista não tem hierarquia.\nQualitativa ordinal: nome com ordem. Grau de satisfação, posto, se a questão só dá a ordem e não o intervalo.\nQuantitativa discreta: número contável. Quantidade de termos.\nQuantitativa contínua: número em intervalo. Tempo, peso, valor.\nA mesma grandeza pode ser tratada de modo diferente se a questão a agrupa. Idade em anos completos é discreta na contagem usual. Idade em escala contínua é outra modelagem. Siga o comando.\nVariável não é gráfico. Gráfico é a apresentação.",
          "context": "População, amostra e variável",
          "exam": "Parâmetro é da população. Média da amostra é estimativa.",
          "trap": "Não chame de nominal a variável que a questão ordenou.",
          "example": "Número de boletins no dia é discreta. Tempo de atendimento, se medido em escala contínua, é contínua.",
          "mnemonic": "População inteira. Amostra é parte.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p137-2",
      "num": "2",
      "kicker": "Pedido 102",
      "title": "Frequência e gráfico",
      "lead": "Frequência e gráfico",
      "plate": "Frequência e gráfico",
      "plateSource": "Pedido 102",
      "devices": [
        {
          "tag": "regra",
          "name": "Frequência e gráfico",
          "hook": "Absoluta conta. Relativa reparte.",
          "literal": "Frequência absoluta: quantas vezes o valor aparece. Relativa: absoluta dividida pelo total. Pode ser escrita em proporção ou em porcentagem. A soma das relativas é 1, ou 100%, se a tabela cobre todos os casos e não houve arredondamento que a desloque.\nFrequência acumulada: soma das frequências até a classe, inclusive. Acumulada relativa divide essa soma pelo total.\nHistograma representa variável contínua por área das barras. As barras se encostam. Gráfico de barras ou colunas, para qualitativa ou discreta, deixa separação. A banca troca os dois.\nPolígono de frequência liga os topos. Ogiva liga as acumuladas.\nSetor circular mostra parte do todo. Não serve para comparar bem duas variáveis quantitativas ao longo do tempo. Série de tempo pede eixo temporal.\nEixo truncado, que não começa no zero, exagera diferença. A leitura honesta olha a escala. Não se altere escala para fazer diferença parecer maior. O ponto de prova é reconhecer o exagero, não produzi-lo.\nTabela sem total e sem unidade não se interpreta como se a unidade estivesse dada.",
          "context": "Frequência e gráfico",
          "exam": "Relativa é parte do total. Acumulada soma até a classe.",
          "trap": "Não leia histograma como gráfico de barras só porque os dois têm retângulos.",
          "example": "20 casos em 80: relativa 0,25, ou 25%.",
          "mnemonic": "Absoluta conta. Relativa reparte.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p137-3",
      "num": "3",
      "kicker": "Pedido 102",
      "title": "Média, mediana e moda",
      "lead": "Média, mediana e moda",
      "plate": "Média, mediana e moda",
      "plateSource": "Pedido 102",
      "devices": [
        {
          "tag": "regra",
          "name": "Média, mediana e moda",
          "hook": "Extremo puxa a média. Mediana resiste.",
          "literal": "Média aritmética: soma dos valores dividida pela quantidade. Para 2, 4, 4, 6 e 9: soma 25, n = 5, média 5.\nMédia ponderada: cada valor multiplica o peso, e a soma se divide pela soma dos pesos. Não é a média simples, se os pesos diferem.\nMediana: valor que separa a série ordenada ao meio. Série ordenada: 2, 4, 4, 6, 9. n ímpar, a mediana é o termo central, 4. n par: a mediana usual é a média dos dois centrais. Não se escolha um dos dois sem a regra.\nModa: valor mais frequente. No exemplo, 4. Pode haver mais de uma moda, ou nenhuma, se todos aparecem uma vez. Amodal não é média zero.\nValor extremo puxa a média e não puxa a mediana do mesmo modo. No exemplo, se 9 virasse 40, a média mudaria e a mediana continuaria 4. Por isso a média, sozinha, não descreve série com extremo.\nMédia de taxas já relativas não se tira somando as taxas e dividindo, se as bases diferem. A banca cobra essa conta errada.\nNão se invente classe modal em dado não agrupado. Classe modal é conceito de distribuição em classes.",
          "context": "Média, mediana e moda",
          "exam": "No exemplo, média 5, mediana 4, moda 4. Não são o mesmo número por acaso em toda série.",
          "trap": "Não use a média como valor típico se um extremo domina a soma.",
          "example": "2, 4, 4, 6, 9: o central é 4. A soma 25 dividida por 5 é 5.",
          "mnemonic": "Extremo puxa a média. Mediana resiste.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p137-4",
      "num": "4",
      "kicker": "Pedido 102",
      "title": "Dispersão",
      "lead": "Dispersão",
      "plate": "Dispersão",
      "plateSource": "Pedido 102",
      "devices": [
        {
          "tag": "regra",
          "name": "Dispersão",
          "hook": "n − 1 é amostra corrigida. N é população.",
          "literal": "Amplitude: maior menos menor. No exemplo, 9 − 2 = 7. Usa só os extremos. Um valor isolado a muda.\nVariância populacional: soma dos quadrados dos desvios em relação à média, dividida por N. Desvios do exemplo, média 5: −3, −1, −1, 1, 4. Quadrados: 9, 1, 1, 1, 16. Soma 28. Variância populacional = 28/5 = 5,6.\nVariância amostral, a que estima a populacional com a correção usual: divide por n − 1. 28/4 = 7. A banca troca o denominador. Se a questão disser população, divida por N. Se disser amostra e pedir a variância amostral corrigida, divida por n − 1. Se não disser, não se escolha em silêncio.\nDesvio padrão é a raiz quadrada da variância da mesma natureza. Populacional: raiz de 5,6. Amostral: raiz de 7. Não se misture o desvio de uma com a variância da outra.\nCoeficiente de variação: desvio padrão dividido pela média, da mesma natureza. Não tem unidade, se os dois estão na mesma unidade. Serve para comparar dispersão relativa. Média zero impede a divisão. No exemplo amostral, raiz de 7 dividida por 5. Não se troque por 7/5.\nDesvio médio e desvio padrão não são o mesmo. Um usa módulo. O outro usa quadrado e raiz. A prova cobra o nome da fórmula que escreveu.\nQuartil: Q1, Q2, Q3. Q2 é a mediana. Intervalo interquartil: Q3 − Q1. O método de achar quartil em amostra pequena varia entre autores. Não se invente um único método se a questão não o der. Boxplot mostra mediana, quartis e extremos, conforme a convenção do gráfico. A regra de 1,5 vez o intervalo interquartil para ponto externo é convenção de Tukey, não lei. Diga que é convenção.",
          "context": "Dispersão",
          "exam": "Amostra, na fórmula corrigida, divide por n − 1. População divide por N.",
          "trap": "Não extraia a raiz da soma dos quadrados e chame isso de desvio padrão. A divisão vem antes da raiz.",
          "example": "Soma dos quadrados 28. População: 5,6. Amostra corrigida: 7.",
          "mnemonic": "n − 1 é amostra corrigida. N é população.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p137-5",
      "num": "5",
      "kicker": "Pedido 102",
      "title": "Duas variáveis",
      "lead": "Duas variáveis",
      "plate": "Duas variáveis",
      "plateSource": "Pedido 102",
      "devices": [
        {
          "tag": "regra",
          "name": "Duas variáveis",
          "hook": "Junto não é causa.",
          "literal": "Correlação mede associação linear, no coeficiente de Pearson, entre −1 e 1. Perto de 1: associação linear positiva. Perto de −1: negativa. Perto de 0: ausência de associação linear. Pode haver associação não linear com r perto de 0. r não vê toda relação.\nCorrelação não é causalidade. Duas séries podem andar juntas porque uma terceira as move, ou por acaso. Não se diga que uma causa a outra só porque r é alto.\nO coeficiente usa desvios das duas variáveis. Sem a fórmula completa na questão, não se invente o número.\nTabela de contingência cruza qualitativas. Frequência conjunta não é frequência marginal. Marginal é a soma da linha ou da coluna.\nNão se compare média de grupos de tamanho muito diferente sem dizer o tamanho. Peso implícito engana.\nGráfico de dispersão mostra o par. Reta desenhada à mão não é regressão. Regressão não entra neste pedido além do aviso: ajustar reta não prova causa.",
          "context": "Duas variáveis",
          "exam": "r alto não prova causa.",
          "trap": "Não leia associação linear como a única associação possível.",
          "example": "Duas delegacias com mais ocorrências em dias de chuva não autorizam, só com isso, dizer que a chuva causa o registro. Pode haver outra variável.",
          "mnemonic": "Junto não é causa.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 137",
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
  "rolePlateSource": "Prompt 137",
  "summary": [
    {
      "item": "Série exemplo",
      "rule": "2, 4, 4, 6, 9.",
      "clue": "Média 5. Mediana 4. Moda 4."
    },
    {
      "item": "Variância",
      "rule": "População 5,6. Amostra corrigida 7.",
      "clue": "Denominador N ou n−1."
    },
    {
      "item": "Amplitude",
      "rule": "7, no exemplo.",
      "clue": "Só os extremos."
    },
    {
      "item": "CV",
      "rule": "Desvio dividido pela média.",
      "clue": "Média zero impede."
    },
    {
      "item": "Pearson",
      "rule": "Entre −1 e 1. Não é causa.",
      "clue": "0 não mata associação não linear."
    }
  ],
  "compare": [
    {
      "item": "População",
      "ce": "Variância divide por N.",
      "cf": "Amostra corrigida divide por n−1.",
      "effect": "separa"
    },
    {
      "item": "Média",
      "ce": "Sente o extremo.",
      "cf": "Mediana, na série ordenada, resiste.",
      "effect": "separa"
    },
    {
      "item": "Correlação",
      "ce": "Associação linear.",
      "cf": "Causalidade é outra afirmação.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 137011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Na série 2, 4, 4, 6 e 9, a média é 4, a mediana é 5 e a moda é 9.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Média 25/5 = 5. Mediana, termo central, 4. Moda, valor mais frequente, 4."
    },
    {
      "id": 137012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Ainda nessa série, a variância populacional e a variância amostral corrigida são",
      "correct": "c",
      "options": [
        {
          "key": "a",
          "label": "28 e 28."
        },
        {
          "key": "b",
          "label": "7 e 5,6."
        },
        {
          "key": "c",
          "label": "5,6 e 7."
        },
        {
          "key": "d",
          "label": "5 e 4."
        },
        {
          "key": "e",
          "label": "raiz de 7 e raiz de 5,6."
        }
      ],
      "comentario": "Questão original, não é prova real. Soma dos quadrados dos desvios: 28. População divide por 5: 5,6. Amostra corrigida divide por 4: 7. A raiz é o desvio padrão, não a variância."
    },
    {
      "id": 137013,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Um coeficiente de correlação de Pearson igual a 0,95 prova que a primeira variável causa a segunda.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Correlação não é causalidade. 0,95 indica associação linear forte, nada mais."
    },
    {
      "id": 137014,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Frequência relativa é a frequência absoluta dividida pelo total. A soma das relativas, sem erro de arredondamento, é 1.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. Relativa é a parte do todo. Se a tabela esgota os casos, as partes somam 1."
    },
    {
      "id": 137015,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Histograma, na distinção de prova, serve sobretudo a variável",
      "correct": "b",
      "options": [
        {
          "key": "a",
          "label": "qualitativa nominal, com barras separadas."
        },
        {
          "key": "b",
          "label": "quantitativa contínua, com barras encostadas, em que a área importa."
        },
        {
          "key": "c",
          "label": "só a moda."
        },
        {
          "key": "d",
          "label": "qualitativa, e a barra separada é obrigatória."
        },
        {
          "key": "e",
          "label": "correlação, no lugar do diagrama de dispersão."
        }
      ],
      "comentario": "Questão original, não é prova real. Histograma é o gráfico de contínuas, barras encostadas. Barras separadas são o gráfico de categorias ou de discreta. Correlação pede dispersão, não histograma."
    }
  ],
  "toc": [
    {
      "id": "p137-1",
      "num": "1",
      "label": "População, amostra e variáve"
    },
    {
      "id": "p137-2",
      "num": "2",
      "label": "Frequência e gráfico"
    },
    {
      "id": "p137-3",
      "num": "3",
      "label": "Média, mediana e moda"
    },
    {
      "id": "p137-4",
      "num": "4",
      "label": "Dispersão"
    },
    {
      "id": "p137-5",
      "num": "5",
      "label": "Duas variáveis"
    }
  ],
  "clocks": [],
  "organKicker": "Recorte",
  "organTitle": "Estatística descritiva",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a regra que ele escreve.",
  "closing": "Conferir a fonte se houver atualização posterior à consulta de 20/10/2026.",
  "palette": "ember",
  "highlight": {
    "big": "5",
    "small": "blocos neste prompt"
  },
  "heroLead": "Pedido 102. A série 2, 4, 4, 6, 9 foi calculada. Quartil de amostra pequena não recebeu método inventado. A fórmula de tamanho de amostra não entra aqui.",
  "footerLine": "Prompt 137 · pedido 102.",
  "nextLine": "Prompt 138 · pedido 103 completo, com a fórmula finita fechada.",
  "closingMnemonic": "Texto primeiro. Número divergente segue a lei. Lacuna não se completa.",
  "rolesTitle": "Limite",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "Não misture",
  "compareLead": "Instituto vizinho não empresta requisito.",
  "compareLeft": "Um",
  "compareRight": "Outro"
};
