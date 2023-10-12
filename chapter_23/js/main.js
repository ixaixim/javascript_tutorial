// Web Storage API
// The Web Storage API provides a way to store key/value pairs in a client's browser, allowing data to persist even after the browser window is closed.
// There are two types of Web Storage: localStorage and sessionStorage. localStorage stores data with no expiration date, while sessionStorage stores data for the duration of the session (i.e. until the browser window is closed).

// Not part of the DOM - refers to the Window API
// Available to JS via the global variable window

// We do not have to type window.
// window.alert('Hello World');
// alert('Hello World');
// window.alert(window.location.href);

const myArray = ["eat", "sleep", "code"];

const myObject = {
  name: "Neel",
  hobbies: ["eat", "sleep", "code"],
  logName: function() {
    console.log(this.name);
  }
}



// Store data and retrieve data from local storage
// Check under Application tab in Dev Tools / Session Storage
sessionStorage.setItem("mySessionStore", JSON.stringify(myObject))
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"))
console.log(mySessionData); // {name: "Neel", hobbies: Array(3), [[Prototype]]: Object]]}

// Summary: in order to save and retrieve a JS object in session Web Storage you have to stringify the JSON when writing, and parse it when reading.
// Note: you lose functions when you stringify and parse an object.

localStorage.setItem("myLocalStore", JSON.stringify(myObject))
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"))
console.log(myLocalData); // [object Object], i.e. not the data we wanted to retrieve

// Local storage: persists even after browser is closed. Session storage: persists only for the duration of the session (i.e. until the browser window is closed).


// Key/value pairs to retrieve items in local storage
localStorage.setItem("myLocalStore", JSON.stringify(myArray))  
const key = localStorage.key(0) // "myLocalStore"


console.log(localStorage.getItem(key)) // access element of Local Storagen ["eat","sleep","code"]
// find out how many items are in local storage
console.log(localStorage.length) // 1