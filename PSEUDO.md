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

the first function that i'm going to focus on is 