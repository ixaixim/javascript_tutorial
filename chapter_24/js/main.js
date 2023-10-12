// Modules 
// note the html file:
// <script type="module" src="js/main.js"></script> }


// The module attribute tells the browser that the script is a JavaScript module. Modules are a way to organize and share code between different JavaScript files. 
// The defer attribute tells the browser to download the script file in the background while parsing the HTML document. The script will then be executed after the HTML document has been parsed. 

import playGuitar from "./guitar.js";
import { shredding, plucking } from "./guitar.js";

console.log(playGuitar());
console.log(shredding());
console.log(plucking());


// Another way to import is: 
import * as Guitars from "./guitar.js";

console.log(Guitars.default()); // default function
console.log(Guitars.shredding()); 
console.log(Guitars.plucking());

import User from "./user.js";
const me = new User('email@email.com', 'Neel');
console.log(me);