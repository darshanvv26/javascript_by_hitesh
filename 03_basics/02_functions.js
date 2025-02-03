function calculateCartPrice(var2, var1, ...num){
    return num
}

// console.log(calculateCartPrice(200, 300, 800, 1000));

let user = {
    name: "Darshan V V",
    email: "darshanvv26@gmail.com",
    price: 2100
}

function handelObj(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}

// handelObj(user)

// handelObj({
//     name: "Rahul T N",
//     email: "rahyltn07@gmail.com",
//     price: 2200
// })

const myArray = [200, 300, 700, 900]

function returnArrayElement(getArray){
    return getArray[1]
}

console.log(returnArrayElement(myArray));

console.log(returnArrayElement([100, 200, 500, 300]));
