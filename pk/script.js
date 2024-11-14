const headBtn = document.getElementById('head-btn');
const tailBtn = document.getElementById('tail-btn');
const scoreDisplay = document.getElementById('score');
const messageDisplay = document.getElementById('message');
const coinImage = document.getElementById('coin');
const resetBtn = document.getElementById('reset-btn');
        
let score = 0;

function flipCoin() {
    // Randomly return either 'HEAD' or 'TAIL'
    return Math.random() < 0.5 ? 'HEAD' : 'TAIL';
}

        function updateScore(playerChoice) {
            const result = flipCoin();

            // Change coin image depending on result (you can replace 'head.png' and 'tail.png' with your images)
            if (result === 'HEAD') {
                coinImage.src = 'head.png'; // Replace with your head image
            } else {
                coinImage.src = 'tail.png'; // Replace with your tail image
            }

            // Check if the player's choice matches the result
            if (playerChoice === result) {
                score++;
                messageDisplay.innerText = "Congratulations, you won!!";
            } else {
                messageDisplay.innerText = "You lose!!";
            }

            // Update the displayed score
            scoreDisplay.innerText = `Score: ${score}`;
        }

        // Event listeners for buttons
        headBtn.addEventListener('click', () => {
            updateScore('HEAD');
        });

        tailBtn.addEventListener('click', () => {
            updateScore('TAIL');
        });

        // Reset button functionality
resetBtn.addEventListener('click', () => {
    score = 0;
    scoreDisplay.innerText = `Score: 0`;
    messageDisplay.innerText = ""; // Clear the message
    coinImage.src = 'coin-flip.png'; // Reset coin image to default
});

document.getElementById('start-btn').addEventListener('click', function() {
    // Redirect to C&T Game page on button click
    window.location.href = "ct-game.html";
});

// Handle the sound toggle
document.getElementById('sound-toggle').addEventListener('change', function() {
    if (this.checked) {
        console.log('Sound effects ON');
        // Code to enable sound effects
    } else {
        console.log('Sound effects OFF');
        // Code to disable sound effects
    }
});

// Handle difficulty change
document.getElementById('difficulty').addEventListener('change', function() {
    const difficulty = this.value;
    console.log('Difficulty set to:', difficulty);
    // Code to adjust game difficulty
});

// Handle theme change
document.getElementById('theme').addEventListener('change', function() {
    const theme = this.value;
    if (theme === 'dark') {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
        console.log('Dark mode activated');
    } else {
        document.body.style.backgroundColor = '#f5f5f5';
        document.body.style.color = '#000';
        console.log('Light mode activated');
    }
});

// Handle game reset
document.getElementById('reset-game').addEventListener('click', function() {
    // Reset score and game data
    console.log('Game data reset');
    // Code to reset game data (e.g., score, settings)
    alert('Game data has been reset!');
});

// Back to Home page
document.getElementById('back-btn').addEventListener('click', function() {
    window.location.href = 'index.html'; // Redirect back to home page
});
