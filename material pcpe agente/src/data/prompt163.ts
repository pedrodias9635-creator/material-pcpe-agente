import type { StudyModule } from "./study";

export const PROMPT163: StudyModule = {
  "short": "Congresso Nacional",
  "eyebrow": "Prompt 163 · lacuna do edital",
  "title": "Congresso Nacional",
  "subtitle": "arts. 45 a 49",
  "description": "Câmara, Senado, quórum e as duas competências do Congresso. Com sanção é o art. 48. Exclusiva, sem essa sanção, é o art. 49. O art. 44 já foi lido no Prompt 151.",
  "reading": "CF/88, parte permanente, compilação do Planalto consultada em 21/10/2026. ADCT de mesmo número não é este texto.",
  "terms": [
    "oito e setenta",
    "três senadores",
    "maioria absoluta presente"
  ],
  "subject": "Direito Constitucional",
  "context": [
    "O texto abaixo é o da compilação oficial já conferida. Redação anterior riscada não foi copiada.",
    "Artigo de mesmo número no ADCT não é este texto.",
    "O que o artigo não escreve não se completa de memória."
  ],
  "importance": "A banca troca o artigo vizinho, o prazo e o nome do instituto.",
  "distinctions": [
    "Deputados: nenhuma unidade com menos de oito ou mais de setenta.",
    "Senado: três por Estado e pelo DF, mandato de oito anos, dois suplentes.",
    "Deliberação: maioria dos votos, presente a maioria absoluta. Não é maioria absoluta dos votos, salvo disposição em contrário.",
    "Art. 48 pede sanção. Art. 49 é competência exclusiva."
  ],
  "organs": [
    {
      "sigla": "45",
      "nome": "Câmara",
      "funcao": "Oito e setenta estão no § 1º.",
      "base": "CF art. 45",
      "nao": "Território elege quatro Deputados, no § 2º. Não são oito.",
      "tone": "yellow"
    },
    {
      "sigla": "46",
      "nome": "Senado",
      "funcao": "Três, oito anos, dois suplentes.",
      "base": "CF art. 46",
      "nao": "Renovação alternada de um e dois terços. Não é a Câmara inteira de quatro em quatro.",
      "tone": "cyan"
    },
    {
      "sigla": "47",
      "nome": "Quórum",
      "funcao": "Maioria dos votos, presente a maioria absoluta.",
      "base": "CF art. 47",
      "nao": "Não se leia como maioria absoluta dos votos.",
      "tone": "orange"
    },
    {
      "sigla": "48",
      "nome": "Com sanção",
      "funcao": "Sanção está no caput.",
      "base": "CF art. 48",
      "nao": "Não se troque com a competência exclusiva.",
      "tone": "violet"
    }
  ],
  "swaps": [
    {
      "wrong": "Maioria absoluta dos votos.",
      "right": "Maioria dos votos, presente a maioria absoluta."
    }
  ],
  "timeline": [
    {
      "when": "Fonte",
      "title": "Compilação conferida",
      "text": "CF/88, parte permanente, compilação do Planalto consultada em 21/10/2026. ADCT de mesmo número não é este texto."
    },
    {
      "when": "Limite",
      "title": "Sem invenção",
      "text": "Inciso não transcrito não foi inventado."
    }
  ],
  "articles": [
    {
      "id": "p163-45",
      "num": "45",
      "kicker": "CF art. 45",
      "title": "Câmara",
      "lead": "Câmara",
      "plate": "Câmara",
      "plateSource": "CF art. 45",
      "devices": [
        {
          "tag": "45",
          "name": "Art. 45",
          "hook": "Oito mínimo. Setenta máximo. Território: quatro.",
          "literal": "Art. 45. A Câmara dos Deputados compõe-se de representantes do povo, eleitos, pelo sistema proporcional, em cada Estado, em cada Território e no Distrito Federal. § 1º O número total de Deputados, bem como a representação por Estado e pelo Distrito Federal, será estabelecido por lei complementar, proporcionalmente à população, procedendo-se aos ajustes necessários, no ano anterior às eleições, para que nenhuma daquelas unidades da Federação tenha menos de oito ou mais de setenta Deputados. (Vide Lei Complementar nº 78, de 1993) § 2º Cada Território elegerá quatro Deputados.",
          "context": "Oito e setenta estão no § 1º.",
          "exam": "Oito e setenta estão no § 1º.",
          "trap": "Território elege quatro Deputados, no § 2º. Não são oito.",
          "example": "Sem exemplo de eleição. O número basta.",
          "mnemonic": "Oito mínimo. Setenta máximo. Território: quatro.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p163-46",
      "num": "46",
      "kicker": "CF art. 46",
      "title": "Senado",
      "lead": "Senado",
      "plate": "Senado",
      "plateSource": "CF art. 46",
      "devices": [
        {
          "tag": "46",
          "name": "Art. 46",
          "hook": "Três senadores. Oito anos. Dois suplentes.",
          "literal": "Art. 46. O Senado Federal compõe-se de representantes dos Estados e do Distrito Federal, eleitos segundo o princípio majoritário. § 1º Cada Estado e o Distrito Federal elegerão três Senadores, com mandato de oito anos. § 2º A representação de cada Estado e do Distrito Federal será renovada de quatro em quatro anos, alternadamente, por um e dois terços. § 3º Cada Senador será eleito com dois suplentes.",
          "context": "Três, oito anos, dois suplentes.",
          "exam": "Três, oito anos, dois suplentes.",
          "trap": "Renovação alternada de um e dois terços. Não é a Câmara inteira de quatro em quatro.",
          "example": "Sem exemplo de chapa. O § 3º basta.",
          "mnemonic": "Três senadores. Oito anos. Dois suplentes.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p163-47",
      "num": "47",
      "kicker": "CF art. 47",
      "title": "Quórum",
      "lead": "Quórum",
      "plate": "Quórum",
      "plateSource": "CF art. 47",
      "devices": [
        {
          "tag": "47",
          "name": "Art. 47",
          "hook": "Votos: maioria simples. Presença: absoluta.",
          "literal": "Art. 47. Salvo disposição constitucional em contrário, as deliberações de cada Casa e de suas Comissões serão tomadas por maioria dos votos, presente a maioria absoluta de seus membros.",
          "context": "Maioria dos votos, presente a maioria absoluta.",
          "exam": "Maioria dos votos, presente a maioria absoluta.",
          "trap": "Não se leia como maioria absoluta dos votos.",
          "example": "Sem exemplo de votação. A frase é o artigo.",
          "mnemonic": "Votos: maioria simples. Presença: absoluta.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p163-48",
      "num": "48",
      "kicker": "CF art. 48",
      "title": "Com sanção",
      "lead": "Com sanção",
      "plate": "Com sanção",
      "plateSource": "CF art. 48",
      "devices": [
        {
          "tag": "48",
          "name": "Art. 48",
          "hook": "Com sanção: art. 48.",
          "literal": "Art. 48. Cabe ao Congresso Nacional, com a sanção do Presidente da República, não exigida esta para o especificado nos arts. 49, 51 e 52, dispor sobre todas as matérias de competência da União, especialmente sobre: I - sistema tributário, arrecadação e distribuição de rendas; II - plano plurianual, diretrizes orçamentárias, orçamento anual, operações de crédito, dívida pública e emissões de curso forçado; III - fixação e modificação do efetivo das Forças Armadas; IV - planos e programas nacionais, regionais e setoriais de desenvolvimento; V - limites do território nacional, espaço aéreo e marítimo e bens do domínio da União; VI - incorporação, subdivisão ou desmembramento de áreas de Territórios ou Estados, ouvidas as respectivas Assembléias Legislativas; VII - transferência temporária da sede do Governo Federal; VIII - concessão de anistia; IX - organização administrativa, judiciária, do Ministério Público e da Defensoria Pública da União e dos Territórios e organização judiciária e do Ministério Público do Distrito Federal; (Redação dada pela Emenda Constitucional nº 69, de 2012) (Produção de efeito) X - criação, transformação e extinção de cargos, empregos e funções públicas, observado o que estabelece o art. 84, VI, b ; (Redação dada pela Emenda Constitucional nº 32, de 2001) XI - criação e extinção de Ministérios e órgãos da administração pública; (Redação dada pela Emenda Constitucional nº 32, de 2001) XII - telecomunicações e radiodifusão; XIII - matéria financeira, cambial e monetária, instituições financeiras e suas operações; XIV - moeda, seus limites de emissão, e montante da dívida mobiliária federal.",
          "context": "Sanção está no caput.",
          "exam": "Sanção está no caput.",
          "trap": "Não se troque com a competência exclusiva.",
          "example": "Sem exemplo de lei. O caput localiza.",
          "mnemonic": "Com sanção: art. 48.",
          "revoked": false
        },
        {
          "tag": "48.2",
          "name": "Art. 48, continua",
          "hook": "Com sanção: art. 48.",
          "literal": "XV - fixação do subsídio dos Ministros do Supremo Tribunal Federal, observado o que dispõem os arts. 39, § 4º; 150, II; 153, III; e 153, § 2º, I. (Redação dada pela Emenda Constitucional nº 41, 19.12.2003)",
          "context": "Continuação do mesmo artigo. O trecho anterior não se lê sem este, nem este sem o anterior.",
          "exam": "A banca corta o inciso no meio e trata a parte como o artigo inteiro.",
          "trap": "Não complete o inciso com memória. Leia o trecho seguinte.",
          "example": "Sem exemplo novo. O exemplo do primeiro trecho não cobre este inciso.",
          "mnemonic": "Com sanção: art. 48.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p163-49",
      "num": "49",
      "kicker": "CF art. 49",
      "title": "Exclusiva",
      "lead": "Exclusiva",
      "plate": "Exclusiva",
      "plateSource": "CF art. 49",
      "devices": [
        {
          "tag": "49",
          "name": "Art. 49",
          "hook": "Sem sanção: art. 49.",
          "literal": "Art. 49. É da competência exclusiva do Congresso Nacional: I - resolver definitivamente sobre tratados, acordos ou atos internacionais que acarretem encargos ou compromissos gravosos ao patrimônio nacional; II - autorizar o Presidente da República a declarar guerra, a celebrar a paz, a permitir que forças estrangeiras transitem pelo território nacional ou nele permaneçam temporariamente, ressalvados os casos previstos em lei complementar; III - autorizar o Presidente e o Vice-Presidente da República a se ausentarem do País, quando a ausência exceder a quinze dias; IV - aprovar o estado de defesa e a intervenção federal, autorizar o estado de sítio, ou suspender qualquer uma dessas medidas; V - sustar os atos normativos do Poder Executivo que exorbitem do poder regulamentar ou dos limites de delegação legislativa; VI - mudar temporariamente sua sede; VII - fixar idêntico subsídio para os Deputados Federais e os Senadores, observado o que dispõem os arts. 37, XI, 39, § 4º, 150, II, 153, III, e 153, § 2º, I; (Redação dada pela Emenda Constitucional nº 19, de 1998) VIII - fixar os subsídios do Presidente e do Vice-Presidente da República e dos Ministros de Estado, observado o que dispõem os arts. 37, XI, 39, § 4º, 150, II, 153, III, e 153, § 2º, I; (Redação dada pela Emenda Constitucional nº 19, de 1998) IX - julgar anualmente as contas prestadas pelo Presidente da República e apreciar os relatórios sobre a execução dos planos de governo; X - fiscalizar e controlar, diretamente, ou por qualquer de suas Casas, os atos do Poder Executivo, incluídos os da administração indireta;",
          "context": "Exclusiva não pede a sanção do art. 48.",
          "exam": "Exclusiva não pede a sanção do art. 48.",
          "trap": "Tratado gravoso está no inciso I. Guerra autorizada ao Presidente está no II.",
          "example": "Sem exemplo de tratado. O inciso basta.",
          "mnemonic": "Sem sanção: art. 49.",
          "revoked": false
        },
        {
          "tag": "49.2",
          "name": "Art. 49, continua",
          "hook": "Sem sanção: art. 49.",
          "literal": "XI - zelar pela preservação de sua competência legislativa em face da atribuição normativa dos outros Poderes; XII - apreciar os atos de concessão e renovação de concessão de emissoras de rádio e televisão; XIII - escolher dois terços dos membros do Tribunal de Contas da União; XIV - aprovar iniciativas do Poder Executivo referentes a atividades nucleares; XV - autorizar referendo e convocar plebiscito; XVI - autorizar, em terras indígenas, a exploração e o aproveitamento de recursos hídricos e a pesquisa e lavra de riquezas minerais; XVII - aprovar, previamente, a alienação ou concessão de terras públicas com área superior a dois mil e quinhentos hectares. XVIII - decretar o estado de calamidade pública de âmbito nacional previsto nos arts. 167-B, 167-C, 167-D, 167-E, 167-F e 167-G desta Constituição. (Incluído pela Emenda Constitucional nº 109, de 2021)",
          "context": "Continuação do mesmo artigo. O trecho anterior não se lê sem este, nem este sem o anterior.",
          "exam": "A banca corta o inciso no meio e trata a parte como o artigo inteiro.",
          "trap": "Não complete o inciso com memória. Leia o trecho seguinte.",
          "example": "Sem exemplo novo. O exemplo do primeiro trecho não cobre este inciso.",
          "mnemonic": "Sem sanção: art. 49.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 163",
      "does": [
        "Ler o texto antes do comentário",
        "Separar o artigo do vizinho"
      ],
      "doesNot": [
        "Não completar lacuna",
        "Não usar número não escrito neste prompt"
      ]
    }
  ],
  "roleNote": "Questões originais, no estilo da banca. Não são prova real.",
  "rolePlate": "Texto primeiro.",
  "rolePlateSource": "Prompt 163",
  "summary": [
    {
      "item": "Art. 47",
      "rule": "Maioria dos votos, presença absoluta.",
      "clue": "Não é maioria absoluta dos votos."
    },
    {
      "item": "Art. 46",
      "rule": "Três, oito anos, dois suplentes.",
      "clue": "Renovação de um e dois terços."
    }
  ],
  "compare": [
    {
      "item": "Quórum",
      "ce": "Maioria absoluta dos votos.",
      "cf": "Maioria dos votos, presente a maioria absoluta.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 163011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Nenhuma unidade da Federação terá menos de oito ou mais de setenta Deputados.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. Art. 45, § 1º."
    },
    {
      "id": 163012,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "As deliberações de cada Casa exigem, como regra, a maioria absoluta dos votos.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. O art. 47 pede maioria dos votos, presente a maioria absoluta dos membros."
    },
    {
      "id": 163013,
      "banca": "Estilo Cebraspe · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Cada Estado e o Distrito Federal elegem:",
      "correct": "b",
      "options": [
        {
          "key": "a",
          "label": "Dois Senadores, com um suplente, para quatro anos."
        },
        {
          "key": "b",
          "label": "Três Senadores, com mandato de oito anos, cada um com dois suplentes."
        },
        {
          "key": "c",
          "label": "Três Deputados, pelo sistema proporcional."
        },
        {
          "key": "d",
          "label": "Oito Senadores, renovados por inteiro."
        },
        {
          "key": "e",
          "label": "Setenta Senadores."
        }
      ],
      "comentario": "Questão original, não é prova real. A alternativa b junta os §§ 1º e 3º do art. 46."
    }
  ],
  "toc": [
    {
      "id": "p163-45",
      "num": "45",
      "label": "Câmara"
    },
    {
      "id": "p163-46",
      "num": "46",
      "label": "Senado"
    },
    {
      "id": "p163-47",
      "num": "47",
      "label": "Quórum"
    },
    {
      "id": "p163-48",
      "num": "48",
      "label": "Com sanção"
    },
    {
      "id": "p163-49",
      "num": "49",
      "label": "Exclusiva"
    }
  ],
  "clocks": [
    {
      "value": "8–70",
      "label": "Deputados por unidade",
      "source": "Art. 45, § 1º"
    },
    {
      "value": "8",
      "label": "Anos de senador",
      "source": "Art. 46, § 1º"
    }
  ],
  "organKicker": "Recorte",
  "organTitle": "Congresso Nacional",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a troca que a banca faz.",
  "closing": "Conferir a fonte se houver emenda posterior à compilação consultada em 21/10/2026.",
  "palette": "ember",
  "highlight": {
    "big": "5",
    "small": "artigos neste assunto"
  },
  "heroLead": "Câmara, Senado, quórum e as duas competências do Congresso. Com sanção é o art. 48. Exclusiva, sem essa sanção, é o art. 49. O art. 44 já foi lido no Prompt 151.",
  "nextLine": "O assunto seguinte continua na mesma disciplina.",
  "closingMnemonic": "Deputados: nenhuma unidade com menos de oito ou mais de setenta.",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "O que a banca troca",
  "compareLead": "A coluna da esquerda é a armadilha. A da direita é o texto.",
  "compareLeft": "Armadilha",
  "compareRight": "Texto"
};
