// Loops

///////////////////////////////////////////
//While loop
///////////////////////////////////////////
let myNumber = 0;
while (myNumber < 50 ) {
    console.log(myNumber);
    myNumber++;
}
// Note: the outuput will be 0 to 49
//       if you change the order of the console.log and myNumber++ the output will be 1 to 50

// Don't create an endless loop  (will crash your browser)

///////////////////////////////////////////
// Do while loop
///////////////////////////////////////////
myNumber = 38;
do {
    myNumber++;
    console.log(myNumber);
} while (myNumber < 50);

///////////////////////////////////////////
// For loop
///////////////////////////////////////////
for (let i =1; i <= 10; i++) {
    console.log(i);
}

// let name = "John";
// for (let i = 0; i < name.length; i++) {
//     console.log(name[i]);
//     console.log(name.charAt(i));
// }

// Combine loops with conditional statements
let counter = 0;
let myLetter;
let name = "Neeel"
while (true) {
    myLetter = name.charAt(counter);
    console.log(myLetter);
    if (myLetter === "l") {
        break;
    }
    counter++;
}
// there is also a continue option