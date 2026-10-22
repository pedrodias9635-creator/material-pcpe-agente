import type { StudyModule } from "./study";

export const PROMPT101: StudyModule = {
  "short": "Usurpação e desobediência",
  "eyebrow": "Prompt 101 · pedido 67 · CP",
  "title": "Usurpação e desobediência",
  "subtitle": "arts. 328 a 337",
  "description": "Pedido 67 do penal, gravado como Prompt 101 porque os Prompts 62 a 95 do app já são a Lei nº 14.133. Fonte: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm. Transcrição do texto extraído antes do comentário. Sem completar lacuna. Para no art. 337. Não abre 337-A.",
  "reading": "CP. Artigos deste bloco: 328, 329, 330, 331, 332, 333, 334, 334-A, 335, 336, 337. Página consultada em 20/10/2026.",
  "terms": [
    "CP",
    "pedido 67",
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
    "Os arts. 337-A a 337-P existem no código e ficam fora deste bloco. Não foram transcritos.",
    "Para no art. 337. Não abre 337-A."
  ],
  "organs": [
    {
      "sigla": "328",
      "nome": "Art. 328",
      "funcao": "detenção, de três meses a dois anos, e multa",
      "base": "Art. 328",
      "nao": "Não inventar pena.",
      "tone": "yellow"
    },
    {
      "sigla": "329",
      "nome": "Art. 329",
      "funcao": "detenção, de dois meses a dois anos",
      "base": "Art. 329",
      "nao": "Não inventar pena.",
      "tone": "cyan"
    },
    {
      "sigla": "330",
      "nome": "Art. 330",
      "funcao": "detenção, de quinze dias a seis meses, e multa",
      "base": "Art. 330",
      "nao": "Não inventar pena.",
      "tone": "orange"
    },
    {
      "sigla": "331",
      "nome": "Art. 331",
      "funcao": "detenção, de seis meses a dois anos, ou multa",
      "base": "Art. 331",
      "nao": "Não inventar pena.",
      "tone": "violet"
    },
    {
      "sigla": "332",
      "nome": "Art. 332",
      "funcao": "reclusão, de 2 (dois) a 5 (cinco) anos, e multa",
      "base": "Art. 332",
      "nao": "Não inventar pena.",
      "tone": "emerald"
    },
    {
      "sigla": "333",
      "nome": "Art. 333",
      "funcao": "reclusão, de 2 (dois) a 12 (doze) anos, e multa",
      "base": "Art. 333",
      "nao": "Não inventar pena.",
      "tone": "sky"
    }
  ],
  "swaps": [
    {
      "wrong": "A pena do art. 328 é a do art. 329.",
      "right": "Art. 328: detenção, de três meses a dois anos, e multa. Art. 329: detenção, de dois meses a dois anos."
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
      "title": "67",
      "text": "Gravado como Prompt 101."
    },
    {
      "when": "Limite",
      "title": "Recorte",
      "text": "Para no art. 337. Não abre 337-A."
    }
  ],
  "articles": [
    {
      "id": "p101-328",
      "num": "328",
      "kicker": "CP",
      "title": "Art. 328",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de três meses a dois anos, e multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Usurpar o exercício de função pública:",
          "hook": "detenção, de três meses a dois anos, e multa",
          "literal": "- Usurpar o exercício de função pública: Pena - detenção, de três meses a dois anos, e multa.",
          "context": "CP, art. 328. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de três meses a dois anos, e multa",
          "revoked": false
        },
        {
          "tag": "Parágrafo único",
          "name": "Usurpar o exercício de função pública:",
          "hook": "detenção, de três meses a dois anos, e multa",
          "literal": "Parágrafo único - Se do fato o agente aufere vantagem: Pena - reclusão, de dois a cinco anos, e multa. Resistência",
          "context": "CP, art. 328. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de três meses a dois anos, e multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p101-329",
      "num": "329",
      "kicker": "CP",
      "title": "Art. 329",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de dois meses a dois anos",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Opor-se à execução de ato legal, mediante violên",
          "hook": "detenção, de dois meses a dois anos",
          "literal": "- Opor-se à execução de ato legal, mediante violência ou ameaça a funcionário competente para executá-lo ou a quem lhe esteja prestando auxílio: Pena - detenção, de dois meses a dois anos.",
          "context": "CP, art. 329. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de dois meses a dois anos",
          "revoked": false
        },
        {
          "tag": "§ 1º",
          "name": "Opor-se à execução de ato legal, mediante violên",
          "hook": "detenção, de dois meses a dois anos",
          "literal": "§ 1º - Se o ato, em razão da resistência, não se executa: Pena - reclusão, de um a três anos.",
          "context": "CP, art. 329. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de dois meses a dois anos",
          "revoked": false
        },
        {
          "tag": "§ 2º",
          "name": "Opor-se à execução de ato legal, mediante violên",
          "hook": "detenção, de dois meses a dois anos",
          "literal": "§ 2º - As penas deste artigo são aplicáveis sem prejuízo das correspondentes à violência. Desobediência",
          "context": "CP, art. 329. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de dois meses a dois anos",
          "revoked": false
        }
      ]
    },
    {
      "id": "p101-330",
      "num": "330",
      "kicker": "CP",
      "title": "Art. 330",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de quinze dias a seis meses, e multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Desobedecer a ordem legal de funcionário público",
          "hook": "detenção, de quinze dias a seis meses, e multa",
          "literal": "- Desobedecer a ordem legal de funcionário público: Pena - detenção, de quinze dias a seis meses, e multa. Desacato",
          "context": "CP, art. 330. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de quinze dias a seis meses, e multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p101-331",
      "num": "331",
      "kicker": "CP",
      "title": "Art. 331",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de seis meses a dois anos, ou multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Desacatar funcionário público no exercício da fu",
          "hook": "detenção, de seis meses a dois anos, ou multa",
          "literal": "- Desacatar funcionário público no exercício da função ou em razão dela: Pena - detenção, de seis meses a dois anos, ou multa. Tráfico de Influência (Redação dada pela Lei nº 9.127, de 1995)",
          "context": "CP, art. 331. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de seis meses a dois anos, ou multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p101-332",
      "num": "332",
      "kicker": "CP",
      "title": "Art. 332",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão, de 2 (dois) a 5 (cinco) anos, e multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Solicitar, exigir, cobrar ou obter, para si ou p",
          "hook": "reclusão, de 2 (dois) a 5 (cinco) anos, e multa",
          "literal": "- Solicitar, exigir, cobrar ou obter, para si ou para outrem, vantagem ou promessa de vantagem, a pretexto de influir em ato praticado por funcionário público no exercício da função: (Redação dada pela Lei nº 9.127, de 1995) Pena - reclusão, de 2 (dois) a 5 (cinco) anos, e multa. (Redação dada pela Lei nº 9.127, de 1995)",
          "context": "CP, art. 332. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de 2 (dois) a 5 (cinco) anos, e multa",
          "revoked": false
        },
        {
          "tag": "Parágrafo único",
          "name": "Solicitar, exigir, cobrar ou obter, para si ou p",
          "hook": "reclusão, de 2 (dois) a 5 (cinco) anos, e multa",
          "literal": "Parágrafo único - A pena é aumentada da metade, se o agente alega ou insinua que a vantagem é também destinada ao funcionário. (Redação dada pela Lei nº 9.127, de 1995) Corrupção ativa",
          "context": "CP, art. 332. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de 2 (dois) a 5 (cinco) anos, e multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p101-333",
      "num": "333",
      "kicker": "CP",
      "title": "Art. 333",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão, de 2 (dois) a 12 (doze) anos, e multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Oferecer ou prometer vantagem indevida a funcion",
          "hook": "reclusão, de 2 (dois) a 12 (doze) anos, e multa",
          "literal": "- Oferecer ou prometer vantagem indevida a funcionário público, para determiná-lo a praticar, omitir ou retardar ato de ofício: Pena – reclusão, de 2 (dois) a 12 (doze) anos, e multa. (Redação dada pela Lei nº 10.763, de 12.11.2003)",
          "context": "CP, art. 333. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de 2 (dois) a 12 (doze) anos, e multa",
          "revoked": false
        },
        {
          "tag": "Parágrafo único",
          "name": "Oferecer ou prometer vantagem indevida a funcion",
          "hook": "reclusão, de 2 (dois) a 12 (doze) anos, e multa",
          "literal": "Parágrafo único - A pena é aumentada de um terço, se, em razão da vantagem ou promessa, o funcionário retarda ou omite ato de ofício, ou o pratica infringindo dever funcional. Descaminho",
          "context": "CP, art. 333. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de 2 (dois) a 12 (doze) anos, e multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p101-334",
      "num": "334",
      "kicker": "CP",
      "title": "Art. 334",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão, de 1 (um) a 4 (quatro) anos",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Iludir, no todo ou em parte, o pagamento de dire",
          "hook": "reclusão, de 1 (um) a 4 (quatro) anos",
          "literal": ". Iludir, no todo ou em parte, o pagamento de direito ou imposto devido pela entrada, pela saída ou pelo consumo de mercadoria (Redação dada pela Lei nº 13.008, de 26.6.2014) Pena - reclusão, de 1 (um) a 4 (quatro) anos. (Redação dada pela Lei nº 13.008, de 26.6.2014)",
          "context": "CP, art. 334. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de 1 (um) a 4 (quatro) anos",
          "revoked": false
        },
        {
          "tag": "§ 1º",
          "name": "Iludir, no todo ou em parte, o pagamento de dire",
          "hook": "reclusão, de 1 (um) a 4 (quatro) anos",
          "literal": "§ 1º Incorre na mesma pena quem: (Redação dada pela Lei nº 13.008, de 26.6.2014) I - pratica navegação de cabotagem, fora dos casos permitidos em lei; (Redação dada pela Lei nº 13.008, de 26.6.2014) II - pratica fato assimilado, em lei especial, a descaminho; (Redação dada pela Lei nº 13.008, de 26.6.2014) III - vende, expõe à venda, mantém em depósito ou, de qualquer forma, utiliza em proveito próprio ou alheio, no exercício de atividade comercial ou industrial, mercadoria de procedência estrangeira que introduziu clandestinamente no País ou importou fraudulentamente ou que sabe ser produto de introdução clandestina no território nacional ou de importação fraudulenta por parte de outrem; (Redação dada pela Lei nº 13.008, de 26.6.2014) IV - adquire, recebe ou oculta, em proveito próprio ou alheio, no exercício de atividade comercial ou industrial, mercadoria de procedência estrangeira, desacompanhada de documentação legal ou acompanhada de documentos que sabe serem falsos. (Redação dada pela Lei nº 13.008, de 26.6.2014)",
          "context": "CP, art. 334. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de 1 (um) a 4 (quatro) anos",
          "revoked": false
        },
        {
          "tag": "§ 2º",
          "name": "Iludir, no todo ou em parte, o pagamento de dire",
          "hook": "reclusão, de 1 (um) a 4 (quatro) anos",
          "literal": "§ 2º Equipara-se às atividades comerciais, para os efeitos deste artigo, qualquer forma de comércio irregular ou clandestino de mercadorias estrangeiras, inclusive o exercido em residências. (Redação dada pela Lei nº 13.008, de 26.6.2014)",
          "context": "CP, art. 334. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de 1 (um) a 4 (quatro) anos",
          "revoked": false
        },
        {
          "tag": "§ 3º",
          "name": "Iludir, no todo ou em parte, o pagamento de dire",
          "hook": "reclusão, de 1 (um) a 4 (quatro) anos",
          "literal": "§ 3º A pena aplica-se em dobro se o crime de descaminho é praticado em transporte aéreo, marítimo ou fluvial. (Redação dada pela Lei nº 13.008, de 26.6.2014) Contrabando",
          "context": "CP, art. 334. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de 1 (um) a 4 (quatro) anos",
          "revoked": false
        }
      ]
    },
    {
      "id": "p101-334A",
      "num": "334-A",
      "kicker": "CP",
      "title": "Art. 334-A",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão, de 2 (dois) a 5 ( cinco) anos",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Importar ou exportar mercadoria proibida: (Inclu",
          "hook": "reclusão, de 2 (dois) a 5 ( cinco) anos",
          "literal": ". Importar ou exportar mercadoria proibida: (Incluído pela Lei nº 13.008, de 26.6.2014) Pena - reclusão, de 2 (dois) a 5 ( cinco) anos. (Incluído pela Lei nº 13.008, de 26.6.2014)",
          "context": "CP, art. 334-A. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de 2 (dois) a 5 ( cinco) anos",
          "revoked": false
        },
        {
          "tag": "§ 1º",
          "name": "Importar ou exportar mercadoria proibida: (Inclu",
          "hook": "reclusão, de 2 (dois) a 5 ( cinco) anos",
          "literal": "§ 1º Incorre na mesma pena quem: (Incluído pela Lei nº 13.008, de 26.6.2014) I - pratica fato assimilado, em lei especial, a contrabando; (Incluído pela Lei nº 13.008, de 26.6.2014) II - importa ou exporta clandestinamente mercadoria que dependa de registro, análise ou autorização de órgão público competente; (Incluído pela Lei nº 13.008, de 26.6.2014) III - reinsere no território nacional mercadoria brasileira destinada à exportação; (Incluído pela Lei nº 13.008, de 26.6.2014) IV - vende, expõe à venda, mantém em depósito ou, de qualquer forma, utiliza em proveito próprio ou alheio, no exercício de atividade comercial ou industrial, mercadoria proibida pela lei brasileira; (Incluído pela Lei nº 13.008, de 26.6.2014) V - adquire, recebe ou oculta, em proveito próprio ou alheio, no exercício de atividade comercial ou industrial, mercadoria proibida pela lei brasileira. (Incluído pela Lei nº 13.008, de 26.6.2014)",
          "context": "CP, art. 334-A. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de 2 (dois) a 5 ( cinco) anos",
          "revoked": false
        },
        {
          "tag": "§ 2º",
          "name": "Importar ou exportar mercadoria proibida: (Inclu",
          "hook": "reclusão, de 2 (dois) a 5 ( cinco) anos",
          "literal": "§ 2º - Equipara-se às atividades comerciais, para os efeitos deste artigo, qualquer forma de comércio irregular ou clandestino de mercadorias estrangeiras, inclusive o exercido em residências. (Incluído pela Lei nº 4.729, de 14.7.1965)",
          "context": "CP, art. 334-A. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de 2 (dois) a 5 ( cinco) anos",
          "revoked": false
        },
        {
          "tag": "§ 3º",
          "name": "Importar ou exportar mercadoria proibida: (Inclu",
          "hook": "reclusão, de 2 (dois) a 5 ( cinco) anos",
          "literal": "§ 3º A pena aplica-se em dobro se o crime de contrabando é praticado em transporte aéreo, marítimo ou fluvial. (Incluído pela Lei nº 13.008, de 26.6.2014) Impedimento, perturbação ou fraude de concorrência",
          "context": "CP, art. 334-A. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de 2 (dois) a 5 ( cinco) anos",
          "revoked": false
        }
      ]
    },
    {
      "id": "p101-335",
      "num": "335",
      "kicker": "CP",
      "title": "Art. 335",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de seis meses a dois anos, ou multa, além da pena correspondente à violência",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Impedir, perturbar ou fraudar concorrência públi",
          "hook": "detenção, de seis meses a dois anos, ou multa, além da pena correspondente à violência",
          "literal": "- Impedir, perturbar ou fraudar concorrência pública ou venda em hasta pública, promovida pela administração federal, estadual ou municipal, ou por entidade paraestatal; afastar ou procurar afastar concorrente ou licitante, por meio de violência, grave ameaça, fraude ou oferecimento de vantagem: Pena - detenção, de seis meses a dois anos, ou multa, além da pena correspondente à violência.",
          "context": "CP, art. 335. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de seis meses a dois anos, ou multa, além da pena correspondente à violência",
          "revoked": false
        },
        {
          "tag": "Parágrafo único",
          "name": "Impedir, perturbar ou fraudar concorrência públi",
          "hook": "detenção, de seis meses a dois anos, ou multa, além da pena correspondente à violência",
          "literal": "Parágrafo único - Incorre na mesma pena quem se abstém de concorrer ou licitar, em razão da vantagem oferecida. Inutilização de edital ou de sinal",
          "context": "CP, art. 335. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de seis meses a dois anos, ou multa, além da pena correspondente à violência",
          "revoked": false
        }
      ]
    },
    {
      "id": "p101-336",
      "num": "336",
      "kicker": "CP",
      "title": "Art. 336",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de um mês a um ano, ou multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Rasgar ou, de qualquer forma, inutilizar ou cons",
          "hook": "detenção, de um mês a um ano, ou multa",
          "literal": "- Rasgar ou, de qualquer forma, inutilizar ou conspurcar edital afixado por ordem de funcionário público; violar ou inutilizar selo ou sinal empregado, por determinação legal ou por ordem de funcionário público, para identificar ou cerrar qualquer objeto: Pena - detenção, de um mês a um ano, ou multa. Subtração ou inutilização de livro ou documento",
          "context": "CP, art. 336. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de um mês a um ano, ou multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p101-337",
      "num": "337",
      "kicker": "CP",
      "title": "Art. 337",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão, de dois a cinco anos, se o fato não constitui crime mais grave",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Subtrair, ou inutilizar, total ou parcialmente, ",
          "hook": "reclusão, de dois a cinco anos, se o fato não constitui crime mais grave",
          "literal": "- Subtrair, ou inutilizar, total ou parcialmente, livro oficial, processo ou documento confiado à custódia de funcionário, em razão de ofício, ou de particular em serviço público: Pena - reclusão, de dois a cinco anos, se o fato não constitui crime mais grave. Sonegação de contribuição previdenciária (Incluído pela Lei nº 9.983, de 2000)",
          "context": "CP, art. 337. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de dois a cinco anos, se o fato não constitui crime mais grave",
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
      "item": "Art. 328",
      "rule": "detenção, de três meses a dois anos, e multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 329",
      "rule": "detenção, de dois meses a dois anos",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 330",
      "rule": "detenção, de quinze dias a seis meses, e multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 331",
      "rule": "detenção, de seis meses a dois anos, ou multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 332",
      "rule": "reclusão, de 2 (dois) a 5 (cinco) anos, e multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 333",
      "rule": "reclusão, de 2 (dois) a 12 (doze) anos, e multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 334",
      "rule": "reclusão, de 1 (um) a 4 (quatro) anos",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 334-A",
      "rule": "reclusão, de 2 (dois) a 5 ( cinco) anos",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 335",
      "rule": "detenção, de seis meses a dois anos, ou multa, além da pena correspondente à violência",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 336",
      "rule": "detenção, de um mês a um ano, ou multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 337",
      "rule": "reclusão, de dois a cinco anos, se o fato não constitui crime mais grave",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    }
  ],
  "compare": [
    {
      "item": "Art. 328",
      "ce": "Primeira pena: detenção, de três meses a dois anos, e multa",
      "cf": "Pena seguinte: reclusão, de dois a cinco anos, e multa",
      "effect": "separa"
    },
    {
      "item": "Art. 329",
      "ce": "Primeira pena: detenção, de dois meses a dois anos",
      "cf": "Pena seguinte: reclusão, de um a três anos",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 101011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "No texto extraído do Planalto, a pena do caput do art. 328 é detenção, de três meses a dois anos, e multa.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. A primeira frase de pena extraída do art. 328 é: detenção, de três meses a dois anos, e multa."
    },
    {
      "id": 101012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A pena do caput do art. 328, no texto extraído, é",
      "correct": "e",
      "options": [
        {
          "key": "a",
          "label": "multa apenas, sem pena privativa de liberdade, segundo alternativa inventada."
        },
        {
          "key": "b",
          "label": "o artigo está revogado e não tem pena no texto vigente."
        },
        {
          "key": "c",
          "label": "a pena do caput é de advertência, sem o texto extraído."
        },
        {
          "key": "d",
          "label": "a pena não foi escrita e pode ser completada pela banca."
        },
        {
          "key": "e",
          "label": "detenção, de três meses a dois anos, e multa."
        }
      ],
      "comentario": "Questão original, não é prova real. A frase extraída é: detenção, de três meses a dois anos, e multa. As outras alternativas não são essa frase."
    },
    {
      "id": 101013,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "No texto extraído, a pena do caput do art. 328 é a mesma do caput do art. 329.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Art. 328: detenção, de três meses a dois anos, e multa. Art. 329: detenção, de dois meses a dois anos."
    }
  ],
  "toc": [
    {
      "id": "p101-328",
      "num": "328",
      "label": "Art. 328"
    },
    {
      "id": "p101-329",
      "num": "329",
      "label": "Art. 329"
    },
    {
      "id": "p101-330",
      "num": "330",
      "label": "Art. 330"
    },
    {
      "id": "p101-331",
      "num": "331",
      "label": "Art. 331"
    },
    {
      "id": "p101-332",
      "num": "332",
      "label": "Art. 332"
    },
    {
      "id": "p101-333",
      "num": "333",
      "label": "Art. 333"
    },
    {
      "id": "p101-334",
      "num": "334",
      "label": "Art. 334"
    },
    {
      "id": "p101-334A",
      "num": "334-A",
      "label": "Art. 334-A"
    },
    {
      "id": "p101-335",
      "num": "335",
      "label": "Art. 335"
    },
    {
      "id": "p101-336",
      "num": "336",
      "label": "Art. 336"
    },
    {
      "id": "p101-337",
      "num": "337",
      "label": "Art. 337"
    }
  ],
  "clocks": [],
  "organKicker": "Recorte",
  "organTitle": "Artigos do bloco",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a pena que ele escreve. Sem fato.",
  "closing": "Conferir texto oficial se a página tiver sido atualizada depois da consulta.",
  "palette": "ember",
  "highlight": {
    "big": "11",
    "small": "artigos no recorte"
  },
  "heroLead": "Texto extraído antes do comentário. Sem pena inventada e sem fato.",
  "footerLine": "Prompt 101 · pedido 67.",
  "nextLine": "Prompt 102 · pedido 68 · Crimes contra a administração da justiça e as finanças.",
  "closingMnemonic": "Texto primeiro. Revogado não se comenta. Lacuna não se completa.",
  "rolesTitle": "Limite do bloco",
  "rolesLead": "O que a página não trouxe não entra como se tivesse sido lido.",
  "compareTitle": "Penas que o texto separou",
  "compareLead": "Primeira frase de pena não é a seguinte.",
  "compareLeft": "Primeira",
  "compareRight": "Seguinte"
};
