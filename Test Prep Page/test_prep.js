let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let isRunning = false;
let mousedownTime = 0;
let mouseupTime = 0;
let checkclknumber = 0;
var addtaskbt = document.getElementById("addtask");
var taskebar = document.getElementById("tasker1")
var taskebar2 = document.getElementById("tasker2")
var taskebar3 = document.getElementById("tasker3")
var taskebar4 = document.getElementById("tasker4")
var checker1_1 = document.getElementById("checker1.1")
var checker1_2 = document.getElementById("checker1.2")
var checker1_3 = document.getElementById("checker1.3")
var checker2_1 = document.getElementById("checker2.1")
var checker2_2 = document.getElementById("checker2.2")
var checker2_3 = document.getElementById("checker2.3")
var checker3_1 = document.getElementById("checker3.1")
var checker3_2 = document.getElementById("checker3.2")
var checker3_3 = document.getElementById("checker3.3")
var checker4_1 = document.getElementById("checker4.1")
var checker4_2 = document.getElementById("checker4.2")
var checker4_3 = document.getElementById("checker4.3")

function subcompleter1_1() {
    checker1_1.style.backgroundColor = "green";
}
function subcompleter1_2() {
    checker1_2.style.backgroundColor = "green";
}
function subcompleter1_3() {
    checker1_3.style.backgroundColor = "green";
}
function subcompleter2_1() {
    checker2_1.style.backgroundColor = "green";
}
function subcompleter2_2() {
    checker2_2.style.backgroundColor = "green";
}
function subcompleter2_3() {
    checker2_3.style.backgroundColor = "green";
}
function subcompleter3_1() {
    checker3_1.style.backgroundColor = "green";
}
function subcompleter3_2() {
    checker3_2.style.backgroundColor = "green";
}
function subcompleter3_3() {
    checker3_3.style.backgroundColor = "green";
}
function subcompleter4_1() {
    checker4_1.style.backgroundColor = "green";
}
function subcompleter4_2() {
    checker4_2.style.backgroundColor = "green";
}
function subcompleter4_3() {
    checker4_3.style.backgroundColor = "green";
}

function maincompleter() {
    // checkclknumber = +1;
    taskebar.style.backgroundColor = "gray"  
    // if (checkclknumber == 2) {
    //     taskebar.style.backgroundColor = "whitesmoke"
    // }
}
function maincompleter2() {
    taskebar2.style.backgroundColor = "gray"  
}
function maincompleter3() {
    taskebar3.style.backgroundColor = "gray"  
}
function maincompleter4() {
    taskebar4.style.backgroundColor = "gray"  
}

function addtask() {
    taskebar.style.display = "block";
}
function addtask2() {
    taskebar2.style.display = "block";
}
function addtask3() {
    taskebar3.style.display = "block";
}
function addtask4() {
    taskebar4.style.display = "block";
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

function refreshPage() {
    location.reload(); // Reloads the current page
}
