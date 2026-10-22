import type { StudyModule } from "./study";

export const PROMPT138: StudyModule = {
  "short": "Probabilidade e amostragem",
  "eyebrow": "Prompt 138 · pedido 103",
  "title": "Probabilidade e amostragem",
  "subtitle": "fórmula finita fechada",
  "description": "Pedido 103, agora completo. A fórmula finita que estava cortada em '+ Z' foi fechada como o paste a escreveu: n = (N · Z² · σ²) / [(N − 1) · E² + Z² · σ²]. Não se trocou N − 1 por N.",
  "reading": "Probabilidade clássica, frequentista e subjetiva. Axiomas. Condicional, total e Bayes. Amostragem probabilística. Tamanho de amostra. Números de exercício, não série oficial da PCPE.",
  "terms": [
    "probabilidade",
    "Bayes",
    "amostragem estratificada",
    "amostragem por conglomerado",
    "tamanho da amostra"
  ],
  "subject": "Estatística",
  "context": [
    "Os Prompts 62 a 122 do app já estão ocupados. Este pedido foi gravado com número novo.",
    "Número que não bate com a lei segue o texto oficial, e a divergência é dita.",
    "Súmula só entra com enunciado confirmado."
  ],
  "importance": "A banca troca prazo, requisito e nome de instituto.",
  "distinctions": [
    "Independência não é exclusão.",
    "P(A|B) não é P(B|A). Sensibilidade não é valor preditivo.",
    "Estrato é homogêneo por dentro. Conglomerado é heterogêneo por dentro.",
    "Sistemática usa k = N/n e não é aleatória simples.",
    "A fórmula finita do paste tem N − 1. No exemplo, n cai de 61,4656 para 57,960956."
  ],
  "organs": [
    {
      "sigla": "1",
      "nome": "Experimento, espaço e evento",
      "funcao": "Evento é subconjunto. Espaço amostral é o todo. Vazio não é evento certo.",
      "base": "Pedido 103",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "yellow"
    },
    {
      "sigla": "2",
      "nome": "Três definições",
      "funcao": "Laplace exige equiprobabilidade. Frequentista é limite, não a amostra. Subjetiva é crença, não contagem.",
      "base": "Pedido 103",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "cyan"
    },
    {
      "sigla": "3",
      "nome": "Axiomas e complemento",
      "funcao": "Exclusivos se somam. Não exclusivos, não. Complemento é 1 menos P(A).",
      "base": "Pedido 103",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "orange"
    },
    {
      "sigla": "4",
      "nome": "Adição",
      "funcao": "União tira a interseção uma vez. O produto não é a união.",
      "base": "Pedido 103",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "violet"
    },
    {
      "sigla": "5",
      "nome": "Condicional e produto",
      "funcao": "A barra divide pela condição. P(A|B) não é P(B|A).",
      "base": "Pedido 103",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "emerald"
    },
    {
      "sigla": "6",
      "nome": "Independência não é exclusão",
      "funcao": "Exclusivos com probabilidade positiva não são independentes. O produto não é zero.",
      "base": "Pedido 103",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "sky"
    }
  ],
  "swaps": [
    {
      "wrong": "Exclusivos são independentes.",
      "right": "Exclusivos com probabilidade positiva não são independentes."
    },
    {
      "wrong": "Sensibilidade é o valor preditivo positivo.",
      "right": "Sensibilidade é P(positivo|condição). VPP é P(condição|positivo)."
    },
    {
      "wrong": "Conglomerado é homogêneo por dentro.",
      "right": "Homogêneo por dentro é o estrato."
    },
    {
      "wrong": "A fórmula finita parou em + Z.",
      "right": "O paste fechou: denominador (N−1)·E² + Z²·σ²."
    }
  ],
  "timeline": [
    {
      "when": "Pedido",
      "title": "103",
      "text": "Gravado como Prompt 138."
    },
    {
      "when": "Limite",
      "title": "Recorte",
      "text": "Probabilidade clássica, frequentista e subjetiva. Axiomas. Condicional, total e Bayes. Amostragem probabilística. Tamanho de amostra. Número"
    }
  ],
  "articles": [
    {
      "id": "p138-1",
      "num": "1",
      "kicker": "Pedido 103",
      "title": "Experimento, espaço e evento",
      "lead": "Experimento, espaço e evento",
      "plate": "Experimento, espaço e evento",
      "plateSource": "Pedido 103",
      "devices": [
        {
          "tag": "regra",
          "name": "Experimento, espaço e evento",
          "hook": "S é o todo. A é parte. Vazio é impossível.",
          "literal": "Experimento aleatório é o processo cujo resultado não se conhece antes, embora o conjunto de resultados possíveis seja descrito. Sortear um boletim numa lista, lançar um dado honesto e escolher uma unidade da população são experimentos. Não se descreve fato penal. O exemplo é o sorteio, não o crime.\nEspaço amostral, S, é o conjunto de todos os resultados possíveis. Evento é um subconjunto de S. Evento elementar tem um único resultado. Evento certo é o próprio S. Evento impossível é o conjunto vazio.\nSe o dado é honesto, S = {1, 2, 3, 4, 5, 6}. O evento 'par' é {2, 4, 6}. Não é o espaço inteiro. Não é vazio.\nDois eventos são mutuamente exclusivos, ou disjuntos, quando não podem ocorrer juntos: a interseção é vazia. Complementar de A, escrito A', é o que está em S e não está em A. A e A' são exclusivos e a união dos dois é S.\nA notação muda de banca: Ω no lugar de S, Ac no lugar de A'. O nome não muda o conceito. Siga o símbolo da questão.",
          "context": "Experimento, espaço e evento",
          "exam": "Evento é subconjunto. Espaço amostral é o todo. Vazio não é evento certo.",
          "trap": "Não chame de espaço amostral o evento que a questão pediu.",
          "example": "No dado, par é evento. O espaço tem seis resultados. O complementar de par é ímpar.",
          "mnemonic": "S é o todo. A é parte. Vazio é impossível.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p138-2",
      "num": "2",
      "kicker": "Pedido 103",
      "title": "Três definições",
      "lead": "Três definições",
      "plate": "Três definições",
      "plateSource": "Pedido 103",
      "devices": [
        {
          "tag": "regra",
          "name": "Três definições",
          "hook": "Laplace conta. Frequentista limita. Subjetiva crê.",
          "literal": "Definição clássica, de Laplace: se os resultados são igualmente possíveis, P(A) = número de casos favoráveis dividido pelo número de casos possíveis. No dado honesto, P(par) = 3/6 = 1/2. A definição só vale no espaço equiprovável. Se a questão disser que o dado é viciado, Laplace não se aplica com as seis faces iguais.\nDefinição frequentista: P(A) é o limite da frequência relativa quando o número de repetições tende ao infinito. A frequência de uma amostra finita estima essa probabilidade. Não é o limite. Não se calcula infinito numa prova. A banca troca a frequência observada pelo limite.\nDefinição subjetiva: P(A) é o grau de crença de quem avalia, com as regras de coerência da probabilidade. Não é contagem de casos nem limite de frequência. Não se invente número subjetiva para um bairro. Sem dado da questão, não há conta.\nAs três definições não dão, por si, o mesmo número. A questão diz qual usa. Se não disser e o espaço for equiprovável, a clássica é a de prova.\nNão se estime taxa de crime de bairro. O exemplo numérico fica no dado ou em lista que a questão forneça.",
          "context": "Três definições",
          "exam": "Laplace exige equiprobabilidade. Frequentista é limite, não a amostra. Subjetiva é crença, não contagem.",
          "trap": "Não aplique casos favoráveis sobre casos possíveis em espaço que a questão disse não ser equiprovável.",
          "example": "Lista de 20 boletins, 5 de uma circunscrição, todos com a mesma chance de serem sorteados: P = 5/20 = 1/4. Isso é Laplace. Não é taxa oficial.",
          "mnemonic": "Laplace conta. Frequentista limita. Subjetiva crê.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p138-3",
      "num": "3",
      "kicker": "Pedido 103",
      "title": "Axiomas e complemento",
      "lead": "Axiomas e complemento",
      "plate": "Axiomas e complemento",
      "plateSource": "Pedido 103",
      "devices": [
        {
          "tag": "regra",
          "name": "Axiomas e complemento",
          "hook": "Entre 0 e 1. O certo tem probabilidade 1. Exclusivos somam.",
          "literal": "Axiomas de Kolmogorov, na forma que o pedido escreveu e na extensão usual:\n1. 0 ≤ P(A) ≤ 1, para qualquer evento A.\n2. P(S) = 1.\n3. Se A e B são mutuamente exclusivos, P(A ∪ B) = P(A) + P(B).\nA forma geral do terceiro axioma vale para uma sequência contável de eventos dois a dois disjuntos: a probabilidade da união é a soma das probabilidades. O pedido escreveu o caso de dois. Não se nega a forma geral. Não se usa a soma se a interseção não é vazia.\nConsequência imediata: P(vazio) = 0, porque S e vazio são exclusivos e a união é S. P(A) + P(A') = 1, porque A e A' são exclusivos e cobrem S.\nRegra do complemento: P(A') = 1 − P(A). É o caminho curto quando o evento pedido é 'não'. Calcule o direto e subtraia de 1, se o direto for mais simples.\nProbabilidade negativa, maior que 1, ou soma de exclusivos que passa de 1, está errada. Não se arredonde para caber.",
          "context": "Axiomas e complemento",
          "exam": "Exclusivos se somam. Não exclusivos, não. Complemento é 1 menos P(A).",
          "trap": "Não some P(A) e P(B) se a questão não disse que a interseção é vazia.",
          "example": "Se P(A) = 0,3, P(A') = 0,7. Se A e B são exclusivos, com P(B) = 0,4, a união tem probabilidade 0,7, não 0,12.",
          "mnemonic": "Entre 0 e 1. O certo tem probabilidade 1. Exclusivos somam.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p138-4",
      "num": "4",
      "kicker": "Pedido 103",
      "title": "Adição",
      "lead": "Adição",
      "plate": "Adição",
      "plateSource": "Pedido 103",
      "devices": [
        {
          "tag": "regra",
          "name": "Adição",
          "hook": "Soma e tira o repetido.",
          "literal": "Regra da adição, para dois eventos quaisquer: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).\nA interseção foi contada em P(A) e de novo em P(B). Por isso se tira uma vez. Se os eventos são exclusivos, a interseção tem probabilidade 0 e a fórmula volta ao axioma.\nExemplo fechado. P(A) = 0,30, P(B) = 0,40, P(A ∩ B) = 0,10. União = 0,30 + 0,40 − 0,10 = 0,60. Não é 0,70. Não é 0,12, que seria o produto, outra conta.\nTrês eventos: somam-se os três, tiram-se as interseções duas a duas, soma-se de novo a interseção dos três. Não se aplique a fórmula de dois a um problema de três sem esse ajuste. Se a questão não der as interseções, não se inventem.\n'Ou' na prova pode ser inclusivo. 'A ou B' inclui quem está nos dois, salvo se a questão disser 'ou exclusivo'. No exclusivo, a interseção sai e não volta.\nPorcentagem e proporção: 0,60 é 60%. Não se subtraia 10 de 70 e se chame o resultado de probabilidade se os dados estavam em proporção.",
          "context": "Adição",
          "exam": "União tira a interseção uma vez. O produto não é a união.",
          "trap": "Não esqueça de subtrair P(A ∩ B).",
          "example": "0,30 + 0,40 − 0,10 = 0,60. Os 0,10 estavam nos dois grupos.",
          "mnemonic": "Soma e tira o repetido.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p138-5",
      "num": "5",
      "kicker": "Pedido 103",
      "title": "Condicional e produto",
      "lead": "Condicional e produto",
      "plate": "Condicional e produto",
      "plateSource": "Pedido 103",
      "devices": [
        {
          "tag": "regra",
          "name": "Condicional e produto",
          "hook": "Dado que: divida pela condição.",
          "literal": "Probabilidade condicional, com P(B) > 0: P(A|B) = P(A ∩ B) / P(B).\nLeitura: dado que B ocorreu, qual a probabilidade de A. O espaço encolhe para B. O numerador é a parte de B que também é A.\nNão é P(A ∩ B) / P(A), salvo se a condição for A. A barra não se inverte.\nSe P(B) = 0, a condicional por B não está definida. Não se divida por zero.\nTeorema da multiplicação: P(A ∩ B) = P(A) · P(B|A) = P(B) · P(A|B), quando as condicionais existem.\nExemplo. P(B) = 0,40 e P(A ∩ B) = 0,10. P(A|B) = 0,10 / 0,40 = 0,25. P(B|A) não se calcula sem P(A). Se a questão não der P(A), não se afirme que P(B|A) também é 0,25.\n'Pelo menos um' em tentativas sucessivas costuma ser mais curta pelo complemento: 1 menos a probabilidade de nenhum. Só se as tentativas e a independência estiverem ditas. Sem isso, não se multiplique.\nSituação de leitura, sem número inventado e sem fato: 'dado que um registro já foi lançado no bairro, qual a probabilidade de outro registro no mesmo bairro' é frase condicional. Os números só entram se a questão os der. Não se estima risco real de circunscrição.",
          "context": "Condicional e produto",
          "exam": "A barra divide pela condição. P(A|B) não é P(B|A).",
          "trap": "Não inverta a condicional por simetria.",
          "example": "0,10 / 0,40 = 0,25. A condição é B, a de probabilidade 0,40.",
          "mnemonic": "Dado que: divida pela condição.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p138-6",
      "num": "6",
      "kicker": "Pedido 103",
      "title": "Independência não é exclusão",
      "lead": "Independência não é exclusão",
      "plate": "Independência não é exclusão",
      "plateSource": "Pedido 103",
      "devices": [
        {
          "tag": "regra",
          "name": "Independência não é exclusão",
          "hook": "Exclusão zera. Independência multiplica.",
          "literal": "Independência: a ocorrência de um não altera a probabilidade do outro. Em conta, P(A ∩ B) = P(A) · P(B). Equivale, se P(B) > 0, a P(A|B) = P(A). Se P(A) > 0, P(B|A) = P(B).\nExclusão: P(A ∩ B) = 0. Os eventos não ocorrem juntos.\nNão são a mesma relação. Se A e B têm probabilidade positiva e são exclusivos, P(A|B) = 0, que é diferente de P(A). Logo não são independentes. A ocorrência de um zera o outro.\nExemplo. P(A) = 0,50 e P(B) = 0,40. Se independentes, a interseção tem probabilidade 0,20. Se exclusivos, a interseção tem probabilidade 0. As duas frases não podem ser verdadeiras ao mesmo tempo com esses números, porque 0,20 não é 0.\nIndependência de vários eventos pede o produto em todas as interseções, não só nos pares, quando a questão pedir independência mútua. Independência dois a dois não é, por si, independência mútua. Se a questão não distinguir, não se invente contraexemplo. Diga a diferença só se o item a cobrar.\nNão se declare independência porque os fatos 'parecem' separados. A conta ou o enunciado decidem.",
          "context": "Independência não é exclusão",
          "exam": "Exclusivos com probabilidade positiva não são independentes. O produto não é zero.",
          "trap": "Não marque independência só porque a interseção é vazia.",
          "example": "0,50 vezes 0,40 é 0,20, se independentes. Se exclusivos, a interseção é 0, não 0,20.",
          "mnemonic": "Exclusão zera. Independência multiplica.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p138-7",
      "num": "7",
      "kicker": "Pedido 103",
      "title": "Total e Bayes",
      "lead": "Total e Bayes",
      "plate": "Total e Bayes",
      "plateSource": "Pedido 103",
      "devices": [
        {
          "tag": "regra",
          "name": "Total e Bayes",
          "hook": "Via no numerador. Todas as vias no denominador.",
          "literal": "Probabilidade total: se A1, A2, ..., An formam uma partição de S, disjuntos e união igual a S, e se cada um tem probabilidade positiva,\nP(B) = P(B|A1)·P(A1) + P(B|A2)·P(A2) + ... + P(B|An)·P(An).\nÉ a soma das vias pelas quais B pode ocorrer. Não se some P(Ai) no lugar de P(B|Ai)·P(Ai).\nPara duas hipóteses complementares, o pedido escreveu:\nP(B) = P(B|A)·P(A) + P(B|A')·P(A').\nTeorema de Bayes, na forma fechada do pedido:\nP(A|B) = [P(B|A) · P(A)] / P(B),\ncom P(B) igual a essa soma de duas vias.\nO numerador é uma via. O denominador é a probabilidade total de B. Não se divida só por P(B|A).\nA forma não ganha uma terceira hipótese por conta própria. Se a questão tiver três, some três vias no denominador. Se tiver duas, não invente a terceira.\nExemplo já fechado, sem leitura policial. P(A) = 0,20, P(A') = 0,80, P(B|A) = 0,90, P(B|A') = 0,10.\nNumerador: 0,90 · 0,20 = 0,18.\nDenominador: 0,18 + 0,10 · 0,80 = 0,26.\nP(A|B) = 0,18 / 0,26 = 9/13.\nP(B|A) continua 0,90. Não virou 9/13.",
          "context": "Total e Bayes",
          "exam": "Bayes divide a via pela probabilidade total. Não troca P(B|A) por P(A|B).",
          "trap": "Não use a sensibilidade no lugar do valor preditivo.",
          "example": "0,18 sobre 0,26 é 9/13. 0,90 é a condicional de entrada, não a de saída.",
          "mnemonic": "Via no numerador. Todas as vias no denominador.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p138-8",
      "num": "8",
      "kicker": "Pedido 103",
      "title": "Sensibilidade, especificidade e valor preditivo",
      "lead": "Sensibilidade, especificidade e valor preditivo",
      "plate": "Sensibilidade, especificidade e valor preditivo",
      "plateSource": "Pedido 103",
      "devices": [
        {
          "tag": "regra",
          "name": "Sensibilidade, especificidade e valor preditivo",
          "hook": "Raro mais falso positivo derruba o valor preditivo.",
          "literal": "Num teste de triagem, com números de exercício, não de série oficial:\nA: a condição está presente. A': ausente.\nB: o teste dá positivo.\nSensibilidade: P(B|A), a taxa de positivo entre quem tem a condição. É positivo verdadeiro sobre quem tem a condição.\nEspecificidade: P(B'|A'), a taxa de negativo entre quem não tem a condição. Falso positivo: P(B|A') = 1 − especificidade, se o teste só tem positivo e negativo.\nValor preditivo positivo, VPP: P(A|B), a probabilidade de a condição estar presente dado o positivo. É Bayes. Não é a sensibilidade.\nValor preditivo negativo: P(A'|B'), dado o negativo. Também não se lê na sensibilidade.\nExercício, números hipotéticos, não taxa da PCPE e não manual de aparelho. Prevalência P(A) = 0,02. Sensibilidade 0,90. Especificidade 0,95, logo P(B|A') = 0,05.\nP(B) = 0,90 · 0,02 + 0,05 · 0,98 = 0,018 + 0,049 = 0,067.\nVPP = 0,018 / 0,067 = 18/67, cerca de 0,269, ou 26,9%.\nO teste acerta 90% de quem tem a condição e, ainda assim, um positivo só corresponde à condição em 18/67 dos casos, porque a condição é rara e os falsos positivos pesam. Essa é a pegadinha.\nO exemplo cobre o que o pedido chamou de teste de bafômetro apenas como conta de triagem. Não há descrição do aparelho, não há forma de alterar o resultado e não há limiar oficial. Se a questão não der sensibilidade, especificidade e prevalência, não se usem estes números.",
          "context": "Sensibilidade, especificidade e valor preditivo",
          "exam": "Sensibilidade é P(positivo | condição). VPP é P(condição | positivo). Com prevalência baixa, os dois se afastam.",
          "trap": "Não diga que 90% de sensibilidade significa 90% de chance de a condição existir no positivo.",
          "example": "0,018 / 0,067 = 18/67. Não é 0,90.",
          "mnemonic": "Raro mais falso positivo derruba o valor preditivo.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p138-9",
      "num": "9",
      "kicker": "Pedido 103",
      "title": "Probabilística e não probabilística",
      "lead": "Probabilística e não probabilística",
      "plate": "Probabilística e não probabilística",
      "plateSource": "Pedido 103",
      "devices": [
        {
          "tag": "regra",
          "name": "Probabilística e não probabilística",
          "hook": "Chance conhecida: probabilística. Quem aparece: não.",
          "literal": "Amostra probabilística: cada unidade tem probabilidade conhecida e maior que zero de entrar, segundo o plano. A inferência usual de margem de erro e nível de confiança vale para esse plano, se as outras hipóteses da fórmula também valerem.\nNão probabilística: a probabilidade de cada unidade não é conhecida, ou alguma unidade não pode entrar. Conveniência toma quem está perto. Cota preenche quantidade por categoria, sem sorteio. Julgamento escolhe quem o pesquisador acha típico. Nenhuma das três é aleatória simples nem estratificada.\nAumentar a amostra de conveniência reduz flutuação, não transforma o plano em probabilístico. n grande com viés de seleção continua enviesada.\nPesquisa de vitimização, só como classificação de plano, sem taxa. Se se sorteiam domicílios de uma lista completa, com chance conhecida, o plano pode ser probabilístico. Se se entrevista quem passa na frente da delegacia, é conveniência. O segundo não sustenta a margem de erro da fórmula.\nNão se escolhe unidade para a média cair ou subir. Isso não é técnica de amostragem. Não se ensina.",
          "context": "Probabilística e não probabilística",
          "exam": "Cota não é estrato sorteado. Conveniência não ganha margem de erro só porque n é grande.",
          "trap": "Não chame de aleatória a amostra de quem estava disponível.",
          "example": "Lista completa com sorteio é outra coisa que fila da porta. A fila é conveniência.",
          "mnemonic": "Chance conhecida: probabilística. Quem aparece: não.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p138-10",
      "num": "10",
      "kicker": "Pedido 103",
      "title": "Aleatória simples",
      "lead": "Aleatória simples",
      "plate": "Aleatória simples",
      "plateSource": "Pedido 103",
      "devices": [
        {
          "tag": "regra",
          "name": "Aleatória simples",
          "hook": "Lista completa. Chance igual. Unidade, não grupo.",
          "literal": "Amostragem aleatória simples, AAS: cada subconjunto do tamanho n tem a mesma probabilidade de ser escolhido, no plano sem reposição mais cobrado. Em particular, cada unidade tem a mesma probabilidade de entrar.\nCom reposição: a unidade sorteada volta e pode sair de novo. O espaço não muda. Sem reposição: a unidade não volta. A probabilidade condicional da próxima muda, embora o plano continue simétrico.\nVantagem: o conceito é simples e a generalização para a população da lista é direta, se a lista for a população.\nDesvantagem: exige lista completa. Subgrupo pequeno pode quase não aparecer. Em população espalhada, o custo de visitar os sorteados pode ser alto.\nAAS não é 'pegar qualquer um'. Não é sistemática. Não é sortear um conglomerado. O sorteio é de unidade, com o plano dito.\nSem reposição, a extração sucessiva não é independente. A amostra como conjunto ainda pode ser aleatória simples. Não se confunda independência das extrações com igualdade de chance das amostras.",
          "context": "Aleatória simples",
          "exam": "AAS é sorteio de unidades com probabilidade igual, não fila e não passo k.",
          "trap": "Não diga que sem reposição as extrações são independentes.",
          "example": "Cinco nomes num chapéu, dois sorteados sem devolver: cada par tem a mesma chance. Isso é AAS sem reposição. C(5,2) = 10 pares, do Prompt 133.",
          "mnemonic": "Lista completa. Chance igual. Unidade, não grupo.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p138-11",
      "num": "11",
      "kicker": "Pedido 103",
      "title": "Estratificada",
      "lead": "Estratificada",
      "plate": "Estratificada",
      "plateSource": "Pedido 103",
      "devices": [
        {
          "tag": "regra",
          "name": "Estratificada",
          "hook": "Estratifica para separar grupos diferentes.",
          "literal": "Estratificada: a população se divide em estratos. Dentro de cada estrato, os elementos são homogêneos quanto à característica que importa. Entre estratos, são diferentes. Depois se faz AAS dentro de cada estrato, ou outro sorteio probabilístico que a questão descreva.\nProporcional: o tamanho da amostra no estrato acompanha o peso do estrato na população. População de 1.000, 600 numa região e 400 noutra, amostra de 100: 60 e 40.\nUniforme: o mesmo número em cada estrato, qualquer que seja o tamanho. Nos mesmos dados, 50 e 50. O estrato menor fica sobrerrepresentado.\nA uniforme não estima a média da população pela média simples da amostra, sem peso. O estrato pequeno pesa demais. A proporcional permite a média simples, se o sorteio interno for o da AAS e a questão não impuser outro peso. Não se invente fórmula de ponderação além desse aviso.\nVantagem: ganha precisão quando os estratos realmente diferem, e garante vaga de subgrupo.\nDesvantagem: é preciso conhecer o estrato de cada unidade antes do sorteio. Custa mais que a AAS pura.\nRegião de Pernambuco, sexo ou faixa etária podem ser estratos, se a questão os definir assim e se o sorteio for dentro deles. Sem sorteio, o nome da região não torna o plano estratificado.",
          "context": "Estratificada",
          "exam": "Homogêneo dentro, heterogêneo entre. Proporcional segue o tamanho. Uniforme iguala o n do estrato.",
          "trap": "Não chame de proporcional a amostra que põe o mesmo n em estratos de tamanhos diferentes.",
          "example": "600 e 400, amostra 100: proporcional é 60 e 40. Uniforme é 50 e 50.",
          "mnemonic": "Estratifica para separar grupos diferentes.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p138-12",
      "num": "12",
      "kicker": "Pedido 103",
      "title": "Sistemática",
      "lead": "Sistemática",
      "plate": "Sistemática",
      "plateSource": "Pedido 103",
      "devices": [
        {
          "tag": "regra",
          "name": "Sistemática",
          "hook": "Passo N/n. Cuidado com o ciclo.",
          "literal": "Sistemática: ordena-se a lista. O intervalo é k = N / n, quando a divisão é exata. Sorteia-se um ponto de partida entre 1 e k, com probabilidade igual. Entram o sorteado e, a partir dele, de k em k.\nExemplo. N = 800, n = 40. k = 800/40 = 20. O início é um inteiro de 1 a 20, não de 1 a 40. Se sair 7, entram 7, 27, 47, e assim por diante.\nVantagem: a execução é simples. Não se sorteia elemento por elemento.\nDesvantagem: se a lista tem ciclo que coincide com k, a amostra repete o mesmo ponto do ciclo e distorce. Lista de escala que alterna em bloco de 20, com k = 20, pode pegar só um tipo de bloco. Por isso o início aleatório não cura periodicidade igual a k.\nNão é AAS. Os pares de elementos a distância diferente de múltiplo de k não podem sair juntos. Na AAS, qualquer par pode sair.\nSe N/n não for inteiro, a questão precisa dizer como arredondar k. Não se invente a regra.\nk = n/N é o inverso. É erro de prova.",
          "context": "Sistemática",
          "exam": "k = N/n. O início vai de 1 a k. Não é aleatória simples.",
          "trap": "Não calcule k = n/N.",
          "example": "800 unidades, 40 na amostra: k = 20. Início 7 gera 7, 27, 47.",
          "mnemonic": "Passo N/n. Cuidado com o ciclo.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p138-13",
      "num": "13",
      "kicker": "Pedido 103",
      "title": "Conglomerado e o contraste",
      "lead": "Conglomerado e o contraste",
      "plate": "Conglomerado e o contraste",
      "plateSource": "Pedido 103",
      "devices": [
        {
          "tag": "regra",
          "name": "Conglomerado e o contraste",
          "hook": "Dentro do estrato, parecido. Dentro do conglomerado, variado.",
          "literal": "Conglomerado, ou cluster: a população se divide em grupos naturais, como quarteirão, escola, município ou unidade policial, se a questão os usar como grupo. O conglomerado é heterogêneo por dentro: contém a variedade da população. Entre conglomerados, o ideal do plano é que se pareçam.\nSorteiam-se alguns conglomerados. Investigam-se todos os elementos dos sorteados, ou uma subamostra, se o plano for em dois estágios. A questão precisa dizer se é censo do conglomerado ou subamostra.\nVantagem: reduz deslocamento quando a população está espalhada. Não se precisa da lista de todas as pessoas, e sim da lista dos conglomerados, no primeiro estágio.\nDesvantagem: se os conglomerados forem homogêneos por dentro e diferentes entre si, a precisão cai. Um conglomerado sorteado não representa os outros.\nContraste de prova:\nEstratificada: homogênea dentro do estrato, heterogênea entre estratos. Sorteia unidade dentro de todos os estratos.\nConglomerado: heterogêneo dentro, parecido entre os grupos. Sorteia grupo e observa o grupo.\nMacete do pedido, que confere com esse contraste: estratifica para separar grupos diferentes. Conglomera para usar grupos que já misturam a variedade.\nBairro pode ser estrato ou conglomerado. O nome não decide. Decide o que se sorteia e se o grupo é homogêneo ou heterogêneo por dentro. Se se sorteiam bairros e se entrevista todo morador do bairro sorteado, é conglomerado. Se se sorteiam moradores dentro de cada bairro, é estratificada, com bairro como estrato.\nNão se troque o custo logístico por maior precisão. Conglomerado costuma ser mais barato e menos preciso, para o mesmo n de unidades, quando os vizinhos se parecem.",
          "context": "Conglomerado e o contraste",
          "exam": "Estratificada sorteia dentro de todos os estratos. Conglomerado sorteia grupos.",
          "trap": "Não diga que conglomerado é homogêneo por dentro. Esse é o estrato.",
          "example": "Entrevistar todos os domicílios de municípios sorteados é conglomerado. Sortear domicílios em cada região é estratificada.",
          "mnemonic": "Dentro do estrato, parecido. Dentro do conglomerado, variado.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p138-14",
      "num": "14",
      "kicker": "Pedido 103",
      "title": "Tamanho da amostra",
      "lead": "Tamanho da amostra",
      "plate": "Tamanho da amostra",
      "plateSource": "Pedido 103",
      "devices": [
        {
          "tag": "regra",
          "name": "Tamanho da amostra",
          "hook": "Mais confiança, mais n. Menos erro, mais n. Finita, em geral, menos n.",
          "literal": "Quatro fatores, no sentido do pedido. Nível de confiança: sobe Z, sobe n. Margem de erro E: desce E, sobe n, porque E está ao quadrado no denominador. Variabilidade, σ ou p·q: sobe a variabilidade, sobe n. Tamanho N da população finita: entra na correção e, em geral, reduz n em relação à fórmula infinita.\nZ é quantil da normal padrão, nas duas caudas, na leitura usual de prova. Não é lei. Tabela do pedido, que coincide com o arredondamento comum:\n90%: Z = 1,645. Alguns itens usam 1,64 ou 1,65.\n95%: Z = 1,96.\n99%: Z = 2,576. Alguns itens usam 2,58.\nUse o valor que a questão der. Não troque 1,96 por 2.\nPopulação infinita, ou N muito grande, fórmulas que o pedido fechou:\npara média, n = (Z² · σ²) / E².\npara proporção, n = (Z² · p · q) / E², com q = 1 − p.\nSe p é desconhecido e a questão manda o tamanho máximo, p = 0,5, porque 0,5 · 0,5 = 0,25 é o maior produto. Não use 0,5 em silêncio.\nPopulação finita, fórmula que o paste agora fechou, para a média:\nn = (N · Z² · σ²) / [(N − 1) · E² + Z² · σ²].\nHá texto que põe N no lugar de N − 1. Não é a mesma conta. Este prompt usa a do paste, com N − 1. Não se reescreve.\nExemplo, fórmula infinita da média. Z = 1,96, σ = 2, E = 0,5. Z² = 3,8416. σ² = 4. Numerador 15,3664. E² = 0,25. n = 61,4656. Inteiro conservador, se a questão pedir arredondamento para cima: 62.\nO mesmo dado, N = 1.000, fórmula finita do paste. Numerador: 1.000 · 15,3664 = 15.366,4. Denominador: 999 · 0,25 + 15,3664 = 249,75 + 15,3664 = 265,1164. n = 57,960956... Inteiro conservador: 58. A finita deu menos que a infinita. Esse é o sentido da correção quando N não é enorme.\nProporção infinita. Z = 1,96, p = 0,5, E = 0,03. n = (3,8416 · 0,25) / 0,0009 = 0,9604 / 0,0009 = 1.067,111... Inteiro conservador: 1.068. E = 3% é 0,03, não 3, se a fórmula está em proporção.\nO paste não escreveu a fórmula finita da proporção. Não se apresenta uma como se ele a tivesse escrito. A da média, essa está fechada acima.\nMargem de erro de 3% e confiança de 95%, na leitura frequentista de prova: o procedimento, repetido muitas vezes, produziria intervalos que contêm o parâmetro em cerca de 95% das repetições. Não é a frase 'a probabilidade de o parâmetro estar neste intervalo já calculado é 95%'. Essa frase mistura a leitura. A margem de 3% é a metade da largura usual do intervalo, não a porcentagem de questionários errados.\nn não corrige viés. Amostra de conveniência com n = 1.068 continua conveniência.\nNão se escolhe E depois de ver o resultado para fazer a diferença desaparecer.",
          "context": "Tamanho da amostra",
          "exam": "A fórmula finita do paste tem N − 1 e Z² · σ² nos dois lados. No exemplo, 57,96 contra 61,47 da infinita.",
          "trap": "Não complete com outra variante. Não troque 3% por 3. Não diga que 95% é a probabilidade do parâmetro neste intervalo já feito, na leitura frequentista.",
          "example": "N = 1.000, Z = 1,96, σ = 2, E = 0,5: infinita 61,4656; finita 57,960956. Proporção com E = 0,03 e p = 0,5: 1.067,111.",
          "mnemonic": "Mais confiança, mais n. Menos erro, mais n. Finita, em geral, menos n.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 138",
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
  "rolePlateSource": "Prompt 138",
  "summary": [
    {
      "item": "Laplace",
      "rule": "Favoráveis / possíveis, se equiprovável.",
      "clue": "Dado honesto: par = 1/2."
    },
    {
      "item": "Frequentista",
      "rule": "Limite da frequência relativa.",
      "clue": "Amostra finita estima, não é o limite."
    },
    {
      "item": "Subjetiva",
      "rule": "Grau de crença coerente.",
      "clue": "Não é contagem."
    },
    {
      "item": "Axioma",
      "rule": "0 ≤ P ≤ 1. P(S) = 1. Exclusivos somam.",
      "clue": "Não some se a interseção existe."
    },
    {
      "item": "Complemento",
      "rule": "P(A') = 1 − P(A).",
      "clue": "A e A' cobrem S."
    },
    {
      "item": "Adição",
      "rule": "P(A)+P(B)−P(A∩B).",
      "clue": "0,30+0,40−0,10 = 0,60."
    },
    {
      "item": "Condicional",
      "rule": "P(A|B) = P(A∩B)/P(B).",
      "clue": "0,10/0,40 = 0,25."
    },
    {
      "item": "Independência",
      "rule": "Interseção igual ao produto.",
      "clue": "Não é exclusão."
    },
    {
      "item": "Bayes",
      "rule": "Via / probabilidade total.",
      "clue": "Exemplo 0,18/0,26 = 9/13."
    },
    {
      "item": "VPP",
      "rule": "P(condição | positivo).",
      "clue": "No exercício, 18/67, não 0,90."
    },
    {
      "item": "AAS",
      "rule": "Unidades com chance igual.",
      "clue": "Exige lista. Não é fila."
    },
    {
      "item": "Estratificada",
      "rule": "Homogênea dentro. Sorteio em todos os estratos.",
      "clue": "600/400 e n=100: 60 e 40 se proporcional."
    },
    {
      "item": "Sistemática",
      "rule": "k = N/n. Início de 1 a k.",
      "clue": "800 e 40: k = 20. Não é AAS."
    },
    {
      "item": "Conglomerado",
      "rule": "Heterogêneo dentro. Sorteia grupo.",
      "clue": "Mais barato, em geral menos preciso."
    },
    {
      "item": "Z 90%",
      "rule": "1,645 no pedido.",
      "clue": "Item pode usar 1,64 ou 1,65."
    },
    {
      "item": "Z 95%",
      "rule": "1,96.",
      "clue": "Não troque por 2."
    },
    {
      "item": "Z 99%",
      "rule": "2,576 no pedido.",
      "clue": "Item pode usar 2,58."
    },
    {
      "item": "Infinita, média",
      "rule": "n = (Z²·σ²)/E².",
      "clue": "Exemplo: 61,4656."
    },
    {
      "item": "Infinita, proporção",
      "rule": "n = (Z²·p·q)/E².",
      "clue": "E=0,03 e p=0,5: 1.067,111."
    },
    {
      "item": "Finita, média",
      "rule": "n = (N·Z²·σ²)/[(N−1)·E² + Z²·σ²].",
      "clue": "Exemplo: 57,960956. Não use N no lugar de N−1."
    }
  ],
  "compare": [
    {
      "item": "Exclusão",
      "ce": "Interseção com probabilidade 0.",
      "cf": "Independência: interseção igual ao produto.",
      "effect": "separa"
    },
    {
      "item": "P(A|B)",
      "ce": "Divide por P(B).",
      "cf": "P(B|A) divide por P(A).",
      "effect": "separa"
    },
    {
      "item": "Estratificada",
      "ce": "Homogênea dentro. Sorteia em todos os estratos.",
      "cf": "Conglomerado: heterogêneo dentro. Sorteia grupos.",
      "effect": "separa"
    },
    {
      "item": "Sistemática",
      "ce": "Passo k = N/n.",
      "cf": "AAS: qualquer subconjunto de n pode sair.",
      "effect": "separa"
    },
    {
      "item": "Proporcional",
      "ce": "60 e 40 no exemplo 600/400.",
      "cf": "Uniforme: 50 e 50. Não estime sem peso.",
      "effect": "separa"
    },
    {
      "item": "Finita",
      "ce": "Denominador com (N−1)·E² + Z²·σ².",
      "cf": "Infinita: só E² no denominador.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 138011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Dois eventos de probabilidade positiva e mutuamente exclusivos são independentes, porque a ocorrência de um não altera o espaço do outro.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Exclusão: P(A ∩ B) = 0. Independência: P(A ∩ B) = P(A)·P(B). Se as duas probabilidades são positivas, o produto é positivo, e a exclusão exige zero. Além disso, P(A|B) = 0, diferente de P(A). A ocorrência de um zera o outro. Não são independentes."
    },
    {
      "id": 138012,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Num teste com prevalência 0,02, sensibilidade 0,90 e especificidade 0,95, o valor preditivo positivo é 0,90, porque essa é a taxa de acerto entre quem tem a condição.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. 0,90 é P(positivo | condição), a sensibilidade. O valor preditivo positivo é P(condição | positivo). P(B) = 0,90·0,02 + 0,05·0,98 = 0,018 + 0,049 = 0,067. VPP = 0,018/0,067 = 18/67, cerca de 0,269. Os números são de exercício, não série oficial."
    },
    {
      "id": 138013,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Na amostragem estratificada, cada estrato é heterogêneo por dentro. Na amostragem por conglomerados, cada conglomerado é homogêneo por dentro. Por isso os nomes se trocam sem mudar o plano.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. A relação está invertida. Estrato: homogêneo por dentro, diferente dos outros estratos, e o sorteio ocorre dentro de todos. Conglomerado: heterogêneo por dentro, e o sorteio escolhe grupos. Trocar o nome troca o plano."
    },
    {
      "id": 138014,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Numa lista de 800 unidades, amostra sistemática de 40, o intervalo é 20 e o ponto de partida é sorteado entre 1 e 20. Esse plano é aleatória simples.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO na segunda frase. A primeira está certa: k = N/n = 800/40 = 20, e o início vai de 1 a 20. Não é aleatória simples. Na sistemática, dois elementos cuja distância não é múltipla de k não saem juntos. Na AAS, qualquer subconjunto de 40 poderia sair."
    },
    {
      "id": 138015,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "A fórmula de população finita fechada no paste é n = (N · Z² · σ²) / [(N − 1) · E² + Z² · σ²]. Com N = 1.000, Z = 1,96, σ = 2 e E = 0,5, esse n é menor que o da fórmula infinita com os mesmos Z, σ e E.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. Z² = 3,8416. σ² = 4. Z²·σ² = 15,3664. Infinita: 15,3664 / 0,25 = 61,4656. Finita: numerador 15.366,4. Denominador 999·0,25 + 15,3664 = 265,1164. n = 57,960956..., menor que 61,4656. A variante com N no lugar de N − 1 não é a fórmula do paste."
    }
  ],
  "toc": [
    {
      "id": "p138-1",
      "num": "1",
      "label": "Experimento, espaço e evento"
    },
    {
      "id": "p138-2",
      "num": "2",
      "label": "Três definições"
    },
    {
      "id": "p138-3",
      "num": "3",
      "label": "Axiomas e complemento"
    },
    {
      "id": "p138-4",
      "num": "4",
      "label": "Adição"
    },
    {
      "id": "p138-5",
      "num": "5",
      "label": "Condicional e produto"
    },
    {
      "id": "p138-6",
      "num": "6",
      "label": "Independência não é exclusão"
    },
    {
      "id": "p138-7",
      "num": "7",
      "label": "Total e Bayes"
    },
    {
      "id": "p138-8",
      "num": "8",
      "label": "Sensibilidade, especificidad"
    },
    {
      "id": "p138-9",
      "num": "9",
      "label": "Probabilística e não probabi"
    },
    {
      "id": "p138-10",
      "num": "10",
      "label": "Aleatória simples"
    },
    {
      "id": "p138-11",
      "num": "11",
      "label": "Estratificada"
    },
    {
      "id": "p138-12",
      "num": "12",
      "label": "Sistemática"
    },
    {
      "id": "p138-13",
      "num": "13",
      "label": "Conglomerado e o contraste"
    },
    {
      "id": "p138-14",
      "num": "14",
      "label": "Tamanho da amostra"
    }
  ],
  "clocks": [],
  "organKicker": "Recorte",
  "organTitle": "Probabilidade e amostragem",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a regra que ele escreve.",
  "closing": "Conferir a fonte se houver atualização posterior à consulta de 20/10/2026.",
  "palette": "teal",
  "highlight": {
    "big": "14",
    "small": "blocos neste prompt"
  },
  "heroLead": "Pedido 103, agora completo. A fórmula finita que estava cortada em '+ Z' foi fechada como o paste a escreveu: n = (N · Z² · σ²) / [(N − 1) · E² + Z² · σ²]. Não se trocou N − 1 por ",
  "footerLine": "Prompt 138 · pedido 103.",
  "nextLine": "Pedido 103 fechado. Não há outro prompt neste paste. O art. 79 da Lei nº 14.133 continua pausado.",
  "closingMnemonic": "Texto primeiro. Número divergente segue a lei. Lacuna não se completa.",
  "rolesTitle": "Limite",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "Não misture",
  "compareLead": "Instituto vizinho não empresta requisito.",
  "compareLeft": "Um",
  "compareRight": "Outro"
};
