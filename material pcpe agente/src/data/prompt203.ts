import type { StudyModule } from "./study";

export const PROMPT203: StudyModule = {
  "short": "Tribunais Regionais Federais",
  "eyebrow": "Prompt 203 · lacuna do edital",
  "title": "Tribunais Regionais Federais",
  "subtitle": "arts. 107 e 108",
  "description": "O juiz federal já estava no art. 109. Faltava o tribunal. O Tribunal Regional Federal tem, no mínimo, sete juízes, com mais de trinta e menos de setenta anos. Um quinto vem de advogados e do Ministério Público Federal, com mais de dez anos. O restante é promoção de juiz federal com mais de cinco anos, por antiguidade e merecimento, alternadamente. O tribunal julga o juiz federal da região nos crimes comuns e de responsabilidade, e os membros do Ministério Público da União, ressalvada a Justiça Eleitoral. O artigo só localiza o órgão. Não descreve o crime.",
  "reading": "CF/88, compilação do Planalto consultada em 22/10/2026. Arts. 107 e 108. Idade é a da Emenda Constitucional nº 122/2022.",
  "terms": [
    "sete juízes",
    "setenta",
    "quinto",
    "cinco anos"
  ],
  "subject": "Direito Constitucional",
  "context": [
    "O texto é o da compilação oficial conferida. Redação riscada não foi copiada.",
    "Artigo de mesmo número no ADCT não é este texto.",
    "O que não está escrito não se completa."
  ],
  "importance": "A banca troca percentual, prazo e o órgão.",
  "distinctions": [
    "Mínimo de sete juízes. Mais de 30 e menos de 70. Nomeação pelo Presidente.",
    "Um quinto: advogados com mais de dez anos de atividade e membros do Ministério Público Federal com mais de dez anos de carreira.",
    "Demais: promoção de juiz federal com mais de cinco anos, antiguidade e merecimento, alternadamente.",
    "Justiça itinerante e câmaras regionais, desde a Emenda 45/2004.",
    "Originariamente: juiz federal da região, inclusive da Justiça Militar e da do Trabalho, nos crimes comuns e de responsabilidade, e membro do Ministério Público da União, ressalvada a Eleitoral.",
    "Recurso: causas dos juízes federais e dos juízes estaduais no exercício da competência federal da região."
  ],
  "organs": [
    {
      "sigla": "107",
      "nome": "Composição",
      "funcao": "Sete é o mínimo. Menos de setenta não é menos de sessenta e cinco.",
      "base": "CF art. 107",
      "nao": "Cinco anos de exercício é a promoção. Dez anos é o quinto.",
      "tone": "yellow"
    },
    {
      "sigla": "108",
      "nome": "Competência",
      "funcao": "Juiz federal da região, crime comum e de responsabilidade, no TRF. Eleitoral fica de fora.",
      "base": "CF art. 108",
      "nao": "Habeas corpus contra juiz federal é do TRF, não do Supremo, neste artigo.",
      "tone": "cyan"
    }
  ],
  "swaps": [
    {
      "wrong": "Todo o tribunal é quinto.",
      "right": "Quinto é uma parte. O resto é promoção."
    }
  ],
  "timeline": [
    {
      "when": "Fonte",
      "title": "Compilação",
      "text": "CF/88, compilação do Planalto consultada em 22/10/2026. Arts. 107 e 108. Idade é a da Emenda Constitucional nº 122/2022."
    },
    {
      "when": "Limite",
      "title": "Sem invenção",
      "text": "Percentual que o artigo não escreve não foi criado."
    }
  ],
  "articles": [
    {
      "id": "p203-107",
      "num": "107",
      "kicker": "CF art. 107",
      "title": "Composição",
      "lead": "Composição",
      "plate": "Composição",
      "plateSource": "CF art. 107",
      "devices": [
        {
          "tag": "107",
          "name": "Art. 107",
          "hook": "7. 30 e 70. Quinto. Cinco anos.",
          "literal": "Art. 107. Os Tribunais Regionais Federais compõem-se de, no mínimo, sete juízes, recrutados, quando possível, na respectiva região e nomeados pelo Presidente da República dentre brasileiros com mais de trinta e menos de setenta anos de idade, sendo: (Redação dada pela Emenda Constitucional nº 122, de 2022) I - um quinto dentre advogados com mais de dez anos de efetiva atividade profissional e membros do Ministério Público Federal com mais de dez anos de carreira; II - os demais, mediante promoção de juízes federais com mais de cinco anos de exercício, por antigüidade e merecimento, alternadamente. § 1º A lei disciplinará a remoção ou a permuta de juízes dos Tribunais Regionais Federais e determinará sua jurisdição e sede. (Renumerado do parágrafo único, pela Emenda Constitucional nº 45, de 2004) § 2º Os Tribunais Regionais Federais instalarão a justiça itinerante, com a realização de audiências e demais funções da atividade jurisdicional, nos limites territoriais da respectiva jurisdição, servindo-se de equipamentos públicos e comunitários. (Incluído pela Emenda Constitucional nº 45, de 2004) § 3º Os Tribunais Regionais Federais poderão funcionar descentralizadamente, constituindo Câmaras regionais, a fim de assegurar o pleno acesso do jurisdicionado à justiça em todas as fases do processo. (Incluído pela Emenda Constitucional nº 45, de 2004)",
          "context": "Sete é o mínimo. Menos de setenta não é menos de sessenta e cinco.",
          "exam": "Sete é o mínimo. Menos de setenta não é menos de sessenta e cinco.",
          "trap": "Cinco anos de exercício é a promoção. Dez anos é o quinto.",
          "example": "Sem exemplo de lista. O inciso basta.",
          "mnemonic": "7. 30 e 70. Quinto. Cinco anos.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p203-108",
      "num": "108",
      "kicker": "CF art. 108",
      "title": "Competência",
      "lead": "Competência",
      "plate": "Competência",
      "plateSource": "CF art. 108",
      "devices": [
        {
          "tag": "108",
          "name": "Art. 108",
          "hook": "Juiz federal no TRF. Eleitoral ressalvada.",
          "literal": "Art. 108. Compete aos Tribunais Regionais Federais: I - processar e julgar, originariamente: a) os juízes federais da área de sua jurisdição, incluídos os da Justiça Militar e da Justiça do Trabalho, nos crimes comuns e de responsabilidade, e os membros do Ministério Público da União, ressalvada a competência da Justiça Eleitoral; b) as revisões criminais e as ações rescisórias de julgados seus ou dos juízes federais da região; c) os mandados de segurança e os habeas data contra ato do próprio Tribunal ou de juiz federal; d) os habeas corpus , quando a autoridade coatora for juiz federal; e) os conflitos de competência entre juízes federais vinculados ao Tribunal; II - julgar, em grau de recurso, as causas decididas pelos juízes federais e pelos juízes estaduais no exercício da competência federal da área de sua jurisdição.",
          "context": "Juiz federal da região, crime comum e de responsabilidade, no TRF. Eleitoral fica de fora.",
          "exam": "Juiz federal da região, crime comum e de responsabilidade, no TRF. Eleitoral fica de fora.",
          "trap": "Habeas corpus contra juiz federal é do TRF, não do Supremo, neste artigo.",
          "example": "Sem roteiro. O artigo só diz o órgão.",
          "mnemonic": "Juiz federal no TRF. Eleitoral ressalvada.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 203",
      "does": [
        "Ler o texto antes do comentário"
      ],
      "doesNot": [
        "Não completar lacuna",
        "Não descrever meio de infração"
      ]
    }
  ],
  "roleNote": "Questões originais. Não são prova real.",
  "rolePlate": "Texto primeiro.",
  "rolePlateSource": "Prompt 203",
  "summary": [
    {
      "item": "Art. 107",
      "rule": "Mínimo de 7. Menos de 70.",
      "clue": "Quinto: 10 anos. Promoção: mais de 5."
    },
    {
      "item": "Art. 108, I, a",
      "rule": "Juiz federal da região.",
      "clue": "Comum e responsabilidade. Eleitoral fora."
    }
  ],
  "compare": [
    {
      "item": "Composição",
      "ce": "Todo o tribunal é quinto.",
      "cf": "Quinto é uma parte. O resto é promoção.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 203011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O Tribunal Regional Federal compõe-se de, no mínimo, sete juízes, nomeados dentre brasileiros com mais de trinta e menos de setenta anos.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. Art. 107, caput, redação da Emenda Constitucional nº 122/2022."
    },
    {
      "id": 203012,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Todos os juízes do Tribunal Regional Federal vêm do quinto constitucional, entre advogados e membros do Ministério Público.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. O quinto é o inciso I. Os demais vêm de promoção de juízes federais com mais de cinco anos de exercício, por antiguidade e merecimento, alternadamente."
    },
    {
      "id": 203013,
      "banca": "Estilo Cebraspe · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Compete ao Tribunal Regional Federal processar e julgar, originariamente:",
      "correct": "b",
      "options": [
        {
          "key": "a",
          "label": "O Governador, nos crimes comuns."
        },
        {
          "key": "b",
          "label": "Os juízes federais da região, nos crimes comuns e de responsabilidade, e os membros do Ministério Público da União, ressalvada a Justiça Eleitoral."
        },
        {
          "key": "c",
          "label": "O Presidente da República, nos crimes de responsabilidade."
        },
        {
          "key": "d",
          "label": "Qualquer delegado estadual, em crime de trânsito."
        },
        {
          "key": "e",
          "label": "O prefeito, em crime eleitoral."
        }
      ],
      "comentario": "Questão original, não é prova real. A alternativa b é o art. 108, I, a. Habeas corpus, quando a autoridade coatora for juiz federal, é a alínea d. O artigo não descreve o crime."
    }
  ],
  "toc": [
    {
      "id": "p203-107",
      "num": "107",
      "label": "Composição"
    },
    {
      "id": "p203-108",
      "num": "108",
      "label": "Competência"
    }
  ],
  "clocks": [
    {
      "value": "7",
      "label": "Mínimo de juízes do TRF",
      "source": "Art. 107"
    },
    {
      "value": "5",
      "label": "Anos para promoção",
      "source": "Art. 107, II"
    }
  ],
  "organKicker": "Recorte",
  "organTitle": "Tribunais Regionais Federais",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a troca.",
  "closing": "Conferir emenda posterior à consulta de 22/10/2026.",
  "palette": "warm",
  "highlight": {
    "big": "2",
    "small": "artigos neste assunto"
  },
  "heroLead": "O juiz federal já estava no art. 109. Faltava o tribunal. O Tribunal Regional Federal tem, no mínimo, sete juízes, com mais de trinta e menos de setenta anos. Um quinto vem de advo",
  "nextLine": "O assunto seguinte continua na mesma disciplina.",
  "closingMnemonic": "Mínimo de sete juízes. Mais de 30 e menos de 70. Nomeação pelo Presidente.",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "O que a banca troca",
  "compareLead": "A esquerda é a armadilha. A direita é o texto.",
  "compareLeft": "Armadilha",
  "compareRight": "Texto"
};
