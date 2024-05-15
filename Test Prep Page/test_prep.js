let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let isRunning = false;
let mousedownTime = 0;
let mouseupTime = 0;
var addtaskbt = document.getElementById("addtask");
var taskebar = document.getElementsByClassName("tasker");

function addtask() {
    taskebar.style.display = "block";
}

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(incrementTime, 1000);
    }
}
function pauseStopwatch() {
    clearInterval(timer);
    isRunning = false;
}
function resetStopwatch() {
    let pressDuration = mouseupTime - mousedownTime;
    if (pressDuration >= 3000) { // Check if press duration is 3 seconds or more
        clearInterval(timer);
        isRunning = false;
        hours = 0;
        minutes = 0;
        seconds = 0;
        document.getElementById("stopwatch").innerText = "00:00:00";
    }
}
function incrementTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
    let formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById("stopwatch").innerText = formattedTime;
}
document.querySelector("button:nth-child(3)").onmousedown = function () {
    mousedownTime = new Date().getTime();
}
document.querySelector("button:nth-child(3)").onmouseup = function () {
    mouseupTime = new Date().getTime();
    resetStopwatch();
}
