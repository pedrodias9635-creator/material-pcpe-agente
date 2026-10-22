import type { StudyModule } from "./study";

export const PROMPT165: StudyModule = {
  "short": "CPI, emenda e medida provisória",
  "eyebrow": "Prompt 165 · lacuna do edital",
  "title": "CPI, emenda e medida provisória",
  "subtitle": "arts. 58, 59, 60, 61 e 62",
  "description": "CPI, processo legislativo, emenda e medida provisória. A CPI apura fato determinado, por prazo certo, com requerimento de um terço. A conclusão vai ao Ministério Público. Medida provisória não trata de direito penal.",
  "reading": "CF/88, parte permanente, compilação do Planalto consultada em 21/10/2026. ADCT de mesmo número não é este texto.",
  "terms": [
    "CPI",
    "três quintos",
    "medida provisória"
  ],
  "subject": "Direito Constitucional",
  "context": [
    "O texto abaixo é o da compilação oficial já conferida. Redação anterior riscada não foi copiada.",
    "Artigo de mesmo número no ADCT não é este texto.",
    "O que o artigo não escreve não se completa de memória."
  ],
  "importance": "A banca troca o artigo vizinho, o prazo e o nome do instituto.",
  "distinctions": [
    "CPI: um terço, fato determinado, prazo certo. Conclusões ao Ministério Público, para a responsabilidade civil ou criminal.",
    "Emenda: dois turnos, três quintos dos membros de cada Casa.",
    "Não se emenda a Constituição na vigência de intervenção, estado de defesa ou estado de sítio.",
    "Medida provisória é vedada sobre direito penal, processual penal e processual civil."
  ],
  "organs": [
    {
      "sigla": "58",
      "nome": "Comissões e CPI",
      "funcao": "Um terço, fato determinado, prazo certo.",
      "base": "CF art. 58",
      "nao": "Poderes de investigação não transformam a CPI em tribunal.",
      "tone": "yellow"
    },
    {
      "sigla": "59",
      "nome": "Processo legislativo",
      "funcao": "O rol nomeia emenda, complementar, ordinária, delegada, medida provisória, decreto legislativo e resolução.",
      "base": "CF art. 59",
      "nao": "Não se invente espécie fora da lista.",
      "tone": "cyan"
    },
    {
      "sigla": "60",
      "nome": "Emenda",
      "funcao": "Três quintos, dois turnos, cada Casa.",
      "base": "CF art. 60",
      "nao": "Defesa e sítio travam a emenda. Não só a intervenção.",
      "tone": "orange"
    },
    {
      "sigla": "61",
      "nome": "Iniciativa",
      "funcao": "A iniciativa das complementares e ordinárias cabe também a Comissão e ao Presidente, nos termos do artigo.",
      "base": "CF art. 61",
      "nao": "Não se leia como iniciativa exclusiva do Presidente para toda lei.",
      "tone": "violet"
    }
  ],
  "swaps": [
    {
      "wrong": "Julga como tribunal.",
      "right": "Apura e manda a conclusão ao Ministério Público."
    }
  ],
  "timeline": [
    {
      "when": "Fonte",
      "title": "Compilação conferida",
      "text": "CF/88, parte permanente, compilação do Planalto consultada em 21/10/2026. ADCT de mesmo número não é este texto."
    },
    {
      "when": "Limite",
      "title": "Sem invenção",
      "text": "Inciso não transcrito não foi inventado."
    }
  ],
  "articles": [
    {
      "id": "p165-58",
      "num": "58",
      "kicker": "CF art. 58",
      "title": "Comissões e CPI",
      "lead": "Comissões e CPI",
      "plate": "Comissões e CPI",
      "plateSource": "CF art. 58",
      "devices": [
        {
          "tag": "58",
          "name": "Art. 58",
          "hook": "Um terço. Fato certo. Prazo certo.",
          "literal": "Art. 58. O Congresso Nacional e suas Casas terão comissões permanentes e temporárias, constituídas na forma e com as atribuições previstas no respectivo regimento ou no ato de que resultar sua criação. § 1º Na constituição das Mesas e de cada Comissão, é assegurada, tanto quanto possível, a representação proporcional dos partidos ou dos blocos parlamentares que participam da respectiva Casa. § 2º Às comissões, em razão da matéria de sua competência, cabe: I - discutir e votar projeto de lei que dispensar, na forma do regimento, a competência do Plenário, salvo se houver recurso de um décimo dos membros da Casa; II - realizar audiências públicas com entidades da sociedade civil; III - convocar Ministros de Estado para prestar informações sobre assuntos inerentes a suas atribuições; IV - receber petições, reclamações, representações ou queixas de qualquer pessoa contra atos ou omissões das autoridades ou entidades públicas; V - solicitar depoimento de qualquer autoridade ou cidadão;",
          "context": "Um terço, fato determinado, prazo certo.",
          "exam": "Um terço, fato determinado, prazo certo.",
          "trap": "Poderes de investigação não transformam a CPI em tribunal.",
          "example": "Sem roteiro de apuração. O § 3º só cria a comissão e manda a conclusão ao Ministério Público.",
          "mnemonic": "Um terço. Fato certo. Prazo certo.",
          "revoked": false
        },
        {
          "tag": "58.2",
          "name": "Art. 58, continua",
          "hook": "Um terço. Fato certo. Prazo certo.",
          "literal": "VI - apreciar programas de obras, planos nacionais, regionais e setoriais de desenvolvimento e sobre eles emitir parecer. § 3º As comissões parlamentares de inquérito, que terão poderes de investigação próprios das autoridades judiciais, além de outros previstos nos regimentos das respectivas Casas, serão criadas pela Câmara dos Deputados e pelo Senado Federal, em conjunto ou separadamente, mediante requerimento de um terço de seus membros, para a apuração de fato determinado e por prazo certo, sendo suas conclusões, se for o caso, encaminhadas ao Ministério Público, para que promova a responsabilidade civil ou criminal dos infratores. § 4º Durante o recesso, haverá uma Comissão representativa do Congresso Nacional, eleita por suas Casas na última sessão ordinária do período legislativo, com atribuições definidas no regimento comum, cuja composição reproduzirá, quanto possível, a proporcionalidade da representação partidária.",
          "context": "Continuação do mesmo artigo. O trecho anterior não se lê sem este, nem este sem o anterior.",
          "exam": "A banca corta o inciso no meio e trata a parte como o artigo inteiro.",
          "trap": "Não complete o inciso com memória. Leia o trecho seguinte.",
          "example": "Sem exemplo novo. O exemplo do primeiro trecho não cobre este inciso.",
          "mnemonic": "Um terço. Fato certo. Prazo certo.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p165-59",
      "num": "59",
      "kicker": "CF art. 59",
      "title": "Processo legislativo",
      "lead": "Processo legislativo",
      "plate": "Processo legislativo",
      "plateSource": "CF art. 59",
      "devices": [
        {
          "tag": "59",
          "name": "Art. 59",
          "hook": "Sete espécies. Não se inventa a oitava.",
          "literal": "Art. 59. O processo legislativo compreende a elaboração de: I - emendas à Constituição; II - leis complementares; III - leis ordinárias; IV - leis delegadas; V - medidas provisórias; VI - decretos legislativos; VII - resoluções. Parágrafo único. Lei complementar disporá sobre a elaboração, redação, alteração e consolidação das leis.",
          "context": "O rol nomeia emenda, complementar, ordinária, delegada, medida provisória, decreto legislativo e resolução.",
          "exam": "O rol nomeia emenda, complementar, ordinária, delegada, medida provisória, decreto legislativo e resolução.",
          "trap": "Não se invente espécie fora da lista.",
          "example": "Sem exemplo de projeto. O inciso basta.",
          "mnemonic": "Sete espécies. Não se inventa a oitava.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p165-60",
      "num": "60",
      "kicker": "CF art. 60",
      "title": "Emenda",
      "lead": "Emenda",
      "plate": "Emenda",
      "plateSource": "CF art. 60",
      "devices": [
        {
          "tag": "60",
          "name": "Art. 60",
          "hook": "3/5, dois turnos. Pétreo não se delibera.",
          "literal": "Art. 60. A Constituição poderá ser emendada mediante proposta: I - de um terço, no mínimo, dos membros da Câmara dos Deputados ou do Senado Federal; II - do Presidente da República; III - de mais da metade das Assembléias Legislativas das unidades da Federação, manifestando-se, cada uma delas, pela maioria relativa de seus membros. § 1º A Constituição não poderá ser emendada na vigência de intervenção federal, de estado de defesa ou de estado de sítio. § 2º A proposta será discutida e votada em cada Casa do Congresso Nacional, em dois turnos, considerando-se aprovada se obtiver, em ambos, três quintos dos votos dos respectivos membros. § 3º A emenda à Constituição será promulgada pelas Mesas da Câmara dos Deputados e do Senado Federal, com o respectivo número de ordem. § 4º Não será objeto de deliberação a proposta de emenda tendente a abolir: I - a forma federativa de Estado; II - o voto direto, secreto, universal e periódico; III - a separação dos Poderes; IV - os direitos e garantias individuais. § 5º A matéria constante de proposta de emenda rejeitada ou havida por prejudicada não pode ser objeto de nova proposta na mesma sessão legislativa.",
          "context": "Três quintos, dois turnos, cada Casa.",
          "exam": "Três quintos, dois turnos, cada Casa.",
          "trap": "Defesa e sítio travam a emenda. Não só a intervenção.",
          "example": "Sem exemplo de proposta. Os quóruns estão nos incisos e no § 2º.",
          "mnemonic": "3/5, dois turnos. Pétreo não se delibera.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p165-61",
      "num": "61",
      "kicker": "CF art. 61",
      "title": "Iniciativa",
      "lead": "Iniciativa",
      "plate": "Iniciativa",
      "plateSource": "CF art. 61",
      "devices": [
        {
          "tag": "61",
          "name": "Art. 61",
          "hook": "Não é só o Presidente.",
          "literal": "Art. 61. A iniciativa das leis complementares e ordinárias cabe a qualquer membro ou Comissão da Câmara dos Deputados, do Senado Federal ou do Congresso Nacional, ao Presidente da República, ao Supremo Tribunal Federal, aos Tribunais Superiores, ao Procurador-Geral da República e aos cidadãos, na forma e nos casos previstos nesta Constituição. § 1º São de iniciativa privativa do Presidente da República as leis que: I - fixem ou modifiquem os efetivos das Forças Armadas; II - disponham sobre: a) criação de cargos, funções ou empregos públicos na administração direta e autárquica ou aumento de sua remuneração; b) organização administrativa e judiciária, matéria tributária e orçamentária, serviços públicos e pessoal da administração dos Territórios; c) servidores públicos da União e Territórios, seu regime jurídico, provimento de cargos, estabilidade e aposentadoria; (Redação dada pela Emenda Constitucional nº 18, de 1998) d) organização do Ministério Público e da Defensoria Pública da União, bem como normas gerais para a organização do Ministério Público e da Defensoria Pública dos Estados, do Distrito Federal e dos Territórios; e) criação e extinção de Ministérios e órgãos da administração pública, observado o disposto no art. 84, VI",
          "context": "A iniciativa das complementares e ordinárias cabe também a Comissão e ao Presidente, nos termos do artigo.",
          "exam": "A iniciativa das complementares e ordinárias cabe também a Comissão e ao Presidente, nos termos do artigo.",
          "trap": "Não se leia como iniciativa exclusiva do Presidente para toda lei.",
          "example": "Sem exemplo de projeto. O caput já reparte.",
          "mnemonic": "Não é só o Presidente.",
          "revoked": false
        },
        {
          "tag": "61.2",
          "name": "Art. 61, continua",
          "hook": "Não é só o Presidente.",
          "literal": "; (Redação dada pela Emenda Constitucional nº 32, de 2001) f) militares das Forças Armadas, seu regime jurídico, provimento de cargos, promoções, estabilidade, remuneração, reforma e transferência para a reserva. (Incluída pela Emenda Constitucional nº 18, de 1998) § 2º A iniciativa popular pode ser exercida pela apresentação à Câmara dos Deputados de projeto de lei subscrito por, no mínimo, um por cento do eleitorado nacional, distribuído pelo menos por cinco Estados, com não menos de três décimos por cento dos eleitores de cada um deles.",
          "context": "Continuação do mesmo artigo. O trecho anterior não se lê sem este, nem este sem o anterior.",
          "exam": "A banca corta o inciso no meio e trata a parte como o artigo inteiro.",
          "trap": "Não complete o inciso com memória. Leia o trecho seguinte.",
          "example": "Sem exemplo novo. O exemplo do primeiro trecho não cobre este inciso.",
          "mnemonic": "Não é só o Presidente.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p165-62",
      "num": "62",
      "kicker": "CF art. 62",
      "title": "Medida provisória",
      "lead": "Medida provisória",
      "plate": "Medida provisória",
      "plateSource": "CF art. 62",
      "devices": [
        {
          "tag": "62",
          "name": "Art. 62",
          "hook": "Penal não entra em MP.",
          "literal": "Art. 62. Em caso de relevância e urgência, o Presidente da República poderá adotar medidas provisórias, com força de lei, devendo submetê-las de imediato ao Congresso Nacional. (Redação dada pela Emenda Constitucional nº 32, de 2001) § 1º É vedada a edição de medidas provisórias sobre matéria: (Incluído pela Emenda Constitucional nº 32, de 2001) I - relativa a: (Incluído pela Emenda Constitucional nº 32, de 2001) a) nacionalidade, cidadania, direitos políticos, partidos políticos e direito eleitoral; (Incluído pela Emenda Constitucional nº 32, de 2001) b) direito penal, processual penal e processual civil; (Incluído pela Emenda Constitucional nº 32, de 2001) c) organização do Poder Judiciário e do Ministério Público, a carreira e a garantia de seus membros; (Incluído pela Emenda Constitucional nº 32, de 2001) d) planos plurianuais, diretrizes orçamentárias, orçamento e créditos adicionais e suplementares, ressalvado o previsto no art. 167, § 3º; (Incluído pela Emenda Constitucional nº 32, de 2001) II - que vise a detenção ou seqüestro de bens, de poupança popular ou qualquer outro ativo financeiro; (Incluído pela Emenda Constitucional nº 32, de 2001) III - reservada a lei complementar; (Incluído pela Emenda Constitucional nº 32, de 2001)",
          "context": "Relevância e urgência. Vedada em direito penal.",
          "exam": "Relevância e urgência. Vedada em direito penal.",
          "trap": "Não se edite MP sobre processo penal.",
          "example": "Sem exemplo de texto. A vedação basta.",
          "mnemonic": "Penal não entra em MP.",
          "revoked": false
        },
        {
          "tag": "62.2",
          "name": "Art. 62, continua",
          "hook": "Penal não entra em MP.",
          "literal": "IV - já disciplinada em projeto de lei aprovado pelo Congresso Nacional e pendente de sanção ou veto do Presidente da República. (Incluído pela Emenda Constitucional nº 32, de 2001) § 2º Medida provisória que implique instituição ou majoração de impostos, exceto os previstos nos arts. 153, I, II, IV, V, e 154, II, só produzirá efeitos no exercício financeiro seguinte se houver sido convertida em lei até o último dia daquele em que foi editada. (Incluído pela Emenda Constitucional nº 32, de 2001) § 3º As medidas provisórias, ressalvado o disposto nos §§ 11 e 12 perderão eficácia, desde a edição, se não forem convertidas em lei no prazo de sessenta dias, prorrogável, nos termos do § 7º, uma vez por igual período, devendo o Congresso Nacional disciplinar, por decreto legislativo, as relações jurídicas delas decorrentes. (Incluído pela Emenda Constitucional nº 32, de 2001) § 4º O prazo a que se refere o § 3º contar-se-á da publicação da medida provisória, suspendendo-se durante os períodos de recesso do Congresso Nacional. (Incluído pela Emenda Constitucional nº 32, de 2001) § 5º A deliberação de cada uma das Casas do Congresso Nacional sobre o mérito das medidas provisórias dependerá de juízo prévio sobre o atendimento de seus pressupostos constitucionais",
          "context": "Continuação do mesmo artigo. O trecho anterior não se lê sem este, nem este sem o anterior.",
          "exam": "A banca corta o inciso no meio e trata a parte como o artigo inteiro.",
          "trap": "Não complete o inciso com memória. Leia o trecho seguinte.",
          "example": "Sem exemplo novo. O exemplo do primeiro trecho não cobre este inciso.",
          "mnemonic": "Penal não entra em MP.",
          "revoked": false
        },
        {
          "tag": "62.3",
          "name": "Art. 62, continua",
          "hook": "Penal não entra em MP.",
          "literal": ". (Incluído pela Emenda Constitucional nº 32, de 2001) § 6º Se a medida provisória não for apreciada em até quarenta e cinco dias contados de sua publicação, entrará em regime de urgência, subseqüentemente, em cada uma das Casas do Congresso Nacional, ficando sobrestadas, até que se ultime a votação, todas as demais deliberações legislativas da Casa em que estiver tramitando. (Incluído pela Emenda Constitucional nº 32, de 2001) § 7º Prorrogar-se-á uma única vez por igual período a vigência de medida provisória que, no prazo de sessenta dias, contado de sua publicação, não tiver a sua votação encerrada nas duas Casas do Congresso Nacional. (Incluído pela Emenda Constitucional nº 32, de 2001) § 8º As medidas provisórias terão sua votação iniciada na Câmara dos Deputados. (Incluído pela Emenda Constitucional nº 32, de 2001) § 9º Caberá à comissão mista de Deputados e Senadores examinar as medidas provisórias e sobre elas emitir parecer, antes de serem apreciadas, em sessão separada, pelo plenário de cada uma das Casas do Congresso Nacional. (Incluído pela Emenda Constitucional nº 32, de 2001) § 10. É vedada a reedição, na mesma sessão legislativa, de medida provisória que tenha sido rejeitada ou que tenha perdido sua eficácia por decurso de prazo. (Incluído pela Emenda Constitucional nº 32, de 2001) § 11. Não editado o decreto legislativo a que se refere o § 3º até sessenta dias após a rejeição ou perda de eficácia de medida provisória, as relações jurídicas constituídas e decorrentes de atos praticados durante sua vigência conservar-se-ão por ela regidas. (Incluído pela Emenda Constitucional nº 32, de 2001) § 12",
          "context": "Continuação do mesmo artigo. O trecho anterior não se lê sem este, nem este sem o anterior.",
          "exam": "A banca corta o inciso no meio e trata a parte como o artigo inteiro.",
          "trap": "Não complete o inciso com memória. Leia o trecho seguinte.",
          "example": "Sem exemplo novo. O exemplo do primeiro trecho não cobre este inciso.",
          "mnemonic": "Penal não entra em MP.",
          "revoked": false
        },
        {
          "tag": "62.4",
          "name": "Art. 62, continua",
          "hook": "Penal não entra em MP.",
          "literal": ". Aprovado projeto de lei de conversão alterando o texto original da medida provisória, esta manter-se-á integralmente em vigor até que seja sancionado ou vetado o projeto. (Incluído pela Emenda Constitucional nº 32, de 2001)",
          "context": "Continuação do mesmo artigo. O trecho anterior não se lê sem este, nem este sem o anterior.",
          "exam": "A banca corta o inciso no meio e trata a parte como o artigo inteiro.",
          "trap": "Não complete o inciso com memória. Leia o trecho seguinte.",
          "example": "Sem exemplo novo. O exemplo do primeiro trecho não cobre este inciso.",
          "mnemonic": "Penal não entra em MP.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 165",
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
  "rolePlateSource": "Prompt 165",
  "summary": [
    {
      "item": "Art. 60",
      "rule": "3/5, dois turnos.",
      "clue": "Defesa e sítio travam."
    },
    {
      "item": "Art. 62",
      "rule": "MP não faz direito penal.",
      "clue": "Nem processual penal."
    }
  ],
  "compare": [
    {
      "item": "CPI",
      "ce": "Julga como tribunal.",
      "cf": "Apura e manda a conclusão ao Ministério Público.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 165011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "A emenda à Constituição é aprovada se obtiver, em dois turnos, em cada Casa, três quintos dos votos dos respectivos membros.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. Art. 60, § 2º."
    },
    {
      "id": 165012,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Medida provisória pode dispor sobre direito penal.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. O art. 62, § 1º, I, b, veda medida provisória sobre direito penal, processual penal e processual civil."
    },
    {
      "id": 165013,
      "banca": "Estilo Cebraspe · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A comissão parlamentar de inquérito, no art. 58, § 3º:",
      "correct": "c",
      "options": [
        {
          "key": "a",
          "label": "É criada por maioria absoluta e sem prazo."
        },
        {
          "key": "b",
          "label": "Julga e condena."
        },
        {
          "key": "c",
          "label": "Exige requerimento de um terço, fato determinado e prazo certo, e encaminha conclusões ao Ministério Público."
        },
        {
          "key": "d",
          "label": "Substitui o inquérito policial e o processo."
        },
        {
          "key": "e",
          "label": "Só o Presidente da República a cria."
        }
      ],
      "comentario": "Questão original, não é prova real. A alternativa c é o § 3º. A comissão não condena."
    }
  ],
  "toc": [
    {
      "id": "p165-58",
      "num": "58",
      "label": "Comissões e CPI"
    },
    {
      "id": "p165-59",
      "num": "59",
      "label": "Processo legislativo"
    },
    {
      "id": "p165-60",
      "num": "60",
      "label": "Emenda"
    },
    {
      "id": "p165-61",
      "num": "61",
      "label": "Iniciativa"
    },
    {
      "id": "p165-62",
      "num": "62",
      "label": "Medida provisória"
    }
  ],
  "clocks": [
    {
      "value": "3/5",
      "label": "Emenda, cada turno",
      "source": "Art. 60, § 2º"
    },
    {
      "value": "1/3",
      "label": "Requerimento de CPI",
      "source": "Art. 58, § 3º"
    }
  ],
  "organKicker": "Recorte",
  "organTitle": "CPI, emenda e medida provisória",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a troca que a banca faz.",
  "closing": "Conferir a fonte se houver emenda posterior à compilação consultada em 21/10/2026.",
  "palette": "lime",
  "highlight": {
    "big": "5",
    "small": "artigos neste assunto"
  },
  "heroLead": "CPI, processo legislativo, emenda e medida provisória. A CPI apura fato determinado, por prazo certo, com requerimento de um terço. A conclusão vai ao Ministério Público. Medida pr",
  "nextLine": "O assunto seguinte continua na mesma disciplina.",
  "closingMnemonic": "CPI: um terço, fato determinado, prazo certo. Conclusões ao Ministério Público, para a responsabilidade civil ou crimina",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "O que a banca troca",
  "compareLead": "A coluna da esquerda é a armadilha. A da direita é o texto.",
  "compareLeft": "Armadilha",
  "compareRight": "Texto"
};
