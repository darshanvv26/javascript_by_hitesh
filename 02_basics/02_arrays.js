const marvel_heros = ["Ironman", "Thor", "Spiderman"]
const dc_heros = ["Superman", "Batman", "Flash"]

// marvel_heros.push(dc_heros) // This pushes the entire array as single element inside the other array

// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros) // concat(dc_heros) this will add array elements to existing array as single elements

// console.log(allHeros)

const indianHeros = new Array("Shakthiman", "Naagraj")

const allMyHeros = [...marvel_heros, ...dc_heros, ...indianHeros] // This method is call spreading of arrays into single array

// console.log(allMyHeros);

const anotherArray = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10]], 11]

const newAnotherArray = anotherArray.flat(2) // flat(Infinity) combines/spreads all subarrays into single array

// console.log(newAnotherArray);

console.log(Array.isArray("Darshan")) // isArray("something") checks weather specified element is array or not
console.log(Array.from("Darshan")) // from("somthing") converts specified into array of elements
console.log(Array.from({name: "Darshan", age: 21})); // intersting

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3, newAnotherArray)); // of"(s1, s2,...) combines different elements and puts into single array