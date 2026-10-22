import type { StudyModule } from "./study";

export const PROMPT52: StudyModule = {
  "short": "Encerramento",
  "eyebrow": "Prompt 52 de 86 · Lei 14.133/2021, art. 71",
  "title": "Encerramento da licitação",
  "subtitle": "autoridade superior, depois dos recursos",
  "description": "O art. 71 só abre quando julgamento e habilitação terminaram e os recursos administrativos se exauriram. A autoridade superior pode saneiar, revogar, anular ou adjudicar e homologar. Contratação direta não é o tema deste prompt.",
  "reading": "Lei nº 14.133/2021, art. 71, caput e §§ 1º a 4º. Texto vigente no Planalto, conferido nesta rodada. Decreto de valor não entra aqui.",
  "terms": [
    "encerramento",
    "revogação",
    "anulação",
    "homologação",
    "adjudicação",
    "fato superveniente"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "O edital do Agente cobra licitações e contratos. Este prompt é só o encerramento.",
    "A fase anterior, forma da documentação, ficou no Prompt 51. Não volte a ela.",
    "O § 4º manda aplicar o artigo, no que couber, à contratação direta. Isso não abre o capítulo da contratação direta."
  ],
  "importance": "A banca troca revogação por anulação, e trata a homologação como dever automático. O verbo do caput é poderá.",
  "distinctions": [
    "Revogar é conveniência e oportunidade, com fato superveniente comprovado.",
    "Anular é ilegalidade insanável, de ofício ou por provocação.",
    "Irregularidade sanável volta os autos. Não se anula o que ainda pode ser corrigido.",
    "Adjudicar e homologar estão no mesmo inciso. O artigo não cria dois órgãos."
  ],
  "organs": [
    {
      "sigla": "AS",
      "nome": "Autoridade superior",
      "funcao": "Recebe o processo depois do julgamento, da habilitação e dos recursos.",
      "base": "Art. 71, caput",
      "nao": "Não é um quarto licitante nem substitui o agente de contratação.",
      "tone": "cyan"
    },
    {
      "sigla": "I",
      "nome": "Saneamento",
      "funcao": "Pode determinar o retorno dos autos para corrigir irregularidade.",
      "base": "Art. 71, I",
      "nao": "Não é anulação.",
      "tone": "emerald"
    },
    {
      "sigla": "II",
      "nome": "Revogação",
      "funcao": "Conveniência e oportunidade, com fato superveniente comprovado.",
      "base": "Art. 71, II e § 2º",
      "nao": "Não se revoga por ilegalidade.",
      "tone": "orange"
    },
    {
      "sigla": "III",
      "nome": "Anulação",
      "funcao": "Ilegalidade insanável, de ofício ou por provocação de terceiros.",
      "base": "Art. 71, III e § 1º",
      "nao": "Não alcança vício que ainda pode ser sanado.",
      "tone": "yellow"
    },
    {
      "sigla": "IV",
      "nome": "Adjudicar e homologar",
      "funcao": "Os dois atos estão no mesmo inciso.",
      "base": "Art. 71, IV",
      "nao": "O artigo não diz que um órgão adjudica e outro, diverso, homologa.",
      "tone": "violet"
    },
    {
      "sigla": "§3",
      "nome": "Interessados",
      "funcao": "Anulação e revogação exigem prévia manifestação.",
      "base": "Art. 71, § 3º",
      "nao": "A manifestação não é só da anulação.",
      "tone": "sky"
    }
  ],
  "swaps": [
    {
      "wrong": "A autoridade deverá revogar a licitação ao receber o processo.",
      "right": "O caput diz poderá. Revogar é uma das quatro saídas, não um dever."
    },
    {
      "wrong": "Revogação e anulação são nomes do mesmo ato.",
      "right": "Revogar é mérito, com fato superveniente. Anular é ilegalidade insanável."
    },
    {
      "wrong": "Qualquer irregularidade anula a licitação.",
      "right": "Irregularidade sanável volta os autos. Anulação exige vício insanável."
    },
    {
      "wrong": "A revogação dispensa motivo novo.",
      "right": "O § 2º exige fato superveniente devidamente comprovado."
    },
    {
      "wrong": "Só a anulação ouve os interessados.",
      "right": "O § 3º alcança anulação e revogação."
    },
    {
      "wrong": "Adjudicar e homologar são incisos diferentes.",
      "right": "Os dois estão no inciso IV."
    },
    {
      "wrong": "O art. 71 é o capítulo da contratação direta.",
      "right": "O capítulo da contratação direta começa depois. O § 4º só manda aplicar este artigo, no que couber."
    },
    {
      "wrong": "A anulação apaga só o ato viciado e preserva os seguintes.",
      "right": "O § 1º torna sem efeito os atos subsequentes que dependam do vício insanável."
    }
  ],
  "timeline": [
    {
      "when": "1",
      "title": "Fases anteriores",
      "text": "Julgamento e habilitação já encerrados. Recurso administrativo já exaurido."
    },
    {
      "when": "2",
      "title": "Autoridade superior",
      "text": "O processo é encaminhado. O verbo do caput é poderá."
    },
    {
      "when": "3",
      "title": "Quatro saídas",
      "text": "Saneamento, revogação, anulação, ou adjudicação com homologação."
    },
    {
      "when": "4",
      "title": "Se anular ou revogar",
      "text": "Prévia manifestação dos interessados. Na anulação, indicação expressa dos atos viciados."
    }
  ],
  "articles": [
    {
      "id": "art71",
      "num": "71",
      "kicker": "Capítulo VII",
      "title": "Encerramento",
      "lead": "O processo só chega aqui depois do julgamento, da habilitação e dos recursos.",
      "plate": "Poderá, não deverá.",
      "plateSource": "Art. 71, caput",
      "devices": [
        {
          "tag": "caput",
          "name": "Encaminhamento",
          "hook": "Quatro poderes, nenhum automático.",
          "literal": "Encerradas as fases de julgamento e habilitação, e exauridos os recursos administrativos, o processo licitatório será encaminhado à autoridade superior, que poderá: I - determinar o retorno dos autos para saneamento de irregularidades; II - revogar a licitação por motivo de conveniência e oportunidade; III - proceder à anulação da licitação, de ofício ou mediante provocação de terceiros, sempre que presente ilegalidade insanável; IV - adjudicar o objeto e homologar a licitação.",
          "context": "O será encaminhado é dever de remessa. O poderá é a escolha da autoridade. Não confunda os dois verbos.",
          "exam": "A banca troca poderá por deverá e cobra revogação automática.",
          "trap": "Exaurir recurso não significa que a autoridade esteja obrigada a homologar.",
          "example": "A licitação da PCPE chega à autoridade superior. Ela pode devolver o processo para corrigir uma certidão, sem anular o certame.",
          "mnemonic": "Encaminha sempre. Decide com poderá."
        },
        {
          "tag": "§1º",
          "name": "Nulidade expressa",
          "hook": "Indica o vício e alcança o que dele depende.",
          "literal": "Ao pronunciar a nulidade, a autoridade indicará expressamente os atos com vícios insanáveis, tornando sem efeito todos os subsequentes que deles dependam, e dará ensejo à apuração de responsabilidade de quem lhes tenha dado causa.",
          "context": "A anulação não é um carimbo genérico. O ato viciado é nomeado. A apuração de responsabilidade é efeito, não um atalho para punir sem processo.",
          "exam": "A banca diz que a anulação preserva os atos seguintes.",
          "trap": "Sem efeito não é a mesma frase que sanear.",
          "example": "Um edital com exigência ilegal insanável cai, e cai o julgamento que dependia dessa exigência.",
          "mnemonic": "Nomeia o vício. Derruba o que depende dele."
        },
        {
          "tag": "§2º",
          "name": "Fato superveniente",
          "hook": "Revogação não é mudança de humor.",
          "literal": "O motivo determinante para a revogação do processo licitatório deverá ser resultante de fato superveniente devidamente comprovado.",
          "context": "Superveniente é fato posterior e comprovado. O artigo não aceita revogação sem esse motivo.",
          "exam": "A banca trata conveniência como dispensa de prova.",
          "trap": "Não invente um prazo para o fato. O artigo não escreve dia.",
          "example": "A necessidade da compra desaparece depois do edital, e isso se comprova no processo. Aí cabe revogar, não anular.",
          "mnemonic": "Revogar: fato novo, comprovado."
        },
        {
          "tag": "§3º",
          "name": "Prévia manifestação",
          "hook": "Anular e revogar ouvem antes.",
          "literal": "Nos casos de anulação e revogação, deverá ser assegurada a prévia manifestação dos interessados.",
          "context": "O dever é de assegurar a manifestação. O artigo não escreve um número de dias.",
          "exam": "A banca inventa prazo de três ou cinco dias. Não está neste parágrafo.",
          "trap": "Não use a manifestação como roteiro para excluir licitante.",
          "example": "Antes de revogar, a Administração abre prazo para os interessados se manifestarem. O prazo, se houver, vem do edital ou de outra norma, não deste parágrafo.",
          "mnemonic": "Ouve antes. Não conte dia que o artigo não conta."
        },
        {
          "tag": "§4º",
          "name": "No que couber",
          "hook": "O artigo alcança contratação direta sem abrir o capítulo.",
          "literal": "O disposto neste artigo será aplicado, no que couber, à contratação direta e aos procedimentos auxiliares da licitação.",
          "context": "No que couber não transforma dispensa em licitação nem abre os arts. 72 a 75.",
          "exam": "A banca usa o § 4º para cobrar inexigibilidade neste prompt.",
          "trap": "Contratação direta tem processo próprio. Aqui só se anota a remissão.",
          "example": "Uma dispensa também pode ser anulada por ilegalidade insanável, no que couber. O rito da dispensa não é lido agora.",
          "mnemonic": "Aplica no que couber. Não antecipa o capítulo."
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Autoridade superior",
      "source": "Art. 71, caput",
      "does": [
        "Receber o processo",
        "Sanear, revogar, anular ou adjudicar e homologar"
      ],
      "doesNot": [
        "Não é obrigada a homologar",
        "Não revoga sem fato superveniente comprovado"
      ]
    },
    {
      "role": "Interessado",
      "source": "Art. 71, § 3º",
      "does": [
        "Manifestar-se antes da anulação ou da revogação"
      ],
      "doesNot": [
        "Não ganha um prazo escrito neste parágrafo",
        "Não usa a manifestação para excluir concorrente"
      ]
    },
    {
      "role": "Quem deu causa",
      "source": "Art. 71, § 1º",
      "does": [
        "Pode ter a responsabilidade apurada"
      ],
      "doesNot": [
        "A apuração não é a própria anulação",
        "O artigo não lista a pena"
      ]
    }
  ],
  "roleNote": "A autoridade superior não substitui o julgamento já feito. Ela encerra.",
  "rolePlate": "Quatro saídas, um verbo: poderá.",
  "rolePlateSource": "Art. 71, caput",
  "summary": [
    {
      "item": "Porta de entrada",
      "rule": "Julgamento e habilitação encerrados, recursos exauridos.",
      "clue": "Sem isso, o artigo não abre."
    },
    {
      "item": "Verbo",
      "rule": "A autoridade poderá.",
      "clue": "Não deverá revogar nem homologar."
    },
    {
      "item": "Inciso I",
      "rule": "Retorno para saneamento.",
      "clue": "Vício sanável não se anula."
    },
    {
      "item": "Inciso II",
      "rule": "Revogação por conveniência e oportunidade.",
      "clue": "Fato superveniente comprovado."
    },
    {
      "item": "Inciso III",
      "rule": "Anulação por ilegalidade insanável.",
      "clue": "De ofício ou por provocação."
    },
    {
      "item": "Inciso IV",
      "rule": "Adjudicar e homologar.",
      "clue": "Mesmo inciso."
    },
    {
      "item": "§ 3º",
      "rule": "Prévia manifestação na anulação e na revogação.",
      "clue": "Sem prazo em dias."
    },
    {
      "item": "§ 4º",
      "rule": "Aplica-se, no que couber, à contratação direta.",
      "clue": "Não abre esse capítulo."
    }
  ],
  "compare": [
    {
      "item": "Motivo",
      "ce": "Revogação: conveniência e fato superveniente.",
      "cf": "Anulação: ilegalidade insanável.",
      "effect": "separa"
    },
    {
      "item": "Iniciativa",
      "ce": "Revogação não se descreve como provocação de terceiros.",
      "cf": "Anulação: de ofício ou por provocação.",
      "effect": "separa"
    },
    {
      "item": "Efeito no processo",
      "ce": "Saneamento devolve os autos.",
      "cf": "Anulação tira o efeito do que depende do vício.",
      "effect": "separa"
    },
    {
      "item": "Oitiva",
      "ce": "Anulação ouve antes.",
      "cf": "Revogação também ouve antes.",
      "effect": "espelha"
    },
    {
      "item": "Contratação direta",
      "ce": "Tem capítulo próprio, ainda fechado.",
      "cf": "O § 4º só remete, no que couber.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 52011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Encerradas as fases de julgamento e habilitação e exauridos os recursos administrativos, a autoridade superior deverá revogar a licitação por motivo de conveniência e oportunidade.",
      "correct": "E",
      "comentario": "ERRADO. O caput diz que a autoridade poderá. Revogar é o inciso II, não um dever. E o § 2º ainda exige fato superveniente devidamente comprovado."
    },
    {
      "id": 52012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Quanto ao encerramento da licitação na Lei nº 14.133/2021, é correto afirmar que",
      "correct": "c",
      "comentario": "A alternativa C copia o § 1º e o inciso III. Anulação exige ilegalidade insanável, indica os atos viciados e alcança os subsequentes que dependam deles. A revogação não dispensa fato superveniente. O inciso I não anula. Adjudicar e homologar estão juntos no inciso IV.",
      "options": [
        {
          "key": "a",
          "label": "a anulação cabe para qualquer irregularidade, inclusive a que ainda possa ser sanada no retorno dos autos."
        },
        {
          "key": "b",
          "label": "a revogação dispensa fato superveniente, porque conveniência e oportunidade são motivos internos da autoridade."
        },
        {
          "key": "c",
          "label": "a anulação, por ilegalidade insanável, indica os atos viciados e torna sem efeito os subsequentes que deles dependam."
        },
        {
          "key": "d",
          "label": "adjudicar o objeto e homologar a licitação são competências de autoridades necessariamente distintas."
        },
        {
          "key": "e",
          "label": "a prévia manifestação dos interessados é exigida apenas na anulação, não na revogação."
        }
      ]
    },
    {
      "id": 52013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O § 4º do art. 71 da Lei nº 14.133/2021",
      "correct": "b",
      "comentario": "O § 4º manda aplicar o artigo, no que couber, à contratação direta e aos procedimentos auxiliares. Não abre inexigibilidade, não dispensa licitação e não cria prazo.",
      "options": [
        {
          "key": "a",
          "label": "inaugura o capítulo da inexigibilidade e lista os casos de inviabilidade de competição."
        },
        {
          "key": "b",
          "label": "determina que o artigo se aplique, no que couber, à contratação direta e aos procedimentos auxiliares."
        },
        {
          "key": "c",
          "label": "fixa em cinco dias o prazo da manifestação prévia dos interessados."
        },
        {
          "key": "d",
          "label": "obriga a autoridade a homologar a licitação sempre que os recursos estejam exauridos."
        },
        {
          "key": "e",
          "label": "transforma a dispensa de licitação em modalidade."
        }
      ]
    }
  ],
  "palette": "fresh",
  "highlight": {
    "big": "Poderá",
    "small": "não deverá"
  },
  "heroLead": "O processo chega à autoridade superior só depois do julgamento, da habilitação e dos recursos. Ela pode sanear, revogar, anular ou adjudicar e homologar.",
  "footerLine": "Art. 71 lido. Contratação direta continua fechada.",
  "nextLine": "Diga continue para o Prompt 53: processo de contratação direta, arts. 72 e 73. A inexigibilidade não entra nesse anúncio.",
  "closingMnemonic": "Encerrou, poderá: corrige, revoga com fato novo, anula o insanável, ou adjudica e homologa.",
  "rolesTitle": "Quem encerra",
  "rolesLead": "A autoridade superior não reabre o julgamento por gosto.",
  "compareTitle": "Revogar não é anular",
  "compareLead": "O motivo separa os dois atos.",
  "compareLeft": "Revogação",
  "compareRight": "Anulação",
  "clocks": [],
  "toc": [
    {
      "id": "art71",
      "num": "71",
      "label": "Encerramento"
    }
  ]
};
