import type { StudyModule } from "./study";

export const PROMPT129: StudyModule = {
  "short": "Windows",
  "eyebrow": "Prompt 129 · pedido 94",
  "title": "Windows",
  "subtitle": "Explorador, atalhos e arquivos",
  "description": "Pedido 94. O atalho do pedido foi corrigido: no Explorador, Ctrl+N não cria pasta. Atalho do Word não entra aqui.",
  "reading": "Windows 10 e Windows 11, comportamento padrão. Sem procedimento de invasão ou de ocultação.",
  "terms": [
    "Windows",
    "Explorador",
    "Ctrl+Shift+N",
    "Lixeira",
    "backup"
  ],
  "subject": "Noções de Informática",
  "context": [
    "Os Prompts 62 a 122 do app já estão ocupados. Este pedido foi gravado com número novo.",
    "Número que não bate com a lei segue o texto oficial, e a divergência é dita.",
    "Súmula só entra com enunciado confirmado."
  ],
  "importance": "A banca troca prazo, requisito e nome de instituto.",
  "distinctions": [
    "Ctrl+N no Explorador abre nova janela. Ctrl+Shift+N cria pasta.",
    "Ctrl+A no Explorador seleciona tudo. No Word em português, a tecla é outra.",
    "Extensão oculta não identifica o arquivo.",
    "Shift+Delete não envia à Lixeira.",
    "Backup no mesmo disco não protege contra falha desse disco."
  ],
  "organs": [
    {
      "sigla": "1",
      "nome": "O que é o Windows",
      "funcao": "A banca chama de Windows o que é aplicativo.",
      "base": "Pedido 94",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "yellow"
    },
    {
      "sigla": "2",
      "nome": "Explorador de Arquivos",
      "funcao": "Ctrl+N no Explorador não cria pasta.",
      "base": "Pedido 94",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "cyan"
    },
    {
      "sigla": "3",
      "nome": "Atalhos do Windows",
      "funcao": "A pegadinha do pedido está invertida: Ctrl+N não cria pasta.",
      "base": "Pedido 94",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "orange"
    },
    {
      "sigla": "4",
      "nome": "Configuração, conta e backup",
      "funcao": "Backup no mesmo disco não é proteção contra falha do disco.",
      "base": "Pedido 94",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "violet"
    },
    {
      "sigla": "5",
      "nome": "Permissão e atalho de arquivo",
      "funcao": "Oculto não é criptografado. Somente leitura não é permissão completa.",
      "base": "Pedido 94",
      "nao": "Não inventar prazo, pena ou atalho.",
      "tone": "emerald"
    }
  ],
  "swaps": [
    {
      "wrong": "Ctrl+N cria pasta.",
      "right": "Ctrl+N abre janela. Pasta: Ctrl+Shift+N."
    },
    {
      "wrong": "Ocultar extensão aumenta a segurança.",
      "right": "Ocultar extensão esconde o tipo real."
    },
    {
      "wrong": "Windows é o Word.",
      "right": "Windows é o sistema. Word é aplicativo."
    }
  ],
  "timeline": [
    {
      "when": "Pedido",
      "title": "94",
      "text": "Gravado como Prompt 129."
    },
    {
      "when": "Limite",
      "title": "Recorte",
      "text": "Windows 10 e Windows 11, comportamento padrão. Sem procedimento de invasão ou de ocultação."
    }
  ],
  "articles": [
    {
      "id": "p129-1",
      "num": "1",
      "kicker": "Pedido 94",
      "title": "O que é o Windows",
      "lead": "O que é o Windows",
      "plate": "O que é o Windows",
      "plateSource": "Pedido 94",
      "devices": [
        {
          "tag": "regra",
          "name": "O que é o Windows",
          "hook": "Sistema não é aplicativo.",
          "literal": "Windows é o sistema operacional. Gerencia hardware, arquivos, usuários e a execução de programas. Não é o Word, não é o navegador e não é a internet.\nVersões de prova: Windows 10 e Windows 11. A interface muda. Atalho de uma versão não se transfere à outra sem conferir.\nNo Windows 11, o menu Iniciar fica centralizado por padrão e pode ser alinhado à esquerda. Há Snap Layouts. A Cortana não é o botão padrão da barra, como chegou a ser no Windows 10. Não se descreva o Windows 11 com a tela antiga.\nConta de usuário limita o que a sessão pode alterar. Conta de administrador altera o sistema. Uso do cargo não autoriza conta de administrador em máquina da instituição.\nÁrea de trabalho, barra de tarefas, menu Iniciar, bandeja de notificação e Explorador de Arquivos são peças diferentes. Atalho da área de trabalho aponta para um arquivo. Não é o arquivo.",
          "context": "O que é o Windows",
          "exam": "A banca chama de Windows o que é aplicativo.",
          "trap": "Não descreva o Windows 11 como se a Cortana ainda fosse o padrão da barra.",
          "example": "Ícone na área de trabalho pode ser atalho. Apagar o atalho não apaga, por si, o arquivo de origem.",
          "mnemonic": "Sistema não é aplicativo.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p129-2",
      "num": "2",
      "kicker": "Pedido 94",
      "title": "Explorador de Arquivos",
      "lead": "Explorador de Arquivos",
      "plate": "Explorador de Arquivos",
      "plateSource": "Pedido 94",
      "devices": [
        {
          "tag": "regra",
          "name": "Explorador de Arquivos",
          "hook": "Extensão oculta engana o ícone.",
          "literal": "O Explorador mostra pastas e arquivos. Extensão indica o tipo: .docx, .xlsx, .pdf, .exe. Ocultar extensões conhecidas é opção do sistema. A prova cobra o risco: um arquivo pode parecer documento e ser programa, se a extensão real está oculta. Não se ensina a disfarçar extensão.\nBiblioteca reúne pastas. Não é, necessariamente, uma pasta única no disco.\nLixeira guarda o que foi excluído pelo caminho comum, até esvaziar, e se o arquivo não ultrapassou o limite que leva à exclusão direta. Shift+Delete exclui sem passar pela Lixeira, quando o sistema assim está configurado. É irreversível na prática do usuário comum. Não é técnica a ser usada para apagar rastro. É aviso de prova: o atalho não manda o arquivo para a Lixeira.\nCópia e movimentação: arrastar entre unidades diferentes copia. Arrastar na mesma unidade move. Ctrl força cópia. Shift força movimento. São comportamentos usuais do Explorador. Conferir se a versão os mantém.\nCaminho: disco, pasta, subpasta, arquivo. Endereço da rede, UNC, começa por duas barras. Não se invente caminho de servidor da polícia.",
          "context": "Explorador de Arquivos",
          "exam": "Ctrl+N no Explorador não cria pasta.",
          "trap": "Não ensine a ocultar extensão para enganar. O ponto de prova é reconhecer o risco.",
          "example": "Um arquivo 'relatorio.pdf.exe', com extensão oculta, pode mostrar só 'relatorio.pdf'. Por isso a extensão visível importa.",
          "mnemonic": "Extensão oculta engana o ícone.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p129-3",
      "num": "3",
      "kicker": "Pedido 94",
      "title": "Atalhos do Windows",
      "lead": "Atalhos do Windows",
      "plate": "Atalhos do Windows",
      "plateSource": "Pedido 94",
      "devices": [
        {
          "tag": "regra",
          "name": "Atalhos do Windows",
          "hook": "Ctrl+N é janela. Pasta é Ctrl+Shift+N.",
          "literal": "Atalhos do sistema e do Explorador, não os do Word. O Word está no Prompt 130, e a tecla muda com o idioma.\nCtrl+C copia. Ctrl+X recorta. Ctrl+V cola. Ctrl+Z desfaz. Ctrl+Y refaz, no Explorador e em vários aplicativos. Ctrl+A, no Explorador, seleciona tudo. No Word em português, Ctrl+A é outra função. Não se misture.\nF2 renomeia o item selecionado. Delete envia à Lixeira, no caminho comum. Shift+Delete não envia à Lixeira.\nCtrl+N, no Explorador, abre nova janela. Não cria pasta. O pedido tratava Ctrl+N como criação de pasta. Isso não confere. Pasta nova: Ctrl+Shift+N.\nWin+E abre o Explorador. Win+D mostra a área de trabalho. Win+L bloqueia a sessão. Win+R abre Executar. Win+I abre Configurações, no Windows 10 e no 11. Alt+Tab alterna janelas. Alt+F4 fecha a janela ativa. Ctrl+Shift+Esc abre o Gerenciador de Tarefas.\nWin+seta encaixa a janela. No Windows 11, Win+Z abre Snap Layouts.\nPrint Screen copia a tela para a área de transferência. Alt+Print Screen copia a janela ativa. Não se usa captura para levar dado funcional para fora da instituição.\nAtalho pode ser remapeado. A prova cobra o padrão.",
          "context": "Atalhos do Windows",
          "exam": "A pegadinha do pedido está invertida: Ctrl+N não cria pasta.",
          "trap": "Não use o atalho do Word no Explorador.",
          "example": "Para nova pasta no Explorador, Ctrl+Shift+N. Para nova janela, Ctrl+N.",
          "mnemonic": "Ctrl+N é janela. Pasta é Ctrl+Shift+N.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p129-4",
      "num": "4",
      "kicker": "Pedido 94",
      "title": "Configuração, conta e backup",
      "lead": "Configuração, conta e backup",
      "plate": "Configuração, conta e backup",
      "plateSource": "Pedido 94",
      "devices": [
        {
          "tag": "regra",
          "name": "Configuração, conta e backup",
          "hook": "Cópia em outro suporte. Atualização não é enfeite.",
          "literal": "Configurações, no Windows 10 e no 11, reúnem o que o Painel de Controle concentrava. Os dois convivem. Não se diga que o Painel de Controle desapareceu em toda instalação.\nWindows Update instala correção do fabricante. Adiar atualização de segurança deixa falha conhecida aberta. Não se descreve a falha nem como explorá-la.\nBackup é cópia para recuperar arquivo perdido ou danificado. Não é sincronização em tempo real, embora o OneDrive sincronize. Cópia no mesmo disco não protege contra falha desse disco.\nOneDrive é armazenamento em nuvem da Microsoft. Arquivo sob demanda pode aparecer no Explorador sem estar inteiro no disco. Não se afirme que todo ícone visível está gravado localmente.\nBitLocker, quando presente e ativo, cifra o disco. Não se ensina a contornar cifra. A prova cobra o nome e o efeito: sem a chave, o disco não se lê.\nFirewall do Windows filtra conexão segundo regra. Não se ensina a abrir porta. O nome das portas está no Prompt 131, só como identificação.\nConta Microsoft e conta local não são iguais. A conta Microsoft vincula serviços. A local fica no aparelho.",
          "context": "Configuração, conta e backup",
          "exam": "Backup no mesmo disco não é proteção contra falha do disco.",
          "trap": "Não ensine a desligar atualização de segurança.",
          "example": "Ícone de nuvem no Explorador pode ser arquivo ainda não baixado.",
          "mnemonic": "Cópia em outro suporte. Atualização não é enfeite.",
          "revoked": false
        }
      ]
    },
    {
      "id": "p129-5",
      "num": "5",
      "kicker": "Pedido 94",
      "title": "Permissão e atalho de arquivo",
      "lead": "Permissão e atalho de arquivo",
      "plate": "Permissão e atalho de arquivo",
      "plateSource": "Pedido 94",
      "devices": [
        {
          "tag": "regra",
          "name": "Permissão e atalho de arquivo",
          "hook": "Oculto não é proteção.",
          "literal": "Somente leitura impede alteração, não impede leitura. Oculto tira o arquivo da visão padrão, não o apaga e não o protege contra quem mostra itens ocultos.\nPermissão NTFS é outra camada: ler, gravar, modificar, controlar. Não se detalha como escalar permissão. O ponto de prova é não confundir atributo oculto com segurança.\nAtalho, arquivo .lnk, aponta para o alvo. Copiar o atalho para outro computador não leva o alvo, se o caminho não existe lá.\nExecutar como administrador eleva a sessão do programa. Não é o modo normal de abrir documento.\nExtensão .exe é programa. Abrir programa de origem desconhecida é risco. Não se descreve o que o programa faria.\nA lixeira da rede e a lixeira local não são a mesma. Arquivo excluído em pasta de rede pode não ir para a Lixeira do computador. Conferir o ambiente. Não se afirme recuperação universal.",
          "context": "Permissão e atalho de arquivo",
          "exam": "Oculto não é criptografado. Somente leitura não é permissão completa.",
          "trap": "Não ensine a obter controle total.",
          "example": "Arquivo oculto continua no disco. Quem habilita 'itens ocultos' o vê.",
          "mnemonic": "Oculto não é proteção.",
          "revoked": false
        }
      ]
    }
  ],
  "roles": [
    {
      "role": "Candidato",
      "source": "Prompt 129",
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
  "rolePlateSource": "Prompt 129",
  "summary": [
    {
      "item": "Ctrl+N",
      "rule": "No Explorador, nova janela.",
      "clue": "Pasta nova: Ctrl+Shift+N."
    },
    {
      "item": "Win+L",
      "rule": "Bloqueia a sessão.",
      "clue": "Win+E abre o Explorador."
    },
    {
      "item": "Extensão",
      "rule": "Ocultá-la esconde o tipo real.",
      "clue": "Ícone não basta."
    },
    {
      "item": "Lixeira",
      "rule": "Delete comum vai à Lixeira. Shift+Delete não vai.",
      "clue": "Não é técnica de rastro."
    },
    {
      "item": "Backup",
      "rule": "Cópia para recuperar, de preferência em outro suporte.",
      "clue": "Mesmo disco não protege o disco."
    }
  ],
  "compare": [
    {
      "item": "Ctrl+N",
      "ce": "Nova janela do Explorador.",
      "cf": "Ctrl+Shift+N cria pasta.",
      "effect": "separa"
    },
    {
      "item": "Delete",
      "ce": "Lixeira, no caminho comum.",
      "cf": "Shift+Delete não passa pela Lixeira.",
      "effect": "separa"
    },
    {
      "item": "Atalho",
      "ce": "Aponta para o alvo.",
      "cf": "O arquivo é o alvo.",
      "effect": "separa"
    }
  ],
  "questions": [
    {
      "id": 129011,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "No Explorador de Arquivos do Windows, Ctrl+N cria uma pasta nova. Ctrl+Shift+N abre apenas uma janela.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. A relação do pedido está invertida. Ctrl+N abre nova janela. Ctrl+Shift+N cria pasta."
    },
    {
      "id": 129012,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "No Windows, o atalho que bloqueia a sessão e o que abre o Explorador são, respectivamente,",
      "correct": "c",
      "options": [
        {
          "key": "a",
          "label": "Win+E e Win+L."
        },
        {
          "key": "b",
          "label": "Ctrl+L e Ctrl+E."
        },
        {
          "key": "c",
          "label": "Win+L e Win+E."
        },
        {
          "key": "d",
          "label": "Win+D e Win+R."
        },
        {
          "key": "e",
          "label": "Alt+F4 e Ctrl+N."
        }
      ],
      "comentario": "Questão original, não é prova real. Win+L bloqueia. Win+E abre o Explorador. Win+D mostra a área de trabalho. Win+R abre Executar. Alt+F4 fecha a janela."
    },
    {
      "id": 129013,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Ocultar as extensões de tipos de arquivo conhecidos elimina o risco de abrir um programa no lugar de um documento, porque o ícone passa a dizer o tipo real.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Ocultar a extensão aumenta o risco. O nome visível pode sugerir documento enquanto a extensão real é de programa."
    },
    {
      "id": 129014,
      "banca": "Estilo Cebraspe · Certo ou Errado",
      "tipo": "ce",
      "enunciado": "Shift+Delete, no Explorador, envia o arquivo selecionado para a Lixeira, de onde a restauração é sempre possível.",
      "correct": "E",
      "comentario": "Questão original, não é prova real. ERRADO. Delete, no caminho comum, envia à Lixeira. Shift+Delete exclui sem passar pela Lixeira. Não é ferramenta de apagar rastro. É diferença de prova."
    },
    {
      "id": 129015,
      "banca": "Estilo FGV · Múltipla escolha",
      "tipo": "multi",
      "enunciado": "Sobre backup e atalho, assinale o certo.",
      "correct": "d",
      "options": [
        {
          "key": "a",
          "label": "Cópia no mesmo disco protege contra falha desse disco."
        },
        {
          "key": "b",
          "label": "Apagar o atalho da área de trabalho apaga sempre o arquivo de origem."
        },
        {
          "key": "c",
          "label": "Arquivo somente leitura não pode ser lido."
        },
        {
          "key": "d",
          "label": "Cópia em outro suporte serve à recuperação, e apagar o atalho não apaga, por si, o alvo."
        },
        {
          "key": "e",
          "label": "Item oculto está criptografado."
        }
      ],
      "comentario": "Questão original, não é prova real. Backup útil fica em outro suporte. Atalho não é o arquivo. Somente leitura restringe alteração, não a leitura. Oculto não é cifra."
    }
  ],
  "toc": [
    {
      "id": "p129-1",
      "num": "1",
      "label": "O que é o Windows"
    },
    {
      "id": "p129-2",
      "num": "2",
      "label": "Explorador de Arquivos"
    },
    {
      "id": "p129-3",
      "num": "3",
      "label": "Atalhos do Windows"
    },
    {
      "id": "p129-4",
      "num": "4",
      "label": "Configuração, conta e backup"
    },
    {
      "id": "p129-5",
      "num": "5",
      "label": "Permissão e atalho de arquiv"
    }
  ],
  "clocks": [],
  "organKicker": "Recorte",
  "organTitle": "Windows",
  "contextTitle": "Como ler",
  "contextLead": "Primeiro o texto. Depois a regra que ele escreve.",
  "closing": "Conferir a fonte se houver atualização posterior à consulta de 20/10/2026.",
  "palette": "teal",
  "highlight": {
    "big": "5",
    "small": "blocos neste prompt"
  },
  "heroLead": "Pedido 94. O atalho do pedido foi corrigido: no Explorador, Ctrl+N não cria pasta. Atalho do Word não entra aqui.",
  "footerLine": "Prompt 129 · pedido 94.",
  "nextLine": "Prompt 130 · pedido 95 · Word e Excel, com o atalho do pedido corrigido.",
  "closingMnemonic": "Texto primeiro. Número divergente segue a lei. Lacuna não se completa.",
  "rolesTitle": "Limite",
  "rolesLead": "O que não foi lido não entra como se tivesse sido.",
  "compareTitle": "Não misture",
  "compareLead": "Instituto vizinho não empresta requisito.",
  "compareLeft": "Um",
  "compareRight": "Outro"
};
