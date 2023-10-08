// User input
// alert("Hello World!");
// confirm("I love JavaScript!");

// Explanation: the value of confirm() is a boolean that depends on the user's choice
// let myBoolean = confirm("Ok === True\nCancel === False");
// console.log(myBoolean);

let name = prompt("What is your name?");
console.log(name ?? "No name provided");
if (name) {
    console.log(name.length);
    console.log(name.trim().length); // trim() removes whitespace from both ends of a string
    console.log(name.trim())
} else {
    console.log("No name provided");
}