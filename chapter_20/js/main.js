////////////////////////////////////
// JavaScript Errors and Error Handling
////////////////////////////////////

"use strict" // This is used to show errors in console
// variable = "Neel"
// console.log(variable) // Throws reference error

// const name = "Neel"
// name = "Neel Shah" // Throws type error

const makeError = () => {
  try {
    const name = "Neel"
    name = "Neel Shah"
  } catch(err) {
    console.log(err) // This will show error in black color
    console.error(err) // This will show error in red color
    console.warn(err) // This will show error in yellow color
    console.table(err) // This will show error in table format
    console.error(err.message) // This will show error message in red color
    console.error(err.name) // This will show error name in red color
    console.error(err.stack) // This will show error stack in red color
  }
}

makeError()


// Throw Custom Error using throw keyword
function customError(message) {
  this.message = message
  this.name = "customError"
  this.stack = this.name + " " + this.message
}

const makeNewError = () => {
  try {
    throw new customError("This is custom error")
  } catch(err) {
    console.error(err.name)
    console.error(err.message)
    console.error(err.stack)
  } finally {
    console.log("Finally block executed") // This will always execute
  }
}
makeNewError()