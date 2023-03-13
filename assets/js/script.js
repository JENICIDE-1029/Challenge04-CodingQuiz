
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

var viewHigh = document.getElementById("highScoreBtn");



var timer;
var timerCount;
//this is the variable that will be used to determine if the quiz is complete or not
var isComplete = false;

//this variable is helping us move along our questions in our loop in the renderQuestions function
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
var response;
var responseAnswer;
//how can i make it so the questions appear, then change after one of them has been selected? while of course keeping track of the score and removing time from the timer when the wrong question is asked along with displaying wrong or correct 
function renderQuestions() {
    startQuizBtn.style.display = "none";
    labelMessage.textContent = "";
    viewHigh.style.display = "none";

    for (var i = 0; i < quizFormatArray.length; i++) {
        var quizFormat = quizFormatArray[questionCount];
        bigText.textContent = quizFormat.stimulus;
        //we don't need anything in here but we will use it to add the question response buttons
        mainMiddleContent.innerHTML = "";

        //now we are looping through the responses of our first question
        for (var j = 0; j < quizFormat.responses.length; j++) {
            response = quizFormat.responses[j];
            var responseBtn = document.createElement("button");
            responseAnswer = quizFormat.correctAnswer;


            // responseBtn.setAttribute("class", "btn btn-primary btn-block");
            responseBtn.setAttribute("value", response);
            responseBtn.setAttribute("value", responseAnswer);

            responseBtn.textContent = response;

            //so we wouldnt include the () after the function name because that would call the function immediatley and we want it to only go off when the button is clicked        
            responseBtn.addEventListener("click", evalResponse);
            mainMiddleContent.appendChild(responseBtn);

        }

        //once we get to the last question we will want to make sure that it's aware that the quiz is complete
        if (i === quizFormatArray.length - 1) {
            isComplete = true;
            endQuiz();

        } else {
            isComplete = false;
            return;
        }
    }

};

function endQuiz() {
    bigText.textContent = "All done!";
    mainMiddleContent.innerHTML = "";
    var scoreTotal = document.createElement("p");
    var enterInitialsText = document.createElement("p");
    var startAgain = document.createElement("button");

    viewHigh.style.display = "";


    var initials = document.createElement("input");
    var submitInitials = document.createElement("button");

    scoreTotal.textContent = "Final Score: " + scoreAmount;
    enterInitialsText.textContent = "Enter your initials: ";

    submitInitials.textContent = "Submit Score";
    enterInitialsText.style.display = "inline";
    initials.setAttribute("type", "text");
    submitInitials.addEventListener("click", submitScore);
    submitInitials.style.display = "block";

    startAgain.addEventListener("click", startQuiz);
    startAgain.textContent = "Take Quiz Again?";


    mainMiddleContent.appendChild(scoreTotal);
    mainMiddleContent.appendChild(enterInitialsText);
    mainMiddleContent.appendChild(initials);
    mainMiddleContent.appendChild(submitInitials);
    mainMiddleContent.appendChild(startAgain);

    clearInterval(timer);
    labelMessage.textContent = "";

}

function submitScore() {
    localStorage.setItem("score", scoreAmount);
    localStorage.setItem("initials", initials.value);

}

viewHigh.addEventListener("click", viewHighScores);

function viewHighScores() {
    bigText.textContent = "HighScores";
    mainMiddleContent.innerHTML = "";
    startQuizBtn.style.display = "none";

    var clearScores = document.createElement("button");
    var startOver = document.createElement("button");


    viewHigh.style.display = "";

    clearScores.textContent = "Clear Scores";
    startOver.textContent = "Start Over";

    //we need to grab our local storage for high scores along with the initals entered and have a loop that creates them for us along with appending them 

    clearScores.addEventListener("click", clearScores);

    startOver.addEventListener("click", startOver);

    mainMiddleContent.appendChild(startOver);
    mainMiddleContent.appendChild(clearScores);

    clearInterval(timer);
    labelMessage.textContent = "";

}

function clearScores() {

}

function startOver() {

}

//we are adding an onclick event to each button that will evaluate whether the response contents matches the correct answer property we added to our object
function evalResponse(event) {
    //so for each of our buttons we are adding the textcontent of what the response is and the value of what the correct answer is so we are grabbing those and comparing them to see if they match and handle them accordingly
    var response = event.target.textContent
    var responseAnswer = event.target.value

    if (response === responseAnswer) {
        //lets add the "correct" message to our label at the end of our questions
        labelMessage.textContent = labelArray[1];
        scoreAmount += 15;
    }
    else {
        timerCount -= 10;
        scoreAmount -= 13;
        labelMessage.textContent = labelArray[2];
    }

    if (questionCount < quizFormatArray.length - 1) {
        questionCount++;
        renderQuestions();
    } else {
        endQuiz();
    }
};

//this array holds all of our questions, their respones and the correct answers
var quizFormatArray = [
    {
        stimulus: "Commonly used data types DO not include: ",
        correctAnswer: "Alerts",
        responses: ["strings", "booleans", "Alerts", "numbers"]
    }, {
        stimulus: "The condition in an if/else statement is enclosed with ________.",
        correctAnswer: "Curly brackets",
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

//what starts all of our code off
startQuizBtn.addEventListener("click", startQuiz);


