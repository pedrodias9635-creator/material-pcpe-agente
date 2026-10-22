import type { StudyModule } from "./study";

export const PROMPT87: StudyModule = {
  "short": "Dispensa IV, g a m",
  "eyebrow": "Prompt 87 · Lei nº 14.133/2021, art. 75, IV, g a m",
  "title": "Dispensa do inciso IV, da alínea g à m",
  "subtitle": "o que o Prompt 56 deixou fechado",
  "description": "Sete alíneas. Nenhuma é dispensa da PCPE por analogia. Força militar, catador, obra de arte, sigilo de investigação e doença rara têm trava própria. Os incisos da Lei nº 12.850 citados na alínea l não foram abertos.",
  "reading": "Lei nº 14.133/2021, art. 75, IV, alíneas g a m. Texto vigente no Planalto. A alínea l apenas cita os incisos II e V do art. 3º da Lei nº 12.850/2013. Esses incisos não foram transcritos.",
  "terms": [
    "Forças Armadas",
    "catadores",
    "obra de arte",
    "sigilo da investigação",
    "doença rara"
  ],
  "context": [
    "O Prompt 56 parou na alínea f. Aqui só g a m.",
    "Comandante de força militar não é delegado.",
    "A alínea l não é autorização geral para comprar equipamento de rastreamento."
  ],
  "importance": "A banca leva a alínea militar para a polícia civil e transforma o sigilo da investigação em dispensa livre.",
  "distinctions": [
    "g excetua material de uso pessoal e administrativo.",
    "h exige justificativa de preço e de escolha, e ratificação do comandante.",
    "j é só associação ou cooperativa de catadores de baixa renda, reconhecidos, com equipamento compatível.",
    "m é medicamento exclusivo para doença rara definida pelo Ministério da Saúde."
  ],
  "organs": [
    {
      "sigla": "g",
      "nome": "Forças Armadas",
      "funcao": "Material militar, não o de uso pessoal, com autorização do comandante.",
      "base": "Art. 75, IV, g",
      "nao": "Não é material da PCPE.",
      "tone": "orange"
    },
    {
      "sigla": "h-i",
      "nome": "Paz e estada",
      "funcao": "Contingente no exterior, ou estada curta fora da sede.",
      "base": "Art. 75, IV, h e i",
      "nao": "Não é deslocamento policial comum.",
      "tone": "cyan"
    },
    {
      "sigla": "j",
      "nome": "Catadores",
      "funcao": "Associação ou cooperativa exclusiva de baixa renda, reconhecida.",
      "base": "Art. 75, IV, j",
      "nao": "Empresa comercial não entra.",
      "tone": "emerald"
    },
    {
      "sigla": "k",
      "nome": "Obra de arte",
      "funcao": "Autenticidade certificada e finalidade do órgão.",
      "base": "Art. 75, IV, k",
      "nao": "Gosto do gestor não certifica.",
      "tone": "violet"
    },
    {
      "sigla": "l",
      "nome": "Sigilo",
      "funcao": "Serviço ou equipamento para prova dos incisos citados, com necessidade justificada de sigilo.",
      "base": "Art. 75, IV, l",
      "nao": "Os incisos da Lei nº 12.850 não foram abertos. Não é compra livre.",
      "tone": "sky"
    },
    {
      "sigla": "m",
      "nome": "Doença rara",
      "funcao": "Medicamento exclusivo, doença definida pelo Ministério da Saúde.",
      "base": "Art. 75, IV, m",
      "nao": "A polícia não define a doença.",
      "tone": "yellow"
    }
  ],
  "swaps": [
    {
      "wrong": "A alínea g alcança qualquer material das Forças Armadas, inclusive o de uso pessoal.",
      "right": "O texto excetua material de uso pessoal e administrativo."
    },
    {
      "wrong": "O delegado ratifica a alínea h.",
      "right": "A ratificação é do comandante da força militar."
    },
    {
      "wrong": "Estada eventual de curta duração cabe a qualquer órgão.",
      "right": "A alínea i é de efetivo militar, fora da sede, por movimentação operacional ou adestramento."
    },
    {
      "wrong": "Qualquer cooperativa de reciclagem usa a alínea j.",
      "right": "Exclusivamente pessoas físicas de baixa renda, reconhecidas como catadores, em área com coleta seletiva, com equipamento compatível com as normas."
    },
    {
      "wrong": "Obra de arte se compra por dispensa sem certificação, se o órgão quiser.",
      "right": "Autenticidade certificada, e o objeto há de ser inerente ou compatível com as finalidades do órgão."
    },
    {
      "wrong": "A alínea l autoriza qualquer compra sigilosa da polícia.",
      "right": "O objeto é serviço especializado ou equipamento de rastreamento e obtenção de prova prevista nos incisos citados, com necessidade justificada de sigilo. Os incisos não foram abertos."
    },
    {
      "wrong": "Doença rara é a que o médico da corporação definir.",
      "right": "A alínea m diz definidas pelo Ministério da Saúde, e o medicamento é destinado exclusivamente a esse tratamento."
    },
    {
      "wrong": "Estas alíneas dispensam o processo do art. 72.",
      "right": "O processo de contratação direta já foi lido. A hipótese não apaga a instrução."
    }
  ],
  "timeline": [
    {
      "when": "g-i",
      "title": "Militar",
      "text": "Força, comandante, paz no exterior ou estada curta. Não é a PCPE."
    },
    {
      "when": "j-k",
      "title": "Catador e arte",
      "text": "Baixa renda reconhecida. Autenticidade certificada."
    },
    {
      "when": "l",
      "title": "Investigação",
      "text": "Cita a Lei nº 12.850. Não abre os incisos. Não ensina o meio."
    },
    {
      "when": "m",
      "title": "Saúde",
      "text": "Ministério da Saúde define a doença rara."
    }
  ],
  "articles": [
    {
      "id": "ivgm",
      "num": "IV",
      "kicker": "Art. 75",
      "title": "Alíneas g a m",
      "lead": "Sete hipóteses. Nenhuma se empresta.",
      "plate": "A trava está na própria alínea.",
      "plateSource": "Art. 75, IV, g a m",
      "devices": [
        {
          "tag": "g-i",
          "name": "Militar",
          "hook": "Três alíneas, três comandos.",
          "literal": "Alínea g: materiais de uso das Forças Armadas, com exceção de materiais de uso pessoal e administrativo, quando houver necessidade de manter a padronização requerida pela estrutura de apoio logístico dos meios navais, aéreos e terrestres, mediante autorização por ato do comandante da força militar. Alínea h: bens e serviços para atendimento dos contingentes militares das forças singulares brasileiras empregadas em operações de paz no exterior, hipótese em que a contratação deverá ser justificada quanto ao preço e à escolha do fornecedor ou executante e ratificada pelo comandante da força militar. Alínea i: abastecimento ou suprimento de efetivos militares em estada eventual de curta duração em portos, aeroportos ou localidades diferentes de suas sedes, por motivo de movimentação operacional ou de adestramento.",
          "context": "Deverá, na alínea h, justifica preço e escolha. A alínea i não escreve essa ratificação. Não a invente.",
          "exam": "A banca chama o delegado de comandante da força.",
          "trap": "Não use a alínea para compra sigilosa da polícia civil.",
          "example": "Ração de contingente em operação de paz pode estar na alínea h. O rancho da delegacia, não.",
          "mnemonic": "Força militar. Não polícia civil."
        },
        {
          "tag": "j-k",
          "name": "Catador e arte",
          "hook": "Reconhecimento e certificação.",
          "literal": "Alínea j: coleta, processamento e comercialização de resíduos sólidos urbanos recicláveis ou reutilizáveis, em áreas com sistema de coleta seletiva de lixo, realizados por associações ou cooperativas formadas exclusivamente de pessoas físicas de baixa renda reconhecidas pelo poder público como catadores de materiais recicláveis, com o uso de equipamentos compatíveis com as normas técnicas, ambientais e de saúde pública. Alínea k: aquisição ou restauração de obras de arte e objetos históricos, de autenticidade certificada, desde que inerente às finalidades do órgão ou com elas compatível.",
          "context": "Exclusivamente, na alínea j. Certificada, na alínea k. As duas palavras não se trocam.",
          "exam": "A banca aceita empresa de limpeza urbana na alínea j.",
          "trap": "Não é atalho para contratar conhecido.",
          "example": "A cooperativa de catadores reconhecidos, na área com coleta seletiva, pode estar na alínea j. A empresa de coleta comum, não.",
          "mnemonic": "Exclusivamente baixa renda. Autenticidade certificada."
        },
        {
          "tag": "l-m",
          "name": "Prova e medicamento",
          "hook": "Citação sem abertura. Doença sem definição local.",
          "literal": "Alínea l: serviços especializados ou aquisição ou locação de equipamentos destinados ao rastreamento e à obtenção de provas previstas nos incisos II e V do caput do art. 3º da Lei nº 12.850, de 2 de agosto de 2013, quando houver necessidade justificada de manutenção de sigilo sobre a investigação. Esses incisos não foram transcritos. A alínea não autoriza compra sigilosa genérica nem descreve técnica. Alínea m: aquisição de medicamentos destinados exclusivamente ao tratamento de doenças raras definidas pelo Ministério da Saúde.",
          "context": "Necessidade justificada de sigilo é condição da alínea l, não um método. Exclusivamente, na alínea m.",
          "exam": "A banca abre a alínea l para qualquer equipamento da investigação.",
          "trap": "Não ensine a adquirir meio de rastreamento fora da hipótese.",
          "example": "Se a prova não estiver nos incisos citados, a alínea l não abre. O que esses incisos dizem se confere na Lei nº 12.850, não aqui.",
          "mnemonic": "Incisos fechados. Doença, o Ministério."
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Comandante da força",
      "source": "Alíneas g e h",
      "does": [
        "Autorizar a padronização logística",
        "Ratificar preço e escolha na operação de paz"
      ],
      "doesNot": [
        "Não é o delegado da PCPE",
        "Não alcança material de uso pessoal"
      ]
    },
    {
      "role": "Catador reconhecido",
      "source": "Alínea j",
      "does": [
        "Atuar em associação ou cooperativa exclusiva de baixa renda"
      ],
      "doesNot": [
        "Empresa comum não se apresenta como catador"
      ]
    },
    {
      "role": "Ministério da Saúde",
      "source": "Alínea m",
      "does": [
        "Definir a doença rara"
      ],
      "doesNot": [
        "A corporação não define a doença neste inciso"
      ]
    }
  ],
  "roleNote": "Sigilo da investigação não é cláusula geral de dispensa.",
  "rolePlate": "Cada alínea nomeia o seu sujeito.",
  "rolePlateSource": "Art. 75, IV, g a m",
  "summary": [
    {
      "item": "g",
      "rule": "Material das Forças Armadas, salvo uso pessoal e administrativo.",
      "clue": "Autorização do comandante."
    },
    {
      "item": "h",
      "rule": "Paz no exterior.",
      "clue": "Justifica preço e escolha. Ratifica o comandante."
    },
    {
      "item": "i",
      "rule": "Estada militar curta, fora da sede.",
      "clue": "Operação ou adestramento."
    },
    {
      "item": "j",
      "rule": "Catadores de baixa renda, exclusivos, reconhecidos.",
      "clue": "Coleta seletiva e equipamento compatível."
    },
    {
      "item": "k",
      "rule": "Arte ou objeto histórico certificado.",
      "clue": "Inerente ou compatível com a finalidade."
    },
    {
      "item": "l",
      "rule": "Prova dos incisos citados, com sigilo justificado.",
      "clue": "Incisos não abertos. Não é compra livre."
    },
    {
      "item": "m",
      "rule": "Medicamento exclusivo de doença rara.",
      "clue": "Quem define é o Ministério da Saúde."
    },
    {
      "item": "PCPE",
      "rule": "Não herda alínea militar.",
      "clue": "Analogia não nomeia comandante."
    }
  ],
  "compare": [
    {
      "item": "g",
      "ce": "Excetua uso pessoal.",
      "cf": "Não é qualquer material militar.",
      "effect": "restringe"
    },
    {
      "item": "j",
      "ce": "Exclusivamente baixa renda.",
      "cf": "Empresa não entra.",
      "effect": "restringe"
    },
    {
      "item": "l",
      "ce": "Cita dois incisos.",
      "cf": "Não os transcreve.",
      "effect": "restringe"
    },
    {
      "item": "m",
      "ce": "Ministério da Saúde.",
      "cf": "Não é lista local.",
      "effect": "separa"
    },
    {
      "item": "Polícia",
      "ce": "Não está nas alíneas g a i.",
      "cf": "Delegado não ratifica.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 87011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "A alínea g do art. 75, IV, da Lei nº 14.133/2021 autoriza a Polícia Civil a adquirir material de uso pessoal, e a alínea l dispensa licitação para qualquer equipamento sigiloso de investigação.",
      "correct": "E",
      "comentario": "ERRADO. A alínea g é de material das Forças Armadas e excetua o de uso pessoal e administrativo. A alínea l exige serviço ou equipamento destinado a prova prevista nos incisos citados da Lei nº 12.850, com necessidade justificada de sigilo. Não é compra sigilosa genérica, e esses incisos não foram abertos."
    },
    {
      "id": 87012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Assinale a alternativa correta sobre as alíneas j e m.",
      "correct": "b",
      "comentario": "A alínea j exige exclusividade de pessoas físicas de baixa renda reconhecidas como catadores. A alínea m reserva o medicamento a doença rara definida pelo Ministério da Saúde.",
      "options": [
        {
          "key": "a",
          "label": "qualquer empresa de limpeza urbana pode usar a alínea j."
        },
        {
          "key": "b",
          "label": "a alínea j é de associação ou cooperativa formada exclusivamente de catadores de baixa renda reconhecidos, e a alínea m depende de doença rara definida pelo Ministério da Saúde."
        },
        {
          "key": "c",
          "label": "a alínea m permite que a corporação defina a doença rara."
        },
        {
          "key": "d",
          "label": "a alínea j dispensa equipamento compatível com as normas de saúde pública."
        },
        {
          "key": "e",
          "label": "as duas alíneas são hipóteses de inexigibilidade."
        }
      ]
    },
    {
      "id": 87013,
      "banca": "Estilo FCC · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Na alínea h, a contratação",
      "correct": "a",
      "comentario": "Deverá ser justificada quanto ao preço e à escolha, e ratificada pelo comandante da força militar. Não é o delegado.",
      "options": [
        {
          "key": "a",
          "label": "deverá ser justificada quanto ao preço e à escolha do fornecedor ou executante e ratificada pelo comandante da força militar."
        },
        {
          "key": "b",
          "label": "dispensa justificativa de preço, porque se trata de operação de paz."
        },
        {
          "key": "c",
          "label": "é ratificada pelo delegado de polícia."
        },
        {
          "key": "d",
          "label": "alcança estada eventual de servidor civil."
        },
        {
          "key": "e",
          "label": "é permanente, sem ratificação."
        }
      ]
    }
  ],
  "palette": "fresh",
  "highlight": {
    "big": "Não é a PCPE",
    "small": "alínea militar não se empresta"
  },
  "heroLead": "Da alínea g à m, cada hipótese nomeia o sujeito. Força militar não vira polícia civil. Sigilo não vira dispensa livre.",
  "footerLine": "Alíneas g a m lidas. Incisos da Lei nº 12.850 não abertos.",
  "nextLine": "Diga continue para o Prompt 88: art. 75, incisos V, VI e VII. A emergência do inciso VIII não entra nesse anúncio.",
  "closingMnemonic": "Militar com comandante. Catador reconhecido. Arte certificada. Prova citada, não aberta. Doença, o Ministério.",
  "subject": "Direito Administrativo",
  "clocks": [],
  "rolesTitle": "Quem a norma nomeia",
  "rolesLead": "O nome do órgão não se empresta.",
  "compareTitle": "A trava",
  "compareLead": "Generalizar a hipótese é o erro.",
  "compareLeft": "Cabe",
  "compareRight": "Não cabe",
  "toc": [
    {
      "id": "ivgm",
      "num": "IV",
      "label": "Alíneas g a m"
    }
  ]
};
