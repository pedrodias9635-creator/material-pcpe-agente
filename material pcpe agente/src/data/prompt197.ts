import type { StudyModule } from "./study";

export const PROMPT197: StudyModule = {
  "short": "Quinto constitucional e STJ",
  "eyebrow": "Prompt 197 · lacuna do edital",
  "title": "Quinto constitucional e STJ",
  "subtitle": "arts. 94 e 104",
  "description": "Um quinto dos lugares dos Tribunais Regionais Federais, dos Tribunais dos Estados e do Distrito Federal e Territórios vem do Ministério Público, com mais de dez anos de carreira, e de advogados com mais de dez anos de atividade, em lista sêxtupla. O tribunal reduz a tríplice. O Executivo escolhe em vinte dias. O STJ tem, no mínimo, trinta e três Ministros, com mais de trinta e cinco e menos de setenta anos, aprovados pela maioria absoluta do Senado.",
  "reading": "CF/88, compilação do Planalto consultada em 22/10/2026. Arts. 94 e 104. Idade do STJ é a da Emenda Constitucional nº 122/2022.",
  "terms": [
    "sêxtupla",
    "vinte dias",
    "trinta e três",
    "setenta"
  ],
  "subject": "Direito Constitucional",
  "context": [
    "O texto é o da compilação oficial conferida. Redação riscada não foi copiada.",
    "Artigo de mesmo número no ADCT não é este texto.",
    "O que não está escrito não se completa."
  ],
  "importance": "A banca troca prazo, idade e o órgão competente.",
  "distinctions": [
    "Quinto: MP com mais de dez anos de carreira e advogado com mais de dez anos de atividade efetiva.",
    "Lista sêxtupla da classe. Lista tríplice do tribunal. Escolha do Executivo em vinte dias.",
    "STJ: no mínimo trinta e três Ministros.",
    "Idade: mais de 35 e menos de 70. Maioria absoluta do Senado.",
    "Um terço de juízes de TRF e um terço de desembargadores, em lista tríplice do próprio tribunal.",
    "Um terço, em partes iguais, de advogados e membros do Ministério Público, alternadamente, na forma do art. 94."
  ],
  "organs": [
    {
      "sigla": "94",
      "nome": "Quinto",
      "funcao": "Sêxtupla não é tríplice. A tríplice é o passo seguinte, do tribunal.",
      "base": "CF art. 94",
      "nao": "Vinte dias não é trinta.",
      "tone": "yellow"
    },
    {
      "sigla": "104",
      "nome": "Composição do STJ",
      "funcao": "Menos de setenta. A idade anterior não foi copiada.",
      "base": "CF art. 104",
      "nao": "Maioria absoluta do Senado. Não é dois terços.",
      "tone": "cyan"
    }
  ],
  "swaps": [
    {
      "wrong": "Menos de 65.",
      "right": "Menos de 70."
    }
  ],
  "timeline": [
    {
      "when": "Fonte",
      "title": "Compilação",
      "text": "CF/88, compilação do Planalto consultada em 22/10/2026. Arts. 94 e 104. Idade do STJ é a da Emenda Constitucional nº 122/2022."
    },
    {
      "when": "Limite",
      "title": "Sem invenção",
      "text": "Alínea revogada não foi reconstituída."
    }
  ],
  "articles": [
    {
      "id": "p197-94",
      "num": "94",
      "kicker": "CF art. 94",
      "title": "Quinto",
      "lead": "Quinto",
      "plate": "Quinto",
      "plateSource": "CF art. 94",
      "devices": [
        {
          "tag": "94",
          "name": "Art. 94",
          "hook": "Dez anos. Sêxtupla. Vinte dias.",
          "literal": "Art. 94. Um quinto dos lugares dos Tribunais Regionais Federais, dos Tribunais dos Estados, e do Distrito Federal e Territórios será composto de membros, do Ministério Público, com mais de dez anos de carreira, e de advogados de notório saber jurídico e de reputação ilibada, com mais de dez anos de efetiva atividade profissional, indicados em lista sêxtupla pelos órgãos de representação das respectivas classes. Parágrafo único. Recebidas as indicações, o tribunal formará lista tríplice, enviando-a ao Poder Executivo, que, nos vinte dias subseqüentes, escolherá um de seus integrantes para nomeação.",
          "context": "Sêxtupla não é tríplice. A tríplice é o passo seguinte, do tribunal.",
          "exam": "Sêxtupla não é tríplice. A tríplice é o passo seguinte, do tribunal.",
          "trap": "Vinte dias não é trinta.",
          "example": "Sem exemplo de nomeação. A lista basta.",
          "mnemonic": "Dez anos. Sêxtupla. Vinte dias.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p197-104",
      "num": "104",
      "kicker": "CF art. 104",
      "title": "Composição do STJ",
      "lead": "Composição do STJ",
      "plate": "Composição do STJ",
      "plateSource": "CF art. 104",
      "devices": [
        {
          "tag": "104",
          "name": "Art. 104",
          "hook": "33. 35 e 70. Um terço e um terço.",
          "literal": "Art. 104. O Superior Tribunal de Justiça compõe-se de, no mínimo, trinta e três Ministros. Parágrafo único. Os Ministros do Superior Tribunal de Justiça serão nomeados pelo Presidente da República, dentre brasileiros com mais de trinta e cinco e menos de setenta anos de idade, de notável saber jurídico e reputação ilibada, depois de aprovada a escolha pela maioria absoluta do Senado Federal, sendo: (Redação dada pela Emenda Constitucional nº 122, de 2022) I - um terço dentre juízes dos Tribunais Regionais Federais e um terço dentre desembargadores dos Tribunais de Justiça, indicados em lista tríplice elaborada pelo próprio Tribunal; II - um terço, em partes iguais, dentre advogados e membros do Ministério Público Federal, Estadual, do Distrito Federal e Territórios, alternadamente, indicados na forma do art. 94.",
          "context": "Menos de setenta. A idade anterior não foi copiada.",
          "exam": "Menos de setenta. A idade anterior não foi copiada.",
          "trap": "Maioria absoluta do Senado. Não é dois terços.",
          "example": "Sem exemplo de sabatina. O terço basta.",
          "mnemonic": "33. 35 e 70. Um terço e um terço.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 197",
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
  "rolePlateSource": "Prompt 197",
  "summary": [
    {
      "item": "Art. 94",
      "rule": "Lista sêxtupla.",
      "clue": "Depois, tríplice. 20 dias."
    },
    {
      "item": "Art. 104",
      "rule": "Mínimo de 33.",
      "clue": "Menos de 70. EC 122/2022."
    }
  ],
  "compare": [
    {
      "item": "Idade",
      "ce": "Menos de 65.",
      "cf": "Menos de 70.",
      "effect": "amplia"
    }
  ],
  "questions": [
    {
      "id": 197011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "No quinto constitucional, o Ministério Público indica membros com mais de dez anos de carreira, e a classe dos advogados indica quem tenha mais de dez anos de efetiva atividade, em lista sêxtupla.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. Art. 94. O tribunal forma lista tríplice, e o Executivo escolhe um integrante nos vinte dias seguintes."
    },
    {
      "id": 197012,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Os Ministros do STJ são escolhidos entre brasileiros com mais de trinta e cinco e menos de sessenta e cinco anos.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. A redação da Emenda Constitucional nº 122/2022 diz menos de setenta anos. A aprovação é pela maioria absoluta do Senado."
    },
    {
      "id": 197013,
      "banca": "Estilo Cebraspe · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O STJ compõe-se de, no mínimo:",
      "correct": "c",
      "options": [
        {
          "key": "a",
          "label": "Onze Ministros."
        },
        {
          "key": "b",
          "label": "Quinze Ministros, como o Conselho Nacional de Justiça."
        },
        {
          "key": "c",
          "label": "Trinta e três Ministros."
        },
        {
          "key": "d",
          "label": "Vinte e sete Ministros."
        },
        {
          "key": "e",
          "label": "Trinta Ministros, sem terço de advogados."
        }
      ],
      "comentario": "Questão original, não é prova real. A alternativa c é o caput. O parágrafo único reparte em um terço de juízes de TRF, um terço de desembargadores e um terço, em partes iguais e alternadas, de advogados e Ministério Público."
    }
  ],
  "toc": [
    {
      "id": "p197-94",
      "num": "94",
      "label": "Quinto"
    },
    {
      "id": "p197-104",
      "num": "104",
      "label": "Composição do STJ"
    }
  ],
  "clocks": [
    {
      "value": "33",
      "label": "Mínimo de Ministros do STJ",
      "source": "Art. 104"
    },
    {
      "value": "20",
      "label": "Dias para o Executivo escolher",
      "source": "Art. 94"
    }
  ],
  "organKicker": "Recorte",
  "organTitle": "Quinto constitucional e STJ",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a troca.",
  "closing": "Conferir emenda posterior à consulta de 22/10/2026.",
  "palette": "azure",
  "highlight": {
    "big": "2",
    "small": "artigos neste assunto"
  },
  "heroLead": "Um quinto dos lugares dos Tribunais Regionais Federais, dos Tribunais dos Estados e do Distrito Federal e Territórios vem do Ministério Público, com mais de dez anos de carreira, e",
  "nextLine": "O assunto seguinte continua na mesma disciplina.",
  "closingMnemonic": "Quinto: MP com mais de dez anos de carreira e advogado com mais de dez anos de atividade efetiva.",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "O que a banca troca",
  "compareLead": "A esquerda é a armadilha. A direita é o texto.",
  "compareLeft": "Armadilha",
  "compareRight": "Texto"
};
