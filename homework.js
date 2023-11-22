console.log('test')
//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favFood(person3) {
    for (let dish in person3) {

        if (Array.isArray(person3[dish])) {
            console.log(`${dish}: ${person3[dish].join(', ')}`);

        } else if (typeof person3[dish] === 'object') {
            console.log(`${dish}:`);

            for (let value in person3[key][0]) {
                console.log(`${value}: ${person3[dish][0][value]}`);
            }

        } else {
            console.log(`${dish}: ${person3[dish]}`);
        }
    }
};

favFood(person3);



//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class
class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    // Use an arrow to create the printInfo method
    printInfo = () => `${this.name} is ${this.age}.`

    // Create another arrow function for the addAge method that takes a single parameter
    addAge = () => this.age = this.age +1;
} 

// Adding to the age 
const someone = new Person('Ronnie', 35)
someone.addAge()
console.log(someone.printInfo())
someone.addAge()
console.log(someone.printInfo())
someone.addAge()
console.log(someone.printInfo())
someone.addAge()
console.log(someone.printInfo())


const someone1 = new Person('Aaron', 29)
console.log(someone1.printInfo())
someone1.addAge()
someone1.addAge()
someone1.addAge()
console.log(someone1.printInfo())


// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/ 

// Aysnc/Await way
const ergastData = async () => {
    const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json');
    const data = await response.json();
    console.log(data)
}
ergastData()


// Then/Catch way
fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log('There was an issue getting your data.', error)
})



// // CodeWars 1
// Reversed Words
// Complete the solution so that it reverses all of the words within the string passed in.
// Words are separated by exactly one space and there are no leading or trailing spaces.

function reverseWords(str){
    return str.split(' ').reverse().join(' ')
  }

// Codewars 2
// Sum without highest and lowest number
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.

function sumArray(array) {
    if (!array) return 0;
    
    return array
    .sort((x, y) => x - y)
    .slice(1, -1)
    .reduce((sum, num) => sum += num, 0);
  }