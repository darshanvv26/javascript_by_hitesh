// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["Shakthiman", "Naagraj"]

let myArr2 = new Array(1, 2, 3)

// console.log(myArr2[2]) // Arrays create "shallow copies"
// console.log(typeof myArr); // Array is a object type

// Array methods

// myArr.push(6) // push(6) adds specified element to end of array
// myArr.push(7)
// myArr.pop() // pop() removes last element from array
// console.log(myArr);

// myArr.unshift(9) // unshift(9) is a method used to add specified element at the start of the array. It is not an optimized method to do so
// myArr.shift() // shift() is used to remove element from start of the array
// console.log(myArr);

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(3));

// console.log(myArr);

// const newArr = myArr.join() // join() converts array elements into string 
// console.log(typeof newArr) // type of joined method array is string
// console.log(newArr);

// slice, splice

let arr = new Array(0, 1, 2, 3, 4, 5, 6, 7)

console.log("Before slice method", arr);
const myn1 = arr.slice(1, 3) // slice(1, 3) this method creats the copy of the array and parts the array into specified range and last element is exclusive original array is not affected
console.log(myn1);
console.log("After slice method", arr);

console.log("Before splice method", arr);
const myn2 = arr.splice(1, 3) // splice(1, 3) this method divides the array inti specified range inclusive of last element of the range specified and this affects the original array also and the original array gets parted
console.log(myn2);
console.log("After splice method", arr);