
var WindowforQuestions = document.getElementById("questionWindow");
var WindowforChoices = document.getElementById("choicesWindow");
var countdownTimer = document.getElementById("timeRemaining");
var WindowforResult = document.getElementById("resultWindow");
var startButton = document.getElementById("btn-start");
var chosenQuestion = {};
var newButton = document.createElement("BUTTON");
var newButtonText;

var QuestionList = [

    question1 = {
        question: "HTML stands for what?",
        choice1: "A. Hyper-Toll Mocking Language",
        choice2: "B. Hyperberic Token Logrithm",
        choice3: "C. Hypothetical Markup Language",
        choice4: "D. Hypertext Markup Language",
        answer: "D. Hypertext Markup Language"
    },

    question2 = {
        question: "Which statement inserts an image?",
        choice1: "A. Img file = 'pic.jpg'",
        choice2: "B. Img src = pic.jpg",
        choice3: "C. Picture = pig.jpg",
        choice4: "D. img src = 'pic.jpg'",
        answer: "D. img src = 'pic.jpg'"
    },

    question3 = {
        question: "Which tag should you use to make a numbered list?",
        choice1: "A. li",
        choice2: "B. ul",
        choice3: "C. ol",
        choice4: "D. ls",
        answer: "C. ol"
    },

    question4 = {
        question: "What does CSS stand for?",
        choice1: "A. Cascading Style Sheets",
        choice2: "B. Colorful Style Sheets",
        choice3: "C. Computer Style Sheets",
        choice4: "D. Coding Syntax System",
        answer: "A. Cascading Style Sheets"
    },

    question5 = {
        question: "How do you remove the underline in a hyperlink display",
        choice1: "A. a {text-decoration: no_underline}",
        choice2: "B. a {text-decoration: none}",
        choice3: "C. a {text-underline: none}",
        choice4: "D. a {underline: none}",
        answer: "B. a {text-decoration: none}"
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
    chosenQuestion = QuestionList[Math.floor(Math.random(QuestionList) * QuestionList.length)];
    console.log(chosenQuestion);
}

function displayQuestion(){
    console.log("displayQuestion");
    WindowforQuestions.innerHTML = chosenQuestion.question;
    
}

function displayChoices() {

    for (var x= 1; x <= 4 ; x++){
        choice = "choice" + x;
        newButtonText  = chosenQuestion.choice;
        var button = document.createElement("button");
        button.innerHTML = choice;
        button.classList.add("btn-choices");
        WindowforChoices.appendChild(button);
        console.log(choice);
    }
 
}

function checkAnswer() {

}


function checkTimeRemaining(){

}