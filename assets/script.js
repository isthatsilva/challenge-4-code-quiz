var timerEl = document.getElementById("timer");
var timeLeft = 15;
var timerID;
var titleEl = document.getElementById("title");
var quizEl = document.getElementById("quiz");
var viewHighScores = document.getElementById("viewScores");
var submitButton = document.getElementById("submit");
var backButton = document.getElementById("back");
var initialsForm = document.getElementById("initials");
var clearScoreButton = document.getElementById("clear");
var scoresField = document.getElementById("results");
var startButton = document.getElementById("start");
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");
var currentQuestion = 0;
var ulCreate = document.createElement("ul");

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
    questionEl.textContent = currQuestion.question;

    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[currentQuestion].title;
        var userChoices = questions[currentQuestion].choices;
        questionEl.textContent = userQuestion;
    }
}