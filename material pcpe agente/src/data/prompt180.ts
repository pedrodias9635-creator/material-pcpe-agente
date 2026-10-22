import type { StudyModule } from "./study";

export const PROMPT180: StudyModule = {
  "short": "Juizado: citação e Justiça Milit",
  "eyebrow": "Prompt 180 · lacuna do edital",
  "title": "Juizado: citação e Justiça Militar",
  "subtitle": "Lei nº 9.099, arts. 66 a 68 e 90-A",
  "description": "Os arts. 66 e 68 estavam nomeados e não abertos. A citação é pessoal, no Juizado ou por mandado. Não encontrado o acusado, as peças vão ao Juízo comum. O art. 90-A, nesta compilação, só afasta a Justiça Militar.",
  "reading": "Lei nº 9.099/1995, compilação local consultada em 21/10/2026. Arts. 66, 67, 68 e 90-A.",
  "terms": [
    "citação pessoal",
    "Juízo comum",
    "Justiça Militar"
  ],
  "subject": "Direito Processual Penal",
  "context": [
    "O texto é o da compilação oficial conferida. Redação riscada não foi copiada.",
    "Artigo de mesmo número no ADCT não é este texto.",
    "O que não está escrito não se completa."
  ],
  "importance": "A banca troca prazo, nome do instituto e o ente competente.",
  "distinctions": [
    "Citação pessoal no Juizado, se possível, ou por mandado.",
    "Não encontrado: encaminha ao Juízo comum. Não arquiva, neste parágrafo.",
    "Intimação de audiência: as partes saem cientes.",
    "Art. 90-A desta compilação: a lei não se aplica à Justiça Militar. A vedação da Lei nº 11.340 não está neste artigo e não foi inventada."
  ],
  "organs": [
    {
      "sigla": "66",
      "nome": "Citação no Juizado",
      "funcao": "Pessoal. No Juizado ou por mandado.",
      "base": "Lei 9.099, art. 66",
      "nao": "Não encontrado não é arquivamento.",
      "tone": "yellow"
    },
    {
      "sigla": "67",
      "nome": "Intimação",
      "funcao": "Audiência: ciência desde logo.",
      "base": "Lei 9.099, art. 67",
      "nao": "Correspondência não é a única forma.",
      "tone": "cyan"
    },
    {
      "sigla": "68",
      "nome": "Advogado ou defensor",
      "funcao": "A falta de advogado não extingue o ato: designa-se defensor público.",
      "base": "Lei 9.099, art. 68",
      "nao": "Não se exige advogado constituído como condição única.",
      "tone": "orange"
    },
    {
      "sigla": "90A",
      "nome": "Justiça Militar",
      "funcao": "Esta lei não se aplica à Justiça Militar.",
      "base": "Lei 9.099, art. 90-A",
      "nao": "A vedação da Lei nº 11.340 não está neste texto.",
      "tone": "violet"
    }
  ],
  "swaps": [
    {
      "wrong": "Arquiva.",
      "right": "Encaminha ao Juízo comum."
    }
  ],
  "timeline": [
    {
      "when": "Fonte",
      "title": "Compilação",
      "text": "Lei nº 9.099/1995, compilação local consultada em 21/10/2026. Arts. 66, 67, 68 e 90-A."
    },
    {
      "when": "Limite",
      "title": "Sem invenção",
      "text": "Inciso não transcrito não foi inventado."
    }
  ],
  "articles": [
    {
      "id": "p180-66",
      "num": "66",
      "kicker": "Lei 9.099, art. 66",
      "title": "Citação no Juizado",
      "lead": "Citação no Juizado",
      "plate": "Citação no Juizado",
      "plateSource": "Lei 9.099, art. 66",
      "devices": [
        {
          "tag": "66",
          "name": "Art. 66",
          "hook": "Não achou: Juízo comum.",
          "literal": "Art. 66. A citação será pessoal e far-se-á no próprio Juizado, sempre que possível, ou por mandado. Parágrafo único. Não encontrado o acusado para ser citado, o Juiz encaminhará as peças existentes ao Juízo comum para adoção do procedimento previsto em lei.",
          "context": "Pessoal. No Juizado ou por mandado.",
          "exam": "Pessoal. No Juizado ou por mandado.",
          "trap": "Não encontrado não é arquivamento.",
          "example": "Sem roteiro de citação. O parágrafo só diz o destino das peças.",
          "mnemonic": "Não achou: Juízo comum.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p180-67",
      "num": "67",
      "kicker": "Lei 9.099, art. 67",
      "title": "Intimação",
      "lead": "Intimação",
      "plate": "Intimação",
      "plateSource": "Lei 9.099, art. 67",
      "devices": [
        {
          "tag": "67",
          "name": "Art. 67",
          "hook": "Audiência ciente. Carta é uma das formas.",
          "literal": "Art. 67. A intimação far-se-á por correspondência, com aviso de recebimento pessoal ou, tratando-se de pessoa jurídica ou firma individual, mediante entrega ao encarregado da recepção, que será obrigatoriamente identificado, ou, sendo necessário, por oficial de justiça, independentemente de mandado ou carta precatória, ou ainda por qualquer meio idôneo de comunicação. Parágrafo único. Dos atos praticados em audiência considerar-se-ão desde logo cientes as partes, os interessados e defensores.",
          "context": "Audiência: ciência desde logo.",
          "exam": "Audiência: ciência desde logo.",
          "trap": "Correspondência não é a única forma.",
          "example": "Sem modelo de carta. O artigo lista os meios.",
          "mnemonic": "Audiência ciente. Carta é uma das formas.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p180-68",
      "num": "68",
      "kicker": "Lei 9.099, art. 68",
      "title": "Advogado ou defensor",
      "lead": "Advogado ou defensor",
      "plate": "Advogado ou defensor",
      "plateSource": "Lei 9.099, art. 68",
      "devices": [
        {
          "tag": "68",
          "name": "Art. 68",
          "hook": "Sem advogado: defensor público.",
          "literal": "Art. 68. Do ato de intimação do autor do fato e do mandado de citação do acusado constará a necessidade de seu comparecimento acompanhado de advogado, com a advertência de que, na sua falta, ser-lhe-á designado defensor público.",
          "context": "A falta de advogado não extingue o ato: designa-se defensor público.",
          "exam": "A falta de advogado não extingue o ato: designa-se defensor público.",
          "trap": "Não se exige advogado constituído como condição única.",
          "example": "Sem exemplo de audiência. A advertência basta.",
          "mnemonic": "Sem advogado: defensor público.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p180-90A",
      "num": "90A",
      "kicker": "Lei 9.099, art. 90-A",
      "title": "Justiça Militar",
      "lead": "Justiça Militar",
      "plate": "Justiça Militar",
      "plateSource": "Lei 9.099, art. 90-A",
      "devices": [
        {
          "tag": "90A",
          "name": "Art. 90A",
          "hook": "Militar fora. Maria da Penha não foi colada aqui.",
          "literal": "Art. 90-A. As disposições desta Lei não se aplicam no âmbito da Justiça Militar. Artigo incluído pela Lei nº 9.839, de 27.9.1999. A compilação local da Lei nº 9.099/1995 não traz, neste artigo, a vedação da Lei nº 11.340/2006. Essa vedação não foi inventada aqui.",
          "context": "Esta lei não se aplica à Justiça Militar.",
          "exam": "Esta lei não se aplica à Justiça Militar.",
          "trap": "A vedação da Lei nº 11.340 não está neste texto.",
          "example": "Sem exemplo de juízo. O artigo só afasta a Justiça Militar.",
          "mnemonic": "Militar fora. Maria da Penha não foi colada aqui.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 180",
      "does": [
        "Ler o texto antes do comentário"
      ],
      "doesNot": [
        "Não completar lacuna",
        "Não descrever meio de infração"
      ]
    }
  ],
  "roleNote": "Questões originais. Não são prova real.",
  "rolePlate": "Texto primeiro.",
  "rolePlateSource": "Prompt 180",
  "summary": [
    {
      "item": "Art. 66",
      "rule": "Pessoal ou mandado.",
      "clue": "Não achou: Juízo comum."
    },
    {
      "item": "Art. 90-A",
      "rule": "Não se aplica à Justiça Militar.",
      "clue": "Lei 11.340 não está neste texto."
    }
  ],
  "compare": [
    {
      "item": "Citação frustrada",
      "ce": "Arquiva.",
      "cf": "Encaminha ao Juízo comum.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 180011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Não encontrado o acusado para citação no Juizado, o juiz encaminha as peças ao Juízo comum.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. Art. 66, parágrafo único."
    },
    {
      "id": 180012,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O art. 90-A, na compilação usada neste assunto, diz que a Lei nº 9.099 não se aplica à Justiça Militar.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. É o texto do artigo. A vedação da Lei nº 11.340 não está nessa compilação e não foi acrescentada."
    },
    {
      "id": 180013,
      "banca": "Estilo Cebraspe · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A citação no Juizado, no art. 66:",
      "correct": "a",
      "options": [
        {
          "key": "a",
          "label": "É pessoal, no próprio Juizado, sempre que possível, ou por mandado."
        },
        {
          "key": "b",
          "label": "É sempre por edital."
        },
        {
          "key": "c",
          "label": "Dispensa mandado e presença."
        },
        {
          "key": "d",
          "label": "Se frustrada, arquiva o termo."
        },
        {
          "key": "e",
          "label": "Só se faz por carta precatória."
        }
      ],
      "comentario": "Questão original, não é prova real. A alternativa a é o caput. A d contradiz o parágrafo único."
    }
  ],
  "toc": [
    {
      "id": "p180-66",
      "num": "66",
      "label": "Citação no Juizado"
    },
    {
      "id": "p180-67",
      "num": "67",
      "label": "Intimação"
    },
    {
      "id": "p180-68",
      "num": "68",
      "label": "Advogado ou defensor"
    },
    {
      "id": "p180-90A",
      "num": "90A",
      "label": "Justiça Militar"
    }
  ],
  "clocks": [],
  "organKicker": "Recorte",
  "organTitle": "Juizado: citação e Justiça Militar",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a troca.",
  "closing": "Conferir emenda posterior à consulta de 21/10/2026.",
  "palette": "leaf",
  "highlight": {
    "big": "4",
    "small": "artigos neste assunto"
  },
  "heroLead": "Os arts. 66 e 68 estavam nomeados e não abertos. A citação é pessoal, no Juizado ou por mandado. Não encontrado o acusado, as peças vão ao Juízo comum. O art. 90-A, nesta compilaçã",
  "nextLine": "O assunto seguinte continua na mesma disciplina.",
  "closingMnemonic": "Citação pessoal no Juizado, se possível, ou por mandado.",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "O que a banca troca",
  "compareLead": "A esquerda é a armadilha. A direita é o texto.",
  "compareLeft": "Armadilha",
  "compareRight": "Texto"
};
