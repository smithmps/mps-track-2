"use strict";

const restartBtn = document.getElementById('restart');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const trueBtn = document.getElementById('True');
const falseBtn = document.getElementById('False');
const questionText = document.getElementById('question-text');

let currentQuestion = 0;

let questions = [ 
    {   question: "Is the sky blue because it reflects the sea?",
        answers: [
            {option:"False", answer:true},
            {option:"True", answer:false}
        ]
    },

    {   question: "Which is better to achieve success?",
        answers: [
            {option:"Hard Work", answer:false},
            {option:"Smart Work", answer:true}
        ]
    },

    {   question: "Complete this phrase: Raining cats and ...",
        answers: [
            {option:"Snakes", answer:false},
            {option:"Dogs", answer:true}
        ]
    },

] 


function beginQuiz(){ 
  currentQuestion = 0;  
  questionText.innerHTML = questions[currentQuestion].question;
  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;  
    }
beginQuiz();



restartBtn.addEventListener('click', restart);
function restart(){
    currentQuestion = 0;
    nextBtn.classList.remove('hide');
    submitBtn.classList.remove('hide');
    trueBtn.classList.remove('hide');
    falseBtn.classList.remove('hide');
    beginQuiz();
}
restart();

nextBtn.addEventListener('click', next);
function next(){
    currentQuestion++;
    if(currentQuestion>=2){
        nextBtn.classList.add('hide');
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
}
(next);   


submitBtn.addEventListener('click', submit);
function submit(){
    nextBtn.classList.add('hide');
    submitBtn.classList.add('hide');
    trueBtn.classList.add('hide');
    falseBtn.classList.add('hide');
    innerHTML = "congratulations on submitting the quiz!"
}
submit();








