import type { StudyModule } from "./study";

export const PROMPT93: StudyModule = {
  "short": "Alienação de imóvel",
  "eyebrow": "Prompt 93 · Lei nº 14.133/2021, art. 76, imóvel",
  "title": "Alienação de imóvel",
  "subtitle": "interesse, avaliação, leilão",
  "description": "Alienar bem público exige interesse público justificado e avaliação. Imóvel, em regra, pede autorização legislativa e leilão. A dispensa de licitação está nas alíneas. A metade da permuta, no texto, é do imóvel ofertado pela União. Lei citada de regularização não foi aberta.",
  "reading": "Lei nº 14.133/2021, art. 76, caput, inciso I e alíneas a a j, e §§ 1º e 2º. Limites da Lei nº 11.952/2009, da Lei nº 6.383/1976 e da Lei nº 13.465/2017 não foram transcritos.",
  "terms": [
    "leilão",
    "autorização legislativa",
    "doação",
    "permuta",
    "investidura"
  ],
  "context": [
    "Móvel fica no Prompt 94. Preferência do ocupante, no art. 77, também.",
    "Doação a particular não é a regra da alínea b.",
    "Avaliação não se dispensa porque houve interesse político."
  ],
  "importance": "A banca dispensa autorização legislativa em todo imóvel e estende a metade da permuta ao Estado.",
  "distinctions": [
    "Caput: interesse justificado e avaliação, antes das normas.",
    "Inciso I: autorização legislativa e leilão, salvo as alíneas.",
    "Alínea c escreve União. Não troque por qualquer ente.",
    "Alínea g escreve até 250 m². Não arredonde."
  ],
  "organs": [
    {
      "sigla": "Caput",
      "nome": "Porta",
      "funcao": "Interesse justificado e avaliação.",
      "base": "Art. 76, caput",
      "nao": "Não aliena por conveniência solta.",
      "tone": "cyan"
    },
    {
      "sigla": "I",
      "nome": "Imóvel",
      "funcao": "Autorização legislativa e leilão.",
      "base": "Art. 76, I",
      "nao": "A dispensa está nas alíneas, não na regra.",
      "tone": "orange"
    },
    {
      "sigla": "b",
      "nome": "Doação",
      "funcao": "Só para outro órgão ou entidade, qualquer esfera, salvo f, g e h.",
      "base": "Art. 76, I, b",
      "nao": "Particular não é a regra.",
      "tone": "emerald"
    },
    {
      "sigla": "c",
      "nome": "Permuta",
      "funcao": "Diferença até a metade do imóvel ofertado pela União.",
      "base": "Art. 76, I, c",
      "nao": "O texto diz União.",
      "tone": "violet"
    },
    {
      "sigla": "g",
      "nome": "250 m²",
      "funcao": "Comercial local, regularização social.",
      "base": "Art. 76, I, g",
      "nao": "Acima de 250 m² não está na alínea.",
      "tone": "sky"
    },
    {
      "sigla": "§1",
      "nome": "Judicial",
      "funcao": "Dação ou aquisição judicial dispensa autorização, não o leilão.",
      "base": "Art. 76, § 1º",
      "nao": "Avaliação prévia permanece.",
      "tone": "yellow"
    }
  ],
  "swaps": [
    {
      "wrong": "Todo imóvel público se aliena sem autorização legislativa.",
      "right": "A regra é autorização legislativa e leilão. A dispensa está nas alíneas."
    },
    {
      "wrong": "Doação de imóvel a particular é a alínea b.",
      "right": "A alínea b é exclusivamente para outro órgão ou entidade da Administração, de qualquer esfera, salvo f, g e h."
    },
    {
      "wrong": "A metade da permuta vale para imóvel de qualquer ente.",
      "right": "A alínea c escreve o imóvel que será ofertado pela União."
    },
    {
      "wrong": "Área comercial de 300 m² cabe na alínea g.",
      "right": "A alínea escreve até 250 m²."
    },
    {
      "wrong": "Investidura e venda a outro órgão são a mesma alínea.",
      "right": "Investidura é a d. Venda a outro órgão ou entidade é a e."
    },
    {
      "wrong": "Imóvel de procedimento judicial dispensa leilão.",
      "right": "O § 1º dispensa autorização legislativa e exige avaliação prévia e leilão."
    },
    {
      "wrong": "Imóvel doado pode ser vendido pelo donatário.",
      "right": "Cessada a razão, reverte, e é vedada a alienação pelo beneficiário."
    },
    {
      "wrong": "O limite de hectares da Lei nº 11.952 foi transcrito.",
      "right": "A alínea h só cita o § 1º do art. 6º. Não aberto."
    }
  ],
  "timeline": [
    {
      "when": "1",
      "title": "Interesse e avaliação",
      "text": "Sem os dois, o caput não abre."
    },
    {
      "when": "2",
      "title": "Leilão",
      "text": "Regra do imóvel. Dispensa só na alínea."
    },
    {
      "when": "3",
      "title": "Se doar",
      "text": "Reverte quando a razão cessa. O beneficiário não aliena."
    }
  ],
  "articles": [
    {
      "id": "a76i",
      "num": "76",
      "kicker": "Capítulo IX",
      "title": "Imóvel",
      "lead": "Regra estreita. Alínea não se generaliza.",
      "plate": "Leilão, salvo alínea.",
      "plateSource": "Art. 76, I",
      "devices": [
        {
          "tag": "caput-I",
          "name": "Regra",
          "hook": "Justificar, avaliar, autorizar, leiloar.",
          "literal": "Art. 76, caput: a alienação de bens da Administração Pública, subordinada à existência de interesse público devidamente justificado, será precedida de avaliação e obedecerá às seguintes normas. Inciso I: tratando-se de bens imóveis, inclusive os pertencentes às autarquias e fundações, exigirá autorização legislativa e dependerá de licitação na modalidade leilão, dispensada a licitação nos casos das alíneas.",
          "context": "Inclusive autarquia e fundação. A autorização não é só do ente político central.",
          "exam": "A banca tira a avaliação porque houve lei autorizativa.",
          "trap": "Interesse não justificado não abre o caput.",
          "example": "Vender sede da polícia, se for imóvel público, não foge da avaliação nem, na regra, do leilão.",
          "mnemonic": "Justifica. Avalia. Em regra, lei e leilão."
        },
        {
          "tag": "a-e",
          "name": "Primeiras dispensas",
          "hook": "Doação não é particular.",
          "literal": "Alínea a: dação em pagamento. Alínea b: doação, permitida exclusivamente para outro órgão ou entidade da Administração Pública, de qualquer esfera de governo, ressalvado o disposto nas alíneas f, g e h. Alínea c: permuta por outros imóveis que atendam às finalidades precípuas da Administração, desde que a diferença apurada não ultrapasse a metade do valor do imóvel que será ofertado pela União, segundo avaliação prévia, e ocorra a torna de valores, sempre que for o caso. Alínea d: investidura. Alínea e: venda a outro órgão ou entidade da Administração Pública de qualquer esfera de governo.",
          "context": "Metade, não o valor inteiro. União, na frase da diferença. Torna, sempre que for o caso.",
          "exam": "A banca lê metade como valor total.",
          "trap": "Não use doação para particular com a alínea b.",
          "example": "Permuta com diferença acima da metade do imóvel da União não está na alínea c.",
          "mnemonic": "Exclusivamente órgão. Metade. União."
        },
        {
          "tag": "f-j",
          "name": "Programas e leis citadas",
          "hook": "250 m² está. Hectare, não.",
          "literal": "Alínea f: alienação gratuita ou onerosa, aforamento, concessão de direito real de uso, locação e permissão de uso de imóveis residenciais construídos, destinados ou efetivamente usados em programas de habitação ou de regularização fundiária de interesse social desenvolvidos por órgão ou entidade da Administração. Alínea g: o mesmo feixe, para imóveis comerciais de âmbito local, com área de até 250 m², destinados a programas de regularização fundiária de interesse social desenvolvidos por órgão ou entidade da Administração. Alínea h: terras públicas rurais da União e do Incra, até o limite do § 1º do art. 6º da Lei nº 11.952/2009, não aberto. Alínea i: legitimação de posse da Lei nº 6.383/1976, art. 29, não aberto. Alínea j: legitimação da Lei nº 13.465/2017, não aberta.",
          "context": "Até 250 m². Igual a 250 entra. 251 não. As leis citadas não foram lidas.",
          "exam": "A banca inventa o módulo rural.",
          "trap": "Não complete hectare de memória.",
          "example": "Comercial local de 200 m², em programa de regularização social, pode estar na g. O de 400 m², não.",
          "mnemonic": "250 escrito. Limite citado, não aberto."
        },
        {
          "tag": "§1-2",
          "name": "Judicial e reversão",
          "hook": "Leilão fica. Venda do donatário, não.",
          "literal": "§ 1º: a alienação de imóveis cuja aquisição tenha derivado de procedimentos judiciais ou de dação em pagamento dispensará autorização legislativa e exigirá apenas avaliação prévia e licitação na modalidade leilão. § 2º: os imóveis doados com base na alínea b, cessadas as razões que justificaram a doação, serão revertidos ao patrimônio da pessoa jurídica doadora, vedada a alienação pelo beneficiário.",
          "context": "Apenas, no § 1º, não dispensa avaliação nem leilão. Vedada, no § 2º, é a alienação pelo beneficiário.",
          "exam": "A banca deixa o donatário vender.",
          "trap": "Reversão não é faculdade quando a razão cessa.",
          "example": "Imóvel de dação ainda vai a leilão. Imóvel doado a outro órgão volta se a razão acaba, e o beneficiário não o vende.",
          "mnemonic": "Judicial não é sem leilão. Doado não se vende."
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Legislativo",
      "source": "Art. 76, I",
      "does": [
        "Autorizar a alienação de imóvel, na regra"
      ],
      "doesNot": [
        "Não autoriza, sozinho, pular a avaliação"
      ]
    },
    {
      "role": "União",
      "source": "Art. 76, I, c",
      "does": [
        "Ofertar o imóvel cujo valor limita a diferença da permuta"
      ],
      "doesNot": [
        "A frase não escreve o Estado no lugar da União"
      ]
    },
    {
      "role": "Donatário da alínea b",
      "source": "Art. 76, § 2º",
      "does": [
        "Receber enquanto a razão durar"
      ],
      "doesNot": [
        "Não aliena o imóvel",
        "Devolve se a razão cessa"
      ]
    }
  ],
  "roleNote": "Lei citada de terra não foi aberta. Não invente hectare.",
  "rolePlate": "Avalia. Em regra, leiloa.",
  "rolePlateSource": "Art. 76",
  "summary": [
    {
      "item": "Caput",
      "rule": "Interesse justificado e avaliação.",
      "clue": "Antes da modalidade."
    },
    {
      "item": "Imóvel",
      "rule": "Autorização legislativa e leilão.",
      "clue": "Inclusive autarquia e fundação."
    },
    {
      "item": "b",
      "rule": "Doação só a órgão ou entidade.",
      "clue": "Salvo f, g e h."
    },
    {
      "item": "c",
      "rule": "Diferença até a metade.",
      "clue": "Imóvel ofertado pela União."
    },
    {
      "item": "g",
      "rule": "Até 250 m².",
      "clue": "Comercial local, regularização social."
    },
    {
      "item": "h, i, j",
      "rule": "Citam outras leis.",
      "clue": "Não abertas."
    },
    {
      "item": "§ 1º",
      "rule": "Judicial ou dação: sem autorização.",
      "clue": "Avaliação e leilão ficam."
    },
    {
      "item": "§ 2º",
      "rule": "Reverte. Beneficiário não aliena.",
      "clue": "Quando a razão cessa."
    }
  ],
  "compare": [
    {
      "item": "Regra",
      "ce": "Lei e leilão.",
      "cf": "Alínea dispensa a licitação, não a avaliação do caput.",
      "effect": "restringe"
    },
    {
      "item": "b",
      "ce": "Órgão ou entidade.",
      "cf": "Particular não é a regra.",
      "effect": "restringe"
    },
    {
      "item": "c",
      "ce": "União, metade.",
      "cf": "Não é qualquer ente, nem o valor cheio.",
      "effect": "restringe"
    },
    {
      "item": "§ 1º",
      "ce": "Sem autorização.",
      "cf": "Com leilão.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 93011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "A alienação de imóvel da Administração dispensa avaliação quando houver autorização legislativa, e a doação da alínea b pode ser feita a particular.",
      "correct": "E",
      "comentario": "ERRADO. O caput exige avaliação. A autorização legislativa não a substitui. A alínea b permite doação exclusivamente a outro órgão ou entidade da Administração, salvo as alíneas f, g e h."
    },
    {
      "id": 93012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Na permuta da alínea c, a diferença",
      "correct": "b",
      "comentario": "Não ultrapassa a metade do valor do imóvel ofertado pela União, segundo avaliação prévia, com torna sempre que for o caso.",
      "options": [
        {
          "key": "a",
          "label": "pode chegar ao valor inteiro do imóvel de qualquer ente."
        },
        {
          "key": "b",
          "label": "não ultrapassa a metade do valor do imóvel que será ofertado pela União, segundo avaliação prévia."
        },
        {
          "key": "c",
          "label": "dispensa avaliação."
        },
        {
          "key": "d",
          "label": "é a mesma regra da alínea g, de 250 m²."
        },
        {
          "key": "e",
          "label": "autoriza doação a particular."
        }
      ]
    },
    {
      "id": 93013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O § 1º do art. 76",
      "correct": "d",
      "comentario": "Dispensa autorização legislativa na aquisição judicial ou dação, e mantém avaliação prévia e leilão.",
      "options": [
        {
          "key": "a",
          "label": "dispensa leilão e avaliação."
        },
        {
          "key": "b",
          "label": "autoriza o donatário a vender o imóvel."
        },
        {
          "key": "c",
          "label": "abre o limite de hectares da Lei nº 11.952."
        },
        {
          "key": "d",
          "label": "dispensa autorização legislativa e exige avaliação prévia e leilão."
        },
        {
          "key": "e",
          "label": "transforma investidura em dação."
        }
      ]
    }
  ],
  "palette": "rose",
  "highlight": {
    "big": "250 m²",
    "small": "até, na alínea g"
  },
  "heroLead": "Imóvel se avalia e, em regra, se leiloa com autorização legislativa. Doação a particular não é a alínea b. Hectare citado não foi aberto.",
  "footerLine": "Imóvel do art. 76 lido. Móvel e art. 77 não entraram.",
  "nextLine": "Diga continue para o Prompt 94: bens móveis, art. 76, II, e os parágrafos que faltam. A preferência do art. 77 entra nesse anúncio.",
  "closingMnemonic": "Justifica e avalia. Imóvel, lei e leilão. Doação a órgão. Metade, União. 250 m². Doado não se vende.",
  "subject": "Direito Administrativo",
  "clocks": [],
  "rolesTitle": "Quem a norma nomeia",
  "rolesLead": "O nome do órgão não se empresta.",
  "compareTitle": "A trava",
  "compareLead": "Generalizar a hipótese é o erro.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "toc": [
    {
      "id": "a76i",
      "num": "76",
      "label": "Imóvel"
    }
  ]
};
