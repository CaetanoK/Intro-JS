let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random()*10)
}

const compareGuesses = (human, computer) => {
  let target = generateTarget();
  if(Math.abs(target - human) <= Math.abs(target - computer) ){
    return true;
  } else {
    return false;
  }
}


const updateScore = (winner) => {
  if (winner === 'human') {
     humanScore++;
  } else if (winner = 'computer') {
     computerScore++;
  }
}

updateScore('computer')
console.log(computerScore)

const advanceRound = () => {
  currentRoundNumber++;
}

console.log(compareGuesses(5,8))
