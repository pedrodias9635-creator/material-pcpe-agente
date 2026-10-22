import type { StudyModule } from "./study";

export const PROMPT188: StudyModule = {
  "short": "Julgamento do Presidente",
  "eyebrow": "Prompt 188 · lacuna do edital",
  "title": "Julgamento do Presidente",
  "subtitle": "arts. 86 e 87",
  "description": "O art. 85 já estava no assunto do Presidente. Faltava o processo. Dois terços da Câmara admitem a acusação. Crime comum vai ao Supremo. Crime de responsabilidade vai ao Senado. O afastamento cessa em cento e oitenta dias se o julgamento não acabar. Ministro de Estado tem de ser brasileiro, maior de vinte e um anos, no exercício dos direitos políticos.",
  "reading": "CF/88, arts. 86 e 87, compilação do Planalto consultada em 21/10/2026.",
  "terms": [
    "dois terços",
    "Senado",
    "180 dias",
    "21 anos"
  ],
  "subject": "Direito Constitucional",
  "context": [
    "O texto é o da compilação oficial conferida. Redação riscada não foi copiada.",
    "Artigo de mesmo número no ADCT não é este texto.",
    "O que não está escrito não se completa."
  ],
  "importance": "A banca troca prazo, nome do instituto e o ente competente.",
  "distinctions": [
    "Admissão: dois terços da Câmara dos Deputados.",
    "Comum: Supremo. Responsabilidade: Senado.",
    "Afastamento no crime comum: quando o Supremo recebe a denúncia ou a queixa.",
    "Afastamento no crime de responsabilidade: quando o Senado instaura o processo.",
    "Cento e oitenta dias sem julgamento: cessa o afastamento, o processo segue.",
    "Durante o mandato, não responde por ato estranho à função."
  ],
  "organs": [
    {
      "sigla": "86",
      "nome": "Processo",
      "funcao": "Senado não julga o crime comum do Presidente.",
      "base": "CF art. 86",
      "nao": "Cento e oitenta dias não extingue o processo.",
      "tone": "yellow"
    },
    {
      "sigla": "87",
      "nome": "Ministros",
      "funcao": "Vinte e um anos. Não é trinta e cinco.",
      "base": "CF art. 87",
      "nao": "Referendar o ato do Presidente está no inciso I.",
      "tone": "cyan"
    }
  ],
  "swaps": [
    {
      "wrong": "Responsabilidade no Supremo.",
      "right": "Responsabilidade no Senado."
    }
  ],
  "timeline": [
    {
      "when": "Fonte",
      "title": "Compilação",
      "text": "CF/88, arts. 86 e 87, compilação do Planalto consultada em 21/10/2026."
    },
    {
      "when": "Limite",
      "title": "Sem invenção",
      "text": "Inciso não transcrito não foi inventado."
    }
  ],
  "articles": [
    {
      "id": "p188-86",
      "num": "86",
      "kicker": "CF art. 86",
      "title": "Processo",
      "lead": "Processo",
      "plate": "Processo",
      "plateSource": "CF art. 86",
      "devices": [
        {
          "tag": "86",
          "name": "Art. 86",
          "hook": "2/3. Supremo ou Senado. 180 dias.",
          "literal": "Art. 86. Admitida a acusação contra o Presidente da República, por dois terços da Câmara dos Deputados, será ele submetido a julgamento perante o Supremo Tribunal Federal, nas infrações penais comuns, ou perante o Senado Federal, nos crimes de responsabilidade. § 1º O Presidente ficará suspenso de suas funções: I - nas infrações penais comuns, se recebida a denúncia ou queixa-crime pelo Supremo Tribunal Federal; II - nos crimes de responsabilidade, após a instauração do processo pelo Senado Federal. § 2º Se, decorrido o prazo de cento e oitenta dias, o julgamento não estiver concluído, cessará o afastamento do Presidente, sem prejuízo do regular prosseguimento do processo. § 3º Enquanto não sobrevier sentença condenatória, nas infrações comuns, o Presidente da República não estará sujeito a prisão. § 4º O Presidente da República, na vigência de seu mandato, não pode ser responsabilizado por atos estranhos ao exercício de suas funções.",
          "context": "Senado não julga o crime comum do Presidente.",
          "exam": "Senado não julga o crime comum do Presidente.",
          "trap": "Cento e oitenta dias não extingue o processo.",
          "example": "Sem exemplo de acusação. O órgão basta.",
          "mnemonic": "2/3. Supremo ou Senado. 180 dias.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p188-87",
      "num": "87",
      "kicker": "CF art. 87",
      "title": "Ministros",
      "lead": "Ministros",
      "plate": "Ministros",
      "plateSource": "CF art. 87",
      "devices": [
        {
          "tag": "87",
          "name": "Art. 87",
          "hook": "21 anos. Referenda. Relatório anual.",
          "literal": "Art. 87. Os Ministros de Estado serão escolhidos dentre brasileiros maiores de vinte e um anos e no exercício dos direitos políticos. Parágrafo único. Compete ao Ministro de Estado, além de outras atribuições estabelecidas nesta Constituição e na lei: I - exercer a orientação, coordenação e supervisão dos órgãos e entidades da administração federal na área de sua competência e referendar os atos e decretos assinados pelo Presidente da República; II - expedir instruções para a execução das leis, decretos e regulamentos; III - apresentar ao Presidente da República relatório anual de sua gestão no Ministério; IV - praticar os atos pertinentes às atribuições que lhe forem outorgadas ou delegadas pelo Presidente da República.",
          "context": "Vinte e um anos. Não é trinta e cinco.",
          "exam": "Vinte e um anos. Não é trinta e cinco.",
          "trap": "Referendar o ato do Presidente está no inciso I.",
          "example": "Sem exemplo de pasta. O requisito basta.",
          "mnemonic": "21 anos. Referenda. Relatório anual.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 188",
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
  "rolePlateSource": "Prompt 188",
  "summary": [
    {
      "item": "Caput",
      "rule": "2/3 da Câmara.",
      "clue": "Supremo ou Senado."
    },
    {
      "item": "§ 2º",
      "rule": "180 dias.",
      "clue": "Cessa o afastamento. O processo fica."
    }
  ],
  "compare": [
    {
      "item": "Órgão",
      "ce": "Responsabilidade no Supremo.",
      "cf": "Responsabilidade no Senado.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 188011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Admitida a acusação por dois terços da Câmara, o Presidente é julgado pelo Supremo nos crimes comuns e pelo Senado nos crimes de responsabilidade.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. Art. 86, caput."
    },
    {
      "id": 188012,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Se o julgamento não se concluir em cento e oitenta dias, o processo fica extinto e o Presidente volta à função.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Cessa o afastamento. O § 2º diz que isso não prejudica o prosseguimento do processo."
    },
    {
      "id": 188013,
      "banca": "Estilo Cebraspe · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O Ministro de Estado, no art. 87, é escolhido dentre brasileiros:",
      "correct": "d",
      "options": [
        {
          "key": "a",
          "label": "Maiores de 35 anos, com notável saber jurídico."
        },
        {
          "key": "b",
          "label": "Maiores de 30 anos, natos."
        },
        {
          "key": "c",
          "label": "Maiores de 18 anos, sem exigência de direitos políticos."
        },
        {
          "key": "d",
          "label": "Maiores de 21 anos e no exercício dos direitos políticos."
        },
        {
          "key": "e",
          "label": "Maiores de 35 e menores de 70 anos."
        }
      ],
      "comentario": "Questão original, não é prova real. A alternativa d é o caput. Trinta e cinco e setenta são idades do Supremo, no art. 101, não do Ministro de Estado."
    }
  ],
  "toc": [
    {
      "id": "p188-86",
      "num": "86",
      "label": "Processo"
    },
    {
      "id": "p188-87",
      "num": "87",
      "label": "Ministros"
    }
  ],
  "clocks": [
    {
      "value": "2/3",
      "label": "Câmara admite a acusação",
      "source": "Art. 86"
    },
    {
      "value": "180",
      "label": "Dias, cessa o afastamento",
      "source": "Art. 86, § 2º"
    }
  ],
  "organKicker": "Recorte",
  "organTitle": "Julgamento do Presidente",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a troca.",
  "closing": "Conferir emenda posterior à consulta de 21/10/2026.",
  "palette": "azure",
  "highlight": {
    "big": "2",
    "small": "artigos neste assunto"
  },
  "heroLead": "O art. 85 já estava no assunto do Presidente. Faltava o processo. Dois terços da Câmara admitem a acusação. Crime comum vai ao Supremo. Crime de responsabilidade vai ao Senado. O a",
  "nextLine": "O assunto seguinte continua na mesma disciplina.",
  "closingMnemonic": "Admissão: dois terços da Câmara dos Deputados.",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "O que a banca troca",
  "compareLead": "A esquerda é a armadilha. A direita é o texto.",
  "compareLeft": "Armadilha",
  "compareRight": "Texto"
};
