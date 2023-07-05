// Get the form
const form = document.querySelector("form");

// Get the email input
const email = document.querySelector("#email");

// Get the password input
const password = document.querySelector("#password");

// Get the submit button
const submit = document.querySelector("button");

// regular expression for email validation
const validEmailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// get the email validation error div
const emailValidationError = document.querySelector("#emailValidationError");

// get the password validation error div
const passwordValidationError = document.querySelector(
  "#passwordValidationError"
);

// Add event listener to the form
form.addEventListener("submit", function (event) {
  // Prevent the default action of the form
  event.preventDefault();

  // if the email not match the regular expression
  if (!email.value.match(validEmailRegex)) {
    emailValidationError.innerHTML = "Please enter a valid email";
  }

  // if the password is less than 6 characters
  if (password.value.length < 6) {
    passwordValidationError.innerHTML =
      "Please enter a password with at least 6 characters";
  }

  // if the email and password are valid
  if (email.value.match(validEmailRegex) && password.value.length >= 6) {
    alert("Form submitted");
  }
});

// Add event listener to the email input
email.addEventListener("input", function () {
  // if the email match the regular expression
  if (email.value.match(validEmailRegex)) {
    emailValidationError.innerHTML = "";
  } else {
    emailValidationError.innerHTML = "Please enter a valid email";
  }
});

// Add event listener to the password input
password.addEventListener("input", function () {
  // if the password is more than 6 characters
  if (password.value.length >= 6) {
    passwordValidationError.innerHTML = "";
  } else {
    passwordValidationError.innerHTML =
      "Please enter a password with at least 6 characters";
  }
});
