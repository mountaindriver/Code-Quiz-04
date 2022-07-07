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

var score = 0;
var time = 60;


// START

counter.textContent = `Time remaining: ${time}`;
question.textContent = "Coding Quiz!";
instructions.textContent = "Answer the following question! For every incorrect answer time will be removed from the clock! At the end of the quiz type your inital in to save your highscore!";
a.textContent = "Start Quiz!";
b.textContent = "";
c.textContent = "";
d.textContent = "";

// Why is this triggering?!
document.getElementById("a").addEventListener("click", question1())

function question1(){
    timerStart();
    question.textContent = "What is not a JavaScript Data Type?"
    a.textContent = "String"
    b.textContent = "Boolean"
    c.textContent = "Element"
    d.textContent = "Undefined"
    console.log("Question 1")

    

}

function question2(){
    question.textContent = "What is the most used language in computer science?"
    a.textContent = "HTML"
    b.textContent = "Python"
    c.textContent = "JavaScript"
    d.textContent = "C#"
    console.log("Question 2")

    
}

function question3(){
    question.textContent = "What is NOT a type of pop up boxes in JavaScript?"
    a.textContent = "Alert"
    b.textContent = "Confirm"
    c.textContent = "Ad"
    d.textContent = "Prompt"
    console.log("Question 3")

   
}

function question4(){
    question.textContent = "What would be the result of 3+2+”7″?"
    a.textContent = "12"
    b.textContent = "35"
    c.textContent = "57"
    d.textContent = "327"
    console.log("Question 4")

   
}

function gameOver(){

    question.textContent = "All done!";
    instructions.textContent = "Your final Score is " + score;
    a.textContent = "Start";
    label.textContent = "Initials:";

}

function timerStart(){
    var timeInterval = setInterval(function (){
        time--;
        
        if (time = 0){
            alert ("YOU FAILED!")
            return
        }
        if (highScores() == true){
            clearInterval(timeInterval)
            time = 60;
        }
        
    }, 1000);
}


