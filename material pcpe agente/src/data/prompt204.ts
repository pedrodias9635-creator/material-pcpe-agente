import type { StudyModule } from "./study";

export const PROMPT204: StudyModule = {
  "short": "Estatuto da Juventude",
  "eyebrow": "Prompt 204 · Edital nº 2, de 15/10/2026",
  "title": "Estatuto da Juventude",
  "subtitle": "Lei nº 12.852/2013",
  "description": "O Edital nº 2 inseriu a Lei nº 12.852/2013 no item 20 de Noções de Direito Penal do Agente. Jovem, nesta lei, tem de 15 a 29 anos. De 15 a 18 prevalece o ECA. A meia-entrada não é de todo jovem, nem de todo ingresso. O conselho de juventude não é jurisdicional e não toma o lugar do conselho da criança e do adolescente.",
  "reading": "Lei nº 12.852/2013, página do Planalto consultada em 22/10/2026. Arts. 1º, 2º, 15, VIII e IX, 16, 23, 32, 37 a 39, 41, 44 a 48. Arts. 11, §§ 1º e 2º, e 45, § 2º, estão vetados e não foram reconstituídos. O regulamento não foi aberto.",
  "terms": [
    "15 a 29",
    "meia-entrada",
    "40%",
    "SINAJUVE",
    "não jurisdicional"
  ],
  "subject": "Direito Penal",
  "context": [
    "Fonte: compilação do Planalto da Lei nº 12.852/2013, consultada em 22/10/2026.",
    "Trecho vetado não foi completado. Decreto que a lei remete a regulamento não foi transcrito.",
    "O artigo de segurança pública só enuncia direito e diretriz. Não descreve violência."
  ],
  "importance": "A banca troca a idade, estende a meia-entrada a qualquer jovem e transforma o conselho em juiz.",
  "distinctions": [
    "Jovem, para esta lei, tem de 15 a 29 anos. Não começa aos 18.",
    "De 15 a 18 aplica-se o ECA. Este Estatuto só entra se não conflitar com a proteção integral.",
    "A emancipação do art. 2º, I, não é a emancipação do Código Civil.",
    "A seção de trabalho não se aplica de 15 a 18. Vale o ECA e a lei específica.",
    "Meia-entrada: jovem de até 29 anos de família de baixa renda e estudante. Baixa renda é CadÚnico com renda mensal de até 2 salários mínimos.",
    "A carteira estudantil vale até 31 de março do ano seguinte. O benefício para no limite de 40% dos ingressos e não incide nos eventos das Leis nº 12.663/2012 e nº 12.780/2013.",
    "Transporte interestadual de baixa renda: 2 vagas gratuitas por veículo e, depois delas, 2 vagas com desconto de pelo menos 50%. O procedimento ficou no regulamento.",
    "Os incisos VIII e IX do art. 15 foram incluídos pela Lei nº 15.178/2025. Não estavam no texto de 2013.",
    "SINAJUVE tem composição, organização, competência e funcionamento definidos em regulamento. Esse decreto não foi aberto.",
    "Conferência nacional, estadual e municipal: intervalo máximo de 4 anos.",
    "Conselho de juventude é permanente, autônomo e não jurisdicional. Sociedade civil, no mínimo, paritária.",
    "De 15 a 18, deliberar e controlar as ações cabe ao conselho de direitos da criança e do adolescente."
  ],
  "organs": [
    {
      "sigla": "1º",
      "nome": "Idade",
      "funcao": "15 a 29. De 15 a 18, o ECA prevalece.",
      "base": "Art. 1º, §§ 1º e 2º",
      "nao": "18 anos não é o início da juventude desta lei.",
      "tone": "yellow"
    },
    {
      "sigla": "23",
      "nome": "Meia-entrada",
      "funcao": "Baixa renda até 29 e estudante. Teto de 40%.",
      "base": "Art. 23, caput, §§ 9º e 10",
      "nao": "Não é todo jovem, nem todo ingresso.",
      "tone": "cyan"
    },
    {
      "sigla": "45",
      "nome": "Conselho",
      "funcao": "Permanente, autônomo e não jurisdicional.",
      "base": "Arts. 45, 46 e 47",
      "nao": "Não julga. De 15 a 18, o conselho é o da criança e do adolescente.",
      "tone": "orange"
    }
  ],
  "swaps": [
    {
      "wrong": "Jovem é quem tem de 18 a 29 anos.",
      "right": "15 a 29. De 15 a 18, ECA primeiro."
    },
    {
      "wrong": "Meia-entrada para todo jovem, sem teto.",
      "right": "Baixa renda e estudante. 40% dos ingressos."
    }
  ],
  "timeline": [
    {
      "when": "Fonte",
      "title": "Planalto",
      "text": "Lei nº 12.852/2013, compilação consultada em 22/10/2026. Inclusão dos incisos VIII e IX do art. 15 pela Lei nº 15.178/2025."
    },
    {
      "when": "Limite",
      "title": "Sem invenção",
      "text": "Parágrafo vetado não foi reescrito. Regulamento da meia-entrada e do SINAJUVE não foi aberto."
    }
  ],
  "articles": [
    {
      "id": "p204-1",
      "num": "1º",
      "kicker": "Lei nº 12.852/2013",
      "title": "Quem é jovem",
      "lead": "Art. 1º",
      "plate": "15 a 29",
      "plateSource": "Art. 1º, § 1º",
      "devices": [
        {
          "tag": "1º",
          "name": "Art. 1º",
          "hook": "15 a 29. ECA de 15 a 18.",
          "literal": "Art. 1º Esta Lei institui o Estatuto da Juventude e dispõe sobre os direitos dos jovens, os princípios e diretrizes das políticas públicas de juventude e o Sistema Nacional de Juventude - SINAJUVE. § 1º Para os efeitos desta Lei, são consideradas jovens as pessoas com idade entre 15 (quinze) e 29 (vinte e nove) anos de idade. § 2º Aos adolescentes com idade entre 15 (quinze) e 18 (dezoito) anos aplica-se a Lei nº 8.069, de 13 de julho de 1990 - Estatuto da Criança e do Adolescente, e, excepcionalmente, este Estatuto, quando não conflitar com as normas de proteção integral do adolescente.",
          "context": "A idade desta lei não começa aos 18.",
          "exam": "A banca corta o § 2º e aplica o Estatuto inteiro ao adolescente.",
          "trap": "Excepcionalmente não é preferencialmente.",
          "example": "Sem exemplo de fato.",
          "mnemonic": "15 a 29. De 15 a 18, ECA primeiro.",
          "revoked": false
        },
        {
          "tag": "2º",
          "name": "Art. 2º, parágrafo único",
          "hook": "Emancipação daqui não é a do Código Civil.",
          "literal": "Art. 2º O disposto nesta Lei e as políticas públicas de juventude são regidos pelos seguintes princípios: I - promoção da autonomia e emancipação dos jovens; II - valorização e promoção da participação social e política, de forma direta e por meio de suas representações; III - promoção da criatividade e da participação no desenvolvimento do País; IV - reconhecimento do jovem como sujeito de direitos universais, geracionais e singulares; V - promoção do bem-estar, da experimentação e do desenvolvimento integral do jovem; VI - respeito à identidade e à diversidade individual e coletiva da juventude; VII - promoção da vida segura, da cultura da paz, da solidariedade e da não discriminação; e VIII - valorização do diálogo e convívio do jovem com as demais gerações. Parágrafo único. A emancipação dos jovens a que se refere o inciso I do caput refere-se à trajetória de inclusão, liberdade e participação do jovem na vida em sociedade, e não ao instituto da emancipação disciplinado pela Lei nº 10.406, de 10 de janeiro de 2002 - Código Civil.",
          "context": "Oito princípios. O parágrafo único só explica o inciso I.",
          "exam": "A banca converte o inciso I em emancipação civil.",
          "trap": "Não é capacidade civil.",
          "example": "Sem exemplo de fato.",
          "mnemonic": "Emancipação daqui é inclusão, não Código Civil.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p204-23",
      "num": "23",
      "kicker": "Meia-entrada",
      "title": "Preço e transporte",
      "lead": "Arts. 23 e 32",
      "plate": "40%",
      "plateSource": "Art. 23, § 10",
      "devices": [
        {
          "tag": "23",
          "name": "Art. 23",
          "hook": "Baixa renda e estudante. 40%. Até 31 de março.",
          "literal": "Art. 23. É assegurado aos jovens de até 29 (vinte e nove) anos pertencentes a famílias de baixa renda e aos estudantes, na forma do regulamento, o acesso a salas de cinema, cineclubes, teatros, espetáculos musicais e circenses, eventos educativos, esportivos, de lazer e entretenimento, em todo o território nacional, promovidos por quaisquer entidades e realizados em estabelecimentos públicos ou particulares, mediante pagamento da metade do preço do ingresso cobrado do público em geral. § 1º Terão direito ao benefício previsto no caput os estudantes regularmente matriculados nos níveis e modalidades de educação e ensino previstos no Título V da Lei nº 9.394, de 20 de dezembro de 1996, que comprovem sua condição de discente, mediante apresentação, no momento da aquisição do ingresso e na portaria do local de realização do evento, da Carteira de Identificação Estudantil - CIE. § 5º A CIE terá validade até o dia 31 de março do ano subsequente à data de sua expedição. § 8º Os benefícios previstos neste artigo não incidirão sobre os eventos esportivos de que tratam as Leis nºs 12.663, de 5 de junho de 2012, e 12.780, de 9 de janeiro de 2013. § 9º Considera-se de baixa renda, para os fins do disposto no caput, a família inscrita no Cadastro Único para Programas Sociais do Governo Federal - CadÚnico cuja renda mensal seja de até 2 (dois) salários mínimos. § 10. A concessão do benefício da meia-entrada de que trata o caput é limitada a 40% (quarenta por cento) do total de ingressos disponíveis para cada evento.",
          "context": "O regulamento da forma de acesso não foi aberto. Os parágrafos citados são os da lei.",
          "exam": "A banca tira o teto de 40% ou estende o benefício aos eventos das duas leis citadas.",
          "trap": "Dois salários mínimos e CadÚnico. Uma condição não substitui a outra.",
          "example": "Sem exemplo de ingresso.",
          "mnemonic": "Até 29, baixa renda ou estudante. 40%. CIE até 31 de março.",
          "revoked": false
        },
        {
          "tag": "32",
          "name": "Art. 32",
          "hook": "Duas grátis. Depois, duas com pelo menos 50%.",
          "literal": "Art. 32. No sistema de transporte coletivo interestadual, observar-se-á, nos termos da legislação específica: I - a reserva de 2 (duas) vagas gratuitas por veículo para jovens de baixa renda; II - a reserva de 2 (duas) vagas por veículo com desconto de 50% (cinquenta por cento), no mínimo, no valor das passagens, para os jovens de baixa renda, a serem utilizadas após esgotadas as vagas previstas no inciso I. Parágrafo único. Os procedimentos e os critérios para o exercício dos direitos previstos nos incisos I e II serão definidos em regulamento.",
          "context": "Os §§ 1º e 2º do art. 11 estão vetados. Não foram reconstituídos. O benefício de transporte que a lei escreve é este.",
          "exam": "A banca troca duas vagas por meia frota, ou antecipa o desconto antes da gratuidade.",
          "trap": "O desconto só depois de esgotadas as duas gratuitas. O critério ficou no regulamento.",
          "example": "Sem exemplo de viagem.",
          "mnemonic": "2 grátis. Depois, 2 com no mínimo 50%.",
          "revoked": false
        },
        {
          "tag": "16",
          "name": "Art. 16 e art. 15, VIII e IX",
          "hook": "Trabalho de 15 a 18 não é esta seção.",
          "literal": "Art. 15. VIII - fomento a atividades econômicas no campo vinculadas aos setores da cultura e do turismo; (Incluído pela Lei nº 15.178, de 2025) IX - promoção de programas que favoreçam a formação e a profissionalização de agentes culturais no campo. (Incluído pela Lei nº 15.178, de 2025) Art. 16. O direito à profissionalização e à proteção no trabalho dos adolescentes com idade entre 15 (quinze) e 18 (dezoito) anos de idade será regido pelo disposto na Lei nº 8.069, de 13 de julho de 1990 - Estatuto da Criança e do Adolescente, e em leis específicas, não se aplicando o previsto nesta Seção.",
          "context": "Os dois incisos novos não reabrem a seção para o adolescente.",
          "exam": "A banca aplica a seção de trabalho a quem tem 16 anos.",
          "trap": "Lei nº 15.178/2025 inclui. Não revoga o art. 16.",
          "example": "Sem exemplo de trabalho.",
          "mnemonic": "15 a 18: ECA. VIII e IX são de 2025.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p204-39",
      "num": "39",
      "kicker": "SINAJUVE",
      "title": "Sistema e conselhos",
      "lead": "Arts. 37 a 48",
      "plate": "4 anos",
      "plateSource": "Art. 41, V",
      "devices": [
        {
          "tag": "37",
          "name": "Arts. 37 e 38",
          "hook": "Direito a ambiente seguro. Diretriz, não método.",
          "literal": "Art. 37. Todos os jovens têm direito de viver em um ambiente seguro, sem violência, com garantia da sua incolumidade física e mental, sendo-lhes asseguradas a igualdade de oportunidades e facilidades para seu aperfeiçoamento intelectual, cultural e social. Art. 38. As políticas de segurança pública voltadas para os jovens deverão articular ações da União, dos Estados, do Distrito Federal e dos Municípios e ações não governamentais, tendo por diretrizes: I - a integração com as demais políticas voltadas à juventude; II - a prevenção e enfrentamento da violência; III - a promoção de estudos e pesquisas e a obtenção de estatísticas e informações relevantes para subsidiar as ações de segurança pública e permitir a avaliação periódica dos impactos das políticas públicas quanto às causas, às consequências e à frequência da violência contra os jovens; IV - a priorização de ações voltadas para os jovens em situação de risco, vulnerabilidade social e egressos do sistema penitenciário nacional; V - a promoção do acesso efetivo dos jovens à Defensoria Pública, considerando as especificidades da condição juvenil; e VI - a promoção do efetivo acesso dos jovens com deficiência à justiça em igualdade de condições com as demais pessoas, inclusive mediante a provisão de adaptações processuais adequadas a sua idade.",
          "context": "O texto nomeia diretriz. Não descreve conduta.",
          "exam": "A banca cobra o órgão da diretriz V: Defensoria Pública, não a polícia.",
          "trap": "Egresso do sistema penitenciário está na diretriz IV. Não é tipo penal.",
          "example": "Sem exemplo de fato.",
          "mnemonic": "Segurança do jovem é diretriz. Defensoria no inciso V.",
          "revoked": false
        },
        {
          "tag": "39",
          "name": "Arts. 39, 41 e 44",
          "hook": "Sistema no regulamento. Conferência de 4 em 4 anos.",
          "literal": "Art. 39. É instituído o Sistema Nacional de Juventude - SINAJUVE, cujos composição, organização, competência e funcionamento serão definidos em regulamento. Art. 41. Compete à União: V - convocar e realizar, em conjunto com o Conselho Nacional de Juventude, as Conferências Nacionais de Juventude, com intervalo máximo de 4 (quatro) anos. Art. 44. As competências dos Estados e Municípios são atribuídas, cumulativamente, ao Distrito Federal.",
          "context": "O mesmo intervalo de 4 anos está nos arts. 42, IV, e 43, IV, para as conferências estadual e municipal. O decreto não foi aberto.",
          "exam": "A banca fixa a conferência em 2 anos ou tira o Distrito Federal da cumulação.",
          "trap": "Intervalo máximo não é prazo mínimo.",
          "example": "Sem exemplo de conferência.",
          "mnemonic": "SINAJUVE no regulamento. Conferência: no máximo 4 anos. DF acumula.",
          "revoked": false
        },
        {
          "tag": "45",
          "name": "Arts. 45 a 48",
          "hook": "Conselho não julga. De 15 a 18, outro conselho.",
          "literal": "Art. 45. Os conselhos de juventude são órgãos permanentes e autônomos, não jurisdicionais, encarregados de tratar das políticas públicas de juventude e da garantia do exercício dos direitos do jovem. § 1º A lei, em âmbito federal, estadual, do Distrito Federal e municipal, disporá sobre a organização, o funcionamento e a composição dos conselhos de juventude, observada a participação da sociedade civil mediante critério, no mínimo, paritário com os representantes do poder público. § 2º (VETADO). Art. 46. São atribuições dos conselhos de juventude: I - encaminhar ao Ministério Público notícia de fato que constitua infração administrativa ou penal contra os direitos do jovem garantidos na legislação; II - encaminhar à autoridade judiciária os casos de sua competência; III - expedir notificações; IV - solicitar informações das autoridades públicas; V - assessorar o Poder Executivo local na elaboração dos planos, programas, projetos, ações e proposta orçamentária das políticas públicas de juventude. Art. 47. Sem prejuízo das atribuições dos conselhos de juventude com relação aos direitos previstos neste Estatuto, cabe aos conselhos de direitos da criança e do adolescente deliberar e controlar as ações em todos os níveis relativas aos adolescentes com idade entre 15 (quinze) e 18 (dezoito) anos. Art. 48. Esta Lei entra em vigor após decorridos 180 (cento e oitenta) dias de sua publicação oficial.",
          "context": "Encaminhar não é processar. O § 2º do art. 45 está vetado e não foi reescrito.",
          "exam": "A banca chama o conselho de jurisdicional ou dá a ele o controle do adolescente de 16 anos.",
          "trap": "180 dias, não 90. Paritário é o mínimo, não o máximo.",
          "example": "Sem exemplo de notícia.",
          "mnemonic": "Não julga. Encaminha. De 15 a 18, conselho da criança. 180 dias.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 204",
      "does": [
        "Ler o texto antes do comentário"
      ],
      "doesNot": [
        "Não completar parágrafo vetado",
        "Não descrever meio de infração"
      ]
    }
  ],
  "roleNote": "Questões originais. Não são prova real.",
  "rolePlate": "Texto primeiro.",
  "rolePlateSource": "Prompt 204",
  "summary": [
    {
      "item": "Art. 1º",
      "rule": "15 a 29 anos.",
      "clue": "De 15 a 18, ECA, salvo norma que não conflite."
    },
    {
      "item": "Art. 23",
      "rule": "Meia-entrada limitada a 40%.",
      "clue": "Baixa renda: CadÚnico e até 2 salários mínimos."
    },
    {
      "item": "Art. 47",
      "rule": "15 a 18: conselho da criança e do adolescente.",
      "clue": "Conselho de juventude não é jurisdicional."
    }
  ],
  "compare": [
    {
      "item": "Idade",
      "ce": "18 a 29.",
      "cf": "15 a 29.",
      "effect": "restringe"
    },
    {
      "item": "Meia-entrada",
      "ce": "Todo jovem, sem teto.",
      "cf": "Baixa renda e estudante. 40%.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 204011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Para a Lei nº 12.852/2013, jovem é a pessoa entre 18 e 29 anos, e o Estatuto da Criança e do Adolescente não se aplica a quem já completou 15 anos.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. O § 1º do art. 1º fixa 15 a 29 anos. O § 2º manda aplicar o ECA de 15 a 18, e este Estatuto só excepcionalmente, quando não conflitar com a proteção integral."
    },
    {
      "id": 204012,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "A meia-entrada do art. 23 é limitada a 40% dos ingressos disponíveis, e família de baixa renda, para esse artigo, é a inscrita no CadÚnico com renda mensal de até 2 salários mínimos.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. Art. 23, §§ 9º e 10. O benefício também não incide nos eventos esportivos das Leis nº 12.663/2012 e nº 12.780/2013. A Carteira de Identificação Estudantil vale até 31 de março do ano seguinte."
    },
    {
      "id": 204013,
      "banca": "Estilo Cebraspe · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Sobre os conselhos e o transporte interestadual na Lei nº 12.852/2013, assinale a alternativa correta.",
      "correct": "b",
      "options": [
        {
          "key": "a",
          "label": "O conselho de juventude é órgão jurisdicional e controla as ações relativas ao adolescente de 16 anos."
        },
        {
          "key": "b",
          "label": "O conselho de juventude não é jurisdicional, e deliberar e controlar as ações do adolescente de 15 a 18 cabe ao conselho de direitos da criança e do adolescente."
        },
        {
          "key": "c",
          "label": "O transporte interestadual reserva, por veículo, quatro vagas gratuitas a qualquer jovem."
        },
        {
          "key": "d",
          "label": "A conferência nacional de juventude ocorre, no máximo, de dois em dois anos."
        },
        {
          "key": "e",
          "label": "A lei entrou em vigor no dia da publicação."
        }
      ],
      "comentario": "Questão original, não é prova real. A alternativa b junta os arts. 45 e 47. O art. 32 reserva duas vagas gratuitas e, depois, duas com desconto de pelo menos 50%, para jovem de baixa renda. A conferência tem intervalo máximo de 4 anos. A vacância do art. 48 é de 180 dias."
    }
  ],
  "toc": [
    {
      "id": "p204-1",
      "num": "1º",
      "label": "Idade"
    },
    {
      "id": "p204-23",
      "num": "23",
      "label": "Meia-entrada"
    },
    {
      "id": "p204-39",
      "num": "39",
      "label": "SINAJUVE"
    }
  ],
  "clocks": [
    {
      "value": "15–29",
      "label": "Idade do jovem nesta lei",
      "source": "Art. 1º, § 1º"
    },
    {
      "value": "40%",
      "label": "Teto da meia-entrada",
      "source": "Art. 23, § 10"
    },
    {
      "value": "180 dias",
      "label": "Vacância",
      "source": "Art. 48"
    }
  ],
  "organKicker": "Recorte",
  "organTitle": "Estatuto da Juventude",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a troca.",
  "closing": "Conferir alteração posterior à consulta de 22/10/2026. O regulamento não foi aberto.",
  "palette": "rose",
  "highlight": {
    "big": "20",
    "small": "item novo do edital"
  },
  "heroLead": "O Edital nº 2 colocou a Lei nº 12.852/2013 no penal do Agente. Jovem tem de 15 a 29 anos. De 15 a 18, o ECA prevalece. Meia-entrada tem teto. Conselho não julga.",
  "nextLine": "O assunto seguinte continua na mesma disciplina.",
  "closingMnemonic": "15 a 29. ECA de 15 a 18. Meia-entrada em 40%. Conselho não julga.",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "O que a banca troca",
  "compareLead": "A esquerda é a armadilha. A direita é o texto.",
  "compareLeft": "Armadilha",
  "compareRight": "Texto"
};
