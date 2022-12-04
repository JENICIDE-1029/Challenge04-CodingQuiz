i like the idea of writing my pseudocode in the readme since each line wraps once it reaches the edge of the page, whereas in the html file and others your comments will sprawl out and i hate that look sooooo thank you readme

Quiz Start 
Components: time, view high score, message with rules, title, and a start button
Events: the start button will begin our timer and display the quuestions to our user, the view high score will redirect a user to view all of the high scores

Quiz Questions
Components: time, view high score, question, 4 boxes that contain different possible answers
Events: when an answer is selected then the next question is brought upon along with a label displaying if the answer was true or false
    Through this phase, we are collecting the scores of our user and saving it for future use

Quiz Completion
components: message, title, your score, text box entry for your id, submit button, view high score, time
Events: when the last question is answered or the timer runs out, this page will be displayed
    once the user inputs their ID then we can submit the users score and id to our high scores page 

High Scores
components: list of all users who submitted their id and scores, button to delete scores, button to redirect to the start of the quiz
events: when the delete scores button is pressed then we need all recorded scores to be removed and when the redo button is selcted then we prompt our user again with the quiz start page 

one of the biggest questions i have is how on earth are we going to have everything flip flop???
i'm thinking that depending on the page, i will simply have to call certain css in order for it to look the way i want 

QUIZ START 
in the top left, i will have the view high scores 
in the top right, will be the time 
in the center i will have the welcome message with a button 
    when this butto is selected then the timer will begin to countdown and the user will be prompted with their first question! 

QUIZ QUESTIONS 
in the top left, i will have the view high scores
in the top right will be the timer
in the middle will be the question, followed by the 4 options, and then by a hidden variable of which will display whether the answer was true or false 

once an answer is selected then we move onto the next question but before we do we will keep track of what our user input and display if they got it wrong or right

once we get to either the last question or the user runs out of time, we will prompt them to the Quiz completion 

QUIZ COMPLETION 
top left, high scores
top right, remaining amount if any 
in the middle will be a message letting the user know it's done, followed by their score, a text entry for their id, a submit button, the true or false variable (from the previous question)
    the id should only be 4 letters long and cannot contain numbers, once this criteria is met then we will have the user sucessfully submit their id and be prompted to view the high scores 

HIGH SCORES 
middle of screen will contain a title, listt of all previous scores, a button to delte scores, and a button to return to the main menu


okay so now that ive literally broken down everything i need like at least twice lol i think its time to move into writing out how my code will look like in order to make it all happen

the first major event is when tthe start button begins 
so when this event is kicked off then we need to change our html to display our form and begin our timer 
if the timer runs out then the user is brought to tthe completion page 

when event.click is clicked then i want to set off my function for the questionForms

in questionForms i will have javascript that will manipulate the html to display the form with all the questions 
however how are we going to make this wooooorrrrkkkkk so that when something is selected then it can move us to the next....
from previous experience we've sort of have done this through asking a series of questions and only loggin what was seletced 
okay so the only thing that comes to mind is that we give each one its own class and own value so that in each class we can have a function that will move it to the next set along with accounting for the values of each item 


okay take 2, i want to break all of this down even more so it looks more like code

WOAH WOAH WOAAHHHh okay so each thing ive specified before will have its own function solely for the styling of the webpage which i can then use wherever appropiate in my event handlers/functions for the most part though, i want everything to be in the same place, somethings will not be visible at times but yeaahhh

okay take 3 

so the way that I am going to break this all down is by going in a circle, i'll start with what my codes main function (the quiz), to then handling the completion page, and then the high scores view, to finally completing the page that will be the inital page to this website, the welcome page

---------------------------------------------    FUNCTION: REDESIGN OF HTML FOR FIRST QUESTION IN JAVASCRIPT ---------------------------------------------

OKAY SO THE GOAL HERE IS TO MANIPULATE THE mainContent ELEMENT SO THAT ITS A FORM
and we do this by adding the elementbyid of main content into a variable
var form = document.getElementbyID("mainContent")

cute, so now i have to change this paragraph tag into a form tag
and i'll do this by simple erasing all of the content in main and creating it brand new 

i'll build the javascript for the header, then the form with multiple inputs, then the label

when it comes to the multiple inputs needed for the form, i think theres an opportunity to use loops and arrays in order to add the multiple forms....but i think i might have to go with the conjuctor function route

so right off the bat i want to create the variable to house the parent element and then the new elements that we are eventually going to add in
var mainContent = document.getElementById("mainParentEl");
var question1 = document.createElement("h1");
var formCreation = document.createElement("form");
var mainLabel = document.createElement("label");

then i am going to create arrays because this feels better than typing them all out within my functions and i believe will help in running loops for us
var response1 = ["Response1","Response2","Response3","Response4"]
var questions = ["Question1","Question2","Question3","Question4"]
var response2 = ["Response1","Response2","Response3","Response4"]
var response3 = ["Response1","Response2","Response3","Response4"]
var response4 = ["Response1","Response2","Response3","Response4"]

var labelMessages = ["Created by Jennifer Gutierrez Manjares","Wrong!","Correct!"]

so we have to define the 16 variables to put in the responeses and then 4 more for the questions themselves 
1 question will have 4 responses 


var response1q1 = document.createElement("input");
var response2q1 = document.createElement("input");
var response3q1 = document.createElement("input");
var response4q1 = document.createElement("input");

var displayLabel = document.createElement("label");


then we have to create another variable to contain whats going within each of these elements

var question1Text = document.createTextNode("This is question 1");
var response1Text = document.createTextNode(response1[0]);
var response2Text = document.createTextNode(response1[1]);
var response3Text = document.createTextNode(response1[2]);
var response4Text = document.createTextNode(response1[3]);

if ()

this is when i want to now append the texts to their homes
question1.appendChild(question1Text);
response1q1.appendChild(response1Text);
response2q1.appendChild(response2Text);
response3q1.appendChild(response3Text);
response4q1.appendChild(response4Text);

all of them will require setting attributes, responses will have their own set as will responses 
question1.setAttribute("id","bigText"; "", "");
response1q1.setAttribute("id", "startBtn""; "type", "button"; "value","10");
response2q1.setAttribute("id", "startBtn""; "", "");
response3q1.setAttribute("id", "startBtn""; "", "");
response4q1.setAttribute("id", "startBtn""; "", "");


once everything looks as it should and things are loaded with what they need then we are ready to append everything to the main form
formCreation.appendChild(response1q1);
formCreation.appendChild(response2q1);
formCreation.appendChild(response3q1);
formCreation.appendChild(response4q1);

these last two is what we are finally adding back to the main content
mainContent.appendChild(question1);
mainContent.appendChild(formCreation);
mainContent.appendChild(mainLabel);

okay so the functionality from before could def use some loops that could also consider how we test for if a user got a question correct and if they are within the right timeframe

after reviewing mini project 28 i think my code needs to be broken down even more 


THEN FROM HERE WE ARE GOING TO ADD EACH ITEM THAT WILL BE A BUTTON TYPE AND WILL EACH HAVE THEIR OWN VALUES

---------------------------------------------    FUNCTION:  ---------------------------------------------