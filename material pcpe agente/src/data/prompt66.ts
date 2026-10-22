import type { StudyModule } from "./study";

export const PROMPT66: StudyModule = {
  "short": "Poder regulamentar",
  "eyebrow": "Prompt 66 de 86 · Poder regulamentar",
  "title": "Poder regulamentar",
  "subtitle": "decreto para fiel execução, não contra a lei",
  "description": "Regulamento não é lei. O Presidente executa a lei por decreto e, na redação atual, dispõe por decreto só nos dois casos do art. 84, VI. Regulamento autônomo fora dessa frase não se inventa.",
  "reading": "Constituição, art. 84, IV, e art. 84, VI, redação da Emenda Constitucional nº 32/2001.",
  "terms": [
    "regulamento",
    "fiel execução",
    "decreto autônomo",
    "reserva legal"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "O inciso IV não cria direito novo.",
    "O inciso VI não aumenta despesa nem cria órgão.",
    "Governador não está nomeado nesses incisos."
  ],
  "importance": "A banca deixa o decreto revogar a lei, ou trata o inciso VI como carta branca.",
  "distinctions": [
    "Art. 84, IV: decretos e regulamentos para fiel execução da lei.",
    "Art. 84, VI: decreto sobre organização e funcionamento, sem aumento de despesa nem criação ou extinção de órgão; e extinção de função ou cargo vago.",
    "Fora desses textos, não se chama o decreto de autônomo."
  ],
  "organs": [
    {
      "sigla": "IV",
      "nome": "Fiel execução",
      "funcao": "O regulamento segue a lei.",
      "base": "IV",
      "nao": "Sancionar lei não é regulamentar. São verbos do mesmo inciso, mas não são o mesmo ato.",
      "tone": "cyan"
    },
    {
      "sigla": "VI",
      "nome": "Dois casos",
      "funcao": "A emenda fechou o decreto.",
      "base": "VI",
      "nao": "Não transporte o inciso ao Governador. A Constituição estadual é outro texto, não lido aqui.",
      "tone": "emerald"
    },
    {
      "sigla": "RES",
      "nome": "Reserva de lei",
      "funcao": "O que é da lei não desce.",
      "base": "RES",
      "nao": "Portaria não está no art. 84, IV. Não a eleve a regulamento sem norma.",
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
      "wrong": "Regulamento pode contrariar a lei se for mais eficiente.",
      "right": "Fiel execução não contraria."
    },
    {
      "wrong": "O art. 84, VI, cria órgão e aumenta despesa.",
      "right": "A alínea a veda as duas coisas."
    },
    {
      "wrong": "Cargo ocupado se extingue pelo inciso VI, b.",
      "right": "A alínea diz quando vagos."
    },
    {
      "wrong": "O Governador está no art. 84, IV.",
      "right": "O inciso é privativo do Presidente."
    },
    {
      "wrong": "Sancionar e regulamentar são o mesmo ato.",
      "right": "São verbos diferentes do mesmo inciso."
    },
    {
      "wrong": "Contratação temporária se cria por decreto, pelo art. 37, IX.",
      "right": "O inciso diz que a lei estabelecerá os casos."
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
      "id": "p66",
      "num": "66",
      "kicker": "Poder regulamentar",
      "title": "Poder regulamentar",
      "lead": "decreto para fiel execução, não contra a lei",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "IV",
          "name": "Fiel execução",
          "hook": "O regulamento segue a lei.",
          "literal": "Constituição, art. 84, IV: compete privativamente ao Presidente da República sancionar, promulgar e fazer publicar as leis, bem como expedir decretos e regulamentos para sua fiel execução.",
          "context": "Fiel execução não é corrigir a lei nem completá-la contra o texto.",
          "exam": "A banca aceita regulamento que crie dever não escrito na lei.",
          "trap": "Sancionar lei não é regulamentar. São verbos do mesmo inciso, mas não são o mesmo ato.",
          "example": "O decreto que detalha um procedimento já previsto em lei pode estar na fiel execução. O que cria um requisito novo de concurso, não.",
          "mnemonic": "Executa a lei. Não a reescreve."
        },
        {
          "tag": "VI",
          "name": "Dois casos",
          "hook": "A emenda fechou o decreto.",
          "literal": "Constituição, art. 84, VI, redação da Emenda Constitucional nº 32/2001: compete ao Presidente dispor, mediante decreto, sobre a) organização e funcionamento da administração federal, quando não implicar aumento de despesa nem criação ou extinção de órgãos públicos; b) extinção de funções ou cargos públicos, quando vagos.",
          "context": "A alínea a veda aumento de despesa e criação ou extinção de órgão. A alínea b só alcança cargo ou função vaga.",
          "exam": "A banca extingue cargo ocupado por decreto.",
          "trap": "Não transporte o inciso ao Governador. A Constituição estadual é outro texto, não lido aqui.",
          "example": "Cargo vago pode ser extinto nesse decreto federal. Cargo com servidor, não está na alínea b.",
          "mnemonic": "Sem despesa nova. Sem órgão novo. Cargo só se vago."
        },
        {
          "tag": "RES",
          "name": "Reserva de lei",
          "hook": "O que é da lei não desce.",
          "literal": "Doutrina, apoiada no que os incisos não dizem: matéria reservada à lei não se cria por regulamento. O art. 37, por exemplo, manda a lei estabelecer os casos de contratação temporária. Esse inciso não se cumpre por decreto. Regulamento de fiel execução detalha. Não substitui.",
          "context": "Não invente um regulamento autônomo estadual.",
          "exam": "A banca chama qualquer decreto de lei.",
          "trap": "Portaria não está no art. 84, IV. Não a eleve a regulamento sem norma.",
          "example": "A PCPE não regulamenta a Constituição federal. O Presidente, nos incisos, também não legisla.",
          "mnemonic": "Lei reserva. Decreto executa."
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
      "item": "IV",
      "rule": "Fiel execução.",
      "clue": "Não reescreve a lei."
    },
    {
      "item": "Sancionar",
      "rule": "Outro verbo.",
      "clue": "Não é regulamentar."
    },
    {
      "item": "VI, a",
      "rule": "Organização sem despesa nova e sem criar ou extinguir órgão.",
      "clue": "Emenda nº 32."
    },
    {
      "item": "VI, b",
      "rule": "Extingue cargo ou função vaga.",
      "clue": "Ocupado não entra."
    },
    {
      "item": "Governador",
      "rule": "Não está no inciso.",
      "clue": "Conferir a Constituição estadual."
    },
    {
      "item": "Art. 37, IX",
      "rule": "A lei estabelece.",
      "clue": "Decreto não a substitui."
    }
  ],
  "compare": [
    {
      "item": "IV",
      "ce": "Executa lei.",
      "cf": "VI dispõe nos dois casos.",
      "effect": "separa"
    },
    {
      "item": "VI, a",
      "ce": "Não cria órgão.",
      "cf": "VI, b só vago.",
      "effect": "restringe"
    },
    {
      "item": "Decreto",
      "ce": "Não é lei.",
      "cf": "Reserva legal fica.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 66011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O art. 84, VI, da Constituição autoriza o Presidente a criar órgão público e a extinguir cargo ocupado, por decreto, e o mesmo inciso nomeia o Governador.",
      "correct": "E",
      "comentario": "ERRADO. A alínea a veda criação de órgão. A alínea b só extingue cargo ou função vaga. O inciso é do Presidente, não do Governador."
    },
    {
      "id": 66012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O regulamento do art. 84, IV,",
      "correct": "a",
      "comentario": "Fiel execução. Não cria dever contra a lei.",
      "options": [
        {
          "key": "a",
          "label": "executa a lei e não a contraria."
        },
        {
          "key": "b",
          "label": "pode inovar contra a lei em nome da eficiência."
        },
        {
          "key": "c",
          "label": "é o mesmo ato de sancionar."
        },
        {
          "key": "d",
          "label": "compete ao Governador, pelo próprio inciso."
        },
        {
          "key": "e",
          "label": "substitui o art. 37, IX."
        }
      ]
    },
    {
      "id": 66013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A alínea b do art. 84, VI, alcança",
      "correct": "c",
      "comentario": "Extinção de função ou cargo vago. Não alcança cargo ocupado nem cria despesa.",
      "options": [
        {
          "key": "a",
          "label": "qualquer cargo, ocupado ou vago."
        },
        {
          "key": "b",
          "label": "a criação de ministério."
        },
        {
          "key": "c",
          "label": "a extinção de funções ou cargos públicos, quando vagos."
        },
        {
          "key": "d",
          "label": "a contratação temporária."
        },
        {
          "key": "e",
          "label": "a fixação de subsídio."
        }
      ]
    }
  ],
  "palette": "lime",
  "highlight": {
    "big": "Poder regulamentar",
    "small": "sem artigo inventado"
  },
  "heroLead": "Regulamento não é lei. O Presidente executa a lei por decreto e, na redação atual, dispõe por decreto só nos dois casos do art. 84, VI. Regulamento autônomo fora dessa frase não se inventa.",
  "footerLine": "Prompt 66 de 86.",
  "nextLine": "Diga continue para o Prompt 67: poder de polícia.",
  "closingMnemonic": "Decreto executa. Não legisla. Cargo ocupado não se extingue pelo inciso VI.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [],
  "toc": [
    {
      "id": "p66",
      "num": "66",
      "label": "Poder regulamentar"
    }
  ]
};
