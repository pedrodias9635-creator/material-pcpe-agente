import type { StudyModule } from "./study";

export const PROMPT128: StudyModule = {
  "short": "Reescrita e padrão ofício",
  "eyebrow": "Prompt 128 · pedido 93",
  "title": "Reescrita e padrão ofício",
  "subtitle": "parônimos e Manual de 2018",
  "description": "Pedido 93. O Manual citado é a 3ª edição, 2018. Fecho, margem e fonte são os do trecho consultado. Autoridade que não está na nota não recebe pronome inventado.",
  "reading": "Manual de Redação da Presidência da República, 3ª edição, 2018. Reproduções do ICMBio e do Ifac, consultadas em 20/10/2026.",
  "terms": [
    "padrão ofício",
    "Respeitosamente",
    "parônimo",
    "reescrita",
    "Vossa Excelência"
  ],
  "subject": "Língua Portuguesa",
  "context": [
    "Os Prompts 62 a 122 do app já estão ocupados. Este pedido foi gravado com número novo.",
    "Número que não bate com a lei segue o texto oficial, e a divergência é dita.",
    "Súmula só entra com enunciado confirmado."
  ],
  "importance": "A banca troca prazo, requisito e nome de instituto.",
  "distinctions": [
    "A 3ª edição unifica aviso, ofício e memorando sob o nome ofício.",
    "Respeitosamente é para superior. Atenciosamente é para igual, inferior ou demais casos.",
    "Margem esquerda no mínimo 3 cm. Direita 1,5 cm. Superior e inferior 2 cm.",
    "Fonte Calibri ou Carlito, corpo 12. Recuo 2,5 cm. 6 pontos após o parágrafo.",
    "Ratificar confirma. Retificar corrige."
  ],
  "organs": [
    {
      "sigla": "1",
      "nome": "Reescrita",
      "funcao": "A banca aceita sinônimo e rejeita a alternativa que acrescenta um dado.",
      "base": "Pedido 93",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "yellow"
    },
    {
      "sigla": "2",
      "nome": "Parônimos e homônimos",
      "funcao": "Ratificar confirma. Retificar corrige. A banca inverte.",
      "base": "Pedido 93",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "cyan"
    },
    {
      "sigla": "3",
      "nome": "Padrão ofício",
      "funcao": "A unificação é sob o nome ofício, não sob outro nome.",
      "base": "Pedido 93",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "orange"
    },
    {
      "sigla": "4",
      "nome": "Fecho, fonte e margem",
      "funcao": "Superior: Respeitosamente. Igual ou inferior: Atenciosamente.",
      "base": "Pedido 93",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "violet"
    },
    {
      "sigla": "5",
      "nome": "Pronome de tratamento",
      "funcao": "Vossa, para quem se fala. Sua, para quem se fala sobre.",
      "base": "Pedido 93",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "emerald"
    },
    {
      "sigla": "6",
      "nome": "O que o padrão não é",
      "funcao": "Padrão ofício não autoriza juízo de culpa.",
      "base": "Pedido 93",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "sky"
    }
  ],
  "swaps": [
    {
      "wrong": "Memorando continua na 3ª edição.",
      "right": "A 3ª edição usa ofício nas três hipóteses."
    },
    {
      "wrong": "Atenciosamente para o superior.",
      "right": "Superior: Respeitosamente."
    },
    {
      "wrong": "Ratificar é corrigir.",
      "right": "Ratificar confirma. Retificar corrige."
    }
  ],
  "timeline": [
    {
      "when": "Pedido",
      "title": "93",
      "text": "Gravado como Prompt 128."
    },
    {
      "when": "Limite",
      "title": "Recorte",
      "text": "Manual de Redação da Presidência da República, 3ª edição, 2018. Reproduções do ICMBio e do Ifac, consultadas em 20/10/2026."
    }
  ],
  "articles": [
    {
      "id": "p128-1",
      "num": "1",
      "kicker": "Pedido 93",
      "title": "Reescrita",
      "lead": "Reescrita",
      "plate": "Reescrita",
      "plateSource": "Pedido 93",
      "devices": [
        {
          "tag": "regra",
          "name": "Reescrita",
          "hook": "Reescrever não acrescenta fato.",
          "literal": "Reescrever mantém o sentido. Não se acrescenta causa, tempo, agente ou juízo. Não se troca 'não' por afirmação, nem restrição por generalização.\nParáfrase fiel troca a forma e conserva a relação lógica. Se o original tem concessão, a reescrita não vira causa.\nNominalização transforma verbo em nome: 'lavrar o termo' pode virar 'a lavratura do termo', se o agente e o objeto continuarem identificáveis.\nVoz ativa põe o agente como sujeito. Voz passiva analítica: ser mais particípio, e o agente, se aparece, vem com por. Passiva sintética: verbo mais se, com sujeito paciente. 'Lavrou-se o termo' não tem agente expresso. Não se invente quem lavrou.\nReflexiva não é passiva. 'O agente se apresentou' não é 'o agente foi apresentado'.\nDiscurso direto reproduz a fala, com travessão ou aspas. Indireto integra a fala, com verbo de dizer e, em regra, mudança de pessoa, tempo e advérbio: 'hoje' pode virar 'naquele dia', se o relato é posterior. Indireto livre mistura as duas marcas. Na conversão, não se mude o conteúdo da fala.\nNão se 'corrija' citação oficial. Reescrita de item de prova não autoriza melhorar o fato.",
          "context": "Reescrita",
          "exam": "A banca aceita sinônimo e rejeita a alternativa que acrescenta um dado.",
          "trap": "Não transforme concessão em causa na reescrita.",
          "example": "'Embora o prazo fosse curto, o termo saiu' não se reescreve como 'o termo saiu porque o prazo era curto'.",
          "mnemonic": "Reescrever não acrescenta fato.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p128-2",
      "num": "2",
      "kicker": "Pedido 93",
      "title": "Parônimos e homônimos",
      "lead": "Parônimos e homônimos",
      "plate": "Parônimos e homônimos",
      "plateSource": "Pedido 93",
      "devices": [
        {
          "tag": "regra",
          "name": "Parônimos e homônimos",
          "hook": "Ratificar confirma. Retificar corrige.",
          "literal": "Parônimos têm grafia parecida e sentido diferente. Homônimos têm som igual, ou som e grafia iguais, e sentido diferente.\nPares de prova, no sentido cobrado:\nabsolver: inocentar. absorver: recolher, sorver.\napreçar: avaliar preço. apressar: dar pressa.\ncumprimento: saudação ou ato de cumprir. comprimento: extensão.\ndeferir: conceder. diferir: adiar ou ser diferente.\ndescrição: ato de descrever. discrição: reserva.\ndespensa: lugar de mantimentos. dispensa: ato de dispensar.\nemergir: vir à tona. imergir: mergulhar.\nemigrar: sair do lugar. imigrar: entrar no lugar.\neminente: elevado. iminente: prestes a ocorrer.\nflagrante: evidente, ou a situação jurídica já lida nas leis. fragrante: aromático.\nmandado: ordem escrita. mandato: procuração ou período de cargo.\nprescrever: ordenar, ou perder a pretensão pelo tempo, no sentido jurídico. proscrever: banir, condenar ao exílio ou afastar.\nratificar: confirmar. retificar: corrigir.\ntráfego: trânsito, fluxo. tráfico: comércio ilícito, no uso penal já lido. Não se descreve o comércio.\nsoar: produzir som. suar: transpirar.\ncessão, seção e sessão já foram separadas no Prompt 125.\nNão se invente parônimo para preencher lista. Se a palavra não está aqui e a dúvida permanece, conferir o vocabulário.",
          "context": "Parônimos e homônimos",
          "exam": "Ratificar confirma. Retificar corrige. A banca inverte.",
          "trap": "Não use tráfico por tráfego.",
          "example": "'O delegado retificou o termo e ratificou a data.' Corrigiu o termo e confirmou a data.",
          "mnemonic": "Ratificar confirma. Retificar corrige.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p128-3",
      "num": "3",
      "kicker": "Pedido 93",
      "title": "Padrão ofício",
      "lead": "Padrão ofício",
      "plate": "Padrão ofício",
      "plateSource": "Pedido 93",
      "devices": [
        {
          "tag": "regra",
          "name": "Padrão ofício",
          "hook": "Três nomes antigos. Um nome novo: ofício.",
          "literal": "Manual de Redação da Presidência da República, 3ª edição, 2018, nas reproduções consultadas, entre elas a hospedada pelo ICMBio e a do Ifac.\nAté a edição anterior, aviso, ofício e memorando distinguiam-se pela finalidade. Aviso era expedido por ministro de Estado a autoridade de mesma hierarquia. Ofício, pelas demais autoridades. Memorando, entre unidades de um mesmo órgão.\nA 3ª edição aboliu essa distinção e passou a usar o termo ofício nas três hipóteses. Não se chama a forma unificada de 'comunicado'. O nome que o Manual adota é ofício, no que se chama padrão ofício.\nElementos, na ordem que o Manual anuncia: vocativo, na forma de tratamento; nome do destinatário; cargo; endereço. O texto não completa, nesta sessão, item que a página consultada cortou.\nO documento trata de assunto de serviço. Clareza, concisão, objetividade e uso do padrão formal. Não se usa linguagem de ataque nem adjetivo que a prova costuma marcar como opinativo sem necessidade.",
          "context": "Padrão ofício",
          "exam": "A unificação é sob o nome ofício, não sob outro nome.",
          "trap": "Não diga que o memorando continua como forma interna na 3ª edição.",
          "example": "Comunicação entre duas unidades do mesmo órgão, na 3ª edição, também se chama ofício.",
          "mnemonic": "Três nomes antigos. Um nome novo: ofício.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p128-4",
      "num": "4",
      "kicker": "Pedido 93",
      "title": "Fecho, fonte e margem",
      "lead": "Fecho, fonte e margem",
      "plate": "Fecho, fonte e margem",
      "plateSource": "Pedido 93",
      "devices": [
        {
          "tag": "regra",
          "name": "Fecho, fonte e margem",
          "hook": "3 cm à esquerda, no mínimo. 1,5 à direita. 2 em cima e embaixo.",
          "literal": "O Manual estabelece dois fechos para comunicação oficial entre autoridades brasileiras.\nRespeitosamente: autoridade de hierarquia superior à do remetente, inclusive o Presidente da República.\nAtenciosamente: mesma hierarquia, hierarquia inferior ou demais casos.\nComunicação a autoridade estrangeira fica fora dessa fórmula. O Manual não foi aberto, nesta sessão, no rito estrangeiro. Não se inventa fecho.\nFormatação do fecho, no trecho consultado: alinhado à margem esquerda; recuo de 2,5 cm; espaçamento simples; 6 pontos após o parágrafo; não se numera.\nPapel A4. Margem esquerda de no mínimo 3 cm. Margem direita de 1,5 cm. Margens superior e inferior de 2 cm.\nFonte do corpo: Calibri ou Carlito, tamanho 12.\nParágrafos: espaçamento simples; 6 pontos após cada parágrafo; recuo de 2,5 cm. Numeração só quando houver três ou mais parágrafos, a partir do primeiro. Não se numeram vocativo nem fecho.\nNão se calcula outra margem. Não se troca Calibri por Times como se o Manual o mandasse.",
          "context": "Fecho, fonte e margem",
          "exam": "Superior: Respeitosamente. Igual ou inferior: Atenciosamente.",
          "trap": "Não inverta os fechos. Não use 'sem mais para o momento' como fecho do Manual.",
          "example": "Agente que escreve a autoridade de hierarquia superior encerra com Respeitosamente.",
          "mnemonic": "3 cm à esquerda, no mínimo. 1,5 à direita. 2 em cima e embaixo.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p128-5",
      "num": "5",
      "kicker": "Pedido 93",
      "title": "Pronome de tratamento",
      "lead": "Pronome de tratamento",
      "plate": "Pronome de tratamento",
      "plateSource": "Pedido 93",
      "devices": [
        {
          "tag": "regra",
          "name": "Pronome de tratamento",
          "hook": "Vossa na fala direta. Verbo na terceira.",
          "literal": "O pronome de tratamento é de terceira pessoa. 'Vossa Excelência determinará', não 'determinareis' nem 'determinará Vossa Excelência' com verbo na segunda pessoa.\nVossa se usa ao dirigir-se à autoridade. Sua se usa ao falar dela a terceiro.\nFormas estáveis, sem abrir a tabela inteira: Vossa Excelência para altas autoridades; Vossa Senhoria para as demais autoridades e para particulares, na sistemática do Manual; Vossa Magnificência para reitor de universidade.\nA lista completa de quem recebe Vossa Excelência é tabela do Manual. Não se inclui autoridade por aproximação. Se a questão nomear cargo que não está nesta nota, conferir a tabela. Não se inventa.\nO vocativo corresponde ao tratamento. Não se acumula título. A 3ª edição simplifica o vocativo. Não se afirma, nesta sessão, a frase literal sobre 'digníssimo' porque o trecho não foi transcrito palavra por palavra. A orientação de prova, compatível com a edição, é não inventar honraria.\nCargo vai com inicial maiúscula quando compõe o endereçamento oficial. No corpo, a repetição desnecessária não é exigência.",
          "context": "Pronome de tratamento",
          "exam": "Vossa, para quem se fala. Sua, para quem se fala sobre.",
          "trap": "Não flexione o verbo na segunda pessoa.",
          "example": "'Informo a Vossa Senhoria que o termo segue anexo.' O verbo fica em terceira pessoa.",
          "mnemonic": "Vossa na fala direta. Verbo na terceira.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p128-6",
      "num": "6",
      "kicker": "Pedido 93",
      "title": "O que o padrão não é",
      "lead": "O que o padrão não é",
      "plate": "O que o padrão não é",
      "plateSource": "Pedido 93",
      "devices": [
        {
          "tag": "regra",
          "name": "O que o padrão não é",
          "hook": "Ofício informa. Não condena.",
          "literal": "Ofício não é petição judicial, não é relatório técnico e não é mensagem de aplicativo. Cada gênero tem forma própria.\nNão se usa o ofício para opinar sobre culpa. O documento pede, informa, encaminha ou responde, no limite da competência de quem assina.\nSigla se explica na primeira menção, se o destinatário pode não a conhecer. Data por extenso no fecho de local e data, alinhada à direita, é o uso do padrão. Não se invente cidade.\nAnexo se identifica. 'Anexo' concorda, como no Prompt 127, quando é adjetivo.\nCópia e encaminhamento não se confundem com o destinatário principal. Não se omita o destinatário para 'agilizar'.\nSe o órgão local tiver manual próprio, ele pode detalhar timbre e numeração. Não se apresenta esse detalhe como se fosse o Manual da Presidência, se não foi lido.",
          "context": "O que o padrão não é",
          "exam": "Padrão ofício não autoriza juízo de culpa.",
          "trap": "Não chame de memorando, na 3ª edição, a comunicação interna.",
          "example": "Encaminhar certidão a autoridade superior pede Respeitosamente e verbo na terceira pessoa.",
          "mnemonic": "Ofício informa. Não condena.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 128",
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
  "rolePlateSource": "Prompt 128",
  "summary": [
    {
      "item": "Unificação",
      "rule": "Aviso, ofício e memorando passam a se chamar ofício.",
      "clue": "Não é comunicado."
    },
    {
      "item": "Fecho",
      "rule": "Superior: Respeitosamente. Igual ou inferior: Atenciosamente.",
      "clue": "Presidente entra em Respeitosamente."
    },
    {
      "item": "Margem",
      "rule": "Esquerda no mínimo 3 cm. Direita 1,5. Superior e inferior 2.",
      "clue": "A4."
    },
    {
      "item": "Fonte",
      "rule": "Calibri ou Carlito, corpo 12.",
      "clue": "6 pontos após o parágrafo. Recuo 2,5 cm."
    },
    {
      "item": "Numeração",
      "rule": "Só com três ou mais parágrafos. Vocativo e fecho não se numeram.",
      "clue": "A partir do primeiro."
    },
    {
      "item": "Ratificar",
      "rule": "Confirma.",
      "clue": "Retificar corrige."
    }
  ],
  "compare": [
    {
      "item": "Respeitosamente",
      "ce": "Hierarquia superior, inclusive o Presidente.",
      "cf": "Atenciosamente: igual, inferior ou demais casos.",
      "effect": "separa"
    },
    {
      "item": "Vossa",
      "ce": "Fala à autoridade.",
      "cf": "Sua: fala sobre a autoridade.",
      "effect": "separa"
    },
    {
      "item": "Ofício, 3ª ed.",
      "ce": "Nome único das três hipóteses antigas.",
      "cf": "Memorando era a forma interna anterior.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 128011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Na 3ª edição do Manual de Redação da Presidência da República, aviso, ofício e memorando foram unificados sob o nome comunicado.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. A distinção foi abolida, e o termo adotado nas três hipóteses é ofício, no padrão ofício. Comunicado não é o nome da unificação."
    },
    {
      "id": 128012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Segundo o Manual, 3ª edição, o fecho e a margem corretos para comunicação a autoridade superior são",
      "correct": "a",
      "options": [
        {
          "key": "a",
          "label": "Respeitosamente; margem esquerda de no mínimo 3 cm e direita de 1,5 cm."
        },
        {
          "key": "b",
          "label": "Atenciosamente; margem esquerda de 1,5 cm e direita de 3 cm."
        },
        {
          "key": "c",
          "label": "Sem mais, fonte Times, corpo 14."
        },
        {
          "key": "d",
          "label": "Respeitosamente, só para autoridade inferior."
        },
        {
          "key": "e",
          "label": "Atenciosamente para o Presidente da República, por ser caso especial de cortesia."
        }
      ],
      "comentario": "Questão original, não é prova real. Superior, inclusive o Presidente: Respeitosamente. Esquerda no mínimo 3 cm. Direita 1,5 cm. Superior e inferior 2 cm. Fonte Calibri ou Carlito, corpo 12."
    },
    {
      "id": 128013,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Ratificar é corrigir. Retificar é confirmar. Eminente significa prestes a ocorrer.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Ratificar confirma. Retificar corrige. Eminente é elevado. Iminente é o que está prestes a ocorrer."
    },
    {
      "id": 128014,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A reescrita que preserva o sentido de 'Embora não houvesse flagrante, o fato foi registrado' é",
      "correct": "c",
      "options": [
        {
          "key": "a",
          "label": "O fato foi registrado porque não havia flagrante."
        },
        {
          "key": "b",
          "label": "Não havia flagrante, portanto o fato não foi registrado."
        },
        {
          "key": "c",
          "label": "Não havia flagrante, mas o fato foi registrado."
        },
        {
          "key": "d",
          "label": "O flagrante foi o motivo do registro."
        },
        {
          "key": "e",
          "label": "O fato deixou de ser registrado, já que não havia flagrante."
        }
      ],
      "comentario": "Questão original, não é prova real. Embora é concessão. A reescrita fiel mantém o registro apesar da ausência de flagrante. Não vira causa nem nega o registro."
    },
    {
      "id": 128015,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Ao dirigir-se à autoridade, usa-se Vossa, e o verbo fica na terceira pessoa. Ao falar dela a terceiro, usa-se Sua.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. Vossa Excelência determinará. Sua Excelência determinou, no relato a terceiro."
    }
  ],
  "toc": [
    {
      "id": "p128-1",
      "num": "1",
      "label": "Reescrita"
    },
    {
      "id": "p128-2",
      "num": "2",
      "label": "Parônimos e homônimos"
    },
    {
      "id": "p128-3",
      "num": "3",
      "label": "Padrão ofício"
    },
    {
      "id": "p128-4",
      "num": "4",
      "label": "Fecho, fonte e margem"
    },
    {
      "id": "p128-5",
      "num": "5",
      "label": "Pronome de tratamento"
    },
    {
      "id": "p128-6",
      "num": "6",
      "label": "O que o padrão não é"
    }
  ],
  "clocks": [],
  "organKicker": "Recorte",
  "organTitle": "Reescrita e padrão ofício",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a regra que ele escreve.",
  "closing": "Conferir a fonte se houver atualização posterior à consulta de 20/10/2026.",
  "palette": "ember",
  "highlight": {
    "big": "6",
    "small": "blocos neste prompt"
  },
  "heroLead": "Pedido 93. O Manual citado é a 3ª edição, 2018. Fecho, margem e fonte são os do trecho consultado. Autoridade que não está na nota não recebe pronome inventado.",
  "footerLine": "Prompt 128 · pedido 93.",
  "nextLine": "Prompt 129 · pedido 94 · Windows. Atalho do pedido que não confere será corrigido.",
  "closingMnemonic": "Texto primeiro. Número divergente segue a lei. Lacuna não se completa.",
  "rolesTitle": "Limite",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "Não misture",
  "compareLead": "Instituto vizinho não empresta requisito.",
  "compareLeft": "Um",
  "compareRight": "Outro"
};
