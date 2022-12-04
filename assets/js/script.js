// ---------------------------------------------    FUNCTION: REDESIGN OF HTML FOR FIRST QUESTION IN JAVASCRIPT ---------------------------------------------
function questionOne (){


// OKAY SO THE GOAL HERE IS TO MANIPULATE THE mainContent ELEMENT SO THAT ITS A FORM
// and we do this by adding the elementbyid of main content into a variable
//this is our location
var mainVar = document.getElementsByTagName("mainParentEl");
//this shows me the html contained within this parent tag

// cute, so now i have to change this paragraph tag into a form tag
// and i am going to do that by using the innerhtml tag because i'll be able to change this completely 


//creating the elements that i will eventually fill and append to our main cont element of main
var newBigText = document.createElement("h1");
var newMainContent = document.createElement("form");
var newLabel = document.createElement("label");

//this is all im going to change for the text in question 1
var questionOne = document.createTextNode("THIS IS WHERE THE QUESTION WILL BE");
//in here is where all the form stuff will go 
var response1 = document.createElement("input");

var response1Text = document.createTextNode("Response 1");

response1.setAttribute("type", "button");




//here i am setting all of the attributes
newBigText.setAttribute("id","bigText");
newMainContent.setAttribute("id", "mainContent");
response1.setAttribute("id", "startBtn");

//this is where we will attach all of the content within each category
newBigText.appendChild(questionOne);
response1.appendChild(response1Text);
newMainContent.appendChild(response1);

mainVar[0].innerHTML = ''; 

document.getElementById("mainParentEl").appendChild(newBigText);
document.getElementById("mainParentEl").appendChild(newMainContent);

// mainVar.appendChild(newLabel);
console.log(response1.textContent)


}

questionOne();