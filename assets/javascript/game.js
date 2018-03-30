// Available letters

var availableLetters = ["abcdefghijklmnopqrstuvwxyz".split("")];

// Creating variables to hold the number of events
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  // Determines which key was pressed.
  var userGuess = event.key;
  console.log (userGuess);

  // Randomly chooses a letter from the options array. This is the Computer's guess.
  var computerGuess = availableLetters[Math.floor(Math.random() * availableLetters.length)];
  console.log (computerGuess);

  // If there are one or more turns available:
  if (guessesLeft > 0) {

    // If user guess is the same as computer's letter and they win.
    if ((userGuess === computerGuess)) {
        wins++;
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
        alert("Nice job! You are psychic!");
        guessesLeft = 10;
        guessedLetters = [];
      }

    // If user guess is the not the same as computer's letter.
    if ((userGuess !== computerGuess)) {
        guessesLeft--;
        document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
      }
    }

  // If there are no guesses left and the user has lost the game:
  else if (guessesLeft === 0){
      losses++;
      document.querySelector('#losses').innerHTML = "Losses: " + losses;
      alert("Sorry you are not psychic. Try again!");
      guessesLeft = 10;
      guessedLetters = [];
      }

  // Updating the guesses so far HTML with the letters pressed
  var updateGuessesSoFar = function() {
    document.querySelector('#guessesSoFar').innerHTML = "Your Guesses So Far: " + guessedLetters.join(', ');
  };

  // Storing the letter the user pressed
  guessedLetters.push(userGuess);
  updateGuessesSoFar();

}
