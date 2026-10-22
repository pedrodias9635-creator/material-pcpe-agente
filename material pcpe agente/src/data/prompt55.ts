import type { StudyModule } from "./study";

export const PROMPT55: StudyModule = {
  "short": "Dispensa I a III",
  "eyebrow": "Prompt 55 de 86 · Lei 14.133/2021, art. 75, I a III",
  "title": "Dispensa por valor e licitação anterior",
  "subtitle": "limites atualizados à parte do texto legal",
  "description": "Dispensa não é inexigibilidade. Nos incisos I e II a competição é possível, mas o valor fica abaixo do limite. O inciso III reaproveita licitação de menos de um ano, com todas as condições do edital. As alíneas do inciso IV não entram.",
  "reading": "Lei nº 14.133/2021, art. 75, I, II e III. Valores correntes: Decreto nº 12.807/2025, em vigor em 1º/01/2026, art. 75, I, R$ 130.984,20, e art. 75, II, R$ 65.492,11. O texto legal ainda escreve R$ 100.000,00 e R$ 50.000,00. Esses números não são o valor vigente.",
  "terms": [
    "dispensa",
    "valor",
    "licitação deserta",
    "preço superior",
    "menos de um ano"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "Inexigibilidade ficou no art. 74. Não chame estes incisos de inviabilidade.",
    "O limite de obras não serve para compras em geral.",
    "O inciso III não é convite para repetir licitação fracassada sem manter as condições do edital."
  ],
  "importance": "A banca usa o valor escrito na lei como se o decreto não existisse, e trata inferior a como até.",
  "distinctions": [
    "Inciso I: obras, serviços de engenharia ou manutenção de veículos. Inciso II: outros serviços e compras.",
    "O texto legal diz inferiores a. Igual ao limite não está na frase.",
    "O valor vigente não é o que a lei escreveu em 2021.",
    "Inciso III: licitação há menos de um ano, não até um ano, e todas as condições do edital."
  ],
  "organs": [
    {
      "sigla": "I",
      "nome": "Engenharia",
      "funcao": "Obras, serviços de engenharia ou manutenção de veículos.",
      "base": "Art. 75, I",
      "nao": "Não é o limite de compras.",
      "tone": "orange"
    },
    {
      "sigla": "II",
      "nome": "Compras",
      "funcao": "Outros serviços e compras.",
      "base": "Art. 75, II",
      "nao": "Não use o teto do inciso I.",
      "tone": "cyan"
    },
    {
      "sigla": "III",
      "nome": "Licitação anterior",
      "funcao": "Menos de um ano e todas as condições do edital.",
      "base": "Art. 75, III",
      "nao": "Não é uma dispensa por valor.",
      "tone": "violet"
    },
    {
      "sigla": "A",
      "nome": "Deserta ou inválida",
      "funcao": "Não surgiram interessados ou não houve proposta válida.",
      "base": "Art. 75, III, a",
      "nao": "Não dispense a manutenção das condições.",
      "tone": "emerald"
    },
    {
      "sigla": "B",
      "nome": "Preço excessivo",
      "funcao": "Proposta manifestamente superior ao mercado ou incompatível com o órgão oficial.",
      "base": "Art. 75, III, b",
      "nao": "Preço alto, sozinho, não apaga o requisito do edital anterior.",
      "tone": "yellow"
    },
    {
      "sigla": "DEC",
      "nome": "Decreto",
      "funcao": "Atualiza o valor. Não reescreve o inciso.",
      "base": "Decreto nº 12.807/2025",
      "nao": "Não devolva R$ 100.000,00 nem R$ 50.000,00 como se fossem atuais.",
      "tone": "sky"
    }
  ],
  "swaps": [
    {
      "wrong": "O inciso I vale para qualquer compra até o teto de engenharia.",
      "right": "Compras em geral estão no inciso II, com outro limite."
    },
    {
      "wrong": "R$ 100.000,00 e R$ 50.000,00 ainda são os tetos.",
      "right": "São os valores escritos na lei. O decreto vigente os atualizou."
    },
    {
      "wrong": "Inferiores a inclui o valor igual ao limite.",
      "right": "A frase é inferiores a. Igual não entra."
    },
    {
      "wrong": "O inciso III aceita licitação de um ano, inclusive.",
      "right": "O texto diz há menos de 1 ano."
    },
    {
      "wrong": "No inciso III basta repetir o objeto, ainda que o edital mude.",
      "right": "É preciso manter todas as condições definidas no edital."
    },
    {
      "wrong": "Dispensa por valor é inexigibilidade.",
      "right": "A competição é possível. A lei é que dispensa."
    },
    {
      "wrong": "O quarto do art. 70 usa estes mesmos reais.",
      "right": "O art. 70, III, não se recalcula aqui. Já foi fechado no Prompt 51."
    },
    {
      "wrong": "As alíneas do inciso IV entram neste prompt.",
      "right": "Elas ficam no Prompt 56."
    }
  ],
  "timeline": [
    {
      "when": "Lei",
      "title": "Texto de 2021",
      "text": "Inciso I escreve R$ 100.000,00. Inciso II escreve R$ 50.000,00."
    },
    {
      "when": "Decreto",
      "title": "12.807/2025",
      "text": "Em vigor em 1º/01/2026. Atualiza os dois incisos."
    },
    {
      "when": "I vigente",
      "title": "R$ 130.984,20",
      "text": "Obras, engenharia ou manutenção de veículos. Inferior a esse valor."
    },
    {
      "when": "II vigente",
      "title": "R$ 65.492,11",
      "text": "Outros serviços e compras. Inferior a esse valor."
    }
  ],
  "articles": [
    {
      "id": "art75i",
      "num": "75",
      "kicker": "Seção III",
      "title": "Dispensa, I a III",
      "lead": "Três hipóteses só. O inciso IV fica de fora.",
      "plate": "Inferior a. Não igual.",
      "plateSource": "Art. 75, I e II",
      "devices": [
        {
          "tag": "I-II",
          "name": "Valor",
          "hook": "Dois tetos, dois objetos.",
          "literal": "É dispensável a licitação: I - para contratação que envolva valores inferiores a R$ 100.000,00 (cem mil reais), no caso de obras e serviços de engenharia ou de serviços de manutenção de veículos automotores; II - para contratação que envolva valores inferiores a R$ 50.000,00 (cinquenta mil reais), no caso de outros serviços e compras. Esses são os valores escritos na lei, ambos com marca de atualização. O Decreto nº 12.807/2025, em vigor em 1º/01/2026, atualiza o inciso I para R$ 130.984,20 e o inciso II para R$ 65.492,11.",
          "context": "O decreto não muda a palavra inferiores a nem troca o objeto de cada inciso.",
          "exam": "A banca soma os dois tetos ou usa o de engenharia para compra comum.",
          "trap": "Não ensine a fatiar a contratação para caber no limite. O artigo não é um método.",
          "example": "Uma obra abaixo de R$ 130.984,20 pode estar no inciso I. Uma compra do mesmo valor numérico não migra para o inciso I.",
          "mnemonic": "Objeto certo, valor inferior, cifra do decreto."
        },
        {
          "tag": "III",
          "name": "Licitação anterior",
          "hook": "Menos de um ano e o mesmo edital.",
          "literal": "É dispensável a licitação para contratação que mantenha todas as condições definidas em edital de licitação realizada há menos de 1 (um) ano, quando se verificar que naquela licitação: a) não surgiram licitantes interessados ou não foram apresentadas propostas válidas; b) as propostas apresentadas consignaram preços manifestamente superiores aos praticados no mercado ou incompatíveis com os fixados pelos órgãos oficiais competentes.",
          "context": "A alínea a junta duas falhas com ou. A alínea b é outra verificação. O texto não diz que a e b precisam ocorrer juntas.",
          "exam": "A banca lê há menos de um ano como até um ano.",
          "trap": "Manter todas as condições não autoriza reeditar o edital por baixo.",
          "example": "Licitação sem proposta válida, feita há onze meses, com o mesmo edital, pode abrir a alínea a. A de um ano completo não está na frase.",
          "mnemonic": "Menos de um ano. Todas as condições."
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Administração",
      "source": "Art. 75, I e II",
      "does": [
        "Conferir o objeto",
        "Usar o valor do decreto vigente",
        "Parar no inferior a"
      ],
      "doesNot": [
        "Não usa o número de 2021 como teto atual",
        "Não fatia o objeto para caber"
      ]
    },
    {
      "role": "Licitação anterior",
      "source": "Art. 75, III",
      "does": [
        "Ter menos de um ano",
        "Ser mantida em todas as condições"
      ],
      "doesNot": [
        "Não se reaproveita com edital novo",
        "Não se confunde com dispensa por valor"
      ]
    },
    {
      "role": "Decreto",
      "source": "Decreto nº 12.807/2025",
      "does": [
        "Atualizar a cifra",
        "Não reescrever o inciso"
      ],
      "doesNot": [
        "Não é a própria lei",
        "Não atualiza, neste prompt, o inciso IV"
      ]
    }
  ],
  "roleNote": "Valor de lei e valor vigente não se misturam.",
  "rolePlate": "Inferior a, objeto certo.",
  "rolePlateSource": "Art. 75, I e II",
  "summary": [
    {
      "item": "Natureza",
      "rule": "Dispensável, não inexigível.",
      "clue": "Competição possível."
    },
    {
      "item": "I legal",
      "rule": "R$ 100.000,00 escritos na lei.",
      "clue": "Não é o teto vigente."
    },
    {
      "item": "I vigente",
      "rule": "R$ 130.984,20.",
      "clue": "Engenharia ou manutenção de veículos."
    },
    {
      "item": "II legal",
      "rule": "R$ 50.000,00 escritos na lei.",
      "clue": "Não é o teto vigente."
    },
    {
      "item": "II vigente",
      "rule": "R$ 65.492,11.",
      "clue": "Outros serviços e compras."
    },
    {
      "item": "Igualdade",
      "rule": "A frase é inferiores a.",
      "clue": "O valor igual fica de fora."
    },
    {
      "item": "III",
      "rule": "Menos de um ano.",
      "clue": "Todas as condições do edital."
    },
    {
      "item": "III, a e b",
      "rule": "Sem interessado ou sem proposta válida; ou preço manifestamente superior.",
      "clue": "Não exige as duas verificações juntas."
    }
  ],
  "compare": [
    {
      "item": "Objeto",
      "ce": "I: engenharia ou veículo.",
      "cf": "II: outros serviços e compras.",
      "effect": "separa"
    },
    {
      "item": "Cifra",
      "ce": "Lei: 100 mil e 50 mil.",
      "cf": "Decreto de 2025: 130.984,20 e 65.492,11.",
      "effect": "separa"
    },
    {
      "item": "Limite",
      "ce": "Inferiores a.",
      "cf": "Igual ao teto não está escrito.",
      "effect": "restringe"
    },
    {
      "item": "III",
      "ce": "Licitação anterior.",
      "cf": "Não é dispensa por valor.",
      "effect": "separa"
    },
    {
      "item": "Prazo do III",
      "ce": "Há menos de um ano.",
      "cf": "Não é até um ano.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 55011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Para compras em geral, a dispensa do art. 75, II, da Lei nº 14.133/2021 continua limitada a R$ 50.000,00, valor que inclui a contratação de valor igual ao limite.",
      "correct": "E",
      "comentario": "ERRADO. R$ 50.000,00 é o valor escrito na lei, não o vigente. O Decreto nº 12.807/2025 atualiza o inciso II para R$ 65.492,11. E a frase legal é inferiores a, não iguais a."
    },
    {
      "id": 55012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Assinale a alternativa correta sobre o art. 75, I a III, da Lei nº 14.133/2021.",
      "correct": "c",
      "comentario": "O inciso I vigente, pelo decreto em vigor em 1º/01/2026, é R$ 130.984,20, só para o objeto do inciso. O inciso III exige menos de um ano e todas as condições do edital. Dispensa não é inexigibilidade.",
      "options": [
        {
          "key": "a",
          "label": "o limite de obras e engenharia também serve para compras em geral."
        },
        {
          "key": "b",
          "label": "a contratação de valor exatamente igual a R$ 130.984,20 cabe no inciso I, porque inferior a inclui a igualdade."
        },
        {
          "key": "c",
          "label": "o inciso III exige licitação realizada há menos de um ano e a manutenção de todas as condições do edital."
        },
        {
          "key": "d",
          "label": "o inciso III dispensa a licitação anterior quando o preço novo for mais cômodo."
        },
        {
          "key": "e",
          "label": "os incisos I e II são casos de inexigibilidade por inviabilidade de competição."
        }
      ]
    },
    {
      "id": 55013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O Decreto nº 12.807/2025, em vigor em 1º/01/2026, no que este prompt usa,",
      "correct": "a",
      "comentario": "O decreto atualiza a cifra. Não muda o objeto do inciso nem a palavra inferiores a. O inciso IV não é atualizado neste prompt.",
      "options": [
        {
          "key": "a",
          "label": "atualiza o art. 75, I, para R$ 130.984,20 e o art. 75, II, para R$ 65.492,11, sem transformar esses valores em teto de objeto diverso."
        },
        {
          "key": "b",
          "label": "revoga a palavra inferiores a e passa a admitir o valor igual."
        },
        {
          "key": "c",
          "label": "unifica os dois incisos em R$ 392.952,63."
        },
        {
          "key": "d",
          "label": "aplica o teto de compras em geral às obras."
        },
        {
          "key": "e",
          "label": "dispensa a licitação anterior do inciso III de manter as condições do edital."
        }
      ]
    }
  ],
  "palette": "ember",
  "highlight": {
    "big": "R$ 65.492,11",
    "small": "compras, inferior a"
  },
  "heroLead": "O valor escrito na lei não é o valor vigente. O objeto de cada inciso também não se empresta.",
  "footerLine": "Incisos I a III lidos. O inciso IV não entrou.",
  "nextLine": "Diga continue para o Prompt 56: art. 75, inciso IV, alíneas a a f. O restante do inciso e os artigos seguintes não entram nesse anúncio.",
  "closingMnemonic": "Engenharia, 130.984,20. Compras, 65.492,11. Sempre inferior a. Licitação anterior: menos de um ano.",
  "rolesTitle": "Quem aplica o teto",
  "rolesLead": "Decreto atualiza cifra. Não troca o inciso.",
  "compareTitle": "Lei e decreto",
  "compareLead": "Os dois números convivem. Só um é o vigente.",
  "compareLeft": "Texto da lei",
  "compareRight": "Decreto vigente",
  "clocks": [
    {
      "value": "menos de 1 ano",
      "label": "Licitação anterior do inciso III",
      "source": "Art. 75, III"
    },
    {
      "value": "R$ 130.984,20",
      "label": "Teto vigente do inciso I, inferior a",
      "source": "Decreto nº 12.807/2025"
    },
    {
      "value": "R$ 65.492,11",
      "label": "Teto vigente do inciso II, inferior a",
      "source": "Decreto nº 12.807/2025"
    }
  ],
  "toc": [
    {
      "id": "art75i",
      "num": "75",
      "label": "Dispensa, I a III"
    }
  ]
};
