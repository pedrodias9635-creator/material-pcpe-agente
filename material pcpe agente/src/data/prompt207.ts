import type { StudyModule } from "./study";

export const PROMPT207: StudyModule = {
  "short": "Justiças especializadas",
  "eyebrow": "Prompt 207 · lacuna do edital",
  "title": "Justiças do Trabalho, Eleitoral e Militar",
  "subtitle": "arts. 111 a 124",
  "description": "Três Justiças da União que o edital nomeia dentro do Poder Judiciário e o guia só citava como limite de outro tribunal. A junta trabalhista está revogada. O Tribunal Superior Eleitoral elege presidente entre ministros do Supremo. Crime militar não se descreve: o art. 124 só entrega a competência à lei.",
  "reading": "CF/88, compilação do Planalto consultada em 22/10/2026. Arts. 111 a 124. Emendas 24/1999, 45/2004, 92/2016 e 122/2022. Art. 117 revogado. A Justiça Militar dos Estados continua no Prompt 167.",
  "terms": [
    "vinte e sete",
    "dois biênios",
    "quinze ministros",
    "junta revogada"
  ],
  "subject": "Direito Constitucional",
  "context": [
    "Fonte: compilação do Planalto consultada em 22/10/2026.",
    "Artigo revogado é declarado revogado e não é ensinado como vigente.",
    "O art. 124 não descreve crime militar."
  ],
  "importance": "A banca ressuscita a junta, troca a idade do TRT com a do TST e alonga o biênio eleitoral.",
  "distinctions": [
    "Justiça do Trabalho: Tribunal Superior, Tribunais Regionais e juízes do Trabalho. Os §§ 1º a 3º do art. 111 e o art. 117 foram revogados.",
    "TST: 27 ministros, mais de 35 e menos de 70 anos. Maioria absoluta do Senado. Um quinto: advogados e Ministério Público do Trabalho com mais de dez anos. O restante: juízes de Tribunal Regional, da carreira, indicados pelo próprio TST.",
    "TRT: no mínimo sete juízes, mais de 30 e menos de 70 anos. Não é a idade do TST.",
    "Vara do Trabalho: um juiz singular. O parágrafo único do art. 116 está revogado.",
    "O art. 114 escreve a competência, inclusive a administração pública. A compilação marca a ADI 3392 e não transcreve a tese. Não foi completada.",
    "Justiça Eleitoral: Tribunal Superior, Tribunais Regionais, juízes eleitorais e juntas eleitorais.",
    "TSE: no mínimo sete. Três ministros do Supremo e dois do Superior Tribunal de Justiça, eleitos por voto secreto. Dois advogados, nomeados pelo Presidente dentre seis indicados pelo Supremo.",
    "Presidente e vice do TSE: ministros do Supremo. Corregedor eleitoral: ministro do Superior Tribunal de Justiça.",
    "Juiz de tribunal eleitoral: no mínimo dois anos e nunca mais de dois biênios consecutivos.",
    "Decisão do TSE é irrecorrível, salvo a que contrariar a Constituição e a denegatória de habeas corpus ou mandado de segurança.",
    "Justiça Militar da União: Superior Tribunal Militar e os tribunais e juízes militares instituídos por lei.",
    "STM: quinze ministros vitalícios. Três da Marinha, quatro do Exército, três da Aeronáutica, da ativa e do posto mais elevado. Cinco civis.",
    "Civil do STM: mais de 35 e menos de 70 anos. Três advogados. Dois, em escolha paritária, dentre juízes auditores e membros do Ministério Público da Justiça Militar.",
    "O art. 124 entrega os crimes militares definidos em lei. Não os descreve. A Justiça Militar estadual não se reabre."
  ],
  "organs": [
    {
      "sigla": "JT",
      "nome": "Trabalho",
      "funcao": "TST tem 27. TRT começa em 7. Vara é juiz singular.",
      "base": "Arts. 111-A, 115 e 116",
      "nao": "Junta de conciliação não voltou.",
      "tone": "yellow"
    },
    {
      "sigla": "JE",
      "nome": "Eleitoral",
      "funcao": "Quatro órgãos. Dois biênios, não três.",
      "base": "Arts. 118 e 121",
      "nao": "Presidente do TSE não sai do STJ.",
      "tone": "cyan"
    },
    {
      "sigla": "JM",
      "nome": "Militar da União",
      "funcao": "Quinze: 3, 4, 3 e 5.",
      "base": "Arts. 122 a 124",
      "nao": "Não é a Justiça Militar dos Estados.",
      "tone": "orange"
    }
  ],
  "swaps": [
    {
      "wrong": "TRT: mais de 35 anos, como o TST.",
      "right": "TRT: mais de 30 e menos de 70. TST: mais de 35 e menos de 70."
    },
    {
      "wrong": "Juiz eleitoral pode o terceiro biênio.",
      "right": "No mínimo dois anos e nunca mais de dois biênios consecutivos."
    }
  ],
  "timeline": [
    {
      "when": "Fonte",
      "title": "Compilação",
      "text": "CF/88, compilação do Planalto consultada em 22/10/2026. Idade do TST, do TRT e do civil do STM na redação da Emenda Constitucional nº 122, de 2022."
    },
    {
      "when": "Limite",
      "title": "Sem crime",
      "text": "O art. 124 não foi aberto como tipo penal. A ADI 3392 não foi completada."
    }
  ],
  "articles": [
    {
      "id": "p207-111",
      "num": "111",
      "kicker": "Trabalho",
      "title": "Justiça do Trabalho",
      "lead": "Arts. 111 a 116",
      "plate": "27",
      "plateSource": "Art. 111-A",
      "devices": [
        {
          "tag": "111",
          "name": "Órgãos e idades",
          "hook": "27 no TST. 30 no TRT. Juiz singular na vara.",
          "literal": "Art. 111. São órgãos da Justiça do Trabalho: I - o Tribunal Superior do Trabalho; II - os Tribunais Regionais do Trabalho; III - Juízes do Trabalho. (Redação dada pela Emenda Constitucional nº 24, de 1999) §§ 1º a 3º. (Revogados pela Emenda Constitucional nº 45, de 2004) Art. 111-A. O Tribunal Superior do Trabalho compõe-se de vinte e sete Ministros, escolhidos dentre brasileiros com mais de trinta e cinco e menos de setenta anos de idade, nomeados pelo Presidente da República após aprovação pela maioria absoluta do Senado Federal, sendo: (Redação dada pela Emenda Constitucional nº 122, de 2022) I um quinto dentre advogados com mais de dez anos de efetiva atividade profissional e membros do Ministério Público do Trabalho com mais de dez anos de efetivo exercício, observado o disposto no art. 94; II os demais dentre juízes dos Tribunais Regionais do Trabalho, oriundos da magistratura da carreira, indicados pelo próprio Tribunal Superior. Art. 115. Os Tribunais Regionais do Trabalho compõem-se de, no mínimo, sete juízes, recrutados, quando possível, na respectiva região, nomeados pelo Presidente da República dentre brasileiros com mais de trinta e menos de setenta anos de idade. (Redação dada pela Emenda Constitucional nº 122, de 2022) Art. 116. Nas Varas do Trabalho, a jurisdição será exercida por um juiz singular. (Redação dada pela Emenda Constitucional nº 24, de 1999) Art. 117. e Parágrafo único. (Revogados pela Emenda Constitucional nº 24, de 1999)",
          "context": "O quinto do TRT também observa o art. 94. O restante é promoção de juiz do trabalho, por antiguidade e merecimento, alternadamente.",
          "exam": "A banca iguala a idade do TRT à do TST e ressuscita a junta.",
          "trap": "Indicação do restante do TST é do próprio Tribunal, não do Senado.",
          "example": "Sem exemplo de reclamação.",
          "mnemonic": "TST 35. TRT 30. Vara: um juiz. Art. 117 revogado.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p207-118",
      "num": "118",
      "kicker": "Eleitoral",
      "title": "Justiça Eleitoral",
      "lead": "Arts. 118 a 121",
      "plate": "2 biênios",
      "plateSource": "Art. 121, § 2º",
      "devices": [
        {
          "tag": "118",
          "name": "Arts. 118 a 121",
          "hook": "Quatro órgãos. Presidente do TSE sai do Supremo.",
          "literal": "Art. 118. São órgãos da Justiça Eleitoral: I - o Tribunal Superior Eleitoral; II - os Tribunais Regionais Eleitorais; III - os Juízes Eleitorais; IV - as Juntas Eleitorais. Art. 119. O Tribunal Superior Eleitoral compor-se-á, no mínimo, de sete membros, escolhidos: I - mediante eleição, pelo voto secreto: a) três juízes dentre os Ministros do Supremo Tribunal Federal; b) dois juízes dentre os Ministros do Superior Tribunal de Justiça; II - por nomeação do Presidente da República, dois juízes dentre seis advogados de notável saber jurídico e idoneidade moral, indicados pelo Supremo Tribunal Federal. Parágrafo único. O Tribunal Superior Eleitoral elegerá seu Presidente e o Vice-Presidente dentre os Ministros do Supremo Tribunal Federal, e o Corregedor Eleitoral dentre os Ministros do Superior Tribunal de Justiça. Art. 120. Haverá um Tribunal Regional Eleitoral na Capital de cada Estado e no Distrito Federal. § 1º Os Tribunais Regionais Eleitorais compor-se-ão: I - mediante eleição, pelo voto secreto: a) de dois juízes dentre os desembargadores do Tribunal de Justiça; b) de dois juízes, dentre juízes de direito, escolhidos pelo Tribunal de Justiça; II - de um juiz do Tribunal Regional Federal com sede na Capital do Estado ou no Distrito Federal, ou, não havendo, de juiz federal, escolhido, em qualquer caso, pelo Tribunal Regional Federal respectivo; III - por nomeação, pelo Presidente da República, de dois juízes dentre seis advogados de notável saber jurídico e idoneidade moral, indicados pelo Tribunal de Justiça. Art. 121. § 2º Os juízes dos tribunais eleitorais, salvo motivo justificado, servirão por dois anos, no mínimo, e nunca por mais de dois biênios consecutivos, sendo os substitutos escolhidos na mesma ocasião e pelo mesmo processo, em número igual para cada categoria. § 3º São irrecorríveis as decisões do Tribunal Superior Eleitoral, salvo as que contrariarem esta Constituição e as denegatórias de habeas corpus ou mandado de segurança.",
          "context": "O Tribunal Regional tem dois desembargadores, dois juízes de direito, um juiz federal da região e dois advogados. O texto do art. 120 não foi resumido para além dessa conta.",
          "exam": "A banca tira a junta eleitoral e põe o corregedor no Supremo.",
          "trap": "Dois biênios consecutivos é o máximo, não o mínimo.",
          "example": "Sem exemplo de eleição.",
          "mnemonic": "TSE: 3 do Supremo, 2 do STJ, 2 advogados. Dois biênios.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p207-122",
      "num": "122",
      "kicker": "Militar da União",
      "title": "Justiça Militar",
      "lead": "Arts. 122 a 124",
      "plate": "15",
      "plateSource": "Art. 123",
      "devices": [
        {
          "tag": "122",
          "name": "Arts. 122 a 124",
          "hook": "15 ministros. 3, 4, 3 e 5. Crime fica na lei.",
          "literal": "Art. 122. São órgãos da Justiça Militar: I - o Superior Tribunal Militar; II - os Tribunais e Juízes Militares instituídos por lei. Art. 123. O Superior Tribunal Militar compor-se-á de quinze Ministros vitalícios, nomeados pelo Presidente da República, depois de aprovada a indicação pelo Senado Federal, sendo três dentre oficiais-generais da Marinha, quatro dentre oficiais-generais do Exército, três dentre oficiais-generais da Aeronáutica, todos da ativa e do posto mais elevado da carreira, e cinco dentre civis. Parágrafo único. Os Ministros civis serão escolhidos pelo Presidente da República dentre brasileiros com mais de trinta e cinco e menos de setenta anos de idade, sendo: (Redação dada pela Emenda Constitucional nº 122, de 2022) I - três dentre advogados de notório saber jurídico e conduta ilibada, com mais de dez anos de efetiva atividade profissional; II - dois, por escolha paritária, dentre juízes auditores e membros do Ministério Público da Justiça Militar. Art. 124. À Justiça Militar compete processar e julgar os crimes militares definidos em lei. Parágrafo único. A lei disporá sobre a organização, o funcionamento e a competência da Justiça Militar.",
          "context": "A idade é dos civis. O artigo não a copia para o oficial-general. O crime não foi descrito.",
          "exam": "A banca troca quatro do Exército por três e abre o tipo penal.",
          "trap": "Vitalício não é o mandato de dois anos da Justiça Eleitoral.",
          "example": "Sem exemplo de fato. O art. 124 só localiza a competência.",
          "mnemonic": "3 Marinha, 4 Exército, 3 Aeronáutica, 5 civis.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 207",
      "does": [
        "Ler o texto antes do comentário"
      ],
      "doesNot": [
        "Não completar a ADI 3392",
        "Não descrever crime militar"
      ]
    }
  ],
  "roleNote": "Questões originais. Não são prova real.",
  "rolePlate": "Texto primeiro.",
  "rolePlateSource": "Prompt 207",
  "summary": [
    {
      "item": "Art. 116",
      "rule": "Vara do Trabalho: um juiz.",
      "clue": "Art. 117 revogado. Junta não voltou."
    },
    {
      "item": "Art. 119",
      "rule": "Presidente do TSE sai do Supremo.",
      "clue": "Corregedor sai do Superior Tribunal de Justiça."
    },
    {
      "item": "Art. 123",
      "rule": "Quinze ministros: 3, 4, 3 e 5.",
      "clue": "Civis: mais de 35 e menos de 70."
    }
  ],
  "compare": [
    {
      "item": "Idade",
      "ce": "TRT com mais de 35.",
      "cf": "TRT com mais de 30. TST com mais de 35.",
      "effect": "separa"
    },
    {
      "item": "Biênio",
      "ce": "Três biênios eleitorais.",
      "cf": "Nunca mais de dois consecutivos.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 207011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "A Junta de Conciliação e Julgamento continua sendo órgão da Justiça do Trabalho, e a Vara é composta por um colegiado.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. O art. 111, na redação da Emenda 24/1999, lista Tribunal Superior, Tribunais Regionais e juízes do Trabalho. O art. 117 está revogado. O art. 116 entrega a Vara a um juiz singular."
    },
    {
      "id": 207012,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O Tribunal Superior Eleitoral elege seu Presidente dentre os Ministros do Supremo Tribunal Federal, e o Corregedor Eleitoral dentre os Ministros do Superior Tribunal de Justiça.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. Art. 119, parágrafo único. Os juízes dos tribunais eleitorais servem, no mínimo, dois anos e nunca por mais de dois biênios consecutivos."
    },
    {
      "id": 207013,
      "banca": "Estilo Cebraspe · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O Superior Tribunal Militar compõe-se de quinze ministros vitalícios, sendo:",
      "correct": "d",
      "options": [
        {
          "key": "a",
          "label": "Cinco da Marinha, cinco do Exército e cinco civis, todos com mais de 30 anos."
        },
        {
          "key": "b",
          "label": "Três de cada Força e seis civis, com mandato de dois biênios."
        },
        {
          "key": "c",
          "label": "Quatro da Marinha, três do Exército, três da Aeronáutica e cinco juízes do Trabalho."
        },
        {
          "key": "d",
          "label": "Três oficiais-generais da Marinha, quatro do Exército, três da Aeronáutica e cinco civis."
        },
        {
          "key": "e",
          "label": "Quinze oficiais da ativa, sem cadeira civil."
        }
      ],
      "comentario": "Questão original, não é prova real. A alternativa d é o art. 123. Os civis têm mais de 35 e menos de 70 anos, na redação da Emenda 122/2022. O art. 124 não descreve o crime militar."
    }
  ],
  "toc": [
    {
      "id": "p207-111",
      "num": "111",
      "label": "Trabalho"
    },
    {
      "id": "p207-118",
      "num": "118",
      "label": "Eleitoral"
    },
    {
      "id": "p207-122",
      "num": "122",
      "label": "Militar"
    }
  ],
  "clocks": [
    {
      "value": "27",
      "label": "Ministros do TST",
      "source": "Art. 111-A"
    },
    {
      "value": "2 biênios",
      "label": "Máximo eleitoral consecutivo",
      "source": "Art. 121, § 2º"
    },
    {
      "value": "15",
      "label": "Ministros do STM",
      "source": "Art. 123"
    }
  ],
  "organKicker": "Recorte",
  "organTitle": "Justiças especializadas da União",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o órgão. Depois a idade. Crime não se descreve.",
  "closing": "Conferir emenda posterior à consulta de 22/10/2026. A ADI 3392 não foi completada.",
  "palette": "lime",
  "highlight": {
    "big": "3",
    "small": "Justiças neste assunto"
  },
  "heroLead": "Trabalho, Eleitoral e Militar da União. A junta trabalhista está revogada. O presidente do TSE sai do Supremo. O crime militar fica na lei.",
  "nextLine": "O assunto seguinte continua na mesma disciplina.",
  "closingMnemonic": "TST 35, TRT 30. Dois biênios. STM: 3, 4, 3 e 5.",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "O que a banca troca",
  "compareLead": "A esquerda é a armadilha. A direita é o texto.",
  "compareLeft": "Armadilha",
  "compareRight": "Texto"
};
