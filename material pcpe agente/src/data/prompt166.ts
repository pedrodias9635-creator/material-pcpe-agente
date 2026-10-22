import type { StudyModule } from "./study";

export const PROMPT166: StudyModule = {
  "short": "Presidente da República",
  "eyebrow": "Prompt 166 · lacuna do edital",
  "title": "Presidente da República",
  "subtitle": "arts. 77 a 81, 83 e 85",
  "description": "Eleição, posse, substituição, viagem e crimes de responsabilidade. O caput do art. 77, na redação da EC 16, marca o segundo turno no último domingo de outubro. O § 3º da mesma compilação ainda escreve nova eleição em até vinte dias. A página não riscou o § 3º. Os dois estão no texto. Não se apague um para salvar o outro.",
  "reading": "CF/88, parte permanente, compilação do Planalto consultada em 21/10/2026. ADCT de mesmo número não é este texto. Art. 84 já foi lido no Prompt 151 e não se repete.",
  "terms": [
    "segundo turno",
    "vinte dias",
    "crime de responsabilidade"
  ],
  "subject": "Direito Constitucional",
  "context": [
    "O texto abaixo é o da compilação oficial já conferida. Redação anterior riscada não foi copiada.",
    "Artigo de mesmo número no ADCT não é este texto.",
    "O que o artigo não escreve não se completa de memória."
  ],
  "importance": "A banca troca o artigo vizinho, o prazo e o nome do instituto.",
  "distinctions": [
    "Caput: primeiro domingo de outubro e, se houver, último domingo de outubro.",
    "§ 3º ainda escrito: nova eleição em até vinte dias, entre os dois mais votados.",
    "Brancos e nulos não entram na maioria absoluta.",
    "Art. 85 lista atos de responsabilidade. O julgamento, no art. 52, é do Senado."
  ],
  "organs": [
    {
      "sigla": "77",
      "nome": "Eleição",
      "funcao": "O caput e o § 3º convivem na compilação. A banca usa um para negar o outro.",
      "base": "CF art. 77",
      "nao": "Branco e nulo não computam na maioria absoluta.",
      "tone": "yellow"
    },
    {
      "sigla": "78",
      "nome": "Posse",
      "funcao": "A posse é em sessão do Congresso.",
      "base": "CF art. 78",
      "nao": "Não se invente data fora do artigo.",
      "tone": "cyan"
    },
    {
      "sigla": "79",
      "nome": "Substituição",
      "funcao": "Vice substitui no impedimento e sucede na vaga.",
      "base": "CF art. 79",
      "nao": "Não se troque com a eleição do art. 81.",
      "tone": "orange"
    },
    {
      "sigla": "80",
      "nome": "Sucessão",
      "funcao": "A linha está no artigo.",
      "base": "CF art. 80",
      "nao": "Não se invente nome de cargo fora da lista.",
      "tone": "violet"
    }
  ],
  "swaps": [
    {
      "wrong": "Só os vinte dias, o caput foi riscado.",
      "right": "Os dois textos estão na compilação."
    }
  ],
  "timeline": [
    {
      "when": "Fonte",
      "title": "Compilação conferida",
      "text": "CF/88, parte permanente, compilação do Planalto consultada em 21/10/2026. ADCT de mesmo número não é este texto. Art. 84 já foi lido no Prom"
    },
    {
      "when": "Limite",
      "title": "Sem invenção",
      "text": "Inciso não transcrito não foi inventado."
    }
  ],
  "articles": [
    {
      "id": "p166-77",
      "num": "77",
      "kicker": "CF art. 77",
      "title": "Eleição",
      "lead": "Eleição",
      "plate": "Eleição",
      "plateSource": "CF art. 77",
      "devices": [
        {
          "tag": "77",
          "name": "Art. 77",
          "hook": "Outubro no caput. Vinte dias ainda escritos no § 3º.",
          "literal": "Art. 77. A eleição do Presidente e do Vice-Presidente da República realizar-se-á, simultaneamente, no primeiro domingo de outubro, em primeiro turno, e no último domingo de outubro, em segundo turno, se houver, do ano anterior ao do término do mandato presidencial vigente. (Redação dada pela Emenda Constitucional nº 16, de 1997) § 1º A eleição do Presidente da República importará a do Vice-Presidente com ele registrado. § 2º Será considerado eleito Presidente o candidato que, registrado por partido político, obtiver a maioria absoluta de votos, não computados os em branco e os nulos. § 3º Se nenhum candidato alcançar maioria absoluta na primeira votação, far-se-á nova eleição em até vinte dias após a proclamação do resultado, concorrendo os dois candidatos mais votados e considerando-se eleito aquele que obtiver a maioria dos votos válidos. § 4º Se, antes de realizado o segundo turno, ocorrer morte, desistência ou impedimento legal de candidato, convocar-se-á, dentre os remanescentes, o de maior votação. § 5º Se, na hipótese dos parágrafos anteriores, remanescer, em segundo lugar, mais de um candidato com a mesma votação, qualificar-se-á o mais idoso.",
          "context": "O caput e o § 3º convivem na compilação. A banca usa um para negar o outro.",
          "exam": "O caput e o § 3º convivem na compilação. A banca usa um para negar o outro.",
          "trap": "Branco e nulo não computam na maioria absoluta.",
          "example": "Sem exemplo de chapa. O § 1º já importa o Vice registrado.",
          "mnemonic": "Outubro no caput. Vinte dias ainda escritos no § 3º.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p166-78",
      "num": "78",
      "kicker": "CF art. 78",
      "title": "Posse",
      "lead": "Posse",
      "plate": "Posse",
      "plateSource": "CF art. 78",
      "devices": [
        {
          "tag": "78",
          "name": "Art. 78",
          "hook": "Posse no Congresso.",
          "literal": "Art. 78. O Presidente e o Vice-Presidente da República tomarão posse em sessão do Congresso Nacional, prestando o compromisso de manter, defender e cumprir a Constituição, observar as leis, promover o bem geral do povo brasileiro, sustentar a união, a integridade e a independência do Brasil. Parágrafo único. Se, decorridos dez dias da data fixada para a posse, o Presidente ou o Vice-Presidente, salvo motivo de força maior, não tiver assumido o cargo, este será declarado vago.",
          "context": "A posse é em sessão do Congresso.",
          "exam": "A posse é em sessão do Congresso.",
          "trap": "Não se invente data fora do artigo.",
          "example": "Sem roteiro de sessão. O artigo localiza o ato.",
          "mnemonic": "Posse no Congresso.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p166-79",
      "num": "79",
      "kicker": "CF art. 79",
      "title": "Substituição",
      "lead": "Substituição",
      "plate": "Substituição",
      "plateSource": "CF art. 79",
      "devices": [
        {
          "tag": "79",
          "name": "Art. 79",
          "hook": "Impedimento: substitui. Vaga: sucede.",
          "literal": "Art. 79. Substituirá o Presidente, no caso de impedimento, e suceder-lhe-á, no de vaga, o Vice-Presidente. Parágrafo único. O Vice-Presidente da República, além de outras atribuições que lhe forem conferidas por lei complementar, auxiliará o Presidente, sempre que por ele convocado para missões especiais.",
          "context": "Vice substitui no impedimento e sucede na vaga.",
          "exam": "Vice substitui no impedimento e sucede na vaga.",
          "trap": "Não se troque com a eleição do art. 81.",
          "example": "Sem exemplo de afastamento. Os verbos bastam.",
          "mnemonic": "Impedimento: substitui. Vaga: sucede.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p166-80",
      "num": "80",
      "kicker": "CF art. 80",
      "title": "Sucessão",
      "lead": "Sucessão",
      "plate": "Sucessão",
      "plateSource": "CF art. 80",
      "devices": [
        {
          "tag": "80",
          "name": "Art. 80",
          "hook": "A ordem é a do artigo, não a da memória.",
          "literal": "Art. 80. Em caso de impedimento do Presidente e do Vice-Presidente, ou vacância dos respectivos cargos, serão sucessivamente chamados ao exercício da Presidência o Presidente da Câmara dos Deputados, o do Senado Federal e o do Supremo Tribunal Federal.",
          "context": "A linha está no artigo.",
          "exam": "A linha está no artigo.",
          "trap": "Não se invente nome de cargo fora da lista.",
          "example": "Sem exemplo de vacância. A ordem é o texto.",
          "mnemonic": "A ordem é a do artigo, não a da memória.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p166-81",
      "num": "81",
      "kicker": "CF art. 81",
      "title": "Dupla vacância",
      "lead": "Dupla vacância",
      "plate": "Dupla vacância",
      "plateSource": "CF art. 81",
      "devices": [
        {
          "tag": "81",
          "name": "Art. 81",
          "hook": "Noventa dias. Não é o § 3º do art. 77.",
          "literal": "Art. 81. Vagando os cargos de Presidente e Vice-Presidente da República, far-se-á eleição noventa dias depois de aberta a última vaga. § 1º Ocorrendo a vacância nos últimos dois anos do período presidencial, a eleição para ambos os cargos será feita trinta dias depois da última vaga, pelo Congresso Nacional, na forma da lei. § 2º Em qualquer dos casos, os eleitos deverão completar o período de seus antecessores. (Vide Emenda Constitucional de Revisão nº 5, de 1994)",
          "context": "Eleição noventa dias depois de aberta a última vaga, nos termos do artigo.",
          "exam": "Eleição noventa dias depois de aberta a última vaga, nos termos do artigo.",
          "trap": "Não se troque com os vinte dias do art. 77, § 3º.",
          "example": "Sem exemplo de vaga. O prazo é o do artigo.",
          "mnemonic": "Noventa dias. Não é o § 3º do art. 77.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p166-83",
      "num": "83",
      "kicker": "CF art. 83",
      "title": "Ausência do País",
      "lead": "Ausência do País",
      "plate": "Ausência do País",
      "plateSource": "CF art. 83",
      "devices": [
        {
          "tag": "83",
          "name": "Art. 83",
          "hook": "Licença do Congresso.",
          "literal": "Art. 83. O Presidente e o Vice-Presidente da República não poderão, sem licença do Congresso Nacional, ausentar-se do País por período superior a quinze dias, sob pena de perda do cargo.",
          "context": "Sem licença do Congresso, não se ausenta, nos termos do artigo.",
          "exam": "Sem licença do Congresso, não se ausenta, nos termos do artigo.",
          "trap": "Não se invente prazo de ausência.",
          "example": "Sem exemplo de viagem. A licença é o requisito.",
          "mnemonic": "Licença do Congresso.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p166-85",
      "num": "85",
      "kicker": "CF art. 85",
      "title": "Responsabilidade",
      "lead": "Responsabilidade",
      "plate": "Responsabilidade",
      "plateSource": "CF art. 85",
      "devices": [
        {
          "tag": "85",
          "name": "Art. 85",
          "hook": "Responsabilidade não é crime comum.",
          "literal": "Art. 85. São crimes de responsabilidade os atos do Presidente da República que atentem contra a Constituição Federal e, especialmente, contra: I - a existência da União; II - o livre exercício do Poder Legislativo, do Poder Judiciário, do Ministério Público e dos Poderes constitucionais das unidades da Federação; III - o exercício dos direitos políticos, individuais e sociais; IV - a segurança interna do País; V - a probidade na administração; VI - a lei orçamentária; VII - o cumprimento das leis e das decisões judiciais. Parágrafo único. Esses crimes serão definidos em lei especial, que estabelecerá as normas de processo e julgamento.",
          "context": "O rol é exemplificativo no advérbio especialmente, mas cada inciso tem objeto.",
          "exam": "O rol é exemplificativo no advérbio especialmente, mas cada inciso tem objeto.",
          "trap": "Probidade na administração está no inciso V. Não é crime comum.",
          "example": "Sem exemplo de ato. O inciso só nomeia o bem.",
          "mnemonic": "Responsabilidade não é crime comum.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 166",
      "does": [
        "Ler o texto antes do comentário",
        "Separar o artigo do vizinho"
      ],
      "doesNot": [
        "Não completar lacuna",
        "Não usar número não escrito neste prompt"
      ]
    }
  ],
  "roleNote": "Questões originais, no estilo da banca. Não são prova real.",
  "rolePlate": "Texto primeiro.",
  "rolePlateSource": "Prompt 166",
  "summary": [
    {
      "item": "Caput",
      "rule": "Último domingo de outubro.",
      "clue": "EC 16."
    },
    {
      "item": "§ 3º",
      "rule": "Vinte dias ainda escritos.",
      "clue": "A página não riscou."
    }
  ],
  "compare": [
    {
      "item": "Segundo turno",
      "ce": "Só os vinte dias, o caput foi riscado.",
      "cf": "Os dois textos estão na compilação.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 166011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "No caput do art. 77, o segundo turno, se houver, é no último domingo de outubro do ano anterior ao término do mandato.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. É a redação da EC 16, ainda no caput."
    },
    {
      "id": 166012,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "A compilação riscou o § 3º do art. 77, de modo que o prazo de vinte dias não está mais escrito.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. O § 3º continua na compilação consultada, com a nova eleição em até vinte dias. O caput também está. Não se apague um."
    },
    {
      "id": 166013,
      "banca": "Estilo Cebraspe · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "São crimes de responsabilidade, no art. 85, os atos do Presidente que atentem contra a Constituição e, especialmente, contra:",
      "correct": "e",
      "options": [
        {
          "key": "a",
          "label": "Só a lei penal comum."
        },
        {
          "key": "b",
          "label": "A competência do Município para emitir moeda."
        },
        {
          "key": "c",
          "label": "O mandato de senador."
        },
        {
          "key": "d",
          "label": "A inviolabilidade do advogado."
        },
        {
          "key": "e",
          "label": "A probidade na administração, entre outros bens listados."
        }
      ],
      "comentario": "Questão original, não é prova real. A alternativa e é o inciso V. O julgamento desses atos, no art. 52, é do Senado."
    }
  ],
  "toc": [
    {
      "id": "p166-77",
      "num": "77",
      "label": "Eleição"
    },
    {
      "id": "p166-78",
      "num": "78",
      "label": "Posse"
    },
    {
      "id": "p166-79",
      "num": "79",
      "label": "Substituição"
    },
    {
      "id": "p166-80",
      "num": "80",
      "label": "Sucessão"
    },
    {
      "id": "p166-81",
      "num": "81",
      "label": "Dupla vacância"
    },
    {
      "id": "p166-83",
      "num": "83",
      "label": "Ausência do País"
    },
    {
      "id": "p166-85",
      "num": "85",
      "label": "Responsabilidade"
    }
  ],
  "clocks": [
    {
      "value": "90",
      "label": "Dias, dupla vacância",
      "source": "Art. 81"
    }
  ],
  "organKicker": "Recorte",
  "organTitle": "Presidente da República",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a troca que a banca faz.",
  "closing": "Conferir a fonte se houver emenda posterior à compilação consultada em 21/10/2026.",
  "palette": "rose",
  "highlight": {
    "big": "7",
    "small": "artigos neste assunto"
  },
  "heroLead": "Eleição, posse, substituição, viagem e crimes de responsabilidade. O caput do art. 77, na redação da EC 16, marca o segundo turno no último domingo de outubro. O § 3º da mesma comp",
  "nextLine": "O assunto seguinte continua na mesma disciplina.",
  "closingMnemonic": "Caput: primeiro domingo de outubro e, se houver, último domingo de outubro.",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "O que a banca troca",
  "compareLead": "A coluna da esquerda é a armadilha. A da direita é o texto.",
  "compareLeft": "Armadilha",
  "compareRight": "Texto"
};
