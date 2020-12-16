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
var hrElement = document.createElement("hr");

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
      endgame();
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
  // making ul element to append to main
  var sectionQuestion = document.createElement("ul");
  sectionQuestion.setAttribute("id", "secQuestion");
  sectionQuestion.textContent = quizQuestions[questionNumber].question;
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

//checking the button click value to the answer in the quizQuestions answer array
function checkAnswer(event) {
  event.preventDefault();
  if (event.target.matches("button.answer")) {
    if (
      event.target.textContent ===
      quizQuestions[questionNumber].answer[
        quizQuestions[questionNumber].correct
      ]
    ) { 
      // if answer is correct do nothing
      //TO DO make a correct section
      // console.log("correct");
    } else {  // if answer is incorrect subtract time
      //TO DO make a incorrect.
      timeRemaining = timeRemaining - 10;
      // console.log("not correct");
    }
    // if we have reached the end of the game run endgame else iterate question numbers.
    if (quizQuestions[questionNumber + 1] === undefined) {
      // console.log(quizQuestions.length);
      endgame();
    } else {
      questionNumber++;
      clearingElements();
    }
  }
}
//how the game ends and shows your score and input highscore.
function endgame() {

  // setting score and clearing interval and changing text of header
  var scoreWinner = timeRemaining;
  clearInterval(interval);
  header.textContent = "Congratulation your score is : " + scoreWinner + ".";
  main.innerHTML="";

  //making and appending form element
  var formEle = document.createElement("form");
  main.appendChild(formEle);

  //making and appending input
  var inputBox = document.createElement("input");
  inputBox.setAttribute("class", "form-control form-control-log");  
  inputBox.setAttribute("type", "text");  
  inputBox.setAttribute("placeholder", "Enter your initials.");  
  inputBox.setAttribute("id", "intialsInput");
  main.firstChild.appendChild(inputBox);

  //making and appending button
  var victoryBtn = document.createElement("button");
  victoryBtn.setAttribute("type", "submit");
  victoryBtn.setAttribute("class", "btn btn-primary congrats");
  victoryBtn.textContent = "Submit";
  // on click of button i just made
  victoryBtn.addEventListener("click", function() {
    // grab the inits
    var initialsWinner = inputBox.value;
    // grab the score
    // make it an inital object
    var highscoresWinners = {
      initials: initialsWinner,
      score: scoreWinner
    }

    var hiScores = localStorage.getItem("highscores");
    console.log(hiScores);
    // if hiScores is null
    // -- set hiScore to an empty array
    // else
    // -- parse it into js. and then it looks like this 
    if (hiScores === null) {
      hiScores = [];
    } else {
      hiScores = JSON.parse(hiScores);
    }
    // now i have hiscores. 
    // add my new hi score to it
    // stringify his scoores
    // put it back into the localstorage
    console.log(hiScores);
    console.log(highscoresWinners);
    hiScores.push(highscoresWinners);
    console.log(highscoresWinners);
    localStorage.setItem("highscoresWinners", JSON.stringify(hiScores));
  })

  main.firstChild.appendChild(victoryBtn);


}
start.addEventListener("click", init);
main.addEventListener("click", checkAnswer);


