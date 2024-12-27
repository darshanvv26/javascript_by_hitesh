// There are basically only two catogories of division in datatypes in JS

// Primitive datatypes (Similar to call by value)
    // 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
    // If we do any changes to the values of this primitive datatype it creates copy of the value and maintains the intial original value

let Str = "String"
let Num = 17
const score = 16.9

let isLogged = true
const outsideTemp = null 
let email;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // Result of this is false because Symbol datatype identifies itself as unique

const bigNumber = 12345676543234567654325n

// Non primitive datatypes (Similar to call by reference)
    // Types: Array, Objects, Functions
    // Here in non primitive datatypes if we insist any changes to the values it we directly affect the originally stored value because we will directly go to the reference of the value and make changes

const heros = ["Shakthiman", "Naagraj", "Doga"]

const myObj = {
    name: "Darshan",
    age: 21
}

const myFunction = function(){
    console.log("Hello world...!");
}

console.log(typeof Str)