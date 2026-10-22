import type { StudyModule } from "./study";

export const PROMPT91: StudyModule = {
  "short": "Dispensa XV a XVIII",
  "eyebrow": "Prompt 91 · Lei nº 14.133/2021, art. 75, XV a XVIII",
  "title": "Dispensa dos incisos XV a XVIII",
  "subtitle": "XVI vigente é o da Lei nº 15.471/2026",
  "description": "O inciso XVI teve medida provisória com vigência encerrada e redação da Lei nº 14.628/2023. A redação vigente no Planalto é a da Lei nº 15.471/2026. XVII e XVIII nasceram na Lei nº 14.628/2023. A medida provisória não se usa.",
  "reading": "Lei nº 14.133/2021, art. 75, XV, XVI na redação da Lei nº 15.471/2026, XVII e XVIII incluídos pela Lei nº 14.628/2023. Medida Provisória nº 1.166/2023: vigência encerrada.",
  "terms": [
    "fundação",
    "produtor público",
    "cisterna",
    "Cozinha Solidária",
    "Lei nº 15.471/2026"
  ],
  "context": [
    "Produtos estratégicos fornecidos por produtores públicos, por intermédio de fundação. Não é a frase antiga de insumos produzidos pela fundação.",
    "A fundação há de ter sido criada para esse fim antes da vigência desta Lei.",
    "Cozinha Solidária não é cisterna. São incisos diferentes."
  ],
  "importance": "A banca cobra a redação da medida provisória ou da Lei nº 14.628 como se ainda fosse o XVI.",
  "distinctions": [
    "XV tem duas portas: instituição de ensino, pesquisa e inovação, ou instituição de recuperação social da pessoa presa.",
    "XVI vigente fala em produtos, não só insumos, e em produtores públicos por intermédio da fundação.",
    "XVII é água e alimento no campo. XVIII é alimentação gratuita, de preferência a quem está em vulnerabilidade, incluída a população em situação de rua."
  ],
  "organs": [
    {
      "sigla": "XV",
      "nome": "Sem lucro",
      "funcao": "Reputação ética e profissional inquestionável.",
      "base": "Art. 75, XV",
      "nao": "Fim lucrativo não entra.",
      "tone": "cyan"
    },
    {
      "sigla": "XVI",
      "nome": "2026",
      "funcao": "Produtos estratégicos, produtores públicos, fundação anterior à lei.",
      "base": "Lei nº 15.471/2026",
      "nao": "A MP está encerrada.",
      "tone": "orange"
    },
    {
      "sigla": "XVII",
      "nome": "Cisterna",
      "funcao": "Famílias rurais de baixa renda, seca ou falta regular de água.",
      "base": "Lei nº 14.628/2023",
      "nao": "Não é a Cozinha Solidária.",
      "tone": "emerald"
    },
    {
      "sigla": "XVIII",
      "nome": "Cozinha",
      "funcao": "Alimentação gratuita, preferencialmente a quem está em vulnerabilidade.",
      "base": "Lei nº 14.628/2023",
      "nao": "Preferencialmente não é exclusivamente.",
      "tone": "violet"
    }
  ],
  "swaps": [
    {
      "wrong": "O inciso XVI vigente é o da Medida Provisória nº 1.166/2023.",
      "right": "Essa medida tem vigência encerrada. A redação vigente é a da Lei nº 15.471/2026."
    },
    {
      "wrong": "A fundação produz o insumo, na frase vigente.",
      "right": "A frase vigente é produtos estratégicos fornecidos por produtores públicos por intermédio da fundação."
    },
    {
      "wrong": "Fundação criada depois da Lei nº 14.133 entra no XVI.",
      "right": "A fundação há de ter sido criada para esse fim específico em data anterior à entrada em vigor desta Lei."
    },
    {
      "wrong": "Qualquer instituição de ensino usa o XV, ainda com fim lucrativo.",
      "right": "Sem fins lucrativos, reputação ética e profissional inquestionável, e finalidade estatutária daquelas atividades, ou recuperação social da pessoa presa."
    },
    {
      "wrong": "Cisterna e Cozinha Solidária são o mesmo inciso.",
      "right": "XVII e XVIII. A medida provisória do XVII está encerrada. Vale a Lei nº 14.628/2023."
    },
    {
      "wrong": "A Cozinha Solidária atende exclusivamente a população em situação de rua.",
      "right": "Preferencialmente à população em vulnerabilidade e risco social, incluída a de rua."
    },
    {
      "wrong": "O preço do XVI pode ser qualquer um.",
      "right": "Há de ser compatível com o praticado no mercado."
    },
    {
      "wrong": "Quem adquire no XVI pode ser empresa privada.",
      "right": "Pessoa jurídica de direito público interno."
    }
  ],
  "timeline": [
    {
      "when": "MP",
      "title": "Encerrada",
      "text": "Medida Provisória nº 1.166/2023 não é a redação vigente."
    },
    {
      "when": "2023",
      "title": "Lei nº 14.628",
      "text": "Incluiu XVII e XVIII. A redação dela do XVI foi superada."
    },
    {
      "when": "2026",
      "title": "Lei nº 15.471",
      "text": "XVI vigente: produtos, produtores públicos, intermédio da fundação."
    }
  ],
  "articles": [
    {
      "id": "xvviii",
      "num": "XV-XVIII",
      "kicker": "Art. 75",
      "title": "Últimos incisos",
      "lead": "XVI se lê na lei de 2026. XVII e XVIII, na de 2023.",
      "plate": "MP encerrada.",
      "plateSource": "Art. 75, XVI",
      "devices": [
        {
          "tag": "XV",
          "name": "Duas portas",
          "hook": "Sem lucro e reputação inquestionável.",
          "literal": "Inciso XV: contratação de instituição brasileira que tenha por finalidade estatutária apoiar, captar e executar atividades de ensino, pesquisa, extensão, desenvolvimento institucional, científico e tecnológico e estímulo à inovação, inclusive para gerir administrativa e financeiramente essas atividades, ou para contratação de instituição dedicada à recuperação social da pessoa presa, desde que o contratado tenha inquestionável reputação ética e profissional e não tenha fins lucrativos.",
          "context": "Ou. As duas portas não se exigem juntas. As condições finais alcançam o contratado.",
          "exam": "A banca exige que a instituição de pesquisa também recupere pessoa presa.",
          "trap": "Fim lucrativo fecha as duas portas.",
          "example": "Uma fundação de apoio à pesquisa, sem lucro e com reputação inquestionável, pode estar na primeira porta. A empresa de curso pago, não.",
          "mnemonic": "Duas portas. Sem lucro."
        },
        {
          "tag": "XVI",
          "name": "Redação de 2026",
          "hook": "Produtos, não a frase velha.",
          "literal": "Inciso XVI, redação da Lei nº 15.471/2026: aquisição, por pessoa jurídica de direito público interno, de produtos estratégicos para a saúde fornecidos por produtores públicos por intermédio de fundação que, regimental ou estatutariamente, tenha por finalidade apoiar órgão da Administração Pública direta, sua autarquia ou fundação em projetos de ensino, pesquisa, extensão, desenvolvimento institucional, científico e tecnológico e de estímulo à inovação, inclusive na gestão administrativa e financeira necessária à execução desses projetos, ou em parcerias que envolvam transferência de tecnologia de produtos estratégicos para o SUS, nos termos do inciso XII deste caput, e que tenha sido criada para esse fim específico em data anterior à entrada em vigor desta Lei, desde que o preço contratado seja compatível com o praticado no mercado. A Medida Provisória nº 1.166/2023 está com vigência encerrada. A redação da Lei nº 14.628/2023 não é a vigente deste inciso.",
          "context": "Anterior à entrada em vigor desta Lei é anterior à Lei nº 14.133, não à lei alteradora.",
          "exam": "A banca cobra insumos produzidos pela fundação como texto atual.",
          "trap": "Não antecipe fundação nova.",
          "example": "Produtor público fornece. A fundação é o intermédio, se nasceu antes desta Lei para esse fim.",
          "mnemonic": "2026. Produtos. Produtor público."
        },
        {
          "tag": "XVII-XVIII",
          "name": "Água e cozinha",
          "hook": "Lei nº 14.628, não a MP.",
          "literal": "Inciso XVII, incluído pela Lei nº 14.628/2023: contratação de entidades privadas sem fins lucrativos para a implementação de cisternas ou outras tecnologias sociais de acesso à água para consumo humano e produção de alimentos, a fim de beneficiar as famílias rurais de baixa renda atingidas pela seca ou pela falta regular de água. Inciso XVIII, da mesma lei: contratação de entidades privadas sem fins lucrativos, para a implementação do Programa Cozinha Solidária, que tem como finalidade fornecer alimentação gratuita preferencialmente à população em situação de vulnerabilidade e risco social, incluída a população em situação de rua, com vistas à promoção de políticas de segurança alimentar e nutricional e de assistência social e à efetivação de direitos sociais, dignidade humana, resgate social e melhoria da qualidade de vida.",
          "context": "Preferencialmente, no XVIII, não é exclusivamente. Sem fins lucrativos está nos dois.",
          "exam": "A banca exige que a Cozinha Solidária atenda só a população de rua.",
          "trap": "Não invente orçamento do programa.",
          "example": "Cisterna no sertão pode estar no XVII. Restaurante comercial, não. Cozinha Solidária não se confunde com a cisterna.",
          "mnemonic": "Campo no XVII. Vulnerabilidade no XVIII."
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Fundação do XVI",
      "source": "Lei nº 15.471/2026",
      "does": [
        "Intermediar produto de produtor público",
        "Ter nascido para esse fim antes desta Lei"
      ],
      "doesNot": [
        "Não é a frase da MP",
        "Fundação posterior não entra"
      ]
    },
    {
      "role": "Entidade sem lucro",
      "source": "Incisos XVII e XVIII",
      "does": [
        "Implementar cisterna ou Cozinha Solidária, no inciso certo"
      ],
      "doesNot": [
        "Fim lucrativo não entra"
      ]
    },
    {
      "role": "Instituição do XV",
      "source": "Art. 75, XV",
      "does": [
        "Pesquisa e inovação, ou recuperação social da pessoa presa"
      ],
      "doesNot": [
        "Não precisa acumular as duas portas",
        "Reputação não se presume contra o texto"
      ]
    }
  ],
  "roleNote": "Redação vencida não se cobra como vigente.",
  "rolePlate": "XVI é 2026.",
  "rolePlateSource": "Lei nº 15.471/2026",
  "summary": [
    {
      "item": "XV",
      "rule": "Duas portas, sem lucro.",
      "clue": "Reputação inquestionável."
    },
    {
      "item": "MP",
      "rule": "Vigência encerrada.",
      "clue": "Não é o XVI."
    },
    {
      "item": "14.628 no XVI",
      "rule": "Superada.",
      "clue": "Não é insumos produzidos pela fundação."
    },
    {
      "item": "XVI vigente",
      "rule": "Produtos de produtores públicos, por intermédio da fundação.",
      "clue": "Lei nº 15.471/2026."
    },
    {
      "item": "Data",
      "rule": "Fundação anterior a esta Lei.",
      "clue": "Esta Lei é a nº 14.133."
    },
    {
      "item": "Preço",
      "rule": "Compatível com o mercado.",
      "clue": "Sem cifra no inciso."
    },
    {
      "item": "XVII",
      "rule": "Cisterna, baixa renda rural, seca ou falta de água.",
      "clue": "Lei nº 14.628/2023."
    },
    {
      "item": "XVIII",
      "rule": "Cozinha Solidária, alimentação gratuita.",
      "clue": "Preferencialmente, não exclusivamente."
    }
  ],
  "compare": [
    {
      "item": "XVI",
      "ce": "Lei nº 15.471/2026.",
      "cf": "MP encerrada e 14.628 superada neste inciso.",
      "effect": "separa"
    },
    {
      "item": "Objeto do XVI",
      "ce": "Produtos por produtores públicos.",
      "cf": "Não é a frase velha de insumos da fundação.",
      "effect": "separa"
    },
    {
      "item": "XVII",
      "ce": "Água no campo.",
      "cf": "XVIII é alimentação gratuita.",
      "effect": "separa"
    },
    {
      "item": "XVIII",
      "ce": "Preferencialmente.",
      "cf": "Não é exclusivamente rua.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 91011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "A redação vigente do art. 75, XVI, é a da Medida Provisória nº 1.166/2023, que trata de insumos estratégicos produzidos pela própria fundação.",
      "correct": "E",
      "comentario": "ERRADO. A medida provisória está com vigência encerrada. A redação vigente é a da Lei nº 15.471/2026: produtos estratégicos fornecidos por produtores públicos por intermédio de fundação."
    },
    {
      "id": 91012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O inciso XV",
      "correct": "b",
      "comentario": "Duas portas alternativas, ambas sem fim lucrativo e com reputação ética e profissional inquestionável.",
      "options": [
        {
          "key": "a",
          "label": "exige, juntas, pesquisa e recuperação de pessoa presa."
        },
        {
          "key": "b",
          "label": "admite instituição de ensino, pesquisa e inovação ou instituição de recuperação social da pessoa presa, sem fins lucrativos e com reputação inquestionável."
        },
        {
          "key": "c",
          "label": "autoriza empresa com fim lucrativo, se o preço for de mercado."
        },
        {
          "key": "d",
          "label": "é a Cozinha Solidária."
        },
        {
          "key": "e",
          "label": "foi revogado pela Lei nº 15.471/2026, neste prompt."
        }
      ]
    },
    {
      "id": 91013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A Cozinha Solidária, no inciso XVIII,",
      "correct": "d",
      "comentario": "Preferencialmente à população em vulnerabilidade e risco social, incluída a de rua. Não é exclusiva, e não é o inciso da cisterna.",
      "options": [
        {
          "key": "a",
          "label": "é o mesmo inciso da cisterna."
        },
        {
          "key": "b",
          "label": "atende exclusivamente a população em situação de rua."
        },
        {
          "key": "c",
          "label": "admite entidade com fins lucrativos."
        },
        {
          "key": "d",
          "label": "fornece alimentação gratuita preferencialmente à população em vulnerabilidade e risco social, incluída a população em situação de rua."
        },
        {
          "key": "e",
          "label": "está na Medida Provisória nº 1.166, ainda vigente."
        }
      ]
    }
  ],
  "palette": "teal",
  "highlight": {
    "big": "Lei nº 15.471",
    "small": "XVI vigente"
  },
  "heroLead": "Não cobre o XVI pela medida provisória. A frase vigente é produto de produtor público, por fundação anterior a esta Lei.",
  "footerLine": "Incisos XV a XVIII lidos. MP encerrada.",
  "nextLine": "Diga continue para o Prompt 92: art. 75, §§ 1º a 5º e § 7º. O § 6º já foi lido com a emergência.",
  "closingMnemonic": "XV, duas portas sem lucro. XVI, lei de 2026. XVII, água. XVIII, cozinha, preferencialmente.",
  "subject": "Direito Administrativo",
  "clocks": [],
  "rolesTitle": "Quem a norma nomeia",
  "rolesLead": "O nome do órgão não se empresta.",
  "compareTitle": "A trava",
  "compareLead": "Generalizar a hipótese é o erro.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "toc": [
    {
      "id": "xvviii",
      "num": "XV-XVIII",
      "label": "Últimos incisos"
    }
  ]
};
