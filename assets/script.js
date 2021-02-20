var highScoreEl = document.querySelector("#scores");
var timerEl = document.querySelector("#countdown");
var startBtn = document.querySelector("#start");
var mainEl = document.querySelector("#main-section");
var scoreEl = document.querySelector("#main-head");
var newScoreEl = document.querySelector("#savedHighScore");
var scoreHeader = document.querySelector("#scoreHeader");
var goBackBtn = document.querySelector("#goBack");
var clearBtn = document.querySelector("#clear");
var scoreWindow = document.querySelector("#highScore");
var qOneEl = document.querySelector("#question1");
var answerOneBtn = document.querySelector("#answer1Btn");
var answerTwoBtn = document.querySelector("#answer2Btn");
var answerThreeBtn = document.querySelector("#answer3Btn");
var answerFourBtn = document.querySelector("#answer4Btn");
var finalScreen = document.querySelector("#finalScreen");
var incorrectBtn = document.querySelectorAll(".incorrectBtn");
var incorrectBtn2 = document.querySelectorAll(".incorrectBtn2");
var incorrectBtn3 = document.querySelectorAll(".incorrectBtn3");
var incorrectBtn4 = document.querySelectorAll(".incorrectBtn4");
var answerEl = document.querySelector("#answerDisplay");
var answerEl2 = document.querySelector("#answerDisplay2");
var answerEl3 = document.querySelector("#answerDisplay3");
var answerEl4 = document.querySelector("#answerDisplay4");
var LOCAL_STORAGE_SCORE = "highScore";
var initialsEl = document.querySelector("#initials");
var submitBtn = document.querySelector("#submitBtn");
var timeLeft = document.querySelector("#timeLeft");



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
  document.getElementById("finalScreen").style.visibility = "hidden";
}

var timerInterval;
// start butten event listener to start time and get first question
startBtn.addEventListener("click", function() {
  startGame();
}
);
var secondsLeft = 25

// function for the timer to run
function startGame() {
  timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      window.alert("Game Over.  Better luck next time!");
      location.reload(); //reloads the page after clicking OK on prompt
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }
  }, 1000);
  // hiding the main page elements to display questions
  document.getElementById("main-section").style.display = "none"; 
 
  document.getElementById("question1").style.visibility = "visible"; 
}
// event listner added to "View High Scores" to show high score
highScoreEl.addEventListener("click", function() {

  scores ();
  getScore();
})

function getScore () {
  var results = localStorage.getItem("highScore"); //these two lines pull the high score into my high scores screen
document.getElementById("savedHighScore").innerHTML = results;
}

function scores(){
  document.getElementById("main-section").style.display = "none"; 
  document.getElementById("highScore").style.visibility = "visible";
  document.getElementById("scoreHeader").style.visibility = "visible"; 
  document.getElementById("savedScore").style.visibility = "visible"; 
  document.getElementById("goBack").style.visibility = "visible"; 
  document.getElementById("clear").style.visibility = "visible"; 
}

// event listener on Go Back button to take user back to start page
goBackBtn.addEventListener("click", function() {
  location.reload();
})

clearBtn.addEventListener("click", function() {
  localStorage.setItem(LOCAL_STORAGE_SCORE, "No High Scores");

  getScore();
})

// the next 4 code blocks are for my incorrect answers
incorrectBtn.forEach((incorrectBtn) => {
  incorrectBtn.addEventListener("click", (event) => {
    answerEl.textContent = "Incorrect"
    incorrectBtn.style.backgroundColor = "#DC143C"
    setTimeout(function() {questionTwo(); }, 500);
  });
});

incorrectBtn2.forEach((incorrectBtn2) => {
  incorrectBtn2.addEventListener("click", (event) => {
    answerEl2.textContent = "Incorrect"
    incorrectBtn2.style.backgroundColor = "#DC143C"
    setTimeout(function() {questionThree(); }, 500);
  });
});

incorrectBtn3.forEach((incorrectBtn3) => {
  incorrectBtn3.addEventListener("click", (event) => {
    answerEl3.textContent = "Incorrect"
    incorrectBtn3.style.backgroundColor = "#DC143C"
    setTimeout(function() {questionFour(); }, 500);
  });
});

incorrectBtn4.forEach((incorrectBtn4) => {
  incorrectBtn4.addEventListener("click", (event) => {
    clearInterval(timerInterval);

    answerEl4.textContent = "Incorrect"
    incorrectBtn4.style.backgroundColor = "#DC143C"
    setTimeout(function() {finalWindow(); }, 500);
  });
});

// event listener for answer to question 1
answerOneBtn.addEventListener("click", function(){
  
  answerEl.textContent = "Correct";
  answerOneBtn.style.backgroundColor = "#008000";
  setTimeout(function() {questionTwo(); }, 500);// delays next function so that you can see the correct text
})

function questionTwo() {
  document.getElementById("question1").style.display = "none"; 
  document.getElementById("question2").style.visibility = "visible"; 
}

// event listerner for answer to question 2
answerTwoBtn.addEventListener("click", function(){
  // var answerEl = document.querySelector(".answerDisplay2");

  answerEl2.textContent = "Correct";
  answerTwoBtn.style.backgroundColor = "#008000";
  setTimeout(function() {questionThree(); }, 500);
})

function questionThree() {
  document.getElementById("question2").style.display = "none"; 
  document.getElementById("question3").style.visibility = "visible"; 
}

// event listerner for answer to question 3
answerThreeBtn.addEventListener("click", function(){
  // var answer3El = document.querySelector(".answerDisplay3");

  answerEl3.textContent = "Correct";
  answerThreeBtn.style.backgroundColor = "#008000";
  setTimeout(function() {questionFour(); }, 500);
  // questionFour();
})
function questionFour() {
  document.getElementById("question3").style.display = "none"; 
  document.getElementById("question4").style.visibility = "visible"; 
}

// even listener for question 4
answerFourBtn.addEventListener("click", function(){
  clearInterval(timerInterval);

  answerEl4.textContent = "Correct";
  answerFourBtn.style.backgroundColor = "#008000";
  setTimeout(function() {finalWindow(); }, 500);

})
function finalWindow() {
  document.getElementById("question4").style.display = "none"; 
  document.getElementById("finalScreen").style.visibility = "visible"; 

  timerEl.textContent = secondsLeft;
  timeLeft.textContent = "Your score is " + secondsLeft;
}

submitBtn.addEventListener("click", function() {
  
  localStorage.setItem(LOCAL_STORAGE_SCORE, initialsEl.value + " - " + secondsLeft);

  document.getElementById("main-section").style.visibility = "visible";
  document.getElementById("main-head").style.visibility = "visible";
  document.getElementById("savedScore").style.visibility = "visible";
  document.getElementById("start").style.visibility = "visible";
})

