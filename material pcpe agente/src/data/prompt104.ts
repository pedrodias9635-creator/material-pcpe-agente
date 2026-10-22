import type { StudyModule } from "./study";

export const PROMPT104: StudyModule = {
  "short": "Racismo",
  "eyebrow": "Prompt 104 · pedido 70 · Lei nº 7.716/1989",
  "title": "Racismo",
  "subtitle": "Lei nº 7.716/1989",
  "description": "Pedido 70 do penal, gravado como Prompt 104 porque os Prompts 62 a 95 do app já são a Lei nº 14.133. Fonte: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm. Transcrição do texto extraído antes do comentário. Sem completar lacuna. Arts. 21 e 22, de vigência, ficam fora do núcleo.",
  "reading": "Lei nº 7.716/1989. Artigos deste bloco: 1, 2, 2-A, 3, 4, 5, 6, 7, 8, 9, 10, 11…. Página consultada em 20/10/2026.",
  "terms": [
    "Lei nº 7.716/1989",
    "pedido 70",
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
    "Art. 2 está vetado no texto extraído.",
    "Art. 15 está vetado no texto extraído.",
    "Art. 17 está vetado no texto extraído.",
    "Art. 19 está vetado no texto extraído.",
    "O art. 2º-A entra se a página o tiver. A Lei nº 14.532/2023 só é citada se o texto da página a nomear.",
    "Artigo vetado não é reconstituído."
  ],
  "organs": [
    {
      "sigla": "1",
      "nome": "Art. 1",
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
      "sigla": "2-A",
      "nome": "Art. 2-A",
      "funcao": "Texto extraído, sem pena de caput isolada.",
      "base": "Art. 2-A",
      "nao": "Não inventar pena.",
      "tone": "orange"
    },
    {
      "sigla": "3",
      "nome": "Art. 3",
      "funcao": "Texto extraído, sem pena de caput isolada.",
      "base": "Art. 3",
      "nao": "Não inventar pena.",
      "tone": "violet"
    },
    {
      "sigla": "4",
      "nome": "Art. 4",
      "funcao": "Texto extraído, sem pena de caput isolada.",
      "base": "Art. 4",
      "nao": "Não inventar pena.",
      "tone": "emerald"
    },
    {
      "sigla": "5",
      "nome": "Art. 5",
      "funcao": "Texto extraído, sem pena de caput isolada.",
      "base": "Art. 5",
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
      "text": "https://www.planalto.gov.br/ccivil_03/leis/l7716.htm"
    },
    {
      "when": "Pedido",
      "title": "70",
      "text": "Gravado como Prompt 104."
    },
    {
      "when": "Limite",
      "title": "Recorte",
      "text": "Arts. 21 e 22, de vigência, ficam fora do núcleo."
    }
  ],
  "articles": [
    {
      "id": "p104-1",
      "num": "1",
      "kicker": "Lei nº 7.716/1989",
      "title": "Art. 1",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 7.716/1989",
      "devices": [
        {
          "tag": "caput",
          "name": "Serão punidos, na forma desta Lei, os crimes res",
          "hook": "Serão punidos, na forma desta Lei, os crimes res",
          "literal": "Serão punidos, na forma desta Lei, os crimes resultantes de discriminação ou preconceito de raça, cor, etnia, religião ou procedência nacional. (Redação dada pela Lei nº 9.459, de 15/05/97)",
          "context": "Lei nº 7.716/1989, art. 1. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p104-2",
      "num": "2",
      "kicker": "Lei nº 7.716/1989",
      "title": "Art. 2",
      "lead": "Texto antes do comentário.",
      "plate": "Vetado",
      "plateSource": "Lei nº 7.716/1989",
      "devices": [
        {
          "tag": "texto",
          "name": "Vetado",
          "hook": "Vetado",
          "literal": "(Vetado).",
          "context": "Lei nº 7.716/1989, art. 2. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "Vetado no texto extraído. Não se reconstitui o conteúdo vetado.",
          "trap": "Veto não vira tipo.",
          "example": "Sem exemplo.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p104-2A",
      "num": "2-A",
      "kicker": "Lei nº 7.716/1989",
      "title": "Art. 2-A",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão, de 2 (dois) a 5 (cinco) anos, e multa",
      "plateSource": "Lei nº 7.716/1989",
      "devices": [
        {
          "tag": "caput",
          "name": "Injuriar alguém, ofendendo-lhe a dignidade ou o ",
          "hook": "Injuriar alguém, ofendendo-lhe a dignidade ou o ",
          "literal": "Injuriar alguém, ofendendo-lhe a dignidade ou o decoro, em razão de raça, cor, etnia ou procedência nacional. (Incluído pela Lei nº 14.532, de 2023) Pena: reclusão, de 2 (dois) a 5 (cinco) anos, e multa. (Incluído pela Lei nº 14.532, de 2023)",
          "context": "Lei nº 7.716/1989, art. 2-A. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão, de 2 (dois) a 5 (cinco) anos, e multa",
          "revoked": false
        },
        {
          "tag": "Parágrafo único",
          "name": "Injuriar alguém, ofendendo-lhe a dignidade ou o ",
          "hook": "Injuriar alguém, ofendendo-lhe a dignidade ou o ",
          "literal": "Parágrafo único. A pena é aumentada de metade se o crime for cometido mediante concurso de 2 (duas) ou mais pessoas. (Incluído pela Lei nº 14.532, de 2023)",
          "context": "Lei nº 7.716/1989, art. 2-A. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p104-3",
      "num": "3",
      "kicker": "Lei nº 7.716/1989",
      "title": "Art. 3",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão de dois a cinco anos",
      "plateSource": "Lei nº 7.716/1989",
      "devices": [
        {
          "tag": "caput",
          "name": "Impedir ou obstar o acesso de alguém, devidament",
          "hook": "Impedir ou obstar o acesso de alguém, devidament",
          "literal": "Impedir ou obstar o acesso de alguém, devidamente habilitado, a qualquer cargo da Administração Direta ou Indireta, bem como das concessionárias de serviços públicos. Pena: reclusão de dois a cinco anos.",
          "context": "Lei nº 7.716/1989, art. 3. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão de dois a cinco anos",
          "revoked": false
        },
        {
          "tag": "Parágrafo único",
          "name": "Impedir ou obstar o acesso de alguém, devidament",
          "hook": "Impedir ou obstar o acesso de alguém, devidament",
          "literal": "Parágrafo único. Incorre na mesma pena quem, por motivo de discriminação de raça, cor, etnia, religião ou procedência nacional, obstar a promoção funcional. (Incluído pela Lei nº 12.288, de 2010) (Vigência)",
          "context": "Lei nº 7.716/1989, art. 3. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p104-4",
      "num": "4",
      "kicker": "Lei nº 7.716/1989",
      "title": "Art. 4",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão de dois a cinco anos",
      "plateSource": "Lei nº 7.716/1989",
      "devices": [
        {
          "tag": "caput",
          "name": "Negar ou obstar emprego em empresa privada. Pena",
          "hook": "Negar ou obstar emprego em empresa privada. Pena",
          "literal": "Negar ou obstar emprego em empresa privada. Pena: reclusão de dois a cinco anos.",
          "context": "Lei nº 7.716/1989, art. 4. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão de dois a cinco anos",
          "revoked": false
        },
        {
          "tag": "§ 1º",
          "name": "Negar ou obstar emprego em empresa privada. Pena",
          "hook": "Negar ou obstar emprego em empresa privada. Pena",
          "literal": "§ 1º Incorre na mesma pena quem, por motivo de discriminação de raça ou de cor ou práticas resultantes do preconceito de descendência ou origem nacional ou étnica: (Incluído pela Lei nº 12.288, de 2010) (Vigência) I - deixar de conceder os equipamentos necessários ao empregado em igualdade de condições com os demais trabalhadores; (Incluído pela Lei nº 12.288, de 2010) (Vigência) II - impedir a ascensão funcional do empregado ou obstar outra forma de benefício profissional; (Incluído pela Lei nº 12.288, de 2010) (Vigência) III - proporcionar ao empregado tratamento diferenciado no ambiente de trabalho, especialmente quanto ao salário. (Incluído pela Lei nº 12.288, de 2010) (Vigência)",
          "context": "Lei nº 7.716/1989, art. 4. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§ 2º",
          "name": "Negar ou obstar emprego em empresa privada. Pena",
          "hook": "Negar ou obstar emprego em empresa privada. Pena",
          "literal": "§ 2º Ficará sujeito às penas de multa e de prestação de serviços à comunidade, incluindo atividades de promoção da igualdade racial, quem, em anúncios ou qualquer outra forma de recrutamento de trabalhadores, exigir aspectos de aparência próprios de raça ou etnia para emprego cujas atividades não justifiquem essas exigências. (Incluído pela Lei nº 12.288, de 2010) (Vigência)",
          "context": "Lei nº 7.716/1989, art. 4. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p104-5",
      "num": "5",
      "kicker": "Lei nº 7.716/1989",
      "title": "Art. 5",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão de um a três anos",
      "plateSource": "Lei nº 7.716/1989",
      "devices": [
        {
          "tag": "caput",
          "name": "Recusar ou impedir acesso a estabelecimento come",
          "hook": "Recusar ou impedir acesso a estabelecimento come",
          "literal": "Recusar ou impedir acesso a estabelecimento comercial, negando-se a servir, atender ou receber cliente ou comprador. Pena: reclusão de um a três anos.",
          "context": "Lei nº 7.716/1989, art. 5. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão de um a três anos",
          "revoked": false
        }
      ]
    },
    {
      "id": "p104-6",
      "num": "6",
      "kicker": "Lei nº 7.716/1989",
      "title": "Art. 6",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão de três a cinco anos",
      "plateSource": "Lei nº 7.716/1989",
      "devices": [
        {
          "tag": "caput",
          "name": "Recusar, negar ou impedir a inscrição ou ingress",
          "hook": "Recusar, negar ou impedir a inscrição ou ingress",
          "literal": "Recusar, negar ou impedir a inscrição ou ingresso de aluno em estabelecimento de ensino público ou privado de qualquer grau. Pena: reclusão de três a cinco anos.",
          "context": "Lei nº 7.716/1989, art. 6. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão de três a cinco anos",
          "revoked": false
        },
        {
          "tag": "Parágrafo único",
          "name": "Recusar, negar ou impedir a inscrição ou ingress",
          "hook": "Recusar, negar ou impedir a inscrição ou ingress",
          "literal": "Parágrafo único. Se o crime for praticado contra menor de dezoito anos a pena é agravada de 1/3 (um terço).",
          "context": "Lei nº 7.716/1989, art. 6. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p104-7",
      "num": "7",
      "kicker": "Lei nº 7.716/1989",
      "title": "Art. 7",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão de três a cinco anos",
      "plateSource": "Lei nº 7.716/1989",
      "devices": [
        {
          "tag": "caput",
          "name": "Impedir o acesso ou recusar hospedagem em hotel,",
          "hook": "Impedir o acesso ou recusar hospedagem em hotel,",
          "literal": "Impedir o acesso ou recusar hospedagem em hotel, pensão, estalagem, ou qualquer estabelecimento similar. Pena: reclusão de três a cinco anos.",
          "context": "Lei nº 7.716/1989, art. 7. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão de três a cinco anos",
          "revoked": false
        }
      ]
    },
    {
      "id": "p104-8",
      "num": "8",
      "kicker": "Lei nº 7.716/1989",
      "title": "Art. 8",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão de um a três anos",
      "plateSource": "Lei nº 7.716/1989",
      "devices": [
        {
          "tag": "caput",
          "name": "Impedir o acesso ou recusar atendimento em resta",
          "hook": "Impedir o acesso ou recusar atendimento em resta",
          "literal": "Impedir o acesso ou recusar atendimento em restaurantes, bares, confeitarias, ou locais semelhantes abertos ao público. Pena: reclusão de um a três anos.",
          "context": "Lei nº 7.716/1989, art. 8. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão de um a três anos",
          "revoked": false
        }
      ]
    },
    {
      "id": "p104-9",
      "num": "9",
      "kicker": "Lei nº 7.716/1989",
      "title": "Art. 9",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão de um a três anos",
      "plateSource": "Lei nº 7.716/1989",
      "devices": [
        {
          "tag": "caput",
          "name": "Impedir o acesso ou recusar atendimento em estab",
          "hook": "Impedir o acesso ou recusar atendimento em estab",
          "literal": "Impedir o acesso ou recusar atendimento em estabelecimentos esportivos, casas de diversões, ou clubes sociais abertos ao público. Pena: reclusão de um a três anos.",
          "context": "Lei nº 7.716/1989, art. 9. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão de um a três anos",
          "revoked": false
        }
      ]
    },
    {
      "id": "p104-10",
      "num": "10",
      "kicker": "Lei nº 7.716/1989",
      "title": "Art. 10",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão de um a três anos",
      "plateSource": "Lei nº 7.716/1989",
      "devices": [
        {
          "tag": "caput",
          "name": "Impedir o acesso ou recusar atendimento em salõe",
          "hook": "Impedir o acesso ou recusar atendimento em salõe",
          "literal": ". Impedir o acesso ou recusar atendimento em salões de cabeleireiros, barbearias, termas ou casas de massagem ou estabelecimento com as mesmas finalidades. Pena: reclusão de um a três anos.",
          "context": "Lei nº 7.716/1989, art. 10. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão de um a três anos",
          "revoked": false
        }
      ]
    },
    {
      "id": "p104-11",
      "num": "11",
      "kicker": "Lei nº 7.716/1989",
      "title": "Art. 11",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão de um a três anos",
      "plateSource": "Lei nº 7.716/1989",
      "devices": [
        {
          "tag": "caput",
          "name": "Impedir o acesso às entradas sociais em edifício",
          "hook": "Impedir o acesso às entradas sociais em edifício",
          "literal": ". Impedir o acesso às entradas sociais em edifícios públicos ou residenciais e elevadores ou escada de acesso aos mesmos: Pena: reclusão de um a três anos.",
          "context": "Lei nº 7.716/1989, art. 11. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão de um a três anos",
          "revoked": false
        }
      ]
    },
    {
      "id": "p104-12",
      "num": "12",
      "kicker": "Lei nº 7.716/1989",
      "title": "Art. 12",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão de um a três anos",
      "plateSource": "Lei nº 7.716/1989",
      "devices": [
        {
          "tag": "caput",
          "name": "Impedir o acesso ou uso de transportes públicos,",
          "hook": "Impedir o acesso ou uso de transportes públicos,",
          "literal": ". Impedir o acesso ou uso de transportes públicos, como aviões, navios barcas, barcos, ônibus, trens, metrô ou qualquer outro meio de transporte concedido. Pena: reclusão de um a três anos.",
          "context": "Lei nº 7.716/1989, art. 12. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão de um a três anos",
          "revoked": false
        }
      ]
    },
    {
      "id": "p104-13",
      "num": "13",
      "kicker": "Lei nº 7.716/1989",
      "title": "Art. 13",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão de dois a quatro anos",
      "plateSource": "Lei nº 7.716/1989",
      "devices": [
        {
          "tag": "caput",
          "name": "Impedir ou obstar o acesso de alguém ao serviço ",
          "hook": "Impedir ou obstar o acesso de alguém ao serviço ",
          "literal": ". Impedir ou obstar o acesso de alguém ao serviço em qualquer ramo das Forças Armadas. Pena: reclusão de dois a quatro anos.",
          "context": "Lei nº 7.716/1989, art. 13. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão de dois a quatro anos",
          "revoked": false
        }
      ]
    },
    {
      "id": "p104-14",
      "num": "14",
      "kicker": "Lei nº 7.716/1989",
      "title": "Art. 14",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão de dois a quatro anos",
      "plateSource": "Lei nº 7.716/1989",
      "devices": [
        {
          "tag": "caput",
          "name": "Impedir ou obstar, por qualquer meio ou forma, o",
          "hook": "Impedir ou obstar, por qualquer meio ou forma, o",
          "literal": ". Impedir ou obstar, por qualquer meio ou forma, o casamento ou convivência familiar e social. Pena: reclusão de dois a quatro anos.",
          "context": "Lei nº 7.716/1989, art. 14. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão de dois a quatro anos",
          "revoked": false
        }
      ]
    },
    {
      "id": "p104-15",
      "num": "15",
      "kicker": "Lei nº 7.716/1989",
      "title": "Art. 15",
      "lead": "Texto antes do comentário.",
      "plate": "Vetado",
      "plateSource": "Lei nº 7.716/1989",
      "devices": [
        {
          "tag": "texto",
          "name": "Vetado",
          "hook": "Vetado",
          "literal": ". (Vetado).",
          "context": "Lei nº 7.716/1989, art. 15. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "Vetado no texto extraído. Não se reconstitui o conteúdo vetado.",
          "trap": "Veto não vira tipo.",
          "example": "Sem exemplo.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p104-16",
      "num": "16",
      "kicker": "Lei nº 7.716/1989",
      "title": "Art. 16",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 7.716/1989",
      "devices": [
        {
          "tag": "caput",
          "name": "Constitui efeito da condenação a perda do cargo ",
          "hook": "Constitui efeito da condenação a perda do cargo ",
          "literal": ". Constitui efeito da condenação a perda do cargo ou função pública, para o servidor público, e a suspensão do funcionamento do estabelecimento particular por prazo não superior a três meses.",
          "context": "Lei nº 7.716/1989, art. 16. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p104-17",
      "num": "17",
      "kicker": "Lei nº 7.716/1989",
      "title": "Art. 17",
      "lead": "Texto antes do comentário.",
      "plate": "Vetado",
      "plateSource": "Lei nº 7.716/1989",
      "devices": [
        {
          "tag": "texto",
          "name": "Vetado",
          "hook": "Vetado",
          "literal": ". (Vetado).",
          "context": "Lei nº 7.716/1989, art. 17. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "Vetado no texto extraído. Não se reconstitui o conteúdo vetado.",
          "trap": "Veto não vira tipo.",
          "example": "Sem exemplo.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p104-18",
      "num": "18",
      "kicker": "Lei nº 7.716/1989",
      "title": "Art. 18",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 7.716/1989",
      "devices": [
        {
          "tag": "caput",
          "name": "Os efeitos de que tratam os arts. 16 e 17 desta ",
          "hook": "Os efeitos de que tratam os arts. 16 e 17 desta ",
          "literal": ". Os efeitos de que tratam os arts. 16 e 17 desta Lei não são automáticos, devendo ser motivadamente declarados na sentença.",
          "context": "Lei nº 7.716/1989, art. 18. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p104-19",
      "num": "19",
      "kicker": "Lei nº 7.716/1989",
      "title": "Art. 19",
      "lead": "Texto antes do comentário.",
      "plate": "Vetado",
      "plateSource": "Lei nº 7.716/1989",
      "devices": [
        {
          "tag": "texto",
          "name": "Vetado",
          "hook": "Vetado",
          "literal": ". (Vetado).",
          "context": "Lei nº 7.716/1989, art. 19. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "Vetado no texto extraído. Não se reconstitui o conteúdo vetado.",
          "trap": "Veto não vira tipo.",
          "example": "Sem exemplo.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p104-20",
      "num": "20",
      "kicker": "Lei nº 7.716/1989",
      "title": "Art. 20",
      "lead": "Texto antes do comentário.",
      "plate": "reclusão de um a três anos e multa",
      "plateSource": "Lei nº 7.716/1989",
      "devices": [
        {
          "tag": "caput",
          "name": "Praticar, induzir ou incitar a discriminação ou ",
          "hook": "Praticar, induzir ou incitar a discriminação ou ",
          "literal": ". Praticar, induzir ou incitar a discriminação ou preconceito de raça, cor, etnia, religião ou procedência nacional. ( Redação dada pela Lei nº 9.459, de 15/05/97 ) Pena: reclusão de um a três anos e multa. (Redação dada pela Lei nº 9.459, de 15/05/97)",
          "context": "Lei nº 7.716/1989, art. 20. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "reclusão de um a três anos e multa",
          "revoked": false
        },
        {
          "tag": "§ 1º",
          "name": "Praticar, induzir ou incitar a discriminação ou ",
          "hook": "Praticar, induzir ou incitar a discriminação ou ",
          "literal": "§ 1º Fabricar, comercializar, distribuir ou veicular símbolos, emblemas, ornamentos, distintivos ou propaganda que utilizem a cruz suástica ou gamada, para fins de divulgação do nazismo. (Redação dada pela Lei nº 9.459, de 15/05/97) Pena: reclusão de dois a cinco anos e multa. (Incluído pela Lei nº 9.459, de 15/05/97)",
          "context": "Lei nº 7.716/1989, art. 20. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§ 2º",
          "name": "Praticar, induzir ou incitar a discriminação ou ",
          "hook": "Praticar, induzir ou incitar a discriminação ou ",
          "literal": "§ 2º Se qualquer dos crimes previstos neste artigo for cometido por intermédio dos meios de comunicação social, de publicação em redes sociais, da rede mundial de computadores ou de publicação de qualquer natureza: (Redação dada pela Lei nº 14.532, de 2023) Pena: reclusão de dois a cinco anos e multa. (Incluído pela Lei nº 9.459, de 15/05/97)",
          "context": "Lei nº 7.716/1989, art. 20. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§ 2º",
          "name": "Praticar, induzir ou incitar a discriminação ou ",
          "hook": "Praticar, induzir ou incitar a discriminação ou ",
          "literal": "§ 2º-A Se qualquer dos crimes previstos neste artigo for cometido no contexto de atividades esportivas, religiosas, artísticas ou culturais destinadas ao público: (Incluído pela Lei nº 14.532, de 2023) Pena: reclusão, de 2 (dois) a 5 (cinco) anos, e proibição de frequência, por 3 (três) anos, a locais destinados a práticas esportivas, artísticas ou culturais destinadas ao público, conforme o caso. (Incluído pela Lei nº 14.532, de 2023)",
          "context": "Lei nº 7.716/1989, art. 20. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§ 2º",
          "name": "Praticar, induzir ou incitar a discriminação ou ",
          "hook": "Praticar, induzir ou incitar a discriminação ou ",
          "literal": "§ 2º-B Sem prejuízo da pena correspondente à violência, incorre nas mesmas penas previstas no caput deste artigo quem obstar, impedir ou empregar violência contra quaisquer manifestações ou práticas religiosas. (Incluído pela Lei nº 14.532, de 2023)",
          "context": "Lei nº 7.716/1989, art. 20. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§ 3º",
          "name": "Praticar, induzir ou incitar a discriminação ou ",
          "hook": "Praticar, induzir ou incitar a discriminação ou ",
          "literal": "§ 3º No caso do",
          "context": "Lei nº 7.716/1989, art. 20. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§ 2º",
          "name": "Praticar, induzir ou incitar a discriminação ou ",
          "hook": "Praticar, induzir ou incitar a discriminação ou ",
          "literal": "§ 2º deste artigo, o juiz poderá determinar, ouvido o Ministério Público ou a pedido deste, ainda antes do inquérito policial, sob pena de desobediência: (Redação dada pela Lei nº 14.532, de 2023) I - o recolhimento imediato ou a busca e apreensão dos exemplares do material respectivo; (Incluído pela Lei nº 9.459, de 15/05/97) (Incluído pela Lei nº 9.459, de 15/05/97) II - a cessação das respectivas transmissões radiofônicas, televisivas, eletrônicas ou da publicação por qualquer meio; (Redação dada pela Lei nº 12.735, de 2012) (Vigência) III - a interdição das respectivas mensagens ou páginas de informação na rede mundial de computadores. (Incluído pela Lei nº 12.288, de 2010) (Vigência)",
          "context": "Lei nº 7.716/1989, art. 20. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§ 4º",
          "name": "Praticar, induzir ou incitar a discriminação ou ",
          "hook": "Praticar, induzir ou incitar a discriminação ou ",
          "literal": "§ 4º Na hipótese do",
          "context": "Lei nº 7.716/1989, art. 20. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        },
        {
          "tag": "§ 2º",
          "name": "Praticar, induzir ou incitar a discriminação ou ",
          "hook": "Praticar, induzir ou incitar a discriminação ou ",
          "literal": "§ 2º, constitui efeito da condenação, após o trânsito em julgado da decisão, a destruição do material apreendido. (Incluído pela Lei nº 9.459, de 15/05/97)",
          "context": "Lei nº 7.716/1989, art. 20. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p104-20A",
      "num": "20-A",
      "kicker": "Lei nº 7.716/1989",
      "title": "Art. 20-A",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 7.716/1989",
      "devices": [
        {
          "tag": "caput",
          "name": "Os crimes previstos nesta Lei terão as penas aum",
          "hook": "Os crimes previstos nesta Lei terão as penas aum",
          "literal": ". Os crimes previstos nesta Lei terão as penas aumentadas de 1/3 (um terço) até a metade, quando ocorrerem em contexto ou com intuito de descontração, diversão ou recreação. (Incluído pela Lei nº 14.532, de 2023)",
          "context": "Lei nº 7.716/1989, art. 20-A. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p104-20B",
      "num": "20-B",
      "kicker": "Lei nº 7.716/1989",
      "title": "Art. 20-B",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 7.716/1989",
      "devices": [
        {
          "tag": "caput",
          "name": "Os crimes previstos nos arts. 2º-A e 20 desta Le",
          "hook": "Os crimes previstos nos arts. 2º-A e 20 desta Le",
          "literal": ". Os crimes previstos nos arts. 2º-A e 20 desta Lei terão as penas aumentadas de 1/3 (um terço) até a metade, quando praticados por funcionário público, conforme definição prevista no Decreto-Lei nº 2.848, de 7 de dezembro de 1940 (Código Penal), no exercício de suas funções ou a pretexto de exercê-las. (Incluído pela Lei nº 14.532, de 2023)",
          "context": "Lei nº 7.716/1989, art. 20-B. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p104-20C",
      "num": "20-C",
      "kicker": "Lei nº 7.716/1989",
      "title": "Art. 20-C",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 7.716/1989",
      "devices": [
        {
          "tag": "caput",
          "name": "Na interpretação desta Lei, o juiz deve consider",
          "hook": "Na interpretação desta Lei, o juiz deve consider",
          "literal": ". Na interpretação desta Lei, o juiz deve considerar como discriminatória qualquer atitude ou tratamento dado à pessoa ou a grupos minoritários que cause constrangimento, humilhação, vergonha, medo ou exposição indevida, e que usualmente não se dispensaria a outros grupos em razão da cor, etnia, religião ou procedência. (Incluído pela Lei nº 14.532, de 2023)",
          "context": "Lei nº 7.716/1989, art. 20-C. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
          "exam": "A regra é a do texto. Não se inventa prazo, percentual ou pena.",
          "trap": "Não importe regra de outro artigo nem complete lacuna.",
          "example": "Sem roteiro. O exemplo fica na classificação do ato que o texto nomeia.",
          "mnemonic": "Sem pena inventada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p104-20D",
      "num": "20-D",
      "kicker": "Lei nº 7.716/1989",
      "title": "Art. 20-D",
      "lead": "Texto antes do comentário.",
      "plate": "Sem pena no caput",
      "plateSource": "Lei nº 7.716/1989",
      "devices": [
        {
          "tag": "caput",
          "name": "Em todos os atos processuais, cíveis e criminais",
          "hook": "Em todos os atos processuais, cíveis e criminais",
          "literal": ". Em todos os atos processuais, cíveis e criminais, a vítima dos crimes de racismo deverá estar acompanhada de advogado ou defensor público. (Incluído pela Lei nº 14.532, de 2023)",
          "context": "Lei nº 7.716/1989, art. 20-D. Página consultada: https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
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
      "source": "Lei nº 7.716/1989",
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
  "rolePlateSource": "Lei nº 7.716/1989",
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
      "item": "Art. 2-A",
      "rule": "reclusão, de 2 (dois) a 5 (cinco) anos, e multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 3",
      "rule": "reclusão de dois a cinco anos",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 4",
      "rule": "reclusão de dois a cinco anos",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 5",
      "rule": "reclusão de um a três anos",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 6",
      "rule": "reclusão de três a cinco anos",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 7",
      "rule": "reclusão de três a cinco anos",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 8",
      "rule": "reclusão de um a três anos",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 9",
      "rule": "reclusão de um a três anos",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 10",
      "rule": "reclusão de um a três anos",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 11",
      "rule": "reclusão de um a três anos",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 12",
      "rule": "reclusão de um a três anos",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 13",
      "rule": "reclusão de dois a quatro anos",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 14",
      "rule": "reclusão de dois a quatro anos",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
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
      "rule": "reclusão de um a três anos e multa",
      "clue": "Pena do primeiro período extraído. Não trocar com parágrafo."
    },
    {
      "item": "Art. 20-A",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 20-B",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 20-C",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    },
    {
      "item": "Art. 20-D",
      "rule": "Texto extraído, sem pena de caput isolada.",
      "clue": "Não inventar pena."
    }
  ],
  "compare": [
    {
      "item": "Recorte",
      "ce": "25 artigo(s) localizado(s).",
      "cf": "Artigo de fora não entra.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 104011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "No texto extraído, o art. 1 inicia com: Serão punidos, na forma desta Lei, os crimes resultantes de discriminação ou preconceito de raça, cor, etnia, religião o",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. A alternativa repete o início extraído. Não acrescenta pena."
    },
    {
      "id": 104012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A pena do caput do art. 2-A, no texto extraído, é",
      "correct": "c",
      "options": [
        {
          "key": "a",
          "label": "apenas advertência, porque o caput não escreveu pena."
        },
        {
          "key": "b",
          "label": "a que a banca completar, porque o texto veio cortado."
        },
        {
          "key": "c",
          "label": "reclusão, de 2 (dois) a 5 (cinco) anos, e multa."
        },
        {
          "key": "d",
          "label": "multa isolada, sem a pena privativa escrita no caput."
        },
        {
          "key": "e",
          "label": "inexistente, porque o artigo está revogado."
        }
      ],
      "comentario": "Questão original, não é prova real. A frase de pena extraída do caput é: reclusão, de 2 (dois) a 5 (cinco) anos, e multa."
    },
    {
      "id": 104013,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Pena, qualificadora, aumento, súmula e prazo que o texto extraído não escreve podem ser completados pelo comentário.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. O que não está no texto extraído fica como conferir texto oficial. Não se inventa número."
    }
  ],
  "toc": [
    {
      "id": "p104-1",
      "num": "1",
      "label": "Art. 1"
    },
    {
      "id": "p104-2",
      "num": "2",
      "label": "Art. 2"
    },
    {
      "id": "p104-2A",
      "num": "2-A",
      "label": "Art. 2-A"
    },
    {
      "id": "p104-3",
      "num": "3",
      "label": "Art. 3"
    },
    {
      "id": "p104-4",
      "num": "4",
      "label": "Art. 4"
    },
    {
      "id": "p104-5",
      "num": "5",
      "label": "Art. 5"
    },
    {
      "id": "p104-6",
      "num": "6",
      "label": "Art. 6"
    },
    {
      "id": "p104-7",
      "num": "7",
      "label": "Art. 7"
    },
    {
      "id": "p104-8",
      "num": "8",
      "label": "Art. 8"
    },
    {
      "id": "p104-9",
      "num": "9",
      "label": "Art. 9"
    },
    {
      "id": "p104-10",
      "num": "10",
      "label": "Art. 10"
    },
    {
      "id": "p104-11",
      "num": "11",
      "label": "Art. 11"
    },
    {
      "id": "p104-12",
      "num": "12",
      "label": "Art. 12"
    },
    {
      "id": "p104-13",
      "num": "13",
      "label": "Art. 13"
    },
    {
      "id": "p104-14",
      "num": "14",
      "label": "Art. 14"
    },
    {
      "id": "p104-15",
      "num": "15",
      "label": "Art. 15"
    },
    {
      "id": "p104-16",
      "num": "16",
      "label": "Art. 16"
    },
    {
      "id": "p104-17",
      "num": "17",
      "label": "Art. 17"
    },
    {
      "id": "p104-18",
      "num": "18",
      "label": "Art. 18"
    },
    {
      "id": "p104-19",
      "num": "19",
      "label": "Art. 19"
    },
    {
      "id": "p104-20",
      "num": "20",
      "label": "Art. 20"
    },
    {
      "id": "p104-20A",
      "num": "20-A",
      "label": "Art. 20-A"
    },
    {
      "id": "p104-20B",
      "num": "20-B",
      "label": "Art. 20-B"
    },
    {
      "id": "p104-20C",
      "num": "20-C",
      "label": "Art. 20-C"
    },
    {
      "id": "p104-20D",
      "num": "20-D",
      "label": "Art. 20-D"
    }
  ],
  "clocks": [],
  "organKicker": "Recorte",
  "organTitle": "Artigos do bloco",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a pena que ele escreve. Sem fato.",
  "closing": "Conferir texto oficial se a página tiver sido atualizada depois da consulta.",
  "palette": "rose",
  "highlight": {
    "big": "25",
    "small": "artigos no recorte"
  },
  "heroLead": "Texto extraído antes do comentário. Sem pena inventada e sem fato.",
  "footerLine": "Prompt 104 · pedido 70.",
  "nextLine": "Prompt 105 · pedido 71 · Abuso de autoridade, primeira parte.",
  "closingMnemonic": "Texto primeiro. Revogado não se comenta. Lacuna não se completa.",
  "rolesTitle": "Limite do bloco",
  "rolesLead": "O que a página não trouxe não entra como se tivesse sido lido.",
  "compareTitle": "Penas que o texto separou",
  "compareLead": "Primeira frase de pena não é a seguinte.",
  "compareLeft": "Primeira",
  "compareRight": "Seguinte"
};
