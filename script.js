const questions = [
    {
        question: "Who was the killer in the Halloween movies?",
        answers: [
            {text: "Jason Voorhees", correct: false},
            {text: "Michael Myres", correct: true},
            {text: "Pennywise", correct: false},
            {text: "Freddy Krueger", correct: false},
        ]
    },
    {
        question: "In the movie 'Mean Girls' who got hit by a bus?",
        answers: [
            {text: "Karen Smith", correct: false},
            {text: "Gretchen Wieners", correct: false},
            {text: "Regina George", correct: true},
            {text: "Candy Heron", correct: false},
        ]

    },
    {
        question: "Who plays Maui in Moana?",
        answers: [
            {text: "Dwayne Johnson", correct: true},
            {text: "Brad Pitt", correct: false},
            {text: "Will Smith", correct: false},
            {text: "Chris Hensworth", correct: false},
        ]
    },
    {
        question: "What year was the first Creed film released?",
        answers: [
            {text: "2016", correct: true},
            {text: "2018", correct: false},
            {text: "2015", correct: false},
            {text: "2012", correct: false},
        ]
    },
    {
        question: "In Friday 13th, what was Jason's most used weapon?",
        answers: [
            {text: "His hands", correct: false},
            {text: "The Vorhees dagger", correct: false},
            {text: "An Axe", correct: false},
            {text: "A Machete", correct: true},
        ]
    },
    {
        question: "In the Nun movie, what kills Valak?",
        answers: [
            {text: "Drowned in Holy Water", correct: false},
            {text: "Stabbed through the heart", correct: false},
            {text: "Blood of Christ spat on her", correct: true},
            {text: "Burnt to death", correct: false},
        ]
    },
    {
        question: "How did Ruby Roundhouse lose her first life in Jumanji?",
        answers: [
            {text: "Bitten by a snake", correct: true},
            {text: "Eaten by a hippo", correct: false},
            {text: "Shot", correct: false},
            {text: "Shoved off a cliff", correct: false},
        ]
    },
    {
        question: "Which movie was partially filmed in Wales?",
        answers: [
            {text: "Don't Breathe", correct: false},
            {text: "The Orphan", correct: false},
            {text: "World War Z", correct: true},
            {text: "Matilda", correct: false},
        ]
    },
    {
        question: "Who was the first villan Batman fought?",
        answers: [
            {text: "Dr Death", correct: true},
            {text: "The Joker", correct: false},
            {text: "Poison Ivy", correct: false},
            {text: "Harley Quinn", correct: false},
        ]
    },
    {
        question: "The first trap in the Saw movie was...",
        answers: [
            {text: "The reverse bear trap", correct: true},
            {text: "The rack", correct: false},
            {text: "The needle pit", correct: false},
            {text: "The bathtub", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let Score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);    
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;  /*must be back tick not single quotations*/
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
     showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
       handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();

