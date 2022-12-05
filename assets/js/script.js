var response1 = ["strings","booleans","Alerts","numbers"]
var questions = ["Commonly used data types DO not include: ","The condition in an if/else statement is enclosed with ________.","Arrays in JavaScript can be used to store ________.","String values must be enclosed within ________ when being assigned to variables.","A very useful tool used during development and debugging for printing content to the debugger is: "]
var response2 = ["quotes","Curly brackets","paranthesis","square brackets"]
var response3 = ["numbers and strings","other arrays","booleans","All of the above"]
var response4 = ["commas","curly brackets","Quotes","parenthesis"]
var response5 = ["JavaScript","terminal/bash","for loops","Console.log"]

var scoreAmount = 0;

// ---------------------------------------------    FUNCTION: REDESIGN OF HTML FOR FIRST QUESTION IN JAVASCRIPT ---------------------------------------------
function quizStart (){

var mainVar = document.getElementsByTagName("main");

// and i am going to do that by using the innerhtml tag because i'll be able to change this completely 
mainVar[0].innerHTML = ""; 

var Questions = function (arrayIndex){
    var newBigText = document.createElement("h1");
    var newtextContent = questions[arrayIndex];

    var questionOne = document.createTextNode(newtextContent);

    newBigText.setAttribute("id","bigText");

    newBigText.appendChild(questionOne);
    document.getElementById("mainParentEl").appendChild(newBigText);

};

//this calls the constructor function
var question1 = new Questions(0);


//this is my constructor function for creating the various form layouts needed 
var Responses = function (responseArray){
    //creating the elements that i will eventually fill and append to our main cont element of main
var newMainContent = document.createElement("form");

//here i am setting all of the attributes
newMainContent.setAttribute("id", "mainContent");

//WOOOOHOOOOOO i got my loop to work the first time around, the only issue is that im not sure if i like that each of these inputs now is identified as the same thing..oh wait the name!! nevermind lol
for (i=0; i<responseArray.length; i++){
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

//this repitition needs to be made simpler, i know there are certain things that have to be the same but im left unsure on how to make similar things line up in a way
var responseSet1 = new Responses(response1);




// mainVar.appendChild(newLabel);
console.log(scoreAmount);


};
var startQuizBtn = document.getElementById("startBtn");

//this will officially get everything started for our user
startQuizBtn.addEventListener("click", quizStart);




