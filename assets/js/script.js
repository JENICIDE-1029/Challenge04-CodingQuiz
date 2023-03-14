
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

//grabbing the button to show high scores
var viewHigh = document.getElementById("highScoreBtn");

//represents the different answers to questions
var response;
//represents the correct response to the question
var responseAnswer;

//the loocal storage variable for our scores
var highScores;


var timer;
var timerCount;


//this is the variable that will be used to determine if the quiz is complete or not
var isComplete = false;

//this variable is helping us move along our questions in our loop in the renderQuestions function
var questionCount = 0;

//an array of different text to display for a label
var labelArray = ["Correct! :) ", "Wrong! :( "]

//amount that the user scored
var scoreAmount = 0;

//this will grab the high scores from local storage
function init() {
    getHighScores();
};

function getHighScores() {
    var storedScores = JSON.parse(localStorage.getItem("highScores"));
    if (storedScores === null) {
        highScores = [];
    } else {

        highScores = storedScores;
    }
}


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

    //altering what we have 
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

//when the user runs out of time or completes the quiz this function will take off and present them with the end page of the quiz with their results and prompt to save their score
function endQuiz() {
    //ending the timer 
    clearInterval(timer);
    questionCount = 0;
    isComplete = false;

    //working with the elements we got
    bigText.textContent = "All done!";
    mainMiddleContent.innerHTML = "";
    viewHigh.style.display = "";

    //creating new elements
    var scoreTotal = document.createElement("p");
    var enterInitialsText = document.createElement("p");
    var startAgain = document.createElement("button");
    var initials = document.createElement("input");
    var submitInitials = document.createElement("button");

    //altering the attributes  
    labelMessage.textContent = "";
    scoreTotal.textContent = "Final Score: " + scoreAmount;
    enterInitialsText.textContent = "Enter your initials: ";
    submitInitials.textContent = "Submit Score";
    submitInitials.style.display = "block";
    startAgain.addEventListener("click", startOver);
    initials.setAttribute("type", "text");
    submitInitials.addEventListener("click", submitScore);
    initials.setAttribute("id", "initials");

    //adding styling
    startAgain.textContent = "Take Quiz Again?";
    enterInitialsText.style.display = "inline";

    //appending the new elements to their parents
    mainMiddleContent.appendChild(scoreTotal);
    mainMiddleContent.appendChild(enterInitialsText);
    mainMiddleContent.appendChild(initials);
    mainMiddleContent.appendChild(submitInitials);
    mainMiddleContent.appendChild(startAgain);

}


function submitScore() {
    //we are retrieveing the scre and initials from user
    var score = scoreAmount;
    var initials = document.getElementById("initials");

    //now we are adding this to our array
    highScores.push({
        score: score,
        initials: initials.value
    });

    //making sure we are sorting the scores from highest to lowest
    highScores.sort(function (a, b) {
        return b.score - a.score;
    });

    localStorage.setItem("highScores", JSON.stringify(highScores));
    viewHighScores();
}

function viewHighScores() {
    getHighScores();
    //stopping our timer in its tracks
    timerElement.textContent = 0;
    timerCount = 0;


    //working with the elements already on the page
    bigText.textContent = "HighScores";
    mainMiddleContent.innerHTML = "";
    startQuizBtn.style.display = "none";
    labelMessage.textContent = "";

    //creating new elements
    var clearScoreEl = document.createElement("button");
    var startOverEl = document.createElement("button");

    //changing the attributes/style of our new elements
    viewHigh.style.display = "";
    clearScoreEl.textContent = "Clear Scores";
    startOverEl.textContent = "Try Again";
    clearScoreEl.addEventListener("click", clearScores);
    startOverEl.addEventListener("click", startOver);

    //we need to grab our local storage for high scores along with the initals entered and have a loop that creates them for us along with appending them 

    //adding our new element to their parents
    mainMiddleContent.appendChild(startOverEl);
    mainMiddleContent.appendChild(clearScoreEl);

    for (i = 0; i < highScores.length; i++) {
        var highScore = highScores[i];
        var highScoreElement = document.createElement("p");
        highScoreElement.textContent = highScore.initials + " - " + highScore.score;
        mainMiddleContent.appendChild(highScoreElement);

    }
}

function clearScores() {
    localStorage.clear();
    viewHighScores();

}

function startOver() {
    //now everything has to be set to look like the start page again
    bigText.textContent = "WELCOME TO THE CODING QUIZ";
    mainMiddleContent.innerHTML = " This quiz contains 5 multiple choice questions that must be answered within 75 seconds. Any wrong answers will automatically reduce your time available by 10 seconds. So whenever you're ready, click the start button below!";
    startQuizBtn.style.display = "";
    labelMessage.textContent = "Created by Jennifer Gutierrez Manjares";
    viewHigh.style.display = "";
}

//we are adding an onclick event to each button that will evaluate whether the response contents matches the correct answer property we added to our object
function evalResponse(event) {
    event.preventDefault();

    //so for each of our buttons we are adding the textcontent of what the response is and the value of what the correct answer is so we are grabbing those and comparing them to see if they match and handle them accordingly
    var response = event.target.textContent
    var responseAnswer = event.target.value

    //if the response selected matches the correct answer then we need to spit out the right label message and points 
    if (response === responseAnswer) {
        //lets add the "correct" message to our label at the end of our questions
        labelMessage.textContent = labelArray[0];
        scoreAmount += 15;
    } //if this is not the case then we need to give a different message and remove points AND time 
    else {
        timerCount -= 10;
        scoreAmount -= 13;
        labelMessage.textContent = labelArray[1];
    }
    questionCount++;
    //then we also are going to add to out questtion counter to ensure that our loop is running along as it should onto the next question with of course stopping itself at thhe last question
    if (questionCount < quizFormatArray.length - 1) {

        isComplete = true;
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

init();

//adding our event listeners to our buttons
startQuizBtn.addEventListener("click", startQuiz);
viewHigh.addEventListener("click", viewHighScores);

