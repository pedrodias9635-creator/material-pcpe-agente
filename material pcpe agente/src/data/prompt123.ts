import type { StudyModule } from "./study";

export const PROMPT123: StudyModule = {
  "short": "Leis processuais penais especiai",
  "eyebrow": "Prompt 123 · pedido 88",
  "title": "Leis processuais penais especiais",
  "subtitle": "7.960, 9.099 e 12.830",
  "description": "Pedido 88, agora completo. A numeração do pedido não foi seguida quando a lei numera de outro modo. O art. 90-A não foi completado com a vedação da violência doméstica, porque a página não a escreve.",
  "reading": "Lei nº 7.960/1989, arts. 1º a 5º; Lei nº 8.072/1990, art. 2º, § 4º; Lei nº 9.099/1995, arts. 60, 61, 69, 72 a 82, 88 a 97; Lei nº 12.830/2013, arts. 1º a 4º. Planalto, consulta de 20/10/2026. Notícia do STF de 14/02/2022.",
  "terms": [
    "prisão temporária",
    "TCO",
    "transação penal",
    "suspensão do processo",
    "indiciamento"
  ],
  "subject": "Direito Processual Penal",
  "context": [
    "Os Prompts 62 a 122 do app já estão ocupados. Este pedido foi gravado com número novo.",
    "Número que não bate com a lei segue o texto oficial, e a divergência é dita.",
    "Súmula só entra com enunciado confirmado."
  ],
  "importance": "A banca troca prazo, requisito e nome de instituto.",
  "distinctions": [
    "O prazo de 5 dias e a soltura estão no art. 2º da Lei nº 7.960, não nos arts. 3º a 5º.",
    "Os 30 dias estão na Lei nº 8.072, art. 2º, § 4º, não no caput da Lei nº 7.960.",
    "A tese vencedora das ADIs 3360 e 4109 não é 'I ou II com III'. São cinco requisitos. O inciso II isolado não basta.",
    "Art. 90-A é Justiça Militar. A vedação da violência doméstica contra a mulher está no art. 41 da Lei nº 11.340.",
    "Na Lei nº 12.830, o § 4º não fala em desacato. O indiciamento é o § 6º. Não há art. 5º.",
    "Transação não é suspensão do processo, e nenhuma das duas é sursis da pena."
  ],
  "organs": [
    {
      "sigla": "1",
      "nome": "Art. 1º · hipóteses",
      "funcao": "O rol do inciso III é o da página. Alíneas que citam tipo depois revogado no CP não foram reescritas. A nota V",
      "base": "Lei nº 7.960/1989",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "yellow"
    },
    {
      "sigla": "STF",
      "nome": "ADI 3360 e ADI 4109",
      "funcao": "Não se afirma a fórmula antiga 'I ou II cumulado com III' como tese vencedora. A notícia distingue o voto venc",
      "base": "STF, notícia 14/02/2022",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "cyan"
    },
    {
      "sigla": "2",
      "nome": "Art. 2º · prazo e decreto",
      "funcao": "Quem decreta e o prazo de 5 dias, prorrogável por igual período, estão neste artigo, não nos arts. 3º a 5º. O ",
      "base": "Lei nº 7.960/1989",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "orange"
    },
    {
      "sigla": "30",
      "nome": "Prazo de 30 dias",
      "funcao": "Os 30 dias não estão no art. 2º da Lei nº 7.960. Estão no § 4º do art. 2º da Lei nº 8.072, para os crimes prev",
      "base": "Lei nº 8.072/1990",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "violet"
    },
    {
      "sigla": "3",
      "nome": "Art. 3º · separação",
      "funcao": "Presos temporários ficam separados dos demais. Este artigo não decreta a prisão nem fixa prazo.",
      "base": "Lei nº 7.960/1989",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "emerald"
    },
    {
      "sigla": "4",
      "nome": "Art. 4º · norma de alteração",
      "funcao": "Altera a Lei nº 4.898/1965, depois revogada pela Lei nº 13.869/2019. Não é o mandado. O mandado está no art. 2",
      "base": "Lei nº 7.960/1989",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "sky"
    }
  ],
  "swaps": [
    {
      "wrong": "Completar o que o texto não escreveu.",
      "right": "Se não está no texto, conferir. Não inventar."
    },
    {
      "wrong": "O número do pedido reaproveita um prompt já gravado.",
      "right": "Este pedido está no Prompt 123."
    },
    {
      "wrong": "Exemplo de fato ensina o meio.",
      "right": "Exemplo só classifica o ato lícito do cargo."
    }
  ],
  "timeline": [
    {
      "when": "Pedido",
      "title": "88",
      "text": "Gravado como Prompt 123."
    },
    {
      "when": "Limite",
      "title": "Recorte",
      "text": "Lei nº 7.960/1989, arts. 1º a 5º; Lei nº 8.072/1990, art. 2º, § 4º; Lei nº 9.099/1995, arts. 60, 61, 69, 72 a 82, 88 a 97; Lei nº 12.830/201"
    }
  ],
  "articles": [
    {
      "id": "p123-1",
      "num": "1",
      "kicker": "Lei nº 7.960/1989",
      "title": "Art. 1º · hipóteses",
      "lead": "Art. 1º · hipóteses",
      "plate": "Art. 1º · hipóteses",
      "plateSource": "Lei nº 7.960/1989",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 1º · hipóteses",
          "hook": "Rol da página. Não reescrever.",
          "literal": "Caberá prisão temporária: (Vide ADI 3360) (Vide ADI 4109) I - quando imprescindível para as investigações do inquérito policial; II - quando o indicado não tiver residência fixa ou não fornecer elementos necessários ao esclarecimento de sua identidade; III - quando houver fundadas razões, de acordo com qualquer prova admitida na legislação penal, de autoria ou participação do indiciado nos seguintes crimes: a) homicídio doloso (art. 121, caput, e seu § 2°) ; b) seqüestro ou cárcere privado (art. 148, caput, e seus §§ 1° e 2°); c) roubo (art. 157, caput, e seus §§ 1°, 2° e 3°); d) extorsão (art. 158, caput, e seus §§ 1° e 2°); e) extorsão mediante seqüestro (art. 159, caput, e seus §§ 1°, 2° e 3°) ; f) estupro (art. 213, caput , e sua combinação com o art. 223, caput, e parágrafo único) ; (Vide Decreto-Lei nº 2.848, de 1940) g) atentado violento ao pudor (art. 214, caput , e sua combinação com o art. 223, caput, e parágrafo único) ; (Vide Decreto-Lei nº 2.848, de 1940) h) rapto violento (art. 219 , e sua combinação com o art. 223 caput, e parágrafo único) ; (Vide Decreto-Lei nº 2.848, de 1940) i) epidemia com resultado de morte (art. 267, § 1°) ; j) envenenamento de água potável ou substância alimentícia ou medicinal qualificado pela morte ( art. 270, caput , combinado com art. 285 ); l) quadrilha ou bando (art. 288) , todos do Código Penal; m) genocídio (arts. 1° , 2° e 3° da Lei n° 2.889, de 1° de outubro de 1956 ), em qualquer de sua formas típicas; n) tráfico de drogas (art. 12 da Lei n° 6.368, de 21 de outubro de 1976) ; o) crimes contra o sistema financeiro ( Lei n° 7.492, de 16 de junho de 1986 ). p) crimes previstos na Lei de Terrorismo. (Incluído pela Lei nº 13.260, de 2016)",
          "context": "Art. 1º · hipóteses",
          "exam": "O rol do inciso III é o da página. Alíneas que citam tipo depois revogado no CP não foram reescritas. A nota Vide ADI 3360 e ADI 4109 está na página; a tese lida está no bloco seguinte.",
          "trap": "Não basta repetir que I ou II se soma ao III. A tese que prevaleceu no STF, na notícia de 14/02/2022, é outra.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Rol da página. Não reescrever.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-STF",
      "num": "STF",
      "kicker": "STF, notícia 14/02/2022",
      "title": "ADI 3360 e ADI 4109",
      "lead": "ADI 3360 e ADI 4109",
      "plate": "ADI 3360 e ADI 4109",
      "plateSource": "STF, notícia 14/02/2022",
      "devices": [
        {
          "tag": "tese",
          "name": "Notícia do STF de 14/02/2022",
          "hook": "Cinco requisitos. II isolado não basta.",
          "literal": "Notícia do STF de 14/02/2022: o Plenário, em sessão virtual encerrada em 11/2/2022, julgou as ADIs 3360 e 4109. Prevaleceu o voto do ministro Edson Fachin, interpretação conforme ao art. 1º da Lei nº 7.960/1989. A decretação está autorizada quando, cumulativamente: 1) for imprescindível para as investigações do inquérito policial, com elementos concretos, vedada a prisão para averiguações e vedada a prisão fundada no mero fato de o representado não ter residência fixa; 2) houver fundadas razões de autoria ou participação nos crimes do inciso III, vedada analogia ou interpretação extensiva do rol; 3) for justificada em fatos novos ou contemporâneos; 4) for adequada à gravidade concreta do crime, às circunstâncias do fato e às condições pessoais do indiciado; 5) não for suficiente medida cautelar diversa dos arts. 319 e 320 do CPP. A relatora, ministra Cármen Lúcia, admitia a prisão quando presentes as três hipóteses do art. 1º ou os incisos I e III. Esse voto não prevaleceu. O inciso II, isolado, não autoriza a prisão.",
          "context": "Notícia do STF de 14/02/2022",
          "exam": "Não se afirma a fórmula antiga 'I ou II cumulado com III' como tese vencedora. A notícia distingue o voto vencido da relatora.",
          "trap": "Não numere outro acórdão. A página de notícia escreveu, numa frase, Lei 7.930; o julgamento e o art. 1º citados são da Lei 7.960. Não se copia o erro de digitação.",
          "example": "Sem exemplo de fato. A tese é requisito, não roteiro.",
          "mnemonic": "Cinco requisitos. II isolado não basta.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-2",
      "num": "2",
      "kicker": "Lei nº 7.960/1989",
      "title": "Art. 2º · prazo e decreto",
      "lead": "Art. 2º · prazo e decreto",
      "plate": "Art. 2º · prazo e decreto",
      "plateSource": "Lei nº 7.960/1989",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 2º · prazo e decreto",
          "hook": "5 dias no caput. Soltura no § 7º.",
          "literal": "A prisão temporária será decretada pelo Juiz, em face da representação da autoridade policial ou de requerimento do Ministério Público, e terá o prazo de 5 (cinco) dias, prorrogável por igual período em caso de extrema e comprovada necessidade. § 1° Na hipótese de representação da autoridade policial, o Juiz, antes de decidir, ouvirá o Ministério Público. § 2° O despacho que decretar a prisão temporária deverá ser fundamentado e prolatado dentro do prazo de 24 (vinte e quatro) horas, contadas a partir do recebimento da representação ou do requerimento. § 3° O Juiz poderá, de ofício, ou a requerimento do Ministério Público e do Advogado, determinar que o preso lhe seja apresentado, solicitar informações e esclarecimentos da autoridade policial e submetê-lo a exame de corpo de delito. § 4° Decretada a prisão temporária, expedir-se-á mandado de prisão, em duas vias, uma das quais será entregue ao indiciado e servirá como nota de culpa. § 4º-A O mandado de prisão conterá necessariamente o período de duração da prisão temporária estabelecido no caput deste artigo, bem como o dia em que o preso deverá ser libertado. (Incluído pela Lei nº 13.869. de 2019) § 5° A prisão somente poderá ser executada depois da expedição de mandado judicial. § 6° Efetuada a prisão, a autoridade policial informará o preso dos direitos previstos no art. 5° da Constituição Federal. § 7º Decorrido o prazo contido no mandado de prisão, a autoridade responsável pela custódia deverá, independentemente de nova ordem da autoridade judicial, pôr imediatamente o preso em liberdade, salvo se já tiver sido comunicada da prorrogação da prisão temporária ou da decretação da prisão preventiva. (Redação dada pela Lei nº 13.869. de 2019) § 8º Inclui-se o dia do cumprimento do mandado de prisão no cômputo do prazo de prisão temporária. (Incluído pela Lei nº 13.869. de 2019)",
          "context": "Art. 2º · prazo e decreto",
          "exam": "Quem decreta e o prazo de 5 dias, prorrogável por igual período, estão neste artigo, não nos arts. 3º a 5º. O caput exige representação da autoridade policial ou requerimento do Ministério Público. O § 3º permite ao juiz, de ofício, determinar apresentação, pedir informação e exame de corpo de delito. Isso não é decretar a prisão de ofício. A soltura ao término está no § 7º. O dia do cumprimento entra no prazo, § 8º.",
          "trap": "O pedido chamou de art. 3º quem decreta, de art. 4º o mandado e de art. 5º a soltura. A lei não numera assim.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "5 dias no caput. Soltura no § 7º.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-30",
      "num": "30",
      "kicker": "Lei nº 8.072/1990",
      "title": "Prazo de 30 dias",
      "lead": "Prazo de 30 dias",
      "plate": "Prazo de 30 dias",
      "plateSource": "Lei nº 8.072/1990",
      "devices": [
        {
          "tag": "texto",
          "name": "Lei nº 8.072/1990, art. 2º, § 4º",
          "hook": "30 dias é Lei 8.072, art. 2º, § 4º.",
          "literal": "Lei nº 8.072/1990, art. 2º, caput, no compilado consultado: os crimes hediondos, a prática da tortura, o tráfico ilícito de entorpecentes e drogas afins e o terrorismo são insuscetíveis de anistia, graça e indulto, e de fiança. § 4º: A prisão temporária, sobre a qual dispõe a Lei nº 7.960, de 21 de dezembro de 1989, nos crimes previstos neste artigo, terá o prazo de 30 (trinta) dias, prorrogável por igual período em caso de extrema e comprovada necessidade. (Incluído pela Lei nº 11.464, de 2007).",
          "context": "Lei nº 8.072/1990, art. 2º, § 4º",
          "exam": "Os 30 dias não estão no art. 2º da Lei nº 7.960. Estão no § 4º do art. 2º da Lei nº 8.072, para os crimes previstos nesse artigo. Não se estende o prazo a crime de fora desse caput.",
          "trap": "Não troque 5 por 30 no caput da Lei nº 7.960.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "30 dias é Lei 8.072, art. 2º, § 4º.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-3",
      "num": "3",
      "kicker": "Lei nº 7.960/1989",
      "title": "Art. 3º · separação",
      "lead": "Art. 3º · separação",
      "plate": "Art. 3º · separação",
      "plateSource": "Lei nº 7.960/1989",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 3º · separação",
          "hook": "Art. 3º · separação",
          "literal": "Os presos temporários deverão permanecer, obrigatoriamente, separados dos demais detentos.",
          "context": "Art. 3º · separação",
          "exam": "Presos temporários ficam separados dos demais. Este artigo não decreta a prisão nem fixa prazo.",
          "trap": "Não use a numeração do pedido no lugar da lei.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 3º · separação",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-4",
      "num": "4",
      "kicker": "Lei nº 7.960/1989",
      "title": "Art. 4º · norma de alteração",
      "lead": "Art. 4º · norma de alteração",
      "plate": "Art. 4º · norma de alteração",
      "plateSource": "Lei nº 7.960/1989",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 4º · norma de alteração",
          "hook": "Art. 4º · norma de alteração",
          "literal": "O art. 4° da Lei n° 4.898, de 9 de dezembro de 1965, fica acrescido da alínea i, com a seguinte redação: \"Art. 4° ............................................................... i) prolongar a execução de prisão temporária, de pena ou de medida de segurança, deixando de expedir em tempo oportuno ou de cumprir imediatamente ordem de liberdade;\"",
          "context": "Art. 4º · norma de alteração",
          "exam": "Altera a Lei nº 4.898/1965, depois revogada pela Lei nº 13.869/2019. Não é o mandado. O mandado está no art. 2º, §§ 4º e 4º-A.",
          "trap": "Não use a numeração do pedido no lugar da lei.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 4º · norma de alteração",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-5",
      "num": "5",
      "kicker": "Lei nº 7.960/1989",
      "title": "Art. 5º · plantão",
      "lead": "Art. 5º · plantão",
      "plate": "Art. 5º · plantão",
      "plateSource": "Lei nº 7.960/1989",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 5º · plantão",
          "hook": "Art. 5º · plantão",
          "literal": "Em todas as comarcas e seções judiciárias haverá um plantão permanente de vinte e quatro horas do Poder Judiciário e do Ministério Público para apreciação dos pedidos de prisão temporária.",
          "context": "Art. 5º · plantão",
          "exam": "Plantão de 24 horas do Judiciário e do Ministério Público. Não é a soltura. A soltura está no art. 2º, § 7º.",
          "trap": "Não use a numeração do pedido no lugar da lei.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 5º · plantão",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-60",
      "num": "60",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 60",
      "lead": "Art. 60",
      "plate": "Art. 60",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 60",
          "hook": "Art. 60",
          "literal": "O Juizado Especial Criminal, provido por juízes togados ou togados e leigos, tem competência para a conciliação, o julgamento e a execução das infrações penais de menor potencial ofensivo, respeitadas as regras de conexão e continência. (Redação dada pela Lei nº 11.313, de 2006) Parágrafo único. Na reunião de processos, perante o juízo comum ou o tribunal do júri, decorrentes da aplicação das regras de conexão e continência, observar-se-ão os institutos da transação penal e da composição dos danos civis. (Incluído pela Lei nº 11.313, de 2006)",
          "context": "Art. 60",
          "exam": "Competência: conciliação, julgamento e execução das infrações de menor potencial ofensivo. Conexão e continência são respeitadas. O parágrafo único, da Lei nº 11.313/2006, mantém transação e composição civil na reunião perante o juízo comum ou o júri.",
          "trap": "Não troque instituto nem prazo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 60",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-61",
      "num": "61",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 61",
      "lead": "Art. 61",
      "plate": "Art. 61",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 61",
          "hook": "Art. 61",
          "literal": "Consideram-se infrações penais de menor potencial ofensivo, para os efeitos desta Lei, as contravenções penais e os crimes a que a lei comine pena máxima não superior a 2 (dois) anos, cumulada ou não com multa. (Redação dada pela Lei nº 11.313, de 2006)",
          "context": "Art. 61",
          "exam": "Menor potencial ofensivo: contravenção e crime cuja pena máxima não seja superior a 2 anos, cumulada ou não com multa. Redação da Lei nº 11.313/2006. Não se inventa outro teto.",
          "trap": "Não troque instituto nem prazo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 61",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-69",
      "num": "69",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 69",
      "lead": "Art. 69",
      "plate": "Art. 69",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 69",
          "hook": "Art. 69",
          "literal": "A autoridade policial que tomar conhecimento da ocorrência lavrará termo circunstanciado e o encaminhará imediatamente ao Juizado, com o autor do fato e a vítima, providenciando-se as requisições dos exames periciais necessários. Parágrafo único. Ao autor do fato que, após a lavratura do termo, for imediatamente encaminhado ao juizado ou assumir o compromisso de a ele comparecer, não se imporá prisão em flagrante, nem se exigirá fiança. Em caso de violência doméstica, o juiz poderá determinar, como medida de cautela, seu afastamento do lar, domicílio ou local de convivência com a vítima. (Redação dada pela Lei nº 10.455, de 13.5.2002) )",
          "context": "Art. 69",
          "exam": "Quem lavra o termo é a autoridade policial que toma conhecimento. Encaminha de imediato ao Juizado, com o autor e a vítima, e requisita perícia. Não é inquérito. O parágrafo afasta flagrante e fiança se houver encaminhamento imediato ou compromisso de comparecer. A frase sobre violência doméstica está no texto, com nota da Lei nº 10.455/2002. A vedação da Lei nº 9.099 aos crimes de violência doméstica contra a mulher está no art. 41 da Lei nº 11.340, Prompt 111, não neste artigo e não no art. 90-A.",
          "trap": "Não troque instituto nem prazo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 69",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-72",
      "num": "72",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 72",
      "lead": "Art. 72",
      "plate": "Art. 72",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 72",
          "hook": "Art. 72",
          "literal": "Na audiência preliminar, presente o representante do Ministério Público, o autor do fato e a vítima e, se possível, o responsável civil, acompanhados por seus advogados, o Juiz esclarecerá sobre a possibilidade da composição dos danos e da aceitação da proposta de aplicação imediata de pena não privativa de liberdade.",
          "context": "Art. 72",
          "exam": "Audiência preliminar: juiz esclarece composição dos danos e proposta de pena não privativa de liberdade. Presentes MP, autor, vítima e, se possível, o responsável civil, com advogados.",
          "trap": "Não troque instituto nem prazo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 72",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-73",
      "num": "73",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 73",
      "lead": "Art. 73",
      "plate": "Art. 73",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 73",
          "hook": "Art. 73",
          "literal": "A conciliação será conduzida pelo Juiz ou por conciliador sob sua orientação. Parágrafo único. Os conciliadores são auxiliares da Justiça, recrutados, na forma da lei local, preferentemente entre bacharéis em Direito, excluídos os que exerçam funções na administração da Justiça Criminal.",
          "context": "Art. 73",
          "exam": "Conciliação pelo juiz ou por conciliador sob orientação dele. Conciliador é auxiliar, preferentemente bacharel, excluído quem exerça função na administração da Justiça Criminal.",
          "trap": "Não troque instituto nem prazo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 73",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-74",
      "num": "74",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 74",
      "lead": "Art. 74",
      "plate": "Art. 74",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 74",
          "hook": "Art. 74",
          "literal": "A composição dos danos civis será reduzida a escrito e, homologada pelo Juiz mediante sentença irrecorrível, terá eficácia de título a ser executado no juízo civil competente. Parágrafo único. Tratando-se de ação penal de iniciativa privada ou de ação penal pública condicionada à representação, o acordo homologado acarreta a renúncia ao direito de queixa ou representação.",
          "context": "Art. 74",
          "exam": "Composição reduzida a escrito e homologada por sentença irrecorrível, título executivo no juízo civil. Em ação privada ou pública condicionada à representação, o acordo acarreta renúncia à queixa ou à representação.",
          "trap": "Não troque instituto nem prazo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 74",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-75",
      "num": "75",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 75",
      "lead": "Art. 75",
      "plate": "Art. 75",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 75",
          "hook": "Art. 75",
          "literal": "Não obtida a composição dos danos civis, será dada imediatamente ao ofendido a oportunidade de exercer o direito de representação verbal, que será reduzida a termo. Parágrafo único. O não oferecimento da representação na audiência preliminar não implica decadência do direito, que poderá ser exercido no prazo previsto em lei.",
          "context": "Art. 75",
          "exam": "Sem composição, o ofendido pode representar verbalmente, reduzida a termo. Não representar na audiência não é decadência. O prazo legal permanece.",
          "trap": "Não troque instituto nem prazo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 75",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-76",
      "num": "76",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 76",
      "lead": "Art. 76",
      "plate": "Art. 76",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 76",
          "hook": "Art. 76",
          "literal": "Havendo representação ou tratando-se de crime de ação penal pública incondicionada, não sendo caso de arquivamento, o Ministério Público poderá propor a aplicação imediata de pena restritiva de direitos ou multas, a ser especificada na proposta. § 1º Nas hipóteses de ser a pena de multa a única aplicável, o Juiz poderá reduzi-la até a metade. § 2º Não se admitirá a proposta se ficar comprovado: I - ter sido o autor da infração condenado, pela prática de crime, à pena privativa de liberdade, por sentença definitiva; II - ter sido o agente beneficiado anteriormente, no prazo de cinco anos, pela aplicação de pena restritiva ou multa, nos termos deste artigo; III - não indicarem os antecedentes, a conduta social e a personalidade do agente, bem como os motivos e as circunstâncias, ser necessária e suficiente a adoção da medida. § 3º Aceita a proposta pelo autor da infração e seu defensor, será submetida à apreciação do Juiz. § 4º Acolhendo a proposta do Ministério Público aceita pelo autor da infração, o Juiz aplicará a pena restritiva de direitos ou multa, que não importará em reincidência, sendo registrada apenas para impedir novamente o mesmo benefício no prazo de cinco anos. § 5º Da sentença prevista no parágrafo anterior caberá a apelação referida no art. 82 desta Lei. § 6º A imposição da sanção de que trata o § 4º deste artigo não constará de certidão de antecedentes criminais, salvo para os fins previstos no mesmo dispositivo, e não terá efeitos civis, cabendo aos interessados propor ação cabível no juízo cível.",
          "context": "Art. 76",
          "exam": "Transação: o MP pode propor pena restritiva de direitos ou multa. Não se admite se houver condenação definitiva a pena privativa de liberdade por crime, se houve o benefício nos últimos cinco anos, ou se os antecedentes, a conduta, a personalidade, os motivos e as circunstâncias não indicarem a medida. O § 4º diz que a pena não importará em reincidência e o registro só impede novo benefício em cinco anos. O § 6º tira o registro da certidão de antecedentes, salvo esse fim, e nega efeito civil. Não é condenação para reincidência. O texto não diz, em bloco, 'não ser reincidente'.",
          "trap": "Não troque instituto nem prazo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 76",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-77",
      "num": "77",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 77",
      "lead": "Art. 77",
      "plate": "Art. 77",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 77",
          "hook": "Art. 77",
          "literal": "Na ação penal de iniciativa pública, quando não houver aplicação de pena, pela ausência do autor do fato, ou pela não ocorrência da hipótese prevista no art. 76 desta Lei, o Ministério Público oferecerá ao Juiz, de imediato, denúncia oral, se não houver necessidade de diligências imprescindíveis. § 1º Para o oferecimento da denúncia, que será elaborada com base no termo de ocorrência referido no art. 69 desta Lei, com dispensa do inquérito policial, prescindir-se-á do exame do corpo de delito quando a materialidade do crime estiver aferida por boletim médico ou prova equivalente. § 2º Se a complexidade ou circunstâncias do caso não permitirem a formulação da denúncia, o Ministério Público poderá requerer ao Juiz o encaminhamento das peças existentes, na forma do parágrafo único do art. 66 desta Lei. § 3º Na ação penal de iniciativa do ofendido poderá ser oferecida queixa oral, cabendo ao Juiz verificar se a complexidade e as circunstâncias do caso determinam a adoção das providências previstas no parágrafo único do art. 66 desta Lei.",
          "context": "Art. 77",
          "exam": "Sem transação, o MP oferece denúncia oral, se não houver diligência imprescindível. Base no termo do art. 69, com dispensa de inquérito. Corpo de delito pode ser substituído por boletim médico ou prova equivalente quando a materialidade estiver aferida.",
          "trap": "Não troque instituto nem prazo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 77",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-78",
      "num": "78",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 78",
      "lead": "Art. 78",
      "plate": "Art. 78",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 78",
          "hook": "Art. 78",
          "literal": "Oferecida a denúncia ou queixa, será reduzida a termo, entregando-se cópia ao acusado, que com ela ficará citado e imediatamente cientificado da designação de dia e hora para a audiência de instrução e julgamento, da qual também tomarão ciência o Ministério Público, o ofendido, o responsável civil e seus advogados. § 1º Se o acusado não estiver presente, será citado na forma dos arts. 66 e 68 desta Lei e cientificado da data da audiência de instrução e julgamento, devendo a ela trazer suas testemunhas ou apresentar requerimento para intimação, no mínimo cinco dias antes de sua realização. § 2º Não estando presentes o ofendido e o responsável civil, serão intimados nos termos do art. 67 desta Lei para comparecerem à audiência de instrução e julgamento. § 3º As testemunhas arroladas serão intimadas na forma prevista no art. 67 desta Lei.",
          "context": "Art. 78",
          "exam": "Denúncia ou queixa reduzida a termo. Cópia ao acusado, que fica citado e cientificado da audiência. Ausente, citação na forma dos arts. 66 e 68, que não foram abertos. Testemunhas: trazer ou requerer intimação no mínimo cinco dias antes.",
          "trap": "Não troque instituto nem prazo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 78",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-79",
      "num": "79",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 79",
      "lead": "Art. 79",
      "plate": "Art. 79",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 79",
          "hook": "Art. 79",
          "literal": "No dia e hora designados para a audiência de instrução e julgamento, se na fase preliminar não tiver havido possibilidade de tentativa de conciliação e de oferecimento de proposta pelo Ministério Público, proceder-se-á nos termos dos arts. 72, 73, 74 e 75 desta Lei.",
          "context": "Art. 79",
          "exam": "Se não houve conciliação nem proposta na fase preliminar, a audiência de instrução volta aos arts. 72 a 75.",
          "trap": "Não troque instituto nem prazo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 79",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-80",
      "num": "80",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 80",
      "lead": "Art. 80",
      "plate": "Art. 80",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 80",
          "hook": "Art. 80",
          "literal": "Nenhum ato será adiado, determinando o Juiz, quando imprescindível, a condução coercitiva de quem deva comparecer.",
          "context": "Art. 80",
          "exam": "Nenhum ato será adiado. Condução coercitiva quando imprescindível. Sem técnica.",
          "trap": "Não troque instituto nem prazo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 80",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-81",
      "num": "81",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 81",
      "lead": "Art. 81",
      "plate": "Art. 81",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 81",
          "hook": "Art. 81",
          "literal": "Aberta a audiência, será dada a palavra ao defensor para responder à acusação, após o que o Juiz receberá, ou não, a denúncia ou queixa; havendo recebimento, serão ouvidas a vítima e as testemunhas de acusação e defesa, interrogando-se a seguir o acusado, se presente, passando-se imediatamente aos debates orais e à prolação da sentença. § 1º Todas as provas serão produzidas na audiência de instrução e julgamento, podendo o Juiz limitar ou excluir as que considerar excessivas, impertinentes ou protelatórias. § 1º-A. Durante a audiência, todas as partes e demais sujeitos processuais presentes no ato deverão respeitar a dignidade da vítima, sob pena de responsabilização civil, penal e administrativa, cabendo ao juiz garantir o cumprimento do disposto neste artigo, vedadas: (Incluído pela Lei nº 14.245, de 2021) I - a manifestação sobre circunstâncias ou elementos alheios aos fatos objeto de apuração nos autos; (Incluído pela Lei nº 14.245, de 2021) II - a utilização de linguagem, de informações ou de material que ofendam a dignidade da vítima ou de testemunhas. (Incluído pela Lei nº 14.245, de 2021) § 2º De todo o ocorrido na audiência será lavrado termo, assinado pelo Juiz e pelas partes, contendo breve resumo dos fatos relevantes ocorridos em audiência e a sentença. § 3º A sentença, dispensado o relatório, mencionará os elementos de convicção do Juiz.",
          "context": "Art. 81",
          "exam": "Defesa, recebimento ou não, vítima, testemunhas, interrogatório se presente, debates e sentença. O § 1º-A, da Lei nº 14.245/2021, veda manifestação alheia aos fatos e linguagem que ofenda a dignidade da vítima ou de testemunha. Sem exemplo de ofensa.",
          "trap": "Não troque instituto nem prazo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 81",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-82",
      "num": "82",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 82",
      "lead": "Art. 82",
      "plate": "Art. 82",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 82",
          "hook": "Art. 82",
          "literal": "Da decisão de rejeição da denúncia ou queixa e da sentença caberá apelação, que poderá ser julgada por turma composta de três Juízes em exercício no primeiro grau de jurisdição, reunidos na sede do Juizado. § 1º A apelação será interposta no prazo de dez dias, contados da ciência da sentença pelo Ministério Público, pelo réu e seu defensor, por petição escrita, da qual constarão as razões e o pedido do recorrente. § 2º O recorrido será intimado para oferecer resposta escrita no prazo de dez dias. § 3º As partes poderão requerer a transcrição da gravação da fita magnética a que alude o § 3º do art. 65 desta Lei. § 4º As partes serão intimadas da data da sessão de julgamento pela imprensa. § 5º Se a sentença for confirmada pelos próprios fundamentos, a súmula do julgamento servirá de acórdão.",
          "context": "Art. 82",
          "exam": "Apelação em dez dias da ciência, por petição com razões. Resposta em dez dias. Incluído porque o art. 76, § 5º, remete a ela. Turma de três juízes do primeiro grau.",
          "trap": "Não troque instituto nem prazo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 82",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-88",
      "num": "88",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 88",
      "lead": "Art. 88",
      "plate": "Art. 88",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 88",
          "hook": "Art. 88",
          "literal": "Além das hipóteses do Código Penal e da legislação especial, dependerá de representação a ação penal relativa aos crimes de lesões corporais leves e lesões culposas.",
          "context": "Art. 88",
          "exam": "Lesão corporal leve e lesão culposa dependem de representação, além das hipóteses do CP e da legislação especial. Não se abre o CP.",
          "trap": "Não troque instituto nem prazo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 88",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-89",
      "num": "89",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 89",
      "lead": "Art. 89",
      "plate": "Art. 89",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 89",
          "hook": "Art. 89",
          "literal": "Nos crimes em que a pena mínima cominada for igual ou inferior a um ano, abrangidas ou não por esta Lei, o Ministério Público, ao oferecer a denúncia, poderá propor a suspensão do processo, por dois a quatro anos, desde que o acusado não esteja sendo processado ou não tenha sido condenado por outro crime, presentes os demais requisitos que autorizariam a suspensão condicional da pena ( art. 77 do Código Penal ). § 1º Aceita a proposta pelo acusado e seu defensor, na presença do Juiz, este, recebendo a denúncia, poderá suspender o processo, submetendo o acusado a período de prova, sob as seguintes condições: I - reparação do dano, salvo impossibilidade de fazê-lo; II - proibição de freqüentar determinados lugares; III - proibição de ausentar-se da comarca onde reside, sem autorização do Juiz; IV - comparecimento pessoal e obrigatório a juízo, mensalmente, para informar e justificar suas atividades. § 2º O Juiz poderá especificar outras condições a que fica subordinada a suspensão, desde que adequadas ao fato e à situação pessoal do acusado. § 3º A suspensão será revogada se, no curso do prazo, o beneficiário vier a ser processado por outro crime ou não efetuar, sem motivo justificado, a reparação do dano. § 4º A suspensão poderá ser revogada se o acusado vier a ser processado, no curso do prazo, por contravenção, ou descumprir qualquer outra condição imposta. § 5º Expirado o prazo sem revogação, o Juiz declarará extinta a punibilidade. § 6º Não correrá a prescrição durante o prazo de suspensão do processo. § 7º Se o acusado não aceitar a proposta prevista neste artigo, o processo prosseguirá em seus ulteriores termos.",
          "context": "Art. 89",
          "exam": "Suspensão do processo: pena mínima igual ou inferior a um ano, abrangidas ou não por esta lei. Prazo de dois a quatro anos. O acusado não pode estar sendo processado nem ter sido condenado por outro crime, e devem estar presentes os requisitos do art. 77 do CP, que não foi aberto. Não é sursis da pena: suspende o processo. Revogação do § 3º: processado por outro crime ou não reparar o dano sem motivo justificado. Revogação facultativa do § 4º: processado por contravenção ou descumprir outra condição. § 5º: extinta a punibilidade se o prazo expira sem revogação. § 6º: não corre prescrição no prazo.",
          "trap": "Não troque instituto nem prazo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 89",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-90",
      "num": "90",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 90",
      "lead": "Art. 90",
      "plate": "Art. 90",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 90",
          "hook": "Art. 90",
          "literal": "As disposições desta Lei não se aplicam aos processos penais cuja instrução já estiver iniciada. (Vide ADIN nº 1.719-9)",
          "context": "Art. 90",
          "exam": "A lei não se aplica a processo penal cuja instrução já estava iniciada. A página cita ADIN 1.719-9. O acórdão não foi aberto. Não se inventa a tese.",
          "trap": "Não troque instituto nem prazo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 90",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-90A",
      "num": "90-A",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 90-A",
      "lead": "Art. 90-A",
      "plate": "Art. 90-A",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 90-A",
          "hook": "Art. 90-A",
          "literal": "As disposições desta Lei não se aplicam no âmbito da Justiça Militar. (Artigo incluído pela Lei nº 9.839, de 27.9.1999)",
          "context": "Art. 90-A",
          "exam": "O texto extraído afasta a lei da Justiça Militar. Incluído pela Lei nº 9.839/1999. A página não escreve violência doméstica neste artigo. A vedação aos crimes de violência doméstica e familiar contra a mulher está no art. 41 da Lei nº 11.340, Prompt 111. Não se completa o art. 90-A com essa vedação.",
          "trap": "Não troque instituto nem prazo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 90-A",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-91",
      "num": "91",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 91",
      "lead": "Art. 91",
      "plate": "Art. 91",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 91",
          "hook": "Art. 91",
          "literal": "Nos casos em que esta Lei passa a exigir representação para a propositura da ação penal pública, o ofendido ou seu representante legal será intimado para oferecê-la no prazo de trinta dias, sob pena de decadência.",
          "context": "Art. 91",
          "exam": "Quando a lei passa a exigir representação, o ofendido ou o representante é intimado para oferecê-la em trinta dias, sob pena de decadência.",
          "trap": "Não troque instituto nem prazo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 91",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-92",
      "num": "92",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 92",
      "lead": "Art. 92",
      "plate": "Art. 92",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 92",
          "hook": "Art. 92",
          "literal": "Aplicam-se subsidiariamente as disposições dos Códigos Penal e de Processo Penal, no que não forem incompatíveis com esta Lei. Capítulo IV Disposições Finais Comuns",
          "context": "Art. 92",
          "exam": "Aplicação subsidiária do CP e do CPP no que não for incompatível.",
          "trap": "Não troque instituto nem prazo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 92",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-93",
      "num": "93",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 93",
      "lead": "Art. 93",
      "plate": "Art. 93",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 93",
          "hook": "Art. 93",
          "literal": "Lei Estadual disporá sobre o Sistema de Juizados Especiais Cíveis e Criminais, sua organização, composição e competência.",
          "context": "Art. 93",
          "exam": "Lei estadual dispõe sobre o sistema. Não se abre lei estadual.",
          "trap": "Não troque instituto nem prazo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 93",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-94",
      "num": "94",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 94",
      "lead": "Art. 94",
      "plate": "Art. 94",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 94",
          "hook": "Art. 94",
          "literal": "Os serviços de cartório poderão ser prestados, e as audiências realizadas fora da sede da Comarca, em bairros ou cidades a ela pertencentes, ocupando instalações de prédios públicos, de acordo com audiências previamente anunciadas.",
          "context": "Art. 94",
          "exam": "Cartório e audiência podem ocorrer fora da sede, em prédio público, com audiência anunciada.",
          "trap": "Não troque instituto nem prazo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 94",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-95",
      "num": "95",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 95",
      "lead": "Art. 95",
      "plate": "Art. 95",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 95",
          "hook": "Art. 95",
          "literal": "Os Estados, Distrito Federal e Territórios criarão e instalarão os Juizados Especiais no prazo de seis meses, a contar da vigência desta Lei. Parágrafo único. No prazo de 6 (seis) meses, contado da publicação desta Lei, serão criados e instalados os Juizados Especiais Itinerantes, que deverão dirimir, prioritariamente, os conflitos existentes nas áreas rurais ou nos locais de menor concentração populacional. (Redação dada pela Lei nº 12.726, de 2012)",
          "context": "Art. 95",
          "exam": "Prazo de seis meses, contado da vigência, para criar e instalar os juizados. O parágrafo, da Lei nº 12.726/2012, fala em juizados itinerantes no mesmo prazo, contado da publicação. Não se troca vigência por publicação no caput.",
          "trap": "Não troque instituto nem prazo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 95",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-96",
      "num": "96",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 96",
      "lead": "Art. 96",
      "plate": "Art. 96",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 96",
          "hook": "Art. 96",
          "literal": "Esta Lei entra em vigor no prazo de sessenta dias após a sua publicação.",
          "context": "Art. 96",
          "exam": "Vigência sessenta dias após a publicação.",
          "trap": "Não troque instituto nem prazo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 96",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-97",
      "num": "97",
      "kicker": "Lei nº 9.099/1995",
      "title": "Art. 97",
      "lead": "Art. 97",
      "plate": "Art. 97",
      "plateSource": "Lei nº 9.099/1995",
      "devices": [
        {
          "tag": "texto",
          "name": "Art. 97",
          "hook": "Art. 97",
          "literal": "Ficam revogadas a Lei nº 4.611, de 2 de abril de 1965 e a Lei nº 7.244, de 7 de novembro de 1984 . Brasília, 26 de setembro de 1995; 174º da Independência e 107º da República. FERNANDO HENRIQUE CARDOSO Nelson A. Jobim Este texto não substitui o publicado no DOU de 27.9.1995 *",
          "context": "Art. 97",
          "exam": "Revoga as Leis nº 4.611/1965 e 7.244/1984. Não se reabrem.",
          "trap": "Não troque instituto nem prazo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Art. 97",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-L121",
      "num": "L12-1",
      "kicker": "Lei nº 12.830/2013",
      "title": "Lei 12.830, art. 1º",
      "lead": "Lei 12.830, art. 1º",
      "plate": "Lei 12.830, art. 1º",
      "plateSource": "Lei nº 12.830/2013",
      "devices": [
        {
          "tag": "texto",
          "name": "Lei 12.830, art. 1º",
          "hook": "Lei 12.830, art. 1º",
          "literal": "Esta Lei dispõe sobre a investigação criminal conduzida pelo delegado de polícia.",
          "context": "Lei 12.830, art. 1º",
          "exam": "Objeto: investigação criminal conduzida pelo delegado de polícia. Só isso.",
          "trap": "Não procure desacato neste artigo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Lei 12.830, art. 1º",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-L122",
      "num": "L12-2",
      "kicker": "Lei nº 12.830/2013",
      "title": "Lei 12.830, art. 2º",
      "lead": "Lei 12.830, art. 2º",
      "plate": "Lei 12.830, art. 2º",
      "plateSource": "Lei nº 12.830/2013",
      "devices": [
        {
          "tag": "texto",
          "name": "Lei 12.830, art. 2º",
          "hook": "Lei 12.830, art. 2º",
          "literal": "As funções de polícia judiciária e a apuração de infrações penais exercidas pelo delegado de polícia são de natureza jurídica, essenciais e exclusivas de Estado. § 1º Ao delegado de polícia, na qualidade de autoridade policial, cabe a condução da investigação criminal por meio de inquérito policial ou outro procedimento previsto em lei, que tem como objetivo a apuração das circunstâncias, da materialidade e da autoria das infrações penais. (Vide ADI 5043) § 2º Durante a investigação criminal, cabe ao delegado de polícia a requisição de perícia, informações, documentos e dados que interessem à apuração dos fatos. § 3º (VETADO). § 4º O inquérito policial ou outro procedimento previsto em lei em curso somente poderá ser avocado ou redistribuído por superior hierárquico, mediante despacho fundamentado, por motivo de interesse público ou nas hipóteses de inobservância dos procedimentos previstos em regulamento da corporação que prejudique a eficácia da investigação. § 5º A remoção do delegado de polícia dar-se-á somente por ato fundamentado. § 6º O indiciamento, privativo do delegado de polícia, dar-se-á por ato fundamentado, mediante análise técnico-jurídica do fato, que deverá indicar a autoria, materialidade e suas circunstâncias.",
          "context": "Lei 12.830, art. 2º",
          "exam": "A numeração do pedido não bate com a lei. § 1º é condução da investigação, com nota Vide ADI 5043; o acórdão não foi aberto e a tese não se inventa. § 2º é requisição de perícia, informações, documentos e dados. § 3º está vetado; não se reconstitui. § 4º é avocação ou redistribuição por superior, com despacho fundamentado. Não é a regra do advogado nem de desacato. § 5º é remoção do delegado somente por ato fundamentado. § 6º é o indiciamento, privativo do delegado, por ato fundamentado, com análise técnico-jurídica, indicando autoria, materialidade e circunstâncias.",
          "trap": "Não procure desacato neste artigo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Lei 12.830, art. 2º",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-L123",
      "num": "L12-3",
      "kicker": "Lei nº 12.830/2013",
      "title": "Lei 12.830, art. 3º",
      "lead": "Lei 12.830, art. 3º",
      "plate": "Lei 12.830, art. 3º",
      "plateSource": "Lei nº 12.830/2013",
      "devices": [
        {
          "tag": "texto",
          "name": "Lei 12.830, art. 3º",
          "hook": "Lei 12.830, art. 3º",
          "literal": "O cargo de delegado de polícia é privativo de bacharel em Direito, devendo-lhe ser dispensado o mesmo tratamento protocolar que recebem os magistrados, os membros da Defensoria Pública e do Ministério Público e os advogados.",
          "context": "Lei 12.830, art. 3º",
          "exam": "O cargo é privativo de bacharel em Direito, com o tratamento protocolar de magistrados, Defensoria, Ministério Público e advogados. Não é aplicação subsidiária do CPP. Essa frase não está na lei.",
          "trap": "Não procure desacato neste artigo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Lei 12.830, art. 3º",
          "revoked": false
        }
      ]
    },
    {
      "id": "p123-L124",
      "num": "L12-4",
      "kicker": "Lei nº 12.830/2013",
      "title": "Lei 12.830, art. 4º",
      "lead": "Lei 12.830, art. 4º",
      "plate": "Lei 12.830, art. 4º",
      "plateSource": "Lei nº 12.830/2013",
      "devices": [
        {
          "tag": "texto",
          "name": "Lei 12.830, art. 4º",
          "hook": "Lei 12.830, art. 4º",
          "literal": "Esta Lei entra em vigor na data de sua publicação. Brasília, 20 de junho de 2013; 192º da Independência e 125º da República. DILMA ROUSSEFF José Eduardo Cardozo Miriam Belchior Luís Inácio Lucena Adams Este texto não substitui o publicado no DOU de 21.6.2013",
          "context": "Lei 12.830, art. 4º",
          "exam": "Vigência na data da publicação. Não há art. 5º nesta lei.",
          "trap": "Não procure desacato neste artigo.",
          "example": "Exemplo sóbrio: o agente lavra o termo, comunica a prisão e não decreta cautelar. Sem roteiro de prisão ilegal.",
          "mnemonic": "Lei 12.830, art. 4º",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 123",
      "does": [
        "Ler o texto antes do comentário"
      ],
      "doesNot": [
        "Não completar lacuna",
        "Não usar número não confirmado"
      ]
    }
  ],
  "roleNote": "Questões são originais, no estilo da banca, não são prova real.",
  "rolePlate": "Texto primeiro.",
  "rolePlateSource": "Prompt 123",
  "summary": [
    {
      "item": "Temporária, decreto",
      "rule": "Juiz, por representação da autoridade ou requerimento do MP. Art. 2º, caput.",
      "clue": "Não é de ofício."
    },
    {
      "item": "Prazo comum",
      "rule": "5 dias, prorrogável por igual período, em extrema e comprovada necessidade.",
      "clue": "Art. 2º, caput."
    },
    {
      "item": "Prazo de 30 dias",
      "rule": "Lei nº 8.072, art. 2º, § 4º, nos crimes previstos nesse artigo. Lei nº 11.464/2007.",
      "clue": "Não está na Lei 7.960."
    },
    {
      "item": "Soltura",
      "rule": "Art. 2º, § 7º, ao fim do prazo do mandado, salvo prorrogação ou preventiva já comunicada.",
      "clue": "Não é o art. 5º."
    },
    {
      "item": "STF, 14/02/2022",
      "rule": "Cinco requisitos cumulativos. II isolado não basta. Rol do III é taxativo na tese.",
      "clue": "ADI 3360 e 4109."
    },
    {
      "item": "Menor potencial",
      "rule": "Pena máxima não superior a 2 anos, cumulada ou não com multa. Art. 61.",
      "clue": "Lei 11.313/2006."
    },
    {
      "item": "TCO",
      "rule": "Autoridade policial lavra e encaminha de imediato. Não é inquérito. Art. 69.",
      "clue": "Sem flagrante se encaminhado ou com compromisso."
    },
    {
      "item": "Transação",
      "rule": "Não gera reincidência. Registro só para barrar novo benefício em 5 anos. Art. 76, §§ 4º e 6º.",
      "clue": "Não é condenação para reincidência."
    },
    {
      "item": "Suspensão do processo",
      "rule": "Pena mínima igual ou inferior a 1 ano. Prazo de 2 a 4 anos. Art. 89.",
      "clue": "Não é sursis da pena."
    },
    {
      "item": "Art. 90-A",
      "rule": "Não se aplica à Justiça Militar.",
      "clue": "Violência doméstica não está neste artigo."
    },
    {
      "item": "Indiciamento",
      "rule": "Privativo do delegado, ato fundamentado, § 6º da Lei nº 12.830.",
      "clue": "§ 4º é outra coisa."
    }
  ],
  "compare": [
    {
      "item": "Quem pede a temporária",
      "ce": "Autoridade policial representa ou o MP requer.",
      "cf": "O juiz não decreta a prisão de ofício no caput.",
      "effect": "restringe"
    },
    {
      "item": "Preventiva, art. 311 do CPP",
      "ce": "Juiz, a requerimento do MP, do querelante ou do assistente, ou por representação da autoridade.",
      "cf": "Texto do Prompt 121. Não é temporária.",
      "effect": "separa"
    },
    {
      "item": "Flagrante",
      "ce": "CF, art. 5º, LXI: flagrante ou ordem escrita e fundamentada.",
      "cf": "O rito do auto não se reabre aqui.",
      "effect": "separa"
    },
    {
      "item": "Transação",
      "ce": "Pena restritiva ou multa. Não gera reincidência.",
      "cf": "Suspensão do processo não aplica pena; suspende o processo.",
      "effect": "separa"
    },
    {
      "item": "Delegado",
      "ce": "Conduz a investigação e indicia, § 6º.",
      "cf": "Avocação é ato do superior, § 4º.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 123011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Na Lei nº 7.960/1989, o prazo de cinco dias da prisão temporária e a soltura ao término estão no art. 5º.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. O prazo de cinco dias está no caput do art. 2º. A soltura, independentemente de nova ordem, está no § 7º do art. 2º. O art. 5º é o plantão."
    },
    {
      "id": 123012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Sobre o art. 90-A da Lei nº 9.099/1995, no texto extraído do Planalto,",
      "correct": "b",
      "options": [
        {
          "key": "a",
          "label": "veda a lei nos crimes de violência doméstica contra a mulher, por inclusão da Lei nº 11.340/2006."
        },
        {
          "key": "b",
          "label": "diz que as disposições da lei não se aplicam no âmbito da Justiça Militar, por inclusão da Lei nº 9.839/1999."
        },
        {
          "key": "c",
          "label": "fixa em dois anos a pena máxima da infração de menor potencial ofensivo."
        },
        {
          "key": "d",
          "label": "é o termo circunstanciado."
        },
        {
          "key": "e",
          "label": "autoriza o delegado a indiciar."
        }
      ],
      "comentario": "Questão original, não é prova real. A página do art. 90-A só afasta a Justiça Militar. A vedação da violência doméstica contra a mulher está no art. 41 da Lei nº 11.340, Prompt 111."
    },
    {
      "id": 123013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Na Lei nº 12.830/2013, o indiciamento",
      "correct": "d",
      "options": [
        {
          "key": "a",
          "label": "pode ser feito pelo agente de polícia, sem fundamentação."
        },
        {
          "key": "b",
          "label": "está no § 4º, que também veda a prisão do advogado por desacato."
        },
        {
          "key": "c",
          "label": "é ato do juiz, de ofício."
        },
        {
          "key": "d",
          "label": "é privativo do delegado e se dá por ato fundamentado, com análise técnico-jurídica, no § 6º."
        },
        {
          "key": "e",
          "label": "está em artigo que a lei não tem, o art. 5º."
        }
      ],
      "comentario": "Questão original, não é prova real. O § 6º escreve o indiciamento privativo e fundamentado. O § 4º é avocação ou redistribuição. Não há regra de desacato nesta lei. Não há art. 5º."
    }
  ],
  "toc": [
    {
      "id": "p123-1",
      "num": "1",
      "label": "Art. 1º · hipóteses"
    },
    {
      "id": "p123-STF",
      "num": "STF",
      "label": "ADI 3360 e ADI 4109"
    },
    {
      "id": "p123-2",
      "num": "2",
      "label": "Art. 2º · prazo e decreto"
    },
    {
      "id": "p123-30",
      "num": "30",
      "label": "Prazo de 30 dias"
    },
    {
      "id": "p123-3",
      "num": "3",
      "label": "Art. 3º · separação"
    },
    {
      "id": "p123-4",
      "num": "4",
      "label": "Art. 4º · norma de alteração"
    },
    {
      "id": "p123-5",
      "num": "5",
      "label": "Art. 5º · plantão"
    },
    {
      "id": "p123-60",
      "num": "60",
      "label": "Art. 60"
    },
    {
      "id": "p123-61",
      "num": "61",
      "label": "Art. 61"
    },
    {
      "id": "p123-69",
      "num": "69",
      "label": "Art. 69"
    },
    {
      "id": "p123-72",
      "num": "72",
      "label": "Art. 72"
    },
    {
      "id": "p123-73",
      "num": "73",
      "label": "Art. 73"
    },
    {
      "id": "p123-74",
      "num": "74",
      "label": "Art. 74"
    },
    {
      "id": "p123-75",
      "num": "75",
      "label": "Art. 75"
    },
    {
      "id": "p123-76",
      "num": "76",
      "label": "Art. 76"
    },
    {
      "id": "p123-77",
      "num": "77",
      "label": "Art. 77"
    },
    {
      "id": "p123-78",
      "num": "78",
      "label": "Art. 78"
    },
    {
      "id": "p123-79",
      "num": "79",
      "label": "Art. 79"
    },
    {
      "id": "p123-80",
      "num": "80",
      "label": "Art. 80"
    },
    {
      "id": "p123-81",
      "num": "81",
      "label": "Art. 81"
    },
    {
      "id": "p123-82",
      "num": "82",
      "label": "Art. 82"
    },
    {
      "id": "p123-88",
      "num": "88",
      "label": "Art. 88"
    },
    {
      "id": "p123-89",
      "num": "89",
      "label": "Art. 89"
    },
    {
      "id": "p123-90",
      "num": "90",
      "label": "Art. 90"
    },
    {
      "id": "p123-90A",
      "num": "90-A",
      "label": "Art. 90-A"
    },
    {
      "id": "p123-91",
      "num": "91",
      "label": "Art. 91"
    },
    {
      "id": "p123-92",
      "num": "92",
      "label": "Art. 92"
    },
    {
      "id": "p123-93",
      "num": "93",
      "label": "Art. 93"
    },
    {
      "id": "p123-94",
      "num": "94",
      "label": "Art. 94"
    },
    {
      "id": "p123-95",
      "num": "95",
      "label": "Art. 95"
    },
    {
      "id": "p123-96",
      "num": "96",
      "label": "Art. 96"
    },
    {
      "id": "p123-97",
      "num": "97",
      "label": "Art. 97"
    },
    {
      "id": "p123-L121",
      "num": "L12-1",
      "label": "Lei 12.830, art. 1º"
    },
    {
      "id": "p123-L122",
      "num": "L12-2",
      "label": "Lei 12.830, art. 2º"
    },
    {
      "id": "p123-L123",
      "num": "L12-3",
      "label": "Lei 12.830, art. 3º"
    },
    {
      "id": "p123-L124",
      "num": "L12-4",
      "label": "Lei 12.830, art. 4º"
    }
  ],
  "clocks": [],
  "organKicker": "Recorte",
  "organTitle": "Leis processuais penais especiais",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a regra que ele escreve.",
  "closing": "Conferir a fonte se houver atualização posterior à consulta de 20/10/2026.",
  "palette": "warm",
  "highlight": {
    "big": "36",
    "small": "blocos neste prompt"
  },
  "heroLead": "Pedido 88, agora completo. A numeração do pedido não foi seguida quando a lei numera de outro modo. O art. 90-A não foi completado com a vedação da violência doméstica, porque a pá",
  "footerLine": "Prompt 123 · pedido 88.",
  "nextLine": "Prompt 124 · pedido 89 · disposições constitucionais do processo penal.",
  "closingMnemonic": "Texto primeiro. Número divergente segue a lei. Lacuna não se completa.",
  "rolesTitle": "Limite",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "Não misture",
  "compareLead": "Instituto vizinho não empresta requisito.",
  "compareLeft": "Um",
  "compareRight": "Outro"
};
