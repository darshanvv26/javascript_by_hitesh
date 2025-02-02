let myName = "darshan"
let repoCount = 17

// console.log(myName + " " +repoCount + " " + "ABD"); // we need to avoid this type of string concatation because it will be bit confusing insted to improve code readability we can use string interpollation method


// console.log(`My name is ${myName} and I have ${repoCount} repos in darshanvv/javascript_by_hitesh`); //`` we need to use, This is what is called as string interpollation

const nName = new String("Darshan")

// console.log(nName[3]); // String index position value will be displayed


// console.log(nName.__proto__); // Shows string is object type
// console.log(nName.length);
// console.log(nName.toUpperCase());

// console.log(nName.charAt(2));
// console.log(nName.indexOf('e'));

let newStr = nName.substring(0, 4) // Method to display part of string
// console.log(newStr); 

let anotherStr = nName.slice(-1, 7) 
// console.log(anotherStr);

let newStrOne = "   darshan  abd"
// console.log(newStrOne);
// console.log(newStrOne.trimStart())
// console.log(newStrOne.trimEnd())
// console.log(newStrOne.trim()) // trim() used to remove spaces from start and end of the string

const url = "https://darshanvv.com%17@O9solutions"

console.log(url.replace('%17@', '__')) // replace() is used to replace part of string search value by specified value that fits the same

console.log(url.includes("hs")); // includes() is used to check wether the part of string value is present in the specifed string

console.log(newStrOne.trim().split(" ", 1)); // split() is used to convert string into array by specifing the seperator and limit

console.log(nName.concat(newStrOne)); // str1.concat(str2) concats two strings(str1 and str2)