import type { StudyModule } from "./study";

export const PROMPT189: StudyModule = {
  "short": "Supremo e ação direta",
  "eyebrow": "Prompt 189 · lacuna do edital",
  "title": "Supremo e ação direta",
  "subtitle": "arts. 97, 101 e 103",
  "description": "A composição do Supremo e a reserva de plenário não tinham sido abertas. São onze Ministros, com mais de trinta e cinco e menos de setenta anos, nomeados depois de aprovação pela maioria absoluta do Senado. Tribunal só declara inconstitucionalidade por maioria absoluta. O § 3º do art. 103 continua vigente: o Advogado-Geral da União defende o ato impugnado. O antigo § 4º é que está revogado.",
  "reading": "CF/88, compilação do Planalto consultada em 21/10/2026. O extrato automático colava a revogação no § 3º. A página oficial mostra que a revogação é do antigo § 4º, riscado. Esse parágrafo não foi copiado.",
  "terms": [
    "onze",
    "setenta",
    "maioria absoluta",
    "Advogado-Geral"
  ],
  "subject": "Direito Constitucional",
  "context": [
    "O texto é o da compilação oficial conferida. Redação riscada não foi copiada.",
    "Artigo de mesmo número no ADCT não é este texto.",
    "O que não está escrito não se completa."
  ],
  "importance": "A banca troca prazo, nome do instituto e o ente competente.",
  "distinctions": [
    "Reserva de plenário: maioria absoluta do tribunal ou do órgão especial.",
    "Supremo: onze Ministros. Mais de 35 e menos de 70. Emenda Constitucional nº 122/2022.",
    "Nomeação: Presidente, depois da maioria absoluta do Senado.",
    "Legitimados da ação direta e da declaratória são os mesmos nove incisos.",
    "Partido precisa de representação no Congresso. Prefeito não está na lista.",
    "§ 3º vigente: Advogado-Geral da União defende o ato. O antigo § 4º está revogado."
  ],
  "organs": [
    {
      "sigla": "97",
      "nome": "Reserva de plenário",
      "funcao": "Maioria absoluta. Não é simples nem dois terços.",
      "base": "CF art. 97",
      "nao": "Órgão especial também pode, pela maioria absoluta dos seus membros.",
      "tone": "yellow"
    },
    {
      "sigla": "101",
      "nome": "Composição",
      "funcao": "Menos de setenta. A idade anterior não foi copiada.",
      "base": "CF art. 101",
      "nao": "Maioria absoluta do Senado. Não é dois terços.",
      "tone": "cyan"
    },
    {
      "sigla": "103",
      "nome": "Legitimados",
      "funcao": "O § 3º não foi tratado como revogado.",
      "base": "CF art. 103",
      "nao": "Prefeito e associação local não estão no rol.",
      "tone": "orange"
    }
  ],
  "swaps": [
    {
      "wrong": "Foi revogado.",
      "right": "Continua. O revogado é o antigo § 4º."
    }
  ],
  "timeline": [
    {
      "when": "Fonte",
      "title": "Compilação",
      "text": "CF/88, compilação do Planalto consultada em 21/10/2026. O extrato automático colava a revogação no § 3º. A página oficial mostra que a revog"
    },
    {
      "when": "Limite",
      "title": "Sem invenção",
      "text": "Inciso não transcrito não foi inventado."
    }
  ],
  "articles": [
    {
      "id": "p189-97",
      "num": "97",
      "kicker": "CF art. 97",
      "title": "Reserva de plenário",
      "lead": "Reserva de plenário",
      "plate": "Reserva de plenário",
      "plateSource": "CF art. 97",
      "devices": [
        {
          "tag": "97",
          "name": "Art. 97",
          "hook": "Absoluta. Tribunal ou órgão especial.",
          "literal": "Art. 97. Somente pelo voto da maioria absoluta de seus membros ou dos membros do respectivo órgão especial poderão os tribunais declarar a inconstitucionalidade de lei ou ato normativo do Poder Público. (Vide Lei nº 13.105, de 2015) (Vigência)",
          "context": "Maioria absoluta. Não é simples nem dois terços.",
          "exam": "Maioria absoluta. Não é simples nem dois terços.",
          "trap": "Órgão especial também pode, pela maioria absoluta dos seus membros.",
          "example": "Sem exemplo de acórdão. O quórum basta.",
          "mnemonic": "Absoluta. Tribunal ou órgão especial.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p189-101",
      "num": "101",
      "kicker": "CF art. 101",
      "title": "Composição",
      "lead": "Composição",
      "plate": "Composição",
      "plateSource": "CF art. 101",
      "devices": [
        {
          "tag": "101",
          "name": "Art. 101",
          "hook": "Onze. 35 e 70. Senado.",
          "literal": "Art. 101. O Supremo Tribunal Federal compõe-se de onze Ministros, escolhidos dentre cidadãos com mais de trinta e cinco e menos de setenta anos de idade, de notável saber jurídico e reputação ilibada. (Redação dada pela Emenda Constitucional nº 122, de 2022) Parágrafo único. Os Ministros do Supremo Tribunal Federal serão nomeados pelo Presidente da República, depois de aprovada a escolha pela maioria absoluta do Senado Federal.",
          "context": "Menos de setenta. A idade anterior não foi copiada.",
          "exam": "Menos de setenta. A idade anterior não foi copiada.",
          "trap": "Maioria absoluta do Senado. Não é dois terços.",
          "example": "Sem exemplo de nomeação. A idade basta.",
          "mnemonic": "Onze. 35 e 70. Senado.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p189-103",
      "num": "103",
      "kicker": "CF art. 103",
      "title": "Legitimados",
      "lead": "Legitimados",
      "plate": "Legitimados",
      "plateSource": "CF art. 103",
      "devices": [
        {
          "tag": "103",
          "name": "Art. 103",
          "hook": "Nove legitimados. AGU defende.",
          "literal": "Art. 103. Podem propor a ação direta de inconstitucionalidade e a ação declaratória de constitucionalidade: I - o Presidente da República; II - a Mesa do Senado Federal; III - a Mesa da Câmara dos Deputados; IV - a Mesa de Assembléia Legislativa ou da Câmara Legislativa do Distrito Federal; V - o Governador de Estado ou do Distrito Federal; VI - o Procurador-Geral da República; VII - o Conselho Federal da Ordem dos Advogados do Brasil; VIII - partido político com representação no Congresso Nacional; IX - confederação sindical ou entidade de classe de âmbito nacional. § 1º O Procurador-Geral da República deverá ser previamente ouvido nas ações de inconstitucionalidade e em todos os processos de competência do Supremo Tribunal Federal. § 2º Declarada a inconstitucionalidade por omissão de medida para tornar efetiva norma constitucional, será dada ciência ao Poder competente para a adoção das providências necessárias e, em se tratando de órgão administrativo, para fazê-lo em trinta dias. § 3º Quando o Supremo Tribunal Federal apreciar a inconstitucionalidade, em tese, de norma legal ou ato normativo, citará, previamente, o Advogado-Geral da União, que defenderá o ato ou texto impugnado. O antigo § 4º, que restringia quem podia propor a ação declaratória, está riscado e revogado pela Emenda Constitucional nº 45/2004. Não foi copiado como regra vigente. O § 3º não está revogado.",
          "context": "O § 3º não foi tratado como revogado.",
          "exam": "O § 3º não foi tratado como revogado.",
          "trap": "Prefeito e associação local não estão no rol.",
          "example": "Sem exemplo de petição. O inciso basta.",
          "mnemonic": "Nove legitimados. AGU defende.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 189",
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
  "rolePlateSource": "Prompt 189",
  "summary": [
    {
      "item": "Art. 101",
      "rule": "11 ministros. Menos de 70.",
      "clue": "EC 122/2022. Senado, maioria absoluta."
    },
    {
      "item": "Art. 103, § 3º",
      "rule": "AGU defende o ato.",
      "clue": "Não está revogado."
    }
  ],
  "compare": [
    {
      "item": "§ 3º",
      "ce": "Foi revogado.",
      "cf": "Continua. O revogado é o antigo § 4º.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 189011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O Supremo compõe-se de onze Ministros, escolhidos dentre cidadãos com mais de trinta e cinco e menos de setenta anos, de notável saber jurídico e reputação ilibada.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. Art. 101, redação da Emenda Constitucional nº 122/2022. A nomeação depende de aprovação pela maioria absoluta do Senado."
    },
    {
      "id": 189012,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O § 3º do art. 103 foi revogado, e o Advogado-Geral da União não é mais citado para defender o ato impugnado.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Na compilação oficial, o § 3º permanece. A revogação da Emenda 45 atinge o antigo § 4º, que restringia a ação declaratória e está riscado. Esse parágrafo não foi copiado."
    },
    {
      "id": 189013,
      "banca": "Estilo Cebraspe · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A reserva de plenário, no art. 97, exige:",
      "correct": "c",
      "options": [
        {
          "key": "a",
          "label": "Maioria simples do tribunal."
        },
        {
          "key": "b",
          "label": "Dois terços do órgão especial."
        },
        {
          "key": "c",
          "label": "Maioria absoluta dos membros do tribunal ou do respectivo órgão especial."
        },
        {
          "key": "d",
          "label": "Unanimidade."
        },
        {
          "key": "e",
          "label": "Maioria relativa da turma."
        }
      ],
      "comentario": "Questão original, não é prova real. A alternativa c é o texto. Partido político, no art. 103, VIII, ainda precisa de representação no Congresso."
    }
  ],
  "toc": [
    {
      "id": "p189-97",
      "num": "97",
      "label": "Reserva de plenário"
    },
    {
      "id": "p189-101",
      "num": "101",
      "label": "Composição"
    },
    {
      "id": "p189-103",
      "num": "103",
      "label": "Legitimados"
    }
  ],
  "clocks": [
    {
      "value": "11",
      "label": "Ministros do Supremo",
      "source": "Art. 101"
    },
    {
      "value": "70",
      "label": "Idade máxima, menos de",
      "source": "Art. 101"
    }
  ],
  "organKicker": "Recorte",
  "organTitle": "Supremo e ação direta",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a troca.",
  "closing": "Conferir emenda posterior à consulta de 21/10/2026.",
  "palette": "leaf",
  "highlight": {
    "big": "3",
    "small": "artigos neste assunto"
  },
  "heroLead": "A composição do Supremo e a reserva de plenário não tinham sido abertas. São onze Ministros, com mais de trinta e cinco e menos de setenta anos, nomeados depois de aprovação pela m",
  "nextLine": "O assunto seguinte continua na mesma disciplina.",
  "closingMnemonic": "Reserva de plenário: maioria absoluta do tribunal ou do órgão especial.",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "O que a banca troca",
  "compareLead": "A esquerda é a armadilha. A direita é o texto.",
  "compareLeft": "Armadilha",
  "compareRight": "Texto"
};
