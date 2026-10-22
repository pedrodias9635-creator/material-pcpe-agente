import type { StudyModule } from "./study";

export const PROMPT53: StudyModule = {
  "short": "Contratação direta",
  "eyebrow": "Prompt 53 de 86 · Lei 14.133/2021, arts. 72 e 73",
  "title": "Processo de contratação direta",
  "subtitle": "instrução e dano com dolo, fraude ou erro grosseiro",
  "description": "Contratação direta, neste prompt, é só o processo comum da inexigibilidade e da dispensa. Os casos não entram. O art. 73 pune o dano, não ensina a contratação indevida.",
  "reading": "Lei nº 14.133/2021, arts. 72 e 73. Texto vigente no Planalto, conferido nesta rodada.",
  "terms": [
    "contratação direta",
    "inexigibilidade",
    "dispensa",
    "justificativa de preço",
    "erro grosseiro"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "O art. 71, § 4º, só remetia. O capítulo começa aqui.",
    "Inexigibilidade e dispensa compartilham este processo. As hipóteses ficam nos arts. 74 e 75.",
    "O art. 73 não é um manual de fraude. É a consequência do dano."
  ],
  "importance": "A banca cobra a lista do art. 72 como se fosse facultativa, e trata o art. 73 como responsabilidade só do agente público.",
  "distinctions": [
    "O art. 72 diz deverá ser instruído. A lista não é sugestão.",
    "Parecer jurídico e parecer técnico entram se for o caso. A estimativa de despesa não tem esse se.",
    "O art. 73 exige dolo, fraude ou erro grosseiro. Não é responsabilidade por qualquer equívoco.",
    "A solidariedade é pelo dano ao erário. Não substitui outras sanções."
  ],
  "organs": [
    {
      "sigla": "72",
      "nome": "Processo",
      "funcao": "Instrução mínima da dispensa e da inexigibilidade.",
      "base": "Art. 72, caput",
      "nao": "Não lista as hipóteses.",
      "tone": "cyan"
    },
    {
      "sigla": "VI",
      "nome": "Escolha",
      "funcao": "Razão da escolha do contratado.",
      "base": "Art. 72, VI",
      "nao": "Não é a justificativa de preço.",
      "tone": "emerald"
    },
    {
      "sigla": "VII",
      "nome": "Preço",
      "funcao": "Justificativa de preço.",
      "base": "Art. 72, VII",
      "nao": "Não substitui a razão da escolha.",
      "tone": "orange"
    },
    {
      "sigla": "PU",
      "nome": "Divulgação",
      "funcao": "O ato ou o extrato fica em sítio oficial.",
      "base": "Art. 72, parágrafo único",
      "nao": "Publicidade não cura instrução faltante.",
      "tone": "violet"
    },
    {
      "sigla": "73",
      "nome": "Dano",
      "funcao": "Contratado e agente respondem solidariamente se houver dolo, fraude ou erro grosseiro.",
      "base": "Art. 73",
      "nao": "Não é responsabilidade objetiva por qualquer contratação direta.",
      "tone": "yellow"
    },
    {
      "sigla": "74",
      "nome": "Fora",
      "funcao": "Os casos de inexigibilidade começam no artigo seguinte.",
      "base": "Art. 74, ainda fechado",
      "nao": "Não entre nesse rol neste prompt.",
      "tone": "sky"
    }
  ],
  "swaps": [
    {
      "wrong": "A instrução do art. 72 é facultativa.",
      "right": "O caput diz deverá ser instruído."
    },
    {
      "wrong": "Razão da escolha e justificativa de preço são o mesmo documento.",
      "right": "São os incisos VI e VII."
    },
    {
      "wrong": "Parecer jurídico é sempre obrigatório, sem o se for o caso.",
      "right": "O inciso III escreve se for o caso."
    },
    {
      "wrong": "A divulgação do extrato dispensa a autorização da autoridade.",
      "right": "A autorização é o inciso VIII. A divulgação é o parágrafo único."
    },
    {
      "wrong": "Qualquer contratação direta indevida gera solidariedade automática.",
      "right": "O art. 73 exige dolo, fraude ou erro grosseiro, e um dano ao erário."
    },
    {
      "wrong": "Só o agente público responde pelo art. 73.",
      "right": "Contratado e agente respondem solidariamente."
    },
    {
      "wrong": "O art. 73 esgota as sanções.",
      "right": "A solidariedade é sem prejuízo de outras sanções legais cabíveis."
    },
    {
      "wrong": "Este prompt lista os casos de inexigibilidade.",
      "right": "Os casos são o art. 74, ainda não aberto."
    }
  ],
  "timeline": [
    {
      "when": "1",
      "title": "Demanda",
      "text": "Formalização da demanda e, se for o caso, estudo, risco e termo de referência ou projeto."
    },
    {
      "when": "2",
      "title": "Preço e escolha",
      "text": "Estimativa, razão da escolha e justificativa de preço."
    },
    {
      "when": "3",
      "title": "Autorização",
      "text": "Autoridade competente autoriza. O ato ou o extrato é divulgado."
    },
    {
      "when": "4",
      "title": "Se for indevida",
      "text": "Dolo, fraude ou erro grosseiro, com dano, aciona a solidariedade do art. 73."
    }
  ],
  "articles": [
    {
      "id": "art72",
      "num": "72",
      "kicker": "Seção I",
      "title": "Instrução",
      "lead": "Dispensa e inexigibilidade usam este processo. As hipóteses não estão aqui.",
      "plate": "Deverá ser instruído.",
      "plateSource": "Art. 72, caput",
      "devices": [
        {
          "tag": "caput",
          "name": "Oito peças",
          "hook": "A lista é de dever, com dois se for o caso.",
          "literal": "O processo de contratação direta, que compreende os casos de inexigibilidade e de dispensa de licitação, deverá ser instruído com os seguintes documentos: I - documento de formalização de demanda e, se for o caso, estudo técnico preliminar, análise de riscos, termo de referência, projeto básico ou projeto executivo; II - estimativa de despesa, que deverá ser calculada na forma estabelecida no art. 23 desta Lei; III - parecer jurídico e pareceres técnicos, se for o caso, que demonstrem o atendimento dos requisitos exigidos; IV - demonstração da compatibilidade da previsão de recursos orçamentários com o compromisso a ser assumido; V - comprovação de que o contratado preenche os requisitos de habilitação e qualificação mínima necessária; VI - razão da escolha do contratado; VII - justificativa de preço; VIII - autorização da autoridade competente.",
          "context": "O art. 23, da estimativa, não é reaberto. Não invente a fórmula.",
          "exam": "A banca omite a razão da escolha ou funde com o preço.",
          "trap": "Habilitação aqui não reabre os arts. 62 a 70.",
          "example": "A PCPE instrui uma dispensa com demanda, estimativa, escolha, preço e autorização. Parecer entra se for o caso.",
          "mnemonic": "Oito itens. Escolha não é preço."
        },
        {
          "tag": "PU",
          "name": "Sítio oficial",
          "hook": "Divulga o ato ou o extrato.",
          "literal": "O ato que autoriza a contratação direta ou o extrato decorrente do contrato deverá ser divulgado e mantido à disposição do público em sítio eletrônico oficial.",
          "context": "Deverá. A publicidade não escolhe entre ato e extrato como se um deles fosse proibido. O texto admite o ato ou o extrato.",
          "exam": "A banca diz que a divulgação é facultativa.",
          "trap": "Não invente portal nem prazo de permanência.",
          "example": "A autorização sai no sítio oficial e permanece à disposição do público.",
          "mnemonic": "Divulga e mantém."
        }
      ]
    },
    {
      "id": "art73",
      "num": "73",
      "kicker": "Dano",
      "title": "Contratação direta indevida",
      "lead": "Solidariedade só com dolo, fraude ou erro grosseiro, e só pelo dano.",
      "devices": [
        {
          "tag": "73",
          "name": "Solidariedade",
          "hook": "Não é risco de qualquer dispensa.",
          "literal": "Na hipótese de contratação direta indevida ocorrida com dolo, fraude ou erro grosseiro, o contratado e o agente público responsável responderão solidariamente pelo dano causado ao erário, sem prejuízo de outras sanções legais cabíveis.",
          "context": "Três portas: dolo, fraude ou erro grosseiro. Sem uma delas, o artigo não abre. Sem dano ao erário, também não.",
          "exam": "A banca cobra responsabilidade objetiva de toda contratação direta.",
          "trap": "Este artigo não ensina a simular exclusividade nem a fracionar valor.",
          "example": "Uma dispensa com preço injustificável e erro grosseiro pode gerar dano. A consequência é solidária. O método da fraude não se estuda.",
          "mnemonic": "Dolo, fraude ou erro grosseiro, mais dano."
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Administração",
      "source": "Art. 72",
      "does": [
        "Instruir o processo",
        "Autorizar",
        "Divulgar o ato ou o extrato"
      ],
      "doesNot": [
        "Não trata a lista como facultativa",
        "Não abre as hipóteses neste artigo"
      ]
    },
    {
      "role": "Contratado",
      "source": "Art. 72, V, e art. 73",
      "does": [
        "Preencher habilitação e qualificação mínima",
        "Responder com o agente se houver dano e dolo, fraude ou erro grosseiro"
      ],
      "doesNot": [
        "Não responde sozinho pelo art. 73",
        "Não usa o artigo como roteiro de exclusão"
      ]
    },
    {
      "role": "Agente responsável",
      "source": "Art. 73",
      "does": [
        "Pode responder solidariamente pelo dano"
      ],
      "doesNot": [
        "Erro simples, sem as três portas, não está na frase",
        "A sanção própria não é substituída pela solidariedade"
      ]
    }
  ],
  "roleNote": "O processo é comum. A hipótese é outro artigo.",
  "rolePlate": "Instruir, autorizar, divulgar.",
  "rolePlateSource": "Art. 72",
  "summary": [
    {
      "item": "Alcance",
      "rule": "Inexigibilidade e dispensa.",
      "clue": "Os casos não estão no art. 72."
    },
    {
      "item": "Dever",
      "rule": "O processo deverá ser instruído.",
      "clue": "Não é lista exemplificativa."
    },
    {
      "item": "VI e VII",
      "rule": "Razão da escolha e justificativa de preço.",
      "clue": "Dois incisos."
    },
    {
      "item": "III",
      "rule": "Parecer jurídico e técnico, se for o caso.",
      "clue": "O se não se estende à estimativa."
    },
    {
      "item": "VIII",
      "rule": "Autorização da autoridade competente.",
      "clue": "Não se confunde com a divulgação."
    },
    {
      "item": "Parágrafo único",
      "rule": "Ato ou extrato em sítio oficial.",
      "clue": "Deverá divulgar e manter."
    },
    {
      "item": "Art. 73",
      "rule": "Dolo, fraude ou erro grosseiro.",
      "clue": "Mais dano ao erário."
    },
    {
      "item": "Solidariedade",
      "rule": "Contratado e agente.",
      "clue": "Sem prejuízo de outras sanções."
    }
  ],
  "compare": [
    {
      "item": "Escolha",
      "ce": "Inciso VI: por que este contratado.",
      "cf": "Inciso VII: por que este preço.",
      "effect": "separa"
    },
    {
      "item": "Parecer",
      "ce": "Entra se for o caso.",
      "cf": "Estimativa de despesa não tem esse se.",
      "effect": "restringe"
    },
    {
      "item": "Publicidade",
      "ce": "Ato ou extrato.",
      "cf": "Não substitui a instrução.",
      "effect": "separa"
    },
    {
      "item": "Responsabilidade",
      "ce": "Art. 73: dolo, fraude ou erro grosseiro.",
      "cf": "Não é toda contratação direta.",
      "effect": "restringe"
    },
    {
      "item": "Hipóteses",
      "ce": "Ainda fechadas.",
      "cf": "O art. 72 só instrui.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 53011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O processo de contratação direta poderá ser instruído com a razão da escolha do contratado e com a justificativa de preço, documentos que a Lei trata como facultativos e equivalentes.",
      "correct": "E",
      "comentario": "ERRADO. O art. 72 diz deverá ser instruído. Razão da escolha e justificativa de preço são incisos distintos, VI e VII, não documentos equivalentes nem facultativos."
    },
    {
      "id": 53012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Sobre o art. 73 da Lei nº 14.133/2021, assinale a alternativa correta.",
      "correct": "a",
      "comentario": "A alternativa A é o texto. Sem dolo, fraude ou erro grosseiro, o artigo não abre. A solidariedade inclui o contratado e o agente, e não esgota outras sanções.",
      "options": [
        {
          "key": "a",
          "label": "Contratado e agente público respondem solidariamente pelo dano ao erário se a contratação direta indevida ocorrer com dolo, fraude ou erro grosseiro."
        },
        {
          "key": "b",
          "label": "Toda contratação direta gera responsabilidade objetiva do agente, ainda sem dano."
        },
        {
          "key": "c",
          "label": "A solidariedade do art. 73 substitui as demais sanções legais."
        },
        {
          "key": "d",
          "label": "Somente o contratado responde, porque o agente já foi autorizado pela autoridade."
        },
        {
          "key": "e",
          "label": "O art. 73 lista as hipóteses de inexigibilidade."
        }
      ]
    },
    {
      "id": 53013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O parágrafo único do art. 72 determina que",
      "correct": "d",
      "comentario": "O ato que autoriza a contratação direta ou o extrato do contrato deverá ser divulgado e mantido em sítio eletrônico oficial. A divulgação não dispensa a autorização nem abre o art. 74.",
      "options": [
        {
          "key": "a",
          "label": "a divulgação do extrato é facultativa quando houver parecer jurídico."
        },
        {
          "key": "b",
          "label": "a publicação substitui a razão da escolha e a justificativa de preço."
        },
        {
          "key": "c",
          "label": "o sítio oficial deve permanecer com o extrato por cinco dias, prazo escrito no parágrafo."
        },
        {
          "key": "d",
          "label": "o ato autorizador ou o extrato do contrato seja divulgado e mantido à disposição do público em sítio eletrônico oficial."
        },
        {
          "key": "e",
          "label": "a divulgação converte a contratação direta em concorrência."
        }
      ]
    }
  ],
  "palette": "azure",
  "highlight": {
    "big": "Deverá instruir",
    "small": "escolha não é preço"
  },
  "heroLead": "Dispensa e inexigibilidade compartilham o processo. A hipótese de cada uma ainda não entra.",
  "footerLine": "Arts. 72 e 73 lidos. O rol da inexigibilidade não entrou.",
  "nextLine": "Diga continue para o Prompt 54: inexigibilidade, art. 74. A dispensa não entra nesse anúncio.",
  "closingMnemonic": "Instrua os oito. Divulgue. Solidariedade só com dolo, fraude ou erro grosseiro, e com dano.",
  "rolesTitle": "Quem instrui e quem responde",
  "rolesLead": "Autorizar não apaga a lista.",
  "compareTitle": "Processo e dano",
  "compareLead": "O art. 72 instrui. O art. 73 não é a hipótese.",
  "compareLeft": "Art. 72",
  "compareRight": "Art. 73",
  "clocks": [],
  "toc": [
    {
      "id": "art72",
      "num": "72",
      "label": "Instrução"
    },
    {
      "id": "art73",
      "num": "73",
      "label": "Contratação direta indevida"
    }
  ]
};
