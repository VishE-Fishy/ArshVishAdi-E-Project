var username = document.getElementById("user")
var password = document.getElementById("pass")
var userlabel = document.getElementById("userlabel")
var passlabel = document.getElementById("passlabel")
var loginbox = document.getElementById("loginbox")

function login_button() {
  if (username.value == "AMVA" && password.value == 123) {
    passlabel.textContent = "Succsesful Login"
    username.value = ""
    password.value = ""
    loginbox.style.borderColor = "black"
  } else {
    passlabel.textContent = "Incorrect Login. Your username or password is incorrect"
    loginbox.style.borderColor = "red"
  }
  }
