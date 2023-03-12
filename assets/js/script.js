

var startQuizBtn = document.getElementById("startBtn");
var timerElement = document.getElementById("timerEl");
var bigText = document.getElementById("bigText");
var mainMiddleContent = document.getElementById("mainMiddleContent");
var labelMessage = document.getElementById("labelMessage");
var mainVar = document.getElementsByTagName("main");



var timer;
var timerCount;
//this is the variable that will be used to determine if the quiz is complete or not
var isComplete = false;

var questionCount = 0;

//okay so by putting in the text of the element im going to use as my header just makes everything so much easier


var labelArray = ["Created by Jennifer Gutierrez Manjares", "Correct! :) ", "Wrong! :( "]

var scoreAmount = 0;

//this will grab the high scores from local storage
function init() {
    getHighScores();
};


function startQuiz() {
    //setting the score back to zero and the timer back to 60
    scoreAmount = 0;
    timerCount = 75;
    //this sets off the function to make our questions appear
    // renderQuestions();
    //this sets off the function to make our timer begin
    startTimer();
};

//brings our timer to life and adds the functionality to end the quiz if the timer hits 0 or if the quiz is complete in the time given
function startTimer() {
    //this is the timer that will be used to count down from 60 seconds
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        //this is the condition that will end the quiz if the timer hits 0
        if (timerCount >= 0) {
            if (isComplete && timerCount > 0) {
                clearInterval(timer);
                endQuiz();
            }
        }

        if (timerCount === 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
};


// buttonTest.addEventListener("click", increment);


var quizFormatArray = [
    {
        stimulus: "Commonly used data types DO not include: ",
        correctAnswer: "Alerts",
        responses: ["strings", "booleans", "Alerts", "numbers"]
    }, {
        stimulus: "The condition in an if/else statement is enclosed with ________.",
        correctAnswer: "curly brackets",
        responses: ["quotes", "Curly brackets", "paranthesis", "square brackets"]
    }, {
        stimulus: "Arrays in JavaScript can be used to store ________.",
        correctAnswer: "All of the above",
        responses: ["numbers and strings", "other arrays", "booleans", "All of the above"]
    }, {
        stimulus: "String values must be enclosed within ________ when being assigned to variables.",
        correctAnswer: "Quotes",
        responses: ["commas", "curly brackets", "Quotes", "parenthesis"]
    }, {
        stimulus: "A very useful tool used during development and debugging for printing content to the debugger is:",
        correctAnswer: "Console.log",
        responses: ["JavaScript", "terminal/bash", "for loops", "Console.log"]
    }

];

// console.log(quizFormatArray[0].stimulus);

while (questionCount[0])


    //this is the conjunctor function that will make our title appear
    var Questions = function (arrayIndex) {

        var newtextContent = quizFormatArray[i];

        var questionOne = document.createTextNode(newtextContent);

        newBigText.setAttribute("class", "bigText");

        newBigText.appendChild(questionOne);
        document.getElementById("mainParentEl").appendChild(newBigText);

    };

//i think in order to have the reponses change accordingly, i will need to attatch them somehow to the questions 
//i am trying to add the click event procedure to all of my buttons so that they will show the next question and set of responses
var NextQuestion = function (responseArray) {
    for (i = 0; i < responseArray.length; i++) {
        // okay so what if i create a set of if then conditions where if this input under the headerarray[i+1] <-i did this 
        // because I wanted to ensure that the headerarray is corrently displaying in regards to being given the i 


    };


    //this is my constructor function for creating the various form layouts needed 
    var Responses = function (responseArray) {

        //creating the elements that i will eventually fill and append to our main cont element of main
        var newMainContent = document.createElement("form");

        //here i am setting all of the attributes
        newMainContent.setAttribute("id", "mainContent");

        //WOOOOHOOOOOO i got my loop to work the first time around, the only issue is that im not sure if i like that each of these inputs now is identified as the same thing..oh wait the name!! nevermind lol
        for (i = 0; i < responseArray.length; i++) {
            var responseInput = document.createElement("input");
            var responseTextContent = responseArray[i];
            var responseText = document.createTextNode(responseTextContent);

            responseInput.setAttribute("type", "button");
            responseInput.setAttribute("value", responseArray[i]);
            responseInput.setAttribute("name", responseArray[i]);
            responseInput.setAttribute("class", "startBtn");

            responseInput.appendChild(responseText);

            newMainContent.appendChild(responseInput);
            document.getElementById("mainParentEl").appendChild(newMainContent);


        };
    };
};
// function quizStartForm() {
//     //so lets rework what we need to add in here and 

//     var newtextContent = quizFormatArray[i].stimulus;

//     var questionOne = document.createTextNode(newtextContent);

//     newBigText.setAttribute("class", "bigText");

//     newBigText.appendChild(questionOne);
//     document.getElementById("mainParentEl").appendChild(newBigText);


// };
// ---------------------------------------------    FUNCTION: REDESIGN OF HTML FOR FIRST QUESTION IN JAVASCRIPT ---------------------------------------------
// function quizStart() {
//     quizStartForm();
//     setInterval()

// };


startQuizBtn.addEventListener("click", startQuiz);

