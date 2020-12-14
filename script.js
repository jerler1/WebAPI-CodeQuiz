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

//DOM variables
var timer = document.getElementById("timer");
var start = document.getElementById("start");
var header = document.getElementById("header");
var main = document.getElementById("main");
var mainText = document.getElementById("mainText");

//global variables
var timeRemaining;
questionNumber = 0;
whatQuestion = questionNumber + 1;

//main function
function init() {
  startTimer();
  clearingElements();
  formingElements();
}

// function to start timer and deal with manipulation of time.
function startTimer() {
    var timeRemaining = 60;
    var interval = setInterval(function(event){
        timeRemaining--;
        timer.textContent = timeRemaining;
    }, 1000);
}

function formingElements() {
  var sectionQuestion = document.createElement("ul");
  sectionQuestion.setAttribute("id", "secQuestion");
  var sec = document.getElementById("secQuestion");
  var classEle = [];
  for (let i = 0; i < 4; i++) {
    var liEle = document.createElement("li");
    liEle.setAttribute("id","liElement");
    var answerElement = document.createElement("button");
    answerElement.setAttribute("id", "answer");
    answerElement.setAttribute("data-index", i);
    answerElement.setAttribute(
      "class",
      "answer" + i + " btn btn-secondary mx-1 my-1 px-2 py-2"
      );
      console.log(answerElement);
      sectionQuestion.appendChild(answerElement);
    }
    class.push(answerElement.getAttribute('class'));
    main.appendChild(sectionQuestion);


    displayQuestions(classEle);
}
start.addEventListener("click", init);

document.addEventListener("click", function (event) {
    if (event.target.id === "answer") {
      console.log("click");
    }
  });


  function clearingElements() {
    start.remove();
    mainText.remove();
  }
  
  function displayQuestions(array) {
    sectionQuestion.textContent = quizQuestions[questionNumber].question;
    header.textContent = "Question number " + whatQuestion + ".";
    for (let i = 0; i < 4; i++) {
      
      selectAnswer.textContent = quizQuestions[questionNumber].answer[i];
    }
  }
  