let fullname = document.getElementById("name");
let fatherName = document.getElementById("fatherName");
let emailAddress = document.getElementById("emailAddress");
let newPassword = document.getElementById("newPassword");
let confirmPassword = document.getElementById("confirmPassword");
let cnicNumber = document.getElementById("cnicNumber");
let mobileNumber = document.getElementById("mobileNumber");
let gender = document.getElementById("gender");
let qualification = document.getElementById("qualification");
let selectCourses = document.getElementById("selectCourses");
let profilePhoto = document.getElementById("profilePhoto");
let message = document.getElementById("message");
let logo = document.getElementById("logo");
let success = document.getElementById("success");
let successMessage = document.getElementById("successMessage");

// sign up function
function signUp() {
  if (fullname.value == "") {
    logo.style.display = "inline";
    message.innerHTML = "Name is required";

    setTimeout(function () {
      fullname.focus();
    }, 1000);
  } else if (fatherName.value == "") {
    logo.style.display = "inline";
    message.innerHTML = " Father Name is required";
    setTimeout(function () {
      fatherName.focus();
    }, 1000);
  } else if (emailAddress.value == "") {
    logo.style.display = "inline";
    message.innerHTML = "Email Address is required";
    setTimeout(function () {
      emailAddress.focus();
    }, 1000);
  } else if (newPassword.value == "") {
    logo.style.display = "inline";
    message.innerHTML = " Password is required";
    setTimeout(function () {
      newPassword.focus();
    }, 1000);
  } else if (newPassword.value.length < 6) {
    logo.style.display = "inline";
    message.innerHTML = " Password atleast 6 Digits Long";
    setTimeout(function () {
      newPassword.focus();
    }, 1000);
  } else if (confirmPassword.value == "") {
    logo.style.display = "inline";
    message.innerHTML = " Confirm Password is required";
    setTimeout(function () {
      confirmPassword.focus();
    }, 1000);
  } else if (confirmPassword.value != newPassword.value) {
    logo.style.display = "inline";
    message.innerHTML = "Password does not match";
    setTimeout(function () {
      newPassword.focus();
    }, 1000);
  } else if (cnicNumber.value == "") {
    logo.style.display = "inline";
    message.innerHTML = " CNIC Number is required";
    setTimeout(function () {
      cnicNumber.focus();
    }, 1000);
  } else if (cnicNumber.value.length !== 13) {
    logo.style.display = "inline";
    message.innerHTML = "13 Digits are required";
    setTimeout(function () {
      cnicNumber.focus();
    }, 1000);
  } else if (mobileNumber.value == "") {
    logo.style.display = "inline";
    message.innerHTML = " Mobile Number is required";
    setTimeout(function () {
      mobileNumber.focus();
    }, 1000);
  } else if (mobileNumber.value.length !== 11) {
    logo.style.display = "inline";
    message.innerHTML = " 11 Digits are required";
    setTimeout(function () {
      mobileNumber.focus();
    }, 1000);
  } else if (gender.value == "") {
    logo.style.display = "inline";
    message.innerHTML = " Gender is required";
    setTimeout(function () {
      gender.focus();
    }, 1000);
  } else if (qualification.value == "") {
    logo.style.display = "inline";
    message.innerHTML = " Qualification is required";
    setTimeout(function () {
      qualification.focus();
    }, 1000);
  } else if (selectCourses.value == "") {
    logo.style.display = "inline";
    message.innerHTML = " Course Selection is required";
    setTimeout(function () {
      selectCourses.focus();
    }, 1000);
  } else if (profilePhoto.value == "") {
    logo.style.display = "inline";
    message.innerHTML = " Profile Photo is required";
    setTimeout(function () {
      profilePhoto.focus();
    }, 1000);
  } else {
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress.value, confirmPassword.value)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log(user);
        setTimeout(function () {
          logo.style.display = "none";
          message.style.display = "none";
          success.style.display = "inline";
          successMessage.style.display = "inline";
          successMessage.innerHTML = "Successfully Registered";
          setTimeout(function () {
            if (user.emailVerified == true) {
              window.location.assign("./Welcome/welcome.html");
            } else {
              window.location.assign("./Verification/verification.html");
            }
          }, 3000);
        });
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
    firebase.firestore().collection("Users").add({
      Username: fullname.value,
      FatherName: fatherName.value,
      Email: emailAddress.value,
      Password: newPassword.value,
      CNIC: cnicNumber.value,
      MobileNumber: mobileNumber.value,
      Gender: gender.value,
      Qualification: qualification.value,
      Course: selectCourses.value,
    });
  }
}
function continueWithGoogle() {
  window.location.href = "https://www.google.com";
}
