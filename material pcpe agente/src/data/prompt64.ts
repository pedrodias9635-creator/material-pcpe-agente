import type { StudyModule } from "./study";

export const PROMPT64: StudyModule = {
  "short": "Poder hierárquico",
  "eyebrow": "Prompt 64 de 86 · Poder hierárquico",
  "title": "Poder hierárquico",
  "subtitle": "ordenar, fiscalizar, rever, delegar, avocar",
  "description": "O item 4.1 começa pelo poder hierárquico. Ele é interno. Não se exerce contra o particular. Delegar não é abdicar. Avocar não é punir.",
  "reading": "Doutrina. Texto conferido só para não confundir com o art. 84, II, já lido: direção superior não é o poder hierárquico inteiro.",
  "terms": [
    "hierarquia",
    "delegação",
    "avocação",
    "revisão"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "Hierarquia existe dentro da mesma pessoa jurídica, em doutrina.",
    "Não há hierarquia entre administração direta e autarquia. Há tutela, outro prompt.",
    "Delegação não transfere a titularidade."
  ],
  "importance": "A banca cobra hierarquia da PCPE sobre o cidadão, ou avocação como pena.",
  "distinctions": [
    "Ordenar, fiscalizar, rever atos, delegar e avocar são os verbos de doutrina.",
    "Avocação é trazer de volta competência delegada ou inferior, não sanção.",
    "O subordinado não revê o ato do superior, em doutrina."
  ],
  "organs": [
    {
      "sigla": "INT",
      "nome": "Interno",
      "funcao": "Não é poder de polícia.",
      "base": "INT",
      "nao": "Revisão hierárquica não é recurso judicial.",
      "tone": "cyan"
    },
    {
      "sigla": "DEL",
      "nome": "Delegar e avocar",
      "funcao": "Empresta o exercício. Não doa o cargo.",
      "base": "DEL",
      "nao": "Avocação não é punição disciplinar. Pena fica no poder disciplinar.",
      "tone": "emerald"
    },
    {
      "sigla": "TUT",
      "nome": "Não é tutela",
      "funcao": "Pessoa diversa, poder diverso.",
      "base": "TUT",
      "nao": "Empresa pública também não é subordinada hierárquica da secretaria.",
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
      "wrong": "O poder hierárquico obriga o particular.",
      "right": "É interno."
    },
    {
      "wrong": "Delegar transfere o cargo.",
      "right": "Transfere exercício, em doutrina, não a titularidade."
    },
    {
      "wrong": "Avocar é pena.",
      "right": "Avocar é chamar a competência."
    },
    {
      "wrong": "Há hierarquia sobre a autarquia.",
      "right": "Há tutela, não hierarquia."
    },
    {
      "wrong": "O subordinado anula o ato do chefe.",
      "right": "A revisão sobe, não desce, em doutrina."
    },
    {
      "wrong": "O art. 84, II, é o estatuto do poder hierárquico.",
      "right": "É direção superior federal. Não é esta lista."
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
      "id": "p64",
      "num": "64",
      "kicker": "Poder hierárquico",
      "title": "Poder hierárquico",
      "lead": "ordenar, fiscalizar, rever, delegar, avocar",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "INT",
          "name": "Interno",
          "hook": "Não é poder de polícia.",
          "literal": "Doutrina: o poder hierárquico organiza a relação entre agentes da mesma Administração. Ordena, fiscaliza e revê. Não se dirige ao particular. O particular se sujeita a outros poderes, não a este.",
          "context": "Não use hierarquia para justificar busca ou prisão. Isso não é o tema.",
          "exam": "A banca cobra o poder hierárquico como poder sobre o cidadão.",
          "trap": "Revisão hierárquica não é recurso judicial.",
          "example": "O delegado revê o ato do agente da mesma estrutura, se a norma der essa competência. Não revê o juiz.",
          "mnemonic": "Dentro da Administração. Não na rua."
        },
        {
          "tag": "DEL",
          "name": "Delegar e avocar",
          "hook": "Empresta o exercício. Não doa o cargo.",
          "literal": "Doutrina: delegar é transferir o exercício de uma competência, não a titularidade. Avocar é chamar a si o que estava em nível inferior. Nem toda competência é delegável. A lei do caso é que diz. Este prompt não transcreve essa lei. Não invente o artigo.",
          "context": "Delegação não se presume ilimitada.",
          "exam": "A banca trata delegação como renúncia definitiva.",
          "trap": "Avocação não é punição disciplinar. Pena fica no poder disciplinar.",
          "example": "Um superior pode avocar um processo interno se a norma permitir. Não avoca a sentença.",
          "mnemonic": "Exercício emprestado. Titularidade fica."
        },
        {
          "tag": "TUT",
          "name": "Não é tutela",
          "hook": "Pessoa diversa, poder diverso.",
          "literal": "Doutrina: entre a administração direta e a autarquia não há hierarquia. Há controle finalístico, ou tutela, que o Prompt 73 não antecipa em artigo. O art. 84, II, é direção superior da administração federal, não a lista de verbos deste poder.",
          "context": "Não chame o governador de superior hierárquico da autarquia.",
          "exam": "A banca unifica hierarquia e tutela.",
          "trap": "Empresa pública também não é subordinada hierárquica da secretaria.",
          "example": "A PCPE, órgão sem personalidade própria, está na hierarquia da administração direta. A autarquia estadual, não.",
          "mnemonic": "Mesma pessoa: hierarquia. Outra pessoa: não."
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
      "item": "Alcance",
      "rule": "Interno.",
      "clue": "Não alcança o particular."
    },
    {
      "item": "Verbos",
      "rule": "Ordenar, fiscalizar, rever, delegar, avocar.",
      "clue": "Doutrina."
    },
    {
      "item": "Delegação",
      "rule": "Exercício.",
      "clue": "Não é renúncia."
    },
    {
      "item": "Avocação",
      "rule": "Chamar a si.",
      "clue": "Não é pena."
    },
    {
      "item": "Autarquia",
      "rule": "Sem hierarquia.",
      "clue": "Tutela é outro nome."
    },
    {
      "item": "PCPE",
      "rule": "Órgão da direta.",
      "clue": "Cabe na hierarquia da pessoa estadual."
    }
  ],
  "compare": [
    {
      "item": "Hierarquia",
      "ce": "Mesma pessoa.",
      "cf": "Tutela é outra pessoa.",
      "effect": "separa"
    },
    {
      "item": "Delegar",
      "ce": "Exercício.",
      "cf": "Titularidade fica.",
      "effect": "restringe"
    },
    {
      "item": "Avocar",
      "ce": "Competência.",
      "cf": "Pena é outro poder.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 64011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O poder hierárquico se exerce sobre o particular e inclui a avocação como espécie de sanção disciplinar.",
      "correct": "E",
      "comentario": "ERRADO. É poder interno. Avocação não é pena."
    },
    {
      "id": 64012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Delegação, neste prompt,",
      "correct": "b",
      "comentario": "Exercício, não titularidade. Nem tudo se delega. A lei do caso não foi transcrita.",
      "options": [
        {
          "key": "a",
          "label": "transfere em definitivo a titularidade do cargo."
        },
        {
          "key": "b",
          "label": "transfere o exercício, não a titularidade, e nem toda competência é delegável."
        },
        {
          "key": "c",
          "label": "é o nome da tutela sobre a autarquia."
        },
        {
          "key": "d",
          "label": "obriga o particular a cumprir ordem de polícia."
        },
        {
          "key": "e",
          "label": "está definida no art. 37, caput."
        }
      ]
    },
    {
      "id": 64013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Entre secretaria e autarquia",
      "correct": "c",
      "comentario": "Pessoas diferentes. Hierarquia não atravessa a personalidade.",
      "options": [
        {
          "key": "a",
          "label": "há subordinação hierárquica plena."
        },
        {
          "key": "b",
          "label": "não há qualquer controle."
        },
        {
          "key": "c",
          "label": "não há hierarquia; o controle, se existir, é finalístico."
        },
        {
          "key": "d",
          "label": "a autarquia é órgão da secretaria."
        },
        {
          "key": "e",
          "label": "o art. 84, II, cria essa hierarquia no Estado."
        }
      ]
    }
  ],
  "palette": "ember",
  "highlight": {
    "big": "Poder hierárquico",
    "small": "sem artigo inventado"
  },
  "heroLead": "O item 4.1 começa pelo poder hierárquico. Ele é interno. Não se exerce contra o particular. Delegar não é abdicar. Avocar não é punir.",
  "footerLine": "Prompt 64 de 86.",
  "nextLine": "Diga continue para o Prompt 65: poder disciplinar.",
  "closingMnemonic": "Hierarquia é interna. Delega o exercício. Avocar não é punir.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [],
  "toc": [
    {
      "id": "p64",
      "num": "64",
      "label": "Poder hierárquico"
    }
  ]
};
