document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signup-form");
    signupForm.style.display = "none"; // Initially hide the sign-up form
  
    const signupLink = document.getElementById("signup-link");
    const loginLink = document.getElementById("login-link");
  
    signupLink.addEventListener("click", function() {
      document.querySelector(".login").style.display = "none";
      signupForm.style.display = "block";
    });
  
    loginLink.addEventListener("click", function() {
      document.querySelector(".login").style.display = "block";
      signupForm.style.display = "none";
    });
  });
  