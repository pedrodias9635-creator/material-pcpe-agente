import type { StudyModule } from "./study";

export const PROMPT100: StudyModule = {
  "short": "Crimes funcionais seguintes",
  "eyebrow": "Prompt 100 · pedido 66 · CP",
  "title": "Crimes funcionais seguintes",
  "subtitle": "arts. 318 a 327",
  "description": "Pedido 66 do penal, gravado como Prompt 100 porque os Prompts 62 a 95 do app já são a Lei nº 14.133. Fonte: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm. Transcrição do texto extraído antes do comentário. Sem completar lacuna. O art. 328 não entra.",
  "reading": "CP. Artigos deste bloco: 318, 319, 319-A, 320, 321, 322, 323, 324, 325, 326, 327. Página consultada em 20/10/2026.",
  "terms": [
    "CP",
    "pedido 66",
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
    "O art. 319-A entra porque está no intervalo. O art. 327 define funcionário público para o efeito penal, se o texto o trouxer.",
    "O art. 328 não entra."
  ],
  "organs": [
    {
      "sigla": "318",
      "nome": "Art. 318",
      "funcao": "reclusão, de 3 (três) a 8 (oito) anos, e multa",
      "base": "Art. 318",
      "nao": "Não inventar pena.",
      "tone": "yellow"
    },
    {
      "sigla": "319",
      "nome": "Art. 319",
      "funcao": "detenção, de três meses a um ano, e multa",
      "base": "Art. 319",
      "nao": "Não inventar pena.",
      "tone": "cyan"
    },
    {
      "sigla": "319-A",
      "nome": "Art. 319-A",
      "funcao": "Texto extraído, sem pena de caput isolada.",
      "base": "Art. 319-A",
      "nao": "Não inventar pena.",
      "tone": "orange"
    },
    {
      "sigla": "320",
      "nome": "Art. 320",
      "funcao": "detenção, de quinze dias a um mês, ou multa",
      "base": "Art. 320",
      "nao": "Não inventar pena.",
      "tone": "violet"
    },
    {
      "sigla": "321",
      "nome": "Art. 321",
      "funcao": "detenção, de um a três meses, ou multa",
      "base": "Art. 321",
      "nao": "Não inventar pena.",
      "tone": "emerald"
    },
    {
      "sigla": "322",
      "nome": "Art. 322",
      "funcao": "detenção, de seis meses a três anos, além da pena correspondente à violência",
      "base": "Art. 322",
      "nao": "Não inventar pena.",
      "tone": "sky"
    }
  ],
  "swaps": [
    {
      "wrong": "A pena do art. 318 é a do art. 319.",
      "right": "Art. 318: reclusão, de 3 (três) a 8 (oito) anos, e multa. Art. 319: detenção, de três meses a um ano, e multa."
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
      "title": "66",
      "text": "Gravado como Prompt 100."
    },
    {
      "when": "Limite",
      "title": "Recorte",
      "text": "O art. 328 não entra."
    }
  ],
  "articles": [
    {
      "id": "p100-318",
      "num": "318",
      "kicker": "CP",
      "title": "Art. 318",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão, de 3 (três) a 8 (oito) anos, e multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Facilitar, com infração de dever funcional, a pr",
          "hook": "reclusão, de 3 (três) a 8 (oito) anos, e multa",
          "literal": "- Facilitar, com infração de dever funcional, a prática de contrabando ou descaminho (art. 334): Pena - reclusão, de 3 (três) a 8 (oito) anos, e multa. (Redação dada pela Lei nº 8.137, de 27.12.1990) Prevaricação",
          "context": "CP, art. 318. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de 3 (três) a 8 (oito) anos, e multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p100-319",
      "num": "319",
      "kicker": "CP",
      "title": "Art. 319",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de três meses a um ano, e multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Retardar ou deixar de praticar, indevidamente, a",
          "hook": "detenção, de três meses a um ano, e multa",
          "literal": "- Retardar ou deixar de praticar, indevidamente, ato de ofício, ou praticá-lo contra disposição expressa de lei, para satisfazer interesse ou sentimento pessoal: (Vide ADPF 881) Pena - detenção, de três meses a um ano, e multa.",
          "context": "CP, art. 319. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de três meses a um ano, e multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p100-319A",
      "num": "319-A",
      "kicker": "CP",
      "title": "Art. 319-A",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de 3 (três) meses a 1 (um) ano",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Deixar o Diretor de Penitenciária e/ou agente pú",
          "hook": "Deixar o Diretor de Penitenciária e/ou agente pú",
          "literal": ". Deixar o Diretor de Penitenciária e/ou agente público, de cumprir seu dever de vedar ao preso o acesso a aparelho telefônico, de rádio ou similar, que permita a comunicação com outros presos ou com o ambiente externo: (Incluído pela Lei nº 11.466, de 2007). Pena: detenção, de 3 (três) meses a 1 (um) ano. Condescendência criminosa",
          "context": "CP, art. 319-A. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de 3 (três) meses a 1 (um) ano",
          "revoked": false
        }
      ]
    },
    {
      "id": "p100-320",
      "num": "320",
      "kicker": "CP",
      "title": "Art. 320",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de quinze dias a um mês, ou multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Deixar o funcionário, por indulgência, de respon",
          "hook": "detenção, de quinze dias a um mês, ou multa",
          "literal": "- Deixar o funcionário, por indulgência, de responsabilizar subordinado que cometeu infração no exercício do cargo ou, quando lhe falte competência, não levar o fato ao conhecimento da autoridade competente: Pena - detenção, de quinze dias a um mês, ou multa. Advocacia administrativa",
          "context": "CP, art. 320. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de quinze dias a um mês, ou multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p100-321",
      "num": "321",
      "kicker": "CP",
      "title": "Art. 321",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de um a três meses, ou multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Patrocinar, direta ou indiretamente, interesse p",
          "hook": "detenção, de um a três meses, ou multa",
          "literal": "- Patrocinar, direta ou indiretamente, interesse privado perante a administração pública, valendo-se da qualidade de funcionário: Pena - detenção, de um a três meses, ou multa.",
          "context": "CP, art. 321. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de um a três meses, ou multa",
          "revoked": false
        },
        {
          "tag": "Parágrafo único",
          "name": "Patrocinar, direta ou indiretamente, interesse p",
          "hook": "detenção, de um a três meses, ou multa",
          "literal": "Parágrafo único - Se o interesse é ilegítimo: Pena - detenção, de três meses a um ano, além da multa. Violência arbitrária",
          "context": "CP, art. 321. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de um a três meses, ou multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p100-322",
      "num": "322",
      "kicker": "CP",
      "title": "Art. 322",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de seis meses a três anos, além da pena correspondente à violência",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Praticar violência, no exercício de função ou a ",
          "hook": "detenção, de seis meses a três anos, além da pena correspondente à violência",
          "literal": "- Praticar violência, no exercício de função ou a pretexto de exercê-la: Pena - detenção, de seis meses a três anos, além da pena correspondente à violência. Abandono de função",
          "context": "CP, art. 322. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de seis meses a três anos, além da pena correspondente à violência",
          "revoked": false
        }
      ]
    },
    {
      "id": "p100-323",
      "num": "323",
      "kicker": "CP",
      "title": "Art. 323",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de quinze dias a um mês, ou multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Abandonar cargo público, fora dos casos permitid",
          "hook": "detenção, de quinze dias a um mês, ou multa",
          "literal": "- Abandonar cargo público, fora dos casos permitidos em lei: Pena - detenção, de quinze dias a um mês, ou multa.",
          "context": "CP, art. 323. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de quinze dias a um mês, ou multa",
          "revoked": false
        },
        {
          "tag": "§ 1º",
          "name": "Abandonar cargo público, fora dos casos permitid",
          "hook": "detenção, de quinze dias a um mês, ou multa",
          "literal": "§ 1º - Se do fato resulta prejuízo público: Pena - detenção, de três meses a um ano, e multa.",
          "context": "CP, art. 323. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de quinze dias a um mês, ou multa",
          "revoked": false
        },
        {
          "tag": "§ 2º",
          "name": "Abandonar cargo público, fora dos casos permitid",
          "hook": "detenção, de quinze dias a um mês, ou multa",
          "literal": "§ 2º - Se o fato ocorre em lugar compreendido na faixa de fronteira: Pena - detenção, de um a três anos, e multa. Exercício funcional ilegalmente antecipado ou prolongado",
          "context": "CP, art. 323. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de quinze dias a um mês, ou multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p100-324",
      "num": "324",
      "kicker": "CP",
      "title": "Art. 324",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de quinze dias a um mês, ou multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Entrar no exercício de função pública antes de s",
          "hook": "detenção, de quinze dias a um mês, ou multa",
          "literal": "- Entrar no exercício de função pública antes de satisfeitas as exigências legais, ou continuar a exercê-la, sem autorização, depois de saber oficialmente que foi exonerado, removido, substituído ou suspenso: Pena - detenção, de quinze dias a um mês, ou multa. Violação de sigilo funcional",
          "context": "CP, art. 324. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de quinze dias a um mês, ou multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p100-325",
      "num": "325",
      "kicker": "CP",
      "title": "Art. 325",
      "lead": "Texto antes do comentário.",
      "plate": "detenção, de seis meses a dois anos, ou multa, se o fato não constitui crime mais grave",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Revelar fato de que tem ciência em razão do carg",
          "hook": "detenção, de seis meses a dois anos, ou multa, se o fato não constitui crime mais grave",
          "literal": "- Revelar fato de que tem ciência em razão do cargo e que deva permanecer em segredo, ou facilitar-lhe a revelação: Pena - detenção, de seis meses a dois anos, ou multa, se o fato não constitui crime mais grave.",
          "context": "CP, art. 325. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de seis meses a dois anos, ou multa, se o fato não constitui crime mais grave",
          "revoked": false
        },
        {
          "tag": "§ 1º",
          "name": "Revelar fato de que tem ciência em razão do carg",
          "hook": "detenção, de seis meses a dois anos, ou multa, se o fato não constitui crime mais grave",
          "literal": "§ 1º Nas mesmas penas deste artigo incorre quem: (Incluído pela Lei nº 9.983, de 2000) I – permite ou facilita, mediante atribuição, fornecimento e empréstimo de senha ou qualquer outra forma, o acesso de pessoas não autorizadas a sistemas de informações ou banco de dados da Administração Pública; (Incluído pela Lei nº 9.983, de 2000) II – se utiliza, indevidamente, do acesso restrito. (Incluído pela Lei nº 9.983, de 2000)",
          "context": "CP, art. 325. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de seis meses a dois anos, ou multa, se o fato não constitui crime mais grave",
          "revoked": false
        },
        {
          "tag": "§ 2º",
          "name": "Revelar fato de que tem ciência em razão do carg",
          "hook": "detenção, de seis meses a dois anos, ou multa, se o fato não constitui crime mais grave",
          "literal": "§ 2º Se da ação ou omissão resulta dano à Administração Pública ou a outrem: (Incluído pela Lei nº 9.983, de 2000) Pena – reclusão, de 2 (dois) a 6 (seis) anos, e multa. (Incluído pela Lei nº 9.983, de 2000) Violação do sigilo de proposta de concorrência",
          "context": "CP, art. 325. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "detenção, de seis meses a dois anos, ou multa, se o fato não constitui crime mais grave",
          "revoked": false
        }
      ]
    },
    {
      "id": "p100-326",
      "num": "326",
      "kicker": "CP",
      "title": "Art. 326",
      "lead": "Texto antes do comentário.",
      "plate": "Detenção, de três meses a um ano, e multa",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Devassar o sigilo de proposta de concorrência pú",
          "hook": "Detenção, de três meses a um ano, e multa",
          "literal": "- Devassar o sigilo de proposta de concorrência pública, ou proporcionar a terceiro o ensejo de devassá-lo: Pena - Detenção, de três meses a um ano, e multa. Funcionário público",
          "context": "CP, art. 326. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Detenção, de três meses a um ano, e multa",
          "revoked": false
        }
      ]
    },
    {
      "id": "p100-327",
      "num": "327",
      "kicker": "CP",
      "title": "Art. 327",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "CP",
      "devices": [
        {
          "tag": "caput",
          "name": "Considera-se funcionário público, para os efeito",
          "hook": "Considera-se funcionário público, para os efeito",
          "literal": "- Considera-se funcionário público, para os efeitos penais, quem, embora transitoriamente ou sem remuneração, exerce cargo, emprego ou função pública.",
          "context": "CP, art. 327. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§ 1º",
          "name": "Considera-se funcionário público, para os efeito",
          "hook": "Considera-se funcionário público, para os efeito",
          "literal": "§ 1º - Equipara-se a funcionário público quem exerce cargo, emprego ou função em entidade paraestatal, e quem trabalha para empresa prestadora de serviço contratada ou conveniada para a execução de atividade típica da Administração Pública. (Incluído pela Lei nº 9.983, de 2000)",
          "context": "CP, art. 327. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§ 2º",
          "name": "Considera-se funcionário público, para os efeito",
          "hook": "Considera-se funcionário público, para os efeito",
          "literal": "§ 2º - A pena será aumentada da terça parte quando os autores dos crimes previstos neste Capítulo forem ocupantes de cargos em comissão ou de função de direção ou assessoramento de órgão da administração direta, sociedade de economia mista, empresa pública ou fundação instituída pelo poder público. (Incluído pela Lei nº 6.799, de 1980)",
          "context": "CP, art. 327. Página consultada: https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
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
      "item": "Art. 318",
      "rule": "reclusão, de 3 (três) a 8 (oito) anos, e multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 319",
      "rule": "detenção, de três meses a um ano, e multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 319-A",
      "rule": "detenção, de 3 (três) meses a 1 (um) ano",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 320",
      "rule": "detenção, de quinze dias a um mês, ou multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 321",
      "rule": "detenção, de um a três meses, ou multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 322",
      "rule": "detenção, de seis meses a três anos, além da pena correspondente à violência",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 323",
      "rule": "detenção, de quinze dias a um mês, ou multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 324",
      "rule": "detenção, de quinze dias a um mês, ou multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 325",
      "rule": "detenção, de seis meses a dois anos, ou multa, se o fato não constitui crime mais grave",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 326",
      "rule": "Detenção, de três meses a um ano, e multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 327",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    }
  ],
  "compare": [
    {
      "item": "Art. 321",
      "ce": "Primeira pena: detenção, de um a três meses, ou multa",
      "cf": "Pena seguinte: detenção, de três meses a um ano, além da multa",
      "effect": "separa"
    },
    {
      "item": "Art. 323",
      "ce": "Primeira pena: detenção, de quinze dias a um mês, ou multa",
      "cf": "Pena seguinte: detenção, de três meses a um ano, e multa",
      "effect": "separa"
    },
    {
      "item": "Art. 325",
      "ce": "Primeira pena: detenção, de seis meses a dois anos, ou multa, se o fato não constitui",
      "cf": "Pena seguinte: reclusão, de 2 (dois) a 6 (seis) anos, e multa",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 100011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "No texto extraído do Planalto, a pena do caput do art. 318 é reclusão, de 3 (três) a 8 (oito) anos, e multa.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. A primeira frase de pena extraída do art. 318 é: reclusão, de 3 (três) a 8 (oito) anos, e multa."
    },
    {
      "id": 100012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A pena do caput do art. 318, no texto extraído, é",
      "correct": "a",
      "options": [
        {
          "key": "a",
          "label": "reclusão, de 3 (três) a 8 (oito) anos, e multa."
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
      "comentario": "Questão original, não é prova real. A frase extraída é: reclusão, de 3 (três) a 8 (oito) anos, e multa. As outras alternativas não são essa frase."
    },
    {
      "id": 100013,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "No texto extraído, a pena do caput do art. 318 é a mesma do caput do art. 319.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Art. 318: reclusão, de 3 (três) a 8 (oito) anos, e multa. Art. 319: detenção, de três meses a um ano, e multa."
    }
  ],
  "toc": [
    {
      "id": "p100-318",
      "num": "318",
      "label": "Art. 318"
    },
    {
      "id": "p100-319",
      "num": "319",
      "label": "Art. 319"
    },
    {
      "id": "p100-319A",
      "num": "319-A",
      "label": "Art. 319-A"
    },
    {
      "id": "p100-320",
      "num": "320",
      "label": "Art. 320"
    },
    {
      "id": "p100-321",
      "num": "321",
      "label": "Art. 321"
    },
    {
      "id": "p100-322",
      "num": "322",
      "label": "Art. 322"
    },
    {
      "id": "p100-323",
      "num": "323",
      "label": "Art. 323"
    },
    {
      "id": "p100-324",
      "num": "324",
      "label": "Art. 324"
    },
    {
      "id": "p100-325",
      "num": "325",
      "label": "Art. 325"
    },
    {
      "id": "p100-326",
      "num": "326",
      "label": "Art. 326"
    },
    {
      "id": "p100-327",
      "num": "327",
      "label": "Art. 327"
    }
  ],
  "clocks": [],
  "organKicker": "Recorte",
  "organTitle": "Artigos do bloco",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a pena que ele escreve. Sem fato.",
  "closing": "Conferir texto oficial se a página tiver sido atualizada depois da consulta.",
  "palette": "leaf",
  "highlight": {
    "big": "11",
    "small": "artigos no recorte"
  },
  "heroLead": "Texto extraído antes do comentário. Sem pena inventada e sem fato.",
  "footerLine": "Prompt 100 · pedido 66.",
  "nextLine": "Prompt 101 · pedido 67 · Usurpação e desobediência.",
  "closingMnemonic": "Texto primeiro. Revogado não se comenta. Lacuna não se completa.",
  "rolesTitle": "Limite do bloco",
  "rolesLead": "O que a página não trouxe não entra como se tivesse sido lido.",
  "compareTitle": "Penas que o texto separou",
  "compareLead": "Primeira frase de pena não é a seguinte.",
  "compareLeft": "Primeira",
  "compareRight": "Seguinte"
};
