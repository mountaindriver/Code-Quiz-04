var questions = [
    {
        question: "How are you?",
        choices: ["Good", "bad", "Happy", "Sad"],
        crcAns: "Good"
    },
    {
        question: "Where are you?",
        choices: ["Good", "bad", "Happy", "Sad"],
        crcAns: "bad"
    },
    {
        question: "When are you?",
        choices: ["Good", "bad", "Happy", "Sad"],
        crcAns: "Happy"
    },
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

        if(timeRemaining<=0 || currentQuestion >=questions.length) {
            alert("you're done, son")
            clearInterval(newInterval)
        }
    }, 1000)
}

function showQuestion() {
    var questionDiv = document.getElementById("questionSection");
    questionDiv.innerHTML= ""

    var newQuestion = document.createElement("h1")
    newQuestion.textContent = questions[currentQuestion].question;

// Change to for loop

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
    // questionDiv.appendChild(newBr)
    questionDiv.appendChild(choiceTwo)
    // questionDiv.appendChild(newBr)
    questionDiv.appendChild(choiceThree)
    // questionDiv.appendChild(newBr)
    questionDiv.appendChild(choiceFour)
}

function checkAnswer(event) {
    console.log(event.target)
    if(event.target.textContent == questions[currentQuestion].crcAns) {
        console.log("correct!")
    } else {
        console.log("incorrect")
        timeRemaining = timeRemaining - 10
    }

    currentQuestion++;
    if(currentQuestion < questions.length) {
        showQuestion()
    }
}

startBtn.addEventListener("click", quizStart)