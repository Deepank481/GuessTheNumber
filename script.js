//Computer Selects a Random number Between 1 and 20

const range = 20;

function chooseNumberToGuess(range) {
  return Math.floor(Math.random() * range + 1);
}

let numberChoosen = chooseNumberToGuess(range);

const computerNumber = document.getElementById("computer-number");

const userGuess = document.getElementById("user-guess");

const showUserMessage = document.getElementById("message");

const submitGuessBtn = document.getElementById("submit-guess-btn");

const userScore = document.getElementById("score");

const gameResetBtn = document.getElementById("game-reset-btn");

let score = 20;

userScore.innerText = score;

submitGuessBtn.addEventListener("click", () => {
  checkUserGuess(userGuess.value);
});

gameResetBtn.addEventListener("click", resetGame);

function checkUserGuess(number) {
  guessedNumber = parseInt(number);
  if (guessedNumber === NaN) {
    howUserMessage.innerText = "Invalid Input - Not a valid number";
  } else if (guessedNumber > 20 || guessedNumber < 1) {
    showUserMessage.innerText =
      "Invalid Input - The number should be between 1 and 20";
  } else {
    if (guessedNumber !== numberChoosen) {
      if (guessedNumber > numberChoosen) {
        showUserMessage.innerText = "Too High";
      } else {
        showUserMessage.innerText = "Too low";
      }
      score -= 1;
      userScore.innerText = score;
    } else {
      showUserMessage.innerText = "You Guessed it Right!!!";
      computerNumber.innerText = numberChoosen;
    }
  }
}

function resetGame() {
  score = 20;
  userScore.innerText = score;
  computerNumber.innerText = "?";
  userGuess.value = "";
  numberChoosen = chooseNumberToGuess(range);
  showUserMessage.innerText = "";
}
