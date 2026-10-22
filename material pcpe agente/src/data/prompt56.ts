import type { StudyModule } from "./study";

export const PROMPT56: StudyModule = {
  "short": "Dispensa IV, a a f",
  "eyebrow": "Prompt 56 de 86 · Lei 14.133/2021, art. 75, IV, a a f",
  "title": "Dispensa do inciso IV",
  "subtitle": "seis alíneas, o resto fica fechado",
  "description": "O inciso IV não é dispensa por valor. Cada alínea tem objeto e trava. Da alínea g em diante, o inciso não entra. O valor escrito na alínea c é R$ 300.000,00. O anexo do Decreto nº 12.807/2025 atualiza essa alínea para R$ 392.952,63, só para obras e serviços de engenharia.",
  "reading": "Lei nº 14.133/2021, art. 75, IV, alíneas a a f. A alínea c escreve R$ 300.000,00. O anexo do Decreto nº 12.807/2025, em vigor em 1º/01/2026, atualiza o art. 75, IV, c, para R$ 392.952,63. Esse teto é só de obras e serviços de engenharia. Não se espalha para as outras alíneas.",
  "terms": [
    "garantia técnica",
    "acordo internacional",
    "pesquisa e desenvolvimento",
    "ICT",
    "gênero perecível",
    "defesa nacional"
  ],
  "subject": "Direito Administrativo",
  "context": [
    "Os incisos I a III já foram lidos. Não recalcule o teto deles aqui.",
    "A alínea c não é o art. 70, III. Objeto e função são outros.",
    "A alínea g, Forças Armadas, ficou cortada na fonte desta rodada. Não se completa de memória."
  ],
  "importance": "A banca generaliza a alínea e apaga a trava: garantia, Congresso, vantagem, cumulatividade.",
  "distinctions": [
    "Alínea a: fornecedor original, durante a garantia, e a exclusividade há de ser indispensável para a garantia vigorar.",
    "Alínea b: acordo internacional específico aprovado pelo Congresso, e condições manifestamente vantajosas.",
    "Alínea c: o limite escrito vale para obras e serviços de engenharia, não para todo produto de pesquisa.",
    "Alínea f exige, juntos, produção ou prestação no País, alta complexidade tecnológica e defesa nacional."
  ],
  "organs": [
    {
      "sigla": "a",
      "nome": "Garantia",
      "funcao": "Peça do fornecedor original, só enquanto a exclusividade segura a garantia.",
      "base": "Art. 75, IV, a",
      "nao": "Fornecedor qualquer, fora da garantia, não entra.",
      "tone": "orange"
    },
    {
      "sigla": "b",
      "nome": "Acordo",
      "funcao": "Acordo internacional específico, aprovado pelo Congresso, com vantagem manifesta.",
      "base": "Art. 75, IV, b",
      "nao": "Acordo sem aprovação do Congresso não basta.",
      "tone": "cyan"
    },
    {
      "sigla": "c",
      "nome": "Pesquisa",
      "funcao": "Produto para pesquisa e desenvolvimento.",
      "base": "Art. 75, IV, c",
      "nao": "O teto escrito não é cifra vigente confirmada.",
      "tone": "violet"
    },
    {
      "sigla": "d",
      "nome": "ICT",
      "funcao": "Transferência de tecnologia ou licença, por ICT pública ou agência de fomento, com vantagem.",
      "base": "Art. 75, IV, d",
      "nao": "Não é qualquer órgão.",
      "tone": "emerald"
    },
    {
      "sigla": "e",
      "nome": "Perecível",
      "funcao": "Hortifruti, pão e gênero perecível, pelo preço do dia, no intervalo da licitação.",
      "base": "Art. 75, IV, e",
      "nao": "Não é dispensa permanente de alimento.",
      "tone": "yellow"
    },
    {
      "sigla": "f",
      "nome": "Defesa",
      "funcao": "No País, alta complexidade e defesa nacional, cumulativamente.",
      "base": "Art. 75, IV, f",
      "nao": "Um só requisito não abre a alínea.",
      "tone": "sky"
    }
  ],
  "swaps": [
    {
      "wrong": "A alínea a autoriza comprar peça de qualquer fornecedor durante a garantia.",
      "right": "O fornecedor é o original, e a exclusividade há de ser indispensável para a garantia continuar."
    },
    {
      "wrong": "Qualquer acordo internacional abre a alínea b.",
      "right": "O acordo é específico e aprovado pelo Congresso, com condições manifestamente vantajosas."
    },
    {
      "wrong": "R$ 300.000,00 da alínea c é o teto vigente de qualquer pesquisa.",
      "right": "R$ 300.000,00 é o número da lei. O anexo vigente põe R$ 392.952,63, e só para obras e serviços de engenharia."
    },
    {
      "wrong": "R$ 392.952,63 da alínea c vale para qualquer produto de pesquisa.",
      "right": "O anexo repete o número na alínea c, mas o teto da alínea alcança só obras e serviços de engenharia. Não é qualquer pesquisa, nem se confunde com o art. 70, III."
    },
    {
      "wrong": "Qualquer órgão pode usar a alínea d.",
      "right": "ICT pública ou agência de fomento, com vantagem demonstrada."
    },
    {
      "wrong": "Gênero perecível dispensa licitação para sempre.",
      "right": "A alínea e cobre o período necessário para realizar a licitação correspondente, pelo preço do dia."
    },
    {
      "wrong": "Defesa nacional, sozinha, abre a alínea f.",
      "right": "O texto diz cumulativamente: no País, alta complexidade tecnológica e defesa nacional."
    },
    {
      "wrong": "A alínea g das Forças Armadas entra neste prompt.",
      "right": "A fonte desta rodada cortou a alínea. Ela não é completada de memória."
    }
  ],
  "timeline": [
    {
      "when": "a",
      "title": "Garantia",
      "text": "Original, durante a garantia, exclusividade indispensável."
    },
    {
      "when": "b",
      "title": "Congresso",
      "text": "Acordo específico aprovado e vantagem manifesta."
    },
    {
      "when": "c",
      "title": "Pesquisa",
      "text": "Limite escrito só na engenharia. Cifra vigente: conferir."
    },
    {
      "when": "e-f",
      "title": "Perecível e defesa",
      "text": "Preço do dia, no intervalo da licitação. Defesa, só cumulativa."
    }
  ],
  "articles": [
    {
      "id": "art75iv",
      "num": "IV",
      "kicker": "Art. 75",
      "title": "Alíneas a a f",
      "lead": "Seis objetos. Nenhum é dispensa por valor.",
      "plate": "Cada alínea tem a sua trava.",
      "plateSource": "Art. 75, IV",
      "devices": [
        {
          "tag": "a-b",
          "name": "Garantia e acordo",
          "hook": "Duas portas que a banca alarga.",
          "literal": "Art. 75, IV, a: bens, componentes ou peças de origem nacional ou estrangeira necessários à manutenção de equipamentos, a serem adquiridos do fornecedor original desses equipamentos durante o período de garantia técnica, quando essa condição de exclusividade for indispensável para a vigência da garantia. Alínea b: bens, serviços, alienações ou obras, nos termos de acordo internacional específico aprovado pelo Congresso Nacional, quando as condições ofertadas forem manifestamente vantajosas para a Administração.",
          "context": "Origem nacional ou estrangeira não dispensa o fornecedor original.",
          "exam": "A banca troca Congresso Nacional por autorização interna.",
          "trap": "Não use a alínea para escolher fornecedor fora da garantia.",
          "example": "A peça de reposição, comprada do fabricante original porque senão a garantia cai, pode estar na alínea a. O mesmo equipamento, depois da garantia, não.",
          "mnemonic": "Original e garantia. Acordo aprovado e vantagem."
        },
        {
          "tag": "c-d",
          "name": "Pesquisa e tecnologia",
          "hook": "Valor escrito não é valor vigente.",
          "literal": "Alínea c: produtos para pesquisa e desenvolvimento, limitada a contratação, no caso de obras e serviços de engenharia, ao valor de R$ 300.000,00 (trezentos mil reais). Esse número é o da lei e vem marcado por decretos de atualização. O anexo do Decreto nº 12.807/2025 atualiza essa alínea para R$ 392.952,63, em vigor em 1º/01/2026, somente para obras e serviços de engenharia. Alínea d: transferência de tecnologia ou licenciamento de direito de uso ou de exploração de criação protegida, nas contratações realizadas por ICT pública ou por agência de fomento, desde que demonstrada vantagem para a Administração.",
          "context": "O limite da alínea c não alcança, pela frase, todo produto de pesquisa. Alcança obras e serviços de engenharia.",
          "exam": "A banca leva o teto da alínea c para qualquer compra de laboratório.",
          "trap": "Vantagem da alínea d há de ser demonstrada. Não se presume.",
          "example": "Uma ICT pública pode licenciar criação protegida se demonstrar vantagem. Uma secretaria comum não se apresenta como ICT por analogia.",
          "mnemonic": "Trezentos mil são da lei. ICT não é qualquer órgão."
        },
        {
          "tag": "e-f",
          "name": "Perecível e defesa",
          "hook": "Tempo certo e requisitos cumulativos.",
          "literal": "Alínea e: hortifrutigranjeiros, pães e outros gêneros perecíveis, no período necessário para a realização dos processos licitatórios correspondentes, hipótese em que a contratação será realizada diretamente com base no preço do dia. Alínea f: bens ou serviços produzidos ou prestados no País que envolvam, cumulativamente, alta complexidade tecnológica e defesa nacional.",
          "context": "Preço do dia não é preço estimado de outro artigo. A alínea e escreve a base.",
          "exam": "A banca lê cumulativamente como alternativamente.",
          "trap": "A alínea e não cobre alimento durável nem dispensa a licitação que se está preparando.",
          "example": "O pão do intervalo, pelo preço do dia, pode estar na alínea e. O contrato anual de alimentação, não.",
          "mnemonic": "Preço do dia, período da licitação. Defesa, os três juntos."
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Fornecedor original",
      "source": "Alínea a",
      "does": [
        "Fornecer a peça durante a garantia"
      ],
      "doesNot": [
        "Não é qualquer revendedor",
        "A exclusividade há de ser indispensável para a garantia"
      ]
    },
    {
      "role": "Congresso Nacional",
      "source": "Alínea b",
      "does": [
        "Aprovar o acordo internacional específico"
      ],
      "doesNot": [
        "Autorização interna não o substitui"
      ]
    },
    {
      "role": "ICT ou agência de fomento",
      "source": "Alínea d",
      "does": [
        "Contratar transferência ou licença, com vantagem demonstrada"
      ],
      "doesNot": [
        "Órgão comum não se equipara por analogia"
      ]
    }
  ],
  "roleNote": "A alínea g não foi lida. Não a complete.",
  "rolePlate": "Seis alíneas, seis travas.",
  "rolePlateSource": "Art. 75, IV, a a f",
  "summary": [
    {
      "item": "a",
      "rule": "Fornecedor original, durante a garantia.",
      "clue": "Exclusividade indispensável para a garantia."
    },
    {
      "item": "b",
      "rule": "Acordo internacional específico.",
      "clue": "Aprovado pelo Congresso e manifestamente vantajoso."
    },
    {
      "item": "c",
      "rule": "Pesquisa e desenvolvimento.",
      "clue": "Teto escrito só para engenharia: R$ 300.000,00 da lei."
    },
    {
      "item": "Cifra da c",
      "rule": "R$ 392.952,63, só engenharia.",
      "clue": "Não espalhe para as outras alíneas."
    },
    {
      "item": "d",
      "rule": "Tecnologia ou licença.",
      "clue": "ICT pública ou agência de fomento, com vantagem."
    },
    {
      "item": "e",
      "rule": "Perecível.",
      "clue": "Preço do dia, no período da licitação."
    },
    {
      "item": "f",
      "rule": "Cumulativamente.",
      "clue": "No País, alta complexidade e defesa nacional."
    },
    {
      "item": "g em diante",
      "rule": "Não aberto.",
      "clue": "Conferir o texto oficial."
    }
  ],
  "compare": [
    {
      "item": "a",
      "ce": "Original e garantia.",
      "cf": "Não é fornecedor qualquer.",
      "effect": "restringe"
    },
    {
      "item": "c",
      "ce": "R$ 300.000,00 escritos, só engenharia.",
      "cf": "Anexo: R$ 392.952,63, só engenharia.",
      "effect": "separa"
    },
    {
      "item": "c e art. 70",
      "ce": "Pesquisa do inciso IV.",
      "cf": "Teto de documentação do art. 70, III, já fechado.",
      "effect": "separa"
    },
    {
      "item": "e",
      "ce": "Intervalo da licitação.",
      "cf": "Não é contrato permanente.",
      "effect": "restringe"
    },
    {
      "item": "f",
      "ce": "Cumulativamente.",
      "cf": "Não é um requisito só.",
      "effect": "restringe"
    }
  ],
  "questions": [
    {
      "id": 56011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "A alínea a do art. 75, IV, da Lei nº 14.133/2021 autoriza adquirir componentes de qualquer fornecedor, durante ou depois da garantia, desde que o equipamento seja de origem estrangeira.",
      "correct": "E",
      "comentario": "ERRADO. A peça é adquirida do fornecedor original, durante a garantia técnica, e somente quando a exclusividade for indispensável para a garantia vigorar. Origem estrangeira não dispensa essas travas."
    },
    {
      "id": 56012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Sobre as alíneas c e f do art. 75, IV, é correto afirmar que",
      "correct": "d",
      "comentario": "A alínea f escreve cumulativamente. A alínea c limita o teto a obras e serviços de engenharia. O anexo vigente fixa R$ 392.952,63 nessa alínea, não para qualquer produto de pesquisa.",
      "options": [
        {
          "key": "a",
          "label": "defesa nacional, isoladamente, basta para a alínea f."
        },
        {
          "key": "b",
          "label": "o teto de R$ 300.000,00 da alínea c é vigente e alcança qualquer produto de pesquisa."
        },
        {
          "key": "c",
          "label": "R$ 392.952,63 da alínea c alcança qualquer produto de pesquisa, não só obras e serviços de engenharia."
        },
        {
          "key": "d",
          "label": "a alínea f exige, juntos, produção ou prestação no País, alta complexidade tecnológica e defesa nacional."
        },
        {
          "key": "e",
          "label": "a alínea c dispensa atualização, porque o decreto não pode alcançar pesquisa."
        }
      ]
    },
    {
      "id": 56013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A contratação de hortifrutigranjeiros, pães e outros gêneros perecíveis, na alínea e,",
      "correct": "b",
      "comentario": "A alínea e é temporária e usa o preço do dia. Não é dispensa permanente nem preço de outro artigo.",
      "options": [
        {
          "key": "a",
          "label": "dispensa a licitação em caráter permanente, pelo valor estimado do art. 23."
        },
        {
          "key": "b",
          "label": "cabe no período necessário para realizar a licitação correspondente e se faz pelo preço do dia."
        },
        {
          "key": "c",
          "label": "exige acordo internacional aprovado pelo Congresso."
        },
        {
          "key": "d",
          "label": "só pode ser feita por ICT pública."
        },
        {
          "key": "e",
          "label": "usa o teto de R$ 65.492,11 do inciso II, escrito na própria alínea."
        }
      ]
    }
  ],
  "palette": "teal",
  "highlight": {
    "big": "Cumulativamente",
    "small": "não isoladamente"
  },
  "heroLead": "Seis alíneas do inciso IV. Cada uma tem trava. O restante do artigo não foi aberto.",
  "footerLine": "Alíneas a a f lidas. Da alínea g em diante, conferir o texto oficial.",
  "nextLine": "O art. 76 em diante da Lei nº 14.133/2021 não cabe nos prompts que faltam até 86. O Prompt 57 abre o item 1 do edital: Estado, governo e administração pública.",
  "closingMnemonic": "Original na garantia. Congresso e vantagem. Pesquisa sem cifra emprestada. Perecível pelo preço do dia. Defesa, os três juntos.",
  "rolesTitle": "Quem a alínea nomeia",
  "rolesLead": "Fornecedor original não é qualquer um. ICT não é qualquer órgão.",
  "compareTitle": "Trava da alínea",
  "compareLead": "Generalizar a alínea é o erro da banca.",
  "compareLeft": "O que a alínea escreve",
  "compareRight": "O que ela não escreve",
  "clocks": [
    {
      "value": "preço do dia",
      "label": "Base da alínea e, no intervalo da licitação",
      "source": "Art. 75, IV, e"
    },
    {
      "value": "R$ 300.000,00",
      "label": "Valor escrito na lei. Vigente, só engenharia: R$ 392.952,63",
      "source": "Art. 75, IV, c"
    }
  ],
  "toc": [
    {
      "id": "art75iv",
      "num": "IV",
      "label": "Alíneas a a f"
    }
  ]
};
