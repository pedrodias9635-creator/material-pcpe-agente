import type { StudyModule } from "./study";

export const PROMPT126: StudyModule = {
  "short": "Coesão, classes e período",
  "eyebrow": "Prompt 126 · pedido 91",
  "title": "Coesão, classes e período",
  "subtitle": "pronomes, coordenação e subordinação",
  "description": "Pedido 91. O conector vale pelo sentido. Cujo, onde e para eu são as trocas mais cobradas neste bloco.",
  "reading": "Gramática normativa de classes, coesão e sintaxe do período.",
  "terms": [
    "coesão",
    "cujo",
    "subordinação",
    "concessão",
    "anáfora"
  ],
  "subject": "Língua Portuguesa",
  "context": [
    "Os Prompts 62 a 122 do app já estão ocupados. Este pedido foi gravado com número novo.",
    "Número que não bate com a lei segue o texto oficial, e a divergência é dita.",
    "Súmula só entra com enunciado confirmado."
  ],
  "importance": "A banca troca prazo, requisito e nome de instituto.",
  "distinctions": [
    "Anáfora retoma. Catáfora anuncia.",
    "Embora não é porque.",
    "Para eu, se houver sujeito de infinitivo. Para mim, se não houver.",
    "Cujo não admite artigo depois.",
    "Adjetiva sem vírgula restringe. Com vírgula, explica."
  ],
  "organs": [
    {
      "sigla": "1",
      "nome": "Coesão referencial",
      "funcao": "Pergunte o que o pronome retoma. Se houver dois candidatos, a alternativa que escolhe um sem critério está err",
      "base": "Pedido 91",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "yellow"
    },
    {
      "sigla": "2",
      "nome": "Coesão lexical e sequencial",
      "funcao": "A banca troca embora por porque. Concessão não é causa.",
      "base": "Pedido 91",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "cyan"
    },
    {
      "sigla": "3",
      "nome": "Classes de palavras",
      "funcao": "A classe se confirma na frase.",
      "base": "Pedido 91",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "orange"
    },
    {
      "sigla": "4",
      "nome": "Pronomes",
      "funcao": "Cujo não aceita artigo depois. Onde não retoma ideia.",
      "base": "Pedido 91",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "violet"
    },
    {
      "sigla": "5",
      "nome": "Verbo e advérbio",
      "funcao": "Imperfeito não é mais-que-perfeito.",
      "base": "Pedido 91",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "emerald"
    },
    {
      "sigla": "6",
      "nome": "Coordenação",
      "funcao": "Pois conclusivo fica deslocado. Pois explicativo fica junto ao verbo.",
      "base": "Pedido 91",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "sky"
    }
  ],
  "swaps": [
    {
      "wrong": "Para mim fazer.",
      "right": "Para eu fazer, se eu é o sujeito."
    },
    {
      "wrong": "Embora indica causa.",
      "right": "Embora indica concessão."
    },
    {
      "wrong": "Onde retoma qualquer ideia.",
      "right": "Onde é lugar."
    }
  ],
  "timeline": [
    {
      "when": "Pedido",
      "title": "91",
      "text": "Gravado como Prompt 126."
    },
    {
      "when": "Limite",
      "title": "Recorte",
      "text": "Gramática normativa de classes, coesão e sintaxe do período."
    }
  ],
  "articles": [
    {
      "id": "p126-1",
      "num": "1",
      "kicker": "Pedido 91",
      "title": "Coesão referencial",
      "lead": "Coesão referencial",
      "plate": "Coesão referencial",
      "plateSource": "Pedido 91",
      "devices": [
        {
          "tag": "regra",
          "name": "Coesão referencial",
          "hook": "Anáfora volta. Catáfora anuncia.",
          "literal": "Coesão referencial retoma ou antecipa um termo. Anáfora retoma o que já foi dito: 'O delegado lavrou o termo. Ele o encaminhou.' 'Ele' e 'o' apontam para trás.\nCatáfora anuncia o que vem depois: 'Só peço isto: que o prazo seja cumprido.'\nElipse omite termo recuperável. Se a omissão gera duas leituras, a coesão falhou.\nPronome sem antecedente claro é a troca da banca. 'Isso' pode retomar uma frase inteira, não só o substantivo mais próximo. A regra é o antecedente compatível em sentido, não o mais perto a qualquer custo.\nSinônimo e hiperônimo também retomam: 'a autoridade', depois de 'o delegado', pode ser a mesma pessoa se o texto não introduziu outra.",
          "context": "Coesão referencial",
          "exam": "Pergunte o que o pronome retoma. Se houver dois candidatos, a alternativa que escolhe um sem critério está errada.",
          "trap": "Não ligue o pronome ao substantivo mais próximo só por distância.",
          "example": "'A vítima procurou a autoridade e ela registrou o fato.' 'Ela' é ambíguo. Não se escolha um dos dois sem outro apoio.",
          "mnemonic": "Anáfora volta. Catáfora anuncia.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p126-2",
      "num": "2",
      "kicker": "Pedido 91",
      "title": "Coesão lexical e sequencial",
      "lead": "Coesão lexical e sequencial",
      "plate": "Coesão lexical e sequencial",
      "plateSource": "Pedido 91",
      "devices": [
        {
          "tag": "regra",
          "name": "Coesão lexical e sequencial",
          "hook": "Conector impõe a relação.",
          "literal": "Coesão lexical repete, substitui ou associa palavras: repetição, sinônimo, hiperônimo, hipônimo, nominalização. 'Investigar' vira 'a investigação'.\nCoesão sequencial organiza a ordem: primeiro, em seguida, portanto, mas, embora, porque.\nConector não é enfeite. Ele impõe relação:\nadição: e, nem, também, além disso.\noposição: mas, porém, contudo, todavia, entretanto, no entanto.\ncausa: porque, pois, já que, uma vez que.\nconsequência: logo, portanto, por isso, de modo que.\nconcessão: embora, ainda que, mesmo que. A concessão admite o obstáculo e mantém a conclusão.\ncondição: se, caso, desde que.\ntempo: quando, assim que, antes que, depois que.\nconclusão e explicação não se trocam. 'Pois' antes do verbo tende a explicar. 'Pois' deslocado, entre vírgulas, pode concluir. A posição muda a função.\nNão se inventa valor de conector. 'Embora' não é causa.",
          "context": "Coesão lexical e sequencial",
          "exam": "A banca troca embora por porque. Concessão não é causa.",
          "trap": "Não classifique 'pois' sem ver a posição.",
          "example": "'Embora o prazo fosse curto, o termo foi lavrado' admite o obstáculo e afirma o ato. Não é causa.",
          "mnemonic": "Conector impõe a relação.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p126-3",
      "num": "3",
      "kicker": "Pedido 91",
      "title": "Classes de palavras",
      "lead": "Classes de palavras",
      "plate": "Classes de palavras",
      "plateSource": "Pedido 91",
      "devices": [
        {
          "tag": "regra",
          "name": "Classes de palavras",
          "hook": "Dez classes. A função manda.",
          "literal": "São dez as classes tradicionais.\nSubstantivo: nomeia. Adjetivo: caracteriza. Artigo: define ou indefini, e marca gênero e número. Numeral: quantidade ou ordem. Pronome: substitui ou acompanha o nome. Verbo: processo, estado, no tempo. Advérbio: modifica verbo, adjetivo ou outro advérbio. Preposição: liga e rege. Conjunção: liga orações ou termos. Interjeição: exprime reação.\nPalavra de uma classe pode funcionar como outra. 'O belo' substantiva o adjetivo. A classificação de prova olha a função na frase, não o rótulo isolado.\nArtigo definido singular diante de palavra no plural é erro, salvo contração já pronta que a norma não use assim. 'Os' concorda com o substantivo.\nNumeral e artigo não se confundem. 'Um' pode ser numeral ou artigo indefinido. Se a troca por 'certo' funciona, tende a ser artigo. Se a troca por 'dois' funciona no contraste, tende a ser numeral. É critério de leitura, não fórmula mágica.",
          "context": "Classes de palavras",
          "exam": "A classe se confirma na frase.",
          "trap": "Não classifique toda palavra terminada em -mente como advérbio de modo sem ler a frase. Quase sempre é, mas a função é que conta.",
          "example": "'Criminal', em 'direito criminal', é adjetivo. Em 'o criminal foi identificado', foi substantivado.",
          "mnemonic": "Dez classes. A função manda.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p126-4",
      "num": "4",
      "kicker": "Pedido 91",
      "title": "Pronomes",
      "lead": "Pronomes",
      "plate": "Pronomes",
      "plateSource": "Pedido 91",
      "devices": [
        {
          "tag": "regra",
          "name": "Pronomes",
          "hook": "Cujo é posse, sem artigo.",
          "literal": "Pessoais do caso reto: eu, tu, ele, nós, vós, eles. Funcionam como sujeito. Oblíquos átonos: me, te, se, o, a, lhe, nos, vos. Tônicos: mim, ti, si, ele, nós, vós, com preposição.\n'Para mim fazer' é a troca. O sujeito de infinitivo pede 'eu': 'para eu fazer'. 'Para mim' serve se não há verbo depois pedindo sujeito: 'para mim, o prazo basta'.\nPossessivos concordam com a coisa possuída: 'Vossa Excelência nomeará seu substituto', não 'vosso', se o tratamento é de terceira pessoa. O tratamento protocolar está no Prompt 128.\nDemonstrativos: este, no espaço ou no tempo do falante, ou no que se vai dizer. Esse, no espaço do ouvinte ou no que já foi dito. Aquele, distante, ou o primeiro de dois quando 'este' é o último.\nRelativos: que, quem, o qual, cujo, onde, quanto. 'Cujo' indica posse e não admite artigo depois: 'cujo o nome' está errado. 'Onde' é lugar. Para origem, 'donde' ou 'de onde'. Para destino, 'aonde' ou 'aonde' com verbo de movimento. Não se use 'onde' para retomar tempo ou ideia.\n'Que' e 'qual' vêm precedidos de preposição quando o verbo ou o nome exige: 'o prazo de que se trata', não 'que se trata', se o verbo é tratar de.",
          "context": "Pronomes",
          "exam": "Cujo não aceita artigo depois. Onde não retoma ideia.",
          "trap": "Não escreva 'para mim' como sujeito de infinitivo.",
          "example": "'O inquérito de cujo número se falou' está errado se houver artigo depois de cujo. A forma é 'cujo número'.",
          "mnemonic": "Cujo é posse, sem artigo.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p126-5",
      "num": "5",
      "kicker": "Pedido 91",
      "title": "Verbo e advérbio",
      "lead": "Verbo e advérbio",
      "plate": "Verbo e advérbio",
      "plateSource": "Pedido 91",
      "devices": [
        {
          "tag": "regra",
          "name": "Verbo e advérbio",
          "hook": "Perfeito conclui. Imperfeito dura.",
          "literal": "Tempos de prova: presente, pretérito perfeito, imperfeito, mais-que-perfeito, futuro do presente e futuro do pretérito.\nPerfeito: fato concluído. Imperfeito: fato em curso no passado ou habitual. Mais-que-perfeito: anterior a outro fato passado. Futuro do pretérito: hipótese, condição ou fato posterior a um passado.\nModo subjuntivo: hipótese, desejo, dúvida. Imperativo: ordem ou pedido. Infinitivo, gerúndio e particípio formam locução e oração reduzida.\nVoz ativa, passiva e reflexiva mudam o foco. A conversão está no Prompt 128.\nAdvérbio não varia, salvo 'meio' em alguns usos adjetivos e a concordância de 'todo' quando adjetivo. 'Meio' diante de adjetivo fica invariável: 'meio cansada'. 'Meia' concorda quando numeral ou quando acompanha substantivo: 'meia página'.\n'Não' nega. A dupla negação popular não é a norma da prova.",
          "context": "Verbo e advérbio",
          "exam": "Imperfeito não é mais-que-perfeito.",
          "trap": "Não flexione advérbio para concordar com o sujeito.",
          "example": "'A testemunha estava meio cansada' não vai a 'meia cansada'.",
          "mnemonic": "Perfeito conclui. Imperfeito dura.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p126-6",
      "num": "6",
      "kicker": "Pedido 91",
      "title": "Coordenação",
      "lead": "Coordenação",
      "plate": "Coordenação",
      "plateSource": "Pedido 91",
      "devices": [
        {
          "tag": "regra",
          "name": "Coordenação",
          "hook": "Coordenada não depende.",
          "literal": "Oração coordenada é independente quanto à sintaxe. A sindética tem conjunção. A assindética não tem.\nAditiva: e, nem. Adversativa: mas, porém, contudo, todavia, entretanto. Alternativa: ou, ora, quer. Conclusiva: logo, portanto, pois deslocado. Explicativa: porque, que, pois antes do verbo.\n'E' pode ter valor adversativo no contexto: 'estudou e não passou'. A classificação depende do sentido, não só da palavra.\nVírgula antes de 'mas' é a regra. Antes de 'e', não é automática. A vírgula está no Prompt 127.\nNão se separe a conjunção da oração que ela introduz, salvo intercalação marcada.",
          "context": "Coordenação",
          "exam": "Pois conclusivo fica deslocado. Pois explicativo fica junto ao verbo.",
          "trap": "Não classifique toda oração com 'e' como aditiva se o sentido opõe.",
          "example": "'O prazo correu; o termo, porém, foi aceito.' A segunda é adversativa.",
          "mnemonic": "Coordenada não depende.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p126-7",
      "num": "7",
      "kicker": "Pedido 91",
      "title": "Subordinação",
      "lead": "Subordinação",
      "plate": "Subordinação",
      "plateSource": "Pedido 91",
      "devices": [
        {
          "tag": "regra",
          "name": "Subordinação",
          "hook": "Substantiva nomeia. Adjetiva restringe ou explica.",
          "literal": "Oração subordinada depende de outra.\nSubstantiva: funciona como sujeito, objeto, predicativo, complemento nominal, aposto ou agente. Conjunção integrante 'que' ou 'se'. 'É necessário que o termo seja claro.' O 'que' introduz substantiva subjetiva.\nAdjetiva ou relativa: restringe ou explica o antecedente. 'O depoimento que foi gravado' restringe. 'O depoimento, que foi gravado, permanece' explica. A vírgula muda o alcance.\nAdverbial: causal, consecutiva, concessiva, condicional, comparativa, conformativa, final, proporcional, temporal.\nReduzida: de infinitivo, gerúndio ou particípio, sem conjunção expressa. 'Ao chegar, o agente lavrou o termo' é temporal reduzida. Não se invente conjunção que mude o valor.\nA oração principal não é, por si, a primeira do período. É a que não depende.",
          "context": "Subordinação",
          "exam": "Vírgula na adjetiva muda restrição em explicação.",
          "trap": "Não chame de substantiva a oração com antecedente nominal. Essa é adjetiva.",
          "example": "'O fato que importa' é adjetiva. 'Convém que o fato seja claro' é substantiva.",
          "mnemonic": "Substantiva nomeia. Adjetiva restringe ou explica.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 126",
      "does": [
        "Ler o texto antes do comentário"
      ],
      "doesNot": [
        "Não completar lacuna",
        "Não usar número não confirmado"
      ]
    }
  ],
  "roleNote": "Questões são originais, no estilo da banca, não são prova real.",
  "rolePlate": "Texto primeiro.",
  "rolePlateSource": "Prompt 126",
  "summary": [
    {
      "item": "Anáfora",
      "rule": "Retoma.",
      "clue": "Catáfora anuncia."
    },
    {
      "item": "Embora",
      "rule": "Concessão, não causa.",
      "clue": "Porque é causa."
    },
    {
      "item": "Para eu",
      "rule": "Sujeito de infinitivo.",
      "clue": "Para mim não é sujeito."
    },
    {
      "item": "Cujo",
      "rule": "Posse, sem artigo depois.",
      "clue": "Cujo o está errado."
    },
    {
      "item": "Adjetiva",
      "rule": "Sem vírgula, restringe. Com vírgula, explica.",
      "clue": "Muda o alcance."
    },
    {
      "item": "Pois",
      "rule": "Junto ao verbo, explica. Deslocado, conclui.",
      "clue": "A posição muda."
    }
  ],
  "compare": [
    {
      "item": "Anáfora",
      "ce": "Volta ao já dito.",
      "cf": "Catáfora aponta para a frente.",
      "effect": "separa"
    },
    {
      "item": "Restritiva",
      "ce": "Sem vírgula, limita o antecedente.",
      "cf": "Explicativa, entre vírgulas, não limita.",
      "effect": "separa"
    },
    {
      "item": "Coordenada",
      "ce": "Não depende.",
      "cf": "Subordinada depende.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 126011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Em 'para mim lavrar o termo', a construção está correta porque 'mim' é o pronome usado depois de preposição.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Há infinitivo com sujeito. A forma é 'para eu lavrar'. 'Para mim' cabe quando não funciona como sujeito: 'para mim, o prazo basta'."
    },
    {
      "id": 126012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A oração destacada em 'O termo que foi lavrado ontem segue ao juízo' é",
      "correct": "b",
      "options": [
        {
          "key": "a",
          "label": "coordenada adversativa."
        },
        {
          "key": "b",
          "label": "subordinada adjetiva restritiva."
        },
        {
          "key": "c",
          "label": "subordinada substantiva objetiva direta."
        },
        {
          "key": "d",
          "label": "subordinada adverbial causal."
        },
        {
          "key": "e",
          "label": "coordenada explicativa."
        }
      ],
      "comentario": "Questão original, não é prova real. Há antecedente, 'termo', e a oração restringe qual termo. Sem vírgula, é restritiva, não explicativa."
    },
    {
      "id": 126013,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "'Cujo' indica posse e admite artigo imediatamente depois, como em 'cujo o número'.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Cujo não admite artigo depois. A forma é 'cujo número'."
    },
    {
      "id": 126014,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Em 'Embora o autor não tivesse residência fixa, a prisão não se justificava só por isso', a relação é de",
      "correct": "d",
      "options": [
        {
          "key": "a",
          "label": "causa."
        },
        {
          "key": "b",
          "label": "conclusão."
        },
        {
          "key": "c",
          "label": "adição."
        },
        {
          "key": "d",
          "label": "concessão."
        },
        {
          "key": "e",
          "label": "finalidade."
        }
      ],
      "comentario": "Questão original, não é prova real. Embora admite um obstáculo e mantém a outra oração. Não é porque. A tese do STF sobre residência está no Prompt 123; aqui o exemplo só classifica o conector."
    },
    {
      "id": 126015,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Anáfora retoma termo já dito. Catáfora anuncia termo que ainda será dito.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. Essa é a distinção. Elipse é outra figura: omissão recuperável."
    }
  ],
  "toc": [
    {
      "id": "p126-1",
      "num": "1",
      "label": "Coesão referencial"
    },
    {
      "id": "p126-2",
      "num": "2",
      "label": "Coesão lexical e sequencial"
    },
    {
      "id": "p126-3",
      "num": "3",
      "label": "Classes de palavras"
    },
    {
      "id": "p126-4",
      "num": "4",
      "label": "Pronomes"
    },
    {
      "id": "p126-5",
      "num": "5",
      "label": "Verbo e advérbio"
    },
    {
      "id": "p126-6",
      "num": "6",
      "label": "Coordenação"
    },
    {
      "id": "p126-7",
      "num": "7",
      "label": "Subordinação"
    }
  ],
  "clocks": [],
  "organKicker": "Recorte",
  "organTitle": "Coesão, classes e período",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a regra que ele escreve.",
  "closing": "Conferir a fonte se houver atualização posterior à consulta de 20/10/2026.",
  "palette": "azure",
  "highlight": {
    "big": "7",
    "small": "blocos neste prompt"
  },
  "heroLead": "Pedido 91. O conector vale pelo sentido. Cujo, onde e para eu são as trocas mais cobradas neste bloco.",
  "footerLine": "Prompt 126 · pedido 91.",
  "nextLine": "Prompt 127 · pedido 92 · pontuação, concordância, regência, crase e colocação.",
  "closingMnemonic": "Texto primeiro. Número divergente segue a lei. Lacuna não se completa.",
  "rolesTitle": "Limite",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "Não misture",
  "compareLead": "Instituto vizinho não empresta requisito.",
  "compareLeft": "Um",
  "compareRight": "Outro"
};
