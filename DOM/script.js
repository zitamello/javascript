'use strict';

let score = 5;
let highScore = score;

let mysteryNumber = Math.trunc(Math.random() * 24) + 1;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

const displayScore = function(score){
    document.querySelector('.score').textContent = score;
}

const displayBGcolors = function(bgColor){
    document.querySelector('body').style.backgroundColor = bgColor;
}

const displayNumber = function(number){
    document.querySelector('.number').textContent = number;
}


document.querySelector('.btn-check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof(guess));
    //when user not entered a value
    if (!guess) {
        displayMessage('🚫⛔ No number!');
        //document.querySelector('.message').textContent = d' 🚫⛔ No number!';
    }
    //when the player wins
    else if (guess === mysteryNumber){
        displayMessage('✨ Correct Number!');
        displayBGcolors('#60b347');
        displayNumber(mysteryNumber);
        document.querySelector('.number').style.width = '20rem';
        document.querySelector('.number').style.fontSize ='4.7rem';
        displayScore(score);
        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    //when the guess is wrong
    } else if (guess !== mysteryNumber){
        if(score > 1){
            score--;
            displayMessage(guess > mysteryNumber ? '📈 Too High!' : '📉 Too LOW!');
            displayScore(score);
            highScore = score - 5; 
        } else {
            displayMessage('📛❌No more chances! You lost the game!');
            displayScore(0);
            displayBGcolors('#eb1a1a');
            document.querySelector('h1').textContent = 'GAME OVER!';
    
        }
    }
});

document.querySelector('.btn-again').addEventListener('click', function(){
    score = 5;
    mysteryNumber = Math.trunc(Math.random() * 24) + 1;
    displayMessage('Start guessing...');
    displayScore(score);
    document.querySelector('.highscore').textContent = highScore;
    displayBGcolors('#222');
    displayNumber('?');
    document.querySelector('.guess').value = '';

})
