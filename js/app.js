'use strict';

let yourName = prompt('What is your name ?');
document.write('Hi there,' + ' ' + yourName);
alert('Hello' + ' ' + yourName + ',' + ' ' + 'Now time for a quick quiz!');
console.log(yourName);
let Right = 0;

// Question 1
function questionOne(){

let Army = prompt('Was I in the military?');
let lowArmy = Army.toLowerCase();
console.log(lowArmy);
if (lowArmy === 'yes' || lowArmy === 'y'){
  alert('You are correct! I served for 6 years active duty. Then contracted for the government overseas!');
  Right ++;
}
else if(lowArmy === 'no' || lowArmy === 'n') {
  alert('Sorry that is incorrect. I served in the Army.');}
else{
  alert('That is not an option!');}

}
questionOne();

// Question 2

function questionTwo(){

let color = prompt('Is my favorite color green?');
let lowColor = color.toLowerCase();
if (lowColor === 'yes' || lowColor === 'y') {
  alert('You are correct! I hate purple btw');
  Right++;
}
else if(lowColor === 'no' || lowColor === 'n') {
  alert('Sorry that is incorrect.');}

else {
  alert('That is not an option!');}

}
questionTwo();

// Question 3

function questionThree(){

let bestState = prompt('Is Texas the greatest state in the entire world?');
let lowbestState = bestState.toLowerCase();
if (lowbestState === 'yes' || lowbestState === 'y') {
  alert('You are correct!');
  Right++;
}
else if (lowbestState === 'no' || lowbestState === 'n') {
  alert('Sorry that is incorrect.');}

else{
  alert('That is not an option!');}

}
questionThree();

//Question 4
let ShaniaL = prompt('I currently live in Arizona. Is this where I am from?');
let ShaniaLow = ShaniaL.toLowerCase();
if (ShaniaLow === 'no' || ShaniaLow === 'n') {
  alert('You are correct!');
  Right++;
}
else if (ShaniaLow === 'yes' || ShaniaLow === 'y') {
  alert('Sorry that is incorrect.');
}
else{
  alert('That is not an option!');}

// Question 5
let favGame = prompt('My favorite game is cyberpunk 2077?');
let lowFavegame = favGame.toLowerCase();
if (lowFavegame === 'yes' || lowFavegame === 'y') {
  alert('You are correct!');
  Right++;
}
else if (lowFavegame === 'no' || lowFavegame === 'n') {
  alert('Sorry that is incorrect.');
}
else{
  alert('That is not an option!');}



//Question 6
let NumberOfChances = 6;
let i = 0;
let favnum = prompt('What is my favorite number? 2,4,6, or 8?');
let favNumanswer = parseInt(favnum);
for(i = 0; i < NumberOfChances; i++){
  let remainingChances = NumberOfChances - i - 1;
  if (favNumanswer < 8){
    favNumanswer = prompt('Your guess is to low! Try again. You have' + remainingChances + 'remaining');}
  else if(favNumanswer > 8){
    favNumanswer = prompt('Your guess is to high! Try again. You have' + remainingChances + 'remaining');
  }
  else if(favNumanswer === 8){
    alert('Correct!');
    Right++;
  }}



//Question7


const flower = ['daisy', 'rose', 'sunflower', 'magnolia', 'plumeria', 'blue bonnet'];
let attempts = 6;
let userAnswer = prompt('What is my favorite flower?');
let lowerUserAnswer = userAnswer.toLowerCase();

while (attempts > 0){
  for(let i = 0; i < flower.length; i++){
    if (lowerUserAnswer === flower[i]){
      alert ('Congrats! You got it right!');
      Right++;
      attempts = 0;
      break;}}

  attempts -= 1;
  if (attempts > 0){
    userAnswer = prompt ('Sorry, you got it wrong. Please try again.');
    lowerUserAnswer = userAnswer.toLowerCase();
    console.log(lowerUserAnswer);
  }
  else if (attempts === 0){
    alert('Sorry you\'ve run out of attempts. Better luck next time. Possible answers could have been ' +flower+'.');
  }
  else (alert ('Great job! All possible answers were ' +flower+ '.'));
}



if (Right < 4){
  alert('You got'+' ' + Right + ' right! Maybe you should try again.');
}
else if (Right > 4) {alert('You got' +' ' + Right + ' right! Decent Job....');}
