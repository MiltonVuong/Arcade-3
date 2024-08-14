// Import random number module
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function quiz() {
    // Variables
    let num1 = 0; // first number for questions
    let num2 = 0; // second number for questions
    let score = 0; // score counter
    let answer = 0; // user answer input
    // Display welcome message and ask to start game
    alert(`==============================\nQuick Math Quiz\n==============================`);
    // Start the game
    let play = prompt("Do you want to take a quick math quiz? ");
    if (play.toLowerCase() === "yes") {
        alert("Let's Start!");
        // Question 1
        let val = false;
        num1 = getRandomInt(1, 5);
        num2 = getRandomInt(1, 5);
        while (!val) {
            answer = parseFloat(prompt(`Q1: What is ${num1} + ${num2} = ? `));
            if (isNaN(answer)) {
                alert("Enter a real number.");
            } else {
                val = true;
            }
        }
        let check = num1 + num2;
        if (answer === check) {
            alert("Correct! Good Job!");
            score += 1;
        } else {
            alert("Incorrect. Better luck on the next question.");
        }
        // Question 2
        val = false;
        num1 = getRandomInt(1, 5);
        num2 = getRandomInt(1, 5);
        while (!val) {
            answer = parseFloat(prompt(`Q2: What is ${num1} - ${num2} = ? `));
            if (isNaN(answer)) {
                alert("Enter a real number.");
            } else {
                val = true;
            }
        }
        check = num1 - num2;
        if (answer === check) {
            alert("Correct! Good Job!");
            score += 1;
        } else {
            alert("Incorrect. Better luck on the next question.");
        }
        // Question 3
        val = false;
        num1 = getRandomInt(1, 5);
        num2 = getRandomInt(1, 5);
        while (!val) {
            answer = parseFloat(prompt(`Q3: What is ${num1} * ${num2} = ? `));
            if (isNaN(answer)) {
                alert("Enter a real number.");
            } else {
                val = true;
            }
        }
        check = num1 * num2;
        if (answer === check) {
            alert("Correct! Good Job!");
            score += 1;
        } else {
            alert("Incorrect. Better luck on the next question.");
        }
        // Question 4
        val = false;
        num1 = getRandomInt(1, 5);
        num2 = getRandomInt(1, 5);
        while (!val) {
            answer = parseFloat(prompt(`Q4: What is ${num1} / ${num2} = ? `));
            if (isNaN(answer)) {
                alert("Enter a real number.");
            } else {
                val = true;
            }
        }
        check = num1 / num2;
        if (answer === check) {
            alert("Correct! Good Job!");
            score += 1;
        } else {
            alert("Incorrect. Better luck on the next question.");
        }
        // Question 5
        val = false;
        num1 = getRandomInt(1, 5);
        num2 = getRandomInt(1, 5);
        while (!val) {
            answer = parseFloat(prompt(`Q5: What is ${num1} ^ ${num2} = ? `));
            if (isNaN(answer)) {
                alert("Enter a real number.");
            } else {
                val = true;
            }
        }
        check = Math.pow(num1, num2);
        if (answer === check) {
            alert("Correct! Good Job!");
            score += 1;
        } else {
            alert("Incorrect. Better luck on the next question.");
        }
        // Display quiz results
        alert(`==============================\nResults\n==============================\nYou scored ${score} out of 5.\nThanks for participating!`);
    } else if (play.toLowerCase() === "no") {
        alert("Maybe next time.");
    } else {
        alert("I didn't understand that.");
    }
}