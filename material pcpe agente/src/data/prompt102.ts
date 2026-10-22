import type { StudyModule } from "./study";

export const PROMPT102: StudyModule = {
  "short": "Crimes contra a administração da",
  "eyebrow": "Prompt 102 · pedido 68 · CP",
  "title": "Crimes contra a administração da justiça e as finanças",
  "subtitle": "arts. 338 a 359-H",
  "description": "Pedido 68 do penal, gravado como Prompt 102 porque os Prompts 62 a 95 do app já são a Lei nº 14.133. Fonte: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm. Transcrição do texto extraído antes do comentário. Sem completar lacuna. Não se abre artigo depois do 359-H.",
  "reading": "CP. Artigos deste bloco: 338, 338-A, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348…. Página consultada em 20/10/2026.",
  "terms": [
    "CP",
    "pedido 68",
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
    "Art. 350 está revogado no texto extraído. Não se comenta como vigente.",
    "Artigo revogado no intervalo, se houver, não é comentado como vigente.",
    "Não se abre artigo depois do 359-H."
  ],
  "organs": [
    {
      "sigla": "338",
      "nome": "Art. 338",
      "funcao": "reclusão, de um a quatro anos, sem prejuízo de nova expulsão após o cumprimento da pena",
      "base": "Art. 338",
      "nao": "Não inventar pena.",
      "tone": "yellow"
    },
    {
      "sigla": "338-A",
      "nome": "Art. 338-A",
      "funcao": "Texto extraído, sem pena de caput isolada.",
      "base": "Art. 338-A",
      "nao": "Não inventar pena.",
      "tone": "cyan"
    },
    {
      "sigla": "339",
      "nome": "Art. 339",
      "funcao": "reclusão, de dois a oito anos, e multa",
      "base": "Art. 339",
      "nao": "Não inventar pena.",
      "tone": "orange"
    },
    {
      "sigla": "340",
      "nome": "Art. 340",
      "funcao": "detenção, de um a seis meses, ou multa",
      "base": "Art. 340",
      "nao": "Não inventar pena.",
      "tone": "violet"
    },
    {
      "sigla": "341",
      "nome": "Art. 341",
      "funcao": "detenção, de três meses a dois anos, ou multa",
      "base": "Art. 341",
      "nao": "Não inventar pena.",
      "tone": "emerald"
    },
    {
      "sigla": "342",
      "nome": "Art. 342",
      "funcao": "reclusão, de 2 (dois) a 4 (quatro) anos, e multa",
      "base": "Art. 342",
      "nao": "Não inventar pena.",
      "tone": "sky"
    }
  ],
  "swaps": [
    {
      "wrong": "O art. 350 continua vigente.",
      "right": "O texto extraído o dá como revogado."
    },
    {
      "wrong": "Dá para completar pena ou súmula que o texto não trouxe.",
      "right": "Se não está no texto extraído, conferir texto oficial. Sem número inventado."
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
      "text": "https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm"
    },
    {
      "when": "Pedido",
      "title": "68",
      "text": "Gravado como Prompt 102."
    },
    {
      "when": "Limite",
      "title": "Recorte",
      "text": "Não se abre artigo depois do 359-H."
    }
  ],
  "articles": [
    {
      "id": "p102-338",
      "num": "338",
      "kicker": "CP",
      "title": "Art. 338",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão, de um a quatro anos, sem prejuízo de nova expulsão após o cumprimento da pena",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Reingressar no território nacional o estrangeiro",
          "hook": "reclusão, de um a quatro anos, sem prejuízo de nova expulsão após o cumprimento da pena",
          "literal": "- Reingressar no território nacional o estrangeiro que dele foi expulso: Pena - reclusão, de um a quatro anos, sem prejuízo de nova expulsão após o cumprimento da pena. Descumprimento de medidas protetivas de urgência (Incluído pela Lei nº 15.280, de 2025)",
          "context": "CP, art. 338. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de um a quatro anos, sem prejuízo de nova expulsão após o cumprimento da pena",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-338A",
      "num": "338-A",
      "kicker": "CP",
      "title": "Art. 338-A",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão, de 2 (dois) a 5 (cinco) anos, e multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Descumprir decisão judicial que defere medidas p",
          "hook": "Descumprir decisão judicial que defere medidas p",
          "literal": ". Descumprir decisão judicial que defere medidas protetivas de urgência: (Incluído pela Lei nº 15.280, de 2025) Pena – reclusão, de 2 (dois) a 5 (cinco) anos, e multa. (Incluído pela Lei nº 15.280, de 2025)",
          "context": "CP, art. 338-A. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de 2 (dois) a 5 (cinco) anos, e multa",
          "revoked": false
        },
        {
          "tag": "§ 1º",
          "name": "Descumprir decisão judicial que defere medidas p",
          "hook": "Descumprir decisão judicial que defere medidas p",
          "literal": "§ 1º A configuração do crime independe da competência civil ou criminal do juiz que deferiu as medidas. (Incluído pela Lei nº 15.280, de 2025)",
          "context": "CP, art. 338-A. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§ 2º",
          "name": "Descumprir decisão judicial que defere medidas p",
          "hook": "Descumprir decisão judicial que defere medidas p",
          "literal": "§ 2º Na hipótese de prisão em flagrante, apenas a autoridade judicial pode conceder fiança. (Incluído pela Lei nº 15.280, de 2025)",
          "context": "CP, art. 338-A. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§ 3º",
          "name": "Descumprir decisão judicial que defere medidas p",
          "hook": "Descumprir decisão judicial que defere medidas p",
          "literal": "§ 3º O disposto neste artigo não exclui a aplicação de outras sanções cabíveis. (Incluído pela Lei nº 15.280, de 2025) Denunciação caluniosa",
          "context": "CP, art. 338-A. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-339",
      "num": "339",
      "kicker": "CP",
      "title": "Art. 339",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão, de dois a oito anos, e multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Dar causa à instauração de inquérito policial, ",
          "hook": "reclusão, de dois a oito anos, e multa",
          "literal": ". Dar causa à instauração de inquérito policial, de procedimento investigatório criminal, de processo judicial, de processo administrativo disciplinar, de inquérito civil ou de ação de improbidade administrativa contra alguém, imputando-lhe crime, infração ético-disciplinar ou ato ímprobo de que o sabe inocente: (Redação dada pela Lei nº 14.110, de 2020) Pena - reclusão, de dois a oito anos, e multa.",
          "context": "CP, art. 339. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de dois a oito anos, e multa",
          "revoked": false
        },
        {
          "tag": "§ 1º",
          "name": "Dar causa à instauração de inquérito policial, ",
          "hook": "reclusão, de dois a oito anos, e multa",
          "literal": "§ 1º - A pena é aumentada de sexta parte, se o agente se serve de anonimato ou de nome suposto.",
          "context": "CP, art. 339. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de dois a oito anos, e multa",
          "revoked": false
        },
        {
          "tag": "§ 2º",
          "name": "Dar causa à instauração de inquérito policial, ",
          "hook": "reclusão, de dois a oito anos, e multa",
          "literal": "§ 2º - A pena é diminuída de metade, se a imputação é de prática de contravenção. Comunicação falsa de crime ou de contravenção",
          "context": "CP, art. 339. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de dois a oito anos, e multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-340",
      "num": "340",
      "kicker": "CP",
      "title": "Art. 340",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de um a seis meses, ou multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Provocar a ação de autoridade, comunicando-lhe a",
          "hook": "detenção, de um a seis meses, ou multa",
          "literal": "- Provocar a ação de autoridade, comunicando-lhe a ocorrência de crime ou de contravenção que sabe não se ter verificado: Pena - detenção, de um a seis meses, ou multa. Auto-acusação falsa",
          "context": "CP, art. 340. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de um a seis meses, ou multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-341",
      "num": "341",
      "kicker": "CP",
      "title": "Art. 341",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de três meses a dois anos, ou multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Acusar-se, perante a autoridade, de crime inexis",
          "hook": "detenção, de três meses a dois anos, ou multa",
          "literal": "- Acusar-se, perante a autoridade, de crime inexistente ou praticado por outrem: Pena - detenção, de três meses a dois anos, ou multa. Falso testemunho ou falsa perícia",
          "context": "CP, art. 341. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de três meses a dois anos, ou multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-342",
      "num": "342",
      "kicker": "CP",
      "title": "Art. 342",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão, de 2 (dois) a 4 (quatro) anos, e multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Fazer afirmação falsa, ou negar ou calar a verda",
          "hook": "reclusão, de 2 (dois) a 4 (quatro) anos, e multa",
          "literal": ". Fazer afirmação falsa, ou negar ou calar a verdade como testemunha, perito, contador, tradutor ou intérprete em processo judicial, ou administrativo, inquérito policial, ou em juízo arbitral: (Redação dada pela Lei nº 10.268, de 28.8.2001) Pena - reclusão, de 2 (dois) a 4 (quatro) anos, e multa. (Redação dada pela Lei nº 12.850, de 2013) (Vigência)",
          "context": "CP, art. 342. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de 2 (dois) a 4 (quatro) anos, e multa",
          "revoked": false
        },
        {
          "tag": "§ 1º",
          "name": "Fazer afirmação falsa, ou negar ou calar a verda",
          "hook": "reclusão, de 2 (dois) a 4 (quatro) anos, e multa",
          "literal": "§ 1º As penas aumentam-se de um sexto a um terço, se o crime é praticado mediante suborno ou se cometido com o fim de obter prova destinada a produzir efeito em processo penal, ou em processo civil em que for parte entidade da administração pública direta ou indireta. (Redação dada pela Lei nº 10.268, de 28.8.2001)",
          "context": "CP, art. 342. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de 2 (dois) a 4 (quatro) anos, e multa",
          "revoked": false
        },
        {
          "tag": "§ 2º",
          "name": "Fazer afirmação falsa, ou negar ou calar a verda",
          "hook": "reclusão, de 2 (dois) a 4 (quatro) anos, e multa",
          "literal": "§ 2º O fato deixa de ser punível se, antes da sentença no processo em que ocorreu o ilícito, o agente se retrata ou declara a verdade. (Redação dada pela Lei nº 10.268, de 28.8.2001)",
          "context": "CP, art. 342. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de 2 (dois) a 4 (quatro) anos, e multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-343",
      "num": "343",
      "kicker": "CP",
      "title": "Art. 343",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão, de três a quatro anos, e multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Dar, oferecer ou prometer dinheiro ou qualquer o",
          "hook": "reclusão, de três a quatro anos, e multa",
          "literal": ". Dar, oferecer ou prometer dinheiro ou qualquer outra vantagem a testemunha, perito, contador, tradutor ou intérprete, para fazer afirmação falsa, negar ou calar a verdade em depoimento, perícia, cálculos, tradução ou interpretação: (Redação dada pela Lei nº 10.268, de 28.8.2001) Pena - reclusão, de três a quatro anos, e multa. (Redação dada pela Lei nº 10.268, de 28.8.2001)",
          "context": "CP, art. 343. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de três a quatro anos, e multa",
          "revoked": false
        },
        {
          "tag": "Parágrafo único",
          "name": "Dar, oferecer ou prometer dinheiro ou qualquer o",
          "hook": "reclusão, de três a quatro anos, e multa",
          "literal": "Parágrafo único. As penas aumentam-se de um sexto a um terço, se o crime é cometido com o fim de obter prova destinada a produzir efeito em processo penal ou em processo civil em que for parte entidade da administração pública direta ou indireta. (Redação dada pela Lei nº 10.268, de 28.8.2001) Coação no curso do processo",
          "context": "CP, art. 343. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de três a quatro anos, e multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-344",
      "num": "344",
      "kicker": "CP",
      "title": "Art. 344",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão, de um a quatro anos, e multa, além da pena correspondente à violência",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Usar de violência ou grave ameaça, com o fim de ",
          "hook": "reclusão, de um a quatro anos, e multa, além da pena correspondente à violência",
          "literal": "- Usar de violência ou grave ameaça, com o fim de favorecer interesse próprio ou alheio, contra autoridade, parte, ou qualquer outra pessoa que funciona ou é chamada a intervir em processo judicial, policial ou administrativo, ou em juízo arbitral: Pena - reclusão, de um a quatro anos, e multa, além da pena correspondente à violência.",
          "context": "CP, art. 344. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de um a quatro anos, e multa, além da pena correspondente à violência",
          "revoked": false
        },
        {
          "tag": "Parágrafo único",
          "name": "Usar de violência ou grave ameaça, com o fim de ",
          "hook": "reclusão, de um a quatro anos, e multa, além da pena correspondente à violência",
          "literal": "Parágrafo único. A pena aumenta-se de 1/3 (um terço) até a metade se o processo envolver crime contra a dignidade sexual. (Incluído pela Lei nº 14.245, de 2021) Exercício arbitrário das próprias razões",
          "context": "CP, art. 344. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de um a quatro anos, e multa, além da pena correspondente à violência",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-345",
      "num": "345",
      "kicker": "CP",
      "title": "Art. 345",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de quinze dias a um mês, ou multa, além da pena correspondente à violência",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Fazer justiça pelas próprias mãos, para satisfaz",
          "hook": "detenção, de quinze dias a um mês, ou multa, além da pena correspondente à violência",
          "literal": "- Fazer justiça pelas próprias mãos, para satisfazer pretensão, embora legítima, salvo quando a lei o permite: Pena - detenção, de quinze dias a um mês, ou multa, além da pena correspondente à violência.",
          "context": "CP, art. 345. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de quinze dias a um mês, ou multa, além da pena correspondente à violência",
          "revoked": false
        },
        {
          "tag": "Parágrafo único",
          "name": "Fazer justiça pelas próprias mãos, para satisfaz",
          "hook": "detenção, de quinze dias a um mês, ou multa, além da pena correspondente à violência",
          "literal": "Parágrafo único - Se não há emprego de violência, somente se procede mediante queixa.",
          "context": "CP, art. 345. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de quinze dias a um mês, ou multa, além da pena correspondente à violência",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-346",
      "num": "346",
      "kicker": "CP",
      "title": "Art. 346",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de seis meses a dois anos, e multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Tirar, suprimir, destruir ou danificar coisa pró",
          "hook": "detenção, de seis meses a dois anos, e multa",
          "literal": "- Tirar, suprimir, destruir ou danificar coisa própria, que se acha em poder de terceiro por determinação judicial ou convenção: Pena - detenção, de seis meses a dois anos, e multa. Fraude processual",
          "context": "CP, art. 346. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de seis meses a dois anos, e multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-347",
      "num": "347",
      "kicker": "CP",
      "title": "Art. 347",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de três meses a dois anos, e multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Inovar artificiosamente, na pendência de process",
          "hook": "detenção, de três meses a dois anos, e multa",
          "literal": "- Inovar artificiosamente, na pendência de processo civil ou administrativo, o estado de lugar, de coisa ou de pessoa, com o fim de induzir a erro o juiz ou o perito: Pena - detenção, de três meses a dois anos, e multa.",
          "context": "CP, art. 347. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de três meses a dois anos, e multa",
          "revoked": false
        },
        {
          "tag": "Parágrafo único",
          "name": "Inovar artificiosamente, na pendência de process",
          "hook": "detenção, de três meses a dois anos, e multa",
          "literal": "Parágrafo único - Se a inovação se destina a produzir efeito em processo penal, ainda que não iniciado, as penas aplicam-se em dobro. Favorecimento pessoal",
          "context": "CP, art. 347. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de três meses a dois anos, e multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-348",
      "num": "348",
      "kicker": "CP",
      "title": "Art. 348",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de um a seis meses, e multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Auxiliar a subtrair-se à ação de autoridade públ",
          "hook": "detenção, de um a seis meses, e multa",
          "literal": "- Auxiliar a subtrair-se à ação de autoridade pública autor de crime a que é cominada pena de reclusão: Pena - detenção, de um a seis meses, e multa.",
          "context": "CP, art. 348. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de um a seis meses, e multa",
          "revoked": false
        },
        {
          "tag": "§ 1º",
          "name": "Auxiliar a subtrair-se à ação de autoridade públ",
          "hook": "detenção, de um a seis meses, e multa",
          "literal": "§ 1º - Se ao crime não é cominada pena de reclusão: Pena - detenção, de quinze dias a três meses, e multa.",
          "context": "CP, art. 348. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de um a seis meses, e multa",
          "revoked": false
        },
        {
          "tag": "§ 2º",
          "name": "Auxiliar a subtrair-se à ação de autoridade públ",
          "hook": "detenção, de um a seis meses, e multa",
          "literal": "§ 2º - Se quem presta o auxílio é ascendente, descendente, cônjuge ou irmão do criminoso, fica isento de pena. Favorecimento real",
          "context": "CP, art. 348. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de um a seis meses, e multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-349",
      "num": "349",
      "kicker": "CP",
      "title": "Art. 349",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de um a seis meses, e multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Prestar a criminoso, fora dos casos de co-autori",
          "hook": "detenção, de um a seis meses, e multa",
          "literal": "- Prestar a criminoso, fora dos casos de co-autoria ou de receptação, auxílio destinado a tornar seguro o proveito do crime: Pena - detenção, de um a seis meses, e multa.",
          "context": "CP, art. 349. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de um a seis meses, e multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-349A",
      "num": "349-A",
      "kicker": "CP",
      "title": "Art. 349-A",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de 3 (três) meses a 1 (um) ano",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Ingressar, promover, intermediar, auxiliar ou fa",
          "hook": "Ingressar, promover, intermediar, auxiliar ou fa",
          "literal": ". Ingressar, promover, intermediar, auxiliar ou facilitar a entrada de aparelho telefônico de comunicação móvel, de rádio ou similar, sem autorização legal, em estabelecimento prisional. (Incluído pela Lei nº 12.012, de 2009). Pena: detenção, de 3 (três) meses a 1 (um) ano. (Incluído pela Lei nº 12.012, de 2009). Exercício arbitrário ou abuso de poder",
          "context": "CP, art. 349-A. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de 3 (três) meses a 1 (um) ano",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-350",
      "num": "350",
      "kicker": "CP",
      "title": "Art. 350",
      "lead": "Texto antes do comentário.",
      "plate": "Revogado",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "texto",
          "name": "Revogado",
          "hook": "Revogado",
          "literal": "- (Revogado pela Lei nº 13.869, de 2019) (Vigência) Fuga de pessoa presa ou submetida a medida de segurança",
          "context": "CP, art. 350. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "Revogado no texto extraído. Não se comenta como tipo vigente.",
          "trap": "A banca usa o número antigo como se a pena ainda existisse.",
          "example": "Sem exemplo. O dispositivo não está vigente.",
          "mnemonic": "Sem pena inventada.",
          "revoked": true
        }
      ]
    },
    {
      "id": "p102-351",
      "num": "351",
      "kicker": "CP",
      "title": "Art. 351",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de seis meses a dois anos",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Promover ou facilitar a fuga de pessoa legalment",
          "hook": "detenção, de seis meses a dois anos",
          "literal": "- Promover ou facilitar a fuga de pessoa legalmente presa ou submetida a medida de segurança detentiva: Pena - detenção, de seis meses a dois anos.",
          "context": "CP, art. 351. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de seis meses a dois anos",
          "revoked": false
        },
        {
          "tag": "§ 1º",
          "name": "Promover ou facilitar a fuga de pessoa legalment",
          "hook": "detenção, de seis meses a dois anos",
          "literal": "§ 1º - Se o crime é praticado a mão armada, ou por mais de uma pessoa, ou mediante arrombamento, a pena é de reclusão, de dois a seis anos.",
          "context": "CP, art. 351. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de seis meses a dois anos",
          "revoked": false
        },
        {
          "tag": "§ 2º",
          "name": "Promover ou facilitar a fuga de pessoa legalment",
          "hook": "detenção, de seis meses a dois anos",
          "literal": "§ 2º - Se há emprego de violência contra pessoa, aplica-se também a pena correspondente à violência.",
          "context": "CP, art. 351. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de seis meses a dois anos",
          "revoked": false
        },
        {
          "tag": "§ 3º",
          "name": "Promover ou facilitar a fuga de pessoa legalment",
          "hook": "detenção, de seis meses a dois anos",
          "literal": "§ 3º - A pena é de reclusão, de um a quatro anos, se o crime é praticado por pessoa sob cuja custódia ou guarda está o preso ou o internado.",
          "context": "CP, art. 351. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de seis meses a dois anos",
          "revoked": false
        },
        {
          "tag": "§ 4º",
          "name": "Promover ou facilitar a fuga de pessoa legalment",
          "hook": "detenção, de seis meses a dois anos",
          "literal": "§ 4º - No caso de culpa do funcionário incumbido da custódia ou guarda, aplica-se a pena de detenção, de três meses a um ano, ou multa. Evasão mediante violência contra a pessoa",
          "context": "CP, art. 351. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de seis meses a dois anos",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-352",
      "num": "352",
      "kicker": "CP",
      "title": "Art. 352",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de três meses a um ano, além da pena correspondente à violência",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Evadir-se ou tentar evadir-se o preso ou o indiv",
          "hook": "detenção, de três meses a um ano, além da pena correspondente à violência",
          "literal": "- Evadir-se ou tentar evadir-se o preso ou o indivíduo submetido a medida de segurança detentiva, usando de violência contra a pessoa: Pena - detenção, de três meses a um ano, além da pena correspondente à violência. Arrebatamento de preso",
          "context": "CP, art. 352. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de três meses a um ano, além da pena correspondente à violência",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-353",
      "num": "353",
      "kicker": "CP",
      "title": "Art. 353",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão, de um a quatro anos, além da pena correspondente à violência",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Arrebatar preso, a fim de maltratá-lo, do poder ",
          "hook": "reclusão, de um a quatro anos, além da pena correspondente à violência",
          "literal": "- Arrebatar preso, a fim de maltratá-lo, do poder de quem o tenha sob custódia ou guarda: Pena - reclusão, de um a quatro anos, além da pena correspondente à violência. Motim de presos",
          "context": "CP, art. 353. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de um a quatro anos, além da pena correspondente à violência",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-354",
      "num": "354",
      "kicker": "CP",
      "title": "Art. 354",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de seis meses a dois anos, além da pena correspondente à violência",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Amotinarem-se presos, perturbando a ordem ou dis",
          "hook": "detenção, de seis meses a dois anos, além da pena correspondente à violência",
          "literal": "- Amotinarem-se presos, perturbando a ordem ou disciplina da prisão: Pena - detenção, de seis meses a dois anos, além da pena correspondente à violência. Patrocínio infiel",
          "context": "CP, art. 354. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de seis meses a dois anos, além da pena correspondente à violência",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-355",
      "num": "355",
      "kicker": "CP",
      "title": "Art. 355",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de seis meses a três anos, e multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Trair, na qualidade de advogado ou procurador, o",
          "hook": "detenção, de seis meses a três anos, e multa",
          "literal": "- Trair, na qualidade de advogado ou procurador, o dever profissional, prejudicando interesse, cujo patrocínio, em juízo, lhe é confiado: Pena - detenção, de seis meses a três anos, e multa. Patrocínio simultâneo ou tergiversação",
          "context": "CP, art. 355. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de seis meses a três anos, e multa",
          "revoked": false
        },
        {
          "tag": "Parágrafo único",
          "name": "Trair, na qualidade de advogado ou procurador, o",
          "hook": "detenção, de seis meses a três anos, e multa",
          "literal": "Parágrafo único - Incorre na pena deste artigo o advogado ou procurador judicial que defende na mesma causa, simultânea ou sucessivamente, partes contrárias. Sonegação de papel ou objeto de valor probatório",
          "context": "CP, art. 355. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de seis meses a três anos, e multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-356",
      "num": "356",
      "kicker": "CP",
      "title": "Art. 356",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de seis meses a três anos, e multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Inutilizar, total ou parcialmente, ou deixar de ",
          "hook": "detenção, de seis meses a três anos, e multa",
          "literal": "- Inutilizar, total ou parcialmente, ou deixar de restituir autos, documento ou objeto de valor probatório, que recebeu na qualidade de advogado ou procurador: Pena - detenção, de seis meses a três anos, e multa. Exploração de prestígio",
          "context": "CP, art. 356. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de seis meses a três anos, e multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-357",
      "num": "357",
      "kicker": "CP",
      "title": "Art. 357",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão, de um a cinco anos, e multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Solicitar ou receber dinheiro ou qualquer outra ",
          "hook": "reclusão, de um a cinco anos, e multa",
          "literal": "- Solicitar ou receber dinheiro ou qualquer outra utilidade, a pretexto de influir em juiz, jurado, órgão do Ministério Público, funcionário de justiça, perito, tradutor, intérprete ou testemunha: Pena - reclusão, de um a cinco anos, e multa.",
          "context": "CP, art. 357. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de um a cinco anos, e multa",
          "revoked": false
        },
        {
          "tag": "Parágrafo único",
          "name": "Solicitar ou receber dinheiro ou qualquer outra ",
          "hook": "reclusão, de um a cinco anos, e multa",
          "literal": "Parágrafo único - As penas aumentam-se de um terço, se o agente alega ou insinua que o dinheiro ou utilidade também se destina a qualquer das pessoas referidas neste artigo. Violência ou fraude em arrematação judicial",
          "context": "CP, art. 357. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de um a cinco anos, e multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-358",
      "num": "358",
      "kicker": "CP",
      "title": "Art. 358",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de dois meses a um ano, ou multa, além da pena correspondente à violência",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Impedir, perturbar ou fraudar arrematação judici",
          "hook": "detenção, de dois meses a um ano, ou multa, além da pena correspondente à violência",
          "literal": "- Impedir, perturbar ou fraudar arrematação judicial; afastar ou procurar afastar concorrente ou licitante, por meio de violência, grave ameaça, fraude ou oferecimento de vantagem: Pena - detenção, de dois meses a um ano, ou multa, além da pena correspondente à violência. Desobediência a decisão judicial sobre perda ou suspensão de direito",
          "context": "CP, art. 358. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de dois meses a um ano, ou multa, além da pena correspondente à violência",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-359",
      "num": "359",
      "kicker": "CP",
      "title": "Art. 359",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de três meses a dois anos, ou multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Exercer função, atividade, direito, autoridade o",
          "hook": "detenção, de três meses a dois anos, ou multa",
          "literal": "- Exercer função, atividade, direito, autoridade ou múnus, de que foi suspenso ou privado por decisão judicial: Pena - detenção, de três meses a dois anos, ou multa.",
          "context": "CP, art. 359. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de três meses a dois anos, ou multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-359A",
      "num": "359-A",
      "kicker": "CP",
      "title": "Art. 359-A",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão, de 1 (um) a 2 (dois) anos",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Ordenar, autorizar ou realizar operação de crédi",
          "hook": "reclusão, de 1 (um) a 2 (dois) anos",
          "literal": ". Ordenar, autorizar ou realizar operação de crédito, interno ou externo, sem prévia autorização legislativa: (Incluído pela Lei nº 10.028, de 2000) Pena – reclusão, de 1 (um) a 2 (dois) anos. (Incluído pela Lei nº 10.028, de 2000)",
          "context": "CP, art. 359-A. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de 1 (um) a 2 (dois) anos",
          "revoked": false
        },
        {
          "tag": "Parágrafo único",
          "name": "Ordenar, autorizar ou realizar operação de crédi",
          "hook": "reclusão, de 1 (um) a 2 (dois) anos",
          "literal": "Parágrafo único. Incide na mesma pena quem ordena, autoriza ou realiza operação de crédito, interno ou externo: (Incluído pela Lei nº 10.028, de 2000) I – com inobservância de limite, condição ou montante estabelecido em lei ou em resolução do Senado Federal; (Incluído pela Lei nº 10.028, de 2000) II – quando o montante da dívida consolidada ultrapassa o limite máximo autorizado por lei. (Incluído pela Lei nº 10.028, de 2000) Inscrição de despesas não empenhadas em restos a pagar (Incluído pela Lei nº 10.028, de 2000)",
          "context": "CP, art. 359-A. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de 1 (um) a 2 (dois) anos",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-359B",
      "num": "359-B",
      "kicker": "CP",
      "title": "Art. 359-B",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de 6 (seis) meses a 2 (dois) anos",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Ordenar ou autorizar a inscrição em restos a pag",
          "hook": "detenção, de 6 (seis) meses a 2 (dois) anos",
          "literal": ". Ordenar ou autorizar a inscrição em restos a pagar, de despesa que não tenha sido previamente empenhada ou que exceda limite estabelecido em lei: (Incluído pela Lei nº 10.028, de 2000) Pena – detenção, de 6 (seis) meses a 2 (dois) anos. (Incluído pela Lei nº 10.028, de 2000) Assunção de obrigação no último ano do mandato ou legislatura (Incluído pela Lei nº 10.028, de 2000)",
          "context": "CP, art. 359-B. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de 6 (seis) meses a 2 (dois) anos",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-359C",
      "num": "359-C",
      "kicker": "CP",
      "title": "Art. 359-C",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão, de 1 (um) a 4 (quatro) anos",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Ordenar ou autorizar a assunção de obrigação, no",
          "hook": "reclusão, de 1 (um) a 4 (quatro) anos",
          "literal": ". Ordenar ou autorizar a assunção de obrigação, nos dois últimos quadrimestres do último ano do mandato ou legislatura, cuja despesa não possa ser paga no mesmo exercício financeiro ou, caso reste parcela a ser paga no exercício seguinte, que não tenha contrapartida suficiente de disponibilidade de caixa: (Incluído pela Lei nº 10.028, de 2000) Pena - reclusão, de 1 (um) a 4 (quatro) anos. (Incluído pela Lei nº 10.028, de 2000) Ordenação de despesa não autorizada (Incluído pela Lei nº 10.028, de 2000)",
          "context": "CP, art. 359-C. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de 1 (um) a 4 (quatro) anos",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-359D",
      "num": "359-D",
      "kicker": "CP",
      "title": "Art. 359-D",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão, de 1 (um) a 4 (quatro) anos",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Ordenar despesa não autorizada por lei: (Incluíd",
          "hook": "reclusão, de 1 (um) a 4 (quatro) anos",
          "literal": ". Ordenar despesa não autorizada por lei: (Incluído pela Lei nº 10.028, de 2000) Pena – reclusão, de 1 (um) a 4 (quatro) anos. (Incluído pela Lei nº 10.028, de 2000) Prestação de garantia graciosa (Incluído pela Lei nº 10.028, de 2000)",
          "context": "CP, art. 359-D. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de 1 (um) a 4 (quatro) anos",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-359E",
      "num": "359-E",
      "kicker": "CP",
      "title": "Art. 359-E",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de 3 (três) meses a 1 (um) ano",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Prestar garantia em operação de crédito sem que ",
          "hook": "detenção, de 3 (três) meses a 1 (um) ano",
          "literal": ". Prestar garantia em operação de crédito sem que tenha sido constituída contragarantia em valor igual ou superior ao valor da garantia prestada, na forma da lei: (Incluído pela Lei nº 10.028, de 2000) Pena – detenção, de 3 (três) meses a 1 (um) ano. (Incluído pela Lei nº 10.028, de 2000) Não cancelamento de restos a pagar (Incluído pela Lei nº 10.028, de 2000)",
          "context": "CP, art. 359-E. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de 3 (três) meses a 1 (um) ano",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-359F",
      "num": "359-F",
      "kicker": "CP",
      "title": "Art. 359-F",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de 6 (seis) meses a 2 (dois) anos",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Deixar de ordenar, de autorizar ou de promover o",
          "hook": "detenção, de 6 (seis) meses a 2 (dois) anos",
          "literal": ". Deixar de ordenar, de autorizar ou de promover o cancelamento do montante de restos a pagar inscrito em valor superior ao permitido em lei: (Incluído pela Lei nº 10.028, de 2000) Pena – detenção, de 6 (seis) meses a 2 (dois) anos. (Incluído pela Lei nº 10.028, de 2000) Aumento de despesa total com pessoal no último ano do mandato ou legislatura (Incluído pela Lei nº 10.028, de 2000)",
          "context": "CP, art. 359-F. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de 6 (seis) meses a 2 (dois) anos",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-359G",
      "num": "359-G",
      "kicker": "CP",
      "title": "Art. 359-G",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão, de 1 (um) a 4 (quatro) anos",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Ordenar, autorizar ou executar ato que acarrete ",
          "hook": "reclusão, de 1 (um) a 4 (quatro) anos",
          "literal": ". Ordenar, autorizar ou executar ato que acarrete aumento de despesa total com pessoal, nos cento e oitenta dias anteriores ao final do mandato ou da legislatura: (Incluído pela Lei nº 10.028, de 2000) ) Pena – reclusão, de 1 (um) a 4 (quatro) anos. (Incluído pela Lei nº 10.028, de 2000) Oferta pública ou colocação de títulos no mercado (Incluído pela Lei nº 10.028, de 2000)",
          "context": "CP, art. 359-G. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de 1 (um) a 4 (quatro) anos",
          "revoked": false
        }
      ]
    },
    {
      "id": "p102-359H",
      "num": "359-H",
      "kicker": "CP",
      "title": "Art. 359-H",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão, de 1 (um) a 4 (quatro) anos",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Ordenar, autorizar ou promover a oferta pública ",
          "hook": "reclusão, de 1 (um) a 4 (quatro) anos",
          "literal": ". Ordenar, autorizar ou promover a oferta pública ou a colocação no mercado financeiro de títulos da dívida pública sem que tenham sido criados por lei ou sem que estejam registrados em sistema centralizado de liquidação e de custódia: (Incluído pela Lei nº 10.028, de 2000) Pena – reclusão, de 1 (um) a 4 (quatro) anos. (Incluído pela Lei nº 10.028, de 2000)",
          "context": "CP, art. 359-H. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de 1 (um) a 4 (quatro) anos",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Tipo",
      "source": "CP",
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
  "rolePlateSource": "CP",
  "summary": [
    {
      "item": "Art. 338",
      "rule": "reclusão, de um a quatro anos, sem prejuízo de nova expulsão após o cumprimento da pena",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 338-A",
      "rule": "reclusão, de 2 (dois) a 5 (cinco) anos, e multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 339",
      "rule": "reclusão, de dois a oito anos, e multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 340",
      "rule": "detenção, de um a seis meses, ou multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 341",
      "rule": "detenção, de três meses a dois anos, ou multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 342",
      "rule": "reclusão, de 2 (dois) a 4 (quatro) anos, e multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 343",
      "rule": "reclusão, de três a quatro anos, e multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 344",
      "rule": "reclusão, de um a quatro anos, e multa, além da pena correspondente à violência",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 345",
      "rule": "detenção, de quinze dias a um mês, ou multa, além da pena correspondente à violência",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 346",
      "rule": "detenção, de seis meses a dois anos, e multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 347",
      "rule": "detenção, de três meses a dois anos, e multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 348",
      "rule": "detenção, de um a seis meses, e multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 349",
      "rule": "detenção, de um a seis meses, e multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 349-A",
      "rule": "detenção, de 3 (três) meses a 1 (um) ano",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 350",
      "rule": "Revogado no texto extraído. Não comentar como vigente.",
      "clue": "Não comentar como vigente."
    },
    {
      "item": "Art. 351",
      "rule": "detenção, de seis meses a dois anos",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 352",
      "rule": "detenção, de três meses a um ano, além da pena correspondente à violência",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 353",
      "rule": "reclusão, de um a quatro anos, além da pena correspondente à violência",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 354",
      "rule": "detenção, de seis meses a dois anos, além da pena correspondente à violência",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 355",
      "rule": "detenção, de seis meses a três anos, e multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 356",
      "rule": "detenção, de seis meses a três anos, e multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 357",
      "rule": "reclusão, de um a cinco anos, e multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 358",
      "rule": "detenção, de dois meses a um ano, ou multa, além da pena correspondente à violência",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 359",
      "rule": "detenção, de três meses a dois anos, ou multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 359-A",
      "rule": "reclusão, de 1 (um) a 2 (dois) anos",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 359-B",
      "rule": "detenção, de 6 (seis) meses a 2 (dois) anos",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 359-C",
      "rule": "reclusão, de 1 (um) a 4 (quatro) anos",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 359-D",
      "rule": "reclusão, de 1 (um) a 4 (quatro) anos",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 359-E",
      "rule": "detenção, de 3 (três) meses a 1 (um) ano",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 359-F",
      "rule": "detenção, de 6 (seis) meses a 2 (dois) anos",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 359-G",
      "rule": "reclusão, de 1 (um) a 4 (quatro) anos",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 359-H",
      "rule": "reclusão, de 1 (um) a 4 (quatro) anos",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    }
  ],
  "compare": [
    {
      "item": "Art. 348",
      "ce": "Primeira pena: detenção, de um a seis meses, e multa",
      "cf": "Pena seguinte: detenção, de quinze dias a três meses, e multa",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 102011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O art. 350 permanece vigente e admite comentário como tipo em vigor.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. No texto extraído, o art. 350 está revogado. Trecho: - (Revogado pela Lei nº 13.869, de 2019) (Vigência) Fuga de pessoa presa ou submetida a medida de segurança"
    },
    {
      "id": 102012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A pena do caput do art. 338, no texto extraído, é",
      "correct": "d",
      "options": [
        {
          "key": "a",
          "label": "o artigo está revogado e não tem pena no texto vigente."
        },
        {
          "key": "b",
          "label": "a pena do caput é de advertência, sem o texto extraído."
        },
        {
          "key": "c",
          "label": "a pena não foi escrita e pode ser completada pela banca."
        },
        {
          "key": "d",
          "label": "reclusão, de um a quatro anos, sem prejuízo de nova expulsão após o cumprimento da pena."
        },
        {
          "key": "e",
          "label": "multa apenas, sem pena privativa de liberdade, segundo alternativa inventada."
        }
      ],
      "comentario": "Questão original, não é prova real. A frase extraída é: reclusão, de um a quatro anos, sem prejuízo de nova expulsão após o cumprimento da pena. As outras alternativas não são essa frase."
    },
    {
      "id": 102013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "No recorte extraído, a relação entre o art. 350 e o art. 338 é a seguinte:",
      "correct": "d",
      "options": [
        {
          "key": "a",
          "label": "os dois estão revogados."
        },
        {
          "key": "b",
          "label": "os dois estão vigentes e têm a mesma pena."
        },
        {
          "key": "c",
          "label": "o art. 338 está revogado e o art. 350 está vigente."
        },
        {
          "key": "d",
          "label": "o art. 350 está revogado; o art. 338 foi localizado como texto não revogado neste recorte."
        },
        {
          "key": "e",
          "label": "a revogação não consta do texto e pode ser presumida."
        }
      ],
      "comentario": "Questão original, não é prova real. O art. 350 traz revogação no texto extraído. O art. 338 não começa como revogado. Não se soma pena de artigo revogado."
    }
  ],
  "toc": [
    {
      "id": "p102-338",
      "num": "338",
      "label": "Art. 338"
    },
    {
      "id": "p102-338A",
      "num": "338-A",
      "label": "Art. 338-A"
    },
    {
      "id": "p102-339",
      "num": "339",
      "label": "Art. 339"
    },
    {
      "id": "p102-340",
      "num": "340",
      "label": "Art. 340"
    },
    {
      "id": "p102-341",
      "num": "341",
      "label": "Art. 341"
    },
    {
      "id": "p102-342",
      "num": "342",
      "label": "Art. 342"
    },
    {
      "id": "p102-343",
      "num": "343",
      "label": "Art. 343"
    },
    {
      "id": "p102-344",
      "num": "344",
      "label": "Art. 344"
    },
    {
      "id": "p102-345",
      "num": "345",
      "label": "Art. 345"
    },
    {
      "id": "p102-346",
      "num": "346",
      "label": "Art. 346"
    },
    {
      "id": "p102-347",
      "num": "347",
      "label": "Art. 347"
    },
    {
      "id": "p102-348",
      "num": "348",
      "label": "Art. 348"
    },
    {
      "id": "p102-349",
      "num": "349",
      "label": "Art. 349"
    },
    {
      "id": "p102-349A",
      "num": "349-A",
      "label": "Art. 349-A"
    },
    {
      "id": "p102-350",
      "num": "350",
      "label": "Art. 350"
    },
    {
      "id": "p102-351",
      "num": "351",
      "label": "Art. 351"
    },
    {
      "id": "p102-352",
      "num": "352",
      "label": "Art. 352"
    },
    {
      "id": "p102-353",
      "num": "353",
      "label": "Art. 353"
    },
    {
      "id": "p102-354",
      "num": "354",
      "label": "Art. 354"
    },
    {
      "id": "p102-355",
      "num": "355",
      "label": "Art. 355"
    },
    {
      "id": "p102-356",
      "num": "356",
      "label": "Art. 356"
    },
    {
      "id": "p102-357",
      "num": "357",
      "label": "Art. 357"
    },
    {
      "id": "p102-358",
      "num": "358",
      "label": "Art. 358"
    },
    {
      "id": "p102-359",
      "num": "359",
      "label": "Art. 359"
    },
    {
      "id": "p102-359A",
      "num": "359-A",
      "label": "Art. 359-A"
    },
    {
      "id": "p102-359B",
      "num": "359-B",
      "label": "Art. 359-B"
    },
    {
      "id": "p102-359C",
      "num": "359-C",
      "label": "Art. 359-C"
    },
    {
      "id": "p102-359D",
      "num": "359-D",
      "label": "Art. 359-D"
    },
    {
      "id": "p102-359E",
      "num": "359-E",
      "label": "Art. 359-E"
    },
    {
      "id": "p102-359F",
      "num": "359-F",
      "label": "Art. 359-F"
    },
    {
      "id": "p102-359G",
      "num": "359-G",
      "label": "Art. 359-G"
    },
    {
      "id": "p102-359H",
      "num": "359-H",
      "label": "Art. 359-H"
    }
  ],
  "clocks": [],
  "organKicker": "Recorte",
  "organTitle": "Artigos do bloco",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a pena que ele escreve. Sem fato.",
  "closing": "Conferir texto oficial se a página tiver sido atualizada depois da consulta.",
  "palette": "teal",
  "highlight": {
    "big": "32",
    "small": "artigos no recorte"
  },
  "heroLead": "Texto extraído antes do comentário. Sem pena inventada e sem fato.",
  "footerLine": "Prompt 102 · pedido 68.",
  "nextLine": "Prompt 103 · pedido 69 · Crimes hediondos.",
  "closingMnemonic": "Texto primeiro. Revogado não se comenta. Lacuna não se completa.",
  "rolesTitle": "Limite do bloco",
  "rolesLead": "O que a página não trouxe não entra como se tivesse sido lido.",
  "compareTitle": "Penas que o texto separou",
  "compareLead": "Primeira frase de pena não é a seguinte.",
  "compareLeft": "Primeira",
  "compareRight": "Seguinte"
};
