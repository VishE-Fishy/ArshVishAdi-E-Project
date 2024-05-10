function dashboard(){
    location.replace("dashboard.html")
}

function message(){
    alert("The timer has ended")

}
function start_timer(){
        let secondlimit = document.getElementById("user_time").value
        var limit = secondlimit * 1000 + 1025
        var downloadTimer = setInterval(function(){
            if(secondlimit <= 0){
                clearInterval(downloadTimer);
                document.getElementById("countdown").innerHTML = "Finished";
  }         else {
                document.getElementById("countdown").innerHTML = secondlimit + " seconds remaining";
  }
            secondlimit -= 1;
            }, 1000);
  setTimeout(message, limit);
    }
