// Higher Order Functions

// A higher order function does one of the following:
// 1. Takes one or more functions as arguments
// 2. Returns a function as its result

//forEach() 

import { posts } from './posts.js';

// works like a for loop
posts.forEach((post) => {
    console.log(post);
});
console.clear();


// filter depending on the condition
const filteredPosts = posts.filter((post) => {
    return post.userId === 1;
});
console.log(filteredPosts);

// map() - returns a new array (calls a function on each element of the array)
const mappedPosts = filteredPosts.map((post) => {
    return post.id * 10;
});
console.log(mappedPosts);

// reduce() - returns a single value (accumulates the values)
const reducedPostsValue = mappedPosts.reduce((sum, post) => {
    return sum + post;
});
console.log(reducedPostsValue);