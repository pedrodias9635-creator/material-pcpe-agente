import type { StudyModule } from "./study";

export const PROMPT174: StudyModule = {
  "short": "Lançamentos e balancete",
  "eyebrow": "Prompt 174 · lacuna do edital",
  "title": "Lançamentos e balancete",
  "subtitle": "atos, fatos e operações",
  "description": "O edital pede atos e fatos, contas e a contabilização de compras, vendas, folha, juros, depreciação e baixa. O Prompt 135 já deu a equação e a depreciação linear. Este dá o lançamento, sem alíquota inventada.",
  "reading": "Escrituração didática. O valor é o da questão.",
  "terms": [
    "permutativo",
    "modificativo",
    "balancete",
    "fornecedores"
  ],
  "subject": "Contabilidade",
  "context": [
    "O texto abaixo é o da compilação oficial já conferida. Redação anterior riscada não foi copiada.",
    "Artigo de mesmo número no ADCT não é este texto.",
    "O que o artigo não escreve não se completa de memória."
  ],
  "importance": "A banca troca o artigo vizinho, o prazo e o nome do instituto.",
  "distinctions": [
    "Permutativo não altera o patrimônio líquido.",
    "Compra a prazo credita fornecedores, não caixa.",
    "Receita e custo da mercadoria são lançamentos diferentes.",
    "Balancete fecha quando a soma dos débitos iguala a soma dos créditos."
  ],
  "organs": [
    {
      "sigla": "lanc",
      "nome": "Operações",
      "funcao": "A banca troca fornecedores com caixa e receita com custo.",
      "base": "Edital · escrituração",
      "nao": "Alíquota que a questão não deu não se inventa.",
      "tone": "yellow"
    }
  ],
  "swaps": [
    {
      "wrong": "Credita caixa.",
      "right": "Credita fornecedores."
    }
  ],
  "timeline": [
    {
      "when": "Fonte",
      "title": "Compilação conferida",
      "text": "Escrituração didática. O valor é o da questão."
    },
    {
      "when": "Limite",
      "title": "Sem invenção",
      "text": "Inciso não transcrito não foi inventado."
    }
  ],
  "articles": [
    {
      "id": "p174-lanc",
      "num": "lanc",
      "kicker": "Edital · escrituração",
      "title": "Operações",
      "lead": "Operações",
      "plate": "Operações",
      "plateSource": "Edital · escrituração",
      "devices": [
        {
          "tag": "lanc",
          "name": "Art. lanc",
          "hook": "Prazo não é caixa. Balancete fecha.",
          "literal": "Fato permutativo troca elemento do patrimônio e não altera o patrimônio líquido. Fato modificativo aumenta ou diminui o patrimônio líquido. Fato misto faz as duas coisas. Compra de mercadoria à vista: débito de mercadorias, crédito de caixa, pelo valor da compra. Compra a prazo: débito de mercadorias, crédito de fornecedores. Venda, pelo regime de competência: débito de clientes ou caixa, crédito de receita, pelo preço. O custo da mercadoria vendida é outro lançamento: débito de despesa, crédito de mercadorias. Não se misture com a receita. Folha, sem alíquota: débito de despesa de salários, crédito de salários a pagar, pelo valor que a questão der. Juros do período, se a questão der o valor: débito de despesa de juros, crédito de juros a pagar. Depreciação do período, se a questão der o valor: débito de despesa de depreciação, crédito de depreciação acumulada. Baixa do bem: tira o custo e a depreciação acumulada. O ganho ou a perda é a diferença que a questão calcular. Balancete de verificação: a soma dos débitos é igual à soma dos créditos. Se não for, o balancete não fecha. Nenhuma alíquota foi inventada. O número que a questão não deu não entra.",
          "context": "A banca troca fornecedores com caixa e receita com custo.",
          "exam": "A banca troca fornecedores com caixa e receita com custo.",
          "trap": "Alíquota que a questão não deu não se inventa.",
          "example": "Compra de 100 a prazo: débito mercadorias 100, crédito fornecedores 100.",
          "mnemonic": "Prazo não é caixa. Balancete fecha.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 174",
      "does": [
        "Ler o texto antes do comentário",
        "Separar o artigo do vizinho"
      ],
      "doesNot": [
        "Não completar lacuna",
        "Não usar número não escrito neste prompt"
      ]
    }
  ],
  "roleNote": "Questões originais, no estilo da banca. Não são prova real.",
  "rolePlate": "Texto primeiro.",
  "rolePlateSource": "Prompt 174",
  "summary": [
    {
      "item": "Permutativo",
      "rule": "Não mexe no PL.",
      "clue": "Modificativo mexe."
    },
    {
      "item": "Compra a prazo",
      "rule": "Crédito: fornecedores.",
      "clue": "Não é caixa."
    }
  ],
  "compare": [
    {
      "item": "Compra a prazo",
      "ce": "Credita caixa.",
      "cf": "Credita fornecedores.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 174011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "A compra de mercadoria a prazo debita mercadorias e credita fornecedores.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. Caixa só entra se a compra for à vista."
    },
    {
      "id": 174012,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Fato permutativo aumenta o patrimônio líquido.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Permutativo troca elementos e não altera o patrimônio líquido."
    },
    {
      "id": 174013,
      "banca": "Estilo Cebraspe · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "No balancete de verificação:",
      "correct": "b",
      "options": [
        {
          "key": "a",
          "label": "A soma dos débitos é sempre maior que a dos créditos."
        },
        {
          "key": "b",
          "label": "A soma dos débitos é igual à soma dos créditos, se não houver erro."
        },
        {
          "key": "c",
          "label": "Só entram contas de resultado."
        },
        {
          "key": "d",
          "label": "Substitui o balanço e a DRE."
        },
        {
          "key": "e",
          "label": "Não usa o método das partidas dobradas."
        }
      ],
      "comentario": "Questão original, não é prova real. A alternativa b é a prova do balancete. Ele não substitui o balanço."
    }
  ],
  "toc": [
    {
      "id": "p174-lanc",
      "num": "lanc",
      "label": "Operações"
    }
  ],
  "clocks": [],
  "organKicker": "Recorte",
  "organTitle": "Lançamentos e balancete",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a troca que a banca faz.",
  "closing": "Conferir a fonte se houver emenda posterior à compilação consultada em 21/10/2026.",
  "palette": "lime",
  "highlight": {
    "big": "1",
    "small": "artigos neste assunto"
  },
  "heroLead": "O edital pede atos e fatos, contas e a contabilização de compras, vendas, folha, juros, depreciação e baixa. O Prompt 135 já deu a equação e a depreciação linear. Este dá o lançame",
  "nextLine": "O assunto seguinte continua na mesma disciplina.",
  "closingMnemonic": "Permutativo não altera o patrimônio líquido.",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "O que a banca troca",
  "compareLead": "A coluna da esquerda é a armadilha. A da direita é o texto.",
  "compareLeft": "Armadilha",
  "compareRight": "Texto"
};
