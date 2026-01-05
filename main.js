// pseudo-code:
// 1. generate a random choice by computer
// 2. ask user for his choice
// 3. compare both choice 
// 4. update score of winner
// 5. print message about score

// step 1
const compChoice = () => { 
  const option = ["rock", "paper", "scissor"];
  const index = Math.floor(Math.random() * 3);
  return option[index];
}

// console.log(compChoice());

// step 2
const availableChoices = document.querySelectorAll(".choice");

availableChoices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log(`your choice ${userChoice}`);
    playGame(userChoice);
  });
});


// step 3
const msg = document.querySelector("#result");

const drawGame = () => {
  msg.innerText = "Game is draw";
  msg.style.backgroundColor = "white"
}

const playGame = (userChoice) => {
  const genCompChoice = compChoice();
  console.log(`computer choice is ${genCompChoice}`);
  if (userChoice === genCompChoice){
    drawGame();
  }
  else{
    let userWin = true; 
    if (userChoice === "rock"){
      userWin = (genCompChoice === "paper" ? false : true);
    }
    else if (userChoice === "paper"){
      userWin = (genCompChoice === "scissor" ? false : true);
    }
    else {
      userWin = (genCompChoice === "rock" ? false : true);
    }
      showWinner(userWin);
  }
}

// step 4

const showWinner = (userWin) => {
  const userScore = document.querySelector("#userScore");
  const msg = document.querySelector("#result");
  
  if(userWin) {
    let currentScore = parseInt(userScore.innerText);
    userScore.innerText = currentScore + 1;
    msg.innerText = "You Win 🔥";
    msg.style.backgroundColor = "green";
  }
  else{
    const compScoreElement = document.querySelector("#compScore");
    let compScore = parseInt(compScoreElement.innerText);
    compScoreElement.innerText = compScore + 1;
    msg.innerText = "You Lose ☠️";
    msg.style.backgroundColor = "red";
  }
}