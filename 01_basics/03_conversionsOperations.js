let score = false

console.log(typeof score)
console.log(typeof(score)) // both are same methods to check type

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// Conversion form differet type to Number
// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1; false => 0

let isLoggedIn = "a"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// Converting different datatypes into Boolean
// 1 => true; 0 => false
// "" = false; "abc" = true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// Conversion from number to string