var username = document.getElementById("user")
var password = document.getElementById("pass")

function login_button() {
    if (username.value == "AMVA" && password.value == 123){
        alert("Correct Login")
    } else{
        alert("Wrong Login")
    }
}
