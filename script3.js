var questions = [
    {
        question: "What is NOT a JavaScript Data Type?",
        choices: ["String", "Boolean", " Element", "Undefined"],
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
var currentQuestion, timeRemaining;
var startBtn = document.getElementById("startQuizBtn")

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
            alert("you're done, son")
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

    var choiceOne = document.createElement("button")
    var choiceTwo = document.createElement("button")
    var choiceThree = document.createElement("button")
    var choiceFour = document.createElement("button")

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
}

function gameOver (){
    document.getElementById("startMenu").setAttribute("style", "display: block;")
}

function checkAnswer(event) {
    console.log(event.target)
    if(event.target.textContent == questions[currentQuestion].correctAnswer) {
        console.log("correct!")
        score = score + 10;
    } else {
        console.log("incorrect")
        timeRemaining = timeRemaining - 10
    }

    currentQuestion++;
    if(currentQuestion < questions.length) {
        showQuestion()
        clearInterval(newInterval)
    }

}

startBtn.addEventListener("click", quizStart)