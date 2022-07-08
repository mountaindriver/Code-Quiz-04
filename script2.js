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
var input = document.createElement("input");

var score = 0;
var time = 60;
var currentQuestion = 0

var question = [
    "What is not a JavaScript Data Type?",
    "What is the most used language in computer science?",
    "What is NOT a type of pop up boxes in JavaScript?",
    "What would be the result of 3+2+”7″?"]
var answerA = ["String", "HTML", "Aler", "15"]
var answerB = ["Boolean", "CSS", "Prompt", "35"]
var answerC = ["Element", "JavaScript", "Ad","57"]
var answerD = ["Boolean", "English", "Confirm", "327"]

var correctAnswer = ["Element", "JavaScript", "Ad","57"]

// START
counter.textContent = time;
// IDK why this doesn't show
question.textContent = "Coding Quiz!";
instructions.textContent = "Answer the following question! For every incorrect answer time will be removed from the clock! At the end of the quiz type your inital in to save your highscore!";
button.textContent = "PLAY GAME!"
instructions.appendChild(button);


button.addEventListener("click", function(){
    answers.appendChild(answerA);
    answers.appendChild(answerB);
    answers.appendChild(answerC);
    answers.appendChild(answerD);
    answers.removeChild(button);
    timerStart();
    newQuestion(question[currentQuestion], answerA[currentQuestion], answerB[currentQuestion], answerC[currentQuestion], answerD[currentQuestion])
})


function newQuestion (question, answerA, answerB, answerC, answerD){
    question.textContent = question
    instructions.textContent = ""
    answerA.textContent = answerA
    answerB.textContent = answerB
    answerC.textContent = answerC
    answerD.textContent = answerD

    currentQuestion++;

    if (currentQuestion === 4){
        gameOver();
    }
    newQuestion(question[currentQuestion], answerA[currentQuestion], answerB[currentQuestion], answerC[currentQuestion], answerD[currentQuestion])
}

answerA.addEventListener("click", function(event){
    console.log(event.target)
    console.log(event.target.textContent)
    console.log(correctAnswer)
    if (event.target.textContent === correctAnswer[currentQuestion]){
        score = score + 10;
    } else {
        time = time - 10;
    }

    // currentQuestion++;

})

answerB.addEventListener("click", function(){
    if (answerB.textContent === correctAnswer){
        score = score + 10;
    } else {
        time = time - 10;
    }
})

answerC.addEventListener("click", function(){
    if (answerC.textContent === correctAnswer){
        score = score + 10;
    } else {
        time = time - 10;
    }
})

answerD.addEventListener("click", function(){
    if (answerD.textContent === correctAnswer){
        score = score + 10;
    } else {
        time = time - 10;
    }
})

function gameOver(){
// Score
    score = score + time;
    instructions.textContent = "Your final Score is " + score;

// Time
    clearInterval(timeInterval);

// Display
    instructions.appendChild(button);
    instructions.appendChild(input);
    input.setAttribute("type", "text");
    input.setAttribute("id", "initals");

    answers.removeChild(answerA);
    answers.removeChild(answerB);
    answers.removeChild(answerC);
    answers.removeChild(answerD);


    question.textContent = "All done!";
    button.textContent = "Start over";
    
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

