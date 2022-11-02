class Quiz {
  constructor() {
    this.questions = [
      {
        question:
          "Você costuma não prestar atenção em detalhes ou comete erros por descuido em trabalhos escolares, no trabalho ou durante outras atividade?",
        example:
          "Exemplo: negligencia ou deixa de passar detalhes, o trabalho é impreciso",
      },
      {
        question:
          "Você tem dificuldade de manter a atenção em tarefas ou atividades lúdicas?",
        example:
          "Exemplo: dificuldade em manter o foco durante aulas, conversas ou leituras prolongadas",
      },
      {
        question:
          "Você parece não escutar quando alguém te dirige a palavra pessoalmente?",
        example:
          "Exemplo: parece estar com a cabeça longe, mesmo na ausência de qualquer distração óbvia",
      },
      {
        question:
          "Você não segue orientações até o fim e não consegue terminar trabalhos escolares, tarefas ou deveres no local de trabalho?",
        example:
          "Exemplo: Começa as tarefas, mas rapidaente perde o foco e facilmente perde o rumo",
      },
      {
        question: "Você tem dificuldade em organizar tarefas e atividades?",
        example:
          "Exemplo: dificuldade em organizar tarefas sequencias, dificuldade em manter materiais e objetos pessoais em ordem, trabalho desogarnizado e desleixado, mau gerenciamento de tempo, dificuldade em cumprir prazos",
      },
      {
        question:
          "Você evita, não gosta ou reluta em se envolver em tarefas que exijam esforço mental prolongado?",
        example:
          "Exemplo: Trabalhos escolares ou lições de casa, preparo de relatórios, preenchimento de formulários e revisão de trabalhos longos.",
      },
      {
        question: "Você perde coisas necessárias para tarefas ou atividades?",
        example:
          "Exemplo: materias escolares, lapis, livros, instrumetos, carteira, chaves, documentos, óculos, celular",
      },
      {
        question:
          "Você é facilmente distraído por estímulos externos, ou mesmo pensamentos não relacionados?",
        example: "",
      },
      {
        question: "Você é esquecido em relação a atividades cotidianas?",
        example:
          "Exemplo: realizar tarefas, pagar contas, retornar ligações, manter horários agendados",
      },
    ];
    this.questionsHiper = [
      {
        question:
          "Com qual frequência você remexe ou batuca as mãos ou os pés ou se contorce na cadeira?",
        example: "",
      },
      {
        question:
          "Com que frequência você levanta da cadeira em situações em que se espera que permaneça sentado?",
        example:
          "Exemplo: sai do seu lugar em sala de aula, no escritório ou em outro local de trabalho ou em outras situações que exijam que se permaneça em um mesmo lugar",
      },
      {
        question:
          "Com que frequência você corre ou sobe nas coisas em situações em que isso é inapropriado?",
        example:
          "Exemplo: Em adolescentes ou adultos, pode se limitar a sensações de inquietude",
      },
      {
        question:
          "Com frequência é incapaz de brincar ou se envolver em atividades de lazer calmamente?",
        example: "",
      },
      {
        question:
          "Com frequência 'não para', agindo como se estivesse 'com o motor ligado'?",
        example:
          "Exemplo: não consegue ou se sente desconfortável em ficar parado por muito tempo, como em restaurantes, reuniões; outros podem ver o indivíduo como inquieto ou difícil de acompanhar",
      },
      {
        question: "Frequentemente você fala demais?",
        example: "",
      },
      {
        question:
          "Frequentemente deixa escapar uma resposta antes que a pergunta tenha sido concluída?",
        example:
          "Exemplo: termina frases dos outros, não consegue aguardar a vez de falar",
      },
      {
        question: "Você frequentemente tem dificuldade para esperar a sua vez?",
        example: "Exemplo: aguardar em uma fila",
      },
      {
        question: "Você Frequentemente interrompe ou se intromete?",
        example:
          "Exemplo: mete-se nas conversas, jogos ou atividades; pode começar a usar as coisas de outras pessoas sem pedir ou receber per-missão; para adolescentes e adultos, pode intrometer-se em ou assumir o controle sobre o que outros estão fazendo",
      },
    ];
    this.replys = [];
  }

  // function para iniciar o quiz
  startQuiz = (type) => {
    //inicializa a variavel que irá contar as questoes exibidas
    questionCounter = 0;

    if (type === "tda") {
      //copia a array do construtor da class Quiz
      //com as questoes disponiveis para a variavel availableQuestions
      availableQuestions = [...this.questions];
      return availableQuestions;
    } else if (type === "tdah") {
      availableQuestions = [...this.questionsHiper];
      return availableQuestions;
    }
  };

  //funcao para obter uma nova questao
  getNewQuestion = () => {
    if (questionCounter <= 8) {
      //obtem a questao atual
      currentQuestion = availableQuestions[questionCounter];
      //incrementa o contador
      questionCounter++;
      return currentQuestion;
    } else {
      //retorna a string FIM
      return "FIM";
    }
  };

  getResult = () => {
    const filterItems = this.replys.filter(
      (e) => e == "Sempre" || e == "Quase Sempre"
    );
    if (filterItems.length >= 5) {
      return true;
    } else {
      return false;
    }
  };
}

//armazena a questão atual
let currentQuestion = {};
//aceitando resposta
let acceptingAnswers = true;
//contador de questões
let questionCounter = 0;
//array de questoes disponiveis
let availableQuestions = [];