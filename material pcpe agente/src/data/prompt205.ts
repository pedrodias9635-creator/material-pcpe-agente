import type { StudyModule } from "./study";

export const PROMPT205: StudyModule = {
  "short": "Precatórios",
  "eyebrow": "Prompt 205 · lacuna do edital",
  "title": "Precatórios",
  "subtitle": "art. 100",
  "description": "Pagamento de sentença contra a Fazenda segue a ordem de apresentação do precatório. Pequeno valor não é precatório. Alimentar prefere, salvo a preferência do § 2º. O índice do § 12 está marcado por ADI e não foi substituído por outro número.",
  "reading": "CF/88, compilação do Planalto consultada em 22/10/2026. Art. 100. Emendas 62/2009, 94/2016, 113/2021 e 136/2025. Texto riscado não foi copiado. O valor em reais do benefício previdenciário não está no artigo.",
  "terms": [
    "1º de fevereiro",
    "60 anos",
    "triplo",
    "pequeno valor"
  ],
  "subject": "Direito Constitucional",
  "context": [
    "Fonte: compilação do Planalto consultada em 22/10/2026.",
    "Redação riscada não foi copiada.",
    "O § 7º só nomeia crime de responsabilidade. Não descreve o ato."
  ],
  "importance": "A banca troca 1º de fevereiro por 1º de julho, 60 anos por 65, e trata requisição de pequeno valor como precatório.",
  "distinctions": [
    "Caput: ordem cronológica de apresentação. Vedada a designação de caso ou de pessoa na dotação.",
    "Alimentar, no § 1º, redação da Emenda 136/2025, prefere aos demais, exceto ao § 2º.",
    "§ 2º: titular originário ou sucessor com 60 anos, doença grave ou deficiência. Preferência até o triplo do pequeno valor. O restante volta à ordem cronológica. Fracionar, aqui, só para essa preferência.",
    "§ 3º: pequeno valor, definido em lei, não segue a expedição de precatório.",
    "§ 4º: o mínimo desse pequeno valor é o maior benefício do regime geral. O artigo não escreve o valor em reais.",
    "§ 5º, Emenda 136/2025: precatório apresentado até 1º de fevereiro paga-se até o final do exercício seguinte.",
    "§ 6º: sequestro só no preterimento da precedência ou na falta de alocação do valor. Quem autoriza é o Presidente do Tribunal.",
    "§ 8º veda precatório complementar do que já foi pago e veda quebrar a execução para caber no pequeno valor. Não se confunde com o fracionamento do § 2º.",
    "§ 10: a Fazenda tem 30 dias para informar o débito do § 9º. Silêncio perde o abatimento.",
    "§ 13: cessão não depende do devedor. O cessionário não usa os §§ 2º e 3º.",
    "§ 20: precatório acima de 15% do montante paga 15% até o final do exercício seguinte. Acordo direto reduz no máximo 40%.",
    "§ 23, Emenda 136/2025: Estado, Distrito Federal e Município. Sem estoque ou estoque de até 15% da receita corrente líquida do ano anterior: 1%. Acima de 85%: 5%. Os degraus intermediários sobem de 0,5 em 0,5 ponto nos cortes de 25%, 35%, 45%, 55%, 65% e 75%. A União não está nesse parágrafo.",
    "O § 12 escreve o índice da poupança e marca a ADI 4425. Este assunto não troca esse índice por outro."
  ],
  "organs": [
    {
      "sigla": "100",
      "nome": "Art. 100",
      "funcao": "Ordem cronológica. Pequeno valor fica fora.",
      "base": "CF art. 100",
      "nao": "1º de julho não é a data vigente do § 5º.",
      "tone": "yellow"
    },
    {
      "sigla": "§2",
      "nome": "Superpreferência",
      "funcao": "60 anos, doença grave ou deficiência, até o triplo.",
      "base": "Art. 100, § 2º",
      "nao": "Não é 65 anos e não alcança o crédito inteiro.",
      "tone": "cyan"
    },
    {
      "sigla": "§23",
      "nome": "Teto local",
      "funcao": "1% a 5% da receita corrente líquida, conforme o estoque.",
      "base": "Art. 100, § 23",
      "nao": "Não é teto da União.",
      "tone": "orange"
    }
  ],
  "swaps": [
    {
      "wrong": "Apresentado até 1º de julho.",
      "right": "Até 1º de fevereiro. Pagamento até o fim do exercício seguinte."
    },
    {
      "wrong": "Idoso de 65 anos leva o crédito inteiro.",
      "right": "60 anos, até o triplo do pequeno valor."
    }
  ],
  "timeline": [
    {
      "when": "Fonte",
      "title": "Compilação",
      "text": "CF/88, compilação do Planalto consultada em 22/10/2026. Art. 100, com a Emenda Constitucional nº 136, de 2025, nos §§ 1º, 5º e 23."
    },
    {
      "when": "Limite",
      "title": "Sem cifra",
      "text": "O maior benefício do regime geral não foi convertido em reais. O índice do § 12 não foi substituído."
    }
  ],
  "articles": [
    {
      "id": "p205-100",
      "num": "100",
      "kicker": "CF art. 100",
      "title": "Ordem e preferência",
      "lead": "Art. 100",
      "plate": "1º/fev",
      "plateSource": "Art. 100, § 5º",
      "devices": [
        {
          "tag": "100",
          "name": "Caput e §§ 1º a 5º",
          "hook": "Ordem cronológica. 60 anos. 1º de fevereiro.",
          "literal": "Art. 100. Os pagamentos devidos pelas Fazendas Públicas Federal, Estaduais, Distrital e Municipais, em virtude de sentença judiciária, far-se-ão exclusivamente na ordem cronológica de apresentação dos precatórios e à conta dos créditos respectivos, proibida a designação de casos ou de pessoas nas dotações orçamentárias e nos créditos adicionais abertos para este fim. (Redação dada pela Emenda Constitucional nº 62, de 2009) § 1º Os débitos de natureza alimentícia compreendem aqueles decorrentes da relação laboral ou previdenciária, independentemente da sua natureza tributária, inclusive os oriundos de repetição de indébito incidente sobre remuneração ou proventos de aposentadoria, bem como indenizações por morte ou por invalidez, fundadas em responsabilidade civil, em virtude de sentença judicial transitada em julgado, e serão pagos com preferência sobre todos os demais débitos, exceto sobre aqueles referidos no § 2º deste artigo. (Redação dada pela Emenda Constitucional nº 136, de 2025) § 2º Os débitos de natureza alimentícia cujos titulares, originários ou por sucessão hereditária, tenham 60 (sessenta) anos de idade, ou sejam portadores de doença grave, ou pessoas com deficiência, assim definidos na forma da lei, serão pagos com preferência sobre todos os demais débitos, até o valor equivalente ao triplo fixado em lei para os fins do disposto no § 3º deste artigo, admitido o fracionamento para essa finalidade, sendo que o restante será pago na ordem cronológica de apresentação do precatório. (Redação dada pela Emenda Constitucional nº 94, de 2016) § 3º O disposto no caput deste artigo relativamente à expedição de precatórios não se aplica aos pagamentos de obrigações definidas em leis como de pequeno valor que as Fazendas referidas devam fazer em virtude de sentença judicial transitada em julgado. § 5º É obrigatória a inclusão no orçamento das entidades de direito público de verba necessária ao pagamento de seus débitos oriundos de sentenças transitadas em julgado constantes de precatórios judiciários apresentados até 1º de fevereiro, fazendo-se o pagamento até o final do exercício seguinte, quando terão seus valores atualizados monetariamente. (Redação dada pela Emenda Constitucional nº 136, de 2025)",
          "context": "O § 4º fixa o mínimo do pequeno valor no maior benefício do regime geral. Não há cifra.",
          "exam": "A banca ressuscita 1º de julho e estende a preferência do idoso ao crédito inteiro.",
          "trap": "Alimentar não prefere ao § 2º.",
          "example": "Sem exemplo de cálculo. O artigo não dá o valor do benefício.",
          "mnemonic": "Cronológica. 60 anos até o triplo. 1º de fevereiro.",
          "revoked": false
        },
        {
          "tag": "6",
          "name": "Sequestro, cessão e teto",
          "hook": "Sequestro não é atraso qualquer. Cessionário não leva o § 2º.",
          "literal": "§ 6º As dotações orçamentárias e os créditos abertos serão consignados diretamente ao Poder Judiciário, cabendo ao Presidente do Tribunal que proferir a decisão exequenda determinar o pagamento integral e autorizar, a requerimento do credor e exclusivamente para os casos de preterimento de seu direito de precedência ou de não alocação orçamentária do valor necessário à satisfação do seu débito, o sequestro da quantia respectiva. § 7º O Presidente do Tribunal competente que, por ato comissivo ou omissivo, retardar ou tentar frustrar a liquidação regular de precatórios incorrerá em crime de responsabilidade e responderá, também, perante o Conselho Nacional de Justiça. § 8º É vedada a expedição de precatórios complementares ou suplementares de valor pago, bem como o fracionamento, repartição ou quebra do valor da execução para fins de enquadramento de parcela do total ao que dispõe o § 3º deste artigo. § 10. Antes da expedição dos precatórios, o Tribunal solicitará à Fazenda Pública devedora, para resposta em até 30 (trinta) dias, sob pena de perda do direito de abatimento, informação sobre os débitos que preencham as condições estabelecidas no § 9º. § 13. O credor poderá ceder, total ou parcialmente, seus créditos em precatórios a terceiros, independentemente da concordância do devedor, não se aplicando ao cessionário o disposto nos §§ 2º e 3º. § 20. Caso haja precatório com valor superior a 15% (quinze por cento) do montante dos precatórios apresentados nos termos do § 5º deste artigo, 15% (quinze por cento) do valor deste precatório serão pagos até o final do exercício seguinte e o restante em parcelas iguais nos cinco exercícios subsequentes, acrescidas de juros de mora e correção monetária, ou mediante acordos diretos, perante Juízos Auxiliares de Conciliação de Precatórios, com redução máxima de 40% (quarenta por cento) do valor do crédito atualizado.",
          "context": "O § 7º só nomeia a consequência. Não descreve o ato. O § 12 escreve o índice da poupança e marca a ADI 4425; não foi trocado.",
          "exam": "A banca autoriza sequestro por mero atraso e dá ao cessionário a preferência do idoso.",
          "trap": "Quebrar a execução para caber no pequeno valor é o que o § 8º veda.",
          "example": "Sem exemplo de sequestro.",
          "mnemonic": "Sequestro: precedência ou falta de dotação. Cessão sem o § 2º. Acordo: até 40%.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 205",
      "does": [
        "Ler o texto antes do comentário"
      ],
      "doesNot": [
        "Não completar o índice do § 12",
        "Não descrever o crime nomeado no § 7º"
      ]
    }
  ],
  "roleNote": "Questões originais. Não são prova real.",
  "rolePlate": "Texto primeiro.",
  "rolePlateSource": "Prompt 205",
  "summary": [
    {
      "item": "§ 5º",
      "rule": "Até 1º de fevereiro. Pagamento até o fim do exercício seguinte.",
      "clue": "Emenda 136/2025. Não é 1º de julho."
    },
    {
      "item": "§ 2º",
      "rule": "60 anos, doença grave ou deficiência, até o triplo.",
      "clue": "O restante segue a ordem cronológica."
    },
    {
      "item": "§ 23",
      "rule": "Estado, Distrito Federal e Município: 1% a 5% da receita corrente líquida.",
      "clue": "O percentual sobe com o estoque em 1º de janeiro. A União não está no parágrafo."
    }
  ],
  "compare": [
    {
      "item": "Data",
      "ce": "1º de julho.",
      "cf": "1º de fevereiro.",
      "effect": "restringe"
    },
    {
      "item": "Idade",
      "ce": "65 anos, crédito inteiro.",
      "cf": "60 anos, até o triplo.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 205011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O débito alimentar do art. 100 prefere a todos os demais, inclusive ao débito alimentar de titular com 60 anos.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. O § 1º, redação da Emenda Constitucional nº 136, de 2025, prefere aos demais débitos, exceto aos do § 2º. O § 2º alcança titular originário ou sucessor com 60 anos, doença grave ou deficiência, até o triplo do pequeno valor."
    },
    {
      "id": 205012,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Precatório apresentado até 1º de fevereiro deve ser pago até o final do exercício seguinte.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. Art. 100, § 5º, redação da Emenda Constitucional nº 136, de 2025. A data antiga de 1º de julho não foi copiada."
    },
    {
      "id": 205013,
      "banca": "Estilo Cebraspe · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Sobre o art. 100 da Constituição, assinale a alternativa correta.",
      "correct": "c",
      "options": [
        {
          "key": "a",
          "label": "Obrigação de pequeno valor também se paga por precatório, e o mínimo é um valor em reais escrito no § 4º."
        },
        {
          "key": "b",
          "label": "O sequestro do § 6º cabe em qualquer atraso, e o cessionário herda a preferência do § 2º."
        },
        {
          "key": "c",
          "label": "Pequeno valor não segue a expedição de precatório, e o cessionário não se beneficia dos §§ 2º e 3º."
        },
        {
          "key": "d",
          "label": "O teto de 1% a 5% da receita corrente líquida vale para a União."
        },
        {
          "key": "e",
          "label": "O acordo do § 20 pode reduzir mais de 40% do crédito atualizado."
        }
      ],
      "comentario": "Questão original, não é prova real. A alternativa c junta os §§ 3º e 13. O mínimo do pequeno valor é o maior benefício do regime geral, sem cifra neste artigo. O § 23 não inclui a União. A redução do acordo é de no máximo 40%."
    }
  ],
  "toc": [
    {
      "id": "p205-100",
      "num": "100",
      "label": "Art. 100"
    }
  ],
  "clocks": [
    {
      "value": "1º/fev",
      "label": "Apresentação do precatório",
      "source": "Art. 100, § 5º"
    },
    {
      "value": "60",
      "label": "Anos da superpreferência",
      "source": "Art. 100, § 2º"
    },
    {
      "value": "40%",
      "label": "Redução máxima do acordo",
      "source": "Art. 100, § 20"
    }
  ],
  "organKicker": "Recorte",
  "organTitle": "Precatórios",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a troca.",
  "closing": "Conferir emenda posterior à consulta de 22/10/2026. O índice do § 12 não foi completado.",
  "palette": "azure",
  "highlight": {
    "big": "100",
    "small": "artigo deste assunto"
  },
  "heroLead": "Precatório segue a ordem de apresentação. Pequeno valor fica fora. Quem tem 60 anos, doença grave ou deficiência prefere até o triplo, não no crédito inteiro.",
  "nextLine": "O assunto seguinte continua na mesma disciplina.",
  "closingMnemonic": "1º de fevereiro. 60 anos até o triplo. Pequeno valor não é precatório.",
  "rolesLead": "O que o artigo não escreve não entra como se tivesse escrito.",
  "compareTitle": "O que a banca troca",
  "compareLead": "A esquerda é a armadilha. A direita é o texto.",
  "compareLeft": "Armadilha",
  "compareRight": "Texto"
};
