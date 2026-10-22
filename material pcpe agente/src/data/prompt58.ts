import type { StudyModule } from "./study";

export const PROMPT58: StudyModule = {
  "short": "Direito administrativo",
  "eyebrow": "Prompt 58 de 86 · Direito administrativo",
  "title": "Conceito, objeto e fontes",
  "subtitle": "o ramo não tem um artigo-definição",
  "description": "O item 2 do edital pede conceito, objeto e fontes. Não há, neste curso, um artigo que defina o ramo. A fonte constitucional conferida é a competência da União para normas gerais de licitação.",
  "reading": "Doutrina. Texto conferido: Constituição, art. 22, XXVII, redação da Emenda Constitucional nº 19/1998.",
  "terms": [
    "conceito",
    "objeto",
    "fontes",
    "normas gerais"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "Conceito é doutrina. Não invente um art. 1º de um código inexistente.",
    "Objeto: a atividade administrativa e o regime jurídico-administrativo, também doutrina.",
    "Fonte primária é a Constituição. Lei, regulamento e princípio vêm depois, cada um no seu lugar."
  ],
  "importance": "A banca trata jurisprudência como se fosse lei, ou nega a competência da União para a norma geral.",
  "distinctions": [
    "Conceito de doutrina: ramo que estuda a Administração e o regime de direito público que a rege.",
    "Objeto não é só licitação. Licitação é um capítulo, já aberto nos Prompts 40 a 56.",
    "Art. 22, XXVII, explica por que a Lei nº 14.133 alcança a administração direta estadual."
  ],
  "organs": [
    {
      "sigla": "CON",
      "nome": "Conceito",
      "funcao": "Doutrina, sem número forjado.",
      "base": "CON",
      "nao": "Regime jurídico próprio não é o regime privado da empresa pública, que segue a Lei nº 13.303/2016.",
      "tone": "cyan"
    },
    {
      "sigla": "OBJ",
      "nome": "Objeto",
      "funcao": "Mais largo que licitação.",
      "base": "OBJ",
      "nao": "Improbidade e processo já tiveram prompts próprios. Não os reabra aqui.",
      "tone": "emerald"
    },
    {
      "sigla": "22, XX",
      "nome": "Norma geral",
      "funcao": "A União legisla. O Estado aplica.",
      "base": "22, XXVII",
      "nao": "Empresas públicas estão no inciso, mas nos termos do art. 173, § 1º, III, não como se a Lei nº 14.133 fosse o estatuto delas. O art. 178 des",
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
      "wrong": "O conceito do ramo está no art. 1º da Lei nº 14.133.",
      "right": "Esse artigo é de licitação, não a definição do ramo."
    },
    {
      "wrong": "Pernambuco está fora da norma geral.",
      "right": "O art. 22, XXVII, inclui os Estados."
    },
    {
      "wrong": "Empresa pública segue a Lei nº 14.133 porque o inciso a menciona.",
      "right": "O inciso a remete ao art. 173, § 1º, III. O estatuto dela não foi aberto."
    },
    {
      "wrong": "Jurisprudência é lei.",
      "right": "É fonte de doutrina e de aplicação. Não se cita acórdão sem conferir."
    },
    {
      "wrong": "O objeto do ramo é só o contrato.",
      "right": "Ato, poder, serviço, agente e controle também são objeto."
    },
    {
      "wrong": "Regulamento está acima da lei.",
      "right": "Regulamento de fiel execução não revoga lei. O Prompt 66 volta a isso."
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
      "id": "p58",
      "num": "58",
      "kicker": "Direito administrativo",
      "title": "Conceito, objeto e fontes",
      "lead": "o ramo não tem um artigo-definição",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "CON",
          "name": "Conceito",
          "hook": "Doutrina, sem número forjado.",
          "literal": "Doutrina: Direito administrativo é o ramo que disciplina a organização da Administração e a atividade de gestão do interesse público sob regime jurídico próprio. Não há, neste prompt, transcrição de um artigo que traga essa frase. Se a banca citar número, confira.",
          "context": "Não complete a definição com percentual ou prazo.",
          "exam": "A banca apresenta a definição como se fosse o caput de uma lei.",
          "trap": "Regime jurídico próprio não é o regime privado da empresa pública, que segue a Lei nº 13.303/2016.",
          "example": "A PCPE se estuda neste ramo porque é administração pública, não porque o ramo tenha um código único.",
          "mnemonic": "Ramo de doutrina. Número só se estiver no texto."
        },
        {
          "tag": "OBJ",
          "name": "Objeto",
          "hook": "Mais largo que licitação.",
          "literal": "Doutrina: o objeto inclui organização, ato, poder, serviço, controle, agente e a responsabilização. Licitação e contrato são parte, não o ramo inteiro. Os Prompts 40 a 56 abriram a Lei nº 14.133 até o art. 75, IV, a a f. O restante dessa lei não foi transcrito.",
          "context": "Não diga que o objeto se esgota no art. 37.",
          "exam": "A banca reduz o ramo à Lei nº 14.133.",
          "trap": "Improbidade e processo já tiveram prompts próprios. Não os reabra aqui.",
          "example": "Um ato de delegado e um contrato de compra cabem no objeto. Um crime do Código Penal, não.",
          "mnemonic": "O ramo é maior que o edital de licitação."
        },
        {
          "tag": "22, XXVII",
          "name": "Norma geral",
          "hook": "A União legisla. O Estado aplica.",
          "literal": "Constituição, art. 22, XXVII, redação da Emenda Constitucional nº 19/1998: compete privativamente à União legislar sobre normas gerais de licitação e contratação, em todas as modalidades, para as administrações públicas diretas, autárquicas e fundacionais da União, dos Estados, do Distrito Federal e dos Municípios, obedecido o art. 37, XXI, e para as empresas públicas e sociedades de economia mista, nos termos do art. 173, § 1º, III.",
          "context": "Privativo não significa que o Estado não possa ter norma específica onde a norma geral deixar espaço. Não invente esse espaço.",
          "exam": "A banca diz que a Lei nº 14.133 não vale em Pernambuco.",
          "trap": "Empresas públicas estão no inciso, mas nos termos do art. 173, § 1º, III, não como se a Lei nº 14.133 fosse o estatuto delas. O art. 178 dessa lei não foi aberto.",
          "example": "A compra da PCPE segue a norma geral. A compra de uma sociedade de economia mista não se resolve por analogia com essa lei.",
          "mnemonic": "Norma geral é da União. Empresa pública não muda de estatuto."
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
      "item": "Conceito",
      "rule": "Doutrina.",
      "clue": "Sem artigo-definição neste curso."
    },
    {
      "item": "Objeto",
      "rule": "Não é só licitação.",
      "clue": "Prompts 40 a 56 são um capítulo."
    },
    {
      "item": "Fonte",
      "rule": "Constituição primeiro.",
      "clue": "Lei não a substitui."
    },
    {
      "item": "Art. 22, XXVII",
      "rule": "Norma geral da União.",
      "clue": "Alcança a administração direta dos Estados."
    },
    {
      "item": "Empresa pública",
      "rule": "Remissão ao art. 173, § 1º, III.",
      "clue": "Lei nº 13.303 não foi aberta."
    },
    {
      "item": "Jurisprudência",
      "rule": "Não se inventa número.",
      "clue": "Conferir antes de citar."
    }
  ],
  "compare": [
    {
      "item": "Norma geral",
      "ce": "União, art. 22, XXVII.",
      "cf": "Estado aplica, não fica de fora.",
      "effect": "espelha"
    },
    {
      "item": "Empresa pública",
      "ce": "Mencionada no inciso.",
      "cf": "Regime próprio, não a Lei nº 14.133.",
      "effect": "separa"
    },
    {
      "item": "Conceito",
      "ce": "Doutrina.",
      "cf": "Não é o art. 1º da lei de licitações.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 58011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "A competência privativa da União para normas gerais de licitação, no art. 22, XXVII, exclui os Estados e inclui as empresas públicas no mesmo regime da administração direta.",
      "correct": "E",
      "comentario": "ERRADO. O inciso inclui as administrações diretas, autárquicas e fundacionais dos Estados. Empresas públicas aparecem nos termos do art. 173, § 1º, III, não como se a Lei nº 14.133 fosse o estatuto delas."
    },
    {
      "id": 58012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Sobre fontes do Direito administrativo, é correto afirmar que",
      "correct": "c",
      "comentario": "A Constituição é fonte. O art. 22, XXVII, é competência de norma geral, não a definição do ramo. Jurisprudência não se inventa.",
      "options": [
        {
          "key": "a",
          "label": "o conceito legal do ramo está transcrito no art. 2º da Lei nº 9.784/1999, reaberto neste prompt."
        },
        {
          "key": "b",
          "label": "regulamento pode contrariar a lei se for mais eficiente."
        },
        {
          "key": "c",
          "label": "a Constituição é fonte, e o art. 22, XXVII, entrega à União as normas gerais de licitação, inclusive para a administração direta estadual."
        },
        {
          "key": "d",
          "label": "doutrina vincula como lei complementar."
        },
        {
          "key": "e",
          "label": "a Lei nº 14.133 define o objeto inteiro do Direito administrativo."
        }
      ]
    },
    {
      "id": 58013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O objeto do Direito administrativo, neste curso,",
      "correct": "d",
      "comentario": "O objeto é mais largo que a licitação já lida. Não se inventa artigo para dizê-lo.",
      "options": [
        {
          "key": "a",
          "label": "se esgota nos arts. 71 a 75 da Lei nº 14.133."
        },
        {
          "key": "b",
          "label": "não inclui agente público, porque isso é Direito do Trabalho."
        },
        {
          "key": "c",
          "label": "exclui o controle, reservado ao Direito Penal."
        },
        {
          "key": "d",
          "label": "abrange organização, ato, poder, serviço, agente e controle, sem que essa lista seja um artigo."
        },
        {
          "key": "e",
          "label": "é apenas o art. 84, II."
        }
      ]
    }
  ],
  "palette": "rose",
  "highlight": {
    "big": "Direito administrativo",
    "small": "sem artigo inventado"
  },
  "heroLead": "O item 2 do edital pede conceito, objeto e fontes. Não há, neste curso, um artigo que defina o ramo. A fonte constitucional conferida é a competência da União para normas gerais de licitação.",
  "footerLine": "Prompt 58 de 86.",
  "nextLine": "Diga continue para o Prompt 59: regime jurídico-administrativo e princípios.",
  "closingMnemonic": "Ramo sem código único. Norma geral de licitação é da União e alcança a PCPE.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [],
  "toc": [
    {
      "id": "p58",
      "num": "58",
      "label": "Conceito, objeto e fontes"
    }
  ]
};
