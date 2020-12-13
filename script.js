/* Psuedo code
1. Make a on-click for the start button to start the init().
2. Remove old content or create a place to put questions and answers.
3. Get the question and answers that are buttons to dynamically appear
4. Make an on-click for the list holding the buttons using delegation.
5. Add data states? or something else to identify which button is the correct one.
6. Iterate over the array to the next question.  Repeat till the last question.
7. Display Congratulations this is your score - input field to enter initials.
8. Local storage to hold the high score (sorting function?)
9. Build timer and deduct time for wrong answers.

Prep work
1. Make questions array and question objects.
2. Build html page(s).
*/
var header = document.getElementById("header");
//global variables
var timeRemaining;
questionNumber = 1;

//main function
function init() {
    console.log("hi");
    startTimer();
    displayQuestions();
}

// function to start timer and deal with manipulation of time.
function startTimer() {

}

//function to remove/display DOM
function displayQuestions() {
    header.textContent = "Question number "+questionNumber+"."
}
document.getElementById("start").addEventListener("click", init);

