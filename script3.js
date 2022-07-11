var questions = [
    {
        question: "What is NOT a JavaScript Data Type?",
        choices: ["String", "Boolean", "Element", "Undefined"],
        correctAnswer: "Element"
    },
    {
        question: "What is the most used language in computer science?",
        choices: ["HTML", "Python", "JavaScript", "C#"],
        correctAnswer: "JavaScript"
    },
    {
        question: "What is NOT a type of pop up boxes in JavaScript?",
        choices: ["Alert", "Confirm", "Ad", "Prompt"],
        correctAnswer: "Ad"
    },
    {
        question: "What would be the result of 3+2+”7″?",
        choices: ["12", "35", "57", "327"],
        correctAnswer: "57"
    }
]
var scoreInput = document.querySelector("#score");
var initialForm = document.querySelector("#initial-form");
var initialList = document.querySelector("#initial-list");
var highScoreCountSpan = document.getElementById("highScore-count");
var initialText = document.getElementById("initial-text")

var highScores = [];

var currentQuestion, timeRemaining;
var score = 0
var startBtn = document.getElementById("startQuizBtn")
var submit = document.getElementById("submit")


function quizStart() {
    timeRemaining = 90;
    timerStarts()
    document.getElementById("startMenu").setAttribute("style", "display: none;")
    document.getElementById("questionSection").setAttribute("style", "")
    currentQuestion=0;
    showQuestion()
}

function timerStarts () {
    var newInterval = setInterval(function() {
        timeRemaining--;
        document.getElementById("counter").textContent = timeRemaining;

        if(timeRemaining<=0 || currentQuestion > questions.length) {
            clearInterval(newInterval)
            gameOver();
        }
        if (currentQuestion > 3){
            clearInterval(newInterval)
            gameOver();
        }
    }, 1000)
}

function showQuestion() {
    var questionDiv = document.getElementById("questionSection");
    questionDiv.innerHTML= ""

    var newQuestion = document.createElement("h1")
    newQuestion.textContent = questions[currentQuestion].question;

    var choiceOne = document.createElement("li")
    var choiceTwo = document.createElement("li")
    var choiceThree = document.createElement("li")
    var choiceFour = document.createElement("li")

    choiceOne.textContent = questions[currentQuestion].choices[0]
    choiceTwo.textContent = questions[currentQuestion].choices[1]
    choiceThree.textContent = questions[currentQuestion].choices[2]
    choiceFour.textContent = questions[currentQuestion].choices[3]

    choiceOne.addEventListener("click", checkAnswer)
    choiceTwo.addEventListener("click", checkAnswer)
    choiceThree.addEventListener("click", checkAnswer)
    choiceFour.addEventListener("click", checkAnswer)

    questionDiv.appendChild(newQuestion)
    questionDiv.appendChild(choiceOne)
    questionDiv.appendChild(choiceTwo)
    questionDiv.appendChild(choiceThree) 
    questionDiv.appendChild(choiceFour)

    if (currentQuestion > 3){
        questionDiv.removeChild(choiceOne)
        questionDiv.removeChild(choiceTwo)
        questionDiv.removeChild(choiceThree)
        questionDiv.removeChild(choiceFour)
    }
}

function gameOver (){
   console.log("gameOver")
   document.getElementById("startMenu").setAttribute("style", "display: none;")
   document.getElementById("questionSection").setAttribute("style", "display: none;")
   document.getElementById("gameOver").setAttribute("style", "");
   
   if(score < 201){
    console.log("You lose")
    score = 0
   }else {
    score = score + timeRemaining;
    console.log("Passing Grade")
   }

   var scoreDisplay = document.getElementById("score");
   scoreDisplay.textContent = ("Score: " + score);
   
}

function checkAnswer(event) {
    console.log(event.target)
    if(event.target.textContent == questions[currentQuestion].correctAnswer) {
        console.log("correct!")
        score = score + 100;
    } else {
        console.log("incorrect")
        timeRemaining = timeRemaining - 25;
    }
    
    currentQuestion++;
    if(currentQuestion < questions.length) {
        showQuestion();
    }
}

function renderScores(){
   initialList.innerHTML = "";  
   highScoreCountSpan.textContent = highScores.length;

   for (var i = 0; i < highScores.length; i++){
    var highScore = highScores[i];

    var li = document.createElement("li");
    li.textContent = highScore;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Delete"

    li.appendChild(button);
    initialList.appendChild(li);
   }

}

function init(){
    var storedScores = JSON.parse(localStorage.getItem("highScores"));

    if (storedScores != null) {
        highScores = storedScores;
    }

    renderScores();
}

function storeScores(){
    localStorage.setItem("highScores", JSON.stringify(highScores))
}

initialForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    var highScoreText = initialText.value + ": " + score;

    if (initialText === ""){
        return;
    }

    highScores.push(highScoreText);
    initialText.value = "";

    storeScores();
    renderScores();
})

initialList.addEventListener("click", function(event){
    var element = event.target
    if (element.matches("button") === true){
        var index = element.parentElement.getAttribute("data-index");
        highScores.splice(index, 1);
        
        storeScores();
        renderScores();
    }
});
    
init();

startBtn.addEventListener("click", quizStart)
