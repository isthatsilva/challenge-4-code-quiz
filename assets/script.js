var main_PageEl = document.getElementById("title-screen");
var quiz_CardEl = document.getElementById("question-card");
var quiz_QuestionEl = document.getElementById("question");
var answer_ListEl = document.getElementById("answer-choices");
var rightEl = document.getElementById("coreect");
var wrongEl = document.getElementById("incorrect");
var initials_PageEl = document.getElementById("initials-box");
var score_ResultsEl = document.getElementById("score-page");
var scoresEl = document.getElementById("core-list");
var btn_ScoresEl = document.querySelector("#btn-view-scores");
var btn_SartEl = document.querySelector("#start-quiz");
var back_BtnEl = document.querySelector("#back");
var clear_BtnEl = document.querySelector("#clear");


var timerEl = document.querySelector("#time-secs");
let timeSecond = 100;
timerEl.innerHTML = timeSecond;

const countDown = setInterval (()=> {
    timeSecond--;
    timerEl.innerHTML = timeSecond;
    if(timeSecond <= 0 || timeSecond < 1) {
        clearInterval(countDown);
    }
    if(gameOver) {
        clearInterval(countDown);
    }
},1000)

