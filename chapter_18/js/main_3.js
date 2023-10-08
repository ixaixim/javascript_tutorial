// Objects
const myObj = {name: 'John'}

const anotherObj =  {
    alive : true,
    hobbies: ['running', 'swimming', 'cycling'],
    name: 'Jane',
    age: 30,
    greet() {
        console.log('Hello')
    },
    beverage: {
        hot: 'coffee',
        cold: 'tea'
    },
    action: function() {
        console.log('I am a function')
    }
}

console.log(anotherObj.action())


// Inheritance with Object.create()
const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vrrroooom!"
    }
}

const truck = Object.create(vehicle)
truck.doors  = 2
console.log(truck)
console.log(truck.engine())

// modify the inherited engine method
const car = Object.create(vehicle)
car.engine = function() {
    return "whoosh!"
}
console.log(car.engine())

// keys and values
const band = {
    vocals: 'Robert Plant',
    guitar: 'Jimmy Page',
    bass: 'John Paul Jones',
    drums: 'John Bonham',
};

console.log(Object.keys(band))
console.log(Object.values(band))

for (let key in band) {
    console.log(`On ${key} there is ${band[key]}`)
}

// delete a property 
delete band.drums
console.log(band.hasOwnProperty('drums'))

// destructuring objects
const { guitar: myVariable } = band // rename guitar to myVariable
// const { vocals, bass } = band // create variables vocals and bass
console.log(myVariable)
// console.log(vocals)

// destructuring inside a function
function sings({ vocals }) { return `${vocals} sings!` }
console.log(sings(band))
    
