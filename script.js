// Function to simulate rolling the dice
function rollDice() {
    const dice1 = document.getElementById('dice1');
    const dice2 = document.getElementById('dice2');

    // Get the input values for decisions
    const decision1 = document.getElementById('decision1').value || "Decision 1";
    const decision2 = document.getElementById('decision2').value || "Decision 2";

    // Generate random values for the two dice (1 to 6)
    const dice1Value = Math.floor(Math.random() * 6) + 1;
    const dice2Value = Math.floor(Math.random() * 6) + 1;

    // Rotate the dice to the corresponding value
    rotateDice(dice1, dice1Value);
    rotateDice(dice2, dice2Value);

    // After the animation completes, show the result
    setTimeout(() => {
        let resultMessage;
        if (dice1Value > dice2Value) {
            resultMessage = `${decision1} Wins!`;
        } else if (dice2Value > dice1Value) {
            resultMessage = `${decision2} Wins!`;
        } else {
            resultMessage = "It's a Tie!";
        }

        // Display the result message in the result element
        document.getElementById('result').innerText = resultMessage;
    }, 1000); // Wait for the dice animation to finish (1 second)
}

// Function to rotate the dice to the correct face
function rotateDice(dice, value) {
    // Define the rotation styles for each dice face
    const rotations = {
        1: 'rotateX(0deg) rotateY(0deg)',
        2: 'rotateX(-90deg) rotateY(0deg)',
        3: 'rotateX(0deg) rotateY(90deg)',
        4: 'rotateX(0deg) rotateY(-90deg)',
        5: 'rotateX(90deg) rotateY(0deg)',
        6: 'rotateX(0deg) rotateY(180deg)'
    };

    // Apply the rotation to the dice to show the correct face
    dice.style.transform = rotations[value];
}

