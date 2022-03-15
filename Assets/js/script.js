


// Array created with questions, options and answers.
var question = [{
question: "Inside which HTML element do we put the JavaScript?",
options: ["<script>" , "<js>" , "<javascript>" , "<scripting>"],
correctAnswer: "<script>",
},

{
question : "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
options:["if(i<>5)" , "if(!=5)>" , "if i<>5" , "if i=!5 then"],
correctAnswer : "if(!=5)",
},

{
question : "Which operator is used to assign a value to a variable?",
options:[ "-", "x" , "=" , "*"], 
correctAnswer : "=",
},

{
question : "Is javaScript case-sensitive?",
options:["No" , "Yes" , "Not applicable" , "Both A and B"],
correctAnswer : "Yes",
},

{
question : "How do you declare a JavaScript variable?",
correctAnswer : "var carName;",
options:[ "v carName;" , "variable carName;" , "var carName;" , "var = carName;"]
}
];

// timer variable

// variable to store date from question array 
var shuffledQuestion = question;
var randomQuestion = ""
var quizTracker = 0;
var secondsLeft = 101;
var userAnswer = 0;

//below are the variable to initiate the quiz
var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("question-container");
var heading = document.getElementById("heading");
var rulesBox = document.getElementById("rules-box");
var timerCount = document.getElementById("timer-count");
var question = document.getElementById("question");
var answerButton = document.getElementById("answer-buttons");
var quizTimer = document.getElementById("quiz-timer");


// added click event listener to start button
startButton.addEventListener("click", startGame);



function startGame() {
    secondsLeft = 101;
    console.log("Started");
    startButton.classList.add("hide"); // after clicking the start button - hide it to start the quiz
    heading.classList.add("hide"); // hide the header
    rulesBox.classList.add("hide");// hide the rules for the quiz
    questionContainerElement.classList.remove("hide"); // question will pop up
    quizTimer.classList.remove("hide");
    setNextQuestion();
    startTimer();
// trigeer stat timer function
    
}

//function to set the first question 
function setNextQuestion() {
    var showQuestion = shuffledQuestion[quizTracker].question;
    console.log(showQuestion);
    question.textContent = showQuestion; 
    answerButton.innerHTML = "";
    for (i=0; i < shuffledQuestion[quizTracker].options.length; i++){
        var backhandButton = document.createElement("button");
        backhandButton.textContent = shuffledQuestion[quizTracker].options[i];
        backhandButton.onclick = checkAnswer;
        answerButton.append(backhandButton);
        
    }
}

function checkAnswer() {
    console.log("checkingAnswer");
    console.log(this.textContent);
    // conditions to check correct answer with if 
//    var userAns = 
  

//    if(userAns === correctAns){
//        return true;
//    } else {
//        return false;
//    }
    


    //quiz tracker goes up one by +
    // excute setNextQuestion 
}

//function will start timer for the quiz
function startTimer() {
    secondsLeft = secondsLeft - 1;
    if(secondsLeft < 101) {
        timerCount.innerHTML = secondsLeft;
    }
    if (secondsLeft < 1 ) {
        window.clearInterval(update);
    }
}
    update = setInterval("startTimer()", 1000);
    