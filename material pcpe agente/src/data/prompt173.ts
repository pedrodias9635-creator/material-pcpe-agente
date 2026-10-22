import type { StudyModule } from "./study";

export const PROMPT173: StudyModule = {
  "short": "Lógica de argumentação",
  "eyebrow": "Prompt 173 · lacuna do edital",
  "title": "Lógica de argumentação",
  "subtitle": "analogia, inferência e dedução",
  "description": "O item 10 pede analogias, inferências, deduções e conclusões. O Prompt 134 abriu conectivos e quantificadores. Este separa o tipo de argumento. Analogia não é dedução.",
  "reading": "Lógica de argumentação de prova. Sem tabela nova.",
  "terms": [
    "analogia",
    "dedução",
    "indução",
    "inferência"
  ],
  "subject": "Raciocínio Lógico",
  "context": [
    "O texto abaixo é o da compilação oficial já conferida. Redação anterior riscada não foi copiada.",
    "Artigo de mesmo número no ADCT não é este texto.",
    "O que o artigo não escreve não se completa de memória."
  ],
  "importance": "A banca troca o artigo vizinho, o prazo e o nome do instituto.",
  "distinctions": [
    "Analogia compara. Não garante como a dedução garante.",
    "Forma válida com premissa falsa não torna a premissa verdadeira.",
    "Indução não garante a conclusão.",
    "Afirmar o consequente continua inválido."
  ],
  "organs": [
    {
      "sigla": "arg",
      "nome": "Tipos de argumento",
      "funcao": "A banca chama analogia de dedução.",
      "base": "Edital · argumentação",
      "nao": "Premissa falsa não fica verdadeira porque a forma é válida.",
      "tone": "yellow"
    }
  ],
  "swaps": [
    {
      "wrong": "Conserta premissa falsa.",
      "right": "É da forma, não do conteúdo."
    }
  ],
  "timeline": [
    {
      "when": "Fonte",
      "title": "Compilação conferida",
      "text": "Lógica de argumentação de prova. Sem tabela nova."
    },
    {
      "when": "Limite",
      "title": "Sem invenção",
      "text": "Inciso não transcrito não foi inventado."
    }
  ],
  "articles": [
    {
      "id": "p173-arg",
      "num": "arg",
      "kicker": "Edital · argumentação",
      "title": "Tipos de argumento",
      "lead": "Tipos de argumento",
      "plate": "Tipos de argumento",
      "plateSource": "Edital · argumentação",
      "devices": [
        {
          "tag": "arg",
          "name": "Art. arg",
          "hook": "Analogia compara. Dedução transmite.",
          "literal": "Analogia compara relações. Não prova a conclusão como a dedução prova. Dedução válida transmite a verdade das premissas à conclusão. Se a premissa é falsa, a forma válida não salva o conteúdo. Indução generaliza casos. Não garante a conclusão. Inferência é a passagem. Pode ser válida ou inválida. Afirmar o consequente é inválido. Modus ponens, já lido no Prompt 134, continua válido. Não se reabre a tabela-verdade.",
          "context": "A banca chama analogia de dedução.",
          "exam": "A banca chama analogia de dedução.",
          "trap": "Premissa falsa não fica verdadeira porque a forma é válida.",
          "example": "Sem exemplo de crime. O exemplo é de forma.",
          "mnemonic": "Analogia compara. Dedução transmite.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 173",
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
  "rolePlateSource": "Prompt 173",
  "summary": [
    {
      "item": "Analogia",
      "rule": "Compara.",
      "clue": "Não é dedução."
    },
    {
      "item": "Indução",
      "rule": "Não garante.",
      "clue": "Não é modus ponens."
    }
  ],
  "compare": [
    {
      "item": "Validade",
      "ce": "Conserta premissa falsa.",
      "cf": "É da forma, não do conteúdo.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 173011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Um argumento de forma válida, com premissa falsa, torna essa premissa verdadeira.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. A validade é da forma. Não corrige premissa falsa."
    },
    {
      "id": 173012,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Analogia e dedução são o mesmo tipo de argumento.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Analogia compara relações. Dedução transmite das premissas à conclusão, se a forma for válida."
    },
    {
      "id": 173013,
      "banca": "Estilo Cebraspe · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "A indução:",
      "correct": "c",
      "options": [
        {
          "key": "a",
          "label": "Garante a conclusão como o modus ponens."
        },
        {
          "key": "b",
          "label": "É a negação da condicional."
        },
        {
          "key": "c",
          "label": "Generaliza casos e não garante a conclusão."
        },
        {
          "key": "d",
          "label": "É sempre inválida por forma, como afirmar o consequente."
        },
        {
          "key": "e",
          "label": "Substitui a tabela-verdade."
        }
      ],
      "comentario": "Questão original, não é prova real. A alternativa c é a indução. A d descreve outro defeito."
    }
  ],
  "toc": [
    {
      "id": "p173-arg",
      "num": "arg",
      "label": "Tipos de argumento"
    }
  ],
  "clocks": [],
  "organKicker": "Recorte",
  "organTitle": "Lógica de argumentação",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a troca que a banca faz.",
  "closing": "Conferir a fonte se houver emenda posterior à compilação consultada em 21/10/2026.",
  "palette": "teal",
  "highlight": {
    "big": "1",
    "small": "artigos neste assunto"
  },
  "heroLead": "O item 10 pede analogias, inferências, deduções e conclusões. O Prompt 134 abriu conectivos e quantificadores. Este separa o tipo de argumento. Analogia não é dedução.",
  "nextLine": "O assunto seguinte continua na mesma disciplina.",
  "closingMnemonic": "Analogia compara. Não garante como a dedução garante.",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "O que a banca troca",
  "compareLead": "A coluna da esquerda é a armadilha. A da direita é o texto.",
  "compareLeft": "Armadilha",
  "compareRight": "Texto"
};
