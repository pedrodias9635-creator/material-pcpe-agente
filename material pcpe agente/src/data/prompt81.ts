import type { StudyModule } from "./study";

export const PROMPT81: StudyModule = {
  "short": "Licitação na CF",
  "eyebrow": "Prompt 81 de 86 · Licitação na Constituição",
  "title": "Licitação na Constituição",
  "subtitle": "igualdade e qualificação indispensável",
  "description": "O art. 37, XXI, é a matriz. A Lei nº 14.133 a regulamenta para a administração direta. O que a lei já abriu não se repete. O que não foi aberto não se inventa.",
  "reading": "Constituição, art. 37, XXI, e art. 22, XXVII, já conferidos. Lei nº 14.133, Prompts 40 a 56.",
  "terms": [
    "igualdade de condições",
    "proposta",
    "qualificação indispensável",
    "norma geral"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "A regra é licitar. A ressalva é a legislação, não o gosto.",
    "Pagamento mantém as condições efetivas da proposta.",
    "Qualificação só a indispensável à garantia do cumprimento."
  ],
  "importance": "A banca exige qualificação além da indispensável, ou tira a igualdade.",
  "distinctions": [
    "XXI: obras, serviços, compras e alienações, ressalvados os casos da legislação.",
    "Igualdade de condições a todos os concorrentes.",
    "Art. 22, XXVII, já explica a norma geral. Não se reabre empresa pública."
  ],
  "organs": [
    {
      "sigla": "XXI",
      "nome": "A matriz",
      "funcao": "Licitar, com igualdade.",
      "base": "XXI",
      "nao": "Condições efetivas da proposta não são o preço de outro dia. O artigo da lei que detalha isso não se reabre se não foi o tema.",
      "tone": "cyan"
    },
    {
      "sigla": "RES",
      "nome": "Ressalva",
      "funcao": "A legislação especifica. Não o agente.",
      "base": "RES",
      "nao": "Alienação está no inciso. Não é só compra.",
      "tone": "emerald"
    },
    {
      "sigla": "MAP",
      "nome": "O que já foi lido",
      "funcao": "Até a alínea f.",
      "base": "MAP",
      "nao": "Empresa pública continua fora, salvo o art. 178, não aberto.",
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
      "wrong": "A qualificação pode ser qualquer uma que a Administração ache útil.",
      "right": "Somente a indispensável à garantia do cumprimento."
    },
    {
      "wrong": "A ressalva do XXI é a conveniência do gestor.",
      "right": "É a legislação."
    },
    {
      "wrong": "Alienação não está no inciso.",
      "right": "Está."
    },
    {
      "wrong": "O curso leu a Lei nº 14.133 até o fim.",
      "right": "Leu até o art. 75, IV, a a f."
    },
    {
      "wrong": "Condições efetivas da proposta são dispensáveis.",
      "right": "O inciso as mantém, nos termos da lei."
    },
    {
      "wrong": "Empresa pública entrou na lei já lida.",
      "right": "Não. Art. 178 não aberto."
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
      "id": "p81",
      "num": "81",
      "kicker": "Licitação na Constituição",
      "title": "Licitação na Constituição",
      "lead": "igualdade e qualificação indispensável",
      "plate": "Doutrina não é artigo.",
      "plateSource": "Fonte indicada em cada dispositivo",
      "devices": [
        {
          "tag": "XXI",
          "name": "A matriz",
          "hook": "Licitar, com igualdade.",
          "literal": "Constituição, art. 37, XXI: ressalvados os casos especificados na legislação, as obras, serviços, compras e alienações serão contratados mediante processo de licitação pública que assegure igualdade de condições a todos os concorrentes, com cláusulas que estabeleçam obrigações de pagamento, mantidas as condições efetivas da proposta, nos termos da lei, o qual somente permitirá as exigências de qualificação técnica e econômica indispensáveis à garantia do cumprimento das obrigações.",
          "context": "Somente as exigências indispensáveis. Ressalva é a legislação, não a conveniência solta.",
          "exam": "A banca acrescenta exigência útil, mas não indispensável.",
          "trap": "Condições efetivas da proposta não são o preço de outro dia. O artigo da lei que detalha isso não se reabre se não foi o tema.",
          "example": "A compra da PCPE segue essa matriz. Exigência que não garante o cumprimento não cabe.",
          "mnemonic": "Igualdade. Proposta efetiva. Qualificação indispensável."
        },
        {
          "tag": "RES",
          "name": "Ressalva",
          "hook": "A legislação especifica. Não o agente.",
          "literal": "A ressalva do inciso é os casos especificados na legislação. Dispensa e inexigibilidade já lidas são legislação. Não se cria caso novo neste prompt. Arts. 76 em diante da Lei nº 14.133 não foram transcritos.",
          "context": "Não use a ressalva como porta para fugir da licitação.",
          "exam": "A banca trata a ressalva como discricionariedade vazia.",
          "trap": "Alienação está no inciso. Não é só compra.",
          "example": "O caso fora da licitação há de estar na lei. O gosto do gestor, não.",
          "mnemonic": "Ressalva legal. Sem caso inventado."
        },
        {
          "tag": "MAP",
          "name": "O que já foi lido",
          "hook": "Até a alínea f.",
          "literal": "Prompts 40 a 56 leram a Lei nº 14.133 do art. 1º ao art. 75, IV, a a f, com os cortes anunciados. Art. 75, IV, g em diante, e arts. 76 a 194, não foram transcritos. Contrato, sanção, recurso e registro de preços não entram por memória. Conferir o texto oficial.",
          "context": "Não complete o mapa com artigo não lido.",
          "exam": "A banca cobra prazo de recurso que este curso não transcreveu.",
          "trap": "Empresa pública continua fora, salvo o art. 178, não aberto.",
          "example": "Se a questão sair do que foi lido, a resposta honesta é conferir, não chutar o número.",
          "mnemonic": "Lido até a alínea f. O resto, oficial."
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
      "item": "XXI",
      "rule": "Licitar, com igualdade.",
      "clue": "Ressalva legal."
    },
    {
      "item": "Proposta",
      "rule": "Condições efetivas.",
      "clue": "Nos termos da lei."
    },
    {
      "item": "Qualificação",
      "rule": "Só a indispensável.",
      "clue": "Não a útil."
    },
    {
      "item": "Alienação",
      "rule": "Está no inciso.",
      "clue": "Não é só compra."
    },
    {
      "item": "Lei lida",
      "rule": "Arts. 1º a 75, IV, a a f.",
      "clue": "Com os cortes dos prompts."
    },
    {
      "item": "Não lido",
      "rule": "75, IV, g em diante, e 76 a 194.",
      "clue": "Conferir."
    }
  ],
  "compare": [
    {
      "item": "Regra",
      "ce": "Licitar.",
      "cf": "Ressalva é a legislação.",
      "effect": "restringe"
    },
    {
      "item": "Qualificação",
      "ce": "Indispensável.",
      "cf": "Útil não basta.",
      "effect": "restringe"
    },
    {
      "item": "Curso",
      "ce": "Até a alínea f.",
      "cf": "Contrato e sanção não transcritos.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 81011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O art. 37, XXI, permite qualquer exigência de qualificação que pareça útil e não inclui alienação entre os objetos da licitação.",
      "correct": "E",
      "comentario": "ERRADO. Somente exigências indispensáveis à garantia do cumprimento. Alienação está no inciso."
    },
    {
      "id": 81012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A ressalva do art. 37, XXI,",
      "correct": "b",
      "comentario": "Casos especificados na legislação. Não é discricionariedade vazia.",
      "options": [
        {
          "key": "a",
          "label": "autoriza o gestor a não licitar por conveniência, sem lei."
        },
        {
          "key": "b",
          "label": "são os casos especificados na legislação."
        },
        {
          "key": "c",
          "label": "exclui a dispensa já lida, porque dispensa não é legislação."
        },
        {
          "key": "d",
          "label": "retira a igualdade de condições."
        },
        {
          "key": "e",
          "label": "abre os arts. 76 a 194, não transcritos."
        }
      ]
    },
    {
      "id": 81013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Neste curso, a Lei nº 14.133 foi transcrita",
      "correct": "a",
      "comentario": "Até o art. 75, IV, a a f. O restante não se inventa.",
      "options": [
        {
          "key": "a",
          "label": "até o art. 75, IV, alíneas a a f, sem os arts. 76 a 194."
        },
        {
          "key": "b",
          "label": "até o último artigo, inclusive sanções e contratos."
        },
        {
          "key": "c",
          "label": "apenas no art. 37, XXI."
        },
        {
          "key": "d",
          "label": "como estatuto das empresas públicas."
        },
        {
          "key": "e",
          "label": "sem o art. 71."
        }
      ]
    }
  ],
  "palette": "fresh",
  "highlight": {
    "big": "Licitação na CF",
    "small": "sem artigo inventado"
  },
  "heroLead": "O art. 37, XXI, é a matriz. A Lei nº 14.133 a regulamenta para a administração direta. O que a lei já abriu não se repete. O que não foi aberto não se inventa.",
  "footerLine": "Prompt 81 de 86.",
  "nextLine": "Diga continue para o Prompt 82: mapa do que a Lei nº 14.133 abriu e do que ficou de fora.",
  "closingMnemonic": "Licita, com igualdade. Qualificação só a indispensável. O resto da lei não foi lido.",
  "rolesTitle": "Como ler este prompt",
  "rolesLead": "Lei transcrita. Doutrina marcada. Número não conferido não entra.",
  "compareTitle": "Não misture",
  "compareLead": "A banca vive da fronteira.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "clocks": [],
  "toc": [
    {
      "id": "p81",
      "num": "81",
      "label": "Licitação na Constituição"
    }
  ]
};
