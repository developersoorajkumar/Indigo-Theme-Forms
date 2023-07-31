let email = document.getElementById("email");
let logo = document.getElementById("logo");
let message = document.getElementById("message");
let success = document.getElementById("success");
let successMessage = document.getElementById("successMessage");


  function resetPassword() {
    if (email.value == "") {
      logo.style.display = "inline";
      message.style.display = "inline";
      message.innerHTML = "Email Address is required";
      setTimeout(function () {
        email.focus();
      }, 1000);
    } else {
    firebase
      .auth()
      .sendPasswordResetEmail(email.value)
      .then(() => {
        setTimeout(function () {
          success.style.display = "inline";
          successMessage.style.display = "inline";
          successMessage.innerHTML = "Email Sent Successfully";
        },1000)
        setTimeout(() => {
          successMessage.innerHTML = "Check Our Email From <b> noreply </b>";
        },5000)
        setTimeout(() => {
          success.style.display = "none";
          successMessage.style.display = "none";
          email.value = "";
        }, 10000);
        
      })
      .catch((error) => {
        console.log("error", error.message);
        logo.style.display = "inline";
        message.style.display = "inline";
        message.innerHTML = error.message;
        setTimeout(() => {
          logo.style.display = "none";
          message.style.display = "none";
        }, 2000);
      });
  }
}
