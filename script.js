let button = document.getElementById("welcomeBtn");
let message = document.getElementById("welcomeMsg");
let nameInput = document.getElementById("nameInput");

button.onclick = function() {
  let userName = nameInput.value;
  if (userName === "") {
    message.textContent = "Please enter your name!";
  } else {
    message.textContent = "Welcome, " + userName + "! You are awesome!";
  }
  nameInput.value = ""; // Clear the input field
};
