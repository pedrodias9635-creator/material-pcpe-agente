import type { StudyModule } from "./study";

export const PROMPT80: StudyModule = {
  "short": "Temporário e comissão",
  "eyebrow": "Prompt 80 de 86 · Contratação temporária",
  "title": "Temporário e comissão",
  "subtitle": "lei nos dois, livre só na comissão",
  "description": "Temporário é necessidade temporária de excepcional interesse público, casos pela lei. Comissão é livre nomeação e exoneração, declarada em lei, só para direção, chefia e assessoramento. Nenhum dos dois substitui o concurso do Agente.",
  "reading": "Constituição, art. 37, IX, e art. 37, II e V, já lidos no que couber. Sem prazo de contrato neste prompt.",
  "terms": [
    "temporário",
    "excepcional interesse",
    "comissão",
    "livre nomeação"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "O inciso IX não escreve o prazo do contrato. A lei estabelece os casos.",
    "Excepcional interesse público não é carência permanente de efetivo.",
    "Comissão não é função de confiança."
  ],
  "importance": "A banca cobre carência permanente com contrato temporário, ou põe comissionado no lugar do concurso.",
  "distinctions": [
    "IX: a lei estabelecerá os casos de contratação por tempo determinado.",
    "II: comissão declarada em lei de livre nomeação e exoneração.",
    "V: comissão só para direção, chefia e assessoramento, com percentuais de carreira na lei."
  ],
  "organs": [
    {
      "sigla": "IX",
      "nome": "Temporário",
      "funcao": "A lei lista o caso.",
      "base": "IX",
      "nao": "A lei do caso não foi aberta. Não cite número de lei temporária.",
      "tone": "cyan"
    },
    {
      "sigla": "COM",
      "nome": "Comissão",
      "funcao": "Livre, mas declarada em lei.",
      "base": "COM",
      "nao": "Livre exoneração não é demissão do estatuto. Não misture os ritos.",
      "tone": "emerald"
    },
    {
      "sigla": "V",
      "nome": "Só chefia",
      "funcao": "Não é a mão de obra comum.",
      "base": "V",
      "nao": "Percentual, de novo, não está cifrado.",
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
      "wrong": "O inciso IX escreve o prazo de três anos.",
      "right": "Não escreve prazo."
    },
    {
      "wrong": "Carência permanente autoriza temporário.",
      "right": "A frase exige necessidade temporária de excepcional interesse."
    },
    {
      "wrong": "Comissão dispensa lei.",
      "right": "Há de ser declarada em lei."
    },
    {
      "wrong": "Livre exoneração é demissão disciplinar.",
      "right": "São ritos diferentes."
    },
    {
      "wrong": "Comissão serve a qualquer atribuição.",
      "right": "Apenas direção, chefia e assessoramento."
    },
    {
      "wrong": "Função de confiança e comissão são o mesmo instituto.",
      "right": "Confiança é só de efetivo."
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
      "id": "p80",
      "num": "80",
      "kicker": "Contratação temporária",
      "title": "Temporário e comissão",
      "lead": "lei nos dois, livre só na comissão",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "IX",
          "name": "Temporário",
          "hook": "A lei lista o caso.",
          "literal": "Constituição, art. 37, IX: a lei estabelecerá os casos de contratação por tempo determinado para atender a necessidade temporária de excepcional interesse público.",
          "context": "Necessidade temporária e excepcional interesse. Os dois estão na frase. O prazo não está.",
          "exam": "A banca inventa contrato de três anos no próprio inciso.",
          "trap": "A lei do caso não foi aberta. Não cite número de lei temporária.",
          "example": "Cobrir férias de um setor, se a lei do ente o prever, pode ser temporário. Substituir o concurso da PCPE, não.",
          "mnemonic": "Temporária e excepcional. Prazo, na lei. Não aqui."
        },
        {
          "tag": "COM",
          "name": "Comissão",
          "hook": "Livre, mas declarada em lei.",
          "literal": "Constituição, art. 37, II: a ressalva é a nomeação para cargo em comissão declarado em lei de livre nomeação e exoneração. Livre não é sem lei. O cargo há de estar declarado em lei. Exoneração livre é o par da nomeação, não uma pena disciplinar.",
          "context": "Não nomeie comissionado para o cargo de Agente.",
          "exam": "A banca dispensa lei na criação do cargo em comissão.",
          "trap": "Livre exoneração não é demissão do estatuto. Não misture os ritos.",
          "example": "Um cargo de chefia de gabinete, se a lei o declarar em comissão, admite nomeação e exoneração livres. O cargo de Agente, não.",
          "mnemonic": "Declarado em lei. Livre nos dois sentidos."
        },
        {
          "tag": "V",
          "name": "Só chefia",
          "hook": "Não é a mão de obra comum.",
          "literal": "Constituição, art. 37, V: cargos em comissão destinam-se apenas às atribuições de direção, chefia e assessoramento, e serão preenchidos por servidores de carreira nos casos, condições e percentuais mínimos previstos em lei. Função de confiança continua exclusiva de efetivo.",
          "context": "Apenas. Serviço permanente de ponta não cabe em comissão.",
          "exam": "A banca usa comissão para substituir efetivo de polícia.",
          "trap": "Percentual, de novo, não está cifrado.",
          "example": "Assessoramento não é o policiamento do cargo de Agente.",
          "mnemonic": "Direção, chefia, assessoramento. Só."
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
      "item": "IX",
      "rule": "Tempo determinado.",
      "clue": "Casos pela lei."
    },
    {
      "item": "Interesse",
      "rule": "Excepcional e temporário.",
      "clue": "Não é carência permanente."
    },
    {
      "item": "Prazo",
      "rule": "Não está no inciso.",
      "clue": "Não invente."
    },
    {
      "item": "Comissão",
      "rule": "Declarada em lei.",
      "clue": "Livre nomeação e exoneração."
    },
    {
      "item": "Atribuição",
      "rule": "Direção, chefia, assessoramento.",
      "clue": "Não é o cargo de Agente."
    },
    {
      "item": "Confiança",
      "rule": "Outro instituto.",
      "clue": "Só efetivo."
    }
  ],
  "compare": [
    {
      "item": "Temporário",
      "ce": "Lei e excepcionalidade.",
      "cf": "Comissão é livre, declarada em lei.",
      "effect": "separa"
    },
    {
      "item": "Prazo",
      "ce": "Não está no IX.",
      "cf": "Não copie o III.",
      "effect": "restringe"
    },
    {
      "item": "Agente",
      "ce": "Concurso.",
      "cf": "Não entra por comissão nem por temporário.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 80011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O art. 37, IX, fixa em três anos o contrato temporário e autoriza essa contratação para suprir, em caráter permanente, o cargo efetivo de Agente.",
      "correct": "E",
      "comentario": "ERRADO. O inciso não escreve prazo e exige necessidade temporária de excepcional interesse público. Não substitui o concurso do cargo."
    },
    {
      "id": 80012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Cargo em comissão",
      "correct": "e",
      "comentario": "Declarado em lei, livre nomeação e exoneração, só para direção, chefia e assessoramento.",
      "options": [
        {
          "key": "a",
          "label": "dispensa declaração em lei."
        },
        {
          "key": "b",
          "label": "é o regime do cargo de Agente da PCPE."
        },
        {
          "key": "c",
          "label": "é função de confiança de não efetivo."
        },
        {
          "key": "d",
          "label": "serve a qualquer atividade administrativa."
        },
        {
          "key": "e",
          "label": "é de livre nomeação e exoneração, declarado em lei, e se destina apenas a direção, chefia e assessoramento."
        }
      ]
    },
    {
      "id": 80013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A contratação do art. 37, IX,",
      "correct": "b",
      "comentario": "Lei estabelece os casos. Temporária e de excepcional interesse. Sem prazo no inciso.",
      "options": [
        {
          "key": "a",
          "label": "independe de lei."
        },
        {
          "key": "b",
          "label": "depende de lei que estabeleça os casos, para necessidade temporária de excepcional interesse público."
        },
        {
          "key": "c",
          "label": "dura dois anos, prorrogáveis, pelo próprio inciso."
        },
        {
          "key": "d",
          "label": "é o concurso do inciso II."
        },
        {
          "key": "e",
          "label": "cria cargo efetivo."
        }
      ]
    }
  ],
  "palette": "cool",
  "highlight": {
    "big": "Temporário e comissão",
    "small": "sem artigo inventado"
  },
  "heroLead": "Temporário é necessidade temporária de excepcional interesse público, casos pela lei. Comissão é livre nomeação e exoneração, declarada em lei, só para direção, chefia e assessoramento. Nenhum dos dois substitui o concurso do Agente.",
  "footerLine": "Prompt 80 de 86.",
  "nextLine": "Diga continue para o Prompt 81: licitação na Constituição.",
  "closingMnemonic": "Temporário: lei, tempo e interesse excepcional. Comissão: lei, livre, só chefia.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [],
  "toc": [
    {
      "id": "p80",
      "num": "80",
      "label": "Temporário e comissão"
    }
  ]
};
