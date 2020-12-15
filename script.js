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
var interval;
var timeRemaining;
var questionNumber = 0;

//main function
function init() {
  startTimer();
  clearingElements();
}

// function to start timer and deal with manipulation of time.
function startTimer() {
  timeRemaining = 90;
  interval = setInterval(function (event) {
    timeRemaining--;
    timer.textContent = timeRemaining;
    if (timeRemaining === 0) {
      clearInterval(interval);
      //endGame
    }
  }, 1000);
}

//clears all the html at the id=main line. KABLOOEY. then runs the forming elements function.
function clearingElements() {
  main.innerHTML = "";
  formingElements();
}

// forming elements to show the questions
function formingElements() {
  console.log("hi");
  // making ul element to append to main
  var sectionQuestion = document.createElement("ul");
  sectionQuestion.setAttribute("id", "secQuestion");
  sectionQuestion.textContent = quizQuestions[questionNumber].question;
  console.log(questionNumber + "question number");
  console.log(whatQuestion + "whatquestion");
  var whatQuestion = questionNumber + 1;
  header.textContent = "Question number " + whatQuestion + ".";

  for (let i = 0; i < 4; i++) {
    // making li elements to append to ul
    var liEle = document.createElement("li");
    liEle.style = "list-style: none";
    liEle.setAttribute("id", "liElement" + i + "");
    sectionQuestion.appendChild(liEle);

    //making button elements to append to li
    var answerElement = document.createElement("button");
    answerElement.textContent = quizQuestions[questionNumber].answer[i];
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
}

function checkAnswer(event) {
  if (event.target.matches("button.answer")) {
    console.log(event.target.textContent);
    console.log(quizQuestions[questionNumber].answer[quizQuestions[questionNumber].correct]);
    if (
      event.target.textContent ===
      quizQuestions[questionNumber].answer[
        quizQuestions[questionNumber].correct
      ]
    ) {
      //TO DO make a correct section
      console.log("correct");
    } else {
      //TO DO make a incorrect.
      timeRemaining = timeRemaining - 10;
      console.log("not correct");
    }
    if (questionNumber > 3) { // to do not working
      console.log("time to end game");
      //clear interval stuff
      //end game?
    } else {
      questionNumber++;
      console.log(questionNumber);
      clearingElements();
    }
  }
}

start.addEventListener("click", init);
main.addEventListener("click", checkAnswer);

// highscores = JSON.parse(localStorage.getItem("highscores") || [];

// localStorage.setItem("highscores", JSON.stringify(highscores))

