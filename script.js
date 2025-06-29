const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// When "Sign Up" is clicked
signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

// When "Sign In" is clicked
signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});