let email = document.getElementById("email");
let logo = document.getElementById("logo");
let message = document.getElementById("message");
let success = document.getElementById("success");
let successMessage = document.getElementById("successMessage");

function resetPassword(){
    firebase
      .auth()
      .sendPasswordResetEmail(email.value)
      .then(() => {
        console.log("Email verification sent!");
        success.style.display = "inline";
        successMessage.style.display = "inline";
        successMessage.innerHTML = "Verification email sent successfully";
        setTimeout(() => {
          logo.style.display = "none";
          message.style.display = "none";
          success.style.display = "none";
          successMessage.style.display = "none";
        }, 2000);
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
  };