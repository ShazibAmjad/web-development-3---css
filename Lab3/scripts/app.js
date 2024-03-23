/*
    Shazib Amjad
    100889284
    2024-03-22
    Lab 3 - js file
*/

// Login Form Submission
$('#loginForm').submit(function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Gets the username from the form
  var username = document.getElementById('username').value;

  // Inserts the username between the Contact Us and Login/Logout links
  var navbarTextElements = document.getElementsByClassName('navbar-text');
  for (var i = 0; i < navbarTextElements.length; i++) {
      if (navbarTextElements[i].innerText.includes('Contact Us')) {
          var contactUsLink = navbarTextElements[i];
      }
      if (navbarTextElements[i].innerText.includes('Login/Logout')) {
          var loginLink = navbarTextElements[i];
      }
  }
  
  var usernameListItem = document.createElement('li');
  usernameListItem.className = 'nav-item';
  usernameListItem.innerText = username;

  contactUsLink.parentNode.insertBefore(usernameListItem, loginLink);
});

// Registers Form Submission
$('#registerForm').submit(function(event) {
  event.preventDefault(); // Prevents the form from submitting normally

  // Performs form validation
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  // Validates First Name
  if (firstName.length < 2) {
      displayErrorMessage('First name must be at least 2 characters long.');
      return;
  }

  // Validates Last Name
  if (lastName.length < 2) {
      displayErrorMessage('Last name must be at least 2 characters long.');
      return;
  }

  // Validates Email
  if (email.length < 8 || !email.includes('@')) {
      displayErrorMessage('Please enter a valid email address.');
      return;
  }

  // Validates Password
  if (password.length < 6 || password !== confirmPassword) {
      displayErrorMessage('Passwords must be at least 6 characters long and match.');
      return;
  }

  // Creates User object and display in console
  var user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
  };
  console.log(user);

  // Clears the form after submission
  document.getElementById('registerForm').reset();
});

// Functions to display error message
function displayErrorMessage(message) {
  // Creates error message element
  var errorMessage = document.createElement('div');
  errorMessage.className = 'error-message';
  errorMessage.innerText = message;

  // Appends error message to form
  var errorMessageContainer = document.getElementById('errorMessage');
  errorMessageContainer.innerHTML = ''; // it will clear previous error messages
  errorMessageContainer.appendChild(errorMessage);

  // Redirect to login page
  window.location.href = "login.html";
}
