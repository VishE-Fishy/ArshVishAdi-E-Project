function dashboard(){
    location.replace("dashboard.html")
}
var timerDisplay;
function timer(cancel) {
      var countdown = document.getElementById("user_time").value; 
      if (cancel == 0) {
        if (isNaN(parseInt(countdown))) {
        document.getElementById('countdown').innerHTML = "Please input an integer"
        alert("Please input an integer")
        } else {
          timerDisplay = setInterval(function() {
          document.getElementById("start_timer").disabled = true;
          document.getElementById("stop_timer").disabled = false;
          document.getElementById("reset_timer").disabled = false;
          document.getElementById('user_time').value = countdown;
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
          document.getElementById('user_time').value = "";
          document.getElementById("countdown").innerHTML = "Timer has been reset"
      }
    }
  }
