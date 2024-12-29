const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString()); // toString() converts number into string type
// console.log(balance.toFixed(1)); // toFixed(1) is used to fix the number of digits after the decimal point

const otherNumber = 123.456
// console.log(otherNumber.toPrecision(3)); // toPrecision(3) is used to round of the first mentioned number of digits

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN')); // toLocaleString() is used to seperate and increase readability of the long number

// ++++++++++++++ Maths +++++++++++++++++++++++++++++++++

// console.log(Math); // Math is a object type with many inbuilt properties
// console.log(Math.abs(-4)); // abs(-4) gives the absoulte value of the number excluding the negative sign if exists
// console.log(Math.round(4.4)); // round(4.4) rounds the value
// console.log(Math.ceil(4.1)); // ceil(4.1) rounds the number to next number
// console.log(Math.floor(4.9)) // floor(4.9) rounds the number to previous number
// console.log(Math.acos(1)); // acos(1) returns the cosine inverse value

// console.log(Math.random()); // random() generates random number between 0 and 1 with some decimal values
// console.log(Math.random() * 10);
// console.log(Math.floor(Math.random() * 10))
console.log(Math.floor(Math.random() * 10) + 1); // to generate random number between 1 and 10

min = 10
max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // to generate random number between specified range 10 and 20