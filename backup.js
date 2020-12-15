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
  var interval = setInterval(function (event) {
    timeRemaining--;
    timer.textContent = timeRemaining;
  }, 1000);
}

// forming elements to show the questions
function formingElements() {

  // making ul element to append to main
  var sectionQuestion = document.createElement("ul");
  sectionQuestion.setAttribute("id", "secQuestion");

  for (let i = 0; i < 4; i++) {

    // making li elements to append to ul
    var liEle = document.createElement("li");
    liEle.style = "list-style: none";
    liEle.setAttribute("id", "liElement" + i + "");
    sectionQuestion.appendChild(liEle);

    //making button elements to append to li
    var answerElement = document.createElement("button");
    answerElement.setAttribute("id", "answer" + i);
    answerElement.setAttribute("data-index", i);
    answerElement.setAttribute(
      "class",
      "answer btn btn-secondary mx-1 my-1 px-2 py-2"
    );
    // console.log(answerElement);
    liEle.appendChild(answerElement);
  }
  // console.dir(sectionQuestion)
  main.appendChild(sectionQuestion);

  displayQuestions(sectionQuestion, liEle);
}
start.addEventListener("click", init);


document.addEventListener("click", checkAnswer);
//   if (event.target.class === "answer") {
//     console.log("click");
//   }
// });

function checkAnswer(event) {
  if (event.target.matches("button")) {
    console.log(event.target.textContent);
    console.log(quizQuestions[questionNumber].answer[quizQuestions[questionNumber].correct]);
    if(event.target.textContent === quizQuestions[questionNumber].answer[quizQuestions[questionNumber].correct]) {
      //TO DO make a correct section
      console.log("correct");
    } else {
      //TO DO make a incorrect.
      timeRemaining = timeRemaining - 10;
      console.log("not correct");
    }
    questionNumber++;
    clearingElements;
}}


function clearingElements() {
  if (questionNumber === 0) {
  main.innerHTML = "";
  } else {
    main.innerHTML = "";
    formingElements; 
  }
}

function displayQuestions(taco, liEle) {
  // console.dir(liEle);
  var textNode = document.createTextNode("");
  textNode.textContent = quizQuestions[questionNumber].question; 
  taco.prepend(textNode);
  header.textContent = "Question number " + whatQuestion + ".";

  for (let i = 1; i < 5; i++) {
    var inputButton = document.getElementById("answer"+(i-1)+"");
    inputButton.textContent = quizQuestions[questionNumber].answer[i-1];
  }
}
