// script.js
document.addEventListener("DOMContentLoaded", function() {
    const login = document.getElementById('login');
    const loginButton = document.getElementById('login-button');
    const loginClose = document.getElementById('login-close');
    const signup = document.getElementById('shift');
    const signupClose = document.getElementById('signup-close');
    const create = document.getElementById('create');
    const loginShift = document.getElementById('login-shift');
    const signupButton = document.getElementById('signup-button');
    
    // Load users from localStorage or initialize an empty array if it doesn't exist
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    function saveUser(email, password) {
      const newUser = { email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
    }
  
    function loginWithEmailAndPassword(email, password) {
      const foundUser = users.find(user => user.email === email && user.password === password);
      return !!foundUser; // Returns true if user is found, false otherwise
    }
  
    function showLogin() {
      login.classList.add('show-login');
    }
  
    function hideLogin() {
      login.classList.remove('show-login');
    }
  
    function showSignup() {
      create.classList.add('show-signup');
    }
  
    function hideSignup() {
      create.classList.remove('show-signup');
    }
  
    function handleLogin() {
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
  
      if (loginWithEmailAndPassword(email, password)) {
        alert('Login successful');
        // Redirect or perform actions after successful login
      } else {
        alert('Invalid email or password');
      }
    }
  
    function handleSignup() {
      const name = document.getElementById('signup-name').value;
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;
      // For demonstration purposes, I'm not handling mobile number here.
  
      // Basic validation
      if (name && email && password) {
        saveUser(email, password);
        alert('Account created successfully');
        hideSignup();
      } else {
        alert('Please fill in all fields');
      }
    }
  
    if (loginButton) {
      loginButton.addEventListener("click", handleLogin);
    }
  
    if (loginClose) {
      loginClose.addEventListener("click", hideLogin);
    }
  
    if (signup) {
      signup.addEventListener("click", showSignup);
    }
  
    if (signupClose) {
      signupClose.addEventListener("click", hideSignup);
    }
  
    if (loginShift) {
      loginShift.addEventListener("click", hideSignup);
    }
 

if (signupButton) {
  signupButton.addEventListener("click", handleSignup);
}

  });

 