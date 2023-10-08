//////////////////////////////
// DOM - Document Object Model
//////////////////////////////

// Selecting elements by ID or class and changing their style
const view1 = document.getElementById('view1');
console.log(view1);
const view2 = document.querySelector('#view2');
console.log(view2);
view1.style.display = 'flex';
view2.style.display = 'none';

// Selecting elements inside the document
const views = document.getElementsByClassName("view") // returns a HTMLCollection
console.log(views);
const sameViews = document.querySelectorAll(".view") // returns a NodeList
console.log(sameViews);

// Selecting elements inside a view
const divs = view1.querySelectorAll("div");  // returns a NodeList
console.log(divs);
const sameDivs = view1.getElementsByTagName("div"); // returns a HTMLCollection
console.log(sameDivs);

// Selecting only the even divs and changing their style
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "darkblue";
    // evenDivs[i].style.width = "200px";
    // evenDivs[i].style.height = "200px";
}

// Select an element and change its text
const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World!";
const navbar = document.querySelector("nav");
navbar.innerHTML = "<h1>Hello World!</h1> <p>This should align right</p>"; // overwrites the content of the navbar
console.log(navbar);
navbar.style.justifyContent = "space-between";

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children); // returns a HTMLCollection: it's the 12 divs inside the view1
console.log(evenDivs[0].parentElement.childNodes); // returns a NodeList: it's the 12 divs inside the view1 + the text nodes

console.log(evenDivs[0].parentElement.firstChild); // returns the first child node of the parent element: can be either element node or text node
console.log(evenDivs[0].parentElement.firstElementChild); // returns the first child element node of the parent element
console.log(evenDivs[0].parentElement.nextSibling);
console.log(evenDivs[0].parentElement.nextElementSibling);

view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

while (view2.lastChild) {
    view2.lastChild.remove();
}

const createDivs = (parent, iter) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = iter;
  newDiv.style.backgroundColor = "#000";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.margin = "10px";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  parent.append(newDiv);
};
// createDivs(view2, 10);
for (let i = 1; i <= 12; i++) {
  createDivs(view2, i);
}