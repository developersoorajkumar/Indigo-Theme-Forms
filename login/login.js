let email = document.getElementById("email");
let password = document.getElementById("password");
let logo = document.getElementById("logo");
let message = document.getElementById("message");
let success = document.getElementById("success");
let successMessage = document.getElementById("successMessage");

// User check
let userCheck = () => {
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
    if (user.emailVerified == true) {
      window.location.assign("./Welcome/welcome.html");
    } else if (user.emailVerified == false) {
      window.location.assign("./Verification/verification.html");
    } else {
      window.location.assign("./index.html");
    }
  });
};

function login() {
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
  } else if (password.value.length < 6) {
    logo.style.display = "inline";
    message.innerHTML = " Password atleast 6 Digits Long";
    setTimeout(function () {
      password.focus();
    }, 1000);
  } else {
    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        console.log("Signed In");
        var user = userCredential.user;
        // console.log(user);
        logo.style.display = "none";
        message.style.display = "none";
        success.style.display = "inline";
        successMessage.style.display = "inline";
        successMessage.innerHTML = "Logged In Successfully";
        setTimeout(() => {
          successMessage.style.display = "none";
          success.style.display = "none";
          email.value = "";
          password.value = "";
        }, 2000);
        setTimeout(() => {
          if (user.emailVerified == true) {
            window.location.assign("../Welcome/welcome.html");
            console.log("Email verified", "Signed in");
          } else {
            window.location.assign("../Verification/verification.html");
          }
        }, 3000);
      })
      .catch((error) => {
        console.log("error", error.message);
        logo.style.display = "inline";
        message.style.display = "inline";
        success.style.display = "none";
        successMessage.style.display = "none";
        message.innerHTML = error.message;
        setTimeout(() => {
          logo.style.display = "none";
          message.style.display = "none";
        }, 2000);
      });
  }
}
