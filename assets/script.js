var highScore = document.querySelector("#scores");
var timer = document.querySelector("#time");
var startBtn = document.querySelector("#start");

startBtn.addEventListener("click", myFunction);

var secondsLeft = 30

// function for the timer to run
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage(); 
    } 
  }, 1000);
}