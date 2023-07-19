let fullname = document.getElementById("name");
let fatherName = document.getElementById("fatherName");
let emailAddress = document.getElementById("emailAddress");
let newPassword = document.getElementById("newPassword");
let confirmPassword = document.getElementById("confirmPassword");
let cnicNumber = document.getElementById("cnicNumber");
let mobileNumber = document.getElementById("mobileNumber");
let selectCountry = document.getElementById("selectCountry");
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
  } else if (mobileNumber.value == "") {
    logo.style.display = "inline";
    message.innerHTML = " Mobile Number is required";
    setTimeout(function () {
      mobileNumber.focus();
    }, 1000);
  } else if (selectCountry.value == "") {
    logo.style.display = "inline";
    message.innerHTML = " Country is required";
    setTimeout(function () {
      selectCountry.focus();
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
    logo.style.display = "none";
    message.style.display = "none";
    success.style.display = "inline";
    successMessage.style.display = "inline";
    successMessage.innerHTML = "Successfully Registered";
    setTimeout(function () {
      successMessage.style.display = "none";
      success.style.display = "none";
      fullname.value = "";
      fatherName.value = "";
      emailAddress.value = "";
      newPassword.value = "";
      confirmPassword.value = "";
      cnicNumber.value = "";
      mobileNumber.value = "";
      selectCountry.value = "";
      gender.value = "";
      qualification.value = "";
      selectCourses.value = "";
      profilePhoto.value = "";
    }, 3000);
  }
}
function continueWithGoogle() {
  window.location.href = "https://www.google.com";
}