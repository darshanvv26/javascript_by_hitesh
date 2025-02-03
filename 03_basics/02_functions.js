function calculateCartPrice(var2, var1, ...num){
    return num
}  //this function helps to pass multiple parameters and returns multiple parameters in array format using (...num)syntax

// console.log(calculateCartPrice(200, 300, 800, 1000));

let user = {
    name: "Darshan V V",
    email: "darshanvv26@gmail.com",
    price: 2100
}  //object declaration

function handelObj(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}  //passing object inside function

// handelObj(user)

// handelObj({
//     name: "Rahul T N",
//     email: "rahyltn07@gmail.com",
//     price: 2200
// })

const myArray = [200, 300, 700, 900]

function returnArrayElement(getArray){
    return getArray[1]
}  //passing array inside function

console.log(returnArrayElement(myArray));

console.log(returnArrayElement([100, 200, 500, 300]));
