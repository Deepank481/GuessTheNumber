//Computer Selects a Random number Between 1 and 20

const numberChoosen = Math.floor(Math.random() * 20 + 1);

const computerNumber = document.getElementById("computer-number");

const userGuess = document.getElementById("user-guess");

const showUserMessage = document.getElementById("message");

const submitGuessBtn = document.getElementById("submit-guess-btn");

submitGuessBtn.addEventListener("click", () => {
  checkUserGuess(userGuess.value);
});

function checkUserGuess(guessedNumber) {
  if (guessedNumber > 20 || guessedNumber < 1) {
    showUserMessage.innerText =
      "Invalid Input - The number should be between 1 and 20";
  }
}
