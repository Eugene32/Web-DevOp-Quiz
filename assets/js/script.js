
var WindowforQuestions = document.getElementById("questionWindow");
var WindowforChoices = document.getElementById("choicesWindow");
var countdownTimer = document.getElementById("timeRemaining");
var WindowforResult = document.getElementById("resultWindow");
var startButton = document.getElementById("btn-start");
var chosenQuestion = {};

var QuestionList = [

    question1 = {
        question: "question 1",
        choice1: "choice 1",
        choice2: "choice 2",
        choice3: "choice 3",
        choice4: "choice 4",
        answer: "choice 1"
    },

    question2 = {
        question: "question 2",
        choice1: "choice 1",
        choice2: "choice 2",
        choice3: "choice 3",
        choice4: "choice 4",
        answer: "choice 2"
    },

    question3 = {
        question: "question 3",
        choice1: "choice 1",
        choice2: "choice 2",
        choice3: "choice 3",
        choice4: "choice 4",
        answer: "choice 3"
    },

    question4 = {
        question: "question 4",
        choice1: "choice 1",
        choice2: "choice 2",
        choice3: "choice 3",
        choice4: "choice 4",
        answer: "choice 4"
    },

    question5 = {
        question: "question 5",
        choice1: "choice 1",
        choice2: "choice 5",
        choice3: "choice 3",
        choice4: "choice 4",
        answer: "choice 5"
    },

    question6 = {
        question: "question 6",
        choice1: "choice 1",
        choice2: "choice 6",
        choice3: "choice 3",
        choice4: "choice 4",
        answer: "choice 6"
    },

    question7 = {
        question: "question 7",
        choice1: "choice 1",
        choice2: "choice 2",
        choice3: "choice 7",
        choice4: "choice 4",
        answer: "choice 7"
    },

    question8 = {
        question: "question 8",
        choice1: "choice 8",
        choice2: "choice 2",
        choice3: "choice 3",
        choice4: "choice 4",
        answer: "choice 8"
    },

    question9 = {
        question: "question 9",
        choice1: "choice 1",
        choice2: "choice 9",
        choice3: "choice 3",
        choice4: "choice 4",
        answer: "choice 9"
    },

    question10 = {
        question: "question 10",
        choice1: "choice 1",
        choice2: "choice 2",
        choice3: "choice 3",
        choice4: "choice 10",
        answer: "choice 10"
    }
]

document.getElementById("btn-start").addEventListener("click", function () {
    console.log("button is working");
    clearDisplay();
    startTimer();
    pickRandomQuestion();
    displayQuestion();
    displayChoices();
    checkAnswer();
    checkTimeRemaining();

    
});

function clearDisplay() {
    
    // Remove content in the middle of the screen
    WindowforQuestions.children[0].innerHTML = "";
    WindowforQuestions.children[2].innerHTML = "";
    WindowforQuestions.children[4].innerHTML = "";
    startButton.remove();

}

function startTimer(){
    console.log("Timer starts now.");
}

function pickRandomQuestion(){
    console.log("pickRandomQuestion");
    console.log(QuestionList.length);
    chosenQuestion = QuestionList[Math.floor(Math.random(QuestionList) * QuestionList.length)];
    console.log(chosenQuestion);
}

function displayQuestion(){
    console.log("displayQuestion");
}

function displayChoices() {

}

function checkAnswer() {

}


function checkTimeRemaining(){

}