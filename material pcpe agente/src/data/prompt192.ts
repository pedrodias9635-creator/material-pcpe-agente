import type { StudyModule } from "./study";

export const PROMPT192: StudyModule = {
  "short": "Fiscal, encargos e recebimento",
  "eyebrow": "Prompt 192 · lacuna do edital",
  "title": "Fiscal, encargos e recebimento",
  "subtitle": "Lei nº 14.133, arts. 117, 121 e 140",
  "description": "O fiscal é um ou mais servidores designados. Terceiro pode auxiliar, mas não exerce a atribuição exclusiva de fiscal. Em serviço contínuo com dedicação exclusiva, a Administração responde solidariamente pelos encargos previdenciários e subsidiariamente pelos trabalhistas, se houver falha comprovada na fiscalização. Obra recebida em definitivo continua com responsabilidade objetiva do contratado por, no mínimo, cinco anos.",
  "reading": "Lei nº 14.133/2021, compilação do Planalto consultada em 21/10/2026. Arts. 117, 121 e 140.",
  "terms": [
    "fiscal",
    "solidária",
    "subsidiária",
    "cinco anos"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "O texto é o da compilação oficial conferida. Redação riscada não foi copiada.",
    "Artigo de mesmo número no ADCT não é este texto.",
    "O que não está escrito não se completa."
  ],
  "importance": "A banca troca prazo, nome do instituto e o ente competente.",
  "distinctions": [
    "Fiscal: um ou mais. Terceiro auxilia e não substitui a atribuição exclusiva.",
    "Regra geral: encargos são do contratado.",
    "Dedicação exclusiva e serviço contínuo: solidária no previdenciário e subsidiária no trabalhista, se falhar a fiscalização.",
    "Obra e serviço: recebimento provisório pelo fiscal, definitivo por servidor ou comissão, ambos com termo detalhado.",
    "Compra: provisório sumário. Definitivo com termo detalhado.",
    "Obra: no mínimo cinco anos de responsabilidade objetiva pela solidez, depois do recebimento definitivo."
  ],
  "organs": [
    {
      "sigla": "117",
      "nome": "Fiscal e encargos",
      "funcao": "Solidária não é a regra de todo contrato.",
      "base": "Lei 14.133, arts. 117 e 121",
      "nao": "Terceiro não vira fiscal.",
      "tone": "yellow"
    },
    {
      "sigla": "140",
      "nome": "Recebimento",
      "funcao": "Cinco anos é o mínimo da obra. Não é da compra.",
      "base": "Lei 14.133, art. 140",
      "nao": "Provisório de compra é sumário. O de obra pede termo detalhado.",
      "tone": "cyan"
    }
  ],
  "swaps": [
    {
      "wrong": "Solidária em todo contrato.",
      "right": "Só no serviço contínuo com dedicação exclusiva, e se a fiscalização falhar."
    }
  ],
  "timeline": [
    {
      "when": "Fonte",
      "title": "Compilação",
      "text": "Lei nº 14.133/2021, compilação do Planalto consultada em 21/10/2026. Arts. 117, 121 e 140."
    },
    {
      "when": "Limite",
      "title": "Sem invenção",
      "text": "Inciso não transcrito não foi inventado."
    }
  ],
  "articles": [
    {
      "id": "p192-117",
      "num": "117",
      "kicker": "Lei 14.133, arts. 117 e 121",
      "title": "Fiscal e encargos",
      "lead": "Fiscal e encargos",
      "plate": "Fiscal e encargos",
      "plateSource": "Lei 14.133, arts. 117 e 121",
      "devices": [
        {
          "tag": "117",
          "name": "Art. 117",
          "hook": "Auxilia. Não substitui. Falha comprovada.",
          "literal": "Art. 117. A execução do contrato deverá ser acompanhada e fiscalizada por 1 ou mais fiscais do contrato, representantes da Administração especialmente designados conforme requisitos estabelecidos no art. 7º, ou pelos respectivos substitutos, permitida a contratação de terceiros para assisti-los e subsidiá-los com informações pertinentes a essa atribuição. § 1º O fiscal anotará em registro próprio todas as ocorrências relacionadas à execução, determinando o que for necessário para a regularização das faltas ou dos defeitos observados. § 4º Na contratação de terceiros: I - a empresa ou o profissional contratado assumirá responsabilidade civil objetiva pela veracidade e pela precisão das informações prestadas, firmará termo de compromisso de confidencialidade e não poderá exercer atribuição própria e exclusiva de fiscal de contrato; II - a contratação de terceiros não eximirá de responsabilidade o fiscal do contrato, nos limites das informações recebidas do terceiro contratado. Art. 121. Somente o contratado será responsável pelos encargos trabalhistas, previdenciários, fiscais e comerciais resultantes da execução do contrato. § 1º A inadimplência do contratado em relação aos encargos trabalhistas, fiscais e comerciais não transferirá à Administração a responsabilidade pelo seu pagamento. § 2º Exclusivamente nas contratações de serviços contínuos com regime de dedicação exclusiva de mão de obra, a Administração responderá solidariamente pelos encargos previdenciários e subsidiariamente pelos encargos trabalhistas se comprovada falha na fiscalização do cumprimento das obrigações do contratado.",
          "context": "Solidária não é a regra de todo contrato.",
          "exam": "Solidária não é a regra de todo contrato.",
          "trap": "Terceiro não vira fiscal.",
          "example": "Sem modelo de relatório. O limite da responsabilidade basta.",
          "mnemonic": "Auxilia. Não substitui. Falha comprovada.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p192-140",
      "num": "140",
      "kicker": "Lei 14.133, art. 140",
      "title": "Recebimento",
      "lead": "Recebimento",
      "plate": "Recebimento",
      "plateSource": "Lei 14.133, art. 140",
      "devices": [
        {
          "tag": "140",
          "name": "Art. 140",
          "hook": "Termo detalhado. Cinco anos na obra.",
          "literal": "Art. 140. O objeto do contrato será recebido: I - em se tratando de obras e serviços: a) provisoriamente, pelo responsável por seu acompanhamento e fiscalização, mediante termo detalhado, quando verificado o cumprimento das exigências de caráter técnico; b) definitivamente, por servidor ou comissão designada pela autoridade competente, mediante termo detalhado que comprove o atendimento das exigências contratuais; II - em se tratando de compras: a) provisoriamente, de forma sumária, pelo responsável por seu acompanhamento e fiscalização, com verificação posterior da conformidade do material com as exigências contratuais; b) definitivamente, por servidor ou comissão designada pela autoridade competente, mediante termo detalhado que comprove o atendimento das exigências contratuais. § 2º O recebimento provisório ou definitivo não excluirá a responsabilidade civil pela solidez e pela segurança da obra ou do serviço. § 6º Em se tratando de obra, o recebimento definitivo não eximirá o contratado, pelo prazo mínimo de 5 anos, admitida a previsão de prazo de garantia superior no edital e no contrato, da responsabilidade objetiva pela solidez e pela segurança dos materiais e dos serviços executados e pela funcionalidade da construção, da reforma, da recuperação ou da ampliação do bem imóvel.",
          "context": "Cinco anos é o mínimo da obra. Não é da compra.",
          "exam": "Cinco anos é o mínimo da obra. Não é da compra.",
          "trap": "Provisório de compra é sumário. O de obra pede termo detalhado.",
          "example": "Sem checklist de obra. O prazo basta.",
          "mnemonic": "Termo detalhado. Cinco anos na obra.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 192",
      "does": [
        "Ler o texto antes do comentário"
      ],
      "doesNot": [
        "Não completar lacuna",
        "Não descrever meio de infração"
      ]
    }
  ],
  "roleNote": "Questões originais. Não são prova real.",
  "rolePlate": "Texto primeiro.",
  "rolePlateSource": "Prompt 192",
  "summary": [
    {
      "item": "Art. 121, § 2º",
      "rule": "Solidária no previdenciário.",
      "clue": "Subsidiária no trabalhista. Falha comprovada."
    },
    {
      "item": "Art. 140, § 6º",
      "rule": "Mínimo de 5 anos.",
      "clue": "Obra. Depois do recebimento definitivo."
    }
  ],
  "compare": [
    {
      "item": "Encargos",
      "ce": "Solidária em todo contrato.",
      "cf": "Só no serviço contínuo com dedicação exclusiva, e se a fiscalização falhar.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 192011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Em todo contrato, a Administração responde solidariamente pelos encargos previdenciários do contratado.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. A regra do caput do art. 121 põe os encargos no contratado. A solidariedade do § 2º é exclusiva do serviço contínuo com dedicação exclusiva de mão de obra, e ainda depende de falha comprovada na fiscalização."
    },
    {
      "id": 192012,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O recebimento definitivo da obra não exime o contratado da responsabilidade objetiva pela solidez, pelo prazo mínimo de cinco anos.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. Art. 140, § 6º. O edital pode prever prazo maior."
    },
    {
      "id": 192013,
      "banca": "Estilo Cebraspe · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O terceiro contratado para auxiliar o fiscal:",
      "correct": "b",
      "options": [
        {
          "key": "a",
          "label": "Pode exercer a atribuição exclusiva de fiscal."
        },
        {
          "key": "b",
          "label": "Não pode exercer atribuição própria e exclusiva de fiscal, e o fiscal continua responsável nos limites das informações recebidas."
        },
        {
          "key": "c",
          "label": "Substitui o fiscal e assume a gestão do contrato."
        },
        {
          "key": "d",
          "label": "Dispensa o registro das ocorrências."
        },
        {
          "key": "e",
          "label": "Responde apenas se for servidor estatutário."
        }
      ],
      "comentario": "Questão original, não é prova real. A alternativa b é o art. 117, § 4º."
    }
  ],
  "toc": [
    {
      "id": "p192-117",
      "num": "117",
      "label": "Fiscal e encargos"
    },
    {
      "id": "p192-140",
      "num": "140",
      "label": "Recebimento"
    }
  ],
  "clocks": [
    {
      "value": "5",
      "label": "Anos mínimos, solidez da obra",
      "source": "Art. 140, § 6º"
    }
  ],
  "organKicker": "Recorte",
  "organTitle": "Fiscal, encargos e recebimento",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a troca.",
  "closing": "Conferir emenda posterior à consulta de 21/10/2026.",
  "palette": "lime",
  "highlight": {
    "big": "2",
    "small": "artigos neste assunto"
  },
  "heroLead": "O fiscal é um ou mais servidores designados. Terceiro pode auxiliar, mas não exerce a atribuição exclusiva de fiscal. Em serviço contínuo com dedicação exclusiva, a Administração r",
  "nextLine": "O assunto seguinte continua na mesma disciplina.",
  "closingMnemonic": "Fiscal: um ou mais. Terceiro auxilia e não substitui a atribuição exclusiva.",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "O que a banca troca",
  "compareLead": "A esquerda é a armadilha. A direita é o texto.",
  "compareLeft": "Armadilha",
  "compareRight": "Texto"
};
