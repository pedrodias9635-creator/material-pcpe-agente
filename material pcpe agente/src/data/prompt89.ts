import type { StudyModule } from "./study";

export const PROMPT89: StudyModule = {
  "short": "Emergência",
  "eyebrow": "Prompt 89 · Lei nº 14.133/2021, art. 75, VIII",
  "title": "Emergência e calamidade",
  "subtitle": "um ano, sem prorrogação, e a tese do STF",
  "description": "O inciso VIII não é atalho. Há urgência, objeto limitado e prazo de um ano contado da ocorrência. A prorrogação é vedada. A recontratação tem interpretação conforme na ADI 6.890. Este prompt não ensina a fabricar emergência.",
  "reading": "Lei nº 14.133/2021, art. 75, VIII e § 6º. ADI 6.890/DF, Informativo STF nº 1149, tese fixada, relator ministro Cristiano Zanin, julgamento virtual encerrado em 06.09.2024, unanimidade.",
  "terms": [
    "emergência",
    "calamidade",
    "um ano",
    "recontratação",
    "ADI 6.890"
  ],
  "context": [
    "O inciso VII não tinha prazo. Este tem.",
    "O § 6º não substitui o inciso. Completa o que se considera emergencial.",
    "A tese não é roteiro para recontratar a mesma empresa."
  ],
  "importance": "A banca conta o ano da assinatura do contrato e trata a vedação de recontratação como absoluta, contra a tese.",
  "distinctions": [
    "O ano conta da ocorrência da emergência ou da calamidade, não da assinatura.",
    "Somente bens necessários e parcelas de obras e serviços que possam ser concluídas nesse prazo.",
    "A tese restringe a vedação de recontratação à mesma situação que extrapole um ano. Abuso continua controlável."
  ],
  "organs": [
    {
      "sigla": "VIII",
      "nome": "Emergência",
      "funcao": "Urgência que pode causar prejuízo ou comprometer continuidade ou segurança.",
      "base": "Art. 75, VIII",
      "nao": "Não é conveniência.",
      "tone": "orange"
    },
    {
      "sigla": "1 ano",
      "nome": "Prazo",
      "funcao": "Contado da ocorrência. Máximo.",
      "base": "Art. 75, VIII",
      "nao": "Não conta da assinatura.",
      "tone": "cyan"
    },
    {
      "sigla": "Veda",
      "nome": "Prorrogação",
      "funcao": "Vedada a prorrogação dos contratos deste inciso.",
      "base": "Art. 75, VIII",
      "nao": "A tese não revoga essa palavra.",
      "tone": "violet"
    },
    {
      "sigla": "ADI",
      "nome": "Recontratação",
      "funcao": "Interpretação conforme. Mesma situação que extrapole um ano.",
      "base": "ADI 6.890",
      "nao": "Não é manual de nova emergência.",
      "tone": "sky"
    },
    {
      "sigla": "§6",
      "nome": "Continuidade",
      "funcao": "Emergencial, no parágrafo, é manter o serviço público.",
      "base": "Art. 75, § 6º",
      "nao": "Não apaga o art. 23 nem a licitação que há de ser concluída.",
      "tone": "emerald"
    }
  ],
  "swaps": [
    {
      "wrong": "O prazo de um ano conta da assinatura do contrato.",
      "right": "Conta da data de ocorrência da emergência ou da calamidade."
    },
    {
      "wrong": "Qualquer obra cabe, desde que a situação seja urgente.",
      "right": "Somente os bens necessários e as parcelas que possam ser concluídas no prazo máximo de um ano."
    },
    {
      "wrong": "O contrato deste inciso pode ser prorrogado uma vez.",
      "right": "A prorrogação dos respectivos contratos é vedada."
    },
    {
      "wrong": "A vedação de recontratar é absoluta, em qualquer hipótese e por qualquer fundamento.",
      "right": "A tese da ADI 6.890 restringe a vedação à recontratação fundada na mesma situação que extrapole um ano."
    },
    {
      "wrong": "A tese autoriza fabricar uma nova emergência para manter a mesma empresa.",
      "right": "A tese admite outro fundamento legal, inclusive nova emergência, e preserva o controle de abusos. Não é método."
    },
    {
      "wrong": "Quem deu causa à emergência fica isento.",
      "right": "O § 6º manda apurar a responsabilidade de quem deu causa, sem prejuízo."
    },
    {
      "wrong": "O § 6º dispensa os valores de mercado.",
      "right": "Manda observar os valores praticados pelo mercado, na forma do art. 23."
    },
    {
      "wrong": "Emergência dispensa concluir a licitação.",
      "right": "O § 6º manda adotar providências para a conclusão do processo licitatório."
    }
  ],
  "timeline": [
    {
      "when": "Ocorrência",
      "title": "Começa o ano",
      "text": "O prazo máximo conta da emergência ou da calamidade, não do contrato."
    },
    {
      "when": "Contrato",
      "title": "Objeto estreito",
      "text": "Bens necessários e parcelas concluíveis no ano. Sem prorrogação."
    },
    {
      "when": "Depois",
      "title": "Licitação",
      "text": "O § 6º manda caminhar para a licitação. Quem causou a emergência responde."
    },
    {
      "when": "ADI",
      "title": "06.09.2024",
      "text": "Interpretação conforme. Unanimidade. Informativo 1149."
    }
  ],
  "articles": [
    {
      "id": "viii",
      "num": "VIII",
      "kicker": "Art. 75",
      "title": "Emergência e calamidade",
      "lead": "Urgência real, objeto curto, ano da ocorrência.",
      "plate": "Vedada a prorrogação.",
      "plateSource": "Art. 75, VIII",
      "devices": [
        {
          "tag": "VIII",
          "name": "O inciso",
          "hook": "Urgência, objeto e ano.",
          "literal": "É dispensável a licitação nos casos de emergência ou de calamidade pública, quando caracterizada urgência de atendimento de situação que possa ocasionar prejuízo ou comprometer a continuidade dos serviços públicos ou a segurança de pessoas, obras, serviços, equipamentos e outros bens, públicos ou particulares, e somente para aquisição dos bens necessários ao atendimento da situação emergencial ou calamitosa e para as parcelas de obras e serviços que possam ser concluídas no prazo máximo de 1 (um) ano, contado da data de ocorrência da emergência ou da calamidade, vedadas a prorrogação dos respectivos contratos e a recontratação de empresa já contratada com base no disposto neste inciso.",
          "context": "Públicos ou particulares estão na segurança e nos bens. O objeto da contratação direta não fica livre por isso.",
          "exam": "A banca conta o ano do instrumento.",
          "trap": "Não ensine a declarar emergência para evitar licitação.",
          "example": "Uma enchente que compromete o serviço pode abrir o inciso, para o bem necessário e para a parcela concluível no ano. A obra inteira de três anos, não.",
          "mnemonic": "Ocorrência, não assinatura. Sem prorrogação."
        },
        {
          "tag": "ADI",
          "name": "Tese",
          "hook": "Duas frases. Sem método.",
          "literal": "Informativo STF nº 1149, ADI 6.890/DF, relator ministro Cristiano Zanin, julgamento virtual encerrado em 06.09.2024, Plenário, unanimidade, interpretação conforme. Tese: 1. É constitucional a vedação à recontratação de empresa contratada diretamente por dispensa de licitação nos casos de emergência ou calamidade pública, prevista no inciso VIII do art. 75 da Lei nº 14.133/2021. 2. A vedação incide na recontratação fundada na mesma situação emergencial ou calamitosa que extrapole o prazo máximo legal de 1 (um) ano, e não impede que a empresa participe de eventual licitação substitutiva à dispensa de licitação e seja contratada diretamente por outro fundamento previsto em lei, incluindo uma nova emergência ou calamidade pública, sem prejuízo do controle de abusos ou ilegalidades na aplicação da norma.",
          "context": "A tese não apaga a vedação. Restringe o alcance. Controle de abuso permanece.",
          "exam": "A banca diz que a ADI revogou o inciso.",
          "trap": "Não use nova emergência como nome para a mesma situação.",
          "example": "A empresa pode disputar a licitação que substitui a dispensa. Recontratar pela mesma emergência, além do ano, é o que a vedação alcança.",
          "mnemonic": "Vedação constitucional, no limite da tese."
        },
        {
          "tag": "§6",
          "name": "O que é emergencial",
          "hook": "Continuidade, mercado e licitação.",
          "literal": "Art. 75, § 6º: para os fins do inciso VIII, considera-se emergencial a contratação por dispensa com objetivo de manter a continuidade do serviço público, e deverão ser observados os valores praticados pelo mercado na forma do art. 23 desta Lei e adotadas as providências necessárias para a conclusão do processo licitatório, sem prejuízo de apuração de responsabilidade dos agentes públicos que deram causa à situação emergencial.",
          "context": "O parágrafo não reescreve o ano nem a vedação de prorrogação. O art. 23 não é reaberto.",
          "exam": "A banca lê o § 6º como dispensa permanente do serviço.",
          "trap": "Quem causou a emergência não se esconde no parágrafo.",
          "example": "Manter o serviço até a licitação caber no parágrafo. Adiar a licitação de propósito, não.",
          "mnemonic": "Continuidade, mercado, concluir a licitação, apurar."
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Administração",
      "source": "Art. 75, VIII e § 6º",
      "does": [
        "Limitar o objeto",
        "Contar o ano da ocorrência",
        "Caminhar para a licitação"
      ],
      "doesNot": [
        "Não prorroga o contrato deste inciso",
        "Não fabrica a emergência"
      ]
    },
    {
      "role": "Empresa já contratada",
      "source": "ADI 6.890",
      "does": [
        "Pode participar da licitação substitutiva",
        "Pode ser contratada por outro fundamento legal"
      ],
      "doesNot": [
        "Não se recontrata pela mesma emergência além do ano"
      ]
    },
    {
      "role": "Quem deu causa",
      "source": "Art. 75, § 6º",
      "does": [
        "Pode ter a responsabilidade apurada"
      ],
      "doesNot": [
        "A apuração não é a própria dispensa"
      ]
    }
  ],
  "roleNote": "A tese não é técnica de recontratação.",
  "rolePlate": "Ano da ocorrência. Sem prorrogação.",
  "rolePlateSource": "Art. 75, VIII",
  "summary": [
    {
      "item": "Porta",
      "rule": "Emergência ou calamidade, com urgência caracterizada.",
      "clue": "Prejuízo, continuidade ou segurança."
    },
    {
      "item": "Objeto",
      "rule": "Bens necessários e parcelas concluíveis no ano.",
      "clue": "Somente."
    },
    {
      "item": "Ano",
      "rule": "Da ocorrência.",
      "clue": "Não da assinatura."
    },
    {
      "item": "Prorrogação",
      "rule": "Vedada.",
      "clue": "A palavra permanece."
    },
    {
      "item": "Tese 1",
      "rule": "A vedação é constitucional.",
      "clue": "ADI 6.890."
    },
    {
      "item": "Tese 2",
      "rule": "Mesma situação que extrapole um ano.",
      "clue": "Licitação substitutiva não está vedada."
    },
    {
      "item": "Abuso",
      "rule": "Continua controlável.",
      "clue": "Nova emergência não é rótulo."
    },
    {
      "item": "§ 6º",
      "rule": "Mercado, concluir a licitação, apurar quem causou.",
      "clue": "Art. 23 não se reabre."
    }
  ],
  "compare": [
    {
      "item": "Contagem",
      "ce": "Da ocorrência.",
      "cf": "Não da assinatura.",
      "effect": "restringe"
    },
    {
      "item": "Prorrogação",
      "ce": "Vedada no inciso.",
      "cf": "A tese não a transforma em regra.",
      "effect": "restringe"
    },
    {
      "item": "Recontratação",
      "ce": "Vedada na mesma situação além do ano.",
      "cf": "Outro fundamento legal não é essa vedação.",
      "effect": "separa"
    },
    {
      "item": "§ 6º",
      "ce": "Caminha para a licitação.",
      "cf": "Não perpetua a dispensa.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 89011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "No art. 75, VIII, o prazo de um ano conta-se da assinatura do contrato, e a prorrogação é admitida uma vez, por igual período.",
      "correct": "E",
      "comentario": "ERRADO. O ano conta da ocorrência da emergência ou da calamidade. A prorrogação dos contratos deste inciso é vedada."
    },
    {
      "id": 89012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Pela tese da ADI 6.890, a vedação de recontratar",
      "correct": "d",
      "comentario": "A tese 2 limita a vedação à mesma situação que extrapole um ano e não impede a licitação substitutiva nem outro fundamento legal. O controle de abuso permanece.",
      "options": [
        {
          "key": "a",
          "label": "foi declarada inconstitucional e retirada do inciso."
        },
        {
          "key": "b",
          "label": "impede a empresa de participar da licitação que substitui a dispensa."
        },
        {
          "key": "c",
          "label": "autoriza manter a mesma empresa na mesma emergência, além de um ano, se o preço for bom."
        },
        {
          "key": "d",
          "label": "incide na recontratação fundada na mesma situação emergencial ou calamitosa que extrapole um ano, sem impedir outro fundamento legal nem o controle de abusos."
        },
        {
          "key": "e",
          "label": "conta o ano da assinatura do contrato."
        }
      ]
    },
    {
      "id": 89013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O § 6º do art. 75 determina, para a emergência do inciso VIII,",
      "correct": "b",
      "comentario": "Continuidade do serviço, valores de mercado na forma do art. 23, providências para concluir a licitação e apuração de quem deu causa.",
      "options": [
        {
          "key": "a",
          "label": "dispensa de observar o mercado e de concluir a licitação."
        },
        {
          "key": "b",
          "label": "observar os valores de mercado na forma do art. 23, adotar providências para concluir a licitação e apurar quem deu causa à emergência."
        },
        {
          "key": "c",
          "label": "prorrogação automática por mais um ano."
        },
        {
          "key": "d",
          "label": "que a emergência seja decretada pelo Ministro da Defesa."
        },
        {
          "key": "e",
          "label": "isenção de responsabilidade de quem causou a situação."
        }
      ]
    }
  ],
  "palette": "leaf",
  "highlight": {
    "big": "Da ocorrência",
    "small": "não da assinatura"
  },
  "heroLead": "Emergência não dispensa o ano, o objeto estreito nem a licitação que há de vir. A tese não ensina a recontratar.",
  "footerLine": "Inciso VIII e § 6º lidos. A tese da ADI 6.890 não é método.",
  "nextLine": "Diga continue para o Prompt 90: art. 75, incisos IX a XIV.",
  "closingMnemonic": "Ano da ocorrência. Sem prorrogação. Mesma emergência, além do ano, não se repete. Abuso se controla.",
  "clocks": [
    {
      "value": "1 ano",
      "label": "Máximo, contado da ocorrência, sem prorrogação do contrato",
      "source": "Art. 75, VIII"
    }
  ],
  "subject": "Direito Administrativo",
  "rolesTitle": "Quem a norma nomeia",
  "rolesLead": "O nome do órgão não se empresta.",
  "compareTitle": "A trava",
  "compareLead": "Generalizar a hipótese é o erro.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "toc": [
    {
      "id": "viii",
      "num": "VIII",
      "label": "Emergência e calamidade"
    }
  ]
};
