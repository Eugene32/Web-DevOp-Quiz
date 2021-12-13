var WindowforQuestions = document.getElementById("questionWindow");
var WindowforChoices = document.getElementById("choicesWindow");
var WindowforResult = document.getElementById("resultsWindow");
var WindowforHighScore = document.getElementById("highScoreWindow")
var startButton = document.getElementById("btn-start");
var chosenQuestion = {};
var timer;
var answeredCounter = 5;
var timeInterval;
var highScoreList = [];
var highScoreListInString = [];
var scoreListPointer;



// Event Listeners

document.getElementById('highScoreWindow').addEventListener('click', displayHighScore);
document.getElementById("btn-start").addEventListener("click", startGame);


// This is the main function

function startGame() {

    // Disable to display of high scores immediately.
    document.getElementById('highScoreWindow').removeEventListener('click', displayHighScore);
    answeredCounter = 0;
    timer = 40;
    clearAllDisplay();
    startTimer();
    refreshQuestions();
    checkAnswer();
}

// Pointer for the value of timer remaining
var countdownTimer = document.getElementById("timeRemaining");

// This is the timer function
function startTimer() {


    timeInterval = setInterval(function () {

        if (timer > 0) {
            timer--;
            countdownTimer.textContent = timer + " sec(s)";
        }
        else {
            clearInterval(timeInterval);
            enterHighScore();

        }
    }, 1000);
}

// Randomnly pick a question obj from the list
function pickRandomQuestion() {

    var tempChosenQuestion = QuestionList[Math.floor(Math.random(QuestionList) * QuestionList.length)];

    // This is to make sure that a question is not displayed twice in a row.
    while (tempChosenQuestion == chosenQuestion) {
        var tempChosenQuestion = QuestionList[Math.floor(Math.random(QuestionList) * QuestionList.length)];
    }

    chosenQuestion = tempChosenQuestion;

}

function displayQuestion() {

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
                    displayResult(selectedAnswer);
                    refreshQuestions();

                    // Executes when a wrong answer make the timer less than or equal to zero.
                    if (timer < 0) {

                        timer = 0;
                        countdownTimer.textContent = timer + " sec(s)";
                        alert("Your score is 0.")
                        displayOptions();
                        // Enable high score display evenListener
                        document.getElementById('highScoreWindow').addEventListener('click', displayHighScore);

                    }

                }
                // If the answer is correct
                else {
                    displayResult(selectedAnswer);
                    refreshQuestions();
                }
            }
            else {

                clearInterval(timeInterval);
                enterHighScore();

            }

        }


    });

}


function displayResult(selectedAnswer) {

    console.log(selectedAnswer);
    if (selectedAnswer != chosenQuestion.answer) {
        WindowforResult.innerHTML = 'The answer is INCORRECT!';
        WindowforResult.style.color = 'red';
        console.log("Display:  The answer is incorrect");
    }
    else {
        WindowforResult.innerHTML = 'CORRECT!';
        WindowforResult.style.color = 'green';
        console.log("Display:  The answer is correct");
    }
    setTimeout(deleteResult, 1000);
}


function enterHighScore() {
    clearAllDisplay();
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

        //Sorting the high scores from highest to lowest
        highScoreList.sort((a, b) => {return b.Score - a.Score;});

        // Saving a string file into the local storage
        localStorage.setItem("list", JSON.stringify(highScoreList));
        displayHighScore();
    }
    else {
        // Prompt as the input is blank
        alert("Please enter your initials!");
    }
}


function displayHighScore() {
    clearAllDisplay();
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
        WindowforChoices.style.left = "37.5%";
        WindowforChoices.style.width = "50%";

        WindowforChoices.appendChild(listSpan);
    }
    displayOptions()
}

function displayOptions() {

    // Displays a title - not a sematic element of header type
    WindowforQuestions.innerHTML = "HIGH SCORES";
    WindowforQuestions.style.fontSize = '2em';

    // Creates a button for the game RESTART button
    var btn = document.createElement("button");
    WindowforResult.appendChild(btn);
    btn.setAttribute("id", "btn-start");
    btn.setAttribute("class", "btn-start");
    btn.innerHTML = "RESTART";
    var restartButton = document.getElementById("btn-start");
    document.getElementById("btn-start").addEventListener("click", restartGame);

    // Creates a button to clear high scores record.
    var clearBtn = document.createElement("button");
    WindowforResult.appendChild(clearBtn);
    clearBtn.setAttribute("id", "btn-clearHighScore");
    clearBtn.setAttribute("class", "btn-start");
    clearBtn.innerHTML = "CLEAR HIGHSCORES";
    var clearButton = document.getElementById("btn-clearHighScore");
    document.getElementById("btn-clearHighScore").addEventListener('click', clearHighScores);

}

function clearHighScores() {
    localStorage.clear();
    displayHighScore()

}

// This reloads the page
function restartGame() {
    window.location.reload()
}

// Display the first and succeeding questions
function refreshQuestions() {
    clearForNextQuestion();
    pickRandomQuestion();
    displayQuestion();
    displayChoices();
}

// Functions to Delete CONTENTS OR DISPLAY - Does not delete the elements.

function clearAllDisplay() {

    clearForNextQuestion()
    while (WindowforResult.firstChild) {
        WindowforResult.removeChild(WindowforResult.firstChild);
    }
}

function clearForNextQuestion() {
    while (WindowforQuestions.firstChild) {
        WindowforQuestions.removeChild(WindowforQuestions.firstChild);
    }
    while (WindowforChoices.firstChild) {
        WindowforChoices.removeChild(WindowforChoices.firstChild);
    }

}

function deleteResult() {
    while (WindowforResult.firstChild) {
        WindowforResult.removeChild(WindowforResult.firstChild);
    }
}
