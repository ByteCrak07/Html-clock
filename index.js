var btn = document.getElementById("start");
btn.addEventListener("click", startTimer);
var angle = -90;

let interval;

function stopTimer() {
  clearInterval(interval);
  btn.innerHTML = "Resume";
  btn.removeEventListener("click", stopTimer);
  btn.addEventListener("click", startTimer);
}

function startTimer() {
  btn.innerHTML = "Stop";
  btn.removeEventListener("click", startTimer);
  btn.addEventListener("click", stopTimer);

  var element = document.getElementById("second-hand");

  function timer() {
    element.style.transform = `rotateZ(${angle}deg)`; //Rendering the value of count variable on screen

    angle = angle + 6;
  }
  interval = setInterval(timer, 1000); //The time interval specified is 1 second
}
