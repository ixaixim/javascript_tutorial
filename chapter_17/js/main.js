//////////////////////////////////////////////
// Classes
//////////////////////////////////////////////
class Pizza {
  constructor(pizzaSize) {
    this.type = "pepperoni";
    this.size = pizzaSize;
    this.crust = "original";  
    this.toppings = [];
  }

  get pizzaCrust () {
    return this.crust;
  }

  set pizzaCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }

  bake() {
    console.log("Baking the " + this.size + " " + this.type + " " + this.crust + " pizza.");
  }

  getToppings() {
    return this.toppings;
  }
  setToppings(toppings) {
    this.toppings.push(toppings);
  }
}

const myPizza = new Pizza("pepperoni", "small");

myPizza.bake();
console.log(myPizza.type);
myPizza.pizzaCrust = "thin";
myPizza.bake();

myPizza.setToppings("mushrooms");
myPizza.setToppings("pepperoni");
console.log(myPizza.getToppings());

//////////////////////////////////////////////
// Child Class 
//////////////////////////////////////////////
class SpecialtyPizza extends Pizza {
  constructor(pizzaSize) {
    super(pizzaSize);
    this.type = "The Works";
  }
  slice() {
    console.log("Slicing the " + this.size + " " + this.type + " pizza.");
  }
}

const mySpecialtyPizza = new SpecialtyPizza("large");
mySpecialtyPizza.slice()

// Note: private attributes are not supported in JavaScript: 
//       indicate them with an underscore _ prefix.

// Workaround: use Factory Function to create private attributes that are not accessible outside of the function
// Factory Function
function pizzaFactory(pizzaSize) {
  const crust = "original";
  const size = pizzaSize;
  return {
    bake: () => console.log(`Baking the ${size} ${crust} pizza.`)
  };
}

const newPizza = pizzaFactory("large");
newPizza.bake();

//////////////////////////////////////////////
// Another workaround: private fieds
//////////////////////////////////////////////
class privatePizza {
  crust = "original"; // public field
  #size = "large"; // private field

  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }
  getCrust() {
    return this.crust;
  }
  setCrust(crust) {
    this.crust = crust;
  }
  bake() {
    console.log(`Baking the ${this.#size} ${this.crust} pizza.`);
  }
}

const myPrivatePizza = new privatePizza("large");
myPrivatePizza.bake();
console.log(myPrivatePizza.getCrust());
// console.log(myPrivatePizza.#size); // error: private field

// Note: not all browsers support private fields yet
//       check this website: https://caniuse.com/?search=private%20fields

//////////////////////////////////////////////
// JSON (JavaScript Object Notation)
//////////////////////////////////////////////
const myObj =  {
  name: "John",
  hobbies: ["hiking", "biking", "skiing"],
  hello: function() {
    console.log("Hello " + this.name);
  }
};
console.log(myObj.name);
myObj.hello();

const sendJSON = JSON.stringify(myObj); // convert object to JSON
console.log(sendJSON);
console.log(typeof sendJSON);
// console.log(sendJSON.name); // undefined

const receiveJSON = JSON.parse(sendJSON); // convert JSON to object
console.log(receiveJSON);
console.log(typeof receiveJSON); // object