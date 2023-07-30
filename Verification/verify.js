let message = document.getElementById("message");
let logo = document.getElementById("logo");
let success = document.getElementById("success");
let successMessage = document.getElementById("successMessage");
let verify = () => {
    firebase
      .auth()
      .currentUser.sendEmailVerification()
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
      }).catch((error) => {
        console.log("error", error.message);
        logo.style.display = "inline";
        message.style.display = "inline";
        message.innerHTML = error.message;
        setTimeout(() => {
          logo.style.display = "none";
          message.style.display = "none";
        }, 2000);
       
          if (user.emailVerified == true) {
            window.location.assign("../Login/login.html");
            console.log("Email verified", "Signed in");
          } else {
            window.location.assign("verification.html");
          }
        
      })
  };