var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if (computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
} console.log ("Computer: " + computerChoice);

var compare = function(userChoice, computerChoice) {

  // lets reset
  document.getElementById('rl').style.display = "none";
  document.getElementById('rr').style.display = "none";

  if(userChoice === computerChoice) {
    console.log ("TIE!");
  }
  if(userChoice === "rock"){
    document.getElementById("rl").style.display = "block";
    if(computerChoice === "scissors") {
      document.getElementById("sr").style.display = "block";
      console.log ("You win!");
    } else if (computerChoice === "paper") {
      document.getElementById("pr").style.display = "block";
      console.log ("Computer wins!");
    }
  }
  if(userChoice === "paper") {
    document.getElementById("pl").style.display = "block";
    if(computerChoice === "rock") {
      document.getElementById("rr").style.display = "block";
      console.log ("You win");
    } else if (computerChoice === "scissors") {
      document.getElementById("sr").style.display = "block";
      console.log ("Computer wins!");
    }
  }
  if(userChoice === "scissors") {
    document.getElementById("sl").style.display = "block";
    if(computerChoice === "paper") {
      document.getElementById("pr").style.display = "block";
      console.log ("You win!");
    } else if (computerChoice === "rock") {
      document.getElementById("rr").style.display = "block";
      console.log ("Computer wins!");
    }
  }
};
compare(userChoice, computerChoice);



