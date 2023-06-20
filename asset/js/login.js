$(document).ready(function() {
    $('#loginForm').submit(function(event) {
      var email = $('#email1').val(); // get the value of the input field with id="name"
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        event.preventDefault(); // prevent the form from submitting
        $('#name-error').text('Please valid your email.'); // display an error message
      }

      var password = $('#password1').val();
      var passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/;
      if (!passwordRegex.test(password)) {
        event.preventDefault();
        $('#password-error').text('Password must be at least 8 characters long and contain both letters and numbers.');
      }
    });
  });