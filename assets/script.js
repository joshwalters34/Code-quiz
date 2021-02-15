var highScoreEl = document.querySelector("#scores");
var timerEl = document.querySelector("#countdown");
var startBtn = document.querySelector("#start");
var mainEl = document.querySelector("#main-section");
var scoreEl = document.querySelector("#main-head");
var newScoreEl = document.querySelector("#savedScore");
var scoreHeader = document.querySelector("#scoreHeader");
var goBackBtn = document.querySelector("#goBack");
var clearBtn = document.querySelector("#clear");
var scoreWindow = document.querySelector("#highScore");
var qOneEl = document.querySelector("#question1");
var answerOneBtn = document.querySelector("#answer1Btn");


// to hide elements when page loads
window.onload = function () {
  document.getElementById("highScore").style.visibility = 'hidden';
  document.getElementById("scoreHeader").style.visibility = 'hidden';
  document.getElementById("goBack").style.visibility = 'hidden';
  document.getElementById("clear").style.visibility = 'hidden';
  document.getElementById("question1").style.visibility = "hidden";
  document.getElementById("question2").style.visibility = "hidden";
  document.getElementById("question3").style.visibility = "hidden";
  document.getElementById("question4").style.visibility = "hidden";
}

var timerInterval;
// start butten event listener to start time and get first question
startBtn.addEventListener("click", function() {
  startGame();
}
);

// function for the timer to run
function startGame() {
  var secondsLeft = 5
  // Sets interval in variable
  timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      window.alert("Game Over.  Better luck next time!");
      location.reload(); //reloads the page after clicking OK on prompt
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      // sendMessage(); 
    }
  }, 1000);
  // hiding the main page elements to display questions
  mainEl.style.display = "none";
  scoreEl.style.display = "none";
  newScoreEl.style.display = "none";
  startBtn.style.display = "none";
// making question 1 visible
  document.getElementById("question1").style.visibility = "visible"; 
}
// event listner added to "View High Scores" to show high score
highScoreEl.addEventListener("click", function() {
  scores ();
})

function scores(){
  mainEl.style.display = "none";
  scoreEl.style.display = "none";
  newScoreEl.style.display = "none";
  startBtn.style.display = "none";
  
  if (scoreHeader.style.visibility === "hidden") {
    scoreHeader.style.visibility = "visible";
  }
  if (goBackBtn.style.visibility === "hidden") {
    goBackBtn.style.visibility = "visible";
  }
  if (clearBtn.style.visibility === "hidden") {
    clearBtn.style.visibility = "visible";
  }
  if (scoreWindow.style.visibility === "hidden") {
    scoreWindow.style.visibility = "visible";
  }
}
// event listener on Go Back button to take user back to start page
goBackBtn.addEventListener("click", function() {
  location.reload();
})
// event listerner for answer to question 1
answerOneBtn.addEventListener("click", function(){
  questionTwo();
})
function questionTwo() {
  document.getElementById("question1").style.display = "none"; 
  document.getElementById("question2").style.visibility = "visible"; 
}
