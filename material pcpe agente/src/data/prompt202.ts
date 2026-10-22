import type { StudyModule } from "./study";

export const PROMPT202: StudyModule = {
  "short": "Suplente, urgência e lei delegad",
  "eyebrow": "Prompt 202 · lacuna do edital",
  "title": "Suplente, urgência e lei delegada",
  "subtitle": "arts. 50, 56, 63 a 65, 67 e 68",
  "description": "O veto já estava aberto. Faltavam a convocação de ministro, o suplente e a urgência. Ministro convocado que falta sem justificação adequada comete crime de responsabilidade. O artigo só nomeia. Não descreve o ato. Suplente entra na vaga, na investidura do art. 56 e na licença acima de cento e vinte dias. Sem suplente, só há eleição se faltarem mais de quinze meses. Urgência: quarenta e cinco dias em cada Casa. Não corre no recesso e não vale para código. Lei delegada não alcança nacionalidade, cidadania nem direitos individuais, políticos e eleitorais.",
  "reading": "CF/88, compilação do Planalto consultada em 22/10/2026. Arts. 50, 56, 63, 64, 65, 67 e 68. O caput do art. 50 é a redação da Emenda Constitucional nº 132/2023.",
  "terms": [
    "120 dias",
    "15 meses",
    "45 dias",
    "lei delegada"
  ],
  "subject": "Direito Constitucional",
  "context": [
    "O texto é o da compilação oficial conferida. Redação riscada não foi copiada.",
    "Artigo de mesmo número no ADCT não é este texto.",
    "O que não está escrito não se completa."
  ],
  "importance": "A banca troca percentual, prazo e o órgão.",
  "distinctions": [
    "Convocação: Ministro, titular de órgão da Presidência ou Presidente do Comitê Gestor do IBS. Ausência sem justificação adequada é crime de responsabilidade.",
    "Pedido escrito de informação: trinta dias. Recusa, silêncio ou informação falsa também são crime de responsabilidade, no § 2º.",
    "Não perde o mandato quem vira Ministro, secretário de Estado, do Distrito Federal, de Território, de Prefeitura de capital, ou chefe de missão diplomática temporária.",
    "Licença para interesse particular: sem remuneração, no máximo cento e vinte dias por sessão legislativa.",
    "Suplente: vaga, investidura desse inciso ou licença superior a cento e vinte dias.",
    "Sem suplente, eleição só se faltarem mais de quinze meses.",
    "Urgência do Presidente: quarenta e cinco dias na Câmara e quarenta e cinco no Senado. Não corre no recesso. Não se aplica a código.",
    "Revisão da outra Casa: um só turno. Emenda devolve à Casa iniciadora.",
    "Projeto rejeitado só volta na mesma sessão legislativa por proposta da maioria absoluta de qualquer Casa.",
    "Lei delegada não inclui nacionalidade, cidadania, direitos individuais, políticos e eleitorais, nem orçamento."
  ],
  "organs": [
    {
      "sigla": "50",
      "nome": "Convocação e suplente",
      "funcao": "Cento e vinte dias não é cento e oitenta. Quinze meses não é doze.",
      "base": "CF arts. 50 e 56",
      "nao": "Comitê Gestor do IBS entrou pela Emenda 132/2023. Não se retire.",
      "tone": "yellow"
    },
    {
      "sigla": "64",
      "nome": "Urgência e delegação",
      "funcao": "Quarenta e cinco dias em cada Casa. Dez dias para a Câmara apreciar emenda do Senado.",
      "base": "CF arts. 63 a 68",
      "nao": "Código não entra na urgência. Recesso suspende o prazo.",
      "tone": "cyan"
    }
  ],
  "swaps": [
    {
      "wrong": "30 dias, inclusive no recesso.",
      "right": "45 dias. Não corre no recesso."
    }
  ],
  "timeline": [
    {
      "when": "Fonte",
      "title": "Compilação",
      "text": "CF/88, compilação do Planalto consultada em 22/10/2026. Arts. 50, 56, 63, 64, 65, 67 e 68. O caput do art. 50 é a redação da Emenda Constitu"
    },
    {
      "when": "Limite",
      "title": "Sem invenção",
      "text": "Percentual que o artigo não escreve não foi criado."
    }
  ],
  "articles": [
    {
      "id": "p202-50",
      "num": "50",
      "kicker": "CF arts. 50 e 56",
      "title": "Convocação e suplente",
      "lead": "Convocação e suplente",
      "plate": "Convocação e suplente",
      "plateSource": "CF arts. 50 e 56",
      "devices": [
        {
          "tag": "50",
          "name": "Art. 50",
          "hook": "30 dias. 120 dias. 15 meses.",
          "literal": "Art. 50. A Câmara dos Deputados e o Senado Federal, ou qualquer de suas Comissões, poderão convocar Ministro de Estado, quaisquer titulares de órgãos diretamente subordinados à Presidência da República ou o Presidente do Comitê Gestor do Imposto sobre Bens e Serviços para prestarem, pessoalmente, informações sobre assunto previamente determinado, importando crime de responsabilidade a ausência sem justificação adequada. (Redação dada pela Emenda Constitucional nº 132, de 2023) § 1º Os Ministros de Estado poderão comparecer ao Senado Federal, à Câmara dos Deputados, ou a qualquer de suas Comissões, por sua iniciativa e mediante entendimentos com a Mesa respectiva, para expor assunto de relevância de seu Ministério. § 2º As Mesas da Câmara dos Deputados e do Senado Federal poderão encaminhar pedidos escritos de informações a Ministros de Estado ou a qualquer das pessoas referidas no caput deste artigo, importando em crime de responsabilidade a recusa, ou o não - atendimento, no prazo de trinta dias, bem como a prestação de informações falsas. (Redação dada pela Emenda Constitucional de Revisão nº 2, de 1994) Art. 56. Não perderá o mandato o Deputado ou Senador: I - investido no cargo de Ministro de Estado, Governador de Território, Secretário de Estado, do Distrito Federal, de Território, de Prefeitura de Capital ou chefe de missão diplomática temporária;",
          "context": "Cento e vinte dias não é cento e oitenta. Quinze meses não é doze.",
          "exam": "Cento e vinte dias não é cento e oitenta. Quinze meses não é doze.",
          "trap": "Comitê Gestor do IBS entrou pela Emenda 132/2023. Não se retire.",
          "example": "Sem exemplo de ausência. O artigo só nomeia a consequência.",
          "mnemonic": "30 dias. 120 dias. 15 meses.",
          "revoked": false
        },
        {
          "tag": "50.2",
          "name": "Art. 50, continua",
          "hook": "30 dias. 120 dias. 15 meses.",
          "literal": "II - licenciado pela respectiva Casa por motivo de doença, ou para tratar, sem remuneração, de interesse particular, desde que, neste caso, o afastamento não ultrapasse cento e vinte dias por sessão legislativa. § 1º O suplente será convocado nos casos de vaga, de investidura em funções previstas neste artigo ou de licença superior a cento e vinte dias. § 2º Ocorrendo vaga e não havendo suplente, far-se-á eleição para preenchê-la se faltarem mais de quinze meses para o término do mandato. § 3º Na hipótese do inciso I, o Deputado ou Senador poderá optar pela remuneração do mandato.",
          "context": "Continuação do mesmo artigo. Não se leia o trecho isolado.",
          "exam": "A banca corta o parágrafo no meio.",
          "trap": "Não complete com memória.",
          "example": "Sem exemplo novo.",
          "mnemonic": "30 dias. 120 dias. 15 meses.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p202-64",
      "num": "64",
      "kicker": "CF arts. 63 a 68",
      "title": "Urgência e delegação",
      "lead": "Urgência e delegação",
      "plate": "Urgência e delegação",
      "plateSource": "CF arts. 63 a 68",
      "devices": [
        {
          "tag": "64",
          "name": "Art. 64",
          "hook": "45 e 45. Um turno. Delegação não alcança direito político.",
          "literal": "Art. 64. A discussão e votação dos projetos de lei de iniciativa do Presidente da República, do Supremo Tribunal Federal e dos Tribunais Superiores terão início na Câmara dos Deputados. § 1º O Presidente da República poderá solicitar urgência para apreciação de projetos de sua iniciativa. § 2º Se, no caso do § 1º, a Câmara dos Deputados e o Senado Federal não se manifestarem sobre a proposição, cada qual sucessivamente, em até quarenta e cinco dias, sobrestar-se-ão todas as demais deliberações legislativas da respectiva Casa, com exceção das que tenham prazo constitucional determinado, até que se ultime a votação. (Redação dada pela Emenda Constitucional nº 32, de 2001) § 3º A apreciação das emendas do Senado Federal pela Câmara dos Deputados far-se-á no prazo de dez dias, observado quanto ao mais o disposto no parágrafo anterior. § 4º Os prazos do § 2º não correm nos períodos de recesso do Congresso Nacional, nem se aplicam aos projetos de código. Art. 65. O projeto de lei aprovado por uma Casa será revisto pela outra, em um só turno de discussão e votação, e enviado à sanção ou promulgação, se a Casa revisora o aprovar, ou arquivado, se o rejeitar. Parágrafo único. Sendo o projeto emendado, voltará à Casa iniciadora. Art. 67. A matéria constante de projeto de lei rejeitado somente poderá constituir objeto de novo projeto, na mesma sessão legislativa, mediante proposta da maioria absoluta dos membros de qualquer das Casas do Congresso Nacional. Art. 68. As leis delegadas serão elaboradas pelo Presidente da República, que deverá solicitar a delegação ao Congresso Nacional",
          "context": "Quarenta e cinco dias em cada Casa. Dez dias para a Câmara apreciar emenda do Senado.",
          "exam": "Quarenta e cinco dias em cada Casa. Dez dias para a Câmara apreciar emenda do Senado.",
          "trap": "Código não entra na urgência. Recesso suspende o prazo.",
          "example": "Sem modelo de resolução. O § 2º do art. 68 basta.",
          "mnemonic": "45 e 45. Um turno. Delegação não alcança direito político.",
          "revoked": false
        },
        {
          "tag": "64.2",
          "name": "Art. 64, continua",
          "hook": "45 e 45. Um turno. Delegação não alcança direito político.",
          "literal": ". § 1º Não serão objeto de delegação os atos de competência exclusiva do Congresso Nacional, os de competência privativa da Câmara dos Deputados ou do Senado Federal, a matéria reservada à lei complementar, nem a legislação sobre: I - organização do Poder Judiciário e do Ministério Público, a carreira e a garantia de seus membros; II - nacionalidade, cidadania, direitos individuais, políticos e eleitorais; III - planos plurianuais, diretrizes orçamentárias e orçamentos. § 2º A delegação ao Presidente da República terá a forma de resolução do Congresso Nacional, que especificará seu conteúdo e os termos de seu exercício. § 3º Se a resolução determinar a apreciação do projeto pelo Congresso Nacional, este a fará em votação única, vedada qualquer emenda. Art. 63. Não será admitido aumento da despesa prevista: I - nos projetos de iniciativa exclusiva do Presidente da República, ressalvado o disposto no art. 166, § 3º e § 4º; II - nos projetos sobre organização dos serviços administrativos da Câmara dos Deputados, do Senado Federal, dos Tribunais Federais e do Ministério Público.",
          "context": "Continuação do mesmo artigo. Não se leia o trecho isolado.",
          "exam": "A banca corta o parágrafo no meio.",
          "trap": "Não complete com memória.",
          "example": "Sem exemplo novo.",
          "mnemonic": "45 e 45. Um turno. Delegação não alcança direito político.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 202",
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
  "rolePlateSource": "Prompt 202",
  "summary": [
    {
      "item": "Art. 56, § 1º",
      "rule": "Suplente na vaga e na licença acima de 120 dias.",
      "clue": "Sem suplente: eleição só com mais de 15 meses."
    },
    {
      "item": "Art. 64, § 2º",
      "rule": "45 dias em cada Casa.",
      "clue": "Não corre no recesso. Código fora."
    }
  ],
  "compare": [
    {
      "item": "Urgência",
      "ce": "30 dias, inclusive no recesso.",
      "cf": "45 dias. Não corre no recesso.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 202011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "O suplente é convocado na vaga, na investidura em cargo do art. 56 e na licença superior a cento e vinte dias.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. Art. 56, § 1º. Se houver vaga e não houver suplente, a eleição só se faz se faltarem mais de quinze meses para o término do mandato."
    },
    {
      "id": 202012,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Na urgência pedida pelo Presidente, cada Casa tem trinta dias, e o prazo corre também no recesso e nos projetos de código.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. O art. 64, § 2º, dá até quarenta e cinco dias a cada Casa. O § 4º diz que os prazos não correm no recesso e não se aplicam a projetos de código."
    },
    {
      "id": 202013,
      "banca": "Estilo Cebraspe · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Não pode ser objeto de lei delegada, no art. 68, § 1º:",
      "correct": "d",
      "options": [
        {
          "key": "a",
          "label": "Qualquer matéria de lei ordinária."
        },
        {
          "key": "b",
          "label": "Só a criação de município."
        },
        {
          "key": "c",
          "label": "A remuneração de servidor, em qualquer caso."
        },
        {
          "key": "d",
          "label": "Nacionalidade, cidadania e direitos individuais, políticos e eleitorais."
        },
        {
          "key": "e",
          "label": "O regimento interno de uma autarquia."
        }
      ],
      "comentario": "Questão original, não é prova real. A alternativa d é o inciso II. Também ficam de fora a organização do Judiciário e do Ministério Público, a lei complementar e os orçamentos. A delegação tem forma de resolução do Congresso."
    }
  ],
  "toc": [
    {
      "id": "p202-50",
      "num": "50",
      "label": "Convocação e suplente"
    },
    {
      "id": "p202-64",
      "num": "64",
      "label": "Urgência e delegação"
    }
  ],
  "clocks": [
    {
      "value": "120",
      "label": "Dias, licença particular",
      "source": "Art. 56, II"
    },
    {
      "value": "45",
      "label": "Dias de urgência, cada Casa",
      "source": "Art. 64, § 2º"
    },
    {
      "value": "30",
      "label": "Dias, informação escrita",
      "source": "Art. 50, § 2º"
    }
  ],
  "organKicker": "Recorte",
  "organTitle": "Suplente, urgência e lei delegada",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a troca.",
  "closing": "Conferir emenda posterior à consulta de 22/10/2026.",
  "palette": "rose",
  "highlight": {
    "big": "2",
    "small": "artigos neste assunto"
  },
  "heroLead": "O veto já estava aberto. Faltavam a convocação de ministro, o suplente e a urgência. Ministro convocado que falta sem justificação adequada comete crime de responsabilidade. O arti",
  "nextLine": "O assunto seguinte continua na mesma disciplina.",
  "closingMnemonic": "Convocação: Ministro, titular de órgão da Presidência ou Presidente do Comitê Gestor do IBS. Ausência sem justificação a",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "O que a banca troca",
  "compareLead": "A esquerda é a armadilha. A direita é o texto.",
  "compareLeft": "Armadilha",
  "compareRight": "Texto"
};
