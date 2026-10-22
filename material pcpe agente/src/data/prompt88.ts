import type { StudyModule } from "./study";

export const PROMPT88: StudyModule = {
  "short": "Dispensa V a VII",
  "eyebrow": "Prompt 88 · Lei nº 14.133/2021, art. 75, V a VII",
  "title": "Dispensa dos incisos V, VI e VII",
  "subtitle": "inovação, defesa e crise institucional",
  "description": "Três incisos sem valor em reais e sem o prazo de um ano. Esse prazo é do inciso VIII, que não entra. A lista do Ministro da Defesa não foi aberta. A Lei nº 10.973 também não.",
  "reading": "Lei nº 14.133/2021, art. 75, V, VI e VII. Texto vigente no Planalto. Arts. 3º, 3º-A, 4º, 5º e 20 da Lei nº 10.973/2004 não foram transcritos.",
  "terms": [
    "Lei nº 10.973",
    "segurança nacional",
    "Ministro da Defesa",
    "estado de defesa",
    "grave perturbação da ordem"
  ],
  "context": [
    "O inciso VIII, emergência e calamidade, fica no Prompt 89.",
    "O inciso X, intervenção no domínio econômico, é outro inciso e é só da União.",
    "Grave perturbação da ordem não é emergência do inciso VIII."
  ],
  "importance": "A banca importa o prazo de um ano do inciso VIII e chama o governador de Ministro da Defesa.",
  "distinctions": [
    "V observa os princípios gerais de contratação da própria Lei nº 10.973. Não os invente.",
    "VI: casos estabelecidos pelo Ministro de Estado da Defesa, mediante demanda dos comandos ou dos demais ministérios.",
    "VII não escreve prazo nem veda prorrogação. Isso é do VIII."
  ],
  "organs": [
    {
      "sigla": "V",
      "nome": "Inovação",
      "funcao": "Cumprir os artigos citados da Lei nº 10.973.",
      "base": "Art. 75, V",
      "nao": "Os artigos não foram abertos.",
      "tone": "cyan"
    },
    {
      "sigla": "VI",
      "nome": "Defesa",
      "funcao": "Casos do Ministro da Defesa, com demanda.",
      "base": "Art. 75, VI",
      "nao": "A lista ministerial não foi aberta.",
      "tone": "orange"
    },
    {
      "sigla": "VII",
      "nome": "Crise",
      "funcao": "Guerra, defesa, sítio, intervenção federal ou grave perturbação da ordem.",
      "base": "Art. 75, VII",
      "nao": "Não é o inciso da emergência.",
      "tone": "violet"
    },
    {
      "sigla": "VIII",
      "nome": "Fora",
      "funcao": "Emergência e calamidade começam no inciso seguinte.",
      "base": "Art. 75, VIII",
      "nao": "Não importe o prazo de um ano.",
      "tone": "sky"
    }
  ],
  "swaps": [
    {
      "wrong": "O inciso V dispensa observância da Lei nº 10.973.",
      "right": "Manda observar os princípios gerais de contratação dessa lei."
    },
    {
      "wrong": "Qualquer autoridade de segurança pública estabelece os casos do inciso VI.",
      "right": "Os casos são estabelecidos pelo Ministro de Estado da Defesa, mediante demanda dos comandos ou dos demais ministérios."
    },
    {
      "wrong": "O inciso VII dura no máximo um ano.",
      "right": "Esse prazo não está no inciso VII. Está no VIII, ainda não aberto neste prompt."
    },
    {
      "wrong": "Grave perturbação da ordem é calamidade pública.",
      "right": "São incisos diferentes. VII não é VIII."
    },
    {
      "wrong": "Intervenção federal do inciso VII é a intervenção da União no domínio econômico.",
      "right": "Domínio econômico é o inciso X, não lido aqui. VII fala em intervenção federal."
    },
    {
      "wrong": "Estado de sítio dispensa qualquer justificativa de preço.",
      "right": "O inciso não diz isso. O processo do art. 72 não foi revogado por estas hipóteses."
    },
    {
      "wrong": "O governador edita a lista do inciso VI.",
      "right": "O texto nomeia o Ministro de Estado da Defesa."
    },
    {
      "wrong": "Os artigos da Lei nº 10.973 foram transcritos neste prompt.",
      "right": "Foram citados. Não abertos."
    }
  ],
  "timeline": [
    {
      "when": "V",
      "title": "Lei de inovação",
      "text": "Arts. 3º, 3º-A, 4º, 5º e 20. Conferir lá. Não aqui."
    },
    {
      "when": "VI",
      "title": "Ministro da Defesa",
      "text": "Casos estabelecidos por ele. Demanda dos comandos ou dos demais ministérios."
    },
    {
      "when": "VII",
      "title": "Crise institucional",
      "text": "Guerra, defesa, sítio, intervenção federal ou grave perturbação. Sem prazo neste inciso."
    }
  ],
  "articles": [
    {
      "id": "vvii",
      "num": "V-VII",
      "kicker": "Art. 75",
      "title": "Três incisos sem prazo",
      "lead": "Nenhum escreve dia nem real.",
      "plate": "Sem o ano do inciso VIII.",
      "plateSource": "Art. 75, V a VII",
      "devices": [
        {
          "tag": "V",
          "name": "Lei nº 10.973",
          "hook": "Cinco remissões, zero transcrição.",
          "literal": "Art. 75, V: é dispensável a licitação para contratação com vistas ao cumprimento do disposto nos arts. 3º, 3º-A, 4º, 5º e 20 da Lei nº 10.973, de 2 de dezembro de 2004, observados os princípios gerais de contratação constantes da referida Lei.",
          "context": "Observados. A dispensa não apaga os princípios daquela lei. Os artigos não foram lidos.",
          "exam": "A banca inventa o conteúdo do art. 3º-A.",
          "trap": "Não use a remissão para contratar pesquisa fora do que aquela lei permitir. Confira o texto oficial.",
          "example": "ICT e agência de fomento já apareceram na alínea d. Não as misture com este inciso sem ler a lei citada.",
          "mnemonic": "Cita cinco artigos. Não os abre."
        },
        {
          "tag": "VI",
          "name": "Segurança nacional",
          "hook": "Ministro, não a lista inventada.",
          "literal": "Art. 75, VI: é dispensável a licitação para contratação que possa acarretar comprometimento da segurança nacional, nos casos estabelecidos pelo Ministro de Estado da Defesa, mediante demanda dos comandos das Forças Armadas ou dos demais ministérios.",
          "context": "Possa acarretar. Casos estabelecidos. Demanda. Três travas. A lista não está na lei.",
          "exam": "A banca trata qualquer compra policial como segurança nacional.",
          "trap": "Não invente portaria nem caso.",
          "example": "Sem a demanda e sem o caso estabelecido pelo Ministro, o inciso não abre. A PCPE não edita essa lista.",
          "mnemonic": "Ministro da Defesa. Demanda. Caso estabelecido."
        },
        {
          "tag": "VII",
          "name": "Crise",
          "hook": "Cinco situações, nenhum prazo.",
          "literal": "Art. 75, VII: é dispensável a licitação nos casos de guerra, estado de defesa, estado de sítio, intervenção federal ou de grave perturbação da ordem.",
          "context": "Ou. Não exige as cinco juntas. Não escreve um ano, nem vedação de prorrogação.",
          "exam": "A banca cola o regime do inciso VIII.",
          "trap": "Grave perturbação da ordem não se declara por conveniência da compra.",
          "example": "Estado de sítio, se decretado na forma da Constituição, pode abrir o inciso. A compra ordinária da delegacia, não.",
          "mnemonic": "Cinco nomes. Zero dia."
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Ministro da Defesa",
      "source": "Art. 75, VI",
      "does": [
        "Estabelecer os casos"
      ],
      "doesNot": [
        "A lista não está neste prompt",
        "O delegado não o substitui"
      ]
    },
    {
      "role": "Comandos ou ministérios",
      "source": "Art. 75, VI",
      "does": [
        "Demandar a contratação"
      ],
      "doesNot": [
        "Demanda sem caso estabelecido não basta"
      ]
    },
    {
      "role": "Autoridade da crise",
      "source": "Art. 75, VII",
      "does": [
        "Atuar se a situação do inciso existir"
      ],
      "doesNot": [
        "Não cria guerra nem sítio por ato de compra"
      ]
    }
  ],
  "roleNote": "O ano de emergência não mora nestes incisos.",
  "rolePlate": "Sem prazo escrito.",
  "rolePlateSource": "Art. 75, V a VII",
  "summary": [
    {
      "item": "V",
      "rule": "Cumprir cinco artigos da Lei nº 10.973.",
      "clue": "Artigos não abertos."
    },
    {
      "item": "Princípios",
      "rule": "Os da lei citada também.",
      "clue": "Dispensa não os apaga."
    },
    {
      "item": "VI",
      "rule": "Segurança nacional.",
      "clue": "Casos do Ministro da Defesa."
    },
    {
      "item": "Demanda",
      "rule": "Comandos ou demais ministérios.",
      "clue": "Não é pedido interno da PCPE."
    },
    {
      "item": "VII",
      "rule": "Guerra, defesa, sítio, intervenção federal ou grave perturbação.",
      "clue": "Ou, não e."
    },
    {
      "item": "Prazo",
      "rule": "Não está no VII.",
      "clue": "Não importe o ano do VIII."
    },
    {
      "item": "VIII",
      "rule": "Não entra.",
      "clue": "Emergência é o próximo."
    },
    {
      "item": "X",
      "rule": "Não é intervenção federal.",
      "clue": "Domínio econômico fica fechado aqui."
    }
  ],
  "compare": [
    {
      "item": "VII e VIII",
      "ce": "Crise institucional, sem prazo neste inciso.",
      "cf": "Emergência tem ano e vedações. Próximo prompt.",
      "effect": "separa"
    },
    {
      "item": "VI",
      "ce": "Ministro da Defesa.",
      "cf": "Não é o governador.",
      "effect": "restringe"
    },
    {
      "item": "V",
      "ce": "Remissão.",
      "cf": "Não é transcrição.",
      "effect": "restringe"
    },
    {
      "item": "VII",
      "ce": "Cinco situações alternativas.",
      "cf": "Não são cumulativas.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 88011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O art. 75, VII, da Lei nº 14.133/2021 limita a dispensa ao prazo máximo de um ano e permite que o delegado estabeleça os casos de segurança nacional do inciso VI.",
      "correct": "E",
      "comentario": "ERRADO. O inciso VII não escreve prazo. O prazo de um ano é do inciso VIII, fora deste prompt. Os casos do inciso VI são estabelecidos pelo Ministro de Estado da Defesa."
    },
    {
      "id": 88012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O inciso V do art. 75",
      "correct": "c",
      "comentario": "Cita cinco artigos da Lei nº 10.973 e manda observar os princípios gerais de contratação dessa lei. Não os transcreve.",
      "options": [
        {
          "key": "a",
          "label": "transcreve o art. 3º-A da Lei nº 10.973 e dispensa os princípios dela."
        },
        {
          "key": "b",
          "label": "é a hipótese de guerra."
        },
        {
          "key": "c",
          "label": "autoriza contratação para cumprir os arts. 3º, 3º-A, 4º, 5º e 20 da Lei nº 10.973/2004, observados os princípios gerais de contratação dessa lei."
        },
        {
          "key": "d",
          "label": "fixa o teto de R$ 392.952,63."
        },
        {
          "key": "e",
          "label": "é estabelecido pelo Ministro da Defesa."
        }
      ]
    },
    {
      "id": 88013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Grave perturbação da ordem, no art. 75,",
      "correct": "a",
      "comentario": "Está no inciso VII, ao lado de guerra, estado de defesa, estado de sítio e intervenção federal. Não é o inciso VIII.",
      "options": [
        {
          "key": "a",
          "label": "é uma das situações do inciso VII, que não escreve o prazo de um ano."
        },
        {
          "key": "b",
          "label": "é sinônimo de calamidade pública do inciso VIII."
        },
        {
          "key": "c",
          "label": "autoriza a União a regular preços, pelo mesmo inciso."
        },
        {
          "key": "d",
          "label": "exige demanda do comando militar."
        },
        {
          "key": "e",
          "label": "veda a prorrogação do contrato, por frase deste inciso."
        }
      ]
    }
  ],
  "palette": "azure",
  "highlight": {
    "big": "Sem um ano",
    "small": "esse prazo é do inciso VIII"
  },
  "heroLead": "V, VI e VII não escrevem dia nem real. O Ministro da Defesa não é o delegado. A emergência fica para o próximo.",
  "footerLine": "Incisos V a VII lidos. O VIII não entrou.",
  "nextLine": "Diga continue para o Prompt 89: emergência e calamidade, art. 75, VIII, com o § 6º e a ADI 6.890.",
  "closingMnemonic": "Inovação por remissão. Defesa, o Ministro. Crise institucional sem prazo emprestado.",
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
      "id": "vvii",
      "num": "V-VII",
      "label": "Três incisos sem prazo"
    }
  ]
};
