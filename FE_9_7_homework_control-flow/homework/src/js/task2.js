alert("You have 10 guesses.Guess 1-10");

let answer = 3;
let guess;
for (i = 0; i < 10; i++) {
    guess = prompt("What's your guess?");
    if (answer === guess) {
        alert("You guessed corectly");
        break;
    } else {
        guess = prompt("Please try again")
    }

}