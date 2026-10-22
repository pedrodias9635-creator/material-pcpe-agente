import type { StudyModule } from "./study";

export const PROMPT79: StudyModule = {
  "short": "Acumulação",
  "eyebrow": "Prompt 79 de 86 · Acumulação de cargos",
  "title": "Acumulação de cargos",
  "subtitle": "três exceções, horário compatível",
  "description": "A regra é vedar a acumulação remunerada. As exceções são três, com horário compatível e o teto do inciso XI. A alínea b mudou em 2025. A proibição atravessa a indireta.",
  "reading": "Constituição, art. 37, XVI, com a alínea b na redação da Emenda Constitucional nº 138/2025, alínea c na redação da Emenda nº 34/2001, e inciso XVII na redação da Emenda nº 19/1998. O inciso XI não foi transcrito. Não invente o teto.",
  "terms": [
    "acumulação",
    "professor",
    "saúde",
    "compatibilidade de horários"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "Vedada, exceto com compatibilidade de horários.",
    "Alínea b atual: um cargo de professor com outro de qualquer natureza.",
    "Alínea c: dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas."
  ],
  "importance": "A banca ainda cobra a alínea b antiga, professor com técnico ou científico, como se fosse a vigente.",
  "distinctions": [
    "a: dois cargos de professor.",
    "b vigente: professor com outro de qualquer natureza. Emenda nº 138/2025.",
    "XVII: a proibição alcança emprego, função, autarquia, fundação, empresa pública, sociedade de economia mista, subsidiária e sociedade controlada."
  ],
  "organs": [
    {
      "sigla": "XVI",
      "nome": "A regra",
      "funcao": "Veda, com três portas.",
      "base": "XVI",
      "nao": "Remunerada. A frase não trata de cargo não remunerado.",
      "tone": "cyan"
    },
    {
      "sigla": "B",
      "nome": "Alínea b vigente",
      "funcao": "Qualquer natureza, não só a técnica.",
      "base": "B",
      "nao": "Qualquer natureza não dispensa horário compatível nem o inciso XI.",
      "tone": "emerald"
    },
    {
      "sigla": "XVII",
      "nome": "Alcança a indireta",
      "funcao": "Emprego e função também.",
      "base": "XVII",
      "nao": "Controlada indireta também está na frase.",
      "tone": "orange"
    },
    {
      "sigla": "MAP",
      "nome": "Mapa",
      "funcao": "Item do edital, sem artigo novo.",
      "base": "Edital PCPE",
      "nao": "Não invente dispositivo.",
      "tone": "sky"
    }
  ],
  "swaps": [
    {
      "wrong": "A alínea b vigente ainda é professor com cargo técnico.",
      "right": "A Emenda nº 138/2025 escreve outro de qualquer natureza."
    },
    {
      "wrong": "Dois cargos policiais se acumulam.",
      "right": "Não estão nas três alíneas."
    },
    {
      "wrong": "A exceção dispensa horário compatível.",
      "right": "A compatibilidade está no caput da exceção."
    },
    {
      "wrong": "Empresa pública está fora do XVII.",
      "right": "Está dentro."
    },
    {
      "wrong": "O teto do XI é R$ 50.000,00.",
      "right": "Não foi transcrito. Não invente."
    },
    {
      "wrong": "A vedação é só de cargo, não de emprego.",
      "right": "O XVII estende a emprego e função."
    }
  ],
  "timeline": [
    {
      "when": "1",
      "title": "Texto",
      "text": "O que está transcrito pode ser cobrado como lei."
    },
    {
      "when": "2",
      "title": "Doutrina",
      "text": "O que está marcado como doutrina não vira número de artigo."
    },
    {
      "when": "3",
      "title": "Fechado",
      "text": "O que o prompt não abriu permanece para conferência oficial."
    }
  ],
  "articles": [
    {
      "id": "p79",
      "num": "79",
      "kicker": "Acumulação de cargos",
      "title": "Acumulação de cargos",
      "lead": "três exceções, horário compatível",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "XVI",
          "name": "A regra",
          "hook": "Veda, com três portas.",
          "literal": "Constituição, art. 37, XVI, redação da Emenda Constitucional nº 19/1998: é vedada a acumulação remunerada de cargos públicos, exceto, quando houver compatibilidade de horários, observado em qualquer caso o disposto no inciso XI: a) a de dois cargos de professor; b) a de um cargo de professor com outro de qualquer natureza, redação da Emenda Constitucional nº 138/2025; c) a de dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas, redação da Emenda Constitucional nº 34/2001.",
          "context": "Compatibilidade de horários é de todas as exceções. O inciso XI é observado em qualquer caso. O teto não foi transcrito.",
          "exam": "A banca ignora a Emenda nº 138 e mantém técnico ou científico como texto vigente.",
          "trap": "Remunerada. A frase não trata de cargo não remunerado.",
          "example": "Dois cargos de professor, com horário compatível, podem caber. Dois cargos policiais, não estão na lista.",
          "mnemonic": "Três portas. Horário. Teto do XI, sem cifra aqui."
        },
        {
          "tag": "B",
          "name": "Alínea b vigente",
          "hook": "Qualquer natureza, não só a técnica.",
          "literal": "A redação anterior da alínea b, professor com outro técnico ou científico, não é a vigente mostrada no Planalto nesta rodada. A vigente, Emenda Constitucional nº 138/2025, é um cargo de professor com outro de qualquer natureza. Data de hoje no curso: 20/10/2026. Use a redação nova.",
          "context": "Não some a redação antiga com a nova.",
          "exam": "A banca cobra técnico ou científico como se a emenda não existisse.",
          "trap": "Qualquer natureza não dispensa horário compatível nem o inciso XI.",
          "example": "Professor e outro cargo, de qualquer natureza, ainda precisam caber no horário.",
          "mnemonic": "B atual: qualquer natureza."
        },
        {
          "tag": "XVII",
          "name": "Alcança a indireta",
          "hook": "Emprego e função também.",
          "literal": "Constituição, art. 37, XVII, redação da Emenda Constitucional nº 19/1998: a proibição de acumular estende-se a empregos e funções e abrange autarquias, fundações, empresas públicas, sociedades de economia mista, suas subsidiárias, e sociedades controladas, direta ou indiretamente, pelo poder público.",
          "context": "Não pare na administração direta.",
          "exam": "A banca deixa a empresa pública fora da vedação.",
          "trap": "Controlada indireta também está na frase.",
          "example": "Cargo na PCPE mais emprego em sociedade de economia mista entra na proibição, salvo exceção do XVI.",
          "mnemonic": "Direta e indireta. Emprego e função."
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Edital do Agente",
      "does": [
        "Separar texto de lei e doutrina",
        "Conferir o que este prompt deixa fechado"
      ],
      "doesNot": [
        "Não citar número que o módulo não transcreveu"
      ]
    },
    {
      "role": "Banca",
      "source": "Estilo Cebraspe",
      "does": [
        "Trocar conceito vizinho",
        "Cobrar cifra ou prazo que o texto não escreve"
      ],
      "doesNot": [
        "Não transforma doutrina em inciso"
      ]
    },
    {
      "role": "Agente da PCPE",
      "source": "Administração direta estadual",
      "does": [
        "Aplicar a norma geral de licitação já lida",
        "Lembrar que empresa pública não migra para a Lei 14.133"
      ],
      "doesNot": [
        "Não usa o módulo como roteiro de exclusão ou de fraude"
      ]
    }
  ],
  "roleNote": "Questão original. Não é prova anterior.",
  "rolePlate": "Doutrina não é artigo.",
  "rolePlateSource": "Edital nº 1 – PCPE, de 2 de outubro de 2026",
  "summary": [
    {
      "item": "Regra",
      "rule": "Vedada a acumulação remunerada.",
      "clue": "Três exceções."
    },
    {
      "item": "Horário",
      "rule": "Compatível.",
      "clue": "Em todas."
    },
    {
      "item": "a",
      "rule": "Dois professores.",
      "clue": "Emenda nº 19."
    },
    {
      "item": "b",
      "rule": "Professor com qualquer natureza.",
      "clue": "Emenda nº 138/2025."
    },
    {
      "item": "c",
      "rule": "Dois de saúde regulamentada.",
      "clue": "Emenda nº 34."
    },
    {
      "item": "XVII",
      "rule": "Emprego, função e indireta.",
      "clue": "Inclui controlada."
    }
  ],
  "compare": [
    {
      "item": "b antiga",
      "ce": "Técnico ou científico.",
      "cf": "b vigente: qualquer natureza.",
      "effect": "separa"
    },
    {
      "item": "c",
      "ce": "Saúde regulamentada.",
      "cf": "Não é só a redação de médico.",
      "effect": "amplia"
    },
    {
      "item": "XVII",
      "ce": "Alcança a indireta.",
      "cf": "Não pare na direta.",
      "effect": "amplia"
    }
  ],
  "questions": [
    {
      "id": 79011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "A alínea b vigente do art. 37, XVI, ainda limita a acumulação ao cargo de professor com outro técnico ou científico, e a vedação não alcança empresa pública.",
      "correct": "E",
      "comentario": "ERRADO. A Emenda nº 138/2025 escreve outro de qualquer natureza. O inciso XVII inclui empresa pública."
    },
    {
      "id": 79012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A acumulação remunerada de cargos públicos",
      "correct": "a",
      "comentario": "Vedada, com as três exceções, horário compatível e inciso XI.",
      "options": [
        {
          "key": "a",
          "label": "é vedada, salvo as três hipóteses do inciso XVI, com compatibilidade de horários e observância do inciso XI."
        },
        {
          "key": "b",
          "label": "é livre entre cargos policiais."
        },
        {
          "key": "c",
          "label": "dispensa compatibilidade de horários na alínea a."
        },
        {
          "key": "d",
          "label": "não alcança sociedade de economia mista."
        },
        {
          "key": "e",
          "label": "tem teto de R$ 65.492,11, escrito no inciso."
        }
      ]
    },
    {
      "id": 79013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A alínea c do art. 37, XVI, na redação da Emenda nº 34/2001,",
      "correct": "c",
      "comentario": "Dois cargos ou empregos de saúde, profissões regulamentadas. Não é só médico da redação anterior.",
      "options": [
        {
          "key": "a",
          "label": "é exclusiva de dois cargos de médico, sem redação posterior."
        },
        {
          "key": "b",
          "label": "alcança qualquer profissão."
        },
        {
          "key": "c",
          "label": "admite dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas."
        },
        {
          "key": "d",
          "label": "dispensa o inciso XI."
        },
        {
          "key": "e",
          "label": "foi revogada pela Emenda nº 138, que só tratou da alínea b."
        }
      ]
    }
  ],
  "palette": "warm",
  "highlight": {
    "big": "Acumulação",
    "small": "sem artigo inventado"
  },
  "heroLead": "A regra é vedar a acumulação remunerada. As exceções são três, com horário compatível e o teto do inciso XI. A alínea b mudou em 2025. A proibição atravessa a indireta.",
  "footerLine": "Prompt 79 de 86.",
  "nextLine": "Diga continue para o Prompt 80: contratação temporária e cargo em comissão.",
  "closingMnemonic": "Veda. Três portas. Professor com qualquer cargo é a alínea b de 2025. Horário compatível.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [],
  "toc": [
    {
      "id": "p79",
      "num": "79",
      "label": "Acumulação de cargos"
    }
  ]
};
