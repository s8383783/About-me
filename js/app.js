'use strict';
let yourName = prompt('What is your name ?');
document.write('Hi there,' + ' ' + yourName);
alert('Hello' + ' ' + yourName + ',' + 'Now time for a quick quiz!');


// Question 1
let Army = prompt('Was Shania in the army?');
let lowArmy = Army.toLowerCase();
if (lowArmy === 'yes' || lowArmy === 'y'){
  alert('You are correct! I served for 6 years active duty. Then contracted for the government overseas!');
}
else (lowArmy === 'no' || lowArmy === 'n'); {
  alert('Sorry that is incorrect.');}

// Question 2
let color = prompt('Is my favorite color green?');
let lowColor = color.toLowerCase();
if (lowColor === 'yes' || lowColor === 'y'){
  alert('You are correct! I hate purple btw');
}
else (lowColor === 'no' || lowColor === 'n'); {
  alert('Sorry that is incorrect.');}

// Question 3
let bestState = prompt('Is Texas the greatest state in the entire world?');
let lowbestState = bestState.toLowerCase;
if (lowbestState === 'yes' || lowbestState === 'y'){
  alert('You are correct!');}
else (lowbestState === 'no' || lowbestState === 'n'); {
  alert('Sorry that is incorrect.');}

//Question 4
let ShaniaL = prompt('I currently live in Arizona. Is this where I am from?');
let ShaniaLow = ShaniaL.toLowerCase;
if (ShaniaLow === 'no' || ShaniaL.toLowerCase === 'n'){
  alert('You are correct!');}
else (ShaniaLow === 'yes' || ShaniaLow === 'y'); {
  alert('Sorry that is incorrect.');}

// Question 5
let favGame = prompt('My favorite game is cyberpunk 2077?');
let lowFavegame = favGame.toLowerCase;
if (lowFavegame === 'yes' || lowFavegame.toLowerCase === 'y'){
  alert('You are correct!');}
else (lowFavegame === 'no' || lowFavegame === 'n'); {
  alert('Sorry that is incorrect.');}

