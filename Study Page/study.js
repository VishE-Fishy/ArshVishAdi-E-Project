function dashboard(){
  location.replace("dashboard.html")
}
var timerDisplay;
var countdown;
var hours;
var minutes;
var seconds;
function timer(cancel) {
    var countdown = hours * 3600 + minutes * 60 + seconds * 1;
    var hours = document.getElementById('user_hours').value
    var minutes = document.getElementById('user_minutes').value
    var seconds = document.getElementById('user_seconds').value 
    if (cancel == 0) {
      if (isNaN(hours) || hours % 1 != 0 || hours < 0) {
        document.getElementById('countdown').innerHTML = "Please type a positive whole number"
        alert("Please type a positive whole number")
      }
      else if (isNaN(minutes) || minutes % 1 != 0 || minutes < 0) {
        document.getElementById('countdown').innerHTML = "Please type a positive whole number"
        alert("Please type a positive whole number")
      }
      else if (isNaN(seconds) || seconds % 1 != 0 || seconds < 0) {
        document.getElementById('countdown').innerHTML = "Please type a positive whole number"
        alert("Please type a positive whole number")
      }
     else {
      alert(hours)
      alert(minutes)
      alert(seconds)
      alert(countdown)
      timerDisplay = setInterval(function() {
      document.getElementById("start_timer").disabled = true;
      document.getElementById("stop_timer").disabled = false;
      document.getElementById("reset_timer").disabled = false;
      document.getElementById('user_hours').value = hours
      document.getElementById('user_minutes').value = minutes
      document.getElementById('user_seconds').value = seconds
      countdown = hours * 3600 + minutes * 60 + seconds * 1
      if(countdown == 0){
          document.getElementById("countdown").innerHTML = "Timer has ended";
          clearInterval(timerDisplay);
          alert("Timer has ended")
          document.getElementById("start_timer").disabled = false
      } 
      else{
          document.getElementById('countdown').innerHTML = countdown+ " secs remaining";
          countdown--;
      }      
      }, 1000);
    }
  }
    if (cancel == 1) {
      clearInterval(timerDisplay);
      document.getElementById("start_timer").disabled = false;
      document.getElementById("stop_timer").disabled = true;
      document.getElementById("reset_timer").disabled = false; 
      alert("Timer has been stopped")  
  }
    if (cancel == 2) {
      if (confirm("Are you sure you want to reset the timer?") == true){
        clearInterval(timerDisplay);
        document.getElementById("start_timer").disabled = false;
        document.getElementById("stop_timer").disabled = true;
        document.getElementById("reset_timer").disabled = true;
        document.getElementById('user_seconds').value = "";
        document.getElementById("countdown").innerHTML = "Timer has been reset"
    }
  }
}
