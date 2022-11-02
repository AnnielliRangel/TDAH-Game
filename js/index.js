// instanciando classe quiz Quiz.js
const game = new Quiz();

//obtendo elementos da página game
const question = document.getElementById("question");
const ex = document.getElementById("example");
const choices = Array.from(document.getElementsByClassName("choice-container"));
const btnAvancar = document.getElementById("btn-next");
const alert = document.getElementById("alert");
const choiceClicked = document.getElementsByClassName("choice-clicked");
const divResultado = document.getElementById("resultado");
const divGame = document.getElementById("game");
const divBtnNext = document.getElementById("btnNext");
const pResultado = document.getElementById("p-resultado");
const home = document.getElementById("home");
const btnDesatencao = document.getElementById("btnDesatencao");
const btnHiperatividade = document.getElementById("btnHiperatividade");
const btnSobre = document.getElementById("btnSobre");
const btnVoltar = document.getElementById("divBtnVoltar");
const information = document.getElementById("information");
const btnRepetir = document.getElementById("btn-novo");

let newQuestion = {};

function iniciarQuiz(){
  home.classList.add("hidden");
  divGame.classList.remove("hidden");
  divBtnNext.classList.remove("hidden");
};

function exibePergunta(questao, exemplo){

  if(questao != undefined){
    question.innerText = questao;
    ex.innerText = exemplo;
  }

};

btnDesatencao.addEventListener("click", () => {
  
  //Inicia o quiz e exibe a primeira pergunta no html
  game.startQuiz("tda");
  newQuestion = game.getNewQuestion();
  iniciarQuiz();
  exibePergunta(newQuestion.question, newQuestion.example);
  
});

btnHiperatividade.addEventListener("click", () => {

  //Inicia o quiz e exibe a primeira pergunta no html
  game.startQuiz("tdah");
  newQuestion = game.getNewQuestion();
  iniciarQuiz();
  exibePergunta(newQuestion.question, newQuestion.example);

});

// evento onclick do botao avancar
btnAvancar.addEventListener("click", () => {
  if (choiceClicked.length) {
    game.replys.push(choiceClicked[0].children[1].innerHTML);
    choiceClicked[0].classList.remove("choice-clicked");

    newQuestion = game.getNewQuestion();

    if(newQuestion != undefined) {
      exibePergunta(newQuestion.question, newQuestion.example);
      alert.innerHTML = "";
    }

    if(newQuestion == "FIM"){
      divResultado.classList.remove("hidden");
      divGame.classList.add("hidden");
      divBtnNext.classList.add("hidden");

      if(game.getResult()){
        pResultado.innerHTML = "Pela avaliação das suas respostas, você manifesta características que indicam a necessidade de acompanhamento profissional";
      } else {
        pResultado.innerHTML = "Pela avaliação das suas respostas, NÃO há indicação imediata da necessidade de acompanhamento médico profissional.";
      }
    }
    
  } else {
    alert.innerHTML = "Você precisa selecionar uma resposta";
  }
});

// percorre todos as respostas a fim de verificar a reposta selecionada
choices.forEach((e) => {
  //evento click da resposta selecionada
  e.addEventListener("click", () => {
    //obtem a resposta selecionada
    const choiceClicked = document.getElementsByClassName("choice-clicked");
    //se houve outra resposta selecionada remove a classe choice-clicked
    if (choiceClicked.length) {
      choiceClicked[0].classList.remove("choice-clicked");
    }
    //atribui a classe choice-clicked ao novo elemento marcado
    e.classList.add("choice-clicked");
  });
});

btnSobre.addEventListener("click", () => {
  home.classList.add("hidden");
  information.classList.remove("hidden");
  btnVoltar.classList.remove("hidden");
});

btnVoltar.addEventListener("click", () => {
  home.classList.remove("hidden");
  information.classList.add("hidden");
  btnVoltar.classList.add("hidden");
});

btnRepetir.addEventListener("click", () => {
  home.classList.remove("hidden");
  divResultado.classList.add("hidden");
});