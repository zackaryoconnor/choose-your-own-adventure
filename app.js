const prompt = require('prompt-sync')();
let playerName = prompt("Welcome to the mystical forest! What is your name?");
let playerGold = 10;

function startGame() {
    const choice1 = prompt(`Hello, ${playerName}! You find yourself in a mystical forest. Do you choose the dark cave or the winding river? (cave/river/store)`);
  
    if (choice1 === "cave") {
        cavePath();
    } else if (choice1 === "river") {
        riverPath();
    } else if (choice1 === "store") {
        store();
    } else {
        invalidChoiceDialog();
        startGame();
    }
  }
  

  function cavePath() {
    const choice2 = prompt("You encounter a gentle creature. Do you talk to it or try to sneak past? (talk/sneak)");
    
    if (choice2 === "talk") {
        let goldFoundInCave = 10;
        console.log(`The creature guides you to some hidden treasure. You find ${goldFoundInCave} gold coins.`);
        playerGold += goldFoundInCave
        console.log(`You now have ${playerGold} gold coins!`);
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
        console.log(`You safely crossed the river and found a hidden pouch with ${goldFoundInForest} gold coins!`);
        playerGold += goldFoundInForest;
        console.log(`You have ${goldFoundInForest} gold coins!`);
    } else if (choice2 === "search") {
        console.log("You find a safer path but lose time. Try again.");
        riverPath();
    } else {
        invalidChoiceDialog();
        riverPath();
    }
  }

  
  function store() {
    console.log(`Welcome to the store, ${playerName}. You have ${playerGold} gold coins.`);
    const item = prompt(console.log("You can buy: - Torch (5 gold coins), - Rope (5 gold coins), or - Potion (10 gold coins). Type the item name or 'leave' to exit."));
    
    if (item === "Torch" && playerGold >= 5) {
        playerGold -= 5;
        console.log("You bought a Torch! This will help in dark places.");
    } else if (item === "Rope" && playerGold >= 5) {
        playerGold -= 5;
        console.log("You bought a Rope! This will help you cross obstacles.")
    } else if (item === "Potion" && playerGold >= 10) {
        playerGold -= 10;
        console.log("You bought a Potion! This might save you from danger.");
    } else if (item === "leave") {
        console.log("You leave the store.");
        return;
    } else {
        console.log("You don't have enough gold or entered an invalid choice");
    }

    console.log(`You have ${playerGold} gold coins.`);
    const buyAgain = prompt("Would you like to buy another item? (yes / no)")
    if (buyAgain === "yes") {
        store()
    } else {
        console.log("You leave the store.");
    }
  }


  invalidChoiceDialog = () => (console.log("Invalid choice, please try again."));
  
  startGame();