var timerEl = document.getElementById("timer");
var timeLeft = 15;
var penalty = 5;
var timerID;
var titleEl = document.getElementById("title");
var quizEl = document.getElementById("quiz");
var viewHighScores = document.getElementById("viewScores");
var submitButton = document.getElementById("submit");
var backButton = document.getElementById("back");
var initialsForm = document.getElementById("initials");
var clearScoreButton = document.getElementById("clear");
var scoreResults = document.getElementById("results");
var scoreEl = document.getElementById("score");
var startButton = document.getElementById("start");
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");
var currentQuestion = 0;
var currQuestion;
var ulCreate = document.createElement("ul");
var score = 0;
var gameover;

startButton.addEventListener("click", startQuiz);

function timeSecond() {
    timerEl.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
        clearInterval(timer);
    } else {
        timeLeft--;
    }
}

var questions = [
    {
        question: "What is the abbreviation for JavaScript?",
        choices: ["JavaS", "JVS", "JS", "JScript"],
        answer: "JS"
    },
    {
        question: "What is JavaScript used for?",
        choices: ["To add styling", "To create content", "To add logic"],
        answer: "To add logic"
    },
];

function startQuiz() {
    timerID = setInterval(timeSecond, 1000);
    titleEl.classList.add("hide");
    currentQuestion = 0;
    quizEl.classList.remove("hide");
    
    timeSecond();
    questionCard();
};

function questionCard() {
    var currQuestion = questions[currentQuestion];
    questionEl.innerHTML = "";
    answersEl.innerHTML = "";
    questionEl.textContent = currQuestion.question;


    for (var i = 0; i < currQuestion.choices.length; i++) {
        var choice = currQuestion.choices[i];
        var choiceNode = document.createElement("li");
        choiceNode.textContent = choice;
        answersEl.appendChild(choiceNode);
        answersEl.addEventListener("click", (compare));
    }
};

function compare(event) {
    var selectedAnswer = event.target;
    if (selectedAnswer.matches("li")) {
        if (selectedAnswer.textContent === questions[currentQuestion].answer) {
            score = score + 50;
            currentQuestion++
        } else {
            timeLeft = timeLeft - penalty;
        }
    }
    if (currentQuestion >= questions.length ) {
        gameover = "true";
        showScore();
    } else {
        questionCard();
    }
}

function showScore() {
    quizEl.classList.add("hide");
    scoreResults.classList.remove("hide");
    scoreResults.classList.add("show");

    var scoreDisplay = document.createElement("p");
    scoreEl.innerText = ("You scored " + score + "!");
    scoreEl.appendChild(scoreDisplay);
}
