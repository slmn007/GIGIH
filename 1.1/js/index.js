// Get the form
const form = document.querySelector("form");

// Get the email input
const email = document.querySelector("#email");

// Get the password input
const password = document.querySelector("#password");

// Get the submit button
const submit = document.querySelector("#bton");

// regular expression for email validation
const validEmailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// get the email validation error div
const emailValidationError = document.querySelector("#email-error");

// get the password validation error div
const passwordValidationError = document.querySelector("#password-error");

// Add event listener to the form
form.addEventListener("submit", function () {
  alert("Form submitted");
});

// Add event listener to the email input
email.addEventListener("input", function () {
  // if the email match the regular expression
  if (email.value.match(validEmailRegex) || email.value.length === 0) {
    emailValidationError.innerHTML = "";
  } else {
    emailValidationError.innerHTML = "*Input the correct format Email";
  }
});

// Add event listener to the password input
password.addEventListener("input", function () {
  // if the password is more than 6 characters
  if (password.value.length >= 6 || password.value.length === 0) {
    passwordValidationError.innerHTML = "";
  } else {
    passwordValidationError.innerHTML = "*Password minimum 6 characters";
  }
});
