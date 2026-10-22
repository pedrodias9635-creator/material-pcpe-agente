import type { StudyModule } from "./study";

export const PROMPT65: StudyModule = {
  "short": "Poder disciplinar",
  "eyebrow": "Prompt 65 de 86 · Poder disciplinar",
  "title": "Poder disciplinar",
  "subtitle": "punir quem tem vínculo, com processo",
  "description": "Poder disciplinar não é poder de polícia e não é hierarquia. Ele pune o vínculo: servidor, e, em doutrina, quem tem relação especial com a Administração. Sem processo, não há pena. O rito do policial já foi lido e não se reabre.",
  "reading": "Doutrina. Rito da Lei nº 6.425/1972 e da Lei nº 6.123/1968: Prompts 2 a 13. Não reabrir artigo. Não ensinar atalho de punição.",
  "terms": [
    "vínculo",
    "processo",
    "pena",
    "poder de polícia"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "Discricionariedade da pena, se a lei deixar margem, não escolhe o fato.",
    "O particular sem vínculo não entra neste poder.",
    "Processo administrativo dos Prompts 38 e 39 não se copia como rito da PCPE."
  ],
  "importance": "A banca pune o cidadão da rua com o poder disciplinar, ou dispensa defesa.",
  "distinctions": [
    "Sujeito: quem tem vínculo especial. O transeunte não.",
    "O fato pode estar vinculado à lei. A pena, se a lei der faixa, pode ter margem.",
    "Contraditório e defesa não se dispensam. O rito estadual do policial já foi estudado."
  ],
  "organs": [
    {
      "sigla": "VIN",
      "nome": "Vínculo",
      "funcao": "Não é a rua.",
      "base": "VIN",
      "nao": "Contrato administrativo pode ter sanção própria, já não reaberta. Não é pena de servidor.",
      "tone": "cyan"
    },
    {
      "sigla": "PRO",
      "nome": "Processo",
      "funcao": "Pena sem defesa não é poder. É vício.",
      "base": "PRO",
      "nao": "A forma da pena está na lei do vínculo. Conferir. Não criar.",
      "tone": "emerald"
    },
    {
      "sigla": "POL",
      "nome": "Não é polícia",
      "funcao": "Dois poderes, dois sujeitos.",
      "base": "POL",
      "nao": "Hierarquia organiza. Disciplina pune. Não são o mesmo verbo.",
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
      "wrong": "Todo particular se submete ao poder disciplinar.",
      "right": "Sem vínculo especial, não."
    },
    {
      "wrong": "A pena prescinde de defesa se o fato for notório.",
      "right": "Defesa não se corta por notoriedade. Não invente exceção."
    },
    {
      "wrong": "Poder disciplinar é poder de polícia.",
      "right": "Sujeitos diferentes."
    },
    {
      "wrong": "O prazo da pena está neste prompt.",
      "right": "Não está. O rito policial já foi lido. Não se reabre."
    },
    {
      "wrong": "Discricionariedade escolhe o fato.",
      "right": "O fato é o que a norma descreve. A margem, se houver, é da pena."
    },
    {
      "wrong": "Sanção de contrato é pena de servidor.",
      "right": "São vínculos diferentes."
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
      "id": "p65",
      "num": "65",
      "kicker": "Poder disciplinar",
      "title": "Poder disciplinar",
      "lead": "punir quem tem vínculo, com processo",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "VIN",
          "name": "Vínculo",
          "hook": "Não é a rua.",
          "literal": "Doutrina: o poder disciplinar pune infração de quem mantém vínculo especial com a Administração, em regra o servidor. O cidadão que comete infração de trânsito ou de postura se submete a outro poder. Não se misturam os nomes.",
          "context": "Não use este poder para o flagrante penal. Outro ramo.",
          "exam": "A banca chama de disciplinar a multa de polícia administrativa.",
          "trap": "Contrato administrativo pode ter sanção própria, já não reaberta. Não é pena de servidor.",
          "example": "O agente da PCPE responde a processo disciplinar pelo estatuto já lido. O suspeito da investigação, não.",
          "mnemonic": "Vínculo primeiro. Rua, não."
        },
        {
          "tag": "PRO",
          "name": "Processo",
          "hook": "Pena sem defesa não é poder. É vício.",
          "literal": "Doutrina e o que os prompts anteriores já fecharam: a pena disciplinar exige processo, com defesa. Este prompt não reescreve prazo da Lei nº 6.425 nem da Lei nº 6.123. Não invente dia. Não ensine a abreviar a defesa.",
          "context": "Margem na dosimetria, se a lei a der, não escolhe suprimir o rito.",
          "exam": "A banca aceita advertência verbal sem qualquer forma, como se forma fosse livre em toda pena.",
          "trap": "A forma da pena está na lei do vínculo. Conferir. Não criar.",
          "example": "Uma sindicância não é a pena. O processo é que pode aplicar a sanção, no rito próprio.",
          "mnemonic": "Sem defesa, não há pena válida."
        },
        {
          "tag": "POL",
          "name": "Não é polícia",
          "hook": "Dois poderes, dois sujeitos.",
          "literal": "Doutrina: poder de polícia limita a liberdade e a propriedade do particular em geral. Poder disciplinar pune o vínculo. O mesmo fato da vida pode interessar aos dois, mas o nome do poder segue o sujeito e a norma. O Prompt 67 não se antecipa.",
          "context": "Não unifique os poderes para aumentar a pena.",
          "exam": "A banca usa o nome disciplinar para a licença de um estabelecimento.",
          "trap": "Hierarquia organiza. Disciplina pune. Não são o mesmo verbo.",
          "example": "O atraso do servidor pode ser disciplinar. A banca de um bar sem licença, se for o caso, é polícia. Não troque.",
          "mnemonic": "Servidor: disciplina. Particular em geral: polícia."
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
      "item": "Sujeito",
      "rule": "Vínculo especial.",
      "clue": "Não é o transeunte."
    },
    {
      "item": "Processo",
      "rule": "Defesa obrigatória.",
      "clue": "Sem prazo novo."
    },
    {
      "item": "Rito da PCPE",
      "rule": "Leis já lidas.",
      "clue": "Não reabrir."
    },
    {
      "item": "Margem",
      "rule": "Pode estar na pena.",
      "clue": "Não está no fato."
    },
    {
      "item": "Polícia",
      "rule": "Outro poder.",
      "clue": "Prompt 67."
    },
    {
      "item": "Contrato",
      "rule": "Sanção própria.",
      "clue": "Não é pena de servidor."
    }
  ],
  "compare": [
    {
      "item": "Disciplinar",
      "ce": "Vínculo.",
      "cf": "Polícia é o particular em geral.",
      "effect": "separa"
    },
    {
      "item": "Fato",
      "ce": "A norma descreve.",
      "cf": "Margem não escolhe o fato.",
      "effect": "restringe"
    },
    {
      "item": "Defesa",
      "ce": "Não se corta.",
      "cf": "Convicção não a substitui.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 65011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O poder disciplinar alcança qualquer particular e dispensa defesa quando o superior hierárquico já estiver convencido do fato.",
      "correct": "E",
      "comentario": "ERRADO. O poder alcança o vínculo especial, não a rua. Defesa não se dispensa por convicção do superior."
    },
    {
      "id": 65012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A diferença correta entre poder disciplinar e poder de polícia é que",
      "correct": "d",
      "comentario": "Disciplina pune vínculo. Polícia limita o particular em geral. A banca troca os sujeitos.",
      "options": [
        {
          "key": "a",
          "label": "os dois punem o cidadão sem vínculo, com o mesmo rito."
        },
        {
          "key": "b",
          "label": "o disciplinar não exige processo."
        },
        {
          "key": "c",
          "label": "o de polícia só alcança servidor estatutário."
        },
        {
          "key": "d",
          "label": "o disciplinar pune quem tem vínculo especial; o de polícia limita o particular em geral."
        },
        {
          "key": "e",
          "label": "os dois estão definidos no art. 37, caput."
        }
      ]
    },
    {
      "id": 65013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Quanto ao rito disciplinar do Agente da PCPE,",
      "correct": "b",
      "comentario": "Já foi lido nas leis estaduais. Este prompt não reabre prazo nem cria atalho.",
      "options": [
        {
          "key": "a",
          "label": "este prompt fixa novo prazo de defesa, de cinco dias."
        },
        {
          "key": "b",
          "label": "o rito já foi estudado na legislação estadual e não é reaberto nem abreviado aqui."
        },
        {
          "key": "c",
          "label": "a Lei nº 9.784/1999 substitui a lei policial pernambucana."
        },
        {
          "key": "d",
          "label": "a convicção do superior dispensa o processo."
        },
        {
          "key": "e",
          "label": "a pena é sempre discricionária, inclusive na escolha do fato."
        }
      ]
    }
  ],
  "palette": "teal",
  "highlight": {
    "big": "Poder disciplinar",
    "small": "sem artigo inventado"
  },
  "heroLead": "Poder disciplinar não é poder de polícia e não é hierarquia. Ele pune o vínculo: servidor, e, em doutrina, quem tem relação especial com a Administração. Sem processo, não há pena. O rito do policial já foi lido e não se reabre.",
  "footerLine": "Prompt 65 de 86.",
  "nextLine": "Diga continue para o Prompt 66: poder regulamentar.",
  "closingMnemonic": "Pune o vínculo, com defesa. A rua é outro poder.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [],
  "toc": [
    {
      "id": "p65",
      "num": "65",
      "label": "Poder disciplinar"
    }
  ]
};
