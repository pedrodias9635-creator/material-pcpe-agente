import type { StudyModule } from "./study";

export const PROMPT95: StudyModule = {
  "short": "Procedimentos auxiliares",
  "eyebrow": "Prompt 95 · Lei nº 14.133/2021, art. 78",
  "title": "Procedimentos auxiliares",
  "subtitle": "cinco nomes, regulamento não aberto",
  "description": "O art. 78 lista cinco procedimentos auxiliares. Não são modalidades. O regulamento que há de definir critérios claros e objetivos não foi aberto. O credenciamento, artigo seguinte, não entra.",
  "reading": "Lei nº 14.133/2021, art. 78, caput, incisos I a V e §§ 1º e 2º. Texto vigente no Planalto. Regulamento não transcrito.",
  "terms": [
    "credenciamento",
    "pré-qualificação",
    "manifestação de interesse",
    "registro de preços",
    "registro cadastral"
  ],
  "context": [
    "Modalidades já foram lidas. Estes nomes não as substituem.",
    "Pré-qualificação e manifestação de interesse, se gerarem julgamento, seguem o procedimento das licitações.",
    "Credenciamento está nomeado. O art. 79 não se antecipa."
  ],
  "importance": "A banca chama registro de preços de modalidade e dispensa regulamento.",
  "distinctions": [
    "Cinco: credenciamento, pré-qualificação, procedimento de manifestação de interesse, sistema de registro de preços e registro cadastral.",
    "§ 1º: critérios claros e objetivos, em regulamento.",
    "§ 2º: o julgamento dos incisos II e III segue o procedimento das licitações. Os outros incisos não estão nessa frase."
  ],
  "organs": [
    {
      "sigla": "I",
      "nome": "Credenciamento",
      "funcao": "Está na lista. O artigo próprio não entra.",
      "base": "Art. 78, I",
      "nao": "Não abra o art. 79.",
      "tone": "cyan"
    },
    {
      "sigla": "II",
      "nome": "Pré-qualificação",
      "funcao": "Julgamento segue o das licitações.",
      "base": "Art. 78, II e § 2º",
      "nao": "Não é modalidade.",
      "tone": "emerald"
    },
    {
      "sigla": "III",
      "nome": "PMI",
      "funcao": "Manifestação de interesse. Também no § 2º.",
      "base": "Art. 78, III",
      "nao": "Não é autorização para obra.",
      "tone": "orange"
    },
    {
      "sigla": "IV",
      "nome": "SRP",
      "funcao": "Sistema de registro de preços.",
      "base": "Art. 78, IV",
      "nao": "Não é modalidade nem ata lida.",
      "tone": "violet"
    },
    {
      "sigla": "V",
      "nome": "Cadastro",
      "funcao": "Registro cadastral.",
      "base": "Art. 78, V",
      "nao": "Não substitui habilitação já lida.",
      "tone": "sky"
    },
    {
      "sigla": "§1",
      "nome": "Regulamento",
      "funcao": "Critérios claros e objetivos.",
      "base": "Art. 78, § 1º",
      "nao": "O regulamento não foi aberto.",
      "tone": "yellow"
    }
  ],
  "swaps": [
    {
      "wrong": "Registro de preços é modalidade de licitação.",
      "right": "É procedimento auxiliar. Modalidade já foi outro capítulo."
    },
    {
      "wrong": "O art. 78 dispensa regulamento.",
      "right": "O § 1º manda critérios claros e objetivos definidos em regulamento."
    },
    {
      "wrong": "Todo procedimento auxiliar julga como licitação.",
      "right": "O § 2º nomeia os incisos II e III."
    },
    {
      "wrong": "Credenciamento está regulado neste prompt.",
      "right": "Só está nomeado. O art. 79 não entra."
    },
    {
      "wrong": "Registro cadastral substitui a habilitação dos arts. 62 a 70.",
      "right": "Não. Aqueles artigos já foram lidos e não se reabrem."
    },
    {
      "wrong": "Manifestação de interesse é autorização para contratar.",
      "right": "É procedimento auxiliar. Não é contrato."
    },
    {
      "wrong": "A lista é exemplificativa, porque o caput diz entre outros.",
      "right": "O caput diz são. Não diz entre outros."
    },
    {
      "wrong": "Pré-qualificação é inexigibilidade.",
      "right": "São institutos diferentes. Inexigibilidade já foi lida."
    }
  ],
  "timeline": [
    {
      "when": "Lista",
      "title": "Cinco",
      "text": "Credenciamento, pré-qualificação, manifestação, registro de preços, cadastro."
    },
    {
      "when": "§ 1º",
      "title": "Regulamento",
      "text": "Critérios claros e objetivos. Texto não aberto."
    },
    {
      "when": "§ 2º",
      "title": "II e III",
      "text": "O julgamento segue o das licitações. I, IV e V não estão na frase."
    }
  ],
  "articles": [
    {
      "id": "a78",
      "num": "78",
      "kicker": "Capítulo X",
      "title": "Auxiliares",
      "lead": "Lista fechada neste artigo. Regulamento fechado fora dele.",
      "plate": "São, não entre outros.",
      "plateSource": "Art. 78, caput",
      "devices": [
        {
          "tag": "caput",
          "name": "Cinco",
          "hook": "Procedimento auxiliar não é modalidade.",
          "literal": "Art. 78: são procedimentos auxiliares das licitações e das contratações regidas por esta Lei: I - credenciamento; II - pré-qualificação; III - procedimento de manifestação de interesse; IV - sistema de registro de preços; V - registro cadastral.",
          "context": "São. A lista do caput não diz entre outros. Não invente um sexto.",
          "exam": "A banca acrescenta diálogo competitivo como procedimento auxiliar.",
          "trap": "Diálogo e concurso são modalidades já lidas, não esta lista.",
          "example": "Registro de preços organiza contratação futura. Não é, por este artigo, uma sexta modalidade.",
          "mnemonic": "Cinco nomes. Nenhum é modalidade."
        },
        {
          "tag": "§§",
          "name": "Regulamento e julgamento",
          "hook": "II e III, não os cinco.",
          "literal": "§ 1º: os procedimentos auxiliares obedecerão a critérios claros e objetivos definidos em regulamento. § 2º: o julgamento que decorrer dos procedimentos auxiliares previstos nos incisos II e III seguirá o mesmo procedimento das licitações.",
          "context": "O regulamento não foi transcrito. Claro e objetivo não é critério secreto.",
          "exam": "A banca estende o § 2º ao registro de preços.",
          "trap": "Não use o auxiliar para pular julgamento onde o § 2º o manda.",
          "example": "Pré-qualificação que gere julgamento segue o rito das licitações. Registro de preços não está nessa frase.",
          "mnemonic": "Regulamento fechado. Julgamento, só II e III."
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Administração",
      "source": "Art. 78, § 1º",
      "does": [
        "Definir critérios claros e objetivos em regulamento"
      ],
      "doesNot": [
        "Não inventa o regulamento neste prompt",
        "Não chama auxiliar de modalidade"
      ]
    },
    {
      "role": "Interessado",
      "source": "Art. 78, II e III",
      "does": [
        "Submeter-se ao julgamento das licitações, se ele decorrer"
      ],
      "doesNot": [
        "Não está, por este parágrafo, no mesmo regime dos incisos I, IV e V"
      ]
    },
    {
      "role": "Credenciado",
      "source": "Art. 78, I",
      "does": [
        "Existir como nome da lista"
      ],
      "doesNot": [
        "O art. 79 não foi aberto"
      ]
    }
  ],
  "roleNote": "Ata de registro de preços não foi lida. Não invente vigência.",
  "rolePlate": "Cinco. Não seis.",
  "rolePlateSource": "Art. 78",
  "summary": [
    {
      "item": "Natureza",
      "rule": "Procedimento auxiliar.",
      "clue": "Não é modalidade."
    },
    {
      "item": "I",
      "rule": "Credenciamento.",
      "clue": "Artigo seguinte fechado."
    },
    {
      "item": "II",
      "rule": "Pré-qualificação.",
      "clue": "Julgamento como licitação."
    },
    {
      "item": "III",
      "rule": "Manifestação de interesse.",
      "clue": "Também no § 2º."
    },
    {
      "item": "IV",
      "rule": "Sistema de registro de preços.",
      "clue": "Fora da frase do § 2º."
    },
    {
      "item": "V",
      "rule": "Registro cadastral.",
      "clue": "Não reabre habilitação."
    },
    {
      "item": "§ 1º",
      "rule": "Regulamento, critérios claros e objetivos.",
      "clue": "Não aberto."
    },
    {
      "item": "Lista",
      "rule": "São cinco.",
      "clue": "O caput não diz entre outros."
    }
  ],
  "compare": [
    {
      "item": "Auxiliar",
      "ce": "Prepara ou organiza.",
      "cf": "Modalidade escolhe a licitação.",
      "effect": "separa"
    },
    {
      "item": "§ 2º",
      "ce": "II e III.",
      "cf": "Não é I, IV e V.",
      "effect": "restringe"
    },
    {
      "item": "Regulamento",
      "ce": "Deve existir.",
      "cf": "Não foi transcrito.",
      "effect": "restringe"
    },
    {
      "item": "Cadastro",
      "ce": "Auxiliar.",
      "cf": "Não substitui os arts. 62 a 70.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 95011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O sistema de registro de preços é modalidade de licitação, e o julgamento de todos os procedimentos auxiliares segue o procedimento das licitações.",
      "correct": "E",
      "comentario": "ERRADO. Registro de preços é procedimento auxiliar. O § 2º manda seguir o procedimento das licitações no julgamento que decorrer dos incisos II e III, não de todos."
    },
    {
      "id": 95012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "São procedimentos auxiliares, no art. 78,",
      "correct": "e",
      "comentario": "Os cinco do caput. Diálogo competitivo não está na lista. O caput não diz entre outros.",
      "options": [
        {
          "key": "a",
          "label": "apenas diálogo competitivo e concurso."
        },
        {
          "key": "b",
          "label": "credenciamento e concorrência."
        },
        {
          "key": "c",
          "label": "os cinco do caput e, entre outros, o leilão."
        },
        {
          "key": "d",
          "label": "somente o registro cadastral, que substitui a habilitação."
        },
        {
          "key": "e",
          "label": "credenciamento, pré-qualificação, manifestação de interesse, sistema de registro de preços e registro cadastral."
        }
      ]
    },
    {
      "id": 95013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O § 1º do art. 78",
      "correct": "b",
      "comentario": "Critérios claros e objetivos em regulamento. O regulamento não foi aberto.",
      "options": [
        {
          "key": "a",
          "label": "dispensa regulamento."
        },
        {
          "key": "b",
          "label": "determina que os procedimentos auxiliares obedeçam a critérios claros e objetivos definidos em regulamento."
        },
        {
          "key": "c",
          "label": "abre o art. 79 e lista as hipóteses de credenciamento."
        },
        {
          "key": "d",
          "label": "fixa em um ano a ata de registro de preços."
        },
        {
          "key": "e",
          "label": "estende o julgamento licitatório ao inciso V."
        }
      ]
    }
  ],
  "palette": "warm",
  "highlight": {
    "big": "Cinco",
    "small": "não são modalidades"
  },
  "heroLead": "Auxiliar não escolhe a modalidade. A lista tem cinco nomes. O regulamento e o credenciamento ficam fechados.",
  "footerLine": "Art. 78 lido. Art. 79 não entrou.",
  "nextLine": "O Prompt 96 abre o penal pedido como 62. O art. 79 da Lei nº 14.133 permanece pausado e não foi lido.",
  "closingMnemonic": "Cinco auxiliares. Regulamento claro. Julgamento como licitação só na pré-qualificação e na manifestação de interesse.",
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
      "id": "a78",
      "num": "78",
      "label": "Auxiliares"
    }
  ]
};
