////////////////////////
// Conditionals
////////////////////////

// let customerIsBanned = false;
// let soup = "tomato";
// let reply;
// if (soup=='chicken' && !customerIsBanned) {
//     reply = `The soup of the day is chicken.`;
// } else if (customerIsBanned) {
//     reply = `You are banned from this restaurant.`;
// } else {
//     reply = `There is no ${soup} soup of the day.`;
// }
// console.log(reply);

////////////////////////
// Switch statements
////////////////////////

switch(2) {
    case 1:
        console.log('one');
        break;
    case 2:
        console.log('two');
        break;
    default:
        console.log('default');
}

// let playerOne = 'paper';
// let playerTwo = 'paper';

// switch(playerOne) {
//     case 'rock':
//         if (playerTwo == 'rock') {
//             console.log('draw');
//         } else if (playerTwo == 'paper') {
//             console.log('player two wins');
//         } else {
//             console.log('player one wins');
//         }
//         break;
//     case 'paper':
//         if (playerTwo == 'rock') {
//             console.log('player one wins');
//         } else if (playerTwo == 'paper') {
//             console.log('draw');
//         } else {
//             console.log('player two wins');
//         }
//         break;
//     case 'scissors':
//         if (playerTwo == 'rock') {
//             console.log('player two wins');
//         } else if (playerTwo == 'paper') {
//             console.log('player one wins');
//         } else {
//             console.log('draw');
//         }
//         break;
//     default:
//         console.log('default');
// }

////////////////////////
// Ternary operator
////////////////////////

// let soup = 'tomato';
let soup
let isCustomerBanned = false;
let soupAccess = isCustomerBanned 
    ? "You are banned from this restaurant" 
    : soup
        ? `The soup of the day is ${soup}.`
        : `There is no soup of the day.`;
console.log(soupAccess);    
//Explanation: if isCustomerBanned is true, soupAccess is "You are banned from this restaurant" 
// if isCustomerBanned is false, soupAccess is soup
//      if soup is true, soupAccess is `The soup of the day is ${soup}.`
//      if soup is false, soupAccess is `There is no soup of the day.`

let playerOne = 'rock';
let playerTwo = 'scissors';

let winner = playerOne === playerTwo
    ? 'draw'
    : playerOne === 'rock' && playerTwo === 'paper'
    ? 'player two wins'
    : playerOne === 'paper' && playerTwo === 'scissors'
    ? 'player two wins'
    : playerOne === 'scissors' && playerTwo === 'rock'
    ? 'player two wins'
    : 'player one wins';
console.log(winner);


