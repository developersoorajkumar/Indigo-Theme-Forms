let email = document.getElementById("email");
let password = document.getElementById("password");
let logo = document.getElementById("logo");
let message = document.getElementById("message");
let success = document.getElementById("success");
let successMessage = document.getElementById("successMessage");

function adminLogin() {
  if (email.value == "") {
    logo.style.display = "inline";
    message.innerHTML = "Email Address is required";
    setTimeout(function () {
      email.focus();
    }, 1000);
  } else if (password.value == "") {
    logo.style.display = "inline";
    message.innerHTML = "Password is required";
    setTimeout(function () {
      password.focus();
    }, 1000);
  }else if (password.value.length < 6) {
    logo.style.display = "inline";
    message.innerHTML = " Password atleast 6 Digits Long";
    setTimeout(function () {
      password.focus();
    }, 1000);
  }  else {
    logo.style.display = "none";
    message.style.display = "none";
    success.style.display = "inline";
    successMessage.style.display = "inline";
    successMessage.innerHTML = "Logged In Successfully";
    setTimeout(function () {
      successMessage.style.display = "none";
      success.style.display = "none";
      email.value = "";
      password.value = "";
    }, 3000);

  }
}
