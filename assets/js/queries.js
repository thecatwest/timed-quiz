var question = document.getElementById("question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var timer = document.getElementById("time");
var hasBegun = false;
var startButton = document.getElementById("start-button");
var playerTime = 60;
var index = 0;
var playerAnswer = "";
var correctAnswer = "";
var score = "0";

// Questions and Answers
var quizQuestions = [
    {
        query: "What does HTML stand for?",
        choices: [
            "Hyper Text Makeup Language",
            "Hyper Type Markup Language",
            "Hyper Text Markup Language",
            "Hyper Test Makeup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        query: "What does CSS stand for?",
        choices: [
            "Cross Site Scripting",
            "Cascading Style Sheet",
            "Computer Software Services",
            "Computing and Software Systems"
        ],
        answer: "Cascading Style Sheet"
    },
    {
        query: "What tag is used to define a table or image notation?",
        choices: [
           "<code>",
            "<link>",
            "<embed>",
            "<caption>"
        ],
        answer: "<caption>"
    },
    {
        query: "What tag is used to define an unordered list item?",
        choices: [
            "<li>",
            "<s>",
            "<il>",
            "<ul>"
        ],
        answer: "<li>"
    },
    {
        query: "In JavaScript, what element is used to store and manipulate text, usually in multiples?",
        choices: [
            "Recorders",
            "Variables",
            "Arrays",
            "Strings"
        ],
        answer: "Arrays"
    },
    {
        query: "What is the format called that is used for storing and transporting data?",
        choices: [
            "Syntax",
            "JSON",
            "HTML",
            "Font"
        ],
        answer: "JSON"
    },
    {
        query: "What property is used to specify whether or not an element should appear as if it's on top of or above other content on the page?",
        choices: [
            "Float",
            "Top Level",
            "Jumper",
            "Foreground"
        ],
        answer: "Float"
    },
    {
        query: "What are the CSS properties that are used to add space around sections of content?",
        choices: [
            "Break",
            "Cleaner",
            "Padding",
            "Spacing"
        ],
        answer: "Padding"
    }
];

// function to begin timer and count down
function countdownTimer(){
    var timeRemaining = 60;
    var questionTimer = setInterval(function(){
        if(quizQuestions.length > 0 && timeRemaining > 0){
            timer.innerText  = timeRemaining;
            timeRemaining--;
        }
    }, 1000);
};

// generate question at random and pick correct answer
function newQuestion() {
    index = Math.floor(Math.random() * quizQuestions.length);
    question.innerText = "";
    question.innerText = quizQuestions[index].query;
    question.innerText = quizQuestions[index].answer; 
};

function newAnswer() {
    var quizAnswers = [0, 1, 2, 3];
    quizAnswers = quizAnswers.sort(() => Math.random() - 0.5);
    answer1.innerText = "";
    answer1.innerText = quizAnswers[index].answers[quizAnswers[0]];
    answer2.innerText = "";
    answer2.innerText = quizAnswers[index].answers[quizAnswers[1]];
    answer3.innerText = "";
    answer3.innerText = quizAnswers[index].answers[quizAnswers[2]];
    answer4.innerText = "";
    answer4.innerText = quizAnswers[index].answers[quizAnswers[3]];
};

// function to begin quiz
function beginQuiz() {
    hasBegun = true;
    // hide start button
    startButton.style.display = "none";

    // display answer options
    answer1.style.display = "compact";
    answer2.style.display = "compact";
    answer3.style.display = "compact";
    answer4.style.display = "compact";

    // begin timer countdown
    countdownTimer()

    // generate and display Q-A pairs
    newQuestion()
    newAnswer()
};

// check if correct answer was selected and adjust time
function isCorrect() {
    if (playerAnswer === correctAnswer) {
        timeRemaining = timeRemaining + 5;
    } else {
        timeRemaining = timeRemaining - 10;
    }
};

// check if answer is correct, remove question from quizQuestions array, and display next question
function gamePlay() {
    if(quizQuestions.length > 1) {
        isCorrect();
        quizQuestions.splice(index, 1);
        newQuestion();
        newAnswer();
    } else {
        isCorrect();
        clearInterval(questionTimer);
        score = timer.innerText;
        localStorage.setItem("score", score);
        gameOver();
    }
}

// function for end of game
function gameOver() {
    alert(`The game has ended. Your score is ${score}. Save your score to the High Scores board by entering your handle!`);
    window.location.replace('./high-scores.html');
};

// start button event listener
startButton.addEventListener("click", beginQuiz);

// answer button clicks
// capture click on answer and save the answer text to verify in isCorrect()
answer1.addEventListener("click", function() {
    playerAnswer = answer1.innerText
    gamePlay();
});

answer2.addEventListener("click", function() {
    playerAnswer = answer2.innerText
    gamePlay();
});

answer3.addEventListener("click", function() {
    playerAnswer = answer3.innerText
    gamePlay();
});

answer4.addEventListener("click", function() {
    playerAnswer = answer4.innerText
    gamePlay();
});