import type { StudyModule } from "./study";

export const PROMPT54: StudyModule = {
  "short": "Inexigibilidade",
  "eyebrow": "Prompt 54 de 86 · Lei 14.133/2021, art. 74",
  "title": "Inexigibilidade",
  "subtitle": "competição inviável, rol em especial",
  "description": "Inexigibilidade não é escolha da Administração. É inviabilidade de competição. O caput diz em especial: o rol não fecha o conceito, mas cada inciso tem trava própria. Dispensa não entra.",
  "reading": "Lei nº 14.133/2021, art. 74, caput, incisos I a V e §§ 1º a 5º. Texto vigente no Planalto, conferido nesta rodada.",
  "terms": [
    "inexigibilidade",
    "inviabilidade de competição",
    "exclusividade",
    "notória especialização",
    "credenciamento"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "O processo comum já foi lido no art. 72. Aqui só a hipótese.",
    "Em especial não significa rol taxativo. Também não autoriza inventar caso sem inviabilidade.",
    "A dispensa por valor é o art. 75 e não se mistura com este artigo."
  ],
  "importance": "A banca chama inexigibilidade de discricionária e aceita marca preferida no inciso I.",
  "distinctions": [
    "Inexigibilidade: competição inviável. Dispensa: competição possível, mas a lei afasta.",
    "Inciso I veda preferência por marca específica.",
    "Empresário do inciso II precisa de exclusividade permanente e contínua, não de um evento.",
    "Publicidade e divulgação não entram no inciso III.",
    "Inciso IV é credenciamento. Não é fornecedor único."
  ],
  "organs": [
    {
      "sigla": "I",
      "nome": "Exclusivo",
      "funcao": "Só aquele produtor, empresa ou representante.",
      "base": "Art. 74, I e § 1º",
      "nao": "Marca preferida não prova exclusividade.",
      "tone": "cyan"
    },
    {
      "sigla": "II",
      "nome": "Artístico",
      "funcao": "Profissional consagrado, direto ou por empresário exclusivo.",
      "base": "Art. 74, II e § 2º",
      "nao": "Representação de um evento não basta.",
      "tone": "yellow"
    },
    {
      "sigla": "III",
      "nome": "Intelectual",
      "funcao": "Serviço técnico especializado, notória especialização.",
      "base": "Art. 74, III e §§ 3º e 4º",
      "nao": "Publicidade e divulgação estão vedadas.",
      "tone": "violet"
    },
    {
      "sigla": "IV",
      "nome": "Credenciamento",
      "funcao": "Objeto que deva ou possa ser contratado assim.",
      "base": "Art. 74, IV",
      "nao": "Não é o inciso da exclusividade.",
      "tone": "emerald"
    },
    {
      "sigla": "V",
      "nome": "Imóvel",
      "funcao": "Instalação e localização tornam a escolha necessária.",
      "base": "Art. 74, V e § 5º",
      "nao": "Sem singularidade e vantagem, não cabe.",
      "tone": "orange"
    },
    {
      "sigla": "ESP",
      "nome": "Em especial",
      "funcao": "O caput não diz somente.",
      "base": "Art. 74, caput",
      "nao": "Não dispense a inviabilidade de competição.",
      "tone": "sky"
    }
  ],
  "swaps": [
    {
      "wrong": "Inexigibilidade é discricionária, como a dispensa.",
      "right": "O caput exige inviabilidade de competição. Não é escolha entre competir ou não."
    },
    {
      "wrong": "O rol do art. 74 é taxativo porque lista casos.",
      "right": "O caput diz em especial. O conceito é a inviabilidade."
    },
    {
      "wrong": "Preferência de marca prova o inciso I.",
      "right": "O § 1º veda preferência por marca específica."
    },
    {
      "wrong": "Empresário de um show local autoriza o inciso II.",
      "right": "A exclusividade há de ser permanente e contínua, no País ou em Estado. Representação restrita a evento ou local específico não cabe."
    },
    {
      "wrong": "Publicidade pode ser inexigível por notória especialização.",
      "right": "O inciso III veda inexigibilidade para publicidade e divulgação."
    },
    {
      "wrong": "No inciso III, o contratado pode subcontratar outra empresa.",
      "right": "O § 4º veda subcontratação de empresas ou profissionais distintos dos que justificaram a inexigibilidade."
    },
    {
      "wrong": "Credenciamento é fornecedor exclusivo.",
      "right": "O inciso IV é outro caso. Exclusividade é o inciso I."
    },
    {
      "wrong": "Qualquer imóvel pode ser comprado por inexigibilidade.",
      "right": "O inciso V exige características de instalação e localização, e o § 5º pede avaliação, inexistência de imóvel público vago e singularidade com vantagem."
    }
  ],
  "timeline": [
    {
      "when": "1",
      "title": "Pergunta",
      "text": "A competição é inviável? Se for apenas inconveniente, não é este artigo."
    },
    {
      "when": "2",
      "title": "Inciso",
      "text": "Exclusivo, artístico, intelectual, credenciamento ou imóvel."
    },
    {
      "when": "3",
      "title": "Prova",
      "text": "Documento idôneo, notoriedade, ou os três requisitos do imóvel."
    },
    {
      "when": "4",
      "title": "Processo",
      "text": "A instrução continua sendo a do art. 72, já lida."
    }
  ],
  "articles": [
    {
      "id": "art74",
      "num": "74",
      "kicker": "Seção II",
      "title": "Inexigibilidade",
      "lead": "A porta é a inviabilidade. Os incisos são exemplos qualificados.",
      "plate": "Em especial, não somente.",
      "plateSource": "Art. 74, caput",
      "devices": [
        {
          "tag": "caput",
          "name": "Inviável a competição",
          "hook": "O conceito vem antes da lista.",
          "literal": "É inexigível a licitação quando inviável a competição, em especial nos casos de: I - aquisição de materiais, de equipamentos ou de gêneros ou contratação de serviços que só possam ser fornecidos por produtor, empresa ou representante comercial exclusivos; II - contratação de profissional do setor artístico, diretamente ou por meio de empresário exclusivo, desde que consagrado pela crítica especializada ou pela opinião pública; III - contratação dos seguintes serviços técnicos especializados de natureza predominantemente intelectual com profissionais ou empresas de notória especialização, vedada a inexigibilidade para serviços de publicidade e divulgação; IV - objetos que devam ou possam ser contratados por meio de credenciamento; V - aquisição ou locação de imóvel cujas características de instalações e de localização tornem necessária sua escolha.",
          "context": "O inciso III ainda lista alíneas. Elas entram no dispositivo seguinte, para não misturar a vedação da publicidade.",
          "exam": "A banca troca inexigível por dispensável.",
          "trap": "Não ensine a fabricar exclusividade.",
          "example": "Um equipamento que só um fabricante fornece pode estar no inciso I. A prova é documento idôneo, não o gosto pela marca.",
          "mnemonic": "Inviável primeiro. Lista depois."
        },
        {
          "tag": "III",
          "name": "Alíneas intelectuais",
          "hook": "Oito letras, uma vedação já no caput do inciso.",
          "literal": "As alíneas do inciso III são: a) estudos técnicos, planejamentos, projetos básicos ou projetos executivos; b) pareceres, perícias e avaliações em geral; c) assessorias ou consultorias técnicas e auditorias financeiras ou tributárias; d) fiscalização, supervisão ou gerenciamento de obras ou serviços; e) patrocínio ou defesa de causas judiciais ou administrativas; f) treinamento e aperfeiçoamento de pessoal; g) restauração de obras de arte e de bens de valor histórico; h) controles de qualidade e tecnológico, análises, testes e ensaios de campo e laboratoriais, instrumentação e monitoramento de parâmetros específicos de obras e do meio ambiente e demais serviços de engenharia que se enquadrem no disposto neste inciso.",
          "context": "A alínea h não abre qualquer serviço de engenharia. Só o que se enquadre neste inciso.",
          "exam": "A banca inclui publicidade na alínea c.",
          "trap": "Notória especialização ainda precisa ser demonstrada. A alínea não a presume.",
          "example": "Uma perícia pode estar na alínea b. Uma campanha publicitária não entra no inciso.",
          "mnemonic": "Oito letras. Publicidade fora."
        },
        {
          "tag": "§1º",
          "name": "Prova da exclusividade",
          "hook": "Documento idôneo, sem marca preferida.",
          "literal": "Para fins do inciso I, a Administração deverá demonstrar a inviabilidade de competição mediante atestado de exclusividade, contrato de exclusividade, declaração do fabricante ou outro documento idôneo capaz de comprovar que o objeto é fornecido ou prestado por produtor, empresa ou representante comercial exclusivos, vedada a preferência por marca específica.",
          "context": "Deverá demonstrar. O documento não é enfeite.",
          "exam": "A banca aceita preferência de marca como se fosse exclusividade.",
          "trap": "Não use o documento para restringir competição onde ela existe.",
          "example": "Declaração do fabricante pode servir. Carta de preferência da Administração, não.",
          "mnemonic": "Prova a exclusividade. Não escolhe marca."
        },
        {
          "tag": "§2º",
          "name": "Empresário exclusivo",
          "hook": "Permanente e contínuo.",
          "literal": "Para fins do inciso II, considera-se empresário exclusivo a pessoa física ou jurídica que possua contrato, declaração, carta ou outro documento que ateste a exclusividade permanente e contínua de representação, no País ou em Estado específico, do profissional do setor artístico, afastada a possibilidade de contratação direta por inexigibilidade por meio de empresário com representação restrita a evento ou local específico.",
          "context": "País ou Estado específico. Evento ou local específico está afastado.",
          "exam": "A banca aceita o empresário de um único show.",
          "trap": "Consagração pela crítica ou pela opinião pública continua exigida no inciso II.",
          "example": "O artista consagrado, com representação contínua no Estado, pode estar no inciso. O intermediário de uma noite, não.",
          "mnemonic": "Contínua no País ou no Estado. Não no evento."
        },
        {
          "tag": "§§3º-5º",
          "name": "Notoriedade, subcontratação e imóvel",
          "hook": "Três travas distintas.",
          "literal": "O § 3º considera de notória especialização o profissional ou a empresa cujo conceito no campo de sua especialidade, decorrente de desempenho anterior, estudos, experiência, publicações, organização, aparelhamento, equipe técnica ou outros requisitos relacionados com suas atividades, permita inferir que o seu trabalho é essencial e reconhecidamente adequado à plena satisfação do objeto. O § 4º, nas contratações do inciso III, veda a subcontratação de empresas ou a atuação de profissionais distintos daqueles que tenham justificado a inexigibilidade. O § 5º, no inciso V, exige avaliação prévia do bem, do estado de conservação, dos custos de adaptações imprescindíveis e do prazo de amortização dos investimentos; certificação da inexistência de imóveis públicos vagos e disponíveis que atendam ao objeto; e justificativas que demonstrem a singularidade do imóvel e a vantagem para a Administração.",
          "context": "O § 3º não escreve um número de anos de experiência. Não invente.",
          "exam": "A banca exige um tempo mínimo de notoriedade que o parágrafo não escreve.",
          "trap": "Subcontratar outro profissional quebra o inciso III. Não é detalhe de execução.",
          "example": "O imóvel precisa de avaliação, de certidão de que não há imóvel público vago e de singularidade com vantagem.",
          "mnemonic": "Notoriedade sem prazo inventado. Imóvel com três provas."
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Administração",
      "source": "Art. 74",
      "does": [
        "Demonstrar a inviabilidade",
        "Juntar o documento do inciso correspondente"
      ],
      "doesNot": [
        "Não escolhe marca",
        "Não trata o rol como discricionário"
      ]
    },
    {
      "role": "Profissional do inciso III",
      "source": "Art. 74, §§ 3º e 4º",
      "does": [
        "Ser quem justificou a notória especialização"
      ],
      "doesNot": [
        "Não subcontrata empresa distinta",
        "Publicidade não entra"
      ]
    },
    {
      "role": "Empresário artístico",
      "source": "Art. 74, § 2º",
      "does": [
        "Provar exclusividade permanente e contínua, no País ou em Estado"
      ],
      "doesNot": [
        "Representação de um evento não basta"
      ]
    }
  ],
  "roleNote": "Inviável não é inconveniente.",
  "rolePlate": "Em especial, com trava em cada inciso.",
  "rolePlateSource": "Art. 74",
  "summary": [
    {
      "item": "Caput",
      "rule": "Inviável a competição, em especial.",
      "clue": "Não é somente, nem é discricionário."
    },
    {
      "item": "I",
      "rule": "Fornecedor exclusivo.",
      "clue": "Vedada preferência de marca."
    },
    {
      "item": "II",
      "rule": "Artístico consagrado.",
      "clue": "Empresário com exclusividade permanente e contínua."
    },
    {
      "item": "III",
      "rule": "Serviço intelectual e notória especialização.",
      "clue": "Publicidade e divulgação vedadas."
    },
    {
      "item": "Alíneas",
      "rule": "De a até h.",
      "clue": "A alínea h não é qualquer engenharia."
    },
    {
      "item": "IV",
      "rule": "Credenciamento.",
      "clue": "Não é o inciso do exclusivo."
    },
    {
      "item": "V",
      "rule": "Imóvel singular.",
      "clue": "Avaliação, inexistência de imóvel público e vantagem."
    },
    {
      "item": "§ 4º",
      "rule": "Não subcontrata quem não justificou.",
      "clue": "Só no inciso III."
    }
  ],
  "compare": [
    {
      "item": "Porta",
      "ce": "Inexigibilidade: competição inviável.",
      "cf": "Dispensa: a lei afasta uma competição possível. Artigo seguinte.",
      "effect": "separa"
    },
    {
      "item": "Rol",
      "ce": "Em especial.",
      "cf": "Não leia como somente.",
      "effect": "amplia"
    },
    {
      "item": "Marca",
      "ce": "Preferência é vedada no § 1º.",
      "cf": "Exclusividade precisa de documento idôneo.",
      "effect": "restringe"
    },
    {
      "item": "Artístico",
      "ce": "País ou Estado, permanente e contínuo.",
      "cf": "Evento ou local específico está afastado.",
      "effect": "restringe"
    },
    {
      "item": "Intelectual",
      "ce": "Notória especialização, sem prazo inventado.",
      "cf": "Publicidade fora.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 54011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "A inexigibilidade da Lei nº 14.133/2021 é hipótese discricionária, e a preferência por marca específica supre o documento de exclusividade do inciso I do art. 74.",
      "correct": "E",
      "comentario": "ERRADO. O caput exige inviabilidade de competição. O § 1º manda demonstrar a exclusividade por documento idôneo e veda a preferência por marca específica."
    },
    {
      "id": 54012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Assinale a alternativa correta sobre o art. 74 da Lei nº 14.133/2021.",
      "correct": "e",
      "comentario": "A alternativa E reúne a vedação da publicidade e a vedação de subcontratar quem não justificou a inexigibilidade. Empresário de um evento não basta. O rol não é somente. Credenciamento não é exclusividade.",
      "options": [
        {
          "key": "a",
          "label": "o rol é taxativo, porque o caput diz somente nos casos seguintes."
        },
        {
          "key": "b",
          "label": "serviços de publicidade e divulgação podem ser contratados por notória especialização."
        },
        {
          "key": "c",
          "label": "o empresário com representação restrita a um evento comprova o inciso II."
        },
        {
          "key": "d",
          "label": "credenciamento e fornecedor exclusivo são o mesmo inciso."
        },
        {
          "key": "e",
          "label": "o inciso III veda publicidade e divulgação e, no § 4º, veda subcontratar empresa ou profissional distinto do que justificou a inexigibilidade."
        }
      ]
    },
    {
      "id": 54013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Na aquisição ou locação de imóvel por inexigibilidade, o § 5º do art. 74 exige",
      "correct": "b",
      "comentario": "Os três requisitos do § 5º são avaliação prévia, certificação de que não há imóvel público vago e disponível, e justificativa de singularidade com vantagem. O parágrafo não escreve um valor em reais.",
      "options": [
        {
          "key": "a",
          "label": "apenas o preço do mercado, dispensada a avaliação do estado de conservação."
        },
        {
          "key": "b",
          "label": "avaliação prévia, certificação da inexistência de imóvel público vago e disponível, e justificativa de singularidade com vantagem para a Administração."
        },
        {
          "key": "c",
          "label": "que o imóvel seja de profissional do setor artístico."
        },
        {
          "key": "d",
          "label": "dispensa do art. 72, porque o imóvel singular não precisa de processo."
        },
        {
          "key": "e",
          "label": "um valor máximo de R$ 100.000,00, escrito no próprio § 5º."
        }
      ]
    }
  ],
  "palette": "leaf",
  "highlight": {
    "big": "Inviável",
    "small": "não inconveniente"
  },
  "heroLead": "Sem competição possível, a licitação é inexigível. Cada inciso tem a sua prova. Dispensa fica para o próximo.",
  "footerLine": "Art. 74 lido. A dispensa não entrou.",
  "nextLine": "Diga continue para o Prompt 55: dispensa, art. 75, incisos I a III. As alíneas do inciso IV não entram nesse anúncio.",
  "closingMnemonic": "Inviável, em especial: exclusivo sem marca, artista contínuo, intelectual sem publicidade, credenciamento, imóvel singular.",
  "rolesTitle": "Quem prova a inviabilidade",
  "rolesLead": "Documento idôneo não é preferência.",
  "compareTitle": "Ainda não é dispensa",
  "compareLead": "A porta deste artigo é a inviabilidade.",
  "compareLeft": "Inexigibilidade",
  "compareRight": "O que não é",
  "clocks": [],
  "toc": [
    {
      "id": "art74",
      "num": "74",
      "label": "Inexigibilidade"
    }
  ]
};
