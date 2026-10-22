import type { StudyModule } from "./study";

export const PROMPT76: StudyModule = {
  "short": "Agente público",
  "eyebrow": "Prompt 76 de 86 · Agente público",
  "title": "Agente público",
  "subtitle": "a lei de licitações deu o gênero",
  "description": "O item 12 pede o agente. A Lei nº 14.133, art. 6º, V, escreve o gênero. Espécies são doutrina. A legislação do policial já foi lida e não se reabre.",
  "reading": "Lei nº 14.133/2021, art. 6º, V, já no campo de aplicação dos Prompts 40 a 56. Espécies: doutrina.",
  "terms": [
    "agente público",
    "agente político",
    "servidor",
    "particular em colaboração"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "O inciso V não diz servidor. Diz indivíduo com investidura ou vínculo.",
    "Eleição, nomeação, designação e contratação estão na frase.",
    "Particular em colaboração é doutrina. Não está nomeado no inciso."
  ],
  "importance": "A banca reduz agente a servidor estatutário, ou chama o particular convocado de servidor.",
  "distinctions": [
    "Gênero legal: mandato, cargo, emprego ou função em pessoa jurídica da Administração.",
    "Agente político, servidor e particular em colaboração são espécies de doutrina.",
    "O Agente da PCPE é servidor da direta. O nome do cargo não esgota o gênero."
  ],
  "organs": [
    {
      "sigla": "V",
      "nome": "Gênero legal",
      "funcao": "Qualquer investidura.",
      "base": "V",
      "nao": "Eleição está na lista. Contratado também.",
      "tone": "cyan"
    },
    {
      "sigla": "ESP",
      "nome": "Espécies",
      "funcao": "Doutrina, três nomes.",
      "base": "ESP",
      "nao": "Agente político não se submete, só por esse nome, ao estatuto da PCPE.",
      "tone": "emerald"
    },
    {
      "sigla": "PC",
      "nome": "O cargo do edital",
      "funcao": "Servidor da direta.",
      "base": "PC",
      "nao": "Emprego público não é o regime do cargo do Agente, salvo lei que o diga. Essa lei não se inventa.",
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
      "wrong": "Só é agente quem tem cargo efetivo.",
      "right": "O inciso inclui eleição, designação e contratação."
    },
    {
      "wrong": "Agente e servidor são sinônimos legais no art. 6º, V.",
      "right": "Servidor é espécie de doutrina. O inciso é o gênero."
    },
    {
      "wrong": "O art. 6º, V, é o estatuto da PCPE.",
      "right": "É definição da lei de licitações."
    },
    {
      "wrong": "Particular em colaboração está nomeado no inciso.",
      "right": "Não está. Doutrina."
    },
    {
      "wrong": "Mesário é servidor estatutário por este inciso.",
      "right": "O inciso não diz isso."
    },
    {
      "wrong": "Os Prompts 2 a 16 foram revogados por este conceito.",
      "right": "Não foram. Não se reabrem."
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
      "id": "p76",
      "num": "76",
      "kicker": "Agente público",
      "title": "Agente público",
      "lead": "a lei de licitações deu o gênero",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "V",
          "name": "Gênero legal",
          "hook": "Qualquer investidura.",
          "literal": "Lei nº 14.133/2021, art. 6º, V: agente público é o indivíduo que, em virtude de eleição, nomeação, designação, contratação ou qualquer outra forma de investidura ou vínculo, exerce mandato, cargo, emprego ou função em pessoa jurídica integrante da Administração Pública.",
          "context": "A frase é desta lei, para os fins dela. Não a transforme em estatuto da PCPE.",
          "exam": "A banca exige posse em cargo efetivo para alguém ser agente.",
          "trap": "Eleição está na lista. Contratado também.",
          "example": "O policial nomeado é agente. O mesário, se a questão usar a doutrina do particular em colaboração, não vira servidor por este inciso.",
          "mnemonic": "Investidura ampla. Não só o efetivo."
        },
        {
          "tag": "ESP",
          "name": "Espécies",
          "hook": "Doutrina, três nomes.",
          "literal": "Doutrina: agente político exerce função política de direção, em mandato ou cargo de chefia governamental. Servidor tem vínculo profissional, cargo ou emprego. Particular em colaboração atua sem ser servidor, como o mesário ou o jurado, se a questão os usar assim. Nenhum desses três nomes está no art. 6º, V.",
          "context": "Não cite lei de espécie que não foi aberta.",
          "exam": "A banca chama todo agente de servidor.",
          "trap": "Agente político não se submete, só por esse nome, ao estatuto da PCPE.",
          "example": "O Governador não é Agente de Polícia. Os dois cabem no gênero, não na mesma espécie.",
          "mnemonic": "Político, servidor, colaborador. Três doutrinas."
        },
        {
          "tag": "PC",
          "name": "O cargo do edital",
          "hook": "Servidor da direta.",
          "literal": "O Agente de Polícia da PCPE ocupa cargo na administração direta estadual. A Lei nº 6.425/1972, a Lei nº 6.123/1968 e as leis complementares de carreira já foram lidas nos Prompts 2 a 16. Este prompt não reabre dever, pena nem vencimento. O art. 6º, V, não substitui esse estatuto.",
          "context": "Não use a definição da licitação para criar dever novo.",
          "exam": "A banca cobra o art. 6º, V, como estatuto disciplinar.",
          "trap": "Emprego público não é o regime do cargo do Agente, salvo lei que o diga. Essa lei não se inventa.",
          "example": "Cargo policial já estudado. Gênero da licitação não o reescreve.",
          "mnemonic": "Estatuto já lido. Gênero não o apaga."
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
      "item": "Art. 6º, V",
      "rule": "Gênero da lei de licitações.",
      "clue": "Não é o estatuto policial."
    },
    {
      "item": "Formas",
      "rule": "Eleição, nomeação, designação, contratação.",
      "clue": "Não só o efetivo."
    },
    {
      "item": "Exercício",
      "rule": "Mandato, cargo, emprego ou função.",
      "clue": "Na Administração."
    },
    {
      "item": "Espécies",
      "rule": "Político, servidor, colaborador.",
      "clue": "Doutrina."
    },
    {
      "item": "PCPE",
      "rule": "Servidor da direta.",
      "clue": "Estatuto já lido."
    },
    {
      "item": "Colaborador",
      "rule": "Não vira servidor pelo inciso.",
      "clue": "Não está nomeado."
    }
  ],
  "compare": [
    {
      "item": "Gênero",
      "ce": "Art. 6º, V.",
      "cf": "Espécie é doutrina.",
      "effect": "separa"
    },
    {
      "item": "Servidor",
      "ce": "Vínculo profissional.",
      "cf": "Colaborador não é servidor.",
      "effect": "separa"
    },
    {
      "item": "Estatuto",
      "ce": "Prompts 2 a 16.",
      "cf": "Este inciso não o substitui.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 76011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Pelo art. 6º, V, da Lei nº 14.133/2021, só é agente público o ocupante de cargo efetivo, e essa definição substitui o estatuto da Polícia Civil.",
      "correct": "E",
      "comentario": "ERRADO. O inciso inclui eleição, nomeação, designação, contratação ou outra investidura. Não substitui o estatuto já lido."
    },
    {
      "id": 76012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O art. 6º, V, considera agente público quem",
      "correct": "c",
      "comentario": "A alternativa C acompanha a frase. Efetivo não é requisito.",
      "options": [
        {
          "key": "a",
          "label": "apenas o servidor estatutário federal."
        },
        {
          "key": "b",
          "label": "somente o ocupante de cargo em comissão."
        },
        {
          "key": "c",
          "label": "por eleição, nomeação, designação, contratação ou outra investidura, exerce mandato, cargo, emprego ou função em pessoa jurídica da Administração."
        },
        {
          "key": "d",
          "label": "é particular sem qualquer vínculo, fora da Administração."
        },
        {
          "key": "e",
          "label": "é exclusivamente o Agente de Polícia."
        }
      ]
    },
    {
      "id": 76013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Particular em colaboração",
      "correct": "b",
      "comentario": "Espécie de doutrina. Não está nomeada no inciso.",
      "options": [
        {
          "key": "a",
          "label": "está definido no art. 6º, V, com esse nome."
        },
        {
          "key": "b",
          "label": "é categoria de doutrina e não se confunde com o servidor da PCPE."
        },
        {
          "key": "c",
          "label": "é sempre empregado público."
        },
        {
          "key": "d",
          "label": "substitui o concurso."
        },
        {
          "key": "e",
          "label": "é o Governador, por artigo deste prompt."
        }
      ]
    }
  ],
  "palette": "lime",
  "highlight": {
    "big": "Agente público",
    "small": "sem artigo inventado"
  },
  "heroLead": "O item 12 pede o agente. A Lei nº 14.133, art. 6º, V, escreve o gênero. Espécies são doutrina. A legislação do policial já foi lida e não se reabre.",
  "footerLine": "Prompt 76 de 86.",
  "nextLine": "Diga continue para o Prompt 77: cargo, emprego e função.",
  "closingMnemonic": "Agente é gênero. Servidor é espécie. O estatuto da PCPE já foi lido.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [],
  "toc": [
    {
      "id": "p76",
      "num": "76",
      "label": "Agente público"
    }
  ]
};
