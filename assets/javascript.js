
var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessleft = 9;
var userChoice = []; 


var winstext = document.getElementById("wins-text");
var lossestext = document.getElementById("losses-text");
var userChoicetext = document.getElementById("userChoice-text");
var guesslefttext = document.getElementById("guessleft-text");
var userGuesstext = document.getElementById("userGuess");

var computerGuess;



document.onkeyup = function (event) {

    if (guessleft === 9){
        computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    }
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase()

        
        if (guessleft === 9){
            computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
        }
    
    if (computerChoice.includes(userGuess) && !userChoice.includes(userGuess)) {
        
        if (userGuess === computerGuess) {
        wins++;
        guessleft = 9;
        userChoice = [];
        } 
        else  {
        guessleft--;
        userChoice.push(userGuess);
        }
        if (guessleft === 0) {
        losses++;
        guessleft = 9;
        userChoice = [];
        }

        winstext.textContent = "Wins: " + wins;
        lossestext.textContent = "Losses: " + losses;
        guesslefttext.textContent = "Guess Left: " + guessleft;
        userChoicetext.textContent = "Your Guess: " + userChoice.join(", ");
        console.log(computerGuess);
    }
    else { 
        alert("Please pick a different letter")
    }
};

