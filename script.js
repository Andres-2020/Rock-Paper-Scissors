let getplayerChoice;

function getComputerChoice() {
  const random = Math.floor(Math.random()*3);
  if (random === 0) {
    return "Paper";
    } else if (random === 1) {
      return "Rock";
    } else {
      return "Scissors";
    }
  }

let playerScore = 0;
let computerScore = 0;

const Reset = document.querySelector ('#reset');
Reset.addEventListener ('click', () => {
  playerScore = 0;
  Player.innerText = `You: ${playerScore}`;
  computerScore = 0;
  Computer.innerText = `CPU: ${computerScore}`;
  rimg.src = "images/question.png";
  limg.src = "images/question.png";
  Result.innerText = 'Choose an option';
});

const imgOpacity = [
  {opacity: '0%'},
  {opacity: '100%'}
];

const imgTime = {
  duration: 250,
  iterations: 1,
}

Reset.addEventListener ('click', () => {
  limg.animate(imgOpacity, imgTime);
  rimg.animate(imgOpacity, imgTime);
});

const Player = document.querySelector ('#playerScore');
Player.innerText = `You: ${playerScore}`;

const Computer = document.querySelector ('#computerScore');
Computer.innerText = `CPU: ${computerScore}`;

const limg = document.querySelector ('#left');

const rimg = document.querySelector ('#right');

const Result = document.querySelector ('#result');

const Rock = document.querySelector ('#Rock');
Rock.addEventListener ('click', () => {getplayerChoice = "Rock";});
Rock.addEventListener ('click', playRound);
Rock.addEventListener ('click', () => limg.src = "images/rock-left.png");

const Paper = document.querySelector ('#Paper');
Paper.addEventListener ('click', () => {getplayerChoice = "Paper";});
Paper.addEventListener ('click', playRound);
Paper.addEventListener ('click', () => limg.src = "images/paper-left.png");

const Scissors = document.querySelector ('#Scissors');
Scissors.addEventListener ('click', () => {getplayerChoice = "Scissors";});
Scissors.addEventListener ('click', playRound);
Scissors.addEventListener ('click', () => limg.src = "images/scissors-left.png");

function playRound() {
  let playerSelection = getplayerChoice;
  let computerSelection = getComputerChoice();
  if (playerSelection == computerSelection) {
      Result.innerText = 'It\'s a tie';
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
      Result.innerText = 'You won! Rock beats scissors!';
      playerScore++;
    } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
      Result.innerText = 'Oops, you lost. Rock beats scissors!';
      computerScore++;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
      Result.innerText = 'You won! Scissors beats paper!';
      playerScore++;
    } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
      Result.innerText = 'Oops, you lost. Scissors beats paper!';
      computerScore++;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
      Result.innerText = 'You won! Paper beats rock!';
      playerScore++;
    } else if (computerSelection == "Paper" && playerSelection == "Rock") {
      Result.innerText = 'Oops, you lost. Paper beats rock!';
      computerScore++;
    }
  function displayScore() {
    playerScore += 0;
    Player.innerText = `You: ${playerScore}`;
    computerScore += 0;
    Computer.innerText = `CPU: ${computerScore}`;
    }
  displayScore();
  function computerImg() {
    if (computerSelection === "Rock") {
      rimg.src = "images/rock-right.png";
    } else if (computerSelection === "Paper") {
      rimg.src = "images/paper-right.png";
    } else if (computerSelection === "Scissors") {
      rimg.src = "images/scissors-right.png";
    }
  }
  computerImg();
  }