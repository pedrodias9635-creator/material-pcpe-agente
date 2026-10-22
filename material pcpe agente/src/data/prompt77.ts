import type { StudyModule } from "./study";

export const PROMPT77: StudyModule = {
  "short": "Cargo e função",
  "eyebrow": "Prompt 77 de 86 · Cargo, emprego e função",
  "title": "Cargo, emprego e função",
  "subtitle": "acesso e confiança",
  "description": "O item 13 separa cargo, emprego e função. O art. 37, I e V, é o texto. Cargo é o lugar estatutário. Emprego é o contratual. Função de confiança é só de efetivo.",
  "reading": "Constituição, art. 37, I e V, redação da Emenda Constitucional nº 19/1998.",
  "terms": [
    "cargo",
    "emprego",
    "função de confiança",
    "comissão"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "Cargo e emprego são acessíveis a brasileiros e a estrangeiros, na forma da lei.",
    "Função de confiança é exclusiva de servidor de cargo efetivo.",
    "Comissão é para direção, chefia e assessoramento, não para serviço burocrático comum."
  ],
  "importance": "A banca põe função de confiança em comissionado sem cargo efetivo.",
  "distinctions": [
    "I: acessibilidade. Não é o concurso. O concurso é o inciso II, no próximo prompt.",
    "V atual: função de confiança só de efetivo. Comissão, com percentuais de carreira, só para direção, chefia e assessoramento.",
    "Emprego não é cargo. O regime não se inventa."
  ],
  "organs": [
    {
      "sigla": "I",
      "nome": "Acesso",
      "funcao": "Brasileiro e estrangeiro, na forma da lei.",
      "base": "I",
      "nao": "Acessível não é investidura. Investidura de cargo e emprego está no inciso II.",
      "tone": "cyan"
    },
    {
      "sigla": "V",
      "nome": "Confiança e comissão",
      "funcao": "Dois institutos, uma frase.",
      "base": "V",
      "nao": "Apenas direção, chefia e assessoramento. Não é atribuição comum.",
      "tone": "emerald"
    },
    {
      "sigla": "REG",
      "nome": "Cargo não é emprego",
      "funcao": "Estatuto não é CLT.",
      "base": "REG",
      "nao": "Função sem cargo é outra figura. A de confiança exige efetivo.",
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
      "wrong": "Função de confiança pode ser exercida por comissionado sem cargo efetivo.",
      "right": "A frase diz exclusivamente por efetivo."
    },
    {
      "wrong": "Cargo em comissão serve a qualquer atribuição.",
      "right": "Apenas direção, chefia e assessoramento."
    },
    {
      "wrong": "O inciso I é o concurso.",
      "right": "O concurso é o inciso II."
    },
    {
      "wrong": "Estrangeiro está absolutamente fora.",
      "right": "Cabe na forma da lei."
    },
    {
      "wrong": "O percentual mínimo está cifrado no inciso V.",
      "right": "A lei é que prevê. O inciso não cifra."
    },
    {
      "wrong": "Cargo e emprego são o mesmo regime.",
      "right": "Doutrina os separa. O inciso só trata do acesso."
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
      "id": "p77",
      "num": "77",
      "kicker": "Cargo, emprego e função",
      "title": "Cargo, emprego e função",
      "lead": "acesso e confiança",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "I",
          "name": "Acesso",
          "hook": "Brasileiro e estrangeiro, na forma da lei.",
          "literal": "Constituição, art. 37, I, redação da Emenda Constitucional nº 19/1998: os cargos, empregos e funções públicas são acessíveis aos brasileiros que preencham os requisitos estabelecidos em lei, assim como aos estrangeiros, na forma da lei.",
          "context": "Na forma da lei. O inciso não dispensa requisito nem abre a vaga ao estrangeiro sem lei.",
          "exam": "A banca fecha o cargo ao estrangeiro em absoluto, contra a redação atual.",
          "trap": "Acessível não é investidura. Investidura de cargo e emprego está no inciso II.",
          "example": "O requisito do cargo de Agente está na lei do concurso, já não reaberta. O inciso I não o substitui.",
          "mnemonic": "Acesso com requisito. Estrangeiro, só na forma da lei."
        },
        {
          "tag": "V",
          "name": "Confiança e comissão",
          "hook": "Dois institutos, uma frase.",
          "literal": "Constituição, art. 37, V, redação da Emenda Constitucional nº 19/1998: as funções de confiança, exercidas exclusivamente por servidores ocupantes de cargo efetivo, e os cargos em comissão, a serem preenchidos por servidores de carreira nos casos, condições e percentuais mínimos previstos em lei, destinam-se apenas às atribuições de direção, chefia e assessoramento.",
          "context": "Exclusivamente. Função de confiança não vai para quem não é efetivo. Percentual mínimo não está cifrado. A lei é que prevê.",
          "exam": "A banca iguala função de confiança e cargo em comissão.",
          "trap": "Apenas direção, chefia e assessoramento. Não é atribuição comum.",
          "example": "Um efetivo pode receber função de confiança de chefia. Um comissionado sem cargo efetivo não recebe função de confiança, pela frase.",
          "mnemonic": "Confiança: só efetivo. Comissão: não é serviço comum."
        },
        {
          "tag": "REG",
          "name": "Cargo não é emprego",
          "hook": "Estatuto não é CLT.",
          "literal": "Doutrina: cargo público é o lugar criado em lei, em regra sob estatuto. Emprego público é o posto sob regime contratual. A Constituição não define os dois no art. 37, I. Só os torna acessíveis. O regime do Agente da PCPE é o das leis já lidas, não o emprego. Não invente conversão.",
          "context": "Não chame o cargo policial de emprego para aplicar regra trabalhista não lida.",
          "exam": "A banca troca cargo por emprego e cobra FGTS como se o inciso I o escrevesse.",
          "trap": "Função sem cargo é outra figura. A de confiança exige efetivo.",
          "example": "O Agente ocupa cargo. Não vire o vínculo em emprego por analogia.",
          "mnemonic": "Cargo, estatuto. Emprego, contrato. Sem conversão."
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
      "item": "I",
      "rule": "Acesso.",
      "clue": "Estrangeiro na forma da lei."
    },
    {
      "item": "II",
      "rule": "Concurso.",
      "clue": "Próximo prompt."
    },
    {
      "item": "Confiança",
      "rule": "Só efetivo.",
      "clue": "Exclusivamente."
    },
    {
      "item": "Comissão",
      "rule": "Direção, chefia, assessoramento.",
      "clue": "Percentual na lei, sem cifra aqui."
    },
    {
      "item": "Cargo",
      "rule": "Estatuto, em doutrina.",
      "clue": "Não é emprego."
    },
    {
      "item": "PCPE",
      "rule": "Cargo já estudado.",
      "clue": "Não converter em emprego."
    }
  ],
  "compare": [
    {
      "item": "Confiança",
      "ce": "Só efetivo.",
      "cf": "Comissão pode não ser efetivo, nos limites da lei.",
      "effect": "separa"
    },
    {
      "item": "Acesso",
      "ce": "Inciso I.",
      "cf": "Concurso é o II.",
      "effect": "separa"
    },
    {
      "item": "Percentual",
      "ce": "A lei cifra.",
      "cf": "O inciso não cifra.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 77011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Função de confiança pode ser exercida por pessoa sem cargo efetivo, e o cargo em comissão se destina a qualquer atribuição administrativa.",
      "correct": "E",
      "comentario": "ERRADO. Função de confiança é exclusiva de efetivo. Comissão é só direção, chefia e assessoramento."
    },
    {
      "id": 77012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Pelo art. 37, I,",
      "correct": "a",
      "comentario": "Acesso a brasileiros com requisitos legais e a estrangeiros na forma da lei. Não é o concurso.",
      "options": [
        {
          "key": "a",
          "label": "cargos, empregos e funções são acessíveis a brasileiros que preencham os requisitos legais e a estrangeiros, na forma da lei."
        },
        {
          "key": "b",
          "label": "só brasileiros natos acessam cargo público, sem ressalva."
        },
        {
          "key": "c",
          "label": "o concurso é dispensado."
        },
        {
          "key": "d",
          "label": "emprego e cargo têm o mesmo regime, escrito no inciso."
        },
        {
          "key": "e",
          "label": "a função de confiança está definida neste inciso."
        }
      ]
    },
    {
      "id": 77013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O percentual mínimo de servidores de carreira nos cargos em comissão",
      "correct": "c",
      "comentario": "A lei prevê casos, condições e percentuais. O inciso não escreve o número.",
      "options": [
        {
          "key": "a",
          "label": "é de 50%, escrito no art. 37, V."
        },
        {
          "key": "b",
          "label": "é de 25%, escrito no inciso."
        },
        {
          "key": "c",
          "label": "não está cifrado no inciso; a lei prevê os casos, condições e percentuais mínimos."
        },
        {
          "key": "d",
          "label": "dispensa a restrição a direção, chefia e assessoramento."
        },
        {
          "key": "e",
          "label": "permite função de confiança a não efetivo."
        }
      ]
    }
  ],
  "palette": "lime",
  "highlight": {
    "big": "Cargo e função",
    "small": "sem artigo inventado"
  },
  "heroLead": "O item 13 separa cargo, emprego e função. O art. 37, I e V, é o texto. Cargo é o lugar estatutário. Emprego é o contratual. Função de confiança é só de efetivo.",
  "footerLine": "Prompt 77 de 86.",
  "nextLine": "Diga continue para o Prompt 78: concurso público.",
  "closingMnemonic": "Acesso no I. Confiança só de efetivo. Comissão não é serviço comum.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [],
  "toc": [
    {
      "id": "p77",
      "num": "77",
      "label": "Cargo, emprego e função"
    }
  ]
};
