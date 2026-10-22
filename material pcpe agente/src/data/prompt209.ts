import type { StudyModule } from "./study";

export const PROMPT209: StudyModule = {
  "short": "Microsoft 365 e redes",
  "eyebrow": "Prompt 209 · lacuna do edital",
  "title": "Microsoft 365: formato e redes",
  "subtitle": "o que o edital nomeou e ainda não tinha assunto",
  "description": "O edital chama de Microsoft 365 o Word, o Excel e o PowerPoint já abertos. Este assunto completa tabulação, recuo, subscrito, sobrescrito, leiaute, esquema de cores, grupo de discussão e rede social. Sem procedimento de acesso ou de ocultação.",
  "reading": "Comportamento padrão do Word, do Excel e do PowerPoint no Microsoft 365, e noção de grupo de discussão e de rede social. Sem comando de invasão.",
  "terms": [
    "tabulação",
    "recuo",
    "subscrito",
    "leiaute"
  ],
  "subject": "Noções de Informática",
  "context": [
    "Word, Excel, Explorador, slide mestre, animação, correio, nuvem, deep web e backup já têm assunto.",
    "Recuo de 2,5 cm do padrão ofício continua no Prompt 128. Aqui o recuo é o recurso do processador.",
    "Rede social não ensina a contornar privacidade."
  ],
  "importance": "A banca chama tabulação de recuo, subscrito de fonte menor e grupo de discussão de correio individual.",
  "distinctions": [
    "Microsoft 365 é o nome do edital para o conjunto. Word, Excel e PowerPoint não mudam de programa por causa desse nome.",
    "Tabulação é parada de tabulação. A tecla Tab leva o cursor à parada seguinte. Não é o recuo do parágrafo.",
    "Parada pode ser à esquerda, centralizada, à direita ou decimal. A decimal alinha pela vírgula ou pelo ponto, não pelo primeiro caractere.",
    "Recuo é do parágrafo: esquerdo, direito, da primeira linha ou deslocado. Margem é da página. Os dois não se trocam.",
    "Recuo deslocado deixa a primeira linha para fora e empurra as seguintes. Não é subscrito.",
    "Subscrito desce o caractere da linha de base, como o 2 de H2O. Sobrescrito sobe, como o 2 de m2.",
    "Subscrito não é diminuir o tamanho da fonte. A fonte menor continua na linha de base.",
    "Leiaute do PowerPoint é o arranjo do slide: título, conteúdo, em branco. Não é o slide mestre, já aberto em outro assunto.",
    "Esquema de cores troca as cores do tema. Não reescreve o texto do slide.",
    "Grupo de discussão é espaço de muitas pessoas em torno de um tema. Não é a mensagem de um remetente para um destinatário.",
    "Rede social organiza perfil, publicação e vínculo. Configuração de privacidade limita quem vê. Este assunto não ensina a ultrapassar essa configuração.",
    "Animação continua dentro do slide. Transição continua entre slides. Não foram reabertas."
  ],
  "organs": [
    {
      "sigla": "TAB",
      "nome": "Tabulação",
      "funcao": "Parada. A tecla Tab não recua o parágrafo.",
      "base": "Word",
      "nao": "Não é margem nem recuo.",
      "tone": "yellow"
    },
    {
      "sigla": "SUB",
      "nome": "Subscrito",
      "funcao": "Abaixo da linha de base.",
      "base": "Word",
      "nao": "Fonte menor não desce o caractere.",
      "tone": "cyan"
    },
    {
      "sigla": "RED",
      "nome": "Redes",
      "funcao": "Grupo é coletivo. Correio de um para um não é grupo.",
      "base": "Item 3 do edital",
      "nao": "Sem procedimento de acesso.",
      "tone": "orange"
    }
  ],
  "swaps": [
    {
      "wrong": "Tabulação e recuo são o mesmo comando.",
      "right": "Tabulação é parada. Recuo é do parágrafo."
    },
    {
      "wrong": "Subscrito é fonte menor.",
      "right": "Subscrito desce o caractere. Fonte menor fica na linha."
    }
  ],
  "timeline": [
    {
      "when": "Nome",
      "title": "Microsoft 365",
      "text": "O edital usa Microsoft 365. Os programas já abertos são Word, Excel e PowerPoint."
    },
    {
      "when": "Limite",
      "title": "Sem acesso",
      "text": "Privacidade de rede social não foi convertida em modo de contornar a configuração."
    }
  ],
  "articles": [
    {
      "id": "p209-365",
      "num": "365",
      "kicker": "Microsoft 365",
      "title": "Formato e redes",
      "lead": "Itens 2 e 3 do edital",
      "plate": "Tab",
      "plateSource": "Word · tabulação",
      "devices": [
        {
          "tag": "FMT",
          "name": "Tabulação, recuo e índice",
          "hook": "Tab não recua. Subscrito não encolhe a fonte.",
          "literal": "Tabulação: paradas que a tecla Tab percorre. Podem alinhar à esquerda, ao centro, à direita ou pelo separador decimal. Recuo: deslocamento do parágrafo em relação à margem. Há recuo esquerdo, direito, de primeira linha e deslocado. Margem pertence à página, não ao parágrafo. Subscrito coloca o caractere abaixo da linha de base. Sobrescrito coloca acima. Reduzir o corpo da fonte não produz nenhum dos dois.",
          "context": "O recuo de 2,5 cm do padrão ofício é regra do Manual, no Prompt 128. Não é a definição do recurso.",
          "exam": "A banca marca a margem quando o comando foi recuo, e fonte 8 quando o comando foi subscrito.",
          "trap": "Recuo deslocado não é tabulação decimal.",
          "example": "H2O usa subscrito. m2 usa sobrescrito. Nenhum dos dois é fonte menor.",
          "mnemonic": "Tab para a parada. Recuo move o parágrafo. Subscrito desce.",
          "revoked": false
        },
        {
          "tag": "NET",
          "name": "Leiaute, grupo e rede",
          "hook": "Leiaute não é mestre. Grupo não é correio de um para um.",
          "literal": "Leiaute de slide escolhe a disposição dos espaços, como título e conteúdo ou slide em branco. Esquema de cores aplica o conjunto de cores do tema e não altera o texto. Grupo de discussão reúne várias pessoas em torno de um tema, em fórum ou lista. Correio eletrônico de um remetente para um destinatário não é esse grupo. Rede social publica a partir de um perfil e liga usuários. A privacidade define o alcance da publicação. Não há, neste assunto, passo para ultrapassá-la.",
          "context": "Slide mestre, animação, deep web, dark web, backup e antivírus continuam nos assuntos já abertos.",
          "exam": "A banca chama o leiaute de slide mestre e o fórum de mensagem particular.",
          "trap": "Esquema de cores não apaga o texto.",
          "example": "Sem exemplo de conta ou de senha.",
          "mnemonic": "Leiaute arruma. Cor pinta. Grupo é coletivo.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 209",
      "does": [
        "Separar comando de formatação e serviço de rede"
      ],
      "doesNot": [
        "Não procurar passo de acesso",
        "Não ocultar arquivo"
      ]
    }
  ],
  "roleNote": "Questões originais. Não são prova real.",
  "rolePlate": "Sem procedimento de acesso.",
  "rolePlateSource": "Prompt 209",
  "summary": [
    {
      "item": "Tabulação",
      "rule": "Parada percorrida pela tecla Tab.",
      "clue": "Não é recuo nem margem."
    },
    {
      "item": "Subscrito",
      "rule": "Abaixo da linha de base.",
      "clue": "Fonte menor não basta."
    },
    {
      "item": "Grupo",
      "rule": "Várias pessoas, um tema.",
      "clue": "Não é correio de um para um."
    }
  ],
  "compare": [
    {
      "item": "Tab",
      "ce": "É o recuo do parágrafo.",
      "cf": "É a parada de tabulação.",
      "effect": "separa"
    },
    {
      "item": "Subscrito",
      "ce": "Fonte menor.",
      "cf": "Caractere abaixo da linha.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 209011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "No Word do Microsoft 365, aplicar subscrito é o mesmo que reduzir o tamanho da fonte, e a tecla Tab aplica o recuo do parágrafo.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Subscrito desce o caractere em relação à linha de base. Fonte menor continua na linha. A tecla Tab percorre parada de tabulação. Recuo desloca o parágrafo em relação à margem."
    },
    {
      "id": 209012,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Grupo de discussão é um espaço em que várias pessoas tratam de um tema, e não se confunde com a mensagem de um remetente para um único destinatário.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. Grupo de discussão é coletivo. Correio de um para um é outro recurso. Rede social organiza perfil e publicação. Este assunto não ensina a contornar privacidade."
    },
    {
      "id": 209013,
      "banca": "Estilo Cebraspe · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "No PowerPoint do Microsoft 365, leiaute e esquema de cores se distinguem porque:",
      "correct": "b",
      "options": [
        {
          "key": "a",
          "label": "Leiaute é o slide mestre, e o esquema de cores apaga o texto dos slides."
        },
        {
          "key": "b",
          "label": "Leiaute escolhe a disposição dos espaços do slide. Esquema de cores troca as cores do tema e não reescreve o texto."
        },
        {
          "key": "c",
          "label": "Os dois são paradas de tabulação do Word."
        },
        {
          "key": "d",
          "label": "Leiaute é a margem da página, e o esquema de cores é o recuo de 2,5 cm do ofício."
        },
        {
          "key": "e",
          "label": "Esquema de cores é a transição entre slides, e leiaute é a animação interna."
        }
      ],
      "comentario": "Questão original, não é prova real. A alternativa b separa leiaute e esquema de cores. Slide mestre, transição e animação já estavam em outro assunto e não foram trocados. O recuo de 2,5 cm é do Manual, no Prompt 128."
    }
  ],
  "toc": [
    {
      "id": "p209-365",
      "num": "365",
      "label": "Microsoft 365"
    }
  ],
  "clocks": [
    {
      "value": "Tab",
      "label": "Percorre parada, não recuo",
      "source": "Word"
    },
    {
      "value": "H2O",
      "label": "Subscrito, não fonte menor",
      "source": "Word"
    }
  ],
  "organKicker": "Recorte",
  "organTitle": "O que o nome Microsoft 365 ainda não tinha",
  "contextTitle": "Como ler",
  "contextLead": "Separar página, parágrafo e caractere. Rede não vira procedimento.",
  "closing": "Sem passo de acesso, de ocultação ou de contorno de privacidade.",
  "palette": "cool",
  "highlight": {
    "big": "365",
    "small": "nome do edital"
  },
  "heroLead": "Microsoft 365 é o nome do edital. Tabulação não é recuo. Subscrito não é fonte menor. Grupo de discussão não é correio de um para um.",
  "nextLine": "O assunto seguinte continua na mesma disciplina.",
  "closingMnemonic": "Tab para a parada. Recuo move o parágrafo. Subscrito desce.",
  "rolesLead": "Sem procedimento de acesso.",
  "compareTitle": "O que a banca troca",
  "compareLead": "A esquerda é a armadilha. A direita é o recurso.",
  "compareLeft": "Armadilha",
  "compareRight": "Recurso"
};
