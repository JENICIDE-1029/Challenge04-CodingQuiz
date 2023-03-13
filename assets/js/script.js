
//needed to attach the event listener to the start button
var startQuizBtn = document.getElementById("startBtn");
//will grab the element from the html that will display the timer
var timerElement = document.getElementById("timerEl");

//this will grab the element from the html and initally display the welcome message but then switch over to the questions once the quiz begins
var bigText = document.getElementById("bigText");

//this will host all of our answers to the questions
var mainMiddleContent = document.getElementById("mainMiddleContent");
//this will tell the user if their answer was correct or not
var labelMessage = document.getElementById("labelMessage");



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
    renderQuestions();
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

//how can i make it so the questions appear, then change after one of them has been selected? while of course keeping track of the score and removing time from the timer when the wrong question is asked along with displaying wrong or correct 
function renderQuestions() {
    for (var i = 0; i < quizFormatArray.length - 1; i++) {
        var quizFormat = quizFormatArray[i];
        bigText.textContent = quizFormat.stimulus;
        //we don't need anything in here but we will use it to add the question response buttons
        mainMiddleContent.innerHTML = "";

        //now we are looping through the responses of our first question
        for (var j = 0; j < quizFormat.responses.length; j++) {
            var response = quizFormat.responses[j];
            var responseBtn = document.createElement("button");
            var responseAnswer = quizFormat.correctAnswer[0];


            // responseBtn.setAttribute("class", "btn btn-primary btn-block");
            responseBtn.setAttribute("value", response);
            responseBtn.textContent = response;




            //so we wouldnt include the () after the function name because that would call the function immediatley and we want it to only go off when the button is clicked        
            responseBtn.onclick = evalResponse;
            mainMiddleContent.appendChild(responseBtn);
        }

    }

};

//we are adding an onclick event to each button that will evaluate whether the response contents matches the correct answer property we added to our object
function evalResponse() {
    if (response === responseAnswer) {
        //lets add the "correct" message to our label at the end of our questions
        labelMessage.textContent = labelArray[1];
        scoreAmount + 15;
    }
    if (response != responseAnswer) {
        timerCount -= 10;
        scoreAmount - 13;
        labelMessage.textContent = labelArray[2];
    }


}


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

startQuizBtn.addEventListener("click", startQuiz);