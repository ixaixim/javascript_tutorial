//////////////////////////////
// var let const
//////////////////////////////
// Use const by default, unless you know the value is going to change.
// In that case, use let.
// Avoid using var.

// var x = 11
// var x = 12
// console.log(x)
// Explanation: var is function scoped and can be redeclared


// This will throw an error
// let y = 11
// let y = 12
// console.log(y)
// Explanation: let is block scoped and cannot be redeclared

const x = 11
// let x = 12
console.log(x)
// Explanation: const is block scoped and cannot be redeclared

//////////////////////////////
// Scope 
//////////////////////////////


//////////////
// global scope
//////////////
var a = 1
let b = 2
const c = 3

//////////////
// local scopes: function, if, for, while, etc
//////////////
// block scope
{
    let y = 10
}
// function scope
function myFunc() {
    
    const z = 4 + a // z is a local variable, a is a global variable
    console.log(z)
}
// console.log(z) // ReferenceError: z is not defined
myFunc()


// Global variables can be accessed anywhere, local variables can only be accessed in their local scope
var q = 1
let y = 2
const z = 3

function myFunc2() {
    var q = 4
    const z = 5
    console.log('Function Scope: ', q, y, z)
    {
        let y = 6
        console.log('Block Scope: ', q, y, z)
    }
}

myFunc2()
