var WindowforQuestions = document.getElementById("questionWindow");
var WindowforChoices = document.getElementById("choicesWindow");
var WindowforResult = document.getElementById("resultsWindow");
var startButton = document.getElementById("btn-start");
var chosenQuestion = {};
var timer;
var answeredCounter = 5;
var timeInterval;
var highScoreList = [];
var highScoreListInString = [];
var scoreListPointer;


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

document.getElementById("btn-start").addEventListener("click", startGame);

function startGame() {
    answeredCounter = 0;
    timer = 2;
    startTimer();
    document.getElementById("btn-start").removeEventListener("click", startGame);
    refreshQuestions();
    console.log("Finished refresh questions");
    checkAnswer();
    console.log("Finished checking the answer questions");
    //checkTimeRemaining();
    console.log("Finished checking the time remaining");
}


var countdownTimer = document.getElementById("timeRemaining");


function startTimer() {
    console.log("Timer starts now.");

    timeInterval = setInterval(function () {
        console.log(countdownTimer.innerHTML);
        if (timer > 0) {
            timer--;
            countdownTimer.textContent = timer + " sec(s)";
        }
        else {
            clearInterval(timeInterval);
            enterHighScore();
            // displayOptions();
        }
    }, 1000);
}


function pickRandomQuestion() {
    console.log("pickRandomQuestion");
    chosenQuestion = QuestionList[Math.floor(Math.random(QuestionList) * QuestionList.length)];
    console.log(chosenQuestion);
}

function displayQuestion() {
    console.log("displayQuestion");
    WindowforQuestions.classList.add("questionText");
    WindowforQuestions.innerHTML = chosenQuestion.question;

}

function displayChoices() {

    for (var x = 1; x <= 4; x++) {
        var button = document.createElement("button");
        button.innerHTML = chosenQuestion["choice" + x];
        button.classList.add("btn-choices");
        WindowforChoices.appendChild(button);

    }

}


function checkAnswer() {

    WindowforChoices.addEventListener("click", function (event) {
        var selectedButton = event.target
        if (selectedButton.matches(".btn-choices")) {
            event.preventDefault();
            var selectedAnswer = selectedButton.innerHTML
            answeredCounter++;
            if (answeredCounter < 5) {
                // If the answer is wrong.
                if (selectedAnswer != chosenQuestion.answer) {
                    timer = timer - 10;

                    countdownTimer.textContent = timer + " sec(s)";
                    refreshQuestions();

                    if (timer < 0) {

                        timer = 0;
                        countdownTimer.textContent = timer + " sec(s)";
                        alert("Your score is 0.")
                        displayOptions();

                    }

                }
                // If the answer is correct
                else {

                    console.log("The answer is correct");
                    refreshQuestions();
                }
            }
            else {
                alert("5 questions answered.");
                clearInterval(timeInterval);
                enterHighScore();
                // displayOptions();
            }

        }


    });

}


function enterHighScore() {
    clearDisplay();
    WindowforQuestions.innerHTML = "All done!!!";

    WindowforChoices.innerHTML = "Your score is:  " + timer;
    WindowforChoices.classList.add("choicesWindow-Saving");


    WindowforResult.setAttribute("style", "flex-direction: row");
    WindowforResult.classList.add("choicesWindow-Saving");

    var lblInputInitials = document.createElement("label");
    lblInputInitials.setAttribute("id", "input-label");
    //lblInputInitials.setAttribute("sytle", "padding: 10px");
    lblInputInitials.innerHTML = "Enter initials: "
    lblInputInitials.setAttribute('style', 'margin-left: 10px margin-right: 10px');
    WindowforResult.appendChild(lblInputInitials);

    var inputInitials = document.createElement("input");
    inputInitials.setAttribute("id", "initialInput");
    inputInitials.setAttribute("for", "initialInput")
    inputInitials.setAttribute('type', 'text');
    inputInitials.setAttribute('value', '');
    inputInitials.setAttribute('style', 'margin-left: 10px margin-right: 10px');
    WindowforResult.appendChild(inputInitials);



    var submitButton = document.createElement("input");
    submitButton.setAttribute("id", "submit-btn");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Submit");
    submitButton.setAttribute('style', 'margin-left: 10px margin-right: 10px');
    WindowforResult.appendChild(submitButton);

    var subInitBtn = document.getElementById("submit-btn");
    document.getElementById("submit-btn").addEventListener("click", saveScore);

}

function saveScore() {
    var enteredInit = (document.getElementById("initialInput").value).toUpperCase();

    var objScore = {
        Init: enteredInit,
        Score: timer
    };

    if (enteredInit) {
        var tempStringList = localStorage.getItem("list");
        if (tempStringList) {
            highScoreList = JSON.parse(tempStringList);
        }
        highScoreList.push(objScore);
        localStorage.setItem("list", JSON.stringify(highScoreList));
        displayHighScore();
    }
    else {
        alert("Please enter your initials!");
    }
}
function displayHighScore() {
    clearDisplay();
    var tempStringList = localStorage.getItem("list");
    if (tempStringList) {
        highScoreList = JSON.parse(tempStringList);
    }
    WindowforQuestions.innerHTML = "HIGH SCORES";


    for (x = 0; x < highScoreList.length; x++) {

        var listSpan = document.createElement("span");
        listSpan.setAttribute("style", "padding: 5px; width: 50%; margin: 2px");
        listSpan.style.backgroundColor = "cornflowerblue";
        listSpan.style.borderRadius = "5px";
        listSpan.innerHTML = x + 1 + ". " + highScoreList[x].Init + " - " + highScoreList[x].Score;
        WindowforChoices.style.textAlign = "left";
        WindowforChoices.style.position = "relative";
        WindowforChoices.style.left = "40%";
        WindowforChoices.style.width = "49%";

        WindowforChoices.appendChild(listSpan);
    }

}

function displayOptions() {
    //if (WindowforResult.childElementCount == 0) {
    clearDisplay();
    WindowforQuestions.innerHTML = "HIGH SCORES";
    var startButton = document.createElement("button");
    WindowforResult.appendChild(startButton);
    startButton.setAttribute("id", "btn-start");
    startButton.setAttribute("class", "btn-start");
    startButton.innerHTML = "RESTART";
    var restartButton = document.getElementById("btn-start");
    document.getElementById("btn-start").addEventListener("click", restartGame);

    var startButton = document.createElement("button");
    WindowforResult.appendChild(startButton);
    startButton.setAttribute("id", "btn-highscore");
    startButton.setAttribute("class", "btn-start");
    startButton.innerHTML = "HIGHSCORES";
    var restartButton = document.getElementById("btn-start");


}
//}
function restartGame() {
    window.location.reload()
}


function refreshQuestions() {
    clearDisplay();
    pickRandomQuestion();
    displayQuestion();
    displayChoices();
}

function clearDisplay() {
    while (WindowforQuestions.firstChild) {
        WindowforQuestions.removeChild(WindowforQuestions.firstChild);
    }
    while (WindowforChoices.firstChild) {
        WindowforChoices.removeChild(WindowforChoices.firstChild);
    }
    while (WindowforResult.firstChild) {
        WindowforResult.removeChild(WindowforResult.firstChild);
    }
}
