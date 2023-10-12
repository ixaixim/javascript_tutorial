// Fetch API:
// Callbacks, Promises, Async/Await, Thenables


//////////////////////////////
 // Callbacks   
//////////////////////////////
// are functions that are passed as arguments to other functions
// a callback defines a chain of events
// function firstFunction(parameters, callback) {
//     // do something
//     callback();
// }

// AKA "Callback Hell"
// Harder to follow, harder to debug, harder to maintain
// firstFunction(parameters, function() {
//     secondFunction(parameters, function() {
//         thirdFunction(parameters, function() {
//             // and so on...
//         });
//     });
// });

//////////////////////////////
// Promises
//////////////////////////////
// Solves the problem of callback hell
// Have 3 states: Pending, Resolved, Rejected
// Use the Promise object
const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve('Resolved!');
    } else {
        reject('Rejected!');
    }
});

//////////////////////////////
// Thenables to handle Promises and solve callback hell
//////////////////////////////
// console.log(myPromise); // Returns the Promise object
// Use Thenable to handle the promise
// myPromise.then(value => {
//     console.log(value)
// }) // Returns the value of the promise, but doesn't catch rejections

// Chain using .then()
// Catch errors using .catch()
// myPromise
// .then(value => {
//     return value + ' 1';
// })
// .then(newValue => {
//     console.log(newValue);
// })
// .catch(err => {
//     console.log('The Promise has caught the error');
//     console.log(err);
// })

// Javascript can execute code while a awaiting a promise
// setTimeout is a callback function that gets executed after a certain amount of time
// const myNextPromise = new Promise((resolve, reject) => {
//     setTimeout(function() { // function() is an anonymous function (callback)
//         resolve('myNextPromise Resolved!');
//     }, 3000);
// })

// myNextPromise.then(value => console.log(value));

// myPromise.then(value => console.log(value));

//////////////////////////////
// Pending state of a Promise:
//////////////////////////////
console.log("Let's study the pending state of a Promise")

// // Problem when fetching data from an API
// const users = fetch('https://jsonplaceholder.typicode.com/users');
// // Since fetch is a pending promise, we can't access the data yet
// console.log(users); // Returns a pending promise

// // Solution: use .then() to handle the promise
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => {
//     return response.json()
// })
// .then(data => {
//     console.log(data);
// })

//////////////////////////////
// Async/Await
//////////////////////////////
console.log("Let's study Async/Await")
// // Problem: console.log(users) does not wait for the fetch Promise to resolve
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => {
//     return response.json()
// })
// .then(data => {
//     data.forEach(user => {
//         console.log(user);
//     })
// })
// console.log(users) // Returns a pending promise, since it executes while the fetch Promise is pending in users

// // Solution: use async/await
// const myUsers = {
//     userList: [],
// }
// // equivalent to: async myCoolFunction() {...}
// const myCoolFunction = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const jsonUserData = await response.json();
//     return jsonUserData;
// }

// // Note: if we chain a function, we need to await the result of the previous function
// const anotherFunc = async () => {
//     const data = await myCoolFunction();
//     myUsers.userList = await data;
//     console.log(myUsers.userList);
// }

// anotherFunc();
// // console.log(myUsers.userList); // Returns an empty array, since it executes while the fetch Promise is pending in users

//////////////////////////////
// Examples:
//////////////////////////////
// console.log("Let's study some examples")

// const getAllUserEmails = async () => {

//     const response = await fetch('https://jsonplaceholder.typicode.com/users'); // wait for fetch Promise to resolve
//     const jsonUserData = await response.json(); // wait for response Promise to resolve

//     const userEmailArray = jsonUserData.map(user => {
//         return user.email;
//     });
    
//     console.log(userEmailArray);
//     // return userEmailArray; // retrurns a pending promise
//     postToWebPage(userEmailArray);
// }

// getAllUserEmails();

// const postToWebPage = (data) => {
//     // does not need to be async, since it is not waiting for data to arrive
//     console.log(data);
// }

// getAllUserEmails()


//////////////////////////////
// Exercise:
//////////////////////////////
console.log("Let's study an exercise: Dad Jokes get request")
// const getDadJoke = async () => {

//     const response = await fetch('https://icanhazdadjoke.com/', {
//         method: 'GET',
//         //For json data
//         headers: {
//             'Accept': 'application/json'
//         }
//         // For plain text data
//         // headers: {
//         //     'Accept': 'text/plain'
//         // }
//     }); // wait for fetch Promise to resolve

//     // For json data
//     const jsonJokeData = await response.json(); // wait for response Promise to resolve
//     // For plain text data
//     // const textJokeData = await response.text(); // wait for response Promise to resolve

//     console.log(jsonJokeData);
//     // console.log(textJokeData);

// }

// getDadJoke();

//////////////////////////////
// Exercise:
//////////////////////////////
console.log("Let's study an exercise: Dad Jokes post request")
//
// const jokeObject  = {
//     id: 'xXg3LZLZDd', 
//     joke: '*Reversing the car* "Ah, this takes me back"', 
// }

// const postData = async (jokeObject) => {

//     const response = await fetch('https://httpbin.org/post', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(jokeObject)
//     }); // wait for fetch Promise to resolve

//     const jsonResponse = await response.json(); // wait for response Promise to resolve
    
//     console.log(jsonResponse);
// }

// postData(jokeObject);

//////////////////////////////
// Exercise:
//////////////////////////////
console.log("Let's study an exercise: Predicted age get request with query parameters")
//
// const requestAge = async (name, countryId) => {

//     const response = await fetch(`https://api.agify.io?name=${name}&country_id=${countryId}`); // ? is a query string, & is a query parameter that chains multiple query strings
//     const jsonResponse = await response.json();

//     console.log(jsonResponse.age);
// }

// requestAge('neel', 'IT')

//////////////////////////////
// Exercise:
//////////////////////////////
console.log("Let's abstract everything as a function")
//
// from a form
const getDataFromForm = () => {
    const requestObj = {
        name: "Neel",
        countryId: "IT",
    };
    return requestObj;
}

const buildRequestUrl = (requestData) => {
    return `https://api.agify.io?name=${requestData.name}&country_id=${requestData.countryId}`;
}

// fetches the data
const requestAge = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const age = jsonResponse.age;
    postAgeToWebPage(age);
}

// posts to the webpage
const postAgeToWebPage = (age) => {
    console.log(age);
}

// Procedural workflow function
// needs to be async since it calls an async function
const processAgeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestAge(requestUrl);
    console.log('Age request processed');
}

processAgeRequest();
