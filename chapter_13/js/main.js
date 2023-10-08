// Functions

function sum(num1, num2) {
    if (num2 === undefined) { // if not passing a second parameter, set it to 0
        num2 = 0;
    }
    return num1 + num2;
}
console.log(sum(3));


// Other types of function declarations

// function getUserNameFromEmail(email){
//     // return email.split('@')[0];
//     return email.slice(0, email.indexOf('@'));
// }

// console.log(getUserNameFromEmail('neel.misciasci@gmail.com'));

const getUserNameFromEmail = (email) => email.slice(0, email.indexOf('@'));
console.log(getUserNameFromEmail('neel.misciasci@gmail.com')); 