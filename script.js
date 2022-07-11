var highscores = document.getElementById("highscores");
var counter = document.getElementById("clock");
var container = document.getElementById("container");
var question = document.getElementById("question");
var instructions = document.getElementById("instructions")
var answers = document.getElementById("answers");
var answerA = document.createElement("li");
var answerB = document.createElement("li");
var answerC = document.createElement("li");
var answerD = document.createElement("li");
var button = document.createElement("button");

var score = 0;
var time = 60;


// START
counter.textContent = time;
question.textContent = "Coding Quiz!";
instructions.textContent = "Answer the following question! For every incorrect answer time will be removed from the clock! At the end of the quiz type your inital in to save your highscore!";
button.textContent = "PLAY GAME!"
instructions.appendChild(button);


button.addEventListener("click", function(){
    question1();
    instructions.appendChild(answerA);
    instructions.appendChild(answerB);
    instructions.appendChild(answerC);
    instructions.appendChild(answerD);
    instructions.removeChild(button);
})


function question1(){
    timerStart();
    question.textContent = "What is not a JavaScript Data Type?"
    instructions.textContent = ""
    answerA.textContent = "String"
    answerB.textContent = "Boolean"
    answerC.textContent = "Element"
    answerD.textContent = "Undefined"
    console.log("Question 1")

    answerA.addEventListener("click", function(){
        time - 10;
        question2();
    })
    answerB.addEventListener("click", function(){
        time - 10;
        question2();
    })
    answerC.addEventListener("click", function(){
        score = score + 10;
        console.log("Correct")
        question2();
    })
    answerD.addEventListener("click", function(){
        time - 10;
        question2();
    })
    

}

function question2(){
    question.textContent = "What is the most used language in computer science?"
    answerA.textContent = "HTML"
    answerB.textContent = "Python"
    answerC.textContent = "JavaScript"
    answerD.textContent = "C#"

    answerA.addEventListener("click", function(){
        time - 10;
        question3();
    })
    answerB.addEventListener("click", function(){
        time - 10;
        question3();
    })
    answerC.addEventListener("click", function(){
        score = score + 10;
        question3();
    })
    answerD.addEventListener("click", function(){
        time - 10;
        question3();
    })
    
}

function question3(){
    question.textContent = "What is NOT a type of pop up boxes in JavaScript?"
    answerA.textContent = "Alert"
    answerB.textContent = "Confirm"
    answerC.textContent = "Ad"
    answerD.textContent = "Prompt"

   
    answerA.addEventListener("click", function(){
        time - 10;
        question4();
    })
    answerB.addEventListener("click", function(){
        time - 10;
        question4();
    })
    answerC.addEventListener("click", function(){
        score = score + 10;
        question4();
    })
    answerD.addEventListener("click", function(){
        time - 10;
        question4();
    })
}

function question4(){
    question.textContent = "What would be the result of 3+2+”7″?"
    answerA.textContent = "12"
    answerB.textContent = "35"
    answerC.textContent = "57"
    answerD.textContent = "327"

    answerA.addEventListener("click", function(){
        time - 10;
        gameOver();
    })
    answerB.addEventListener("click", function(){
        time - 10;
        gameOver();
    })
    answerC.addEventListener("click", function(){
        score = score + 10;
        gameOver();
    })
    answerD.addEventListener("click", function(){
        time - 10;
        gameOver();
    })
   
}

function gameOver(){

    question.textContent = "All done!";
    score = score + time;
    instructions.textContent = "Your final Score is " + score;
    instructions.appendChild(button);
    button.textContent = "Start over";
    clearInterval(timeInterval)
    button.addEventListener("click", function(){
        // reload page?
    })

}


function timerStart(){

    var timeInterval = setInterval(function (){
        if (time > 0){
            time --;
            clock.textContent = time; 
        }
        
        if (time === 0){
            alert ("YOU'VE FAILED!")
            clearInterval(timeInterval)
            score = 0;
            gameOver()
            time = 60;
        }
        
    }, 1000);
}


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
var startBtn = document.getElementById("startQuizBtn");

function quizStart() {
    timeRemaining = 90;
    timerStart();
    document.getElementById("startMenu").setAttribute("style", "display: none;")
    document.getElementById("questionSection").setAttribute("style", "display: block;")
    currentQuestion = 0;
    showQuestion();
}

function timerStart() {
    var newInterval = setInterval(function() {
        timeRemaining--;
        document.getElementById("counter").textContent = timeRemaining;

        if(timeRemaining <= 0 || currentQuestion >= questions.length){
            alert("Finished!")
            clearInterval(newInterval)
        }
    }, 1000)
}

function showQuestion(){
    var questionDiv = document.getElementById("questionSection");
    questionDiv.innerHTML=""

    var newQuestion = document.createElement("h1");
    newQuestion.textContent = questions[currentQuestion].question;

    var choiceOne = document.createElement("button")
    var choiceTwo = document.createElement("button")
    var choiceThree = document.createElement("button")
    var choiceFour = document.createElement("button")

    choiceOne.textContent = questions[currentQuestion].choices[0]
    choiceTwo.textContent = questions[currentQuestion].choices[1]
    choiceThree.textContent = questions[currentQuestion].choices[2]
    choiceFour.textContent = questions[currentQuestion].choices[3]

    questionDiv.appendChild(newQuestion)
    questionDiv.appendChild(choiceOne)
    questionDiv.appendChild(choiceTwo)
    questionDiv.appendChild(choiceThree)
    questionDiv.appendChild(choiceFour)


}

function checkAnswer(event) {
    console.log(event.target)
    if(event.target.textContent == questions[currentQuestion].correctAnswer) {
        console.log("Correct")
        score = score + 10;
    } else {
        console.log("Incorrect")
        timeRemaining = timeRemaining - 10;
    }

    currentQuestion++;
    if(currentQuestion < question.length){
        showQuestion()
    }
}

startBtn.addEventListener("click", quizStart())