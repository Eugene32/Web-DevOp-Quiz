
var WindowforQuestions = document.getElementById("questionWindow");
var WindowforChoices = document.getElementById("choicesWindow");

var WindowforResult = document.getElementById("resultWindow");
var startButton = document.getElementById("btn-start");
var chosenQuestion = {};

// var newButton = document.createElement("BUTTON");
// var newButtonText;

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
        choice2: "B. img src = pic.jpg",
        choice3: "C. Picture = pic.jpg",
        choice4: 'D. img src = "pic.jpg"',
        answer: 'D. img src = "pic.jpg"'
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
        question: "How do you remove the underline in a hyperlink display?",
        choice1: "A. a {text-decoration: no_underline}",
        choice2: "B. a {text-decoration: none}",
        choice3: "C. a {text-underline: none}",
        choice4: "D. a {underline: none}",
        answer: "B. a {text-decoration: none}"
    },

    question6 = {
        question: "Which Of The Dialog Box Display a Message And a Data Entry Field?",
        choice1: "A. Alert()",
        choice2: "B. Prompt()",
        choice3: "C. Confirm()",
        choice4: "D. Msg()",
        answer: "B. Prompt()"
    },

    question7 = {
        question: "Javascript has an extension of: ___________ ",
        choice1: "A. jscript",
        choice2: "B. jvspt",
        choice3: "C. scpt",
        choice4: "D. js",
        answer: "D. js"
    },

    question8 = {
        question: "What do you call a function inside an object?",
        choice1: "A. Link",
        choice2: "B. Element",
        choice3: "C. Method",
        choice4: "D. Key",
        answer: "C. Method"
    },

    question9 = {
        question: 'Which event occurs when the user clicks on an HTML element?',
        choice1: "A. onmouseclick",
        choice2: "B. onclick",
        choice3: "C. click",
        choice4: "D. clickdown",
        answer: "B. onclick"
    },

    question10 = {
        question: "Which place or portion in the HTML is the best to place the JavaScript",
        choice1: "A. head",
        choice2: "B. footer",
        choice3: "C. end of body",
        choice4: "D. start of body",
        answer: "C. end of body"
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
    
    // Remove content at the middle of the screen
    WindowforQuestions.children[0].innerHTML = "";
    WindowforQuestions.children[2].innerHTML = "";
    WindowforQuestions.children[4].innerHTML = "";
    startButton.remove();

}

var countdownTimer = document.getElementById("timeRemaining");
var timer;

function startTimer(){
    console.log("Timer starts now.");
    timer = 70;   
    var timeInterval = setInterval(function(){
        console.log(countdownTimer.innerHTML);
        if (timer > -1 ){
        countdownTimer.textContent = timer + " sec(s)";
        timer--;
        }
        else{
            clearInterval(timeInterval);
        }
    }, 1000);
}


function pickRandomQuestion(){
    console.log("pickRandomQuestion");
    chosenQuestion = QuestionList[Math.floor(Math.random(QuestionList) * QuestionList.length)];
    console.log(chosenQuestion);
}

function displayQuestion(){
    console.log("displayQuestion");
    WindowforQuestions.classList.add("questionText");
    WindowforQuestions.innerHTML = chosenQuestion.question;
    
}

function displayChoices() {

    for (var x= 1; x <= 4 ; x++){
        var button = document.createElement("button");
        button.innerHTML = chosenQuestion["choice" + x];
        button.classList.add("btn-choices");
        WindowforChoices.appendChild(button);
        
    }
 
}



// var selectedAnswer;
    
function checkAnswer() {
    console.log("Checking the answer");
    
WindowforChoices.addEventListener("click", function(event){
    var selectedButton = event.target
    if (selectedButton.matches(".btn-choices")){
        console.log("An answer had been selected");
        var selectedAnswer = selectedButton.innerHTML
        console.log(selectedAnswer);

        if (selectedAnswer != chosenQuestion.answer){
            // timerRemaining = timerRemaining - 10;
            console.log(chosenQuestion.answer);
            console.log("The answer is wrong timer will be deducted");
            timer = timer - 10;
            countdownTimer.textContent = timer + " sec(s)";
            if (timer < 0){
                timer = 0;
                countdownTimer.textContent = timer + " sec(s)";
            }
        }
        else{
            console.log("The answer is correct");

        }


    }

});
    
}



function checkTimeRemaining(){
    console.log("Check time remaining");


}