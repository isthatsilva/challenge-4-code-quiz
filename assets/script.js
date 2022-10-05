var timerEl = document.getElementById("timer");
var timeLeft = 15;
var timerID;
var titleEl = document.getElementById("title");
var quizEl = document.getElementById("quiz");
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");
var viewHighScores = document.getElementById("viewScores");
var submitButton = document.getElementById("submit");
var backButton = document.getElementById("back");
var initialsForm = document.getElementById("initials");
var clearScoreButton = document.getElementById("clear");
var scoresField = document.getElementById("results");
var startButton = document.getElementById("start");
var scores = JSON.parse(localStorage.getItem("scores")) || [];
var currentQuestion = 0;

var container = ["title", "quiz", "results", "highscores"];

startButton.addEventListener("click", startQuiz);

function timeSecond() {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0 || timeSecond < 1) {
        clearInterval(timeLeft);
    }
}

var questions = [
    {
        question: "What is the abbreviation for JavaScript?",
        answers: [
            { text: "JavaS", correct: false },
            { text: "JVS", correct: false },
            { text: "JS", correct: true },
            { text: "JScript", correct: false },
        ]
    },
    {
        question: "What is JavaScript used for?",
        answers: [
            { text: "To add styling", correct: false },
            { text: "To create content", correct: false },
            { text: "To add logic", correct: true },
        ]
    }
];

function startQuiz() {
    timerID = setInterval(timeSecond, 1000);
    titleEl.classList.add("hide");
    currentQuestion = 0;
    quizEl.classList.remove("hide");
    
    timeSecond();
    setNextQuestion();
    showQuestion();
};

function setNextQuestion() {
    resetState();
    showQuestion([currentQuestion]);
};

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach( answer => {
        var button = document.createElement("button")
        button.innertext = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectAnswer)
        answersEl.appendChild(button)
    })
};