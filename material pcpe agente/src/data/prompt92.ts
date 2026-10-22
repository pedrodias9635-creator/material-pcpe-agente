import type { StudyModule } from "./study";

export const PROMPT92: StudyModule = {
  "short": "Parágrafos do art. 75",
  "eyebrow": "Prompt 92 · Lei nº 14.133/2021, art. 75, §§ 1º a 5º e 7º",
  "title": "Como se mede a dispensa por valor",
  "subtitle": "somar, não fatiar",
  "description": "Os §§ 1º e 2º medem os incisos I e II. O § 7º tira uma faixa pequena de manutenção de veículos desse somatório. O § 6º já foi lido com a emergência e não volta. A lei manda somar. Não ensina a fatiar.",
  "reading": "Lei nº 14.133/2021, art. 75, §§ 1º a 5º e § 7º. Decreto nº 12.807/2025, anexo, em vigor em 1º/01/2026: art. 75, § 7º, R$ 10.478,74. O texto legal escreve R$ 8.000,00. Esse número não é o vigente. O § 2º diz que os valores serão duplicados. Este prompt não multiplica.",
  "terms": [
    "somatório",
    "mesma natureza",
    "três dias úteis",
    "cartão",
    "R$ 10.478,74"
  ],
  "context": [
    "Inferiores a, dos incisos I e II, continua no Prompt 55. Igual ao teto não entra lá.",
    "Até, no § 7º, inclui o valor igual. Não troque as palavras.",
    "Duplicar não é recalcular de cabeça neste prompt."
  ],
  "importance": "A banca soma só o contrato da vez, ignora o exercício e a mesma natureza, e usa R$ 8.000,00 como teto atual.",
  "distinctions": [
    "§ 1º observa dois somatórios: o da unidade gestora no exercício e o dos objetos de mesma natureza, mesmo ramo.",
    "§ 3º é preferencialmente, prazo mínimo de três dias úteis, não corridos.",
    "§ 7º não aplica o § 1º só à manutenção de veículos do próprio órgão, incluídas as peças, até o valor vigente."
  ],
  "organs": [
    {
      "sigla": "§1",
      "nome": "Dois somas",
      "funcao": "Exercício da unidade gestora e mesma natureza.",
      "base": "Art. 75, § 1º",
      "nao": "Não é licença para fatiar.",
      "tone": "orange"
    },
    {
      "sigla": "§2",
      "nome": "Dobro",
      "funcao": "Consórcio público ou agência executiva.",
      "base": "Art. 75, § 2º",
      "nao": "Não multiplique o real aqui.",
      "tone": "cyan"
    },
    {
      "sigla": "§3",
      "nome": "Aviso",
      "funcao": "Preferencialmente, três dias úteis, proposta mais vantajosa.",
      "base": "Art. 75, § 3º",
      "nao": "Útil não é corrido.",
      "tone": "emerald"
    },
    {
      "sigla": "§4",
      "nome": "Cartão",
      "funcao": "Preferencialmente. Extrato no PNCP.",
      "base": "Art. 75, § 4º",
      "nao": "Preferencialmente não apaga o extrato, se usado.",
      "tone": "violet"
    },
    {
      "sigla": "§5",
      "nome": "Alínea c",
      "funcao": "Engenharia da alínea c segue regulamento próprio.",
      "base": "Art. 75, § 5º",
      "nao": "O regulamento não foi aberto.",
      "tone": "sky"
    },
    {
      "sigla": "§7",
      "nome": "Veículo",
      "funcao": "Até o valor vigente. Não aplica o § 1º.",
      "base": "Decreto nº 12.807/2025",
      "nao": "R$ 8.000,00 é o texto da lei, não o vigente.",
      "tone": "yellow"
    }
  ],
  "swaps": [
    {
      "wrong": "Para a dispensa por valor, soma-se só o contrato que se vai assinar.",
      "right": "O § 1º manda observar o somatório do exercício, pela unidade gestora, e o somatório de objetos de mesma natureza."
    },
    {
      "wrong": "Fatiar a compra em vários contratos pequenos afasta o § 1º.",
      "right": "A lei manda somar. Fatiar para caber no limite não é o parágrafo."
    },
    {
      "wrong": "Os valores dos incisos I e II dobram para qualquer autarquia.",
      "right": "Dobram para consórcio público ou para autarquia ou fundação qualificada como agência executiva."
    },
    {
      "wrong": "O aviso do § 3º dura três dias corridos e é sempre obrigatório.",
      "right": "Preferencialmente, prazo mínimo de três dias úteis."
    },
    {
      "wrong": "O cartão de pagamento é dever em toda dispensa por valor.",
      "right": "O § 4º diz preferencialmente. Se usado, o extrato deverá ser divulgado e mantido no PNCP."
    },
    {
      "wrong": "R$ 8.000,00 ainda é o teto do § 7º.",
      "right": "É o valor escrito na lei. O anexo vigente põe R$ 10.478,74."
    },
    {
      "wrong": "Até, no § 7º, exclui o valor igual.",
      "right": "Até inclui o igual. Inferiores a, dos incisos I e II, não."
    },
    {
      "wrong": "O § 7º afasta o somatório de qualquer compra pequena.",
      "right": "Só manutenção de veículos do próprio órgão ou entidade, incluídas as peças."
    }
  ],
  "timeline": [
    {
      "when": "Lei",
      "title": "R$ 8.000,00",
      "text": "Número escrito no § 7º. Não é o vigente."
    },
    {
      "when": "Decreto",
      "title": "R$ 10.478,74",
      "text": "Anexo do Decreto nº 12.807/2025. Em vigor em 1º/01/2026."
    },
    {
      "when": "§ 3º",
      "title": "3 dias úteis",
      "text": "Mínimo. Preferencialmente. Proposta mais vantajosa."
    }
  ],
  "articles": [
    {
      "id": "pars",
      "num": "§§",
      "kicker": "Art. 75",
      "title": "Medida do valor",
      "lead": "Somar é dever. Duplicar não se calcula aqui.",
      "plate": "Até não é inferiores a.",
      "plateSource": "Art. 75, § 7º",
      "devices": [
        {
          "tag": "§1-2",
          "name": "Somatório e dobro",
          "hook": "Dois recortes, uma duplicação sem conta.",
          "literal": "§ 1º: para aferição dos valores que atendam aos limites dos incisos I e II, deverão ser observados o somatório do que for despendido no exercício financeiro pela respectiva unidade gestora e o somatório da despesa realizada com objetos de mesma natureza, entendidos como tais aqueles relativos a contratações no mesmo ramo de atividade. § 2º: os valores dos incisos I e II serão duplicados para compras, obras e serviços contratados por consórcio público ou por autarquia ou fundação qualificadas como agências executivas na forma da lei.",
          "context": "Deverão ser observados. Os dois somatórios. Não escolha um. Duplicados não é um real escrito. Não multiplique.",
          "exam": "A banca soma só um contrato e dobra para secretaria comum.",
          "trap": "Não ensine a separar ramo ou unidade para caber no teto.",
          "example": "Duas compras do mesmo ramo, na mesma unidade, no mesmo exercício, entram no somatório. Esconder a segunda não é o parágrafo.",
          "mnemonic": "Soma os dois. Dobra só quem a lei nomeia."
        },
        {
          "tag": "§3-4",
          "name": "Aviso e cartão",
          "hook": "Preferencialmente, nos dois.",
          "literal": "§ 3º: as contratações dos incisos I e II serão preferencialmente precedidas de divulgação de aviso em sítio eletrônico oficial, pelo prazo mínimo de 3 (três) dias úteis, com a especificação do objeto pretendido e com a manifestação de interesse da Administração em obter propostas adicionais de eventuais interessados, devendo ser selecionada a proposta mais vantajosa. § 4º: serão preferencialmente pagas por meio de cartão de pagamento, cujo extrato deverá ser divulgado e mantido à disposição do público no PNCP.",
          "context": "Mínimo de três dias úteis. Não é máximo. Não é corrido. A proposta mais vantajosa não é a de quem chegou primeiro.",
          "exam": "A banca troca útil por corrido e preferencialmente por sempre.",
          "trap": "O aviso não é técnica para simular disputa.",
          "example": "Se o aviso sair, o prazo mínimo é de três dias úteis e vence a proposta mais vantajosa.",
          "mnemonic": "Útil. Mínimo. Mais vantajosa."
        },
        {
          "tag": "§5-7",
          "name": "Regulamento e veículo",
          "hook": "Oito mil não é o vigente.",
          "literal": "§ 5º: a dispensa da alínea c do inciso IV, quando aplicada a obras e serviços de engenharia, seguirá procedimentos especiais de regulamentação específica. Essa regulamentação não foi aberta. O valor vigente dessa alínea, R$ 392.952,63, está no Prompt 56, corrigido pelo anexo. § 7º: não se aplica o § 1º às contratações de até R$ 8.000,00 de serviços de manutenção de veículos automotores de propriedade do órgão ou entidade contratante, incluído o fornecimento de peças. Esse é o número da lei. O anexo do Decreto nº 12.807/2025 atualiza o § 7º para R$ 10.478,74.",
          "context": "Até inclui o igual. O veículo há de ser do próprio órgão ou entidade. Peças entram. Outra compra não.",
          "exam": "A banca usa o § 7º para qualquer compra até esse valor.",
          "trap": "Não transforme compra comum em manutenção de veículo.",
          "example": "Troca de peça da viatura do órgão, até o valor vigente, pode afastar o somatório do § 1º. Material de expediente, não.",
          "mnemonic": "Até o vigente. Só veículo do órgão."
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Unidade gestora",
      "source": "Art. 75, § 1º",
      "does": [
        "Somar o exercício",
        "Somar a mesma natureza"
      ],
      "doesNot": [
        "Não fatia para caber",
        "Não escolhe só um somatório"
      ]
    },
    {
      "role": "Agência executiva",
      "source": "Art. 75, § 2º",
      "does": [
        "Ter o valor duplicado, se qualificada na forma da lei"
      ],
      "doesNot": [
        "Autarquia comum não dobra por esse parágrafo"
      ]
    },
    {
      "role": "PNCP",
      "source": "Art. 75, § 4º",
      "does": [
        "Receber o extrato do cartão, se o pagamento for por ele"
      ],
      "doesNot": [
        "O cartão é preferencial, não universal"
      ]
    }
  ],
  "roleNote": "Somar não é técnica. É o dever do § 1º.",
  "rolePlate": "R$ 10.478,74. Até.",
  "rolePlateSource": "Decreto nº 12.807/2025, art. 75, § 7º",
  "summary": [
    {
      "item": "§ 1º, I",
      "rule": "Somatório do exercício, pela unidade gestora.",
      "clue": "Não é só este contrato."
    },
    {
      "item": "§ 1º, II",
      "rule": "Mesma natureza, mesmo ramo.",
      "clue": "Os dois se observam."
    },
    {
      "item": "Fatiar",
      "rule": "Não é o parágrafo.",
      "clue": "A lei manda somar."
    },
    {
      "item": "§ 2º",
      "rule": "Duplicados.",
      "clue": "Consórcio ou agência executiva. Sem conta neste prompt."
    },
    {
      "item": "§ 3º",
      "rule": "Preferencialmente, mínimo de 3 dias úteis.",
      "clue": "Proposta mais vantajosa."
    },
    {
      "item": "§ 4º",
      "rule": "Cartão, preferencialmente.",
      "clue": "Extrato no PNCP."
    },
    {
      "item": "§ 5º",
      "rule": "Engenharia da alínea c tem regulamento.",
      "clue": "Não aberto."
    },
    {
      "item": "§ 7º",
      "rule": "Até R$ 10.478,74 vigentes.",
      "clue": "R$ 8.000,00 é a lei. Só veículo do órgão."
    }
  ],
  "compare": [
    {
      "item": "Limite",
      "ce": "I e II: inferiores a.",
      "cf": "§ 7º: até, inclui o igual.",
      "effect": "separa"
    },
    {
      "item": "§ 1º",
      "ce": "Dois somatórios.",
      "cf": "Um contrato só não mede.",
      "effect": "restringe"
    },
    {
      "item": "§ 2º",
      "ce": "Duplicados, sem real escrito.",
      "cf": "Não é qualquer autarquia.",
      "effect": "restringe"
    },
    {
      "item": "§ 7º",
      "ce": "R$ 10.478,74.",
      "cf": "R$ 8.000,00 não é o vigente.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 92011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Para aferir a dispensa dos incisos I e II, basta o valor do contrato isolado, e o § 7º continua limitado a R$ 8.000,00, excluído o valor igual.",
      "correct": "E",
      "comentario": "ERRADO. O § 1º manda observar dois somatórios. O § 7º vigente é R$ 10.478,74, e a palavra é até, que inclui o igual. R$ 8.000,00 é o número da lei."
    },
    {
      "id": 92012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "O § 3º do art. 75",
      "correct": "c",
      "comentario": "Preferencialmente, mínimo de três dias úteis, sítio oficial, proposta mais vantajosa. Não é corrido nem sempre obrigatório.",
      "options": [
        {
          "key": "a",
          "label": "impõe aviso de três dias corridos em toda dispensa."
        },
        {
          "key": "b",
          "label": "escolhe a primeira proposta que chegar."
        },
        {
          "key": "c",
          "label": "prevê, preferencialmente, aviso em sítio oficial pelo prazo mínimo de três dias úteis, selecionada a proposta mais vantajosa."
        },
        {
          "key": "d",
          "label": "duplica os valores para qualquer secretaria."
        },
        {
          "key": "e",
          "label": "afasta o somatório de objetos de mesma natureza."
        }
      ]
    },
    {
      "id": 92013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Não se aplica o § 1º",
      "correct": "a",
      "comentario": "Só à manutenção de veículos do próprio órgão ou entidade, com peças, até o valor vigente. Não a qualquer compra pequena.",
      "options": [
        {
          "key": "a",
          "label": "às contratações de manutenção de veículos do próprio órgão ou entidade, incluídas as peças, até R$ 10.478,74 vigentes."
        },
        {
          "key": "b",
          "label": "a toda compra até R$ 10.478,74."
        },
        {
          "key": "c",
          "label": "à emergência do inciso VIII."
        },
        {
          "key": "d",
          "label": "à inexigibilidade do art. 74."
        },
        {
          "key": "e",
          "label": "somente se o veículo for de servidor."
        }
      ]
    }
  ],
  "palette": "lime",
  "highlight": {
    "big": "R$ 10.478,74",
    "small": "até, não inferiores a"
  },
  "heroLead": "A dispensa por valor soma o exercício e a mesma natureza. O veículo do órgão tem faixa própria. R$ 8.000,00 ficou na lei.",
  "footerLine": "Parágrafos lidos. O § 6º não voltou. Duplicar não foi calculado.",
  "nextLine": "Diga continue para o Prompt 93: alienação de bens, art. 76 da Lei nº 14.133/2021. O art. 77 não entra nesse anúncio.",
  "closingMnemonic": "Soma o exercício e o ramo. Dobra só quem a lei nomeia. Três dias úteis. Veículo, até o vigente.",
  "clocks": [
    {
      "value": "3 dias úteis",
      "label": "Prazo mínimo do aviso, preferencialmente",
      "source": "Art. 75, § 3º"
    },
    {
      "value": "R$ 10.478,74",
      "label": "§ 7º vigente, até, só manutenção de veículo do órgão",
      "source": "Decreto nº 12.807/2025"
    }
  ],
  "subject": "Direito Administrativo",
  "rolesTitle": "Quem a norma nomeia",
  "rolesLead": "O nome do órgão não se empresta.",
  "compareTitle": "A trava",
  "compareLead": "Generalizar a hipótese é o erro.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "toc": [
    {
      "id": "pars",
      "num": "§§",
      "label": "Medida do valor"
    }
  ]
};
