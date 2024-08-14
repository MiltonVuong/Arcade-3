// Global variables for session
let gameLoop = 'y';
let playLoop;
let userName;
let gameName;
let countGames = 0;
let countWins = 0;
let winPercentage;

// Welcome message with user name prompt on first run
function welcomeMessage(gameName) {
  alert(`Welcome to the ${gameName} game!`);
  if (!userName) {
    userName = validateInput('Please enter your name to get started:', 'Your name cannot be blank. Please enter something.');
  }
  alert(`Hi ${userName}, let's play!`);
}

// Check if user input is valid for y/n prompts
function validateYN(promptMessage) {
  let input;
  while (true) {
    input = prompt(promptMessage)?.trim().toLowerCase();
    if (input === 'y' || input === 'n') return input;
    alert("Invalid input. Please enter 'y' or 'n'.");
  }
}

// Check if user input is blank or cancel is clicked
function validateInput(inputPrompt, inputError) {
  let input;
  while (true) {
    input = prompt(inputPrompt)?.trim();
    if (input) return input;
    alert(inputError);
  }
}

// Ask user if they want to play another round of the current game
function gameLoopF() {
  gameLoop = validateYN("Would you like to keep playing this game? y/n");
  return gameLoop === 'y' ? gameLoop : playLoopF();
}

// Ask user if they want to play another game in the library
function playLoopF() {
  winPercentage = Math.round((countWins / countGames) * 100)
  playLoop = validateYN("Would you like to pick another game to play? y/n");
  if (playLoop === 'y') {
    // End session with farewell message and refresh button
  } else {
    document.body.innerHTML = `
      <div class="container">
        <div class="item"><h2>Thanks for Playing!</h2></div>
        <div class="item"><button onclick="location.reload()">Reload Page</button></div>
        <br>
        <div class="item">    
          <table>
            <tbody>
              <tr>
                <th class="center" colspan="2">Session Statistics</th>
              </tr>
              <tr>
                 <td>Rounds Played:</td>
                 <td class="right">${countGames}</td>
             </tr>
             <tr>
                  <td>Number of Wins:</td>
                  <td class="right">${countWins}</td>
              </tr>
             <tr>
                 <td>Win Percentage:</td>
                 <td class="right">${winPercentage}%</td>
             </tr>
            </tbody>
          </table>
        </div>  
      </div>`;
    // I interpreted the requirements as adding an alert ‘message’ notifying them of earning a badge, but this code is here if it should be part of the HTML display
    //<div class="item">    
    //    <p>You earned a ${getBadge(winPercentage)} badge!</p>    
    //</div>
  }
  return winPercentage;
}

function getBadge(winPercentage) {
  let badge;
  switch (true) {
    case (winPercentage >= 0 && winPercentage <= 25):
      badge = "Stone";
      break;
    case (winPercentage > 25 && winPercentage <= 50):
      badge = "Bronze";
      break;
    case (winPercentage > 50 && winPercentage <= 75):
      badge = "Iron";
      break;
    case (winPercentage > 75 && winPercentage <= 100):
      badge = "Silicon";
      break;
    default:
      badge = "Invalid percentage";
  }
  return badge;
}

// Guessing Game (function declaration)
function guessingGame() {
  welcomeMessage('Guessing');
  gameLoop = 'y';
  while (gameLoop === 'y') {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let guess = parseInt(validateInput('Guess a Number between 1 and 10.', 'Your guess cannot be blank. Guess a Number between 1 and 10.'));
    let count = 1;
    while (guess !== randomNumber) {
      guess = parseInt(validateInput(guess > randomNumber ? 'Your guess was too high, guess again.' : 'Your guess was too low, guess again.', 'Your guess cannot be blank. Guess a Number between 1 and 10.'));
      count++;
    }
    alert(`You guessed it in ${count} guesses!`);
    // Made assumption that 3 wins or less is a win, 4 or more guesses is a loss
    if (count < 4) {
      countWins++;
      // alert(countWins); used for testing
    }
    // increase game count by 1
    countGames++;
    gameLoop = gameLoopF();
  }
  // end game (not session) farewell message
  setTimeout(() => {
    alert(`Thank you for playing the Guessing game, ${userName}!`)
    // award badge if session is ended
    if (playLoop === 'n') {
      alert(`You earned a ${getBadge(winPercentage)} badge!`)
    }
  }, 0);
}

// Magic 8 Ball Game (function expression)
const magicEightBall = function() {
  // Array of possible answers
  const answers = ["The stars say yes, but patience is key.",
    "No, but a better opportunity awaits.",
    "Yes, and it will bring unexpected joy.",
    "No, but don’t lose hope; things will turn around.",
    "Yes, and it will happen sooner than you think.",
    "No, but this is a chance to learn and grow.",
    "Yes, and it will open new doors for you.",
    "No, but something even better is on the way."
  ];
  // function to get a random answer
  function getRandomAnswer() {
    let randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
  }
  welcomeMessage('Magic 8 Ball');
  // function to ask a question and display the answer
  function askQuestion() {
    gameLoop = 'y';
    while (gameLoop === 'y') {
      // prompt user to ask question
      let inputPrompt = `What would you like to ask?`;
      let inputError = `Please ask a question. I can't read your mind too.`;
      validateInput(inputPrompt, inputError);
      // display answer
      let answer = getRandomAnswer();
      alert(`Magic 8 Ball says: ${answer}`);
      // asking a question counts as a win
      countWins++;
      // alert(countWins); used for testing
      // increase game count by 1
      countGames++;
      // ask play to play again, play different game
      gameLoop = gameLoopF();
    }
    // end game (not session) farewell message
    setTimeout(() => {
      alert(`Thank you for playing the Magic 8 Ball game, ${userName}!`)
      // award badge if session is ended
      if (playLoop === 'n') {
        alert(`You earned a ${getBadge(winPercentage)} badge!`)
      }
    }, 0);
  }
  // Start the game
  askQuestion();
}

// Bear Ninja Hunter Game (arrow function)
const bearNinjaHunter = () => {
  // Variables
  let userGuess;
  let botGuess;
  let winnerCheck;
  let playerPick;
  let botPick;
  let resultMessage;
  let compindex;
  let playerindex;
  const choices = ['bear', 'ninja', 'hunter'];
  welcomeMessage('Bear, Hunter, Ninja');
  do {
    // bot selects random option
    compindex = Math.floor(Math.random() * choices.length);
    botGuess = choices[compindex];
    // prompt user for guess
    userGuess = prompt('Who are you: Bear, Ninja, or Hunter?');
    // validate user input
    while (userGuess === null || !choices.includes(userGuess.toLowerCase())) {
      userGuess = prompt("Invalid input. Guess either Bear, Ninja, or Hunter.");
    }
    // convert user guess choices index
    playerindex = choices.findIndex((element) => element.toLowerCase() === userGuess.toLowerCase());
    //determine result case
    const tie = playerindex === compindex;
    if (tie) {
      winnerCheck = 2;
    } else {
      if ((playerindex === 0 && compindex === 1) || (playerindex === 2 && compindex === 0) || (playerindex === 1 && compindex === 2)) {
        winnerCheck = 1;
      } else {
        winnerCheck = 3;
      }
    }
    // display countdown
    for (let i = 3; i >= 0; i--) {
      alert(i);
    }
    // select case message
    switch (winnerCheck) {
      case 1:
        resultMessage = 'You Win!!'
        countWins++;
        // alert(countWins); used for testing
        break;
      case 2:
        resultMessage = 'You Tied.'
        break;
      case 3:
        resultMessage = 'The Computer Wins!!'
        break;
    }
    // stage results
    playerPick = `${userName} you chose ${userGuess}!`;
    botPick = `The computer chose ${botGuess}!`;
    // display results
    alert(`${playerPick}\n${botPick}\n${resultMessage}`);
    // increase game count by 1
    countGames++;
    // ask play to play again, play different game
    gameLoop = gameLoopF();
  } while (gameLoop === 'y');
  // end game (not session) farewell message
  setTimeout(() => {
    alert(`Thank you for playing the Bear, Hunter, Ninja game, ${userName}!`)
    // award badge if session is ended
    if (playLoop === 'n') {
      alert(`You earned the ${getBadge(winPercentage)} badge!`)
    }
  }, 0);
}