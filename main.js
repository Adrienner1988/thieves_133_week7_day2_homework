console.log('test')

// additional control flow concept, switch statements
/* Syntax: 
switch(expression) {
    case a:
        code block
        break;
    case b:
        code block
        break;
    default: # eqaul to else in Python
        // code block
} 
*/
const date = new Date()
console.log(date)

const day = date.getDay()
console.log(day)

const day2 = new Date().getDay()
console.log(day2)

switch(5){
  case 1:
    console.log("It's MOnday")
    break;
  case 2:
    console.log("It's Tuesday")
    break;
  case 3:
    console.log("It's Wednesday") 
    break;
  case 4:
    console.log("It's Thursday")
    break;
  case 5:
    console.log("It's Friday")
    break;
  default:
    console.log("It's the weekend!")
}

// JS Objects (Python Dicts)
const favPlayer = {
  playerName: 'Serena Williams',
  playerTeam: 'USA'
}

// access data in objects (using bracket or dot notation)
console.log(favPlayer["playerName"])
console.log(favPlayer.playerTeam)

// In class Exercise #1 (Get the Value 'Manchester United')
const person2 = {
    name: "Max",
    age: 31,
    prog_languages: ["JavaScript", "Python", "C++", "Java"],
    fav_color: "Blue",
    teams: [
      {
        baseball: "Chicago White Sox",
        football: "Chicago Bears",
        hockey: "Chicago Blackhawks",
        basketball: ["Chicago Bulls", "Chicago Sky"],
        soccer: ["Chicago Fire", "Naperville Yellowjacks"],
      },
      {
        baseball: "Toronto Bluejays",
        football: "LA Rams",
        basketball: "Milwalkee Bucks",
        soccer: ["Manchester United", "Liverpool"],
      },
    ],
  };

// Solution Here:
console.log(person2.teams[1].soccer[0])
console.log(person2["teams"][1]["soccer"][0])

// JS Object methods ((Object.keys(object), Object.values(object))
console.log(Object.keys(person2))
console.log(Object.values(person2))

// looping an object using for in
// for in: iterates over keys in object or indices in an array
for (let key in person2){
  console.log(key)
}

for (let key in person2){
  console.log(person2[key])
}

// ---------- Creating a JS Class ----------
class Founder{
  constructor(brand, name){
    this.brand = brand
    this.name = name
  }
  printInfo(){
    return `This ${this.brand} is from ${this.name}`
  }
}

// Creating an instance
const fenty = new Founder('Gloss Bomb', 'Fenty Beauty')
console.log(fenty.printInfo())

// Inheriting from a class using 'extends'
class Rihanna extends Founder{
  constructor(brand, name, founderName){
    super(brand, name)
    this.founderName = founderName
  }
  // => arrow function = () => remove curlies and return
  printInfo2 = () => `${this.founderName} founded ${this.name} and gave us ${this.brand}`
}

const rih = new Rihanna('Gloss Bomb','Fenty Beauty', 'Rhianna Fenty')
console.log(rih.printInfo2())

// ---------- JS Closures ----------
let grandpa = 'grandpa';
function a(){
  let father = 'father';
  return function b(){
    let son = 'son';
    return function c(){
        return`${grandpa} -> ${father} -> ${son}`
      }
    }
  }
  console.log(a())
  console.log(a()())
  console.log(a()()())
// inner scope can reach out and global scope can't reach in

// ---------- JS Promises ----------
/*
A promise is something that will take time to do.
There are two possible outcomes of a promise
-- Resolve/Fulfilled = Success
-- Reject = Error
*/

// returns a pending promise
console.log(fetch('https://pokeapi.co/api/v2/pokemon/ditto'))

// 2 ways to handle promises
// first way using callbacks: .then(resolved) / .catch(reject)

// handle pending promise with .then(), .catch()
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data)
})
.catch((error) => {
  console.log('there was a problem handing your promise', error)
})
// viewing our data if promise resolved: 200 status code

// Second way: Using async/await (ES6)
const pokemonData = async () => {()
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto') 
  const data = await response.json()
  console.log(data)
}

pokemonData()

// homework 
// #1 for loop, test arr, or object
// make function dynamic
// if value is arry run a for loop
// no hard coding

// #2

// #3 