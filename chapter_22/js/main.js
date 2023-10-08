// ////////////////////////////
// // JavaScript Event Listeners
// ////////////////////////////
// How to use this tutorial:
// Toggle the main.css display property of the view elements to none to hide the view elements.
// The first examples work with view2, the last example works with view3.

// note: we used the defer attribute in the script tag in the html file
// this allows us to load the js file after the html file has loaded
const view = document.querySelector('#view2');
console.log(view);

const div =  view.querySelector('div');
const h2 = div.querySelector('h2');

// Syntax: addEventListener(event, function, useCapture)
// the last parameter is optional (false by default)

// Two ways to add event listeners: the content of h2 is changed when the h2 element is clicked
// const doSomething = () => {
//     alert('You clicked me!');
// }
// h2.addEventListener('click', doSomething, false); // when the h2 element is clicked, doSomething function is called
// h2.removeEventListener('click', doSomething, false); // removes the event listener

// h2.addEventListener('click', (event) => {
//   console.log(event.target);
//   event.target.textContent = 'Clicked!';
// });

// the initApp function is called when the DOM is ready:
document.addEventListener("readystatechange", (event) => {
  if(event.target.readyState === "complete") {
    console.log("DOM is ready!");
    initApp3();
  }
})



const initApp = () => {
  // The code changes the background color of the view, div, and h2 elements to purple, blue, and changes the text content to 'Clicked!' respectively. The code is used to show how event bubbling works. Event bubbling is the process by which an event propagates up the DOM tree from the element that was clicked, to each parent element of the target element. The code is also used to show how to use event delegation to handle events, which is the process of attaching an event listener to a parent element of the target element, and then using the event object's target property to determine if the target element is the target of the event.
  const view = document.querySelector('#view2');
  const div =  view.querySelector('div');
  const h2 = div.querySelector('h2');

  view.addEventListener('click', (event) => {
    view.style.backgroundColor = 'purple';
  },
  false)

  div.addEventListener('click', (event) => {
    event.stopPropagation(); // stops the event from bubbling up
    div.style.backgroundColor = 'blue';
  },
  false)

  h2.addEventListener('click', (event) => {
    event.target.textContent = 'Clicked!'
  },
  false)
}

// Note: useCapture is set to false by default. When useCapture is set to true, the event is executed in the capturing phase, which means that the event is first captured by the outermost element and then propagated to the innermost element.
//       When useCapture is set to false (or omitted), the event is executed in the bubbling phase, which means that the event is first captured by the innermost element and then propagated to the outermost element.


// Note: if you click inside h2, the click propagates up to the view.
// This is called event bubbling. The event bubbles up the DOM tree.
// You can stop the event from bubbling up by using the stopPropagation method:


// Note: in the code above we used the event.target for h2 but not for div and view.
// If we put event.target for div and view, the text content of div and view, ONLY  change is 'Clicked!' when we click on h2.
const initApp2 = () => {
  // The code changes the background color of the view, div, and h2 elements to purple, blue, and changes the text content to 'Clicked!' respectively. The code is used to show how event bubbling works. Event bubbling is the process by which an event propagates up the DOM tree from the element that was clicked, to each parent element of the target element. The code is also used to show how to use event delegation to handle events, which is the process of attaching an event listener to a parent element of the target element, and then using the event object's target property to determine if the target element is the target of the event.
  const view = document.querySelector('#view2');
  const div =  view.querySelector('div');
  const h2 = div.querySelector('h2');

  view.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'purple';
  },
  false)

  div.addEventListener('click', (event) => {
    event.stopPropagation(); // stops the event from bubbling up
    event.target.style.backgroundColor = 'blue';
  },
  false)

  h2.addEventListener('click', (event) => {
    event.target.textContent = 'Clicked!'
  },
  false)
}

// Here we use toggle: if the class is there, remove it, if it's not there, add it.
// We can click as many times as we want and the class will be toggled.
// To toggle the text we use the ternary operator.
const initApp3 = () => {
  // The code changes the background color of the view, div, and h2 elements to purple, blue, and changes the text content to 'Clicked!' respectively. The code is used to show how event bubbling works. Event bubbling is the process by which an event propagates up the DOM tree from the element that was clicked, to each parent element of the target element. The code is also used to show how to use event delegation to handle events, which is the process of attaching an event listener to a parent element of the target element, and then using the event object's target property to determine if the target element is the target of the event.
  const view = document.querySelector('#view2');
  const div =  view.querySelector('div');
  const h2 = div.querySelector('h2');

  view.addEventListener('click', (event) => {
    // toggle the background color of view between purple and darkblue
    view.classList.toggle('purple');
    view.classList.toggle('darkblue');
  },
  false)

  div.addEventListener('click', (event) => {
    div.classList.toggle('blue');
    div.classList.toggle('black');
  },
  false)

  h2.addEventListener('click', (event) => {
    const myText = event.target.textContent;
    myText === 'My 2nd View' 
    ? (event.target.textContent = 'Clicked!')
    : event.target.textContent = 'My 2nd View'
  },
  false)

  // Toggle top of page by moving the mouse over the nav element
  const nav = document.querySelector('nav');
  nav.addEventListener('mouseover', (event) => {
    event.target.classList.add("height100")
  })
  nav.addEventListener('mouseout', (event) => {
    event.target.classList.remove("height100")
  })
}

// Comment the rest of the code and uncomment the code below to see the example
// Toggle display property of view3
// View 3 - Form

// document.addEventListener("readystatechange", (event) => {
//   if(event.target.readyState === "complete") {
//     console.log("DOM is ready!");
//     initApp();
//   }
// })
// const initApp = () => {
//   const view3 = document.querySelector('#view3');
//   const myForm = view3.querySelector('#myForm');
//   myForm.addEventListener('submit', (event) => {
//     event.preventDefault(); // prevents the text from disappearing after submit
//     console.log("submit event");
//   })
// }

