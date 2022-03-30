'use strict';

let score = 5;
let highScore = score * 5;

let mysteryNumber = Math.trunc(Math.random() * 24) + 1;

document.querySelector('.btn-check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof(guess));
    //when user not entered a value
    if (!guess) {
        document.querySelector('.message').textContent = ' 🚫⛔ No number!';
    }
    //when the player wins
    else if (guess === mysteryNumber){
        document.querySelector('.message').textContent = '✨ Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '20rem';
        document.querySelector('.number').style.fontSize ='4.7rem';
        document.querySelector('.number').textContent = mysteryNumber;
        document.querySelector('.score').textContent = score;

    //when the guess is too high
    } else if (guess > mysteryNumber) {
        if(score > 1){
            score--;
            document.querySelector('.message').textContent = '📈 Too High!';
            document.querySelector('.score').textContent = score;
            highScore -= 5; 
        } else {
            document.querySelector('.message').textContent = '📛❌No more chances! You lost the game!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#eb1a1a';
            document.querySelector('h1').textContent = 'GAME OVER!';
        }
    } else if (guess < mysteryNumber) {
        if(score > 1){
            score--;
            highScore -= 5; 
            document.querySelector('.message').textContent = '📉 Too LOW!';
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '📛❌No more chances! You lost the game!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#eb1a1a';
            document.querySelector('h1').textContent = 'GAME OVER!'
            
        }
    }
});

document.querySelector('.btn-again').addEventListener('click', function(){
    score = 5;
    mysteryNumber = Math.trunc(Math.random() * 24) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    //document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

})
