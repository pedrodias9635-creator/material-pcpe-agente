import type { StudyModule } from "./study";

export const PROMPT90: StudyModule = {
  "short": "Dispensa IX a XIV",
  "eyebrow": "Prompt 90 · Lei nº 14.133/2021, art. 75, IX a XIV",
  "title": "Dispensa dos incisos IX a XIV",
  "subtitle": "preço de mercado não é detalhe",
  "description": "Seis incisos. O X é só da União. O IX exige entidade criada para aquele fim. O XIV exige serviço prestado exclusivamente por pessoas com deficiência. Nenhum escreve valor em reais.",
  "reading": "Lei nº 14.133/2021, art. 75, IX a XIV. Texto vigente no Planalto. O ato da direção nacional do SUS, no inciso XII, não foi aberto.",
  "terms": [
    "preço de mercado",
    "União",
    "SUS",
    "notória especialização",
    "pessoa com deficiência"
  ],
  "context": [
    "Preço compatível com o mercado aparece em mais de um inciso. Não é o mesmo que justificativa já lida, mas não a apaga.",
    "O inciso XIII não é o art. 74, III.",
    "Contrato de programa não é convênio genérico."
  ],
  "importance": "A banca estende o inciso X ao Estado e aceita serviço misto na associação de pessoas com deficiência.",
  "distinctions": [
    "IX: órgão ou entidade criados para esse fim específico.",
    "X: somente a União, para regular preços ou normalizar o abastecimento.",
    "XIV: exclusivamente pessoas com deficiência, sem fins lucrativos, idoneidade comprovada."
  ],
  "organs": [
    {
      "sigla": "IX",
      "nome": "Fim específico",
      "funcao": "Quem foi criado para produzir o bem ou prestar o serviço.",
      "base": "Art. 75, IX",
      "nao": "Órgão qualquer não entra.",
      "tone": "cyan"
    },
    {
      "sigla": "X",
      "nome": "União",
      "funcao": "Intervir no domínio econômico.",
      "base": "Art. 75, X",
      "nao": "Estado e PCPE não usam este inciso.",
      "tone": "orange"
    },
    {
      "sigla": "XI",
      "nome": "Programa",
      "funcao": "Contrato de programa, serviço associado, consórcio ou convênio de cooperação.",
      "base": "Art. 75, XI",
      "nao": "Não é qualquer convênio.",
      "tone": "emerald"
    },
    {
      "sigla": "XII",
      "nome": "SUS",
      "funcao": "Produto estratégico elencado em ato da direção nacional.",
      "base": "Art. 75, XII",
      "nao": "O ato não foi aberto.",
      "tone": "violet"
    },
    {
      "sigla": "XIII",
      "nome": "Comissão",
      "funcao": "Profissional técnico de notória especialização, para avaliar técnica.",
      "base": "Art. 75, XIII",
      "nao": "Não é a inexigibilidade do art. 74.",
      "tone": "sky"
    },
    {
      "sigla": "XIV",
      "nome": "Deficiência",
      "funcao": "Associação sem fins lucrativos. Serviço exclusivo de pessoas com deficiência.",
      "base": "Art. 75, XIV",
      "nao": "Serviço misto não entra.",
      "tone": "yellow"
    }
  ],
  "swaps": [
    {
      "wrong": "Qualquer órgão público vende à Administração pelo inciso IX.",
      "right": "O órgão ou entidade há de ter sido criado para esse fim específico, e o preço há de ser compatível com o mercado."
    },
    {
      "wrong": "O Estado pode usar o inciso X para normalizar o abastecimento.",
      "right": "O inciso nomeia a União."
    },
    {
      "wrong": "Contrato de programa é qualquer ajuste verbal entre secretarias.",
      "right": "É com ente federativo ou entidade da indireta dele, para serviço público associado, nos termos de consórcio público ou convênio de cooperação."
    },
    {
      "wrong": "O inciso XII dispensa o ato da direção nacional do SUS.",
      "right": "Os produtos são elencados nesse ato. O ato não foi aberto."
    },
    {
      "wrong": "Notória especialização do inciso XIII é a inexigibilidade do art. 74.",
      "right": "Aqui o objeto é compor a comissão de avaliação de critérios de técnica."
    },
    {
      "wrong": "A associação do inciso XIV pode misturar trabalhadores.",
      "right": "Os serviços contratados são prestados exclusivamente por pessoas com deficiência."
    },
    {
      "wrong": "Idoneidade da associação se presume.",
      "right": "O inciso exige comprovada idoneidade, sem fins lucrativos e preço compatível com o mercado."
    },
    {
      "wrong": "Estes incisos escrevem teto em reais.",
      "right": "Não escrevem. Não invente."
    }
  ],
  "timeline": [
    {
      "when": "IX-X",
      "title": "Quem pode",
      "text": "Entidade criada para o fim. União, no domínio econômico."
    },
    {
      "when": "XI-XII",
      "title": "Ajuste nomeado",
      "text": "Contrato de programa. SUS, com ato da direção nacional."
    },
    {
      "when": "XIII-XIV",
      "title": "Pessoa certa",
      "text": "Técnico para a comissão. Associação, serviço exclusivo."
    }
  ],
  "articles": [
    {
      "id": "ixxiv",
      "num": "IX-XIV",
      "kicker": "Art. 75",
      "title": "Seis incisos",
      "lead": "Preço de mercado onde a lei o escreve. Sem cifra.",
      "plate": "O X é da União.",
      "plateSource": "Art. 75, IX a XIV",
      "devices": [
        {
          "tag": "IX-X",
          "name": "Fim específico e União",
          "hook": "Dois sujeitos que a banca alarga.",
          "literal": "Inciso IX: aquisição, por pessoa jurídica de direito público interno, de bens produzidos ou serviços prestados por órgão ou entidade que integrem a Administração Pública e que tenham sido criados para esse fim específico, desde que o preço contratado seja compatível com o praticado no mercado. Inciso X: quando a União tiver que intervir no domínio econômico para regular preços ou normalizar o abastecimento.",
          "context": "Pessoa jurídica de direito público interno é quem adquire no IX. Não é qualquer particular.",
          "exam": "A banca põe a PCPE no inciso X.",
          "trap": "Criado para esse fim não é criado para fim genérico.",
          "example": "Comprar pão de uma autarquia que não foi criada para produzi-lo não está no IX. Regular preço de combustível não é atribuição da polícia pelo inciso X.",
          "mnemonic": "Fim específico. União, no X."
        },
        {
          "tag": "XI-XII",
          "name": "Programa e SUS",
          "hook": "Instrumento e ato, não gosto.",
          "literal": "Inciso XI: celebração de contrato de programa com ente federativo ou com entidade de sua Administração Pública indireta que envolva prestação de serviços públicos de forma associada nos termos autorizados em contrato de consórcio público ou em convênio de cooperação. Inciso XII: contratação em que houver transferência de tecnologia de produtos estratégicos para o SUS, conforme elencados em ato da direção nacional do SUS, inclusive por ocasião da aquisição desses produtos durante as etapas de absorção tecnológica, e em valores compatíveis com aqueles definidos no instrumento firmado para a transferência de tecnologia.",
          "context": "O ato da direção nacional não foi aberto. Não invente a lista de produtos.",
          "exam": "A banca troca contrato de programa por convênio solto.",
          "trap": "Valor compatível é o do instrumento de transferência, não um teto deste inciso.",
          "example": "Absorção tecnológica não dispensa o elenco do ato.",
          "mnemonic": "Programa associado. SUS elencado."
        },
        {
          "tag": "XIII-XIV",
          "name": "Comissão e associação",
          "hook": "Exclusivamente, no XIV.",
          "literal": "Inciso XIII: contratação de profissionais para compor a comissão de avaliação de critérios de técnica, quando se tratar de profissional técnico de notória especialização. Inciso XIV: contratação de associação de pessoas com deficiência, sem fins lucrativos e de comprovada idoneidade, por órgão ou entidade da Administração Pública, para a prestação de serviços, desde que o preço contratado seja compatível com o praticado no mercado e os serviços contratados sejam prestados exclusivamente por pessoas com deficiência.",
          "context": "Notória especialização, aqui, não reabre o art. 74. Exclusivamente não admite mistura.",
          "exam": "A banca funde o XIII com a inexigibilidade.",
          "trap": "Não use a associação como fachada. A lei exige a exclusividade da prestação.",
          "example": "Um perito para a comissão de técnica pode estar no XIII. A campanha inteira, não.",
          "mnemonic": "Comissão não é art. 74. Serviço exclusivo."
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "União",
      "source": "Art. 75, X",
      "does": [
        "Intervir para regular preço ou normalizar abastecimento"
      ],
      "doesNot": [
        "O Estado não está nomeado",
        "A PCPE não usa este inciso"
      ]
    },
    {
      "role": "Entidade criada para o fim",
      "source": "Art. 75, IX",
      "does": [
        "Produzir o bem ou prestar o serviço"
      ],
      "doesNot": [
        "Criação genérica não basta"
      ]
    },
    {
      "role": "Associação",
      "source": "Art. 75, XIV",
      "does": [
        "Prestar o serviço exclusivamente por pessoas com deficiência"
      ],
      "doesNot": [
        "Não mistura mão de obra",
        "Não tem fim lucrativo"
      ]
    }
  ],
  "roleNote": "Preço de mercado, onde escrito, não é cifra deste prompt.",
  "rolePlate": "X não desce ao Estado.",
  "rolePlateSource": "Art. 75, X",
  "summary": [
    {
      "item": "IX",
      "rule": "Criado para esse fim específico.",
      "clue": "Preço compatível com o mercado."
    },
    {
      "item": "X",
      "rule": "Só a União.",
      "clue": "Regular preço ou abastecimento."
    },
    {
      "item": "XI",
      "rule": "Contrato de programa.",
      "clue": "Serviço associado, consórcio ou convênio de cooperação."
    },
    {
      "item": "XII",
      "rule": "Produto estratégico do SUS.",
      "clue": "Ato da direção nacional não aberto."
    },
    {
      "item": "XIII",
      "rule": "Profissional para a comissão de técnica.",
      "clue": "Não é o art. 74."
    },
    {
      "item": "XIV",
      "rule": "Serviço exclusivo de pessoas com deficiência.",
      "clue": "Sem fim lucrativo e idoneidade comprovada."
    },
    {
      "item": "Cifra",
      "rule": "Estes incisos não escrevem real.",
      "clue": "Não invente."
    },
    {
      "item": "PCPE",
      "rule": "Não usa o X.",
      "clue": "Não se apresenta como União."
    }
  ],
  "compare": [
    {
      "item": "IX",
      "ce": "Fim específico.",
      "cf": "Órgão qualquer não.",
      "effect": "restringe"
    },
    {
      "item": "X",
      "ce": "União.",
      "cf": "Não é o Estado.",
      "effect": "separa"
    },
    {
      "item": "XIII",
      "ce": "Comissão de técnica.",
      "cf": "Não é inexigibilidade.",
      "effect": "separa"
    },
    {
      "item": "XIV",
      "ce": "Exclusivamente.",
      "cf": "Serviço misto não entra.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 90011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O inciso X do art. 75 autoriza a Polícia Civil a dispensar licitação para normalizar o abastecimento, e o inciso XIV admite que parte do serviço seja prestada por trabalhadores sem deficiência.",
      "correct": "E",
      "comentario": "ERRADO. O inciso X nomeia a União. O inciso XIV exige que os serviços sejam prestados exclusivamente por pessoas com deficiência."
    },
    {
      "id": 90012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O inciso IX exige, além do preço compatível com o mercado,",
      "correct": "a",
      "comentario": "O órgão ou entidade há de integrar a Administração e ter sido criado para esse fim específico. Quem adquire é pessoa jurídica de direito público interno.",
      "options": [
        {
          "key": "a",
          "label": "que o órgão ou entidade da Administração tenha sido criado para produzir o bem ou prestar o serviço."
        },
        {
          "key": "b",
          "label": "autorização do Ministro da Defesa."
        },
        {
          "key": "c",
          "label": "que o comprador seja empresa privada."
        },
        {
          "key": "d",
          "label": "transferência de tecnologia para o SUS."
        },
        {
          "key": "e",
          "label": "contrato de programa."
        }
      ]
    },
    {
      "id": 90013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O profissional do inciso XIII é contratado para",
      "correct": "c",
      "comentario": "Compor a comissão de avaliação de critérios de técnica, se for técnico de notória especialização. Não reabre o art. 74.",
      "options": [
        {
          "key": "a",
          "label": "qualquer serviço intelectual do art. 74."
        },
        {
          "key": "b",
          "label": "intervir no domínio econômico."
        },
        {
          "key": "c",
          "label": "compor a comissão de avaliação de critérios de técnica, quando for profissional técnico de notória especialização."
        },
        {
          "key": "d",
          "label": "gerir associação de pessoas com deficiência."
        },
        {
          "key": "e",
          "label": "elencar os produtos estratégicos do SUS."
        }
      ]
    }
  ],
  "palette": "ember",
  "highlight": {
    "big": "Só a União",
    "small": "no inciso X"
  },
  "heroLead": "Do IX ao XIV, o sujeito está escrito. Preço de mercado não vira número. O X não desce à PCPE.",
  "footerLine": "Incisos IX a XIV lidos. Sem cifra inventada.",
  "nextLine": "Diga continue para o Prompt 91: art. 75, XV a XVIII, com a redação vigente do XVI.",
  "closingMnemonic": "Fim específico. União no X. Programa associado. SUS elencado. Comissão não é art. 74. Serviço exclusivo.",
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
      "id": "ixxiv",
      "num": "IX-XIV",
      "label": "Seis incisos"
    }
  ]
};
