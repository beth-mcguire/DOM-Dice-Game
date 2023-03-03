var randomNumber1 = Math.floor(Math.random() * 6) +1;
var randomNumber2 = Math.floor(Math.random() * 6) +1;

function rollDice(randomNumber1, randomNumber2){

    document.querySelector('.img1').src = 'images/dice' + String(randomNumber1) +'.png';
    document.querySelector('.img2').src = 'images/dice' + String(randomNumber2) +'.png';

    if(randomNumber1 > randomNumber2){
        document.querySelector('h1').innerHTML = 'Player 1 Wins!';
    }  else if(randomNumber1 === randomNumber2){
        document.querySelector('h1').innerHTML = 'Draw!';
    }else{
        document.querySelector('h1').innerHTML = 'Player 2 Wins!';
    }
}

rollDice(randomNumber1, randomNumber2);