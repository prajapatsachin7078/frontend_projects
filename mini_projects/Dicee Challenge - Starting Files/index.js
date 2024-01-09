let heading = document.querySelector("h1");
let dice1 = document.querySelector(".img1");
let dice2 = document.querySelector(".img2");
let btn = document.querySelector("button");
let diceImages = {
    1: 'dice1.png',
    2: 'dice2.png',
    3: 'dice3.png',
    4: 'dice4.png',
    5: 'dice5.png',
    6: 'dice6.png'
};

let randomDice = () => {
    return Math.floor(Math.random() * 6) + 1;
};

// Function to update the UI based on the game result
const updateUI = (winner) => {
    heading.innerHTML = `<span class="material-symbols-outlined">mountain_flag</span>${winner} wins`;
    // btn.disabled = true;
    btn.innerText = 'Refresh to play again';
};

// Function to play the game
const playGame = () => {
    let d1 = randomDice();
    let d2 = randomDice();

    if (d1 > d2) {
        updateUI('Player 1');
    } else if (d2 > d1) {
        updateUI('Player 2');
    } else {
        btn.disabled = true;
        btn.innerText = 'Refresh to play again';
        heading.innerText = 'Draw!';
    }

    dice1.setAttribute('src', `./images/${diceImages[d1]}`);
    dice2.setAttribute('src', `./images/${diceImages[d2]}`);
};

// Event listener for button click
btn.onclick = playGame;
