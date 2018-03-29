// Available letters

var availableLetters = ["a","b","c","d"];

// Creating variables to hold the number of events
var wins = 0;
var losses = 0;
// var guesses = 10;
var guessesLeft = 10;
var guessesSoFar = 0;


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
      }

    // If user guess is the not the same as computer's letter.
    if ((userGuess !== computerGuess)) {
        guessesLeft--;
        document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
      }
    }

  // If there are no guesses left and the user has lost the game:
  else if (guessesLeft == 0){
      losses++;
      document.querySelector('#losses').innerHTML = "Losses: " + losses;
      alert("Sorry you are not psychic. Try again!");
      }

}
// Can I set the values to default to something on load? i.e. 10, 0

// If user guess is the same as a previous guess, do nothing.

// Take the letters they have entered and add them to HTML (push?)

// Reset Guesses Left back to 10 and clear letters guessed



//,"e","f","g","h","i","j","k","l","m","n","o","q","r","s","t","u","v","w","x","y","z"
