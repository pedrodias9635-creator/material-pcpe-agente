import type { StudyModule } from "./study";

export const PROMPT208: StudyModule = {
  "short": "Aluguel, tributo e variação",
  "eyebrow": "Prompt 208 · lacuna do edital",
  "title": "Aluguel, desconto, tributo e variação",
  "subtitle": "sem alíquota inventada",
  "description": "O edital pede aluguéis, descontos, tributos e variação monetária ou cambial. Compras, vendas, folha, juros, depreciação e baixa já estão no Prompt 174. Aqui o número é o da questão. Alíquota que a questão não deu não foi criada.",
  "reading": "Escrituração didática do item 7 do edital. Regime de competência do Prompt 135. Sem artigo de tributo e sem taxa de câmbio oficial neste assunto.",
  "terms": [
    "competência",
    "desconto financeiro",
    "recuperável",
    "variação passiva"
  ],
  "subject": "Contabilidade",
  "context": [
    "O valor usado na explicação é o da conta de exemplo, não alíquota legal.",
    "Tributo recuperável já estava nomeado no Prompt 136. Este assunto diz o lançamento, sem percentual.",
    "Não se converte variação em índice que a questão não trouxe."
  ],
  "importance": "A banca lança o ano inteiro do aluguel no mês do pagamento e chama de receita o aumento de uma dívida em moeda estrangeira.",
  "distinctions": [
    "Aluguel incorrido no período é despesa de quem usa o bem, ainda que pague depois.",
    "Pagamento adiantado é ativo. Vira despesa à medida que o período passa. Não é despesa inteira no dia do cheque.",
    "Aluguel recebido antes do período é passivo. Vira receita quando o período ocorre.",
    "Desconto comercial, incondicional, reduz o valor da compra ou da venda. Não é despesa financeira.",
    "Desconto por pagar antes é financeiro: despesa para quem concede, receita para quem obtém.",
    "Tributo recuperável na compra não entra no custo. Entra em conta de ativo. O percentual não está neste assunto.",
    "Tributo não recuperável, se a questão o der, integra o custo. Sem a questão, não se cria.",
    "Variação monetária ativa aumenta ativo ou reduz passivo e é receita. A passiva é despesa.",
    "Dívida em moeda estrangeira que cresce em reais, pela taxa da questão, é variação cambial passiva.",
    "Crédito em moeda estrangeira que cresce em reais é variação cambial ativa.",
    "A competência reconhece a variação no período em que a taxa mudou, não só no pagamento."
  ],
  "organs": [
    {
      "sigla": "AL",
      "nome": "Aluguel",
      "funcao": "Adiantado é ativo. Incorrido é despesa.",
      "base": "Competência",
      "nao": "O cheque de janeiro não consome o ano.",
      "tone": "yellow"
    },
    {
      "sigla": "TR",
      "nome": "Tributo",
      "funcao": "Recuperável não entra no custo.",
      "base": "Item 7 do edital",
      "nao": "Sem alíquota neste assunto.",
      "tone": "cyan"
    },
    {
      "sigla": "VC",
      "nome": "Variação",
      "funcao": "Dívida que cresce é despesa.",
      "base": "Taxa dada na questão",
      "nao": "Não se inventa câmbio.",
      "tone": "orange"
    }
  ],
  "swaps": [
    {
      "wrong": "Aluguel do ano, pago em janeiro, é despesa de janeiro.",
      "right": "O adiantamento é ativo. A despesa acompanha o mês."
    },
    {
      "wrong": "Dívida em dólar que sobe em reais é receita.",
      "right": "É variação cambial passiva, despesa."
    }
  ],
  "timeline": [
    {
      "when": "Exemplo",
      "title": "Número da conta",
      "text": "Aluguel de 1.200 pelo ano, pago em janeiro, dá ativo de 1.200 e despesa mensal de 100. O 100 é a divisão do exemplo, não taxa legal."
    },
    {
      "when": "Limite",
      "title": "Sem alíquota",
      "text": "ICMS, câmbio e índice que a questão não escrever não entram."
    }
  ],
  "articles": [
    {
      "id": "p208-op",
      "num": "07",
      "kicker": "Item 7",
      "title": "Quatro operações",
      "lead": "Aluguel, desconto, tributo, variação",
      "plate": "100",
      "plateSource": "Exemplo, não alíquota",
      "devices": [
        {
          "tag": "AL",
          "name": "Aluguel e desconto",
          "hook": "Adiantado não é despesa do dia. Desconto comercial não é financeiro.",
          "literal": "Exemplo, não lei. Aluguel anual de 1.200, pago à vista em janeiro: débito de despesa antecipada 1.200, crédito de caixa 1.200. Em cada mês do uso: débito de despesa de aluguel 100, crédito de despesa antecipada 100. Se o recebimento for antecipado, o crédito inicial é passivo, não receita. Desconto comercial incondicional reduz o valor da operação. Desconto por antecipar o pagamento é despesa financeira de quem concede e receita financeira de quem obtém.",
          "context": "O 100 existe porque 1.200 dividido por 12 foi o exemplo. Outra questão traz outro número.",
          "exam": "A banca lança 1.200 como despesa de janeiro e trata todo desconto como despesa financeira.",
          "trap": "Receita de aluguel só no período a que o aluguel se refere.",
          "example": "1.200 no ano. 100 no mês. Sem percentual de lei.",
          "mnemonic": "Adiantou, é ativo ou passivo. Usou, é despesa ou receita.",
          "revoked": false
        },
        {
          "tag": "TR",
          "name": "Tributo e variação",
          "hook": "Recuperável fica fora do custo. Dívida que sobe é despesa.",
          "literal": "Exemplo, não lei. Compra de 1.000 com tributo recuperável de 180, se a questão disser que é recuperável: débito do bem ou do estoque 1.000, débito de tributo a recuperar 180, crédito de fornecedores ou caixa 1.180. O 180 não é alíquota. É o número dado. Dívida de 100 dólares, cotada a 5 e depois a 5,20, se a questão der essas taxas: o passivo sobe 20. Débito de variação cambial passiva 20, crédito do passivo 20. Crédito em moeda estrangeira que sobe em reais é variação ativa.",
          "context": "Se a questão não disser que o tributo é recuperável, não se cria a conta. Se não der a taxa, não se cria o 20.",
          "exam": "A banca joga o tributo recuperável no custo e chama o aumento da dívida de receita.",
          "trap": "Variação monetária segue a mesma direção: ativo que cresce é receita; passivo que cresce é despesa.",
          "example": "180 e 20 são da conta, não do edital.",
          "mnemonic": "Recuperável: ativo. Passivo que cresce: despesa.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 208",
      "does": [
        "Usar o número que a questão deu"
      ],
      "doesNot": [
        "Não inventar alíquota",
        "Não inventar câmbio"
      ]
    }
  ],
  "roleNote": "Questões originais. Não são prova real. Os números são do enunciado.",
  "rolePlate": "A questão traz o número.",
  "rolePlateSource": "Prompt 208",
  "summary": [
    {
      "item": "Aluguel",
      "rule": "Adiantado é ativo ou passivo.",
      "clue": "A despesa ou a receita acompanha o período."
    },
    {
      "item": "Tributo",
      "rule": "Recuperável não entra no custo.",
      "clue": "Sem percentual neste assunto."
    },
    {
      "item": "Variação",
      "rule": "Passivo que cresce é despesa.",
      "clue": "A taxa é a da questão."
    }
  ],
  "compare": [
    {
      "item": "Aluguel",
      "ce": "Ano inteiro no mês do pagamento.",
      "cf": "Adiantamento no ativo. Despesa no mês.",
      "effect": "separa"
    },
    {
      "item": "Dívida em dólar",
      "ce": "Alta do câmbio é receita.",
      "cf": "Alta do passivo é despesa.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 208011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Pelo regime de competência, o aluguel de 1.200 referente ao ano inteiro, pago à vista em janeiro, é despesa integral de janeiro.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. O pagamento adiantado é ativo. A despesa de cada mês é 100, porque o enunciado deu 1.200 pelo ano. O 100 não é taxa legal."
    },
    {
      "id": 208012,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Uma dívida de 100 dólares, cotada a 5 e depois a 5,20, gera variação cambial passiva de 20, se essas forem as taxas da questão.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. O passivo cresce 20. O débito é despesa de variação cambial. Crédito em moeda estrangeira que cresce em reais seria variação ativa. Sem a taxa da questão, o 20 não se inventa."
    },
    {
      "id": 208013,
      "banca": "Estilo Cebraspe · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Na compra de 1.000 com tributo de 180 que a questão declara recuperável, o custo do bem e o desconto comercial incondicional são tratados assim:",
      "correct": "a",
      "options": [
        {
          "key": "a",
          "label": "O custo fica em 1.000 e o tributo recuperável em ativo. Desconto comercial incondicional reduz o valor da operação, não nasce como despesa financeira."
        },
        {
          "key": "b",
          "label": "O custo fica em 1.180, porque todo tributo entra no bem."
        },
        {
          "key": "c",
          "label": "O custo fica em 820, porque 180 é sempre alíquota legal de desconto."
        },
        {
          "key": "d",
          "label": "O tributo recuperável é despesa do período, e o desconto comercial é variação cambial."
        },
        {
          "key": "e",
          "label": "Não se lança nada até o pagamento, ainda no regime de competência."
        }
      ],
      "comentario": "Questão original, não é prova real. A alternativa a separa custo, tributo recuperável e desconto comercial. O 180 é o número do enunciado, não alíquota deste assunto. Desconto por pagar antes é que seria financeiro."
    }
  ],
  "toc": [
    {
      "id": "p208-op",
      "num": "07",
      "label": "Operações"
    }
  ],
  "clocks": [
    {
      "value": "100",
      "label": "Despesa mensal do exemplo de 1.200",
      "source": "Conta do enunciado, não taxa"
    },
    {
      "value": "20",
      "label": "Variação do exemplo 5 para 5,20",
      "source": "Taxa dada na questão"
    }
  ],
  "organKicker": "Recorte",
  "organTitle": "Operações que faltavam",
  "contextTitle": "Como ler",
  "contextLead": "O número é o da questão. A direção do lançamento é a regra.",
  "closing": "Alíquota e câmbio que não estiverem na questão continuam de fora.",
  "palette": "leaf",
  "highlight": {
    "big": "4",
    "small": "operações neste assunto"
  },
  "heroLead": "Aluguel adiantado não é despesa do dia. Tributo recuperável não entra no custo. Dívida que cresce em reais é despesa. O número vem da questão.",
  "nextLine": "O assunto seguinte continua na mesma disciplina.",
  "closingMnemonic": "Adiantou, é ativo. Recuperável, é ativo. Passivo que cresce, é despesa.",
  "rolesLead": "Sem alíquota inventada.",
  "compareTitle": "O que a banca troca",
  "compareLead": "A esquerda é a armadilha. A direita é o lançamento.",
  "compareLeft": "Armadilha",
  "compareRight": "Lançamento"
};
