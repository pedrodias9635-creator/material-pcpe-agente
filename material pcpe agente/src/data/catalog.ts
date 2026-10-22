export type Discipline = {
  id: string;
  name: string;
  note: string;
  modules: number[];
};

const span = (from: number, to: number) =>
  Array.from({ length: to - from + 1 }, (_, index) => from + index);

/**
 * Só as disciplinas do Edital nº 1 – PCPE, de 2/10/2026, cargo de Agente.
 * Improbidade, processo, licitação e os títulos do Código Penal são assuntos
 * dentro da disciplina, não cards da capa.
 */
export const DISCIPLINES: Discipline[] = [
  {
    id: "estadual",
    name: "Legislação Estadual",
    note: "Constituição de Pernambuco, arts. 101 a 105-B; Lei nº 6.425/1972; Lei nº 6.123/1968; LC nº 137/2008 e LC nº 317/2015.",
    modules: span(1, 16),
  },
  {
    id: "constitucional",
    name: "Noções de Direito Constitucional",
    note: "Princípios, aplicabilidade, direitos, organização, art. 37, Poderes, funções essenciais e defesa do Estado. Nacionalidade, partidos, direitos políticos, veto, suplente, quinto, STJ, Justiça Federal, TRF, precatórios, CNMP e as Justiças do Trabalho, Eleitoral e Militar da União abertos. Texto riscado não foi copiado.",
    modules: [...span(17, 33), 150, 186, 158, 159, 160, 161, 162, 199, 177, 151, 163, 164, 165, 196, 202, 187, 166, 188, 167, 205, 178, 168, 179, 189, 197, 198, 203, 207, 152, 206, 153, 169, 194, 195, 201],
  },
  {
    id: "administrativo",
    name: "Noções de Direito Administrativo",
    note: "Estado, ato, poderes, responsabilidade, serviços, organização, controle, improbidade, processo, licitações e contratos. Sanções, alteração, extinção, recebimento e a Lei nº 8.987, inclusive tarifa, cláusulas, encargos e reversão, foram abertos. O art. 79 da Lei nº 14.133 continua pausado.",
    modules: [
      ...span(57, 75),
      34, 35, 36, 37, 83,
      38, 39, 84,
      81, 82, ...span(40, 56), ...span(87, 95),
      175, 176, 181, 182, 190, 191, 192, 183, 193, 200, 184, 170,
      76, 85, 77, 78, 79, 80, 86,
    ],
  },
  {
    id: "penal",
    name: "Noções de Direito Penal",
    note: "Parte geral, crime e contravenção, crimes contra a pessoa, o patrimônio, a dignidade sexual e a administração pública, as leis especiais e as disposições constitucionais do art. 5º. O Estatuto da Juventude entrou pelo Edital nº 2. O art. 13 em diante da parte geral não foi inventado.",
    modules: [
      139, 149,
      ...span(140, 148),
      96, 97, 98,
      99, 100, 101, 102,
      ...span(103, 117),
      204,
      171,
    ],
  },
  {
    id: "processual",
    name: "Noções de Direito Processual Penal",
    note: "CPP e as leis processuais do edital já abertas, inclusive inquérito. Arts. 62 a 68, 70, 71, 83 a 87 e 90-A da Lei nº 9.099 abertos.",
    modules: [...span(118, 124), 180, 185],
  },
  {
    id: "portugues",
    name: "Língua Portuguesa",
    note: "Texto, gramática, significação, referenciação e correspondência oficial.",
    modules: [...span(125, 128), 210],
  },
  {
    id: "informatica",
    name: "Informática",
    note: "Windows, Microsoft 365, formato, redes e segurança. Sem procedimento de acesso.",
    modules: [129, 130, 131, 155, 209],
  },
  {
    id: "logica",
    name: "Raciocínio Lógico",
    note: "Conjuntos, medidas, proporções, equações, funções, contagem, lógica e argumentação.",
    modules: [132, 133, 134, 154, 172, 173],
  },
  {
    id: "contabilidade",
    name: "Contabilidade Geral",
    note: "Patrimônio, atos e fatos, lançamentos, balancete, balanço, resultado, aluguel, desconto, tributo, variação e NBC. Sem alíquota inventada.",
    modules: [135, 136, 156, 174, 208],
  },
  {
    id: "estatistica",
    name: "Estatística",
    note: "Descritiva, probabilidade, amostragem, assimetria e curtose.",
    modules: [137, 138, 157],
  },
];

export const STUDY_ORDER = DISCIPLINES.flatMap((item) => item.modules);
