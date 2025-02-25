const prompt = require('prompt-sync')();
const playerName = prompt("Welcome to the mystical forest! What is your name?");

function startGame() {
    
    const choice1 = prompt(`Hello, ${playerName}! You find yourself in a mystical forest. Do you choose the dark cave or the winding river? (cave/river)`);
  
    if (choice1 === "cave") {
      cavePath();
    } else if (choice1 === "river") {
      riverPath();
    } else {
      console.log("Invalid choice, please try again.");
      startGame();
    }
  }
  
  function cavePath() {
    const choice2 = prompt("You encounter a gentle creature. Do you talk to it or try to sneak past? (talk/sneak)");
    
    if (choice2 === "talk") {
        console.log(`The creature guides you to the treasure, ${playerName}. You win!`);
    } else if (choice2 === "sneak") {
        console.log("You get lost in the cave. Try again.");
      cavePath();
    } else {
        console.log("Invalid choice, please try again.");
      cavePath();
    }
  }
  
  function riverPath() {
    const choice2 = prompt("You find a rickety bridge. Do you cross it or search for another way? (cross/search)");
    
    if (choice2 === "cross") {
        console.log(`You safely cross and find a clue for another adventure, ${playerName}. You win!`);
    } else if (choice2 === "search") {
        console.log("You find a safer path but lose time. Try again.");
      riverPath();
    } else {
      console.log("Invalid choice, please try again.");
      riverPath();
    }
  }
  
  startGame();


//   random amoun of money 
//   allow user to travel and buy gear