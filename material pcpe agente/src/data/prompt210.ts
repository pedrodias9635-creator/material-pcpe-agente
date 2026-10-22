import type { StudyModule } from "./study";

export const PROMPT210: StudyModule = {
  "short": "Significação e referenciação",
  "eyebrow": "Prompt 210 · lacuna do edital",
  "title": "Significação e referenciação",
  "subtitle": "o nome que o edital usa",
  "description": "O edital pede significação das palavras e referenciação, substituição e repetição. Anáfora e catáfora já estavam no Prompt 126. Parônimo do ofício continua no Prompt 128. Este assunto nomeia o restante, sem grafia inventada.",
  "reading": "Gramática normativa de significação e de coesão referencial. O par ratificar/retificar não foi reaberto.",
  "terms": [
    "polissemia",
    "homonímia",
    "anáfora",
    "elipse"
  ],
  "subject": "Língua Portuguesa",
  "context": [
    "Anáfora retoma e catáfora anuncia, como no Prompt 126.",
    "Ratificar confirma e retificar corrige, como no Prompt 128.",
    "Palavra que a gramática não fixou como parônimo não foi criada."
  ],
  "importance": "A banca chama polissemia de homonímia e trata repetição como erro sempre.",
  "distinctions": [
    "Sinonímia aproxima sentidos. Não garante troca livre de registro: casa e lar não servem ao mesmo texto.",
    "Antonímia opõe. Nem toda palavra tem antônimo. Subir opõe descer. Relógio não ganha antônimo por força de questão.",
    "Polissemia é uma palavra com sentidos ligados. Banco pode ser assento ou instituição, e a relação ainda se percebe no uso.",
    "Homonímia junta formas iguais de sentidos que não se ligam, ou sons iguais de escritas diferentes.",
    "Homógrafos se escrevem igual e podem soar diferente. Homófonos soam igual e podem escrever-se diferente, como seção e sessão.",
    "Paronímia aproxima a forma e separa o sentido. Ratificar e retificar já estão no Prompt 128. Eminente é ilustre. Iminente é o que está por ocorrer.",
    "Referenciação aponta para algo já dito ou que ainda será dito.",
    "Anáfora retoma. Catáfora anuncia. Substituição troca o nome por pronome, sinônimo ou hiperônimo.",
    "Repetição traz de volta a mesma palavra. Pode costurar o texto. Não é, por si, erro.",
    "Elipse omite o que o contexto recupera. Não é frase sem sujeito quando a norma exige sujeito.",
    "Conector continua no Prompt 126. Este assunto não o troca por pronome."
  ],
  "organs": [
    {
      "sigla": "POL",
      "nome": "Polissemia",
      "funcao": "Sentidos ligados na mesma palavra.",
      "base": "Significação",
      "nao": "Não é homonímia.",
      "tone": "yellow"
    },
    {
      "sigla": "ANA",
      "nome": "Anáfora",
      "funcao": "Retoma o que já foi dito.",
      "base": "Referenciação",
      "nao": "Catáfora anuncia, não retoma.",
      "tone": "cyan"
    },
    {
      "sigla": "REP",
      "nome": "Repetição",
      "funcao": "A mesma palavra volta.",
      "base": "Coesão",
      "nao": "Voltar a palavra não é, sozinho, erro.",
      "tone": "orange"
    }
  ],
  "swaps": [
    {
      "wrong": "Polissemia é homonímia.",
      "right": "Polissemia liga os sentidos. Homonímia não liga."
    },
    {
      "wrong": "Repetição é sempre vício.",
      "right": "Repetição pode ser o elo do texto."
    }
  ],
  "timeline": [
    {
      "when": "Já aberto",
      "title": "Prompts 126 e 128",
      "text": "Anáfora, catáfora, cujo e o par ratificar/retificar não foram reescritos."
    },
    {
      "when": "Limite",
      "title": "Sem par novo",
      "text": "Só entra parônimo de forma estável. Eminente e iminente. O resto do ofício fica no Prompt 128."
    }
  ],
  "articles": [
    {
      "id": "p210-sig",
      "num": "6.1",
      "kicker": "Edital",
      "title": "Significação e referenciação",
      "lead": "Itens 4.1 e 6.1",
      "plate": "ana",
      "plateSource": "Anáfora retoma",
      "devices": [
        {
          "tag": "SIG",
          "name": "Significação",
          "hook": "Polissemia liga. Homonímia não liga. Parônimo parece.",
          "literal": "Sinonímia: sentidos próximos, sem troca automática de registro. Antonímia: oposição, quando existe. Polissemia: uma palavra, sentidos relacionados. Homonímia: forma ou som coincidentes, sentidos não relacionados. Homófonos soam igual e podem escrever-se de modo diferente. Paronímia: formas parecidas e sentidos diferentes. Eminente é ilustre. Iminente é o que está prestes a ocorrer. Ratificar e retificar permanecem no Prompt 128.",
          "context": "Seção, sessão e cessão são homófonos. Não são a mesma palavra com sentidos ligados.",
          "exam": "A banca chama banco, no assento e na instituição, de homonímia sem relação, ou trata eminente como iminente.",
          "trap": "Parecer na forma não é coincidir no sentido.",
          "example": "O banco da praça e o banco da conta ilustram polissemia de uso. Sem etimologia inventada.",
          "mnemonic": "Liga, é polissemia. Não liga, é homonímia. Parece, é parônimo.",
          "revoked": false
        },
        {
          "tag": "REF",
          "name": "Referenciação",
          "hook": "Anáfora retoma. Substitui, repete ou cala o que o texto recupera.",
          "literal": "Referenciação aponta para termo já apresentado ou que ainda será apresentado. Anáfora retoma. Catáfora anuncia. Substituição troca o termo por pronome, sinônimo ou hiperônimo: o menino, a criança, ele. Repetição reinsere a mesma palavra e pode ser o elo, não o defeito. Elipse omite forma que o contexto devolve. Não autoriza apagar sujeito que a concordância exija.",
          "context": "Cujo, onde e para eu continuam no Prompt 126. Não foram trocados.",
          "exam": "A banca marca repetição como erro automático e chama de anáfora o pronome que anuncia o que ainda vem.",
          "trap": "Pronome antes do nome é catáfora, se anuncia. Depois, se retoma, é anáfora.",
          "example": "Ele chegou cedo. O diretor, esse ele. A ordem inversa, com o nome depois, anuncia.",
          "mnemonic": "Retoma, anáfora. Anuncia, catáfora. Volta a palavra, repetição.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 210",
      "does": [
        "Nomear o processo antes de trocar a palavra"
      ],
      "doesNot": [
        "Não inventar parônimo",
        "Não reabrir o Manual"
      ]
    }
  ],
  "roleNote": "Questões originais. Não são prova real.",
  "rolePlate": "O nome do edital, com o texto já aberto.",
  "rolePlateSource": "Prompt 210",
  "summary": [
    {
      "item": "Polissemia",
      "rule": "Sentidos ligados.",
      "clue": "Homonímia não liga."
    },
    {
      "item": "Anáfora",
      "rule": "Retoma.",
      "clue": "Catáfora anuncia."
    },
    {
      "item": "Repetição",
      "rule": "A mesma palavra pode ser o elo.",
      "clue": "Não é erro automático."
    }
  ],
  "compare": [
    {
      "item": "Banco",
      "ce": "Homonímia sem relação.",
      "cf": "Polissemia: sentidos que o uso ainda liga.",
      "effect": "separa"
    },
    {
      "item": "Repetição",
      "ce": "Sempre vício.",
      "cf": "Pode ser coesão.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 210011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Polissemia e homonímia nomeiam o mesmo fato: palavras de forma igual e sentidos sem qualquer relação.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Polissemia é uma palavra com sentidos relacionados. Homonímia junta forma ou som e separa sentidos que não se ligam. Seção e sessão são homófonos, não polissemia."
    },
    {
      "id": 210012,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Na referenciação, a anáfora retoma termo já dito e a catáfora anuncia termo que ainda será dito.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. É o mesmo corte do Prompt 126, agora no nome do edital. Substituição troca o termo. Repetição traz a mesma palavra de volta e não é, sozinha, erro."
    },
    {
      "id": 210013,
      "banca": "Estilo Cebraspe · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A relação entre eminente e iminente, e entre o menino e o pronome ele que o retoma, é, nessa ordem:",
      "correct": "c",
      "options": [
        {
          "key": "a",
          "label": "Homonímia e catáfora."
        },
        {
          "key": "b",
          "label": "Antonímia e elipse."
        },
        {
          "key": "c",
          "label": "Paronímia e anáfora, se o pronome retoma o menino já citado."
        },
        {
          "key": "d",
          "label": "Sinonímia e repetição da mesma palavra."
        },
        {
          "key": "e",
          "label": "Polissemia e desvio de regência."
        }
      ],
      "comentario": "Questão original, não é prova real. A alternativa c separa parônimo e anáfora. Eminente é ilustre. Iminente é o que está por ocorrer. Ratificar e retificar continuam no Prompt 128. Se o pronome viesse antes do nome para anunciá-lo, seria catáfora."
    }
  ],
  "toc": [
    {
      "id": "p210-sig",
      "num": "6.1",
      "label": "Significação"
    }
  ],
  "clocks": [
    {
      "value": "ana",
      "label": "Retoma",
      "source": "Referenciação"
    },
    {
      "value": "cata",
      "label": "Anuncia",
      "source": "Referenciação"
    }
  ],
  "organKicker": "Recorte",
  "organTitle": "Significação e referenciação",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o nome do processo. Depois a troca da banca.",
  "closing": "Parônimo novo só com forma estável. O Manual não foi reaberto.",
  "palette": "rose",
  "highlight": {
    "big": "2",
    "small": "itens do edital neste assunto"
  },
  "heroLead": "Polissemia liga os sentidos. Homonímia não liga. Anáfora retoma, catáfora anuncia. Repetir a palavra pode ser o elo, não o erro.",
  "nextLine": "O assunto seguinte continua na mesma disciplina.",
  "closingMnemonic": "Liga, polissemia. Retoma, anáfora. Volta a palavra, repetição.",
  "rolesLead": "O Prompt 126 e o Prompt 128 não foram reescritos.",
  "compareTitle": "O que a banca troca",
  "compareLead": "A esquerda é a armadilha. A direita é o nome.",
  "compareLeft": "Armadilha",
  "compareRight": "Nome"
};
