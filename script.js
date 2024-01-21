//Computer Selects a Random number Between 1 and 20

const range = 20;

function chooseNumberToGuess(range) {
  return Math.floor(Math.random() * range + 1); //range can be set between 1 to range
}

let numberChoosen = chooseNumberToGuess(range);

//Imortant DOM element to be manipulated

const computerNumber = document.getElementById("computer-number");

const userGuess = document.getElementById("user-guess");

const showUserMessage = document.getElementById("message");

const submitGuessBtn = document.getElementById("submit-guess-btn");

const userScore = document.getElementById("score");

const gameResetBtn = document.getElementById("game-reset-btn");

const highScoreElement = document.getElementById("high-score");

const gameInstruction = document.getElementById("game-instruction");
gameInstruction.innerText = `Guess a number between 1 and ${range}:`;

//Score Declaration and high score declaration

let score = range;
let highScore = 0;

userScore.innerText = score;

//Adding event to the buttons
submitGuessBtn.addEventListener("click", () => {
  checkUserGuess(userGuess.value);
});

gameResetBtn.addEventListener("click", resetGame);

//Functions to be invoked when events are given by the user

//Function to check the user guess
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
    } else {
      showUserMessage.innerText = "You Guessed it Right!!!";
      computerNumber.innerText = numberChoosen;
      submitGuessBtn.disabled = true;
      userGuess.disabled = true;
    }
    score -= 1;
    userScore.innerText = score;
  }
}

//Function to reset the game
function resetGame() {
  if (score > highScore) {
    highScore = score;
    highScoreElement.innerText = highScore;
  }
  score = 20;
  userScore.innerText = score;
  computerNumber.innerText = "?";
  userGuess.value = "";
  numberChoosen = chooseNumberToGuess(range);
  showUserMessage.innerText = "";
  submitGuessBtn.disabled = false;
  userGuess.disabled = false;
}
