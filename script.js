var highscores = document.getElementById("highscores");
var counter = document.getElementById("clock");
var container = document.getElementById("container");
var question = document.getElementById("question");
var instructions = document.getElementById("instructions")
var answers = document.getElementById("answers");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var label = document.createElement("label");
var input = document.createElement("input");
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


// Why is this triggering?!
// document.getElementById("a").addEventListener("click", question1())

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
    console.log("Question 2")

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
        console.log("Correct")
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
    console.log("Question 3")

   
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
        console.log("Correct")
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
    console.log("Question 4")

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
        console.log("Correct")
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

    button.addEventListener("click", function(){
        // reload page?
    })

}


// Why does it only go once?
function timerStart(){

    var timeInterval = setInterval(function (){
        if (time > 0){
            time --;
            clock.textContent = time; 
        }
        
        if (time = 0){
            alert ("YOU'VE FAILED!")
            clearInterval(timeInterval)
            score = 0;
            gameOver()
            time = 60;
        }
        
    }, 1000);
}


