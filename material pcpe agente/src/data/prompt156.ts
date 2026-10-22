import type { StudyModule } from "./study";

export const PROMPT156: StudyModule = {
  "short": "Escrituração e demonstrações",
  "eyebrow": "Prompt 156 · pedido 5-11",
  "title": "Escrituração e demonstrações",
  "subtitle": "plano, livros, balanço e DRE",
  "description": "O que o edital ainda pedia além do Prompt 135: plano de contas, livros, balanço como data e DRE como período. Sem número de NBC não aberto e sem alíquota inventada.",
  "reading": "Escrituração, balanço patrimonial e demonstração do resultado. NBC só pelo nome já confirmado no Prompt 135.",
  "terms": [
    "livro Diário",
    "livro Razão",
    "balanço",
    "DRE",
    "plano de contas"
  ],
  "subject": "Contabilidade",
  "context": [
    "Diário segue o tempo. Razão segue a conta.",
    "Balanço é uma data. Demonstração do resultado é um período.",
    "NBC que não foi aberta não se numera."
  ],
  "importance": "A banca troca livro, data e período, e chama plano de contas de balanço.",
  "distinctions": [
    "Diário é cronológico. Razão é por conta.",
    "Balanço é data. DRE é período.",
    "Plano de contas não é balanço.",
    "Não se numera NBC não aberta."
  ],
  "organs": [
    {
      "sigla": "1",
      "nome": "Plano, escrituração e livros",
      "funcao": "Diário é cronológico. Razão é por conta. Plano não é balanço.",
      "base": "Edital · contabilidade",
      "nao": "Não inventar alíquota nem número de norma.",
      "tone": "yellow"
    },
    {
      "sigla": "2",
      "nome": "Balanço, DRE e normas",
      "funcao": "Balanço é data. DRE é período. Balancete não é balanço.",
      "base": "Edital · contabilidade",
      "nao": "Não inventar alíquota nem número de norma.",
      "tone": "cyan"
    }
  ],
  "swaps": [
    {
      "wrong": "O Razão é o livro cronológico.",
      "right": "Cronológico é o Diário."
    },
    {
      "wrong": "Lucro da DRE é saldo de caixa.",
      "right": "DRE é desempenho do período. Caixa é outro saldo."
    },
    {
      "wrong": "Numerar NBC que não foi lida.",
      "right": "Só se cita a norma já nomeada no material."
    }
  ],
  "timeline": [
    {
      "when": "Pedido",
      "title": "5-11",
      "text": "Gravado como Prompt 156."
    },
    {
      "when": "Limite",
      "title": "Recorte",
      "text": "Escrituração, balanço patrimonial e demonstração do resultado. NBC só pelo nome já confirmado no Prompt 135."
    }
  ],
  "articles": [
    {
      "id": "p156-1",
      "num": "1",
      "kicker": "Edital · contabilidade",
      "title": "Plano, escrituração e livros",
      "lead": "Plano, escrituração e livros",
      "plate": "Plano, escrituração e livros",
      "plateSource": "Edital · contabilidade",
      "devices": [
        {
          "tag": "regra",
          "name": "Plano, escrituração e livros",
          "hook": "Diário no tempo. Razão na conta.",
          "literal": "Plano de contas é o elenco ordenado das contas que a entidade usa, com a função de cada uma. Não é o balanço. Conta sem função conhecida não se inventa.\nEscrituração é o registro dos fatos no livro. Lançamento tem data, conta debitada, conta creditada, histórico e valor. Débito e crédito têm o mesmo total. Isso já está no Prompt 135. Aqui entra o que faltava: o livro.\nLivro Diário registra os fatos em ordem cronológica. Livro Razão agrupa por conta. Um não substitui o outro. Razão não é a ordem do tempo. Diário não é o saldo da conta.\nMétodo das partidas dobradas continua obrigando igualdade. Processo manual ou eletrônico não muda a igualdade.\nRegime de competência e regime de caixa permanecem os do Prompt 135. Escriturar pelo caixa não transforma o fato em competência.\nNão se descreve lançamento para ocultar despesa ou para antecipar receita que não ocorreu.",
          "context": "Plano, escrituração e livros",
          "exam": "Diário é cronológico. Razão é por conta. Plano não é balanço.",
          "trap": "Não chame o Razão de livro cronológico.",
          "example": "Compra à vista: débito do bem ou do estoque, crédito do caixa, nos dois livros, com o mesmo valor.",
          "mnemonic": "Diário no tempo. Razão na conta.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p156-2",
      "num": "2",
      "kicker": "Edital · contabilidade",
      "title": "Balanço, DRE e normas",
      "lead": "Balanço, DRE e normas",
      "plate": "Balanço, DRE e normas",
      "plateSource": "Edital · contabilidade",
      "devices": [
        {
          "tag": "regra",
          "name": "Balanço, DRE e normas",
          "hook": "Data não é período.",
          "literal": "Balanço patrimonial é a posição em uma data. Objetivo: mostrar ativos, passivos exigíveis e patrimônio líquido. Composição usual: ativo circulante e não circulante; passivo circulante e não circulante; patrimônio líquido. A equação continua ativo = passivo exigível + patrimônio líquido.\nDemonstração do resultado é o desempenho de um período, não uma data. Começa pela receita, deduz o que o modelo da questão mandar deduzir, chega ao resultado. Lucro não é saldo de caixa.\nBalancete é a lista de saldos. Não é o balanço nem a DRE.\nNotas explicativas complementam. Não substituem o balanço.\nNormas Brasileiras de Contabilidade são as emitidas pelo CFC. A estrutura conceitual vigente é a NBC TG Estrutura Conceitual, correspondente ao CPC 00, já dita no Prompt 135. Não se numera outra NBC que não foi aberta. CPC 16, estoques, continua o do Prompt 136: não admite UEPS.\nLançamento de depreciação, juros, tributo ou provisão só se faz com o fato e o valor que a questão der. Não se invente alíquota. Depreciação não é saída de caixa. Na linguagem do CPC 25, provisão é passivo de prazo ou valor incerto. Reserva é patrimônio líquido. Prova antiga às vezes ainda chama de provisão uma conta retificadora. Sem a norma na questão, não se tratem os nomes como sinônimos. Depreciação acumulada retifica o ativo. Não é reserva.\nBaixa tira o bem ou o direito do ativo, ou extingue o passivo, conforme o fato. Não se baixe para esconder saldo.",
          "context": "Balanço, DRE e normas",
          "exam": "Balanço é data. DRE é período. Balancete não é balanço.",
          "trap": "Não numere NBC que não foi lida.",
          "example": "Posição em 31 de dezembro é balanço. Resultado de janeiro a dezembro é DRE.",
          "mnemonic": "Data não é período.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 156",
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
  "rolePlateSource": "Prompt 156",
  "summary": [
    {
      "item": "Diário",
      "rule": "Ordem do tempo.",
      "clue": "Razão é por conta."
    },
    {
      "item": "Balanço",
      "rule": "Posição em uma data.",
      "clue": "Ativo = passivo exigível + PL."
    },
    {
      "item": "DRE",
      "rule": "Desempenho do período.",
      "clue": "Não é caixa."
    },
    {
      "item": "NBC",
      "rule": "Só a já nomeada.",
      "clue": "CPC 16 não admite UEPS."
    }
  ],
  "compare": [
    {
      "item": "Diário",
      "ce": "Cronológico.",
      "cf": "Razão: por conta.",
      "effect": "separa"
    },
    {
      "item": "Balanço",
      "ce": "Uma data.",
      "cf": "DRE: um período.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 156011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O livro Razão registra os fatos em ordem cronológica, e o livro Diário agrupa os lançamentos por conta.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. A relação está invertida. Diário é cronológico. Razão é por conta."
    },
    {
      "id": 156012,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O balanço patrimonial evidencia a posição patrimonial em uma data. A demonstração do resultado evidencia o desempenho em um período.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. Data não é período. Lucro da DRE não é saldo de caixa."
    },
    {
      "id": 156013,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Sobre plano de contas e normas, está certo:",
      "correct": "b",
      "options": [
        {
          "key": "a",
          "label": "Plano de contas é o balanço patrimonial publicado."
        },
        {
          "key": "b",
          "label": "Plano de contas é o elenco ordenado das contas e de suas funções. NBC não numerada nesta sessão não se cita."
        },
        {
          "key": "c",
          "label": "UEPS é admitido pelo CPC 16 e por isso entra no plano."
        },
        {
          "key": "d",
          "label": "Balancete substitui a DRE."
        },
        {
          "key": "e",
          "label": "Depreciação é saída de caixa e se lança só no livro Razão."
        }
      ],
      "comentario": "Questão original, não é prova real. Plano não é demonstração. CPC 16 não admite UEPS. Depreciação não é caixa."
    },
    {
      "id": 156014,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Partidas dobradas deixam de exigir igualdade entre débito e crédito quando a escrituração é eletrônica.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. O meio, papel ou sistema, não muda a igualdade."
    },
    {
      "id": 156015,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Reserva e provisão são a mesma conta retificadora do ativo.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Não são a mesma conta. Reserva é patrimônio líquido. Depreciação acumulada retifica o ativo. Na linguagem do CPC 25, provisão é passivo de prazo ou valor incerto. Prova antiga pode usar o nome antigo: leia a norma que a questão citar."
    }
  ],
  "toc": [
    {
      "id": "p156-1",
      "num": "1",
      "label": "Plano, escrituração e livros"
    },
    {
      "id": "p156-2",
      "num": "2",
      "label": "Balanço, DRE e normas"
    }
  ],
  "clocks": [],
  "organKicker": "Recorte",
  "organTitle": "Escrituração e demonstrações",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a regra que ele escreve.",
  "closing": "Questões originais, no estilo da banca. Não são prova real.",
  "palette": "teal",
  "highlight": {
    "big": "2",
    "small": "blocos neste prompt"
  },
  "heroLead": "O que o edital ainda pedia além do Prompt 135: plano de contas, livros, balanço como data e DRE como período. Sem número de NBC não aberto e sem alíquota inventada.",
  "footerLine": "Prompt 156 · pedido 5-11.",
  "nextLine": "Assimetria e curtose no Prompt 157.",
  "closingMnemonic": "Texto primeiro. Número divergente segue a lei. Lacuna não se completa.",
  "rolesTitle": "Limite",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "Não misture",
  "compareLead": "Instituto vizinho não empresta requisito.",
  "compareLeft": "Um",
  "compareRight": "Outro"
};
