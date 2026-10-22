import type { StudyModule } from "./study";

export const PROMPT115: StudyModule = {
  "short": "Crimes ambientais, primeira part",
  "eyebrow": "Prompt 115 · pedido 81 · Lei nº 9.605/1998",
  "title": "Crimes ambientais, primeira parte",
  "subtitle": "arts. 1º a 40",
  "description": "Pedido 81 do penal, gravado como Prompt 115 porque os Prompts 62 a 95 do app já são a Lei nº 14.133. Fonte: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm. Transcrição do texto extraído antes do comentário. Sem completar lacuna. O artigo seguinte a 40 fica no outro prompt.",
  "reading": "Lei nº 9.605/1998. Artigos deste bloco: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12…. Página consultada em 20/10/2026.",
  "terms": [
    "Lei nº 9.605/1998",
    "pedido 81",
    "texto extraído",
    "sem pena inventada",
    "conferir se faltar"
  ],
  "subject": "Direito Penal",
  "context": [
    "O número do pedido não reaproveita o Prompt administrativo já gravado.",
    "Artigo revogado é declarado revogado e não comentado como vigente.",
    "Súmula, tema e acórdão só entram com enunciado confirmado. Nenhum foi numerado neste bloco sem esse enunciado."
  ],
  "importance": "A banca troca pena de caput com a de parágrafo e ressuscita artigo revogado.",
  "distinctions": [
    "Art. 1 está vetado no texto extraído.",
    "Art. 5 está vetado no texto extraído.",
    "Divisão do pedido. Este prompt para no art. 40.",
    "O artigo seguinte a 40 fica no outro prompt."
  ],
  "organs": [
    {
      "sigla": "1",
      "nome": "I DISPOSIÇÕES GERAIS",
      "funcao": "Texto extraído, sem pena de caput isolada.",
      "base": "Art. 1",
      "nao": "Não inventar pena.",
      "tone": "yellow"
    },
    {
      "sigla": "2",
      "nome": "Art. 2",
      "funcao": "Texto extraído, sem pena de caput isolada.",
      "base": "Art. 2",
      "nao": "Não inventar pena.",
      "tone": "cyan"
    },
    {
      "sigla": "3",
      "nome": "Art. 3",
      "funcao": "Texto extraído, sem pena de caput isolada.",
      "base": "Art. 3",
      "nao": "Não inventar pena.",
      "tone": "orange"
    },
    {
      "sigla": "4",
      "nome": "Art. 4",
      "funcao": "Texto extraído, sem pena de caput isolada.",
      "base": "Art. 4",
      "nao": "Não inventar pena.",
      "tone": "violet"
    },
    {
      "sigla": "5",
      "nome": "Art. 5",
      "funcao": "Texto extraído, sem pena de caput isolada.",
      "base": "Art. 5",
      "nao": "Não inventar pena.",
      "tone": "emerald"
    },
    {
      "sigla": "6",
      "nome": "II DA APLICAÇÃO DA PENA",
      "funcao": "Texto extraído, sem pena de caput isolada.",
      "base": "Art. 6",
      "nao": "Não inventar pena.",
      "tone": "sky"
    }
  ],
  "swaps": [
    {
      "wrong": "Dá para completar pena ou súmula que o texto não trouxe.",
      "right": "Se não está no texto extraído, conferir texto oficial. Sem número inventado."
    },
    {
      "wrong": "O artigo seguinte entra neste bloco.",
      "right": "O recorte para no último artigo pedido."
    },
    {
      "wrong": "O artigo seguinte entra neste bloco.",
      "right": "O recorte para no último artigo pedido."
    }
  ],
  "timeline": [
    {
      "when": "Fonte",
      "title": "Planalto",
      "text": "https://www.planalto.gov.br/ccivil_03/leis/l9605.htm"
    },
    {
      "when": "Pedido",
      "title": "81",
      "text": "Gravado como Prompt 115."
    },
    {
      "when": "Limite",
      "title": "Recorte",
      "text": "O artigo seguinte a 40 fica no outro prompt."
    }
  ],
  "articles": [
    {
      "id": "p115-1",
      "num": "1",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 1",
      "lead": "Texto antes do comentário.",
      "plate": "Vetado",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "texto",
          "name": "Vetado",
          "hook": "Vetado",
          "literal": "(VETADO)",
          "context": "Lei nº 9.605/1998, art. 1. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "Vetado no texto extraído. Não se reconstitui o conteúdo vetado.",
          "trap": "Veto não vira tipo.",
          "example": "Sem exemplo.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-2",
      "num": "2",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 2",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "Quem, de qualquer forma, concorre para a prática",
          "hook": "Quem, de qualquer forma, concorre para a prática",
          "literal": "Quem, de qualquer forma, concorre para a prática dos crimes previstos nesta Lei, incide nas penas a estes cominadas, na medida da sua culpabilidade, bem como o diretor, o administrador, o membro de conselho e de órgão técnico, o auditor, o gerente, o preposto ou mandatário de pessoa jurídica, que, sabendo da conduta criminosa de outrem, deixar de impedir a sua prática, quando podia agir para evitá-la.",
          "context": "Lei nº 9.605/1998, art. 2. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-3",
      "num": "3",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 3",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "As pessoas jurídicas serão responsabilizadas adm",
          "hook": "As pessoas jurídicas serão responsabilizadas adm",
          "literal": "As pessoas jurídicas serão responsabilizadas administrativa, civil e penalmente conforme o disposto nesta Lei, nos casos em que a infração seja cometida por decisão de seu representante legal ou contratual, ou de seu órgão colegiado, no interesse ou benefício da sua entidade.",
          "context": "Lei nº 9.605/1998, art. 3. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "Parágrafo único",
          "name": "As pessoas jurídicas serão responsabilizadas adm",
          "hook": "As pessoas jurídicas serão responsabilizadas adm",
          "literal": "Parágrafo único. A responsabilidade das pessoas jurídicas não exclui a das pessoas físicas, autoras, co-autoras ou partícipes do mesmo fato.",
          "context": "Lei nº 9.605/1998, art. 3. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-4",
      "num": "4",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 4",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "Poderá ser desconsiderada a pessoa jurídica semp",
          "hook": "Poderá ser desconsiderada a pessoa jurídica semp",
          "literal": "Poderá ser desconsiderada a pessoa jurídica sempre que sua personalidade for obstáculo ao ressarcimento de prejuízos causados à qualidade do meio ambiente.",
          "context": "Lei nº 9.605/1998, art. 4. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-5",
      "num": "5",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 5",
      "lead": "Texto antes do comentário.",
      "plate": "Vetado",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "texto",
          "name": "Vetado",
          "hook": "Vetado",
          "literal": "(VETADO) CAPÍTULO II DA APLICAÇÃO DA PENA",
          "context": "Lei nº 9.605/1998, art. 5. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "Vetado no texto extraído. Não se reconstitui o conteúdo vetado.",
          "trap": "Veto não vira tipo.",
          "example": "Sem exemplo.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-6",
      "num": "6",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 6",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "II DA APLICAÇÃO DA PENA",
          "hook": "II DA APLICAÇÃO DA PENA",
          "literal": "Para imposição e gradação da penalidade, a autoridade competente observará: I - a gravidade do fato, tendo em vista os motivos da infração e suas conseqüências para a saúde pública e para o meio ambiente; II - os antecedentes do infrator quanto ao cumprimento da legislação de interesse ambiental; III - a situação econômica do infrator, no caso de multa.",
          "context": "Lei nº 9.605/1998, art. 6. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-7",
      "num": "7",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 7",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "As penas restritivas de direitos são autônomas e",
          "hook": "As penas restritivas de direitos são autônomas e",
          "literal": "As penas restritivas de direitos são autônomas e substituem as privativas de liberdade quando: I - tratar-se de crime culposo ou for aplicada a pena privativa de liberdade inferior a quatro anos; II - a culpabilidade, os antecedentes, a conduta social e a personalidade do condenado, bem como os motivos e as circunstâncias do crime indicarem que a substituição seja suficiente para efeitos de reprovação e prevenção do crime.",
          "context": "Lei nº 9.605/1998, art. 7. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "Parágrafo único",
          "name": "As penas restritivas de direitos são autônomas e",
          "hook": "As penas restritivas de direitos são autônomas e",
          "literal": "Parágrafo único. As penas restritivas de direitos a que se refere este artigo terão a mesma duração da pena privativa de liberdade substituída.",
          "context": "Lei nº 9.605/1998, art. 7. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-8",
      "num": "8",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 8",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "As penas restritivas de direito são: I - prestaç",
          "hook": "As penas restritivas de direito são: I - prestaç",
          "literal": "As penas restritivas de direito são: I - prestação de serviços à comunidade; II - interdição temporária de direitos; III - suspensão parcial ou total de atividades; IV - prestação pecuniária; V - recolhimento domiciliar.",
          "context": "Lei nº 9.605/1998, art. 8. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-9",
      "num": "9",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 9",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "A prestação de serviços à comunidade consiste na",
          "hook": "A prestação de serviços à comunidade consiste na",
          "literal": "A prestação de serviços à comunidade consiste na atribuição ao condenado de tarefas gratuitas junto a parques e jardins públicos e unidades de conservação, e, no caso de dano da coisa particular, pública ou tombada, na restauração desta, se possível.",
          "context": "Lei nº 9.605/1998, art. 9. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-10",
      "num": "10",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 10",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "As penas de interdição temporária de direito são",
          "hook": "As penas de interdição temporária de direito são",
          "literal": ". As penas de interdição temporária de direito são a proibição de o condenado contratar com o Poder Público, de receber incentivos fiscais ou quaisquer outros benefícios, bem como de participar de licitações, pelo prazo de cinco anos, no caso de crimes dolosos, e de três anos, no de crimes culposos.",
          "context": "Lei nº 9.605/1998, art. 10. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-11",
      "num": "11",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 11",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "A suspensão de atividades será aplicada quando e",
          "hook": "A suspensão de atividades será aplicada quando e",
          "literal": ". A suspensão de atividades será aplicada quando estas não estiverem obedecendo às prescrições legais.",
          "context": "Lei nº 9.605/1998, art. 11. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-12",
      "num": "12",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 12",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "A prestação pecuniária consiste no pagamento em ",
          "hook": "A prestação pecuniária consiste no pagamento em ",
          "literal": ". A prestação pecuniária consiste no pagamento em dinheiro à vítima ou à entidade pública ou privada com fim social, de importância, fixada pelo juiz, não inferior a um salário mínimo nem superior a trezentos e sessenta salários mínimos. O valor pago será deduzido do montante de eventual reparação civil a que for condenado o infrator.",
          "context": "Lei nº 9.605/1998, art. 12. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-13",
      "num": "13",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 13",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "O recolhimento domiciliar baseia-se na autodisci",
          "hook": "O recolhimento domiciliar baseia-se na autodisci",
          "literal": ". O recolhimento domiciliar baseia-se na autodisciplina e senso de responsabilidade do condenado, que deverá, sem vigilância, trabalhar, freqüentar curso ou exercer atividade autorizada, permanecendo recolhido nos dias e horários de folga em residência ou em qualquer local destinado a sua moradia habitual, conforme estabelecido na sentença condenatória.",
          "context": "Lei nº 9.605/1998, art. 13. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-14",
      "num": "14",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 14",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "São circunstâncias que atenuam a pena: I - baixo",
          "hook": "São circunstâncias que atenuam a pena: I - baixo",
          "literal": ". São circunstâncias que atenuam a pena: I - baixo grau de instrução ou escolaridade do agente; II - arrependimento do infrator, manifestado pela espontânea reparação do dano, ou limitação significativa da degradação ambiental causada; III - comunicação prévia pelo agente do perigo iminente de degradação ambiental; IV - colaboração com os agentes encarregados da vigilância e do controle ambiental.",
          "context": "Lei nº 9.605/1998, art. 14. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-15",
      "num": "15",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 15",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "São circunstâncias que agravam a pena, quando nã",
          "hook": "São circunstâncias que agravam a pena, quando nã",
          "literal": ". São circunstâncias que agravam a pena, quando não constituem ou qualificam o crime: I - reincidência nos crimes de natureza ambiental; II - ter o agente cometido a infração: a) para obter vantagem pecuniária; b) coagindo outrem para a execução material da infração; c) afetando ou expondo a perigo, de maneira grave, a saúde pública ou o meio ambiente; d) concorrendo para danos à propriedade alheia; e) atingindo áreas de unidades de conservação ou áreas sujeitas, por ato do Poder Público, a regime especial de uso; f) atingindo áreas urbanas ou quaisquer assentamentos humanos; g) em período de defeso à fauna; h) em domingos ou feriados; i) à noite; j) em épocas de seca ou inundações; l) no interior do espaço territorial especialmente protegido; m) com o emprego de métodos cruéis para abate ou captura de animais; n) mediante fraude ou abuso de confiança; o) mediante abuso do direito de licença, permissão ou autorização ambiental; p) no interesse de pessoa jurídica mantida, total ou parcialmente, por verbas públicas ou beneficiada por incentivos fiscais; q) atingindo espécies ameaçadas, listadas em relatórios oficiais das autoridades competentes; r) facilitada por funcionário público no exercício de suas funções.",
          "context": "Lei nº 9.605/1998, art. 15. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-16",
      "num": "16",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 16",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "Nos crimes previstos nesta Lei, a suspensão cond",
          "hook": "Nos crimes previstos nesta Lei, a suspensão cond",
          "literal": ". Nos crimes previstos nesta Lei, a suspensão condicional da pena pode ser aplicada nos casos de condenação a pena privativa de liberdade não superior a três anos.",
          "context": "Lei nº 9.605/1998, art. 16. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-17",
      "num": "17",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 17",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "A verificação da reparação a que se refere o § 2",
          "hook": "A verificação da reparação a que se refere o § 2",
          "literal": ". A verificação da reparação a que se refere o",
          "context": "Lei nº 9.605/1998, art. 17. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§ 2º",
          "name": "A verificação da reparação a que se refere o § 2",
          "hook": "A verificação da reparação a que se refere o § 2",
          "literal": "§ 2º do art. 78 do Código Penal será feita mediante laudo de reparação do dano ambiental, e as condições a serem impostas pelo juiz deverão relacionar-se com a proteção ao meio ambiente.",
          "context": "Lei nº 9.605/1998, art. 17. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-18",
      "num": "18",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 18",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "A multa será calculada segundo os critérios do C",
          "hook": "A multa será calculada segundo os critérios do C",
          "literal": ". A multa será calculada segundo os critérios do Código Penal; se revelar-se ineficaz, ainda que aplicada no valor máximo, poderá ser aumentada até três vezes, tendo em vista o valor da vantagem econômica auferida.",
          "context": "Lei nº 9.605/1998, art. 18. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-19",
      "num": "19",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 19",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "A perícia de constatação do dano ambiental, semp",
          "hook": "A perícia de constatação do dano ambiental, semp",
          "literal": ". A perícia de constatação do dano ambiental, sempre que possível, fixará o montante do prejuízo causado para efeitos de prestação de fiança e cálculo de multa.",
          "context": "Lei nº 9.605/1998, art. 19. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "Parágrafo único",
          "name": "A perícia de constatação do dano ambiental, semp",
          "hook": "A perícia de constatação do dano ambiental, semp",
          "literal": "Parágrafo único. A perícia produzida no inquérito civil ou no juízo cível poderá ser aproveitada no processo penal, instaurando-se o contraditório.",
          "context": "Lei nº 9.605/1998, art. 19. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-20",
      "num": "20",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 20",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "A sentença penal condenatória, sempre que possív",
          "hook": "A sentença penal condenatória, sempre que possív",
          "literal": ". A sentença penal condenatória, sempre que possível, fixará o valor mínimo para reparação dos danos causados pela infração, considerando os prejuízos sofridos pelo ofendido ou pelo meio ambiente.",
          "context": "Lei nº 9.605/1998, art. 20. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "Parágrafo único",
          "name": "A sentença penal condenatória, sempre que possív",
          "hook": "A sentença penal condenatória, sempre que possív",
          "literal": "Parágrafo único. Transitada em julgado a sentença condenatória, a execução poderá efetuar-se pelo valor fixado nos termos do caput , sem prejuízo da liquidação para apuração do dano efetivamente sofrido.",
          "context": "Lei nº 9.605/1998, art. 20. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-21",
      "num": "21",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 21",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "As penas aplicáveis isolada, cumulativa ou alter",
          "hook": "As penas aplicáveis isolada, cumulativa ou alter",
          "literal": ". As penas aplicáveis isolada, cumulativa ou alternativamente às pessoas jurídicas, de acordo com o disposto no art. 3º, são: I - multa; II - restritivas de direitos; III - prestação de serviços à comunidade.",
          "context": "Lei nº 9.605/1998, art. 21. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-22",
      "num": "22",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 22",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "As penas restritivas de direitos da pessoa juríd",
          "hook": "As penas restritivas de direitos da pessoa juríd",
          "literal": ". As penas restritivas de direitos da pessoa jurídica são: I - suspensão parcial ou total de atividades; II - interdição temporária de estabelecimento, obra ou atividade; III - proibição de contratar com o Poder Público, bem como dele obter subsídios, subvenções ou doações.",
          "context": "Lei nº 9.605/1998, art. 22. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§ 1º",
          "name": "As penas restritivas de direitos da pessoa juríd",
          "hook": "As penas restritivas de direitos da pessoa juríd",
          "literal": "§ 1º A suspensão de atividades será aplicada quando estas não estiverem obedecendo às disposições legais ou regulamentares, relativas à proteção do meio ambiente.",
          "context": "Lei nº 9.605/1998, art. 22. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§ 2º",
          "name": "As penas restritivas de direitos da pessoa juríd",
          "hook": "As penas restritivas de direitos da pessoa juríd",
          "literal": "§ 2º A interdição será aplicada quando o estabelecimento, obra ou atividade estiver funcionando sem a devida autorização, ou em desacordo com a concedida, ou com violação de disposição legal ou regulamentar.",
          "context": "Lei nº 9.605/1998, art. 22. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§ 3º",
          "name": "As penas restritivas de direitos da pessoa juríd",
          "hook": "As penas restritivas de direitos da pessoa juríd",
          "literal": "§ 3º A proibição de contratar com o Poder Público e dele obter subsídios, subvenções ou doações não poderá exceder o prazo de dez anos.",
          "context": "Lei nº 9.605/1998, art. 22. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-23",
      "num": "23",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 23",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "A prestação de serviços à comunidade pela pessoa",
          "hook": "A prestação de serviços à comunidade pela pessoa",
          "literal": ". A prestação de serviços à comunidade pela pessoa jurídica consistirá em: I - custeio de programas e de projetos ambientais; II - execução de obras de recuperação de áreas degradadas; III - manutenção de espaços públicos; IV - contribuições a entidades ambientais ou culturais públicas.",
          "context": "Lei nº 9.605/1998, art. 23. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-24",
      "num": "24",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 24",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "A pessoa jurídica constituída ou utilizada, prep",
          "hook": "A pessoa jurídica constituída ou utilizada, prep",
          "literal": ". A pessoa jurídica constituída ou utilizada, preponderantemente, com o fim de permitir, facilitar ou ocultar a prática de crime definido nesta Lei terá decretada sua liquidação forçada, seu patrimônio será considerado instrumento do crime e como tal perdido em favor do Fundo Penitenciário Nacional.",
          "context": "Lei nº 9.605/1998, art. 24. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-25",
      "num": "25",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 25",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "Verificada a infração, serão apreendidos seus pr",
          "hook": "Verificada a infração, serão apreendidos seus pr",
          "literal": ". Verificada a infração, serão apreendidos seus produtos e instrumentos, lavrando-se os respectivos autos. (Vide ADPF 640)",
          "context": "Lei nº 9.605/1998, art. 25. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§ 1º",
          "name": "Verificada a infração, serão apreendidos seus pr",
          "hook": "Verificada a infração, serão apreendidos seus pr",
          "literal": "§ 1º Os animais serão prioritariamente libertados em seu habitat ou, sendo tal medida inviável ou não recomendável por questões sanitárias, entregues a jardins zoológicos, fundações ou entidades assemelhadas, para guarda e cuidados sob a responsabilidade de técnicos habilitados. (Redação dada pela Lei nº 13.052, de 2014)",
          "context": "Lei nº 9.605/1998, art. 25. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§ 2º",
          "name": "Verificada a infração, serão apreendidos seus pr",
          "hook": "Verificada a infração, serão apreendidos seus pr",
          "literal": "§ 2º Até que os animais sejam entregues às instituições mencionadas no",
          "context": "Lei nº 9.605/1998, art. 25. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§ 1º",
          "name": "Verificada a infração, serão apreendidos seus pr",
          "hook": "Verificada a infração, serão apreendidos seus pr",
          "literal": "§ 1º deste artigo, o órgão autuante zelará para que eles sejam mantidos em condições adequadas de acondicionamento e transporte que garantam o seu bem-estar físico. (Redação dada pela Lei nº 13.052, de 2014) (Vide ADPF 640)",
          "context": "Lei nº 9.605/1998, art. 25. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§ 3º",
          "name": "Verificada a infração, serão apreendidos seus pr",
          "hook": "Verificada a infração, serão apreendidos seus pr",
          "literal": "§ 3º Tratando-se de produtos perecíveis ou madeiras, serão estes avaliados e doados a instituições científicas, hospitalares, penais e outras com fins beneficentes. (Renumerando do",
          "context": "Lei nº 9.605/1998, art. 25. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§2º",
          "name": "Verificada a infração, serão apreendidos seus pr",
          "hook": "Verificada a infração, serão apreendidos seus pr",
          "literal": "§2º para",
          "context": "Lei nº 9.605/1998, art. 25. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§3º",
          "name": "Verificada a infração, serão apreendidos seus pr",
          "hook": "Verificada a infração, serão apreendidos seus pr",
          "literal": "§3º pela Lei nº 13.052, de 2014)",
          "context": "Lei nº 9.605/1998, art. 25. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§ 4",
          "name": "Verificada a infração, serão apreendidos seus pr",
          "hook": "Verificada a infração, serão apreendidos seus pr",
          "literal": "§ 4° Os produtos e subprodutos da fauna não perecíveis serão destruídos ou doados a instituições científicas, culturais ou educacionais. (Renumerando do",
          "context": "Lei nº 9.605/1998, art. 25. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§3º",
          "name": "Verificada a infração, serão apreendidos seus pr",
          "hook": "Verificada a infração, serão apreendidos seus pr",
          "literal": "§3º para",
          "context": "Lei nº 9.605/1998, art. 25. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§4º",
          "name": "Verificada a infração, serão apreendidos seus pr",
          "hook": "Verificada a infração, serão apreendidos seus pr",
          "literal": "§4º pela Lei nº 13.052, de 2014)",
          "context": "Lei nº 9.605/1998, art. 25. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§ 5º",
          "name": "Verificada a infração, serão apreendidos seus pr",
          "hook": "Verificada a infração, serão apreendidos seus pr",
          "literal": "§ 5º Os instrumentos utilizados na prática da infração serão vendidos, garantida a sua descaracterização por meio da reciclagem. (Renumerando do",
          "context": "Lei nº 9.605/1998, art. 25. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§4º",
          "name": "Verificada a infração, serão apreendidos seus pr",
          "hook": "Verificada a infração, serão apreendidos seus pr",
          "literal": "§4º para",
          "context": "Lei nº 9.605/1998, art. 25. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§5º",
          "name": "Verificada a infração, serão apreendidos seus pr",
          "hook": "Verificada a infração, serão apreendidos seus pr",
          "literal": "§5º pela Lei nº 13.052, de 2014) Prejudicada",
          "context": "Lei nº 9.605/1998, art. 25. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-26",
      "num": "26",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 26",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "IV DA AÇÃO E DO PROCESSO PENAL",
          "hook": "IV DA AÇÃO E DO PROCESSO PENAL",
          "literal": ". Nas infrações penais previstas nesta Lei, a ação penal é pública incondicionada.",
          "context": "Lei nº 9.605/1998, art. 26. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "Parágrafo único",
          "name": "IV DA AÇÃO E DO PROCESSO PENAL",
          "hook": "IV DA AÇÃO E DO PROCESSO PENAL",
          "literal": "Parágrafo único. (VETADO)",
          "context": "Lei nº 9.605/1998, art. 26. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-27",
      "num": "27",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 27",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "Nos crimes ambientais de menor potencial ofensiv",
          "hook": "Nos crimes ambientais de menor potencial ofensiv",
          "literal": ". Nos crimes ambientais de menor potencial ofensivo, a proposta de aplicação imediata de pena restritiva de direitos ou multa, prevista no art. 76 da Lei nº 9.099, de 26 de setembro de 1995 , somente poderá ser formulada desde que tenha havido a prévia composição do dano ambiental, de que trata o art. 74 da mesma lei, salvo em caso de comprovada impossibilidade.",
          "context": "Lei nº 9.605/1998, art. 27. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-28",
      "num": "28",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 28",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "As disposições do art. 89 da Lei nº 9.099, de 26",
          "hook": "As disposições do art. 89 da Lei nº 9.099, de 26",
          "literal": ". As disposições do art. 89 da Lei nº 9.099, de 26 de setembro de 1995 , aplicam-se aos crimes de menor potencial ofensivo definidos nesta Lei, com as seguintes modificações: I - a declaração de extinção de punibilidade, de que trata o",
          "context": "Lei nº 9.605/1998, art. 28. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§ 5",
          "name": "As disposições do art. 89 da Lei nº 9.099, de 26",
          "hook": "As disposições do art. 89 da Lei nº 9.099, de 26",
          "literal": "§ 5° do artigo referido no caput , dependerá de laudo de constatação de reparação do dano ambiental, ressalvada a impossibilidade prevista no inciso I do",
          "context": "Lei nº 9.605/1998, art. 28. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§ 1",
          "name": "As disposições do art. 89 da Lei nº 9.099, de 26",
          "hook": "As disposições do art. 89 da Lei nº 9.099, de 26",
          "literal": "§ 1° do mesmo artigo; II - na hipótese de o laudo de constatação comprovar não ter sido completa a reparação, o prazo de suspensão do processo será prorrogado, até o período máximo previsto no artigo referido no caput , acrescido de mais um ano, com suspensão do prazo da prescrição; III - no período de prorrogação, não se aplicarão as condições dos incisos II, III e IV do",
          "context": "Lei nº 9.605/1998, art. 28. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§ 1",
          "name": "As disposições do art. 89 da Lei nº 9.099, de 26",
          "hook": "As disposições do art. 89 da Lei nº 9.099, de 26",
          "literal": "§ 1° do artigo mencionado no caput ; IV - findo o prazo de prorrogação, proceder-se-á à lavratura de novo laudo de constatação de reparação do dano ambiental, podendo, conforme seu resultado, ser novamente prorrogado o período de suspensão, até o máximo previsto no inciso II deste artigo, observado o disposto no inciso III; V - esgotado o prazo máximo de prorrogação, a declaração de extinção de punibilidade dependerá de laudo de constatação que comprove ter o acusado tomado as providências necessárias à reparação integral do dano.",
          "context": "Lei nº 9.605/1998, art. 28. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-29",
      "num": "29",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 29",
      "lead": "Texto antes do comentário.",
      "plate": "detenção de seis meses a um ano, e multa",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "V DOS CRIMES CONTRA O MEIO AMBIENTE Seção I Dos Crimes contra a Fauna",
          "hook": "detenção de seis meses a um ano, e multa",
          "literal": ". Matar, perseguir, caçar, apanhar, utilizar espécimes da fauna silvestre, nativos ou em rota migratória, sem a devida permissão, licença ou autorização da autoridade competente, ou em desacordo com a obtida: Pena - detenção de seis meses a um ano, e multa.",
          "context": "Lei nº 9.605/1998, art. 29. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção de seis meses a um ano, e multa",
          "revoked": false
        },
        {
          "tag": "§ 1º",
          "name": "V DOS CRIMES CONTRA O MEIO AMBIENTE Seção I Dos Crimes contra a Fauna",
          "hook": "detenção de seis meses a um ano, e multa",
          "literal": "§ 1º Incorre nas mesmas penas: I - quem impede a procriação da fauna, sem licença, autorização ou em desacordo com a obtida; II - quem modifica, danifica ou destrói ninho, abrigo ou criadouro natural; III - quem vende, expõe à venda, exporta ou adquire, guarda, tem em cativeiro ou depósito, utiliza ou transporta ovos, larvas ou espécimes da fauna silvestre, nativa ou em rota migratória, bem como produtos e objetos dela oriundos, provenientes de criadouros não autorizados ou sem a devida permissão, licença ou autorização da autoridade competente.",
          "context": "Lei nº 9.605/1998, art. 29. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção de seis meses a um ano, e multa",
          "revoked": false
        },
        {
          "tag": "§ 2º",
          "name": "V DOS CRIMES CONTRA O MEIO AMBIENTE Seção I Dos Crimes contra a Fauna",
          "hook": "detenção de seis meses a um ano, e multa",
          "literal": "§ 2º No caso de guarda doméstica de espécie silvestre não considerada ameaçada de extinção, pode o juiz, considerando as circunstâncias, deixar de aplicar a pena.",
          "context": "Lei nº 9.605/1998, art. 29. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção de seis meses a um ano, e multa",
          "revoked": false
        },
        {
          "tag": "§ 3",
          "name": "V DOS CRIMES CONTRA O MEIO AMBIENTE Seção I Dos Crimes contra a Fauna",
          "hook": "detenção de seis meses a um ano, e multa",
          "literal": "§ 3° São espécimes da fauna silvestre todos aqueles pertencentes às espécies nativas, migratórias e quaisquer outras, aquáticas ou terrestres, que tenham todo ou parte de seu ciclo de vida ocorrendo dentro dos limites do território brasileiro, ou águas jurisdicionais brasileiras.",
          "context": "Lei nº 9.605/1998, art. 29. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção de seis meses a um ano, e multa",
          "revoked": false
        },
        {
          "tag": "§ 4º",
          "name": "V DOS CRIMES CONTRA O MEIO AMBIENTE Seção I Dos Crimes contra a Fauna",
          "hook": "detenção de seis meses a um ano, e multa",
          "literal": "§ 4º A pena é aumentada de metade, se o crime é praticado: I - contra espécie rara ou considerada ameaçada de extinção, ainda que somente no local da infração; II - em período proibido à caça; III - durante a noite; IV - com abuso de licença; V - em unidade de conservação; VI - com emprego de métodos ou instrumentos capazes de provocar destruição em massa.",
          "context": "Lei nº 9.605/1998, art. 29. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção de seis meses a um ano, e multa",
          "revoked": false
        },
        {
          "tag": "§ 5º",
          "name": "V DOS CRIMES CONTRA O MEIO AMBIENTE Seção I Dos Crimes contra a Fauna",
          "hook": "detenção de seis meses a um ano, e multa",
          "literal": "§ 5º A pena é aumentada até o triplo, se o crime decorre do exercício de caça profissional.",
          "context": "Lei nº 9.605/1998, art. 29. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção de seis meses a um ano, e multa",
          "revoked": false
        },
        {
          "tag": "§ 6º",
          "name": "V DOS CRIMES CONTRA O MEIO AMBIENTE Seção I Dos Crimes contra a Fauna",
          "hook": "detenção de seis meses a um ano, e multa",
          "literal": "§ 6º As disposições deste artigo não se aplicam aos atos de pesca.",
          "context": "Lei nº 9.605/1998, art. 29. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção de seis meses a um ano, e multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-30",
      "num": "30",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 30",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão, de um a três anos, e multa",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "Exportar para o exterior peles e couros de anfíb",
          "hook": "reclusão, de um a três anos, e multa",
          "literal": ". Exportar para o exterior peles e couros de anfíbios e répteis em bruto, sem a autorização da autoridade ambiental competente: Pena - reclusão, de um a três anos, e multa.",
          "context": "Lei nº 9.605/1998, art. 30. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de um a três anos, e multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-31",
      "num": "31",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 31",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de três meses a um ano, e multa",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "Introduzir espécime animal no País, sem parecer ",
          "hook": "detenção, de três meses a um ano, e multa",
          "literal": ". Introduzir espécime animal no País, sem parecer técnico oficial favorável e licença expedida por autoridade competente: Pena - detenção, de três meses a um ano, e multa.",
          "context": "Lei nº 9.605/1998, art. 31. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de três meses a um ano, e multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-32",
      "num": "32",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 32",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de três meses a um ano, e multa",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "Praticar ato de abuso, maus-tratos, ferir ou mut",
          "hook": "detenção, de três meses a um ano, e multa",
          "literal": ". Praticar ato de abuso, maus-tratos, ferir ou mutilar animais silvestres, domésticos ou domesticados, nativos ou exóticos: (Vide ADPF 640) Pena - detenção, de três meses a um ano, e multa.",
          "context": "Lei nº 9.605/1998, art. 32. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de três meses a um ano, e multa",
          "revoked": false
        },
        {
          "tag": "§ 1º",
          "name": "Praticar ato de abuso, maus-tratos, ferir ou mut",
          "hook": "detenção, de três meses a um ano, e multa",
          "literal": "§ 1º Incorre nas mesmas penas quem realiza experiência dolorosa ou cruel em animal vivo, ainda que para fins didáticos ou científicos, quando existirem recursos alternativos. (Vide ADPF 640)",
          "context": "Lei nº 9.605/1998, art. 32. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de três meses a um ano, e multa",
          "revoked": false
        },
        {
          "tag": "§ 1º",
          "name": "Praticar ato de abuso, maus-tratos, ferir ou mut",
          "hook": "detenção, de três meses a um ano, e multa",
          "literal": "§ 1º-A Quando se tratar de cão ou gato, a pena para as condutas descritas no caput deste artigo será de reclusão, de 2 (dois) a 5 (cinco) anos, multa e proibição da guarda. (Incluído pela Lei nº 14.064, de 2020)",
          "context": "Lei nº 9.605/1998, art. 32. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de três meses a um ano, e multa",
          "revoked": false
        },
        {
          "tag": "§ 1º",
          "name": "Praticar ato de abuso, maus-tratos, ferir ou mut",
          "hook": "detenção, de três meses a um ano, e multa",
          "literal": "§ 1º-B. Incorre nas mesmas penas quem realiza ou permite a realização de tatuagens e a colocação de piercings em cães e gatos, com fins estéticos. (Incluído pela Lei nº 15.150, de 2025)",
          "context": "Lei nº 9.605/1998, art. 32. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de três meses a um ano, e multa",
          "revoked": false
        },
        {
          "tag": "§ 1º",
          "name": "Praticar ato de abuso, maus-tratos, ferir ou mut",
          "hook": "detenção, de três meses a um ano, e multa",
          "literal": "§ 1º-C. Incorre nas mesmas penas quem provoca desastre ambiental que prejudique a vida, a integridade física ou o bem-estar de animais silvestres ou domésticos. (Incluído pela Lei nº 15.355, de 2026)",
          "context": "Lei nº 9.605/1998, art. 32. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de três meses a um ano, e multa",
          "revoked": false
        },
        {
          "tag": "§ 2º",
          "name": "Praticar ato de abuso, maus-tratos, ferir ou mut",
          "hook": "detenção, de três meses a um ano, e multa",
          "literal": "§ 2º A pena é aumentada de um sexto a um terço, se ocorre morte do animal. (Vide ADPF 640)",
          "context": "Lei nº 9.605/1998, art. 32. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de três meses a um ano, e multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-33",
      "num": "33",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 33",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de um a três anos, ou multa, ou ambas cumulativamente",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "Provocar, pela emissão de efluentes ou carreamen",
          "hook": "detenção, de um a três anos, ou multa, ou ambas cumulativamente",
          "literal": ". Provocar, pela emissão de efluentes ou carreamento de materiais, o perecimento de espécimes da fauna aquática existentes em rios, lagos, açudes, lagoas, baías ou águas jurisdicionais brasileiras: Pena - detenção, de um a três anos, ou multa, ou ambas cumulativamente.",
          "context": "Lei nº 9.605/1998, art. 33. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de um a três anos, ou multa, ou ambas cumulativamente",
          "revoked": false
        },
        {
          "tag": "Parágrafo único",
          "name": "Provocar, pela emissão de efluentes ou carreamen",
          "hook": "detenção, de um a três anos, ou multa, ou ambas cumulativamente",
          "literal": "Parágrafo único. Incorre nas mesmas penas: I - quem causa degradação em viveiros, açudes ou estações de aqüicultura de domínio público; II - quem explora campos naturais de invertebrados aquáticos e algas, sem licença, permissão ou autorização da autoridade competente; III - quem fundeia embarcações ou lança detritos de qualquer natureza sobre bancos de moluscos ou corais, devidamente demarcados em carta náutica.",
          "context": "Lei nº 9.605/1998, art. 33. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de um a três anos, ou multa, ou ambas cumulativamente",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-34",
      "num": "34",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 34",
      "lead": "Texto antes do comentário.",
      "plate": "detenção de um ano a três anos ou multa, ou ambas as penas cumulativamente",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "Pescar em período no qual a pesca seja proibida ",
          "hook": "detenção de um ano a três anos ou multa, ou ambas as penas cumulativamente",
          "literal": ". Pescar em período no qual a pesca seja proibida ou em lugares interditados por órgão competente: Pena - detenção de um ano a três anos ou multa, ou ambas as penas cumulativamente.",
          "context": "Lei nº 9.605/1998, art. 34. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção de um ano a três anos ou multa, ou ambas as penas cumulativamente",
          "revoked": false
        },
        {
          "tag": "Parágrafo único",
          "name": "Pescar em período no qual a pesca seja proibida ",
          "hook": "detenção de um ano a três anos ou multa, ou ambas as penas cumulativamente",
          "literal": "Parágrafo único. Incorre nas mesmas penas quem: I - pesca espécies que devam ser preservadas ou espécimes com tamanhos inferiores aos permitidos; II - pesca quantidades superiores às permitidas, ou mediante a utilização de aparelhos, petrechos, técnicas e métodos não permitidos; III - transporta, comercializa, beneficia ou industrializa espécimes provenientes da coleta, apanha e pesca proibidas.",
          "context": "Lei nº 9.605/1998, art. 34. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção de um ano a três anos ou multa, ou ambas as penas cumulativamente",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-35",
      "num": "35",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 35",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão de um ano a cinco anos",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "Pescar mediante a utilização de: I - explosivos ",
          "hook": "reclusão de um ano a cinco anos",
          "literal": ". Pescar mediante a utilização de: I - explosivos ou substâncias que, em contato com a água, produzam efeito semelhante; II - substâncias tóxicas, ou outro meio proibido pela autoridade competente: Pena - reclusão de um ano a cinco anos.",
          "context": "Lei nº 9.605/1998, art. 35. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão de um ano a cinco anos",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-36",
      "num": "36",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 36",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "Para os efeitos desta Lei, considera-se pesca to",
          "hook": "Para os efeitos desta Lei, considera-se pesca to",
          "literal": ". Para os efeitos desta Lei, considera-se pesca todo ato tendente a retirar, extrair, coletar, apanhar, apreender ou capturar espécimes dos grupos dos peixes, crustáceos, moluscos e vegetais hidróbios, suscetíveis ou não de aproveitamento econômico, ressalvadas as espécies ameaçadas de extinção, constantes nas listas oficiais da fauna e da flora.",
          "context": "Lei nº 9.605/1998, art. 36. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-37",
      "num": "37",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 37",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "Não é crime o abate de animal, quando realizado:",
          "hook": "Não é crime o abate de animal, quando realizado:",
          "literal": ". Não é crime o abate de animal, quando realizado: I - em estado de necessidade, para saciar a fome do agente ou de sua família; II - para proteger lavouras, pomares e rebanhos da ação predatória ou destruidora de animais, desde que legal e expressamente autorizado pela autoridade competente; III – (VETADO) IV - por ser nocivo o animal, desde que assim caracterizado pelo órgão competente. Seção II Dos Crimes contra a Flora",
          "context": "Lei nº 9.605/1998, art. 37. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-38",
      "num": "38",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 38",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de um a três anos, ou multa, ou ambas as penas cumulativamente",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "Destruir ou danificar floresta considerada de pr",
          "hook": "detenção, de um a três anos, ou multa, ou ambas as penas cumulativamente",
          "literal": ". Destruir ou danificar floresta considerada de preservação permanente, mesmo que em formação, ou utilizá-la com infringência das normas de proteção: Pena - detenção, de um a três anos, ou multa, ou ambas as penas cumulativamente.",
          "context": "Lei nº 9.605/1998, art. 38. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de um a três anos, ou multa, ou ambas as penas cumulativamente",
          "revoked": false
        },
        {
          "tag": "Parágrafo único",
          "name": "Destruir ou danificar floresta considerada de pr",
          "hook": "detenção, de um a três anos, ou multa, ou ambas as penas cumulativamente",
          "literal": "Parágrafo único. Se o crime for culposo, a pena será reduzida à metade.",
          "context": "Lei nº 9.605/1998, art. 38. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de um a três anos, ou multa, ou ambas as penas cumulativamente",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-38A",
      "num": "38-A",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 38-A",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de 1 (um) a 3 (três) anos, ou multa, ou ambas as penas cumulativamente",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "Destruir ou danificar vegetação primária ou secu",
          "hook": "detenção, de 1 (um) a 3 (três) anos, ou multa, ou ambas as penas cumulativamente",
          "literal": ". Destruir ou danificar vegetação primária ou secundária, em estágio avançado ou médio de regeneração, do Bioma Mata Atlântica, ou utilizá-la com infringência das normas de proteção: (Incluído pela Lei nº 11.428, de 2006). Pena - detenção, de 1 (um) a 3 (três) anos, ou multa, ou ambas as penas cumulativamente. (Incluído pela Lei nº 11.428, de 2006).",
          "context": "Lei nº 9.605/1998, art. 38-A. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de 1 (um) a 3 (três) anos, ou multa, ou ambas as penas cumulativamente",
          "revoked": false
        },
        {
          "tag": "Parágrafo único",
          "name": "Destruir ou danificar vegetação primária ou secu",
          "hook": "detenção, de 1 (um) a 3 (três) anos, ou multa, ou ambas as penas cumulativamente",
          "literal": "Parágrafo único. Se o crime for culposo, a pena será reduzida à metade. (Incluído pela Lei nº 11.428, de 2006).",
          "context": "Lei nº 9.605/1998, art. 38-A. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de 1 (um) a 3 (três) anos, ou multa, ou ambas as penas cumulativamente",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-39",
      "num": "39",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 39",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de um a três anos, ou multa, ou ambas as penas cumulativamente",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "Cortar árvores em floresta considerada de preser",
          "hook": "detenção, de um a três anos, ou multa, ou ambas as penas cumulativamente",
          "literal": ". Cortar árvores em floresta considerada de preservação permanente, sem permissão da autoridade competente: Pena - detenção, de um a três anos, ou multa, ou ambas as penas cumulativamente.",
          "context": "Lei nº 9.605/1998, art. 39. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de um a três anos, ou multa, ou ambas as penas cumulativamente",
          "revoked": false
        }
      ]
    },
    {
      "id": "p115-40",
      "num": "40",
      "kicker": "Lei nº 9.605/1998",
      "title": "Art. 40",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão, de um a cinco anos",
      "plateSource": "Lei nº 9.605/1998",
      "devices": [
        {
          "tag": "caput",
          "name": "Causar dano direto ou indireto às Unidades de Co",
          "hook": "reclusão, de um a cinco anos",
          "literal": ". Causar dano direto ou indireto às Unidades de Conservação e às áreas de que trata o art. 27 do Decreto nº 99.274, de 6 de junho de 1990 , independentemente de sua localização: Pena - reclusão, de um a cinco anos.",
          "context": "Lei nº 9.605/1998, art. 40. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de um a cinco anos",
          "revoked": false
        },
        {
          "tag": "§ 1",
          "name": "Causar dano direto ou indireto às Unidades de Co",
          "hook": "reclusão, de um a cinco anos",
          "literal": "§ 1 o Entende-se por Unidades de Conservação de Proteção Integral as Estações Ecológicas, as Reservas Biológicas, os Parques Nacionais, os Monumentos Naturais e os Refúgios de Vida Silvestre. (Redação dada pela Lei nº 9.985, de 2000)",
          "context": "Lei nº 9.605/1998, art. 40. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de um a cinco anos",
          "revoked": false
        },
        {
          "tag": "§ 2",
          "name": "Causar dano direto ou indireto às Unidades de Co",
          "hook": "reclusão, de um a cinco anos",
          "literal": "§ 2 o A ocorrência de dano afetando espécies ameaçadas de extinção no interior das Unidades de Conservação de Proteção Integral será considerada circunstância agravante para a fixação da pena. (Redação dada pela Lei nº 9.985, de 2000)",
          "context": "Lei nº 9.605/1998, art. 40. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de um a cinco anos",
          "revoked": false
        },
        {
          "tag": "§ 3º",
          "name": "Causar dano direto ou indireto às Unidades de Co",
          "hook": "reclusão, de um a cinco anos",
          "literal": "§ 3º Se o crime for culposo, a pena será reduzida à metade.",
          "context": "Lei nº 9.605/1998, art. 40. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l9605.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de um a cinco anos",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Tipo",
      "source": "Lei nº 9.605/1998",
      "does": [
        "Ser lido pelo texto extraído"
      ],
      "doesNot": [
        "Não ganha pena inventada",
        "Não ganha exemplo de fato"
      ]
    },
    {
      "role": "Artigo revogado",
      "source": "Texto extraído",
      "does": [
        "Ser declarado revogado"
      ],
      "doesNot": [
        "Não ser comentado como vigente"
      ]
    }
  ],
  "roleNote": "Sem súmula numerada neste bloco. O enunciado não foi colado de fonte confirmada.",
  "rolePlate": "Texto antes do comentário.",
  "rolePlateSource": "Lei nº 9.605/1998",
  "summary": [
    {
      "item": "Art. 1",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 2",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 3",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 4",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 5",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 6",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 7",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 8",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 9",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 10",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 11",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 12",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 13",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 14",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 15",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 16",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 17",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 18",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 19",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 20",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 21",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 22",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 23",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 24",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 25",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 26",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 27",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 28",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 29",
      "rule": "detenção de seis meses a um ano, e multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 30",
      "rule": "reclusão, de um a três anos, e multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 31",
      "rule": "detenção, de três meses a um ano, e multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 32",
      "rule": "detenção, de três meses a um ano, e multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 33",
      "rule": "detenção, de um a três anos, ou multa, ou ambas cumulativamente",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 34",
      "rule": "detenção de um ano a três anos ou multa, ou ambas as penas cumulativamente",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 35",
      "rule": "reclusão de um ano a cinco anos",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 36",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 37",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 38",
      "rule": "detenção, de um a três anos, ou multa, ou ambas as penas cumulativamente",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 38-A",
      "rule": "detenção, de 1 (um) a 3 (três) anos, ou multa, ou ambas as penas cumulativamente",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 39",
      "rule": "detenção, de um a três anos, ou multa, ou ambas as penas cumulativamente",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 40",
      "rule": "reclusão, de um a cinco anos",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    }
  ],
  "compare": [
    {
      "item": "Recorte",
      "ce": "41 artigo(s) localizado(s).",
      "cf": "Artigo de fora não entra.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 115011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "No texto extraído, o art. 1 inicia com: (VETADO)",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. A alternativa repete o início extraído. Não acrescenta pena."
    },
    {
      "id": 115012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A pena do caput do art. 29, no texto extraído, é",
      "correct": "a",
      "options": [
        {
          "key": "a",
          "label": "detenção de seis meses a um ano, e multa."
        },
        {
          "key": "b",
          "label": "multa apenas, sem pena privativa de liberdade, segundo alternativa inventada."
        },
        {
          "key": "c",
          "label": "o artigo está revogado e não tem pena no texto vigente."
        },
        {
          "key": "d",
          "label": "a pena do caput é de advertência, sem o texto extraído."
        },
        {
          "key": "e",
          "label": "a pena não foi escrita e pode ser completada pela banca."
        }
      ],
      "comentario": "Questão original, não é prova real. A frase extraída é: detenção de seis meses a um ano, e multa. As outras alternativas não são essa frase."
    },
    {
      "id": 115013,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Pena, qualificadora, aumento, súmula e prazo que o texto extraído não escreve podem ser completados pelo comentário.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. O que não está no texto extraído fica como conferir texto oficial. Não se inventa número."
    }
  ],
  "toc": [
    {
      "id": "p115-1",
      "num": "1",
      "label": "Art. 1"
    },
    {
      "id": "p115-2",
      "num": "2",
      "label": "Art. 2"
    },
    {
      "id": "p115-3",
      "num": "3",
      "label": "Art. 3"
    },
    {
      "id": "p115-4",
      "num": "4",
      "label": "Art. 4"
    },
    {
      "id": "p115-5",
      "num": "5",
      "label": "Art. 5"
    },
    {
      "id": "p115-6",
      "num": "6",
      "label": "Art. 6"
    },
    {
      "id": "p115-7",
      "num": "7",
      "label": "Art. 7"
    },
    {
      "id": "p115-8",
      "num": "8",
      "label": "Art. 8"
    },
    {
      "id": "p115-9",
      "num": "9",
      "label": "Art. 9"
    },
    {
      "id": "p115-10",
      "num": "10",
      "label": "Art. 10"
    },
    {
      "id": "p115-11",
      "num": "11",
      "label": "Art. 11"
    },
    {
      "id": "p115-12",
      "num": "12",
      "label": "Art. 12"
    },
    {
      "id": "p115-13",
      "num": "13",
      "label": "Art. 13"
    },
    {
      "id": "p115-14",
      "num": "14",
      "label": "Art. 14"
    },
    {
      "id": "p115-15",
      "num": "15",
      "label": "Art. 15"
    },
    {
      "id": "p115-16",
      "num": "16",
      "label": "Art. 16"
    },
    {
      "id": "p115-17",
      "num": "17",
      "label": "Art. 17"
    },
    {
      "id": "p115-18",
      "num": "18",
      "label": "Art. 18"
    },
    {
      "id": "p115-19",
      "num": "19",
      "label": "Art. 19"
    },
    {
      "id": "p115-20",
      "num": "20",
      "label": "Art. 20"
    },
    {
      "id": "p115-21",
      "num": "21",
      "label": "Art. 21"
    },
    {
      "id": "p115-22",
      "num": "22",
      "label": "Art. 22"
    },
    {
      "id": "p115-23",
      "num": "23",
      "label": "Art. 23"
    },
    {
      "id": "p115-24",
      "num": "24",
      "label": "Art. 24"
    },
    {
      "id": "p115-25",
      "num": "25",
      "label": "Art. 25"
    },
    {
      "id": "p115-26",
      "num": "26",
      "label": "Art. 26"
    },
    {
      "id": "p115-27",
      "num": "27",
      "label": "Art. 27"
    },
    {
      "id": "p115-28",
      "num": "28",
      "label": "Art. 28"
    },
    {
      "id": "p115-29",
      "num": "29",
      "label": "Art. 29"
    },
    {
      "id": "p115-30",
      "num": "30",
      "label": "Art. 30"
    },
    {
      "id": "p115-31",
      "num": "31",
      "label": "Art. 31"
    },
    {
      "id": "p115-32",
      "num": "32",
      "label": "Art. 32"
    },
    {
      "id": "p115-33",
      "num": "33",
      "label": "Art. 33"
    },
    {
      "id": "p115-34",
      "num": "34",
      "label": "Art. 34"
    },
    {
      "id": "p115-35",
      "num": "35",
      "label": "Art. 35"
    },
    {
      "id": "p115-36",
      "num": "36",
      "label": "Art. 36"
    },
    {
      "id": "p115-37",
      "num": "37",
      "label": "Art. 37"
    },
    {
      "id": "p115-38",
      "num": "38",
      "label": "Art. 38"
    },
    {
      "id": "p115-38A",
      "num": "38-A",
      "label": "Art. 38-A"
    },
    {
      "id": "p115-39",
      "num": "39",
      "label": "Art. 39"
    },
    {
      "id": "p115-40",
      "num": "40",
      "label": "Art. 40"
    }
  ],
  "clocks": [],
  "organKicker": "Recorte",
  "organTitle": "Artigos do bloco",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a pena que ele escreve. Sem fato.",
  "closing": "Conferir texto oficial se a página tiver sido atualizada depois da consulta.",
  "palette": "cool",
  "highlight": {
    "big": "41",
    "small": "artigos no recorte"
  },
  "heroLead": "Texto extraído antes do comentário. Sem pena inventada e sem fato.",
  "footerLine": "Prompt 115 · pedido 81.",
  "nextLine": "Prompt 116 · pedido 82 · Crimes ambientais, segunda parte.",
  "closingMnemonic": "Texto primeiro. Revogado não se comenta. Lacuna não se completa.",
  "rolesTitle": "Limite do bloco",
  "rolesLead": "O que a página não trouxe não entra como se tivesse sido lido.",
  "compareTitle": "Penas que o texto separou",
  "compareLead": "Primeira frase de pena não é a seguinte.",
  "compareLeft": "Primeira",
  "compareRight": "Seguinte"
};
