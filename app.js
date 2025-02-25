const prompt = require('prompt-sync')();
let playerName = prompt("Welcome to the mystical forest! What is your name?");
let gold = 10;

function startGame() {
    
    const choice1 = prompt(`Hello, ${playerName}! You find yourself in a mystical forest. Do you choose the dark cave or the winding river? (cave/river)`);
  
    if (choice1 === "cave") {
        cavePath();
    } else if (choice1 === "river") {
        riverPath();
    } else {
        invalidChoiceDialog();
        startGame();
    }
  }
  
  function cavePath() {
    const choice2 = prompt("You encounter a gentle creature. Do you talk to it or try to sneak past? (talk/sneak)");
    
    if (choice2 === "talk") {
        let goldFoundInCave = 10;
        console.log(`The creature guides you to some hidden treasure. You find ${goldFoundInCave} gold pieces.`);
        gold += goldFoundInCave
        console.log(`You now have ${gold} pieces of gold!`);
    } else if (choice2 === "sneak") {
        console.log("You get lost in the cave and find nothing. Try again.");
        cavePath();
    } else {
        invalidChoiceDialog();
        cavePath();
    }
  }
  
  function riverPath() {
    const choice2 = prompt("You find a rickety bridge. Do you cross it or search for another way? (cross/search)");
    
    if (choice2 === "cross") {
        let goldFoundInForest = 5;
        console.log(`You safely crossed the river and found a hidden pouch with ${goldFoundInForest} gold pieces!`);
        gold += goldFoundInForest;
        console.log(`You have ${goldFoundInForest} gold pieces!`);
    } else if (choice2 === "search") {
        console.log("You find a safer path but lose time. Try again.");
        riverPath();
    } else {
        invalidChoiceDialog();
        riverPath();
    }
  }


  invalidChoiceDialog = () => (console.log("Invalid choice, please try again."));
  
  startGame();