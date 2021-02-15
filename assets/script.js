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
      mainEl.textContent = "Game Over.  Better luck next time"
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      // sendMessage(); 
    }
  }, 1000);
  mainEl.style.display = "none";
  scoreEl.style.display = "none";
  newScoreEl.style.display = "none";
  startBtn.style.display = "none";

  document.getElementById("question1").style.visibility = "visible";
}

highScoreEl.addEventListener("click", function() {
  scores ();
}
)

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

goBackBtn.addEventListener("click", function() {
  goBack(); 
})

function goBack() {
  location.reload();
}

