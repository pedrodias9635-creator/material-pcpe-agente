import type { StudyModule } from "./study";

export const PROMPT127: StudyModule = {
  "short": "Pontuação, concordância e regênc",
  "eyebrow": "Prompt 127 · pedido 92",
  "title": "Pontuação, concordância e regência",
  "subtitle": "crase e colocação pronominal",
  "description": "Pedido 92. Onde a gramática admite duas concordâncias, o texto diz a variação. Não se condena forma aceita.",
  "reading": "Norma gramatical de pontuação, concordância, regência, crase e colocação.",
  "terms": [
    "vírgula",
    "concordância",
    "regência",
    "crase",
    "próclise"
  ],
  "subject": "Língua Portuguesa",
  "context": [
    "Os Prompts 62 a 122 do app já estão ocupados. Este pedido foi gravado com número novo.",
    "Número que não bate com a lei segue o texto oficial, e a divergência é dita.",
    "Súmula só entra com enunciado confirmado."
  ],
  "importance": "A banca troca prazo, requisito e nome de instituto.",
  "distinctions": [
    "Vírgula não separa sujeito e verbo na ordem direta.",
    "Haver existencial e fazer de tempo ficam no singular.",
    "Preferir não admite mais nem do que.",
    "Crase não entra antes de palavra masculina nem de verbo.",
    "Futuro não leva ênclise."
  ],
  "organs": [
    {
      "sigla": "1",
      "nome": "Vírgula",
      "funcao": "A banca põe vírgula entre sujeito e verbo para testar o reflexo.",
      "base": "Pedido 92",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "yellow"
    },
    {
      "sigla": "2",
      "nome": "Pontuação que muda o sentido",
      "funcao": "A mesma palavra, com vírgula, pode deixar de restringir.",
      "base": "Pedido 92",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "cyan"
    },
    {
      "sigla": "3",
      "nome": "Concordância verbal",
      "funcao": "Haver existencial não vai ao plural. Esse é o item mais estável.",
      "base": "Pedido 92",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "orange"
    },
    {
      "sigla": "4",
      "nome": "Concordância nominal",
      "funcao": "Anexo concorda. Em anexo é locução.",
      "base": "Pedido 92",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "violet"
    },
    {
      "sigla": "5",
      "nome": "Regência",
      "funcao": "Preferir não combina com mais nem com do que.",
      "base": "Pedido 92",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "emerald"
    },
    {
      "sigla": "6",
      "nome": "Crase",
      "funcao": "O teste do masculino evita a crase decorativa.",
      "base": "Pedido 92",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "sky"
    }
  ],
  "swaps": [
    {
      "wrong": "Haviam muitos fatos.",
      "right": "Havia muitos fatos."
    },
    {
      "wrong": "Prefiro mais isto do que aquilo.",
      "right": "Prefiro isto àquilo."
    },
    {
      "wrong": "Fará-se o termo.",
      "right": "Far-se-á o termo, ou não se fará."
    }
  ],
  "timeline": [
    {
      "when": "Pedido",
      "title": "92",
      "text": "Gravado como Prompt 127."
    },
    {
      "when": "Limite",
      "title": "Recorte",
      "text": "Norma gramatical de pontuação, concordância, regência, crase e colocação."
    }
  ],
  "articles": [
    {
      "id": "p127-1",
      "num": "1",
      "kicker": "Pedido 92",
      "title": "Vírgula",
      "lead": "Vírgula",
      "plate": "Vírgula",
      "plateSource": "Pedido 92",
      "devices": [
        {
          "tag": "regra",
          "name": "Vírgula",
          "hook": "Sujeito e verbo não se separam.",
          "literal": "Não se separa, por vírgula, sujeito e verbo, nem verbo e objeto, na ordem direta e sem intercalação.\nSepara-se: vocativo; aposto explicativo; adjunto adverbial deslocado, sobretudo se longo; oração adverbial deslocada; enumeração; adjetiva explicativa.\n'Mas', 'porém', 'contudo', 'todavia' e 'entretanto' pedem vírgula. 'E' não pede vírgula automática. Cabe vírgula antes de 'e' se os sujeitos são diferentes e se quer marcar a pausa, se o 'e' tem valor adversativo, ou para desfazer ambiguidade. Não é regra de sempre.\nOração adjetiva restritiva não leva vírgula. A explicativa leva.\nNão se usa vírgula entre o relativo e o verbo da oração que ele inicia, salvo intercalação.\nDois-pontos anunciam enumeração, citação ou explicação. Ponto e vírgula separam partes já com vírgula, ou orações coordenadas de alguma extensão. Reticências não substituem ponto quando a frase terminou.\nTravessão marca intercalação ou fala, conforme o gênero. Não se invente diálogo em ofício.",
          "context": "Vírgula",
          "exam": "A banca põe vírgula entre sujeito e verbo para testar o reflexo.",
          "trap": "Não ponha vírgula na restritiva.",
          "example": "'O agente, lavrou o termo' está errado. Não há vocativo. O sujeito não se separa do verbo.",
          "mnemonic": "Sujeito e verbo não se separam.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p127-2",
      "num": "2",
      "kicker": "Pedido 92",
      "title": "Pontuação que muda o sentido",
      "lead": "Pontuação que muda o sentido",
      "plate": "Pontuação que muda o sentido",
      "plateSource": "Pedido 92",
      "devices": [
        {
          "tag": "regra",
          "name": "Pontuação que muda o sentido",
          "hook": "Vírgula muda o alcance.",
          "literal": "'Não, espere' e 'não espere' não dizem a mesma coisa. A vírgula do vocativo ou da ênfase muda o pedido.\n'O depoimento que confirma o horário foi aceito' restringe: só esse depoimento. 'O depoimento, que confirma o horário, foi aceito' explica: há um depoimento, e a gravação do horário é informação adicional.\nAspas marcam citação ou destaque. Citação não se altera para 'melhorar' o original. Colchete em citação indica intervenção de quem cita, e deve ser visível.\nParêntese isola explicação. Não se usa para esconder condição essencial se o gênero pede clareza.",
          "context": "Pontuação que muda o sentido",
          "exam": "A mesma palavra, com vírgula, pode deixar de restringir.",
          "trap": "Não ignore vírgula em item de certo ou errado.",
          "example": "Compare 'policiais, que estavam de folga, foram ouvidos' com a forma sem vírgulas. A primeira fala de todos os policiais referidos. A segunda limita aos que estavam de folga.",
          "mnemonic": "Vírgula muda o alcance.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p127-3",
      "num": "3",
      "kicker": "Pedido 92",
      "title": "Concordância verbal",
      "lead": "Concordância verbal",
      "plate": "Concordância verbal",
      "plateSource": "Pedido 92",
      "devices": [
        {
          "tag": "regra",
          "name": "Concordância verbal",
          "hook": "Haver e fazer de tempo ficam no singular.",
          "literal": "O verbo concorda com o sujeito. Sujeito composto antes do verbo: plural. Depois do verbo, admite-se concordância com o mais próximo ou no plural. A prova cobra as duas quando a gramática admite. Não se marque uma como único gabarito se a outra também é aceita, salvo se a banca fixar a preferência no comando.\nHaver, no sentido de existir ou de tempo decorrido, é impessoal: 'havia muitas testemunhas', 'há dois anos'. Não vai ao plural.\nFazer, em tempo decorrido, fica no singular: 'faz dois meses'.\nPartícula se: se a oração é passiva, o verbo concorda com o sujeito paciente: 'lavraram-se os termos'. Se o se é índice de indeterminação, com verbo transitivo indireto, intransitivo ou de ligação, o verbo fica no singular: 'precisa-se de agentes'. Não há sujeito para ir ao plural.\nPorcentagem: se o número está no plural e não há substantivo especificador, o verbo vai ao plural. Com especificador, a gramática admite concordância com o número ou com o substantivo. Não se invente uma única forma quando as duas são aceitas.\nColetivo singular: verbo singular, se não houver outra razão. 'A maioria dos termos foi' e 'foram' aparecem como alternativas admitidas quando o coletivo vem com especificador no plural. Diga a variação. Não escolha uma e condene a outra sem ressalva.\nUm e outro: o adjetivo vai ao plural. O verbo admite singular ou plural. Nem um nem outro: o singular é o mais cobrado.\nSujeito oracional: verbo no singular. 'Falta esclarecer os horários'.",
          "context": "Concordância verbal",
          "exam": "Haver existencial não vai ao plural. Esse é o item mais estável.",
          "trap": "Não pluralize 'havia' nem 'faz' de tempo.",
          "example": "'Havia três versões' está no singular. 'Existiam três versões' vai ao plural, porque existir não é impessoal.",
          "mnemonic": "Haver e fazer de tempo ficam no singular.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p127-4",
      "num": "4",
      "kicker": "Pedido 92",
      "title": "Concordância nominal",
      "lead": "Concordância nominal",
      "plate": "Concordância nominal",
      "plateSource": "Pedido 92",
      "devices": [
        {
          "tag": "regra",
          "name": "Concordância nominal",
          "hook": "Com artigo, o adjetivo concorda.",
          "literal": "Adjetivo posposto a dois substantivos de gêneros diferentes vai, em regra, ao masculino plural, ou concorda com o mais próximo. Anteposto, concorda com o mais próximo: 'velha casa e carro' não é a forma; 'velho carro e casa' concorda com o mais próximo.\n'Anexo', 'incluso', 'obrigado' e 'mesmo', no sentido de 'próprio', concordam. 'Em anexo' e 'incluso' não se deixam invariáveis quando adjetivos: 'as cópias anexas', 'as peças inclusas'. 'Obrigado' concorda com quem fala: 'elas disseram obrigadas'.\n'Meio', advérbio, não varia. 'Meio', numeral ou adjetivo, varia.\n'Quite', 'leso' e 'alerta' em uso adjetivo concordam quando a gramática os trata como adjetivos. 'Alerta' como advérbio não varia. A classificação depende da função.\n'É necessário paciência': sem artigo, o adjetivo pode ficar no masculino singular. 'É necessária a paciência': com artigo, concorda.\nNão se estenda a regra de um adjetivo a outro sem ver se ele é advérbio.",
          "context": "Concordância nominal",
          "exam": "Anexo concorda. Em anexo é locução.",
          "trap": "Não deixe 'anexo' invariável diante de substantivo feminino plural se ele é adjetivo.",
          "example": "'Seguem anexas as certidões.' Não 'anexo as certidões', se anexo qualifica as certidões.",
          "mnemonic": "Com artigo, o adjetivo concorda.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p127-5",
      "num": "5",
      "kicker": "Pedido 92",
      "title": "Regência",
      "lead": "Regência",
      "plate": "Regência",
      "plateSource": "Pedido 92",
      "devices": [
        {
          "tag": "regra",
          "name": "Regência",
          "hook": "Preferir A a B. Sem mais.",
          "literal": "Regência é a preposição que o termo exige, ou a ausência dela.\nAssistir, no sentido de ver, pede a: assistir ao depoimento. No sentido de ajudar, é transitivo direto: assistir o ferido. Não se descreve o ferimento.\nAspirar, no sentido de desejar, pede a. No sentido de respirar, é direto.\nVisar, no sentido de almejar, pede a. No sentido de mirar ou de pôr visto, é direto.\nPreferir pede a, não 'do que', e não admite 'mais': preferir o termo à oitiva adiada, não 'preferir mais o termo do que'.\nImplicar, no sentido de acarretar, é direto na norma que a banca cobra: implicar adiamento. Não se acrescente 'em' por hábito.\nObedecer e desobedecer pedem a. Chegar e ir pedem a: chegar ao distrito. Namorar, na norma cobrada, é direto: namorar alguém. Esquecer e lembrar: sem pronome, diretos; com pronome, pedem de: esqueceu o prazo; esqueceu-se do prazo.\nNão se troca a preposição do nome: 'obediência a', não 'obediência ao' por automatismo se o artigo não couber. A crase, quando a preposição a encontra artigo a, está no bloco seguinte.\nQuem e o qual repetem a preposição do verbo: 'o local a que chegou', não 'o local que chegou', se chegar pede a.",
          "context": "Regência",
          "exam": "Preferir não combina com mais nem com do que.",
          "trap": "Não use assistir sem preposição quando o sentido é ver.",
          "example": "'O agente assistiu ao depoimento' é ver. 'O agente assistiu a vítima' seria ajudar, e a frase ainda precisaria de clareza. Não se misturam os sentidos.",
          "mnemonic": "Preferir A a B. Sem mais.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p127-6",
      "num": "6",
      "kicker": "Pedido 92",
      "title": "Crase",
      "lead": "Crase",
      "plate": "Crase",
      "plateSource": "Pedido 92",
      "devices": [
        {
          "tag": "regra",
          "name": "Crase",
          "hook": "Se no masculino fica ao, marque. Se fica a, não marque.",
          "literal": "Crase é a fusão da preposição a com o artigo a, ou com o a inicial de aquele, aquela, aquilo. O acento grave marca a fusão.\nCabe crase se, no masculino correspondente, aparece 'ao': foi à delegacia, porque seria 'ao distrito'. Não cabe se o masculino fica só 'a': refere-se a lei antiga, se a frase paralela não leva artigo. O teste ajuda. Não é absoluto em nome próprio feminino de lugar, em que a crase depende de artigo: 'volta a Recife' ou 'volta à Bahia' segundo o uso do artigo. Recife, no uso comum, não leva artigo: vou a Recife. Bahia leva: vou à Bahia.\nNão há crase antes de palavra masculina, de verbo, de artigo indefinido, da maior parte dos pronomes pessoais e de demonstrativos como essa, esta, quando não há fusão. 'A ela' não leva crase. Diante de pronome de tratamento, a crase não é a regra, salvo locução ou forma feminina que a admita, como senhora: 'peço à senhora'.\nHoras determinadas levam crase: às 8 horas. Distância indeterminada, 'a distância', costuma ficar sem acento. Distância determinada, 'à distância de cem metros', leva, porque há artigo.\nCasa e terra, no sentido de próprio lar e de chão oposto a bordo, sem determinantes, não levam crase: voltou a casa, desceu a terra. Com determinante, levam: voltou à casa dos pais.\nLocuções femininas de modo, lugar e instrumento levam, quando há a fusão: à vista, às pressas, à esquerda. 'A pé' não leva, porque pé é masculino. 'A prazo' não leva.\nNão se ponha crase em 'a partir de', 'a menos que' e 'a fim de', salvo se outra regra real a exigir. Em 'a fim de', não há.",
          "context": "Crase",
          "exam": "O teste do masculino evita a crase decorativa.",
          "trap": "Não acentue 'a' antes de palavra masculina.",
          "example": "'Entrega a prazo' não tem crase. 'Entrega às 18 horas' tem.",
          "mnemonic": "Se no masculino fica ao, marque. Se fica a, não marque.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p127-7",
      "num": "7",
      "kicker": "Pedido 92",
      "title": "Colocação pronominal",
      "lead": "Colocação pronominal",
      "plate": "Colocação pronominal",
      "plateSource": "Pedido 92",
      "devices": [
        {
          "tag": "regra",
          "name": "Colocação pronominal",
          "hook": "Negação puxa o pronome. Futuro parte o verbo.",
          "literal": "Próclise: pronome antes do verbo. Atraem: não, nunca, jamais; pronome relativo; conjunção subordinativa; advérbio, sem vírgula que o separe do verbo; pronome indefinido; em mais gerúndio, na locução.\nÊnclise: pronome depois. Cabe com verbo no início da frase, na norma formal, e no imperativo afirmativo. Não se começa frase por pronome átono na norma que a banca cobra.\nMesóclise: pronome no meio do futuro do presente ou do futuro do pretérito, se não houver fator de próclise: far-se-á, tê-lo-ia. Com negação, a próclise vence: não se fará. Não se escreve 'não far-se-á' nem 'fará-se'.\nParticípio não recebe o pronome átono: 'tinham entregado-me' está errado. O pronome vai ao auxiliar: 'tinham-me entregado', ou antes, se houver atração: 'não me tinham entregado'.\nLocução: o pronome pode ir ao auxiliar ou, sem fator de próclise, ao infinitivo ou gerúndio. Não vai ao particípio.\n'O' e 'a' diante de vogal ou de som de vogal viram lo, la, com queda da consoante final do verbo, quando a forma o exige: 'enviá-lo'. Diante de nasal, no, na: 'enviaram-no'. Não se invente a forma se a questão não a pedir. A troca clássica é a posição, não a variante.",
          "context": "Colocação pronominal",
          "exam": "Futuro não leva ênclise. Ou mesóclise, ou próclise se houver atração.",
          "trap": "Não prenda pronome ao particípio.",
          "example": "'Não se lavrará o termo de novo' está em próclise. 'Lavrá-lo-á o agente' seria mesóclise, se a frase a pedisse. 'Lavrará-se' não é a forma cobrada.",
          "mnemonic": "Negação puxa o pronome. Futuro parte o verbo.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 127",
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
  "rolePlateSource": "Prompt 127",
  "summary": [
    {
      "item": "Vírgula",
      "rule": "Não separa sujeito e verbo na ordem direta.",
      "clue": "Explicativa leva. Restritiva não."
    },
    {
      "item": "Haver",
      "rule": "Existir ou tempo: singular.",
      "clue": "Havia, não haviam."
    },
    {
      "item": "Se",
      "rule": "Passiva concorda. Indeterminação fica no singular.",
      "clue": "Precisa-se de."
    },
    {
      "item": "Preferir",
      "rule": "A, sem mais e sem do que.",
      "clue": "Não é comparação livre."
    },
    {
      "item": "Crase",
      "rule": "Preposição a mais artigo a. Teste do ao.",
      "clue": "Masculino e verbo não levam."
    },
    {
      "item": "Futuro",
      "rule": "Mesóclise, ou próclise se houver atração.",
      "clue": "Não ênclise."
    }
  ],
  "compare": [
    {
      "item": "Restritiva",
      "ce": "Sem vírgula.",
      "cf": "Explicativa entre vírgulas.",
      "effect": "separa"
    },
    {
      "item": "Haver",
      "ce": "Impessoal no singular.",
      "cf": "Existir concorda.",
      "effect": "separa"
    },
    {
      "item": "Ênclise",
      "ce": "Não abre frase com pronome átono.",
      "cf": "Futuro pede mesóclise.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 127011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Em 'Haviam vários depoimentos no termo', a concordância está correta porque o sujeito está no plural.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Haver, no sentido de existir, é impessoal. A forma é 'havia vários depoimentos'. Existir, esse sim, concordaria: 'existiam'."
    },
    {
      "id": 127012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A crase está corretamente empregada em",
      "correct": "b",
      "options": [
        {
          "key": "a",
          "label": "O prazo corre de segunda a sexta, e a entrega será a prazo."
        },
        {
          "key": "b",
          "label": "A oitiva começou às 9 horas e o agente referiu-se à lei citada."
        },
        {
          "key": "c",
          "label": "Ele obedeceu a testemunha e voltou a casa dos pais sem acento."
        },
        {
          "key": "d",
          "label": "Prefiro mais o termo do que a audiência."
        },
        {
          "key": "e",
          "label": "Para mim analisar a cópia anexa, chegou cedo."
        }
      ],
      "comentario": "Questão original, não é prova real. Às 9 horas tem crase de hora determinada. À lei: preposição de referir-se mais artigo. 'A prazo' não tem crase. Preferir não leva mais nem do que. Para eu analisar, não para mim. Obedecer pede a, e 'à testemunha' seria a forma se houvesse artigo; a alternativa c escreve 'a testemunha' e ainda erra a casa determinada, que pediria 'à casa dos pais'."
    },
    {
      "id": 127013,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "A vírgula de 'Os termos, que estavam sem assinatura, foram devolvidos' torna a oração adjetiva explicativa.",
      "correct": "C",
      "comentario": "Questão original, não é prova real. CERTO. Entre vírgulas, a adjetiva explica e não restringe. Sem vírgulas, restringiria aos termos sem assinatura."
    },
    {
      "id": 127014,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "No futuro do presente, a norma cobrada em prova admite 'fará-se' como ênclise regular.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Sem fator de próclise, a posição é a mesóclise: far-se-á. Com negação: não se fará."
    },
    {
      "id": 127015,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Assinale a regência compatível com a norma cobrada.",
      "correct": "a",
      "options": [
        {
          "key": "a",
          "label": "O agente assistiu ao depoimento e prefere o termo claro ao termo omisso."
        },
        {
          "key": "b",
          "label": "O agente assistiu o depoimento, no sentido de ver, e prefere mais o termo do que a oitiva."
        },
        {
          "key": "c",
          "label": "Chegou na delegacia e esqueceu-se o número."
        },
        {
          "key": "d",
          "label": "Implicar em nulidade é a única forma aceita para o sentido de acarretar."
        },
        {
          "key": "e",
          "label": "Aspirar o cargo, no sentido de desejar, dispensa preposição."
        }
      ],
      "comentario": "Questão original, não é prova real. Assistir, ver, pede a. Preferir pede a, sem mais e sem do que. Chegar pede a. Esquecer-se pede de. Implicar, acarretar, é direto na norma de prova. Aspirar, desejar, pede a."
    }
  ],
  "toc": [
    {
      "id": "p127-1",
      "num": "1",
      "label": "Vírgula"
    },
    {
      "id": "p127-2",
      "num": "2",
      "label": "Pontuação que muda o sentido"
    },
    {
      "id": "p127-3",
      "num": "3",
      "label": "Concordância verbal"
    },
    {
      "id": "p127-4",
      "num": "4",
      "label": "Concordância nominal"
    },
    {
      "id": "p127-5",
      "num": "5",
      "label": "Regência"
    },
    {
      "id": "p127-6",
      "num": "6",
      "label": "Crase"
    },
    {
      "id": "p127-7",
      "num": "7",
      "label": "Colocação pronominal"
    }
  ],
  "clocks": [],
  "organKicker": "Recorte",
  "organTitle": "Pontuação, concordância e regência",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a regra que ele escreve.",
  "closing": "Conferir a fonte se houver atualização posterior à consulta de 20/10/2026.",
  "palette": "leaf",
  "highlight": {
    "big": "7",
    "small": "blocos neste prompt"
  },
  "heroLead": "Pedido 92. Onde a gramática admite duas concordâncias, o texto diz a variação. Não se condena forma aceita.",
  "footerLine": "Prompt 127 · pedido 92.",
  "nextLine": "Prompt 128 · pedido 93 · reescrita, parônimos e padrão ofício.",
  "closingMnemonic": "Texto primeiro. Número divergente segue a lei. Lacuna não se completa.",
  "rolesTitle": "Limite",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "Não misture",
  "compareLead": "Instituto vizinho não empresta requisito.",
  "compareLeft": "Um",
  "compareRight": "Outro"
};
