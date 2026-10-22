import type { StudyModule } from "./study";

export const PROMPT206: StudyModule = {
  "short": "Conselho Nacional do MP",
  "eyebrow": "Prompt 206 · lacuna do edital",
  "title": "Conselho Nacional do Ministério Público",
  "subtitle": "arts. 130 e 130-A",
  "description": "O CNJ tem 15 membros e é presidido pelo Presidente do Supremo. O Conselho Nacional do Ministério Público tem 14 e é presidido pelo Procurador-Geral da República. O corregedor nacional não se reconduz. O Ministério Público de contas não é este conselho.",
  "reading": "CF/88, compilação do Planalto consultada em 22/10/2026. Arts. 130 e 130-A. Emenda 45/2004 e, no § 2º, III, Emenda 103/2019. O CNJ permanece no Prompt 179.",
  "terms": [
    "14",
    "Procurador-Geral",
    "dois anos",
    "corregedor"
  ],
  "subject": "Direito Constitucional",
  "context": [
    "Fonte: compilação do Planalto consultada em 22/10/2026.",
    "O Prompt 179 já fixou o CNJ em 15 membros. Este assunto não o reabre.",
    "Sanção administrativa é nomeada. O meio não se descreve."
  ],
  "importance": "A banca soma um membro, troca o presidente e reconduz o corregedor.",
  "distinctions": [
    "Art. 130: o Ministério Público junto ao Tribunal de Contas recebe direitos, vedações e forma de investidura desta seção. Não é o Conselho.",
    "14 membros. Nomeação pelo Presidente da República depois de aprovação pela maioria absoluta do Senado.",
    "Mandato de 2 anos, admitida uma recondução.",
    "Presidente: o Procurador-Geral da República. Não é o Presidente do Supremo.",
    "Quatro do Ministério Público da União, com cada carreira representada. Três dos Ministérios Públicos dos Estados.",
    "Dois juízes: um indicado pelo Supremo e outro pelo Superior Tribunal de Justiça. Dois advogados, indicados pelo Conselho Federal da OAB.",
    "Dois cidadãos: um pela Câmara e outro pelo Senado.",
    "Controle da atuação administrativa e financeira e dos deveres funcionais. Não julga a causa.",
    "Reclamação não apaga a competência disciplinar da própria instituição. Pode avocar processo disciplinar em curso.",
    "Revisão de processo disciplinar julgado há menos de um ano.",
    "Corregedor nacional: votação secreta, dentre os membros do Ministério Público que integram o Conselho. Recondução vedada.",
    "O Presidente do Conselho Federal da OAB oficia junto ao Conselho. Não é o décimo quinto membro.",
    "Ouvidoria representa diretamente ao Conselho. A lei da União e a dos Estados é que as criam."
  ],
  "organs": [
    {
      "sigla": "14",
      "nome": "Composição",
      "funcao": "PGR, 4, 3, 2, 2 e 2.",
      "base": "Art. 130-A",
      "nao": "Quinze é o CNJ, não este conselho.",
      "tone": "yellow"
    },
    {
      "sigla": "PGR",
      "nome": "Presidência",
      "funcao": "O Procurador-Geral da República preside.",
      "base": "Art. 130-A, I",
      "nao": "Não é o Presidente do Supremo.",
      "tone": "cyan"
    },
    {
      "sigla": "COR",
      "nome": "Corregedor",
      "funcao": "Um mandato. Sem recondução.",
      "base": "Art. 130-A, § 3º",
      "nao": "A recondução do conselheiro não se estende ao corregedor.",
      "tone": "orange"
    }
  ],
  "swaps": [
    {
      "wrong": "15 membros, presidido pelo Supremo.",
      "right": "14 membros, presidido pelo Procurador-Geral da República."
    },
    {
      "wrong": "Corregedor pode ser reconduzido.",
      "right": "Recondução do corregedor é vedada."
    }
  ],
  "timeline": [
    {
      "when": "Fonte",
      "title": "Compilação",
      "text": "CF/88, compilação do Planalto consultada em 22/10/2026. Art. 130-A, Emenda 45/2004. O inciso III do § 2º está na redação da Emenda 103/2019."
    },
    {
      "when": "Limite",
      "title": "Sem o CNJ",
      "text": "A composição do CNJ não foi reaberta. Quinze continua sendo o número do Prompt 179."
    }
  ],
  "articles": [
    {
      "id": "p206-130",
      "num": "130-A",
      "kicker": "CF art. 130-A",
      "title": "Quatorze membros",
      "lead": "Art. 130-A",
      "plate": "14",
      "plateSource": "Art. 130-A",
      "devices": [
        {
          "tag": "130",
          "name": "Arts. 130 e 130-A",
          "hook": "14. PGR preside. Corregedor não se reconduz.",
          "literal": "Art. 130. Aos membros do Ministério Público junto aos Tribunais de Contas aplicam-se as disposições desta seção pertinentes a direitos, vedações e forma de investidura. Art. 130-A. O Conselho Nacional do Ministério Público compõe-se de quatorze membros nomeados pelo Presidente da República, depois de aprovada a escolha pela maioria absoluta do Senado Federal, para um mandato de dois anos, admitida uma recondução, sendo: I o Procurador-Geral da República, que o preside; II quatro membros do Ministério Público da União, assegurada a representação de cada uma de suas carreiras; III três membros do Ministério Público dos Estados; IV dois juízes, indicados um pelo Supremo Tribunal Federal e outro pelo Superior Tribunal de Justiça; V dois advogados, indicados pelo Conselho Federal da Ordem dos Advogados do Brasil; VI dois cidadãos de notável saber jurídico e reputação ilibada, indicados um pela Câmara dos Deputados e outro pelo Senado Federal. § 2º Compete ao Conselho Nacional do Ministério Público o controle da atuação administrativa e financeira do Ministério Público e do cumprimento dos deveres funcionais de seus membros. III - receber e conhecer das reclamações contra membros ou órgãos do Ministério Público da União ou dos Estados, inclusive contra seus serviços auxiliares, sem prejuízo da competência disciplinar e correicional da instituição, podendo avocar processos disciplinares em curso, determinar a remoção ou a disponibilidade e aplicar outras sanções administrativas, assegurada ampla defesa. (Redação dada pela Emenda Constitucional nº 103, de 2019) IV rever, de ofício ou mediante provocação, os processos disciplinares de membros do Ministério Público da União ou dos Estados julgados há menos de um ano. § 3º O Conselho escolherá, em votação secreta, um Corregedor nacional, dentre os membros do Ministério Público que o integram, vedada a recondução. § 4º O Presidente do Conselho Federal da Ordem dos Advogados do Brasil oficiará junto ao Conselho.",
          "context": "1 + 4 + 3 + 2 + 2 + 2 = 14. O ofício do § 4º não cria cadeira.",
          "exam": "A banca copia o CNJ: 15 membros e presidência do Supremo.",
          "trap": "Recondução do membro não é recondução do corregedor.",
          "example": "Sem exemplo de sanção. O inciso só nomeia.",
          "mnemonic": "14. PGR. Corregedor sem segundo mandato.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 206",
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
  "rolePlateSource": "Prompt 206",
  "summary": [
    {
      "item": "Caput",
      "rule": "14 membros, 2 anos, uma recondução.",
      "clue": "Maioria absoluta do Senado. Nomeia o Presidente da República."
    },
    {
      "item": "Inciso I",
      "rule": "Preside o Procurador-Geral da República.",
      "clue": "Não é o Presidente do Supremo."
    },
    {
      "item": "§ 3º",
      "rule": "Corregedor sem recondução.",
      "clue": "Escolha secreta, dentre os membros do Ministério Público no Conselho."
    }
  ],
  "compare": [
    {
      "item": "Cadeiras",
      "ce": "15, como o CNJ.",
      "cf": "14.",
      "effect": "separa"
    },
    {
      "item": "Presidência",
      "ce": "Presidente do Supremo.",
      "cf": "Procurador-Geral da República.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 206011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O Conselho Nacional do Ministério Público tem quinze membros e é presidido pelo Presidente do Supremo Tribunal Federal.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. O art. 130-A escreve quatorze membros. O inciso I diz que o Procurador-Geral da República o preside. Quinze e a presidência do Supremo são do CNJ, no Prompt 179."
    },
    {
      "id": 206012,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O corregedor nacional do Conselho Nacional do Ministério Público é escolhido em votação secreta, dentre os membros do Ministério Público que integram o Conselho, e a recondução lhe é vedada.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. Art. 130-A, § 3º. A recondução admitida no caput é do membro do Conselho, não do corregedor."
    },
    {
      "id": 206013,
      "banca": "Estilo Cebraspe · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Compõem o Conselho Nacional do Ministério Público, além do Procurador-Geral da República:",
      "correct": "b",
      "options": [
        {
          "key": "a",
          "label": "Quatro juízes, três advogados e o Presidente do Conselho Federal da OAB, com voto."
        },
        {
          "key": "b",
          "label": "Quatro membros do Ministério Público da União, três dos Estados, dois juízes, dois advogados e dois cidadãos."
        },
        {
          "key": "c",
          "label": "Três membros da União, quatro dos Estados e um ministro do Tribunal de Contas."
        },
        {
          "key": "d",
          "label": "Dois cidadãos indicados pelo Procurador-Geral e dois juízes indicados pela OAB."
        },
        {
          "key": "e",
          "label": "Os membros do Ministério Público junto aos Tribunais de Contas, que são o próprio Conselho."
        }
      ],
      "comentario": "Questão original, não é prova real. A alternativa b é a soma dos incisos II a VI. O Presidente do Conselho Federal da OAB oficia, não ocupa cadeira. O art. 130 não transforma o Ministério Público de contas neste Conselho."
    }
  ],
  "toc": [
    {
      "id": "p206-130",
      "num": "130-A",
      "label": "CNMP"
    }
  ],
  "clocks": [
    {
      "value": "14",
      "label": "Membros",
      "source": "Art. 130-A"
    },
    {
      "value": "2 anos",
      "label": "Mandato, uma recondução",
      "source": "Art. 130-A, caput"
    },
    {
      "value": "1 ano",
      "label": "Revisão disciplinar",
      "source": "Art. 130-A, § 2º, IV"
    }
  ],
  "organKicker": "Recorte",
  "organTitle": "Conselho Nacional do Ministério Público",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a troca com o CNJ.",
  "closing": "Conferir emenda posterior à consulta de 22/10/2026.",
  "palette": "teal",
  "highlight": {
    "big": "14",
    "small": "membros, não 15"
  },
  "heroLead": "Quatorze membros, não quinze. Preside o Procurador-Geral da República. O corregedor não se reconduz. Ministério Público de contas não é este conselho.",
  "nextLine": "O assunto seguinte continua na mesma disciplina.",
  "closingMnemonic": "14. PGR preside. Corregedor sem recondução.",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "O que a banca troca",
  "compareLead": "A esquerda é a armadilha. A direita é o texto.",
  "compareLeft": "Armadilha",
  "compareRight": "Texto"
};
