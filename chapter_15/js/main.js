// Arrays

const myArray = []

// add elements to the array
myArray[0] = 'first'
myArray[1] = 100
myArray[2] = true

// refer to the array
console.log(myArray)

// length of the array
console.log(myArray.length)

// last element of the array
console.log(myArray[myArray.length - 1])

// add elements to the end of the array
myArray.push('last')
console.log(myArray)

// remove elements from the end of the array
const lastItem = myArray.pop()
console.log(myArray)
console.log(lastItem)

// add elements to the beginning of the array
const newLength = myArray.unshift('first')
console.log(myArray)
console.log(newLength)

// remove elements from the beginning of the array
const firstItem = myArray.shift()
console.log(myArray)
console.log(firstItem)

// access element that does not exist
console.log(myArray[100])

// delete element from the array
delete myArray[1]
console.log(myArray) // the element is not removed, but set to undefined

// splice elements from the array (remove, add and replace)
const myArray2 = ['first', 100, true, 'last']
const removedItems = myArray2.splice(1, 2) // start at index 1 and remove 2 items
console.log(myArray2)
const addedItems = myArray2.splice(1, 0, 'new') // start at index 1 and remove 0 items, then add 'new'
console.log(myArray2)

// slice elements from the array (remove)
const myArray3 = ['A', 'B', 'C', 'D', 'E']
const removedItems2 = myArray3.slice(2)
console.log(removedItems2)


// join as a string
const myArray4 = ['A', 'B', 'C', 'D', 'E']
const joined = myArray4.join()
console.log(joined)

// join arrays
const myArray5 = ['A', 'B', 'C']
const myArray6 = ['D', 'E', 'F']
// const joined2 = myArray5.concat(myArray6)
// using the spread operator: takes all the elements of the array and spreads them out
const joined2 = [...myArray5, ...myArray6]
console.log(joined2)
// note: this is different from:
console.log([myArray5, myArray6]) // this creates an array of arrays

// Access elements of a nested array
const myArray7 = ['A', 'B', ['C', 'D', 'E']]
console.log(myArray7[2][1])