
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

let currentQuestion ={};
let acceptingAnswers = true;
let score = 0;
let questionCounter =0;
let availableQuestions =[];

let questions = [
    {
        question:"¿Cual de los siguientes pokemon no es de tipo dragon?",
        choice1:"<Charizard>",
        choice2:"<Dragonair>",
        choice3:"<Dratini>",
        answer: 1
},
{
    question:"¿Como Evoluciona Pikachu?",
    choice1:"<Con la piedra Trueno>",
    choice2:"<Con la piedra Rayo>",
    choice3:"<Llegando a nivel 26>",
    answer: 1
},
{
    question:"¿Como se llama el lider del Team Rocket?",
    choice1:"<Jessie>",
    choice2:"<Giovanni>",
    choice3:"<Meowth>",
    answer: 2
},
];

// constantes
const CORRECT_BONUS =10;
const MAX_QUESTIONS = 2;

starGame = ()=>{
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
questionCounter++;
 const questionIndex = Math.floor(Math.random()* availableQuestions.length);
 currentQuestion = availableQuestions[questionIndex];
 question.innerText = currentQuestion.question;

 choices.forEach(choice => {
     const number = choice.dataset['number'];
     choice.innerText = currentQuestion['choice' + number];
 })
};

starGame();
