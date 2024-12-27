// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);

console.log("2" > 0); // Comparision of different datatype

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // Problem occurs when we compare different datatypes

console.log(undefined > 2);
console.log(undefined == 2);
console.log(undefined <= 2); // We need to avoid comparision of different datatypes it creates confusion

console.log("2" === 2); // === This is strict conversion