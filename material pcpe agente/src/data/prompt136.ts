import type { StudyModule } from "./study";

export const PROMPT136: StudyModule = {
  "short": "Estoques, índices e orçamento",
  "eyebrow": "Prompt 136 · pedido 101",
  "title": "Estoques, índices e orçamento",
  "subtitle": "execução da despesa sem atalho",
  "description": "Pedido 101. UEPS não foi ensinado como norma vigente. Estágio da despesa não foi convertido em forma de contornar controle. Artigo não lido não foi numerado.",
  "reading": "CPC 16, pelo nome e pela vedação do UEPS. Lei nº 4.320/1964, pelos nomes dos créditos e dos estágios. Sem artigo inventado.",
  "terms": [
    "PEPS",
    "CMV",
    "liquidez",
    "empenho",
    "crédito suplementar"
  ],
  "subject": "Contabilidade",
  "context": [
    "Os Prompts 62 a 122 do app já estão ocupados. Este pedido foi gravado com número novo.",
    "Número que não bate com a lei segue o texto oficial, e a divergência é dita.",
    "Súmula só entra com enunciado confirmado."
  ],
  "importance": "A banca troca prazo, requisito e nome de instituto.",
  "distinctions": [
    "No exemplo, PEPS dá CMV 64 e a média periódica dá 72.",
    "CPC 16 não admite UEPS.",
    "Liquidez seca tira estoque. Imediata usa disponibilidades.",
    "Empenho não é pagamento.",
    "Suplementar reforça. Especial atende despesa sem dotação."
  ],
  "organs": [
    {
      "sigla": "1",
      "nome": "Estoques",
      "funcao": "PEPS e média não dão o mesmo CMV. UEPS não é o método da norma atual.",
      "base": "Pedido 101",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "yellow"
    },
    {
      "sigla": "2",
      "nome": "Índices usuais",
      "funcao": "Seca tira o estoque. Imediata usa só disponibilidades. Geral inclui o longo prazo.",
      "base": "Pedido 101",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "cyan"
    },
    {
      "sigla": "3",
      "nome": "Orçamento público: peças e princípios",
      "funcao": "Suplementar reforça. Especial cria destinação não prevista. Extraordinário é urgente e imprevisível.",
      "base": "Pedido 101",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "orange"
    },
    {
      "sigla": "4",
      "nome": "Estágios da execução",
      "funcao": "Empenho não paga. Liquidação não paga. Pagamento paga.",
      "base": "Pedido 101",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "violet"
    }
  ],
  "swaps": [
    {
      "wrong": "UEPS é aceito pelo CPC 16.",
      "right": "CPC 16 não admite UEPS."
    },
    {
      "wrong": "Empenho é pagamento.",
      "right": "Empenho reserva. Pagamento é outro estágio."
    },
    {
      "wrong": "Suplementar cria despesa sem dotação.",
      "right": "Isso é o especial. Suplementar reforça."
    }
  ],
  "timeline": [
    {
      "when": "Pedido",
      "title": "101",
      "text": "Gravado como Prompt 136."
    },
    {
      "when": "Limite",
      "title": "Recorte",
      "text": "CPC 16, pelo nome e pela vedação do UEPS. Lei nº 4.320/1964, pelos nomes dos créditos e dos estágios. Sem artigo inventado."
    }
  ],
  "articles": [
    {
      "id": "p136-1",
      "num": "1",
      "kicker": "Pedido 101",
      "title": "Estoques",
      "lead": "Estoques",
      "plate": "Estoques",
      "plateSource": "Pedido 101",
      "devices": [
        {
          "tag": "regra",
          "name": "Estoques",
          "hook": "Sai o antigo no PEPS. A média reparte.",
          "literal": "Estoque é bem destinado a venda, produção ou consumo no curso da atividade. No balanço, é ativo. Circulante, se se realiza no ciclo. Não se classifique estoque de uso permanente como imobilizado sem a questão dizer o uso.\nCusto da mercadoria vendida, na conta usual: estoque inicial + compras líquidas − estoque final. A fórmula mede o que saiu, não o que sobrou.\nPEPS: sai primeiro o que entrou primeiro. O estoque final fica com os custos mais recentes.\nCusto médio ponderado: o custo unitário é o custo total disponível dividido pela quantidade disponível. Saída e estoque usam essa média, recalculada conforme o método da questão, permanente ou periódico. A questão precisa dizer qual.\nUEPS: sai primeiro o que entrou por último. O CPC 16, estoques, não admite o UEPS como critério de mensuração. Não se ensine UEPS como método aceito na norma brasileira atual. Se a questão antiga o pede como conta, a conta se faz e se diz que a norma não o adota. Conferir o texto do CPC 16 se a questão pedir o parágrafo. O parágrafo não foi aberto nesta sessão.\nExemplo de conta, não de taxa. Estoque inicial: 10 unidades a 5. Compra: 10 a 7. Venda: 12 unidades. PEPS: saem 10 a 5 e 2 a 7. CMV = 50 + 14 = 64. Estoque final: 8 a 7 = 56.\nMédio periódico do período: custo disponível 50 + 70 = 120, quantidade 20, média 6. CMV = 12 · 6 = 72. Estoque final = 8 · 6 = 48. 64 + 56 = 120 e 72 + 48 = 120. A soma fecha. Os critérios não dão o mesmo CMV.\nNão se invente ICMS, frete ou desconto se a questão não os der. Se der, entram no custo de aquisição, na regra geral do CPC 16, e o tributo recuperável não entra. Sem o texto do parágrafo, a questão que pedir o detalhe fiscal deve ser conferida.",
          "context": "Estoques",
          "exam": "PEPS e média não dão o mesmo CMV. UEPS não é o método da norma atual.",
          "trap": "Não ensine UEPS como aceito pelo CPC 16.",
          "example": "No exemplo, PEPS dá CMV 64. A média periódica dá 72.",
          "mnemonic": "Sai o antigo no PEPS. A média reparte.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p136-2",
      "num": "2",
      "kicker": "Pedido 101",
      "title": "Índices usuais",
      "lead": "Índices usuais",
      "plate": "Índices usuais",
      "plateSource": "Pedido 101",
      "devices": [
        {
          "tag": "regra",
          "name": "Índices usuais",
          "hook": "O denominador diz qual índice é.",
          "literal": "Índice é razão. Isolado, não diz se a entidade está bem. Compara-se com período anterior ou com o ramo, se a questão der o parâmetro. Sem parâmetro, não se invente 'saudável'.\nLiquidez corrente = ativo circulante / passivo circulante.\nLiquidez seca = (ativo circulante − estoques) / passivo circulante.\nLiquidez imediata = disponibilidades / passivo circulante.\nLiquidez geral = (ativo circulante + realizável a longo prazo) / (passivo circulante + passivo não circulante).\nEndividamento geral, na fórmula usual de prova = passivo exigível / ativo total.\nParticipação de capital de terceiros, fórmula usual = passivo exigível / patrimônio líquido. Não é a mesma do endividamento geral. O denominador mudou.\nMargem líquida = lucro líquido / receita líquida.\nOs nomes variam entre autores. A questão que definir a fórmula manda na questão. As fórmulas acima são as usuais de prova, não artigo de lei.\nExemplo. Ativo circulante 200, estoques 50, disponibilidades 20, passivo circulante 100. Corrente = 2. Seca = 1,5. Imediata = 0,2. Não se diga que 2 é bom sem parâmetro.\nÍndice maior não é sempre melhor. Liquidez alta pode ser estoque parado. A leitura exige a composição.",
          "context": "Índices usuais",
          "exam": "Seca tira o estoque. Imediata usa só disponibilidades. Geral inclui o longo prazo.",
          "trap": "Não chame de endividamento geral a razão que tem o patrimônio líquido no denominador.",
          "example": "200/100 = 2. (200−50)/100 = 1,5. 20/100 = 0,2.",
          "mnemonic": "O denominador diz qual índice é.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p136-3",
      "num": "3",
      "kicker": "Pedido 101",
      "title": "Orçamento público: peças e princípios",
      "lead": "Orçamento público: peças e princípios",
      "plate": "Orçamento público: peças e princípios",
      "plateSource": "Pedido 101",
      "devices": [
        {
          "tag": "regra",
          "name": "Orçamento público: peças e princípios",
          "hook": "Peça, estágio e crédito não se misturam.",
          "literal": "Orçamento público, neste bloco, é o da administração direta, na Lei nº 4.320/1964 e na Constituição, sem abrir artigo que não foi lido. Empresa pública e sociedade de economia mista não se regem por analogia com este bloco.\nPPA, LDO e LOA são peças distintas. PPA é plano. LDO orienta a elaboração da lei anual. LOA é o orçamento do exercício. Não se troque a peça.\nPrincípios usuais de prova, pelo nome, sem número de artigo: unidade, o orçamento é uno; universalidade, receitas e despesas entram; anualidade, o exercício; exclusividade, a lei orçamentária não trata de matéria estranha. Se a questão pedir o artigo, conferir. Não se numera aqui.\nReceita orçamentária prevista não é receita arrecadada. Despesa fixada não é despesa paga.\nCrédito adicional, pelos nomes da lei: suplementar reforça dotação existente; especial atende despesa sem dotação; extraordinário atende despesa urgente e imprevisível, como guerra ou comoção. Não se invente hipótese de extraordinário além do que a questão e a lei disserem. Não se ensina a fracionar despesa para caber em dotação.\nReceita extraorçamentária não pertence à entidade. Caução e consignação são exemplos usuais. Entra e deve sair. Não é receita de serviço.",
          "context": "Orçamento público: peças e princípios",
          "exam": "Suplementar reforça. Especial cria destinação não prevista. Extraordinário é urgente e imprevisível.",
          "trap": "Não chame caução de receita orçamentária.",
          "example": "Depósito de terceiro na caixa da entidade é extraorçamentário. Não financia despesa.",
          "mnemonic": "Peça, estágio e crédito não se misturam.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p136-4",
      "num": "4",
      "kicker": "Pedido 101",
      "title": "Estágios da execução",
      "lead": "Estágios da execução",
      "plate": "Estágios da execução",
      "plateSource": "Pedido 101",
      "devices": [
        {
          "tag": "regra",
          "name": "Estágios da execução",
          "hook": "Três estágios. Só o último paga.",
          "literal": "Despesa orçamentária, na execução: empenho, liquidação e pagamento.\nEmpenho reserva dotação e indica o credor e a importância. Não é pagamento. Não entrega o bem.\nLiquidação verifica o direito do credor, com base no que foi prestado. Não é o cheque.\nPagamento extingue a obrigação. Só depois da liquidação, na sequência legal. Não se pague para 'adiantar' o que não foi liquidado.\nRestos a pagar: despesa empenhada e não paga até 31 de dezembro. Processados: já liquidados. Não processados: ainda não liquidados. Não se troque o nome.\nReceita orçamentária, nos estágios usuais: previsão, lançamento, arrecadação e recolhimento. Previsão é a estimativa da lei. Lançamento identifica o sujeito e o valor, quando a receita é lançada. Arrecadação é o recebimento. Recolhimento é a entrega ao caixa competente. Nem toda receita passa por lançamento no mesmo sentido. Tributo e receita patrimonial não se tratam igual. A questão precisa dizer o tipo.\nSuprimento de fundos não é empenho genérico para qualquer gasto. É regime próprio, com prestação de contas. Não se abre o decreto. Não se ensina a usar suprimento para fugir de licitação. Licitação permanece no corte da Lei nº 14.133, no Prompt 86, e não se reabre.\nNão se descreve fracionamento de despesa, nota fria nem empenho sem crédito. O estágio existe para controlar, não para contornar.",
          "context": "Estágios da execução",
          "exam": "Empenho não paga. Liquidação não paga. Pagamento paga.",
          "trap": "Não classifique resto a pagar não processado como se já estivesse liquidado.",
          "example": "Material entregue e conferido pode ser liquidado. Sem a conferência do direito, não se chama de liquidação.",
          "mnemonic": "Três estágios. Só o último paga.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 136",
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
  "rolePlateSource": "Prompt 136",
  "summary": [
    {
      "item": "PEPS do exemplo",
      "rule": "CMV 64. Estoque final 56.",
      "clue": "Média periódica: CMV 72."
    },
    {
      "item": "UEPS",
      "rule": "Não é critério do CPC 16.",
      "clue": "Conferir o parágrafo se a questão o pedir."
    },
    {
      "item": "Seca",
      "rule": "(AC − estoques) / PC.",
      "clue": "Imediata usa disponibilidades."
    },
    {
      "item": "Empenho",
      "rule": "Reserva dotação. Não paga.",
      "clue": "Pagamento é o último estágio."
    },
    {
      "item": "Suplementar",
      "rule": "Reforça dotação.",
      "clue": "Especial: despesa sem dotação."
    },
    {
      "item": "Extraorçamentária",
      "rule": "Não é receita da entidade.",
      "clue": "Caução volta."
    }
  ],
  "compare": [
    {
      "item": "PEPS",
      "ce": "CMV com o custo antigo.",
      "cf": "Média reparte o custo disponível.",
      "effect": "separa"
    },
    {
      "item": "Empenho",
      "ce": "Reserva.",
      "cf": "Pagamento extingue a obrigação.",
      "effect": "separa"
    },
    {
      "item": "Suplementar",
      "ce": "Reforça dotação.",
      "cf": "Especial: não havia dotação.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 136011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O CPC 16 admite o UEPS como critério de mensuração dos estoques, ao lado do PEPS e do custo médio.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. O CPC 16 não admite o UEPS. PEPS e custo médio são os critérios de estudo. O parágrafo não foi aberto; a vedação é o ponto, e o texto se confere se a questão o pedir."
    },
    {
      "id": 136012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Estoque inicial de 10 unidades a 5, compra de 10 a 7 e venda de 12. Pelo PEPS, o CMV é",
      "correct": "b",
      "options": [
        {
          "key": "a",
          "label": "72."
        },
        {
          "key": "b",
          "label": "64."
        },
        {
          "key": "c",
          "label": "56."
        },
        {
          "key": "d",
          "label": "120."
        },
        {
          "key": "e",
          "label": "84."
        }
      ],
      "comentario": "Questão original, não é prova real. Saem as 10 mais antigas, a 5, e 2 da compra, a 7. 50 + 14 = 64. 72 é a média periódica. 56 é o estoque final do PEPS."
    },
    {
      "id": 136013,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Liquidez seca é disponibilidades dividido pelo passivo circulante. Liquidez imediata tira os estoques do ativo circulante.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Os nomes estão trocados. Seca = (ativo circulante − estoques) / passivo circulante. Imediata = disponibilidades / passivo circulante."
    },
    {
      "id": 136014,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Na execução da despesa orçamentária, o estágio que reserva a dotação, sem ser pagamento, é",
      "correct": "a",
      "options": [
        {
          "key": "a",
          "label": "o empenho."
        },
        {
          "key": "b",
          "label": "a liquidação."
        },
        {
          "key": "c",
          "label": "o pagamento."
        },
        {
          "key": "d",
          "label": "o recolhimento."
        },
        {
          "key": "e",
          "label": "a previsão da receita."
        }
      ],
      "comentario": "Questão original, não é prova real. Empenho reserva. Liquidação verifica o direito. Pagamento extingue. Recolhimento e previsão são da receita."
    },
    {
      "id": 136015,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Crédito suplementar atende despesa para a qual não havia dotação. Crédito especial apenas reforça dotação já existente.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. A relação está invertida. Suplementar reforça dotação existente. Especial atende despesa sem dotação. Extraordinário é o urgente e imprevisível."
    }
  ],
  "toc": [
    {
      "id": "p136-1",
      "num": "1",
      "label": "Estoques"
    },
    {
      "id": "p136-2",
      "num": "2",
      "label": "Índices usuais"
    },
    {
      "id": "p136-3",
      "num": "3",
      "label": "Orçamento público: peças e p"
    },
    {
      "id": "p136-4",
      "num": "4",
      "label": "Estágios da execução"
    }
  ],
  "clocks": [],
  "organKicker": "Recorte",
  "organTitle": "Estoques, índices e orçamento",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a regra que ele escreve.",
  "closing": "Conferir a fonte se houver atualização posterior à consulta de 20/10/2026.",
  "palette": "leaf",
  "highlight": {
    "big": "4",
    "small": "blocos neste prompt"
  },
  "heroLead": "Pedido 101. UEPS não foi ensinado como norma vigente. Estágio da despesa não foi convertido em forma de contornar controle. Artigo não lido não foi numerado.",
  "footerLine": "Prompt 136 · pedido 101.",
  "nextLine": "Prompt 137 · pedido 102 · estatística descritiva.",
  "closingMnemonic": "Texto primeiro. Número divergente segue a lei. Lacuna não se completa.",
  "rolesTitle": "Limite",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "Não misture",
  "compareLead": "Instituto vizinho não empresta requisito.",
  "compareLeft": "Um",
  "compareRight": "Outro"
};
