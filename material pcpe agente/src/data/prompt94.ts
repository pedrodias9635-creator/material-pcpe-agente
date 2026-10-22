import type { StudyModule } from "./study";

export const PROMPT94: StudyModule = {
  "short": "Móvel e preferência",
  "eyebrow": "Prompt 94 · Lei nº 14.133/2021, art. 76, II, e art. 77",
  "title": "Móvel, investidura e preferência",
  "subtitle": "leilão, 50% sem conta, ocupante não fura o edital",
  "description": "Bem móvel também vai a leilão, salvo alínea. Investidura tem preço entre a avaliação e 50% do máximo da dispensa de bens e serviços. O artigo não escreve o real. O ocupante do art. 77 tem preferência se aceitar todas as regras do edital.",
  "reading": "Lei nº 14.133/2021, art. 76, II, alíneas a a f, §§ 3º a 7º, e art. 77. O § 5º, I, escreve 50%. Este prompt não multiplica esse percentual pelo valor vigente da dispensa. O limite da Lei nº 11.952/2009, citado de novo, não foi aberto.",
  "terms": [
    "leilão",
    "investidura",
    "50%",
    "doação com encargo",
    "direito de preferência"
  ],
  "context": [
    "Imóvel da regra geral ficou no Prompt 93.",
    "50% não é 50% da avaliação. É teto em relação ao máximo da dispensa de bens e serviços.",
    "Ocupar o imóvel não dispensa o edital."
  ],
  "importance": "A banca calcula um real que o artigo não escreve e trata a preferência como dispensa das regras do edital.",
  "distinctions": [
    "Doação de móvel é para fins e uso de interesse social, depois de avaliar oportunidade e conveniência socioeconômica.",
    "Permuta de móvel é só entre órgãos ou entidades.",
    "Investidura, inciso I do § 5º: não inferior à avaliação e não superior a 50% do máximo da dispensa de bens e serviços.",
    "Art. 77: submetendo-se a todas as regras do edital."
  ],
  "organs": [
    {
      "sigla": "II",
      "nome": "Móvel",
      "funcao": "Leilão, salvo alínea.",
      "base": "Art. 76, II",
      "nao": "Não é venda livre.",
      "tone": "cyan"
    },
    {
      "sigla": "a",
      "nome": "Doação",
      "funcao": "Fins e uso de interesse social.",
      "base": "Art. 76, II, a",
      "nao": "Não é doação sem avaliação da escolha.",
      "tone": "emerald"
    },
    {
      "sigla": "§5",
      "nome": "Investidura",
      "funcao": "Entre a avaliação e 50% do máximo da dispensa.",
      "base": "Art. 76, § 5º, I",
      "nao": "Não calcule o real.",
      "tone": "orange"
    },
    {
      "sigla": "§6",
      "nome": "Encargo",
      "funcao": "Licita, salvo interesse justificado. Sem cláusula, nulo.",
      "base": "Art. 76, § 6º",
      "nao": "Encargo, prazo e reversão são obrigatórios.",
      "tone": "violet"
    },
    {
      "sigla": "77",
      "nome": "Ocupante",
      "funcao": "Preferência se aceitar todo o edital.",
      "base": "Art. 77",
      "nao": "Ocupação não é título fora do edital.",
      "tone": "sky"
    }
  ],
  "swaps": [
    {
      "wrong": "Móvel se aliena por venda direta, sem leilão.",
      "right": "A regra é leilão. A dispensa está nas alíneas."
    },
    {
      "wrong": "Permuta de móvel pode ser com particular.",
      "right": "A alínea b é exclusivamente entre órgãos ou entidades da Administração."
    },
    {
      "wrong": "O preço da investidura pode ficar abaixo da avaliação.",
      "right": "Não pode ser inferior ao da avaliação."
    },
    {
      "wrong": "50% é 50% da avaliação, e o real já está calculado.",
      "right": "É 50% do valor máximo da dispensa de bens e serviços. O artigo não escreve o real. Não multiplique."
    },
    {
      "wrong": "Doação com encargo dispensa sempre a licitação.",
      "right": "Será licitada. A dispensa é só em caso de interesse público devidamente justificado."
    },
    {
      "wrong": "Sem cláusula de reversão, a doação com encargo vale.",
      "right": "Encargos, prazo e cláusula de reversão são obrigatórios, sob pena de nulidade."
    },
    {
      "wrong": "O ocupante leva o imóvel ainda que recuse regra do edital.",
      "right": "A preferência exige submeter-se a todas as regras do edital."
    },
    {
      "wrong": "1º de dezembro de 2004 é prazo de recurso.",
      "right": "É a data do § 4º, I: detenção anterior a essa data, na hipótese rural ali descrita."
    }
  ],
  "timeline": [
    {
      "when": "Móvel",
      "title": "Leilão",
      "text": "Salvo doação social, permuta entre órgãos, ações, títulos, bens da própria atividade ou material sem uso para outro órgão."
    },
    {
      "when": "§ 5º",
      "title": "50%",
      "text": "Teto escrito. Real não escrito."
    },
    {
      "when": "77",
      "title": "Ocupante",
      "text": "Preferência dentro do edital, não fora dele."
    }
  ],
  "articles": [
    {
      "id": "movel",
      "num": "76-77",
      "kicker": "Alienação",
      "title": "Móvel e preferência",
      "lead": "Leilão de novo. Preferência sem furo.",
      "plate": "50% sem real.",
      "plateSource": "Art. 76, § 5º, I",
      "devices": [
        {
          "tag": "II",
          "name": "Móvel",
          "hook": "Seis dispensas, uma regra.",
          "literal": "Art. 76, II: tratando-se de bens móveis, dependerá de licitação na modalidade leilão, dispensada a licitação nos casos de: a) doação, permitida exclusivamente para fins e uso de interesse social, após avaliação de oportunidade e conveniência socioeconômica em relação à escolha de outra forma de alienação; b) permuta, permitida exclusivamente entre órgãos ou entidades da Administração Pública; c) venda de ações, que poderão ser negociadas em bolsa, observada a legislação específica; d) venda de títulos, observada a legislação pertinente; e) venda de bens produzidos ou comercializados por entidades da Administração, em virtude de suas finalidades; f) venda de materiais e equipamentos sem utilização previsível por quem deles dispõe para outros órgãos ou entidades da Administração Pública.",
          "context": "Poderão, na alínea c, é bolsa, não dever de bolsa em todo caso. A legislação específica não foi aberta.",
          "exam": "A banca doa móvel a qualquer um, sem interesse social.",
          "trap": "Material sem uso, na alínea f, vai para outro órgão ou entidade, não para particular.",
          "example": "Viatura inservível pode ir a outro órgão pela alínea f, se não houver utilização previsível. Venda a particular, na regra, é leilão.",
          "mnemonic": "Leilão. Doação só social. Permuta só entre órgãos."
        },
        {
          "tag": "§3-5",
          "name": "Título e investidura",
          "hook": "Data e percentual, sem hectare.",
          "literal": "§ 3º: a Administração poderá conceder título de propriedade ou de direito real de uso, admitida a dispensa de licitação, quando o uso se destinar a outro órgão ou entidade, qualquer que seja a localização, ou a pessoa natural que haja implementado os requisitos mínimos de cultura, ocupação mansa e pacífica e exploração direta sobre área rural, observado o limite do § 1º do art. 6º da Lei nº 11.952/2009, não aberto. § 4º, I: aplicação exclusiva às áreas em que a detenção por particular seja comprovadamente anterior a 1º de dezembro de 2004, entre outros condicionamentos. § 5º: investidura é a alienação, ao proprietário lindeiro, de área remanescente ou resultante de obra pública que se tornar inaproveitável isoladamente, por preço que não seja inferior ao da avaliação nem superior a 50% do valor máximo permitido para dispensa de licitação de bens e serviços previsto nesta Lei. A segunda hipótese de investidura é imóvel residencial em núcleo urbano anexo a usina hidrelétrica, dispensável na operação e que não integre bens reversíveis.",
          "context": "50% não se converte em real neste prompt. O valor vigente da dispensa de compras está no Prompt 55. Não multiplique. 1º de dezembro de 2004 é data de detenção, não de recurso.",
          "exam": "A banca cobra R$ 32.746,05 como se o parágrafo o escrevesse.",
          "trap": "Não invente o módulo da Lei nº 11.952.",
          "example": "Área inaproveitável ao vizinho, acima da avaliação e até o teto percentual, pode ser investidura. Abaixo da avaliação, não.",
          "mnemonic": "Não inferior à avaliação. Não superior a 50%. Sem conta."
        },
        {
          "tag": "§6-77",
          "name": "Encargo e ocupante",
          "hook": "Nulo sem cláusula. Preferência dentro do edital.",
          "literal": "§ 6º: a doação com encargo será licitada e de seu instrumento constarão, obrigatoriamente, os encargos, o prazo de seu cumprimento e a cláusula de reversão, sob pena de nulidade do ato, dispensada a licitação em caso de interesse público devidamente justificado. § 7º: se o donatário precisar oferecer o imóvel em garantia, a cláusula de reversão e as demais obrigações serão garantidas por hipoteca em segundo grau em favor do doador. Art. 77: para a venda de bens imóveis, será concedido direito de preferência ao licitante que, submetendo-se a todas as regras do edital, comprove a ocupação do imóvel objeto da licitação.",
          "context": "Será concedido. Não é faculdade de ignorar o ocupante que aceitou o edital. Também não é direito de quem recusa regra.",
          "exam": "A banca tira uma cláusula e mantém a doação.",
          "trap": "Hipoteca é em segundo grau, em favor do doador. Não invente primeiro grau.",
          "example": "O ocupante que cobre o edital inteiro tem preferência na venda do imóvel. O ocupante que pede regra própria, não.",
          "mnemonic": "Três cláusulas ou nulo. Preferência dentro do edital."
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Lindeiro",
      "source": "Art. 76, § 5º, I",
      "does": [
        "Poder receber a área inaproveitável, no preço legal"
      ],
      "doesNot": [
        "Não paga abaixo da avaliação",
        "O real do teto não está escrito"
      ]
    },
    {
      "role": "Donatário com encargo",
      "source": "Art. 76, §§ 6º e 7º",
      "does": [
        "Cumprir encargo no prazo",
        "Garantir a reversão se financiar"
      ],
      "doesNot": [
        "Não recebe doação sem as cláusulas"
      ]
    },
    {
      "role": "Ocupante",
      "source": "Art. 77",
      "does": [
        "Ter preferência se aceitar todas as regras do edital"
      ],
      "doesNot": [
        "Ocupação não dispensa o edital",
        "Não é preferência em móvel"
      ]
    }
  ],
  "roleNote": "Art. 77 é venda de imóvel. Não de móvel.",
  "rolePlate": "Dentro do edital.",
  "rolePlateSource": "Art. 77",
  "summary": [
    {
      "item": "Móvel",
      "rule": "Leilão, salvo alínea.",
      "clue": "Doação só de interesse social."
    },
    {
      "item": "Permuta",
      "rule": "Só entre órgãos ou entidades.",
      "clue": "Não com particular."
    },
    {
      "item": "f",
      "rule": "Material sem uso previsível.",
      "clue": "Para outro órgão ou entidade."
    },
    {
      "item": "Investidura",
      "rule": "Não inferior à avaliação.",
      "clue": "Não superior a 50% do máximo da dispensa."
    },
    {
      "item": "50%",
      "rule": "Percentual escrito.",
      "clue": "Real não escrito. Não multiplique."
    },
    {
      "item": "2004",
      "rule": "Detenção anterior a 1º de dezembro.",
      "clue": "Não é prazo de recurso."
    },
    {
      "item": "Encargo",
      "rule": "Licita, salvo interesse justificado.",
      "clue": "Sem cláusula, nulo."
    },
    {
      "item": "Art. 77",
      "rule": "Ocupante, todas as regras do edital.",
      "clue": "Venda de imóvel."
    }
  ],
  "compare": [
    {
      "item": "50%",
      "ce": "Do máximo da dispensa de bens e serviços.",
      "cf": "Não é 50% da avaliação, nem um real escrito.",
      "effect": "restringe"
    },
    {
      "item": "Doação de móvel",
      "ce": "Interesse social.",
      "cf": "Doação de imóvel da alínea b é outro órgão.",
      "effect": "separa"
    },
    {
      "item": "Art. 77",
      "ce": "Dentro do edital.",
      "cf": "Ocupação sozinha não basta.",
      "effect": "restringe"
    },
    {
      "item": "§ 6º",
      "ce": "Três cláusulas obrigatórias.",
      "cf": "Falta uma, nulidade.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 94011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Na investidura, o preço pode ser inferior à avaliação, e o art. 76, § 5º, I, escreve o teto de R$ 32.746,05.",
      "correct": "E",
      "comentario": "ERRADO. O preço não pode ser inferior à avaliação nem superior a 50% do valor máximo da dispensa de bens e serviços. O parágrafo não escreve real. Não se multiplica neste prompt."
    },
    {
      "id": 94012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O direito de preferência do art. 77",
      "correct": "a",
      "comentario": "É na venda de imóvel, para o licitante que ocupa e se submete a todas as regras do edital.",
      "options": [
        {
          "key": "a",
          "label": "cabe ao licitante que ocupa o imóvel e se submete a todas as regras do edital."
        },
        {
          "key": "b",
          "label": "dispensa o edital, porque a ocupação já é título."
        },
        {
          "key": "c",
          "label": "alcança a venda de bem móvel."
        },
        {
          "key": "d",
          "label": "permite recusar a avaliação."
        },
        {
          "key": "e",
          "label": "é o mesmo que investidura."
        }
      ]
    },
    {
      "id": 94013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A doação com encargo",
      "correct": "c",
      "comentario": "Será licitada, salvo interesse público justificado, e o instrumento há de ter encargos, prazo e reversão, sob pena de nulidade.",
      "options": [
        {
          "key": "a",
          "label": "dispensa sempre a licitação e a cláusula de reversão."
        },
        {
          "key": "b",
          "label": "permite hipoteca em primeiro grau como regra do § 7º."
        },
        {
          "key": "c",
          "label": "será licitada, e sem encargos, prazo e cláusula de reversão o ato é nulo, salvo a dispensa justificada."
        },
        {
          "key": "d",
          "label": "é a permuta de móvel com particular."
        },
        {
          "key": "e",
          "label": "autoriza preço abaixo da avaliação."
        }
      ]
    }
  ],
  "palette": "cool",
  "highlight": {
    "big": "50%",
    "small": "sem real escrito"
  },
  "heroLead": "Móvel vai a leilão, salvo alínea. Investidura não desce da avaliação e não sobe de 50% do máximo da dispensa. O ocupante não fura o edital.",
  "footerLine": "Móvel, parágrafos e art. 77 lidos. Procedimento auxiliar não entrou.",
  "nextLine": "Diga continue para o Prompt 95: procedimentos auxiliares, art. 78. O credenciamento do art. 79 não entra nesse anúncio.",
  "closingMnemonic": "Leilão do móvel. Não abaixo da avaliação. 50% sem conta. Ocupante, só dentro do edital.",
  "clocks": [
    {
      "value": "1º/12/2004",
      "label": "Detenção anterior, na hipótese do § 4º, I",
      "source": "Art. 76, § 4º, I"
    },
    {
      "value": "50%",
      "label": "Teto da investidura, sobre o máximo da dispensa de bens e serviços, sem real escrito",
      "source": "Art. 76, § 5º, I"
    }
  ],
  "subject": "Direito Administrativo",
  "rolesTitle": "Quem a norma nomeia",
  "rolesLead": "O nome do órgão não se empresta.",
  "compareTitle": "A trava",
  "compareLead": "Generalizar a hipótese é o erro.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "toc": [
    {
      "id": "movel",
      "num": "76-77",
      "label": "Móvel e preferência"
    }
  ]
};
